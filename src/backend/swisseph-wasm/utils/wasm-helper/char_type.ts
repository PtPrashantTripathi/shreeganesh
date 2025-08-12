// C-style char type (8-bit number)
export type C_CharType = number;

/**
 * Converts a single character string to a C-style char type (ASCII code).
 *
 * @param value - A string with exactly one character
 * @returns The ASCII code of the character
 * @throws Error if input is not exactly one character
 */
export function toCharType(value: string): C_CharType {
    const num = value.trim().toLowerCase().charCodeAt(0);
    if (num > 255) {
        throw new Error("Value must be a single ASCII character (0-255)");
    }
    return num;
}
