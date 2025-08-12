import pako from "pako";
import { useEffect, useState } from "react";
import { ayanamsaNames } from "src/backend/Ayanamsa";
import { useSessionContext } from "src/contexts/SessionContext";
import { formatTimezoneOffset } from "src/utils/formatTimezoneOffset";

export default function KundliForm() {
    const session = useSessionContext();

    const [state, setState] = useState<{
        cityList: [string, number, number, string][];
        filteredCities: [string, number, number, string][];
        timezoneMap: Record<string, number>;
    }>({
        cityList: [],
        filteredCities: [],
        timezoneMap: {
            "Asia/Kolkata": 5.5,
        },
    });

    // Auto-detect location on first mount use gps
    // navigator.geolocation?.getCurrentPosition(pos => {
    //     session.updateData("lat", parseFloat(pos.coords.latitude.toFixed(8)));
    //     session.updateData("lon", parseFloat(pos.coords.longitude.toFixed(8)));
    // });

    useEffect(() => {
        // Fetches a city data.gz JSON file and decompresses it to an JSON object.
        fetch("database/city_database.cjson")
            .then(response => response.arrayBuffer())
            .then(data => {
                setState(prev => ({
                    ...prev,
                    cityList: JSON.parse(
                        pako.ungzip(new Uint8Array(data), {
                            to: "string",
                        })
                    ),
                }));
            })
            .catch(error => {
                throw Error(`Error fetching or decompressing JSON: ${error}`);
            });

        // Load timezone data from zipped JSON
        fetch("database/tz_offset.json")
            .then(res => res.json())
            .then(timezoneMap => {
                setState(prev => ({
                    ...prev,
                    timezoneMap,
                }));
            })
            .catch(err => {
                throw Error(`Failed to fetch tz_offset data: ${err}`);
            });
    }, []);

    // Filter cities dynamically on input change
    const setFilteredCities = (
        filteredCities: [string, number, number, string][]
    ) =>
        setState(prev => ({
            ...prev,
            filteredCities,
        }));

    const handleCityChange = (val: string) => {
        session.updateData({ city: val });
        if (val.trim()) {
            const matches = state.cityList.filter(([name]) =>
                name.toLowerCase().includes(val.toLowerCase())
            );
            setFilteredCities(matches.slice(0, 10));
        } else {
            setFilteredCities([]);
        }
    };

    return (
        <section>
            <h1 className="app-name">Jyotish Birth Chart</h1>
            <h3>Enter Birthdata | कुण्डली के लिये जन्म विवरण</h3>

            <form method="GET" action="">
                <input hidden name="page" value="KundliResult" readOnly />
                <label htmlFor="date">Date of Birth:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={session.data.date}
                    onChange={e => session.updateData({ date: e.target.value })}
                    required
                />

                <label htmlFor="time">Birth Time:</label>
                <input
                    type="time"
                    id="time"
                    name="time"
                    value={session.data.time}
                    onChange={e => session.updateData({ time: e.target.value })}
                    required
                />

                <label htmlFor="city">Birth City:</label>
                <div className="autocomplete">
                    <input
                        id="city"
                        type="search"
                        name="city"
                        value={session.data.city}
                        onChange={e => handleCityChange(e.target.value)}
                        placeholder="Enter City Name"
                        autoComplete="off"
                        tabIndex={0}
                        autoCorrect="off"
                        autoCapitalize="none"
                        spellCheck="false"
                        role="textbox"
                    />
                    <div className="autocomplete-items">
                        {state.filteredCities.map(
                            ([city, lat, lon, tz], idx) => (
                                <div
                                    key={idx}
                                    id={`${city}|${lat}|${lon}|${tz}`}
                                    onClick={e => {
                                        const [city, lat, lon, tz_name] =
                                            e.currentTarget.id.split("|");
                                        session.updateData({
                                            city,
                                            lat: parseFloat(lat),
                                            lon: parseFloat(lon),
                                            tz_name,
                                            tz: state.timezoneMap[tz_name],
                                        });
                                        setFilteredCities([]);
                                    }}>
                                    {
                                        // Highlights a search keyword within text using <strong> tag.
                                        city
                                            .split(
                                                new RegExp(
                                                    `(${session.data.city})`,
                                                    "gi"
                                                )
                                            )
                                            .map((part, i) =>
                                                part.toLowerCase() ===
                                                session.data.city.toLowerCase() ? (
                                                    <strong key={i}>
                                                        {part}
                                                    </strong>
                                                ) : (
                                                    part
                                                )
                                            )
                                    }
                                </div>
                            )
                        )}
                    </div>
                </div>
                <p>
                    🏙️ <strong>Tip:</strong> Type your city in{" "}
                    <strong>English</strong> and choose from the list.
                    <br />
                    🔍 If not found, pick the nearest major city insted.
                    <br />✅ Select the correct city from the list to{" "}
                    <strong>
                        auto-fill the timezone and latitude/longitude
                    </strong>
                </p>
                <label htmlFor="advanced_options_switch">
                    Advanced Options:
                </label>
                <input
                    type="checkbox"
                    id="advanced_options_switch"
                    onChange={() => {
                        document
                            .getElementById("advanced-options")
                            ?.classList.toggle("show");
                    }}
                    className="switch"
                />
                <div className="advanced-options" id="advanced-options">
                    <label htmlFor="tz">TimeZone:</label>
                    <select
                        id="tz"
                        value={formatTimezoneOffset(
                            session.data.tz_name,
                            session.data.tz
                        )}
                        onChange={e => {
                            session.updateData({
                                tz_name: e.target.value.split("[")[0].trim(),
                            });
                            session.updateData({
                                tz: state.timezoneMap[session.data.tz_name],
                            });
                        }}>
                        {Object.entries(state.timezoneMap).map(
                            ([tz_name, tz_offset]) => {
                                const formatedTimezone = formatTimezoneOffset(
                                    tz_name,
                                    tz_offset
                                );
                                return (
                                    <option
                                        key={tz_name}
                                        value={formatedTimezone}>
                                        {formatedTimezone}
                                    </option>
                                );
                            }
                        )}
                    </select>
                    <label htmlFor="lat">Latitude:</label>
                    <input
                        type="number"
                        id="lat"
                        value={session.data.lat}
                        onChange={e =>
                            session.updateData({
                                lat: parseFloat(e.target.value),
                            })
                        }
                        min="-90"
                        max="90"
                        step="0.00000001"
                    />

                    <label htmlFor="lon">Longitude:</label>
                    <input
                        type="number"
                        id="lon"
                        value={session.data.lon}
                        onChange={e =>
                            session.updateData({
                                lon: parseFloat(e.target.value),
                            })
                        }
                        min="-180"
                        max="180"
                        step="0.00000001"
                    />

                    <label htmlFor="ayanamsa">Choose Ayanamsa:</label>
                    <select
                        id="ayanamsa"
                        name="ayanamsa"
                        value={session.data.ayanamsa}
                        onChange={e =>
                            session.updateData({ ayanamsa: e.target.value })
                        }>
                        {ayanamsaNames.map(name => (
                            <option key={name} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>

                <br />

                <button type="submit">Generate</button>
                <button type="reset">Reset</button>
            </form>
        </section>
    );
}
