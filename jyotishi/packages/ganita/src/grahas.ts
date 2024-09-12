import { mapObjIndexed, assoc, map } from "ramda";
import { normalizeDeg } from './utils/angle';
import { lagna } from './lagna';
import { sphericalToRectangular, rectangularToSpherical } from './utils/rectangular-coord';
import {
    base,
    julian,
    planetposition,
    solar,
    solarxyz,
    moonposition,
    nutation,
    coord,
    data,
    globe,
    sexagesimal as sexa
} from "astronomia";

type GrahaId = "as" | "su" | "mo" | "ma" | "me" | "ju" | "ve" | "sa" | "ra" | "ke";
type GrahaName = "Lagna" | "Sun" | "Moon" | "Mars" | "Mercury" | "Jupiter" | "Venus" | "Saturn" | "Rahu" | "Ketu";

interface GrahaPosition {
    rasi: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    deg: number;
};

const grahasInternal = (): Record<GrahaId, { name: GrahaName }> => ({
    as: { name: "Lagna" },
    su: { name: "Sun" },
    mo: { name: "Moon" },
    ma: { name: "Mars" },
    me: { name: "Mercury" },
    ju: { name: "Jupiter" },
    ve: { name: "Venus" },
    sa: { name: "Saturn" },
    ra: { name: "Rahu" },
    ke: { name: "Ketu" }
});

export const grahas = (): Record<GrahaId, { id: GrahaId, name: string }> =>
  mapObjIndexed((v, k) => assoc("id", k, v), grahasInternal());

const sunPosition = (date: Date) => {
    const jde = julian.DateToJDE(date);
    const T = base.J2000Century(jde);
    const planet = new planetposition.Planet(data.earth);

    return normalizeDeg(base.toDeg(solar.apparentVSOP87(planet, jde).lon));
};

const moonPosition = (date: Date) => {
    const jde = julian.DateToJDE(date);

    return normalizeDeg(base.toDeg(moonposition.position(jde).lon));
};

const rahuPosition = (date: Date) => {
    const jde = julian.DateToJDE(date);

    return normalizeDeg(base.toDeg(moonposition.trueNode(jde)));
};

const planetPosition = (planetData, date: Date) => {
    const jde = julian.DateToJDE(date);
    const planet = new planetposition.Planet(planetData);
    const earth = new planetposition.Planet(data.earth);
    const pos = planet.position(jde);
    const eqPos = new coord.Ecliptic(pos.lon, pos.lat);
    const recPos = sphericalToRectangular(
        pos.range,
        pos.lon,
        pos.lat
    );
    const sunRecPos = solarxyz.position(earth, jde);
    const planetGeoRecPos = {
        x: recPos.x + sunRecPos.x,
        y: recPos.y + sunRecPos.y,
        z: recPos.z + sunRecPos.z,
    };
    const planetGeoSphPos = rectangularToSpherical(planetGeoRecPos);

    return normalizeDeg(base.toDeg(planetGeoSphPos.ra));
};

export const grahaPositions = (zodiacStart: number, place: { lat: number, lon: number }, time: Date) => {
    const lagnaLon = lagna(new globe.Coord((new sexa.Angle(place.lat)).rad(), (new sexa.Angle(-1 * place.lon)).rad()), time);
    const rahuLon = rahuPosition(time);

    const longitudes: Record<GrahaId, number> = {
        as: normalizeDeg(lagnaLon - zodiacStart),
        su: normalizeDeg(sunPosition(time) - zodiacStart),
        mo: normalizeDeg(moonPosition(time) - zodiacStart),
        ma: normalizeDeg(planetPosition(data.mars, time) - zodiacStart),
        me: normalizeDeg(planetPosition(data.mercury, time) - zodiacStart),
        ju: normalizeDeg(planetPosition(data.jupiter, time) - zodiacStart),
        ve: normalizeDeg(planetPosition(data.venus, time) - zodiacStart),
        sa: normalizeDeg(planetPosition(data.saturn, time) - zodiacStart),
        ra: normalizeDeg(rahuPosition(time) - zodiacStart),
        ke: normalizeDeg(rahuLon + 180 - zodiacStart)
    };

    return mapObjIndexed((o) => {
        return assoc("pos", {
            rasi: Math.ceil(longitudes[o.id] / 30),
            deg: longitudes[o.id] % 30
        }, o);
    }, grahas());
};
