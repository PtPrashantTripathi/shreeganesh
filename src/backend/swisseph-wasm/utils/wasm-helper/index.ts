/**
 * # wasm-helper
 *
 * Utilities to manage typed memory operations in WebAssembly modules
 * (Emscripten-generated), including numeric arrays, strings, booleans, and
 * characters.
 *
 * ## Features
 *
 * - Type-safe interaction with WASM memory
 * - Easy memory allocation and deallocation
 * - Fixed-length numeric array helpers
 * - Works with Emscripten-generated modules
 */
import { ArrayPointer } from "./array_pointer";
import { toBooleanType } from "./boolean_type";
import { toCharType } from "./char_type";
import { NumberPointer } from "./number_pointer";
import { StringPointer } from "./string_pointer";

export {
    ArrayPointer,
    NumberPointer,
    StringPointer,
    toBooleanType,
    toCharType,
};
