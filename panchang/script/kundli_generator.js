var DateTime = luxon.DateTime;
const DEGS = 180 / Math.PI;
const RADS = Math.PI / 180;
const EPS = 1.0e-12;
const today = new Date();

class Kundli {
  /* Planets or Grahas */
  Planets = {
    Lagna: {
      Index: 0,
      Name: "Lagna",
    },
    Sun: {
      Index: 1,
      Aspect: [7],
      Day: "Sunday",
      HappyHouse: [1, 5, 9, 10],
      SadHouse: [4, 6, 7, 8, 12],
      Name: "Sun",
    },
    Moon: {
      Index: 2,
      Aspect: [7],
      Day: "Monday",
      HappyHouse: [4, 7, 9, 11, 12],
      SadHouse: [2, 3, 6, 8],
      Name: "Moon",
    },
    Mars: {
      Index: 3,
      Aspect: [4, 7, 8],
      Day: "Tuesday",
      HappyHouse: [1, 3, 5, 8, 10, 11],
      SadHouse: [2, 4, 6, 12],
      Name: "Mars",
    },
    Mercury: {
      Index: 4,
      Aspect: [7],
      Day: "Wednesday",
      HappyHouse: [1, 3, 5, 6, 7, 10, 11],
      SadHouse: [2, 4, 8, 9, 12],
      Name: "Mercury",
    },
    Jupiter: {
      Index: 5,
      Aspect: [5, 7, 9],
      Day: "Thursday",
      HappyHouse: [1, 4, 5, 7, 9, 10, 2, 11],
      SadHouse: [2, 11],
      Name: "Jupiter",
    },
    Venus: {
      Index: 6,
      Aspect: [7],
      Day: "Friday",
      HappyHouse: [1, 2, 4, 5, 7, 9, 11, 12],
      SadHouse: [3, 6, 8, 10],
      Name: "Venus",
    },
    Saturn: {
      Index: 7,
      Aspect: [3, 7, 10],
      Day: "Saturday",
      HappyHouse: [3, 6, 7, 10, 11],
      SadHouse: [4, 5, 8, 9, 12],
      Name: "Saturn",
    },
    Rahu: {
      Index: 8,
      Aspect: [5, 7, 9],
      HappyHouse: [1, 2, 3, 5, 10, 11],
      SadHouse: [4, 6, 7, 8, 9, 12],
      Name: "Rahu",
    },
    Ketu: {
      Index: 9,
      Aspect: [5, 7, 9],
      HappyHouse: [4, 6, 8, 9, 12],
      SadHouse: [1, 2, 3, 5, 7, 10, 11],
      Name: "Ketu",
    },
  };
  RasiSigns = {
    /* Sidereal Rasi Signs(Fixed) or Rashis */
    Aries: {
      Index: 1,
      Name: "Aries",
      Element: "Fire",
      Gender: "M",
      Nature: "Movable",
      Lord: "Mars",
    },
    Taurus: {
      Index: 2,
      Element: "Earth",
      Gender: "F",
      Nature: "Fixed",
      Lord: "Venus",
      Name: "Taurus",
    },
    Gemini: {
      Index: 3,
      Element: "Air",
      Gender: "M",
      Nature: "Common",
      Lord: "Mercury",
      Name: "Gemini",
    },
    Cancer: {
      Index: 4,
      Element: "Water",
      Gender: "F",
      Nature: "Movable",
      Lord: "Moon",
      Name: "Cancer",
    },
    Leo: {
      Index: 5,
      Element: "Fire",
      Gender: "M",
      Nature: "Fixed",
      Lord: "Sun",
      Name: "Leo",
    },
    Virgo: {
      Index: 6,
      Element: "Earth",
      Gender: "F",
      Nature: "Common",
      Lord: "Mercury",
      Name: "Virgo",
    },
    Libra: {
      Index: 7,
      Element: "Air",
      Gender: "M",
      Nature: "Movable",
      Lord: "Venus",
      Name: "Libra",
    },
    Scorpio: {
      Index: 8,
      Element: "Water",
      Gender: "F",
      Nature: "Fixed",
      Lord: "Mars",
      Name: "Scorpio",
    },
    Sagittarius: {
      Index: 9,
      Element: "Fire",
      Gender: "M",
      Nature: "Common",
      Lord: "Jupiter",
      Name: "Sagittarius",
    },
    Capricorn: {
      Index: 10,
      Element: "Earth",
      Gender: "F",
      Nature: "Movable",
      Lord: "Saturn",
      Name: "Capricorn",
    },
    Aquarius: {
      Index: 11,
      Element: "Air",
      Gender: "M",
      Nature: "Fixed",
      Lord: "Saturn",
      Name: "Aquarius",
    },
    Pisces: {
      Index: 12,
      Element: "Water",
      Gender: "F",
      Nature: "Common",
      Lord: "Jupiter",
      Name: "Pisces",
    },
  };
  Houses = {
    1: {
      Name: "Tanu Bhava",
      Lord: "Mars",
    },
    2: {
      Name: "Dhana Bhava",
      Lord: "Venus",
    },
    3: {
      Name: "Buddhi Bhava",
      Lord: "Mercury",
    },
    4: {
      Name: "Bandhu Bhava",
      Lord: "Moon",
    },
    5: {
      Name: "Putra Bhava",
      Lord: "Sun",
    },
    6: {
      Name: "Shatru Bhava",
      Lord: "Mercury",
    },
    7: {
      Name: "Yuvati Bhava",
      Lord: "Venus",
    },
    8: {
      Name: "Ayu Bhava",
      Lord: "Saturn",
    },
    9: {
      Name: "Dharma Bhava",
      Lord: "Jupiter",
    },
    10: {
      Name: "Karma Bhava",
      Lord: "Saturn",
    },
    11: {
      Name: "Labha Bhava",
      Lord: "Sun",
    },
    12: {
      Name: "Vairagya Bhava",
      Lord: "Jupiter",
    },
  };
  TithiPaksha = [
    {
      Number: 1,
      Tithi: "Pratipada",
      Paksha: "Krishna",
      Nadi: "Pingala",
    },
    {
      Number: 2,
      Tithi: "Dvitiya",
      Paksha: "Krishna",
      Nadi: "Pingala",
    },
    {
      Number: 3,
      Tithi: "Tritiya",
      Paksha: "Krishna",
      Nadi: "Pingala",
    },
    {
      Number: 4,
      Tithi: "Chaturthi",
      Paksha: "Krishna",
      Nadi: "Ida",
    },
    {
      Number: 5,
      Tithi: "Panchami",
      Paksha: "Krishna",
      Nadi: "Ida",
    },
    {
      Number: 6,
      Tithi: "Shashthi",
      Paksha: "Krishna",
      Nadi: "Ida",
    },
    {
      Number: 7,
      Tithi: "Saptami",
      Paksha: "Krishna",
      Nadi: "Pingala",
    },
    {
      Number: 8,
      Tithi: "Ashtami",
      Paksha: "Krishna",
      Nadi: "Pingala",
    },
    {
      Number: 9,
      Tithi: "Navami",
      Paksha: "Krishna",
      Nadi: "Pingala",
    },
    {
      Number: 10,
      Tithi: "Dasami",
      Paksha: "Krishna",
      Nadi: "Ida",
    },
    {
      Number: 11,
      Tithi: "Ekadasi",
      Paksha: "Krishna",
      Nadi: "Ida",
    },
    {
      Number: 12,
      Tithi: "Dwadasi",
      Paksha: "Krishna",
      Nadi: "Ida",
    },
    {
      Number: 13,
      Tithi: "Trayodasi",
      Paksha: "Krishna",
      Nadi: "Pingala",
    },
    {
      Number: 14,
      Tithi: "Chaturd",
      Paksha: "Krishna",
      Nadi: "Pingala",
    },
    {
      Number: 15,
      Tithi: "Amavasya",
      Paksha: "Krishna",
      Nadi: "Pingala",
    },
    {
      Number: 1,
      Tithi: "PratiPada",
      Paksha: "Sukla",
      Nadi: "Ida",
    },
    {
      Number: 2,
      Tithi: "Dvitiya",
      Paksha: "Sukla",
      Nadi: "Ida",
    },
    {
      Number: 3,
      Tithi: "Tritiya",
      Paksha: "Sukla",
      Nadi: "Ida",
    },
    {
      Number: 4,
      Tithi: "Chaturthi",
      Paksha: "Sukla",
      Nadi: "Pingala",
    },
    {
      Number: 5,
      Tithi: "Panchami",
      Paksha: "Sukla",
      Nadi: "Pingala",
    },
    {
      Number: 6,
      Tithi: "Shashthi",
      Paksha: "Sukla",
      Nadi: "Pingala",
    },
    {
      Number: 7,
      Tithi: "Saptami",
      Paksha: "Sukla",
      Nadi: "Ida",
    },
    {
      Number: 8,
      Tithi: "Ashtami",
      Paksha: "Sukla",
      Nadi: "Ida",
    },
    {
      Number: 9,
      Tithi: "Navami",
      Paksha: "Sukla",
      Nadi: "Ida",
    },
    {
      Number: 10,
      Tithi: "Dasami",
      Paksha: "Sukla",
      Nadi: "Pingala",
    },
    {
      Number: 11,
      Tithi: "Ekadasi",
      Paksha: "Sukla",
      Nadi: "Pingala",
    },
    {
      Number: 12,
      Tithi: "Dwadasi",
      Paksha: "Sukla",
      Nadi: "Pingala",
    },
    {
      Number: 13,
      Tithi: "Trayodasi",
      Paksha: "Sukla",
      Nadi: "Ida",
    },
    {
      Number: 14,
      Tithi: "Chaturd",
      Paksha: "Sukla",
      Nadi: "Pingala",
    },
    {
      Number: 15,
      Tithi: "Purnima",
      Paksha: "Sukla",
      Nadi: "Ida",
    },
  ];
  Nakshatras = {
    Ashvini: {
      Index: 1,
      Lord: "Ketu",
      Name: "Ashvini",
    },
    Bharani: {
      Index: 2,
      Lord: "Venus",
      Name: "Bharani",
    },
    Krittika: {
      Index: 3,
      Lord: "Sun",
      Name: "Krittika",
    },
    Rohini: {
      Index: 4,
      Lord: "Moon",
      Name: "Rohini",
    },
    Mrigashira: {
      Index: 5,
      Lord: "Mars",
      Name: "Mrigashira",
    },
    Ardra: {
      Index: 6,
      Lord: "Rahu",
      Name: "Ardra",
    },
    Punarvasu: {
      Index: 7,
      Lord: "Jupiter",
      Name: "Punarvasu",
    },
    Pushya: {
      Index: 8,
      Lord: "Saturn",
      Name: "Pushya",
    },
    Ashlesha: {
      Index: 9,
      Lord: "Mercury",
      Name: "Ashlesha",
    },
    Magha: {
      Index: 10,
      Lord: "Ketu",
      Name: "Magha",
    },
    PurvaPhalguni: {
      Index: 11,
      Lord: "Venus",
      Name: "PurvaPhalguni",
    },
    UttaraPhalguni: {
      Index: 12,
      Lord: "Sun",
      Name: "UttaraPhalguni",
    },
    Hasta: {
      Index: 13,
      Lord: "Moon",
      Name: "Hasta",
    },
    Chitra: {
      Index: 14,
      Lord: "Mars",
      Name: "Chitra",
    },
    Svati: {
      Index: 15,
      Lord: "Rahu",
      Name: "Svati",
    },
    Vishakha: {
      Index: 16,
      Lord: "Jupiter",
      Name: "Vishakha",
    },
    Anuradha: {
      Index: 17,
      Lord: "Saturn",
      Name: "Anuradha",
    },
    Jyeshtha: {
      Index: 18,
      Lord: "Mercury",
      Name: "Jyeshtha",
    },
    Mula: {
      Index: 19,
      Lord: "Ketu",
      Name: "Mula",
    },
    PurvaShadha: {
      Index: 20,
      Lord: "Venus",
      Name: "PurvaShadha",
    },
    UttaraShadha: {
      Index: 21,
      Lord: "Sun",
      Name: "UttaraShadha",
    },
    Sravana: {
      Index: 22,
      Lord: "Moon",
      Name: "Sravana",
    },
    Dhanista: {
      Index: 23,
      Lord: "Mars",
      Name: "Dhanista",
    },
    Shatabhisha: {
      Index: 24,
      Lord: "Rahu",
      Name: "Shatabhisha",
    },
    PurvaBhadra: {
      Index: 25,
      Lord: "Jupiter",
      Name: "PurvaBhadra",
    },
    UttaraBhadra: {
      Index: 26,
      Lord: "Saturn",
      Name: "UttaraBhadra",
    },
    Revati: {
      Index: 27,
      Lord: "Mercury",
      Name: "Revati",
    },
  };
  constructor() {
    this.JatakName = "Prashant Tripathi";
    this.Gender = "M";
    this.DOB = DateTime.fromISO("1997-08-11T01:55:00", {
      zone: 5.5 * 60,
    });
    this.City = "Mandla (Mandlā), India";
    this.Lat = 22.6;
    this.Lon = 80.38;
  }
  generate() {
    this.calcPlanets();
    this.calcChartData();
    this.details();
  }
  calcChartData() {
    this.Charts = {
      Lagna: {},
      Hora: {},
      Shashthamsa: {},
      Ashthamsa: {},
      Navamsa: {},
      Dwadashamsa: {},
    };

    Object.keys(this.Planets).forEach((planet) => {
      this.Charts.Lagna[planet] = {
        Index: this.Planets[planet].Rasi.Index,
        Degree: this.Planets[planet].Rasi.Degree,
      };
      this.Charts.Hora[planet] = {
        Index: this.Planets[planet].Hora.Index,
        Degree: this.Planets[planet].Hora.Degree,
      };
      this.Charts.Shashthamsa[planet] = {
        Index: this.Planets[planet].Shashthamsa.Index,
        Degree: this.Planets[planet].Shashthamsa.Degree,
      };
      this.Charts.Ashthamsa[planet] = {
        Index: this.Planets[planet].Ashthamsa.Index,
        Degree: this.Planets[planet].Ashthamsa.Degree,
      };
      this.Charts.Navamsa[planet] = {
        Index: this.Planets[planet].Navamsa.Index,
        Degree: this.Planets[planet].Navamsa.Degree,
      };
      this.Charts.Dwadashamsa[planet] = {
        Index: this.Planets[planet].Dwadashamsa.Index,
        Degree: this.Planets[planet].Dwadashamsa.Degree,
      };
    });
  }
  calcPlanets() {
    /* calc details*/
    this.JD = this.calcJulianDate(this.DOB);
    this.Ayanamsa = this.calcAyanamsa(this.JD);

    /* calc planets Sayana position */
    let SayanaPosition = calc_vsop87(this.JD);
    SayanaPosition.Lagna = this.calcLagna(this.DOB);
    SayanaPosition.Moon = this.calcMoonPosition(this.JD);
    SayanaPosition.Rahu = this.calcMoonAcendingNode(this.JD);
    SayanaPosition.Ketu = SayanaPosition.Rahu + 180;
    /* this.mod360(); */
    /* calc planets details */
    Object.keys(this.Planets).forEach((key) => {
      Object.assign(
        this.Planets[key],
        this.calcPlanetDetails(SayanaPosition[key])
      );
    });
  }
  calcMoonPosition(jd) {
    /* Jean Meeus "Astronomical Algorithms" * High precision calculation of the Moon's geocentric Longitude */
    var lrCoeff = [60];
    for (var i = 0; i < 60; i++) {
      lrCoeff[i] = [4];
    }
    lrCoeff = [
      [0, 0, 1, 0],
      [2, 0, -1, 0],
      [2, 0, 0, 0],
      [0, 0, 2, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 2],
      [2, 0, -2, 0],
      [2, -1, -1, 0],
      [2, 0, 1, 0],
      [2, -1, 0, 0],
      [0, 1, -1, 0],
      [1, 0, 0, 0],
      [0, 1, 1, 0],
      [2, 0, 0, -2],
      [0, 0, 1, 2],
      [0, 0, 1, -2],
      [4, 0, -1, 0],
      [0, 0, 3, 0],
      [4, 0, -2, 0],
      [2, 1, -1, 0],
      [2, 1, 0, 0],
      [1, 0, -1, 0],
      [1, 1, 0, 0],
      [2, -1, 1, 0],
      [2, 0, 2, 0],
      [4, 0, 0, 0],
      [2, 0, -3, 0],
      [0, 1, -2, 0],
      [2, 0, -1, 2],
      [2, -1, -2, 0],
      [1, 0, 1, 0],
      [2, -2, 0, 0],
      [0, 1, 2, 0],
      [0, 2, 0, 0],
      [2, -2, -1, 0],
      [2, 0, 1, -2],
      [2, 0, 0, 2],
      [4, -1, -1, 0],
      [0, 0, 2, 2],
      [3, 0, -1, 0],
      [2, 1, 1, 0],
      [4, -1, -2, 0],
      [0, 2, -1, 0],
      [2, 2, -1, 0],
      [2, 1, -2, 0],
      [2, -1, 0, -2],
      [4, 0, 1, 0],
      [0, 0, 4, 0],
      [4, -1, 0, 0],
      [1, 0, -2, 0],
      [2, 1, 0, -2],
      [0, 0, 2, -2],
      [1, 1, 1, 0],
      [3, 0, -2, 0],
      [4, 0, -3, 0],
      [2, -1, 2, 0],
      [0, 2, 1, 0],
      [1, 1, -1, 0],
      [2, 0, 3, 0],
      [2, 0, -1, -2],
    ];
    var bCoeff = [60];
    for (var i = 0; i < 60; i++) {
      bCoeff[i] = [4];
    }
    bCoeff = [
      [0, 0, 0, 1],
      [0, 0, 1, 1],
      [0, 0, 1, -1],
      [2, 0, 0, -1],
      [2, 0, -1, 1],
      [2, 0, -1, -1],
      [2, 0, 0, 1],
      [0, 0, 2, 1],
      [2, 0, 1, -1],
      [0, 0, 2, -1],
      [2, -1, 0, -1],
      [2, 0, -2, -1],
      [2, 0, 1, 1],
      [2, 1, 0, -1],
      [2, -1, -1, 1],
      [2, -1, 0, 1],
      [2, -1, -1, -1],
      [0, 1, -1, -1],
      [4, 0, -1, -1],
      [0, 1, 0, 1],
      [0, 0, 0, 3],
      [0, 1, -1, 1],
      [1, 0, 0, 1],
      [0, 1, 1, 1],
      [0, 1, 1, -1],
      [0, 1, 0, -1],
      [1, 0, 0, -1],
      [0, 0, 3, 1],
      [4, 0, 0, -1],
      [4, 0, -1, 1],
      [0, 0, 1, -3],
      [4, 0, -2, 1],
      [2, 0, 0, -3],
      [2, 0, 2, -1],
      [2, -1, 1, -1],
      [2, 0, -2, 1],
      [0, 0, 3, -1],
      [2, 0, 2, 1],
      [2, 0, -3, -1],
      [2, 1, -1, 1],
      [2, 1, 0, 1],
      [4, 0, 0, 1],
      [2, -1, 1, 1],
      [2, -2, 0, -1],
      [0, 0, 1, 3],
      [2, 1, 1, -1],
      [1, 1, 0, -1],
      [1, 1, 0, 1],
      [0, 1, -2, -1],
      [2, 1, -1, -1],
      [1, 0, 1, 1],
      [2, -1, -2, -1],
      [0, 1, 2, 1],
      [4, 0, -2, -1],
      [4, -1, -1, -1],
      [1, 0, 1, -1],
      [4, 0, 1, -1],
      [1, 0, -1, -1],
      [4, -1, 0, -1],
      [2, -2, 0, 1],
    ];
    var lTerms = [
      6288774, 1274027, 658314, 213618, -185116, -114332, 58793, 57066, 53322,
      45758, -40923, -34720, -30383, 15327, -12528, 10980, 10675, 10034, 8548,
      -7888, -6766, -5163, 4987, 4036, 3994, 3861, 3665, -2689, -2602, 2390,
      -2348, 2236, -2120, -2069, 2048, -1773, -1595, 1215, -1110, -892, -810,
      759, -713, -700, 691, 596, 549, 537, 520, -487, -399, -381, 351, -340,
      330, 327, -323, 299, 294, 0,
    ];
    var rTerms = [
      -20905355, -3699111, -2955968, -569925, 48888, -3149, 246158, -152138,
      -170733, -204586, -129620, 108743, 104755, 10321, 0, 79661, -34782,
      -23210, -21636, 24208, 30824, -8379, -16675, -12831, -10445, -11650,
      14403, -7003, 0, 10056, 6322, -9884, 5751, 0, -4950, 4130, 0, -3958, 0,
      3258, 2616, -1897, -2117, 2354, 0, 0, -1423, -1117, -1571, -1739, 0,
      -4421, 0, 0, 0, 0, 1165, 0, 0, 8752,
    ];
    var bTerms = [
      5128122, 280602, 277693, 173237, 55413, 46271, 32573, 17198, 9266, 8822,
      8216, 4324, 4200, -3359, 2463, 2211, 2065, -1870, 1828, -1794, -1749,
      -1565, -1491, -1475, -1410, -1344, -1335, 1107, 1021, 833, 777, 671, 607,
      596, 491, -451, 439, 422, 421, -366, -351, 331, 315, 302, -283, -229, 223,
      223, -220, -220, -185, 181, -177, 176, 166, -164, 132, -119, 115, 107,
    ];
    var lprime,
      d,
      m,
      mprime,
      f,
      a1,
      a2,
      a3,
      e = [],
      sigmaL = 0,
      sigmaB = 0,
      sigmaR = 0,
      ang,
      t;
    t = (jd - 2451545.0) / 36525.0;
    var t4 = t * t * t * t;
    var t3 = t * t * t;
    var t2 = t * t;
    lprime = this.mod2pi(
      (218.3164591 +
        481267.88134236 * t -
        0.0013268 * t2 +
        t3 / 538841.0 -
        t4 / 65194000.0) *
        RADS
    );
    d = this.mod2pi(
      (297.8502042 +
        445267.1115168 * t -
        0.00163 * t2 +
        t3 / 545868.0 -
        t4 / 113065000.0) *
        RADS
    );
    m = this.mod2pi(
      (357.5291092 + 35999.0502909 * t - 0.0001536 * t2 + t3 / 24490000.0) *
        RADS
    );
    mprime = this.mod2pi(
      (134.9634114 +
        477198.8676313 * t +
        0.008997 * t2 +
        t3 / 69699.0 -
        t4 / 14712000.0) *
        RADS
    );
    f = this.mod2pi(
      (93.2720993 +
        483202.0175273 * t -
        0.0034029 * t2 -
        t3 / 3526000.0 +
        t4 / 863310000.0) *
        RADS
    );
    a1 = this.mod2pi((119.75 + 131.849 * t) * RADS);
    a2 = this.mod2pi((53.09 + 479264.29 * t) * RADS);
    a3 = this.mod2pi((313.45 + 481266.484 * t) * RADS);
    e[0] = 1;
    e[1] = 1 - 0.002516 * t - 0.0000074 * t2;
    e[2] = e[1] * e[1];
    for (i = 0; i < 60; i++) {
      ang =
        lrCoeff[i][0] * d +
        lrCoeff[i][1] * m +
        lrCoeff[i][2] * mprime +
        lrCoeff[i][3] * f;
      sigmaL += lTerms[i] * Math.sin(ang) * e[Math.abs(lrCoeff[i][1])];
      if (rTerms[i] != 0) {
        sigmaR += rTerms[i] * Math.cos(ang) * e[Math.abs(lrCoeff[i][1])];
      }
      ang =
        bCoeff[i][0] * d +
        bCoeff[i][1] * m +
        bCoeff[i][2] * mprime +
        bCoeff[i][3] * f;
      sigmaB += bTerms[i] * Math.sin(ang) * e[Math.abs(bCoeff[i][1])];
    }
    sigmaL +=
      3958.0 * Math.sin(a1) +
      1962.0 * Math.sin(lprime - f) +
      318.0 * Math.sin(a2);
    sigmaB +=
      -2235.0 * Math.sin(lprime) +
      382.0 * Math.sin(a3) +
      175.0 * Math.sin(a1 - f) +
      175.0 * Math.sin(a1 + f) +
      127.0 * Math.sin(lprime - mprime) -
      115.0 * Math.sin(lprime + mprime);
    return this.mod2pi((lprime * DEGS + sigmaL / 1000000.0) * RADS) * DEGS;
  }
  calcMoonAcendingNode(jd) {
    /* http://idlastro.gsfc.nasa.gov * Q.What is the licensing for the IDL Astronomy Library? * A.The IDL Astronomy Library procedures are in the public domain. */
    var T = (jd - 2415020.5) / 36525.0;
    /* compute Longitude of Moon's ascending node */
    var n =
      this.mod2pi(
        (259.183275 - 1800 * T - 134.142008 * T + 0.002078 * T * T) * RADS
      ) * DEGS;
    return n;
  }
  calcPlanetDetails(sayana_pos = 0) {
    let planet = {};
    planet.Sayana = sayana_pos;
    planet.Nirayana = this.mod360(planet.Sayana - this.Ayanamsa);
    planet.Nakshatra = this.calcNakshatra(planet.Nirayana);
    /* D1 - Rasi*/
    planet.Rasi = this.calcRasi(planet.Nirayana);
    /* D2 - Hora Rasi - parasara traditional 4 and 5 */
    planet.Hora = this.calcRasi(
      planet.Nirayana -
        15.0 -
        60.0 * Math.floor((planet.Nirayana - 15.0) * (1.0 / 60.0)) +
        90
    );
    /* D6 - Shashthamsa Rasi */
    planet.Shashthamsa = this.calcRasi(
      this.mod2pi(planet.Nirayana * 6.0 * RADS) * DEGS
    );
    /* D8 - Ashthamsa Rasi */
    planet.Ashthamsa = this.calcRasi(
      this.mod2pi(planet.Nirayana * 8.0 * RADS) * DEGS
    );
    /* D9 - Navamsa Rasi */
    planet.Navamsa = this.calcRasi(
      this.mod2pi(planet.Nirayana * 9.0 * RADS) * DEGS
    );
    /* D12 - Dwadashamsa Rasi - parasara traditional*/
    planet.Dwadashamsa = this.calcRasi(
      this.mod2pi(
        (parseInt(planet.Nirayana / 30) * 30 +
          (planet.Nirayana -
            30.0 * Math.floor(planet.Nirayana * (1.0 / 30.0))) *
            12) *
          RADS
      ) * DEGS
    );
    return planet;
  }

  calcRasi(pos) {
    pos = this.mod360(pos);
    var index = Math.floor(pos / (360 / 12)) + 1;
    var rasi = structuredClone(
      Object.values(this.RasiSigns).find((e) => e.Index === index)
    );
    rasi.Positions = pos;
    rasi.Range = {
      Min: (index - 1) * (360 / 12),
      Max: index * (360 / 12),
    };
    rasi.Degree = pos - rasi.Range.Min;
    return rasi;
  }
  calcNakshatra(pos) {
    pos = this.mod360(pos);
    var index = Math.floor(pos / (360 / 27)) + 1;
    var Nakshatra = structuredClone(
      Object.values(this.Nakshatras).find((e) => e.Index === index)
    );
    Nakshatra.Positions = pos;
    Nakshatra.Range = {
      Min: (360 / 27) * (index - 1),
      Max: (360 / 27) * index,
    };
    Nakshatra.Degree = pos - Nakshatra.Range.Min;
    Nakshatra.Pada = Math.floor(Nakshatra.Degree / (360 / 27 / 4)) + 1;
    return Nakshatra;
  }
  calcJulianDate(datetime) {
    /* Days since the beginning of the Julian period * plus dT and the fraction of the Day */
    var jy = datetime.year;
    var jm = datetime.month;
    var df;
    if (datetime.month > 2) {
      jy = datetime.year;
      jm++;
    } else {
      jy--;
      jm += 13;
    }
    var j =
      Math.floor(365.25 * jy) +
      Math.floor(30.6001 * jm) +
      datetime.day +
      1720995.0;
    if (datetime.day + 31 * (datetime.month + 12 * datetime.year) >= 588829) {
      var a = Math.floor(0.01 * jy);
      j += 2 - a + Math.floor(0.25 * a);
    }
    df = (datetime.hour - datetime.offset / 60) / 24.0 - 0.5;
    if (df < 0.0) {
      df += 1.0;
      --j;
    }
    var fc =
      df + (datetime.minute + this.deltaT(datetime) / 60.0) / 60.0 / 24.0;
    var jd = Math.floor((j + fc) * 10000000);
    if ((j + fc) * 10000000 - jd > 0.5) ++jd;
    else jd *= 1.0;
    return jd * 0.0000001;
  }
  calcSideralTime(datetime) {
    var r = 1296000.0;
    var iyear = datetime.year;
    var im = datetime.month;
    var iday = datetime.day;
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    /**--------------------------------------------------------------------**/
    /** Calculate iDay and t **/
    /**--------------------------------------------------------------------**/
    if (im != 1) {
      var i = Math.round(4 * Math.floor(iyear / 4));
      if (iyear == i) {
        month[1] = 29;
      }
      for (i = 1; i <= im - 1; i++) {
        iday = Math.round(iday) + month[i - 1];
      }
    }
    var iy = iyear - 1900;
    iday = Math.floor(iday - 1 + (iy - 1) / 4);
    var t = iday + iy * 365.0;
    t = (t + 0.5) / 36525.0 - 1;
    let t2 = t ** 2;
    let t3 = t ** 3;
    /**--------------------------------------------------------------------**/
    /** Calculate mean sidereal time **/
    /**--------------------------------------------------------------------**/
    var sm = 24110.54841 + 8640184.812866 * t + 0.093104 * t2 - 0.0000062 * t3;
    while (sm <= 0) {
      sm += 86400.0;
    }
    while (sm > 86400) {
      sm -= 86400.0;
    }
    /**--------------------------------------------------------------------**/
    /** Calculate Long and short periodic nutation **/
    /**--------------------------------------------------------------------**/
    var p = Math.PI / 180.0 / 3600.0;
    var e = p * (84381.448 - 46.815 * t - 0.00059 * t2 + 0.001813 * t3);
    var q =
      p * (450160.28 - 5.0 * r * t - 482890.539 * t + 7.455 * t2 + 0.008 * t3);
    var d =
      p *
      (1072261.307 +
        1236.0 * r * t +
        1105601.328 * t -
        6.891 * t2 +
        0.019 * t3);
    var f =
      p *
      (335778.877 + 1342.0 * r * t + 295263.137 * t - 13.257 * t2 + 0.011 * t3);
    var m =
      p *
      (1287099.804 + 99.0 * r * t + 1292581.224 * t - 0.577 * t2 - 0.012 * t3);
    var l =
      p *
      (485866.733 + 1325.0 * r * t + 715922.633 * t + 31.31 * t2 + 0.064 * t3);
    var pl = -(17.1996 + 0.01742 * t) * Math.sin(q);
    pl += (0.2062 + 0.00002 * t) * Math.sin(2.0 * q);
    pl += 0.0046 * Math.sin(q + 2.0 * f - 2.0 * l);
    pl += 0.0011 * Math.sin(2.0 * (l - f));
    pl -= 0.0003 * Math.sin(2.0 * (q + f - l));
    pl -= 0.0003 * Math.sin(l - m - d);
    pl -= 0.0002 * Math.sin(q - 2.0 * d + 2.0 * f - 2.0 * m);
    pl += 0.0001 * Math.sin(q - 2.0 * f + 2.0 * l);
    pl -= (1.3187 + 0.00016 * t) * Math.sin(2.0 * (q - d + f));
    pl += (0.1426 - 0.00034 * t) * Math.sin(m);
    pl -= (0.0517 - 0.00012 * t) * Math.sin(2.0 * q - 2.0 * d + 2.0 * f + m);
    pl += (0.0217 - 0.00005 * t) * Math.sin(2.0 * q - 2.0 * d + 2.0 * f - m);
    pl += (0.0129 + 0.00001 * t) * Math.sin(q - 2.0 * d + 2.0 * f);
    pl += 0.0048 * Math.sin(2.0 * (l - d));
    pl -= 0.0022 * Math.sin(2.0 * (f - d));
    pl += (0.0017 - 0.00001 * t) * Math.sin(2.0 * m);
    pl -= 0.0015 * Math.sin(q + m);
    pl -= (0.0016 - 0.00001 * t) * Math.sin(2.0 * (q - d + f + m));
    pl -= 0.0012 * Math.sin(q - m);
    pl -= 0.0006 * Math.sin(q + 2.0 * d - 2.0 * l);
    pl -= 0.0005 * Math.sin(q - 2.0 * d + 2.0 * f - m);
    pl += 0.0004 * Math.sin(q - 2.0 * d + 2.0 * l);
    pl += 0.0004 * Math.sin(q - 2.0 * d + 2.0 * f + m);
    pl -= 0.0004 * Math.sin(l - d);
    pl += 0.0001 * Math.sin(2.0 * l + m - 2.0 * d);
    pl += 0.0001 * Math.sin(q + 2.0 * d - 2.0 * f);
    pl -= 0.0001 * Math.sin(2.0 * d - 2.0 * f + m);
    pl += 0.0001 * Math.sin(2.0 * q + m);
    pl += 0.0001 * Math.sin(q + d - l);
    pl -= 0.0001 * Math.sin(m + 2.0 * f - 2.0 * d);
    var ps = -(0.2274 + 0.00002 * t) * Math.sin(2.0 * (q + f));
    ps += (0.0712 + 0.00001 * t) * Math.sin(l);
    ps -= (0.0386 + 0.00004 * t) * Math.sin(q + 2.0 * f);
    ps -= 0.0301 * Math.sin(2.0 * q + 2.0 * f + l);
    ps -= 0.0158 * Math.sin(l - 2.0 * d);
    ps += 0.0123 * Math.sin(2.0 * q + 2.0 * f - l);
    ps += 0.0063 * Math.sin(2.0 * d);
    ps += (0.0063 + 0.00001 * t) * Math.sin(q + l);
    ps -= (0.0058 + 0.00001 * t) * Math.sin(q - l);
    ps -= 0.0059 * Math.sin(2.0 * q + 2.0 * d + 2.0 * f - l);
    ps -= 0.0051 * Math.sin(q + 2.0 * f + l);
    ps -= 0.0038 * Math.sin(2.0 * (q + d + f));
    ps += 0.0029 * Math.sin(2.0 * l);
    ps += 0.0029 * Math.sin(2.0 * q - 2.0 * d + 2.0 * f + l);
    ps -= 0.0031 * Math.sin(2.0 * (q + f + l));
    ps += 0.0026 * Math.sin(2.0 * f);
    ps += 0.0021 * Math.sin(q + 2.0 * f - l);
    ps += 0.0016 * Math.sin(q + 2.0 * d - l);
    ps -= 0.0013 * Math.sin(q - 2.0 * d + l);
    ps -= 0.001 * Math.sin(q + 2.0 * d + 2.0 * f - l);
    ps -= 0.0007 * Math.sin(l + m - 2.0 * d);
    ps += 0.0007 * Math.sin(2.0 * q + 2.0 * f + m);
    ps -= 0.0007 * Math.sin(2.0 * q + 2.0 * f - m);
    ps -= 0.0008 * Math.sin(2.0 * q + 2.0 * d + 2.0 * f + l);
    ps += 0.0006 * Math.sin(2.0 * d + l);
    ps += 0.0006 * Math.sin(2.0 * (q - d + f + l));
    ps -= 0.0006 * Math.sin(q + 2.0 * d);
    ps -= 0.0007 * Math.sin(q + 2.0 * d + 2.0 * f);
    ps += 0.0006 * Math.sin(q - 2.0 * d + 2.0 * f + l);
    ps -= 0.0005 * Math.sin(q - 2.0 * d);
    ps += 0.0005 * Math.sin(l - m);
    ps -= 0.0005 * Math.sin(q + 2.0 * f + 2.0 * l);
    ps -= 0.0004 * Math.sin(m - 2.0 * d);
    ps += 0.0004 * Math.sin(l - 2.0 * f);
    ps -= 0.0004 * Math.sin(d);
    ps -= 0.0003 * Math.sin(l + m);
    ps += 0.0003 * Math.sin(l + 2.0 * f);
    ps -= 0.0003 * Math.sin(2.0 * q + 2.0 * f - m + l);
    ps -= 0.0003 * Math.sin(2.0 * q + 2.0 * d + 2.0 * f - m - l);
    ps -= 0.0002 * Math.sin(q - 2.0 * l);
    ps -= 0.0003 * Math.sin(2.0 * q + 2.0 * f + 3.0 * l);
    ps -= 0.0003 * Math.sin(2.0 * q + 2.0 * d + 2.0 * f - m);
    ps += 0.0002 * Math.sin(2.0 * q + 2.0 * f + m + l);
    ps -= 0.0002 * Math.sin(q - 2.0 * d + 2.0 * f - l);
    ps += 0.0002 * Math.sin(q + 2.0 * l);
    ps -= 0.0002 * Math.sin(2.0 * q + l);
    ps += 0.0002 * Math.sin(3.0 * l);
    ps += 0.0002 * Math.sin(2.0 * q + d + 2.0 * f);
    ps += 0.0001 * Math.sin(2.0 * q - l);
    ps -= 0.0001 * Math.sin(l - 4.0 * d);
    ps += 0.0001 * Math.sin(2.0 * (q + d + f - l));
    ps -= 0.0002 * Math.sin(2.0 * q + 4.0 * d + 2.0 * f - l);
    ps -= 0.0001 * Math.sin(2.0 * l - 4.0 * d);
    ps += 0.0001 * Math.sin(2.0 * q - 2.0 * d + 2.0 * f + m + l);
    ps -= 0.0001 * Math.sin(q + 2.0 * d + 2.0 * f + l);
    ps -= 0.0001 * Math.sin(2.0 * q + 4.0 * d + 2.0 * f - 2.0 * l);
    ps += 0.0001 * Math.sin(2.0 * q + 4.0 * f - l);
    ps += 0.0001 * Math.sin(l - m - 2.0 * d);
    ps += 0.0001 * Math.sin(q - 2.0 * d + 2.0 * f + 2.0 * l);
    ps -= 0.0001 * Math.sin(2.0 * (q + d + f + l));
    ps -= 0.0001 * Math.sin(q + 2.0 * d + l);
    ps += 0.0001 * Math.sin(2.0 * q - 2.0 * d + 4.0 * f);
    ps += 0.0001 * Math.sin(2.0 * q - 2.0 * d + 2.0 * f + 3.0 * l);
    ps -= 0.0001 * Math.sin(l + 2.0 * f - 2.0 * d);
    ps += 0.0001 * Math.sin(q + 2.0 * f + m);
    ps += 0.0001 * Math.sin(q + 2.0 * d - m - l);
    ps -= 0.0001 * Math.sin(q - 2.0 * f);
    ps -= 0.0001 * Math.sin(2.0 * q - d + 2.0 * f);
    ps -= 0.0001 * Math.sin(2.0 * d + m);
    ps -= 0.0001 * Math.sin(l - 2.0 * f - 2.0 * d);
    ps -= 0.0001 * Math.sin(q + 2.0 * f - m);
    ps -= 0.0001 * Math.sin(q - 2.0 * d + m + l);
    ps -= 0.0001 * Math.sin(l - 2.0 * f + 2.0 * d);
    ps += 0.0001 * Math.sin(2.0 * (l + d));
    ps -= 0.0001 * Math.sin(2.0 * q + 4.0 * d + 2.0 * f);
    ps += 0.0001 * Math.sin(d + m);
    /* //*--------------------------------------------------------------------**/
    /* //* Calculate true sidereal time **/
    /* //*--------------------------------------------------------------------**/
    /* let sa = sm + ((pl + ps) / 15.0) * Math.cos(e);*/
    let LMST =
      (sm / 3600 +
        this.Lon / 15 +
        1.002737909350795 *
          (datetime.hour -
            datetime.offset / 60 +
            datetime.minute / 60 +
            datetime.second / 3600)) *
      15;
    /* if (LMST < 0) LMST += 360;*/
    /* if (LMST >= 360) LMST -= 360;*/
    return LMST;
  }
  calc_ecliptic_obliquity(jd) {
    /* J. Laskar, Astronomy and Astrophysics, Vol. 157, page 68 [1986] */
    var terms = [
      -4680.93 / 3600.0,
      -1.55 / 3600.0,
      1999.25 / 3600.0,
      -51.38 / 3600.0,
      -249.67 / 3600.0,
      -39.05 / 3600.0,
      7.12 / 3600.0,
      27.87 / 3600.0,
      5.79 / 3600.0,
      2.45 / 3600.0,
    ];
    var eps = 23 + 26 / 60.0 + 21.448 / 3600.0;
    var u = 0,
      v = 0;
    var cy = jd / 36525.0;
    v = u = (jd - 2415020.0) / (cy * 100);
    if (Math.abs(u) < 1.0) {
      for (var i = 0; i < 10; i++) {
        eps += terms[i] * v;
        v *= u;
      }
    }
    return eps;
  }
  deltaT(datetime) {
    /* http://eclipse.gsfc.nasa.gov/SEhelp/deltaT.html * * Terrestrial Dynamical Time (TD), Universal Time (UT) * The parameter delta-T (ΔT) is the arithmetic difference, * in seconds, between the two as: ΔT = TD - UT */
    var y = datetime.year + (datetime.month - 0.5) / 12;
    var c = -0.000012932 * Math.pow(y - 1955, 2);
    var dt = 0,
      u = 0,
      t = 0;
    var t2 = t * t;
    var t3 = t2 * t;
    var t4 = t3 * t;
    var t5 = t4 * t;
    var t6 = t5 * t;
    var t7 = t6 * t;
    if (y <= -500) {
      u = (y - 1820) / 100;
      dt = -20 + 32 * u * u + c;
    } else if (y < -500 && y <= 500) {
      u = y / 100;
      dt =
        10583.6 -
        1014.41 * u +
        33.78311 * u * u -
        5.952053 * u * u * u -
        0.1798452 * u * u * u * u +
        0.022174192 * u * u * u * u * u +
        0.0090316521 * u * u * u * u * u * u +
        c;
    } else if (y > 500 && y <= 1600) {
      u = (y - 1000) / 100;
      dt =
        1574.2 -
        556.01 * u +
        71.23472 * u * u +
        0.319781 * u * u * u -
        0.8503463 * u * u * u * u -
        0.005050998 * u * u * u * u * u +
        0.0083572073 * u * u * u * u * u * u +
        c;
    } else if (y > 1600 && y <= 1700) {
      t = y - 1600;
      dt = 120 - 0.9808 * t - 0.01532 * t2 + t3 / 7129 + c;
    } else if (y > 1700 && y <= 1800) {
      t = y - 1800;
      dt =
        13.72 -
        0.332447 * t +
        0.0068612 * t2 +
        0.0041116 * t3 -
        0.00037436 * t4 +
        0.0000121272 * t5 -
        0.0000001699 * t6 +
        0.000000000875 * t7 +
        c;
    } else if (y > 1860 && y <= 1900) {
      t = y - 1860;
      dt =
        7.62 +
        0.5737 * t -
        0.251754 * t2 +
        0.01680668 * t3 -
        0.0004473624 * t4 +
        t5 / 233174 +
        c;
    } else if (y > 1900 && y <= 1920) {
      t = y - 1920;
      dt = 21.2 + 0.84493 * t - 0.0761 * t2 + 0.0020936 * t3 + c;
    } else if (y > 1941 && y <= 1961) {
      t = y - 1950;
      dt = 29.07 + 0.407 * t - t2 / 233 + t3 / 2547;
    } else if (y > 1961 && y <= 1986) {
      t = y - 1975;
      dt = 45.45 + 1.067 * t - t2 / 260 - t3 / 718;
    } else if (y > 1986 && y <= 2005) {
      t = y - 2000;
      dt =
        3.86 +
        0.3345 * t -
        0.060374 * t2 +
        0.0017275 * t3 +
        0.000651814 * t4 +
        0.00002373599 * t5;
    } else if (y > 2005 && y <= 2050) {
      t = y - 2000;
      dt = 62.92 + 0.32217 * t + 0.005589 * t2 + c;
    } else if (y > 2050 && y <= 2150) {
      dt =
        -20 +
        32 * ((y - 1820) / 100) * ((y - 1820) / 100) -
        0.5628 * (2150 - y) +
        c;
    } else if (y > 2150) {
      u = (y - 1820) / 100;
      dt = -20 + 32 * u * u + c;
    }
    return dt;
  }
  dms2real(deg, min, sec) {
    /* convert Latitude/Longitude (deg, min, sec) to Degrees */
    var r;
    if (deg < 0) r = deg - min / 60 - sec / 3600;
    else r = deg + min / 60 + sec / 3600;
    return r;
  }
  hms2deg(hour, min, sec) {
    return hour * 15 + min / 4 + sec / 240;
  }
  hms2dec(hour, min, sec) {
    return hour + min / 60 + sec / 3600;
  }
  dec2hms(x) {
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
  deg2hms(x) {
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
  deg2dms(deg) {
    /* convert Degree to (deg, Min, sec) format */
    var d = Math.floor(deg);
    var m = Math.floor((deg - d) * 60);
    var s = Math.floor(((deg - d) * 60 - m) * 60);
    return d + "°" + m + "'" + s + '"';
  }
  dec2date(etime) {
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
    var Day = Math.abs(30 - this.DOB.day - tmp3);
    var str = Day.toString().padStart(2, "0");
    str += "/" + month.toString().padStart(2, "0");
    str += "/" + year.toString().padStart(4, "0");
    return str;
  }
  absolute(x) {
    var r;
    if (x >= 0.0) r = Math.floor(x);
    else r = Math.ceil(x);
    return r;
  }
  mod24(x) {
    return (x + 24) % 24;
  }
  mod2pi(x) {
    /* Range 0-2PI radians */
    var b = x / (2 * Math.PI);
    var a = 2 * Math.PI * (b - this.absolute(b));
    if (a < 0) a = 2 * Math.PI + a;
    return a;
  }
  mod360(x) {
    /* Range 0-360 Degrees */
    var a = 360 * (x / 360 - this.absolute(x / 360));
    if (a < 0) a = a + 360;
    return a;
  }
  calcAyanamsa(jd) {
    /* The Longitudinal difference between the * Tropical(Sayana) and Sidereal(Nirayana) zodiacs. */
    // lahiri chitraPaksha 24"49'
    let t = (jd - 2415020) / 36525;
    // avg node len moon
    let om =
      259.183275 -
      1934.142008333206 * t +
      0.0020777778 * t * t +
      0.0000022222222 * t * t * t;
    // avg len sun
    let ls = 279.696678 + 36000.76892 * t + 0.0003025 * t * t;
    let aya =
      17.23 * Math.sin(RADS * om) +
      1.27 * Math.sin(RADS * ls * 2) -
      (5025.64 + 1.11 * t) * t;
    aya = (80861.27 - aya) / 3600.0;
    // 84038.27 = Fagan-Bradley, 80861.27 = Lahiri

    return aya;
  }
  calcLagna(datetime) {
    /* tan(asc) = cos(t) / -(sin(t)*cos(ecl) + tan(Lat)*sin(ecl)) * t - local sidereal time * ecl - obliquity of the ecliptic. Standard equinox J2000.0 use 23.4392911° * Lat - local Latitude (Southern Latitudes are negative, Northern positive) */
    var t = this.calcSideralTime(datetime);
    var ecl = this.calc_ecliptic_obliquity(this.calcJulianDate(datetime));
    var asc = Math.atan2(
      Math.cos(t * RADS),
      -Math.sin(t * RADS) * Math.cos(ecl * RADS) -
        Math.tan(this.Lat * RADS) * Math.sin(ecl * RADS)
    );
    return asc * DEGS;
  }
  calcTithiPaksha() {
    /* The angle between Sun and the Moon * Tithi = (Moon Longitude - Sun Longitude) / 12 * K - Krishna, S - Sukla, * K.PratiPada - Waning Moon(darker phase), S.PratiPada - Waxing Moon(brighter phase) * * Swara ancient scince of breath * Pingala Nadi - right nostril(left brain hemisphere) * Ida Nadi - left nostril(right brain hemisphere) * Shushumna Nadi - both nostril(central channel) */
    /* Sunrise swara, for Sunset swara reverse sunrise swara */
    var tLon = (this.Planets.Moon.Nirayana - this.Planets.Sun.Nirayana) / 12;
    if (tLon > 15) tLon -= 15;
    else if (tLon < 15 && tLon > 0) tLon += 15;
    else if (tLon > 30) tLon -= 30;
    else if (tLon < 0) tLon = Math.round(Math.abs(tLon * 2));
    return this.TithiPaksha[Math.round(Math.abs(Math.floor(tLon)))];
  }
  calcDayLord(jd) {
    var Day = (Math.floor(jd + 0.5) + 1) % 7;
    var DayName = [
      "Sun",
      "Moon",
      "Mars",
      "Mercury",
      "Jupiter",
      "Venus",
      "Shani",
    ];
    return DayName[Day];
  }
  calcHoraLord() {
    var lords = ["Sun", "Venus", "Mercury", "Moon", "Shani", "Jupiter", "Mars"];
    var hour = [],
      lord = [],
      currentlord,
      currenthour;
    currenthour = this.DOB.hour + this.DOB.minute / 60;
    var daylord = this.calcDayLord(this.JD);
    var index = lords.indexOf(daylord);
    var todayrise = this.calcSunriseSet(true, false, false);
    var todayset = this.calcSunriseSet(false, false, false);
    var tomorrowrise = this.calcSunriseSet(true, true, false);
    var daylength = (todayset - todayrise) / 12;
    var nightlength = (24 - todayset + tomorrowrise) / 12;
    hour[0] = todayrise;
    for (var i = 1; i < 12; i++) {
      hour[i] = hour[i - 1] + daylength;
    }
    hour[12] = todayset;
    for (var i = 13; i < 25; i++) {
      hour[i] = hour[i - 1] + nightlength;
    }
    lord[0] = lords[index];
    for (var i = 1; i < 25; i++) {
      if (index > 5) {
        index = -1;
      }
      lord[i] = lords[index + 1];
      index++;
    }
    for (var i = 0; i < 24; i++) {
      if (currenthour < tomorrowrise) currenthour += 24;
      if (currenthour >= hour[i] && currenthour <= hour[i + 1])
        currentlord = lord[i];
    }
    return currentlord;
  }
  calcSunriseSet(rising, hora, hms) {
    /* Almanac for Computers, 1990 * published by Nautical Almanac Office * United States Naval Observatory, Washington, DC 20392 */
    var offical = 90 + 50 / 60;
    /* 90°50'00"*/
    var civil = 96;
    /* 96°00'00"*/
    var nautical = 102;
    /* 102°00'00"*/
    var astronomical = 108;
    /* 108°00'00"*/
    var zenith = offical;
    /* Day of the Year */
    var yy, mm, dd, tzdls;
    yy = this.DOB.year;
    mm = this.DOB.month;
    dd = this.DOB.day;
    tzdls = this.DOB.offset / 60;
    var a = Math.floor((275 * mm) / 9);
    var b = Math.floor((mm + 9) / 12);
    var c = 1 + Math.floor((yy - 4 * Math.floor(yy / 4) + 2) / 3);
    var n = hora ? a - c * b + (dd + 1) - 30 : a - c * b + dd - 30;
    var lonhour = this.Lon / 15;
    if (rising) var t = n + (6 - lonhour) / 24;
    else var t = n + (18 - lonhour) / 24;
    var Ms = 0.9856 * t - 3.289;
    var Ls = this.mod360(
      Ms +
        1.916 * Math.sin(Ms * RADS) +
        0.02 * Math.sin(2 * Ms * RADS) +
        282.634
    );
    var ra = this.mod360(Math.atan(0.91764 * Math.tan(Ls * RADS)) * DEGS);
    var Lquadrant = Math.floor(Ls / 90) * 90;
    var RAquadrant = Math.floor(ra / 90) * 90;
    ra = (ra + (Lquadrant - RAquadrant)) / 15;
    var sind = 0.39782 * Math.sin(Ls * RADS);
    var cosd = Math.cos(Math.asin(sind) * DEGS * RADS);
    var cosh =
      (Math.cos(zenith * RADS) - sind * Math.sin(this.Lat * RADS)) /
      (cosd * Math.cos(this.Lat * RADS));
    if (cosh > 1) {
      return "00:00:00";
    } else if (cosh < -1) {
      return "00:00:00";
    } else {
      var h = rising
        ? (360 - Math.acos(cosh) * DEGS) / 15
        : (Math.acos(cosh) * DEGS) / 15;
      var tm = h + ra - 0.06571 * t - 6.622;
      var UT = this.mod24(tm - lonhour) + 1.0 * tzdls;
      if (UT < 0) UT += 24;
      UT %= 24;
    }
    return hms ? this.dec2hms(UT) : UT;
  }
  calcVimsottariDasa(d) {
    var lord = [
      "Mercury",
      "Ketu",
      "Venus",
      "Sun",
      "Moon",
      "Mars",
      "Rahu",
      "Jupiter",
      "Saturn",
    ];
    var tdasa = [
      6209.11643142495, 2556.69500117498, 7304.84286049994, 2191.45285814998,
      3652.42143024997, 2556.69500117498, 6574.35857444995, 5843.87428839995,
      6939.60071747494,
    ];
    var Ts = (this.JD - 2415020.0) / 36525.0;
    var Tm = (this.JD - 2451545.0) / 36525.0;
    /* Mean Tropical year(solar year), McCarthy & Seidelmann, 2009, page.18, J. Laskar [1986] */
    var solaryear =
      365.2421896698 -
      6.15359 * 10e-6 * Ts -
      7.29 * 10e-10 * Ts * Ts +
      2.64 * 10e-10 * Ts * Ts * Ts;

    var index = lord.indexOf(this.Planets.Moon.Nakshatra.Lord);
    var period = tdasa[index];
    /* Dasa balance http://www.saravali.de/articles/dasa_balance.html */
    var balance = this.Planets.Moon.Nakshatra.Degree / (360 / 27);
    var lbalance = 1 - balance;
    var etime = Math.abs(balance * (period / solaryear));
    var ta = 0,
      tp = 0,
      mLord = this.Planets.Moon.Nakshatra.Lord,
      aLord,
      pLord,
      cmLord,
      caLord,
      cpLord,
      currentmaha = 0,
      indexcurrent = index,
      year;
    var ayear =
      today.getFullYear() * solaryear +
      (today.getMonth() + 1) * 30 +
      today.getDate();
    var byear = this.DOB.year * solaryear + this.DOB.month * 30 + this.DOB.day;
    var tyear = ayear - byear;
    /* Vimsottari Antardasa */
    for (var i = 0; i < 9; i++) {
      if (index > 8) index = 0;
      ta += tdasa[index] / solaryear / 120;
      if (ta > balance) {
        aLord = lord[index];
        break;
      }
      index++;
    }
    /* Vimsottari Pratyantardasa */
    ta = 1 - (ta - balance) / (tdasa[index] / solaryear / 120);
    for (var i = 0; i < 9; i++) {
      if (index > 8) index = 0;
      tp += tdasa[index] / solaryear / 120;
      if (tp > ta) {
        pLord = lord[index];
        break;
      }
      index++;
    }
    /* Current Vimsottari Maha Dasa */
    var nbalance = lbalance * tdasa[indexcurrent];
    year = ayear - (byear + nbalance);
    indexcurrent++;
    ta = 0;
    for (var i = 0; i < 9; i++) {
      if (indexcurrent > 8) indexcurrent = 0;
      ta += tdasa[indexcurrent];
      if (ta > year) {
        cmLord = lord[indexcurrent];
        break;
      }
      indexcurrent++;
    }
    /* Current Vimsottari Antardasa */
    year = 1 - (ta - year) / tdasa[indexcurrent];
    ta = 0;
    for (var i = 0; i < 9; i++) {
      if (indexcurrent > 8) indexcurrent = 0;
      ta += tdasa[indexcurrent] / solaryear / 120;
      if (ta > year) {
        caLord = lord[indexcurrent];
        break;
      }
      indexcurrent++;
    }
    /* Current Vimsottari Pratyantardasa */
    tp = 0;
    ta = 1 - (ta - year) / (tdasa[indexcurrent] / solaryear / 120);
    for (var i = 0; i < 9; i++) {
      if (indexcurrent > 8) indexcurrent = 0;
      tp += tdasa[indexcurrent] / solaryear / 120;
      if (tp > ta) {
        cpLord = lord[indexcurrent];
        break;
      }
      indexcurrent++;
    }
    var tstr = this.dec2date(etime);
    var nowstr = " ";
    nowstr += (today.getDate() < 10 ? "0" : "") + today.getDate();
    nowstr += (today.getMonth() + 1 < 10 ? "/0" : "/") + (today.getMonth() + 1);
    nowstr += (today.getFullYear() < 1000 ? "/0" : "/") + today.getFullYear();
    var nstr = mLord;
    /* M.Lord*/
    nstr += "/";
    nstr += aLord;
    /* A.Lord*/
    nstr += "/";
    nstr += pLord;
    /* P.Lord*/
    nstr += " ";
    nstr += cmLord;
    /* C. M.Lord*/
    nstr += "/";
    nstr += caLord;
    /* C. A.Lord*/
    nstr += "/";
    nstr += cpLord;
    /* C. P.Lord*/
    return d ? tstr + " " + nowstr : nstr;
  }

  details() {
    /*get the table Element*/
    var table = document.getElementById("person_details");
    /* data*/

    // Object.keys(this.Planets).forEach((planet) => {
    //   canvas.fillText(
    //     this.real2dms(this.Planets[planet].Rasi.Degree) +
    //       " - " +
    //       this.Planets[planet].Rasi.Degree.toFixed(3),
    //     252,
    //     y
    //   );
    //   y += 15;
    // });
    // canvas.fillText("Ayanamsa:" + this.real2dms(this.Ayanamsa), 2, 170);
    // canvas.fillText(
    //   "Sid. time: " + this.deg2hms(this.calc_sideral_time(this.DOB)),
    //   2,
    //   185
    // );
    // canvas.fillText("Day Lord:" + this.calc_Day_Lord(), 223, 170);
    // canvas.fillText("Hora Lord:" + this.calc_hora_Lord(), 223, 185);
    let data = {
      Name: this.JatakName,
      Gender: this.Gender,
      "Birth Date": this.DOB.toLocaleString(DateTime.DATETIME_FULL),
      "Birth Time": this.DOB.toLocaleString(DateTime.TIME_WITH_LonG_OFFSET),
      "Birth Place": this.City,
      "English day": this.DOB.weekDayLong,
      "Hindi day": "TBD",
      Latitude: this.Lat,
      Longitude: this.Lon,
      Ishtkaal: this.dec2hms(
        this.hms2dec(this.DOB.hour, this.DOB.minute, this.DOB.second) -
          this.calcSunriseSet(false, false, false)
      ),
      Tithi: this.calcTithiPaksha().Tithi,
      Paksha: this.calcTithiPaksha().Paksha,
      "Hindu Week day": this.DOB.weekDayLong,
      Yoga: "VYATIPATA",
      /*TBD*/
      Karan: "KOLAV",
      /*TBD*/
      Sunrise: this.calcSunriseSet(true, false, true),
      Sunset: this.calcSunriseSet(false, false, true),
      "Day Duration": this.dec2hms(
        this.calcSunriseSet(false, false, false) -
          this.calcSunriseSet(true, false, false)
      ),
      "Paya (Nakshatra Based)": "Copper",
      /*TBD*/
      Varna: "SUDRA",
      /*TBD*/
      Yoni: "Simha",
      /*TBD*/
      Gana: "Manushya",
      /*TBD*/
      Vasya: "Manav",
      /*TBD*/
      Nadi: this.calcTithiPaksha().Nadi,
      /*TBD*/
      "Balance Of Dasha : false": this.calcVimsottariDasa(false),
      "Balance Of Dasha : true": this.calcVimsottariDasa(true),
      Lagna: "Virgo",
      "Lagna Lord": "MER",
      Rasi: "Aquarius",
      "Rasi Lord": "SAT",
      "Nakshatra-Pada": "PURVABHADRA-1",
      "Nakshatra Lord": "JUP",
      "Julian day": "2451911",
      "SunSign (Indian)": "Sagittarius",
      Ayanamsa: "023-52-14",
      "Ayanamsa Name": "Lahiri Ayan",
      Obliquity: "023-26-21",
      "Sidereal Time": "07.34.34",
    };

    /* create table rows for each key-value pair in the object*/
    for (var key in data) {
      var row = document.createElement("tr");
      /* add a cell for the key*/
      var keyCell = document.createElement("td");
      keyCell.textContent = key;
      row.appendChild(keyCell);
      /* add a cell for the value*/
      var valueCell = document.createElement("td");
      valueCell.textContent = data[key];
      row.appendChild(valueCell);
      /* add the row to the table*/
      table.appendChild(row);
    }
  }
}
