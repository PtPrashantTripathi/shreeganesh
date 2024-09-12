// Import utility functions from utils.js
import { mod360, calcIndex } from "./utils.js"; // Adjust the path as needed

class Rasi {
  // Static property to hold details of Sidereal Rasi Signs
  static RasiSigns = {
    /* Sidereal Rasi Signs(Fixed) */
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

  /**
   * Constructs a Rasi object based on the given position.
   * @param {number} position - The astrological position in degrees.
   */
  constructor(position) {
    // Normalize the position to be within 0-359 degrees
    this.Position = mod360(position);

    // Calculate the index of the Rasi sign based on the normalized position
    const totalRasiSigns = 12; // Total number of Rasi signs
    const index = calcIndex(this.Position, totalRasiSigns);

    // Find the Rasi sign corresponding to the calculated index
    const rasi = Object.values(Rasi.RasiSigns).find((e) => e.Index === index);

    // Assign Rasi sign properties to the instance
    this.Index = rasi.Index;
    this.Name = rasi.Name;
    this.Element = rasi.Element;
    this.Gender = rasi.Gender;
    this.Nature = rasi.Nature;
    this.Lord = rasi.Lord;

    // Calculate the range of degrees covered by this Rasi sign
    this.Range = {
      Min: (index - 1) * (360 / totalRasiSigns),
      Max: index * (360 / totalRasiSigns),
    };

    // Calculate the degree within the Rasi sign's range
    this.Degree = this.Position - this.Range.Min;
  }

  /**
   * Returns the details of the Rasi sign.
   * @returns {object} - An object containing the Rasi details.
   */
  getRasiDetails() {
    return {
      Index: this.Index,
      Name: this.Name,
      Element: this.Element,
      Gender: this.Gender,
      Nature: this.Nature,
      Lord: this.Lord,
      Position: this.Position,
      Range: this.Range,
      Degree: this.Degree,
    };
  }
}

export default Rasi;
