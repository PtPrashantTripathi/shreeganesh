import * as React from "react";
import { assoc, pipe } from "ramda";
import {
    FormGroup,
    InputGroup,
    Card,
    Elevation,
    Radio,
    RadioGroup,
    Button,
    AnchorButton
} from "@blueprintjs/core";
import {
    DateInput,
    IDateFormatProps,
    TimePicker,
    TimePrecision
} from "@blueprintjs/datetime";
import moment from "moment";
import Geosuggest from "react-geosuggest";
import SearchPlaces, { IPlace } from "./SearchPlaces";

function getMomentFormatter(format: string): IDateFormatProps {
    return {
        formatDate: (date, locale) => moment(date).format(format),
        parseDate: (str, locale) => moment(str, format).toDate(),
        placeholder: format
    };
}

const DataForm: React.FC = () => {
    const [birthData, setBirthData] = React.useState({
        name: "",
        birthdate: new Date(Date.now()),
        gender: "f",
        lat: 0,
        lon: 0,
        utc_offset_minutes: 0
    });

    return (
        <Card elevation={Elevation.TWO} className="jy-data-form">
            <div className="jy-data-form__body">
                <FormGroup
                    helperText="Please enter full name or purpose of this chart..."
                    label="Name"
                    labelFor="name"
                    labelInfo="(required)"
                >
                    <InputGroup
                        id="name"
                        placeholder="Enter Name"
                        onChange={(event: React.FormEvent<HTMLInputElement>) => {
                            console.log(event.currentTarget.value);
                            setBirthData(
                                assoc("name", event.currentTarget.value, birthData)
                            );
                        }}
                    />
                </FormGroup>
                <FormGroup
                    helperText="Date as per Georgian Calendar"
                    label="Birthdate"
                    labelFor="birthdate"
                    labelInfo="(required)"
                >
                    <DateInput
                        {...getMomentFormatter("YYYY-MM-DD")}
                        locale="de"
                        value={birthData.birthdate}
                        onChange={(date: Date, isUserChange: boolean) => {
                            if (isUserChange) {
                                const newDate = new Date(
                                    date.getFullYear(),
                                    date.getMonth(),
                                    date.getDate(),
                                    birthData.birthdate.getHours(),
                                    birthData.birthdate.getMinutes(),
                                    birthData.birthdate.getSeconds(),
                                    birthData.birthdate.getMilliseconds()
                                );
                                setBirthData(
                                    assoc("birthdate", newDate, birthData)
                                );
                            }
                        }}
                    />
                </FormGroup>
                <FormGroup
                    helperText="Local time at place of birth"
                    label="Birthtime"
                    labelFor="birthtime"
                    labelInfo="(required)"
                >
                    <TimePicker
                        precision={TimePrecision.SECOND}
                        useAmPm={true}
                        value={birthData.birthdate}
                        onChange={(time: Date) => {
                            const newDate = new Date(
                                birthData.birthdate.getFullYear(),
                                birthData.birthdate.getMonth(),
                                birthData.birthdate.getDate(),
                                time.getHours(),
                                time.getMinutes(),
                                time.getSeconds(),
                                time.getMilliseconds()
                            );
                            setBirthData(assoc("birthdate", newDate, birthData));
                        }}
                    />
                </FormGroup>
                <FormGroup label="Gender" labelFor="gender">
                    <RadioGroup
                        selectedValue={birthData.gender}
                        onChange={(e: React.FormEvent<HTMLInputElement>) => {
                            setBirthData(
                                assoc("gender", e.currentTarget.value, birthData)
                            );
                        }}
                        inline={true}
                    >
                        <Radio label="Male" value="m" />
                        <Radio label="Female" value="f" />
                    </RadioGroup>
                </FormGroup>
                <FormGroup label="Birth Place" labelInfo="(required)">
                    {/*
                    <Geosuggest
                        onSuggestSelect={value => {
                            console.log(
                                pipe(
                                    assoc("lat", value.location.lat),
                                    assoc("lon", value.location.lng),
                                    assoc(
                                        "utc_offset_minutes",
                                        // @ts-ignore TypeScript does not yet know that gmaps has utc_offset_minutes
                                        value.gmaps ? value.gmaps.utc_offset_minutes : 0
                                    )
                                )(birthData)
                            );
                            setBirthData(
                                pipe(
                                    assoc("lat", value.location.lat),
                                    assoc("lon", value.location.lng),
                                    assoc(
                                        "utc_offset_minutes",
                                        // @ts-ignore TypeScript does not yet know that gmaps has utc_offset_minutes
                                        value.gmaps ? value.gmaps.utc_offset_minutes : 0
                                    )
                                )(birthData)
                            );
                        }}
                    />
                    */}
                    <SearchPlaces
                        onItemSelect={(value: IPlace) => {
                            setBirthData(
                                pipe(
                                    assoc("lat", value.geometry.lat),
                                    assoc("lon", value.geometry.lng),
                                    assoc("offset_sec", value.timezone.offset_sec)
                                )(birthData)
                            );
                        }}
                    />
                </FormGroup>
            </div>
            <div className="jy-data-form__footer">
                <AnchorButton intent="primary" onClick={() => {
                    localStorage.setItem("data-form", JSON.stringify(birthData));
                }}>Generate Chart</AnchorButton>
                <AnchorButton minimal={true}>Cancel</AnchorButton>
            </div>
        </Card>
    );
};

export default DataForm;
