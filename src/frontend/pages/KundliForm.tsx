import { useEffect, useState } from "react";
import { ayanamsaNames } from "src/backend/Ayanamsa";
import { DateTime } from "src/backend/datetime";
import { useSessionContext } from "src/frontend/contexts/SessionContext";
import { fetchAndDecompressJson } from "src/frontend/utils/fetchAndDecompressJson";
import { formatTimezoneOffset } from "src/frontend/utils/formatTimezoneOffset";

export default function KundliForm() {
    const session = useSessionContext();

    // Form input states
    const [formData, setFormData] = useState({
        date: session.data.datetime.jsDate.toISOString().split("T")[0],
        time: session.data.datetime.jsDate.toTimeString().slice(0, 8),
        city: session.data.city,
        tz_name: session.data.tz_name,
        tz_offset: session.data.datetime.timezone_offset,
        lat: session.data.latitude,
        lon: session.data.longitude,
        ayanamsa: session.data.ayanamsa,
    });
    const updateFormData = (data: Partial<typeof formData>) => {
        setFormData(prev => ({ ...prev, ...data }));
    };

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const [year, month, day] = formData.date.split("-").map(Number);
        const [hour, minute, second = 0] = formData.time.split(":").map(Number);
        session.updateData({
            page: "KundliResult",
            datetime: new DateTime(
                year,
                month,
                day,
                hour,
                minute,
                second,
                0,
                formData.tz_offset
            ),
            latitude: formData.lat,
            longitude: formData.lon,
            ayanamsa: formData.ayanamsa,
        });
    }

    const [showAdvance, setShowAdvanced] = useState(false);
    const [cityList, setCityList] = useState<
        [string, number, number, string][]
    >([]);
    const [filteredCities, setFilteredCities] = useState<typeof cityList>([]);
    const [timezoneMap, setTimezoneMap] = useState<Record<string, number>>({
        "Asia/Kolkata": 5.5,
    });

    // Auto-detect location on first mount use gps
    // navigator.geolocation?.getCurrentPosition(pos => {
    //     updateFormData("lat", parseFloat(pos.coords.latitude.toFixed(8)));
    //     updateFormData("lon", parseFloat(pos.coords.longitude.toFixed(8)));
    // });

    // Load city data from JSON
    useEffect(() => {
        fetchAndDecompressJson("database/city_database.cjson")
            .then(setCityList)
            .catch(err => console.error("Failed to fetch City data", err));
    }, []);

    // Load timezone data from zipped JSON
    useEffect(() => {
        fetch("database/tz_offset.json")
            .then(res => res.json())
            .then(setTimezoneMap)
            .catch(err => console.error("Failed to fetch Tz offset data", err));
    }, []);

    // Filter cities dynamically on input change
    const handleCityChange = (val: string) => {
        updateFormData({ city: val });
        if (val.trim()) {
            const matches = cityList.filter(([name]) =>
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

            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Date of Birth:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={e => updateFormData({ date: e.target.value })}
                    required
                />

                <label htmlFor="time">Birth Time:</label>
                <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={e => updateFormData({ time: e.target.value })}
                    required
                />

                <label htmlFor="city">Birth City:</label>
                <div className="autocomplete">
                    <input
                        id="city"
                        type="search"
                        name="city"
                        value={formData.city}
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
                        {filteredCities.map(([city, lat, lon, tz], idx) => (
                            <div
                                key={idx}
                                id={`${city}|${lat}|${lon}|${tz}`}
                                onClick={e => {
                                    const [city, lat, lon, tz_name] =
                                        e.currentTarget.id.split("|");
                                    updateFormData({
                                        city: city,
                                        lat: parseFloat(lat),
                                        lon: parseFloat(lon),
                                        tz_name,
                                        tz_offset: timezoneMap[tz_name],
                                    });

                                    setFilteredCities([]);
                                }}>
                                {
                                    //Highlights a search keyword within text using <strong> tag.
                                    city
                                        .split(
                                            new RegExp(
                                                `(${formData.city})`,
                                                "gi"
                                            )
                                        )
                                        .map((part, i) =>
                                            part.toLowerCase() ===
                                            formData.city.toLowerCase() ? (
                                                <strong key={i}>{part}</strong>
                                            ) : (
                                                part
                                            )
                                        )
                                }
                            </div>
                        ))}
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
                    checked={showAdvance}
                    onChange={() => setShowAdvanced(!showAdvance)}
                    className="switch"
                />
                <input hidden name="tz" value={formData.tz_offset} readOnly />
                <input hidden name="lat" value={formData.lat} readOnly />
                <input hidden name="lon" value={formData.lon} readOnly />

                {showAdvance && (
                    <div className="advanced-options">
                        <label htmlFor="tz">TimeZone:</label>
                        <select
                            id="tz"
                            value={formatTimezoneOffset(
                                formData.tz_name,
                                formData.tz_offset
                            )}
                            onChange={e => {
                                updateFormData({
                                    tz_name: e.target.value
                                        .split("[")[0]
                                        .trim(),
                                });
                                updateFormData({
                                    tz_offset: timezoneMap[formData.tz_name],
                                });
                            }}>
                            {Object.entries(timezoneMap).map(
                                ([tz_name, tz_offset]) => {
                                    const formatedTimezone =
                                        formatTimezoneOffset(
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
                            value={formData.lat}
                            onChange={e =>
                                updateFormData({
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
                            value={formData.lon}
                            onChange={e =>
                                updateFormData({
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
                            value={formData.ayanamsa}
                            onChange={e =>
                                updateFormData({ ayanamsa: e.target.value })
                            }>
                            {ayanamsaNames.map(name => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                <br />

                <button type="submit">Generate</button>
                <button type="reset">Reset</button>
            </form>
        </section>
    );
}
