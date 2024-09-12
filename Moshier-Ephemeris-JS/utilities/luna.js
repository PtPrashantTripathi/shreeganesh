import { util } from './util.js'

export const getMeanAscendingNode = julianDate => {
  // * t float = julianDate
  // returns => longitude of node in decimal degrees
  //////////
  // A.K.A - North Node / Right Ascension Ascending Node
  // Source: Astronomical Algorithims by Jean Meeus
  // pg 313 example 45.7

  const t = util.timeInJulianCenturies(julianDate)

  const result = 125.0445550 -
                 1934.1361849 * t +
                 0.0020762 * Math.pow(t, 2) +
                 Math.pow(t, 3) / 467410 -
                 Math.pow(t, 4) / 60616000

  return util.mod(result, 360)
}

export const getMeanPerigee = julianDate => {
  // * t float = julianDate
  // returns => longitude of perigee in decimal degrees
  //////////
  // Source: Astronomical Algorithims by Jean Meeus
  // pg 313 example 45.7

  const t = util.timeInJulianCenturies(julianDate)

  const result = 83.3532430 +
                 4069.0137111 * t -
                 0.0103238 * Math.pow(t, 2) -
                 Math.pow(t, 3) / 80053 +
                 Math.pow(t, 4) / 18999000

  return util.mod(result, 360)
}
