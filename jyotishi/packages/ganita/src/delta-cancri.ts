import { base, coord, nutation, julian, apparent, sexagesimal as sexa } from "astronomia";

// Refer Observation data at https://en.wikipedia.org/wiki/Delta_Cancri
const DELTA_CANCRI_POS = {
    ra: new sexa.RA(8, 44, 41.09921).rad(),
    dec: new sexa.Angle(false, 18, 9, 15.5034).rad()
}

const deltaCancriEqPos = new coord.Equatorial(DELTA_CANCRI_POS.ra, DELTA_CANCRI_POS.dec);


// date - Universal Time
// Return position in ecliptic coordinates
export const deltaCancriPos = (date: Date) => {
    // const jde = julian.CalendarGregorianToJD(
    //     date.getFullYear(),
    //     date.getMonth(),
    //     date.getDay() + new sexa.Time(false, date.getHours(), date.getMinutes()).day()
    // );
    const jde = julian.DateToJDE(date);
    return base.toDeg(apparent.positionRonVondrak(
        deltaCancriEqPos,
        base.JDEToJulianYear(jde),
        new sexa.HourAngle(true, 0, 0, 0.01178), // RA: (-17.67 mas/yr) / 1000 / 15
        new sexa.Angle(true, 0, 0, 0.22926) // (-229.26 mas/yr) / 1000
    ).toEcliptic(nutation.meanObliquity(base.J2000)).lon);
};