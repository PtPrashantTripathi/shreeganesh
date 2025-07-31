/**
 * Parses and validates a date string in YYYY-MM-DD format.
 *
 * @param {string | null} dateStr - A string in "YYYY-MM-DD" format.
 * @returns {DateType | null} An object containing the year, month (1-based),
 *   and day as numbers.
 * @throws Error if the input is not a valid calendar date in the specified
 *   format.
 */
export function parseValidDate(dateStr: string): DateType {
    const match = dateStr
        .trim()
        .match(/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/);
    if (!match) {
        throw new Error(`Invalid date format: "${dateStr}"`);
    }

    const [year, month, day] = match[0].split("-").map(Number);
    const dt = new Date(`${dateStr}T00:00:00`);

    if (
        isNaN(dt.getTime()) ||
        dt.getFullYear() !== year ||
        dt.getMonth() + 1 !== month ||
        dt.getDate() !== day
    ) {
        throw new Error(`Invalid calendar date: "${dateStr}"`);
    }

    return { year, month, day };
}
