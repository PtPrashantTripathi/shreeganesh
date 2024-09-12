// utils.js

const DEGS = 180 / Math.PI;
const RADS = Math.PI / 180;
const EPS = 1.0e-12;

function absolute(x) {
  var r;
  if (x >= 0.0) r = Math.floor(x);
  else r = Math.ceil(x);
  return r;
}
function mod24(x) {
  return (x + 24) % 24;
}
function mod2pi(x) {
  /* Range 0-2PI radians */
  var b = x / (2 * Math.PI);
  var a = 2 * Math.PI * (b - absolute(b));
  if (a < 0) a = 2 * Math.PI + a;
  return a;
}

/**
 * Normalize an angle to the range 0-359 degrees.
 * @param {number} degrees - The angle in degrees.
 * @returns {number} - The normalized angle within the range 0-359 degrees.
 */
function mod360(degrees) {
  var a = 360 * (degrees / 360 - absolute(degrees / 360));
  if (a < 0) a = a + 360;
  return a;
}

/**
 * Calculate the index of the division based on degrees and the total number of divisions.
 * @param {number} degrees - The angle in degrees.
 * @param {number} divisions - The total number of divisions (e.g., 12 for zodiac signs, 27 for Nakshatras).
 * @returns {number} - The calculated index.
 */
function calcIndex(degrees, divisions) {
  if (divisions <= 0) {
    throw new Error("divisions must be a positive number.");
  }
  return Math.floor(degrees / (360 / divisions)) + 1;
}

function dms2real(deg, min, sec) {
  /* convert Latitude/Longitude (deg, min, sec) to Degrees */
  var r;
  if (deg < 0) r = deg - min / 60 - sec / 3600;
  else r = deg + min / 60 + sec / 3600;
  return r;
}
function hms2deg(hour, min, sec) {
  return hour * 15 + min / 4 + sec / 240;
}
function hms2dec(hour, min, sec) {
  return hour + min / 60 + sec / 3600;
}
function dec2hms(x) {
  /* convert dec hours to hh:mm:ss */
  if (isNaN(x)) return "00:00:00";
  var sign = x < 0 ? "-" : "";
  var st = Math.abs(x);
  var s = st;
  var d = Math.floor(s);
  s = s - d;
  s = s * 60;
  var mm = Math.floor(s);
  var hour = Math.floor(st);
  st = st - hour;
  st = st * 60;
  var min = Math.floor(st);
  st = st - min;
  st = st * 60;
  var sec = Math.floor(st);
  return (
    sign +
    hour.toString().padStart(2, "0") +
    ":" +
    min.toString().padStart(2, "0") +
    ":" +
    sec.toString().padStart(2, "0")
  );
}
function deg2hms(x) {
  /* convert Degrees to hh:mm:ss */
  if (isNaN(x)) return "00:00:00";
  var sign = x < 0 ? "-" : "";
  var st = Math.abs(x);
  var s = st;
  st = st / 15.0;
  var d = Math.floor(s);
  s = s - d;
  s = s * 60;
  var mm = Math.floor(s);
  var hour = Math.floor(st);
  st = st - hour;
  st = st * 60;
  var min = Math.floor(st);
  st = st - min;
  st = st * 60;
  var sec = Math.floor(st);
  var str = sign + hour.toString().padStart(2, "0");
  str += ":" + min.toString().padStart(2, "0");
  str += ":" + sec.toString().padStart(2, "0");
  return str;
}
function deg2dms(deg) {
  /* convert Degree to (deg, Min, sec) format */
  var d = Math.floor(deg);
  var m = Math.floor((deg - d) * 60);
  var s = Math.floor(((deg - d) * 60 - m) * 60);
  return d + "°" + m + "'" + s + '"';
}
function dec2date(etime) {
  /* convert dec Number to dd/mm/yyyy */
  if (isNaN(etime)) return "00/00/0000";
  var s = etime;
  var tmp = Math.round(s);
  var year = parseInt(this.DOB.year - tmp);
  s = s - tmp;
  var tmp0 = Math.round(s * 12);
  var month = parseInt(12 - tmp0 + this.DOB.month - 12);
  if (isNaN(month) || month < 0) month = 1;
  var tmp1 = Math.round(s * 12);
  var tmp2 = Math.abs(tmp1 - s * 12);
  var tmp3 = Math.round(tmp2 * 30);
  var Day = Math.abs(30 - this.DOB.date - tmp3);
  var str = Day.toString().padStart(2, "0");
  str += "/" + month.toString().padStart(2, "0");
  str += "/" + year.toString().padStart(4, "0");
  return str;
}
export {
  DEGS,
  RADS,
  EPS,
  absolute,
  mod24,
  mod2pi,
  mod360,
  calcIndex,
  dms2real,
  hms2deg,
  hms2dec,
  dec2hms,
  deg2hms,
  deg2dms,
  dec2date,
};
