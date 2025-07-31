import { getHouse } from "src/backend/Houses";
import { getNakshatra } from "src/backend/Nakshatra";
import { getRasi } from "src/backend/Rasi";
import { DEGS, mod2pi, MOD360, NORMALIZE12, RADS } from "src/backend/utils";

export const PlanetDetails: Record<PlanetEnglishType, PlanetDetail> = {
    Ascendant: {
        name: { english: "Ascendant", hindi: "लग्न" },
        type: "Ascendant",
        color: "#1e90ff",
        symbol: "☉",
    },
    Sun: {
        name: { english: "Sun", hindi: "सूर्य" },
        type: "Navagraha",
        day: "Sunday",
        aspect: [7],
        happy_house: [1, 5, 9, 10],
        sad_house: [4, 6, 7, 8, 12],
        friend: ["Venus", "Mercury", "Saturn"],
        enemy: ["Jupiter", "Mars"],
        neutral: ["Moon"],
        symbol: "☼",
        color: "#f39c12",
    },
    Moon: {
        name: { english: "Moon", hindi: "चंद्र" },
        type: "Navagraha",
        day: "Monday",
        aspect: [7],
        happy_house: [4, 7, 9, 11, 12],
        sad_house: [2, 3, 6, 8],
        friend: ["Sun", "Jupiter"],
        enemy: ["Venus"],
        neutral: ["Mercury", "Saturn", "Mars"],
        symbol: "☽",
        color: "#5dade2",
    },
    Mars: {
        name: { english: "Mars", hindi: "मंगल" },
        type: "Navagraha",
        day: "Tuesday",
        aspect: [4, 7, 8],
        happy_house: [1, 3, 5, 8, 10, 11],
        sad_house: [2, 4, 6, 12],
        friend: ["Moon", "Jupiter"],
        enemy: ["Sun", "Venus", "Mercury"],
        neutral: ["Saturn"],
        symbol: "♂",
        color: "#e74c3c",
    },
    Mercury: {
        name: { english: "Mercury", hindi: "बुध" },
        type: "Navagraha",
        day: "Wednesday",
        aspect: [7],
        happy_house: [1, 3, 5, 6, 7, 10, 11],
        sad_house: [2, 4, 8, 9, 12],
        friend: ["Sun", "Venus", "Saturn"],
        enemy: ["Moon"],
        neutral: ["Jupiter", "Mars"],
        symbol: "☿",
        color: "#27ae60",
    },
    Jupiter: {
        name: { english: "Jupiter", hindi: "गुरु" },
        type: "Navagraha",
        day: "Thursday",
        aspect: [5, 7, 9],
        happy_house: [1, 4, 5, 7, 9, 10, 2, 11],
        sad_house: [2, 11],
        friend: ["Moon", "Mars"],
        enemy: ["Sun", "Venus"],
        neutral: ["Mercury", "Saturn"],
        symbol: "♃",
        color: "#b7950b",
    },
    Venus: {
        name: { english: "Venus", hindi: "शुक्र" },
        type: "Navagraha",
        day: "Friday",
        aspect: [7],
        happy_house: [1, 2, 4, 5, 7, 9, 11, 12],
        sad_house: [3, 6, 8, 10],
        friend: ["Sun", "Moon"],
        enemy: [],
        neutral: ["Mercury", "Saturn", "Jupiter", "Mars"],
        symbol: "♀",
        color: "#ff69b4",
    },
    Saturn: {
        name: { english: "Saturn", hindi: "शनि" },
        type: "Navagraha",
        day: "Saturday",
        aspect: [3, 7, 10],
        happy_house: [3, 6, 7, 10, 11],
        sad_house: [4, 5, 8, 9, 12],
        friend: ["Sun", "Venus", "Mercury"],
        enemy: ["Moon", "Jupiter"],
        neutral: ["Mars"],
        symbol: "♄",
        color: "#5d6d7e",
    },
    Rahu: {
        name: { english: "Rahu", hindi: "राहु" },
        type: "Navagraha",
        aspect: [5, 7, 9],
        happy_house: [1, 2, 3, 5, 10, 11],
        sad_house: [4, 6, 7, 8, 9, 12],
        symbol: "☊",
        color: "#7f8c8d",
    },
    Ketu: {
        name: { english: "Ketu", hindi: "केतु" },
        type: "Navagraha",
        aspect: [5, 7, 9],
        happy_house: [4, 6, 8, 9, 12],
        sad_house: [1, 2, 3, 5, 7, 10, 11],
        symbol: "☋",
        color: "#d35400",
    },
    Uranus: {
        name: { english: "Uranus", hindi: "अरुण" },
        type: "Upagraha",
        symbol: "♅",
        color: "#00bcd4",
    },
    Neptune: {
        name: { english: "Neptune", hindi: "वरुण" },
        type: "Upagraha",
        symbol: "♆",
        color: "#3f51b5",
    },
    Pluto: {
        name: { english: "Pluto", hindi: "यम" },
        type: "Upagraha",
        symbol: "♇",
        color: "#9b59b6",
    },
    Dhuma: {
        name: { english: "Dhuma", hindi: "धूम" },
        type: "Bahyagraha",
        symbol: "☉",
        color: "#1e90ff",
    },
    Vyatipata: {
        name: {
            english: "Vyatipata",
            hindi: "व्यतीपात",
        },
        type: "Bahyagraha",
        symbol: "☉",
        color: "#1e90ff",
    },
    Parivesha: {
        name: {
            english: "Parivesha",
            hindi: "परिवेष",
        },
        type: "Bahyagraha",
        symbol: "☉",
        color: "#1e90ff",
    },
    Chapa: {
        name: { english: "Chapa", hindi: "चाप" },
        type: "Bahyagraha",
        symbol: "☉",
        color: "#1e90ff",
    },
    Upaketu: {
        name: { english: "Upaketu", hindi: "उपकेतु" },
        type: "Bahyagraha",
        symbol: "☉",
        color: "#1e90ff",
    },
    Gulika: {
        name: { english: "Gulika", hindi: "गुलिक" },
        type: "Bahyagraha",
        symbol: "☉",
        color: "#1e90ff",
    },
    Kaala: {
        name: { english: "Kaala", hindi: "काल" },
        type: "Bahyagraha",
        symbol: "☉",
        color: "#1e90ff",
    },
    Mrityu: {
        name: { english: "Mrityu", hindi: "मृत्यु" },
        type: "Bahyagraha",
        symbol: "☉",
        color: "#1e90ff",
    },
    Yamaghantaka: {
        name: {
            english: "Yamaghantaka",
            hindi: "यमघंटक",
        },
        type: "Bahyagraha",
        symbol: "☉",
        color: "#1e90ff",
    },
    Ardhaprahara: {
        name: {
            english: "Ardhaprahara",
            hindi: "अर्धप्रहर",
        },
        type: "Bahyagraha",
        symbol: "☉",
        color: "#1e90ff",
    },
};

export const englishShortName: Partial<Record<PlanetEnglishType, string>> = {
    Ascendant: "Asc",
    Sun: "Su",
    Moon: "Mo",
    Mars: "Ma",
    Mercury: "Me",
    Jupiter: "Ju",
    Venus: "Ve",
    Saturn: "Sa",
    Rahu: "Ra",
    Ketu: "Ke",
    Uranus: "Ur",
    Neptune: "Ne",
    Pluto: "Pl",
};

export const hindiShortName: Partial<Record<PlanetHindiType, string>> = {
    लग्न: "ल",
    सूर्य: "सू",
    चंद्र: "च",
    मंगल: "मं",
    बुध: "बु",
    गुरु: "गु",
    शुक्र: "शु",
    शनि: "श",
    राहु: "रा",
    केतु: "के",
    अरुण: "अ",
    वरुण: "व",
    यम: "य",
};

export class calcPlanet implements Planet {
    degree: number;
    rasi: Rasi;
    nakshatra: Nakshatra;
    motion: "Vakri" | "Margi";
    visibility: "Asta" | "Udaya";
    latitude: number;
    distance: number;
    speed: { longitude: number; latitude: number; distance: number };
    azimuth: number;
    altitude: { true: number; apparent: number };
    divisional: Record<string, Rasi>;
    name: Translation<PlanetEnglishType, PlanetHindiType>;
    type: "Bahyagraha" | "Ascendant" | "Navagraha" | "Upagraha";
    day?: DayEnglishType | undefined;
    aspect?: RasiNumber[] | undefined;
    happy_house?: RasiNumber[] | undefined;
    sad_house?: RasiNumber[] | undefined;
    enemy?: PlanetEnglishType[] | undefined;
    friend?: PlanetEnglishType[] | undefined;
    neutral?: PlanetEnglishType[] | undefined;
    symbol: string;
    color: string;
    house: HouseDetail;

    constructor(
        planetName: PlanetEnglishType,
        vCoords: number[],
        hCoords: number[] = [],
        ascendant_rasi_num: number = 1
    ) {
        const data = PlanetDetails[planetName];
        this.name = data.name;
        this.type = data.type;
        this.day = data.day;
        this.aspect = data.aspect;
        this.happy_house = data.happy_house;
        this.sad_house = data.sad_house;
        this.enemy = data.enemy;
        this.friend = data.friend;
        this.neutral = data.neutral;
        this.symbol = data.symbol;
        this.color = data.color;

        this.degree = MOD360(vCoords[0] ?? 0);
        this.latitude = vCoords[1] ?? 0;
        this.distance = vCoords[2] ?? 0;
        this.speed = {
            longitude: vCoords[3] ?? 0,
            latitude: vCoords[4] ?? 0,
            distance: vCoords[5] ?? 0,
        };

        this.azimuth = hCoords[0] ?? 0;
        this.altitude = {
            true: hCoords[1] ?? 0,
            apparent: hCoords[2] ?? 0,
        };

        this.rasi = getRasi(this.degree);
        this.nakshatra = getNakshatra(this.degree);
        this.visibility = this.azimuth < 0 ? "Asta" : "Udaya";
        this.motion = this.speed.longitude < 0 ? "Vakri" : "Margi";
        this.house = getHouse(this.rasi.rasi_num, ascendant_rasi_num);

        // Apply divisional chart calculations
        this.divisional = {
            // D2 (Hora - Wealth and resources)
            hora: this.getDivChart(2),

            // D3 (Drekkana - Siblings, courage)
            drekkana: this.getDivChart(3),

            // D4 (Chaturthamsa - Property, fixed assets)
            chaturthamsa: this.getDivChart(4),

            // D5 (Panchamsa - Power, authority)
            panchamsa: this.getDivChart(5),

            // D6 (Shashtamsa - Diseases)
            shashtamsa: this.getDivChart(6),

            // D7 (Saptamsa - Children)
            saptamsa: this.getDivChart(7),

            // D8 (Ashtamsa - Longevity, struggles)
            ashtamsa: this.getDivChart(8),

            // D9 (Navamsa - Marriage, fortune, dharma)
            navamsa: this.getDivChart(9),

            // D10 (Dasamsa - Career)
            dasamsa: this.getDivChart(10),

            // D12 (Dvadasamsa - Parents)
            dvadasamsa: this.getDivChart(12),

            // D16 (Shodashamsa - Vehicles, luxuries)
            shodashamsa: this.getDivChart(16),

            // D20 (Vimshamsa - Spiritual progress)
            vimshamsa: this.getDivChart(20),

            // D24 (Siddhamsa/Chaturvimshamsa - Education, learning)
            siddhamsa: this.getDivChart(24),

            // D27 (Bhamsa/Nakshatramsa - Strength, vulnerability)
            bhamsa: this.getDivChart(27),

            // D30 (Trimsamsa - Evils, misfortunes)
            trimsamsa: this.getDivChart(30),

            // D40 (Khavedamsa - Maternal happiness)
            khavedamsa: this.getDivChart(40),

            // D45 (Akshavedamsa - Personality)
            akshavedamsa: this.getDivChart(45),

            // D60 (Shashtiamsa - Past life karmas)
            shashtiamsa: this.getDivChart(60),
        };
    }

    /**
     * Generic method to calculate a divisional chart (D-chart)
     *
     * @param {number} divisor - Number of divisions in chart (e.g., 9 for D9)
     * @returns {Rasi} - Resulting Rasi object
     */
    getDivChart(divisor: number): Rasi {
        return getRasi(mod2pi(this.degree * divisor * RADS) * DEGS);
    }

    /**
     * Checks if a given planet (graha) has a drishti (aspect) on a target
     * planet.
     *
     * @param target - The planet to check whether it receives aspect from the
     *   graha.
     * @returns {boolean} - True if graha aspects the target, false otherwise.
     */
    isGrahaDrishti(target: Planet): boolean {
        return (
            this.aspect?.includes(
                NORMALIZE12(target.rasi.rasi_num + 1 - this.rasi.rasi_num)
            ) ?? false
        );
    }
}
