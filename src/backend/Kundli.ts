// Import utility functions
import { calcSunRiseSunSet } from "src/backend/calcSunRiseSunSet";
import { DateTime } from "src/backend/datetime";
import { calcPlanet } from "src/backend/Planet";
import SwissEPH from "src/backend/swisseph-wasm";
import { reorderArray } from "src/backend/utils";
import { calcVimsottariDasa } from "src/backend/VimsottariDasa";
import { calcYogPhala } from "src/backend/YogPhala";

export async function getPlanetaryPosition(
    datetime = new DateTime(1997, 8, 11, 1, 55, 0, 0, 5.5),
    longitude = 80.38, // north positive
    latitude = 22.6, // east positive
    altitude = 0 // height above sea level in meters
): Promise<Kundli> {
    console.log(datetime);
    // todo : we neet to use tjd_et (Julian Day in Ephemeris Time or Terrestrial Time):
    const swe = await SwissEPH.init();
    console.log("swe_version", swe.swe_version());

    await swe.swe_set_ephe_path("./database/ephe", [
        "seas_18.se1",
        "sepl_18.se1",
        "semo_18.se1",
    ]);
    // Setup location detail
    swe.swe_set_sid_mode(swe.SE_SIDM_LAHIRI, 0, 0);
    swe.swe_set_topo(longitude, latitude, altitude);

    // swe.SEFLG_EQUATORIAL; this for chalit
    const IFLAGS = swe.SEFLG_SWIEPH | swe.SEFLG_SPEED | swe.SEFLG_SIDEREAL;

    const julian_datetime = swe.swe_julday(
        datetime.jsDate.getUTCFullYear(),
        datetime.jsDate.getUTCMonth() + 1,
        datetime.jsDate.getUTCDate(),
        datetime.jsDate.getUTCHours() +
            datetime.jsDate.getUTCMinutes() / 60 +
            (datetime.jsDate.getUTCSeconds() +
                datetime.jsDate.getUTCMilliseconds() / 1000) /
                3600,
        swe.SE_GREG_CAL
    );

    // Ayanamsa
    const ayanamsa = swe.swe_get_ayanamsa_ex_ut(julian_datetime, IFLAGS);

    // Ascendant etc.
    const { ascmc } = swe.swe_houses(
        julian_datetime,
        latitude,
        longitude,
        "P" // W = equal whole sign
    );

    const { daybirth, sunrise, sunset } = calcSunRiseSunSet(
        swe,
        julian_datetime,
        latitude,
        longitude
    );
    const day_of_weekday = (swe.swe_day_of_week(sunrise) + 1) % 7;

    // Add Ascendant
    const planets: Partial<Record<PlanetEnglishType, Planet>> = {};
    planets.Ascendant = new calcPlanet("Ascendant", [ascmc[0]]);

    // Planets
    const PLANET_IDS = {
        Sun: swe.SE_SUN,
        Moon: swe.SE_MOON,
        Mercury: swe.SE_MERCURY,
        Venus: swe.SE_VENUS,
        Mars: swe.SE_MARS,
        Jupiter: swe.SE_JUPITER,
        Saturn: swe.SE_SATURN,
        Uranus: swe.SE_URANUS,
        Neptune: swe.SE_NEPTUNE,
        Pluto: swe.SE_PLUTO,
        Rahu: swe.SE_TRUE_NODE,
    };
    for (const [planetName, planetId] of Object.entries(PLANET_IDS)) {
        const vCoords = swe.swe_calc_ut(julian_datetime, planetId, IFLAGS);
        const hCoords = swe.swe_azalt(
            julian_datetime,
            swe.SE_EQU2HOR,
            [longitude, latitude, altitude],
            0,
            0,
            [vCoords[0], vCoords[1], vCoords[2]]
        );

        // Map planets using ephe_data
        planets[planetName as PlanetEnglishType] = new calcPlanet(
            planetName as PlanetEnglishType,
            vCoords,
            hCoords,
            planets.Ascendant.rasi.rasi_num
        );

        if (planetName === "Rahu") {
            // Ketu is always 180° opposite to Rahu (i.e., Ketu = Rahu + 180°)
            vCoords[0] += 180;
            planets.Ketu = new calcPlanet(
                "Ketu",
                vCoords,
                hCoords,
                planets.Ascendant.rasi.rasi_num
            );
        }
    }

    if (planets.Sun) {
        // धूम (Dhuma) is calculated by adding 133°20′ to the Sun's position
        planets.Dhuma = new calcPlanet(
            "Dhuma",
            [planets.Sun.degree + 133 + 20 / 60],
            [],
            planets.Ascendant.rasi.rasi_num
        );

        // व्यतीपात (Vyatipata) is 360° minus Dhuma's position (its opposite point)
        planets.Vyatipata = new calcPlanet(
            "Vyatipata",
            [360 - planets.Dhuma.degree],
            [],
            planets.Ascendant.rasi.rasi_num
        );

        // परिवेष (Parivesha) is 180° added to Vyatipata (opposite of Vyatipata)
        planets.Parivesha = new calcPlanet(
            "Parivesha",
            [planets.Vyatipata.degree + 180],
            [],
            planets.Ascendant.rasi.rasi_num
        );

        // इन्द्रचाप (Chapa / Indrachapa) is 360° minus Parivesha
        planets.Chapa = new calcPlanet(
            "Chapa",
            [360 - planets.Parivesha.degree],
            [],
            planets.Ascendant.rasi.rasi_num
        );

        // उपकेतु (Upaketu / Sikhii) is Chapa + 16°40′
        planets.Upaketu = new calcPlanet(
            "Upaketu",
            [planets.Chapa.degree + 16 + 40 / 60],
            [],
            planets.Ascendant.rasi.rasi_num
        );
    }

    Object.entries(
        KalavelasCalculation(sunrise, sunset, day_of_weekday)
    ).forEach(v => {
        const name = v[0] as KalavelasEnglishType;
        const t_jd = v[1];
        planets[name] = new calcPlanet(
            name,
            [swe.swe_houses(t_jd, latitude, longitude, "P").ascmc[0]],
            [],
            planets.Ascendant?.rasi.rasi_num
        );
    });

    let vimsottari_dasa: Dasha[] = [];
    if (planets.Moon) {
        vimsottari_dasa = calcVimsottariDasa(
            julian_datetime,
            planets.Moon.nakshatra,
            datetime
        );
    }

    swe.swe_close();
    return {
        daybirth,
        weekday: dayLords[day_of_weekday],
        sunrise,
        sunset,
        datetime,
        latitude,
        longitude,
        planets: planets as Record<PlanetEnglishType, Planet>,
        julian_datetime,
        ayanamsa,
        vimsottari_dasa,
        yogPhala: calcYogPhala(planets as Record<PlanetEnglishType, Planet>),
    };
}

const dayLords: Record<number, NavagrahaEnglishType> = {
    0: "Sun", // Sunday
    1: "Moon", // Monday
    2: "Mars", // Tuesday
    3: "Mercury", // Wednesday
    4: "Jupiter", // Thursday
    5: "Venus", // Friday
    6: "Saturn", // Saturday
};

function KalavelasCalculation(
    sunrise_jd: number,
    sunset_jd: number,
    day_of_weekday: number
): Record<KalavelasEnglishType, number> {
    const duration = sunset_jd - sunrise_jd;
    const periods = Array.from(
        { length: 8 },
        (_, i) => sunrise_jd + i * (duration / 8)
    );
    const grahaSequence = reorderArray(
        Object.values(dayLords),
        dayLords[day_of_weekday]
    );

    const namedPeriods = {
        Gulika: periods[grahaSequence.indexOf("Saturn")],
        Kaala: periods[grahaSequence.indexOf("Sun")],
        Mrityu: periods[grahaSequence.indexOf("Mars")],
        Yamaghantaka: periods[grahaSequence.indexOf("Jupiter")],
        Ardhaprahara: periods[grahaSequence.indexOf("Mercury")],
    };

    return namedPeriods;
}
