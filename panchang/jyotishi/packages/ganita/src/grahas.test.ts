import test from "tape";
import { grahaPositions } from "./grahas";
import { sexagesimal as sexa, globe } from "astronomia";
import { zodiacStart } from './index';

test("graha positions", t => {
    t.plan(1);

    const dt = new Date(Date.UTC(1986, 0, 19, 16, 20, 0, 0));
    const lat = new sexa.Angle(false, 22, 47, 0);
    const lon = new sexa.Angle(true, 86, 12, 0);
    const jsr = new globe.Coord(lat.rad(), lon.rad())

    const positions = grahaPositions(zodiacStart(dt), jsr, dt);
    console.log(positions);

    t.pass();
});