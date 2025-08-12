import type { MaahaDetail, MaahaEn } from "src/backend/types";

export const MaahaDetails: Record<MaahaEn, MaahaDetail> = {
    Chhaitra: {
        name: { english: "Chhaitra", hindi: "चैत्र" },
        num: 1,
    },
    Vaishakha: {
        name: { english: "Vaishakha", hindi: "बैशाख" },
        num: 2,
    },
    Jyeshtha: {
        name: { english: "Jyeshtha", hindi: "ज्येष्ठ" },
        num: 3,
    },
    Ashadha: {
        name: { english: "Ashadha", hindi: "आषाढ़" },
        num: 4,
    },
    Shravana: {
        name: { english: "Shravana", hindi: "श्रावण" },
        num: 5,
    },
    Bhaadra: {
        name: { english: "Bhaadra", hindi: "भाद्रपद" },
        num: 6,
    },
    Ashwin: {
        name: { english: "Ashwin", hindi: "अश्विन" },
        num: 7,
    },
    Kartika: {
        name: { english: "Kartika", hindi: "कार्तिक" },
        num: 8,
    },
    Agrahayana: {
        name: {
            english: "Agrahayana",
            hindi: "मार्गशीर्ष",
        },
        num: 9,
    },
    Pausha: {
        name: { english: "Pausha", hindi: "पौष" },
        num: 10,
    },
    Magha: {
        name: { english: "Magha", hindi: "माघ" },
        num: 11,
    },
    Phalguna: {
        name: { english: "Phalguna", hindi: "फाल्गुन" },
        num: 12,
    },
};
