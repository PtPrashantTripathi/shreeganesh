export const normalizeDeg = (deg: number) =>
    deg < 0 ? deg + 360 : deg;
