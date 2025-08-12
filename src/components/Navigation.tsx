// import { useSessionContext } from "src/contexts/SessionContext";
import { pageDetails } from "src/pages/pageDetails";

export function Navigation() {
    // const session = useSessionContext();
    // const nav = document.querySelector("nav");
    //   onClick={e => {
    //                     e.preventDefault();
    //                     nav?.classList.remove("active"); // closes nav on link click
    //                     session.updateData({ page: item.page });
    //                 }}

    return (
        <nav>
            <h1>📅 Hindu Calendar</h1>
            {pageDetails.map((item, idx) => (
                <a key={idx} href={"?page=" + item.page}>
                    <span>
                        <item.icon />
                    </span>
                    {item.title}
                </a>
            ))}
        </nav>
    );
}
