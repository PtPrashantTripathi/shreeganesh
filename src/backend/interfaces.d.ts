// Ascendant (Ascendant) Types
type AscendantEnglishType = "Ascendant";
type AscendantHindiType = "लग्न";

//  Core 9 Grahas (Navagrahas) - English
type NavagrahaEnglishType =
    | "Sun"
    | "Moon"
    | "Mars"
    | "Mercury"
    | "Jupiter"
    | "Venus"
    | "Saturn"
    | "Rahu"
    | "Ketu";

//  Navagrahas - Hindi
type NavagrahaHindiType =
    | "सूर्य"
    | "चंद्र"
    | "मंगल"
    | "बुध"
    | "गुरु"
    | "शुक्र"
    | "शनि"
    | "राहु"
    | "केतु";

//  Upagrahas (Shadow Grahas) - English
type UpagrahaEnglishType =
    | "Dhuma"
    | "Vyatipata"
    | "Parivesha"
    | "Chapa"
    | "Upaketu";

//  Upagrahas - Hindi
type UpagrahaHindiType = "धूम" | "व्यतीपात" | "परिवेष" | "चाप" | "उपकेतु";

//  Kalavelas - English
type KalavelasEnglishType =
    | "Gulika"
    | "Kaala"
    | "Mrityu"
    | "Yamaghantaka"
    | "Ardhaprahara";

//  Kalavelas - Hindi
type KalavelasHindiType = "गुलिक" | "काल" | "मृत्यु" | "यमघंटक" | "अर्धप्रहर";

//  Bahyagrahas (Outer Planets) - English
type BahyagrahaEnglishType = "Uranus" | "Neptune" | "Pluto";

//  Bahyagrahas - Hindi
type BahyagrahaHindiType = "अरुण" | "वरुण" | "यम";

//  Final Planet Types (Includes Ascendant)
type PlanetEnglishType =
    | AscendantEnglishType
    | NavagrahaEnglishType
    | BahyagrahaEnglishType
    | UpagrahaEnglishType
    | KalavelasEnglishType;

type PlanetHindiType =
    | AscendantHindiType
    | NavagrahaHindiType
    | BahyagrahaHindiType
    | UpagrahaHindiType
    | KalavelasHindiType;

type RasiEnglishType =
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

type RasiHindiType =
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

type NakshatraEnglishType =
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

type NakshatraHindiType =
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

type ChoghadiyaEnglishType =
    | "Udveg"
    | "Amrit"
    | "Rog"
    | "Labh"
    | "Shubh"
    | "Char"
    | "Kaal";

type ChoghadiyaHindiType =
    | "उद्वेग"
    | "अमृत"
    | "रोग"
    | "लाभ"
    | "शुभ"
    | "चर"
    | "काल";

type MaahaEnglishType =
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

type PurusharthaEnglishType = "Dharma" | "Artha" | "Kama" | "Moksha";

type HouseCategoriesEnglishType =
    | "Kendra"
    | "Trikona"
    | "Dusthana"
    | "Upachaya"
    | "Maraka"
    | "Panaphara"
    | "Apoklima";

type SamvatsaraEnglishType =
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

type EffectEnglishType = "Good" | "Bad";

// Classical elements
type ElementEnglishType = "Fire" | "Earth" | "Air" | "Water";

// Gender of Rasi
type GenderEnglishType = "M" | "F";

// Nature of sign
type NatureEnglishType = "Movable" | "Fixed" | "Dual";

// Zodiac index (1–12)
type RasiNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

// Nakshatra index (1–27)
type NakshatraNumber =
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
type HouseNumber = RasiNumber;

type LanguageTypes = "english" | "hindi";
interface Translation<EnglishType, HindiType> {
    english: EnglishType;
    hindi: HindiType;
}

// Static planet configuration
interface PlanetDetail {
    name: Translation<PlanetEnglishType, PlanetHindiType>;
    type: "Navagraha" | "Upagraha" | "Bahyagraha" | "Ascendant";
    day?: DayEnglishType;
    aspect?: HouseNumber[];
    happy_house?: HouseNumber[];
    sad_house?: HouseNumber[];
    enemy?: PlanetEnglishType[];
    friend?: PlanetEnglishType[];
    neutral?: PlanetEnglishType[];
    symbol: string; // TBD
    color: string; // TBD
}

// Planet with calculated attributes + detaildata
interface Planet extends PlanetDetail {
    degree: number;
    rasi: Rasi;
    nakshatra: Nakshatra;
    motion: "Vakri" | "Margi";
    visibility: "Asta" | "Udaya";
    latitude: number;
    distance: number;
    speed: { longitude: number; latitude: number; distance: number };
    azimuth: number;
    altitude: { true: number; apparent: number };
    divisional: Record<string, Rasi>;
    house: HouseDetail;
    isGrahaDrishti(target: Planet): boolean;
}

// Kundli object generated per birth details
interface Kundli {
    datetime: IDateTime; // Local + UTC datetime
    weekday: NavagrahaEnglishType;
    latitude: number; // Latitude of birthplace
    longitude: number; // Longitude of birthplace
    julian_datetime: number; // Julian Date (UTC)
    ayanamsa: number; // Ayanamsa value at given time
    daybirth: boolean;
    sunrise: number;
    sunset: number;
    planets: Record<PlanetEnglishType, Planet>; // Planet-wise detailed data
    vimsottari_dasa: Dasha[];
    yogPhala: Partial<Record<SourceBookEnglishType, Record<string, rules[]>>>;
}

// Zodiac Sign Details
interface RasiDetail {
    rasi_num: RasiNumber;
    name: Translation<RasiEnglishType, RasiHindiType>;
    lord: PlanetEnglishType;
    element: ElementEnglishType;
    gender: GenderEnglishType;
    nature: NatureEnglishType;
    symbol: string;
    color: string;
}

// Nakshatra Details
interface NakshatraDetail {
    nakshatra_num: NakshatraNumber;
    name: Translation<NakshatraEnglishType, NakshatraHindiType>;
    lord: NavagrahaEnglishType;
}

// RangeType of degrees
interface RangeType {
    min: number;
    max: number;
}

// Degree + NameType context
interface CalculatedDetail {
    degree: number;
    range: RangeType;
}

// Computed Rasi/Nakshatra details
type Rasi = RasiDetail & CalculatedDetail;
type Nakshatra = NakshatraDetail & CalculatedDetail;

interface ChoghadiyaDetail {
    name: Translation<ChoghadiyaEnglishType, string>;
    lord: PlanetEnglishType;
    meaning: string;
    effect: EffectEnglishType;
}

interface IDMS {
    degree: number;
    minute: number;
    second: number;
    toDegree: () => number;
    toString: () => string;
}

// Date and Time structure
interface HMS {
    hour: number;
    minute: number;
    second: number;
}
interface DateType {
    year: number;
    month: number;
    day: number;
}
interface DateTimeType extends DateType, HMS {
    millisecond: number;
    timezone_offset: number;
}

type DayEnglishType =
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";

type DayHindiType =
    | "शनिवार"
    | "रविवार"
    | "सोमवार"
    | "मंगलवार"
    | "बुधवार"
    | "गुरुवार"
    | "शुक्रवार";

interface VaraDetail {
    name: Translation<DayEnglishType, DayHindiType>;
    lord: PlanetEnglishType;
    num: number;
}

type KaranaEnglishType =
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

interface KaranaDetail {
    name: Translation<KaranaEnglishType, string>;
    num: number;
}
type Karana = KaranaDetail & CalculatedDetail;

interface HouseDetail {
    num: HouseNumber;
    name: Translation<string, string>;
    categories: HouseCategoriesEnglishType[];
    purushartha: PurusharthaEnglishType;
    karak: PlanetEnglishType[];
}

interface MaahaDetail {
    name: Translation<MaahaEnglishType, string>;
    num: number;
}
interface SamvatsaraDetail {
    name: Translation<SamvatsaraEnglishType, string>;
    num: number;
}

type TithiNumber =
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
type TithiEnglishType =
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

type TithiHindiType =
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

type PakshaEnglishType = "Krishna" | "Shukla";
type PakshaHindiType = "कृष्ण" | "शुक्ल";
type PakshaName = Translation<PakshaEnglishType, PakshaHindiType>;
interface TithiDetail {
    name: Translation<TithiEnglishType, TithiHindiType>;
    num: TithiNumber;
}
type Tithi = TithiDetail &
    CalculatedDetail & {
        pakshaname: PakshaName;
        lunarphase: number;
    };

// Yoga Details
type YogaEnglishType =
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

type YogaHindiType =
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
type YogaNumber = NakshatraNumber;
interface YogaDetail {
    yoga_num: YogaNumber;
    name: Translation<YogaEnglishType, YogaHindiType>;
}
type Yoga = YogaDetail & CalculatedDetail;

type SourceBookEnglishType =
    | "BPHS"
    | "JatakaParijata"
    | "PhalaDeepika"
    | "BrihatJataka"
    | "Saravali";

interface rules {
    description: Translation<string, string>;
    effect: Translation<string, string>;
    rule: boolean;
    highervargas: boolean;
}

type DashaPhal = Partial<
    Record<SourceBookEnglishType, Translation<string, string>>
>;

type DashaName =
    | "MahaDasha"
    | "AntarDasha"
    | "PratyantarDasha"
    | "SookshmaDasha"
    | "PraanaDasha"
    | "DehaDasha";

interface Dasha {
    Name: DashaName;
    Lord: NavagrahaEnglishType;
    StartDate: DateTime;
    EndDate: DateTime;
    Phal: DashaPhal;
    ChildDasha: Dasha[];
}
