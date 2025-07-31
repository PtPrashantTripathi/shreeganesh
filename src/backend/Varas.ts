export const VarasDetails: Record<DayEnglishType, VaraDetail> = {
    Monday: {
        name: {
            english: "Monday",

            hindi: "सोमवार",
        },
        lord: "Moon",
        num: 1,
    },
    Tuesday: {
        name: {
            english: "Tuesday",

            hindi: "मंगलवार",
        },
        lord: "Mars",
        num: 2,
    },
    Wednesday: {
        name: {
            english: "Wednesday",

            hindi: "बुधवार",
        },
        lord: "Mercury",
        num: 3,
    },
    Thursday: {
        name: {
            english: "Thursday",

            hindi: "गुरुवार",
        },
        lord: "Jupiter",
        num: 4,
    },
    Friday: {
        name: {
            english: "Friday",

            hindi: "शुक्रवार",
        },
        lord: "Venus",
        num: 5,
    },
    Saturday: {
        name: {
            english: "Saturday",

            hindi: "शनिवार",
        },
        lord: "Saturn",
        num: 6,
    },

    Sunday: {
        name: {
            english: "Sunday",

            hindi: "रविवार",
        },
        lord: "Sun",
        num: 7,
    },
};

/**
 * @param {number} weekdayIndex : week day index // 0 = monday, ... 6 = sunday;
 * @returns {VaraDetail} Vara details
 */
export function getVara(weekdayIndex: number): VaraDetail {
    const vara = Object.values(VarasDetails).find(
        t => t.num === weekdayIndex + 1
    );

    if (!vara) {
        throw new Error(`No Vara found ${weekdayIndex}`);
    }
    return vara;
}
