import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { getPanchanga } from "src/backend/panchanga";
import Loader from "src/components/Loader";
import { useSessionContext } from "src/contexts/SessionContext";

export default function Panchang() {
    const session = useSessionContext();

    const [data, setData] = useState<Awaited<
        ReturnType<typeof getPanchanga>
    > | null>(null);

    useEffect(() => {
        async function fetchKundli() {
            const result = await getPanchanga(
                DateTime.fromISO(`${session.data.date}T${session.data.time}`, {
                    zone: session.data.tz_name,
                }) as DateTime<true>,
                session.data.lon,
                session.data.lat,
                0,
                0
            );
            console.log(result);
            setData(result);
        }

        fetchKundli();
    }, [session.data]);

    if (data) {
        return (
            <>
                {/* Info Section */}
                <section>
                    <h1>हिन्दू कैलेंडर</h1>
                    <h1>📅 दिन का विवरण</h1>
                    <p>
                        <strong>वार:</strong> {data.vara.name.english}
                    </p>
                    <p>
                        <strong>मास:</strong> {data.masa.name.english}
                    </p>
                    <p>
                        <strong>तिथि:</strong> {data.tithi.name.english} (
                        {data.tithi.pakshaname.english} पक्ष)
                    </p>
                    <p>
                        <strong>नक्षत्र:</strong> {data.nakshatra.name.english}
                    </p>
                    <p>
                        <strong>योग:</strong> {data.yoga.name.english}
                    </p>
                    <p>
                        <strong>करण:</strong> {data.karana.name.english}
                    </p>
                    <p>
                        <strong>संवत्सर:</strong> {data.samvatsara.name.english}
                    </p>
                </section>

                {/* Time Section */}
                <section>
                    <h1>🌄 समय</h1>
                    <p>
                        <strong>सूर्योदय:</strong> {data.sunrise.toISO()}
                    </p>
                    <p>
                        <strong>सूर्यास्त:</strong> {data.sunset.toISO()}
                    </p>
                    <p>
                        <strong>चंद्रोदय:</strong> {data.moonrise.toISO()}
                    </p>
                    <p>
                        <strong>चंद्रास्त:</strong> {data.moonset.toISO()}
                    </p>
                    <p>
                        <strong>राहु काल:</strong> {data.rahuKalam.start} -{" "}
                        {data.rahuKalam.end}
                    </p>
                </section>

                <section>
                    <div>🕐 01:26 am, 15 जुलाई 2025</div>
                    <div>हिन्दू समय 48:48</div>
                    <div>पंचमी, कृष्ण पक्ष, श्रावण</div>
                    <div>(1 से) पूर्वाभाद्रपदा, मंगलवार, 2082 विक्रम संवत</div>
                    <div>चौघड़िया: उदया 24:07* - 25:34*</div>
                </section>
            </>
        );
    } else {
        return <Loader />;
    }
}
