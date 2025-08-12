import type { DateTime } from "src/backend/datetime";
import type {
    Dasha,
    DashaName,
    Nakshatra,
    NavagrahaEn,
} from "src/backend/types";
import { reorderArray } from "src/backend/utils";
import { AntarDashaPhal } from "src/backend/VimsottariDasa/AntarDashaPhal";
import { MahaDashaPhal } from "src/backend/VimsottariDasa/MahaDashaPhal";

export const DurationOfVimsottariDasa: Record<NavagrahaEn, number> = {
    Mercury: 17,
    Ketu: 7,
    Venus: 20,
    Sun: 6,
    Moon: 10,
    Mars: 7,
    Rahu: 18,
    Jupiter: 16,
    Saturn: 19,
};

export function calcVimsottariDasa(
    JD: number,
    moon_nakshatra: Nakshatra,
    DOB: DateTime
): Dasha[] {
    const solarYear = calcSolarYear(JD);

    // how much of the first MahaDasha has already elapsed at birth
    const dasaBalance =
        DurationOfVimsottariDasa[moon_nakshatra.lord] *
        ((moon_nakshatra.degree * 27) / 360);

    const StartDate = DOB.addDays(-dasaBalance * solarYear);

    return computeDasha(
        "MahaDasha",
        moon_nakshatra.lord,
        StartDate,
        solarYear,
        120 // All Maha Dasha Total Duration
    );
}

function computeDasha(
    dashaName: DashaName,
    parentLord: NavagrahaEn,
    startDate: DateTime,
    solarYear: number, // The length of the tropical year in days
    parentDuration: number
): Dasha[] {
    const sequence = reorderArray(
        Object.keys(DurationOfVimsottariDasa),
        parentLord
    ) as NavagrahaEn[];

    let cursor = startDate;

    return sequence.map(currentLord => {
        // Calculate current duration Scale relative to parent
        const durationYears =
            (DurationOfVimsottariDasa[currentLord] * parentDuration) / 120;

        const endDate = cursor.addDays(durationYears * solarYear);

        const childDashaName = childDasha[dashaName];

        const dashaEntry: Dasha = {
            Name: dashaName,
            Lord: currentLord,
            StartDate: cursor,
            EndDate: endDate,
            Phal:
                dashaName === "MahaDasha"
                    ? MahaDashaPhal[currentLord]
                    : dashaName === "AntarDasha"
                      ? AntarDashaPhal[parentLord]?.[currentLord]
                      : {},
            ChildDasha: childDashaName
                ? computeDasha(
                      childDashaName,
                      currentLord,
                      cursor,
                      solarYear,
                      durationYears
                  )
                : [],
        };

        cursor = endDate;
        return dashaEntry;
    });
}

// map each level to its next‐down sublevel (or never if none)
const childDasha: Record<DashaName, DashaName | undefined> = {
    MahaDasha: "AntarDasha",
    AntarDasha: "PratyantarDasha",
    PratyantarDasha: "SookshmaDasha",
    SookshmaDasha: "PraanaDasha",
    PraanaDasha: "DehaDasha",
    DehaDasha: undefined,
};

/**
 * Calculates the mean tropical year (solar year) based on a given Julian Day
 * (JD), using the formula by McCarthy & Seidelmann (2009, p.18) and Laskar
 * (1986).
 *
 * @param {number} JD - Julian Day (Terrestrial Time).
 * @returns {number} - The length of the tropical year in days at the given JD.
 */
export function calcSolarYear(JD: number): number {
    /** Reference epoch: JD for 1899 December 31 12:00:00 (UT1) */
    // const JD_REFERENCE = 2415020.0;

    /** Reference epoch: JD for 2000 January 1 12:00:00 (UT1) */
    const JD_REFERENCE = 2451545.0;

    const Ts = (JD - JD_REFERENCE) / 36525.0;

    return (
        365.2421896698 -
        6.15359e-6 * Ts -
        7.29e-10 * Ts * Ts +
        2.64e-10 * Ts * Ts * Ts
    );
}
