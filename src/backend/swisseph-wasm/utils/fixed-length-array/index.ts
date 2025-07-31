/**
 * Creates a fixed-length array of a specific type, trimming or padding with a
 * default value as needed.
 *
 * @example
 *     const vec3 = toFixedLengthArray([1], 3, 0); // [1, 0, 0]
 *
 * @param input - The input array (can be shorter or longer than the target
 *   length).
 * @param fixedLength - The target length of the output array.
 * @param defaultValue - The value to pad with if the input array is too short.
 * @returns A new array with the specified fixed length.
 */
export function toFixedLengthArray<N extends number, T>(
    input: T[],
    fixedLength: N,
    defaultValue: T
): FixedLengthArray<N, T> {
    const padded: T[] = input.slice(0, fixedLength).map(v => v as T);

    while (padded.length < fixedLength) {
        padded.push(defaultValue);
    }

    return padded as FixedLengthArray<N, T>;
}
