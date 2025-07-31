/**
 * Converts a JavaScript boolean to a C-style boolean integer (0 or 1).
 *
 * @param value - The JavaScript boolean to convert
 * @returns 1 (true) if `value` is true, otherwise 0 (false)
 */
export function toBooleanType(value: boolean): C_BoolType {
    return value ? 1 : 0;
}
