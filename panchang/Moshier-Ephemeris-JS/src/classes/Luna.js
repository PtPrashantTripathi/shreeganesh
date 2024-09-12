import { DTR, RTD, RTS, REARTH } from '../constants'

import { aberration } from '../utilities/aberration'
import { altaz } from '../utilities/altaz'
import Epsilon from '../utilities/Epsilon'
import { gPlanMoon, get_lp_equinox } from '../utilities/gplan'
import { lonlat } from '../utilities/lonlat'
import { precess } from '../utilities/precess'
import { nutation } from '../utilities/nutation'
import { util } from '../utilities/util'
import { getMeanAscendingNode, getMeanPerigee } from '../utilities/luna'

export default class Luna {
  constructor({body, earthBody, observer, quarterApproximationValue=1.5}={}) {
    this.ra = 0.0 /* Right Ascension */
    this.dec = 0.0 /* Declination */

    this.quarterApproximationValue = quarterApproximationValue

    this._body = this.calculateBody(body, earthBody, observer)

    Object.keys(this._body).forEach(key => {
      this[key] = this._body[key]
    })

    this.motion = {}

    this.orbit = this.calculateOrbit(observer.Date.julian)

    this.calculateBody = this.calculateBody.bind(this)
    this.calcll = this.calcll.bind(this)
    this.calculateOrbit = this.calculateOrbit.bind(this)
    this.calculateMeanAscendingNode = this.calculateMeanAscendingNode.bind(this)
    this.calculateMeanDescendingNode = this.calculateMeanDescendingNode.bind(this)
  }

  static GetPhaseQuarterString(quarterIndex) {
    switch(quarterIndex) {
      case 0:
        return "New Moon"
      case 1:
        return "First Quarter"
      case 2:
        return "Full Moon"
      case 3:
        return "Last Quarter"
      default:
        throw new Error(`Quarter Index: ${quarterIndex} not valid (must be beteen 0 - 3)`)
    }
  }

  static GetShapeString({illuminatedFraction=0.00}={}) {
    if (illuminatedFraction >= 0 && illuminatedFraction < 0.5) return "Crescent"
    if (illuminatedFraction >= 0.5 && illuminatedFraction < 1) return "Gibbous"
  }

  static GetShapeDirectionString({phaseDecimal=0.00}={}) {
    if (phaseDecimal >= 0 && phaseDecimal < 0.5) return "Waxing"
    if (phaseDecimal >= 0.5 && phaseDecimal < 1) return "Waning"
  }

  static GetWithinQuarterApproximation({phaseDaysBefore=0.00, phaseDaysPast=0.00, halfRangeLength=this.quarterApproximationValue}={}) {
    return (!!phaseDaysBefore && phaseDaysBefore <= halfRangeLength) || (!!phaseDaysPast && phaseDaysPast <= halfRangeLength)
  }

  static GetQuarterApproximationString({quarterIndex=0, phaseDaysBefore=0.00, phaseDaysPast=0.00, halfRangeLength=1.5}={}) {
    if (!(!!phaseDaysBefore || !!phaseDaysPast) || (!!phaseDaysBefore && phaseDaysBefore > halfRangeLength) || (!!phaseDaysPast && phaseDaysPast > halfRangeLength)) {
      return
    }

    const closestQuarterIndex = (!!phaseDaysBefore && phaseDaysBefore <= halfRangeLength) ? util.mod(quarterIndex + 1, 4) : util.mod(quarterIndex, 4)

    return `${Luna.GetPhaseQuarterString(closestQuarterIndex)}`
  }

  static GetQuarterApproximationDirectionString({phaseDaysBefore=0.00, phaseDaysPast=0.00, halfRangeLength=1.5}={}) {
    if (!!phaseDaysBefore && phaseDaysBefore <= halfRangeLength) return "Entering"
    if (!!phaseDaysPast && phaseDaysPast <= halfRangeLength) return "Leaving"
  }

  calculateBody(body, earthBody, observer) {
    var i, prtsav; // int
  	var ra0, dec0; // double
  	var x, y, z, lon0; // double
  	var pp = [], qq = [], pe = [], re = [], moonpp = [], moonpol = []; // double

  	body.position = {
  		polar: [],
  		rect: []
  	};

  	/* Geometric equatorial coordinates of the earth.  */
  	for (i = 0; i < 3; i++) {
  		re[i] = earthBody.position.rect [i];
  	}

  	/* Run the orbit calculation twice, at two different times,
  	 * in order to find the rate of change of R.A. and Dec.
  	 */

  	/* Calculate for 0.001 day ago
  	 */


  	this.calcll(observer.Date.julian - 0.001, moonpp, moonpol, body, earthBody, observer); // TDT - 0.001
  	ra0 = this.ra;
  	dec0 = this.dec;
  	lon0 = moonpol[0];
  	/* Calculate for present instant.
  	 */
  	body.position.nutation = this.calcll(observer.Date.julian, moonpp, moonpol, body, earthBody, observer).nutation;

  	body.position.geometric = {
  		longitude: RTD * body.position.polar[0],
  		latitude: RTD * body.position.polar[1],
  		distance: RTD * body.position.polar[2]
  	};

  	/**
  	 * The rates of change.  These are used by altaz () to
  	 * correct the time of rising, transit, and setting.
  	 */
  	body.locals.dradt = this.ra - ra0;
  	if (body.locals.dradt >= Math.PI)
  		body.locals.dradt = body.locals.dradt - 2.0 * Math.PI;
  	if (body.locals.dradt <= -Math.PI)
  		body.locals.dradt = body.locals.dradt + 2.0 * Math.PI;
  	body.locals.dradt = 1000.0 * body.locals.dradt;
  	body.locals.ddecdt = 1000.0*(this.dec-dec0);

  	/* Rate of change in longitude, degrees per day
  	 * used for phase of the moon
  	 */
  	lon0 = 1000.0*RTD*(moonpol[0] - lon0);

  	/* Get apparent coordinates for the earth.  */
  	z = re [0] * re [0] + re [1] * re [1] + re [2] * re [2];
  	z = Math.sqrt(z);
  	for (i = 0; i < 3; i++) {
  		re[i] /= z;
  	}

  	/* aberration of light. */
  	body.position.annualAberration = aberration.calc(re, earthBody, observer, body);

  	/* pe[0] -= STR * (20.496/(RTS*pe[2])); */
  	re = precess.calc(re, observer.Date.julian, -1);
  	nutation.calc(observer.Date, re); // NOTE mutates re

  	for (i = 0; i < 3; i++) {
  		re[i] *= z;
  	}

  	pe = lonlat.calc( re, observer.Date, pe, 0 );

  	/* Find sun-moon-earth angles */
  	for( i=0; i<3; i++ ) {
  		qq[i] = re[i] + moonpp[i];
  	}
  	body = util.angles( moonpp, qq, re, body );

  	/* Display answers
  	 */

  	body.position.apparentGeocentric = {
  		longitude: moonpol [0],
  		dLongitude: RTD * moonpol [0],
  		latitude: moonpol [1],
  		dLatitude: RTD * moonpol [1],
  		distance: moonpol [2] / REARTH
  	};
  	body.position.apparentLongitude = body.position.apparentGeocentric.dLongitude;
  	var dmsLongitude = util.dms(body.position.apparentGeocentric.longitude);
  	body.position.apparentLongitudeString =
  		dmsLongitude.degree + '\u00B0' +
  		dmsLongitude.minutes + '\'' +
  		Math.floor (dmsLongitude.seconds) + '"'
  	;

  	body.position.apparentLongitude30String =
  		util.mod30 (dmsLongitude.degree) + '\u00B0' +
  		dmsLongitude.minutes + '\'' +
  		Math.floor (dmsLongitude.seconds) + '"'
  	;

  	body.position.geocentricDistance = moonpol [2] / REARTH;

  	x = REARTH/moonpol[2];
  	body.position.dHorizontalParallax = Math.asin (x);
  	body.position.horizontalParallax = util.dms (Math.asin (x));

  	x = 0.272453 * x + 0.0799 / RTS; /* AA page L6 */
  	body.position.dSemidiameter = x;
  	body.position.Semidiameter = util.dms (x);

  	x = RTD * Math.acos(-body.locals.ep);
  	/*	x = 180.0 - RTD * arcdot (re, pp); */
  	body.position.sunElongation = x;
  	x = 0.5 * (1.0 + body.locals.pq);
  	body.position.illuminatedFraction = x;

  	/* Find phase of the Moon by comparing Moon's longitude
  	 * with Earth's longitude.
  	 *
  	 * The number of days before or past indicated phase is
  	 * estimated by assuming the true longitudes change linearly
  	 * with time.  These rates are estimated for the date, but
  	 * do not stay body.  The error can exceed 0.15 day in 4 days.
  	 */
  	x = moonpol[0] - pe[0];
  	x = util.modtp ( x ) * RTD;	/* difference in longitude */
  	i = Math.floor (x/90);	/* number of quarters */
    // phaseDecimal - 0.0 - 1.0 float representation of phase.
    body.position.phaseDecimal = ((x / 360) + 0.5) % 1 // 0-0.24 = New, 0.25 - 0.49 = First Quarter, 0.5 - 0.74 = Full, 0.75 - 0.99 = Last Quarter

    x = (x - i*90.0);	/* phase angle mod 90 degrees */

  	/* days per degree of phase angle */
  	z = moonpol[2]/(12.3685 * 0.00257357);

  	if( x > 45.0 ) {
  		y = -(x - 90.0)*z;
  		body.position.phaseDaysBefore = y;
  	} else {
  		y = x*z;
  		body.position.phaseDaysPast = y;
  	}

    body.position.phaseDaysDistance = y

    i = (i+2) % 4;
  	body.position.phaseQuarter = i;
    body.position.phaseQuarterString = Luna.GetPhaseQuarterString(i);

    body.position.shapeString = Luna.GetShapeString({illuminatedFraction: body.position.illuminatedFraction})

    body.position.shapeDirectionString = Luna.GetShapeDirectionString({phaseDecimal: body.position.phaseDecimal})

    body.position.withinQuarterApproximation = Luna.GetWithinQuarterApproximation({
      quarterIndex: body.position.phaseQuarter,
      phaseDaysBefore: body.position.phaseDaysBefore,
      phaseDaysPast: body.position.phaseDaysPast,
      halfRangeLength: this.quarterApproximationValue
    })
    body.position.quarterApproximationString = Luna.GetQuarterApproximationString({
      quarterIndex: body.position.phaseQuarter,
      phaseDaysBefore: body.position.phaseDaysBefore,
      phaseDaysPast: body.position.phaseDaysPast,
      halfRangeLength: this.quarterApproximationValue
    })

    body.position.quarterApproximationDirectionString = Luna.GetQuarterApproximationDirectionString({
      phaseDaysBefore: body.position.phaseDaysBefore,
      phaseDaysPast: body.position.phaseDaysPast,
      halfRangeLength: this.quarterApproximationValue
    })

  	body.position.apparent = {
  		dRA: this.ra,
  		dDec: this.dec,
  		ra: util.hms (this.ra),
  		dec: util.dms (this.dec)
  	};

  	/* Compute and display topocentric position (altaz.c)
  	 */
  	pp[0] = this.ra;
  	pp[1] = this.dec;
  	pp[2] = moonpol[2];
  	body.position.altaz = altaz.calc(pp, observer.Date, body, observer);

    return body
  }

  calcll(julianDate, rect, pol, body, earthBody, observer, result) {
  	var cosB, sinB, cosL, sinL, y, z; // double
  	var qq = [], pp = []; // double
  	var i; // int

  	result = result || {};

  	/* Compute obliquity of the ecliptic, coseps, and sineps.  */
  	const epsilonObject = new Epsilon(julianDate);
  	/* Get geometric coordinates of the Moon.  */
    const lp_equinox = get_lp_equinox(julianDate)
  	rect = gPlanMoon(julianDate, rect, pol, lp_equinox);
  	/* Post the geometric ecliptic longitude and latitude, in radians,
  	 * and the radius in au.
  	 */
  	body.position.polar[0] = pol[0];
  	body.position.polar[1] = pol[1];
  	body.position.polar[2] = pol[2];
  	/* Light time correction to longitude,
  	 * about 0.7".
  	 */
  	pol[0] -= 0.0118 * DTR * REARTH / pol[2];

  	/* convert to equatorial system of date */
  	cosB = Math.cos(pol[1]);
  	sinB = Math.sin(pol[1]);
  	cosL = Math.cos(pol[0]);
  	sinL = Math.sin(pol[0]);
  	rect[0] = cosB*cosL;
  	rect[1] = epsilonObject.coseps*cosB*sinL - epsilonObject.sineps*sinB;
  	rect[2] = epsilonObject.sineps*cosB*sinL + epsilonObject.coseps*sinB;

  	/* Rotate to J2000. */
  	rect = precess.calc( rect, observer.Date.julian, 1 ); // TDT

  	/* Find Euclidean vectors and angles between earth, object, and the sun
  	 */
  	for( i=0; i<3; i++ ) {
  		pp[i] = rect[i] * pol[2];
  		qq[i] = earthBody.position.rect [i] + pp[i];
  	}
  	body = util.angles (pp, qq, earthBody.position.rect, body);

  	/* Make rect a unit vector.  */
  	/* for (i = 0; i < 3; i++) */
  	/*  rect[i] /= EO; */

  	/* Correct position for light deflection.
  	 (Ignore.)  */
  	/* relativity( rect, qq, rearth ); */

  	/* Aberration of light.
  	 The Astronomical Almanac (Section D, Daily Polynomial Coefficients)
  	 seems to omit this, even though the reference ephemeris is inertial.  */
  	/* annuab (rect); */

  	/* Precess to date.  */
  	rect = precess.calc(rect, observer.Date.julian, -1); // TDT

  	/* Correct for nutation at date TDT.
  	 */
    const nutationObject = nutation.getObject({julian: observer.Date.julian})
  	result.nutation = nutation.calc ({julian: observer.Date.julian}, rect); // TDT

  	/* Apparent geocentric right ascension and declination.  */
  	this.ra = util.zatan2(rect[0],rect[1]);
  	this.dec = Math.asin(rect[2]);

  	/* For apparent ecliptic coordinates, rotate from the true
  	 equator into the ecliptic of date.  */

  	cosL = Math.cos(epsilonObject.eps + nutationObject.nuto);
  	sinL  = Math.sin(epsilonObject.eps + nutationObject.nuto);
  	y = cosL * rect[1] + sinL * rect[2];
  	z = -sinL * rect[1] + cosL * rect[2];
  	pol[0] = util.zatan2( rect[0], y );
  	pol[1] = Math.asin(z);

  	/* Restore earth-moon distance.  */
  	for( i=0; i<3; i++ ) {
  		rect[i] *= body.locals.EO;
  	}

  	return result;
  }

  calculateOrbit(julianDate) {
    const orbit = {}

    orbit.meanAscendingNode = util.attachApparentLongitudes({}, getMeanAscendingNode(julianDate))
    orbit.meanDescendingNode = util.attachApparentLongitudes({}, util.mod(orbit.meanAscendingNode.apparentLongitude - 180, 360))

    orbit.meanPerigee = util.attachApparentLongitudes({}, getMeanPerigee(julianDate))
    orbit.meanApogee = util.attachApparentLongitudes({}, util.mod(orbit.meanPerigee.apparentLongitude - 180, 360))

    return orbit
  }

  calculateMeanAscendingNode(julianDate) {
    const meanAscendingNode = {}

    meanAscendingNode.apparentLongitude = getMeanAscendingNode(julianDate)
    meanAscendingNode.apparentLongitudeString = util.decimalDegreesToDMSString(meanAscendingNode.apparentLongitude)
    meanAscendingNode.apparentLongitude30String = util.decimalDegreesToDMSString(util.mod(meanAscendingNode.apparentLongitude, 30))

    return meanAscendingNode
  }

  calculateMeanDescendingNode(ascendingNode) {
    const meanDescendingNode = {}

    meanDescendingNode.apparentLongitude = util.mod(ascendingNode - 180, 360)
    meanDescendingNode.apparentLongitudeString = util.decimalDegreesToDMSString(meanDescendingNode.apparentLongitude)
    meanDescendingNode.apparentLongitude30String = util.decimalDegreesToDMSString(util.mod(meanDescendingNode.apparentLongitude, 30))

    return meanDescendingNode
  }
}
