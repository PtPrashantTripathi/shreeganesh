// C-style Boolean types
export type C_TRUE = 1;
export type C_FALSE = 0;
export type C_BoolType = C_TRUE | C_FALSE;

/**
 * Converts a JavaScript boolean to a C-style boolean integer (0 or 1).
 *
 * @param value - The JavaScript boolean to convert
 * @returns 1 (true) if `value` is true, otherwise 0 (false)
 */
export function toBooleanType(value: boolean): C_BoolType {
    return value ? 1 : 0;
}
