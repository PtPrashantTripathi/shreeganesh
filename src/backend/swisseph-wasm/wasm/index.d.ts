/**
 * TypeScript bindings for the Swisseph Emscripten-generated WebAssembly module.
 * Extends the EmscriptenModule with custom wrapped native functions.
 */
export interface WASMModule extends EmscriptenModule {
    /** Sets a value in the WebAssembly heap memory. */
    setValue: typeof setValue;

    /** Retrieves a value from the WebAssembly heap memory. */
    getValue: typeof getValue;

    /**
     * Converts a JavaScript string to a UTF-8 encoded string in the WebAssembly
     * memory.
     */
    stringToUTF8: typeof stringToUTF8;

    /**
     * Converts a UTF-8 encoded string from the WebAssembly memory to a
     * JavaScript string.
     */
    UTF8ToString: typeof UTF8ToString;

    /**
     * Returns the number of bytes required to encode a JavaScript string as
     * UTF-8.
     */
    lengthBytesUTF8: typeof lengthBytesUTF8;

    /** Provides access to the Emscripten virtual file system. */
    FS: typeof FS;

    /**
     * Frees allocated memory in the WebAssembly heap.
     *
     * Equivalent to `free(void* ptr)` in C.
     *
     * @param ptr Pointer to the memory location to free.
     */
    _free(ptr: number): void;

    /**
     * Allocates memory in the WebAssembly heap.
     *
     * Equivalent to `malloc(size_t size)` in C.
     *
     * @param size Number of bytes to allocate.
     * @returns A pointer to the beginning of the allocated memory block.
     */
    _malloc(size: number): number;

    /**
     * @param {number} tjd_ut - `double tjd_ut`
     * @param {number} calc_flag - `int32 calc_flag`
     * @param {number} geopos - `double* geopos`
     * @param {number} atpress - `double atpress`
     * @param {number} attemp - `double attemp`
     * @param {number} xin - `double* xin`
     * @param {number} xaz - `double* xaz`
     * @returns {void} `void`
     */
    _swe_azalt(
        tjd_ut: number,
        calc_flag: number,
        geopos: number,
        atpress: number,
        attemp: number,
        xin: number,
        xaz: number
    ): void;

    /**
     * @param {number} tjd_ut - `double tjd_ut`
     * @param {number} calc_flag - `int32 calc_flag`
     * @param {number} geopos - `double* geopos`
     * @param {number} xin - `double* xin`
     * @param {number} xout - `double* xout`
     * @returns {void} `void`
     */
    _swe_azalt_rev(
        tjd_ut: number,
        calc_flag: number,
        geopos: number,
        xin: number,
        xout: number
    ): void;

    /**
     * @param {number} tjd - `double tjd`
     * @param {number} ipl - `int ipl`
     * @param {number} iflag - `int32 iflag`
     * @param {number} xx - `double* xx`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_calc(
        tjd: number,
        ipl: number,
        iflag: number,
        xx: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd - `double tjd`
     * @param {number} ipl - `int32 ipl`
     * @param {number} iplctr - `int32 iplctr`
     * @param {number} iflag - `int32 iflag`
     * @param {number} xxret - `double* xxret`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_calc_pctr(
        tjd: number,
        ipl: number,
        iplctr: number,
        iflag: number,
        xxret: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_ut - `double tjd_ut`
     * @param {number} ipl - `int32 ipl`
     * @param {number} iflag - `int32 iflag`
     * @param {number} xx - `double* xx`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_calc_ut(
        tjd_ut: number,
        ipl: number,
        iflag: number,
        xx: number,
        serr: number
    ): number;

    /** @returns {void} `void` */
    _swe_close(): void;

    /**
     * @param {number} xpo - `double* xpo`
     * @param {number} xpn - `double* xpn`
     * @param {number} eps - `double eps`
     * @returns {void} `void`
     */
    _swe_cotrans(xpo: number, xpn: number, eps: number): void;

    /**
     * @param {number} xpo - `double* xpo`
     * @param {number} xpn - `double* xpn`
     * @param {number} eps - `double eps`
     * @returns {void} `void`
     */
    _swe_cotrans_sp(xpo: number, xpn: number, eps: number): void;

    /**
     * @param {number} t - `CSEC t`
     * @param {number} a - `char* a`
     * @returns {number} `char*`
     */
    _swe_cs2degstr(t: number, a: number): number;

    /**
     * @param {number} t - `CSEC t`
     * @param {number} pchar - `char pchar`
     * @param {number} mchar - `char mchar`
     * @param {number} s - `char* s`
     * @returns {number} `char*`
     */
    _swe_cs2lonlatstr(
        t: number,
        pchar: number,
        mchar: number,
        s: number
    ): number;

    /**
     * @param {number} t - `CSEC t`
     * @param {number} sep - `int sep`
     * @param {number} suppressZero - `AS_BOOL suppressZero`
     * @param {number} a - `char* a`
     * @returns {number} `char*`
     */
    _swe_cs2timestr(
        t: number,
        sep: number,
        suppressZero: number,
        a: number
    ): number;

    /**
     * @param {number} p - `centisec p`
     * @returns {number} `centisec`
     */
    _swe_csnorm(p: number): number;

    /**
     * @param {number} x - `centisec x`
     * @returns {number} `centisec`
     */
    _swe_csroundsec(x: number): number;

    /**
     * @param {number} x - `double x`
     * @returns {number} `int32`
     */
    _swe_d2l(x: number): number;

    /**
     * @param {number} y - `int y`
     * @param {number} m - `int m`
     * @param {number} d - `int d`
     * @param {number} utime - `double utime`
     * @param {number} c - `char c`
     * @param {number} tjd - `double* tjd`
     * @returns {number} `int`
     */
    _swe_date_conversion(
        y: number,
        m: number,
        d: number,
        utime: number,
        c: number,
        tjd: number
    ): number;

    /**
     * @param {number} jd - `double jd`
     * @returns {number} `int`
     */
    _swe_day_of_week(jd: number): number;

    /**
     * @param {number} x1 - `double x1`
     * @param {number} x0 - `double x0`
     * @returns {number} `double`
     */
    _swe_deg_midp(x1: number, x0: number): number;

    /**
     * @param {number} x - `double x`
     * @returns {number} `double`
     */
    _swe_degnorm(x: number): number;

    /**
     * @param {number} tjd - `double tjd`
     * @returns {number} `double`
     */
    _swe_deltat(tjd: number): number;

    /**
     * @param {number} tjd - `double tjd`
     * @param {number} iflag - `int32 iflag`
     * @param {number} serr - `char* serr`
     * @returns {number} `double`
     */
    _swe_deltat_ex(tjd: number, iflag: number, serr: number): number;

    /**
     * @param {number} p1 - `centisec p1`
     * @param {number} p2 - `centisec p2`
     * @returns {number} `centisec`
     */
    _swe_difcs2n(p1: number, p2: number): number;

    /**
     * @param {number} p1 - `centisec p1`
     * @param {number} p2 - `centisec p2`
     * @returns {number} `centisec`
     */
    _swe_difcsn(p1: number, p2: number): number;

    /**
     * @param {number} p1 - `double p1`
     * @param {number} p2 - `double p2`
     * @returns {number} `double`
     */
    _swe_difdeg2n(p1: number, p2: number): number;

    /**
     * @param {number} p1 - `double p1`
     * @param {number} p2 - `double p2`
     * @returns {number} `double`
     */
    _swe_difdegn(p1: number, p2: number): number;

    /**
     * @param {number} p1 - `double p1`
     * @param {number} p2 - `double p2`
     * @returns {number} `double`
     */
    _swe_difrad2n(p1: number, p2: number): number;

    /**
     * @param {number} star - `char* star`
     * @param {number} tjd - `double tjd`
     * @param {number} iflag - `int32 iflag`
     * @param {number} xx - `double* xx`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_fixstar(
        star: number,
        tjd: number,
        iflag: number,
        xx: number,
        serr: number
    ): number;

    /**
     * @param {number} star - `char* star`
     * @param {number} tjd - `double tjd`
     * @param {number} iflag - `int32 iflag`
     * @param {number} xx - `double* xx`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_fixstar2(
        star: number,
        tjd: number,
        iflag: number,
        xx: number,
        serr: number
    ): number;

    /**
     * @param {number} star - `char* star`
     * @param {number} mag - `double* mag`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_fixstar2_mag(star: number, mag: number, serr: number): number;

    /**
     * @param {number} star - `char* star`
     * @param {number} tjd_ut - `double tjd_ut`
     * @param {number} iflag - `int32 iflag`
     * @param {number} xx - `double* xx`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_fixstar2_ut(
        star: number,
        tjd_ut: number,
        iflag: number,
        xx: number,
        serr: number
    ): number;

    /**
     * @param {number} star - `char* star`
     * @param {number} mag - `double* mag`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_fixstar_mag(star: number, mag: number, serr: number): number;

    /**
     * @param {number} star - `char* star`
     * @param {number} tjd_ut - `double tjd_ut`
     * @param {number} iflag - `int32 iflag`
     * @param {number} xx - `double* xx`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_fixstar_ut(
        star: number,
        tjd_ut: number,
        iflag: number,
        xx: number,
        serr: number
    ): number;

    /**
     * @param {number} t_ut - `double t_ut`
     * @param {number} ipl - `int32 ipl`
     * @param {number} starname - `char* starname`
     * @param {number} iflag - `int32 iflag`
     * @param {number} imeth - `int32 imeth`
     * @param {number} geopos - `double* geopos`
     * @param {number} atpress - `double atpress`
     * @param {number} attemp - `double attemp`
     * @param {number} dgsect - `double* dgsect`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_gauquelin_sector(
        t_ut: number,
        ipl: number,
        starname: number,
        iflag: number,
        imeth: number,
        geopos: number,
        atpress: number,
        attemp: number,
        dgsect: number,
        serr: number
    ): number;

    /**
     * @param {number} samod - `char* samod`
     * @param {number} sdet - `char* sdet`
     * @param {number} iflag - `int32 iflag`
     * @returns {void} `void`
     */
    _swe_get_astro_models(samod: number, sdet: number, iflag: number): void;

    /**
     * @param {number} tjd_et - `double tjd_et`
     * @returns {number} `double`
     */
    _swe_get_ayanamsa(tjd_et: number): number;

    /**
     * @param {number} tjd_et - `double tjd_et`
     * @param {number} iflag - `int32 iflag`
     * @param {number} daya - `double* daya`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_get_ayanamsa_ex(
        tjd_et: number,
        iflag: number,
        daya: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_ut - `double tjd_ut`
     * @param {number} iflag - `int32 iflag`
     * @param {number} daya - `double* daya`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_get_ayanamsa_ex_ut(
        tjd_ut: number,
        iflag: number,
        daya: number,
        serr: number
    ): number;

    /**
     * @param {number} isidmode - `int32 isidmode`
     * @returns {number} `char*`
     */
    _swe_get_ayanamsa_name(isidmode: number): number;

    /**
     * @param {number} tjd_ut - `double tjd_ut`
     * @returns {number} `double`
     */
    _swe_get_ayanamsa_ut(tjd_ut: number): number;

    /**
     * @param {number} ifno - `int ifno`
     * @param {number} tfstart - `double* tfstart`
     * @param {number} tfend - `double* tfend`
     * @param {number} denum - `int* denum`
     * @returns {number} `char*`
     */
    _swe_get_current_file_data(
        ifno: number,
        tfstart: number,
        tfend: number,
        denum: number
    ): number;

    /**
     * @param {number} s - `char* s`
     * @returns {number} `char*`
     */
    _swe_get_library_path(s: number): number;

    /**
     * @param {number} tjd_et - `double tjd_et`
     * @param {number} ipl - `int32 ipl`
     * @param {number} iflag - `int32 iflag`
     * @param {number} dret - `double* dret`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_get_orbital_elements(
        tjd_et: number,
        ipl: number,
        iflag: number,
        dret: number,
        serr: number
    ): number;

    /**
     * @param {number} ipl - `int ipl`
     * @param {number} spname - `char* spname`
     * @returns {number} `char*`
     */
    _swe_get_planet_name(ipl: number, spname: number): number;

    /** @returns {number} `double` */
    _swe_get_tid_acc(): number;

    /**
     * @param {number} tjdut - `double tjdut`
     * @param {number} dgeo - `double* dgeo`
     * @param {number} datm - `double* datm`
     * @param {number} dobs - `double* dobs`
     * @param {number} helflag - `int32 helflag`
     * @param {number} mag - `double mag`
     * @param {number} azi_obj - `double azi_obj`
     * @param {number} azi_sun - `double azi_sun`
     * @param {number} azi_moon - `double azi_moon`
     * @param {number} alt_moon - `double alt_moon`
     * @param {number} dret - `double* dret`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_heliacal_angle(
        tjdut: number,
        dgeo: number,
        datm: number,
        dobs: number,
        helflag: number,
        mag: number,
        azi_obj: number,
        azi_sun: number,
        azi_moon: number,
        alt_moon: number,
        dret: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_ut - `double tjd_ut`
     * @param {number} geopos - `double* geopos`
     * @param {number} datm - `double* datm`
     * @param {number} dobs - `double* dobs`
     * @param {number} ObjectName - `char* ObjectName`
     * @param {number} TypeEvent - `int32 TypeEvent`
     * @param {number} helflag - `int32 helflag`
     * @param {number} darr - `double* darr`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_heliacal_pheno_ut(
        tjd_ut: number,
        geopos: number,
        datm: number,
        dobs: number,
        ObjectName: number,
        TypeEvent: number,
        helflag: number,
        darr: number,
        serr: number
    ): number;

    /**
     * @param {number} tjdstart_ut - `double tjdstart_ut`
     * @param {number} geopos - `double* geopos`
     * @param {number} datm - `double* datm`
     * @param {number} dobs - `double* dobs`
     * @param {number} ObjectName - `char* ObjectName`
     * @param {number} TypeEvent - `int32 TypeEvent`
     * @param {number} iflag - `int32 iflag`
     * @param {number} dret - `double* dret`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_heliacal_ut(
        tjdstart_ut: number,
        geopos: number,
        datm: number,
        dobs: number,
        ObjectName: number,
        TypeEvent: number,
        iflag: number,
        dret: number,
        serr: number
    ): number;

    /**
     * @param {number} ipl - `int32 ipl`
     * @param {number} x2cross - `double x2cross`
     * @param {number} jd_et - `double jd_et`
     * @param {number} iflag - `int32 iflag`
     * @param {number} dir - `int32 dir`
     * @param {number} jd_cross - `double* jd_cross`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_helio_cross(
        ipl: number,
        x2cross: number,
        jd_et: number,
        iflag: number,
        dir: number,
        jd_cross: number,
        serr: number
    ): number;

    /**
     * @param {number} ipl - `int32 ipl`
     * @param {number} x2cross - `double x2cross`
     * @param {number} jd_ut - `double jd_ut`
     * @param {number} iflag - `int32 iflag`
     * @param {number} dir - `int32 dir`
     * @param {number} jd_cross - `double* jd_cross`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_helio_cross_ut(
        ipl: number,
        x2cross: number,
        jd_ut: number,
        iflag: number,
        dir: number,
        jd_cross: number,
        serr: number
    ): number;

    /**
     * @param {number} hsys - `int hsys`
     * @returns {number} `char*`
     */
    _swe_house_name(hsys: number): number;

    /**
     * @param {number} armc - `double armc`
     * @param {number} geolat - `double geolat`
     * @param {number} eps - `double eps`
     * @param {number} hsys - `int hsys`
     * @param {number} xpin - `double* xpin`
     * @param {number} serr - `char* serr`
     * @returns {number} `double`
     */
    _swe_house_pos(
        armc: number,
        geolat: number,
        eps: number,
        hsys: number,
        xpin: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_ut - `double tjd_ut`
     * @param {number} geolat - `double geolat`
     * @param {number} geolon - `double geolon`
     * @param {number} hsys - `int hsys`
     * @param {number} cusps - `double* cusps`
     * @param {number} ascmc - `double* ascmc`
     * @returns {number} `int`
     */
    _swe_houses(
        tjd_ut: number,
        geolat: number,
        geolon: number,
        hsys: number,
        cusps: number,
        ascmc: number
    ): number;

    /**
     * @param {number} armc - `double armc`
     * @param {number} geolat - `double geolat`
     * @param {number} eps - `double eps`
     * @param {number} hsys - `int hsys`
     * @param {number} cusps - `double* cusps`
     * @param {number} ascmc - `double* ascmc`
     * @returns {number} `int`
     */
    _swe_houses_armc(
        armc: number,
        geolat: number,
        eps: number,
        hsys: number,
        cusps: number,
        ascmc: number
    ): number;

    /**
     * @param {number} armc - `double armc`
     * @param {number} geolat - `double geolat`
     * @param {number} eps - `double eps`
     * @param {number} hsys - `int hsys`
     * @param {number} cusps - `double* cusps`
     * @param {number} ascmc - `double* ascmc`
     * @param {number} cusp_speed - `double* cusp_speed`
     * @param {number} ascmc_speed - `double* ascmc_speed`
     * @param {number} serr - `char* serr`
     * @returns {number} `int`
     */
    _swe_houses_armc_ex2(
        armc: number,
        geolat: number,
        eps: number,
        hsys: number,
        cusps: number,
        ascmc: number,
        cusp_speed: number,
        ascmc_speed: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_ut - `double tjd_ut`
     * @param {number} iflag - `int32 iflag`
     * @param {number} geolat - `double geolat`
     * @param {number} geolon - `double geolon`
     * @param {number} hsys - `int hsys`
     * @param {number} cusps - `double* cusps`
     * @param {number} ascmc - `double* ascmc`
     * @returns {number} `int`
     */
    _swe_houses_ex(
        tjd_ut: number,
        iflag: number,
        geolat: number,
        geolon: number,
        hsys: number,
        cusps: number,
        ascmc: number
    ): number;

    /**
     * @param {number} tjd_ut - `double tjd_ut`
     * @param {number} iflag - `int32 iflag`
     * @param {number} geolat - `double geolat`
     * @param {number} geolon - `double geolon`
     * @param {number} hsys - `int hsys`
     * @param {number} cusps - `double* cusps`
     * @param {number} ascmc - `double* ascmc`
     * @param {number} cusp_speed - `double* cusp_speed`
     * @param {number} ascmc_speed - `double* ascmc_speed`
     * @param {number} serr - `char* serr`
     * @returns {number} `int`
     */
    _swe_houses_ex2(
        tjd_ut: number,
        iflag: number,
        geolat: number,
        geolon: number,
        hsys: number,
        cusps: number,
        ascmc: number,
        cusp_speed: number,
        ascmc_speed: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_et - `double tjd_et`
     * @param {number} gregflag - `int32 gregflag`
     * @param {number} iyear - `int32* iyear`
     * @param {number} imonth - `int32* imonth`
     * @param {number} iday - `int32* iday`
     * @param {number} ihour - `int32* ihour`
     * @param {number} imin - `int32* imin`
     * @param {number} dsec - `double* dsec`
     * @returns {void} `void`
     */
    _swe_jdet_to_utc(
        tjd_et: number,
        gregflag: number,
        iyear: number,
        imonth: number,
        iday: number,
        ihour: number,
        imin: number,
        dsec: number
    ): void;

    /**
     * @param {number} tjd_ut - `double tjd_ut`
     * @param {number} gregflag - `int32 gregflag`
     * @param {number} iyear - `int32* iyear`
     * @param {number} imonth - `int32* imonth`
     * @param {number} iday - `int32* iday`
     * @param {number} ihour - `int32* ihour`
     * @param {number} imin - `int32* imin`
     * @param {number} dsec - `double* dsec`
     * @returns {void} `void`
     */
    _swe_jdut1_to_utc(
        tjd_ut: number,
        gregflag: number,
        iyear: number,
        imonth: number,
        iday: number,
        ihour: number,
        imin: number,
        dsec: number
    ): void;

    /**
     * @param {number} year - `int year`
     * @param {number} month - `int month`
     * @param {number} day - `int day`
     * @param {number} hour - `double hour`
     * @param {number} gregflag - `int gregflag`
     * @returns {number} `double`
     */
    _swe_julday(
        year: number,
        month: number,
        day: number,
        hour: number,
        gregflag: number
    ): number;

    /**
     * @param {number} tjd_lat - `double tjd_lat`
     * @param {number} geolon - `double geolon`
     * @param {number} tjd_lmt - `double* tjd_lmt`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_lat_to_lmt(
        tjd_lat: number,
        geolon: number,
        tjd_lmt: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_lmt - `double tjd_lmt`
     * @param {number} geolon - `double geolon`
     * @param {number} tjd_lat - `double* tjd_lat`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_lmt_to_lat(
        tjd_lmt: number,
        geolon: number,
        tjd_lat: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_ut - `double tjd_ut`
     * @param {number} ifl - `int32 ifl`
     * @param {number} geopos - `double* geopos`
     * @param {number} attr - `double* attr`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_lun_eclipse_how(
        tjd_ut: number,
        ifl: number,
        geopos: number,
        attr: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_start - `double tjd_start`
     * @param {number} ifl - `int32 ifl`
     * @param {number} ifltype - `int32 ifltype`
     * @param {number} tret - `double* tret`
     * @param {number} backward - `int32 backward`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_lun_eclipse_when(
        tjd_start: number,
        ifl: number,
        ifltype: number,
        tret: number,
        backward: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_start - `double tjd_start`
     * @param {number} ifl - `int32 ifl`
     * @param {number} geopos - `double* geopos`
     * @param {number} tret - `double* tret`
     * @param {number} attr - `double* attr`
     * @param {number} backward - `int32 backward`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_lun_eclipse_when_loc(
        tjd_start: number,
        ifl: number,
        geopos: number,
        tret: number,
        attr: number,
        backward: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_start - `double tjd_start`
     * @param {number} ipl - `int32 ipl`
     * @param {number} starname - `char* starname`
     * @param {number} ifl - `int32 ifl`
     * @param {number} ifltype - `int32 ifltype`
     * @param {number} tret - `double* tret`
     * @param {number} backward - `int32 backward`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_lun_occult_when_glob(
        tjd_start: number,
        ipl: number,
        starname: number,
        ifl: number,
        ifltype: number,
        tret: number,
        backward: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_start - `double tjd_start`
     * @param {number} ipl - `int32 ipl`
     * @param {number} starname - `char* starname`
     * @param {number} ifl - `int32 ifl`
     * @param {number} geopos - `double* geopos`
     * @param {number} tret - `double* tret`
     * @param {number} attr - `double* attr`
     * @param {number} backward - `int32 backward`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_lun_occult_when_loc(
        tjd_start: number,
        ipl: number,
        starname: number,
        ifl: number,
        geopos: number,
        tret: number,
        attr: number,
        backward: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd - `double tjd`
     * @param {number} ipl - `int32 ipl`
     * @param {number} starname - `char* starname`
     * @param {number} ifl - `int32 ifl`
     * @param {number} geopos - `double* geopos`
     * @param {number} attr - `double* attr`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_lun_occult_where(
        tjd: number,
        ipl: number,
        starname: number,
        ifl: number,
        geopos: number,
        attr: number,
        serr: number
    ): number;

    /**
     * @param {number} x2cross - `double x2cross`
     * @param {number} jd_et - `double jd_et`
     * @param {number} flag - `int32 flag`
     * @param {number} serr - `char* serr`
     * @returns {number} `double`
     */
    _swe_mooncross(
        x2cross: number,
        jd_et: number,
        flag: number,
        serr: number
    ): number;

    /**
     * @param {number} jd_et - `double jd_et`
     * @param {number} flag - `int32 flag`
     * @param {number} xlon - `double* xlon`
     * @param {number} xlat - `double* xlat`
     * @param {number} serr - `char* serr`
     * @returns {number} `double`
     */
    _swe_mooncross_node(
        jd_et: number,
        flag: number,
        xlon: number,
        xlat: number,
        serr: number
    ): number;

    /**
     * @param {number} jd_ut - `double jd_ut`
     * @param {number} flag - `int32 flag`
     * @param {number} xlon - `double* xlon`
     * @param {number} xlat - `double* xlat`
     * @param {number} serr - `char* serr`
     * @returns {number} `double`
     */
    _swe_mooncross_node_ut(
        jd_ut: number,
        flag: number,
        xlon: number,
        xlat: number,
        serr: number
    ): number;

    /**
     * @param {number} x2cross - `double x2cross`
     * @param {number} jd_ut - `double jd_ut`
     * @param {number} flag - `int32 flag`
     * @param {number} serr - `char* serr`
     * @returns {number} `double`
     */
    _swe_mooncross_ut(
        x2cross: number,
        jd_ut: number,
        flag: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_et - `double tjd_et`
     * @param {number} ipl - `int32 ipl`
     * @param {number} iflag - `int32 iflag`
     * @param {number} method - `int32 method`
     * @param {number} xnasc - `double* xnasc`
     * @param {number} xndsc - `double* xndsc`
     * @param {number} xperi - `double* xperi`
     * @param {number} xaphe - `double* xaphe`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_nod_aps(
        tjd_et: number,
        ipl: number,
        iflag: number,
        method: number,
        xnasc: number,
        xndsc: number,
        xperi: number,
        xaphe: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_ut - `double tjd_ut`
     * @param {number} ipl - `int32 ipl`
     * @param {number} iflag - `int32 iflag`
     * @param {number} method - `int32 method`
     * @param {number} xnasc - `double* xnasc`
     * @param {number} xndsc - `double* xndsc`
     * @param {number} xperi - `double* xperi`
     * @param {number} xaphe - `double* xaphe`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_nod_aps_ut(
        tjd_ut: number,
        ipl: number,
        iflag: number,
        method: number,
        xnasc: number,
        xndsc: number,
        xperi: number,
        xaphe: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_et - `double tjd_et`
     * @param {number} ipl - `int32 ipl`
     * @param {number} iflag - `int32 iflag`
     * @param {number} dmax - `double* dmax`
     * @param {number} dmin - `double* dmin`
     * @param {number} dtrue - `double* dtrue`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_orbit_max_min_true_distance(
        tjd_et: number,
        ipl: number,
        iflag: number,
        dmax: number,
        dmin: number,
        dtrue: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd - `double tjd`
     * @param {number} ipl - `int32 ipl`
     * @param {number} iflag - `int32 iflag`
     * @param {number} attr - `double* attr`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_pheno(
        tjd: number,
        ipl: number,
        iflag: number,
        attr: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_ut - `double tjd_ut`
     * @param {number} ipl - `int32 ipl`
     * @param {number} iflag - `int32 iflag`
     * @param {number} attr - `double* attr`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_pheno_ut(
        tjd_ut: number,
        ipl: number,
        iflag: number,
        attr: number,
        serr: number
    ): number;

    /**
     * @param {number} x1 - `double x1`
     * @param {number} x0 - `double x0`
     * @returns {number} `double`
     */
    _swe_rad_midp(x1: number, x0: number): number;

    /**
     * @param {number} x - `double x`
     * @returns {number} `double`
     */
    _swe_radnorm(x: number): number;

    /**
     * @param {number} inalt - `double inalt`
     * @param {number} atpress - `double atpress`
     * @param {number} attemp - `double attemp`
     * @param {number} calc_flag - `int32 calc_flag`
     * @returns {number} `double`
     */
    _swe_refrac(
        inalt: number,
        atpress: number,
        attemp: number,
        calc_flag: number
    ): number;

    /**
     * @param {number} inalt - `double inalt`
     * @param {number} geoalt - `double geoalt`
     * @param {number} atpress - `double atpress`
     * @param {number} attemp - `double attemp`
     * @param {number} lapse_rate - `double lapse_rate`
     * @param {number} calc_flag - `int32 calc_flag`
     * @param {number} dret - `double* dret`
     * @returns {number} `double`
     */
    _swe_refrac_extended(
        inalt: number,
        geoalt: number,
        atpress: number,
        attemp: number,
        lapse_rate: number,
        calc_flag: number,
        dret: number
    ): number;

    /**
     * @param {number} jd - `double jd`
     * @param {number} gregflag - `int gregflag`
     * @param {number} jyear - `int* jyear`
     * @param {number} jmon - `int* jmon`
     * @param {number} jday - `int* jday`
     * @param {number} jut - `double* jut`
     * @returns {void} `void`
     */
    _swe_revjul(
        jd: number,
        gregflag: number,
        jyear: number,
        jmon: number,
        jday: number,
        jut: number
    ): void;

    /**
     * @param {number} tjd_ut - `double tjd_ut`
     * @param {number} ipl - `int32 ipl`
     * @param {number} starname - `char* starname`
     * @param {number} epheflag - `int32 epheflag`
     * @param {number} rsmi - `int32 rsmi`
     * @param {number} geopos - `double* geopos`
     * @param {number} atpress - `double atpress`
     * @param {number} attemp - `double attemp`
     * @param {number} tret - `double* tret`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_rise_trans(
        tjd_ut: number,
        ipl: number,
        starname: number,
        epheflag: number,
        rsmi: number,
        geopos: number,
        atpress: number,
        attemp: number,
        tret: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_ut - `double tjd_ut`
     * @param {number} ipl - `int32 ipl`
     * @param {number} starname - `char* starname`
     * @param {number} epheflag - `int32 epheflag`
     * @param {number} rsmi - `int32 rsmi`
     * @param {number} geopos - `double* geopos`
     * @param {number} atpress - `double atpress`
     * @param {number} attemp - `double attemp`
     * @param {number} horhgt - `double horhgt`
     * @param {number} tret - `double* tret`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_rise_trans_true_hor(
        tjd_ut: number,
        ipl: number,
        starname: number,
        epheflag: number,
        rsmi: number,
        geopos: number,
        atpress: number,
        attemp: number,
        horhgt: number,
        tret: number,
        serr: number
    ): number;

    /**
     * @param {number} samod - `char* samod`
     * @param {number} iflag - `int32 iflag`
     * @returns {void} `void`
     */
    _swe_set_astro_models(samod: number, iflag: number): void;

    /**
     * @param {number} dt - `double dt`
     * @returns {void} `void`
     */
    _swe_set_delta_t_userdef(dt: number): void;

    /**
     * @param {number} path - `char* path`
     * @returns {void} `void`
     */
    _swe_set_ephe_path(path: number): void;

    /**
     * @param {number} do_interpolate - `AS_BOOL do_interpolate`
     * @returns {void} `void`
     */
    _swe_set_interpolate_nut(do_interpolate: number): void;

    /**
     * @param {number} fname - `char* fname`
     * @returns {void} `void`
     */
    _swe_set_jpl_file(fname: number): void;

    /**
     * @param {number} lapse_rate - `double lapse_rate`
     * @returns {void} `void`
     */
    _swe_set_lapse_rate(lapse_rate: number): void;

    /**
     * @param {number} sid_mode - `int32 sid_mode`
     * @param {number} t0 - `double t0`
     * @param {number} ayan_t0 - `double ayan_t0`
     * @returns {void} `void`
     */
    _swe_set_sid_mode(sid_mode: number, t0: number, ayan_t0: number): void;

    /**
     * @param {number} t_acc - `double t_acc`
     * @returns {void} `void`
     */
    _swe_set_tid_acc(t_acc: number): void;

    /**
     * @param {number} geolon - `double geolon`
     * @param {number} geolat - `double geolat`
     * @param {number} geoalt - `double geoalt`
     * @returns {void} `void`
     */
    _swe_set_topo(geolon: number, geolat: number, geoalt: number): void;

    /**
     * @param {number} tjd_ut - `double tjd_ut`
     * @returns {number} `double`
     */
    _swe_sidtime(tjd_ut: number): number;

    /**
     * @param {number} tjd_ut - `double tjd_ut`
     * @param {number} eps - `double eps`
     * @param {number} nut - `double nut`
     * @returns {number} `double`
     */
    _swe_sidtime0(tjd_ut: number, eps: number, nut: number): number;

    /**
     * @param {number} tjd - `double tjd`
     * @param {number} ifl - `int32 ifl`
     * @param {number} geopos - `double* geopos`
     * @param {number} attr - `double* attr`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_sol_eclipse_how(
        tjd: number,
        ifl: number,
        geopos: number,
        attr: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_start - `double tjd_start`
     * @param {number} ifl - `int32 ifl`
     * @param {number} ifltype - `int32 ifltype`
     * @param {number} tret - `double* tret`
     * @param {number} backward - `int32 backward`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_sol_eclipse_when_glob(
        tjd_start: number,
        ifl: number,
        ifltype: number,
        tret: number,
        backward: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd_start - `double tjd_start`
     * @param {number} ifl - `int32 ifl`
     * @param {number} geopos - `double* geopos`
     * @param {number} tret - `double* tret`
     * @param {number} attr - `double* attr`
     * @param {number} backward - `int32 backward`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_sol_eclipse_when_loc(
        tjd_start: number,
        ifl: number,
        geopos: number,
        tret: number,
        attr: number,
        backward: number,
        serr: number
    ): number;

    /**
     * @param {number} tjd - `double tjd`
     * @param {number} ifl - `int32 ifl`
     * @param {number} geopos - `double* geopos`
     * @param {number} attr - `double* attr`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_sol_eclipse_where(
        tjd: number,
        ifl: number,
        geopos: number,
        attr: number,
        serr: number
    ): number;

    /**
     * @param {number} x2cross - `double x2cross`
     * @param {number} jd_et - `double jd_et`
     * @param {number} flag - `int32 flag`
     * @param {number} serr - `char* serr`
     * @returns {number} `double`
     */
    _swe_solcross(
        x2cross: number,
        jd_et: number,
        flag: number,
        serr: number
    ): number;

    /**
     * @param {number} x2cross - `double x2cross`
     * @param {number} jd_ut - `double jd_ut`
     * @param {number} flag - `int32 flag`
     * @param {number} serr - `char* serr`
     * @returns {number} `double`
     */
    _swe_solcross_ut(
        x2cross: number,
        jd_ut: number,
        flag: number,
        serr: number
    ): number;

    /**
     * @param {number} ddeg - `double ddeg`
     * @param {number} roundflag - `int32 roundflag`
     * @param {number} ideg - `int32* ideg`
     * @param {number} imin - `int32* imin`
     * @param {number} isec - `int32* isec`
     * @param {number} dsecfr - `double* dsecfr`
     * @param {number} isgn - `int32* isgn`
     * @returns {void} `void`
     */
    _swe_split_deg(
        ddeg: number,
        roundflag: number,
        ideg: number,
        imin: number,
        isec: number,
        dsecfr: number,
        isgn: number
    ): void;

    /**
     * @param {number} tjd - `double tjd`
     * @param {number} te - `double* te`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_time_equ(tjd: number, te: number, serr: number): number;

    /**
     * @param {number} tjdut - `double tjdut`
     * @param {number} dgeo - `double* dgeo`
     * @param {number} datm - `double* datm`
     * @param {number} dobs - `double* dobs`
     * @param {number} helflag - `int32 helflag`
     * @param {number} mag - `double mag`
     * @param {number} azi_obj - `double azi_obj`
     * @param {number} alt_obj - `double alt_obj`
     * @param {number} azi_sun - `double azi_sun`
     * @param {number} azi_moon - `double azi_moon`
     * @param {number} alt_moon - `double alt_moon`
     * @param {number} dret - `double* dret`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_topo_arcus_visionis(
        tjdut: number,
        dgeo: number,
        datm: number,
        dobs: number,
        helflag: number,
        mag: number,
        azi_obj: number,
        alt_obj: number,
        azi_sun: number,
        azi_moon: number,
        alt_moon: number,
        dret: number,
        serr: number
    ): number;

    /**
     * @param {number} iyear - `int32 iyear`
     * @param {number} imonth - `int32 imonth`
     * @param {number} iday - `int32 iday`
     * @param {number} ihour - `int32 ihour`
     * @param {number} imin - `int32 imin`
     * @param {number} dsec - `double dsec`
     * @param {number} d_timezone - `double d_timezone`
     * @param {number} iyear_out - `int32* iyear_out`
     * @param {number} imonth_out - `int32* imonth_out`
     * @param {number} iday_out - `int32* iday_out`
     * @param {number} ihour_out - `int32* ihour_out`
     * @param {number} imin_out - `int32* imin_out`
     * @param {number} dsec_out - `double* dsec_out`
     * @returns {void} `void`
     */
    _swe_utc_time_zone(
        iyear: number,
        imonth: number,
        iday: number,
        ihour: number,
        imin: number,
        dsec: number,
        d_timezone: number,
        iyear_out: number,
        imonth_out: number,
        iday_out: number,
        ihour_out: number,
        imin_out: number,
        dsec_out: number
    ): void;

    /**
     * @param {number} iyear - `int32 iyear`
     * @param {number} imonth - `int32 imonth`
     * @param {number} iday - `int32 iday`
     * @param {number} ihour - `int32 ihour`
     * @param {number} imin - `int32 imin`
     * @param {number} dsec - `double dsec`
     * @param {number} gregflag - `int32 gregflag`
     * @param {number} dret - `double* dret`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_utc_to_jd(
        iyear: number,
        imonth: number,
        iday: number,
        ihour: number,
        imin: number,
        dsec: number,
        gregflag: number,
        dret: number,
        serr: number
    ): number;

    /**
     * @param {number} s - `char* s`
     * @returns {number} `char*`
     */
    _swe_version(s: number): number;

    /**
     * @param {number} tjdut - `double tjdut`
     * @param {number} geopos - `double* geopos`
     * @param {number} datm - `double* datm`
     * @param {number} dobs - `double* dobs`
     * @param {number} ObjectName - `char* ObjectName`
     * @param {number} helflag - `int32 helflag`
     * @param {number} dret - `double* dret`
     * @param {number} serr - `char* serr`
     * @returns {number} `int32`
     */
    _swe_vis_limit_mag(
        tjdut: number,
        geopos: number,
        datm: number,
        dobs: number,
        ObjectName: number,
        helflag: number,
        dret: number,
        serr: number
    ): number;
}

/**
 * Initializes and returns the Swisseph WebAssembly module.
 *
 * @param moduleArg - Optional configuration object for the Emscripten module.
 * @returns A Promise that resolves to the initialized WASMModule instance.
 */

export default function Module(
    moduleArg?: Partial<EmscriptenModule>
): Promise<WASMModule>;
