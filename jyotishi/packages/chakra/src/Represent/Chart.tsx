import * as React from "react";
import {
    always,
    assoc,
    groupBy,
    range,
    pipe,
    map,
    toString,
    compose,
    toUpper,
    head,
    tail,
    juxt,
    join,
    converge,
    concat,
    mapObjIndexed,
    flatten,
    values,
    addIndex
} from "ramda";
import "./Chart.scss";

type IPlanet = {
    id: string;
    name: string;
    rasi: number;
    deg: number;
};

type IProps = {
    width?: number;
    height?: number;
    rasiStart: number;
    planets: Array<IPlanet>;
};

const capitalize: (s: string) => string = converge(
    concat,
    [compose(toUpper, head), tail]
);

const normalize = (n: number) => (n <= 0 ? n + 12 : n);

const planetPosition = (rasiStart: number, planetRasi: number) => {
    const house = normalize(planetRasi - rasiStart + 1);

    return toStyle([
        { top: 25, left: 50 },
        { top: 10, left: 25 },
        { top: 25, left: 10 },
        { top: 50, left: 25 },
        { top: 75, left: 10 },
        { top: 90, left: 25 },
        { top: 75, left: 50 },
        { top: 90, left: 75 },
        { top: 75, left: 90 },
        { top: 50, left: 75 },
        { top: 25, left: 90 },
        { top: 10, left: 75 }
    ][house - 1]);
};

const planetsByHouse = (rasiStart: number, planets: Array<IPlanet>) => {
    const normalize = (n: number) => (n <= 0 ? n + 12 : n);

    return groupBy(
        (p: IPlanet & { house: number }) => p.house.toString(),
        planets.map(p => {
            return assoc("house", normalize(p.rasi - rasiStart + 1), p);
        })
    );
};

const toStyle = ({ top, left }: { top: number; left: number }) => ({
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-50%, -50%)`
});

const rasiNumPosition = (rasiStart: number, rasiNum: number) => {
    const house = normalize(rasiNum - rasiStart + 1);
    const d = 5;

    return toStyle(
        [
            { top: 50 - d, left: 50 },
            { top: 25 - d, left: 25 },
            { top: 25, left: 25 - d },
            { top: 50, left: 50 - d },
            { top: 75, left: 25 - d },
            { top: 75 + d, left: 25 },
            { top: 50 + d, left: 50 },
            { top: 75 + d, left: 75 },
            { top: 75, left: 75 + d },
            { top: 50, left: 50 + d },
            { top: 25, left: 75 + d },
            { top: 25 - d, left: 75 }
        ][house - 1]
    );
};

const Chart: React.FC<IProps> = props => {
    const chartPartStyles = {
        width: (props.width || 400) / 2,
        height: (props.height || 300) / 2
    };

    // const planets = planetsByHouse(props.rasiStart, props.planets);
    const planets = {
        "1": [
            {
                name: "Jupiter",
                id: "ju",
                rasi: 6,
                deg: 0.5786524793162471,
                house: 1,
            },
            {
                name: "Saturn",
                id: "sa",
                rasi: 6,
                deg: 27.40081133493061,
                house: 1,
            },
            {
                name: "Ketu",
                id: "ke",
                rasi: 6,
                deg: 26.891276038843955,
                house: 1,
            },
            {
                name: "Lagna",
                id: "as",
                rasi: 6,
                deg: 25.507241838662324,
                house: 1,
            },
        ],
        "7": [
            {
                name: "Venus",
                id: "ve",
                rasi: 12,
                deg: 21.671344009036318,
                house: 7,
            },
        ],
        "8": [
            {
                name: "Sun",
                id: "su",
                rasi: 1,
                deg: 20.811970063628813,
                house: 8,
            },
            {
                name: "Moon",
                id: "mo",
                rasi: 1,
                deg: 16.09437472308948,
                house: 8,
            },
            {
                name: "Mercury",
                id: "me",
                rasi: 1,
                deg: 0.5049777483332178,
                house: 8,
            },
        ],
        "9": [
            {
                name: "Mars",
                id: "ma",
                rasi: 2,
                deg: 29.327838815621988,
                house: 9,
            },
        ],
        "10": [
            {
                name: "Rahu",
                id: "ra",
                rasi: 3,
                deg: 26.891276038843955,
                house: 10,
            },
        ],
    };

    console.log(planets);

    return (
        <div
            className="jy-chart"
            style={{ width: props.width, height: props.height }}
        >
            <div className="jy-chart__part-1" style={chartPartStyles}></div>
            <div className="jy-chart__part-2" style={chartPartStyles}></div>
            <div className="jy-chart__part-3" style={chartPartStyles}></div>
            <div className="jy-chart__part-4" style={chartPartStyles}></div>
            {
                flatten(values(mapObjIndexed((ps, h) => ps.map((p: IPlanet, index) => (
                    <div
                        className={`jy-chart__planet jy-chart__planet--pos-${h}-${ps.length}-${index}`}
                    >
                        {capitalize(p.id)}
                    </div>
                )), planets)))
            }
            {pipe(
                always([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
                map(toString),
                map(n => (
                    <div
                        className={`jy-chart__rasi-num`}
                        style={rasiNumPosition(
                            props.rasiStart,
                            parseInt(n, 10)
                        )}
                    >
                        {n}
                    </div>
                ))
            )()}
        </div>
    );
};

export default Chart;
