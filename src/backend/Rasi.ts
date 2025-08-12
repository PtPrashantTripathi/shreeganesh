import type {
    NatureEn,
    Rasi,
    RasiDetail,
    RasiEn,
    RasiNumber,
} from "src/backend/types";
import { MOD360 } from "src/backend/utils";

/** Dictionary of Rasi details */
export const RasiDetails: Record<RasiEn, RasiDetail> = {
    Aries: {
        rasi_num: 1,
        name: { hindi: "मेष", english: "Aries" },
        lord: "Mars",
        element: "Fire",
        gender: "M",
        nature: "Movable",
        symbol: "♈",
        color: "#ff0000",
    },
    Taurus: {
        rasi_num: 2,
        name: { hindi: "वृषभ", english: "Taurus" },
        lord: "Venus",
        element: "Earth",
        gender: "F",
        nature: "Fixed",
        symbol: "♉",
        color: "#00ff00",
    },
    Gemini: {
        rasi_num: 3,
        name: { hindi: "मिथुन", english: "Gemini" },
        lord: "Mercury",
        element: "Air",
        gender: "M",
        nature: "Dual",
        symbol: "♊",
        color: "#ee754f",
    },
    Cancer: {
        rasi_num: 4,
        name: { hindi: "कर्क", english: "Cancer" },
        lord: "Moon",
        element: "Water",
        gender: "F",
        nature: "Movable",
        symbol: "♋",
        color: "#4a6efa",
    },
    Leo: {
        rasi_num: 5,
        name: { hindi: "सिंह", english: "Leo" },
        lord: "Sun",
        element: "Fire",
        gender: "M",
        nature: "Fixed",
        symbol: "♌",
        color: "#ff4c45",
    },
    Virgo: {
        rasi_num: 6,
        name: { hindi: "कन्या", english: "Virgo" },
        lord: "Mercury",
        element: "Earth",
        gender: "F",
        nature: "Dual",
        symbol: "♍",
        color: "#ee754f",
    },
    Libra: {
        rasi_num: 7,
        name: { hindi: "तुला", english: "Libra" },
        lord: "Venus",
        element: "Air",
        gender: "M",
        nature: "Movable",
        symbol: "♎",
        color: "#00ff00",
    },
    Scorpio: {
        rasi_num: 8,
        name: { hindi: "वृश्चिक", english: "Scorpio" },
        lord: "Mars",
        element: "Water",
        gender: "F",
        nature: "Fixed",
        symbol: "♏",
        color: "#ff0000",
    },
    Sagittarius: {
        rasi_num: 9,
        name: { hindi: "धनु", english: "Sagittarius" },
        lord: "Jupiter",
        element: "Fire",
        gender: "M",
        nature: "Dual",
        symbol: "♐",
        color: "#0134ff",
    },
    Capricorn: {
        rasi_num: 10,
        name: { hindi: "मकर", english: "Capricorn" },
        lord: "Saturn",
        element: "Earth",
        gender: "F",
        nature: "Movable",
        symbol: "♑",
        color: "#964B00",
    },
    Aquarius: {
        rasi_num: 11,
        name: { hindi: "कुंभ", english: "Aquarius" },
        lord: "Saturn",
        element: "Air",
        gender: "M",
        nature: "Fixed",
        symbol: "♒",
        color: "#964B00",
    },
    Pisces: {
        rasi_num: 12,
        name: { hindi: "मीन", english: "Pisces" },
        lord: "Jupiter",
        element: "Water",
        gender: "F",
        nature: "Dual",
        symbol: "♓",
        color: "#0134ff",
    },
};

/** Constant for total number of Rasi signs */
export const TOTAL_RASI_SIGNS: RasiNumber = 12;

/** Each Rasi spans 30° (360° / 12) */
export const DEG_PER_RASI = 360 / TOTAL_RASI_SIGNS;

/**
 * Calculates the Rasi (lunar mansion) based on a given zodiac degree.
 *
 * @param degree - The ecliptic longitude (0° to 360°).
 * @returns A Rasi Name.
 */
export function getRasi(degree: number): Rasi {
    // Normalize degree within 0 to 360
    const deg = MOD360(degree);
    // Determine Rasi index
    const index = Math.floor(MOD360(deg) / DEG_PER_RASI);

    // Find matching Rasi details
    const details = Object.values(RasiDetails).find(
        item => item.rasi_num === index + 1
    );

    if (!details) {
        throw new Error(`No Rasi found for degree ${degree}`);
    }

    // TODO neeed tpo check
    details.nature = ["Movable", "Fixed", "Dual"][
        details.rasi_num % 3
    ] as NatureEn;

    // Find matching Rasi details
    return {
        ...details,
        degree: deg % DEG_PER_RASI,
        // Calculate the range for this Rasi
        range: {
            min: index * DEG_PER_RASI,
            max: (index + 1) * DEG_PER_RASI,
        },
    };
}
