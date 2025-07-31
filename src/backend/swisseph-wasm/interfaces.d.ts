/**
 * Constructs a tuple type (fixed-length array) of length `N`, filled with type
 * `T`.
 *
 * @example
 *     type Vec3 = FixedLengthArray<3, number>; // [number, number, number]
 *
 * @template N - The fixed length of the array.
 * @template T - The type of each element in the array.
 * @template R - Internal accumulator (do not provide manually).
 */
type FixedLengthArray<
    N extends number,
    T,
    R extends T[] = [],
> = R["length"] extends N ? R : FixedLengthArray<N, T, [...R, T]>;

/**
 * Returns a type based on a string `INPUT`, using a conditional type mapping.
 * If `INPUT` exists as a key in the `CONDITIONS` map, returns the mapped type.
 * Otherwise, returns the `DEFAULT` type.
 *
 * @example
 *     type MyReturn = ConditionalReturnType<"G", { G: number }, string>; // => number
 *     type Fallback = ConditionalReturnType<"Z", { G: number }, string>; // => string
 *
 * @template INPUT - Input string literal to check.
 * @template CONDITIONS - A record mapping string keys to specific return types.
 * @template DEFAULT - The fallback type if `INPUT` is not found in
 *   `CONDITIONS`.
 */
type ConditionalReturnType<
    INPUT extends string,
    CONDITIONS extends Record<string, unknown>,
    DEFAULT,
> = INPUT extends keyof CONDITIONS ? CONDITIONS[INPUT] : DEFAULT;

// C-style char type (8-bit number)
type C_CharType = number;

// C-style Boolean types
type C_TRUE = 1;
type C_FALSE = 0;
type C_BoolType = C_TRUE | C_FALSE;

// C-style Number Pointer types
type C_NumberPointerType = Emscripten.CIntType | Emscripten.CFloatType;

type HouseSystems =
    | "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | "H"
    | "I"
    | "i"
    | "K"
    | "L"
    | "M"
    | "N"
    | "O"
    | "P"
    | "Q"
    | "R"
    | "S"
    | "T"
    | "U"
    | "V"
    | "W"
    | "X"
    | "Y";
/** Represents a complete date and time value. */

interface DateTimeObject {
    /** Full year (e.g., 2025) */
    year: number;

    /** Month of the year (1–12) */
    month: number;

    /** Day of the month (1–31) */
    day: number;

    /** Hour of the day (0–23) */
    hour: number;

    /** Minute of the hour (0–59) */
    minute: number;

    /** Second of the minute including fractional part (0–59.99999) */
    second: number;
}
/**
 * Represents horizontal coordinates of a celestial object:
 *
 * Array format:
 *
 * - `[0]` → Azimuth in degrees (measured from the south point, increasing
 *   westwards)
 * - `[1]` → True altitude above the horizon in degrees
 * - `[2]` → Apparent altitude in degrees (corrected for atmospheric refraction)
 */

type HorizontalCoordinates = [az: number, alt: number, ap: number];
/**
 * Full celestial position values returned from a position calculation.
 *
 * By default, values are in ecliptic coordinates (longitude, latitude,
 * distance). If `SEFLG_SPEED` or `SEFLG_SPEED3` flags are set, daily speeds for
 * each value are included; otherwise speeds are zero. If `SEFLG_EQUATORIAL`
 * flag is set, values are in equatorial coordinates (right ascension,
 * declination, distance). If `SEFLG_XYZ` flag is set, values are in cartesian
 * coordinates (X, Y, Z). If the target object ID is `SE_ECL_NUT`, values
 * contain obliquity and nutation data instead.
 *
 * Array format:
 *
 * - `[0]` → Longitude (λ), Right Ascension (α), Cartesian X, or True Obliquity
 *   (ε) depending on flags
 * - `[1]` → Latitude (β), Declination (δ), Cartesian Y, or Mean Obliquity (ε)
 *   depending on flags
 */

type CelestialCoordinates2D = [
    /**
     * - `λ`: Ecliptic longitude
     * - `α`: Equatorial right ascension if `SEFLG_EQUATORIAL`
     * - `x`: Cartesian X if `SEFLG_XYZ`
     * - `ε`: True obliquity of the ecliptic if object ID is `SE_ECL_NUT`
     */
    lon: number,

    /**
     * - `β`: Ecliptic latitude
     * - `δ`: Equatorial declination if `SEFLG_EQUATORIAL`
     * - `y`: Cartesian Y if `SEFLG_XYZ`
     * - `ε`: Mean obliquity of the ecliptic if object ID is `SE_ECL_NUT`
     */
    lat: number,
];
/**
 * Full celestial position values returned from a position calculation.
 *
 * - By default, values are in ecliptic coordinates (longitude, latitude,
 *   distance).
 * - If `SEFLG_SPEED` or `SEFLG_SPEED3` flags are set, daily speeds for each value
 *   are included; otherwise speeds are zero.
 * - If `SEFLG_EQUATORIAL` flag is set, values are in equatorial coordinates
 *   (right ascension, declination, distance).
 * - If `SEFLG_XYZ` flag is set, values are in cartesian coordinates (X, Y, Z).
 * - If the target object ID is `SE_ECL_NUT`, values contain obliquity and
 *   nutation data instead.
 *
 * Array format:
 *
 * - `[0]` → Longitude (λ), Right Ascension (α), Cartesian X, or True Obliquity
 *   (ε) depending on flags
 * - `[1]` → Latitude (β), Declination (δ), Cartesian Y, or Mean Obliquity (ε)
 *   depending on flags
 * - `[2]` → Distance (AU), Cartesian Z, or Nutation in longitude (Δψ) depending
 *   on flags
 */

type CelestialCoordinates3D = [
    ...CelestialCoordinates2D,

    /**
     * - `au`: Distance in astronomical units (AU)
     * - `z`: Cartesian Z if `SEFLG_XYZ`
     * - `Δψ`: Nutation in longitude if object ID is `SE_ECL_NUT`
     */
    dist: number,
];
/**
 * Full celestial position values returned from a position calculation.
 *
 * - By default, values are in ecliptic coordinates (longitude, latitude,
 *   distance).
 * - If `SEFLG_SPEED` or `SEFLG_SPEED3` flags are set, daily speeds for each value
 *   are included; otherwise speeds are zero.
 * - If `SEFLG_EQUATORIAL` flag is set, values are in equatorial coordinates
 *   (right ascension, declination, distance).
 * - If `SEFLG_XYZ` flag is set, values are in cartesian coordinates (X, Y, Z).
 * - If the target object ID is `SE_ECL_NUT`, values contain obliquity and
 *   nutation data instead.
 *
 * Array format:
 *
 * - `[0]` → Longitude (λ), Right Ascension (α), Cartesian X, or True Obliquity
 *   (ε) depending on flags
 * - `[1]` → Latitude (β), Declination (δ), Cartesian Y, or Mean Obliquity (ε)
 *   depending on flags
 * - `[2]` → Distance (AU), Cartesian Z, or Nutation in longitude (Δψ) depending
 *   on flags
 * - `[3]` → Longitude daily speed (λs), Right Ascension daily speed (αs),
 *   Cartesian X speed (xs), or Nutation in obliquity (Δε)
 * - `[4]` → Latitude daily speed (βs), Declination daily speed (δs), Cartesian Y
 *   speed (ys)
 * - `[5]` → Distance daily speed (aus), Cartesian Z speed (zs)
 */

type CelestialCoordinatesAdvance = [
    ...CelestialCoordinates3D,

    /**
     * - `λs`: Ecliptic longitude daily speed
     * - `αs`: Equatorial right ascension daily speed if `SEFLG_EQUATORIAL`
     * - `xs`: Cartesian X daily speed if `SEFLG_XYZ`
     * - `Δε`: Nutation in obliquity if object ID is `SE_ECL_NUT`
     */
    lonSpd: number,

    /**
     * - `βs`: Ecliptic latitude daily speed
     * - `δs`: Equatorial declination daily speed if `SEFLG_EQUATORIAL`
     * - `ys`: Cartesian Y daily speed if `SEFLG_XYZ`
     */
    latSpd: number,

    /**
     * - `aus`: Distance daily speed in AU
     * - `zs`: Cartesian Z daily speed if `SEFLG_XYZ`
     */
    distSpd: number,
];
/** Result returned by the `swe_fixstar` function. */

interface FixstarResult {
    /** Full star name as defined in `sefstars.txt`. */
    star_name: string;

    /** Celestial position and motion data of the star. */
    data: CelestialCoordinatesAdvance;
}
/** Metadata for a fixed star entry. */

interface FixstarMagnitude {
    /** The full star name as it appears in the `sefstars.txt` catalog. */
    star_name: string;

    /** Visual magnitude of the star (brightness). */
    magnitude: number;
}
/**
 * Array of key angular points related to the Ascendant and other significant
 * positions.
 *
 * Array format:
 *
 * - `[0]` → Ascendant longitude
 * - `[1]` → Midheaven (MC) longitude
 * - `[2]` → Right Ascension of the Midheaven (ARMC)
 * - `[3]` → Vertex longitude
 * - `[4]` → Equatorial Ascendant longitude
 * - `[5]` → Walter Koch's Co-Ascendant longitude
 * - `[6]` → Michael Munkasey's Co-Ascendant longitude
 * - `[7]` → Michael Munkasey's Polar Ascendant longitude
 */

type AscendantValues = [
    /** Longitude of the Ascendant */
    asc: number,

    /** Longitude of the Midheaven (MC) */
    mc: number,

    /** Right Ascension of the Midheaven (ARMC) */
    armc: number,

    /** Longitude of the Vertex */
    vertex: number,

    /** Longitude of the Equatorial Ascendant */
    equasc: number,

    /** Longitude of Walter Koch's Co-Ascendant */
    coasc1: number,

    /** Longitude of Michael Munkasey's Co-Ascendant */
    coasc2: number,

    /** Longitude of Michael Munkasey's Polar Ascendant */
    polasc: number,
];
/**
 * Array of momentary motion speeds for the Ascendant, Midheaven, and related
 * points.
 *
 * Values represent angular speeds in degrees per day.
 *
 * Array format:
 *
 * - `[0]` → Ascendant speed
 * - `[1]` → Midheaven speed
 * - `[2]` → Right Ascension of the Midheaven speed
 * - `[3]` → Vertex speed
 * - `[4]` → Equatorial Ascendant speed
 * - `[5]` → Walter Koch's Co-Ascendant speed
 * - `[6]` → Michael Munkasey's Co-Ascendant speed
 * - `[7]` → Michael Munkasey's Polar Ascendant speed
 */

type AscendantPointsSpeeds = [
    /** Momentary speed of the Ascendant */
    asc_speed: number,

    /** Momentary speed of the Midheaven (MC) */
    mc_speed: number,

    /** Momentary speed of the Right Ascension of the Midheaven (ARMC) */
    armc_speed: number,

    /** Momentary speed of the Vertex */
    vertex_speed: number,

    /** Momentary speed of the Equatorial Ascendant */
    equasc_speed: number,

    /** Momentary speed of Walter Koch's Co-Ascendant */
    coasc1_speed: number,

    /** Momentary speed of Michael Munkasey's Co-Ascendant */
    coasc2_speed: number,

    /** Momentary speed of Michael Munkasey's Polar Ascendant */
    polasc_speed: number,
];
/**
 * Times of various eclipse phases (Julian Dates).
 *
 * Unused slot retained for compatibility.
 *
 * Array format:
 *
 * - `[0]` → Time of maximum eclipse (JD)
 * - `[1]` → Unused (reserved)
 * - `[2]` → Partial phase start time (JD)
 * - `[3]` → Partial phase end time (JD)
 * - `[4]` → Totality start time (JD)
 * - `[5]` → Totality end time (JD)
 * - `[6]` → Penumbral phase start time (JD)
 * - `[7]` → Penumbral phase end time (JD)
 */

type EclipsePhaseTimes = [
    /** Time of maximum eclipse (JD) */
    max: number,
    /** Unused slot (reserved) */
    unused: number,
    /** Start time of partial phase (JD) */
    partialStart: number,
    /** End time of partial phase (JD) */
    partialEnd: number,
    /** Start time of totality (JD) */
    totalStart: number,
    /** End time of totality (JD) */
    totalEnd: number,
    /** Start time of penumbral phase (JD) */
    penumbralStart: number,
    /** End time of penumbral phase (JD) */
    penumbralEnd: number,
];
/**
 * Eclipse times including moonrise and moonset during eclipse (if applicable).
 *
 * Array format:
 *
 * - `[0]` → Time of maximum eclipse (JD)
 * - `[1]` → Unused (reserved)
 * - `[2]` → Partial phase start time (JD)
 * - `[3]` → Partial phase end time (JD)
 * - `[4]` → Totality start time (JD)
 * - `[5]` → Totality end time (JD)
 * - `[6]` → Penumbral phase start time (JD)
 * - `[7]` → Penumbral phase end time (JD)
 * - `[8]` → Moonrise time during eclipse (JD), if it occurs
 * - `[9]` → Moonset time during eclipse (JD), if it occurs
 */

type EclipsePhaseTimesWithMoonriseSet = [
    ...phases: EclipsePhaseTimes,
    /** Moonrise time during eclipse (JD), if it occurs */
    moonrise: number,
    /** Moonset time during eclipse (JD), if it occurs */
    moonset: number,
];
/**
 * Detailed eclipse timings for local observation, including phases, centerline,
 * and annular-total transitions.
 *
 * All times are expressed in Julian Day (JD).
 *
 * Array format:
 *
 * - `[0]` → Time of maximum eclipse
 * - `[1]` → Time of local apparent noon
 * - `[2]` → Eclipse start time
 * - `[3]` → Eclipse end time
 * - `[4]` → Totality start time
 * - `[5]` → Totality end time
 * - `[6]` → Center line start time
 * - `[7]` → Center line end time
 * - `[8]` → Time when annular-total eclipse becomes total
 * - `[9]` → Time when annular-total eclipse becomes annular again
 */

type EclipsePhaseTimesAdvance = [
    /** Time of maximum eclipse (JD) */
    max: number,
    /** Time of local apparent noon during eclipse (JD) */
    localNoon: number,
    /** Eclipse start time (JD) */
    start: number,
    /** Eclipse end time (JD) */
    end: number,
    /** Start time of totality (JD) */
    totalStart: number,
    /** End time of totality (JD) */
    totalEnd: number,
    /** Start time of center line (JD) */
    centerStart: number,
    /** End time of center line (JD) */
    centerEnd: number,
    /** Time annular-total eclipse becomes total (JD) */
    annularToTotal: number,
    /** Time annular-total eclipse becomes annular again (JD) */
    totalToAnnular: number,
];
/**
 * Contact times of an eclipse and sunrise/sunset during the event (JD).
 *
 * Array format:
 *
 * - `[0]` → Time of maximum eclipse (JD)
 * - `[1]` → Time of first contact (JD)
 * - `[2]` → Time of second contact (JD)
 * - `[3]` → Time of third contact (JD)
 * - `[4]` → Time of fourth contact (JD)
 * - `[5]` → Sunrise time during eclipse (JD)
 * - `[6]` → Sunset time during eclipse (JD)
 */

type EclipseContactTimes = [
    /** Time of maximum eclipse (JD) */
    max: number,
    /** Time of first contact (JD) */
    first: number,
    /** Time of second contact (JD) */
    second: number,
    /** Time of third contact (JD) */
    third: number,
    /** Time of fourth contact (JD) */
    fourth: number,
    /** Sunrise time during eclipse (JD) */
    sunrise: number,
    /** Sunset time during eclipse (JD) */
    sunset: number,
];
/**
 * Geographic coordinates defining the central path and limits of an eclipse on
 * Earth.
 *
 * Array format:
 *
 * - `[0]` → Central line longitude (degrees)
 * - `[1]` → Central line latitude (degrees)
 * - `[2]` → Northern umbral limit longitude (degrees)
 * - `[3]` → Northern umbral limit latitude (degrees)
 * - `[4]` → Southern umbral limit longitude (degrees)
 * - `[5]` → Southern umbral limit latitude (degrees)
 * - `[6]` → Northern penumbral limit longitude (degrees)
 * - `[7]` → Northern penumbral limit latitude (degrees)
 * - `[8]` → Southern penumbral limit longitude (degrees)
 * - `[9]` → Southern penumbral limit latitude (degrees)
 */

type EclipseGeographicCoords = [
    /** Central line longitude (degrees) */
    centralLongitude: number,
    /** Central line latitude (degrees) */
    centralLatitude: number,
    /** Northern umbral limit longitude (degrees) */
    northUmbraLongitude: number,
    /** Northern umbral limit latitude (degrees) */
    northUmbraLatitude: number,
    /** Southern umbral limit longitude (degrees) */
    southUmbraLongitude: number,
    /** Southern umbral limit latitude (degrees) */
    southUmbraLatitude: number,
    /** Northern penumbral limit longitude (degrees) */
    northPenumbraLongitude: number,
    /** Northern penumbral limit latitude (degrees) */
    northPenumbraLatitude: number,
    /** Southern penumbral limit longitude (degrees) */
    southPenumbraLongitude: number,
    /** Southern penumbral limit latitude (degrees) */
    southPenumbraLatitude: number,
];
/**
 * Basic characteristics of an eclipse at a given moment.
 *
 * Array format:
 *
 * - `[0]` → Fraction of solar diameter covered by the moon (magnitude)
 * - `[1]` → Ratio of lunar diameter to solar diameter
 * - `[2]` → Fraction of solar disc obscured by the moon (obscuration)
 * - `[3]` → Diameter of the core shadow in kilometers
 * - `[4]` → Azimuth of the sun (degrees)
 * - `[5]` → True altitude of the sun above the horizon (degrees)
 * - `[6]` → Apparent altitude of the sun above the horizon (degrees)
 * - `[7]` → Elongation of the moon from the sun (degrees)
 */

type EclipseCharacteristics = [
    /** Fraction of solar diameter covered by the moon (magnitude) */
    solarDiameterFraction: number,
    /** Ratio of lunar diameter to solar diameter */
    lunarDiameterRatio: number,
    /** Fraction of solar disc covered by moon (obscuration) */
    solarDiscObscuration: number,
    /** Diameter of the core shadow in kilometers */
    coreShadowDiameterKm: number,
    /** Azimuth of the sun (degrees) */
    sunAzimuth: number,
    /** True altitude of the sun above the horizon (degrees) */
    trueSunAltitude: number,
    /** Apparent altitude of the sun above the horizon (degrees) */
    apparentSunAltitude: number,
    /** Moon elongation in degrees */
    moonElongation: number,
];
/**
 * Extended eclipse attributes including basic characteristics, magnitude, and
 * Saros series information.
 *
 * Array format:
 *
 * - `[0]` → Fraction of solar diameter covered by the moon (magnitude)
 * - `[1]` → Ratio of lunar diameter to solar diameter
 * - `[2]` → Fraction of solar disc obscured by the moon (obscuration)
 * - `[3]` → Diameter of the core shadow in kilometers
 * - `[4]` → Azimuth of the sun (degrees)
 * - `[5]` → True altitude of the sun above the horizon (degrees)
 * - `[6]` → Apparent altitude of the sun above the horizon (degrees)
 * - `[7]` → Elongation of the moon from the sun (degrees)
 * - `[8]` → Eclipse magnitude (same as solar diameter fraction or lunar diameter
 *   ratio depending on eclipse type)
 * - `[9]` → Saros series number (or `-99999999` if unknown)
 * - `[10]` → Saros series member number (or `-99999999` if unknown)
 */

type EclipseAttributes = [
    ...base: EclipseCharacteristics,
    /**
     * Eclipse magnitude (usually matches solarDiameterFraction or
     * lunarDiameterRatio depending on eclipse type)
     */
    magnitude: number,
    /** Saros series number, or -99999999 if unknown */
    sarosSeries: number,
    /** Saros series member number, or -99999999 if unknown */
    sarosMember: number,
];
/**
 * Characteristics of a lunar eclipse at a given moment, including magnitude,
 * positions, and Saros series data.
 *
 * Array format:
 *
 * - `[0]` → Umbral magnitude at the time of observation
 * - `[1]` → Penumbral magnitude
 * - `[2]` → Unused (reserved)
 * - `[3]` → Unused (reserved)
 * - `[4]` → Azimuth of the moon (degrees)
 * - `[5]` → True altitude of the moon above the horizon (degrees)
 * - `[6]` → Apparent altitude of the moon above the horizon (degrees)
 * - `[7]` → Distance of the moon from opposition (degrees)
 * - `[8]` → Eclipse magnitude (typically same as umbral magnitude)
 * - `[9]` → Saros series number (or `-99999999` if unknown)
 * - `[10]` → Saros series member number (or `-99999999` if unknown)
 */

type LunarEclipseCharacteristics = [
    /** Umbral magnitude at time (JD) */
    umbralMagnitude: number,
    /** Penumbral magnitude */
    penumbralMagnitude: number,
    /** Unused slot */
    unused1: number,
    /** Unused slot */
    unused2: number,
    /** Moon azimuth (degrees) */
    moonAzimuth: number,
    /** True altitude of the moon (degrees) */
    trueMoonAltitude: number,
    /** Apparent altitude of the moon (degrees) */
    apparentMoonAltitude: number,
    /** Distance of moon from opposition (degrees) */
    distanceFromOpposition: number,
    /** Eclipse magnitude (usually umbral magnitude) */
    magnitude: number,
    /** Saros series number, or -99999999 if unknown */
    sarosSeries: number,
    /** Saros series member number, or -99999999 if unknown */
    sarosMember: number,
];
/**
 * Represents calculated positions for houses and related points on the great
 * circles.
 */

interface Houses<N extends number> {
    /**
     * Longitude positions of the houses:
     *
     * - `36` positions for Gauquelin sectors
     * - `12` positions for all other house systems
     *
     * Array format:
     *
     * - `cusp[0]` → 1st house cusp longitude
     * - ...
     * - `cusp[N-1]` → Nth house cusp longitude
     */
    cusps: FixedLengthArray<N, number>;

    /**
     * Longitude positions of other key points of interest on the great circles
     * (e.g., MC, IC, Ascendant, Descendant, etc.)
     */
    ascmc: AscendantValues;
}
/**
 * Extended house calculation result:
 *
 * Includes positions for the houses, other points, and their momentary motion
 * Speeds.
 */

interface HousesEx<N extends number> extends Houses<N> {
    /**
     * Momentary motion speeds of the houses.
     *
     * Array format:
     *
     * - `cusp_speed[0]` → Speed of 1st house cusp in degrees/day
     * - `cusp_speed[N-1]` → Speed of Nth house cusp
     */
    cusp_speed: FixedLengthArray<N, number>;

    /**
     * Momentary motion speeds of other key points of interest on the great
     * circles (e.g., MC, IC, Ascendant, Descendant, etc.).
     *
     * Units: degrees per day.
     */
    ascmc_speed: AscendantPointsSpeeds;
}
/**
 * Object containing ascending node, descending node, aphelion and perihelion
 * values Depending on the specific object and the method flag used, the values
 * can be either "mean" or "osculating"
 */

interface NodAps {
    /** Array of ascending node values returned by the calculation */
    ascending: CelestialCoordinatesAdvance;
    /** Array of descending node values returned by the calculation */
    descending: CelestialCoordinatesAdvance;
    /** Array of perihelion node values returned by the calculation */
    perihelion: CelestialCoordinatesAdvance;
    /** Array of aphelion values returned by the calculation */
    aphelion: CelestialCoordinatesAdvance;
}
/**
 * Data array representing heliacal phenomena computations for a celestial
 * object.
 *
 * The array contains observational, geometric, and photometric values relevant
 * to heliacal visibility (e.g. arcus visionis, azimuths, crescent width).
 *
 * Array format:
 *
 * - `[0]` → `AltO` – Topocentric (unrefracted) altitude of object (°)
 * - `[1]` → `AppAltO` – Apparent (refracted) altitude of object (°)
 * - `[2]` → `GeoAltO` – Geocentric altitude of object (°)
 * - `[3]` → `AziO` – Azimuth of object (°)
 * - `[4]` → `AltS` – Topocentric altitude of Sun (°)
 * - `[5]` → `AziS` – Azimuth of Sun (°)
 * - `[6]` → `TAVact` – Actual topocentric arcus visionis (°)
 * - `[7]` → `ARCVact` – Actual geocentric arcus visionis (°)
 * - `[8]` → `DAZact` – Actual difference in azimuth between object and Sun (°)
 * - `[9]` → `ARCLact` – Actual ecliptic longitude difference between object and
 *   Sun (°)
 * - `[10]` → `kact` – Extinction coefficient
 * - `[11]` → `minTAV` – Minimum topocentric arcus visionis (°)
 * - `[12]` → `TfistVR` – First visibility time (JD, VR method)
 * - `[13]` → `TbVR` – Best/optimum visibility time (JD, VR method)
 * - `[14]` → `TlastVR` – Last visibility time (JD, VR method)
 * - `[15]` → `TbYallop` – Best visibility time (JD, Yallop method)
 * - `[16]` → `WMoon` – Crescent width of Moon (°)
 * - `[17]` → `qYal` – Yallop Q-test value
 * - `[18]` → `qCrit` – Yallop Q-test threshold
 * - `[19]` → `ParO` – Parallax of object (°)
 * - `[20]` → `Magn` – Apparent magnitude of object
 * - `[21]` → `RiseO` – Rise/set time of object (JD)
 * - `[22]` → `RiseS` – Rise/set time of Sun (JD)
 * - `[23]` → `Lag` – Rise/set time difference (object - Sun) (JD)
 * - `[24]` → `TvisVR` – Visibility duration (JD)
 * - `[25]` → `LMoon` – Crescent length of Moon (°)
 * - `[26]` → `CVAact` – Actual crescent visibility angle (°)
 * - `[27]` → `Illum` – Moon illumination (%)
 * - `[28]` → `MSk` – MSk factor (model-specific visibility metric)
 */

type HeliacalPhenomena = [
    /** Topocentric altitude of object in degrees (unrefracted) */
    AltO: number,
    /** Apparent altitude of object in degrees (refracted) */
    AppAltO: number,
    /** Geocentric altitude of object in degrees */
    GeoAltO: number,
    /** Azimuth of object in degrees */
    AziO: number,
    /** Topocentric altitude of Sun in degrees */
    AltS: number,
    /** Azimuth of Sun in degrees */
    AziS: number,
    /** Actual topocentric arcus visionis in degrees */
    TAVact: number,
    /** Actual (geocentric) arcus visionis in degrees */
    ARCVact: number,
    /** Actual difference between object's and sun's azimuth in degrees */
    DAZact: number,
    /** Actual longitude difference between object and sun in degrees */
    ARCLact: number,
    /** Extinction coefficient */
    kact: number,
    /** Smallest topocentric arcus visionis in degrees */
    minTAV: number,
    /** First time object is visible:number, according to VR in JD */
    TfistVR: number,
    /** Optimum time the object is visible:number, according to VR in JD */
    TbVR: number,
    /** Last time object is visible:number, according to VR in JD */
    TlastVR: number,
    /** Best time the object is visible:number, according to Yallop in JD */
    TbYallop: number,
    /** Crescent width of Moon in degrees */
    WMoon: number,
    /** Q-test value of Yallop */
    qYal: number,
    /** Q-test criterion of Yallop */
    qCrit: number,
    /** Parallax of object in degrees */
    ParO: number,
    /** Magnitude of object */
    Magn: number,
    /** Rise/set time of object in JD */
    RiseO: number,
    /** Rise/set time of Sun in JD */
    RiseS: number,
    /** Rise/set time of object minus rise/set time of Sun in JD */
    Lag: number,
    /** Visibility duration in JD */
    TvisVR: number,
    /** Crescent length of Moon in degrees */
    LMoon: number,
    /** CVAact in degrees */
    CVAact: number,
    /** Illum in percentage */
    Illum: number,
    /** CVAact in degrees */
    CVAact: number,
    /** MSk */
    MSk: number,
];
/**
 * Orbital elements returned for a celestial object at a given time.
 *
 * These values represent the shape, orientation, and position of the orbit in
 * space, including angular and distance-related parameters.
 *
 * Array format:
 *
 * - `[0]` → `a` – Semimajor axis (AU)
 * - `[1]` → `e` – Eccentricity
 * - `[2]` → `i` – Inclination (°)
 * - `[3]` → `Ω` – Longitude of ascending node (°)
 * - `[4]` → `ω` – Argument of periapsis (°)
 * - `[5]` → `ϖ` – Longitude of periapsis (°)
 * - `[6]` → `M0` – Mean anomaly at epoch (°)
 * - `[7]` → `v0` – True anomaly at epoch (°)
 * - `[8]` → `E0` – Eccentric anomaly at epoch (°)
 * - `[9]` → `L0` – Mean longitude at epoch (°)
 * - `[10]` → `sidereal_period` – Sidereal orbital period (tropical years)
 * - `[11]` → `daily_motion` – Mean daily motion (°/day)
 * - `[12]` → `tropical_period` – Tropical orbital period (years)
 * - `[13]` → `synodic_period` – Synodic period (days). May be negative for inner
 *   planets or Moon.
 * - `[14]` → `perihelion_passage` – Julian day of perihelion passage
 * - `[15]` → `perihelion_distance` – Distance at perihelion (AU)
 * - `[16]` → `aphelion_distance` – Distance at aphelion (AU)
 */

type OrbitalElements = [
    /** Semimajor axis */
    a: number,
    /** Eccentricity */
    e: number,
    /** Inclination */
    i: number,
    /** Longitude of ascending node */
    Ω: number,
    /** Argument of periapsis */
    ω: number,
    /** Longitude of periapsis */
    ϖ: number,
    /** Mean anomaly at epoch */
    M0: number,
    /** True anomaly at epoch */
    v0: number,
    /** Eccentric anomaly at epoch */
    E0: number,
    /** Mean longitude at epoch */
    L0: number,
    /** Sidereal orbital period in tropical years */
    sidereal_period: number,
    /** Mean daily motion */
    daily_motion: number,
    /** Tropical period in years */
    tropical_period: number,
    /**
     * Synodic period in days Negative, if inner planet (Venus, Mercury, Aten
     * asteroids) or Moon
     */
    synodic_period: number,
    /** Time of perihelion passage */
    perihelion_passage: number,
    /** Perihelion distance */
    perihelion_distance: number,
    /** Aphelion distance */
    aphelion_distance: number,
];
/**
 * Julian Day results for the next heliacal visibility event.
 *
 * This tuple provides key Julian Dates related to the visibility of a celestial
 * object, depending on the selected heliacal algorithm (`hel_flag`).
 *
 * Array format:
 *
 * - `[0]` → Start of visibility (`vis_start`)
 * - `[1]` → Optimum visibility (`vis_opt`) — May be `0` if `hel_flag >=
 *   SE_HELFLAG_AV`
 * - `[2]` → End of visibility (`vis_end`) — May be `0` if `hel_flag >=
 *   SE_HELFLAG_AV`
 */

type HeliacalVisibilityWindow = [
    /** Julian Day of first possible visibility */
    vis_start: number,

    /**
     * Julian Day of best/optimum visibility; `0` if not calculated with AV
     * methods
     */
    vis_opt: number,

    /**
     * Julian Day of last possible visibility; `0` if not calculated with AV
     * methods
     */
    vis_end: number,
];
