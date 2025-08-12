import { lazy } from "react";
import { Errors } from "src/components/Errors";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Navigation } from "src/components/Navigation";
import { SessionContext } from "src/contexts/SessionContext";
import { useSessionState } from "src/hooks/useSessionState";
import Home from "src/pages/Home";
import Information from "src/pages/Information";
import KundliForm from "src/pages/KundliForm";
import Panchang from "src/pages/Panchang";
const KundliResult = lazy(() => import("src/pages/KundliResult"));

export function App() {
    const session = useSessionState();

    console.log("session.data:", JSON.stringify(session.data, null, 4));
    console.log(session.sortURL());

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
