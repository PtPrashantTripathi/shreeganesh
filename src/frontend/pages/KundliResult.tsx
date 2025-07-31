import { useEffect, useState } from "react";
import { getPlanetaryPosition } from "src/backend/Kundli";
import { DMS } from "src/backend/utils";
import ChartInfoTable from "src/frontend/component/ChartInfoTable";
import KundliChartSVG from "src/frontend/component/KundliChartSVG";
import KundliYogPhala from "src/frontend/component/KundliYogPhala";
import Loader from "src/frontend/component/Loader";
import VimsottariDasa from "src/frontend/component/VimsottariDasa";
import { useSessionContext } from "src/frontend/contexts/SessionContext";

export default function KundliResult() {
    const session = useSessionContext();
    const [kundliData, setKundliData] = useState<Kundli | null>(null);

    useEffect(() => {
        async function fetchKundli() {
            const result = await getPlanetaryPosition(
                session.data.datetime,
                session.data.longitude,
                session.data.latitude,
                0
            );
            setKundliData(result);
        }

        fetchKundli();
    }, [session.data]);

    if (kundliData) {
        return (
            <>
                <section>
                    <h1>Basic Birth Details</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>datetime</td>
                                <td>{kundliData.datetime.toString()}</td>
                            </tr>
                            <tr>
                                <td>latitude</td>
                                <td>{DMS(kundliData.latitude).toString()}</td>
                            </tr>
                            <tr>
                                <td>longitude</td>
                                <td>{DMS(kundliData.longitude).toString()}</td>
                            </tr>
                            <tr>
                                <td>julian_datetime</td>
                                <td>{kundliData.julian_datetime}</td>
                            </tr>
                            <tr>
                                <td>ayanamsa</td>
                                <td>
                                    {session.data.ayanamsa} (
                                    {DMS(kundliData.ayanamsa).toString()})
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section>
                    <h1>Information Chart</h1>
                    <ChartInfoTable grahaData={kundliData.planets} />
                </section>

                <section>
                    <h1>Birth Chart</h1>

                    <h3>Ascendant Chart</h3>
                    <KundliChartSVG
                        chartData={Object.values(kundliData.planets).map(
                            planet => ({
                                name: planet.name.english,
                                rasi: planet.rasi,
                            })
                        )}
                    />
                    <h3>Hora Chart</h3>
                    <KundliChartSVG
                        chartData={Object.values(kundliData.planets).map(
                            planet => ({
                                name: planet.name.english,
                                rasi: planet.divisional.hora,
                            })
                        )}
                    />
                    <h3>Shashthamsa Chart</h3>
                    <KundliChartSVG
                        chartData={Object.values(kundliData.planets).map(
                            planet => ({
                                name: planet.name.english,
                                rasi: planet.divisional.shashtamsa,
                            })
                        )}
                    />
                    <h3>Ashthamsa chart</h3>
                    <KundliChartSVG
                        chartData={Object.values(kundliData.planets).map(
                            planet => ({
                                name: planet.name.english,
                                rasi: planet.divisional.ashtamsa,
                            })
                        )}
                    />
                    <h3>Navamsa chart</h3>
                    <KundliChartSVG
                        chartData={Object.values(kundliData.planets).map(
                            planet => ({
                                name: planet.name.english,
                                rasi: planet.divisional.navamsa,
                            })
                        )}
                    />
                </section>

                <KundliYogPhala yogPhala={kundliData.yogPhala} />

                <VimsottariDasa dasaData={kundliData.vimsottari_dasa} />
            </>
        );
    } else {
        return <Loader />;
    }
}
