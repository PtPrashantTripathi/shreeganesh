import type { RangeType, Yoga, YogaDetail, YogaEn } from "src/backend/types";
import { MOD360 } from "src/backend/utils";

// Dictionary of Yoga details
export const YogaDetails: Record<YogaEn, YogaDetail> = {
    Vishkambha: {
        yoga_num: 1,
        name: {
            english: "Vishkambha",
            hindi: "विष्कम्भ",
        },
    },
    Priti: {
        yoga_num: 2,
        name: { english: "Priti", hindi: "प्रीति" },
    },
    Ayushman: {
        yoga_num: 3,
        name: {
            english: "Ayushman",
            hindi: "आयुष्मान",
        },
    },
    Saubhagya: {
        yoga_num: 4,
        name: {
            english: "Saubhagya",
            hindi: "सौभाग्य",
        },
    },
    Shobhana: {
        yoga_num: 5,
        name: { english: "Shobhana", hindi: "शोभन" },
    },
    Atiganda: {
        yoga_num: 6,
        name: { english: "Atiganda", hindi: "अतिगण्ड" },
    },
    Sukarman: {
        yoga_num: 7,
        name: { english: "Sukarman", hindi: "सुकर्मा" },
    },
    Dhriti: {
        yoga_num: 8,
        name: { english: "Dhriti", hindi: "धृति" },
    },
    Shula: {
        yoga_num: 9,
        name: { english: "Shula", hindi: "शूल" },
    },
    Ganda: {
        yoga_num: 10,
        name: { english: "Ganda", hindi: "गंड" },
    },
    Vriddhi: {
        yoga_num: 11,
        name: { english: "Vriddhi", hindi: "वृद्धि" },
    },
    Dhruva: {
        yoga_num: 12,
        name: { english: "Dhruva", hindi: "ध्रुव" },
    },
    Vyaghata: {
        yoga_num: 13,
        name: { english: "Vyaghata", hindi: "व्याघात" },
    },
    Harshana: {
        yoga_num: 14,
        name: { english: "Harshana", hindi: "हर्षण" },
    },
    Vajra: {
        yoga_num: 15,
        name: { english: "Vajra", hindi: "वज्र" },
    },
    Siddhi: {
        yoga_num: 16,
        name: { english: "Siddhi", hindi: "सिद्धि" },
    },
    Vyatipata: {
        yoga_num: 17,
        name: {
            english: "Vyatipata",
            hindi: "व्यतिपात",
        },
    },
    Variyana: {
        yoga_num: 18,
        name: { english: "Variyana", hindi: "वरीयान" },
    },
    Parigha: {
        yoga_num: 19,
        name: { english: "Parigha", hindi: "परिघ" },
    },
    Shiva: {
        yoga_num: 20,
        name: { english: "Shiva", hindi: "शिव" },
    },
    Siddha: {
        yoga_num: 21,
        name: { english: "Siddha", hindi: "सिद्ध" },
    },
    Sadhya: {
        yoga_num: 22,
        name: { english: "Sadhya", hindi: "सन्ध्या" },
    },
    Shubha: {
        yoga_num: 23,
        name: { english: "Shubha", hindi: "शुभ" },
    },
    Shukla: {
        yoga_num: 24,
        name: { english: "Shukla", hindi: "शुक्ल" },
    },
    Brahma: {
        yoga_num: 25,
        name: { english: "Brahma", hindi: "ब्रह्म" },
    },
    Indra: {
        yoga_num: 26,
        name: { english: "Indra", hindi: "इंद्र" },
    },
    Vaidhriti: {
        yoga_num: 27,
        name: {
            english: "Vaidhriti",
            hindi: "वैधृति",
        },
    },
};

export const TOTAL_YOGA_SIGNS = 27;

// Each yoga spans equal degrees of the 360° zodiac
export const DEG_PER_YOGA = 360 / TOTAL_YOGA_SIGNS;

/**
 * Calculates the Yoga (lunar mansion) based on a given zodiac degree.
 *
 * @param sun_lon - The sun longitude (0° to 360°).
 * @param moon_lon - The moon longitude (0° to 360°).
 * @returns A full Yoga object containing metadata and positional info.
 */
export function getYoga(sun_lon: number, moon_lon: number): Yoga {
    // Normalize degree within 0 to 360
    const degree = MOD360(moon_lon + sun_lon);

    // Determine Yoga number (1-based)
    const yogaNum = Math.floor(degree / DEG_PER_YOGA) + 1;

    // Find matching Yoga details
    const details = structuredClone(
        Object.values(YogaDetails).find(
            (item: YogaDetail) => item.yoga_num === yogaNum
        )
    ) as YogaDetail;

    if (!details) {
        throw new Error(`No Yoga found for degree ${degree}`);
    }

    // Calculate the range for this Yoga
    const range: RangeType = {
        min: (yogaNum - 1) * DEG_PER_YOGA,
        max: yogaNum * DEG_PER_YOGA,
    };

    return {
        ...details,
        range,
        degree,
    };
}
