export class DateTime {
    public year: number;
    public month: number;
    public day: number;
    public hour: number;
    public minute: number;
    public second: number;
    public millisecond: number;
    public timezone_offset: number;
    public readonly jsDate: Date;

    constructor(
        year: number,
        month: number = 1,
        day: number = 1,
        hour: number = 0,
        minute: number = 0,
        second: number = 0,
        millisecond: number = 0,
        timezone_offset: number = 0
    ) {
        // Store Equivalent Date in you current browser time epoch adjusted by timezone offset
        this.jsDate = new Date(
            Date.UTC(year, month - 1, day) +
                hour * 60 * 60 * 1000 +
                minute * 60 * 1000 +
                second * 1000 +
                millisecond -
                timezone_offset * 60 * 60 * 1000
        );

        const local = new Date(
            this.jsDate.getTime() + timezone_offset * 3600 * 1000
        );

        this.year = local.getUTCFullYear();
        this.month = local.getUTCMonth() + 1;
        this.day = local.getUTCDate();
        this.hour = local.getUTCHours();
        this.minute = local.getUTCMinutes();
        this.second = local.getUTCSeconds();
        this.millisecond = local.getUTCMilliseconds();
        this.timezone_offset = timezone_offset;
    }

    toString(): string {
        return new Date(
            this.jsDate.getTime() + this.timezone_offset * 3600 * 1000
        ).toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
            timeZone: "UTC",
        });
    }

    toISOString(): string {
        const pad = (n: number, len = 2) => String(n).padStart(len, "0");

        const y = this.year;
        const m = pad(this.month);
        const d = pad(this.day);
        const h = pad(this.hour);
        const min = pad(this.minute);
        const s = pad(this.second);
        const ms = pad(this.millisecond, 3);

        if (this.timezone_offset === 0) {
            return `${y}-${m}-${d}T${h}:${min}:${s}.${ms}Z`;
        } else {
            const sign = this.timezone_offset >= 0 ? "+" : "-";
            const absOffset = Math.abs(this.timezone_offset);
            const tzH = pad(Math.floor(absOffset));
            const tzM = pad(Math.round((absOffset % 1) * 60));
            return `${y}-${m}-${d}T${h}:${min}:${s}.${ms}${sign}${tzH}:${tzM}`;
        }
    }

    /** Converts to a new time zone. */
    toTimeZone(newOffsetHours: number): DateTime {
        return DateTime.fromEpoch(this.jsDate.getTime(), newOffsetHours);
    }

    /** Returns day of the week (0 = Sunday, 6 = Saturday) */
    getWeekDay(): number {
        return this.jsDate.getUTCDay();
    }

    /** Clone this instance */
    clone(): DateTime {
        return new DateTime(
            this.year,
            this.month,
            this.day,
            this.hour,
            this.minute,
            this.second,
            this.millisecond,
            this.timezone_offset
        );
    }

    /** Returns a plain object snapshot */
    toObject(): object {
        return {
            year: this.year,
            month: this.month,
            day: this.day,
            hour: this.hour,
            minute: this.minute,
            second: this.second,
            millisecond: this.millisecond,
            timezone_offset: this.timezone_offset,
        };
    }

    addMilliseconds(totalMilliseconds: number): DateTime {
        return DateTime.fromEpoch(this.jsDate.getTime() + totalMilliseconds);
    }

    addSeconds(decimalSeconds: number): DateTime {
        return this.addMilliseconds(decimalSeconds * 1000);
    }

    addMinutes(decimalMinutes: number): DateTime {
        return this.addSeconds(decimalMinutes * 60);
    }

    addHours(decimalHours: number): DateTime {
        return this.addMinutes(decimalHours * 60);
    }

    addDays(decimalDays: number): DateTime {
        return this.addHours(decimalDays * 24);
    }

    /** Create from native JS Date */
    static fromDate(date: Date): DateTime {
        return DateTime.fromEpoch(
            date.getTime(),
            -new Date().getTimezoneOffset() / 60
        );
    }

    /** Create from UTC epoch in ms */
    static fromEpoch(epochMs: number, timezone_offset: number = 0): DateTime {
        const local = new Date(epochMs + timezone_offset * 3600 * 1000);
        return new DateTime(
            local.getUTCFullYear(),
            local.getUTCMonth() + 1,
            local.getUTCDate(),
            local.getUTCHours(),
            local.getUTCMinutes(),
            local.getUTCSeconds(),
            local.getUTCMilliseconds(),
            timezone_offset
        );
    }

    /** Create from ISO string (e.g. 2025-07-02T14:00:00.000Z) */
    static fromISO(isoString: string): DateTime {
        return DateTime.fromDate(new Date(isoString));
    }

    /** Shortcut: current date in given time zone */
    static now(): DateTime {
        return DateTime.fromDate(new Date());
    }

    /** Shortcut: current UTC date-time */
    static nowUTC(): DateTime {
        return DateTime.fromDate(new Date());
    }
}
