import { getAscendantPhalaDeepika } from "src/backend/YogPhala/getAscendantPhalaDeepika";
import { getAspectSaravali } from "src/backend/YogPhala/getAspectSaravali";
import { getConjunctionSaravali } from "src/backend/YogPhala/getConjunctionSaravali";
import { getHousePosition } from "src/backend/YogPhala/getHousePosition";
import { getHousePositionPhalaDeepika } from "src/backend/YogPhala/getHousePositionPhalaDeepika";
import { getLordshipBPHS } from "src/backend/YogPhala/getLordshipBPHS";
import { getLunar } from "src/backend/YogPhala/getLunar";
import { getNabhasa } from "src/backend/YogPhala/getNabhasa";
import { getNakshatraPositionBrihatJataka } from "src/backend/YogPhala/getNakshatraPositionBrihatJataka";
import { getRasiPosition } from "src/backend/YogPhala/getRasiPosition";
import { getUpagrahasAndKalavelas } from "src/backend/YogPhala/getUpagrahasAndKalavelas";

export function calcYogPhala(
    planets: Record<PlanetEnglishType, Planet>
): Partial<Record<SourceBookEnglishType, Record<string, rules[]>>> {
    return {
        BPHS: {
            Lordship: getLordshipBPHS(planets),
            UpagrahasAndKalavelas: getUpagrahasAndKalavelas(planets),
        },
        BrihatJataka: {
            NakshatraPosition: getNakshatraPositionBrihatJataka(planets),
        },
        PhalaDeepika: {
            Ascendant: getAscendantPhalaDeepika(planets),
            HousePosition: getHousePositionPhalaDeepika(planets),
        },
        Saravali: {
            Aspect: getAspectSaravali(planets),
            Conjunction: getConjunctionSaravali(planets),
            HousePosition: getHousePosition(planets),
            Lunar: getLunar(planets),
            Nabhasa: getNabhasa(planets),
            RasiPosition: getRasiPosition(planets),
        },
    };
}
