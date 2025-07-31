export function getNakshatraPositionBrihatJataka(
    planets: Record<PlanetEnglishType, Planet>
): rules[] {
    return [
        {
            description: {
                english: "Moon in Aswini",
                hindi: "अश्विनी में चंद्रमा",
            },
            effect: {
                english:
                    "The person born In Aswini will be fond of decoration, handsome, popular, skilful and intelligent ",
                hindi: "अश्विनी नक्षत्र में जन्मा व्यक्ति सजावट का शौकीन, सुंदर, लोकप्रिय, कुशल और बुद्धिमान होगा।",
            },
            rule: planets.Moon.nakshatra.name.english == "Aswini",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Bharani",
                hindi: "भरणी में चंद्रमा",
            },
            effect: {
                english:
                    "One born in Bharani will be determined, truthful, healthy, skilful and happy.",
                hindi: "भरणी नक्षत्र में जन्म लेने वाला व्यक्ति दृढ़ निश्चयी, सत्यनिष्ठ, स्वस्थ, कुशल और प्रसन्न होगा।",
            },
            rule: planets.Moon.nakshatra.name.english == "Bharani",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Krittika",
                hindi: "कृतिका में चंद्रमा",
            },
            effect: {
                english:
                    "The person born in Krittika will be a voracious enter, fond of others wives, attractive and renowned ",
                hindi: "कृत्तिका नक्षत्र में जन्मा जातक लालची, दूसरों की पत्नियां चाहने वाला, आकर्षक और प्रसिद्ध होगा।",
            },
            rule: planets.Moon.nakshatra.name.english == "Krittika",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Rohini",
                hindi: "रोहिणी में चंद्रमा",
            },
            effect: {
                english:
                    "Rohini makes a man truthful, clean, following religious and moral principles, sweet in speech, fixed mind and handsome.",
                hindi: "रोहिणी ग्रह मनुष्य को सत्यनिष्ठ, स्वच्छ, धार्मिक और नैतिक सिद्धांतों का पालन करने वाला, मधुर वाणी वाला, स्थिर मन वाला और सुंदर बनाता है।",
            },
            rule: planets.Moon.nakshatra.name.english == "Rohini",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Mrigashira",
                hindi: "मृगशिरा में चंद्रमा",
            },
            effect: {
                english:
                    "Mrigashira-Capricious, skilful, cowardly, good speaker, hopeful, rich and enjoying.",
                hindi: "मृगशिरा-मनमौजी, कुशल, कायर, अच्छा वक्ता, आशावादी, धनी और आनंद लेने वाला।",
            },
            rule: planets.Moon.nakshatra.name.english == "Mrigashira",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Ardra",
                hindi: "आर्द्रा में चंद्रमा",
            },
            effect: {
                english:
                    "Aridra-Dissimulating in self-interest, proud, ungrateful, cruel and sinful.",
                hindi: "अरिद्र- स्वार्थ में भटकने वाला, अभिमानी, कृतघ्न, क्रूर और पापी।",
            },
            rule: planets.Moon.nakshatra.name.english == "Ardra",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Punarvasu",
                hindi: "पुनर्वसु में चंद्रमा",
            },
            effect: {
                english:
                    "Punarvasu-Religious endurance, happy, good, dull, sickly, thirsty and pleased with small gifts.",
                hindi: "पुनर्वसु-धार्मिक सहनशीलता, प्रसन्न, अच्छा, सुस्त, बीमार, प्यासा और छोटे उपहारों से प्रसन्न।",
            },
            rule: planets.Moon.nakshatra.name.english == "Punarvasu",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Pushyami",
                hindi: "पुष्यमी में चंद्रमा",
            },
            effect: {
                english:
                    "Pushya-Control over passions, popular, learned, rich and charitable.",
                hindi: "पुष्य- वासनाओं पर नियंत्रण, लोकप्रिय, विद्वान, धनी और दानशील।",
            },
            rule: planets.Moon.nakshatra.name.english == "Pushya",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Aslesha",
                hindi: "अश्लेषा में चंद्रमा",
            },
            effect: {
                english:
                    "Aslesha-Dissimulator, clever in selfishness, sinful, ungrateful and a cheat.",
                hindi: "अश्लेषा-छल करने वाला, स्वार्थ में चतुर, पापी, कृतघ्न और धोखेबाज।",
            },
            rule: planets.Moon.nakshatra.name.english == "Ashlesha",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Magha",
                hindi: "मघा में चंद्रमा",
            },
            effect: {
                english:
                    "Magha-Many servants and great wealth, enjoying, respector of elders and gods and very enterprising.",
                hindi: "मघा- बहुत से सेवक और महान धन, आनंद लेने वाला, बड़ों और देवताओं का सम्मान करने वाला और बहुत उद्यमी।",
            },
            rule: planets.Moon.nakshatra.name.english == "Magha",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Purva Phalgini",
                hindi: "पूर्वा फाल्गिनी में चंद्रमा",
            },
            effect: {
                english:
                    "Pubba-Sweet speech, liberal, handsome, fond of traveling and royal servant.",
                hindi: "पुब्बा-मीठी वाणी, उदार, सुन्दर, यात्रा का शौकीन और राजसेवक।",
            },
            rule: planets.Moon.nakshatra.name.english == "PurvaPhalguni",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Uttara Phalguni",
                hindi: "उत्तरा फाल्गुनी में चंद्रमा",
            },
            effect: {
                english:
                    "Uttara-Popular, self-acquired property, enjoying and happy.",
                hindi: "उत्‍तर - लोकप्रिय, स्वअर्जित संपत्ति, आनंदित एवं सुखी।",
            },
            rule: planets.Moon.nakshatra.name.english == "UttaraPhalguni",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Hasta",
                hindi: "हस्त में चंद्रमा",
            },
            effect: {
                english:
                    "Hasta-Enterprising, intelligent or (shameless), drunkard, cruel and thievish.",
                hindi: "हस्त-उद्यमी, बुद्धिमान या (बेशर्म), शराबी, क्रूर और चोर।",
            },
            rule: planets.Moon.nakshatra.name.english == "Hasta",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Chitra",
                hindi: "चित्रा में चंद्रमा",
            },
            effect: {
                english:
                    "Chitra-Using various clothes and garlands, good looks and limbs.",
                hindi: "चित्रा-विभिन्न वस्त्र और मालाओं, सुन्दर रूप और अंगों का प्रयोग।",
            },
            rule: planets.Moon.nakshatra.name.english == "Chitra",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Swati",
                hindi: "स्वाति में चंद्रमा",
            },
            effect: {
                english:
                    "Swati-Polite, merchant, kind hearted, not able to endure thirst, sweet tongued and generous.",
                hindi: "स्वाति-विनम्र, व्यापारी, दयालु, प्यास सहन न करने वाली, मधुरभाषी और उदार।",
            },
            rule: planets.Moon.nakshatra.name.english == "Swati",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Vishakha",
                hindi: "विशाखा में चंद्रमा",
            },
            effect: {
                english:
                    "Visakha-Jealous, avaricious, handsome, clever speaker and quarrelsome, or maker of money.",
                hindi: "विशाखा- ईर्ष्यालु, लोभी, सुन्दर, चतुर वक्ता और झगड़ालू, या धन कमाने वाला।",
            },
            rule: planets.Moon.nakshatra.name.english == "Vishakha",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Anuradha",
                hindi: "अनुराधा में चंद्रमा",
            },
            effect: {
                english:
                    "Anuradha-Master or chief, living in foreign countries, not able to bear hunger and fond of traveling.",
                hindi: "अनुराधा- स्वामी या मुखिया, विदेश में रहने वाला, भूख सहन न कर पाने वाला तथा यात्रा का शौकीन।",
            },
            rule: planets.Moon.nakshatra.name.english == "Anuradha",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Jyeshtha",
                hindi: "ज्येष्ठ माह में चंद्रमा",
            },
            effect: {
                english:
                    "Jyeshta-Few friends, contented, charitable, very irritable.",
                hindi: "ज्येष्ठा- कम मित्र, संतुष्ट, दानशील, बहुत चिड़चिड़ा।",
            },
            rule: planets.Moon.nakshatra.name.english == "Jyeshtha",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Mula",
                hindi: "मूला में चंद्रमा",
            },
            effect: {
                english: "Mula-Proud, rich happy, good, steady and enjoying.",
                hindi: "मूला- गर्वित, धनी, सुखी, अच्छा, स्थिर और आनंदित।",
            },
            rule: planets.Moon.nakshatra.name.english == "Mula",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Purva Shadha",
                hindi: "पूर्वाषाढ़ा में चंद्रमा",
            },
            effect: {
                english:
                    "Purvashada-Good and pleasant wife, proud and a steady friend.",
                hindi: "पूर्वाषाढ़ा-अच्छी और सुखद पत्नी, गौरवान्वित और स्थिर मित्र।",
            },
            rule: planets.Moon.nakshatra.name.english == "PurvaShadha",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in UttaraShadha",
                hindi: "उत्तराषाढ़ा में चंद्रमा",
            },
            effect: {
                english:
                    "Uttarashada-Polite, knowing, virtuous, many friends, grateful and popular.",
                hindi: "उत्तराषाढ़ा-विनम्र, ज्ञानी, गुणवान, अनेक मित्र, कृतज्ञ और लोकप्रिय।",
            },
            rule: planets.Moon.nakshatra.name.english == "UttaraShadha",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Sravana",
                hindi: "श्रावण में चंद्रमा",
            },
            effect: {
                english:
                    "Sravana-Rich surroundings, learned, good and liberal or liberal to wife, wealthy and renowned.",
                hindi: "श्रवण-समृद्ध परिवेश, विद्वान, अच्छा और उदार या पत्नी के प्रति उदार, धनी और प्रसिद्ध।",
            },
            rule: planets.Moon.nakshatra.name.english == "Sravana",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Dhanishta",
                hindi: "धनिष्ठा में चंद्रमा",
            },
            effect: {
                english:
                    "Dhanishta-Liberal, rich, courageous, fond of music and money.",
                hindi: "धनिष्ठा- उदार, धनी, साहसी, संगीत और धन का शौकीन।",
            },
            rule: planets.Moon.nakshatra.name.english == "Dhanishta",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Shatabhisha",
                hindi: "शतभिषा में चंद्रमा",
            },
            effect: {
                english:
                    "Satabhisha-Plain and truthful, striken from sorrow through females, etc., killer of enemies, adventurous and irreconcilable.",
                hindi: "शतभिषा- स्पष्टवादी, सत्यवादी, स्त्रियों आदि के द्वारा दुःख से पीड़ित, शत्रुओं का संहारक, साहसी और असाध्य।",
            },
            rule: planets.Moon.nakshatra.name.english == "Shatabhisha",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Purva Bhadra",
                hindi: "पूर्वाभाद्रपद में चंद्रमा",
            },
            effect: {
                english:
                    "Poorvabhadra-Sorrowful, loss of money through females, skilful and miserly.",
                hindi: "पूर्वभद्रा-दुःखी, स्त्रियों के द्वारा धन की हानि, कुशल और कंजूस।",
            },
            rule: planets.Moon.nakshatra.name.english == "PurvaBhadra",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Uttara Bhadra",
                hindi: "उत्तरा भाद्रपद में चंद्रमा",
            },
            effect: {
                english:
                    "Uttarabhadra-Good and witty speaker in society and meetings, happy, many children and grandchildren, successful over enemies and charitable.",
                hindi: "उत्तराभाद्र-समाज और सभाओं में अच्छा और विनोदी वक्ता, सुखी, अनेक संतान और पौत्रों वाला, शत्रुओं पर विजय पाने वाला और दानशील।",
            },
            rule: planets.Moon.nakshatra.name.english == "UttaraBhadra",
            highervargas: false,
        },
        {
            description: {
                english: "Moon in Revati",
                hindi: "रेवती में चंद्रमा",
            },
            effect: {
                english:
                    "Revati-Well, developed organs, popular, courageous, clean and wealthy. developed organs, popular, courageous, clean and wealthy.",
                hindi: "रेवती-अच्छी तरह विकसित अंग, लोकप्रिय, साहसी, स्वच्छ और धनवान। विकसित अंग, लोकप्रिय, साहसी, स्वच्छ और धनवान।",
            },
            rule: planets.Moon.nakshatra.name.english == "Revati",
            highervargas: false,
        },
    ];
}
