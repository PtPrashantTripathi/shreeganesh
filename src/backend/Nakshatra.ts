import type {
    Nakshatra,
    NakshatraDetail,
    NakshatraEn,
    NakshatraNumber,
} from "src/backend/types";
import { MOD360 } from "src/backend/utils";

/** Dictionary of Nakshatra details */
export const NakshatraDetails: Record<NakshatraEn, NakshatraDetail> = {
    Aswini: {
        nakshatra_num: 1,
        lord: "Ketu",
        name: {
            hindi: "अश्विनी",
            english: "Aswini",
        },
    },
    Bharani: {
        nakshatra_num: 2,
        lord: "Venus",
        name: { hindi: "भरणी", english: "Bharani" },
    },
    Krittika: {
        nakshatra_num: 3,
        lord: "Sun",
        name: { hindi: "कृतिका", english: "Krittika" },
    },
    Rohini: {
        nakshatra_num: 4,
        lord: "Moon",
        name: { hindi: "रोहिणी", english: "Rohini" },
    },
    Mrigashira: {
        nakshatra_num: 5,
        lord: "Mars",
        name: {
            hindi: "मृगशिरा",
            english: "Mrigashira",
        },
    },
    Ardra: {
        nakshatra_num: 6,
        lord: "Rahu",
        name: {
            hindi: "आर्द्रा",
            english: "Ardra",
        },
    },
    Punarvasu: {
        nakshatra_num: 7,
        lord: "Jupiter",
        name: {
            hindi: "पुर्नवसु",
            english: "Punarvasu",
        },
    },
    Pushya: {
        nakshatra_num: 8,
        lord: "Saturn",
        name: {
            hindi: "पुष्य",
            english: "Pushya",
        },
    },
    Ashlesha: {
        nakshatra_num: 9,
        lord: "Mercury",
        name: {
            hindi: "अश्लेषा",
            english: "Ashlesha",
        },
    },
    Magha: {
        nakshatra_num: 10,
        lord: "Ketu",
        name: { hindi: "मघा", english: "Magha" },
    },
    PurvaPhalguni: {
        nakshatra_num: 11,
        lord: "Venus",
        name: {
            hindi: "पू.फाल्गुनी",
            english: "PurvaPhalguni",
        },
    },
    UttaraPhalguni: {
        nakshatra_num: 12,
        lord: "Sun",
        name: {
            hindi: "उ.फाल्गुनी",
            english: "UttaraPhalguni",
        },
    },
    Hasta: {
        nakshatra_num: 13,
        lord: "Moon",
        name: {
            hindi: "हस्त",
            english: "Hasta",
        },
    },
    Chitra: {
        nakshatra_num: 14,
        lord: "Mars",
        name: {
            hindi: "चित्रा",
            english: "Chitra",
        },
    },
    Swati: {
        nakshatra_num: 15,
        lord: "Rahu",
        name: { hindi: "स्वाति", english: "Swati" },
    },
    Vishakha: {
        nakshatra_num: 16,
        lord: "Jupiter",
        name: {
            hindi: "विशाखा",
            english: "Vishakha",
        },
    },
    Anuradha: {
        nakshatra_num: 17,
        lord: "Saturn",
        name: {
            hindi: "अनुराधा",
            english: "Anuradha",
        },
    },
    Jyeshtha: {
        nakshatra_num: 18,
        lord: "Mercury",
        name: {
            hindi: "ज्येष्ठा",
            english: "Jyeshtha",
        },
    },
    Mula: {
        nakshatra_num: 19,
        lord: "Ketu",
        name: {
            hindi: "मूल",
            english: "Mula",
        },
    },
    PurvaShadha: {
        nakshatra_num: 20,
        lord: "Venus",
        name: {
            hindi: "पू.षाढ़ा",
            english: "PurvaShadha",
        },
    },
    UttaraShadha: {
        nakshatra_num: 21,
        lord: "Sun",
        name: {
            hindi: "उ.षाढ़ा",
            english: "UttaraShadha",
        },
    },
    Sravana: {
        nakshatra_num: 22,
        lord: "Moon",
        name: {
            hindi: "श्रवण",
            english: "Sravana",
        },
    },
    Dhanishta: {
        nakshatra_num: 23,
        lord: "Mars",
        name: {
            hindi: "धनिष्ठा",
            english: "Dhanishta",
        },
    },
    Shatabhisha: {
        nakshatra_num: 24,
        lord: "Rahu",
        name: {
            hindi: "शतभिषा",
            english: "Shatabhisha",
        },
    },
    PurvaBhadra: {
        nakshatra_num: 25,
        lord: "Jupiter",
        name: {
            hindi: "पू.भाद्रपद",
            english: "PurvaBhadra",
        },
    },
    UttaraBhadra: {
        nakshatra_num: 26,
        lord: "Saturn",
        name: {
            hindi: "उ.भाद्रपद",
            english: "UttaraBhadra",
        },
    },
    Revati: {
        nakshatra_num: 27,
        lord: "Mercury",
        name: {
            hindi: "रेवती",
            english: "Revati",
        },
    },
};

/** Constant for total number of Nakshatra signs */
export const TOTAL_NAKSHATRA_SIGNS: NakshatraNumber = 27;

/** Each Nakshatra spans 13°20' (360° / 27) */
export const DEG_PER_NAKSHATRA = 360 / TOTAL_NAKSHATRA_SIGNS;

/**
 * Calculates the Nakshatra (lunar mansion) based on a given zodiac degree.
 *
 * @param degree - The ecliptic longitude (0° to 360°).
 * @returns A Nakshatra Name.
 */
export function getNakshatra(degree: number): Nakshatra {
    // Normalize degree within 0 to 360
    const deg = MOD360(degree);
    // Determine Nakshatra index
    const index = Math.floor(MOD360(deg) / DEG_PER_NAKSHATRA);

    // Find matching Nakshatra details
    const details = Object.values(NakshatraDetails).find(
        item => item.nakshatra_num === index + 1
    );

    if (!details) {
        throw new Error(`No Nakshatra found for degree ${degree}`);
    }

    // Find matching Rasi details
    return {
        ...details,
        degree: deg % DEG_PER_NAKSHATRA,
        // Calculate the range for this Nakshatra
        range: {
            min: index * DEG_PER_NAKSHATRA,
            max: (index + 1) * DEG_PER_NAKSHATRA,
        },
    };
}
