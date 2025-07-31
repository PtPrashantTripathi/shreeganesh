import type { WASMModule } from "src/backend/swisseph-wasm/wasm";

/** Class representing a UTF-8 string allocated in WASM memory. */
export class StringPointer {
    /** Pointer to the start of the allocated memory in WASM. */
    public ptr: number;

    /** Number of character in the String. */
    public length: number;

    /** The WebAssembly module instance. */
    public wasm: WASMModule;

    /**
     * Creates a new StringPointer. If no `ptr` is given, allocates zero-filled
     * memory.
     *
     * @param wasm - Swisseph Emscripten Module instance
     * @param ptr - Optional pointer to an existing WASM memory address.
     * @param length - The number of bytes to allocate or wrap.
     */
    constructor(wasm: WASMModule, ptr: number | undefined, length: number) {
        this.wasm = wasm;
        this.length = length;
        this.ptr = ptr ?? this.wasm._malloc(length);
        if (!ptr) {
            for (let i = 0; i < length; i++) {
                this.wasm.setValue(this.ptr + i, 0, "i8");
            }
        }
    }

    /**
     * Creates a StringPointer from a JavaScript string.
     *
     * @param wasm - Swisseph Emscripten Module instance
     * @param input - The string to encode and store in WASM memory.
     * @returns A new instance of StringPointer.
     */
    static from(
        wasm: WASMModule,
        input: string | null | undefined
    ): StringPointer {
        const str = input ?? "";
        const length = str.length;
        const ptr = wasm._malloc(length + 1); // +1 for null terminator
        wasm.stringToUTF8(str, ptr, length + 1);
        return new StringPointer(wasm, ptr, length + 1);
    }

    /**
     * Allocates an empty buffer for a string of given length.
     *
     * @param wasm - Swisseph Emscripten Module instance
     * @param length - Number of bytes to allocate in WASM memory.
     * @returns A new instance of StringPointer with zero-filled memory.
     */
    static alloc(wasm: WASMModule, length: number): StringPointer {
        return new StringPointer(wasm, undefined, length);
    }

    /**
     * Writes a JavaScript string into the allocated WASM memory buffer.
     *
     * @param input - The string to write.
     * @throws Will throw an error if the input string is too long for the
     *   allocated buffer.
     */
    write(input: string): void {
        if (!this.ptr || input.length + 1 > this.length) {
            throw new Error("String length exceeds buffer size");
        }
        this.wasm.stringToUTF8(input, this.ptr, this.length);
    }

    /**
     * Reads the UTF-8 string from WASM memory.
     *
     * @returns The decoded JavaScript string.
     */
    read(): string {
        return this.wasm.UTF8ToString(this.ptr);
    }

    /**
     * Reads the string from WASM memory and immediately frees the memory block.
     *
     * @returns The decoded JavaScript string.
     */
    readAndFree(): string {
        const val = this.read();
        this.free();
        return val;
    }

    /** Frees the WASM memory allocated for this string. */
    free(): void {
        if (this.ptr) {
            this.wasm._free(this.ptr);
            this.ptr = 0;
        }
    }
}
