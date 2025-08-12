import { useSessionContext } from "src/contexts/SessionContext";
import { pageDetails } from "src/pages/pageDetails";

export default function Home() {
    const session = useSessionContext();

    return (
        <section>
            <h1>📅 Hindu Calendar</h1>
            <div className="grid">
                {pageDetails.map((item, idx) => {
                    return (
                        <div
                            className="grid-item"
                            key={idx}
                            onClick={() =>
                                session.updateData({ page: item.page })
                            }>
                            <item.icon />
                            <br />

                            <span>{item.title}</span>
                            <small>{item.subtitle}</small>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
