import { NORMALIZE12 } from "src/backend/utils";

export const HouseDetails: HouseDetail[] = [
    {
        name: {
            english: "1st House",

            hindi: "तनु भाव",
        },
        num: 1,
        categories: ["Kendra", "Trikona"],
        purushartha: "Dharma",
        karak: ["Sun"],
    },
    {
        name: {
            english: "2nd House",

            hindi: "धन भाव",
        },
        num: 2,
        categories: ["Maraka", "Panaphara"],
        purushartha: "Artha",
        karak: ["Jupiter"],
    },
    {
        name: {
            english: "3rd House",

            hindi: "सहज भाव",
        },
        num: 3,
        categories: ["Upachaya", "Apoklima"],
        purushartha: "Kama",
        karak: ["Mars"],
    },
    {
        name: {
            english: "4th House",

            hindi: "सुख भाव",
        },
        num: 4,
        categories: ["Kendra"],
        purushartha: "Moksha",
        karak: ["Moon", "Mercury"],
    },
    {
        name: {
            english: "5th House",

            hindi: "पुत्र भाव",
        },
        num: 5,
        categories: ["Trikona", "Panaphara"],
        purushartha: "Dharma",
        karak: ["Jupiter"],
    },
    {
        name: {
            english: "6th House",

            hindi: "रिपु भाव",
        },
        num: 6,
        categories: ["Dusthana", "Upachaya", "Apoklima"],
        purushartha: "Artha",
        karak: ["Mars", "Saturn"],
    },
    {
        name: {
            english: "7th House",

            hindi: "जाया भाव",
        },
        num: 7,
        categories: ["Kendra", "Maraka"],
        purushartha: "Kama",
        karak: ["Venus"],
    },
    {
        name: {
            english: "8th House",

            hindi: "आयु भाव",
        },
        num: 8,
        categories: ["Dusthana", "Panaphara"],
        purushartha: "Moksha",
        karak: ["Saturn"],
    },
    {
        name: {
            english: "9th House",

            hindi: "धर्म भाव",
        },
        num: 9,
        categories: ["Trikona", "Apoklima"],
        purushartha: "Dharma",
        karak: ["Jupiter", "Sun"],
    },
    {
        name: {
            english: "10th House",

            hindi: "कर्म भाव",
        },
        num: 10,
        categories: ["Kendra", "Upachaya"],
        purushartha: "Artha",
        karak: ["Sun", "Mercury", "Jupiter", "Saturn"],
    },
    {
        name: {
            english: "11st House",

            hindi: "लाभ भाव",
        },
        num: 11,
        categories: ["Upachaya", "Panaphara"],
        purushartha: "Kama",
        karak: ["Jupiter"],
    },
    {
        name: {
            english: "12nd House",

            hindi: "व्यय भाव",
        },
        num: 12,
        categories: ["Dusthana", "Apoklima"],
        purushartha: "Moksha",
        karak: ["Saturn", "Venus"],
    },
];

/**
 * Calculates the House based on a given zodiac and .
 *
 * @param planet_rasi_num - The Planet Rasi num.
 * @param ascendant_rasi_num - The Ascendant Rasi num.
 * @returns A full House object containing metadata.
 */
export function getHouse(
    planet_rasi_num: number,
    ascendant_rasi_num: number
): HouseDetail {
    // Determine House number (1-based)
    const houseNumber = NORMALIZE12(planet_rasi_num + 1 - ascendant_rasi_num);

    // Find matching House details
    const details = Object.values(HouseDetails).find(
        item => item.num === houseNumber
    );

    if (!details) {
        throw new Error(`No House found for ${houseNumber}`);
    }

    return details;
}
