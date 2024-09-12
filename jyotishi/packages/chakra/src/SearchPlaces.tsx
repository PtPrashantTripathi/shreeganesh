import * as React from 'react';
import { Suggest } from "@blueprintjs/select";
import axios from "axios";
import { pick, assoc, pipe } from 'ramda';
import { MenuItem } from '@blueprintjs/core';

function escapeRegExpChars(text: string) {
    return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function highlightText(text: string, query: string) {
    let lastIndex = 0;
    const words = query
        .split(/\s+/)
        .filter(word => word.length > 0)
        .map(escapeRegExpChars);
    if (words.length === 0) {
        return [text];
    }
    const regexp = new RegExp(words.join("|"), "gi");
    const tokens: React.ReactNode[] = [];
    while (true) {
        const match = regexp.exec(text);
        if (!match) {
            break;
        }
        const length = match[0].length;
        const before = text.slice(lastIndex, regexp.lastIndex - length);
        if (before.length > 0) {
            tokens.push(before);
        }
        lastIndex = regexp.lastIndex;
        tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
    }
    const rest = text.slice(lastIndex);
    if (rest.length > 0) {
        tokens.push(rest);
    }
    return tokens;
}

const getAPIUrl = (search: string) =>
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(search)}&key=98e1809b9cec459ea833736ef4dd878a&pretty=1`

type Props = {
    onItemSelect: ((item: IPlace, event?: React.SyntheticEvent<HTMLElement, Event> | undefined) => void)
}

export type IPlace = {
    rank: number,
    formatted: string,
    geometry: {
        lat: number,
        lng: number
    },
    timezone: {
        offset_sec: number
    }
}

type IResultItem = {
    annotations: {
        timezone: {
            name: number,
            now_in_dst: number,
            offset_sec: number,
            offset_string: string,
            short_name: string
        }
    },
    formatted: string,
    geometry: {
        lat: number,
        lng: number
    }
}

const toPlace = (p: IResultItem, i: number) => pipe(
    assoc("rank", i),
    assoc("timezone", p.annotations.timezone),
    assoc("formatted", p.formatted),
    assoc("geometry", p.geometry)
)({});


const SearchPlaces: React.FC<Props> = props => {
    const [items, setItems] = React.useState([]);
    return (
        <Suggest
            items={items}
            onQueryChange={(query: string) => {
                axios.get(getAPIUrl(query)).then(res => {
                    if (res.data.results.length) {
                        setItems(res.data.results.map(toPlace))
                    }
                })
            }}
            itemRenderer={(place: IPlace, { handleClick, modifiers, query }) => {
                return (
                    <MenuItem
                        active={modifiers.active}
                        disabled={modifiers.disabled}
                        key={place.rank}
                        onClick={handleClick}
                        text={highlightText(place.formatted, query)}
                    />
                )
            }}
            inputValueRenderer={(place) => place.formatted}
            onItemSelect={props.onItemSelect}
        ></Suggest>
    );
};

export default SearchPlaces;