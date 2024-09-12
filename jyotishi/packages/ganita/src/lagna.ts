import moment from "moment";
import { coord, julian, sidereal, nutation, base } from "astronomia";
import { normalizeDeg } from './utils/angle';

// Measured from South Westward
// See chapter 13 of Meeus
var lagnaH = new coord.Horizontal((3 * Math.PI) / 2, 0);

// place = globe.Coord(new astronomia.sexagesimal.Angle(false, 22, 47, 0).rad(), ...)
// date - utc
export const lagna = (place, time: Date) => {
    var jd = julian.DateToJDE(time);
    var s = sidereal.apparent(jd);

    return normalizeDeg(base.toDeg(
        lagnaH
            .toEquatorial(place, s)
            .toEcliptic(nutation.meanObliquity(base.J2000)).lon
    ));
};
