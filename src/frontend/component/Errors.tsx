import { useSessionContext } from "src/frontend/contexts/SessionContext";

export function Errors() {
    const session = useSessionContext();

    if (!session.data.error.length) return null;

    return (
        <div className="alert">
            {session.data.error.map((error, id) => (
                <div key={id} className={error.type}>
                    {error.message}
                </div>
            ))}
        </div>
    );
}
