import {
    FaBookOpen,
    FaCalendarAlt,
    FaClock,
    FaCog,
    FaInfoCircle,
    FaRegCalendarAlt,
    FaRegCalendarCheck,
    FaSmile,
    FaStar,
    FaUsers,
} from "react-icons/fa";
import type { PageDetail } from "src/types";

export const pageDetails: PageDetail[] = [
    {
        icon: FaCalendarAlt,
        title: "मासिक",
        subtitle: "माह के पक्ष एवं तिथि",
        page: "MonthlyCalendar",
    },
    {
        icon: FaRegCalendarAlt,
        title: "पञ्चाङ्ग",
        subtitle: "दैनिक पञ्चाङ्ग, सूर्योदय/अस्त",
        page: "Panchang",
    },
    {
        icon: FaSmile,
        title: "त्यौहार",
        subtitle: "त्यौहार एवं उत्सव के दिन",
        page: "Festivals",
    },
    {
        icon: FaRegCalendarCheck,
        title: "मेरी तिथि",
        subtitle: "अपनी तिथि सुरक्षित करें",
        page: "MyTithi",
    },
    {
        icon: FaStar,
        title: "कुंडली",
        subtitle: "ग्रह स्थिति, लग्न",
        page: "KundliForm",
    },
    {
        icon: FaUsers,
        title: "कुंडली मिलान",
        subtitle: "गुण मिलान, अष्टकूट",
        page: "KundliMatching",
    },
    {
        icon: FaBookOpen,
        title: "मुहूर्त",
        subtitle: "मुहूर्त, चौघड़िया",
        page: "Muhurta",
    },
    {
        icon: FaClock,
        title: "हिन्दू समय",
        subtitle: "इष्टकाल, घटी विधि",
        page: "HinduTime",
    },
    {
        icon: FaCog,
        title: "सेटिंग्स",
        subtitle: "स्थान और पसंद बदलें",
        page: "Settings",
    },
    {
        icon: FaInfoCircle,
        title: "जानकारी",
        subtitle: "हिन्दू कैलेंडर के बारे में",
        page: "About",
    },
];
