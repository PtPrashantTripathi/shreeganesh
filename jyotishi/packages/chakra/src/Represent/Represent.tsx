import * as React from "react";
import { values } from "ramda";
import Chart from "./Chart";
// @ts-ignore
import { zodiacStart, grahaPositions } from '../../../ganita/src/index.ts';

const flattenPlanetData = (p: {
    name: string,
    id: string,
    pos: { rasi: number, deg: number }
}) => ({
    name: p.name,
    id: p.id,
    rasi: p.pos.rasi,
    deg: p.pos.deg
});

const data = JSON.parse(localStorage.getItem("data-form") || "{}");
const dt = new Date(data.birthdate)
const utcDt = new Date(Date.UTC(
    dt.getUTCFullYear(),
    dt.getUTCMonth(),
    dt.getUTCDate(),
    dt.getHours(),
    dt.getUTCMinutes(),
    dt.getUTCSeconds(),
    dt.getUTCMilliseconds()
));
const place = {
    lat: data.lat,
    lon: data.lon
};
const planets = values(grahaPositions(zodiacStart(utcDt), place, utcDt)).map(flattenPlanetData);

// const planets = values({
//     as: { name: "Lagna", id: "as", pos: { rasi: 6, deg: 7.645715516426179 } },
//     su: { name: "Sun", id: "su", pos: { rasi: 10, deg: 6.772167218140794 } },
//     mo: { name: "Moon", id: "mo", pos: { rasi: 1, deg: 25.745121991529217 } },
//     ma: { name: "Mars", id: "ma", pos: { rasi: 7, deg: 27.87459740988814 } },
//     me: {
//         name: "Mercury",
//         id: "me",
//         pos: { rasi: 9, deg: 29.896735741097473 }
//     },
//     ju: {
//         name: "Jupiter",
//         id: "ju",
//         pos: { rasi: 11, deg: 0.43794580037922515 }
//     },
//     ve: { name: "Venus", id: "ve", pos: { rasi: 10, deg: 7.99358576500083 } },
//     sa: { name: "Saturn", id: "sa", pos: { rasi: 8, deg: 14.288003011619537 } },
//     ra: { name: "Rahu", id: "ra", pos: { rasi: 1, deg: 12.751211387553468 } },
//     ke: { name: "Ketu", id: "ke", pos: { rasi: 7, deg: 12.751211387553468 } }
// }).map(p => ({
//     name: p.name,
//     id: p.id,
//     rasi: p.pos.rasi,
//     deg: p.pos.deg
// }));

const Represent: React.FC = () => {
    return <Chart rasiStart={6} planets={planets} width={300} height={300}/>;
};

export default Represent;
