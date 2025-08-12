/**
 * Constructs a tuple type (fixed-length array) of length `N`, filled with type
 * `T`.
 *
 * @example
 *     type Vec3 = FixedLengthArray<3, number>; // [number, number, number]
 *
 * @template N - The fixed length of the array.
 * @template T - The type of each element in the array.
 * @template R - Internal accumulator (do not provide manually).
 */
export type FixedLengthArray<
    N extends number,
    T,
    R extends T[] = [],
> = R["length"] extends N ? R : FixedLengthArray<N, T, [...R, T]>;

/**
 * Creates a fixed-length array of a specific type, trimming or padding with a
 * default null value as needed.
 *
 * @example
 *     const vec3 = toFixedLengthArray([1], 3); // [1, 0, 0]
 *
 * @param input - The input array (can be shorter or longer than the target
 *   length).
 * @param fixedLength - The target length of the output array.
 * @returns A new array with the specified fixed length.
 */
export function toFixedLengthArray<N extends number, T>(
    input: T[],
    fixedLength: N
): FixedLengthArray<N, T> {
    const output: T[] = input.slice(0, fixedLength).map(v => v as T);

    while (output.length < fixedLength) {
        output.push(null as T);
    }

    return output as FixedLengthArray<N, T>;
}
