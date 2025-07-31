import type { WASMModule } from "src/backend/swisseph-wasm/wasm";

/** Size (in bytes) for each WASM number type. */
export const NUMBER_TYPE_SIZES: Record<C_NumberPointerType, number> = {
    i8: 1,
    i16: 2,
    i32: 4,
    i64: 8,
    float: 4,
    double: 8,
};

/** Class representing a single number allocated in WASM memory. */
export class NumberPointer {
    /** Pointer to the start of the allocated memory in WASM. */
    public ptr: number;

    /** Data type of the elements stored (e.g., "i32", "double"). */
    public type: C_NumberPointerType;

    /** The WebAssembly module instance. */
    public wasm: WASMModule;

    /**
     * Creates a new NumberPointer. If no pointer is given, allocates memory for
     * one number.
     *
     * @param wasm - Swisseph Emscripten Module instance
     * @param ptr - Optional raw memory address. If not provided, memory is
     *   allocated.
     * @param type - The numeric type (e.g., `"i32"`, `"double"`) stored in
     *   WASM.
     */
    constructor(
        wasm: WASMModule,
        ptr: number | undefined,
        type: C_NumberPointerType
    ) {
        const size = NUMBER_TYPE_SIZES[type];
        this.wasm = wasm;
        this.ptr = ptr ?? this.wasm._malloc(size);
        this.type = type;
    }

    /**
     * Creates a NumberPointer from a given JavaScript number.
     *
     * @param wasm - Swisseph Emscripten Module instance
     * @param type - The numeric type (e.g., `"i32"`, `"double"`).
     * @param input - The JavaScript number to write into WASM memory.
     * @returns A new NumberPointer with the value stored.
     */
    static from(
        wasm: WASMModule,
        type: C_NumberPointerType,
        input: number
    ): NumberPointer {
        const size = NUMBER_TYPE_SIZES[type];
        const ptr = wasm._malloc(size);
        wasm.setValue(ptr, input, type);
        return new NumberPointer(wasm, ptr, type);
    }

    /**
     * Allocates an uninitialized NumberPointer for the given type.
     *
     * @param wasm - Swisseph Emscripten Module instance
     * @param type - The numeric type (e.g., `"i32"`, `"float"`).
     * @returns A new NumberPointer with allocated memory.
     */
    static alloc(wasm: WASMModule, type: C_NumberPointerType): NumberPointer {
        return new NumberPointer(wasm, undefined, type);
    }

    /**
     * Reads the numeric value from WASM memory.
     *
     * @returns The JavaScript number read from memory.
     */
    read(): number {
        return this.wasm.getValue(this.ptr, this.type);
    }

    /**
     * Reads the value from memory and immediately frees the memory block.
     *
     * @returns The numeric value.
     */
    readAndFree(): number {
        const val = this.read();
        this.free();
        return val;
    }

    /** Frees the WASM memory allocated for this number. */
    free(): void {
        if (this.ptr) {
            this.wasm._free(this.ptr);
            this.ptr = 0;
        }
    }
}
