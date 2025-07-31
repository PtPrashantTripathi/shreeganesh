import { PakshaDetails } from "src/backend/Paksha";
import { MOD360 } from "src/backend/utils";

// Tithi Details
export const TithiDetails: Record<TithiEnglishType, TithiDetail> = {
    Pratipada: {
        num: 1,
        name: {
            english: "Pratipada",
            hindi: "प्रथमा",
        },
    },
    Dvitiya: {
        num: 2,
        name: { english: "Dvitiya", hindi: "द्वितीया" },
    },
    Tritiya: {
        num: 3,
        name: { english: "Tritiya", hindi: "तृतिया" },
    },
    Chaturthi: {
        num: 4,
        name: {
            english: "Chaturthi",
            hindi: "चतुर्थी",
        },
    },
    Panchami: {
        num: 5,
        name: { english: "Panchami", hindi: "पंचमी" },
    },
    Shashthi: {
        num: 6,
        name: { english: "Shashthi", hindi: "षष्ठी" },
    },
    Saptami: {
        num: 7,
        name: { english: "Saptami", hindi: "सप्तमी" },
    },
    Ashtami: {
        num: 8,
        name: { english: "Ashtami", hindi: "अष्टमी" },
    },
    Navami: {
        num: 9,
        name: { english: "Navami", hindi: "नवमीं" },
    },
    Dasami: {
        num: 10,
        name: { english: "Dasami", hindi: "दशमी" },
    },
    Ekadasi: {
        num: 11,
        name: { english: "Ekadasi", hindi: "एकादशी" },
    },
    Dwadasi: {
        num: 12,
        name: { english: "Dwadasi", hindi: "व्दादशी" },
    },
    Trayodasi: {
        num: 13,
        name: {
            english: "Trayodasi",
            hindi: "त्रयोदशी",
        },
    },
    Chaturdasi: {
        num: 14,
        name: {
            english: "Chaturdasi",
            hindi: "चर्तुदशी",
        },
    },
    Amavasya: {
        num: 15,
        name: {
            english: "Amavasya",
            hindi: "अमावस्या",
        },
    },
    Purnima: {
        num: 30,
        name: { english: "Purnima", hindi: "पूर्णिमा" },
    },
};

export const TOTAL_TITHIS = 30;
export const DEG_PER_TITHI = 360 / TOTAL_TITHIS; // TBE = 12

// Main Calculation Logic
export function getTithi(
    sun_lon: number,
    moon_lon: number,
    purnimanta: boolean = true
): Tithi {
    const lunarphase = MOD360(moon_lon - sun_lon);

    const tithiNum = (Math.floor(lunarphase / DEG_PER_TITHI) % 30) + 1;

    // Get base tithi (1-15 cycle)
    let details = Object.values(TithiDetails).find(
        t => t.num === ((tithiNum - 1) % 15) + 1
    );

    if (!details) {
        throw new Error(`No Tithi found for degree difference ${lunarphase}`);
    }

    if (purnimanta) {
        if (tithiNum === 30) details = structuredClone(TithiDetails.Purnima);
    } else {
        if (tithiNum === 15) {
            details = structuredClone(TithiDetails.Purnima);
            details.num = 15;
        }
        if (tithiNum === 30) {
            details = structuredClone(TithiDetails.Amavasya);
            details.num = 30;
        }
    }

    const range = {
        min: (tithiNum - 1) * DEG_PER_TITHI,
        max: tithiNum * DEG_PER_TITHI,
    };

    return {
        ...details,
        lunarphase,
        pakshaname:
            tithiNum <= 15 ? PakshaDetails.Krishna : PakshaDetails.Shukla,
        range,
        degree: lunarphase,
    };
}
