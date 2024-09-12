export const sphericalToRectangular = (r: number, ra: number, dec: number) => {
    const raDeg = ra * 1;
    const cosRA = Math.cos(raDeg);
    const sinRA = Math.sin(raDeg);
    const cosDec = Math.cos(dec);
    const sinDec = Math.sin(dec);

    return {
        x: r * cosRA * cosDec,
        y: r * sinRA * cosDec,
        z: r * sinDec
    };
};

export const rectangularToSpherical = ({ x, y, z }: { x: number, y: number, z: number }) => {
    return {
        r: Math.sqrt(x * x + y * y + z * z),
        ra: Math.atan2(y, x),
        dec: Math.atan2(z, Math.sqrt(x * x + y * y))
    };
};
