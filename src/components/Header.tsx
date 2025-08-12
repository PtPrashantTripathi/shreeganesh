import { FaBars } from "react-icons/fa";
import { useSessionContext } from "src/contexts/SessionContext";
export function Header() {
    const session = useSessionContext();

    function handleToggleNav() {
        const nav = document.querySelector("nav");
        if (nav) {
            nav.classList.toggle("active");

            const handleClickOutside = (event: MouseEvent) => {
                if (!nav.contains(event.target as Node)) {
                    nav.classList.remove("active");
                    document.removeEventListener("click", handleClickOutside);
                }
            };

            // Only add listener if nav is active
            if (nav.classList.contains("active")) {
                setTimeout(() => {
                    document.addEventListener("click", handleClickOutside);
                }, 0); // Delay ensures current click doesn't instantly close it
            }
        }
    }

    return (
        <header>
            <button className="nav-toggle" onClick={handleToggleNav}>
                <FaBars />
            </button>
            <h3>
                <a
                    onClick={() => {
                        session.updateData({ page: "Home" });
                    }}>
                    Vedic Kundli
                </a>
            </h3>
            <div className="profile">P</div>
        </header>
    );
}
