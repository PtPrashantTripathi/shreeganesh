import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "src/app";

createRoot(document.body).render(
    <StrictMode>
        <App />
    </StrictMode>
);
