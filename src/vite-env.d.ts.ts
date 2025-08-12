/// <reference types="vite/client" />

/** Extend the ObjectConstructor type */
interface ObjectConstructor {
    /**
     * Returns a strongly typed array of key–value pairs from the given object.
     *
     * This is a type-safe version of `Object.entries` that preserves the
     * original key and value types of the input object.
     *
     * @example
     *     const person = { name: "Alice", age: 30 };
     *     const entries = Object.entries(person); // entries: ["name", string] | ["age", number]
     *
     * @template T - The type of the input object
     * @param obj - The object to extract key–value pairs from
     * @returns An array of `[key, value]` tuples, with keys and values typed
     *   according to the input object.
     */
    entries<T extends object>(obj: T): [keyof T, T[keyof T]][];
}
