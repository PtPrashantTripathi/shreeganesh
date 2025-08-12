import type { Planet } from "src/backend/Planet";
import type { phala, PlanetEn, SourceBookEn } from "src/backend/types";
import { getBhriguSamhitaPlanetRasiHouseYogPhala } from "src/backend/YogPhala/BhriguSamhita/getPlanetRasiHouseEffects";
import { getBPHSLordshipYogPhala } from "src/backend/YogPhala/BPHS/getLordship";
import { getBPHSUpagrahaAndKalavelaHouseEffectsYogPhala } from "src/backend/YogPhala/BPHS/getUpagrahaAndKalavelaHouseEffects";
import { getBrihatJatakaMoonNakshatraEffectYogPhala } from "src/backend/YogPhala/BrihatJataka/getMoonNakshatraEffect";
import { getPhalaDeepikaAscendantYogPhala } from "src/backend/YogPhala/PhalaDeepika/getAscendant";
import { getPhalaDeepikaPlanetHouseEffectsYogPhala } from "src/backend/YogPhala/PhalaDeepika/getPlanetHouseEffects";
import { getSaravaliAspectYogPhala } from "src/backend/YogPhala/Saravali/getAspect";
import { getSaravaliConjunctionYogPhala } from "src/backend/YogPhala/Saravali/getConjunction";
import { getSaravaliPlanetHouseYogPhala } from "src/backend/YogPhala/Saravali/getHousePosition";
import { getSaravaliLunarYogPhala } from "src/backend/YogPhala/Saravali/getLunar";
import { getSaravaliNabhasaYogPhala } from "src/backend/YogPhala/Saravali/getNabhasa";
import { getSaravaliRasiPositionYogPhala } from "src/backend/YogPhala/Saravali/getRasiPosition";

export function calcYogPhala(
    planets: Record<PlanetEn, Planet>
): Partial<Record<SourceBookEn, Record<string, phala[]>>> {
    return {
        BhriguSamhita: {
            PlanetRasiHouse: getBhriguSamhitaPlanetRasiHouseYogPhala(planets),
        },
        BPHS: {
            Lordship: getBPHSLordshipYogPhala(planets),
            UpagrahasAndKalavelas:
                getBPHSUpagrahaAndKalavelaHouseEffectsYogPhala(planets),
        },
        BrihatJataka: {
            NakshatraPosition: [
                getBrihatJatakaMoonNakshatraEffectYogPhala(planets),
            ],
        },
        PhalaDeepika: {
            Ascendant: [getPhalaDeepikaAscendantYogPhala(planets)],
            HousePosition: getPhalaDeepikaPlanetHouseEffectsYogPhala(planets),
        },
        Saravali: {
            Aspect: getSaravaliAspectYogPhala(planets),
            Conjunction: getSaravaliConjunctionYogPhala(planets),
            HousePosition: getSaravaliPlanetHouseYogPhala(planets),
            Lunar: getSaravaliLunarYogPhala(planets),
            Nabhasa: getSaravaliNabhasaYogPhala(planets),
            RasiPosition: getSaravaliRasiPositionYogPhala(planets),
        },
    };
}
