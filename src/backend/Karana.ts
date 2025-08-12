import type {
    Karana,
    KaranaDetail,
    KaranaEn,
    RangeType,
} from "src/backend/types";
import { MOD360 } from "src/backend/utils";

export const KaranaDetails: Record<KaranaEn, KaranaDetail> = {
    Bava: {
        name: { english: "Bava", hindi: "बव" },
        num: 1,
    },
    Balava: {
        name: { english: "Balava", hindi: "बालव" },
        num: 2,
    },
    Kaulava: {
        name: { english: "Kaulava", hindi: "कौलव" },
        num: 3,
    },
    Taitila: {
        name: { english: "Taitila", hindi: "तैतिल" },
        num: 4,
    },
    Gara: {
        name: { english: "Gara", hindi: "गर" },
        num: 5,
    },
    Vanij: {
        name: { english: "Vanij", hindi: "वणिज" },
        num: 6,
    },
    Vishti: {
        name: { english: "Vishti", hindi: "विष्टि" },
        num: 7,
    },
    Sakuni: {
        name: { english: "Sakuni", hindi: "शकुनि" },
        num: 57,
    },
    Catuspada: {
        name: {
            english: "Catuspada",
            hindi: "चतुष्पाद",
        },
        num: 58,
    },
    Naga: {
        name: { english: "Naga", hindi: "नाग" },
        num: 59,
    },
    Kimstughna: {
        name: {
            english: "Kimstughna",
            hindi: "किस्तुध्न",
        },
        num: 60,
    },
};

export const TOTAL_KARANA_SIGNS = 60; // with repeating logic

// Each karana spans equal degrees of the 360° zodiac
export const DEG_PER_KARANA = 360 / TOTAL_KARANA_SIGNS;

/**
 * Calculates the Karana (lunar mansion) based on a given zodiac degree.
 *
 * @param sun_lon - The sun longitude (0° to 360°).
 * @param moon_lon - The moon longitude (0° to 360°).
 * @returns A full Karana object containing metadata and positional info.
 */
export function getKarana(sun_lon: number, moon_lon: number): Karana {
    // Normalize degree within 0 to 360
    const degree = MOD360(moon_lon - sun_lon);

    // Determine Karana number (1-based)
    const num = Math.floor(degree / DEG_PER_KARANA) + 1;

    // Find matching Karana details
    const details = Object.values(KaranaDetails).find(
        item => item.num === (num >= 57 ? num : ((num - 1) % 7) + 1)
    );

    if (!details) {
        throw new Error(`No Karana found for degree ${degree}`);
    }

    // Calculate the range for this Karana
    const range: RangeType = {
        min: (num - 1) * DEG_PER_KARANA,
        max: num * DEG_PER_KARANA,
    };

    return {
        ...details,
        num,
        range,
        degree,
    };
}
