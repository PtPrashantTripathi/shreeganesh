import type { DateTime } from "src/backend/datetime";
import { getKarana } from "src/backend/Karana";
import { MaahaDetails } from "src/backend/Maaha";
import { getNakshatra } from "src/backend/Nakshatra";
import { SamvatsaraDetails } from "src/backend/Samvatsara";
import SwissEPH from "src/backend/swisseph-wasm";
import type { FixedLengthArray } from "src/backend/swisseph-wasm/utils/fixed-length-array";
import { getTithi } from "src/backend/Tithi";
import type {
    MaahaDetail,
    SamvatsaraDetail,
    VaraDetail,
} from "src/backend/types";
import { MOD360 } from "src/backend/utils";
import { VarasDetails } from "src/backend/Varas";
import { getVara } from "src/backend/Varas";
import { getYoga } from "src/backend/Yoga";
/**
 * A generic search function to find the time when a function f(t) crosses zero.
 * It uses a binary search approach.
 */
function search(f: (jd: number) => number, startJD: number): number | null {
    let a = startJD;
    let b = startJD + 2; // Look ahead 2 days

    let fa = f(a);
    let fb = f(b);

    if (fa * fb >= 0) {
        // We need the function to cross zero in the interval.
        // If not, we might not find a root.
        // This can happen if a tithi/nakshatra doesn't end within the next 2 days, which is rare.
        return null;
    }

    for (let i = 0; i < 20; i++) {
        // 20 iterations are enough for high precision
        const m = (a + b) / 2;
        const fm = f(m);
        if (fm * fa < 0) {
            b = m;
            fb = fm;
        } else {
            a = m;
            fa = fm;
        }
    }
    return a;
}

function calculateRahuKalam(
    sunrise: number,
    sunset: number,
    vara: number
): { start: number; end: number } {
    const dayDuration = sunset - sunrise;
    const portion = dayDuration / 8;

    const rahuKalamPortionIndex = [8, 2, 7, 5, 6, 4, 3]; // Sun, Mon, Tue, Wed, Thu, Fri, Sat
    const portionIndex = rahuKalamPortionIndex[vara];

    const start = sunrise + (portionIndex - 1) * portion;
    const end = sunrise + portionIndex * portion;

    return {
        start,
        end,
    };
}

export async function getPanchanga(
    date: DateTime,
    latitude: number,
    longitude: number,
    altitude: number = 0,
    pressure: number = 0, // Atmospheric values (ignored for Hindu method)
    temperature: number = 0
) {
    const swe = await SwissEPH.init();
    await swe.swe_set_ephe_path("./ephe", [
        "seas_18.se1",
        "sepl_18.se1",
        "semo_18.se1",
    ]);
    swe.swe_set_sid_mode(swe.SE_SIDM_LAHIRI, 0, 0);
    // Setup location detail
    swe.swe_set_topo(longitude, latitude, altitude);

    // Prepare position array
    const geopos = [
        longitude, // east positive
        latitude, // north positive
        altitude, // height above sea level in meters
    ] as FixedLengthArray<3, number>;

    const get_rise = (jd: number, body: number) =>
        swe.swe_rise_trans(
            jd,
            body,
            null,
            swe.SEFLG_SWIEPH,
            swe.SE_CALC_RISE | swe.SE_BIT_HINDU_RISING,
            geopos,
            pressure,
            temperature
        );
    const get_set = (jd: number, body: number) =>
        swe.swe_rise_trans(
            jd,
            body,
            null,
            swe.SEFLG_SWIEPH,
            swe.SE_CALC_SET | swe.SE_BIT_HINDU_RISING,
            geopos,
            pressure,
            temperature
        );
    const get_location = (jd: number, body: number) =>
        MOD360(
            swe.swe_calc_ut(
                jd,
                body,
                swe.SEFLG_SWIEPH |
                    swe.SEFLG_SPEED |
                    swe.SEFLG_SIDEREAL |
                    swe.SEFLG_EQUATORIAL
            )[0]
        );

    // Calculate Julian Day
    const tjd_ut = swe.swe_julday(
        date.year,
        date.month,
        date.day,
        date.hour,
        swe.SE_GREG_CAL
    );

    // Calculate Hindu Sunrise
    const sunrise_jd = get_rise(tjd_ut, swe.SE_SUN);
    const sunrise = date.addDays(sunrise_jd - tjd_ut);

    // Calculate Hindu Sunset
    const sunset_jd = get_set(sunrise_jd, swe.SE_SUN);
    const sunset = date.addDays(sunset_jd - tjd_ut);

    // Calculate Hindu Moonrise
    const moonrise_jd = get_rise(tjd_ut, swe.SE_MOON);
    const moonrise = date.addDays(moonrise_jd - tjd_ut);

    // Calculate Hindu Moonset
    const moonset_jd = get_set(moonrise_jd, swe.SE_MOON);
    const moonset = date.addDays(moonset_jd - tjd_ut);

    // Calculate Hindu Next Day Sunrise
    const next_sunrise_jd = get_rise(sunset_jd, swe.SE_SUN);

    // Day Duration
    const day_duration = sunset_jd - sunrise_jd;
    // const night_duration = next_sunrise_jd - sunset_jd;

    const moon_lon = get_location(sunrise_jd, swe.SE_MOON);
    const sun_lon = get_location(sunrise_jd, swe.SE_SUN);

    const tithi = getTithi(sun_lon, moon_lon);
    const nakshatra = getNakshatra(moon_lon);
    const yoga = getYoga(sun_lon, moon_lon);
    const karana = getKarana(sun_lon, moon_lon);
    const vara = getVara(swe.swe_day_of_week(sunrise_jd));

    const nakshatraStartTime = search(
        jd => MOD360(get_location(jd, swe.SE_MOON) - nakshatra.range.min),
        tjd_ut - 25 / 24 // A nakshatra lasts about a day. Searching from 25 hours before should be safe.
    );
    const nakshatraEndTime = search(
        jd => MOD360(get_location(jd, swe.SE_MOON) - nakshatra.range.max),
        tjd_ut
    );

    const tithiStartTime = search(
        jd =>
            MOD360(
                get_location(jd, swe.SE_MOON) -
                    get_location(jd, swe.SE_SUN) -
                    tithi.range.min
            ),
        // A tithi is slightly less than a day. Searching from 25h before is safe.
        tjd_ut - 25 / 24
    );
    const tithiEndTime = search(
        jd =>
            MOD360(
                get_location(jd, swe.SE_MOON) -
                    get_location(jd, swe.SE_SUN) -
                    tithi.range.max
            ),
        tjd_ut
    );

    const yogaEndTime = search(
        jd =>
            get_location(jd, swe.SE_MOON) +
            get_location(jd, swe.SE_SUN) -
            yoga.range.max,
        tjd_ut
    );

    const rahuKalam = calculateRahuKalam(sunrise_jd, sunset_jd, vara.num);

    /**
     * Find all Karana transitions (end times and names) between startDate and
     * endDate (typically sunrise to next sunrise)
     */
    function findKaranaTransitions(startJD: number, endJD: number) {
        const transitions = [];
        let lastJD = startJD;
        let lastKarana = karana;
        while (lastJD < endJD) {
            // Karana changes every 6 degrees of moon-sun difference
            const nextKarana = getKarana(
                get_location(lastJD, swe.SE_SUN),
                get_location(lastJD, swe.SE_MOON)
            );
            // Find next Karana end
            const nextKaranaEnd = search(
                jd =>
                    get_location(jd, swe.SE_MOON) -
                    get_location(jd, swe.SE_SUN) -
                    nextKarana.degree,
                lastJD
            );
            if (!nextKaranaEnd || nextKaranaEnd > endJD) {
                // Last Karana for the day
                transitions.push({ name: lastKarana, endTime: endJD });
                break;
            } else {
                transitions.push({ name: lastKarana, endTime: nextKaranaEnd });
                lastJD = nextKaranaEnd + 1 / (24 * 60);
                lastKarana = nextKarana;
            }
        }
        return transitions;
    }
    const karanaTransitions = findKaranaTransitions(sunset_jd, next_sunrise_jd);

    // Masa
    const slast = MOD360(
        swe.swe_calc_ut(
            sunrise_jd - (tithi.lunarphase / 360.0) * 30.0,
            swe.SE_SUN,
            swe.SEFLG_SWIEPH
        )[0]
    );
    const snext = MOD360(
        swe.swe_calc_ut(
            sunrise_jd + ((30.0 - tithi.lunarphase) / 360.0) * 30.0,
            swe.SE_SUN,
            swe.SEFLG_SWIEPH
        )[0]
    );
    const m1 = Math.floor(slast / 30.0) + 1;
    const m2 = Math.floor(snext / 30.0) + 1;
    const masa_num = m1 === m2 ? (m1 % 12) + 1 : (m1 % 12) + 1;

    // Samvatsara
    const ahargana = tjd_ut - 588465.5;
    const sidereal_year = 365.25636;
    let kali = Math.ceil((ahargana + (4 - masa_num) * 30) / sidereal_year);
    if (kali >= 4009) {
        kali = kali - 14;
    }
    const saka_samvat = kali - 3179;
    const vikrama_samvat = saka_samvat + 135;
    const samvatsara_num =
        (kali + 27 + Math.floor((kali * 211 - 108) / 18000)) % 60;

    // todo : need to check
    return {
        sunrise_jd,
        sunset_jd,
        moonrise_jd,
        moonset_jd,
        day_duration_hours: day_duration * 24,
        moon_lon,
        sun_lon,
        tithi,
        nakshatra,
        yoga,
        karana,
        vara,

        nakshatraStartTime,
        nakshatraEndTime,
        tithiStartTime,
        tithiEndTime,
        yogaEndTime,
        rahuKalam,
        // For Karana transitions, use sunrise to next day's sunrise
        next_sunrise_jd,
        karanaTransitions,
        // Masa
        masa_num,
        // Samvatsara
        ahargana,
        kali,
        saka_samvat,
        vikrama_samvat,
        samvatsara_num,

        jd: tjd_ut,
        sunrise: sunrise.toTimeZone(5.5).toString(),
        sunset: sunset.toTimeZone(5.5).toString(),
        moonrise: moonrise.toTimeZone(5.5).toString(),
        moonset: moonset.toTimeZone(5.5).toString(),
        vaara: Object.values(VarasDetails).find(
            item => item.num === Math.floor(tjd_ut + 1) % 7
        ) as VaraDetail,
        masa: Object.values(MaahaDetails).find(
            item => item.num === masa_num
        ) as MaahaDetail,
        samvatsara: Object.values(SamvatsaraDetails).find(
            item => item.num === samvatsara_num
        ) as SamvatsaraDetail,
        ritu: (masa_num - 1) / 2,
    };
}
