import type { HouseDetail, HouseNumber, RasiNumber } from "src/backend/types";
import { NORMALIZE12 } from "src/backend/utils";

export const HouseDetails: Record<HouseNumber, HouseDetail> = {
    1: {
        num: 1,
        name: {
            english: "1st",
            hindi: "प्रथम",
        },
        categories: ["Kendra", "Trikona"],
        purushartha: "Dharma",
        karak: ["Sun"],
    },
    2: {
        num: 2,
        name: {
            english: "2nd",
            hindi: "द्वितीय",
        },
        categories: ["Maraka", "Panaphara"],
        purushartha: "Artha",
        karak: ["Jupiter"],
    },
    3: {
        num: 3,
        name: {
            english: "3rd",
            hindi: "तृतीय",
        },
        categories: ["Upachaya", "Apoklima"],
        purushartha: "Kama",
        karak: ["Mars"],
    },
    4: {
        num: 4,
        name: {
            english: "4th",
            hindi: "चतुर्थ",
        },
        categories: ["Kendra"],
        purushartha: "Moksha",
        karak: ["Moon", "Mercury"],
    },
    5: {
        num: 5,
        name: {
            english: "5th",
            hindi: "पंचम",
        },
        categories: ["Trikona", "Panaphara"],
        purushartha: "Dharma",
        karak: ["Jupiter"],
    },
    6: {
        num: 6,
        name: {
            english: "6th",
            hindi: "षष्ठ",
        },
        categories: ["Dusthana", "Upachaya", "Apoklima"],
        purushartha: "Artha",
        karak: ["Mars", "Saturn"],
    },
    7: {
        num: 7,
        name: {
            english: "7th",
            hindi: "सप्तम",
        },
        categories: ["Kendra", "Maraka"],
        purushartha: "Kama",
        karak: ["Venus"],
    },
    8: {
        num: 8,
        name: {
            english: "8th",
            hindi: "अष्टम",
        },
        categories: ["Dusthana", "Panaphara"],
        purushartha: "Moksha",
        karak: ["Saturn"],
    },
    9: {
        num: 9,
        name: {
            english: "9th",
            hindi: "नवम",
        },
        categories: ["Trikona", "Apoklima"],
        purushartha: "Dharma",
        karak: ["Jupiter", "Sun"],
    },
    10: {
        num: 10,
        name: {
            english: "10th",
            hindi: "दशम",
        },
        categories: ["Kendra", "Upachaya"],
        purushartha: "Artha",
        karak: ["Sun", "Mercury", "Jupiter", "Saturn"],
    },
    11: {
        num: 11,
        name: {
            english: "11st",
            hindi: "एकादश",
        },
        categories: ["Upachaya", "Panaphara"],
        purushartha: "Kama",
        karak: ["Jupiter"],
    },
    12: {
        num: 12,
        name: {
            english: "12nd",
            hindi: "द्वादश",
        },
        categories: ["Dusthana", "Apoklima"],
        purushartha: "Moksha",
        karak: ["Saturn", "Venus"],
    },
};

/**
 * Calculates the House based on a given zodiac and .
 *
 * @param planet_rasi_num - The Planet Rasi num.
 * @param ascendant_rasi_num - The Ascendant Rasi num.
 * @returns A full House object containing metadata.
 */
export function getHouse(
    planet_rasi_num: RasiNumber,
    ascendant_rasi_num: RasiNumber
): HouseDetail {
    // Determine House number (1-based)
    const houseNumber = NORMALIZE12(planet_rasi_num + 1 - ascendant_rasi_num);

    // Find matching House details
    return HouseDetails[houseNumber];
}
