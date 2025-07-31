import { useState } from "react";
import { DateTime } from "src/backend/datetime";
import { parseValidTimezoneOffset } from "src/frontend/utils/parseTimezoneOffset";
import { parseValidAyanamsaName } from "src/frontend/utils/parseValidAyanamsaName";
import { parseValidDate } from "src/frontend/utils/parseValidDate";
import { parseValidDegree } from "src/frontend/utils/parseValidDegree";
import { parseValidPageName } from "src/frontend/utils/parseValidPageName";
import { parseValidTime } from "src/frontend/utils/parseValidTime";

/**
 * Extracts session data from the current URL's query parameters. If a parameter
 * is provided, it must be valid; otherwise, return null.
 *
 * @returns A fully parsed SessionData's Props object.
 * @throws Error if a provided parameter is invalid.
 */
export function useSessionState(): SessionState {
    const { origin, pathname, search } = window.location;
    // const data = JSON.parse(localStorage.getItem("data-form") || "{}");
    const searchParams = new URLSearchParams(search);

    const sessionData: SessionData = {
        url: origin + pathname,
        page: "Home",
        datetime: DateTime.now(),
        city: "Ujjain, Madhya Pradesh, India",
        tz_name: "Asia/Kolkata",
        latitude: 23.1793,
        longitude: 75.784912,
        ayanamsa: "Lahiri",
        error: [],
    };

    try {
        const pageStr = searchParams.get("page");
        if (pageStr) {
            sessionData.page = parseValidPageName(pageStr);
        }
    } catch (e) {
        sessionData.error.push({
            message: String(e),
            type: "warning",
        });
    }

    try {
        const cityStr = searchParams.get("city");
        if (cityStr) {
            sessionData.city = String(cityStr);
        }
    } catch (e) {
        sessionData.error.push({
            message: String(e),
            type: "warning",
        });
    }

    try {
        const tzNameStr = searchParams.get("tz_name");
        if (tzNameStr) {
            sessionData.tz_name = String(tzNameStr);
        }
    } catch (e) {
        sessionData.error.push({
            message: String(e),
            type: "warning",
        });
    }

    try {
        const latStr = searchParams.get("lat");
        const lonStr = searchParams.get("lon");
        if (latStr && lonStr) {
            sessionData.latitude = parseValidDegree(latStr, "lat");
            sessionData.longitude = parseValidDegree(lonStr, "lon");
        } else if (!latStr && lonStr) {
            throw new Error("Longitude passed without Latitude");
        } else if (latStr && !lonStr) {
            throw new Error("Latitude passed without Longitude");
        }
    } catch (e) {
        sessionData.error.push({
            message: String(e),
            type: "warning",
        });
    }

    try {
        const ayanamsaStr = searchParams.get("ayanamsa");
        if (ayanamsaStr) {
            sessionData.ayanamsa = parseValidAyanamsaName(ayanamsaStr);
        }
    } catch (e) {
        sessionData.error.push({
            message: String(e),
            type: "warning",
        });
    }

    try {
        const dateStr = searchParams.get("date");
        if (dateStr) {
            const parsedDate = parseValidDate(dateStr);
            sessionData.datetime = new DateTime(
                parsedDate.year,
                parsedDate.month,
                parsedDate.day,
                sessionData.datetime.hour,
                sessionData.datetime.minute,
                sessionData.datetime.second,
                sessionData.datetime.millisecond,
                sessionData.datetime.timezone_offset
            );
        }
    } catch (e) {
        sessionData.error.push({
            message: String(e),
            type: "warning",
        });
    }

    try {
        const timeStr = searchParams.get("time");
        if (timeStr) {
            const parsedTime = parseValidTime(timeStr);
            sessionData.datetime = new DateTime(
                sessionData.datetime.year,
                sessionData.datetime.month,
                sessionData.datetime.day,
                parsedTime.hour,
                parsedTime.minute,
                parsedTime.second,
                0,
                sessionData.datetime.timezone_offset
            );
        }
    } catch (e) {
        sessionData.error.push({
            message: String(e),
            type: "warning",
        });
    }

    try {
        const tzStr = searchParams.get("tz");
        if (tzStr) {
            const parseTz = parseValidTimezoneOffset(tzStr);
            sessionData.datetime = new DateTime(
                sessionData.datetime.year,
                sessionData.datetime.month,
                sessionData.datetime.day,
                sessionData.datetime.hour,
                sessionData.datetime.minute,
                sessionData.datetime.second,
                sessionData.datetime.millisecond,
                parseTz
            );
        }
    } catch (e) {
        sessionData.error.push({
            message: String(e),
            type: "warning",
        });
    }

    const [data, setData] = useState(sessionData);

    return {
        data,
        setData,
        updateData: (data: Partial<SessionData>) => {
            setData(prev => ({
                ...prev,
                ...data,
            }));
        },
    };
}
