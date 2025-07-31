// build command
// gcc swisseph-wasm/test/test.c swisseph-wasm/swisseph-lib/*.c -I swisseph-wasm/swisseph-lib -lm -o main && ./main

#include <stdio.h>
#include "../swisseph-lib/swephexp.h" // Include Swiss Ephemeris header

int main()
{
    // Inputs
    double tjd_ut = 2460860.000000;
    int ipl = SE_SUN; // or 0 if already defined
    char *starname = NULL;
    int epheflag = SEFLG_SWIEPH;                  // usually 2
    int rsmi = SE_CALC_RISE | SE_BIT_DISC_CENTER; // usually 897
    double geopos[3] = {80.38, 22.6, 0.0};        // longitude, latitude, altitude
    double atpress = 0.0;
    double attemp = 0.0;

    // Outputs
    double tret;
    char serr[256] = {0};

    swe_set_ephe_path("../swisseph-lib/ephe");
    // Call the function
    int flag = swe_rise_trans(
        tjd_ut,
        ipl,
        starname,
        epheflag,
        rsmi,
        geopos,
        atpress,
        attemp,
        &tret,
        serr);

    // Check result
    if (flag < 0)
    {
        printf("Error: %s (flag = %d)\n", serr, flag);
    }
    else
    {
        printf("Rise/Set/Transit time: %.9f (flag = %d)\n", tret, flag);
    }

    return 0;
}

// gcc *.c -o test