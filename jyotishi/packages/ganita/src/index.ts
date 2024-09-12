export { grahaPositions } from "./grahas";
import { deltaCancriPos } from "./delta-cancri";

export const zodiacStart = (date: Date) => {
    return (
        deltaCancriPos(date) -
        16 - // Delta Cancri is assumed to be at 16Cn0
        90 // Ar + Ta + Ge
    );
};
