# datetime

A lightweight, zero-dependency `DateTime` utility class in TypeScript that
handles timezone offsets, ISO strings, and common date-time operations with
precision and clarity.

## ✨ Features

- Create date-time instances with custom timezone offsets
- Convert to/from ISO strings, JS `Date`, or Unix epoch
- Timezone-aware formatting
- Add/subtract time (milliseconds to days)
- Easily clone and transform to other zones
- Lightweight: No dependencies
- Fully typed in TypeScript

## 🚀 Usage

### Create with full details

```ts
const dt = new DateTime(2025, 7, 31, 14, 30, 0, 0, +5.5); // Asia/Kolkata timezone
console.log(dt.toISOString());
// → 2025-07-31T14:30:00.000+05:30
```

### Get current time in your system timezone

```ts
const now = DateTime.now();
console.log(now.toString());
```

### Convert to another timezone

```ts
const nyTime = dt.toTimeZone(-4); // EDT
console.log(nyTime.toISOString());
```

### From ISO or JS `Date`

```ts
const fromIso = DateTime.fromISO("2025-12-21T06:00:00.000Z");
const fromDate = DateTime.fromDate(new Date());
```

### Add time

```ts
const tomorrow = dt.addDays(1);
const in30min = dt.addMinutes(30);
```

## 📘 API Reference

### Constructor

```ts
new DateTime(
  year: number,
  month: number = 1,
  day: number = 1,
  hour: number = 0,
  minute: number = 0,
  second: number = 0,
  millisecond: number = 0,
  timezone_offset: number = 0 // in hours, e.g., +5.5
)
```

### Methods

| Method               | Description                                       |
| -------------------- | ------------------------------------------------- |
| `toISOString()`      | Returns ISO 8601 string with timezone             |
| `toString()`         | Localized readable format with timezone awareness |
| `toObject()`         | Returns plain object with all time fields         |
| `toTimeZone(offset)` | Converts to a new timezone (returns new instance) |
| `getWeekDay()`       | Returns day of the week (0 = Sunday)              |
| `clone()`            | Returns a deep copy                               |
| `addDays(n)`         | Adds decimal days                                 |
| `addHours(n)`        | Adds decimal hours                                |
| `addMinutes(n)`      | Adds decimal minutes                              |
| `addSeconds(n)`      | Adds decimal seconds                              |
| `addMilliseconds(n)` | Adds milliseconds                                 |

### Static Methods

| Method                     | Description                                    |
| -------------------------- | ---------------------------------------------- |
| `DateTime.now()`           | Current time in local timezone                 |
| `DateTime.nowUTC()`        | Current time in UTC                            |
| `DateTime.fromISO(string)` | Parses ISO string to DateTime                  |
| `DateTime.fromDate(Date)`  | From native JS Date                            |
| `DateTime.fromEpoch(ms)`   | From UTC milliseconds since epoch (1970-01-01) |

## 📦 Example Output

```ts
const dt = new DateTime(2025, 7, 31, 14, 30, 0, 0, +5.5);
console.log(dt.toString());
// → Jul 31, 2025, 02:30:00 PM

console.log(dt.toISOString());
// → 2025-07-31T14:30:00.000+05:30
```
