const dictionary = {
  Lagna: { HI: "लग्न", HI_SHORT: "ल", EN_SHORT: "Lg" },
  Sun: { HI: "सूर्य", HI_SHORT: "सू", EN_SHORT: "Su" },
  Moon: { HI: "चन्द्र", HI_SHORT: "च", EN_SHORT: "Mo" },
  Mars: { HI: "मंगल", HI_SHORT: "मं", EN_SHORT: "Ma" },
  Mercury: { HI: "बुध", HI_SHORT: "बु", EN_SHORT: "Me" },
  Jupiter: { HI: "गुरु", HI_SHORT: "गु", EN_SHORT: "Ju" },
  Venus: { HI: "शुक्र", HI_SHORT: "शु", EN_SHORT: "Ve" },
  Saturn: { HI: "शनि", HI_SHORT: "श", EN_SHORT: "Sa" },
  Rahu: { HI: "राहु", HI_SHORT: "रा", EN_SHORT: "Ra" },
  Ketu: { HI: "केतु", HI_SHORT: "के", EN_SHORT: "Ke" },
};

export default class KundliChart {
  constructor(options) {
    // defaultOptions
    this.options = {
      width: 300,
      height: 300,
      fontHeight: 15,
      maxLength: 12,
      lang: "HI", // "HI"|"EN"
      shortName: false,
      printLagna: false,
    };
    this.options = Object.assign(this.options, options);
    this.coords = {
      zodic_coords: [
        [50, 25],
        [25, 10.25],
        [10, 25],
        [25, 50],
        [10, 75],
        [25, 87.5],
        [50, 75],
        [75, 87.5],
        [90, 75],
        [75, 50],
        [90, 25],
        [75, 10.25],
      ],
      house_coords: [
        [50, 46],
        [25, 21],
        [21, 25],
        [46, 50],
        [21, 75],
        [25, 79],
        [50, 54],
        [75, 79],
        [79, 75],
        [54, 50],
        [79, 25],
        [75, 21],
      ],
      xy: [
        [0, 0],
        [0, 50],
        [0, 100],
        [25, 25],
        [25, 75],
        [50, 0],
        [50, 50],
        [50, 100],
        [75, 25],
        [75, 75],
        [100, 0],
        [100, 50],
        [100, 100],
      ],
      polylines: [
        // square
        [5, 8, 6, 3, 5],
        [1, 3, 6, 4, 1],
        [4, 6, 9, 7, 4],
        [6, 8, 11, 9, 6],
        // triangle
        [0, 5, 3, 0],
        [0, 3, 1, 0],
        [1, 4, 2, 1],
        [2, 4, 7, 2],
        [7, 9, 12, 7],
        [9, 11, 12, 9],
        [8, 10, 11, 8],
        [5, 8, 10, 5],
      ],
    };
  }
  fixPlanetName(planetName) {
    if (this.options.lang == "HI") {
      if (this.options.shortName) {
        planetName = dictionary[planetName].HI_SHORT;
      } else {
        planetName = dictionary[planetName].HI;
      }
    } else if (this.options.lang == "EN" && this.options.shortName) {
      planetName = dictionary[planetName].EN_SHORT;
    }
    return planetName;
  }
  getHouseChart(chart) {
    const homeHouseRasiIndex = chart.Lagna.Index;
    const signChart = {};

    for (const planetName in chart) {
      if (!this.options.printLagna && planetName == "Lagna") continue;
      const signIndex = chart[planetName].Index;
      if (!signChart.hasOwnProperty(signIndex)) {
        signChart[signIndex] = [];
      }
      signChart[signIndex].push({
        planetName: this.fixPlanetName(planetName),
        Degree: chart[planetName].Degree,
      });
    }
    const houseChart = [];
    for (let i = 0; i < 12; i++) {
      let index = homeHouseRasiIndex + i;
      if (index > 12) index -= 12;
      houseChart.push({
        houseNum: index,
        planets: signChart[index] || [],
      });
    }
    return houseChart;
  }

  perc(p, x) {
    return (p * x) / 100;
  }

  createKundli(chart) {
    const houseChart = this.getHouseChart(chart);
    let svgTxt = `<svg xmlns="http://www.w3.org/2000/svg" width="${this.options.width}px" height="${this.options.height}px" viewBox="0 0 ${this.options.width} ${this.options.height}" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">svg{shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd;border:solid #b78b03 1.2px;}polyline{stroke:#b78b03;stroke-width:1px;}.triangle{fill:#fdf7e3;}.square{fill:#fff;}text{text-anchor:middle;alignment-baseline:central;}.text2{fill:#C82A22;font-weight:normal;font-size:9pt;}.text1{fill:#489624;font-weight:bold;font-size:7pt;}</style></defs>`;
    this.coords.polylines.forEach((lp) => {
      const polylinesCoords = lp
        .map(
          (i) =>
            `${this.perc(this.coords.xy[i][0], this.options.width)},${this.perc(
              this.coords.xy[i][1],
              this.options.height
            )}`
        )
        .join(" ");
      const className = lp.length === 5 ? "square" : "triangle";
      svgTxt += `<polyline class="${className}" points="${polylinesCoords}"></polyline>`;
    });
    houseChart.forEach((houseValue, houseIndex) => {
      /* planets_text_array contains the chunks of planet Names */
      const planetsTextArray = houseValue.planets.reduce((acc, planet) => {
        let lastChunk = acc[acc.length - 1];
        if (
          !lastChunk ||
          lastChunk.length + planet.planetName.length + 1 >
            this.options.maxLength
        ) {
          acc.push(planet.planetName);
        } else {
          acc[acc.length - 1] += ` ${planet.planetName}`;
        }
        return acc;
      }, []);
      svgTxt += `<g transform="translate(${this.perc(
        this.coords.zodic_coords[houseIndex][0],
        this.options.width
      )} ${
        this.perc(
          this.coords.zodic_coords[houseIndex][1],
          this.options.height
        ) -
        (planetsTextArray.length * this.options.fontHeight) / 2
      })"><text x="0" y="0" class="text2">`;
      planetsTextArray.forEach((v) => {
        svgTxt += `<tspan x="0" dy="${this.options.fontHeight}px">${v}</tspan>`;
      });
      svgTxt += `</text></g><text x="${this.perc(
        this.coords.house_coords[houseIndex][0],
        this.options.width
      )}" y="${this.perc(
        this.coords.house_coords[houseIndex][1],
        this.options.height
      )}" class="text1">${houseValue.houseNum}</text>`;
    });
    svgTxt += `</svg>`;
    return svgTxt;
  }
}
