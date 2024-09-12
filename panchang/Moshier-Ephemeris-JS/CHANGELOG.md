# Changelog

## **v1.2.1**

##### Added

- Properly minify the code, decreasing bundle size from 537kb to 235kb.


## **v1.2.0**

##### Added

- Added `.motion` property to heliocentric bodies for reporting retrograde motion and pre/post shadow phases.
- Added `calculateShadows` key to Ephemeris class constructor to toggle costly shadow calculations on / off.

## **v1.1.0**

##### Fixed

##### Added

- Added `observerInstance.Date.dateString` property which returns the formatted date string of the observer
- Added new moon position properties include phase & shape descriptions and orbit calculations (mean ascending node + mean descending node and mean perigee + mean apogee):

```
new Ephemeris: {
  moon: {
    position: {
      phaseDecimal: float // property which returns a 0.0 - 0.99 representation of the phase.
      phaseDaysDistance: float // positive float indicating distance from closest phase quarter
      shapeDirectionString: string // 'Waxing' or 'Waning' depending on the phaseDecimal value
      shapeString: string // 'Crescent' or 'Gibbous' depending on the illuminatedFraction
      quarterApproximationValue: float // the amount (in days) in either direction of a quarter event to allow for determining the approximate quarter phase. Defaults to 1.5 days in either direction of a quarter event.
      quarterApproximationString: string // QUARTER EVENT<'New Moon', 'First Quarter', 'Full Moon', 'Last Quarter'> determined by the phaseDecimal and quarterApproximationValue
      quarterApproximationDirectionString: string // "Entering" or "Leaving" the quarter approximation
      withinQuarterApproximation: boolean // true/false determined by whether phaseDecimal is inside of quarterApproximationValue
    }
    orbit: {
      meanAscendingNode: {
        apparentLongitude: float
        apparentLongitudeString: string
        apparentLongitude30String: string
      },
      meanDescendingNode: {...},
      meanPerigee: {...},
      meanApogee: {...}
    }
  }
}

```


##### Changed

## **v1.0.0**

##### Fixed
- Fixed Moon `phaseQuarter` bug where integer did not align with expected moon phase start.

##### Added

- Added `phaseQuarterString` property to the `moon` result with a descriptor of the phase ("Full Moon", etc).
- Complete test coverage for all calculated bodies.

##### Changed
- Refactors much of the codebase into ES6 modules, classes, and OOP patterns where easy to do.
- `body.constellation` property returns the name of the constellation instead of the index

##### Breaking Changes

- Added Ephemeris class to access calculations (see `README` for usage examples)
- Requires month range 0 - 11 on instantiation
