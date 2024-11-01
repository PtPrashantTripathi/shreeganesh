import { J2000, RTD} from '../constants/index.js'

import Epsilon from './Epsilon.js'
import { nutation } from './nutation.js'
import { util } from './util.js'

export const siderial = {};

siderial.calc = (date, tlong) => {
	var jd0; // double    /* Julian day at midnight Universal Time */
	var secs; // double  /* Time of day, UT seconds since UT midnight */
	var eqeq, gmst, jd, T0, msday; // double
	/*long il;*/

	/* Julian day at given UT */
	jd = date.universalJulian; // UT
	jd0 = Math.floor(jd);
	secs = date.julian - jd0; // UT
	if( secs < 0.5 ) {
		jd0 -= 0.5;
		secs += 0.5;
	} else {
		jd0 += 0.5;
		secs -= 0.5;
	}
	secs *= 86400.0;

	/* Julian centuries from standard epoch J2000.0 */
	/* T = (jd - J2000)/36525.0; */
	/* Same but at 0h Universal Time of date */
	// T0 = (jd0 - J2000)/36525.0;
  T0 = util.timeInJulianCenturies(jd0)

	/* The equation of the equinoxes is the nutation in longitude
	 * times the cosine of the obliquity of the ecliptic.
	 * We already have routines for these.
	 */
	const nutationObject = nutation.getObject(date);
	const epsilonObject = new Epsilon(date.julian);
	/* nutl is in radians; convert to seconds of time
	 * at 240 seconds per degree
	 */
	eqeq = 240.0 * RTD * nutationObject.nutl * epsilonObject.coseps;
	/* Greenwich Mean Sidereal Time at 0h UT of date */
	/* Corrections to Williams (1994) introduced in DE403.  */
	gmst = (((-2.0e-6*T0 - 3.e-7)*T0 + 9.27701e-2)*T0 + 8640184.7942063)*T0
		+ 24110.54841;
	msday = (((-(4. * 2.0e-6)*T0 - (3. * 3.e-7))*T0 + (2. * 9.27701e-2))*T0
		+ 8640184.7942063)/(86400.*36525.) + 1.0;

	/* Local apparent sidereal time at given UT */
	gmst = gmst + msday*secs + eqeq + 240.0*tlong;
	/* Sidereal seconds modulo 1 sidereal day */
	gmst = gmst - 86400.0 * Math.floor( gmst/86400.0 );
	/*
	 * il = gmst/86400.0;
	 * gmst = gmst - 86400.0 * il;
	 * if( gmst < 0.0 )
	 *	gmst += 86400.0;
	 */
	return gmst;
};
