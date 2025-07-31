// --- Constants ---
export const EPS = 1e-12; // Smallest meaningful difference
export const TPI = 2 * Math.PI; // 2π
export const RTOH = 12 / Math.PI; // Radians → Hours
export const RADS = Math.PI / 180; // Degrees → Radians
export const DEGS = 180 / Math.PI; // Radians → Degrees
export const RTS = 206264.80624709636; // Arcseconds per radian
export const STR = 4.84813681109536e-6; // Radians per arcsecond

// --- Math Utility Functions ---

/** Absolute integer rounding towards zero */
export const absolute = (x: number): number =>
    x >= 0 ? Math.floor(x) : Math.ceil(x);

/** Normalize to 0–24 hour range */
export const mod24 = (x: number): number => (x + 24) % 24;

/** Normalize angle to [0, 2π] */
export const mod2pi = (x: number): number => {
    const a = TPI * (x / TPI - absolute(x / TPI));
    return a < 0 ? TPI + a : a;
};

/** Normalize to 0 – 359.99... degrees */
export const MOD360 = (x: number): number => {
    let y = x % 360;
    if (y < 0) {
        y += 360;
    }
    return y;
};

/**
 * Normalize a given integer in rashi number.
 *
 * @returns {RasiNumber} RasiNumber between 1 and 12.
 */
export function NORMALIZE12(x: number): RasiNumber {
    let ret = x % 12;
    if (ret <= 0) {
        ret += 12;
    }
    return ret as RasiNumber;
}

// --- Time/Angle Formatting ---

/** Convert decimal hours to HMS+ms */
export const hms = (h: number): HMS => {
    if (h < 0) h += 24;
    const hour = Math.floor(h);
    h = (h - hour) * 60;
    const minute = Math.floor(h);
    const second = (h - minute) * 60;
    return {
        hour,
        minute,
        second,
    };
};

// 👉 Factory function
export const DMS = (d: number): IDMS => {
    const s = Math.abs(d);
    const degree = Math.floor(s);
    const minute = Math.floor((s - degree) * 60);
    const second = ((s - degree) * 60 - minute) * 60;
    return {
        degree,
        minute,
        second,
        toDegree: () => d,
        toString: () => `${degree}° ${minute}′ ${absolute(second)}″`,
    };
};

/** Convert HMS to decimal degrees */
export const hms2deg = (hms: HMS): number =>
    hms.hour * 15 + hms.minute / 4 + hms.second / 240;

/** Convert HMS to decimal hours */
export const hms2dec = (hms: HMS): number =>
    hms.hour + hms.minute / 60 + hms.second / 3600;

/** Convert degrees to formatted HMS string */
export const deg2hms = (x: number): string => {
    const total = x / 15;
    const h = Math.floor(total);
    const m = Math.floor((total - h) * 60);
    const s = Math.floor(((total - h) * 60 - m) * 60);
    return `${h.toString().padStart(2, "0")}:${m
        .toString()
        .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
};

/** Convert decimal to formatted HMS string */
export const dec2hms = (x: number): string => {
    const sign = x < 0 ? "-" : "";
    x = Math.abs(x);
    const h = Math.floor(x);
    const m = Math.floor((x - h) * 60);
    const s = Math.floor(((x - h) * 60 - m) * 60);
    return `${sign}${h.toString().padStart(2, "0")}:${m
        .toString()
        .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
};

/** Convert decimal year time to date (approximate), based on given DOB */
export const age2date = (
    etime: number,
    DOB: { year: number; month: number; date: number } = {
        year: 2000,
        month: 1,
        date: 1,
    }
): string => {
    if (isNaN(etime)) return "00/00/0000";

    const year = DOB.year - Math.floor(etime);
    const remMonths = (etime % 1) * 12;
    const month = Math.max(1, 12 - Math.round(remMonths) + DOB.month - 12);
    const remDays = (remMonths % 1) * 30;
    const day = Math.abs(30 - DOB.date - Math.round(remDays));

    return `${day.toString().padStart(2, "0")}/${month
        .toString()
        .padStart(2, "0")}/${year}`;
};

//  Helper Functions
export function percentage(p: number, x: number): number {
    return (p * x) / 100;
}

export function reorderArray<T>(arr: T[], startValue: T): T[] {
    const startIndex = arr.indexOf(startValue);
    return [...arr.slice(startIndex), ...arr.slice(0, startIndex)];
}
