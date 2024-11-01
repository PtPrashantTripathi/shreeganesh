import { freqs, phases, STR, RTS, J2000 } from '../constants/index.js'
import { moonlr } from '../ptables/moonlr.js'
import { moonlat } from '../ptables/moonlat.js'

import { util } from './util.js'
import Epsilon from './Epsilon.js'

/*
 Routines to chew through tables of perturbations.
*/
export const gPlanCalc = (julianDate, body_ptable, polar) => {
	var su, cu, sv, cv, T; // double
	var t, sl, sb, sr; // double
	var i, j, k, m, n, k1, ip, np, nt; // int
	var p; // char array
	var pl; // double array
	var pb; // double array
	var pr; // double array
	T = (julianDate - J2000) / body_ptable.timescale;
	n = body_ptable.maxargs;

  let sscc = { ss: [], cc: [] }
  /* Calculate sin( i*MM ), etc. for needed multiple angles.  */
	for (i = 0; i < n; i++) {
		if ((j = body_ptable.max_harmonic[i]) > 0)
		{
			sr = (util.mods3600 (freqs[i] * T) + phases[i]) * STR;
			sscc = gplanSSCC(i, sr, j, sscc);
		}
	}

	/* Point to start of table of arguments. */
	p = body_ptable.arg_tbl;

	/* Point to tabulated cosine and sine amplitudes.  */
	pl = body_ptable.lon_tbl;
	pb = body_ptable.lat_tbl;
	pr = body_ptable.rad_tbl;

	sl = 0.0;
	sb = 0.0;
	sr = 0.0;

	var p_i = 0;
	var pl_i = 0;
	var pb_i = 0;
	var pr_i = 0;

	for (;;) {
		/* argument of sine and cosine */
		/* Number of periodic arguments. */
		np = p [p_i ++]; // np = *p++
		if (np < 0) {
			break;
		}
		if (np == 0) { /* It is a polynomial term.  */
			nt = p [p_i ++]; // nt = *p++
			/* Longitude polynomial. */
			cu = pl [pl_i ++]; // cu = *pl++;
			for (ip = 0; ip < nt; ip ++) {
				cu = cu * T + pl [pl_i ++]; //*pl++;
			}
			sl +=  util.mods3600 (cu);
			/* Latitude polynomial. */
			cu = pb [pb_i ++];//*pb++;
			for (ip = 0; ip < nt; ip++)
			{
				cu = cu * T + pb [pb_i ++]; //*pb++;
			}
			sb += cu;
			/* Radius polynomial. */
			cu = pr [pr_i ++]; //*pr++;
			for (ip = 0; ip < nt; ip++)
			{
				cu = cu * T + pr [pr_i ++]; //*pr++;
			}
			sr += cu;
			continue;
		}
		k1 = 0;
		cv = 0.0;
		sv = 0.0;
		for (ip = 0; ip < np; ip++)
		{
			/* What harmonic.  */
			j = p [p_i ++]; //*p++;
			/* Which planet.  */
			m = p [p_i ++] - 1; // *p++ - 1
			if (j)
			{
				k = j;
				if (j < 0)
					k = -k;
				k -= 1;
				su =sscc.ss[m][k];	/* sin(k*angle) */
				if (j < 0)
					su = -su;
				cu = sscc.cc[m][k];
				if (k1 == 0)
				{		/* set first angle */
					sv = su;
					cv = cu;
					k1 = 1;
				}
				else
				{		/* combine angles */
					t = su * cv + cu * sv;
					cv = cu * cv - su * sv;
					sv = t;
				}
			}
		}
		/* Highest power of T.  */
		nt = p [p_i ++]; //*p++;
		/* Longitude. */
		cu = pl [pl_i ++]; //*pl++;
		su = pl [pl_i ++]; //*pl++;
		for (ip = 0; ip < nt; ip++)
		{
			cu = cu * T + pl [pl_i ++]; //*pl++;
			su = su * T + pl [pl_i ++]; //*pl++;
		}
		sl += cu * cv + su * sv;
		/* Latitiude. */
		cu = pb [pb_i ++]; //*pb++;
		su = pb [pb_i ++]; //*pb++;
		for (ip = 0; ip < nt; ip++)
		{
			cu = cu * T + pb [pb_i ++]; //*pb++;
			su = su * T + pb [pb_i ++]; //*pb++;
		}
		sb += cu * cv + su * sv;
		/* Radius. */
		cu = pr [pr_i ++]; //*pr++;
		su = pr [pr_i ++]; //*pr++;
		for (ip = 0; ip < nt; ip++)
		{
			cu = cu * T + pr [pr_i ++]; //*pr++;
			su = su * T + pr [pr_i ++]; //*pr++;
		}
		sr += cu * cv + su * sv;
	}

	polar[0] = STR * sl;
	polar[1] = STR * sb;
	polar[2] = STR * body_ptable.distance * sr + body_ptable.distance;

  return polar
};

/* Prepare lookup table of sin and cos ( i*Lj )
 * for required multiple angles
 */
export const gplanSSCC = (k, arg, n, sscc= { ss: [], cc: []}) => {
	const su = Math.sin (arg);
	const cu = Math.cos (arg);
  let cv, sv, s;

  sscc.ss[k] = [];
	sscc.cc[k] = [];

  sscc.ss[k][0] = su;		/* sin(L) */
	sscc.cc[k][0] = cu;		/* cos(L) */
	sv = 2.0 * su * cu;
	cv = cu * cu - su * su;
  sscc.ss[k][1] = sv;		/* sin(2L) */
  sscc.cc[k][1] = cv;
	for (let i = 2; i < n; i++)
	{
		s = su * cv + cu * sv;
		cv = cu * cv - su * sv;
		sv = s;
    sscc.ss[k][i] = sv;		/* sin( i+1 L ) */
		sscc.cc[k][i] = cv;
	}
  // console.log(sscc)
  return sscc
};

/* Compute mean elements at Julian date J.  */
export const meanElements = julianDate => {
  let Args = []
	var x, T, T2; // double

	/* Time variables.  T is in Julian centuries.  */
	T = util.timeInJulianCenturies(julianDate)
	T2 = T * T;

	/* Mean longitudes of planets (Simon et al, 1994)
	 .047" subtracted from constant term for offset to DE403 origin. */

	/* Mercury */
	x = util.mods3600( 538101628.6889819 * T + 908103.213 );
	x += (6.39e-6 * T
		- 0.0192789) * T2;
	Args[0] = STR * x;

	/* Venus */
	x = util.mods3600( 210664136.4335482 * T + 655127.236 );
	x += (-6.27e-6  * T
		+ 0.0059381) * T2;
	Args[1] = STR * x;

	/* Earth  */
	x = util.mods3600( 129597742.283429 * T + 361679.198 );
	x += (-5.23e-6 * T
		- 2.04411e-2 ) * T2;
	Args[2] = STR * x;

	/* Mars */
	x = util.mods3600(  68905077.493988 * T +  1279558.751 );
	x += (-1.043e-5 * T
		+ 0.0094264) * T2;
	Args[3] = STR * x;

	/* Jupiter */
	x = util.mods3600( 10925660.377991 * T + 123665.420 );
	x += ((((-3.4e-10 * T
		+ 5.91e-8) * T
		+ 4.667e-6) * T
		+ 5.706e-5) * T
		- 3.060378e-1)*T2;
	Args[4] = STR * x;

	/* Saturn */
	x = util.mods3600( 4399609.855372 * T + 180278.752 );
	x += (((( 8.3e-10 * T
		- 1.452e-7) * T
		- 1.1484e-5) * T
		- 1.6618e-4) * T
		+ 7.561614E-1)*T2;
	Args[5] = STR * x;

	/* Uranus */
	x = util.mods3600( 1542481.193933 * T + 1130597.971 )
		+ (0.00002156*T - 0.0175083)*T2;
	Args[6] = STR * x;

	/* Neptune */
	x = util.mods3600( 786550.320744 * T + 1095655.149 )
		+ (-0.00000895*T + 0.0021103)*T2;
	Args[7] = STR * x;

	/* Copied from cmoon.c, DE404 version.  */
	/* Mean elongation of moon = D */
	x = util.mods3600( 1.6029616009939659e+09 * T + 1.0722612202445078e+06 );
	x += (((((-3.207663637426e-013 * T
		+ 2.555243317839e-011) * T
		+ 2.560078201452e-009) * T
		- 3.702060118571e-005) * T
		+ 6.9492746836058421e-03) * T /* D, t^3 */
		- 6.7352202374457519e+00) * T2; /* D, t^2 */
	Args[9] = STR * x;

	/* Mean distance of moon from its ascending node = F */
	x = util.mods3600( 1.7395272628437717e+09 * T + 3.3577951412884740e+05 );
	x += ((((( 4.474984866301e-013 * T
		+ 4.189032191814e-011) * T
		- 2.790392351314e-009) * T
		- 2.165750777942e-006) * T
		- 7.5311878482337989e-04) * T /* F, t^3 */
		- 1.3117809789650071e+01) * T2; /* F, t^2 */
	Args[10] = STR * x;

	/* Mean anomaly of sun = l' (J. Laskar) */
	x = util.mods3600(1.2959658102304320e+08 * T + 1.2871027407441526e+06);
	x += ((((((((
		1.62e-20 * T
			- 1.0390e-17 ) * T
		- 3.83508e-15 ) * T
		+ 4.237343e-13 ) * T
		+ 8.8555011e-11 ) * T
		- 4.77258489e-8 ) * T
		- 1.1297037031e-5 ) * T
		+ 8.7473717367324703e-05) * T
		- 5.5281306421783094e-01) * T2;
	Args[11] = STR * x;

	/* Mean anomaly of moon = l */
	x = util.mods3600( 1.7179159228846793e+09 * T + 4.8586817465825332e+05 );
	x += (((((-1.755312760154e-012 * T
		+ 3.452144225877e-011) * T
		- 2.506365935364e-008) * T
		- 2.536291235258e-004) * T
		+ 5.2099641302735818e-02) * T /* l, t^3 */
		+ 3.1501359071894147e+01) * T2; /* l, t^2 */
	Args[12] = STR * x;

	/* Mean longitude of moon, re mean ecliptic and equinox of date = L  */
	x = util.mods3600( 1.7325643720442266e+09 * T + 7.8593980921052420e+05);
	x += ((((( 7.200592540556e-014 * T
		+ 2.235210987108e-010) * T
		- 1.024222633731e-008) * T
		- 6.073960534117e-005) * T
		+ 6.9017248528380490e-03) * T /* L, t^3 */
		- 5.6550460027471399e+00) * T2; /* L, t^2 */

	Args[13] = STR * x;

	/* Precession of the equinox  */
	x = ((((((((( -8.66e-20*T - 4.759e-17)*T
		+ 2.424e-15)*T
		+ 1.3095e-12)*T
		+ 1.7451e-10)*T
		- 1.8055e-8)*T
		- 0.0000235316)*T
		+ 0.000076)*T
		+ 1.105414)*T
		+ 5028.791959)*T;
	/* Moon's longitude re fixed J2000 equinox.  */
	/*
	 Args[13] -= x;
	 */
	// gplan.pA_precession = STR * x;

	/* Free librations.  */
	/* longitudinal libration 2.891725 years */
	x = util.mods3600( 4.48175409e7 * T + 8.060457e5 );
	Args[14] = STR * x;
	/* libration P, 24.2 years */
	x = util.mods3600(  5.36486787e6 * T - 391702.8 );
	Args[15] = STR * x;

	/* libration W, 74.7 years. */
	x = util.mods3600( 1.73573e6 * T );
	Args[17] = STR * x;

  return Args
};


/* Generic program to accumulate sum of trigonometric series
 in three variables (e.g., longitude, latitude, radius)
 of the same list of arguments.  */
export const gPlanCalc3 = (julianDate, body_ptable, polar, body_number) => {
	var i, j, k, m, n, k1, ip, np, nt; // int
	var p; // int array
	var pl; // double array
	var pb; // double array
	var pr; // double array

	var su, cu, sv, cv; // double
	var T, t, sl, sb, sr; // double

	const Args = meanElements(julianDate);

	T = (julianDate - J2000) / body_ptable.timescale;
	n = body_ptable.maxargs;

  let sscc = { ss: [], cc: [] }
  /* Calculate sin( i*MM ), etc. for needed multiple angles.  */
	for (i = 0; i < n; i++)
	{
		if ((j = body_ptable.max_harmonic [i]) > 0)
		{
			sscc = gplanSSCC(i, Args[i], j, sscc);
		}
	}

	/* Point to start of table of arguments. */
	p = body_ptable.arg_tbl;
	/* Point to tabulated cosine and sine amplitudes.  */
	pl = body_ptable.lon_tbl;
	pb = body_ptable.lat_tbl;
	pr = body_ptable.rad_tbl;

	sl = 0.0;
	sb = 0.0;
	sr = 0.0;

	var p_i = 0;
	var pl_i = 0;
	var pb_i = 0;
	var pr_i = 0;

	for (;;)
	{
		/* argument of sine and cosine */
		/* Number of periodic arguments. */
		np = p [p_i ++]; //*p++;
		if (np < 0)
			break;
		if (np == 0)
		{			/* It is a polynomial term.  */
			nt = p [p_i ++]; //*p++;
			/* "Longitude" polynomial (phi). */
			cu = pl [pl_i ++]; //*pl++;
			for (ip = 0; ip < nt; ip++)
			{
				cu = cu * T + pl [pl_i ++]; //*pl++;
			}
			/*	  sl +=  mods3600 (cu); */
			sl += cu;
			/* "Latitude" polynomial (theta). */
			cu = pb [pb_i ++]; //*pb++;
			for (ip = 0; ip < nt; ip++)
			{
				cu = cu * T + pb [pb_i ++]; //*pb++;
			}
			sb += cu;
			/* Radius polynomial (psi). */
			cu = pr [pr_i ++]; //*pr++;
			for (ip = 0; ip < nt; ip++)
			{
				cu = cu * T + pr [pr_i ++]; //*pr++;
			}
			sr += cu;
			continue;
		}
		k1 = 0;
		cv = 0.0;
		sv = 0.0;
		for (ip = 0; ip < np; ip++) {
			/* What harmonic.  */
			j = p [p_i ++]; //*p++;
			/* Which planet.  */
			m = p [p_i ++] - 1; //*p++ - 1;
			if (j) {
				/*	      k = abs (j); */
				if (j < 0)
					k = -j;
				else
					k = j;
				k -= 1;
				su =sscc.ss[m][k];	/* sin(k*angle) */
				if (j < 0)
					su = -su;
				cu = sscc.cc[m][k];
				if (k1 == 0)
				{		/* set first angle */
					sv = su;
					cv = cu;
					k1 = 1;
				}
				else
				{		/* combine angles */
					t = su * cv + cu * sv;
					cv = cu * cv - su * sv;
					sv = t;
				}
			}
		}
		/* Highest power of T.  */
		nt = p [p_i ++]; //*p++;
		/* Longitude. */
		cu = pl [pl_i ++]; //*pl++;
		su = pl [pl_i ++]; //*pl++;
		for (ip = 0; ip < nt; ip++) {
			cu = cu * T + pl [pl_i ++]; //*pl++;
			su = su * T + pl [pl_i ++]; //*pl++;
		}
		sl += cu * cv + su * sv;
		/* Latitiude. */
		cu = pb [pb_i ++]; //*pb++;
		su = pb [pb_i ++]; //*pb++;
		for (ip = 0; ip < nt; ip++)
		{
			cu = cu * T + pb [pb_i ++]; //*pb++;
			su = su * T + pb [pb_i ++]; //*pb++;
		}
		sb += cu * cv + su * sv;
		/* Radius. */
		cu = pr [pr_i ++]; //*pr++;
		su = pr [pr_i ++]; //*pr++;
		for (ip = 0; ip < nt; ip++)
		{
			cu = cu * T + pr [pr_i ++]; //*pr++;
			su = su * T + pr [pr_i ++]; //*pr++;
		}
		sr += cu * cv + su * sv;
	}
	t = body_ptable.trunclvl;
	polar[0] = Args[body_number - 1] + STR * t * sl;
	polar[1] = STR * t * sb;
	polar[2] = body_ptable.distance * (1.0 + STR * t * sr);

  return polar
};

/* Generic program to accumulate sum of trigonometric series
 in two variables (e.g., longitude, radius)
 of the same list of arguments.  */
export const gPlanCalc2 = (julianDate, body_ptable, polar) => {
	var i, j, k, m, n, k1, ip, np, nt; // int
	var p; // int array
	var pl; // double array
	var pr; // double array

	var su, cu, sv, cv; // double
	var T, t, sl, sr; // double

	const Args = meanElements(julianDate);

	T = (julianDate - J2000) / body_ptable.timescale;
	n = body_ptable.maxargs;

  let sscc = { ss: [], cc: [] }
  /* Calculate sin( i*MM ), etc. for needed multiple angles.  */
	for (i = 0; i < n; i++)
	{
		if ((j = body_ptable.max_harmonic[i]) > 0)
		{
			sscc = gplanSSCC(i, Args[i], j, sscc);
		}
	}

	/* Point to start of table of arguments. */
	p = body_ptable.arg_tbl;
	/* Point to tabulated cosine and sine amplitudes.  */
	pl = body_ptable.lon_tbl;
	pr = body_ptable.rad_tbl;

	var p_i = 0;
	var pl_i = 0;
	var pr_i = 0;

	sl = 0.0;
	sr = 0.0;

	for (;;)
	{
		/* argument of sine and cosine */
		/* Number of periodic arguments. */
		np = p [p_i ++]; //*p++;
		if (np < 0)
			break;
		if (np == 0)
		{			/* It is a polynomial term.  */
			nt = p [p_i ++]; //*p++;
			/* Longitude polynomial. */
			cu = pl [pl_i ++]; //*pl++;
			for (ip = 0; ip < nt; ip++)
			{
				cu = cu * T + pl [pl_i ++]; //*pl++;
			}
			/*	  sl +=  mods3600 (cu); */
			sl += cu;
			/* Radius polynomial. */
			cu = pr [pr_i ++]; //*pr++;
			for (ip = 0; ip < nt; ip++)
			{
				cu = cu * T + pr [pr_i ++]; //*pr++;
			}
			sr += cu;
			continue;
		}
		k1 = 0;
		cv = 0.0;
		sv = 0.0;
		for (ip = 0; ip < np; ip++)
		{
			/* What harmonic.  */
			j = p [p_i ++]; //*p++;
			/* Which planet.  */
			m = p [p_i ++] - 1; //*p++ - 1;
			if (j)
			{
				/*	      k = abs (j); */
				if (j < 0)
					k = -j;
				else
					k = j;
				k -= 1;
				su =sscc.ss[m][k];	/* sin(k*angle) */
				if (j < 0)
					su = -su;
				cu = sscc.cc[m][k];
				if (k1 == 0)
				{		/* set first angle */
					sv = su;
					cv = cu;
					k1 = 1;
				}
				else
				{		/* combine angles */
					t = su * cv + cu * sv;
					cv = cu * cv - su * sv;
					sv = t;
				}
			}
		}
		/* Highest power of T.  */
		nt = p [p_i ++]; //*p++;
		/* Longitude. */
		cu = pl [pl_i ++]; //*pl++;
		su = pl [pl_i ++]; //*pl++;
		for (ip = 0; ip < nt; ip++)
		{
			cu = cu * T + pl [pl_i ++]; //*pl++;
			su = su * T + pl [pl_i ++]; //*pl++;
		}
		sl += cu * cv + su * sv;
		/* Radius. */
		cu = pr [pr_i ++]; //*pr++;
		su = pr [pr_i ++]; //*pr++;
		for (ip = 0; ip < nt; ip++)
		{
			cu = cu * T + pr [pr_i ++]; //*pr++;
			su = su * T + pr [pr_i ++]; //*pr++;
		}
		sr += cu * cv + su * sv;
	}
	t = body_ptable.trunclvl;
	polar[0] = t * sl;
	polar[2] = t * sr;

  return polar
};

/* Generic program to accumulate sum of trigonometric series
 in one variable.  */
export const gPlanCalc1 = (julianDate, body_ptable) => {
	var i, j, k, m, k1, ip, np, nt; // int
	var p; // int array
	var pl; // double array

	var su, cu, sv, cv; // double
	var T, t, sl; // double

	T = (julianDate - J2000) / body_ptable.timescale;
	const Args = meanElements(julianDate);

  let sscc = { ss: [], cc: [] }
  /* Calculate sin( i*MM ), etc. for needed multiple angles.  */
	for (i = 0; i < Args.length; i++)
	{
		if ((j = body_ptable.max_harmonic[i]) > 0)
		{
			sscc = gplanSSCC(i, Args[i], j, sscc);
		}
	}

	/* Point to start of table of arguments. */
	p = body_ptable.arg_tbl;
	/* Point to tabulated cosine and sine amplitudes.  */
	pl = body_ptable.lon_tbl;

	sl = 0.0;

	var p_i = 0;
	var pl_i = 0;

	for (;;) {
		/* argument of sine and cosine */
		/* Number of periodic arguments. */
		np = p [p_i ++]; //*p++;
		if (np < 0)
			break;
		if (np == 0)
		{			/* It is a polynomial term.  */
			nt = p [p_i ++]; //*p++;
			cu = pl [pl_i ++]; //*pl++;
			for (ip = 0; ip < nt; ip++)
			{
				cu = cu * T + pl [pl_i ++]; //*pl++;
			}
			/*	  sl +=  mods3600 (cu); */
			sl += cu;
			continue;
		}
		k1 = 0;
		cv = 0.0;
		sv = 0.0;
		for (ip = 0; ip < np; ip++)
		{
			/* What harmonic.  */
			j = p [p_i ++]; //*p++;
			/* Which planet.  */
			m = p [p_i ++] - 1; //*p++ - 1;
			if (j)
			{
				/*	      k = abs (j); */
				if (j < 0)
					k = -j;
				else
					k = j;
				k -= 1;
				su =sscc.ss[m][k];	/* sin(k*angle) */
				if (j < 0)
					su = -su;
				cu = sscc.cc[m][k];
				if (k1 == 0)
				{		/* set first angle */
					sv = su;
					cv = cu;
					k1 = 1;
				}
				else
				{		/* combine angles */
					t = su * cv + cu * sv;
					cv = cu * cv - su * sv;
					sv = t;
				}
			}
		}
		/* Highest power of T.  */
		nt = p [p_i ++]; //*p++;
		/* Cosine and sine coefficients.  */
		cu = pl [pl_i ++]; //*pl++;
		su = pl [pl_i ++]; //*pl++;
		for (ip = 0; ip < nt; ip++)
		{
			cu = cu * T + pl [pl_i ++]; //*pl++;
			su = su * T + pl [pl_i ++]; //*pl++;
		}
		sl += cu * cv + su * sv;
	}
	return body_ptable.trunclvl * sl;
};

/* Compute geocentric moon.  */
export const gPlanMoon = (julianDate, rect, pol, lp_equinox) => {
	var x, cosB, sinB, cosL, sinL; // double

	pol = gPlanCalc2(julianDate, moonlr, pol);

	x = pol[0];
	x += lp_equinox;
	if (x < -6.48e5) {
		x += 1.296e6;
	}
	if (x > 6.48e5) {
		x -= 1.296e6;
	}
	pol[0] = STR * x;
	x = gPlanCalc1(julianDate, moonlat);
	pol[1] = STR * x;
	x = (1.0 + STR * pol[2]) * moonlr.distance;
	pol[2] = x;
	/* Convert ecliptic polar to equatorial rectangular coordinates.  */
	const epsilonObject = new Epsilon(julianDate);
	cosB = Math.cos(pol[1]);
	sinB = Math.sin(pol[1]);
	cosL = Math.cos(pol[0]);
	sinL = Math.sin(pol[0]);
	rect[0] = cosB * cosL * x;
	rect[1] = (epsilonObject.coseps * cosB * sinL - epsilonObject.sineps * sinB) * x;
	rect[2] = (epsilonObject.sineps * cosB * sinL + epsilonObject.coseps * sinB) * x;

  return rect

};

export const get_lp_equinox = julianDate => {
  const Args = meanElements(julianDate);
  const lp_equinox = Args[13] * RTS
  return lp_equinox
}

export const get_nf_arcsec = julianDate => {
  const Args = meanElements(julianDate);
  const nf_arcsec = Args[10] * RTS
  return nf_arcsec
}

export const get_ea_arcsec = julianDate => {
  const Args = meanElements(julianDate);
  const ea_arcsec = Args[2] * RTS
  return ea_arcsec
}
