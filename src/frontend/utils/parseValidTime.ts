/**
 * Parses and validates a time string in 24-hour HH:MM or HH:MM:SS format.
 *
 * @param {string} time_str - A time string in "HH:MM" or "HH:MM:SS" format.
 * @returns {HMS} An object with hour, minute, and second as numbers.
 * @throws Error if the input string is not a valid 24-hour time.
 */
export function parseValidTime(time_str: string): HMS {
    const match = time_str
        .trim()
        .match(/^([01]\d|2[0-3]):([0-5]\d)(?::([0-5]\d))?$/);
    if (!match) {
        throw new Error(`Invalid time format: "${time_str}"`);
    }

    const [hour, minute, second = 0] = match[0].split(":").map(Number);

    const dt = new Date(`2000-01-01T${time_str}`);

    if (
        isNaN(dt.getTime()) ||
        dt.getHours() !== hour ||
        dt.getMinutes() !== minute ||
        dt.getSeconds() !== second
    ) {
        throw new Error(`Invalid calendar date: "${time_str}"`);
    }

    return {
        hour,
        minute,
        second,
    };
}
