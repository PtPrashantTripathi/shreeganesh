import type { DateTime } from "luxon";

/** Ascendant (Lagna) at the time of birth. */
export type AscendantEn = "Ascendant";

export type AscendantHi = "लग्न";

/** Core 7 Planets */
export type SaptagrahaEn =
    | "Sun"
    | "Moon"
    | "Mars"
    | "Mercury"
    | "Jupiter"
    | "Venus"
    | "Saturn";

export type SaptagrahaHi =
    | "सूर्य"
    | "चंद्र"
    | "मंगल"
    | "बुध"
    | "गुरु"
    | "शुक्र"
    | "शनि";

/** "Chhaya" = shadow planets (lunar nodes, Rahu & Ketu). */
export type ChhayagrahaEn = "Rahu" | "Ketu";

export type ChhayagrahaHi = "राहु" | "केतु";

/** Core 9 Planets (Navagrahas) - English. */
export type NavagrahaEn = SaptagrahaEn | ChhayagrahaEn;

/** Core 9 Planets (Navagrahas) - Hindi. */
export type NavagrahaHi = SaptagrahaHi | ChhayagrahaHi;

/** Outer planets beyond Saturn (Bahyagrahas). */
export type BahyagrahaEn = "Uranus" | "Neptune" | "Pluto";

export type BahyagrahaHi = "अरुण" | "वरुण" | "यम";

/** Minor shadow Planets (Upagrahas). */
export type UpagrahaEn =
    | "Dhuma"
    | "Vyatipata"
    | "Parivesha"
    | "Chapa"
    | "Upaketu";

export type UpagrahaHi = "धूम" | "व्यतीपात" | "परिवेष" | "चाप" | "उपकेतु";

/** Time-based shadow periods (Kalavelas). */
export type KalavelasEn =
    | "Gulika"
    | "Kaala"
    | "Mrityu"
    | "Yamaghantaka"
    | "Ardhaprahara";

export type KalavelasHi = "गुलिक" | "काल" | "मृत्यु" | "यमघंटक" | "अर्धप्रहर";

/* Planet with calculated attributes + detaildata */
export type PlanetEn =
    | AscendantEn
    | SaptagrahaEn
    | ChhayagrahaEn
    | BahyagrahaEn
    | UpagrahaEn
    | KalavelasEn;

export type PlanetHi =
    | AscendantHi
    | SaptagrahaHi
    | ChhayagrahaHi
    | BahyagrahaHi
    | UpagrahaHi
    | KalavelasHi;

export interface PlanetDetail {
    name: Translation<PlanetEn, PlanetHi>;
    shortname?: Translation<string, string>;
    type:
        | "Ascendant"
        | "Saptagraha"
        | "Chhayagraha"
        | "Bahyagraha"
        | "Upagraha"
        | "Kalavelas";
    day?: DayEn;
    aspect?: HouseNumber[];
    happy_house?: HouseNumber[];
    sad_house?: HouseNumber[];
    friend?: SaptagrahaEn[];
    enemy?: SaptagrahaEn[];
    neutral?: SaptagrahaEn[];
    exaltation?: RasiEn;
    debilitation?: RasiEn;
    ownsign?: RasiEn[];
    symbol: string;
    color: string;
}

export type RasiEn =
    | "Aries"
    | "Taurus"
    | "Gemini"
    | "Cancer"
    | "Leo"
    | "Virgo"
    | "Libra"
    | "Scorpio"
    | "Sagittarius"
    | "Capricorn"
    | "Aquarius"
    | "Pisces";

export type RasiHi =
    | "मेष"
    | "वृषभ"
    | "मिथुन"
    | "कर्क"
    | "सिंह"
    | "कन्या"
    | "तुला"
    | "वृश्चिक"
    | "धनु"
    | "मकर"
    | "कुंभ"
    | "मीन";

export type NakshatraEn =
    | "Aswini"
    | "Bharani"
    | "Krittika"
    | "Rohini"
    | "Mrigashira"
    | "Ardra"
    | "Punarvasu"
    | "Pushya"
    | "Ashlesha"
    | "Magha"
    | "PurvaPhalguni"
    | "UttaraPhalguni"
    | "Hasta"
    | "Chitra"
    | "Swati"
    | "Vishakha"
    | "Anuradha"
    | "Jyeshtha"
    | "Mula"
    | "PurvaShadha"
    | "UttaraShadha"
    | "Sravana"
    | "Dhanishta"
    | "Shatabhisha"
    | "PurvaBhadra"
    | "UttaraBhadra"
    | "Revati";

export type NakshatraHi =
    | "अश्विनी"
    | "भरणी"
    | "कृतिका"
    | "रोहिणी"
    | "मृगशिरा"
    | "आर्द्रा"
    | "पुर्नवसु"
    | "पुष्य"
    | "अश्लेषा"
    | "मघा"
    | "पू.फाल्गुनी"
    | "उ.फाल्गुनी"
    | "हस्त"
    | "चित्रा"
    | "स्वाति"
    | "विशाखा"
    | "अनुराधा"
    | "ज्येष्ठा"
    | "मूल"
    | "पू.षाढ़ा"
    | "उ.षाढ़ा"
    | "श्रवण"
    | "धनिष्ठा"
    | "शतभिषा"
    | "पू.भाद्रपद"
    | "उ.भाद्रपद"
    | "रेवती";

export type ChoghadiyaEn =
    | "Udveg"
    | "Amrit"
    | "Rog"
    | "Labh"
    | "Shubh"
    | "Char"
    | "Kaal";

export type ChoghadiyaHi =
    | "उद्वेग"
    | "अमृत"
    | "रोग"
    | "लाभ"
    | "शुभ"
    | "चर"
    | "काल";

export type MaahaEn =
    | "Chhaitra"
    | "Vaishakha"
    | "Jyeshtha"
    | "Ashadha"
    | "Shravana"
    | "Bhaadra"
    | "Ashwin"
    | "Kartika"
    | "Agrahayana"
    | "Pausha"
    | "Magha"
    | "Phalguna";

export type PurusharthaEn = "Dharma" | "Artha" | "Kama" | "Moksha";

export type HouseCategoriesEn =
    | "Kendra"
    | "Trikona"
    | "Dusthana"
    | "Upachaya"
    | "Maraka"
    | "Panaphara"
    | "Apoklima";

export type SamvatsaraEn =
    | "Prabhava"
    | "Vibhava"
    | "Shukla"
    | "Pramodadoota"
    | "Prajapati"
    | "Angirasa"
    | "Shrimukha"
    | "Bhava"
    | "Yuva"
    | "Dhatr"
    | "Isvara"
    | "Bahudhanya"
    | "Pramathi"
    | "Vikrama"
    | "Vrsapraja"
    | "Chitrabhanu"
    | "Svabhanu"
    | "Tarana"
    | "Parthiva"
    | "Vyaya"
    | "Sarvajit"
    | "Sarvadhari"
    | "Virodhi"
    | "Vikrti"
    | "Khara"
    | "Nandana"
    | "Vijaya"
    | "Jaya"
    | "Manmatha"
    | "Durmukha"
    | "Hevilambi"
    | "Vilambi"
    | "Vikari"
    | "Sharvari"
    | "Plava"
    | "Shubhakrt"
    | "Shobhakrt"
    | "Krodhi"
    | "Vishvavasu"
    | "Parabhava"
    | "Plavanga"
    | "Kilaka"
    | "Saumya"
    | "Sadharana"
    | "Virodhakrta"
    | "Paridhavi"
    | "Pramadi"
    | "Ananda"
    | "Raksasa"
    | "Nala"
    | "Pingala"
    | "Kalayukta"
    | "Siddharthi"
    | "Raudri"
    | "Durmati"
    | "Dundubhi"
    | "Rudhirodgari"
    | "Raktaksi"
    | "Krodhana"
    | "Akshaya";

export type EffectEn = "Good" | "Bad";

/* Classical elements */
export type ElementEn = "Fire" | "Earth" | "Air" | "Water";

/* Gender of Rasi */
export type GenderEn = "M" | "F";

/* Nature of sign */
export type NatureEn = "Movable" | "Fixed" | "Dual";

/* Zodiac index (1–12) */
export type RasiNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/* Nakshatra index (1–27) */
export type NakshatraNumber =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27;

export type HouseNumber = RasiNumber;

export type LanguageTypes = "english" | "hindi";

export interface Translation<EnglishType, HindiType> {
    english: EnglishType;
    hindi: HindiType;
}

/* Zodiac Sign Details */
export interface RasiDetail {
    rasi_num: RasiNumber;
    name: Translation<RasiEn, RasiHi>;
    lord: SaptagrahaEn;
    element: ElementEn;
    gender: GenderEn;
    nature: NatureEn;
    symbol: string;
    color: string;
}

/* Nakshatra Details */
export interface NakshatraDetail {
    nakshatra_num: NakshatraNumber;
    name: Translation<NakshatraEn, NakshatraHi>;
    lord: NavagrahaEn;
}

/* RangeType of degrees */
export interface RangeType {
    min: number;
    max: number;
}

/* Degree + NameType context */
export interface CalculatedDetail {
    degree: number;
    range: RangeType;
}

/* Computed Rasi/Nakshatra details */
export type Rasi = RasiDetail & CalculatedDetail;

export type Nakshatra = NakshatraDetail & CalculatedDetail;

export interface ChoghadiyaDetail {
    name: Translation<ChoghadiyaEn, string>;
    lord: SaptagrahaEn;
    meaning: string;
    effect: EffectEn;
}

export interface IDMS {
    degree: number;
    minute: number;
    second: number;
    toDegree: () => number;
    toString: () => string;
}

/* Date and Time structure */
export interface HMS {
    hour: number;
    minute: number;
    second: number;
}

export interface DateType {
    year: number;
    month: number;
    day: number;
}

export interface DateTimeType extends DateType, HMS {
    millisecond: number;
    timezone_offset: number;
}

export type DayEn =
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";

export type DayHi =
    | "शनिवार"
    | "रविवार"
    | "सोमवार"
    | "मंगलवार"
    | "बुधवार"
    | "गुरुवार"
    | "शुक्रवार";

export interface VaraDetail {
    name: Translation<DayEn, DayHi>;
    lord: SaptagrahaEn;
    num: number;
}

export type KaranaEn =
    | "Sakuni"
    | "Catuspada"
    | "Naga"
    | "Kimstughna"
    | "Bava"
    | "Balava"
    | "Kaulava"
    | "Taitila"
    | "Gara"
    | "Vanij"
    | "Vishti";

export interface KaranaDetail {
    name: Translation<KaranaEn, string>;
    num: number;
}

export type Karana = KaranaDetail & CalculatedDetail;

export interface HouseDetail {
    num: HouseNumber;
    name: Translation<string, string>;
    categories: HouseCategoriesEn[];
    purushartha: PurusharthaEn;
    karak: NavagrahaEn[];
}

export interface MaahaDetail {
    name: Translation<MaahaEn, string>;
    num: number;
}

export interface SamvatsaraDetail {
    name: Translation<SamvatsaraEn, string>;
    num: number;
}

export type TithiNumber =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 30;

export type TithiEn =
    | "Pratipada"
    | "Dvitiya"
    | "Tritiya"
    | "Chaturthi"
    | "Panchami"
    | "Shashthi"
    | "Saptami"
    | "Ashtami"
    | "Navami"
    | "Dasami"
    | "Ekadasi"
    | "Dwadasi"
    | "Trayodasi"
    | "Chaturdasi"
    | "Amavasya"
    | "Purnima";

export type TithiHi =
    | "प्रथमा"
    | "द्वितीया"
    | "तृतिया"
    | "चतुर्थी"
    | "पंचमी"
    | "षष्ठी"
    | "सप्तमी"
    | "अष्टमी"
    | "नवमीं"
    | "दशमी"
    | "एकादशी"
    | "व्दादशी"
    | "त्रयोदशी"
    | "चर्तुदशी"
    | "अमावस्या"
    | "पूर्णिमा";

export type PakshaEn = "Krishna" | "Shukla";

export type PakshaHi = "कृष्ण" | "शुक्ल";

export type PakshaName = Translation<PakshaEn, PakshaHi>;

export interface TithiDetail {
    name: Translation<TithiEn, TithiHi>;
    num: TithiNumber;
}

export type Tithi = TithiDetail &
    CalculatedDetail & {
        pakshaname: PakshaName;
        lunarphase: number;
    };

/* Yoga Details */
export type YogaEn =
    | "Vishkambha"
    | "Priti"
    | "Ayushman"
    | "Saubhagya"
    | "Shobhana"
    | "Atiganda"
    | "Sukarman"
    | "Dhriti"
    | "Shula"
    | "Ganda"
    | "Vriddhi"
    | "Dhruva"
    | "Vyaghata"
    | "Harshana"
    | "Vajra"
    | "Siddhi"
    | "Vyatipata"
    | "Variyana"
    | "Parigha"
    | "Shiva"
    | "Siddha"
    | "Sadhya"
    | "Shubha"
    | "Shukla"
    | "Brahma"
    | "Indra"
    | "Vaidhriti";

export type YogaHi =
    | "विष्कम्भ"
    | "प्रीति"
    | "आयुष्मान"
    | "सौभाग्य"
    | "शोभन"
    | "अतिगण्ड"
    | "सुकर्मा"
    | "धृति"
    | "शूल"
    | "गंड"
    | "वृद्धि"
    | "ध्रुव"
    | "व्याघात"
    | "हर्षण"
    | "वज्र"
    | "सिद्धि"
    | "व्यतिपात"
    | "वरीयान"
    | "परिघ"
    | "शिव"
    | "सिद्ध"
    | "सन्ध्या"
    | "शुभ"
    | "शुक्ल"
    | "ब्रह्म"
    | "इंद्र"
    | "वैधृति";

export type YogaNumber = NakshatraNumber;

export interface YogaDetail {
    yoga_num: YogaNumber;
    name: Translation<YogaEn, YogaHi>;
}

export type Yoga = YogaDetail & CalculatedDetail;

export type SourceBookEn =
    | "BPHS"
    | "JatakaParijata"
    | "PhalaDeepika"
    | "BrihatJataka"
    | "Saravali"
    | "BhriguSamhita";

export interface Phala {
    description: Translation<string, string>;
    effect: Translation<string, string>;
}

export type DashaPhal = Partial<
    Record<SourceBookEn, Translation<string, string>>
>;

export type DashaName =
    | "MahaDasha"
    | "AntarDasha"
    | "PratyantarDasha"
    | "SookshmaDasha"
    | "PraanaDasha"
    | "DehaDasha";

export interface Dasha {
    Name: DashaName;
    Lord: NavagrahaEn;
    StartDate: DateTime;
    EndDate: DateTime;
    Phal: DashaPhal;
    ChildDasha: Dasha[];
}
