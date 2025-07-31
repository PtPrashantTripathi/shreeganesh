type ValidPageType =
    | "Home"
    | "Panchang"
    | "KundliForm"
    | "KundliResult"
    | "Information"
    | "MonthlyCalendar"
    | "Festivals"
    | "MyTithi"
    | "KundliMatching"
    | "Muhurta"
    | "HinduTime"
    | "Settings"
    | "About";

interface ErrorType {
    type: "error" | "warning" | "info" | "success";
    message: string;
}

interface SessionData {
    url: string;
    page: ValidPageType;
    datetime: IDateTime;
    latitude: number;
    longitude: number;
    ayanamsa: string;
    city: string;
    tz_name: string;
    error: ErrorType[];
}
interface SessionState {
    data: SessionData;
    updateData: (data: Partial<SessionData>) => void;
    setData: React.Dispatch<React.SetStateAction<SessionData>>;
}
interface PageDetail {
    icon: IconType;
    page: ValidPageType;
    title: string;
    subtitle: string;
}
