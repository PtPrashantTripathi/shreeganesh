import { lazy } from "react";
import { Errors } from "src/frontend/component/Errors";
import { Footer } from "src/frontend/component/Footer";
import { Header } from "src/frontend/component/Header";
import { Navigation } from "src/frontend/component/Navigation";
import { SessionContext } from "src/frontend/contexts/SessionContext";
import { useSessionState } from "src/frontend/hooks/useSessionState";
import Home from "src/frontend/pages/Home";
import Information from "src/frontend/pages/Information";
import KundliForm from "src/frontend/pages/KundliForm";
import Panchang from "src/frontend/pages/Panchang";
const KundliResult = lazy(() => import("src/frontend/pages/KundliResult"));

export function App() {
    const session = useSessionState();

    console.log("session.data:", JSON.stringify(session.data, null, 4));

    const queryParams = new URLSearchParams({
        page: session.data.page,
        date: session.data.datetime.jsDate.toISOString().split("T")[0],
        time: session.data.datetime.jsDate.toTimeString().slice(0, 8),
        city: session.data.city,
        tz_name: session.data.tz_name,
        tz: session.data.datetime.timezone_offset,
        lat: session.data.latitude.toString(),
        lon: session.data.longitude.toString(),
        ayanamsa: session.data.ayanamsa,
    }).toString();
    console.log(`${session.data.url}?${queryParams}`);

    return (
        <SessionContext value={session}>
            <Header />
            <Navigation />
            <main>
                <Errors />
                {session.data.page === "KundliForm" ? (
                    <KundliForm />
                ) : session.data.page === "KundliResult" ? (
                    <KundliResult />
                ) : session.data.page === "Information" ? (
                    <Information />
                ) : session.data.page === "Panchang" ? (
                    <Panchang />
                ) : session.data.page === "Home" ? (
                    <Home />
                ) : (
                    <section>
                        <h3>ERROR 404</h3>
                    </section>
                )}
            </main>
            <Footer />
        </SessionContext>
    );
}
