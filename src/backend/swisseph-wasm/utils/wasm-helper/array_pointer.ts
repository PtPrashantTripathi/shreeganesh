import {
    type FixedLengthArray,
    toFixedLengthArray,
} from "src/backend/swisseph-wasm/utils/fixed-length-array";
import { NUMBER_TYPE_SIZES } from "src/backend/swisseph-wasm/utils/wasm-helper/number_pointer";
import type { WASMModule } from "src/backend/swisseph-wasm/wasm";

/** C-style Number Pointer types */
export type C_NumberPointerType = Emscripten.CIntType | Emscripten.CFloatType;

/** A class representing a typed numeric array in WASM memory. */
export class ArrayPointer {
    /** Pointer to the start of the allocated memory in WASM. */
    public ptr: number;

    /** Data type of the elements stored (e.g., "i32", "double"). */
    public type: C_NumberPointerType;

    /** Number of elements in the array. */
    public length: number;

    /** The WebAssembly module instance. */
    public wasm: WASMModule;

    /**
     * Creates a new ArrayPointer instance.
     *
     * @param wasm - Swisseph Emscripten Module instance
     * @param ptr - Optional raw pointer to pre-allocated memory. If
     *   `undefined`, memory is allocated.
     * @param type - The type of each numeric element in the array.
     * @param length - Number of elements in the array.
     */
    constructor(
        wasm: WASMModule,
        ptr: number | undefined,
        type: C_NumberPointerType,
        length: number
    ) {
        this.wasm = wasm;
        const size = NUMBER_TYPE_SIZES[type];
        this.ptr = ptr ?? wasm._malloc(length * size);
        this.type = type;
        this.length = length;
    }

    /**
     * Creates a new ArrayPointer from a JavaScript number array.
     *
     * @param wasm - Swisseph Emscripten Module instance
     * @param type - Type of each numeric element (e.g., "double", "i32").
     * @param input - JavaScript array of numbers to write to WASM memory.
     * @returns A new instance of ArrayPointer.
     */
    static from(
        wasm: WASMModule,
        type: C_NumberPointerType,
        input: number[]
    ): ArrayPointer {
        const size = NUMBER_TYPE_SIZES[type];
        const ptr = wasm._malloc(input.length * size);
        input.forEach((val, i) => wasm.setValue(ptr + i * size, val, type));
        return new ArrayPointer(wasm, ptr, type, input.length);
    }

    /**
     * Allocates an empty buffer for a numeric array.
     *
     * @param wasm - Swisseph Emscripten Module instance
     * @param type - Type of numeric element stored.
     * @param length - Number of elements to allocate.
     * @returns A new instance of ArrayPointer.
     */
    static alloc(
        wasm: WASMModule,
        type: C_NumberPointerType,
        length: number
    ): ArrayPointer {
        return new ArrayPointer(wasm, undefined, type, length);
    }

    /**
     * Writes a numeric value at a given index in WASM memory.
     *
     * @param loc - Index to write to.
     * @param val - Numeric value to write.
     * @throws If index is out of bounds.
     */
    add(loc: number, val: number): void {
        if (loc >= 0 && loc < this.length) {
            this.wasm.setValue(
                this.ptr + loc * NUMBER_TYPE_SIZES[this.type],
                val,
                this.type
            );
        } else {
            throw new Error("Invalid index access in WASM memory.");
        }
    }

    /**
     * Reads the entire numeric array from WASM memory and trims or pads it to
     * the specified fixed length.
     *
     * @param fixed_length - Desired fixed length
     * @returns A fixed-length array
     */
    read<N extends number>(fixed_length: N): FixedLengthArray<N, number> {
        const size = NUMBER_TYPE_SIZES[this.type];

        // Read up to this.length elements from WASM memory
        const array: Array<number | null> = Array.from(
            { length: this.length },
            (_, i) => this.wasm.getValue(this.ptr + i * size, this.type)
        );

        return toFixedLengthArray(array, fixed_length);
    }

    /**
     * Reads a fixed-length numeric array from WASM memory, then frees the
     * underlying memory.
     *
     * Pads or trims the array to match the specified fixed length.
     *
     * @param fixed_length - Desired fixed length of the output array
     * @returns A fixed-length JavaScript array containing the values read
     *   before memory was freed
     */
    readAndFree<N extends number>(
        fixed_length: N
    ): FixedLengthArray<N, number> {
        const val = this.read(fixed_length);
        this.free();
        return val;
    }

    /** Frees the WASM memory allocated for this array. */
    free(): void {
        if (this.ptr) {
            this.wasm._free(this.ptr);
            this.ptr = 0;
        }
    }
}
