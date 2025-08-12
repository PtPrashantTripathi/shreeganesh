// src/contexts/SessionContext.ts
import { createContext, useContext } from "react";
import type { SessionState } from "src/types";

export const SessionContext = createContext<SessionState | undefined>(
    undefined
);

export const useSessionContext = () => {
    const context = useContext(SessionContext);
    if (context === undefined) {
        throw new Error("useSession must be used within an SessionProvider");
    }
    return context;
};
