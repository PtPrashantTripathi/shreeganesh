# Moshier Ephemeris ES6 Re-implementation

This is a "re-implementation" of version 0.1.0 of Mivion's Moshier Ephemeris javascript implementation (found here: https://github.com/mivion/ephemeris).

The goal is to re-implement the codebase with ES6 modules, classes, and refactored programming to promote better debugging / testing, readability, and extensibility of the code.

This amazing work done by Moshier and Mivion deserves a lot of love. Hope you enjoy it!

##  Description

ES6 re-implementation of ephemeris calculations for sun, planets, comets, asteroids and stars.

This implementation based on Steve Moshier (http://www.moshier.net).

Licensed under GPL version 3 (https://www.gnu.org/licenses/gpl-3.0.html).

## About Moshier's Ephemeris

An ephemeris is a table that gives you the position of various celestial bodies in the solar system for every minute of every day of every year. Before computers, they were frequently sold in gigantic books every decade or so.

Moshier's ephemeris is a set of formula written by Stephen Moshier that generates the apparent positions of celestial bodies when given a particular date/time/location, without all the tables.

The Jet Propulsion lab also has an ephemeris, which is only accessible via their website or a telnet connection. There's also the "Swiss Ephemeris", which is available for free until you hit a certain threshold.

Both of these popular ephemerides aren't as distributable as Moshier's. They're both essentially gigantic tables - dozens of MBs large - or otherwise hard to readily access (see: telnet connection). Moshier's, with its tiny size, is built for the modern web and can be implemented directly into something as small as a phone, raspberry pi, or any client side app. The minified build as of 1.2.1 is 235kb in size.

Moshier's Ephemeris is good from -3000 B.C.E - 3000 C.E. Its results are always within less than a degree of the other leading Ephemerii, making this a highly precise library.

## Celestial Bodies included
- Sun
- Moon
- Earth
- Mercury
- Venus
- Mars
- Jupiter
- Saturn
- Uranus
- Neptune
- Pluto
- Chiron
- Sirius

## Extra features
- Thoroughly tested code & an easy to implement `Ephemeris` class for external use.
- Moon phase descriptions
- Lunar nodes & perigee / apogee calculations
- Planetary & asteroid retrograde motion reporting, as well as optional shadow phase determinations.

## Future work
- Eclipses
- Table generator for retrograde / eclipse events within a user-specified timeframe.
- Add more comets & asteroids


## Performance
- The ephemeris is extremely fast and performs all of its calculations in under what appears to be 100ms. I haven't actually benchmarked things but hope to in the future.
- As of 1.2.0, I introduced retrograde shadow calculations which introduce a significant performance impact (nearly 10x slowdown). I made these calculations optional and set them to be turned off by default. Calculating retrograde shadows require the ephemeris to calculate the next and previous retrograde & direct dates for each body, which I'm currently doing by brute force since I don't know if any formula exist for these sorts of calculations. If anyone knows, please reach out!

## Demo

Open the file: `/demo/index.html` in your browser.

## Usage

##### Load the library
```
// With ES6 imports

import Ephemeris from './build/ephemeris-1.2.0.bundle.js'

const ephemeris = new Ephemeris({...date/location})

ephemeris.Results
```

```
// or in a browser
<script type='text/javascript' src='./ephemeris-1.2.0.bundle.js' charset='utf-8'></script>

<script>
  const ephemeris = new Ephemeris.default({...date/location})

  ephemeris.Results
</script>
```

#####  Create a new ephemeris instance for all celestial bodies
```
# Create a new ephemeris instance

// January 1st, 2000, 0:00 UTC - Cambridge, MA

// NOTE - months go from 0 - 11 (0 = jan)

const ephemeris = new Ephemeris({
  year: 2000, month: 0, day: 1, hours: 0, minutes: 0, latitude: 41.37, longitude: -71.1, calculateShadows: false
})
```

##### Generate ephemeris for a single body ( or multiple )
```
# a single body = with key: "string"

const ephemeris = new Ephemeris({
  key: "jupiter",
  year: 2000, month: 0, day: 1, hours: 0, minutes: 0,
  latitude: 41.37, longitude: -71.1,
  calculateShadows: false
})

# multiple specific bodies with key: [array]

const ephemeris = new Ephemeris({
  key: ["jupiter", "venus", "moon", "chiron"],
  year: 2000, month: 0, day: 1, hours: 0, minutes: 0,
  latitude: 41.37, longitude: -71.1,
  calculateShadows: false
})
```

##### View all results
```
# View all results

ephemeris.Results

// => Array[{sun}, {moon}, {mercury}...]
```

##### Get the Body Position and Retrograde motion

```
# Get position

ephemeris.mercury.position

# => {
  position: {
    ...
    apparentLongitude: 274.38206441358966,
    apparentLongitude30String: "4°22'55"",
    apparentLongitudeString: "274°22'55"",
    ...
  }
}

# Get motion

ephemeris.mercury.motion

# => {
  isRetrograde: false,
  oneSecondMotionAmount: 0.00000031751...,
  withinPreRetrogradeShadow: false, // optional
  withinPostRetrogradeShadow: false // optional
}
```

##### complete body example

```
# View a specific celestial body result (if generated)

ephemeris.mercury

// => {
  aberration: {
    dRA: -1.9269831284660512, dDec: 1.7324642445063785
  },
  anomaly: 198.7199,
  dailyMotion : 4.09236,
  distance : 0.4662701071857169,
  eccentricity: 0.205628,
  epoch: 2458849.491717961,
  equinox: {
    julian: 2451545
  },
  equinoxEclipticLonLat: {
    0: 4.580688286536208, 1: -0.06840241722458161, 2: 0.46626601943095985, 3: {…}, 4: {…}
  },
  inclination: 7.0048,
  key: "mercury",
  lightTime: 11.926136235901744,
  longitude: 4.575414616860342,
  magnitude: -0.42,
  node: 48.177,
  perihelion: 29.074,
  position: {
    aberration: {
      dRA: -1.520496036316089, dDec: -0.6041546957957655
    }
    altaz: {
      atmosphericRefraction: {
        deg: 0, dRA: 0, dDec: -6.869998111961196e-11
      }
      dLocalApparentSiderialTime: 0.5064527239416776,
      diurnalAberation: {
        ...
      },
      diurnalParallax: {
        ...
      },
      localApparentSiderialTime: {...},
      topocentric: {
        ...
      },
      transit: {
        ...
      }
    },
    apparent: {
      ...
    },
    apparentGeocentric: {
    ...
    },
    apparentLongitude: 274.38206441358966,
    apparentLongitude30String: "4°22'55"",
    apparentLongitudeString: "274°22'55"",
    approxVisual: {
      magnitude: -1.281820354968265, phase: 0.9886399799797707
    },
    astrometricB1950: {
      ...
    },
    astrometricJ2000: {
      ...
    },
    constellation: "Sgr Sagittarii",
    date: {
      year: 2020, month: 1, day: 1, hours: 0, minutes: 0
    },
    deflection: {
      sunElongation: 5.768325480048136, lightDeflection: {…}
    },
    equatorialDiameter: 4.686223488825094,
    geocentricDistance: 1.4339905077136652,
    nutation: {
      dRA: -1.2125665235304237, dDec: 1.1499169000116969
    }
    polar: [4.575812495945637, -0.06835690545143856, 0.4662660194309599],
    rect: [-0.06351901141088291, -0.4101381667492277, -0.21250842858566044],
    trueGeocentricDistance: 1.4340239958103242
  },
  motion: {
    isRetrograde: false,
    oneSecondMotionAmount: 0.00000031751...,
    withinPreRetrogradeShadow: false, // optional
    withinPostRetrogradeShadow: false // optional
  }
}
```

##### Get the Earth and Observer
```
# Get the Earth and Observer

ephemeris.Earth

// => Object{earth}

ephemeris.Observer

// => Object{observer}
```

##### Get Moon Phase / Nodes / Orbit readings

```
// Phases
ephemeris.moon.position

// => {
  ...
  illuminatedFraction: 0.3992198452219991, // 0...1 -- 0 = none, 0.5 = half, 1 = full
  phaseDaysBefore: 1.000054577340336,
  phasedaysPast: undefined,
  phaseDaysDistance: 1.000054577340336,
  phaseDecimal: 0.2171554039712993, // 0...1 -- 0 = new, 0.25 = first q, 0.5 = full, 0.75 = last q
  phaseQuarter: 0,
  phaseQuarterString: "New Moon",
  quarterApproximationDirectionString: "Entering",
  quarterApproximationString: "First Quarter",
  shapeDirectionString: "Waxing",
  shapeString: "Crescent"
  ...
}

// => Object{luna}

ephemeris.moon.orbit

// => {
  meanApogee: { // aka lilith
    apparentLongitude: 357.0998704627402,
    apparentLongitudeString: "357°6'0"",
    apparentLongitude30String: "27°6'0""
  },
  meanAscendingNode: {...}, // aka north node
  meanDescendingNode: {...}, // aka south node
  meanPerigee: {...}
}
```

## Installation

```
npm install

// or yarn install
```

## Testing

```
npm test

// or yarn test
```

### Notes on precision & accuracy upgrading from 0.1.0 to 1.0.0 and beyond

1) There is a very tiny differences (in the magnitude of 0.0000005 degrees) between the `apparentLongitude` decimal calculation of the `Sun` in the 1.0.0 implementation vs the 0.1.0 implentation. I've tracked this down to a specific calculation - `epsilon.js`.

I believe this upgrade actually fixed a bug in the original implementation. The bug was centered around the way `epsilon.js` was implemented. In the 0.1.0 implementation, `$moshier.epsilon` was a global variable that was reassigned frequently. This, I believe, resulted in unintentional mutations.

I refactored the code to treat this as an immutable locally scoped object, because I do not believe `epsilon` was intended to store global mutations of its data.

Legacy code (mutations noted):

`v0.1.0 Sun.js - line 76 - 87`
```
$moshier.epsilon.calc ($moshier.body.earth.position.date); // Sets $moshier.epsilon - now locally scoped & immutable in 1.0.0
$moshier.nutation.calc ($moshier.body.earth.position.date, ecr); // mutates $moshier.epsilon

/* Display the final apparent R.A. and Dec.
 * for equinox of date.
 */
$moshier.body.sun.position.constellation = $moshier.constellation.calc (ecr, $moshier.body.earth.position.date); // mutates $moshier.epsilon

$moshier.body.sun.position.apparent = $util.showrd (ecr, pol);

/* Show it in ecliptic coordinates */
y  =  $moshier.epsilon.coseps * rec[1]  +  $moshier.epsilon.sineps * rec[2]; // utilizes $moshier.epsilon
```

This 0.0000005 difference in the Sun's `apparentLongitude` between versions 0.1.0 and 1.0.0 is probably good.

Everything else appears to be exactly the same according to my tests.

2) Found tiny correction (0.1*e-15 or 0.000000000000001) on moon `illuminatedFraction` and `phaseDaysPast / phaseDaysBefore` as a result of gplan refactoring. This was most likely due to the use of conversion constants for radians-to-seconds and seconds-to-radians (RTS and STR) in the app. One possible solution would be to use equations involving Math.PI instead, however this tiny difference seems unimportant and an issue with javascript's math rather than the refactor.
