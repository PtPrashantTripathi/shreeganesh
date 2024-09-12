export default class DateTime {
  constructor(input, timezone = 5.5) {
    this.dt = new Date(input);
    // Extract date and time components from the Date object
    this.year = this.dt.getFullYear();
    this.month = this.dt.getMonth() + 1; // Months are zero-indexed (0 = January)
    this.date = this.dt.getDate();
    this.hour = this.dt.getHours();
    this.minute = this.dt.getMinutes();
    this.second = this.dt.getSeconds();
    this.ms = this.dt.getMilliseconds();
    this.timezone = timezone; // Timezone hours
    this.ts =
      this.dt.getTime() -
      (this.dt.getTimezoneOffset() + this.timezone * 60) * 60 * 1000; // Timestamp in milliseconds since Unix epoch

    // Adjusted date with the specified timezone offset
    this.utc =
      timezone === 0
        ? null
        : new DateTime(this.dt.getTime() - this.timezone * 60 * 60 * 1000, 0);
  }

  addMillisecond(ms) {
    return new DateTime(this.ts + ms, this.timezone);
  }

  toDate() {
    return (
      String(this.year).padStart(4, "0") +
      "-" +
      String(this.month).padStart(2, "0") +
      "-" +
      String(this.date).padStart(2, "0")
    );
  }

  toString() {
    return (
      String(this.year).padStart(4, "0") +
      "-" +
      String(this.month).padStart(2, "0") +
      "-" +
      String(this.date).padStart(2, "0") +
      "T" +
      String(this.hour).padStart(2, "0") +
      ":" +
      String(this.minute).padStart(2, "0") +
      ":" +
      String(this.second).padStart(2, "0") +
      "." +
      String(this.ms).padStart(3, "0") +
      (this.timezone === 0
        ? "Z"
        : (this.timezone > 0 ? "+" : "-") +
          String(Math.floor(Math.abs(this.timezone))).padStart(2, "0") +
          ":" +
          String(Math.floor(Math.abs((this.timezone * 60) % 60))).padStart(
            2,
            "0"
          ))
    );
  }
}
