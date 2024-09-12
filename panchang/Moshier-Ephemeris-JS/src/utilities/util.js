import { RTOH, RTD, RTS, TPI, J2000 } from '../constants'

export const util = {};

util.hourTimeToDecimal = ({hour=0, minute=0}={}) => {
  // HH:MM time format => Float
  // ex: 1:30 => 1.5
  // ex: 23.25 => 23.25
  return moment.duration(`${hour}:${minute}`).asHours()
}

util.mods3600 = function (value) {
	var result;

	result = (value - 1.296e6 * Math.floor (value / 1.296e6));

	return result;
};

/* Reduce x modulo 2 pi
 */
util.modtp = function (x) {
	var y; // double

	y = Math.floor ( x / TPI );
	y = x - y * TPI;
	while( y < 0.0 ) {
		y += TPI;
	}
	while( y >= TPI ) {
		y -= TPI;
	}
	return y;
};

/* Reduce x modulo 360 degrees
 */
util.mod360 = function (x) {
	var k; // int
	var y; // double

	k = Math.floor (x / 360.0);
	y = x  -  k * 360.0;
	while( y < 0.0 ) {
		y += 360.0;
	}
	while( y > 360.0 ) {
		y -= 360.0;
	}
	return y;
};

/* Reduce x modulo 30 degrees
 */
util.mod30 = function (x) {
	var k; // int
	var y; // double

	k = Math.floor (x / 30.0);
	y = x  -  k * 30.0;
	while( y < 0.0 ) {
		y += 30.0;
	}
	while( y > 30.0 ) {
		y -= 30.0;
	}
	return y;
};

util.zatan2 = function ( x, y ) {
	var z, w; // double
	var code; // short

	code = 0;

	if( x < 0.0 ) {
		code = 2;
	}
	if( y < 0.0 ) {
		code |= 1;
	}

	if( x == 0.0 ) {
		if( code & 1 ) {
			return 1.5 * Math.PI ;
		}
		if( y == 0.0 ) {
			return  0.0;
		}
		return 0.5 * Math.PI;
	}

	if( y == 0.0 ) {
		if( code & 2 ) {
			return Math.PI;
		}
		return 0.0;
	}

	switch( code ) {
		default:
		case 0: w = 0.0; break;
		case 1: w = 2.0 * Math.PI; break;
		case 2:
		case 3: w = Math.PI; break;
	}

	z = Math.atan (y / x);

	return w + z;
};

util.sinh = function (x) {
	return (Math.exp(x) - Math.exp(-x)) / 2;
};

util.cosh = function (x) {
	return (Math.exp(x) + Math.exp(-x)) / 2;
};

util.tanh = function (x) {
	return (Math.exp(x) - Math.exp(-x)) / (Math.exp(x) + Math.exp(-x));
};

util.hms = function (x) {
	var h, m; // int
	var sint, sfrac; // long
	var s; // double
	var result = {};

	s = x * RTOH;
	if (s < 0.0) {
		s += 24.0;
	}
	h = Math.floor (s);
	s -= h;
	s *= 60;
	m = Math.floor (s);
	s -= m;
	s *= 60;
	/* Handle shillings and pence roundoff. */
	sfrac = Math.floor (1000.0 * s + 0.5);
	if ( sfrac >= 60000 ) {
		sfrac -= 60000;
		m += 1;
		if( m >= 60 ) {
			m -= 60;
			h += 1;
		}
	}
	sint = Math.floor (sfrac / 1000);
	sfrac -= Math.floor (sint * 1000);

	result.hours = h;
	result.minutes = m;
	result.seconds = sint;
	result.milliseconds = sfrac;

	return result;
};

util.dms = function (x) {
	var s; // double
	var d, m; // int
	var result = {};

	s = x * RTD;
	if( s < 0.0 ) {
		s = -s;
	}
	d = Math.floor (s);
	s -= d;
	s *= 60;
	m = Math.floor (s);
	s -= m;
	s *= 60;

	result.degree = d;
	result.minutes = m;
	result.seconds = s;

	return result;
};

/* Display magnitude of correction vector
 * in arc seconds
 */
util.showcor = function (p, dp, result) {
	var p1 = []; // dr, dd; // double
	var i; // int
	var d;

	for( i=0; i<3; i++ ) {
		p1[i] = p[i] + dp[i];
	}

	d = util.deltap ( p, p1);

	result = result || {};
	result.dRA = RTS * d.dr/15.0;
	result.dDec = RTS * d.dd;

	return result;
};

/* Display Right Ascension and Declination
 * from input equatorial rectangular unit vector.
 * Output vector pol[] contains R.A., Dec., and radius.
 */
util.showrd = (p, pol, result) => {
	var x, y, r; // double
	var i; // int

	r = 0.0;
	for( i=0; i<3; i++ ) {
		x = p[i];
		r += x * x;
	}
	r = Math.sqrt(r);

	x = util.zatan2( p[0], p[1] );
	pol[0] = x;

	y = Math.asin( p[2]/r );
	pol[1] = y;

	pol[2] = r;

	result = result || {};

	result = {...result, ...{
		dRA: x,
		dDec: y,
		ra: util.hms(x),
		dec: util.dms(y)
	}}

	return result;
};

/*
 * Convert change in rectangular coordinatates to change
 * in right ascension and declination.
 * For changes greater than about 0.1 degree, the
 * coordinates are converted directly to R.A. and Dec.
 * and the results subtracted.  For small changes,
 * the change is calculated to first order by differentiating
 *   tan(R.A.) = y/x
 * to obtain
 *    dR.A./cos**2(R.A.) = dy/x  -  y dx/x**2
 * where
 *    cos**2(R.A.)  =  1/(1 + (y/x)**2).
 *
 * The change in declination arcsin(z/R) is
 *   d asin(u) = du/sqrt(1-u**2)
 *   where u = z/R.
 *
 * p0 is the initial object - earth vector and
 * p1 is the vector after motion or aberration.
 *
 */
util.deltap = function (p0, p1, d) {
	var dp = [], A, B, P, Q, x, y, z; // double
	var i; // int

	d = d || {};

	P = 0.0;
	Q = 0.0;
	z = 0.0;
	for( i=0; i<3; i++ ) {
		x = p0[i];
		y = p1[i];
		P += x * x;
		Q += y * y;
		y = y - x;
		dp[i] = y;
		z += y*y;
	}

	A = Math.sqrt(P);
	B = Math.sqrt(Q);

	if( (A < 1.e-7) || (B < 1.e-7) || (z/(P+Q)) > 5.e-7 ) {
		P = util.zatan2( p0[0], p0[1] );
		Q = util.zatan2( p1[0], p1[1] );
		Q = Q - P;
		while( Q < -Math.PI ) {
			Q += 2.0*Math.PI;
		}
		while( Q > Math.PI ) {
			Q -= 2.0*Math.PI;
		}
		d.dr = Q;
		P = Math.asin( p0[2]/A );
		Q = Math.asin( p1[2]/B );
		d.dd = Q - P;
		return d;
	}


	x = p0[0];
	y = p0[1];
	if( x == 0.0 ) {
		d.dr = 1.0e38;
	} else {
		Q = y/x;
		Q = (dp[1]  -  dp[0]*y/x)/(x * (1.0 + Q*Q));
		d.dr = Q;
	}

	x = p0[2] / A;
	P = Math.sqrt( 1.0 - x*x );
	d.dd = (p1[2] / B - x) / P;

	return d;
};

/* Sun - object - earth angles and distances.
 * q (object), e (earth), and p (q minus e) are input vectors.
 * The answers are posted in the following global locations:
 */
util.angles = function (p, q, e, body) {
  // NOTE mutates body
	var a, b, s; // double
	var i; // int

	body.locals.EO = 0.0;
	body.locals.SE = 0.0;
	body.locals.SO = 0.0;
	body.locals.pq = 0.0;
	body.locals.ep = 0.0;
	body.locals.qe = 0.0;
	for( i=0; i<3; i++ ) {
		a = e[i];
		b = q[i];
		s = p[i];
		body.locals.EO += s * s;
		body.locals.SE += a * a;
		body.locals.SO += b * b;
		body.locals.pq += s * b;
		body.locals.ep += a * s;
		body.locals.qe += b * a;
	}
	body.locals.EO = Math.sqrt(body.locals.EO); /* Distance between Earth and object */
	body.locals.SO = Math.sqrt(body.locals.SO); /* Sun - object */
	body.locals.SE = Math.sqrt(body.locals.SE); /* Sun - earth */
	/* Avoid fatality: if object equals sun, SO is zero.  */
	if( body.locals.SO > 1.0e-12 )
	{
		body.locals.pq /= body.locals.EO * body.locals.SO;	/* cosine of sun-object-earth */
		body.locals.qe /= body.locals.SO * body.locals.SE;	/* cosine of earth-sun-object */
	}
	body.locals.ep /= body.locals.SE * body.locals.EO;	/* -cosine of sun-earth-object */

  return body
};

util.isInModSetRange = ({setPoint=0, halfRangeLength=0, setMin=0, setMax=1, number=0}={}) => {
  // Given a point within a wrapping set (between setMin and setMax)
  // and a halfRangeLength to either side of the point
  // Returns => boolean if the number
  //            is within wrapped range
  //            (setPoint - halfRangeLength)...(setPoint + halfRangeLength)
  //            example:
  //            set: 0...1
  //            setPoint: 0.9
  //            halfRangeLength: 0.2
  //            number: 0.05
  //            returns true => 0.05 is between 0.7...0.1 (wrapped)
  let low = setPoint - halfRangeLength;
  let high = setPoint + halfRangeLength - setMax;
  if (low < setMin) {
    setPoint -= low;
    number = (number - low) % setMax;
  } else if (high > setMin) {
    setPoint -= high;
    number = (setMax + number - high) % setMax;
  }

  return (number >= setPoint - halfRangeLength) && (number < setPoint + halfRangeLength)
}

// Mods even negative numbers
util.mod = (x, mod) => (x % mod + mod) % mod

util.timeInJulianCenturies = julianDate => {
  return (julianDate - J2000) / 36525.0
}

util.decimalDegreesToDMSString = (decimalDegrees) => {
  // converts decimal degrees to degrees / minutes / seconds
  // https://stackoverflow.com/a/5786627/6826976
  // * float decimalDegrees
  // => returns { degrees, minutes, seconds }
  let degrees = Math.floor(decimalDegrees)
  let minfloat = (decimalDegrees - degrees) * 60
  let minutes = Math.floor(minfloat)
  let secfloat = (minfloat - minutes) * 60
  let seconds = Math.round(secfloat)

  // After rounding, the seconds might become 60. These two
  // if-tests are not necessary if no rounding is done.
  if (seconds === 60) {
   minutes++
   seconds = 0
  }

  if (minutes === 60) {
   degrees++
   minutes = 0
  }

  return degrees + '\u00B0' +
         minutes + '\'' +
         Math.floor(seconds) + '"'
}


util.attachApparentLongitudes = (object, decimalDegrees) => {
  object.apparentLongitude = decimalDegrees
  object.apparentLongitudeString = util.decimalDegreesToDMSString(object.apparentLongitude)
  object.apparentLongitude30String = util.decimalDegreesToDMSString(util.mod(object.apparentLongitude, 30))

  return object
}

util.getModuloDifference = (n1, n2, mod) => {
  // https://gamedev.stackexchange.com/questions/4467/comparing-angles-and-working-out-the-difference
  // returns the difference between n1 - n2 when these numbers exist in a modular set
  const halfMod = mod / 2
  return halfMod - Math.abs(Math.abs(n1 - n2) - halfMod)
}

util.correctRealModuloNumber = (absDiff, n1, n2, mod) => {
  // Applies a negative number to absDiff if n1 < n2 or n1 + mod !== the diff
  // Use in conjunction with getModuloDifference to get the absolute difference
  // between n1, n2
  return (n1 >= n2) || ((n1 + mod) - n2) === absDiff ? absDiff : -absDiff
}


util.cloneUTCDate = utcDate => {
  return new Date(Date.UTC(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate(), utcDate.getUTCHours(), utcDate.getUTCMinutes(), utcDate.getUTCSeconds()))
}
