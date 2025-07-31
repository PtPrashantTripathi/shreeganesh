/**
 * Validates if the given page is one of the allowed page types.
 *
 * @param {string} page - The page value to validate.
 * @returns {ValidPageType} - Returns the valid page type or null if invalid.
 */
export const validPageTypes: ValidPageType[] = [
    "Home",
    "KundliForm",
    "KundliResult",
    "Panchang",
];
export function parseValidPageName(input: string): ValidPageType {
    const page = input as ValidPageType;
    if (validPageTypes.includes(page)) {
        return page;
    }
    throw new Error(`Invalid Page name: "${page}"`);
}
