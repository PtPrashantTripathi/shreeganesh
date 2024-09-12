pha = () => {
    g = grahas.grahas.slice();
    surya = getRasi(g[0]);
    suryab = Bhaava(g[0]);
    chandra = getRasi(g[1]);
    chandrab = Bhaava(g[1]);
    chandran = naks(g[1]);
    mangal = getRasi(g[2]);
    mangalb = Bhaava(g[2]);
    budh = getRasi(g[3]);
    budhb = Bhaava(g[3]);
    guru = getRasi(g[4]);
    gurub = Bhaava(g[4]);
    shukra = getRasi(g[5]);
    shukrab = Bhaava(g[5]);
    shani = getRasi(g[6]);
    shanib = Bhaava(g[6]);
    rahu = getRasi(g[7]);
    rahub = Bhaava(g[7]);
    ketu = getRasi(reddeg(g[7] + 180));
    ketub = Bhaava(reddeg(g[7] + 180));
    lagna = getRasi(g[8]);
    House1 = 0;
    House2 = 1;
    House3 = 2;
    House4 = 3;
    House5 = 4;
    House6 = 5;
    House7 = 6;
    House8 = 7;
    House9 = 8;
    House10 = 9;
    House11 = 10;
    House12 = 11;
  
    phala = [
      //10ascedentMantreshwar
      {
        group: "Ascendant",
        rule: lagna == 0,
        des: "Ascendant in Aries(मेष लग्न)",
        sou: "Phala Deepika",
        result:
          "If the Ascendant falls in Aries, the native will have round eyes. His knees will be weak and he will have aggressive temperament but he will be afraid of water. He will be active and will always be moving about. His limbs will be bruised. He will eat sparigly and will be passionate. He will speak falsehoods.",
      },
      {
        group: "Ascendant",
        rule: lagna == 1,
        des: "Ascendant in Taurus(बृषभ लग्न)",
        sou: "Phala Deepika",
        result:
          "The person born with Taurus as the Ascendant, will have plumply thighs and a big face. He will be engaged in agricultural ventures. He will be happy in the middle and last portions of his life. He will be fond of enjoying young women. He will be of sacrificing and forgiving nature, will be capable of endowing hardships and will possess cattle. He will have marks or moles on the back, face and sides.",
      },
      {
        group: "Ascendant",
        rule: lagna == 2,
        des: "Ascendant in Gemini(मिथुन लग्न)",
        sou: "Phala Deepika",
        result:
          "When the Ascendant is Gemini, the native will have balck eyes and curly hair. He will enjoy association with women and will have thick neck and many friends. He will be intelligent and mind reader. His nose will be elevated and he will be fond of music and dancing. He will like to remain indoors.",
      },
      {
        group: "Ascendant",
        rule: lagna == 3,
        des: "Ascendant in Cancer(कर्क लग्न)",
        sou: "Phala Deepika",
        result:
          "Person with Cancer as the Ascendant will be henpacked. He will have a thick neck and will be fond of making friendships. He will possess many houses and will be wealthy. His waist will be thick but he will be short statured. He will be intelligent and fond of watery sports like swimming etc. He will walk fast and will have few sons. He will be crooked.",
      },
      {
        group: "Ascendant",
        rule: lagna == 4,
        des: "Ascendant in Leo(सिंह लग्न)",
        sou: "Phala Deepika",
        result:
          "A person whose Ascendant is Leo will have reddish eyes, large chin and broad face. He will be arrogant, Powerful valiant, firm minded and obedient to his mother. He will be fond of roaming about in forests and hills. He will get angry on trifles",
      },
      {
        group: "Ascendant",
        rule: lagna == 5,
        des: "Ascendant in Virgo(कन्या लग्न)",
        sou: "Phala Deepika",
        result:
          "The person born with Virgo as the Ascendant, will be truthful and will speak kindly. His eyes will be full of bashfulness and will be immediately liked by others. He will be well versed in Shastras and will take advantage of other people`s houses and wealth. His arms and shoulders will be drooped and will possess few sons.",
      },
      {
        group: "Ascendant",
        rule: lagna == 6,
        des: "Ascendant in Libra(तुला लग्न )",
        sou: "Phala Deepika",
        result:
          "If the Ascendant be Libra, the person born will rever gods, and Brahmins but he will be active and will possess a lean and thin body. He will be tall in stature, deft in trading, patient and intent on being first. He will often have two names. He will have few children and he will be fond of wandering. He will be brave, merciless and impartial In his arguments.",
      },
      {
        group: "Ascendant",
        rule: lagna == 7,
        des: "Ascendant in Scorpio(वृश्चिक लग्न)",
        sou: "Phala Deepika",
        result:
          "The person with Scorpio Ascendant at birth, will have rounded thighs and knees. His chest will be broad and eyes expansive. He will suffer from diseases from an early age. He will beseperated from his parents and preceptor. He will indulge In cruel actions and will be honoured by the king. His feet will bear marks of lotus.",
      },
      {
        group: "Ascendant",
        rule: lagna == 8,
        des: "Ascendant in Sagittarius(धनु लग्न)",
        sou: "Phala Deepika",
        result:
          "The person with Sagittarius Ascendant at birth — His face and neck will be long and his nose and ears will be big. He will always keep himself engaged in some work or the other. He will be eloquent in speech and self sacrificing. He will have a short stature. He will be courageous and will overcome his enemies. He will be wealthy and favourite of the king. He can be won over by persuation and kindness.",
      },
      {
        group: "Ascendant",
        rule: lagna == 9,
        des: "Ascendant in Capricorn(मकर लग्न)",
        sou: "Phala Deepika",
        result:
          "When Capricorn is the Ascendant at birth, his lower limbs will be weak. He will have vitality. He will accept other people`s advice but will be lazy by nature. He will indulge in affairs with old women of the forbidden category. He will be a religious hypocrite. He will be fond of wandering. He will be fortunate but shameless. He will suffer from wind-diseases.",
      },
      {
        group: "Ascendant",
        rule: lagna == 10,
        des: "Ascendant in Aquarius(कुंभ लग्न)",
        sou: "Phala Deepika",
        result:
          "The person at whose birth Aquarius is the Ascendant, will commit sinful actions secretly. He will have little wealth, will be greedy and eager to usurp or utilise other people`s money. He will endure long marches on road and will be clever in causing hurt to others. He will have a body like a water pot. He will be fond of perfumes and flowers. His financial position will be of a fluctuating nature.",
      },
      {
        group: "Ascendant",
        rule: lagna == 11,
        des: "Ascendant in Pisces(मीन लग्न)",
        sou: "Phala Deepika",
        result:
          "The Pisces ascendant native will have a beautiful and symmetrical body. His eyes will be very attractive. He will be learned, grateful, satisfied with his wife and fortune. He will have financial gains from selling produce of the seas. He will overcome his enemies.",
      },
      //20housesSaravali
      {
        group: "House_Position",
        rule: suryab == 0,
        des: "Sun in 1",
        sou: "Saravali",
        result:
          "The Sun in the Ascendant denotes, that the native will have less hair (on the head), be lazy in function, given to anger, will have prominent personality, be honourable, will have weak sight and coarse physique, be courageous, impatient and unkind. If the Ascendant is Cancer and is occupied by the Sun, the native will have swollen eyes, if it be Aries with Sun therein, his sight will be weak and in Leo the Sun makes him night-blind. One suffers poverty and loss of children, if the Sun occupies Libra.",
      },
      {
        group: "House_Position",
        rule: suryab == 1,
        des: "Sun in 2",
        sou: "Saravali",
        result:
          "If the Sun is in the 2nd Bhava, the native will be endowed with servants and quadrupeds, will suffer facial diseases, will be deprived of happiness and wealth and will lose money through royal displeasure, or through thieves.",
      },
      {
        group: "House_Position",
        rule: suryab == 2,
        des: "Sun in 3",
        sou: "Saravali",
        result:
          "Should the Sun be in 3rd, the native will be valorous, strong, will lose co-born, be dear to people, good-looking, very learned and will conquer his enemies.",
      },
      {
        group: "House_Position",
        rule: suryab == 3,
        des: "Sun in 4",
        sou: "Saravali",
        result:
          "Should the Sun be in 4th, the native will be devoid of conveyances and relatives, will suffer heart diseases, will destroy paternal house and wealth and will serve a bad king.",
      },
      {
        group: "House_Position",
        rule: suryab == 4,
        des: "Sun in 5",
        sou: "Saravali",
        result:
          "If the Sun occupies the 5th, the native will be bereft of happiness, sons and wealth, will live by husbandry, will move in hills and fortresses, be fickle-minded, scholarly, devoid of strength and be short-lived.",
      },
      {
        group: "House_Position",
        rule: suryab == 5,
        des: "Sun in 6",
        sou: "Saravali",
        result:
          "If the Sun is in 6th, the native will be very libidinous, will have powerful digestive fire (capable of digesting fast), be strong, affluent, famous for virtues and be either a king, or an Army chief.",
      },
      {
        group: "House_Position",
        rule: suryab == 6,
        des: "Sun in 7",
        sou: "Saravali",
        result:
          "If the Sun is posited in 7th, the native will be poor, insulted, will suffer bodily diseases, royal displeasures and imprisonment, will take to bad ways and will not be well-disposed to his wife.",
      },
      {
        group: "House_Position",
        rule: suryab == 7,
        des: "Sun in 8",
        sou: "Saravali",
        result:
          "If the Sun occupies the 8th, the native will have deformed eyes, be devoid of wealth and happiness, be short-lived and will suffer separation from his relatives.",
      },
      {
        group: "House_Position",
        rule: suryab == 8,
        des: "Sun in 9",
        sou: "Saravali",
        result:
          "If the Sun occupies the 9th, the native will be endowed with wealth, children and friends, will be very interested in worshipping Gods and Brahmins, will not be well-disposed towards his father and wife and be not calm.",
      },
      {
        group: "House_Position",
        rule: suryab == 9,
        des: "Sun in 10",
        sou: "Saravali",
        result:
          "Should the Sun be in 10th, the native will be extremely intelligent, rich, strong and will be endowed with conveyances, relatives and sons, will succeed in his undertakings, be valorous, unconquerable and great.",
      },
      {
        group: "House_Position",
        rule: suryab == 10,
        des: "Sun in 11",
        sou: "Saravali",
        result:
          "Should the Sun be in 11th, one will be interested in gathering money, be strong, will hate others, be devoid of servants, be himself a servant, be devoid of affection, be modest and will be successful in undertakings.",
      },
      {
        group: "House_Position",
        rule: suryab == 11,
        des: "Sun in 12",
        sou: "Saravali",
        result:
          "If the Sun is in 12th at birth, he will have a deformed physique, be one-eyed, fallen (morally), will marry a barren lady, be inimical to his father, weak and mean.",
      },
      {
        group: "House_Position",
        rule: chandrab == 0,
        des: "Moon in 1",
        sou: "Saravali",
        result:
          "The Moon in the Ascendant identical with Cancer, Taurus, or Aries indicates, that the native will be liberal, beautiful, rich and enjoying pleasures greatly. The Moon in the Ascendant identical with other Signs indicates, that the native will be intensely passionate, base, deaf, distressed, dumb and will decline (in prosperity).",
      },
      {
        group: "House_Position",
        rule: chandrab == 1,
        des: "Moon in 2",
        sou: "Saravali",
        result:
          "Should the Moon be in 2nd, the native will enjoy incomparable happiness and friends and be wealthy. If the said Moon be Full, the native will be very affluent and will speak less.",
      },
      {
        group: "House_Position",
        rule: chandrab == 2,
        des: "Moon in 3",
        sou: "Saravali",
        result:
          "Should the Moon be in 3rd, the native will protect his co-born, be always delighted, valorous and will be endowed with learning, robes and food.",
      },
      {
        group: "House_Position",
        rule: chandrab == 3,
        des: "Moon in 4",
        sou: "Saravali",
        result:
          "If the Moon be in 4th, the native will be endowed with relatives, paraphernalia and conveyances, be charitable, fond of travelling by water and will neither be very happy nor be miserable.",
      },
      {
        group: "House_Position",
        rule: chandrab == 4,
        des: "Moon in 5",
        sou: "Saravali",
        result:
          "Should the Moon be in 5th, the native will be timid in disposition, will earn learning, clothes and food, will have many sons and friends, be a scholar and be passionate.",
      },
      {
        group: "House_Position",
        rule: chandrab == 5,
        des: "Moon in 6",
        sou: "Saravali",
        result:
          "If the Moon be in 6th, the native will suffer stomachial diseases. If it be the weak Moon, he will be short-lived.",
      },
      {
        group: "House_Position",
        rule: chandrab == 6,
        des: "Moon in 7",
        sou: "Saravali",
        result:
          "If the Moon is in 7th, the native will be amiable, happy, will possess a good physique and be sensuously disposed. If the weak Moon is in 7th, the native will be pitiable and weak.",
      },
      {
        group: "House_Position",
        rule: chandrab == 7,
        des: "Moon in 8",
        sou: "Saravali",
        result:
          "If the Moon is in 8th, the native will be very intelligent, very splendourous and will suffer from diseases. If the Moon be weak, he will be short-lived.",
      },
      {
        group: "House_Position",
        rule: chandrab == 8,
        des: "Moon in 9",
        sou: "Saravali",
        result:
          "If the Moon is in 9th, the native will be devoted to divine and paternal assignments, will be endowed with happiness, wealth, intelligence and sons and will attract the fair sex.",
      },
      {
        group: "House_Position",
        rule: chandrab == 9,
        des: "Moon in 10",
        sou: "Saravali",
        result:
          "If the Moon occupies the 10th, the native will not suffer grief, be dutiful, successful in his undertakings, affluent, pure, very strong, valorous and charitable.",
      },
      {
        group: "House_Position",
        rule: chandrab == 10,
        des: "Moon in 11",
        sou: "Saravali",
        result:
          "Should the Moon occupy the 11th, the native will be wealthy, will have many sons, be long-lived, will have attendants to serve, be intelligent, sharp, valorous and splendourous.",
      },
      {
        group: "House_Position",
        rule: chandrab == 11,
        des: "Moon in 12",
        sou: "Saravali",
        result:
          "If the Moon occupies the 12th, the native will be odious, fallen in moral sense, mean, will suffer eye diseases, be indolent, distressed (deformed), is born of other`s loins and will be insulted at all times.",
      },
      {
        group: "House_Position",
        rule: mangalb == 0,
        des: "Mars in 1",
        sou: "Saravali",
        result:
          "If Mars occupies the Ascendant, the native will be cruel, adventurous, dull-witted, short-lived, honourable, courageous, will have an injured physique, be attractive in appearance and fickle-minded.",
      },
      {
        group: "House_Position",
        rule: mangalb == 1,
        des: "Mars in 2",
        sou: "Saravali",
        result:
          "If Mars occupies the 2nd, the native will be poor, will eat bad food, will possess an ugly face, will join bad men and be bereft of learning.",
      },
      {
        group: "House_Position",
        rule: mangalb == 2,
        des: "Mars in 3",
        sou: "Saravali",
        result:
          "If Mars be in 3rd, the native will be courageous, unconquerable, bereft of co-born, be delighted, will have all virtues and be famous.",
      },
      {
        group: "House_Position",
        rule: mangalb == 3,
        des: "Mars in 4",
        sou: "Saravali",
        result:
          "If Mars is posited in 4th, the native will be devoid of relatives, paraphernalia and conveyances, be very miserable, will live in others` houses and be distressed.",
      },
      {
        group: "House_Position",
        rule: mangalb == 4,
        des: "Mars in 5",
        sou: "Saravali",
        result:
          "If Mars occupies the 5th, the native will be devoid of happiness, wealth and sons, be fickle-minded, be a talebearer, will incur evils, be wicked, distressed and mean.",
      },
      {
        group: "House_Position",
        rule: mangalb == 5,
        des: "Mars in 6",
        sou: "Saravali",
        result:
          "If Mars occupies the 6th, the native will be highly libidinous, will have powerful digestive fire, be beautiful, tall, strong and great among his relatives.",
      },
      {
        group: "House_Position",
        rule: mangalb == 6,
        des: "Mars in 7",
        sou: "Saravali",
        result:
          "If Mars is posited in 7th, the native will lose his wife, will suffer from diseases, will take to bad ways, be miserable, sinful, devoid of wealth, distressed and emaciated.",
      },
      {
        group: "House_Position",
        rule: mangalb == 7,
        des: "Mars in 8",
        sou: "Saravali",
        result:
          "If Mars occupies the 8th, the native will suffer from diseases, be short-lived, will possess an ugly, or deformed body, will do base acts and will suffer grief.",
      },
      {
        group: "House_Position",
        rule: mangalb == 8,
        des: "Mars in 9",
        sou: "Saravali",
        result:
          "If Mars occupies the 9th, the native will not be skillful in acts, be odious, will kill living beings, be not virtuous, be very sinful and honoured by the king.",
      },
      {
        group: "House_Position",
        rule: mangalb == 9,
        des: "Mars in 10",
        sou: "Saravali",
        result:
          "If Mars occupies the 10th, the native will be proficient in his acts, be valorous, unconquerable, will serve important people, be endowed with sons and happiness and be very courageous.",
      },
      {
        group: "House_Position",
        rule: mangalb == 10,
        des: "Mars in 11",
        sou: "Saravali",
        result:
          "If Mars occupies the 11th, the native will be virtuous, happy, courageous, endowed with wealth, grains and sons and be devoid of sorrow.",
      },
      {
        group: "House_Position",
        rule: mangalb == 11,
        des: "Mars in 12",
        sou: "Saravali",
        result:
          "Should Mars be in 12th, the native will have diseased eyes, will fall in moral sense, will kill his wife, be a talebearer, be fierce and will contract humility and imprisonment.",
      },
      {
        group: "House_Position",
        rule: budhb == 0,
        des: "Mercury in 1",
        sou: "Saravali",
        result:
          "If Mercury is in the 2nd, the native will earn wealth through his own wisdom, will enjoy food and drinks, be auspicious in speech and will have good course of conduct.",
      },
      {
        group: "House_Position",
        rule: budhb == 1,
        des: "Mercury in 2",
        sou: "Saravali",
        result:
          "If Mercury occupies the 3rd, the native will always toil hard, be devoid of near and dear, skillful, endowed with co-born, very cunning and fickle-minded.",
      },
      {
        group: "House_Position",
        rule: budhb == 2,
        des: "Mercury in 3",
        sou: "Saravali",
        result:
          "If Mercury is in 4th, the native will be endowed with money and relatives, be fortunate, will have conveyances, all paraphernalia and relatives and be very learned.",
      },
      {
        group: "House_Position",
        rule: budhb == 3,
        des: "Mercury in 4",
        sou: "Saravali",
        result:
          "If Mercury occupies the 5th, the native will be an expert in Mantras (sacred spells) and Abhicara (malevolent spells), will have many sons, be endowed with learning, happiness and efficacy and be delighted.",
      },
      {
        group: "House_Position",
        rule: budhb == 4,
        des: "Mercury in 56",
        sou: "Saravali",
        result:
          "If Mercury occupies the 6th, the native will always be successful in litigations and disputes, will contract diseases, be indolent, not given to anger, be harsh in speech and much insulted.",
      },
      {
        group: "House_Position",
        rule: budhb == 5,
        des: "Mercury in 7",
        sou: "Saravali",
        result:
          "If Mercury is in 7th, the native`s wife will be very learned, beautiful in appearance, will not be of good descent, will promote quarrels and be very affluent. The native himself will be very great.",
      },
      {
        group: "House_Position",
        rule: budhb == 6,
        des: "Mercury in 8",
        sou: "Saravali",
        result:
          "If Mercury occupies the 8th, the native will win famous names (titles), be strong, long-lived, will support his family and be equal to a king, or will become a justice.",
      },
      {
        group: "House_Position",
        rule: budhb == 7,
        des: "Mercury in 9",
        sou: "Saravali",
        result:
          "If Mercury occupies the 9th, the native will be very affluent, scholarly, of good conduct/habits, be eloquent in speech, skillful of a great order and be virtuous.",
      },
      {
        group: "House_Position",
        rule: budhb == 9,
        des: "Mercury in 10",
        sou: "Saravali",
        result:
          "If Mercury occupies the 10th, the native will possess distinguished intelligence, will perform distinguished acts, will attain fruition in undertakings, be very learned, courageous, strong and will be endowed with various kinds of ornaments.",
      },
      {
        group: "House_Position",
        rule: budhb == 10,
        des: "Mercury in 11",
        sou: "Saravali",
        result:
          "If Mercury occupies the 11th, the native will be rich, be an amicable worker, be learned, happy and endowed with wide enjoyments, be long-lived and famous.",
      },
      {
        group: "House_Position",
        rule: budhb == 11,
        des: "Mercury in 12",
        sou: "Saravali",
        result:
          "Should Mercury be in the 12th, the native will be able to keep up his promise, be indolent, be humiliated, be a good speaker, be learned, pitiable and cruel.",
      },
      {
        group: "House_Position",
        rule: gurub == 0,
        des: "Jupiter in 1",
        sou: "Saravali",
        result:
          "If Jupiter occupies the 1st, the native will be attractive in appearance, energetic, long-lived, will act after assessing consequences, be learned, courageous and great.",
      },
      {
        group: "House_Position",
        rule: gurub == 1,
        des: "Jupiter in 2",
        sou: "Saravali",
        result:
          "Jupiter in the 2nd. If Jupiter occupies the 2nd, the native will be rich, will enjoy good food, be an eloquent speaker, be fortunate, be charitable and will have a beautiful body and face.",
      },
      {
        group: "House_Position",
        rule: gurub == 2,
        des: "Jupiter in 3",
        sou: "Saravali",
        result:
          "If Jupiter occupies the 3rd, the native will be greatly humiliated, be vile, ever successful, will have digestive deficiencies, be defeated by women and be sinful in acts.",
      },
      {
        group: "House_Position",
        rule: gurub == 3,
        des: "Jupiter in 4",
        sou: "Saravali",
        result:
          "If Jupiter occupies the 4th, the native will be endowed with relatives, paraphernalia, conveyance, happiness, intelligence, pleasures and wealth, be great and be a source of misery to his enemies.",
      },
      {
        group: "House_Position",
        rule: gurub == 4,
        des: "Jupiter in 5",
        sou: "Saravali",
        result:
          "If Jupiter occupies the 5th, the native will have abundant happiness, many sons and friends, be learned, courageous, wealthy and will always be happy.",
      },
      {
        group: "House_Position",
        rule: gurub == 5,
        des: "Jupiter in 6",
        sou: "Saravali",
        result:
          "If Jupiter is in the 6th, the native will lack digestive fire and masculine virile, be humiliated, weak, indolent, will become famous on account of females, will destroy his enemies and be widely famous.",
      },
      {
        group: "House_Position",
        rule: gurub == 6,
        des: "Jupiter in 7",
        sou: "Saravali",
        result:
          "If Jupiter occupies the 7th, the native will be charming, will acquire a beautiful wife, be greater than his father, be an eloquent speaker, a poet, a superior person and be learned and famous.",
      },
      {
        group: "House_Position",
        rule: gurub == 7,
        des: "Jupiter in 8",
        sou: "Saravali",
        result:
          "If Jupiter occupies the 8th, the native will be insulted, long-lived, be a servant, will serve his own people, be pitiable and will have union with dirty women.",
      },
      {
        group: "House_Position",
        rule: gurub == 8,
        des: "Jupiter in 9",
        sou: "Saravali",
        result:
          "If Jupiter is in 9th, the native will be attached to divine and paternal duties, be learned, fortunate, be a king`s minister, or a leader and be chief.",
      },
      {
        group: "House_Position",
        rule: gurub == 9,
        des: "Jupiter in 10",
        sou: "Saravali",
        result:
          "If Jupiter occupies the 10th, the native will attain successful beginning in his undertaking, be honourable, effortful and will be endowed with abundant welfare, happiness, wealth, relatives, conveyances and fame.",
      },
      {
        group: "House_Position",
        rule: gurub == 10,
        des: "Jupiter in 11",
        sou: "Saravali",
        result:
          "If Jupiter occupies the 11th, the native will enjoy many gains, many conveyances and many servants, be virtuous, but will have limited education and few sons.",
      },
      {
        group: "House_Position",
        rule: gurub == 11,
        des: "Jupiter in 12",
        sou: "Saravali",
        result:
          "If Jupiter occupies the 12th, the native will be indolent, odious, be devoid of speech and luck and will be in all probability in servitude.",
      },
      {
        group: "House_Position",
        rule: shukrab == 0,
        des: "Venus in 1",
        sou: "Saravali",
        result:
          "If Venus is in Ascendant, the native will possess beautiful eyes, face and physique, be happy, long-lived, timid and attractive to females.",
      },
      {
        group: "House_Position",
        rule: shukrab == 1,
        des: "Venus in 2",
        sou: "Saravali",
        result:
          "If Venus is in the 2nd, the native will enjoy abundant food, drinks and wealth, will derive excellent pleasures, be endowed with good speech and will amass great wealth.",
      },
      {
        group: "House_Position",
        rule: shukrab == 2,
        des: "Venus in 3",
        sou: "Saravali",
        result:
          "If Venus occupies the 3rd, the native will be happy, rich, conquered by women, be vile, little enthusiastic and will be bereft of luck and paraphernalia.",
      },
      {
        group: "House_Position",
        rule: shukrab == 3,
        des: "Venus in 4",
        sou: "Saravali",
        result:
          "If Venus occupies the 4th, the native will be endowed with relatives, friends and happiness, be splendourous, will have conveyances and paraphernalia, be beautiful, rich and fortunate.",
      },
      {
        group: "House_Position",
        rule: shukrab == 4,
        des: "Venus in 5",
        sou: "Saravali",
        result:
          "If Venus is posited in the 5th, the native will be endowed with happiness, sons and friends, be fond of sexual union, be very affluent, full of everything and be a minister, or a justice.",
      },
      {
        group: "House_Position",
        rule: shukrab == 5,
        des: "Venus in 6",
        sou: "Saravali",
        result:
          "If Venus occupies the 6th, the native will greatly dislike his wife, will have many foes, be devoid of wealth, be very much startled and be mean.",
      },
      {
        group: "House_Position",
        rule: shukrab == 6,
        des: "Venus in 7",
        sou: "Saravali",
        result:
          "If Venus occupies the 7th, the native will be very beautiful, be happy with his wife, will enjoy great riches, be devoid of quarrels and be fortunate.",
      },
      {
        group: "House_Position",
        rule: shukrab == 7,
        des: "Venus in 8",
        sou: "Saravali",
        result:
          "If Venus is in the 8th, the native will be long-lived, will enjoy incomparable happiness, be very rich, be equal to a king and moment after moment will feel delighted.",
      },
      {
        group: "House_Position",
        rule: shukrab == 8,
        des: "Venus in 9",
        sou: "Saravali",
        result:
          "If Venus occupies the 9th, the native will possess a spotless and broad physique, be endowed with wealth, charitable, wife, sexual pleasures and friendship and will honour Gods, guests and preceptors/elders.",
      },
      {
        group: "House_Position",
        rule: shukrab == 9,
        des: "Venus in 10",
        sou: "Saravali",
        result:
          "Should Venus occupy the 10th, the native will earn success in litigations and will be endowed with happiness, sexual unions, honour, wealth, fame and great wisdom.",
      },
      {
        group: "House_Position",
        rule: shukrab == 10,
        des: "Venus in 11",
        sou: "Saravali",
        result:
          "If Venus is positioned in 11th, the native will have obedient servants, be bereft of all kinds of misery and will gain abundantly.",
      },
      {
        group: "House_Position",
        rule: shukrab == 11,
        des: "Venus in 12",
        sou: "Saravali",
        result:
          "Should Venus be in 12th, the native will be indolent, happy, corpulent, fallen in moral sense, will eat cleansed food, will be skillful in providing sleeping comforts and attendants and will be won over by women.",
      },
      {
        group: "House_Position",
        rule: shanib == 0,
        des: "Saturn in 1",
        sou: "Saravali",
        result:
          "If Saturn happens to be in the Ascendant identical with exaltation, or own House, the native will equal a king in status, or will head a country, or city. If Saturn is in the Ascendant in other Rasis, then his own, or exaltation Rasi, the planet will give misery in boyhood, dirty disposition and indolence.",
      },
      {
        group: "House_Position",
        rule: shanib == 1,
        des: "Saturn in 2",
        sou: "Saravali",
        result:
          "If Saturn occupies the 2nd, the native will have an ugly face, will enjoy worldly prosperity, be devoid of his own men, will render justice, will later on (in the course of his life) go to other countries and will earn money and conveyances.",
      },
      {
        group: "House_Position",
        rule: shanib == 2,
        des: "Saturn in 3",
        sou: "Saravali",
        result:
          "If Saturn occupies the 3rd, the native will be dark in complexion, will maintain physical cleanliness, be base, will have indolent attendants, be courageous, charitable and will have great intelligence.",
      },
      {
        group: "House_Position",
        rule: shanib == 3,
        des: "Saturn in 4",
        sou: "Saravali",
        result:
          "If Saturn occupies the 4th Bhava, the native will suffer heart disease, or be broken-hearted, be devoid of relatives, conveyances, wealth, intelligence and happiness, will suffer sickness in boyhood and will have (prominent) nails and hair.",
      },
      {
        group: "House_Position",
        rule: shanib == 4,
        des: "Saturn in 5",
        sou: "Saravali",
        result:
          "Should Saturn occupy the 5th Bhava, the native will be bereft of happiness, sons, friends, intelligence and kindness, be agitated and be poor.",
      },
      {
        group: "House_Position",
        rule: shanib == 5,
        des: "Saturn in 6",
        sou: "Saravali",
        result:
          "If Saturn occupies the 6th, the native will be very licentious, be beautiful, courageous, will eat abundantly, be crooked and will conquer many of his enemies.",
      },
      {
        group: "House_Position",
        rule: shanib == 6,
        des: "Saturn in 7",
        sou: "Saravali",
        result:
          "If Saturn is posited in the 7th, the native will always be subjected to ill health, will lose his wife, be bereft of wealth, will present himself ugly, be sinful and will do very mean acts.",
      },
      {
        group: "House_Position",
        rule: shanib == 7,
        des: "Saturn in 8",
        sou: "Saravali",
        result:
          "If Saturn occupies the 8th, the native will suffer from leprosy and fistula in the anus, or pudendum, will have short life and will fail in his undertakings.",
      },
      {
        group: "House_Position",
        rule: shanib == 8,
        des: "Saturn in 9",
        sou: "Saravali",
        result:
          "If Saturn occupies the 9th, the native will be devoid of religious merits, will not have much wealth, be bereft of co-born, sons and happiness and will cause sorrow to others.",
      },
      {
        group: "House_Position",
        rule: shanib == 9,
        des: "Saturn in 10",
        sou: "Saravali",
        result:
          "If Saturn occupies the 10th, the native will be wealthy, learned, valorous and be a minister, or a justice, or be the leader of a group, city, or village.",
      },
      {
        group: "House_Position",
        rule: shanib == 10,
        des: "Saturn in 11",
        sou: "Saravali",
        result:
          "If Saturn occupies the 11th, the native will be long-lived, endowed with lasting riches, be courageous, will have knowledge of arts, be devoid of sickness and be endowed with money, people and wealth.",
      },
      {
        group: "House_Position",
        rule: shanib == 11,
        des: "Saturn in 12",
        sou: "Saravali",
        result:
          "If Saturn occupies the 12th, the native will be distressed, fallen in moral sense, talkative, will have defective eyesight, be unkind, shameless, will spend much and be insulted.",
      },
      //21housesMantreshwar
      {
        group: "House_Position",
        rule: suryab == 0,
        des: "Sun in 1",
        sou: "Phala Deepika",
        result:
          "If the Sun be In the 1st house at birth, the native will have scanty hair. He will be lazy, of hot disposition, impetuous and tall In stature. He will have soiled eyes and a lean and thin body. He will be cruel, impatient and valourous.",
      },
      {
        group: "House_Position",
        rule: suryab == 1,
        des: "Sun in 2",
        sou: "Phala Deepika",
        result:
          "When the Sun is in the 2nd house at birth, the person concerned will be without any learning; he will be shameless and will be stammering.",
      },
      {
        group: "House_Position",
        rule: suryab == 2,
        des: "Sun in 3",
        sou: "Phala Deepika",
        result:
          "Should the Sun occupy the 3rd house, the native will be powerful, valiant, wealthy and generous. He will have inimical relations with his kinsmen.",
      },
      {
        group: "House_Position",
        rule: suryab == 3,
        des: "Sun in 4",
        sou: "Phala Deepika",
        result:
          "If the Sun be in 4th house, the native will be bereft of happiness and comfort, relations, lands, friends and house. He will be in Government service and will squander away his ancestral property.",
      },
      {
        group: "House_Position",
        rule: suryab == 4,
        des: "Sun in 5",
        sou: "Phala Deepika",
        result:
          "When the Sun is in the 5th house from the Lagna, the person concerned will be short tempered and will be deprived of happiness, wealth and children. He will be intelligent and wander in forest regions.",
      },
      {
        group: "House_Position",
        rule: suryab == 5,
        des: "Sun in 6",
        sou: "Phala Deepika",
        result:
          "If the Sun be in the 6th house, the native will become a king. He will earn renown and will be equipped with praiseworthy qualities. He will be wealthy and capable of overcoming his enemies.",
      },
      {
        group: "House_Position",
        rule: suryab == 6,
        des: "Sun in 7",
        sou: "Phala Deepika",
        result:
          "When the Sun is in the 7th at birth, the person concerned will suffer from the wrath of the king. He will have deformed body and will have no wife. He will suffer humiliation from others.",
      },
      {
        group: "House_Position",
        rule: suryab == 7,
        des: "Sun in 8",
        sou: "Phala Deepika",
        result:
          "With the Sun in the 8th house, the person born will be deprived of his wealth and friends. He will be short-lived and suffer from defective eyesight. He can be blind also.",
      },
      {
        group: "House_Position",
        rule: suryab == 8,
        des: "Sun in 9",
        sou: "Phala Deepika",
        result:
          "Should the Sun be In 9th house at birth, the person concerned is likely to suffer from the loss of his father, but he will not be deprived of children and relations. He will have due respect foi gods and Brahmins.",
      },
      {
        group: "House_Position",
        rule: suryab == 9,
        des: "Sun in 10",
        sou: "Phala Deepika",
        result:
          "With the Sun in the 10th house, the native will be blessed with sons and will enjoy the comfort of conveyances. He will receive praise for his good conduct and will have Intelligence, wealth, strength and fame. He will be a king.",
      },
      {
        group: "House_Position",
        rule: suryab == 10,
        des: "Sun in 11",
        sou: "Phala Deepika",
        result:
          "The Sun in the 11th house makes the native very wealthy and long lived. He will be a king with ever lasting happiness.",
      },
      {
        group: "House_Position",
        rule: suryab == 11,
        des: "Sun in 12",
        sou: "Phala Deepika",
        result:
          "Should the Sun be in the 12th house at birth the native will have inimical relations with his father. His eyesight will be defective and he will be devoid of wealth and children.",
      },
      {
        group: "House_Position",
        rule: chandrab == 0,
        des: "Moon in 1",
        sou: "Phala Deepika",
        result:
          "If at birth the Moon be waxing and be posited in the first house (the lagna), the native will possess a strong constitution and will be longlived. He will be powerful, fearless and wealthy. The effects will be quite reverse if the Moon be waning.",
      },
      {
        group: "House_Position",
        rule: chandrab == 1,
        des: "Moon in 2",
        sou: "Phala Deepika",
        result:
          "If the Moon be posited in the 2nd house, the person born will be a man of learning, sweet in speech and wealthy. He will have a defective limb and be sensuous.",
      },
      {
        group: "House_Position",
        rule: chandrab == 2,
        des: "Moon in 3",
        sou: "Phala Deepika",
        result:
          "If the Moon be in the 3rd house at birth the person born will have brothers. He will be lascivious, powerful and strong but very miserfy.",
      },
      {
        group: "House_Position",
        rule: chandrab == 3,
        des: "Moon in 4",
        sou: "Phala Deepika",
        result:
          "Should the Moon be placed in the 4th house, the person concerned will be happy, will be indulging in sensual pleasures He will be generous in gifts, will have good friends, will have comforts of conveyances and will enjoy a high reputation (Moon gets Digbala in the 4th).",
      },
      {
        group: "House_Position",
        rule: chandrab == 4,
        des: "Moon in 5",
        sou: "Phala Deepika",
        result:
          "If the Moon be in the 5th house at birth the person will walk gently, will be brilliant and will have good sons. Such a person becomes Minister of a king.",
      },
      {
        group: "House_Position",
        rule: chandrab == 5,
        des: "Moon in 6",
        sou: "Phala Deepika",
        result:
          "If the Moon be in the sixth house the person born will be short lived, will be stupid and sufferer of stomach ailments. He will aslo face humiliation.",
      },
      {
        group: "House_Position",
        rule: chandrab == 6,
        des: "Moon in 7",
        sou: "Phala Deepika",
        result:
          "Should the Moon be housed in the 7th at birth, the person concerned will be beautiful in his looks, and will be loved by a faithful and illustrious wife.",
      },
      {
        group: "House_Position",
        rule: chandrab == 7,
        des: "Moon in 8",
        sou: "Phala Deepika",
        result:
          "When the Moon occupies the 8th house at birth, the person concerned will be sickly and shortlived.",
      },
      {
        group: "House_Position",
        rule: chandrab == 8,
        des: "Moon in 9",
        sou: "Phala Deepika",
        result:
          "Should the Moon happen to be in the 9th house, the person born will be wealthy, virtuous and will be blessed with children.",
      },
      {
        group: "House_Position",
        rule: chandrab == 9,
        des: "Moon in 10",
        sou: "Phala Deepika",
        result:
          "The Moon in 10th house at birth makes the native victorious over his enemies, and achieve success in all his ventures. He will be engaged in pious deeds and will be a supporter of good people.",
      },
      {
        group: "House_Position",
        rule: chandrab == 10,
        des: "Moon in 11",
        sou: "Phala Deepika",
        result:
          "Should the Moon occupy the 11th house at birth, the person concerned will be high minded, longlived and wealthy and will be blessed with children. He will also have comforts of servants.",
      },
      {
        group: "House_Position",
        rule: chandrab == 11,
        des: "Moon in 12",
        sou: "Phala Deepika",
        result:
          "When the Moon is placed in the 12th house, the native is indolent, humiliated and unhappy. Others have animosity against him.",
      },
      {
        group: "House_Position",
        rule: mangalb == 0,
        des: "Mars in 1",
        sou: "Phala Deepika",
        result:
          "If Mars occupies the 1st house or the Lagna, the native will be very cruel but valourous. He will be short lived and his body will get bruised.",
      },
      {
        group: "House_Position",
        rule: mangalb == 1,
        des: "Mars in 2",
        sou: "Phala Deepika",
        result:
          "When Mars is posited in the 2nd house at birth, the native will not be good looking and will not be clever in speaking. He will have tearing and will be devoid of wealth. He will be serving low people.",
      },
      {
        group: "House_Position",
        rule: mangalb == 2,
        des: "Mars in 3",
        sou: "Phala Deepika",
        result:
          "Should Mars be in the 3rd house at birth, the person concerned will be equipped with qualities, will be powerful, happy and brave. He will be not subdued by others. But he will be deprived of the happiness of brothers.",
      },
      {
        group: "House_Position",
        rule: mangalb == 3,
        des: "Mars in 4",
        sou: "Phala Deepika",
        result:
          "When Mars is placed in the 4th house, the native will be bereft of mother, friends, happiness, conveyances and lands.",
      },
      {
        group: "House_Position",
        rule: mangalb == 4,
        des: "Mars in 5",
        sou: "Phala Deepika",
        result:
          "The person concerned will have no children and will face many disasters, should the Mars happen to occupy the 5th house at birth. The native will be a talebearer and without enough intelligence.",
      },
      {
        group: "House_Position",
        rule: mangalb == 5,
        des: "Mars in 6",
        sou: "Phala Deepika",
        result:
          "Should Mars happen to occupy the 6th house at birth, the person concerned will be wealthy, generous, capable of vanquishing his enemies and will have splendour like that of a king. Mars in the 6th makes the native very sensuous.",
      },
      {
        group: "House_Position",
        rule: mangalb == 6,
        des: "Mars in 7",
        sou: "Phala Deepika",
        result:
          "When Mars is in the 7th, the person born will indulge in undesirable actions, will be afflicted by diseases and will have a wife who will die prematurely.",
      },
      {
        group: "House_Position",
        rule: mangalb == 7,
        des: "Mars in 8",
        sou: "Phala Deepika",
        result:
          "Mars in the 8th house gives the native a diseased body, deprive him of wealth and makes him shortlived and reviled by others.",
      },
      {
        group: "House_Position",
        rule: mangalb == 8,
        des: "Mars in 9",
        sou: "Phala Deepika",
        result:
          "Should Mars occupy the 9th house, the native will face animosity from others even if he be a favourite of the king. He will not enjoy the happiness of his father (i.e. he will lose his father prematurely), and will oppress other people.",
      },
      {
        group: "House_Position",
        rule: mangalb == 9,
        des: "Mars in 10",
        sou: "Phala Deepika",
        result:
          "If Mars be in the 10th house the person though cruel by nature will be charitable and will be like a king. He will be valiant and will be extolled even by great personalities.",
      },
      {
        group: "House_Position",
        rule: mangalb == 10,
        des: "Mars in 11",
        sou: "Phala Deepika",
        result:
          "When Mars occupies the 11th house the native will be powerful, wealthy, valourous, of good conduct, and happy.",
      },
      {
        group: "House_Position",
        rule: mangalb == 11,
        des: "Mars in 12",
        sou: "Phala Deepika",
        result:
          "Mars in the 12th house makes the native a talebearer and cruel. He will be devoid of wife, and mean by nature. He will suffer from eye diseases.",
      },
      {
        group: "House_Position",
        rule: budhb == 0,
        des: "Mercury in 1",
        sou: "Phala Deepika",
        result:
          "Should Mercury be posited in the 1st house or the lagna, the native will be learned in all Shastras, will be soft spoken and longlived.",
      },
      {
        group: "House_Position",
        rule: budhb == 1,
        des: "Mercury in 2",
        sou: "Phala Deepika",
        result:
          "If Mercury happens to occupy the 2nd house at birth the person earns his livelihood by his intelligence. He will compose poems and will be cultured in his speech. He will get sweetish preparations to eat.",
      },
      {
        group: "House_Position",
        rule: budhb == 2,
        des: "Mercury in 3",
        sou: "Phala Deepika",
        result:
          "If Mercury be in the 3rd house, the person born will be brave but will have a medium span of life. He will have good brothers and sisters, but he will suffer from fatigue and be dejected.",
      },
      {
        group: "House_Position",
        rule: budhb == 3,
        des: "Mercury in 4",
        sou: "Phala Deepika",
        result:
          "When Mercury occupies the 4th house, the person born will be learned and witty. He will be possessed of friends, wealth and happiness.",
      },
      {
        group: "House_Position",
        rule: budhb == 4,
        des: "Mercury in 5",
        sou: "Phala Deepika",
        result:
          "With Mercury in the 5th, the native will be learned, happy and courageous. He will be blessed with children and will be well versed in Mantras.",
      },
      {
        group: "House_Position",
        rule: budhb == 5,
        des: "Mercury in 6",
        sou: "Phala Deepika",
        result:
          "Should Mercury happen to occupy 6th house, the native will be indolent, harsh in speech and will be capable of overcoming his enemies. He will become adament when people enter into arguments with him.",
      },
      {
        group: "House_Position",
        rule: budhb == 6,
        des: "Mercury in 7",
        sou: "Phala Deepika",
        result:
          "Mercury occupying the 7th house makes the native learned, decently dressed. He will have all greatness and a wealthy woman as his wife.",
      },
      {
        group: "House_Position",
        rule: budhb == 7,
        des: "Mercury in 8",
        sou: "Phala Deepika",
        result:
          "When Mercury is in the 8th house at birth the person concerned will be widely renowned and longlived. He will be the supporter of his family, a lord and a commander of army.",
      },
      {
        group: "House_Position",
        rule: budhb == 8,
        des: "Mercury in 9",
        sou: "Phala Deepika",
        result:
          "With the Mercury occupying the 9th house, the native will be learned, wealthy, religious minded and observer of virtuous conduct. He will be well versed in everything and will not be reserved in speaking.",
      },
      {
        group: "House_Position",
        rule: budhb == 9,
        des: "Mercury in 10",
        sou: "Phala Deepika",
        result:
          "If Mercury be posited in the 10th house at birth, the native will be learned, powerful, wise, happy, virtuous and will stick to his word. He will be successful from the very beginning in all his ventures.",
      },
      {
        group: "House_Position",
        rule: budhb == 10,
        des: "Mercury in 11",
        sou: "Phala Deepika",
        result:
          "Should Mercury occupy the 11th house, the person will be longlived. He will keep his word, and will be very wealthy and nappy. He will enjoy the comforts of servants.",
      },
      {
        group: "House_Position",
        rule: budhb == 11,
        des: "Mercury in 12",
        sou: "Phala Deepika",
        result:
          "Mercury in the 12th makes the native poor and helpless, indolent and cruel and without any education. He will also suffer from humiliation.",
      },
      {
        group: "House_Position",
        rule: gurub == 0,
        des: "Jupiter in 1",
        sou: "Phala Deepika",
        result:
          "If Jupiter be in Lagna at birth, the person concerned will be handsome and attractive, virtuous, longlived and fearless. He will be blessed with the grace of God.",
      },
      {
        group: "House_Position",
        rule: gurub == 1,
        des: "Jupiter in 2",
        sou: "Phala Deepika",
        result:
          "Should Jupiter occupy the 2nd house at birth, the person concerned will be learned and wealthy, will possess a beautiful face and will be eloquent in speech. He will enjoy food of high standard.",
      },
      {
        group: "House_Position",
        rule: gurub == 2,
        des: "Jupiter in 3",
        sou: "Phala Deepika",
        result:
          "If Jupiter be placed in the 3rd house, the person born will be sinful, wicked and miserly He will suffer humiliation but one of his brothers will attain a position of honour and will be renowned.",
      },
      {
        group: "House_Position",
        rule: gurub == 3,
        des: "Jupiter in 4",
        sou: "Phala Deepika",
        result:
          "With Jupiter posited in the 4th, person will be happy and will live with mother, friends, sons and servants. He will have plenty of grains.",
      },
      {
        group: "House_Position",
        rule: gurub == 4,
        des: "Jupiter in 5",
        sou: "Phala Deepika",
        result:
          "Should Jupiter be in the 5th house, the native will suffer from distress from sons (children). He will be learned and a minister of the king.",
      },
      {
        group: "House_Position",
        rule: gurub == 5,
        des: "Jupiter in 6",
        sou: "Phala Deepika",
        result:
          "If Jupiter occupies the 6th house at birth, the native will destroy his enemies but he will be lazy and will be humiliated. He will be clever and well versed in the recitation and utility of Mantras.",
      },
      {
        group: "House_Position",
        rule: gurub == 6,
        des: "Jupiter in 7",
        sou: "Phala Deepika",
        result:
          "When Jupiter is posited in 7th house at birth, the native will be blessed with a decent wife and children. He will be handsome and more liberal than his father.",
      },
      {
        group: "House_Position",
        rule: gurub == 7,
        des: "Jupiter in 8",
        sou: "Phala Deepika",
        result:
          "With Jupiter in the 8th house at birth, the native will be poor and helpless and earns his livelihood through servants or menials. He will indulge in mean action, but will be longlived.",
      },
      {
        group: "House_Position",
        rule: gurub == 8,
        des: "Jupiter in 9",
        sou: "Phala Deepika",
        result:
          "If Jupiter be in 9th house at birth, the native, will be wealthy and will be blessed with sons (children). He will be famous and will be eager to perform virtuous deeds and religious rites. He will become a minister of the king.",
      },
      {
        group: "House_Position",
        rule: gurub == 9,
        des: "Jupiter in 10",
        sou: "Phala Deepika",
        result:
          "Should Jupiter be occupying the 10th house at birth, the native will be very wealthy and a favourite of the king. Be earns a high reputation and is virtuous.",
      },
      {
        group: "House_Position",
        rule: gurub == 10,
        des: "Jupiter in 11",
        sou: "Phala Deepika",
        result:
          "Jupiter in 11th house at birth makes the native wealthy, longlived and fearless. He gets few children; but enjoys the comforts of conveyances.",
      },
      {
        group: "House_Position",
        rule: gurub == 11,
        des: "Jupiter in 12",
        sou: "Phala Deepika",
        result:
          "When Jupiter occupies the 12th house, the native will earn animosity ol others, and will himself use abusive language. He will be childless , sinful, indolent and a person who serves others.",
      },
      {
        group: "House_Position",
        rule: shukrab == 0,
        des: "Venus in 1",
        sou: "Phala Deepika",
        result:
          "If Venus be posited in the lagna at birth, the native will have a beautiful and attractive body, and will be happy and longlived.",
      },
      {
        group: "House_Position",
        rule: shukrab == 1,
        des: "Venus in 2",
        sou: "Phala Deepika",
        result:
          "Should Venus occupy the 2nd house at birth, the native will be a poet and will enjoy riches of various kinds.",
      },
      {
        group: "House_Position",
        rule: shukrab == 2,
        des: "Venus in 3",
        sou: "Phala Deepika",
        result:
          "If Venus be In the 3rd house at birth, the native will be miserly, unpopular, devoid of wealth, happiness and wife.",
      },
      {
        group: "House_Position",
        rule: shukrab == 3,
        des: "Venus in 4",
        sou: "Phala Deepika",
        result:
          "With Venus occupying the 4th house, the person born, the native will be endowed with good conveyances, a decent house, ornaments, clothes and scents.",
      },
      {
        group: "House_Position",
        rule: shukrab == 4,
        des: "Venus in 5",
        sou: "Phala Deepika",
        result:
          "When Venus be in the 5th house at birth, the native will be endowed with wealth and will be as influential and renowned as a king. He will be learned and will be blessed with the happiness of children.",
      },
      {
        group: "House_Position",
        rule: shukrab == 5,
        des: "Venus in 6",
        sou: "Phala Deepika",
        result:
          "With Venus posited in the 6th house at birth, the native will have no enemies, but he will be devoid of wealth. He will develop ilicit relations with several young girls, but will not enjoy happiness.",
      },
      {
        group: "House_Position",
        rule: shukrab == 6,
        des: "Venus in 7",
        sou: "Phala Deepika",
        result:
          "Should Venus be placed in 7th house at birth, the native will enjoy the company of a faithful and beautiful wife and he may lose his wife. He will be wealthy and will have intrigues with bad women.",
      },
      {
        group: "House_Position",
        rule: shukrab == 7,
        des: "Venus in 8",
        sou: "Phala Deepika",
        result:
          "Venus posited in the 8th house at birth, will make the native wealthy, longlived and a landlord.",
      },
      {
        group: "House_Position",
        rule: shukrab == 8,
        des: "Venus in 9",
        sou: "Phala Deepika",
        result:
          "If Venus occupies the 9th house at birth, the native will draw his fortune through the beneficience of the king. He will be blessed with wife, sons and friends.",
      },
      {
        group: "House_Position",
        rule: shukrab == 9,
        des: "Venus in 10",
        sou: "Phala Deepika",
        result:
          "With Venus occupying the 10th house at birth, the native will perform virtuous deeds. He will enjoy happiness from friends, will be greatly honoured, will enjoy high reputation and will attain a high status.",
      },
      {
        group: "House_Position",
        rule: shukrab == 10,
        des: "Venus in 11",
        sou: "Phala Deepika",
        result:
          "Should Venus occupy the 11th house at birth, the native will be wealthy, but will have connections with other people`s wives. He will enjoy all kinds of happiness.",
      },
      {
        group: "House_Position",
        rule: shukrab == 11,
        des: "Venus in 12",
        sou: "Phala Deepika",
        result:
          "If Venus occupies the 12th house at birth, the native will enjoy sexual relationships with many women (bed comforts). He will be rich and prosperous.",
      },
      {
        group: "House_Position",
        rule: shanib == 0,
        des: "Saturn in 1",
        sou: "Phala Deepika",
        result:
          "If at birth Saturn is in the Lagna in his sign of exaltation (Libra) or in his own sign (Capricorn and Aquarius), the person concerned will be equal to the king, a chief or mayor of a city. If Saturn be in the Lagna in any other sign, the native will suffer from sorrow and misery from his very childhood and will be poverty stricken. He will be living shabbily and will be inactive.",
      },
      {
        group: "House_Position",
        rule: shanib == 1,
        des: "Saturn in 2",
        sou: "Phala Deepika",
        result:
          "Should Saturn be in the 2nd house at birth, the face of the native will be unattractive. He will not take the righteous path and will be devoid of wealth but in the latter part of his life he will quit his native place and will then possess wealth, conveyance and all enjoyments of life.",
      },
      {
        group: "House_Position",
        rule: shanib == 2,
        des: "Saturn in 3",
        sou: "Phala Deepika",
        result:
          "If Saturn should happen to occupy the 3rd house at birth, the native will be very intelligent, wise and liberal and will live with his wife. However, he will be indolent and unhappy.",
      },
      {
        group: "House_Position",
        rule: shanib == 3,
        des: "Saturn in 4",
        sou: "Phala Deepika",
        result:
          "If Saturn be in the 4th house at birth, the native will be bereft of house, respect and mother. He will be sickly in his childhood. He will also be unhappy.",
      },
      {
        group: "House_Position",
        rule: shanib == 4,
        des: "Saturn in 5",
        sou: "Phala Deepika",
        result:
          "If Saturn occupied the 5th house the person concerned will be evil minded and wicked. He will be bereft of learning, children, wealth and happiness. He roams about aimlessly.",
      },
      {
        group: "House_Position",
        rule: shanib == 5,
        des: "Saturn in 6",
        sou: "Phala Deepika",
        result:
          "Should Saturn occupy the 6th house at birth, the person concerned will be glutton, wealthy and will vanquish his enemies. He will also be arrogant.",
      },
      {
        group: "House_Position",
        rule: shanib == 6,
        des: "Saturn in 7",
        sou: "Phala Deepika",
        result:
          "When at birth Saturn is posited in the 7th house, the native develops relations with women of questionable character. He will be poverty stricken, a wanderer and unhappy.",
      },
      {
        group: "House_Position",
        rule: shanib == 7,
        des: "Saturn in 8",
        sou: "Phala Deepika",
        result:
          "Saturn occupying the 8th house at birth will make the native unclean afflicted with piles, devoid of wealth, of cruel disposition, hungry and will be avoided by his friends.",
      },
      {
        group: "House_Position",
        rule: shanib == 8,
        des: "Saturn in 9",
        sou: "Phala Deepika",
        result:
          "Should Saturn occupy the 9th house, the native will be devoid of good fortune, wealth, children father and will be irreligious. He will also be wicked.",
      },
      {
        group: "House_Position",
        rule: shanib == 9,
        des: "Saturn in 10",
        sou: "Phala Deepika",
        result:
          "Saturn in 10th house enables the native to be king or equal to the king. He will be valiant, renowned and will be engaged in agricultural pursuits.",
      },
      {
        group: "House_Position",
        rule: shanib == 10,
        des: "Saturn in 11",
        sou: "Phala Deepika",
        result:
          "Saturn in the 11th makes the native devoid of ill health and enables him lasting income and wealth.",
      },
      {
        group: "House_Position",
        rule: shanib == 11,
        des: "Saturn in 12",
        sou: "Phala Deepika",
        result:
          "Should Saturn occupy the 12th house at birth, the native will be impudent, poor, childless, defective of some limb, stupid and defeated by his enemies.",
      },
      {
        group: "House_Position",
        rule: rahub == 0,
        des: "Rahu in 1",
        sou: "Phala Deepika",
        result:
          "When Rahu is in the occupaton of the 1st house at birth, the native will be shortlived, wealthy and strong and suffer from diseases in the higher limbs (Face, head etc.).",
      },
      {
        group: "House_Position",
        rule: rahub == 1,
        des: "Rahu in 2",
        sou: "Phala Deepika",
        result:
          "The person who has Rahu in the 2nd house at birth, will be insincere in speech and his words will carry double meaning. He will suffer from disease of the mouth or the face. He will be tender hearted and will receive wealth through the beneficence of the king. He will be of an angry disposition and happy.",
      },
      {
        group: "House_Position",
        rule: rahub == 2,
        des: "Rahu in 3",
        sou: "Phala Deepika",
        result:
          "When Rahu is in the 3rd house at birth, the native will be proud, inimical towards his co-born, wealthy, longlived and strongwilled.",
      },
      {
        group: "House_Position",
        rule: rahub == 3,
        des: "Rahu in 4",
        sou: "Phala Deepika",
        result:
          "With Rahu in the 4th house at birth, the native will have a short span of life and will be seldom happy.",
      },
      {
        group: "House_Position",
        rule: rahub == 4,
        des: "Rahu in 5",
        sou: "Phala Deepika",
        result:
          "When Rahu occupies the 5th house at birth, the native will have nasal touch in his speech. He will be childless, hard hearted and will suffer from pain in the stomach.",
      },
      {
        group: "House_Position",
        rule: rahub == 5,
        des: "Rahu in 6",
        sou: "Phala Deepika",
        result:
          "Should Rahu occupy the 6th house at birth, the native will be troubled by the enemies and will be oppressed by malefic planets. He will be wealthy and longlived and will suffer from ulcer in the anus.",
      },
      {
        group: "House_Position",
        rule: rahub == 6,
        des: "Rahu in 7",
        sou: "Phala Deepika",
        result:
          "Rahu in the 7th house at birth makes the person concerned independent, but without intelligence. He squanders away his money by associating with women. He will become a widower and also impotent.",
      },
      {
        group: "House_Position",
        rule: rahub == 7,
        des: "Rahu in 8",
        sou: "Phala Deepika",
        result:
          "If Rahu be posited in the 8th house the native will become miserable, will suffer from rheumatism, will have few children and will indulge in impure actions.",
      },
      {
        group: "House_Position",
        rule: rahub == 8,
        des: "Rahu in 9",
        sou: "Phala Deepika",
        result:
          "If Rahu occupies the 9th house at birth, the native will be harsh in speech and will indulge in unrighteous actions but he will become head of a clan, city or a village.",
      },
      {
        group: "House_Position",
        rule: rahub == 9,
        des: "Rahu in 10",
        sou: "Phala Deepika",
        result:
          "If Rahu be in the 10th house, the person born will have a limited number of issues, engaged in working for others, will not perform any rightful deeds, will be fearless and famous.",
      },
      {
        group: "House_Position",
        rule: rahub == 10,
        des: "Rahu in 11",
        sou: "Phala Deepika",
        result:
          "With Rahu occupying the 11th house at birth, the native will be wealthy and longlived, will have a limited number of issues, and will suffer from some disease of the ear.",
      },
      {
        group: "House_Position",
        rule: rahub == 11,
        des: "Rahu in 12",
        sou: "Phala Deepika",
        result:
          "Rahu in the 12th house at birth makes a man squanderer of money, will indulge in sinful deeds and suffer from diseases like dropsy etc.",
      },
      {
        group: "House_Position",
        rule: ketub == 0,
        des: "Ketu in 1",
        sou: "Phala Deepika",
        result:
          "When Ketu occupies the 1st house or the Lagna, the person born will be ungrateful, unhappy and tale bearer, will associate with unsociable elements, deformed in his body, fallen from position and outcaste.",
      },
      {
        group: "House_Position",
        rule: ketub == 1,
        des: "Ketu in 2",
        sou: "Phala Deepika",
        result:
          "With Ketu in the 2nd house at birth, the native will be bereft of learning and will have a harsh manner of speaking. He will have a sinister look and be dependent for food on others.",
      },
      {
        group: "House_Position",
        rule: ketub == 2,
        des: "Ketu in 3",
        sou: "Phala Deepika",
        result:
          "Should Ketu occupy the 3rd house at birth, the native will be longlived, powerful and renowned. He will live happily with his wife and will eat good food; but he will be deprived of a brother.",
      },
      {
        group: "House_Position",
        rule: ketub == 3,
        des: "Ketu in 4",
        sou: "Phala Deepika",
        result:
          "With Ketu occupying the 4th house at birth, the native will live in another man`s house and will lose his lands, mother and happiness. He will be forced to leave his native land.",
      },
      {
        group: "House_Position",
        rule: ketub == 4,
        des: "Ketu in 5",
        sou: "Phala Deepika",
        result:
          "Ketu in the 5th house at a person`s birth deprives the native of his children. He will be evil minded and will be oppressed by goblins (evil spirits).",
      },
      {
        group: "House_Position",
        rule: ketub == 5,
        des: "Ketu in 6",
        sou: "Phala Deepika",
        result:
          "If Ketu occupies the 6th house at birth, the native will be magnanimous, full of best qualities, firm, renowned and will be vested with high authority. He will vanquish his enemies and will be successful in obtaining Ishta Siddhi.",
      },
      {
        group: "House_Position",
        rule: ketub == 6,
        des: "Ketu in 7",
        sou: "Phala Deepika",
        result:
          "Ketu`s occupation of the 7th house at birth will make the native suffer humiliation. He will associate with fallen women and will be separated from his own wife. He will suffer from diseases of the bowels and may lose his potency.",
      },
      {
        group: "House_Position",
        rule: ketub == 7,
        des: "Ketu in 8",
        sou: "Phala Deepika",
        result:
          "With Ketu occupying the 8th house at birth, the native will suffer from separation from his nears and dears. He will be quarrelsome and shortlived. He will get injury from some weapon and will be unsuccessful in all his ventures.",
      },
      {
        group: "House_Position",
        rule: ketub == 8,
        des: "Ketu in 9",
        sou: "Phala Deepika",
        result:
          "Ketu In the 9th house at birth, makes the native indulge in sinful and unrighteous actions. He will be deprived of his father, will be unfortunate, poverty stricken and will defame others.",
      },
      {
        group: "House_Position",
        rule: ketub == 9,
        des: "Ketu in 10",
        sou: "Phala Deepika",
        result:
          "If Ketu occupies the 10th house at a person`s birth, he will face obstacles in performing good acts. He will be impure and indulge in wicked actions. He will be very bold and famous for his valor.",
      },
      {
        group: "House_Position",
        rule: ketub == 10,
        des: "Ketu in 11",
        sou: "Phala Deepika",
        result:
          "If Ketu should occupy the 11th house, the person born will accumulate wealth and will be equipped with good qualities. He will enjoy himself and all items of luxuries and comforts will be available to him. He will achieve success in all his undertakings.",
      },
      {
        group: "House_Position",
        rule: ketub == 11,
        des: "Ketu in 12",
        sou: "Phala Deepika",
        result:
          "When Ketu occupies the 12th house at birth, the native will commit sinful acts secretly. He will squander away all his money for undesirable purposes. He will destroy his wealth and take to forbidden conduct. He will suffer from diseases of the eyes.",
      },
      //41nakshatraBrihatJatak
      {
        group: "Nakshatra_Position",
        rule: chandran == 0,
        des: "Moon in Aswini",
        result:
          "The person born In Aswini will be fond of decoration, handsome, popular, skilful and intelligent ",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 1,
        des: "Moon in Bharani",
        result:
          "One born in Bharani will be determined, truthful, healthy, skilful and happy.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 2,
        des: "Moon in Krittika",
        result:
          "The person born in Krittika will be a voracious enter, fond of other’s wives, attractive and renowned ",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 3,
        des: "Moon in Rohini",
        result:
          "Rohini makes a man truthful, clean, following religious and moral principles, sweet in speech, fixed mind and handsome.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 4,
        des: "Moon in Mrigasira",
        result:
          "Mrigasira-Capricious, skilful, cowardly, good speaker, hopeful, rich and enjoying.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 5,
        des: "Moon in Arudra",
        result:
          "Aridra-Dissimulating in self-interest, proud, ungrateful, cruel and sinful.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 6,
        des: "Moon in Punarvasu",
        result:
          "Punarvasu-Religious endurance, happy, good, dull, sickly, thirsty and pleased with small gifts.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 7,
        des: "Moon in Pushyami",
        result:
          "Pushya-Control over passions, popular, learned, rich and charitable.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 8,
        des: "Moon in Aslesha",
        result:
          "Aslesha-Dissimulator, clever in selfishness, sinful, ungrateful and a cheat.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 9,
        des: "Moon in Makha",
        result:
          "Makha-Many servants and great wealth, enjoying, respector of elders and gods and very enterprising.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 10,
        des: "Moon in Purva Phalgini",
        result:
          "Pubba-Sweet speech, liberal, handsome, fond of traveling and royal servant.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 11,
        des: "Moon in Uttara Phalguni",
        result: "Uttara-Popular, self-acquired property, enjoying and happy.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 12,
        des: "Moon in Hashta",
        result:
          "Hasta-Enterprising, intelligent or (shameless), drunkard, cruel and thievish.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 13,
        des: "Moon in Chitta",
        result:
          "Chitta-Using various clothes and garlands, good looks and limbs.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 14,
        des: "Moon in Swati",
        result:
          "Swati-Polite, merchant, kind hearted, not able to endure thirst, sweet tongued and generous.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 15,
        des: "Moon in Vishakha",
        result:
          "Visakha-Jealous, avaricious, handsome, clever speaker and quarrelsome, or maker of money.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 16,
        des: "Moon in Anuradha",
        result:
          "Anuradha-Master or chief, living in foreign countries, not able to bear hunger and fond of traveling.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 17,
        des: "Moon in Jeshta",
        result: "Jyeshta-Few friends, contented, charitable, very irritable.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 18,
        des: "Moon in Moola",
        result: "Moola-Proud, rich happy, good, steady and enjoying.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 19,
        des: "Moon in Purva Shadha",
        result: "Purvashada-Good and pleasant wife, proud and a steady friend.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 20,
        des: "Moon in UttaraShadha",
        result:
          "Uttarashada-Polite, knowing, virtuous, many friends, grateful and popular.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 21,
        des: "Moon in Sravana",
        result:
          "Sravana-Rich surroundings, learned, good and liberal or liberal to wife, wealthy and renowned.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 22,
        des: "Moon in Dhanishta",
        result: "Dhanishta-Liberal, rich, courageous, fond of music and money.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 23,
        des: "Moon in Satabishak",
        result:
          "Satabhisha-Plain and truthful, striken from sorrow through females, etc., killer of enemies, adventurous and irreconcilable.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 24,
        des: "Moon in Purva Bhadra",
        result:
          "Poorvabhadra-Sorrowful, loss of money through females, skilful and miserly.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 25,
        des: "Moon in Uttara Bhadra",
        result:
          "Uttarabhadra-Good and witty speaker in society and meetings, happy, many children and grandchildren, successful over enemies and charitable.",
        sou: "Brihat Jataka",
      },
      {
        group: "Nakshatra_Position",
        rule: chandran == 26,
        des: "Moon in Revati",
        result:
          "Revati-Well- developed organs, popular, courageous, clean and wealthy. developed organs, popular, courageous, clean and wealthy.",
        sou: "Brihat Jataka",
      },
      //50conjunctionSaravali
      {
        group: "Conjunction",
        rule: surya == chandra,
        des: "Sun = Moon",
        result:
          "One, who has the Sun and Moon together will be at the disposal of his wife (or females), immodest, be a metallurgist (can be interpreted also, as “able to deceive”), will be quite wealthy and be an expert in sale of intoxicants.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: surya == mangal,
        des: "Sun = Mars",
        result:
          "Should the Sun and Mars be in one House the native will be splendourous, valorous, dull witted, strong, be a liar, be sinful, disposed to kill (or torture) and be fierce.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: surya == budh,
        des: "Sun = Mercury",
        result:
          "If the Sun and Mercury are in one House, the native will be in service, will have unsteady wealth, be sweet in speech, will have fame and money, be noble, dear to king and good people and will possess strength, beauty and learning.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: surya == guru,
        des: "Sun = Jupiter",
        result:
          "If the Sun and Jupiter be together, one will be virtuous, be a minister of king, will gain through friends, be with good mind and be a preceptor.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: surya == shukra,
        des: "Sun = Venus",
        result:
          "If the Sun and Venus be together, one will be skillful in use of weapons, be mighty, weak-sighted in old age, will be able to amuse the public and will have abundant money earned through women.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: surya == shani,
        des: "Sun = Saturn",
        result:
          "If the Sun and Saturn are together, the native will be a metallurgist, be virtuous, mindful of his own duties, will lose his wife and son, will have the qualities suitable to his race, will be pure, but not so upright.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: chandra == mangal,
        des: "Moon = Mars",
        result:
          "One, who has the Moon and Mars together, will be valorous, brave in war, be a boxer, will suffer bloody imbalances, or diseases, will manufacture articles of mud, skin and minerals and will be an artisan and a metallurgist.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: chandra == budh,
        des: "Moon = Mercury",
        result:
          "One, who has the Moon Mercury combination will be expert in poems and fables, be wealthy, amiable to his wife, beautiful, smiling-faced and will be endowed with distinct virtues.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: chandra == guru,
        des: "Moon = Jupiter",
        result:
          "One with Jupiter and the Moon together will be firm in friendship, modest, respectful towards his relatives, wealthy, virtuous and regardful of Gods and the wise.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: chandra == shukra,
        des: "Moon = Venus",
        result:
          "Should the Moon and Venus be together, the native will be endowed with flowers, incense and clothes, will know to perform duties (kriya also means rites), be dear to his race, very lazy and expert in buying and selling.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: chandra == shani,
        des: "Moon = Saturn",
        result:
          "Should the Moon and Saturn be together, the native will possess a decayed wife, be dear to public, will breed elephants and horses, be devoid of virtues, be under the control of others, unwealthy and defeated.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: mangal == budh,
        des: "Mars = Mercury",
        result:
          "If Mars and Mercury are together at birth, the native will have unlucky wife, little wealth, will work with gold and iron, be an architect, will keep a wicked widow and be expert in making medicines.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: mangal == guru,
        des: "Mars = Jupiter",
        result:
          "If Mars and Jupiter be together at birth, the native will be an artisan, Vedic expert, intelligent, expert in speech, wise and fond of using weapons.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: mangal == shukra,
        des: "Mars = Venus",
        result:
          "One, who had Mars and Venus together at birth will be worshipped, be chief among his men, be a mathematician (or an astrologer) and be fond of gambling, untruth etc.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: mangal == shani,
        des: "Mars = Saturn",
        result:
          "Mars and Saturn be together, one will be a metallurgist. be expert in jugglery, be deceitful, skillful in thieving, troubled by weapons and poison and be fond of quarrels.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: budh == guru,
        des: "Mercury = Jupiter",
        result:
          "One, who has Mercury and Jupiter together will be a noted dancer, scholar, singer and instrumentalist. He will be wise and happy.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: budh == shukra,
        des: "Mercury = Venus",
        result:
          "Should Mercury and Venus be together at birth, the native will be abundantly rich, a politician, an artisan, will study Vedas, be good in speech, will know to sing, make fun and like scents and flowers.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: budh == shani,
        des: "Mercury = Saturn",
        result:
          "One, who has Mercury and Saturn together at birth, will contract debts, be proud, deceiving, an able poet, intent on moving, expert and will possess auspicious speech.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: guru == shukra,
        des: "Jupiter = Venus",
        result:
          "One, who has Jupiter and Venus together at birth will live by education and arguments, will follow a highly virtuous path, will have accurate conception, or notion (of things) and will have a supreme wife.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: guru == shani,
        des: "Jupiter = Saturn",
        result:
          "A native, who has Jupiter and Saturn together at birth will be heroic, will have plenty of wealth, will be chief of the city (mayor etc.), famous and will be the head of an assembly, a village, or an association.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: shukra == shani,
        des: "Venus = Saturn",
        result:
          "If Venus and Saturn are together at birth, one will be expert in breaking wood, be a barber, painter, or sculptor, boxer, be intent on wandering and be owner of quadrupeds.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(surya, chandra, mangal),
        des: "Sun = Moon = Mars",
        result:
          "Should the Sun, the Moon and Mars be together at birth, the native will be bereft of shame, be sinful, will have knowledge of machinery, will destroy enemies, be brave and will be expert in any kind of work.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(surya, chandra, budh),
        des: "Sun = Moon = Mercury",
        result:
          "If the Sun, Moon and Mercury are together, the native will be splendourous, very intelligent, will be fond of arts, assembly and drinks, be in royal service and bold.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(surya, chandra, guru),
        des: "Sun = Moon = Jupiter",
        result:
          "Should the Sun, Moon and Jupiter be in one House; the native will be given to anger, be cunning, expert in service, intent on going to foreign places, be intelligent and fickle minded.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(surya, chandra, shukra),
        des: "Sun = Moon = Venus",
        result:
          "Should the Sun, Moon and Venus be in one House at birth, the native will steal others` money, will be a debaucher and be expert in Shastras.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(surya, chandra, shani),
        des: "Sun = Moon = Saturn",
        result:
          "If the Sun, Moon and Saturn be together in one House, the native will be lustful, be expert in arguments, be a dunce, be at the disposal of others and be poor.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(surya, mangal, budh),
        des: "Sun = Mars = Mercury",
        result:
          "If the Sun, Mars and Mercury are in one House at birth, the native will be famous, hard-hearted, shameless and be devoid of wealth, sons and wife.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(surya, mangal, guru),
        des: "Sun = Mars = Jupiter",
        result:
          "Should Mars, Jupiter and the Sun be together at birth, the native will be an expert speaker, very wealthy, either a kings minister, or even a king himself, be truthful and fierce.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(surya, mangal, shukra),
        des: "Sun = Mars = Venus",
        result:
          "One, who has Venus, Mars and the Sun in one House, will be subjected to eye diseases, belongs to a good race, will be fortunate, harsh and wealthy.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(surya, mangal, shani),
        des: "Sun = Mars = Saturn",
        result:
          "Should Mars, Saturn and the Sun be together, the native will have deformed limbs, be without wealth, always sick, without his people and be a big fool.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(surya, budh, guru),
        des: "Sun = Mercury = Jupiter",
        result:
          "If Jupiter, Mercury and the Sun be together at birth, the native will be subjected to eye-diseases, be very wealthy, be interested in Shastras, fables, poetry, meetings and stonework and will become a good writer.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(surya, budh, shukra),
        des: "Sun = Mercury = Venus",
        result:
          "If Mercury, Sun and Venus be together, the native will be insatiable, talkative, intent on wandering and subjected to grief on account of women.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(surya, budh, shani),
        des: "Sun = Mercury = Saturn",
        result:
          "One, who has Saturn, the Sun and Mercury in one House will be a neuter, will hate others and will be given up by his relatives.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(surya, guru, shukra),
        des: "Sun = Jupiter = Venus",
        result:
          "Should Venus, Jupiter and the Sun be together at birth, the native will be weak-sighted, bold, intelligent, indigent, be a minister and be devoted to others` jobs.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(surya, guru, shani),
        des: "Sun = Jupiter = Saturn",
        result:
          "If Jupiter, Saturn and the Sun be together at birth. the native will not have a prominent physique, will be worshipped, will hate his own men, will have good wife, children and friends, be dear to the king and be fearless.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(surya, shukra, shani),
        des: "Sun = Venus = Saturn",
        result:
          "One, who has Venus, Saturn and the Sun together at birth will be emotionally upset due to fear from enemies, will be devoid of honour and knowledge of arts and poetry, will have a mean history and will suffer from Leprosy.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(chandra, budh, mangal),
        des: "Moon = Mercury = Mars",
        result:
          "Should the Moon Mercury and Mars be together at birth, the native will be sinful, mean in habits and conduct and devoid of friends and relatives throughout life.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(chandra, guru, mangal),
        des: "Moon = Jupiter = Mars",
        result:
          "A native, who has Mars, the Moon and Jupiter together at birth will have an even body, be addicted to women, be a thief, be splendourous, dear to women and given to anger.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(chandra, shukra, mangal),
        des: "Moon = Venus = Mars",
        result:
          "One, who has Mars, Venus and the Moon together at birth is the son of a bad woman and also will wed such a lady. He will be of wandering disposition and will have fear from cold.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(chandra, shani, mangal),
        des: "Moon = Saturn = Mars",
        result:
          "If Mars, Moon and Saturn join at birth, the person concerned will lose his mother in boyhood, be mean, wicked and inimical to people.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(chandra, budh, guru),
        des: "Moon = Mercury = Jupiter",
        result:
          "Should Mercury, Moon and Jupiter be together, the native will be wealthy, skillful, eloquent in speech, bright, famous and will have many sons and brothers.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(chandra, budh, shukra),
        des: "Moon = Mercury = Venus",
        result:
          "One, who has Mercury, Venus and Moon together at birth, will be mean in conduct in spite of his being learned and cultured. be Jealous and miserly.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(chandra, budh, shani),
        des: "Moon = Mercury = Saturn",
        result:
          "If Saturn, Moon and Mercury be together, the person concerned will be dependent, deformed, learned, be an able speaker and respected by the king.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(chandra, guru, shukra),
        des: "Moon = Jupiter = Venus",
        result:
          "Should Venus, Jupiter and the Moon be in one House at birth, the native will be a chaste woman`s son, be a scholar, will have knowledge of arts and many Shastras, be virtuous and beautiful.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(chandra, guru, shani),
        des: "Moon = Jupiter = Saturn",
        result:
          "One, who has Moon, Jupiter and Saturn combination at birth will know the inner meaning of Shastras, will seek union with aged women, be devoid of shame and be the head of a village and people.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(chandra, shukra, shani),
        des: "Moon = Venus = Saturn",
        result:
          "If the Moon, Venus and Saturn are in combination at birth, one will be a writer, reader of books, Purohita (family guru), will have to his credit merits of past birth and be an astrologer.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(budh, mangal, guru),
        des: "Mercury = Mars = Jupiter",
        result:
          "One, who has Mercury, Jupiter and Mars together will be a good poet, Lord of a group, will marry a virtuous lady, be intent on helping others and an expert singer.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(budh, mangal, shukra),
        des: "Mercury = Mars = Venus",
        result:
          "Should Mars, Mercury and Venus be together at birth, the native will give up his caste, be deformed, fickle-minded, wicked and garrulous.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(budh, mangal, shani),
        des: "Mercury = Mars = Saturn",
        result:
          "Should Mercury, Saturn and Mars be together at birth, one will be a servant, will have dark eyes, be intent on living in foreign places, will have facial diseases and will be witty.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(budh, guru, shukra),
        des: "Mercury = Jupiter = Venus",
        result:
          "Should Mercury, Jupiter and Venus be together, the native will have good physique, be successful over his enemies, be a king, fortunate, widely famous and truthfully disposed.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(budh, guru, shani),
        des: "Mercury = Jupiter = Saturn",
        result:
          "When Mercury, Saturn and Jupiter are together at birth, it denotes, that the native will enjoy honour, wealth and sovereignty, be learned, will have abundant pleasures, be attached to his wife, be courageous and fortunate.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(budh, shukra, shani),
        des: "Mercury = Venus = Saturn",
        result:
          "One, who has Mercury, Venus and Saturn together at birth will be scurrilous in speech, fraudulent, be a liar, addicted to other women, vehement, (`vishama` has several other meanings, viz., irregular, uneven, mysterious, inaccessible, rough, painful, troublesome etc.), will have knowledge of arts and be attached to his own country.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(mangal, guru, shukra),
        des: "Mars = Jupiter = Venus",
        result:
          "One, who has Venus, Jupiter and Mars together at birth will be dear to king, will have good sons and enjoy pleasures through women. He will please all persons.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(mangal, guru, shani),
        des: "Mars = Jupiter = Saturn",
        result:
          "If Jupiter, Mars and Saturn be together at birth, the native will be honoured by the king, will have wounds on the body, be mean and blamed by friends. He will also be unkind.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(mangal, shukra, shani),
        des: "Mars = Venus = Saturn",
        result:
          "If Saturn, Mars and Venus are in one House at birth, the native is born to an immoral lady, will marry such a lady, will be devoid of happiness and will be intent on wandering in distant places.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c3(guru, shukra, shani),
        des: "Jupiter = Venus = Saturn",
        result:
          "Should Jupiter, Venus and Saturn be in one House at birth one will become a king even though he might be of mean natal order, will be very famous and be a repository of virtues.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, chandra, mangal, budh),
        des: "Sun = Moon = Mars = Mercury",
        result:
          "Should these four planets be together at birth. the native will be a writer, a thief and be scurrilous in speech. He will be sickly, cunning and be capable of deceiving others.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, chandra, mangal, guru),
        des: "Sun = Moon = Mars = Jupiter",
        result:
          "One, who has these four planets in one House at birth, will be wealthy, dear to women, splendourous, will maintain decorum, be free from grief and expert in work.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, chandra, mangal, shukra),
        des: "Sun = Moon = Mars = Venus",
        result:
          "If these four planets join at birth, one will speak and conduct himself, as a great person, be happy, expert, intent on gathering money and will have learning, sons and wife.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, chandra, mangal, shani),
        des: "Sun = Moon = Mars = Saturn",
        result:
          "One, who has these four planets together at birth, will have uneven physique, be short in stature, be unwealthy and will collect food by begging and be a proven dunce.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, chandra, budh, guru),
        des: "Sun = Moon = Mercury = Jupiter",
        result:
          "If these four planets are in one House, the native will be a goldsmith (or a gold dealer etc.), be long eyed, be a sculptor, be very wealthy, bold and beautiful bodied.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, chandra, budh, shukra),
        des: "Sun = Moon = Mercury = Venus",
        result:
          "The native, who has these four planets together at birth, will be deformed, lucky, short-statured and dear to king.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, chandra, budh, shani),
        des: "Sun = Moon = Mercury = Saturn",
        result:
          "If these four planets are together at birth, the native will lose his parents in childhood, be devoid of money and happiness, be wandering, will earn food by begging and will be a liar.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, chandra, guru, shukra),
        des: "Sun = Moon = Jupiter = Venus",
        result:
          "Should these planets be in one House at birth, the subject concerned will be head of water, animals and forests (i.e. his livelihood may be through such sources), will be happy, honoured by the king and be an expert.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, chandra, guru, shani),
        des: "Sun = Moon = Jupiter = Saturn",
        result:
          "If the said planets join at birth, the native will be dark-eyed, fierce, will have many sons, be wealthy and fortunate through women.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, chandra, shukra, shani),
        des: "Sun = Moon = Venus = Saturn",
        result:
          "Should one have a combination of these planets in one House at birth, the native will have habits, like a female, be very weak, desirous of coming up and timid at all times.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, budh, mangal, guru),
        des: "Sun = Mercury = Mars = Jupiter",
        result:
          "These four planets together at birth indicate, that the subject will be brave, be a composer of Shastras, or a ruler of province, will lose his wife and money, be undesirable and will wander.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, budh, mangal, shukra),
        des: "Sun = Mercury = Mars = Venus",
        result:
          "If these four planets be together at birth, the native will be addicted to other women, be a thief, will have uneven limbs, will be a bad person and will be bereft of energy.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, budh, mangal, shani),
        des: "Sun = Mercury = Mars = Saturn",
        result:
          "If these four planets are together at birth, the subject will be a warrior, scholar, be fierce, will be meanly disposed, be chief among poets and be a minister, or a king.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, budh, guru, shukra),
        des: "Sun = Mercury = Jupiter = Venus",
        result:
          "With these planets in one House, one will be wealthy, happy, chief, will have cherished desires, will have relatives and be noble.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, budh, shukra, shani),
        des: "Sun = Mercury = Saturn = Venus",
        result:
          "Should these four planets be in conjunction at birth, one will be scurrilous in speech, fortunate, learned, soft spoken, happy, energetic, pure, wealthy, bold and helpful to friends.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, budh, guru, shani),
        des: "Sun = Mercury = Jupiter = Saturn",
        result:
          "One, who has these four planets together at birth, will have a neuter`s habits, be prestigious, fond of quarrels, will have brothers, or sisters and be not enthusiastic.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, mangal, guru, shukra),
        des: "Sun = Mars = Jupiter = Venus",
        result:
          "With the conjunction of these four planets, one will be fortunate, worth worship by the people, be wealthy, dear to king and famous.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, mangal, guru, shani),
        des: "Sun = Mars = Jupiter = Saturn",
        result:
          "Should these join at birth, one will be rash, prime among his group, will have cherished desires, will be endowed with relatives and friends and dear to king.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, mangal, shukra, shani),
        des: "Sun = Mars = Venus = Saturn",
        result:
          "One, who has these four planets together at birth, will be deformed, mean in conduct, oblique-sighted, will hate his relatives and will always be insulted.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(surya, guru, shukra, shani),
        des: "Sun = Jupiter = Venus = Saturn",
        result:
          "These four planets in conjunction at birth will make the person a miser, a poet, chief, leader of sculptors and mean.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(chandra, budh, mangal, guru),
        des: "Moon = Mercury = Mars = Jupiter",
        result:
          "One, who has the conjunction of these four planets at birth, will be an expert in Shastras, be a king, or a great minister and be extremely intelligent.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(chandra, budh, mangal, shukra),
        des: "Moon = Mercury = Mars = Venus",
        result:
          "If these four planets are together at birth, one will be fond of quarrels, will sleep much, be mean, will marry an unchaste lady, be fortunate, will hate his relatives and be not happy.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(chandra, budh, mangal, shani),
        des: "Moon = Mercury = Mars = Saturn",
        result:
          "One, who has these four planets together will be bold, be without parents, is from an ignoble race, will have many wives, friends and sons and will have good conduct.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(chandra, budh, guru, shukra),
        des: "Moon = Mercury = Jupiter = Venus",
        result:
          "One, who has these four planets together will be learned, be devoid of parents, good looking, wealthy, very lucky and be without enemies.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(chandra, budh, guru, shani),
        des: "Moon = Mercury = Jupiter = Saturn",
        result:
          "Should these be conjunct one will be virtuous, famous, noble and splendourous, fond of relatives, wise, be a kings minister and be a chief poet.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(chandra, budh, shukra, shani),
        des: "Moon = Mercury = Venus = Saturn",
        result:
          "If these planets are together at birth, the native will be intent on seeking sexual pleasures with others` wives, will have an unchaste wife, be devoid of relatives, learned and will hate people.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(chandra, mangal, guru, shukra),
        des: "Moon = Mars = Jupiter = Venus",
        result:
          "One, who has these four planets conjunct at birth will be deaf, wealthy, bold, rash in speech, firm in nature, wise and liberal.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(chandra, mangal, guru, shani),
        des: "Moon = Mars = Jupiter = Saturn",
        result:
          "If these four planets are together at birth, one will be deformed, will have a good wife, be highly tolerant, be self-respected, learned will have many friends and be happy.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(chandra, mangal, shukra, shani),
        des: "Moon = Mars = Venus = Saturn",
        result:
          "If these four planets are together, one will marry an unchaste lady, will be proud, will have eyes resembling that of a snake and will be always emotional. This is certain.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(chandra, guru, shukra, shani),
        des: "Moon = Jupiter = Venus = Saturn",
        result:
          "The native with these four planets conjunct will be devoid of mother, be lucky, will suffer from skin diseases, will be subjected to grief, be intent on roaming, will know many languages and will be truthful.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(budh, mangal, guru, shukra),
        des: "Mercury = Mars = Jupiter = Venus",
        result:
          "If these four planets are in one House, the subject will be fond of picking up quarrels with his wife, will be wealthy, worshipped by the people, will possess good qualities and be free from sickness.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(budh, mangal, guru, shani),
        des: "Mercury = Mars = Jupiter = Saturn",
        result:
          "One, who has these four planets in one House at birth, will be brave, learned, be a good speaker, be without wealth, truthful and will have good habits. He will be able to argue and endure. He will be intelligent.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(budh, mangal, shukra, shani),
        des: "Mercury = Mars = Venus = Saturn",
        result:
          "If these four planets are together at birth, the native will be an expert boxer, will depend on others, will have coarse body, will possess pride of war, be famous and will breed dogs.",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(budh, guru, shukra, shani),
        des: "Mercury = Jupiter = Venus = Saturn",
        result:
          "Should these be together at birth, the native will be intelligent, interested in Shastras, be a debaucher and an obedient servant. ",
        sou: "Saravali",
      },
      {
        group: "Conjunction",
        rule: c4(mangal, guru, shukra, shani),
        des: "Mars = Jupiter = Venus = Saturn",
        result:
          "If these four planets are together at birth, the native will be splendourous, wealthy, addicted to other women, fond of bravery, fickle-minded and ill-disposed.",
        sou: "Saravali",
      },
      //15NabhasaSaravali
      {
        group: "Nabhasa",
        rule:
          plh(1) == 1 &&
          plh(2) == 1 &&
          plh(3) == 1 &&
          plh(4) == 1 &&
          plh(5) == 1 &&
          plh(6) == 1 &&
          plh(7) == 1,
        des: "Akriti/Nauka: Seven planets in seven houses from Lagna",
        result:
          "NAU YOGA. The native`s livelihood will be through water; he will have many gains, will be very famous, be pleased, mean, strong and stingy. This and other Yogas are effective at all times independant of Dasas.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          plh(4) == 1 &&
          plh(5) == 1 &&
          plh(6) == 1 &&
          plh(7) == 1 &&
          plh(8) == 1 &&
          plh(9) == 1 &&
          plh(10) == 1,
        des: "Akriti/Koota: Seven planets in seven houses from the 4th",
        result:
          "KOOTA YOGA. The native with Koota Yoga will be a liar, be crafty, be a jailer, be poor, wicked, cruel and will always live in hills and fortresses.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          plh(7) == 1 &&
          plh(8) == 1 &&
          plh(9) == 1 &&
          plh(10) == 1 &&
          plh(11) == 1 &&
          plh(12) == 1 &&
          plh(1) == 1,
        des: "Akriti/Chatra: Seven planets in seven houses from the 7th",
        result:
          "CHATRA YOGA. The native with Chatra Yoga will help his own men, be kind, liberal, dear to king, very intelligent and will enjoy happiness in boyhood and at the end.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          plh(10) == 1 &&
          plh(11) == 1 &&
          plh(12) == 1 &&
          plh(1) == 1 &&
          plh(2) == 1 &&
          plh(3) == 1 &&
          plh(4) == 1,
        des: "Akriti/Chapa: Seven planets in seven houses from the 10th",
        result:
          "CHAPA YOGA. (KARMUKA YOGA). The native with Chapa Yoga will be a liar, jailer, thief and will live in forests. He will not have wealth in the middle of his life.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          (plh(2) == 1 &&
            plh(3) == 1 &&
            plh(4) == 1 &&
            plh(5) == 1 &&
            plh(6) == 1 &&
            plh(7) == 1 &&
            plh(8) == 1) ||
          (plh(3) == 1 &&
            plh(4) == 1 &&
            plh(5) == 1 &&
            plh(6) == 1 &&
            plh(7) == 1 &&
            plh(8) == 1 &&
            plh(9) == 1) ||
          (plh(5) == 1 &&
            plh(6) == 1 &&
            plh(7) == 1 &&
            plh(8) == 1 &&
            plh(9) == 1 &&
            plh(10) == 1 &&
            plh(11) == 1) ||
          (plh(6) == 1 &&
            plh(7) == 1 &&
            plh(8) == 1 &&
            plh(9) == 1 &&
            plh(10) == 1 &&
            plh(11) == 1 &&
            plh(12) == 1) ||
          (plh(8) == 1 &&
            plh(9) == 1 &&
            plh(10) == 1 &&
            plh(11) == 1 &&
            plh(12) == 1 &&
            plh(1) == 1 &&
            plh(2) == 1) ||
          (plh(9) == 1 &&
            plh(10) == 1 &&
            plh(11) == 1 &&
            plh(12) == 1 &&
            plh(1) == 1 &&
            plh(2) == 1 &&
            plh(3) == 1) ||
          (plh(11) == 1 &&
            plh(12) == 1 &&
            plh(1) == 1 &&
            plh(2) == 1 &&
            plh(3) == 1 &&
            plh(4) == 1 &&
            plh(5) == 1) ||
          (plh(12) == 1 &&
            plh(1) == 1 &&
            plh(2) == 1 &&
            plh(3) == 1 &&
            plh(4) == 1 &&
            plh(5) == 1 &&
            plh(6) == 1),
        des: "Akriti/Ardha Chandra: planets occupying seven continuous houses, not starting from an angle",
        result:
          "ARDHA CHANDRA YOGA. One born with Ardha Chandra Yoga will be fortunate, be an Army chief, be brilliant bodied, dear to king and strong. He will possess gems, gold and ornaments.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          suryab % 6 == 3 &&
          (isBeneficmoon || chandrab % 6 == 0) &&
          (!isBeneficmoon || chandrab % 6 == 3) &&
          mangalb % 6 == 3 &&
          budhb % 6 == 0 &&
          !budhb % 6 == 3 &&
          shukrab % 6 == 0 &&
          shanib % 6 == 3,
        des: "Akriti/Vajra: all benefics in Lagna and 7, all malefics in 4 and 10",
        result:
          "VAJRA YOGA. One born with Vajra Yoga will be happy at the beginning and end of his life, bold, beautiful, free from sickness, unfortunate and be inimical to his own people.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          suryab % 6 == 0 &&
          (isBeneficmoon || chandrab % 6 == 3) &&
          (!isBeneficmoon || chandrab % 6 == 0) &&
          mangalb % 6 == 0 &&
          budhb % 6 == 3 &&
          !budhb % 6 == 0 &&
          shukrab % 6 == 3 &&
          shanib % 6 == 0,
        des: "Akriti/Yava: all malefics in Lagna and 7, all benefics in 4 and 10",
        result:
          "YAVA YOGA One born with Yava Yoga will observe fasts and other religious rules, be intent on doing auspicious acts, be happy in the middle of life, be liberal and will have lasting wealth.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          isPlanetInKendra(surya) &&
          isPlanetInKendra(chandra) &&
          isPlanetInKendra(mangal) &&
          isPlanetInKendra(budh) &&
          isPlanetInKendra(guru) &&
          isPlanetInKendra(shukra) &&
          isPlanetInKendra(shani),
        des: "Akriti/Padma (Kamala): all planets in kendra",
        result:
          "KAMALA YOGA. One born with Kamala Yoga will be highly famous, very virtuous, assuredly long living, very rich, very bright in appearance and will be the Lord of the earth.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          (isPlanetInApoklima(surya) &&
            isPlanetInApoklima(chandra) &&
            isPlanetInApoklima(mangal) &&
            isPlanetInApoklima(budh) &&
            isPlanetInApoklima(guru) &&
            isPlanetInApoklima(shukra) &&
            isPlanetInApoklima(shani)) ||
          (isPlanetInPanaphara(surya) &&
            isPlanetInPanaphara(chandra) &&
            isPlanetInPanaphara(mangal) &&
            isPlanetInPanaphara(budh) &&
            isPlanetInPanaphara(guru) &&
            isPlanetInPanaphara(shukra) &&
            isPlanetInPanaphara(shani)),
        des: "Akriti/Vapi: all planets in apoklima or panaphara",
        result:
          "VAPI YOGA. One born with Vapi Yoga will be skillful in amassing wealth, will enjoy lasting riches and happiness, be beautiful and will be endowed with happiness from sons.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          suryab % 6 == 0 &&
          chandrab % 6 == 0 &&
          mangalb % 6 == 0 &&
          budhb % 6 == 0 &&
          gurub % 6 == 0 &&
          shukrab % 6 == 0 &&
          shanib % 6 == 0,
        des: "Akriti/Sakata: all planets occupy Lagna and the 7th",
        result:
          "SAKATA YOGA. One born with Sakata Yoga will be troubled by diseases, will have a bad wife, will be a dunce, will live by pulling carts, will be poor and be without relatives and friends.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          suryab % 6 == 3 &&
          chandrab % 6 == 3 &&
          mangalb % 6 == 3 &&
          budhb % 6 == 3 &&
          gurub % 6 == 3 &&
          shukrab % 6 == 3 &&
          shanib % 6 == 3,
        des: "Akriti/Vihaga: all planets occupy the 4th and the 10th",
        result:
          "VIHAGA YOGA. (PAKSHI YOGA). The native with this Yoga will be intent on wandering, will have mean habits, will be a messenger, will live through sexual dealings, shameless and fond of quarrels.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          plh(1) + plh(4) == 7 ||
          plh(4) + plh(7) == 7 ||
          plh(7) + plh(10) == 7 ||
          plh(10) + plh(1) == 7,
        des: "Akriti/Gada: all planets occupy 2 successive angles",
        result:
          "GADA YOGA. One born with this Yoga, will always care for honour and money, will perform yagnas etc., will be expert in Sastras and music and will be endowed with money, gold, jewels and wealth.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          suryab % 4 == 0 &&
          chandrab % 4 == 0 &&
          mangalb % 4 == 0 &&
          budhb % 4 == 0 &&
          gurub % 4 == 0 &&
          shukrab % 4 == 0 &&
          shanib % 4 == 0,
        des: "Akriti/Sringataka: all planets in Lagna or its trines",
        result:
          "SRINGATAKA YOGA. One born with this Yoga will be fond of quarrels, be a warrior, be happy, dear to king, will have a fortunate wife, be rich and will hate the fair sex.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          suryab % 4 == 0 &&
          chandrab % 4 == 0 &&
          mangalb % 4 == 0 &&
          budhb % 4 == 0 &&
          gurub % 4 == 0 &&
          shukrab % 4 == 0 &&
          shanib % 4 == 0 &&
          plh(1) == 0,
        des: "Akriti/Hala: all planets in trines without Lagna",
        result:
          "HALA YOGA. The native of this Yoga will eat in plenty, will be indigent, will have agricultural profession, will be subjected to grief, be emotional, be forsaken by relatives and friends and will be a servant.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          plh(1) >= 1 &&
          plh(3) >= 1 &&
          plh(5) >= 1 &&
          plh(7) >= 1 &&
          plh(9) >= 1 &&
          plh(11) >= 1 &&
          plh(2) == 0 &&
          plh(4) == 0 &&
          plh(6) == 0 &&
          plh(8) == 0 &&
          plh(10) == 0 &&
          plh(12) == 0,
        des: "Akriti/Chakra: all planets in 6 alternative signs from the ascendant",
        result:
          "CHAKRA YOGA. One born in this Yoga will be a king at whose feet will be the heads of the other prostrating kings adoring diamond-studded crowns. (That is, the subordinate kings, wearing diamond-studded crowns will honour a Chakra Yoga native, who will be the chief of such kings)",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          plh(2) >= 1 &&
          plh(4) >= 1 &&
          plh(6) >= 1 &&
          plh(8) >= 1 &&
          plh(10) >= 1 &&
          plh(12) >= 1 &&
          plh(1) == 0 &&
          plh(3) == 0 &&
          plh(5) == 0 &&
          plh(7) == 0 &&
          plh(9) == 0 &&
          plh(11) == 0,
        des: "Akriti/Samudra: all planets in 6 alternative signs from the 2th",
        result:
          "SAMUDRA YOGA. Should a person be born under this Yoga, he will have abundant wealth and precious stones, will be a king, be endowed with pleasures, be dear to people, will have steady mind and be truthful in disposition (“Sattvavanta”).",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          plh(1) != 0 &&
          plh(2) != 0 &&
          plh(3) != 0 &&
          plh(4) != 0 &&
          plh(1) + plh(2) + plh(3) + plh(4) == 7,
        des: "Akriti/Yupa: All planets in 4 continuous houses from the Ascendant",
        result:
          "YUPA YOGA. The native with this Yoga will have self-protection, be charitable, be endowed with riches and happiness and will observe religious fastings and vows. He will be a distinguished person.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          plh(4) != 0 &&
          plh(5) != 0 &&
          plh(6) != 0 &&
          plh(7) != 0 &&
          plh(4) + plh(5) + plh(6) + plh(7) == 7,
        des: "Akriti/Sara: All planets in 4 continuous houses from the 4th",
        result:
          "SARA YOGA. The native with sara Yoga will manufacture arrows (arms etc. in modern context), will catch hold of thieves (for example, be a police officer), will live in forests to hunt animals, will be equal to a mad person, will torture and be fond of mean handiworks.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          plh(7) != 0 &&
          plh(8) != 0 &&
          plh(9) != 0 &&
          plh(10) != 0 &&
          plh(7) + plh(8) + plh(9) + plh(10) == 7,
        des: "Akriti/Sakti: All planets in 4 continuous houses from the 7th",
        result:
          "SAKTI YOGA. One born with this Yoga will be devoid of wealth, deformed, subjected to grief, mean, lazy, short-lived, expert in war and be beautiful.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          plh(10) != 0 &&
          plh(11) != 0 &&
          plh(12) != 0 &&
          plh(1) != 0 &&
          plh(10) + plh(11) + plh(12) + plh(1) == 7,
        des: "Akriti/Danda: All planets in 4 continuous houses from the 10th",
        result:
          "DANDA YOGA. The native with this Yoga will lose his wife and sons, will be poor, discarded by all people, be out of the men of his circle, be grieved, mean and will be servant.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          isPlanetInKendra(shukra) &&
          isPlanetInKendra(guru) &&
          isPlanetInKendra(budh) &&
          isBeneficmoon &&
          isPlanetInKendra(chandra) &&
          !isPlanetInKendra(surya) &&
          !isPlanetInKendra(mangal) &&
          !isPlanetInKendra(shani) &&
          plh(1) > 0 &&
          plh(4) > 0 &&
          plh(7) > 0,
        des: "Dala/Maala: all angles exclusively occupied by benefics",
        result:
          "MAALA YOGA. One born with maala Yoga will always be happy, be endowed with conveyances, robes, wealth and pleasures, splendourous and will have plurality of wives.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          isPlanetInKendra(surya) &&
          isPlanetInKendra(mangal) &&
          isPlanetInKendra(shani) &&
          (isBeneficmoon || isPlanetInKendra(chandra)) &&
          isPlanetInKendra(budh) &&
          plh(1) > 0 &&
          plh(4) > 0 &&
          plh(7) > 0,
        des: "Dala/Sarpa: all angles exclusively occupied by malefics",
        result:
          "SARPA YOGA. The native born under this Yoga will be crooked in disposition, pitiless, always be a subject of grief, poor and will live in other`s House and eat their food.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          isPlanetInMovableRasi(surya) &&
          isPlanetInMovableRasi(chandra) &&
          isPlanetInMovableRasi(mangal) &&
          isPlanetInMovableRasi(budh) &&
          isPlanetInMovableRasi(guru) &&
          isPlanetInMovableRasi(shukra) &&
          isPlanetInMovableRasi(shani),
        des: "Asraya/Rajju: all planets in movable signs",
        result:
          "RAJJU YOGA. The subject with this Yoga will be fond of wandering, attractive in appearance, will earn money in foreign countries, be cruel and mischievously disposed.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          isPlanetInFixedRasi(surya) &&
          isPlanetInFixedRasi(chandra) &&
          isPlanetInFixedRasi(mangal) &&
          isPlanetInFixedRasi(budh) &&
          isPlanetInFixedRasi(guru) &&
          isPlanetInFixedRasi(shukra) &&
          isPlanetInFixedRasi(shani),
        des: "Asraya/Musala: all planets in fixed signs",
        result:
          "MUSALA YOGA. One born under this Yoga will be endowed with honour, wealth and wisdom, be attached to his duty, be liked by king, be famous. steady-minded and bold.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule:
          isPlanetInDualRasi(surya) &&
          isPlanetInDualRasi(chandra) &&
          isPlanetInDualRasi(mangal) &&
          isPlanetInDualRasi(budh) &&
          isPlanetInDualRasi(guru) &&
          isPlanetInDualRasi(shukra) &&
          isPlanetInDualRasi(shani),
        des: "Asraya/Nala: all planets in dual signs",
        result:
          "NALA YOGA. One born with nala Yoga will have uneven physique (i.e. some limbs long and some short), will gather money, be skillful, be helpful to his relatives and be attractive in appearance.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule: num_occ_sign() == 1,
        des: "Sankhya/Gola: all planets in 1 sign",
        result:
          "GOLA YOGA. One born in this Yoga will be indigent, indolent, devoid of learning and honour, dirty and always grieved.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule: num_occ_sign() == 2,
        des: "Sankhya/Yuga: all planets in 2 signs",
        result:
          "YUGA YOGA. One born with this Yoga will be a religious hypocrite, be bereft of wealth, forsaken by people and devoid of sons, honour and virtues.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule: num_occ_sign() == 3,
        des: "Sankhya/Sula: all planets in 3 signs",
        result:
          "SULA YOGA. The native with sula Yoga will be harsh, indolent, poor, torturous, become a prohibited person, bold, successful in war and fearful.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule: num_occ_sign() == 4,
        des: "Sankhya/Kedara: all planets in 4 signs",
        result:
          "KEDARA YOGA. One born under this Yoga will be useful to many, will have agricultural profession, be truthfully disposed, fickle minded and wealthy.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule: num_occ_sign() == 5,
        des: "Sankhya/Pasa: all planets in 5 signs",
        result:
          "PASA YOGA. One born with pasa Yoga will be bonded, be attached to work, worldly in disposition, will talk too much, will not have good qualities and will have many servants.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule: num_occ_sign() == 6,
        des: "Sankhya/Damini: all planets in 6 signs",
        result:
          "DAMINI YOGA. One born with this Yoga will be helpful, will have cattle, be Lord of money, be foolish, will have many sons and jewels, be bold and learned.",
        sou: "Saravali",
      },
      {
        group: "Nabhasa",
        rule: num_occ_sign() == 7,
        des: "Sankhya/Veena: all planets in 7 signs",
        result:
          "VEENA YOGA. One born with this combination will have friends, be eloquent, interested in Sastras, musical instruments and singing. He will be happy, will have many servants and be famous.",
        sou: "Saravali",
      },
      //16lunarSaravali
      {
        group: "Lunar",
        rule:
          (mangal == red12(chandra + 1) ||
            budh == red12(chandra + 1) ||
            guru == red12(chandra + 1) ||
            shukra == red12(chandra + 1) ||
            shani == red12(chandra + 1)) &&
          mangal != red12(chandra - 1) &&
          budh != red12(chandra - 1) &&
          guru != red12(chandra - 1) &&
          shukra != red12(chandra - 1) &&
          shani != red12(chandra - 1),
        des: "Sunapha: a planet (excepting Sun) in the 2nd from the Moon",
        result:
          "One born with Sunapha Yoga will be wealthy, will have self-made prowess (or will reach an exalted position of his own efforts), be very virtuous, be learned in Shastras and their meanings, be very famous, virtuous (like Lord Rama), be peacefully disposed, happy, be a king, or a minister and be highly intelligent.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule:
          (mangal == red12(chandra - 1) ||
            budh == red12(chandra - 1) ||
            guru == red12(chandra - 1) ||
            shukra == red12(chandra - 1) ||
            shani == red12(chandra - 1)) &&
          mangal != red12(chandra + 1) &&
          budh != red12(chandra + 1) &&
          guru != red12(chandra + 1) &&
          shukra != red12(chandra + 1) &&
          shani != red12(chandra + 1),
        des: "Anapha: a planet (excepting Sun) in the 12th from the Moon",
        result:
          "One born in Anapha Yoga will be eloquent in speech, magnanimous, virtuous, will enjoy food, drink, flowers, robes and females, will be famous, calm in disposition, happy, pleased and will possess a beautiful body.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule:
          (mangal == red12(chandra - 1) ||
            budh == red12(chandra - 1) ||
            guru == red12(chandra - 1) ||
            shukra == red12(chandra - 1) ||
            shani == red12(chandra - 1)) &&
          (mangal == red12(chandra + 1) ||
            budh == red12(chandra + 1) ||
            guru == red12(chandra + 1) ||
            shukra == red12(chandra + 1) ||
            shani == red12(chandra + 1)),
        des: "Durudhura: planets (excepting Sun) in the 2nd and 12th from the Moon",
        result:
          "One born in Durudhura Yoga will be famous on the earth for his speech, wisdom, valour and virtues. He will enjoy freedom, comforts, wealth and conveyances. He will be liberal, but will come to grief by maintaining his family members. He will have good behavior.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule:
          mangal != red12(chandra - 1) &&
          budh != red12(chandra - 1) &&
          guru != red12(chandra - 1) &&
          shukra != red12(chandra - 1) &&
          shani != red12(chandra - 1) &&
          mangal != red12(chandra + 1) &&
          budh != red12(chandra + 1) &&
          guru != red12(chandra + 1) &&
          shukra != red12(chandra + 1) &&
          shani != red12(chandra + 1),
        des: "Kemadruma: no planet (excepting Sun) in the 2nd and 12th from the Moon",
        result:
          "The native with Kemadruma Yoga will be deprived of life, drinks, food, residence, robes and friends, though he may belong to regal scion. He will suffer from poverty, grief, sickness and be dirty. He will live by hard labor, be wicked and be inimically disposed to one and all.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule: mangal == red12(chandra + 1),
        des: "Sunapha Yoga caused by Mars",
        result:
          "If Sunapha Yoga is caused by Mars (by being in the 2nd of the Moon), the native will be valorous, wealthy, cruel in speech, be an Army chief, will be fierce, torturous, proud and inimical.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule: budh == red12(chandra + 1),
        des: "Sunapha Yoga caused by Mercury",
        result:
          "If Mercury be the cause of Sunapha Yoga, the native will be expert in Vedas, Shastras and music. He will be virtuous and a poet. He will be high-minded, intent on thinking of good for all and will possess a brilliant physique.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule: guru == red12(chandra + 1),
        des: "Sunapha Yoga caused by Jupiter",
        result:
          "Should Jupiter cause Sunapha Yoga, a person so born will have high learning, will be famous and himself be a king, or dear to a king. He will have a good family and have plenty of wealth.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule: shukra == red12(chandra + 1),
        des: "Sunapha Yoga caused by Venus",
        result:
          "Venus will give wife, lands, wealth, prowess, quadrupeds and valour. The native will further be honoured by king and will also be courageous.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule: shani == red12(chandra + 1),
        des: "Sunapha Yoga caused by Saturn",
        result:
          "Should Saturn be in the 2nd of the Moon causing Sunapha Yoga, the native will be skillful, be worshipped by the people in his village and city and will have wealth galore. He will be devoted to his work and be brave.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule: mangal == red12(chandra - 1),
        des: "Anapha Yoga caused by Mars",
        result:
          "If Anapha Yoga is caused by Mars-being in the 12th from the Moonthe native will head a band of thieves, will be arrogant in disposition, be honoured, fond of war, given to anger, good, praiseworthy, good-bodied and proud.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule: budh == red12(chandra - 1),
        des: "Anapha Yoga caused by Mercury",
        result:
          "If by Mercury, the native will be an expert in singing, dancing and writing, will be a poet and an able orator. He will be conferred honours by tile ruler. will have a brilliant body and will perform famous deeds.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule: guru == red12(chandra - 1),
        des: "Anapha Yoga caused by Jupiter",
        result:
          "Should the Yoga be caused by Jupiter, the native will be majestic, strong, intelligent, fond of assembly, famous through a king and will be a poet.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule: shukra == red12(chandra - 1),
        des: "Anapha Yoga caused by Venus",
        result:
          "Venus causing this Yoga gives an exceedingly great liking for women. The native will be dear to the king and will enjoy pleasures. He will be splendourous, famous and will have abundant gold.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule: shani == red12(chandra - 1),
        des: "Anapha Yoga caused by Saturn",
        result:
          "If Saturn causes this Yoga, the subject will be broad-shouldered, be a leader, be indired to keep up his commitments, be rich with quadrupeds, devoted to an infamous lady and be virtuous.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule:
          (mangal == red12(chandra - 1) && budh == red12(chandra + 1)) ||
          (mangal == red12(chandra + 1) && budh == red12(chandra - 1)),
        des: "Durudhura Yoga caused by Mars and Mercury",
        result:
          "If Durudhura Yoga is caused by the pair of Mars and Mercury, the native will be a liar, be very wealthy, expert, very wicked, greatly miserly, addicted to an old lady and be chief in his race.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule:
          (mangal == red12(chandra - 1) && guru == red12(chandra + 1)) ||
          (mangal == red12(chandra + 1) && guru == red12(chandra - 1)),
        des: "Durudhura Yoga caused by Mars and Jupiter",
        result:
          "If Durudhura Yoga is caused by Mars and Jupiter, one will be famous by his deeds, be mighty (or wealthy), inimically disposed to many and disposed to anger, will protect his men and will gather money.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule:
          (mangal == red12(chandra - 1) && shukra == red12(chandra + 1)) ||
          (mangal == red12(chandra + 1) && shukra == red12(chandra - 1)),
        des: "Durudhura Yoga caused by Mars and Venus",
        result:
          "If the Moon has Venus and Mars on either side, the native will have a virtuous wife, will be fortunate, argumentative, pure, skillful, will like doing exercises and be bold in war.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule:
          (mangal == red12(chandra - 1) && shani == red12(chandra + 1)) ||
          (mangal == red12(chandra + 1) && shani == red12(chandra - 1)),
        des: "Durudhura Yoga caused by Mars and Saturn",
        result:
          "If Saturn and Mars plank the Moon, the native will be the husband of a bad lady. He will save a lot of money. He will have vices. He will be given to anger and be a tale bearer. He will win over his enemies.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule:
          (budh == red12(chandra - 1) && guru == red12(chandra + 1)) ||
          (budh == red12(chandra + 1) && guru == red12(chandra - 1)),
        des: "Durudhura Yoga caused by Mercury and Jupiter",
        result:
          "Should Jupiter and Mercury be on either side of the Moon, the native will be virtuous, learned in Shastras, garrulous, be a good poet, be wealthy, capable of making sacrifices and be famous.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule:
          (budh == red12(chandra - 1) && shukra == red12(chandra + 1)) ||
          (budh == red12(chandra + 1) && shukra == red12(chandra - 1)),
        des: "Durudhura Yoga caused by Mercury and Venus",
        result:
          "If Durudhura Yoga is caused by Mercury and Venus, the person will be a sweet speaker, be fortunate, splendourous, beautiful, be fond of dance, singing etc., be served, valiant and be a minister.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule:
          (budh == red12(chandra - 1) && shani == red12(chandra + 1)) ||
          (budh == red12(chandra + 1) && shani == red12(chandra - 1)),
        des: "Durudhura Yoga caused by Mercury and Saturn",
        result:
          "If Mercury and Saturn plank the Moon, the native will move from one country to the other to earn money. He will not be much educated, will be worshipped by others, but be inimical to his own men.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule:
          (guru == red12(chandra - 1) && shukra == red12(chandra + 1)) ||
          (guru == red12(chandra + 1) && shukra == red12(chandra - 1)),
        des: "Durudhura Yoga caused by Jupiter and Venus",
        result:
          "Should Jupiter and Venus cause this Yoga, by being on either side of the Moon, the native will be courageous, intelligent, will have political wisdom, will possess gold and gems, will be famous and be in the employ of a king.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule:
          (guru == red12(chandra - 1) && shani == red12(chandra + 1)) ||
          (guru == red12(chandra + 1) && shani == red12(chandra - 1)),
        des: "Durudhura Yoga caused by Jupiter and Saturn",
        result:
          "If Jupiter and Saturn be such planets, as to cause Durudhura Yoga the native will be happy, will have knowledge of politics, will be sweet in speech, learned, peaceful, wealthy and good looking.",
        sou: "Saravali",
      },
      {
        group: "Lunar",
        rule:
          (shukra == red12(chandra - 1) && shani == red12(chandra + 1)) ||
          (shukra == red12(chandra + 1) && shani == red12(chandra - 1)),
        des: "Durudhura Yoga caused by Venus and Saturn",
        result:
          "One, who has Durudhura Yoga caused by Venus and Saturn will conduct himself, like an old man (i.e. so mature), be chief in his race, skillful, dear to women and will have plenty of money. He will be honoured by the king and gather abundant wealth.",
        sou: "Saravali",
      },
      //25lordshipParashar
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House1), House1),
        des: "Lord of 1 in 1",
        result:
          "The native will be endowed with physical happiness and prowess. He will be intelligent, fickle-minded, will have two wives and will unite with other females.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House1), House2),
        des: "Lord of 1 in 2",
        result:
          "the native will be gainful, scholarly, happy, endowed with good qualities, be religious, honourable and will have many wives.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House1), House3),
        des: "Lord of 1 in 3",
        result:
          "The native will equal a lion in valour, be endowed with all kinds of wealth, be honourable, will have two wives, be intelligent and happy.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House1), House4),
        des: "Lord of 1 in 4",
        result:
          "The native will be endowed with paternal and maternal happiness, will have many brothers, be lustful, virtuous and charming.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House1), House5),
        des: "Lord of 1 in 5",
        result:
          "The native will have mediocre progenic happiness, will lose his first child, be honourable, given to anger and be dear to king.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House1), House6),
        des: "Lord of 1 in 6",
        result:
          "If Lagnas Lord is related to a malefic the native will be devoid of physical happiness and will be troubled by enemies, if there is no benefic aspect.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House1), House7),
        des: "Lord of 1 in 7",
        result:
          "The natives wife will not live (long). If the planet in question is a benefic, one will wander aimlessly, face penury and be dejected. He will alternatively become a king (if the said planet is strong).",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House1), House8),
        des: "Lord of 1 in 8",
        result:
          "The native will be an accomplished scholar, be sickly, thievish, be given to much anger, be a gambler and will join others wives.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House1), House9),
        des: "Lord of 1 in 9",
        result:
          "The native will be fortunate, dear to people, be a devotee of Sri Vishnu, be skilful, eloquent in speech and be endowed with wife, sons and wealth.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House1), House10),
        des: "Lord of 1 in 10",
        result:
          "The native will be endowed with paternal happiness, royal honour, fame among men and will doubtlessly have self-earned wealth.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House1), House11),
        des: "Lord of 1 in 11",
        result:
          "The native will always be endowed with gains, good qualities, fame and many wives.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House1), House12),
        des: "Lord of 1 in 12",
        result:
          "If Lagnas Lord is devoid of benefic aspect and/or conjunction, the native will be bereft of physical happiness, will spend unfruitfully and be given to much anger.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House2), House1),
        des: "Lord of 2 in 1",
        result:
          "The native will be endowed with sons and wealth, be inimical to his family, lustful, hard-hearted and will do others jobs.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House2), House2),
        des: "Lord of 2 in 2",
        result:
          "The native will be wealthy, proud, will have two, or more wives and be bereft of progeny.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House2), House3),
        des: "Lord of 2 in 3",
        result:
          "The native will be valorous, wise, virtuous, lustful and miserly; all these, when related to a benefic. If related to a malefic, the native will be a heterodox.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House2), House4),
        des: "Lord of 2 in 4",
        result:
          "The native will acquire all kinds of wealth. If the second Lord is exalted and is in conjunction with Jupiter, one will be equal to a king.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House2), House5),
        des: "Lord of 2 in 5",
        result:
          "The native will be wealthy. Not only the native, but also his sons will be intent on earning wealth.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House2), House6),
        des: "Lord of 2 in 6",
        result:
          "If the second Lord is along with a benefic, the native will gain wealth through his enemies; if the Lord is in conjunction with a malefic, there will be loss through enemies apart from mutilation of shanks.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House2), House7),
        des: "Lord of 2 in 7",
        result:
          "The native will be addicted to others wives and he will be a doctor. If a malefic is related to the said placement by conjunction with the second Lord, or by aspect, the natives wife will be of questionable character.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House2), House8),
        des: "Lord of 2 in 8",
        result:
          "The native will be endowed with abundant land and wealth. But he will have limited marital felicity and be bereft of happiness from his elder brother.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House2), House9),
        des: "Lord of 2 in 9",
        result:
          "The native will be wealthy, diligent, skilful, sick during childhood and will later on be happy and will visit shrines, observing religious code etc.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House2), House10),
        des: "Lord of 2 in 10",
        result:
          "The native will be libidinous, honourable and learned; he will have many wives and much wealth, but he will be bereft of filial happiness.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House2), House11),
        des: "Lord of 2 in 11",
        result:
          "The native will have all kinds of wealth, be ever diligent, honourable and famous.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House2), House12),
        des: "Lord of 2 in 12",
        result:
          "The native will be adventurous, be devoid of wealth and be interested in others wealth, while his eldest child will not keep him happy.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House3), House1),
        des: "Lord of 3 in 1",
        result:
          "The native will have self-made wealth, be disposed to worship, be valorous and be intelligent, although devoid of learning.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House3), House2),
        des: "Lord of 3 in 2",
        result:
          "The native will be corpulent, devoid of valour, will not make much efforts, be not happy and will have an eye on others wives and others wealth.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House3), House3),
        des: "Lord of 3 in 3",
        result:
          "The native will be endowed with happiness through co-born and will have wealth and sons, be cheerful and extremely happy.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House3), House4),
        des: "Lord of 3 in 4",
        result:
          "The native will be happy, wealthy and intelligent, but will acquire a wicked spouse.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House3), House5),
        des: "Lord of 3 in 5",
        result:
          "The native will have sons and be virtuous. If in the process the 3rd Lord be in conjunction with, or receives an aspect from a malefic, the native will have a formidable wife.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House3), House6),
        des: "Lord of 3 in 6",
        result:
          "The native will be inimical to his co-born, be affluent, will not be well disposed to his maternal uncle and be dear to his maternal aunt.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House3), House7),
        des: "Lord of 3 in 7",
        result:
          "The native will be interested in serving the king. He will not be happy during boyhood, but the end of his life he will be happy.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House3), House8),
        des: "Lord of 3 in 8",
        result:
          "The native will be a thief, will derive his livelihood serving others and will die at the gate of the royal palace.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House3), House9),
        des: "Lord of 3 in 9",
        result:
          "The native will lack paternal bliss, will make fortunes through wife and will enjoy progenic and other pleasures.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House3), House10),
        des: "Lord of 3 in 10",
        result:
          "The native will have all lands of happiness and self-made wealth and be interested in nurturing wicked females.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House3), House11),
        des: "Lord of 3 in 11",
        result:
          "The native will always gain in trading, be intelligent, although not literate, be adventurous and will serve others.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House3), House12),
        des: "Lord of 3 in 12",
        result:
          "The native will spend on evil deeds, will have a wicked father and will be fortunate through a female.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House4), House1),
        des: "Lord of 4 in 1",
        result:
          "The native will be endowed with learning, virtues, ornaments, lands, conveyances and maternal happiness.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House4), House2),
        des: "Lord of 4 in 2",
        result:
          "The native will enjoy pleasures, all kinds of wealth, family life and honour and be adventurous. He will be cunning in disposition.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House4), House3),
        des: "Lord of 4 in 3",
        result:
          "The native will be valorous, will have servants, be liberal, virtuous and charitable and will possess self-earned wealth. He will be free from diseases.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House4), House4),
        des: "Lord of 4 in 4",
        result:
          "The native will be a minister and will possess all kinds of wealth. He will be skilful, virtuous, honourable, learned, happy and be well disposed to his spouse.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House4), House5),
        des: "Lord of 4 in 5",
        result:
          "The native will be happy and be liked by all. He will be devoted to Sri Vishnu, be virtuous, honourable and will have self-earned wealth.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House4), House6),
        des: "Lord of 4 in 6",
        result:
          "The native will be devoid of maternal happiness, be given to anger, be a thief and a conjurer, be independent in action and be indisposed.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House4), House7),
        des: "Lord of 4 in 7",
        result:
          "The native will be endowed with a high degree of education, will sacrifice his patrimony and be akin to the dumb in an assembly.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House4), House8),
        des: "Lord of 4 in 8",
        result:
          "The native will be devoid of domestic and other comforts, will not enjoy much parental happiness and be equal to a neuter.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House4), House9),
        des: "Lord of 4 in 9",
        result:
          "The native will be dear to one and all, be devoted to God, be virtuous, honourable and endowed with every land of happiness.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House4), House10),
        des: "Lord of 4 in 10",
        result:
          "The native will enjoy royal honours, be an alchemist, be extremely pleased, will enjoy pleasures and will conquer his five senses.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House4), House11),
        des: "Lord of 4 in 11",
        result:
          "The native will have fear of secret disease, he will be liberal, virtuous, charitable and helpful to others.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House4), House12),
        des: "Lord of 4 in 12",
        result:
          "The native will be devoid of domestic and other comforts, will have vices and be foolish and indolent.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House5), House1),
        des: "Lord of 5 in 1",
        result:
          "The native will be scholarly, be endowed with progenic happiness, be a miser, be crooked and will steal others wealth.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House5), House2),
        des: "Lord of 5 in 2",
        result:
          "The native will have many sons and wealth, be a pater familias, be honourable, be attached to his spouse and be famous in the world.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House5), House3),
        des: "Lord of 5 in 3",
        result:
          "The native will be attached to his co-born, be a tale bearer and a miser and be always interested in his own work.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House5), House4),
        des: "Lord of 5 in 4",
        result:
          "The native will be happy, endowed with maternal happiness, wealth and intelligence and be a king, or a minister, or a preceptor.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House5), House5),
        des: "Lord of 5 in 5",
        result:
          "The native will have progeny, if related to a benefic; there will be no issues, if malefic is related to the 5th Lord, placed in the 5th. 5th Lord in 5th Bhava will, however, make one virtuous and dear to friends.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House5), House6),
        des: "Lord of 5 in 6",
        result:
          "The native will obtain such sons, who will be equal to his enemies, or will lose them, or will acquire an adopted, or purchased son.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House5), House7),
        des: "Lord of 5 in 7",
        result:
          "The native will be honourable, very religious, endowed with progenic happiness and be helpful to others.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House5), House8),
        des: "Lord of 5 in 8",
        result:
          "The native will not have much progenic happiness, be troubled by cough and pulmonary disorders, be given to anger and be devoid of happiness.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House5), House9),
        des: "Lord of 5 in 9",
        result:
          "The native will be a prince, or equal to him, will author treatises, be famous and will shine in his race.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House5), House10),
        des: "Lord of 5 in 10",
        result:
          "The native will enjoy a Raja Yoga and various pleasures and be very famous.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House5), House11),
        des: "Lord of 5 in 11",
        result:
          "The native will be learned, dear to people, be an author of treatises, be very skilful and be endowed with many sons and wealth.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House5), House12),
        des: "Lord of 5 in 12",
        result:
          "The native will be bereft of happiness from his own sons, will have an adopted, or purchased son.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House6), House1),
        des: "Lord of 6 in 1",
        result:
          "The native will be sickly, famous, inimical to his own men, rich, honourable, adventurous and virtuous.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House6), House2),
        des: "Lord of 6 in 2",
        result:
          "The native will be adventurous, famous among his people, will live in alien countries, be happy, be a skilful speaker and be always interested in his own work.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House6), House3),
        des: "Lord of 6 in 3",
        result:
          "The native will be given to anger, be bereft of courage, inimical to all of his co-born and will have disobedient servants.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House6), House4),
        des: "Lord of 6 in 4",
        result:
          "The native will be devoid maternal happiness, be intelligent, be a tale bearer, be jealous, evil-minded and very rich.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House6), House5),
        des: "Lord of 6 in 5",
        result:
          "The native will have fluctuating finances. He will incur enmity with his sons and friends. He will be happy, selfish and kind.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House6), House6),
        des: "Lord of 6 in 6",
        result:
          "The native will have enmity with the group of his kinsmen, but be friendly to others and will enjoy mediocre happiness in matters, like wealth.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House6), House7),
        des: "Lord of 6 in 7",
        result:
          "The native will be deprived of happiness through wedlock. He will be famous, virtuous, honourable, adventurous and wealthy.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House6), House8),
        des: "Lord of 6 in 8",
        result:
          "The native will be sickly, inimical, will desire others wealth, be interested in others wives and be impure.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House6), House9),
        des: "Lord of 6 in 9",
        result:
          "The native will trade in wood and stones (Pashan also means poison) and will have fluctuating professional fortunes.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House6), House10),
        des: "Lord of 6 in 10",
        result:
          "The native will be well known among his men, will not be respectfully disposed to his father and will be happy in foreign countries. He will be a gifted speaker.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House6), House11),
        des: "Lord of 6 in 11",
        result:
          "The native will gain wealth through his enemies, be virtuous, adventurous and will be somewhat bereft of progenic happiness.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House6), House12),
        des: "Lord of 6 in 12",
        result:
          "The native will always spend on vices, be hostile to learned people and will torture living beings.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House7), House1),
        des: "Lord of 7 in 1",
        result:
          "The native will go to others wives, be wicked, skilful, devoid of courage and afflicted by windy diseases.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House7), House2),
        des: "Lord of 7 in 2",
        result:
          "The native will have many wives, will gain wealth through his wife and be procrastinating in nature.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House7), House3),
        des: "Lord of 7 in 3",
        result:
          "The native will face loss of children and sometimes with great difficulty there will exist a living son. There is also the possibility of birth of a daughter.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House7), House4),
        des: "Lord of 7 in 4",
        result:
          "The wife of the native will not be under his control. He will be fond of truth, intelligent and religious. He will suffer from dental diseases.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House7), House5),
        des: "Lord of 7 in 5",
        result:
          "The native will be honourable, endowed with all (i.e. seven principal) virtues, always delighted and endowed with all kinds of wealth.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House7), House6),
        des: "Lord of 7 in 6",
        result:
          "The native will beget a sickly wife and he will be inimical to her. He will be given to anger and will be devoid of happiness.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House7), House7),
        des: "Lord of 7 in 7",
        result:
          "The native will be endowed with happiness through wife, be courageous, skilful and intelligent, but only afflicted by windy diseases.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House7), House8),
        des: "Lord of 7 in 8",
        result:
          "The native will be deprived of marital happiness. His wife will be troubled by diseases, be devoid of good disposition and will not obey the native.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House7), House9),
        des: "Lord of 7 in 9",
        result:
          "The native will have union with many women, be well disposed to his own wife and will have many undertakings.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House7), House10),
        des: "Lord of 7 in 10",
        result:
          "The native will beget a disobedient wife, will be religious and endowed with wealth, sons etc.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House7), House11),
        des: "Lord of 7 in 11",
        result:
          "The native will gain wealth through his wife, be endowed with less happiness from sons etc. and will have daughters.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House7), House12),
        des: "Lord of 7 in 12",
        result:
          "The native will incur penury, be a miser and his livelihood will be related to clothes. His wife will be a spendthrift.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House8), House1),
        des: "Lord of 8 in 1",
        result:
          "The native will be devoid of physical felicity and will suffer from wounds. He will be hostile to gods and Brahmins.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House8), House2),
        des: "Lord of 8 in 2",
        result:
          "The native will be devoid of bodily vigour, will enjoy a little wealth and will not regain lost wealth.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House8), House3),
        des: "Lord of 8 in 3",
        result:
          "The native will be devoid of fraternal happiness, be indolent and devoid of servants and strength.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House8), House4),
        des: "Lord of 8 in 4",
        result:
          "The child will be deprived of its mother. He will be devoid of a house, lands and happiness and will doubtlessly betray his friends.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House8), House5),
        des: "Lord of 8 in 5",
        result:
          "The native will be dull witted, will have limited number of children, be long-lived and wealthy.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House8), House6),
        des: "Lord of 8 in 6",
        result:
          "The native will win over his enemies, be afflicted by diseases and during childhood will incur danger through snakes and water.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House8), House7),
        des: "Lord of 8 in 7",
        result:
          "The native will have two wives. If the 8th Lord is conjunct with a malefic in the 7th Bhava, there will surely be downfall in his business.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House8), House8),
        des: "Lord of 8 in 8",
        result:
          "The native will be long-lived. If the said planet is weak, being in the 8th Bhava, the longevity will be medium, while the native will be a thief, be blameworthy and will blame others as well.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House8), House9),
        des: "Lord of 8 in 9",
        result:
          "The native will betray his religion, be a heterodox, will beget a wicked wife and will steal others wealth.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House8), House10),
        des: "Lord of 8 in 10",
        result:
          "The native will be devoid of paternal bliss, be a talebearer and be bereft of livelihood. If there is aa aspect in the process from a benefic, then these evils will not mature.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House8), House11),
        des: "Lord of 8 in 11",
        result:
          "If the 8th Lord along with a malefic is in the 11th Bhava, the native will be devoid of wealth and will be miserable in boyhood, but happy later on. Should the 8th Lord be conjunct with a benefic and be in the 11th Bhava, the native will be long-lived.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House8), House12),
        des: "Lord of 8 in 12",
        result:
          "The native will spend on evil deeds and will incur a short life. More so, if there be additionally a malefic in the said Bhava.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House9), House1),
        des: "Lord of 9 in 1",
        result:
          "The native will be fortunate, will be honoured by the king, be virtuous, charming, learned and honoured by the public.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House9), House2),
        des: "Lord of 9 in 2",
        result:
          "The native will be a scholar, be dear to all, wealthy, sensuous and endowed with happiness from wife, sons etc.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House9), House3),
        des: "Lord of 9 in 3",
        result:
          "The native will be endowed with fraternal bliss, be wealthy, virtuous and charming.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House9), House4),
        des: "Lord of 9 in 4",
        result:
          "The native will enjoy houses, conveyances and happiness, will have all kinds of wealth and be devoted to his mother.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House9), House5),
        des: "Lord of 9 in 5",
        result:
          "The native will be endowed with sons and prosperity, devoted to elders, bold, charitable and learned.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House9), House6),
        des: "Lord of 9 in 6",
        result:
          "The native will enjoy meagre prosperity, be devoid of happiness from maternal relatives and be always troubled by enemies.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House9), House7),
        des: "Lord of 9 in 7",
        result:
          "The native will beget happiness after marriage, be virtuous and famous.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House9), House8),
        des: "Lord of 9 in 8",
        result:
          "The native will not be prosperous and will not enjoy happiness from his elder brother.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House9), House9),
        des: "Lord of 9 in 9",
        result:
          "The native will be endowed with abundant fortunes, virtues and beauty and will enjoy much happiness from co-born.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House9), House10),
        des: "Lord of 9 in 10",
        result:
          "The native will be a king, or equal to him, or be a minister, or an Army chief, be virtuous and dear to all.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House9), House11),
        des: "Lord of 9 in 11",
        result:
          "The native will enjoy financial gains day by day, be devoted to elders, virtuous and meritorious in acts.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House9), House12),
        des: "Lord of 9 in 12",
        result:
          "The native will incur loss of fortunes, will always spend on auspicious acts and will become poor on account of entertaining guests.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House10), House1),
        des: "Lord of 10 in 1",
        result:
          "The native will be scholarly, famous, be a poet, will incur diseases in boyhood and be happy later on. His wealth will increase day by day.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House10), House2),
        des: "Lord of 10 in 2",
        result:
          "The native will be wealthy, virtuous, honoured by the king, charitable and will enjoy happiness from father and others.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House10), House3),
        des: "Lord of 10 in 3",
        result:
          "The native will enjoy happiness from brothers and servants, be valorous, virtuous, eloquent and truthful.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House10), House4),
        des: "Lord of 10 in 4",
        result:
          "The native will be happy, be always interested in his mothers welfare, will Lord over conveyances, lands and houses, be virtuous and wealthy.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House10), House5),
        des: "Lord of 10 in 5",
        result:
          "The native will be endowed with all kinds of learning, he will be always delighted and he will be wealthy and endowed with sons.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House10), House6),
        des: "Lord of 10 in 6",
        result:
          "The native will be bereft of paternal bliss. Although he may be skilful, he will be bereft of wealth and be troubled by enemies.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House10), House7),
        des: "Lord of 10 in 7",
        result:
          "The native will be endowed with happiness through wife, be intelligent, virtuous, eloquent, truthful and religious.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House10), House8),
        des: "Lord of 10 in 8",
        result:
          "The native will be devoid of acts, long-lived and intent on blaming others.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House10), House9),
        des: "Lord of 10 in 9",
        result:
          "One born of royal scion will become a king, whereas an ordinary native will be equal to a king. This placement will confer wealth and progenic happiness etc.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House10), House10),
        des: "Lord of 10 in 10",
        result:
          "The native will be skilful in all jobs, be valorous, truthful and devoted to elders.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House10), House11),
        des: "Lord of 10 in 11",
        result:
          "The native will be endowed with wealth, happiness and sons. He will be virtuous, truthful and always delighted.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House10), House12),
        des: "Lord of 10 in 12",
        result:
          "The native will spend through royal abodes, will have fear from enemies and will be worried in spite of being skilful.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House11), House1),
        des: "Lord of 11 in 1",
        result:
          "The native will be genuine in disposition, be rich, happy, even-sighted, be a poet, be eloquent in speech and be always endowed with gains.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House11), House2),
        des: "Lord of 11 in 2",
        result:
          "The native will be endowed with all kinds of wealth and all kinds of accomplishments, charitable, religious and always happy.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House11), House3),
        des: "Lord of 11 in 3",
        result:
          "The native will be skilful in all jobs, wealthy, endowed with fraternal bliss and may sometimes incur gout pains.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House11), House4),
        des: "Lord of 11 in 4",
        result:
          "The native will gain from maternal relatives, will undertake visits to shrines and will possess happiness of house and lands.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House11), House5),
        des: "Lord of 11 in 5",
        result:
          "The native will be happy, educated and virtuous. He will be religious and happy.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House11), House6),
        des: "Lord of 11 in 6",
        result:
          "The native will be afflicted by diseases, be cruel, living in foreign places and troubled by enemies.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House11), House7),
        des: "Lord of 11 in 7",
        result:
          "The native will always gain through his wifes relatives, be liberal, virtuous, sensuous and will remain at the command of his spouse.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House11), House8),
        des: "Lord of 11 in 8",
        result:
          "The native will incur reversals in his undertakings and will live long, while his wife will predecease him.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House11), House9),
        des: "Lord of 11 in 9",
        result:
          "The native will be fortunate, skilful, truthful, honoured by the king and be affluent.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House11), House10),
        des: "Lord of 11 in 10",
        result:
          "The native will be honoured by the king, be virtuous, attached to his religion, intelligent, truthful and will subdue his senses.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House11), House11),
        des: "Lord of 11 in 11",
        result:
          "The native will gain in all his undertakings, while his learning and happiness will be on the increase day by day.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House11), House12),
        des: "Lord of 11 in 12",
        result:
          "The native will always depend on good deeds, be sensuous, will have many wives and will befriend barbarians.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House12), House1),
        des: "Lord of 12 in 1",
        result:
          "The native will be a spendthrift, be weak in constitution, will suffer from phlegmatic disorders and be devoid of wealth and learning.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House12), House2),
        des: "Lord of 12 in 2",
        result:
          "The native will always spend on inauspicious deeds, be religious, will speak sweetly and will be endowed with virtues and happiness.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House12), House3),
        des: "Lord of 12 in 3",
        result:
          "The native will be devoid of fraternal bliss, will hate others and will promote self-nourishment.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House12), House4),
        des: "Lord of 12 in 4",
        result:
          "The native will be devoid of maternal happiness and will day by day accrue losses with respect to lands, conveyances and houses.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House12), House5),
        des: "Lord of 12 in 5",
        result:
          "The native will be bereft of sons and learning. He will spend, as well as visit shrines in order to beget a son.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House12), House6),
        des: "Lord of 12 in 6",
        result:
          "The native will incur enmity with his own men, be given to anger, be sinful, miserable and will go to others wives.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House12), House7),
        des: "Lord of 12 in 7",
        result:
          "The native will incur expenditure on account of his wife, will not enjoy conjugal bliss and will be bereft of learning and strength.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House12), House8),
        des: "Lord of 12 in 8",
        result:
          "The native will always gain, will speak affably, will enjoy a medium span of life and be endowed with all good qualities.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House12), House9),
        des: "Lord of 12 in 9",
        result:
          "The native will dishonour his elders, be inimical even to his friends and be always intent on achieving his own ends.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House12), House10),
        des: "Lord of 12 in 10",
        result:
          "The native will incur expenditure through royal persons and will enjoy only moderate paternal bliss.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House12), House11),
        des: "Lord of 12 in 11",
        result:
          "The native will incur losses, be brought up by others and will sometimes gain through others.",
        sou: "Hora Shastra",
      },
      {
        group: "Lordship",
        rule: isPlanetInHouse(lordOf(House12), House12),
        des: "Lord of 12 in 12",
        result:
          "The native will only face heavy expenditure, will not have physical felicity, be irritable and spiteful.",
        sou: "Hora Shastra",
      },
      //30sunSaravali
      {
        group: "Rasi_Position",
        rule: surya === 0,
        des: "Sun in Aries",
        result:
          "One, who has the Sun in Aries will comment on the meanings of Shastras, be famous in arts, fond of war, fierce, attached to his duty, fond of roaming, will have strong bones, be good in deeds, will do valorous acts, will be subjected to bilious and bloody disorders, be splendourous and strong. The native will also become a king.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: surya === 7,
        des: "Sun in Scorpio",
        result:
          "The native with the Sun in Scorpio will have an incombatible lust for war, be away from Vedic (religious) path, be a liar, a dunce, will have a base, wicked wife (can also mean loss of wife), be cruel and be attached to mean women. He will be irascible, will follow bad course, be a miser, be fond of promoting quarrels, be troubled by weapons, fire and poison and be unfortunate in respect of parents.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 2 && isGrahaDrishti(1, chandra, surya),
        des: "Sun in a sign of Mars aspected by Moon",
        result:
          "Should the Sun be in a Sign of Mars (i.e. either in Aries, or in Scorpio) and be aspected by the Moon, the native will be interested in giving away gifts, will have many servants, be charming, be dear to fair sex and will have a soft physique.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 2 && isGrahaDrishti(2, mangal, surya),
        des: "Sun in a sign of Mars aspected by Mars",
        result:
          "Should the Sun be in a Sign of Mars and be aspected by Mars, the native will display his courage in battle, be cruel, will possess eyes, hands and legs of blood-red colour, be splendourous and strong.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 2 && isGrahaDrishti(3, budh, surya),
        des: "Sun in a sign of Mars aspected by Mercury",
        result:
          "Should the Sun be in a Sign of Mars and be aspected by Mercury, the subject will be a servant, will do others` jobs, will not have much wealth, be devoid of strength, be subjected to much grief and will possess a dirty body.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 2 && isGrahaDrishti(4, guru, surya),
        des: "Sun in a sign of Mars aspected by Jupiter",
        result:
          "Should the Sun be in a Sign of Mars and Jupiter aspects the said Sun, the native will have plenty of money, will donate, be a king`s minister, a judge and a supreme person.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 2 && isGrahaDrishti(5, shukra, surya),
        des: "Sun in a sign of Mars aspected by Venus",
        result:
          "If Venus aspects the Sun posited in a House of Mars, the native will be the husband of a bad woman, will have many enemies, but few relatives (or not well-placed relatives), be poor and will suffer from leprosy.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 2 && isGrahaDrishti(6, shani, surya),
        des: "Sun in a sign of Mars aspected by Saturn",
        result:
          "In case Saturn aspects the Sun in a Sign of Mars, the native will be subjected to grief on account of physical ailments, will have intense passion in his undertaking, be dull-witted and a dunce.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: surya === 1,
        des: "Sun in Taurus",
        result:
          "The position of the Sun in the Sign Taurus indicates, that the native will have troubles from disease of face and eyes, will endure difficulties, will have an emaciated body, will not have many sons, will be beautiful (also means fortunate, nice, handsome etc.), will possess decorum, be wise, will hate barren (or confined) women, be endowed with eatables, garlands, robes and scents, will have knowledge of singing, playing musical instruments and dancing and will face risk from water.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: surya === 6,
        des: "Sun in Libra",
        result:
          "If the Sun is in Libra at birth, the native will face frustration, destruction and heavy expenditure, will be intent on living in foreign places (out of distress), be wicked, mean, be devoid of affection, will live by selling gold and other metals, be jealous, fond of doing others` jobs, will co-habit with others` wives, be dirty, will incur royal contempt and be shameless.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 5 && isGrahaDrishti(1, chandra, surya),
        des: "Sun in a sign of Venus aspected by Moon",
        result:
          "One, who has the Sun in a sign of Venus aspected by the Moon will be addicted to prostitutes, will be soft spoken, will have many women, as dependents and will derive livelihood through water.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 5 && isGrahaDrishti(2, mangal, surya),
        des: "Sun in a sign of Venus aspected by Mars",
        result:
          "If Mars is aspecting the Sun in a Sign of Venus, the subject will be brave, fond of battle, bright in appearance, will earn wealth and fame out of his valor and will be deformed.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 5 && isGrahaDrishti(3, budh, surya),
        des: "Sun in a sign of Venus aspected by Mercury",
        result:
          "Should it be Mercury, that aspects the Sun in a Sign of Venus, one will be skillful in drawing, writing, poetry, authorship, singing etc. and will possess a good physique.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 5 && isGrahaDrishti(4, guru, surya),
        des: "Sun in a sign of Venus aspected by Jupiter",
        result:
          "If Jupiter should lend his aspect to the Sun in Libra, or Taurus, the subject will have many foes and friends, be a king`s minister, will have beautiful eyes, be splendourous and will be a pleased ruler.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 5 && isGrahaDrishti(5, shukra, surya),
        des: "Sun in a sign of Venus aspected by Venus",
        result:
          "When Venus aspects the Sun in Libra, or Taurus, one will be a king, or a king`s minister, be endowed with wife, wealth and pleasure galore, be wise and timid.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 5 && isGrahaDrishti(6, shani, surya),
        des: "Sun in a sign of Venus aspected by Saturn",
        result:
          "Saturn aspecting the Sun in fall, or in Taurus denotes, that the native will be mean, indolent, will cohabit with aged women, will be wicked and will be troubled by diseases.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: surya === 2,
        des: "Sun in Gemini",
        result:
          "One who has the Sun in Gemini will be a scholar, be sweet in speech, affectionate (particularly to one`s offspring), will have good conduct, be expert in profane knowledge and also in Sastras, be exceedingly affluent, liberal, skillful, be an astrologer, be mediocre in appearance, will have two mothers, be fortunate and modest.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: surya === 5,
        des: "Sun in Virgo",
        result:
          "Should the Sun be in Virgo at birth, the person will possess a physique akin to that of a female, be a scholar, be weak, be an expert writer, be learned and will render service to Gods and elders. He will be expert in repairs of driven vehicles, will be skillful in Vedas, songs and playing instruments and will speak softly and kindly.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 3 && isGrahaDrishti(1, chandra, surya),
        des: "Sun in a sign of Mercury aspected by Moon",
        result:
          "Should the Sun be in Gemini, or Virgo be aspected by the Moon, the native will be put to troubles by enemies and relatives, will be distressed by visits to foreign countries. and will in general be wailing.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 3 && isGrahaDrishti(2, mangal, surya),
        des: "Sun in a sign of Mercury aspected by Mars",
        result:
          "The Sun in a House of Mercury and in aspect to Mars denotes, that the subject will have fear from enemies, will be encountered by quarrels, will be grieved on account of loss in a war, be poor and bashful.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 3 && isGrahaDrishti(3, budh, surya),
        des: "Sun in a sign of Mercury aspected by Mercury",
        result:
          "Should Mercury aspect the Sun posited in Gemini, or Virgo, the subject will have a history akin to that of a king, will be famous, be endowed with relatives, free from enemies, but will encounter eye diseases.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 3 && isGrahaDrishti(4, guru, surya),
        des: "Sun in a sign of Mercury aspected by Jupiter",
        result:
          "Jupiter aspecting the Sun in a Sign of Mercury foretells, that the native will have knowledge of many Shastras, be a king`s messenger (or representative), will go to foreign countries, be fierce and be always bewildered.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 3 && isGrahaDrishti(5, shukra, surya),
        des: "Sun in a sign of Mercury aspected by Venus",
        result:
          "If Venus aspects the Sun, posited in Sign of Mercury, the native will be endowed with money, wife and sons, will make less friends, be free from sickness, be happy and fickle minded.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 3 && isGrahaDrishti(6, shani, surya),
        des: "Sun in a sign of Mercury aspected by Saturn",
        result:
          "Should Saturn aspect the Sun in Gemini, or Virgo, the native will have many servants, be anxious (as for an absent lover), will maintain many relatives, will remain delighted and will be crafty.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: surya === 3,
        des: "Sun in Cancer",
        result:
          "The Sun in Cancer indicates, that the native will not be steady in mind in respect of his undertakings, will be famous by virtue of his royal qualities, will hate his own men, be unfortunate in respect of wife (have an ugly wife), will be good-looking himself, be troubled due to imbalances of phlegm and bile, be distressed on account of labour (hard work), will like intoxicants, follow virtuous principles, be honourable, will be eloquent, will be a geographer and a scientist in the matter of atmosphere/space, will be very steady and will hate people from paternal side.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 1 && isGrahaDrishti(1, chandra, surya),
        des: "Sun in Cancer aspected by Moon",
        result:
          "If the Sun in Cancer is aspected by the Moon, the person will be a king, or equal to a king, will become rich by business through water and be cruel.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 1 && isGrahaDrishti(2, mangal, surya),
        des: "Sun in Cancer aspected by Mars",
        result:
          "Should Mars throw his aspect on the Sun in Cancer, one will contract pulmonary consumption and fistula in the anus, or pudendum, be dejected on account of his relatives and be a slanderer.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 1 && isGrahaDrishti(3, budh, surya),
        des: "Sun in Cancer aspected by Mercury",
        result:
          "If Mercury aspects the Sun in Cancer, the native will be famous for his learning and honour, be dear to the king, skillful and will destroy enemies.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 1 && isGrahaDrishti(4, guru, surya),
        des: "Sun in Cancer aspected by Jupiter",
        result:
          "Should Jupiter throw his aspect in Cancer occupied by the Sun, the native will be pre-eminent, a king, a minister, or an Army chief, be very famous and learned in arts.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 1 && isGrahaDrishti(5, shukra, surya),
        des: "Sun in Cancer aspected by Venus",
        result:
          "If Venus aspects the Sun in Cancer, the native will subordinate his wife (or women), will have money through his wife, be helpful to others, fierce in battle and will speak sweetly.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 1 && isGrahaDrishti(6, shani, surya),
        des: "Sun in Cancer aspected by Saturn",
        result:
          "Saturn`s aspect on the Sun in Cancer, denotes, that the person will suffer from phlegmatic and windy disorders, be wicked and be a tale-bearer.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: surya === 4,
        des: "Sun in Leo",
        result:
          "If the Sun occupies Leo, the native will destroy his enemies, be given to anger, will perform notable acts, will wander in forests, hills and fortresses, be enthusiastic, valorous, bright in appearance, will eat meat, flesh etc. and will be formidable. He will be restive, strong in a lasting measure, talkative, be a king, be plentiful in wealth and famous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 0 && isGrahaDrishti(1, chandra, surya),
        des: "Sun in Leo aspected by Moon",
        result:
          "If the Sun occupying Leo is aspected by the Moon, the native will be a scholar, will have a good wife, will suffer from phlegmatic disorders and will be dear to king.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 0 && isGrahaDrishti(2, mangal, surya),
        des: "Sun in Leo aspected by Mars",
        result:
          "If Mars aspects the Sun in Leo, the native will be interested in others` wives, be courageous, valorous, revolutionary, formidable and chief.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 0 && isGrahaDrishti(3, budh, surya),
        des: "Sun in Leo aspected by Mercury",
        result:
          "If Mercury aspects the Sun in Leo, the person will be a scholar, a writer (or an exponent), a gambler, be wandering-natured, mean and be endowed with great strength.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 0 && isGrahaDrishti(4, guru, surya),
        des: "Sun in Leo aspected by Jupiter",
        result:
          "If the Sun in Leo is aspected by Jupiter, the person will construct temples, gardens and tanks; will have predominant strength, will like loneliness and be highly intelligent.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 0 && isGrahaDrishti(5, shukra, surya),
        des: "Sun in Leo aspected by Venus",
        result:
          "Venus aspecting the Sun in Leo will make one earn bad name, infamous. Such a person will be troubled by leprosy, be unkind and shameless.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 0 && isGrahaDrishti(6, shani, surya),
        des: "Sun in Leo aspected by Saturn",
        result:
          "Should Saturn aspect the Sun in Leo, the person will be skillful in creating obstacles, will be a eunuch and will cause grief to others.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: surya === 8,
        des: "Sun in Sagittarius",
        result:
          "If the Sun at birth is in Sagittarius, one will be endowed with wealth, be dear to king, learned, will respect Gods and Brahmins, be skillful in rendering training in use of weapons and arrows and breeding of elephants, be fit to deal with, be honourable, be always peaceful, be rich, will possess a broad and beautiful physique, be helpful to relatives and be energetic.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: surya === 11,
        des: "Sun in Pisces",
        result:
          "If the Sun is in Pisces at birth, one will be friendly, will have tendency to amass, be fond of women and happy, be learned, will destroy many enemies and be wealthy and rich. He will be endowed with wife, good sons and servants, will have wealth on account of transactions via sea/river, be an eloquent speaker, but a liar, will suffer from diseases of the private parts and will have many a co-born.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 4 && isGrahaDrishti(1, chandra, surya),
        des: "Sun in a sign of Jupiter aspected by Moon",
        result:
          "Should the Sun at birth be in a sign of Jupiter and be aspected by the Moon, the native will be endowed with eloquent speech, wisdom, wealth and sons. He will be equal to a king and be devoid of misery. He will also possess a pleasing body.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 4 && isGrahaDrishti(2, mangal, surya),
        des: "Sun in a sign of Jupiter aspected by Mars",
        result:
          "Should Mars lend aspect to the Sun in a sign of Jupiter, the subject will earn fame through battle, be endowed with clarity of speech, money and happiness and be short-tempered.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 4 && isGrahaDrishti(3, budh, surya),
        des: "Sun in a sign of Jupiter aspected by Mercury",
        result:
          "Mercury aspecting the said Sun denotes, that the native will possess sweet speech and will have knowledge of writing, literature, arts, assembly, Journey and minerals.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 4 && isGrahaDrishti(4, guru, surya),
        des: "Sun in a sign of Jupiter aspected by Jupiter",
        result:
          "If Jupiter aspects the Sun in Pisces/Sagittarius, the person will move in royal palaces, or be a king himself, will possess elephants, horses and wealth and be ever after learning.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 4 && isGrahaDrishti(5, shukra, surya),
        des: "Sun in a sign of Jupiter aspected by Venus",
        result:
          "Should Venus aspect the Sun in Jupiter`s House, one will enjoy women of superior class, be endowed with scents and garlands and be peaceful.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 4 && isGrahaDrishti(6, shani, surya),
        des: "Sun in a sign of Jupiter aspected by Saturn",
        result:
          "If Saturn aspects the Sun in Pisces, or Sagittarius, the native will be unclean, will eat other`s food, will join bad men and will breed animals.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: surya === 9,
        des: "Sun in Capricorn",
        result:
          "One who has the Sun in Capricorn will be base, interested in bad women, be greedy, will advance with mean jobs, be endowed with various deeds, be timid, devoid of relatives, fickle-minded, fond of wandering, weak, will lose everything due to conflicts with his relatives and will be a voracious eater.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: surya === 10,
        des: "Sun in Aquarius",
        result:
          "If the Sun is in Aquarius at birth, one will suffer from heart diseases, will have enormous strength (courage), be very short-tempered, be fortunate through other housewives, be hated by the learned, be firm in his activities, be miserable, will have little wealth, be fraudulent, be not firm in friendship, will have dirty body and be a miser.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 6 && isGrahaDrishti(1, chandra, surya),
        des: "Sun in a sign of Saturn aspected by the Moon",
        result:
          "If the Moon aspects the Sun in a sign of Saturn, the native will be highly cunning in disposition and will lose his wealth and happiness on account of his befriending females.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 6 && isGrahaDrishti(2, mangal, surya),
        des: "Sun in a sign of Saturn aspected by Mars",
        result:
          "Mars aspecting the Sun in Capricorn, or Aquarius denotes, that the native will be troubled by diseases and enemies, will be wounded by weapons on account of quarreling with others and be deformed.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 6 && isGrahaDrishti(3, budh, surya),
        des: "Sun in a sign of Saturn aspected by Mercury",
        result:
          "If Mercury aspects the Sun in Capricorn, or Aquarius, the person will be brave, will have a eunuch`s nature, will steal other`s wealth and will have all limbs devoid of strength.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 6 && isGrahaDrishti(4, guru, surya),
        des: "Sun in a sign of Saturn aspected by Jupiter",
        result:
          "Should Jupiter aspect the Sun in Capricorn, or Aquarius, one will undertake to do auspicious deeds, be wise, will patronize all, widely famous and intelligent.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 6 && isGrahaDrishti(5, shukra, surya),
        des: "Sun in a sign of Saturn aspected by Venus",
        result:
          "If Venus aspects the Sun in a sign of Saturn, the native will deal with conch, coral and ruby, will derive abundant wealth through prostitutes and females and be happy.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(surya) == 6 && isGrahaDrishti(6, shani, surya),
        des: "Sun in a sign of Saturn aspected by Saturn",
        result:
          "If Saturn aspects the Sun posited in Capricorn, or Aquarius, the person will destroy his enemies and will prosper due to royal honours.",
        sou: "Saravali",
      },
      //31MoonSaravali
      {
        group: "Rasi_Position",
        rule: chandra == 0,
        des: "Moon in Aries",
        result:
          "Should the Moon be in Aries, the native will have a golden coloured body, will be endowed with lasting wealth, be devoid of co-born, be valorous, self-respected, auspicious, prosperous, libidinous, will have weak legs, ugly nails and little hair, be fickle-minded, will consider honour, as wealth, will possess hands and legs, like the lotus, (i.e. these will be lotus-red), will have more sons, round eyes, be friendly, be afraid of getting into watery places, like river, well etc.), will have wounds on the head and be won over by females.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 0 && isGrahaDrishti(0, surya, chandra),
        des: "Moon in Aries aspected by the Sun",
        result:
          "If the Moon is in Aries at birth and be in aspect to the Sun, the native will be quite irascible, be honoured by the king, be soft, be valorous and fond of war.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 0 && isGrahaDrishti(2, mangal, chandra),
        des: "Moon in Aries aspected by Mars",
        result:
          "If the Moon in Aries is aspected by Mars, the person will suffer from diseases of eyes and teeth, will have wounds caused by arrows (or horse/cow etc.) and will suffer windy diseases and urinary disorders.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 0 && isGrahaDrishti(3, budh, chandra),
        des: "Moon in Aries aspected by Mercury",
        result:
          "Should Mercury aspect the Moon in Aries, the native will teach various disciplines, will possess good speech, will achieve his desires, be a great poet and be widely famous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 0 && isGrahaDrishti(4, guru, chandra),
        des: "Moon in Aries aspected by Jupiter",
        result:
          "If Jupiter aspects the Moon in Aries, the person will be endowed with servants and abundant riches and be a king, or a kings minister.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 0 && isGrahaDrishti(5, shukra, chandra),
        des: "Moon in Aries aspected by Venus",
        result:
          "Venus aspecting the Moon in Aries denotes, that the subject will be lucky, be endowed with sons and wealth, will own (i.e. marry) a supreme lady and costly ornaments and will not eat much.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 0 && isGrahaDrishti(6, shani, chandra),
        des: "Moon in Aries aspected by Saturn",
        result:
          "The Moon in Aries aspected by Saturn indicates, that the native will be jealous, miserable to a great extent, be very poor, dirty and untruthful.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: chandra == 1,
        des: "Moon in Taurus",
        result:
          "If the Moon be in Taurus at birth, the native will be large-hearted, highly charitable, short-haired, libidinous, famous, brilliant, will have (more) daughters, will possess eyes resembling that of a bull, be in a position to differentiate between good and bad, be happy during middle and concluding parts of his life, will have strong waist, feet, shoulders, face etc., will have (some) identity on the side and back of the body, will walk beautifully and be endowed with forbearance. Should the Moon be in the first half of Taurus, the mother of the native is not long-lived. Similarly the father is short-lived, if the Moon occupies the second half of Taurus.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 1 && isGrahaDrishti(0, surya, chandra),
        des: "Moon in Taurus aspected by the Sun",
        result:
          "Should the Moon be in Taurus and be in aspect to the Sun, the native will be a farmer, be very industrious, be very rich with servants and quadrupeds and will lend money on usury.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 1 && isGrahaDrishti(2, mangal, chandra),
        des: "Moon in Taurus aspected by Mars",
        result:
          "If Mars aspects the Moon in Taurus, the subject will be highly libidinous, will lose his wife and friends on account of another lady, will steal the heart of the fair sex and will prove adverse for the mother.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 1 && isGrahaDrishti(3, budh, chandra),
        des: "Moon in Taurus aspected by Mercury",
        result:
          "Should the said Moon be in aspect to Mercury, the native will be highly learned, will know the code of speech, be of pleasing disposition, be dear to everyone and will uncomparably be of good qualities.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 1 && isGrahaDrishti(4, guru, chandra),
        des: "Moon in Taurus aspected by Jupiter",
        result:
          "If Jupiter aspects the Moon in Taurus, the native will have long living wife and children and lasting wealth, be respectfully disposed to his parents, be virtuous and very famous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 1 && isGrahaDrishti(5, shukra, chandra),
        des: "Moon in Taurus aspected by Venus",
        result:
          "Should Venus aspect the Moon in Taurus, one will be endowed with ornaments, conveyances and houses and will possess comforts of sleeping and sitting, scents, robes, garlands etc.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 1 && isGrahaDrishti(6, shani, chandra),
        des: "Moon in Taurus aspected by Saturn",
        result:
          "If it is Saturn, that aspects the Moon in Taurus, one will be devoid of wealth, be inauspicious for mother and wife and will be endowed with sons, friends and relatives.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: chandra == 2,
        des: "Moon in Gemini",
        result:
          "If the Moon is in Gemini at birth, one will have prominent nose and dark eyes, will be skillful in the art of love, poetry etc., will enjoy sexual pleasures, will have lines of fish in the palm, will be fond of worldly enjoyments, will be sinewy, be very intelligent, splendourous, be endowed with happiness, jocular disposition and eloquent speech, be won over by the females, will have a long body, will befriend neuters and will have two mothers.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 2 && isGrahaDrishti(0, surya, chandra),
        des: "Moon in Gemini aspected by the Sun",
        result:
          "If the Moon is in Gemini at birth and is aspected by the Sun, the native will be quite learned, be splendourous, very beautiful, be charitable, be very miserable and be not rich.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 2 && isGrahaDrishti(2, mangal, chandra),
        des: "Moon in Gemini aspected by Mars",
        result:
          "If Mars lends aspect to the Moon in Gemini, the person will be very valorous, very learned, be endowed with happiness, conveyances, wealth and beauty. This is certain.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 2 && isGrahaDrishti(3, budh, chandra),
        des: "Moon in Gemini aspected by Mercury",
        result:
          "The Moon in Gemini aspected by Mercury makes one skillful in producing money, always successful and inviolable king.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 2 && isGrahaDrishti(4, guru, chandra),
        des: "Moon in Gemini aspected by Jupiter",
        result:
          "If Jupiter aspects the Moon in Gemini, one will be a teacher of Shastras, be famous, truthful, very beautiful, honourable and be an eloquent speaker.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 2 && isGrahaDrishti(5, shukra, chandra),
        des: "Moon in Gemini aspected by Venus",
        result:
          "If Venus aspects the Moon in Gemini, the person will be endowed with the company of supreme females, garlands, robes, conveyances, ornaments and jewels and will be sportive.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 2 && isGrahaDrishti(6, shani, chandra),
        des: "Moon in Gemini aspected by Saturn",
        result:
          "Should Saturn aspect the Moon in Gemini, the subject will be devoid of relatives, wife, happiness and wealth and will be inimical to the public.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: chandra == 3,
        des: "Moon in Cancer",
        result:
          "If the Moon is in Cancer at birth, the native will be fortunate, valorous, be endowed with residence, friends, journeys and astrological knowledge, be sensuous, grateful, be a minister, be truthful, will live abroad, be passionate, hairy-bodied, fond of water and flowers, interested in construction of houses, wells etc. and will have a prominent neck.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 3 && isGrahaDrishti(0, surya, chandra),
        des: "Moon in Cancer aspected by the Sun",
        result:
          "Should the Moon be in her House at birth and be aspected by the Sun, the native will be in the employ of king, be not rich, be a letter-bearer and will protect forts (i.e. will be a security officer in royal service).",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 3 && isGrahaDrishti(2, mangal, chandra),
        des: "Moon in Cancer aspected by Mars",
        result:
          "If the Moon in Cancer is aspected by Mars, the subject will be valorous, be deformed, will prove ominous to his mother and be skillful in his jobs.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 3 && isGrahaDrishti(3, budh, chandra),
        des: "Moon in Cancer aspected by Mercury",
        result:
          "Should Mercury lend his aspect to the Moon in Cancer, he will be spirited in disposition, be endowed with political wisdom, wealth, wife and sons, will be a kings minister and be happy.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 3 && isGrahaDrishti(4, guru, chandra),
        des: "Moon in Cancer aspected by Jupiter",
        result:
          "Jupiter aspecting the Moon in her own House indicates, that the person will be a king, be endowed with royal qualities, be happy, will have a good wife, will behave well, be modest and valorous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 3 && isGrahaDrishti(5, shukra, chandra),
        des: "Moon in Cancer aspected by Venus",
        result:
          "If Venus aspects the Moon in Cancer, the subject will be endowed with money, gold, wife, robes and jewels, be head of prostitutes and be splendourous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 3 && isGrahaDrishti(6, shani, chandra),
        des: "Moon in Cancer aspected by Saturn",
        result:
          "Should Saturn aspect the Cancer-posited Moon, he will be of wandering disposition, be miserable, very poor, be a liar, a sinner and be mean.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: chandra == 4,
        des: "Moon in Leo",
        result:
          "If the Moon is in Leo, one will have sturdy bones, sparse hair, wide face, small and yellowish eyes, will hate women, will suffer from hunger and thirst, will incur stomach disorders and tooth-decay, will eat flesh, be charitable, harsh, will have few sons, will seek sexual union in forests and hills, be respectfully disposed to his mother, will have broad chest, be valorous, dutiful and will have majestic looks.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 4 && isGrahaDrishti(0, surya, chandra),
        des: "Moon in Leo aspected by the Sun",
        result:
          "Should the Moon be in Leo in aspect to the Sun, the native will be equal to a king, will have excellent qualities and majestic voice, will be valorous, be fond of intoxicants and be widely famous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 4 && isGrahaDrishti(2, mangal, chandra),
        des: "Moon in Leo aspected by Mars",
        result:
          "If Mars aspects the Moon in Leo he will be an Army chief, will have excellent wife, sons, wealth and conveyances and be superior among people.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 4 && isGrahaDrishti(3, budh, chandra),
        des: "Moon in Leo aspected by Mercury",
        result:
          "Should Mercury aspect the Moon in Leo one will be endowed with the characteristics of a female and also the grace akin to that of a female, will be in the custody of females, will serve females and will enjoy money, happiness and pleasures.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 4 && isGrahaDrishti(4, guru, chandra),
        des: "Moon in Leo aspected by Jupiter",
        result:
          "If Jupiter aspects the Moon in Leo, one will be excellent among his caste-men, be wide-famed, highly virtuous and will equal a king.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 4 && isGrahaDrishti(5, shukra, chandra),
        des: "Moon in Leo aspected by Venus",
        result:
          "Should Venus aspect the Moon in Leo, one will possess a wife, wealth and high knowledge, be sickly disposed, will be a female`s servant and be skillful in sexual union.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 4 && isGrahaDrishti(6, shani, chandra),
        des: "Moon in Leo aspected by Saturn",
        result:
          "If the Moon in Leo is aspected by Saturn, the person will be an agriculturist, be not wealthy, be a liar, will protect forts, be devoid of happiness from wife and be mean.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: chandra == 5,
        des: "Moon in Virgo",
        result:
          "If the Moon occupies Virgo at birth, one will be addicted to women, will have long hands, attractive body and face, beautiful teeth, eyes and ears, be learned, be a religious preceptor (teaching Vedas etc.), be an eloquent speaker, be truthful and pure, valorous, be kind to living beings, be interested in others` affairs, be of forgiving disposition, be fortunate, will have more daughters, but not many sons.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 5 && isGrahaDrishti(0, surya, chandra),
        des: "Moon in Virgo aspected by the Sun",
        result:
          "If the Moon occupies Virgo at birth and is aspected by the Sun, the native will be in charge of royal wealth, be famous, will keep up his word and perform distinguished acts.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 5 && isGrahaDrishti(2, mangal, chandra),
        des: "Moon in Virgo aspected by Mars",
        result:
          "If Mars aspects the Moon posited in Virgo, the subject will be skillful in mechanical, or fine arts (of 64 kinds), be famous, affluent, disciplined, courageous and will be inauspicious for mother.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 5 && isGrahaDrishti(3, budh, chandra),
        des: "Moon in Virgo aspected by Mercury",
        result:
          "Should it be Mercury, that lends aspect to the Moon in Virgo, the native will be expert in astrology and literature, be successful in disputes/quarrels and be highly skillful to a surprising extent.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 5 && isGrahaDrishti(4, guru, chandra),
        des: "Moon in Virgo aspected by Jupiter",
        result:
          "Jupiter aspecting the Moon in Virgo indicates, that the native will be supreme among his relatives, be happy, will carry out royal duties, will keep up his word and will be endowed with wealth.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 5 && isGrahaDrishti(5, shukra, chandra),
        des: "Moon in Virgo aspected by Venus",
        result:
          "If Venus aspects the Moon in Virgo, the person will have many wives, be endowed with many kinds of makeups, pleasures and wealth and will always be blessed with fortunes.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 5 && isGrahaDrishti(6, shani, chandra),
        des: "Moon in Virgo aspected by Saturn",
        result:
          "The Moon in Virgo aspected by Saturn indicates, that the native will not have firm memory, will suffer from poverty, will not have happiness, will be bereft of mother, will be at the disposal of women (or be controlled by them) and will derive wealth through females.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: chandra == 6,
        des: "Moon in Libra",
        result:
          "If the Moon is posited in Libra at birth, the native will have elevated nose, broad eyes, will have weak (not prominent) face and emaciated body, will have many wives, many bulls (cattle) and abundant landed property, be valorous, will have testicles resembling that of an ox, be skillful in work, will honour Gods and the wise, be endowed with various kinds of wealth, will be conquered by females, will have an emaciated body (this is a repetition), will donate corns, will not be firm in disposition and will be helpful to his relatives.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 6 && isGrahaDrishti(0, surya, chandra),
        des: "Moon in Libra aspected by the Sun",
        result:
          "If the Moon is in Libra and is aspected by the Sun, the person will be bereft of wealth, be diseased, will wander here and there, be insulted, be bereft of enjoyment, sons and strength.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 6 && isGrahaDrishti(2, mangal, chandra),
        des: "Moon in Libra aspected by Mars",
        result:
          "If Mars aspects the Moon in Libra, the person will be sharp, be a thief, be mean, adulterous, will enjoy scents and garlands, be wise and will suffer from eye diseases.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 6 && isGrahaDrishti(3, budh, chandra),
        des: "Moon in Libra aspected by Mercury",
        result:
          "If Mercury aspects the Moon in Libra, the subject will be skillful in arts, will have abundant riches and grains, will be an auspicious speaker, be highly learned and be famous in his country.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 6 && isGrahaDrishti(4, guru, chandra),
        des: "Moon in Libra aspected by Jupiter",
        result:
          "Should Jupiter aspect the Moon in Libra, the person will be always worshipped and be skillful in sales and purchases of gems etc.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 6 && isGrahaDrishti(5, shukra, chandra),
        des: "Moon in Libra aspected by Venus",
        result:
          "If Venus lends his aspect to the Moon in Libra, one will be beautiful, be free from sickness, fortunate, strong bodied, be learned and will have knowledge of many means.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 6 && isGrahaDrishti(6, shani, chandra),
        des: "Moon in Libra aspected by Saturn",
        result:
          "Should Saturn aspect the Moon in Libra, the native will be very affluent, be sweet in speech, be endowed with conveyances, be very much interested in sexual affairs, be devoid of happiness and be favourable to his mother.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: chandra == 7,
        des: "Moon in Scorpio",
        result:
          "Should the Moon be in Scorpio at birth, one will be a miser, will have round (well grown) thighs, coarse physique and nose, will be cruel in acts, be a thief, be sick in childhood, will have spoiled chin and nails, but beautiful eyes, will be plentiful, industrious, skillful, fond of others` housewives, devoid of relatives, insane (or infatuated with passion), valorous, will lose wealth due to royal wrath and will have a big abdomen and a big head.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 7 && isGrahaDrishti(0, surya, chandra),
        des: "Moon in Scorpio aspected by the Sun",
        result:
          "If the Moon at birth is in Scorpio and aspected by the Sun, the native will hate people (i.e. will not be friendly with others), be learned, wandering nature and rich, but be not happy.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 7 && isGrahaDrishti(2, mangal, chandra),
        des: "Moon in Scorpio aspected by Mars",
        result:
          "Should Mars aspect the Moon in Scorpio, the native will have incomparable courage, be equal to a king, be endowed with wealth, be valorous, unconquerable in battle and be a voracious eater.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 7 && isGrahaDrishti(3, budh, chandra),
        des: "Moon in Scorpio aspected by Mercury",
        result:
          "If Mercury aspects the Moon in Scorpio, the person will not be skillful, be hard in speech, will obtain twins, be tricky, will produce fictitious things and be an expert singer.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 7 && isGrahaDrishti(4, guru, chandra),
        des: "Moon in Scorpio aspected by Jupiter",
        result:
          "If Jupiter lends aspect to the Moon in Scorpio, the native will be interested in performing his duties, will be biased towards people, be wealthy and be beautiful.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 7 && isGrahaDrishti(5, shukra, chandra),
        des: "Moon in Scorpio aspected by Venus",
        result:
          "If Venus aspects the Moon in Scorpio, the native will be highly intelligent, be fortunate, be endowed with riches, conveyances and beauty and will lose strength on account of women.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 7 && isGrahaDrishti(6, shani, chandra),
        des: "Moon in Scorpio aspected by Saturn",
        result:
          "If Saturn aspects the Moon in Scorpio, the native will have base sons, be a talebearer, be sick, poor and untruthful.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: chandra == 8,
        des: "Moon in Sagittarius",
        result:
          "If the Moon is in Sagittarius at birth, the native will be dwarfish, will have round eyes, big heart, waist and hands, be a good speaker, will have prominent shoulders and neck, will live near watery zone, will have knowledge of arts and secret affairs, be courageous, will possess strong bones, be very strong, will have strong neck and lips, be attached to his relatives, be grateful and distinguished. His legs will not be wider, when in position.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 8 && isGrahaDrishti(0, surya, chandra),
        des: "Moon in Sagittarius aspected by the Sun",
        result:
          "If the Moon in Sagittarius is aspected by the Sun, the person will be a king, be affluent, valorous, famous and will have incomparable happiness and conveyances.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 8 && isGrahaDrishti(2, mangal, chandra),
        des: "Moon in Sagittarius aspected by Mars",
        result:
          "Should Mars aspect the Moon in Sagittarius, the person will be an Army chief, will be very rich, fortunate, famous for his valor and will have a large working force.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 8 && isGrahaDrishti(3, budh, chandra),
        des: "Moon in Sagittarius aspected by Mercury",
        result:
          "If the Moon in Sagittarius is aspected by Mercury, one will have many servants, will be an expert astrologer and artist and be a skillful dancer.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 8 && isGrahaDrishti(4, guru, chandra),
        des: "Moon in Sagittarius aspected by Jupiter",
        result:
          "If Jupiter aspects the Moon in Sagittarius, one will possess very attractive physique, be a king`s minister and will be endowed with wealth, virtues and happiness.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 8 && isGrahaDrishti(5, shukra, chandra),
        des: "Moon in Sagittarius aspected by Venus",
        result:
          "Should Venus aspect the Moon in Sagittarius, the native will be happy, beautiful and fortunate, be endowed with sons, wealth and sexual desires and will have good friends && wife.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 8 && isGrahaDrishti(6, shani, chandra),
        des: "Moon in Sagittarius aspected by Saturn",
        result:
          "If Saturn aspects the Moon in Sagittarius, the person will be sweet in speech, will speak good words, will have wide knowledge of Shastras, be truthful, soft and be a kings man.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: chandra == 9,
        des: "Moon in Capricorn",
        result:
          "If the Moon at birth be in Capricorn, the native will be a singer, will be averse to cold articles (or season), will have stout body, will be fond of truth and charity, be distinguished, famous, less irascible, be libidinous, unkind and shameless; will possess beautiful eyes and emaciated body, will violate teacher`s bed, be a poet, will have round thighs, be not very enthusiastic, be very miserly and will have long neck and ears.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 9 && isGrahaDrishti(0, surya, chandra),
        des: "Moon in Capricorn aspected by the Sun",
        result:
          "Should the Moon in Capricorn be aspected by the Sun at birth, one will be penniless, miserable, wandering-nature, interested in others` work, dirty and clever.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 9 && isGrahaDrishti(2, mangal, chandra),
        des: "Moon in Capricorn aspected by Mars",
        result:
          "If Mars aspects the Moon in Capricorn, one will enjoy abundant riches, be highly liberal, be fortunate, wealthy, will have conveyances and be brave.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 9 && isGrahaDrishti(3, budh, chandra),
        des: "Moon in Capricorn aspected by Mercury",
        result:
          "If Mercury aspects the Moon in Capricorn, one will be dunce, be interested in living in other places, be bereft of wife, be fickle minded and be devoid of happiness and money.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 9 && isGrahaDrishti(4, guru, chandra),
        des: "Moon in Capricorn aspected by Jupiter",
        result:
          "Should Jupiter aspect the Moon in Capricorn at birth, the native will be a king, be incomparably brave, will have royal qualities and will possess many wives, children and friends.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 9 && isGrahaDrishti(5, shukra, chandra),
        des: "Moon in Capricorn aspected by Venus",
        result:
          "If Venus aspects the Moon in Capricorn, one will join others` wives, be endowed with wealth, ornaments, conveyances, garlands etc., be blameworthy and be issueless.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 9 && isGrahaDrishti(6, shani, chandra),
        des: "Moon in Capricorn aspected by Saturn",
        result:
          "If Saturn aspects the Moon in Capricorn one will be indolent, dirty, be endowed with money, be troubled by sexual feelings, will join others` housewives and be untruthful.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: chandra == 10,
        des: "Moon in Aquarius",
        result:
          "If the Moon is in Aquarius at birth, the person will have elevated nose, rough, or uneven body and stout hands and legs, will be addicted to intoxicants, will be averse to the virtuous, be not himself virtuous, will obtain illegal sons, will have stout head, ugly/diseased eyes, bright face and prominent waist, be an artisan, will have bad mentality, be miserable and will be very poor.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 10 && isGrahaDrishti(0, surya, chandra),
        des: "Moon in Aquarius aspected by the Sun",
        result:
          "Should the Moon at birth be in Aquarius and be aspected by the Sun, one will be very dirty in disposition, be valorous, will be like a king in guise, be virtuous and be an agriculturist.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 10 && isGrahaDrishti(2, mangal, chandra),
        des: "Moon in Aquarius aspected by Mars",
        result:
          "If Mars aspects the Moon in Aquarius, one will be quite truthful, will not inherit money from mother and elders, be indolent and mysterious and interested in others` work.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 10 && isGrahaDrishti(3, budh, chandra),
        des: "Moon in Aquarius aspected by Mercury",
        result:
          "If Mercury aspects the Moon in Aquarius, the native will be skillful in treating others well, while hosting them, will be proficient in music, will be liked by the fair sex and will possess less money and less happiness.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 10 && isGrahaDrishti(4, guru, chandra),
        des: "Moon in Aquarius aspected by Jupiter",
        result:
          "Should Jupiter aspect the Moon in Aquarius, the native will own villages, agriculture lands and trees, be endowed with superior castles and superior ladies and will be devoted to (sensual) enjoyment (Bhogi also means rich person, or a king)",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 10 && isGrahaDrishti(5, shukra, chandra),
        des: "Moon in Aquarius aspected by Venus",
        result:
          "If Venus aspects the Moon in Aquarius, the person will be base, issueless, friendless, timid, be censured by preceptors, be sinful, will have a bad wife and will be least happy.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 10 && isGrahaDrishti(6, shani, chandra),
        des: "Moon in Aquarius aspected by Saturn",
        result:
          "Should the Moon in Aquarius have Saturn`s aspect, the native will have (prominent) nails and hair, be dirty, will seek union with other women, be a dunce, be irreligious and be rich possessing many immovables.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: chandra == 11,
        des: "Moon in Pisces",
        result:
          "If the Moon is in Pisces, the native will be expert in fine arts, be capable of winning even unfavourable people, be learned in Shastras, beautiful bodied, proficient in music, very religious, will cohabit with many women, be a polite speaker, will serve the king, be somewhat irascible, will have a big head, be endowed with happiness and wealth, will be won over by the fair sex, be virtuous, be interested in sailing and be liberal.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 11 && isGrahaDrishti(0, surya, chandra),
        des: "Moon in Pisces aspected by the Sun",
        result:
          "If the Moon posited in Pisces is aspected by the Sun, the native will be highly libidinous, be happy, be an Army chief, be very affluent and will have delighted wife. ",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 11 && isGrahaDrishti(2, mangal, chandra),
        des: "Moon in Pisces aspected by Mars",
        result:
          "If Mars aspects the Moon in Pisces, the person will be insulted, be devoid of happiness, is an unchaste woman`s son, will be interested in sins and will be valorous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 11 && isGrahaDrishti(3, budh, chandra),
        des: "Moon in Pisces aspected by Mercury",
        result:
          "He will be a king, if the Moon in Pisces is aspected by Mercury; will be highly intelligent, be happy and will be surrounded by supreme females and be controlled by them.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 11 && isGrahaDrishti(4, guru, chandra),
        des: "Moon in Pisces aspected by Jupiter",
        result:
          "If Jupiter aspects the Moon in Pisces, he will be beautiful, fierce, head of a district, be very affluent, beautiful and will be surrounded by many women.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 11 && isGrahaDrishti(5, shukra, chandra),
        des: "Moon in Pisces aspected by Venus",
        result:
          "If Venus aspects the Moon in Pisces, he will be skillful in coition, interested in dance, instrumental music and songs and will steal the hearts of the fair sex.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: chandra == 11 && isGrahaDrishti(6, shani, chandra),
        des: "Moon in Pisces aspected by Saturn",
        result:
          "Should Saturn aspect the Moon in Pisces, he will be deformed, be unfavourable to mother, be sexually distressed, be devoid of sons, wife and intelligence and will be attached to mean and ugly females.",
        sou: "Saravali",
      },
      //32MarsSaravali
      {
        group: "Rasi_Position",
        rule: mangal == 0,
        des: "Mars in Aries",
        result:
          "If Mars at birth occupies Aries, the native will be splendourous, truthful, valorous, be a king, be fond of war, interested in adventurous acts, be an Army chief, or head of a village, or a band; be delighted, charitable be endowed with a number of cows, goats etc. and grains, be fierce and will join many women.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: mangal == 7,
        des: "Mars in Scorpio",
        result:
          "If Mars occupies Scorpio at birth, the native will be attached to trade, will be interested in Vedic knowledge, be leader of thieves, skillful in his duties, be interested in wars, be highly sinful, will do big crimes, will be perfidious towards his enemies, will betray, be disposed towards killing, be unhelpful, be a talebearer, will be endowed with lands, sons and wife and be troubled by poison, fire, weapons and wounds.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 2 && isGrahaDrishti(0, surya, mangal),
        des: "Mars in a sign of Mars aspected by Sun",
        result:
          "Should Mars at birth be in Aries/Scorpio and be aspected by the Sun, the person will possess wealth, wife and children, be a kings minister, be a justice, be famous and be a charitable king.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 2 && isGrahaDrishti(1, chandra, mangal),
        des: "Mars in a sign of Mars aspected by Moon",
        result:
          "Should Mars at birth be in Aries/Scorpio and be aspected by the Moon, the native will be bereft of mother, will have a wounded body, will hate his own people, will not have friends, be jealous and will have female children.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 2 && isGrahaDrishti(3, budh, mangal),
        des: "Mars in a sign of Mars aspected by Mercury",
        result:
          "Should Mars at birth be in Aries/Scorpio and be aspected by Mercury, the subject will be an expert in stealing others` money, be a liar, be devoted to Manmatha (i.e. highly libidinous), be hostile and will frequently visit prostitutes.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 2 && isGrahaDrishti(4, guru, mangal),
        des: "Mars in a sign of Mars aspected by Jupiter",
        result:
          "Should Mars at birth be in Aries/Scorpio and be aspected by Jupiter, the native will be learned, sweet-spoken, fortunate, dear to parents, be very affluent and will be a king par excellence.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 2 && isGrahaDrishti(5, shukra, mangal),
        des: "Mars in a sign of Mars aspected by Venus",
        result:
          "Should Mars at birth be in Aries/Scorpio and be aspected by Venus, the native will be imprisoned due to females and will be deprived of his money on account of females, more than once.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 2 && isGrahaDrishti(6, shani, mangal),
        des: "Mars in a sign of Mars aspected by Saturn",
        result:
          "Should Mars at birth be in Aries/Scorpio and be aspected by Saturn, the native will be capable of hindering thieves in spite of his being not valorous, will be devoid of his men and will maintain another woman.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: mangal == 1,
        des: "Mars in Taurus",
        result:
          "If Mars is in Taurus in a nativity, the person will break the vows of chaste women, will eat voraciously, will have little wealth and few sons, be jealous, will maintain many people, will not trust others, will play violently, will speak very harshly, be fond of music, be sinful, be inimical to relatives and will bring infamy to his family.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: mangal == 6,
        des: "Mars in Libra",
        result:
          "If Mars occupies Libra in a nativity, the person will be liable to wandering, will indulge in bad business, be an able speaker, be fortunate, deformed in respect of some limb, will have few relatives, be fond of wars, will lose his first wife, will deal in liquors and will earn through prostitutes to only lose.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 5 && isGrahaDrishti(0, surya, mangal),
        des: "Mars in a sign of Venus aspected by Sun",
        result:
          "If Mars is in Taurus/Libra, with the aspect of the Sun, the person will seek to move in forests and hills, will hate women, will have many enemies, will have fierce appearance and be courageous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 5 && isGrahaDrishti(1, chandra, mangal),
        des: "Mars in a sign of Venus aspected by Moon",
        result:
          "If Mars is in Taurus/Libra with the aspect of the Moon, the native will not honour his mother, be wicked, will lord many women and be dear to them and will fear war.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 5 && isGrahaDrishti(3, budh, mangal),
        des: "Mars in a sign of Venus aspected by Mercury",
        result:
          "If Mars is in Taurus/Libra with the aspect of Mercury, the native will promote quarrels, will speak much, will have a soft body, will possess (indifferent or) few sons and little wealth and will be learned in Shastras.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 5 && isGrahaDrishti(4, guru, mangal),
        des: "Mars in a sign of Venus aspected by Jupiter",
        result:
          "If Mars is in Taurus/Libra with the aspect of Jupiter, the subject will be skillful in music and in play of musical instruments, be fortunate, be dear to his relatives and will be pure.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 5 && isGrahaDrishti(5, shukra, mangal),
        des: "Mars in a sign of Venus aspected by Venus",
        result:
          "If Mars is in Taurus/Libra with the aspect of Venus, the person will be a kings minister, be liked by the king, be an Army chief, will have famous name (i.e. titles etc.) and will be happy.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 5 && isGrahaDrishti(6, shani, mangal),
        des: "Mars in a sign of Venus aspected by Saturn",
        result:
          "If Mars is in Taurus/Libra with the aspect of Saturn, the native will be happy, famous, wealthy, be endowed with friends and own men, be learned and will be head of a group of villages/towns, or group of men.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: mangal == 2,
        des: "Mars in Gemini",
        result:
          "Should Mars be in Gemini, the native will be splendourous, be capable of enduring miseries, be very learned, be well versed with poetical rules, skillful in various kinds of fine arts, fond of going to foreign countries, virtuously disposed, highly intelligent, favourably disposed to his sons and friends and will devote to various kinds of assignments.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: mangal == 5,
        des: "Mars in Virgo",
        result:
          "Should Mars occupy Virgo at birth, the subject will be worthy of honour, be never rich, be very fond of sexual union and music, be soft and sweet spoken, will have various kinds of expenses, be not much valorous, be learned, will have ribs in their advanced position, will fear enemies very much, be skillful in Shastras and fine arts, be fond of bathing, make-up etc. and be splendourous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 3 && isGrahaDrishti(0, surya, mangal),
        des: "Mars in a sign of Mercury aspected by Sun",
        result:
          "If at birth Mars be in Gemini/Virgo and in aspect to the Sun, the native will be blessed with learning, wealth and courage, be fond of hills, forests and fortresses and be highly strong.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 3 && isGrahaDrishti(1, chandra, mangal),
        des: "Mars in a sign of Mercury aspected by Moon",
        result:
          "If Mars is in Gemini/Virgo and is aspected by the Moon, the person will be happy, wealthy, splendourous, will guard women`s apartments, will be endowed with women and will manage the kings residence.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 3 && isGrahaDrishti(3, budh, mangal),
        des: "Mars in a sign of Mercury aspected by Mercury",
        result:
          "If Mars is in Gemini/Virgo and is aspected by Mercury, one will be skillful in the art of writing, in mathematics and in poetry, be garrulous, be liar, be a sweet speaker, be a messenger (or an ambassador) and will endure lot of misery.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 3 && isGrahaDrishti(4, guru, mangal),
        des: "Mars in a sign of Mercury aspected by Jupiter",
        result:
          "If Mars is in Gemini/Virgo and is aspected by Jupiter, the native will be a kings representative, be bright, will go to foreign countries, as an ambassador, be skillful in all doings and be a leader.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 3 && isGrahaDrishti(5, shukra, mangal),
        des: "Mars in a sign of Mercury aspected by Venus",
        result:
          "If Mars is in Gemini/Virgo and is aspected by Venus, the person will do the jobs of females, be very fortunate and will enjoy food and robes.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 3 && isGrahaDrishti(6, shani, mangal),
        des: "Mars in a sign of Mercury aspected by Saturn",
        result:
          "If Mars is in Gemini/Virgo and is aspected by Saturn, the person will be interested in wandering in mines (i.e. places beneath surface), hills and forests, will have husbandry, as his livelihood, be highly miserable, be very valorous, dirty and be devoid of wealth.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: mangal == 3,
        des: "Mars in Cancer",
        result:
          "If Mars is in Cancer at birth, the subject will like living in others` houses, be deformed, sick, will attain riches through agriculture, will enjoy royal food and robes during childhood, will eat food in others` houses, will become wealthy through the source of water, be repeatedly anguished and be always distressed.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 1 && isGrahaDrishti(0, surya, mangal),
        des: "Mars in Cancer aspected by Sun",
        result:
          "If Mars be in Cancer at birth and is aspected by the Sun, the native will be subjected to bilious diseases, be splendourous, be a justice in position and be valorous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 1 && isGrahaDrishti(1, chandra, mangal),
        des: "Mars in Cancer aspected by Moon",
        result:
          "If the Moon aspects Mars in Cancer, the person will be troubled by various diseases, will have mean conduct, will possess an unsightly body and be miserable.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 1 && isGrahaDrishti(3, budh, mangal),
        des: "Mars in Cancer aspected by Mercury",
        result:
          "If Mercury aspects Mars in Cancer, the person will be dirty, sinful, will possess a mean family, will be rejected by his own men and be shameless.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 1 && isGrahaDrishti(4, guru, mangal),
        des: "Mars in Cancer aspected by Jupiter",
        result:
          "If Mars in Cancer is aspected by Jupiter, the native will be famous, be king`s minister, be learned, charitable, wealthy and be bereft of carnal pleasures.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 1 && isGrahaDrishti(5, shukra, mangal),
        des: "Mars in Cancer aspected by Venus",
        result:
          "If Venus aspects Mars in Cancer, the subject will be grieved on account of women`s company, be insulted by women and will lose wealth on account of women.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 1 && isGrahaDrishti(6, shani, mangal),
        des: "Mars in Cancer aspected by Saturn",
        result:
          "Should Saturn aspect Mars in Cancer, the native will acquire money through journey in water, be equal to a king, be sportive in his acts and be always bright.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: mangal == 4,
        des: "Mars in Leo",
        result:
          "If Mars is in Leo in a nativity, the native will be impatient, be valorous, intent upon grabbing others` money and children, will like to live in forests, be fond of eating cow`s flesh (or beef etc.), will lose his first wife, will kill snakes and animals, will be bereft of children, be devoid of charitable acts and be always active in his jobs.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 0 && isGrahaDrishti(0, surya, mangal),
        des: "Mars in Leo aspected by Sun",
        result:
          "If Mars is in Leo and is aspected by the Sun, the native will be humble, helpful to friends, be endowed with own men and be fond of wandering in cow-houses, forests and hills.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 0 && isGrahaDrishti(1, chandra, mangal),
        des: "Mars in Leo aspected by Moon",
        result:
          "If the Moon aspects Mars in Leo, the native will be ominous for his mother, be intelligent, will possess a hard body, be widely famous and will obtain money through women.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 0 && isGrahaDrishti(3, budh, mangal),
        des: "Mars in Leo aspected by Mercury",
        result:
          "If Mercury aspects Mars in Leo, the native will be clever in many arts, be a miser, be skillful in poetry and fine arts and be wicked.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 0 && isGrahaDrishti(4, guru, mangal),
        des: "Mars in Leo aspected by Jupiter",
        result:
          "If Jupiter aspects Mars in Leo, the person will be close to the king, be highly learned, be of pure mentality and be an Army chief.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 0 && isGrahaDrishti(5, shukra, mangal),
        des: "Mars in Leo aspected by Venus",
        result:
          "Should Venus aspect Mars in Leo, the person will have union with many women, be fortunate in respect of his wife and will be ever juvenile.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 0 && isGrahaDrishti(6, shani, mangal),
        des: "Mars in Leo aspected by Saturn",
        result:
          "Saturn aspecting Mars in Leo denotes, that the person will look, like an old man, be poor, will wander in others` houses/be miserable.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: mangal == 8,
        des: "Mars in Sagittarius",
        result:
          "Should Mars be in Sagittarius, the native will have many wounds, be emaciated, be harsh in speech, crafty, alienated, be a warrior endowed with chariots, elephants and Army men, will pass arrows on other`s Army from his chariot, be happy with hard work, will lose his happiness and money due to anger and will not honour elders.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: mangal == 11,
        des: "Mars in Pisces",
        result:
          "Should Mars be in Pisces at the time of one`s birth, the person will be troubled by diseases, will have indifferent children, will live in foreign countries, be insulted by his own relatives, will lose all his wealth by his cunning and cheating disposition, will be depressed in spirits, be very miserable, will disrespect elders and Brahmins, be unkind, will conceive (other`s) desires, be fond of praises and be famous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 4 && isGrahaDrishti(0, surya, mangal),
        des: "Mars in a sign of Jupiter aspected by Sun",
        result:
          "If Mars occupies Sagittarius, or Pisces at birth and is aspected by the Sun, the subject will be world honoured, be fortunate, will live in forests, hills and fortresses and be cruel.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 4 && isGrahaDrishti(1, chandra, mangal),
        des: "Mars in a sign of Jupiter aspected by Moon",
        result:
          "If Mars is in Sagittarius, or Pisces and is aspected by the Moon, the person will be deformed, belligerent, learned and be always inimical to the king.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 4 && isGrahaDrishti(3, budh, mangal),
        des: "Mars in a sign of Jupiter aspected by Mercury",
        result:
          "If Mars is in Sagittarius, or Pisces and is aspected by Mercury, the person will be a scholar, be skillful, learned in fine arts and be highly learned in general.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 4 && isGrahaDrishti(4, guru, mangal),
        des: "Mars in a sign of Jupiter aspected by Jupiter",
        result:
          "If Mars is in Sagittarius, or Pisces and is aspected by Jupiter, the person will be devoid of wife and happiness, will be beyond the reach of enemies, be wealthy and be fond of exercises.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 4 && isGrahaDrishti(5, shukra, mangal),
        des: "Mars in a sign of Jupiter aspected by Venus",
        result:
          "If Mars is in Sagittarius, or Pisces and is aspected by Venus, the person will be very much dear to women, be interested in cosmetics, makeup etc., be charitable, be libidinous and be fortunate.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 4 && isGrahaDrishti(6, shani, mangal),
        des: "Mars in a sign of Jupiter aspected by Saturn",
        result:
          "If Mars is in Sagittarius, or Pisces and is aspected by Saturn, the person will have defective body, be sinful, wandering-nature, devoid of happiness and interested in others` religion.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: mangal == 9,
        des: "Mars in Capricorn",
        result:
          "If Mars is posited in Capricorn at birth, one will be wealthy (fortunate), be endowed with happiness and pleasures, be wealthy, will have an excellent disposition, be famous, be an Army chief, or a king, will possess a good wife, be successful in war, will live in his own country, be independent, be a protector, be virtuous and will be interested in various procedures.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: mangal == 10,
        des: "Mars in Aquarius",
        result:
          "If Mars is posited in Aquarius at the time of one`s birth, he will be devoid of both affection and purity, will look like an old person, will die a bad death, will have spite, jealousy, untruthful disposition, afflicted speech and lost wealth, will be ugly, will have (abundant) hair on the body, will lose money in gambling, will be unsightly, will have miserable profession, be fond of liquor and be unfortunate.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 6 && isGrahaDrishti(0, surya, mangal),
        des: "Mars in a sign of Saturn aspected by Sun",
        result:
          "Should Mars be in Capricorn, or Aquarius and be aspected by the Sun, the subject will have very dark body, be courageous, will have many wives, sons and abundant wealth and be very sharp.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 6 && isGrahaDrishti(1, chandra, mangal),
        des: "Mars in a sign of Saturn aspected by Moon",
        result:
          "Should Mars be in Capricorn, or Aquarius and be aspected by the Moon, one will be fickle minded, be not well disposed towards his mother, be fond of beautification, be charitable, be not firm in friendship and be rich.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 6 && isGrahaDrishti(3, budh, mangal),
        des: "Mars in a sign of Saturn aspected by Mercury",
        result:
          "Should Mars be in Capricorn, or Aquarius and be aspected by Mercury, the subject will walk very slowly, be not rich, will not have any profession, be not strong, be not outspoken and be not virtuous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 6 && isGrahaDrishti(4, guru, mangal),
        des: "Mars in a sign of Saturn aspected by Jupiter",
        result:
          "Should Mars be in Capricorn, or Aquarius and be aspected by Jupiter, the native will be very beautiful, will possess kingly qualities, will fulfill his undertakings, be long-lived and be endowed with relatives.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 6 && isGrahaDrishti(5, shukra, mangal),
        des: "Mars in a sign of Saturn aspected by Venus",
        result:
          "Should Mars be in Capricorn, or Aquarius and be aspected by Venus, one will be endowed with various kinds of (carnal) pleasures, be interested in fostering women and be belligerent.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(mangal) == 6 && isGrahaDrishti(6, shani, mangal),
        des: "Mars in a sign of Saturn aspected by Saturn",
        result:
          "Should Mars be in Capricorn, or Aquarius and be aspected by Saturn, the person will be a king, be very affluent, will hate women, will possess many children, be learned, be devoid, of happiness and be timid in war.",
        sou: "Saravali",
      },
      //33MercurySaravali
      {
        group: "Rasi_Position",
        rule: budh == 0,
        des: "Mercury in Aries",
        result:
          "If Mercury is in Aries at the time of one`s birth, the native will be fond of battles (be uncompromising), be very learned, wicked, emaciated, interested in music and dance, be untruthful, be attached to sexual pleasures, be a writer, will produce fictitious things, will eat much, will lose hard-earned money, will incur debts and imprisonment frequently and will be sometimes fickle minded and yet sometimes firm in disposition.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: budh == 7,
        des: "Mercury in Scorpio",
        result:
          "If Mercury is posited in Scorpio, one will experience troubles, grief and evils, will hate the virtuous, will be devoid of truth, religion and shame, be a dunce, be not virtuous, be a miser, will cohabit with wicked women, be fond of giving cruel punishments, be not out spoken, be interested in blameworthy jobs, will incur debts, will join base men and will steel other`s properties.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 2 && isGrahaDrishti(0, surya, budh),
        des: "Mercury in a sign of Mars aspected by Sun",
        result:
          "Should Mercury occupy a Sign of Mars at birth and be aspected by the Sun, the person will be truthful, be very happy, be honoured by the king and be patiently disposed.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 2 && isGrahaDrishti(1, chandra, budh),
        des: "Mercury in a sign of Mars aspected by Moon",
        result:
          "If Mercury is in a Sign of Mars and is aspected by the Moon, the native will steal the hearts of the fair sex, will serve others, be dirty and be bereft of virtues.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 2 && isGrahaDrishti(2, mangal, budh),
        des: "Mercury in a sign of Mars aspected by Mars",
        result:
          "If Mercury is in a Sign of Mars and is aspected by Mars, one will be a liar, a sweet speaker, will promote quarrels, be learned, affluent, dear to king and valorous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 2 && isGrahaDrishti(4, guru, budh),
        des: "Mercury in a sign of Mars aspected by Jupiter",
        result:
          "If Mercury is in a Sign of Mars and is aspected by Jupiter, one will be happy, will possess a glossy and hairy physique, will have attractive hair, will be very rich, will command others and be sinful.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 2 && isGrahaDrishti(5, shukra, budh),
        des: "Mercury in a sign of Mars aspected by Venus",
        result:
          "If Mercury is in a Sign of Mars and is aspected by Venus, the subject will be in royal service, be fortunate, principal among men, or in his town, will speak skillfully, be trustworthy and will be endowed with a wife.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 2 && isGrahaDrishti(6, shani, budh),
        des: "Mercury in a sign of Mars aspected by Saturn",
        result:
          "If Mercury is in a Sign of Mars and is aspected by Saturn, the person will experience miseries, be fierce, be intent upon doing cruel activities and be devoid of his own men.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: budh == 1,
        des: "Mercury in Taurus",
        result:
          "Should Mercury be in Taurus, the native will be skillful, eminently liberal, be famous, will have knowledge of Vedas and Sastras, be fond of exercises, robes, ornaments and garlands, be firm in disposition, will have sincerely earned wealth, will possess a chaste wife, will be a soft and sweet speaker and be after sexual satisfaction.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: budh == 6,
        des: "Mercury in Libra",
        result:
          "If Mercury falls in Libra at the time of one`s birth, the native will possess knowledge of arts, be intent upon arguments, be an able speaker, will spend money lavishly, will have business in various directions, will honour wise men, guests, Gods and preceptors (elders), be skillful in pretending to serve others, be amiable, devoted to Gods, fraudulent, fickle-minded and sometimes short-tempered and yet sometimes (notably) peaceful.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 5 && isGrahaDrishti(0, surya, budh),
        des: "Mercury in a sign of Venus aspected by Sun",
        result:
          "Should Mercury be in a House of Venus and be aspected by the Sun, the subject will suffer from penury and acute grief, will have a sick physique, be interested in serving others and will be censured.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 5 && isGrahaDrishti(1, chandra, budh),
        des: "Mercury in a sign of Venus aspected by Moon",
        result:
          "Should Mercury be in a House of Venus and be aspected by the Moon, the native will be trustworthy, affluent, firmly pious, devoid of sickness, will have lasting family ties, be famous and be a kings minister.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 5 && isGrahaDrishti(2, mangal, budh),
        des: "Mercury in a sign of Venus aspected by Mars",
        result:
          "Should Mercury be in a House of Venus and be aspected by Mars, the native will be troubled by diseases and enemies, be distressed, will incur royal insult and will be deprived of all worldly objects.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 5 && isGrahaDrishti(4, guru, budh),
        des: "Mercury in a sign of Venus aspected by Jupiter",
        result:
          "Should Mercury be in a House of Venus and be aspected by Jupiter, the native will be highly learned, will fulfill his promise, will be leader of a country/city/group of men and be famous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 5 && isGrahaDrishti(5, shukra, budh),
        des: "Mercury in a sign of Venus aspected by Venus",
        result:
          "Should Mercury be in a House of Venus and be aspected by Venus, the person will be fortunate, soft in disposition, be happy, will enjoy good robes make up etc. and will steal the hearts of the fair sex.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 5 && isGrahaDrishti(6, shani, budh),
        des: "Mercury in a sign of Venus aspected by Saturn",
        result:
          "If Saturn throws his aspect on Mercury in a House of Venus, the subject will be devoid of happiness, be dirty, will experience many diseases and evils, will be subjected to grief on account of his relatives and be distressed.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: budh == 2,
        des: "Mercury in Gemini",
        result:
          "If Mercury occupies Gemini at birth, the subject will have an auspicious appearance, will speak sweetly, be very affluent, be an able speaker, be honourable, will give up his happiness, will cohabit less, will have two wives, be fond of arguments, will be learned in Vedas, Sastras etc., be a poet, be independent, dear, very munificent, proficient in work and will have many sons and friends.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: budh == 5,
        des: "Mercury in Virgo",
        result:
          "If Mercury occupies his exaltation Sign at the time of one`s birth, the native will be quite virtuous, eloquent, skillful, will have knowledge of writing (be an exponent) and poetry, be learned in fine/mechanical arts, be sweet in disposition, be liked by women, be not much virile, be the eldest son of family, be honoured by virtuous, be disposed to serve others, modest, argumentative, famous, charitable and strong.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 3 && isGrahaDrishti(0, surya, budh),
        des: "Mercury in a sign of Mercury aspected by Sun",
        result:
          "Should Mercury be in Gemini/Virgo and be aspected by the Sun, the native will speak truth, be fortunate, dear to king, be a Lord himself, be polite in his activities and be liked by all.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 3 && isGrahaDrishti(1, chandra, budh),
        des: "Mercury in a sign of Mercury aspected by Moon",
        result:
          "Should Mercury be in his own House and receive the aspect of the Moon, the person will be sweet in disposition, garrulous, will promote quarrels, be interested in acquiring sastric knowledge, firm and will succeed in all his undertakings.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 3 && isGrahaDrishti(2, mangal, budh),
        des: "Mercury in a sign of Mercury aspected by Mars",
        result:
          "Should Mercury be in his own House and receive the aspect of Mars, the person will have an injured body, be dirty, be a genius, will serve the king and be dear to him.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 3 && isGrahaDrishti(4, guru, budh),
        des: "Mercury in a sign of Mercury aspected by Jupiter",
        result:
          "Should Mercury be in his own House and receive the aspect of Jupiter, one will be a king`s minister, be excellent, be beautiful, charitable, rich, be endowed with his own men and be courageous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 3 && isGrahaDrishti(5, shukra, budh),
        des: "Mercury in a sign of Mercury aspected by Venus",
        result:
          "Should Mercury be in his own House and receive the aspect of Venus, the native will be highly learned be a royal employee, be a messenger, will honour friendship and will be interested in base women.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 3 && isGrahaDrishti(6, shani, budh),
        des: "Mercury in a sign of Mercury aspected by Saturn",
        result:
          "Should Mercury be in his own House and receive the aspect of Saturn, one will be progressive-minded, be modest, will achieve success in undertakings started by him and will be wealthy with money and clothes.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: budh == 3,
        des: "Mercury in Cancer",
        result:
          "One born with Mercury in Cancer will be learned, will be fond of living in other countries, be interested in cohabiting with women and also in music, be fickle-minded, prattling, inimical to his own relatives, will be fond of arguments, will lose wealth on account of enmity with women, be of bad disposition, be interested in many jobs, be a good poet and will be popular on account of the fame of his ancestors.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 1 && isGrahaDrishti(0, surya, budh),
        des: "Mercury in Cancer aspected by Sun",
        result:
          "Should Mercury be in Cancer, in aspect to the Sun, one will be a dhoby, or a gardener, or a house-builder, or gem smith.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 1 && isGrahaDrishti(1, chandra, budh),
        des: "Mercury in Cancer aspected by Moon",
        result:
          "If the Moon aspects Mercury in Cancer, one will be deprived of wealth (or energy of the physique) on account of women and will be miserable for the same reason.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 1 && isGrahaDrishti(2, mangal, budh),
        des: "Mercury in Cancer aspected by Mars",
        result:
          "If Mars lends his aspect to Mercury in Cancer, he will not have much learning, be garrulous, be a great liar, will produce fictitious things, be a thief and will be affectionate in speech.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 1 && isGrahaDrishti(4, guru, budh),
        des: "Mercury in Cancer aspected by Jupiter",
        result:
          "If Jupiter aspects Mercury in Cancer, one will be a great scholar, very dear (to all), be fortunate, dear to the king and will cross the boundaries of learning.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 1 && isGrahaDrishti(5, shukra, budh),
        des: "Mercury in Cancer aspected by Venus",
        result:
          "Should Venus aspect Mercury in Cancer, one will be equal to Cupid in appearance, will possess attractive physique, be well-versed in the art of singing and in playing musical instruments, be fortunate and softly disposed.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 1 && isGrahaDrishti(6, shani, budh),
        des: "Mercury in Cancer aspected by Saturn",
        result:
          "If Saturn aspects Mercury in Cancer, one will be fond of vanity, be sinful, will face imprisonment, be devoid of virtues and will hate co-born and elders.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: budh == 4,
        des: "Mercury in Leo",
        result:
          "Should the planet Mercury occupy Leo at one`s birth, the native will not possess even bit of wisdom (Kala – bit, hence Gnanakala interpreted thus), be famous in the world, be not truthful, will possess a weak memory, be wealthy, be not strong, will indulge in fratricide, be unfortunate in respect of wife, be independent, mean in conduct, be a servant, be devoid of children, be against his own race, but be favourable to others.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 0 && isGrahaDrishti(0, surya, budh),
        des: "Mercury in Leo aspected by Sun",
        result:
          "If Mercury occupies Leo at birth and is aspected by the Sun, the native will be jealous, rich, virtuous, cruel, mean, fickle-minded and shameless.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 0 && isGrahaDrishti(1, chandra, budh),
        des: "Mercury in Leo aspected by Moon",
        result:
          "If the Moon aspects Mercury in Leo, one will be very beautiful, very skillful, be interested in poetry, fine arts, music and dance, be wealthy and virtuous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 0 && isGrahaDrishti(2, mangal, budh),
        des: "Mercury in Leo aspected by Mars",
        result:
          "If Mars lends his aspect to Mercury in Leo, one will be base, miserable, physically injured, unskillful and impotent.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 0 && isGrahaDrishti(4, guru, budh),
        des: "Mercury in Leo aspected by Jupiter",
        result:
          "If Jupiter aspects Mercury in Leo, one will be beautiful, very learned, be a gifted speaker, be very famous and be endowed with attendants and conveyances.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 0 && isGrahaDrishti(5, shukra, budh),
        des: "Mercury in Leo aspected by Venus",
        result:
          "If Venus aspects Mercury in Leo, one will possess unparalleled beauty, be softly disposed, will have an attractive face, will have many conveyances, be very courageous and be a minister.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 0 && isGrahaDrishti(6, shani, budh),
        des: "Mercury in Leo aspected by Saturn",
        result:
          "If Saturn aspects Mercury in Leo, one will be tall in stature, be splendourless, be ugly, will emanate bad smell from body out of sweat and be miserable.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: budh == 8,
        des: "Mercury in Sagittarius",
        result:
          "Should Mercury be in Sagittarius, the native will be famous, liberal, will have knowledge of Vedas and Sastras, be valorous, will practice abstract meditation, be a minister, or family priest, be chief among his race-men, will be very rich, be interested in performing Yajnas and teaching (Vedas etc.), be a skillful speaker, be charitable and be an expert in writing and fine arts.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: budh == 11,
        des: "Mercury in Pisces",
        result:
          "Should Mercury be in Pisces, one will be fond of good conduct and purity, will live in foreign countries, be issueless, poor, will have a chaste wife, be virtuous, fortunate, be devoid of religion, be skillful in stitching etc. and be devoid of profane knowledge, acquaintance with Sastras and fine arts, will be proficient in bagging other`s wealth and will be devoid of wealth.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 4 && isGrahaDrishti(0, surya, budh),
        des: "Mercury in a sign of Jupiter aspected by Sun",
        result:
          "Should Mercury be in Sagittarius/Pisces and aspected by the Sun, one will suffer from urinary diseases and epilepsy and be peaceful in disposition.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 4 && isGrahaDrishti(1, chandra, budh),
        des: "Mercury in a sign of Jupiter aspected by Moon",
        result:
          "If the Moon aspects Mercury in Sagittarius/Pisces, the native will be a writer, be beautiful par excellence, be very affluent, trustworthy, amiable and happy.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 4 && isGrahaDrishti(2, mangal, budh),
        des: "Mercury in a sign of Jupiter aspected by Mars",
        result:
          "If Mars aspects Mercury in Sagittarius/Pisces, the native will be a leader of townsmen, or thieves, will reside in forests and will be a famous writer.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 4 && isGrahaDrishti(4, guru, budh),
        des: "Mercury in a sign of Jupiter aspected by Jupiter",
        result:
          "Should Jupiter aspect Mercury in Sagittarius/Pisces, the native will be rich by memory, intelligence and descendency, be beautiful, noble and knowledgeable, be a kings minister, or his treasurer and be a writer.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 4 && isGrahaDrishti(5, shukra, budh),
        des: "Mercury in a sign of Jupiter aspected by Venus",
        result:
          "If Venus aspect Mercury in Sagittarius/Pisces, the native will educate boys and girls, be wealthy, soft in disposition and brave.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 4 && isGrahaDrishti(6, shani, budh),
        des: "Mercury in a sign of Jupiter aspected by Saturn",
        result:
          "If Saturn aspect Mercury in Sagittarius/Pisces, the native will be intent upon living in forests, will eat much, be wicked, dirty and will be unsuccessful in all his undertakings.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: budh == 9,
        des: "Mercury in Capricorn",
        result:
          "If Mercury is in Capricorn at birth, the native will be mean, dull, impotent, will do others` work, be devoid of virtues, be subjected to various kinds of miseries, will dream, wander etc., be a tale bearer, be untruthful, devoid of relatives, dirty and timid.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: budh == 10,
        des: "Mercury in Aquarius",
        result:
          "Should Mercury be in Aquarius at birth, the subject will be bereft of good disposition and good deeds, be attached to many religious acts, will give up doing worthy things, be insulted by others, be impure, be not virtuous, be very wicked, be inimical to wife, be devoid of carnal pleasures, be very unfortunate, very timid, impotent, dirty and modest.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 6 && isGrahaDrishti(0, surya, budh),
        des: "Mercury in a sign of Saturn aspected by Sun",
        result:
          "If Mercury be in a House of Saturn and is aspected by the Sun, one will be a boxer, be very strong, one will eat abundantly, be censured, will speak sweetly and be famous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 6 && isGrahaDrishti(1, chandra, budh),
        des: "Mercury in a sign of Saturn aspected by Moon",
        result:
          "If Mercury be in a House of Saturn and is aspected by the Moon, one will derive his livelihood through water, be plentiful will sell flowers, liquor and bulbs (vegetables), will have fierce appearance and be firm (i.e. not moving much).",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 6 && isGrahaDrishti(2, mangal, budh),
        des: "Mercury in a sign of Saturn aspected by Mars",
        result:
          "If Mercury be in a House of Saturn and is aspected by Mars, one will be infirm in speech, be calm in disposition, bashful and happy.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 6 && isGrahaDrishti(4, guru, budh),
        des: "Mercury in a sign of Saturn aspected by Jupiter",
        result:
          "If Mercury be in a House of Saturn and is aspected by Jupiter, one will be endowed with abundant money and grains, be honoured in his village/town and by his men, be happy and be famous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 6 && isGrahaDrishti(5, shukra, budh),
        des: "Mercury in a sign of Saturn aspected by Venus",
        result:
          "If Mercury be in a House of Saturn and is aspected by Venus, one will be the husband of a base woman, be ugly, be unintelligible, be troubled by sexual passion and will have many sons.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(budh) == 6 && isGrahaDrishti(6, shani, budh),
        des: "Mercury in a sign of Saturn aspected by Saturn",
        result:
          "If Mercury be in a House of Saturn and is aspected by Saturn, one will be sinful, very poor, miserable and mean.",
        sou: "Saravali",
      },
      //34JupiterSaravali
      {
        group: "Rasi_Position",
        rule: guru == 0,
        des: "Jupiter in Aries",
        result:
          "If Jupiter is posited in Aries at birth, one will be argumentative in disposition, will acquire precious stones and ornaments out of his efforts, will be endowed with strength, sons and wealth, will have eminent and famous profession, be splendourous, will have many enemies, much expenses and an injured body and will confer fierce and cruel punishments.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: guru == 7,
        des: "Jupiter in Scorpio",
        result:
          "Should Jupiter at the time of one`s birth be in Scorpio, he will be expert in Sastras, be a king, will be a commentator of many Bhasyas (a commentary, which explains Sutras word by word with comments of its own, for example, on Vedas), be skillful, will construct temples and towns, will have many wives, but few sons, be troubled by diseases, will undergo many difficulties, be very fierce, be ostentatious in his performance, be virtuous and will indulge in contemptuous acts.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 2 && isGrahaDrishti(0, surya, guru),
        des: "Jupiter in a sign of Mars aspected by Sun",
        result:
          "If Jupiter occupies Aries/Scorpio at birth and is aspected by the Sun, the native will be charitable, will be truthful, will have famous sons, be very fortunate and will have abundant hair on the body.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 2 && isGrahaDrishti(1, chandra, guru),
        des: "Jupiter in a sign of Mars aspected by Moon",
        result:
          "If Jupiter occupies Aries/Scorpio and is aspected by the Moon, the native will be a historical and poetical writer, will be endowed with many precious stones, be dear to women, be a king and be highly learned.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 2 && isGrahaDrishti(2, mangal, guru),
        des: "Jupiter in a sign of Mars aspected by Mars",
        result:
          "If Jupiter occupies Aries/Scorpio and is aspected by Mars, one is of royal scion, will be valorous, fierce, endowed with knowledge of politics, be modest, affluent and will have a disobedient wife and disobedient servants.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 2 && isGrahaDrishti(3, budh, guru),
        des: "Jupiter in a sign of Mars aspected by Mercury",
        result:
          "If Jupiter occupies Aries/Scorpio and is aspected by Mercury, the native will be a liar, be crafty, sinful, will be skillful in detecting other`s defects, will serve others, be grateful, be modest and be not outspoken.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 2 && isGrahaDrishti(5, shukra, guru),
        des: "Jupiter in a sign of Mars aspected by Venus",
        result:
          "If Jupiter occupies Aries/Scorpio and is aspected by Venus, one will be very happy in respect of residences, sleeping comforts, robes, scents, garlands, ornaments and wife and be very timid.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 2 && isGrahaDrishti(6, shani, guru),
        des: "Jupiter in a sign of Mars aspected by Saturn",
        result:
          "If Jupiter occupies Aries/Scorpio and is aspected by Saturn, the subject will be dirty, miserly, sharp, adventurous, amiable, famous and will not have lasting children and friendship.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: guru == 1,
        des: "Jupiter in Taurus",
        result:
          "Should Jupiter be in Taurus, one will be endowed with a broad body, be corpulent, will honour Brahmins and Gods, be splendourous, fortunate, attached to his wife, be endowed with good appearance, profession, cows and abundant wealth; will possess good articles and ornaments, be distinguished in speech, intelligence and skill; will have political / judicial wisdom, be modest, be endowed with medical accomplishments and be skillful in experiments.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: guru == 6,
        des: "Jupiter in Libra",
        result:
          "If Jupiter occupies Libra at birth, one will be a scholar, will have many sons, be endowed with foreign assignments, will be very affluent, interested in ornaments, modest, will earn money through dance and drama, be pleasing in appearance, be splendourous, learned in Sastras, be superior among his colleague-businessmen, will honour Gods and guests and be very learned.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 5 && isGrahaDrishti(0, surya, guru),
        des: "Jupiter in a sign of Venus aspected by Sun",
        result:
          "If Jupiter occupies a House of Venus at birth and is aspected by the Sun, one will be endowed with attendants and quadrupeds. will wander verily, will have a long body, be learned and be a king`s minister.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 5 && isGrahaDrishti(1, chandra, guru),
        des: "Jupiter in a sign of Venus aspected by Moon",
        result:
          "If Jupiter occupies a House of Venus and is aspected by the Moon, the native will be abundantly rich, be very calm, Sweet, be dear to mother and wife and will enjoy much pleasures.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 5 && isGrahaDrishti(2, mangal, guru),
        des: "Jupiter in a sign of Venus aspected by Mars",
        result:
          "If Jupiter occupies a House of Venus and is aspected by Mars, the native will be dear to the fair sex, be learned, courageous, affluent, happy and be of royal Scion.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 5 && isGrahaDrishti(3, budh, guru),
        des: "Jupiter in a sign of Venus aspected by Mercury",
        result:
          "If Jupiter occupies a House of Venus and is aspected by Mercury, the native will be learned, Skillful, sweet, fortunate, endowed with riches, be highly virtuous and be splendourous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 5 && isGrahaDrishti(5, shukra, guru),
        des: "Jupiter in a sign of Venus aspected by Venus",
        result:
          "If Jupiter occupies a House of Venus and is aspected by Venus, the native will be very attractive, affluent, will wear excellent ornaments, be merciful and will enjoy excellent sleeping comforts and excellent robes.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 5 && isGrahaDrishti(6, shani, guru),
        des: "Jupiter in a sign of Venus aspected by Saturn",
        result:
          "If Jupiter occupies a House of Venus and is aspected by Saturn, the native will be a scholar, will be endowed with abundant wealth and corns, be excellent among the people of his village/town, be dirty, ugly and be devoid of wife.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: guru == 2,
        des: "Jupiter in Gemini",
        result:
          "Should Jupiter be in Gemini, the native will be affluent, scholarly, proficient, will possess attractive eyes, be eloquent, courteous, skillful, virtuous, will honour elders and relatives, will be able to utter “bejeweled” words (be literally rich in words), which are benevolent in nature, be devoted to his duties and be a good poet.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: guru == 5,
        des: "Jupiter in Virgo",
        result:
          "If Jupiter occupies Virgo at birth, one will be a scholar, be virtuous, be skillful in his work, be fond of scents, robes and flowers, will firmly gain in undertakings, will have rich experience in Sastras and fine arts, be affluent, charitable, pure-hearted, skillful and wonderfully learned.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 3 && isGrahaDrishti(0, surya, guru),
        des: "Jupiter in a sign of Mercury aspected by Sun",
        result:
          "If Jupiter occupies Gemini/Virgo and is aspected by the Sun at birth, one will be great, important in his village be a householder and will be endowed with wife, sons and money.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 3 && isGrahaDrishti(1, chandra, guru),
        des: "Jupiter in a sign of Mercury aspected by Moon",
        result:
          "If Jupiter occupies Gemini/Virgo and is aspected by the Moon, the native will be affluent, dear to mother, fortunate, happy, will have wife and sons and be incomparable.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 3 && isGrahaDrishti(2, mangal, guru),
        des: "Jupiter in a sign of Mercury aspected by Mars",
        result:
          "If Jupiter occupies Gemini/Virgo and is aspected by Mars, one will be easily successful at all times, be ugly, rich and be amiable to all.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 3 && isGrahaDrishti(3, budh, guru),
        des: "Jupiter in a sign of Mercury aspected by Mercury",
        result:
          "If Jupiter occupies Gemini/Virgo and is aspected by Mercury, one will be a skillful astrologer, will have many children and wives and will be exponent of many aphorisms and precepts and speak with great excellence.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 3 && isGrahaDrishti(5, shukra, guru),
        des: "Jupiter in a sign of Mercury aspected by Venus",
        result:
          "If Jupiter occupies Gemini/Virgo and is aspected by Venus, the native will undertake acts of temple construction, will visit prostitutes and will win women`s hearts.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 3 && isGrahaDrishti(6, shani, guru),
        des: "Jupiter in a sign of Mercury aspected by Saturn",
        result:
          "If Jupiter occupies Gemini/Virgo and is aspected by Saturn, the native will be the head of a group, state, or village and be beautiful.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: guru == 3,
        des: "Jupiter in Cancer",
        result:
          "If Jupiter be in Cancer at birth, the native will be a scholar, be beautiful, be highly learned, charitable, good-natured, be very strong, be famous, will possess abundant grains and riches, be endowed with truth and penance, will have long-living sons, be honoured by all, will be a king, will have a distinguished profession and will be attached to his friends.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 1 && isGrahaDrishti(0, surya, guru),
        des: "Jupiter in Cancer aspected by Sun",
        result:
          "If Jupiter occupies Cancer at birth and is aspected by the Sun, native will be famous, be ahead of others and will (in the beginning) be devoid of happiness, wealth and wife, all of which will be acquired by him later.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 1 && isGrahaDrishti(1, chandra, guru),
        des: "Jupiter in Cancer aspected by Moon",
        result:
          "If Jupiter occupies Gemini/Virgo and is aspected by the Moon, the native will be very rich, splendourous, be a king, will enjoy abundant wealth and conveyances and will have excellent wife and sons.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 1 && isGrahaDrishti(2, mangal, guru),
        des: "Jupiter in Cancer aspected by Mars",
        result:
          "If Jupiter occupies Gemini/Virgo and is aspected by Mars, one will marry in the boyhood itself, will be endowed with gold and ornaments, be learned, valorous and will have a wounded physique.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 1 && isGrahaDrishti(3, budh, guru),
        des: "Jupiter in Cancer aspected by Mercury",
        result:
          "If Jupiter occupies Gemini/Virgo and is aspected by Mercury, one will be endowed with relatives and friends, be rich, will promote quarrels, be bereft of sins, be a minister and be trustworthy.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 1 && isGrahaDrishti(5, shukra, guru),
        des: "Jupiter in Cancer aspected by Venus",
        result:
          "If Jupiter occupies Gemini/Virgo and is aspected by Venus, one will have many wives, extraordinary riches, various ornaments, be happy and fortunate.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 1 && isGrahaDrishti(6, shani, guru),
        des: "Jupiter in Cancer aspected by Saturn",
        result:
          "If Jupiter occupies Gemini/Virgo and is aspected by Saturn, one will be important in his village, or in the Army, or in his town, be talkative, be very affluent, garrulous and will enjoy pleasures in old age.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: guru == 4,
        des: "Jupiter in Leo",
        result:
          "Should Jupiter be in Leo at the time of birth, the native will be lastingly inimical, be strong, courageous, will show abundant friendship, be learned, rich, will have eminent relatives, be a king, will have heroism akin to that of a king, will be recognizable in an assembly, will destroy the entire band of his enemies, will possess a strong physique and will live in hills, fortresses, forests and temples.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 0 && isGrahaDrishti(0, surya, guru),
        des: "Jupiter in Leo aspected by Sun",
        result:
          "If at birth Jupiter is in Leo and is aspected by the Sun, one will be dear to good men, be famous, be a king, be extremely affluent and virtuous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 0 && isGrahaDrishti(1, chandra, guru),
        des: "Jupiter in Leo aspected by Moon",
        result:
          "If Jupiter is in Leo and is aspected by the Moon, the native will be very beautiful, dirty, will be very rich through the fortunes of his wife and will conquer his five senses.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 0 && isGrahaDrishti(2, mangal, guru),
        des: "Jupiter in Leo aspected by Mars",
        result:
          "If Jupiter is in Leo and is aspected by Mars, the native will honour elders at all times, will perform distinguished acts, be very skillful, pure, adventurous and cruel.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 0 && isGrahaDrishti(3, budh, guru),
        des: "Jupiter in Leo aspected by Mercury",
        result:
          "If Jupiter is in Leo and is aspected by Mercury, the native will have knowledge of civil works of building construction, will be endowed with profane knowledge, be virtuous, be a sweet speaker, be a minister and be highly learned.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 0 && isGrahaDrishti(5, shukra, guru),
        des: "Jupiter in Leo aspected by Venus",
        result:
          "If Jupiter is in Leo and is aspected by Venus, the native will be dear to females, be fortunate, will receive royal honours and be very strong.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 0 && isGrahaDrishti(6, shani, guru),
        des: "Jupiter in Leo aspected by Saturn",
        result:
          "If Jupiter is in Leo and is aspected by Saturn, one will be garrulous, be an eloquent speaker, be devoid of happiness, be sharp and will have mean children and mean wife.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: guru == 8,
        des: "Jupiter in Sagittarius",
        result:
          "If Jupiter occupies Sagittarius at birth, one will be a preceptor, will conduct religious vows, initiations, sacrifices etc., will have lasting wealth, be charitable, be friendly to his own men, be fond of helping others, interested in Shastras, be the head of a zone, or a minister, will live in many countries, will prefer loneliness and be interested in visiting shrines.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: guru == 11,
        des: "Jupiter in Pisces",
        result:
          "If Jupiter is in Pisces at birth, one will be expert in knowing the meanings of Vedas and other Shastras, will be honoured by friends and virtuous people, will be a headsman in the king`s employ, be praiseworthy, unconquerable, rich, devoid of fear, be proud, firm in undertakings, be a king, be skillful in policies, training, behavior and war tactics, be famous and will be calm in his doings.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 4 && isGrahaDrishti(0, surya, guru),
        des: "Jupiter in a sign of Jupiter aspected by Sun",
        result:
          "Jupiter is posited in Sagittarius/Pisces at birth and is aspected by the Sun, the native will be inimical to the king and will be miserable being bereft of wealth and relatives.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 4 && isGrahaDrishti(1, chandra, guru),
        des: "Jupiter in a sign of Jupiter aspected by Moon",
        result:
          "If Jupiter is posited in Sagittarius/Pisces and is aspected by the Moon, the native will enjoy many kinds of happiness, be very fortunate in respect of wife and will have the pride of honour, wealth and possessions.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 4 && isGrahaDrishti(2, mangal, guru),
        des: "Jupiter in a sign of Jupiter aspected by Mars",
        result:
          "If Jupiter is posited in Sagittarius/Pisces and is aspected by Mars, one will be injured in war, be cruel, will cause torture, will harm others and will lose children.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 4 && isGrahaDrishti(3, budh, guru),
        des: "Jupiter in a sign of Jupiter aspected by Mercury",
        result:
          "If Jupiter is posited in Sagittarius/Pisces and is aspected by Mercury, the native will be a minister, or a king, will be happy with wealth, fortunes and progeny and will enjoy all kinds of delights.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 4 && isGrahaDrishti(5, shukra, guru),
        des: "Jupiter in a sign of Jupiter aspected by Venus",
        result:
          "If Jupiter is posited in Sagittarius/Pisces and is aspected by Venus, the native will be happy, learned, be devoid of blemishes, be long-lived, fortunate and will be blessed by Goddess Lakshmi.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 4 && isGrahaDrishti(6, shani, guru),
        des: "Jupiter in a sign of Jupiter aspected by Saturn",
        result:
          "If Jupiter is posited in Sagittarius/Pisces and is aspected by Saturn, the native will be dirty, will be fear-stricken, be neglected by the people of his village/town and be devoid of happiness, pleasures and virtues.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: guru == 9,
        des: "Jupiter in Capricorn",
        result:
          "Jupiter in Capricorn denotes, that the native will be less virile, will experience much grief and difficulties, will be mean in conduct, be a dunce, will meet a bad end, will suffer from penury, will serve others, will be bereft of auspiciousness, mercy, purity, affection to his relatives and of religion, will have an emaciated body, be timid, interested in living in other countries and be depressed of spirits.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: guru == 10,
        des: "Jupiter in Aquarius",
        result:
          "If Jupiter falls in Aquarius at the time of birth, one will be a tale-bearer, be ill disposed, interested in evil jobs, be chief among his racemen, be always attached to base men, be malicious, miserly, will suffer from diseases, will lose wealth on account his own utterances, be devoid of intelligence and virtues and will violate elder`s beds.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 6 && isGrahaDrishti(0, surya, guru),
        des: "Jupiter in a sign of Saturn aspected by Sun",
        result:
          "If Jupiter is in a House of Saturn at birth and is aspected by the Sun, one will be learned, be a king, be rich by birth, will enjoy various kinds of pleasures and be very courageous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 6 && isGrahaDrishti(1, chandra, guru),
        des: "Jupiter in a sign of Saturn aspected by Moon",
        result:
          "If Jupiter is in a House of Saturn and is aspected by the Moon, the native will be devoted to his parents, be superior by birth, be learned rich, virtuous and very charitable.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 6 && isGrahaDrishti(2, mangal, guru),
        des: "Jupiter in a sign of Saturn aspected by Mars",
        result:
          "If Jupiter is in a House of Saturn and is aspected by Mars, one will be valorous, be an Army chief with the king, splendourous, well-dressed, famous and honoured.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 6 && isGrahaDrishti(3, budh, guru),
        des: "Jupiter in a sign of Saturn aspected by Mercury",
        result:
          "If Jupiter is in a House of Saturn and is aspected by Mercury, one will be highly libidinous, important among his folk, rich by conveyances and wealth, famous and will have many friends.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 6 && isGrahaDrishti(5, shukra, guru),
        des: "Jupiter in a sign of Saturn aspected by Venus",
        result:
          "If Jupiter is in a House of Saturn and is aspected by Venus, the native will be endowed with food, drinks, excellent residence, sleeping comforts, wealth, conveyances, excellent wife, ornaments and robes.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(guru) == 6 && isGrahaDrishti(6, shani, guru),
        des: "Jupiter in a sign of Saturn aspected by Saturn",
        result:
          "If Jupiter is in a House of Saturn and is aspected by Saturn, the native will be endowed with incomparable learning, be supreme, be a king of his country, be rich with attendants and quadrupeds and will enjoy pleasures.",
        sou: "Saravali",
      },
      //35VenusSaravali
      {
        group: "Rasi_Position",
        rule: shukra == 0,
        des: "Venus in Aries",
        result:
          "Should Venus be in Aries at birth, one will be night-blind, will have many blemishes, be inimical, will join other housewives, will visit whores, will move in forests and hills, will be imprisoned on account of women, be base, hard in disposition, be an Army chief, or chief of men, be not reliable and be eminent.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shukra == 7,
        des: "Venus in Scorpio",
        result:
          "If Venus occupies Scorpio, the subject will be jealous, be very malicious, be not religious, be argumentative, be crafty, be not attached to brothers, be not fortunate, will be troubled by enemies, be distressed, will be inimical to unchaste women, be skillful in killing, will incur heavy debts, will suffer penury, be proud and will contract venereal diseases.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 2 && isGrahaDrishti(0, surya, shukra),
        des: "Venus in a sign of Mars aspected by Sun",
        result:
          "Should Venus occupy Aries/Scorpio at birth and is in aspect to the Sun, one will be miserable on account of women and will lose wealth and happiness on account of them, will be a king and be learned.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 2 && isGrahaDrishti(1, chandra, shukra),
        des: "Venus in a sign of Mars aspected by Moon",
        result:
          "If Venus is in Aries, or Scorpio and is aspected by the Moon, one will be imprisoned, very fickle-minded, be libidinous, will marry a base lady and will be bereft of children.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 2 && isGrahaDrishti(2, mangal, shukra),
        des: "Venus in a sign of Mars aspected by Mars",
        result:
          "If Venus is in Aries, or Scorpio and is aspected by Mars, one will be devoid of wealth, honour and happiness, will do others` jobs and will perform dirty jobs.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 2 && isGrahaDrishti(3, budh, shukra),
        des: "Venus in a sign of Mars aspected by Mercury",
        result:
          "If Venus is in Aries, or Scorpio and is aspected by Mercury, one will be foolish, profligate, unworthy, be not in good terms with his own relatives, be immodest, thievish, mean and cruel.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 2 && isGrahaDrishti(4, guru, shukra),
        des: "Venus in a sign of Mars aspected by Jupiter",
        result:
          "If Venus is in Aries, or Scorpio and is aspected by Jupiter, one will be endowed with beautiful eyes, will have a charitable wife, will possess a beautiful and long body and will have many sons.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 2 && isGrahaDrishti(6, shani, shukra),
        des: "Venus in a sign of Mars aspected by Saturn",
        result:
          "If Venus is in Aries, or Scorpio and is aspected by Saturn, one will be very dirty, lazy and wandering-natured, will serve others and be a thief.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shukra == 1,
        des: "Venus in Taurus",
        result:
          "Should Venus at birth be in Taurus, one will be endowed with many wives and gems, be an agriculturist, will possess scents, garlands and robes, will live on account of cows, be charitable, will maintain his relatives, will have good appearance, will be learned in many branches, will give away many things, will help the living beings and be a principal person.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shukra == 6,
        des: "Venus in Libra",
        result:
          "If Venus occupies Libra, the native will acquire hard-earned money, be valorous, endowed with superior robes etc., interested in living in foreign countries, will protect his own people, be skillful in his duties, rich, meritorious, famous by honouring Gods and Brahmins, be a scholar and be fortunate.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 5 && isGrahaDrishti(0, surya, shukra),
        des: "Venus in a sign of Venus aspected by Sun",
        result:
          "Should Venus at birth occupy Taurus/Libra and is aspected by the Sun, the person will acquire an excellent wife and abundant wealth, will become a great man and will be subdued by women.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 5 && isGrahaDrishti(1, chandra, shukra),
        des: "Venus in a sign of Venus aspected by Moon",
        result:
          "If Venus is in Taurus, or Libra and is aspected by the Moon, it indicates, that one is born of an excellent mother, will be endowed with happiness, wealth, respect and sons, will have excellence and be splendourous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 5 && isGrahaDrishti(2, mangal, shukra),
        des: "Venus in a sign of Venus aspected by Mars",
        result:
          "If Venus is in Taurus, or Libra and is aspected by Mars, one will marry a bad female, will lose home and wealth on account of females and be sensuous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 5 && isGrahaDrishti(3, budh, shukra),
        des: "Venus in a sign of Venus aspected by Mercury",
        result:
          "If Venus is in Taurus, or Libra and is aspected by Mercury, one will be splendourous, sweet, fortunate, happy, bold, wise and virtuous and will possess distinguished strength.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 5 && isGrahaDrishti(4, guru, shukra),
        des: "Venus in a sign of Venus aspected by Jupiter",
        result:
          "If Venus is in Taurus, or Libra and is aspected by Jupiter, one will be endowed with wife, sons, abodes, conveyances, riches etc. and will achieve desired objects.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 5 && isGrahaDrishti(6, shani, shukra),
        des: "Venus in a sign of Venus aspected by Saturn",
        result:
          "If Venus is in Taurus, or Libra and is aspected by Saturn, one will have little happiness, little wealth, will be reprobate, will marry a mean lady and will suffer from diseases.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shukra == 2,
        des: "Venus in Gemini",
        result:
          "Should Venus occupy Gemini at birth, one will be famous in sciences and Sastras, be beautiful, libidinous, be skillful in writing and in poetry, be dear to good people, will derive wealth through music and dances, will have many friends, will honour Gods and Brahmins and be firm in friendship.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shukra == 5,
        des: "Venus in Virgo",
        result:
          "Should Venus be in Virgo, the native will not be quite discriminative, be soft in disposition, be skillful, will be helpful to others, will speak sweetly, will earn money through several sources, will cohabit with bad women, be mean, be devoid of happiness and pleasures, will beget more daughters and less sons, will visit shrines and be a scholar in an assembly.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 3 && isGrahaDrishti(0, surya, shukra),
        des: "Venus in a sign of Mercury aspected by Sun",
        result:
          "If Venus is in Gemini/Virgo and aspected by the Sun, one will be well disposed towards the king, his own mother and wife, be learned and rich.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 3 && isGrahaDrishti(1, chandra, shukra),
        des: "Venus in a sign of Mercury aspected by Moon",
        result:
          "If Venus is in Gemini, or Virgo and is aspected by the Moon, one will have dark eyes, beautiful hair, be endowed with sleeping comforts, conveyances etc., be splendourous, beautiful in appearance and be fortunate.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 3 && isGrahaDrishti(2, mangal, shukra),
        des: "Venus in a sign of Mercury aspected by Mars",
        result:
          "If Venus is in Gemini, or Virgo and is aspected by Mars, one will be highly sensuous, be fortunate and will destroy his wealth through women.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 3 && isGrahaDrishti(3, budh, shukra),
        des: "Venus in a sign of Mercury aspected by Mercury",
        result:
          "If Venus is in Gemini, or Virgo and is aspected by Mercury, one will be learned, sweet in disposition, wealthy and endowed with conveyances and children, be fortunate and be leader of men, or be a king.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 3 && isGrahaDrishti(4, guru, shukra),
        des: "Venus in a sign of Mercury aspected by Jupiter",
        result:
          "If Venus is in Gemini, or Virgo and is aspected by Jupiter, one will be highly happy, be radiant, courageous, learned and be a preceptor.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 3 && isGrahaDrishti(6, shani, shukra),
        des: "Venus in a sign of Mercury aspected by Saturn",
        result:
          "If Venus is in Gemini, or Virgo and is aspected by Saturn, one will be very miserable, insulted, fickle-minded, green-eyed and be a dunce.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shukra == 3,
        des: "Venus in Cancer",
        result:
          "If Venus occupies Cancer at the time of one`s birth, he will be wise, virtuous, learned, strong, soft, chief among men, will have desired happiness and wealth, be good-looking, just, very much troubled on account of women and wine and will be miserable with family troubles.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 1 && isGrahaDrishti(0, surya, shukra),
        des: "Venus in Cancer aspected by Sun",
        result:
          "If Venus is in Cancer and aspected by the Sun, the native`s wife will be attached to her duties, will possess a spotless body, will be a king`s daughter, (i.e. she will be of a rich heritage), one short-tempered and will be endowed with wealth.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 1 && isGrahaDrishti(1, chandra, shukra),
        des: "Venus in Cancer aspected by Moon",
        result:
          "If Venus is in Cancer and is aspected by the Moon, one will keep his step-mother happy, will have a daughter first and later on many sons, be happy, fortunate and beautiful.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 1 && isGrahaDrishti(2, mangal, shukra),
        des: "Venus in Cancer aspected by Mars",
        result:
          "If Venus is in Cancer and is aspected by Mars, one will be skillful in arts, be very rich, will suffer on account of women, be fortunate and will promote the cause of his relatives.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 1 && isGrahaDrishti(3, budh, shukra),
        des: "Venus in Cancer aspected by Mercury",
        result:
          "If Venus is in Cancer and is aspected by Mercury, one will marry a learned woman, will suffer miseries on account of his relatives, will wander, be wealthy and learned.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 1 && isGrahaDrishti(4, guru, shukra),
        des: "Venus in Cancer aspected by Jupiter",
        result:
          "If Venus is in Cancer and is aspected by Jupiter, one will be endowed with many servants, sons, happiness, relatives and friends and be dear to king.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 1 && isGrahaDrishti(6, shani, shukra),
        des: "Venus in Cancer aspected by Saturn",
        result:
          "If Venus is in Cancer and is aspected by Saturn, one will be subdued by women, be poor, base, ugly, fickle-minded and unhappy.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shukra == 4,
        des: "Venus in Leo",
        result:
          "If Venus occupies Leo at birth, the native will respect women, will enjoy wealth and happiness, will have less virility, be dear to relatives, be miserable in spite of his happiness, will help others, will respect Brahmins, elders and preceptors and will be devoid of much discrimination.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 0 && isGrahaDrishti(0, surya, shukra),
        des: "Venus in Leo aspected by Sun",
        result:
          "If Venus occupies Leo at the time of birth and is aspected by the Sun, one will be jealous, be dear to the fair sex, libidinous will acquire money through women and will possess elephants.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 0 && isGrahaDrishti(1, chandra, shukra),
        des: "Venus in Leo aspected by Moon",
        result:
          "If Venus is in Leo and is aspected by the Moon, one will present obsequial water to his step mother, will be miserable on account of women, be rich and will have various kinds of mental disposition (i.e. be infirm in disposition).",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 0 && isGrahaDrishti(2, mangal, shukra),
        des: "Venus in Leo aspected by Mars",
        result:
          "If Venus is in Leo and is aspected by Mars, one will be a royal person, be famous, dear to women, be affluent, fortunate and be attached to other`s wives.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 0 && isGrahaDrishti(3, budh, shukra),
        des: "Venus in Leo aspected by Mercury",
        result:
          "If Venus is in Leo and is aspected by Mercury, one will be ever engaged in earning, be miserly in disposition, be addicted to women, will join other`s wives, be courageous, crafty, false and wealthy.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 0 && isGrahaDrishti(4, guru, shukra),
        des: "Venus in Leo aspected by Jupiter",
        result:
          "If Venus is in Leo and is aspected by Jupiter, one will be endowed with conveyances, wealth and servants, will marry many women and be a king`s minister.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 0 && isGrahaDrishti(6, shani, shukra),
        des: "Venus in Leo aspected by Saturn",
        result:
          "If Venus is in Leo and is aspected by Saturn, one will be a king, or equal to a king, be famous, will have abundant wealth and conveyances, will marry a prostitute (or a widow), be beautiful in appearance and be miserable.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shukra == 8,
        des: "Venus in Sagittarius",
        result:
          "One, who has Venus in Sagittarius will be endowed with good results accruing out of virtues, dutifulness and wealth, be dear to all people, be splendourous, be an excellent personage, will shine like the Sun before his family members, be a scholar, will be endowed with cows, be fond of decoration, will enjoy wealth, wife and fortunes, be a king`s minister, be skillful, will have a stout and long physique and be respected by all.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shukra == 11,
        des: "Venus in Pisces",
        result:
          "If Venus is posited in Pisces at birth, one will be courteous, liberal, virtuous, very wealthy, will destroy enemies, be famous in the world, excellent, distinguished, dear to king, be endowed with good speech and wisdom, be liberal, will derive wealth and respect from the virtuous, will keep up his promise, will maintain his family members and be endowed with knowledge.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 4 && isGrahaDrishti(0, surya, shukra),
        des: "Venus in a sign of Jupiter aspected by Sun",
        result:
          "If Venus occupies Sagittarius/Pisces at birth and aspected by the Sun, one will be very short tempered, learned, wealthy, be liked by all and will go to foreign countries.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 4 && isGrahaDrishti(1, chandra, shukra),
        des: "Venus in a sign of Jupiter aspected by Moon",
        result:
          "If Venus is in Sagittarius, or Pisces and is aspected by the Moon, one will be famous, be kingly, will eat rich food, be distinguished and will possess incomparable strength.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 4 && isGrahaDrishti(2, mangal, shukra),
        des: "Venus in a sign of Jupiter aspected by Mars",
        result:
          "If Venus is in Sagittarius, or Pisces and is aspected by Mars, one will be very much ill-disposed towards women, will be both happy and miserable, be rich and will possess cows.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 4 && isGrahaDrishti(3, budh, shukra),
        des: "Venus in a sign of Jupiter aspected by Mercury",
        result:
          "If Venus is in Sagittarius, or Pisces and is aspected by Mercury, one will be endowed with all kinds of robes, ornaments, foods and drinks and will possess plenty of money and horses and cows, will possess many wives and many sons, be happy and be very wealthy.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 4 && isGrahaDrishti(4, guru, shukra),
        des: "Venus in a sign of Jupiter aspected by Jupiter",
        result: "-",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 4 && isGrahaDrishti(6, shani, shukra),
        des: "Venus in a sign of Jupiter aspected by Saturn",
        result:
          "If Venus is in Sagittarius, or Pisces and is aspected by Saturn, one will be always amassing financial gains, be happy, will enjoy pleasures and abundant wealth and be fortunate.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shukra == 9,
        des: "Venus in Capricorn",
        result:
          "If Venus occupies Capricorn at birth, one will be miserable due to heavy expenses, will have an emaciated body, will be fond of aged women, will suffer from heart diseases, be miserly in the matter of money, be a liar, be skillful in cheating, be a eunuch, be devoid of (good) acts, interested in others` work, very distressed, be a dunce and will, however, endure misery.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shukra == 10,
        des: "Venus in Aquarius",
        result:
          "Should Venus be in Aquarius, one will suffer from fear and excitement, be not successful in undertakings, will go to other women, be not virtuous, be inimical to elders and to his children, be bereft of ablutions, like bathing and will not be endowed with (good) robes, ornaments etc. and be dirty.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 6 && isGrahaDrishti(0, surya, shukra),
        des: "Venus in a sign of Saturn aspected by Sun",
        result:
          "Should Venus be in Capricorn/Aquarius and be in aspect to the Sun, the native will be firm, very dear to females, very wealthy, very happy and truthful and be courageous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 6 && isGrahaDrishti(1, chandra, shukra),
        des: "Venus in a sign of Saturn aspected by Moon",
        result:
          "If Venus is in Capricorn, or Aquarius and is aspected by the Moon, one will be very splenderous, very valorous, very affluent and fortunate.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 6 && isGrahaDrishti(2, mangal, shukra),
        des: "Venus in a sign of Saturn aspected by Mars",
        result:
          "If Venus is in Capricorn, or Aquarius and is aspected by Mars, one will lose his spouse, will suffer many evils and diseases, will undergo difficulties and later on be happy.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 6 && isGrahaDrishti(3, budh, shukra),
        des: "Venus in a sign of Saturn aspected by Mercury",
        result:
          "If Venus is in Capricorn, or Aquarius and is aspected by Mercury, one will be learned, rich, skillful in sacred precepts, highly scholastic, truthful and happy.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 6 && isGrahaDrishti(4, guru, shukra),
        des: "Venus in a sign of Saturn aspected by Jupiter",
        result:
          "If Venus is in Capricorn, or Aquarius and is aspected by Jupiter, one will enjoy robes and garlands, be beautiful, will be skillful in music and musical instruments and will posses a good wife.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shukra) == 6 && isGrahaDrishti(6, shani, shukra),
        des: "Venus in a sign of Saturn aspected by Saturn",
        result:
          "If Venus is in Capricorn, or Aquarius and is aspected by Saturn, one will be endowed with servants, conveyances and wealth, be dirty and will possess a black, beautiful and broad physique ",
        sou: "Saravali",
      },
      //36SaturnSaravali
      {
        group: "Rasi_Position",
        rule: shani == 0,
        des: "Saturn in Aries",
        result:
          "If Saturn occupies Aries at the time of one`s birth one will be miserable due to his vices and hard labor, be deceitful will hate his relatives, be blameworthy, garrulous, reprobated, poor, bad in appearance, ill-tempered, inimical to his people, will do base acts, be jealous and sinful.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shani == 7,
        des: "Saturn in Scorpio",
        result:
          "If Saturn occupies Scorpio at birth, the native will be hostile, be crooked, affected by poison and weapons, very ill-tempered, miserly, egoistic, rich, capable of stealing others` money, averse to instruments played on festive occasions, malicious, very miserable and will face destruction, misery and diseases.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 2 && isGrahaDrishti(0, surya, shani),
        des: "Saturn in a sign of Mars aspected by Sun",
        result:
          "If Saturn occupies a Rasi of Mars and is aspected by the Sun, one will be interested in agriculture, be very affluent, be endowed with cows, buffaloes and horses, be fortunate and industrious.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 2 && isGrahaDrishti(1, chandra, shani),
        des: "Saturn in a sign of Mars aspected by Moon",
        result:
          "If Saturn is in Aries, or Scorpio and is aspected by the Moon, one will be fickle minded, base, will join mean and ugly women and be devoid of happiness and wealth.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 2 && isGrahaDrishti(2, mangal, shani),
        des: "Saturn in a sign of Mars aspected by Mars",
        result:
          "If Saturn is in Aries, or Scorpio and is aspected by Mars, one will kill animals, be base, be a leader of robbers, be famous and be fond of (joining other) women, meat and wine.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 2 && isGrahaDrishti(3, budh, shani),
        des: "Saturn in a sign of Mars aspected by Mercury",
        result:
          "If Saturn is in Aries, or Scorpio and is aspected by Mercury, one will be untruthful, not virtuous, will eat much, be a famous thief and be devoid of happiness and riches.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 2 && isGrahaDrishti(4, guru, shani),
        des: "Saturn in a sign of Mars aspected by Jupiter",
        result:
          "If Saturn is in Aries, or Scorpio and is aspected by Jupiter, one will be endowed with happiness, wealth and fortune, be a king`s minister and be chief.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 2 && isGrahaDrishti(5, shukra, shani),
        des: "Saturn in a sign of Mars aspected by Venus",
        result:
          "If Saturn is in Aries, or Scorpio and is aspected by Venus, one will be quite unsteady in disposition, very ugly, will join other women and courtesans and be bereft of pleasures.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shani == 1,
        des: "Saturn in Taurus",
        result:
          "If Saturn occupies Taurus at the time of one`s birth, he will be bereft of wealth, be a servant, will speak undesirable words, be untruthful, will win the hearts of old women, will have bad friends, will be addicted to women, will serve other women, be not outspoken, will have strong sight, be related to numerous assignments and be a fool.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shani == 6,
        des: "Saturn in Libra",
        result:
          "Saturn posited in Libra at birth indicates, that the subject will be rich, soft-spoken, will earn money and honours from foreign countries, be a king, or a scholar, will have his wealth protected by his relatives, be senior in the circle, will attain a high status owing to his gracious speech in an assemblage, be good and will join corrupt female dancers and prostitutes.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 5 && isGrahaDrishti(0, surya, shani),
        des: "Saturn in a sign of Venus aspected by Sun",
        result:
          "Should Saturn be in a Sign of Venus and is aspected by the Sun, the native will be clear in speech, will lose wealth, be a scholar, will eat in other`s houses and be weak in constitution.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 5 && isGrahaDrishti(1, chandra, shani),
        des: "Saturn in a sign of Venus aspected by Moon",
        result:
          "If Saturn is in Taurus, or Libra and is aspected by the Moon, one will gain wealth through women, will be honoured by ministers of kings, be dear to women and be endowed with family.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 5 && isGrahaDrishti(2, mangal, shani),
        des: "Saturn in a sign of Venus aspected by Mars",
        result:
          "If Saturn is in Taurus, or Libra and is aspected by Mars, one will be skillful in war preparations, but will be away from war, will speak much and be endowed with wealth and family.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 5 && isGrahaDrishti(3, budh, shani),
        des: "Saturn in a sign of Venus aspected by Mercury",
        result:
          "If Saturn is in Taurus, or Libra and is aspected by Mercury one will always be jocularly disposed, be equal to a neuter, will serve females and be base.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 5 && isGrahaDrishti(4, guru, shani),
        des: "Saturn in a sign of Venus aspected by Jupiter",
        result:
          "If Saturn is in Taurus, or Libra and is aspected by Jupiter, one will share happiness and misery of others, will do others` jobs, be dear to people, charitable and industrious.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 5 && isGrahaDrishti(5, shukra, shani),
        des: "Saturn in a sign of Venus aspected by Venus",
        result:
          "If Saturn is in Taurus, or Libra and is aspected by Venus, one will be happy on account of women and wine (i.e. will enjoy these), be endowed with gems, be very strong and be dear to the king.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shani == 2,
        des: "Saturn in Gemini",
        result:
          "If Saturn occupies Gemini, one will contract debts and imprisonments, will toil, will have vanity in disposition will consecrate by hymns and prayers, be bereft of virtues, be always in hide-out, be libidinous, cunning, wicked and fond of wandering and of sports.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shani == 5,
        des: "Saturn in Virgo",
        result:
          "If Saturn occupies Virgo at birth the subject will resemble a eunuch, be very crafty, will depend on others for food, be addicted to prostitutes, will have a few friends, be unacquainted with arts, be desirous of indulging in ugly acts, will possess sons and wealth, be indolent, helpful to others, will intent upon spoiling virgins and be cautious in his actions.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 3 && isGrahaDrishti(0, surya, shani),
        des: "Saturn in a sign of Mercury aspected by Sun",
        result:
          "If Saturn occupies a Rasi of Mercury at birth and is aspected by the Sun, the native will be devoid of happiness and wealth, be virtuous, bereft of anger, will endure difficulties and be valorous.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 3 && isGrahaDrishti(1, chandra, shani),
        des: "Saturn in a sign of Mercury aspected by Moon",
        result:
          "If Saturn is in Gemini, or Virgo and is aspected by the Moon, one will be equal to a king, will possess a bright physique, will earn wealth and honour through women and will do women`s jobs.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 3 && isGrahaDrishti(2, mangal, shani),
        des: "Saturn in a sign of Mercury aspected by Mars",
        result:
          "If Saturn is in Gemini, or Virgo and is aspected by Mars, one will be a famous boxer, be stupefied, will carry heavy loads and will possess an ugly body.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 3 && isGrahaDrishti(3, budh, shani),
        des: "Saturn in a sign of Mercury aspected by Mercury",
        result:
          "If Saturn is in Gemini, or Virgo and is aspected by Mercury, one will be rich, skillful in war, be a dance master, a skillful singer and an expert in arts.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 3 && isGrahaDrishti(4, guru, shani),
        des: "Saturn in a sign of Mercury aspected by Jupiter",
        result:
          "If Saturn is in Gemini, or Virgo and is aspected by Jupiter, one will be trustworthy in the king`s circle, will possess all kinds of (good) qualities, be liked by good men and will earn wealth through his virtues.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 3 && isGrahaDrishti(5, shukra, shani),
        des: "Saturn in a sign of Mercury aspected by Venus",
        result:
          "If Saturn is in Gemini, or Virgo and is aspected by Venus, one will be skillful in beautifying women, be a teacher of Yogas, or a saint and be dear to the fair sex.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shani == 3,
        des: "Saturn in Cancer",
        result:
          "If Saturn is in Cancer, one will possess a beloved wife, be devoid of wealth in boyhood, will suffer many diseases, be learned, motherless, soft-spoken, distinguished in acts, will always contract diseases, will trouble others, be inimical to relatives, crooked, be kingly in his mid-life and will enjoy growing pleasures.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 1 && isGrahaDrishti(0, surya, shani),
        des: "Saturn in Cancer aspected by Sun",
        result:
          "If Saturn occupies Cancer at birth and is aspected by the Sun, the native will lose his father in his very boyhood be bereft of wealth, wife and happiness, will eat bad food and be sinful.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 1 && isGrahaDrishti(1, chandra, shani),
        des: "Saturn in Cancer aspected by Moon",
        result:
          "If Saturn is in Cancer and is aspected by the Moon, one will be a source of evil to his mother, be wealthy and will be troubled by his co-born.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 1 && isGrahaDrishti(2, mangal, shani),
        des: "Saturn in Cancer aspected by Mars",
        result:
          "If Saturn is in Cancer and is aspected by Mars, one will enjoy king`s wealth, be defective bodied, will possess gold and gems, be endowed with a family and will have a bad group of relatives and wife.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 1 && isGrahaDrishti(3, budh, shani),
        des: "Saturn in Cancer aspected by Mercury",
        result:
          "If Saturn is in Cancer and is aspected by Mercury, one will be hard-hearted, garrulous, will conquer his enemies, will show vanity and will do noble acts.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 1 && isGrahaDrishti(4, guru, shani),
        des: "Saturn in Cancer aspected by Jupiter",
        result:
          "If Saturn is in Cancer and is aspected by Jupiter, one will be endowed with lands, houses, friends, sons, wealth, gems and wife.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 1 && isGrahaDrishti(5, shukra, shani),
        des: "Saturn in Cancer aspected by Venus",
        result:
          "If Saturn is in Cancer and is aspected by Venus, one is of a noble descent, but will be bereft of beauty, grace and happiness.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shani == 4,
        des: "Saturn in Leo",
        result:
          "If Saturn occupies Leo, one will be interested in writing and reading, be skillful, be disdained, devoid of virtues and wife, will live by servitude, be devoid of his own men and happiness, be interested in doing base acts, ill-tempered, be mad with (undue) desires, will carry loads, will toil hard and will have a wrinkled body.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 0 && isGrahaDrishti(0, surya, shani),
        des: "Saturn in Leo aspected by Sun",
        result:
          "If Saturn occupies the Sun-owned Rasi and is aspected by the Sun himself, the native will be devoid of wealth, happiness and nobility, will be a liar and a drunkard, will possess a bad physique, be a servant and be very miserable.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 0 && isGrahaDrishti(1, chandra, shani),
        des: "Saturn in Leo aspected by Moon",
        result:
          "If Saturn is in Leo and is aspected by the Moon, one will enjoy abundant wealth, precious stones and women, be widely famous and be dear to the king.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 0 && isGrahaDrishti(2, mangal, shani),
        des: "Saturn in Leo aspected by Mars",
        result:
          "If Saturn is in Leo and is aspected by Mars, one will everyday move from place to place, be unfortunate, will live in fortresses and hills, be base and be bereft of wife and sons.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 0 && isGrahaDrishti(3, budh, shani),
        des: "Saturn in Leo aspected by Mercury",
        result:
          "If Saturn is in Leo and is aspected by Mercury, one will not be outspoken, be lazy, poor, will do females` jobs, be dirty and miserable.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 0 && isGrahaDrishti(4, guru, shani),
        des: "Saturn in Leo aspected by Jupiter",
        result:
          "If Saturn is in Leo and is aspected by Jupiter, one will be chief and rich in his town, or among his men, will be endowed with progeny and be trustworthy.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 0 && isGrahaDrishti(5, shukra, shani),
        des: "Saturn in Leo aspected by Venus",
        result:
          "If Saturn is in Leo and is aspected by Venus, one will be averse to women, be splendourous, slow (or tardy), happy, rich and will attain a good end.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shani == 8,
        des: "Saturn in Sagittarius",
        result:
          "If Saturn occupies Sagittarius, one will be skillful in behavior, teaching, Vedic meanings, learning and denotation, (i.e. he will be best placed in these respects), be famous due to virtuous children, family profession and his own virtues, will enjoy excellent affluence in his old age, will speak less, will have many names and be soft in disposition.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shani == 11,
        des: "Saturn in Pisces",
        result:
          "If Saturn occupies Pisces at birth, one will be fond of Sacrifices and arts, be chief among his relatives and friends, be calm, will have increasing wealth, be skillful in policy-making, be capable of diamond testing, be virtuous, modest and will later on acquire an authoritative position.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 4 && isGrahaDrishti(0, surya, shani),
        des: "Saturn in a sign of Jupiter aspected by Sun",
        result:
          "If Saturn occupies Sagittarius, or Pisces at birth, in aspect to the Sun the native will be the father of others` children and through these children he will attain wealth, name, fame and honour.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 4 && isGrahaDrishti(1, chandra, shani),
        des: "Saturn in a sign of Jupiter aspected by Moon",
        result:
          "If Saturn is in Sagittarius, or Pisces and is aspected by the Moon, one will be bereft of mother, will have two names and be endowed with wife, children and wealth.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 4 && isGrahaDrishti(2, mangal, shani),
        des: "Saturn in a sign of Jupiter aspected by Mars",
        result:
          "If Saturn is in Sagittarius, or Pisces and is aspected by Mars, one will be troubled by windy diseases, will dislike people, be sinful, mean, blameworthy etc.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 4 && isGrahaDrishti(3, budh, shani),
        des: "Saturn in a sign of Jupiter aspected by Mercury",
        result:
          "If Saturn is in Sagittarius, or Pisces and is aspected by Mercury, one will be equal to a king, be happy, be a preceptor, be honourable, rich and fortunate.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 4 && isGrahaDrishti(4, guru, shani),
        des: "Saturn in a sign of Jupiter aspected by Jupiter",
        result:
          "If Saturn is in Sagittarius, or Pisces and is aspected by Jupiter, one will be a king, or equal to a king, or a minister, or an Army chief and be free from all kinds of danger.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 4 && isGrahaDrishti(5, shukra, shani),
        des: "Saturn in a sign of Jupiter aspected by Venus",
        result:
          "If Saturn is in Sagittarius, or Pisces and is aspected by Venus, one will have two mothers and two fathers, will live in forests and hills, will be unsteady and be endowed with many kinds of assignments.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shani == 9,
        des: "Saturn in Capricorn",
        result:
          "If Saturn is posited at birth in Capricorn, the native will lord over the lands of others` females, will be endowed with Vedic knowledge, virtues and knowledge of many branches of fine arts, be excellent among his caste-men, be honourable, will respect others, be famous, be interested in bathing and decoration, will be skillful in performance, will live in foreign places, be courageous and be polite in behavior.",
        sou: "Saravali",
      },
      {
        group: "Rasi_Position",
        rule: shani == 10,
        des: "Saturn in Aquarius",
        result:
          "If Saturn is in Aquarius, the native will be a great liar, be eminent, be addicted to women and wine, be wicked, crafty, will fall prey to evil friendship, be very ill-tempered, be averse to knowledge, conversation and traditional law, be addicted to other women, be harsh in speech and will attempt at many undertakings.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 6 && isGrahaDrishti(0, surya, shani),
        des: "Saturn in a sign of Saturn aspected by Sun",
        result:
          "If Saturn is in Capricorn/Aquarius and is aspected by the Sun, he will be sick, will have an ugly wife, will eat other`s food, be miserable, wandering in nature and will carry loads.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 6 && isGrahaDrishti(1, chandra, shani),
        des: "Saturn in a sign of Saturn aspected by Moon",
        result:
          "If Saturn is in Capricorn, or Aquarius and is aspected by the Moon, one will be fickle-minded, untruthful, sinful, will not have good terms with his mother, be rich and be sorrowful due to wandering.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 6 && isGrahaDrishti(2, mangal, shani),
        des: "Saturn in a sign of Saturn aspected by Mars",
        result:
          "If Saturn is in Capricorn, or Aquarius and is aspected by Mars, one will be very valorous, famous, be superior among great men and sharp.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 6 && isGrahaDrishti(3, budh, shani),
        des: "Saturn in a sign of Saturn aspected by Mercury",
        result:
          "If Saturn is in Capricorn, or Aquarius and is aspected by Mercury, he will carry loads, be clouded in mentality (or Tamasik in disposition), be good-looking, wandering-natured, learned, be not quite wealthy and be fortunate.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 6 && isGrahaDrishti(4, guru, shani),
        des: "Saturn in a sign of Saturn aspected by Jupiter",
        result:
          "If Saturn is in Capricorn, or Aquarius and is aspected by Jupiter, one will be famous for his good qualities, be a king, or be of royal scion, long-lived and be free from diseases.",
        sou: "Saravali",
      },
      {
        group: "Aspect",
        rule: getLord(shani) == 6 && isGrahaDrishti(5, shukra, shani),
        des: "Saturn in a sign of Saturn aspected by Venus",
        result:
          "If Saturn is in Capricorn, or Aquarius and is aspected by Venus, one will be rich, addicted to other women, fortunate, happy and will enjoy food and drinks.",
        sou: "Saravali",
      },
      //Saravali chapter 14 yogas from the sun
      {
        group: "Solar",
        rule:
          (mangal == red12(surya + 1) ||
            budh == red12(surya + 1) ||
            guru == red12(surya + 1) ||
            shukra == red12(surya + 1) ||
            shani == red12(surya + 1)) &&
          mangal != red12(surya - 1) &&
          budh != red12(surya - 1) &&
          guru != red12(surya - 1) &&
          shukra != red12(surya - 1) &&
          shani != red12(surya - 1),
        des: "Vesi: a planet (excepting moon) in the 2nd from the sun",
        result:
          "One born in Vesi Yoga will be weak-sighted, firm in his word, be hard working and will have a bent body. So say Yavanas.",
        sou: "Saravali",
      },
      {
        group: "Solar",
        rule:
          (mangal == red12(surya - 1) ||
            budh == red12(surya - 1) ||
            guru == red12(surya - 1) ||
            shukra == red12(surya - 1) ||
            shani == red12(surya - 1)) &&
          mangal != red12(surya + 1) &&
          budh != red12(surya + 1) &&
          guru != red12(surya + 1) &&
          shukra != red12(surya + 1) &&
          shani != red12(surya + 1),
        des: "Vasi: a planet (excepting moon) in the 12th from the sun",
        result:
          "One born in Vasi Yoga will possess excellent speech (voice), good memory, be employed, will have looks towards, sideways, will possess a strong physique about the waist, will be equal to a king and be a genuine person.",
        sou: "Saravali",
      },
      {
        group: "Solar",
        rule:
          (mangal == red12(surya - 1) ||
            budh == red12(surya - 1) ||
            guru == red12(surya - 1) ||
            shukra == red12(surya - 1) ||
            shani == red12(surya - 1)) &&
          (mangal == red12(surya + 1) ||
            budh == red12(surya + 1) ||
            guru == red12(surya + 1) ||
            shukra == red12(surya + 1) ||
            shani == red12(surya + 1)),
        des: "Ubhayachari: planets (excepting moon) in the 2nd and 12th from the sun",
        result:
          "One born under Ubhayachari Yoga will have forebearance, will be very fortunate, even bodied, firm, profoundly strong, not very tall, full of everything, learned, happy, will have many servants, will protect his relatives, be equal to a king, ever enthusiastic and will enjoy all pleasures.",
        sou: "Saravali",
      },
      {
        group: "Solar",
        rule: mangal == red12(surya + 1),
        des: "vesi Yoga caused by Mars",
        result:
          "Mars denotes, that the native will resort to base means, but be helpful to others.",
        sou: "Saravali",
      },
      {
        group: "Solar",
        rule: budh == red12(surya + 1),
        des: "vesi Yoga caused by Mercury",
        result:
          "Mercury causing this Yoga indicates, that the native will be a servant, will suffer penury, be soft-spoken and be modest. He will be bashful.",
        sou: "Saravali",
      },
      {
        group: "Solar",
        rule: guru == red12(surya + 1),
        des: "vesi Yoga caused by Jupiter",
        result:
          "Should Jupiter cause Vesi Yoga, the native will accumulate money, be learned and be good-hearted.",
        sou: "Saravali",
      },
      {
        group: "Solar",
        rule: shukra == red12(surya + 1),
        des: "vesi Yoga caused by Venus",
        result:
          "If Venus produces this Yoga, the person will be timid, will face obstacles in his missions, will have pleasant (or swift) movements and will be defeated.",
        sou: "Saravali",
      },
      {
        group: "Solar",
        rule: shani == red12(surya + 1),
        des: "vesi Yoga caused by Saturn",
        result:
          "If it is Saturn, that causes Vesi Yoga, one will join others` wives, be wicked, will resemble an old person in appearance,-be fraudulent in disposition and be contemptuous. He will, however, have wealth.",
        sou: "Saravali",
      },
      {
        group: "Solar",
        rule: mangal == red12(surya - 1),
        des: "vasi Yoga caused by Mars",
        result:
          "The Vasi Yoga caused by Mars indicates, that the subject will be victorious in war, famous and will live with his own fortunes.",
        sou: "Saravali",
      },
      {
        group: "Solar",
        rule: budh == red12(surya - 1),
        des: "vasi Yoga caused by Mercury",
        result:
          "Mercury emanating this Yoga will make one speak sweetly, be beautiful and obey others` orders.",
        sou: "Saravali",
      },
      {
        group: "Solar",
        rule: guru == red12(surya - 1),
        des: "vasi Yoga caused by Jupiter",
        result:
          "If Jupiter should cause Vasi Yoga, the native will possess courage, strength and wisdom. He will keep up his word.",
        sou: "Saravali",
      },
      {
        group: "Solar",
        rule: shukra == red12(surya - 1),
        des: "vasi Yoga caused by Venus",
        result:
          "In the case of Venus, the person will be valorous, famous, virtuous and reputed. ",
        sou: "Saravali",
      },
      {
        group: "Solar",
        rule: shani == red12(surya - 1),
        des: "vasi Yoga caused by Saturn",
        result:
          "If by Saturn, the native will be a businessman, wicked, will steal others` money, will hate elders and will be the husband of a pious lady.",
        sou: "Saravali",
      },
      //From Jagannath Hora 8.0
      {
        group: "Mahapurusha",
        rule:
          (gurub == 0 || gurub == 3 || gurub == 6 || gurub == 9) &&
          (guru == 8 || guru == 11 || guru == 3),
        des: "Hamsa Jupiter in a kendra in moolatrikona or own or exaltation sign",
        result: "Spiritual, pious and respected",
        sou: "Jhora",
      },
      {
        group: "Mahapurusha",
        rule:
          (shukrab == 0 || shukrab == 3 || shukrab == 6 || shukrab == 9) &&
          (shukra == 1 || shukra == 6 || shukra == 11),
        des: "Malavya Venus in a kendra in moolatrikona or own or exaltation sign",
        result: "Enjoys luxuries, happy",
        sou: "Jhora",
      },
      {
        group: "Mahapurusha",
        rule:
          (budhb == 0 || budhb == 3 || budhb == 6 || budhb == 9) &&
          (budh == 2 || budh == 5 || budh == 5),
        des: "Bhadra Mercury in a kendra in moolatrikona or own or exaltation sign",
        result: "Learned, cheerful, helps relatives",
        sou: "Jhora",
      },
      {
        group: "Mahapurusha",
        rule:
          (mangalb == 0 || mangalb == 3 || mangalb == 6 || mangalb == 9) &&
          (mangal == 0 || mangal == 7 || mangal == 9),
        des: "Ruchaka Mars in a kendra in moolatrikona or own or exaltation sign",
        result: "Natural leader, enterprising and bold",
        sou: "Jhora",
      },
      {
        group: "Mahapurusha",
        rule:
          (shanib == 0 || shanib == 3 || shanib == 6 || shanib == 9) &&
          (shani == 9 || shani == 10 || shani == 6),
        des: "Sasa Saturn in a kendra in moolatrikona or own or exaltation sign",
        result: "Wandering leader of free spirit",
        sou: "Jhora",
      },
      //0{'group':'Solar','rule':,'des':'Ubhayachara Planets other than Moon in 2nd and 12th from Sun','result':'Enjoys comforts, king or an equal','sou':'Jhora'},
      //0{'group':'Solar','rule':,'des':'Vesi Planets other than Moon in 2nd from Sun','result':'Balanced, truthful and happy','sou':'Jhora'},
      //0{'group':'Solar','rule':,'des':'Vosi Planets other than Moon in 12th from Sun','result':'Skillful, charitable and learned','sou':'Jhora'},
      //0{'group':'Solar','rule':,'des':'Nipuna (Budha-Aditya)    Sun and Mercury together or in mutual 7ths','result':'Skillful, expert, well-known and respected','sou':'Jhora'},
      //0{'group':'Lunar','rule':,'des':'Duradhara Planets other than Sun in 2nd and 12th from Moon','result':'Enjoys comforts, king or an equal','sou':'Jhora'},
      //0{'group':'Lunar','rule':,'des':'Sunaphaa Planets other than Sun in 2nd from Moon','result':'Intelligent, wealthy and famous','sou':'Jhora'},
      //0{'group':'Lunar','rule':,'des':'Anaphaa Planets other than Sun in 12th from Moon','result':'Comforts, good looks and character','sou':'Jhora'},
      //0{'group':'Lunar','rule':,'des':'Kemadruma 2nd/12th from Moon empty (Sun exempt) and kendras empty (Moon exempt)','result':'Unlucky, poor and unintelligent','sou':'Jhora'},
      //0{'group':'Lunar','rule':,'des':'Chandra -Mangala          Moon and Mars together or in mutual 7ths','result':'Worldly wise and materially successful','sou':'Jhora'},
      //0{'group':'Lunar','rule':,'des':'Gaja -Kesari              Moon and Jupiter in mutual kendras','result':'Famous and virtuous','sou':'Jhora'},
      //{'group':'Lunar','rule':,'des':'Adhi yoga                Benefics in 6th, 7th and 8th from Moon','result':'King, minister or an army chief','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Rajju 7 planets in chara rasis (movable signs)','result':'Traveller, cruel, flourishes abroad','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Musala 7 planets in sthira rasis (fixed signs)','result':'Honorable, wise, wealthy and famous','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Nala 7 planets in dwiswabhava rasis (dual signs)','result':'Skillful, weak, accumulator of wealth','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Maalaa Benefics in 3 kendras','result':'Happy, comforts and luxuries','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Sarpa Malefics in 3 kendras','result':'Miserable, unhappy, cruel and dependent on others','sou':'Jhora'},
      {
        group: "Naabhasa",
        rule: num_occ_sign == 1,
        des: "Gola Seven planets in 1 rasi",
        result: "Strong, poor, dirty, uneducated and sad",
        sou: "Jhora",
      },
      {
        group: "Naabhasa",
        rule: num_occ_sign == 2,
        des: "Yuga Seven planets in 2 rasis",
        result: "Heretic, irreligious, poor, unhappy and discarded",
        sou: "Jhora",
      },
      {
        group: "Naabhasa",
        rule: num_occ_sign == 3,
        des: "Soola Seven planets in 3 rasis",
        result: "Sharp, lazy, violent, valiant and poor",
        sou: "Jhora",
      },
      {
        group: "Naabhasa",
        rule: num_occ_sign == 4,
        des: "Kedaara Seven planets in 4 rasis",
        result: "Happy, wealthy, helpful and may be an agriculturalist",
        sou: "Jhora",
      },
      {
        group: "Naabhasa",
        rule: num_occ_sign == 5,
        des: "Paasa Seven planets in 5 rasis",
        result: "Talkative, characterless, may be imprisoned",
        sou: "Jhora",
      },
      {
        group: "Naabhasa",
        rule: num_occ_sign == 6,
        des: "Daama /Daamini Seven planets in 6 rasis",
        result: "Rich, famous, helpful, many children",
        sou: "Jhora",
      },
      {
        group: "Naabhasa",
        rule: num_occ_sign == 7,
        des: "Veena Seven planets in 7 rasis",
        result: "Wealthy, skillful, leader, likes music",
        sou: "Jhora",
      },
      {
        group: "Naabhasa",
        rule:
          plh(0) + plh(3) == 7 ||
          plh(3) + plh(6) == 7 ||
          plh(6) + plh(9) == 7 ||
          plh(0) + plh(9) == 7,
        des: "Gadaa 7 planets in two successive kendras",
        result: "Wealth, gold, rituals, knowledge of sciences",
        sou: "Jhora",
      },
      {
        group: "Naabhasa",
        rule: plh(0) == 7 || plh(6) == 7,
        des: "Sakata 7 planets in 1st/7th houses",
        result: "Diseases, suffering and foolish",
        sou: "Jhora",
      },
      {
        group: "Naabhasa",
        rule: plh(3) == 7 || plh(9) == 7,
        des: "Vihanga 7 planets in 4th/10th houses",
        result: "Messenger, likes sex, quarrels",
        sou: "Jhora",
      },
      {
        group: "Naabhasa",
        rule: plh(0) + plh(4) + plh(8) == 7,
        des: "Sringaataka 7 planets in konas from lagna",
        result: "Happy, noble wife, wealthy, liked by kings, dislikes women",
        sou: "Jhora",
      },
      {
        group: "Naabhasa",
        rule:
          plh(1) + plh(5) + plh(9) == 7 ||
          plh(2) + plh(6) + plh(10) == 7 ||
          plh(3) + plh(7) + plh(11) == 7,
        des: "Hala 7 planets in mutual konas, but not konas from lagna",
        result: "Farmer, heavy appetite, poor, worried, deserted by friends",
        sou: "Jhora",
      },
      //0{'group':'Naabhasa','rule':,'des':'Vajra Benefics in 1st and 7th and malefics in 4th and 10th','result':'Valiant fighter, fortunate, no desires, happy in early and late parts of life','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Yava Malefics in 1st and 7th and benefics in 4th and 10th','result':'Religious, wealthy, good children, charitable, strong-minded, happy in middle part of life','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Kamala 7 planets in kendras','result':'King, strong character, famous, long-lived, pure, good deeds','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Vaapi 7 planets in panapharas or 7 planets in apoklimas','result':'king, comforts, mind capable of amassing wealth','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Yoopa 7 planets in 1st, 2nd, 3rd and 4th houses','result':'Religious, spiritual and knowledge of rituals','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Sara 7 planets in 4th, 5th, 6th and 7th houses','result':'Makes arrows, hunts, tortures, heads prisons','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Sakti 7 planets in 7th, 8th, 9th and 10th houses','result':'Long-lived, unhappy, poor, lazy and sharp mind in wars','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Danda 7 planets in 10th, 11th, 12th and 1st houses','result':'Unhappy, serves mean people, loses wife, deserted by children','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Naukaa 7 planets in the 7 houses from 1st','result':'Well-known, many desires, wicked, rough and miserly','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Koota 7 planets in the 7 houses from 4th','result':'Liar, jailer, poor, cruel, lives in hills and forests','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Chatra 7 planets in the 7 houses from 7th','result':'Kind, helpful, intelligent, liked by kings, happy in early and late parts of life','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Chaapa 7 planets in the 7 houses from 10th','result':'Unfortunate, liar, thief, protector of secrets, wanders in forests','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Ardha-Chandra 7 planets in 7 houses from a panaphara/apoklima','result':'Army chief, liked by kings, good physique, strong, possesses gold and ornaments','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Chakra 7 planets in odd houses','result':'Great emeperor respected by many kings','sou':'Jhora'},
      //0{'group':'Naabhasa','rule':,'des':'Samudra 7 planets in even houses','result':'Stable fortune and greatness, has wealth, gems and luxuries, likes people, soft-natured','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Subha Benefics in 2nd and 12th houses','result':'Good looks, eloquence and character','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Asubha Malefics in 2nd and 12th houses','result':'Desirous, sinful and enjoying the wealth of others','sou':'Jhora'},
      {
        group: "Other_popular",
        rule: guru == mangal,
        des: "Guru-Mangala Jupiter and Mars together or in samasaptaka",
        result: "Righteous and energetic",
        sou: "Jhora",
      },
      //{'group':'Other_popular','rule':,'des':'Amala Only benefics in 10th from lagna/Moon','result':'Virtuous and has luxuries','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Parvata kendras have benefics, 7th and 8th have no malefics','result':'Fortunate, charitable, eloquent, easy-going, famous','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Kaahala Jupiter and 4th lord in mutual kendras, strong lagna lord','result':'Strong, bold, cunning, leads a large army','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Kaahala The 4th lord is in own/exaltation sign and the 10th lord joins him','result':'Strong, bold, cunning, leads a large army','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Chaamara Lagna lord exalted in a kendra and aspected by Jupiter','result':'Long-lived, scholarly, eloquent, learned in many arts','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Chaamara Two benefics in 7th, 9th and 10th','result':'Long-lived, scholarly, eloquent, learned in many arts','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Sankha The 5th and 6th lords in mutual kendras, strong lagna lord','result':'Wealth, good spouse and children, kind, pious, intelligent, long-lived','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Sankha Lagna lord and 10th lord together in a movable sign, strong 9th lord','result':'Wealth, good spouse and children, kind, pious, intelligent, long-lived','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Bheri Strong 9th lord and planets in 1st, 2nd, 7th and 12th houses','result':'Wealth, good spouse and children, fame, character, virtuous, religious','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Bheri Jupiter, Venus and lagna lord in mutual kendras, strong 9th lord','result':'Wealth, good spouse and children, fame, character, virtuous, religious','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Mridanga Planets in own/exaltation sign in kendras/konas and strong lagna lord','result':'King or an equal and happy','sou':'Jhora'},
      //{'group':'Other_popular','rule':isPlanetInHouse(lordOf(6),9)&&,'des':'Sreenatha The 7th lord exalted in 10th, 10th lord with 9th lord','result':'A great king equal to Indra (king of Gods)','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Matsya Benefics in 1st and 9th, non-empty 5th, malefics in 4th and 8th','result':'Kind, intelligent, seer, astrologer','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Koorma Benefics in 5th/6th/7th in own/exaltation/friendly signs, malefics in 1st/3rd/11th in own/exaltation signs','result':'King, pious, happy, helpful and famous','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Khadga Lagna lord in a kendra/kona, 2nd lord in 9th, 9th lord in 2nd','result':'Skillfull, learned, wealthy, happy, fortunate, intelligent, mighty','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Kusuma Fixed lagna, Venus in a kendra, Moon in a kona with a benefic, Saturn in 10th','result':'King or an equal, charitable, endowed with pleasures and happiness','sou':'Jhora'},
      {
        group: "Other_popular",
        rule: gurub == 1 && (guru == budh || guru == shukra),
        des: "Kalanidhi Jupiter in 2nd conjoined or aspected by Mercury and Venus",
        result: "Character, happiness, health, wealth, learning, respect",
        sou: "Jhora",
      },
      //{'group':'Other_popular','rule':,'des':'Kalpadruma /Parijata Lagna lord, his disposior, latter`s rasi & navamsa dispositors are all in own/exaltation sign or kendra/kona','result':'ing, principled, warrior, prosperous, strong, kind','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Lagnaadhi Benefics and no malefics in 7th and 8th','result':'A great person, learned and happy','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Kulavardhana All planets in the 5th house from lagna or Moon or Sun','result':'Happy, wealthy and brings name to lineage and community','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Go Lagna lord exalted, Jupiter in moolatrikona with 2nd lord','result':'Wealthy, respected, from a good family','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Vidyut The 11th lord in exaltation with Venus in a kendra from lagna lord','result':'Wealthy, pleasure-loving, charitable','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Chaapa The 4th lord in 10th, the 10th lord in 4th, exalted lagna lord','result':'Works for a king, commands a lot of wealth','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Pushkala Lagna lord and Moon together, their dispositor in a kendra or own/adhimitra sign, lagna occupied','result':'Eloquent, wealthy, famous, respected by kings','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Makuta Jupiter in 9th from 9th lord, benefic in 9th from Jupiter, Saturn in 10th','result':'Powerful leader of men, manages unruly activities','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Jaya Exalted 10th lord and debilitated 6th lord','result':'Happy, successful, victorious over enemies, long-lived','sou':'Jhora'},
      {
        group: "Other_popular",
        rule: isPlanetInHouse(lordOf(5), 5),
        des: "Harsha The 6th lord in the 6th house",
        result: "Happy, strong, good-natured, invincible",
        sou: "Jhora",
      },
      {
        group: "Other_popular",
        rule: isPlanetInHouse(lordOf(7), 7),
        des: "Sarala The 8th lord in the 8th house",
        result: "Long-lived, fearless, learned, celebrated, prosperous",
        sou: "Jhora",
      },
      {
        group: "Other_popular",
        rule: isPlanetInHouse(lordOf(11), 11),
        des: "Vimala The 12th lord in the 12th house",
        result: "Noble, frugal, happy and independent",
        sou: "Jhora",
      },
      {
        group: "Other_popular",
        rule: shukra == shani && shukra == ketu,
        des: "Tapaswi Venus, Saturn and Ketu together or aspecting each other",
        result: "Tapas (austere pursuit), a dedicated and selfless pursuit",
        sou: "Jhora",
      },
      //{'group':'Other_popular','rule':,'des':'Tapaswi Venus, Saturn and Ketu in mutual konas','result':'Tapas (austere pursuit), a dedicated and selfless pursuit','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Sadhu Only benefics in the 3rd and 6th from AL','result':'A saintly person','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Hari Benefics in 2nd, 12th and 8th from the 2nd lord','result':'Happy, learned, blessed with wealth and children','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Hara Benefics in 4th, 9th and 8th from the 7th lord','result':'Happy, learned, blessed with wealth and children','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Brahma Benefics in 4th, 10th and 11th from the 1st lord','result':'Happy, learned, blessed with wealth and children','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Brahma (2) Jupiter, Venus, Mercury in kendras from 9th lord, 11th lord, 1st/10th lord (respectively)','result':'Happy, learned, blessed with wealth and children','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Vishnu The 9th lord, 10th lord and navamsa lord of 9th lord conjoin in 2nd','result':'Fortunate, learned, long-lived, liked by kings, worshipper of Vishnu','sou':'Jhora'},
      {
        group: "Other_popular",
        rule:
          isPlanetInHouse(lordOf(4), 8) &&
          isPlanetInHouse(lordOf(8), 9) &&
          isPlanetInHouse(lordOf(9), 4),
        des: "Siva The 5th lord in 9th, 9th lord in 10th, 10th lord in 5th",
        result: "Wise, virtuous, conqueror, army chief or businessman",
        sou: "Jhora",
      },
      //{'group':'Other_popular','rule':,'des':'Trilochana Sun, Moon and Mars in mutual konas','result':'Victorious over enemies, wealthy, intelligent, long-lived','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Gouri Navamsa lord of 10th lord is exalted in 10th with lagna lord','result':'Virtuous, religious, happy, from a respectable family','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Chandika Fixed lagna aspected by 6th lord, Sun joining navamsa lords of 6th and 9th lords','result':'Aggressive, charitable, wealthy, famous, long-lived','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Lakshmi The 9th lord in a kendra in own/exaltation sign, strong lagna lord','result':'ealth, good looks, character, fame, many children','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Saarada Merc/Jup in a kona from Moon, Mars in 11th, Sun in Leo, Merc in a quad, 10th lord in 5th','result':'Happy, learned, principled, wealth, good spouse and children, liked by kings, tapaswi','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Bhaarathi Navamsa dispositor of 2nd lord is exalted and joins 9th lord','result':'Intelligent, religious, good-looking, famous','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Bhaarathi Navamsa dispositor of 5th lord is exalted and joins 9th lord','result':'Intelligent, religious, good-looking, famous','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Bhaarathi Navamsa dispositor of 11th lord is exalted and joins 9th lord','result':'Intelligent, religious, good-looking, famous','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Saraswati Mercury, Jupiter and Venus in kendras/konas/2nd, Jupiter in own/exaltation/friendly sign','result':'Very learned, skillful, intelligent, famous, praised','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Amsavatara Jupiter, Venus and exalted Saturn in kendras','result':'Unsullied reputation, king or an equal, learned, pleasure-loving','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Devendra Fixed lagna, exchange between 2nd, 10th lords and also 1st, 11th lords','result':'Handsome, romantic, famous, leader of men, long-lived','sou':'Jhora'},
      {
        group: "Other_popular",
        rule:
          isPlanetInHouse(lordOf(4), 10) &&
          isPlanetInHouse(lordOf(10), 4) &&
          chandrab == 4,
        des: "Indra The 5th lord in 11th, the 11th lord in 5th with Moon",
        result: "Bold, famous and long-lived",
        sou: "Jhora",
      },
      {
        group: "Other_popular",
        rule: suryab == 9 && isPlanetInHouse(lordOf(9), 2) && shanib == 2,
        des: "Ravi Sun in 10th, 10th lord in 3rd with Saturn",
        result: "Learned, passionate and respected by kings",
        sou: "Jhora",
      },
      //{'group':'Other_popular','rule':,'des':'Bhaaskara Sun in 2nd, Mercury in 3rd and Jupiter in 5th/9th, all from Moon','result':'Wealthy, valorous, aristocratic, learned in sastras, astrology and music','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Vasumati Many benefics in upachayas','result':'Abundant wealth','sou':'Jhora'},
      //{'group':'Other_popular','rule':,'des':'Gandharva Exalted Sun, Moon in 9th, 10th lord in a kona from 7th, lagna lord conjoined/aspected by Jupiter','result':'Skillful and famous in fine arts','sou':'Jhora'},
      //{'group':'Raja','rule':,'des':'Yogakaraka Same planet owns a kendra and a kona','result':'Success and achievements','sou':'Jhora'},
      {
        group: "Raja",
        rule: getRasi(lordOf(1)) == getRasi(lordOf(8)),
        des: "Raja /Lakshmi Conjunction, aspect or exchange of 1st/9th lords",
        result: "Fortunate and high achiever",
        sou: "Jhora",
      },
      {
        group: "Raja",
        rule: getRasi(lordOf(9)) == getRasi(lordOf(8)),
        des: "Raja /Dharma-Karmadhipati Conjunction, aspect or exchange of 9th/10th lords",
        result: "Dutiful and high achiever",
        sou: "Jhora",
      },
      //{'group':'Raja','rule':,'des':'Rajayoga Conjunction, aspect or exchange of kendra/kona lords','result':'Successful and high achievements','sou':'Jhora'},
      //{'group':'Raja','rule':,'des':'Raja (AK-PK) Atma karaka and putra karaka together or in 1st/5th','result':'Loyal following and power','sou':'Jhora'},
      //{'group':'Raja','rule':,'des':'Raja (AK-PiK) Atma karaka and pitru karaka together or in 1st/5th','result':'Power and favors from authorities','sou':'Jhora'},
      //{'group':'Raja','rule':,'des':'Maha Yogada Associated with lagna, GL and HL (by aspect, conjunction or ownership)','result':'Power, authority and wealth','sou':'Jhora'},
      //{'group':'Raja','rule':,'des':'Yogada (GL) Associated with lagna and GL (by aspect, conjunction or ownership)','result':'Power and authority','sou':'Jhora'},
      //{'group':'Raja','rule':,'des':'Yogada (HL) Associated with lagna and HL (by aspect, conjunction or ownership)','result':'Wealth and prosperity','sou':'Jhora'},
      //{'group':'Raja','rule':,'des':'Rajayoga Atma karaka and 9th lord in lagna, 5th or 7th','result':'Successful and high achivements','sou':'Jhora'},
      //{'group':'Raja','rule':,'des':'Rajayoga Benefics in 2nd, 4th and 5th from atma karaka and lagna lord','result':'Successful and high achivements','sou':'Jhora'},
      //{'group':'Raja','rule':,'des':'Rajayoga All benefics in kendras and all malefics in 3rd, 6th and 11th','result':'Becomes a king even if from a lowly family','sou':'Jhora'},
      //{'group':'Raja','rule':,'des':'Rajayoga Lagna lord aspects lagna from own/exaltation sign and 6th/8th/12th lord is debilitated','result':'Successful and high achivements','sou':'Jhora'},
      {
        group: "Raja",
        rule:
          (getRasi(lordOf(4)) == getRasi(lordOf(0)) ||
            getRasi(lordOf(4)) == getRasi(lordOf(8))) &&
          (getRasi(lordOf(4)) == 0 ||
            getRasi(lordOf(4)) == 3 ||
            getRasi(lordOf(4)) == 9),
        des: "Rajayoga The 5th lord joins lagna lord or 9th lord in 1st/4th/10th",
        result: "Becomes a king",
        sou: "Jhora",
      },
      {
        group: "Raja",
        rule:
          getRasi(lordOf(4)) == getRasi(lordOf(8)) &&
          isGrahaDrishti(lordOf(0), getRasi(lordOf(0)), lagna),
        des: "Rajayoga The 5th and 9th lords in conjunction or samasaptaka, lagna lord aspecting lagna",
        result: "Prosperous and successful",
        sou: "Jhora",
      },
      {
        group: "Raja",
        rule: getRasi(lordOf(4)) == getRasi(lordOf(8)),
        des: "Rajayoga The 5th and 9th lords in conjunction or samasaptaka",
        result: "Prosperous",
        sou: "Jhora",
      },
      //{'group':'Raja','rule':,'des':'Rajayoga Four or more planets in moolatrikona or exaltation signs','result':'Becomes a king even if from a lowly family','sou':'Jhora'},
      {
        group: "Raja",
        rule: isPlanetInHouse(lordOf(5), 7) || isPlanetInHouse(lordOf(5), 11),
        des: "Viparita Raja Yoga 6th lord in 8th or 12th",
        result: "Success after pressures or someone else`s losses",
        sou: "Jhora",
      },
      {
        group: "Raja",
        rule: isPlanetInHouse(lordOf(7), 5) || isPlanetInHouse(lordOf(7), 11),
        des: "Viparita Raja Yoga 8th lord in 6th or 12th",
        result: "Success after pressures or someone else`s losses",
        sou: "Jhora",
      },
      {
        group: "Raja",
        rule: isPlanetInHouse(lordOf(12), 5) || isPlanetInHouse(lordOf(12), 7),
        des: "Viparita Raja Yoga 12th lord in 6th or 8th",
        result: "Success after pressures or someone else`s losses",
        sou: "Jhora",
      },
      {
        group: "Raja",
        rule:
          getRasi(lordOf(5)) == getRasi(lordOf(7)) &&
          getRasi(lordOf(5)) == getRasi(lordOf(11)),
        des: "Viparita Raja Yoga The 6th, 8th and 12th lords in conjunction or samasaptaka",
        result: "Success after pressures or someone else`s losses",
        sou: "Jhora",
      },
      {
        group: "Raja",
        rule: getRasi(lordOf(5)) == getRasi(lordOf(7)),
        des: "Viparita Raja Yoga The 6th and 8th lords in conjunction or samasaptaka",
        result: "Success after pressures or someone else`s losses",
        sou: "Jhora",
      },
      {
        group: "Raja",
        rule: getRasi(lordOf(5)) == getRasi(lordOf(11)),
        des: "Viparita Raja Yoga The 6th and 12th lords in conjunction or samasaptaka",
        result: "Success after pressures or someone else`s losses",
        sou: "Jhora",
      },
      {
        group: "Raja",
        rule: getRasi(lordOf(7)) == getRasi(lordOf(11)),
        des: "Viparita Raja Yoga The 8th and 12th lords in conjunction or samasaptaka",
        result: "Success after pressures or someone else`s losses",
        sou: "Jhora",
      },
      //{'group':'Raja','rule':,'des':'Rajayoga Same planet aspecting lagna in D-1, D-9, D-2, D-3, D-12, D-30','result':'Success and high achievements','sou':'Jhora'},
      //{'group':'Raja_Sambandha','rule':,'des':'Raja_Sambandha Amatya karaka conjoining/aspecting 10th lord','result':'Important person in a king`s court','sou':'Jhora'},
      //{'group':'Raja_Sambandha','rule':,'des':'Raja_Sambandha Dispositor of amatya karaka conjoining/aspecting 10th lord','result':'Important person in a king`s court','sou':'Jhora'},
      //{'group':'Raja_Sambandha','rule':,'des':'Raja_Sambandha Atma karaka and amatya karaka conjoining','result':'Very intelligent minister','sou':'Jhora'},
      //{'group':'Raja_Sambandha','rule':,'des':'Raja_Sambandha Amatya karaka in own sign or exaltation sign','result':'An intelligent minister','sou':'Jhora'},
      //{'group':'Raja_Sambandha','rule':,'des':'Raja_Sambandha Amatya karaka in a kona','result':'A famous minister','sou':'Jhora'},
      //{'group':'Raja_Sambandha','rule':,'des':'Raja_Sambandha Amatya karaka in a kendra/kona from atma karaka','result':'An associate liked by a king','sou':'Jhora'},
      //{'group':'Raja_Sambandha','rule':,'des':'Raja_Sambandha Malefics in 3rd/6th from lagna, arudha lagna and atma karaka','result':'Powerful chief of army','sou':'Jhora'},
      //{'group':'Raja_Sambandha','rule':,'des':'Raja_Sambandha Atma karaka in own/exaltation sign in a kendra/kona, aspected by 9th lord','result':'A fortunate minister','sou':'Jhora'},
      //{'group':'Raja_Sambandha','rule':,'des':'Raja_Sambandha Atma karaka in lagna with a benefic and Moon in atmakaraka`s sign','result':'Becomes a minister at an old age','sou':'Jhora'},
      //{'group':'Raja_Sambandha','rule':,'des':'Raja_Sambandha Atma karaka in 5th, 7th, 9th or 10th with a benefic','result':'Association with and money from kings','sou':'Jhora'},
      //{'group':'Raja_Sambandha','rule':,'des':'Raja_Sambandha Atma karaka in the 9th and bhagyapada in lagna','result':'Fortunate and associates with kings','sou':'Jhora'},
      //{'group':'Raja_Sambandha','rule':,'des':'Raja_Sambandha Lagna lord in 10th and 10th lord in lagna','result':'Powerful and associated with kings','sou':'Jhora'},
      //{'group':'Raja_Sambandha','rule':,'des':'Raja_Sambandha Moon and Venus in the 4th from atma karaka','result':'Royal insignia','sou':'Jhora'},
      //{'group':'Raja_Sambandha','rule':,'des':'Raja_Sambandha Atma karaka with 5th lord in a kendra or a kona','result':'A king`s friend','sou':'Jhora'},
      //{'group':'Raja_Sambandha','rule':,'des':'Raja_Sambandha Lagna lord with 5th lord in a kendra or a kona','result':'A king`s friend','sou':'Jhora'},
      {
        group: "Dhana",
        rule:
          lagna == 0 &&
          suryab == 4 &&
          chandrab == 10 &&
          shanib == 10 &&
          gurub == 10,
        des: "Dhana Surya in 5th, Sani, Chandra, Guru in 11th for Mesh lagna",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule:
          lagna == 1 &&
          budhb == 4 &&
          gurub == 10 &&
          chandrab == 10 &&
          mangalb == 10,
        des: "Dhana Budha in 5th, Guru, Chandra, Mangala in 11th for Vrish lagna",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule: lagna == 2 && shukrab == 4 && mangalb == 10,
        des: "Dhana Sukra in 5th, Mangala in 11th for Mith lagna",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule: lagna == 3 && mangalb == 4 && shukrab == 10,
        des: "Dhana Mangala in 5th, Sukra in 11th for Kark lagna",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule: lagna == 4 && gurub == 4 && budhb == 10,
        des: "Dhana Guru in 5th, Budha in 11th for Simh lagna",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule: lagna == 5 && shanib == 4 && suryab == 10 && chandrab == 10,
        des: "Dhana Sani in 5th, Chandra, Surya in 11th for Kanya lagna",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule: lagna == 6 && shanib == 4 && suryab == 10 && chandrab == 10,
        des: "Dhana Sani in 5th, Surya, Chandra in 11th for Tula lagna",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule: lagna == 7 && gurub == 4 && budhb == 10,
        des: "Dhana Guru in 5th, Budha in 11th for Vrisch lagna",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule: lagna == 8 && mangalb == 4 && shukrab == 10,
        des: "Dhana Mangala in 5th, Sukra in 11th for Dhanu lagna",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule: lagna == 9 && shukrab == 4 && mangalb == 10,
        des: "Dhana Sukra in 5th, Mangala in 11th for Makar lagna",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule:
          lagna == 10 &&
          budhb == 4 &&
          gurub == 10 &&
          chandrab == 10 &&
          mangalb == 10,
        des: "Dhana Budha in 5th, Guru, Chandra, Mangala in 11th for Kumbh lagna",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule: lagna == 11 && chandrab == 4 && shanib == 10 && gurub == 10,
        des: "Dhana Chandra in 5th, Sani, Chandra, Guru in 11th for Meen lagna",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule:
          mangal == 0 &&
          mangalb == 0 &&
          (shukra == 0 ||
            budh == 0 ||
            shani == 0 ||
            isGrahaDrishti(5, shukra, mangal) ||
            isGrahaDrishti(6, shani, mangal) ||
            isGrahaDrishti(3, budh, mangal)),
        des: "Dhana Mangala in Mesh lagna, conjoined or aspected by Budha, Sukra, Sani",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule:
          shukra == 1 &&
          shukrab == 0 &&
          (shani == 1 ||
            budh == 1 ||
            isGrahaDrishti(6, shani, shukra) ||
            isGrahaDrishti(3, budh, shukra)),
        des: "Dhana Sukra in Vrish lagna, conjoined or aspected by Budha, Sani",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule:
          budh == 2 &&
          budhb == 0 &&
          (shani == 2 ||
            guru == 2 ||
            isGrahaDrishti(4, guru, budh) ||
            isGrahaDrishti(6, shani, budh)),
        des: "Dhana Budha in Mith lagna, conjoined or aspected by Guru, Sani",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule:
          chandra == 3 &&
          chandrab == 0 &&
          (guru == 3 ||
            budh == 3 ||
            isGrahaDrishti(4, guru, chandra) ||
            isGrahaDrishti(3, budh, chandra)),
        des: "Dhana Chandra in Kark lagna, conjoined or aspected by Budha, Guru",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule:
          surya == 4 &&
          suryab == 0 &&
          (mangal == 4 ||
            guru == 4 ||
            isGrahaDrishti(2, mangal, surya) ||
            isGrahaDrishti(4, guru, surya)),
        des: "Dhana Surya in Simh lagna, conjoined or aspected by Mangala, Guru",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule:
          budh == 5 &&
          budhb == 0 &&
          (guru == 5 ||
            shani == 5 ||
            isGrahaDrishti(4, guru, budh) ||
            isGrahaDrishti(6, shani, budh)),
        des: "Dhana Budha in Kanya lagna, conjoined or aspected by Guru, Sani",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule:
          shukra == 6 &&
          shukrab == 0 &&
          (shani == 6 ||
            budh == 6 ||
            isGrahaDrishti(6, shani, shukra) ||
            isGrahaDrishti(3, budh, shukra)),
        des: "Dhana Sukra in Tula lagna, conjoined or aspected by Budha, Sani",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule:
          mangal == 7 &&
          mangalb == 0 &&
          (shukra == 7 ||
            budh == 7 ||
            shani == 7 ||
            isGrahaDrishti(5, shukra, mangal) ||
            isGrahaDrishti(6, shani, mangal) ||
            isGrahaDrishti(3, budh, mangal)),
        des: "Dhana Mangala in Vrisch lagna, conjoined or aspected by Budha, Sukra, Sani",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule:
          guru == 8 &&
          gurub == 0 &&
          (mangal == 8 ||
            budh == 8 ||
            isGrahaDrishti(2, mangal, guru) ||
            isGrahaDrishti(3, budh, guru)),
        des: "Dhana Guru in Dhanu lagna, conjoined or aspected by Mangala, Budha",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule:
          shani == 9 &&
          shanib == 0 &&
          (mangal == 9 ||
            guru == 9 ||
            isGrahaDrishti(2, mangal, shani) ||
            isGrahaDrishti(4, guru, shani)),
        des: "Dhana Sani in Makar lagna, conjoined or aspected by Mangala, Guru",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule:
          shani == 10 &&
          shanib == 0 &&
          (mangal == 10 ||
            guru == 10 ||
            isGrahaDrishti(2, mangal, shani) ||
            isGrahaDrishti(4, guru, shani)),
        des: "Dhana Sani in Kumbh lagna, conjoined or aspected by Mangala, Guru",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Dhana",
        rule:
          guru == 11 &&
          gurub == 0 &&
          (mangal == 11 ||
            budh == 11 ||
            isGrahaDrishti(2, mangal, guru) ||
            isGrahaDrishti(3, budh, guru)),
        des: "Dhana Guru in Meen lagna, conjoined or aspected by Mangala, Budha",
        result: "Very rich",
        sou: "Jhora",
      },
      {
        group: "Daridra",
        rule:
          isPlanetInHouse(lordOf(0), 11) &&
          isPlanetInHouse(lordOf(11), 0) &&
          (isGrahaDrishti(lordOf(7), getRasi(g[lordOf(7)]), lagna) ||
            isGrahaDrishti(
              lordOf(7),
              getRasi(g[lordOf(7)]),
              getRasi(g[lordOf(0)])
            )),
        des: "Daridra Lagna lord in 12th and 12th lord in lagna, with maraka aspect on atleast one",
        result: "Poverty",
        sou: "Jhora",
      },
      {
        group: "Daridra",
        rule:
          isPlanetInHouse(lordOf(0), 5) &&
          isPlanetInHouse(lordOf(5), 0) &&
          (isGrahaDrishti(lordOf(7), getRasi(g[lordOf(7)]), lagna) ||
            isGrahaDrishti(
              lordOf(7),
              getRasi(g[lordOf(7)]),
              getRasi(g[lordOf(0)])
            )),
        des: "Daridra Lagna lord in 6th and 6th lord in lagna, with maraka aspect on atleast one",
        result: "Poverty",
        sou: "Jhora",
      },
      {
        group: "Daridra",
        rule:
          (isPlanetInHouse(lordOf(0), 7) &&
            isGrahaDrishti(
              lordOf(7),
              getRasi(g[lordOf(7)]),
              getRasi(g[lordOf(0)])
            )) ||
          lagna == ketu ||
          chandra == ketu,
        des: "Daridra Lagna lord in 8th with maraka aspect, lagna/Moon with Ketu",
        result: "Poverty",
        sou: "Jhora",
      },
      //{'group':'Daridra','rule':,'des':'Daridra Lagna lord in a dusthana with a malefic, 2nd lord in neecha or enemy`s sign','result':'Even a royal scion becomes poor','sou':'Jhora'},
      {
        group: "Daridra",
        rule:
          isPlanetInHouse(lordOf(4), 5) &&
          isPlanetInHouse(lordOf(8), 11) &&
          (isGrahaDrishti(
            lordOf(7),
            getRasi(g[lordOf(7)]),
            getRasi(g[lordOf(4)])
          ) ||
            isGrahaDrishti(
              lordOf(7),
              getRasi(g[lordOf(7)]),
              getRasi(g[lordOf(8)])
            )),
        des: "Daridra The 5th lord in 6th, 9th lord in 12th, with maraka aspects",
        result: "Poverty",
        sou: "Jhora",
      },
      //{'group':'Daridra','rule':,'des':'Daridra Malefics in lagna with maraka aspect, without 9th/10th lord in lagna','result':'Poverty','sou':'Jhora'},
      //{'group':'Parivraja','rule':,'des':'/ Pravrajya Parivraja/Pravrajya      Moon and Saturn together in arudha lagna','result':'Renunciation and an austere life','sou':'Jhora'},
      //{'group':'Parivraja','rule':,'des':'/ Pravrajya Parivraja/Pravrajya      Moon and Saturn together aspecting arudha lagna','result':'Inclination to renounce material comforts','sou':'Jhora'},
      //{'group':'Parivraja','rule':,'des':'/ Pravrajya Parivraja/Pravrajya      The 10th lord in a kendra/kona with atleast 4 other planets','result':'Ascetic who attains emancipation','sou':'Jhora'},
      //{'group':'Parivraja','rule':,'des':'/ Pravrajya Parivraja/Pravrajya      Lagna at the end of a sign with a benefic in it, Jupiter in a kendra/kona','result':'An ascetic who attains emancipation','sou':'Jhora'},
      //{'group':'Parivraja','rule':,'des':'/ Pravrajya Parivraja/Pravrajya      Moon in Saturn`s drekkana, aspected in rasi by Saturn and Mars','result':'An ascetic','sou':'Jhora'},
      //{'group':'Parivraja','rule':,'des':'/ Pravrajya Parivraja/Pravrajya      Moon in a navamsa of Mars, aspected in rasi by Saturn','result':'An ascetic','sou':'Jhora'},
      //{'group':'Parivraja','rule':,'des':'/ Pravrajya Parivraja/Pravrajya      Moon`s dispositor aspected only by Saturn','result':'An ascetic','sou':'Jhora'},
      //40UpagrahasParashar
      {
        rule: Bhaava(Dhuma) == 0,
        des: "Dhuma in 1",
        result:
          "If Dhuma is in Lagna, the native will be valiant, endowed with beautiful eyes, stupefied in disposition, unkind, wicked and highly short-tempered.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Dhuma) == 1,
        des: "Dhuma in 2",
        result:
          "If Dhuma is in Dhana Bhava, the native will be sickly, wealthy, devoid of a limb, will incur humiliation at royal level, be dull witted and be a eunuch.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Dhuma) == 2,
        des: "Dhuma in 3",
        result:
          "Dhuma is in Sahaja Bhava, the native will be intelligent, very bold, delighted, eloquent and be endowed with men and wealth.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Dhuma) == 3,
        des: "Dhuma in 4",
        result:
          "If Dhuma is in Bandhu Bhava, the native will be grieved on account of being given up by his female, but will be learned in all Shastras.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Dhuma) == 4,
        des: "Dhuma in 5",
        result:
          "If Dhuma is in Putra Bhava, the native will have limited progeny, be devoid of wealth, be great, will eat anything and be bereft of friends and Mantras.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Dhuma) == 5,
        des: "Dhuma in 6",
        result:
          "If Dhuma is in Ari Bhava, the native will be strong, will conquer his enemies, be very brilliant, famous and free from diseases.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Dhuma) == 6,
        des: "Dhuma in 7",
        result:
          "If Dhuma is in Yuvati Bhava, the native will be penniless, be ever sensuous, skilful in going to other`s females and be always devoid of brilliance.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Dhuma) == 7,
        des: "Dhuma in 8",
        result:
          "If Dhuma is in Randhra Bhava, the native will be bereft of courage, but be enthusiastic, be truthful, disagreeable, hardhearted and selfish.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Dhuma) == 8,
        des: "Dhuma in 9",
        result:
          "If Dhuma is in Dharma Bhava, the native will be endowed sons and fortunes, be rich, honourable, kind, religious and well disposed to his relatives.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Dhuma) == 9,
        des: "Dhuma in 10",
        result:
          "If Dhuma is in Karma Bhava, the native will be endowed with sons and fortunes, be delighted, intelligent, happy and truthful.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Dhuma) == 10,
        des: "Dhuma in 11",
        result:
          "If Dhuma is in Labha Bhava, the native will be endowed with wealth, grains and gold, be beautiful, will have knowledge of arts, be modest and be skilful in singing.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Dhuma) == 11,
        des: "Dhuma in 12",
        result:
          "If Dhuma is in Vyaya Bhava, the native will be morally fallen, will indulge in sinful acts, be interested in other`s wives, addicted to vices, unkind and crafty.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Vyatipata) == 0,
        des: "Vyatipata in 1",
        result:
          "If Vyatipata is in Tanu Bhava, the native will be troubled by miseries, be cruel, will indulge in destructive acts, be foolish and will be disposed to his relatives.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Vyatipata) == 1,
        des: "Vyatipata in 2",
        result:
          "If Vyatipata is in Dhana Bhava, the native will be morally crooked, be bilious, will enjoy pleasures, be unkind, but grateful, be wicked and sinful.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Vyatipata) == 2,
        des: "Vyatipata in 3",
        result:
          "If Vyatipata is in Sahaja Bhava, the native will be firm in disposition, be a warrior, be liberal, very rich, dear to the king and be head of an Army.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Vyatipata) == 3,
        des: "Vyatipata in 4",
        result:
          "If Vyatipata is in Bandhu Bhava, the native will be endowed with relatives etc., but not sons and fortunes.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Vyatipata) == 4,
        des: "Vyatipata in 5",
        result:
          "If Vyatipata is in Putra Bhava, the native will be poor, be charming in appearance, will have imbalances of phlegm, bile and wind, be hard-hearted and shameless.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Vyatipata) == 5,
        des: "Vyatipata in 6",
        result:
          "If Vyatipata is in Ari Bhava, the native will destroy his enemies, be physically mighty, skilful in use of all kinds of weapons and in arts and be peaceful in disposition.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Vyatipata) == 6,
        des: "Vyatipata in 7",
        result:
          "If Vyatipata is in Yuvati Bhava, the native will be bereft of wealth, wife and sons, will subdue to females, be miserable, sensuous, shameless and friendly to others.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Vyatipata) == 7,
        des: "Vyatipata in 8",
        result:
          "If Vyatipata is in Randhra Bhava, the native will have deformity of eyes, be ugly, unfortunate, spiteful to Brahmins and be troubled by disorders of blood.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Vyatipata) == 8,
        des: "Vyatipata in 9",
        result:
          "If Vyatipata is in Dharma Bhava, the native will have many kinds of business and many friends; he will be very learned, well disposed to his wife and he will be eloquent.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Vyatipata) == 9,
        des: "Vyatipata in 10",
        result:
          "If Vyatipata is in Karma Bhava, the native will be religious, peaceful, skilful in religious acts, very learned and far-sighted.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Vyatipata) == 10,
        des: "Vyatipata in 11",
        result:
          "If Vyatipata is in Labha Bhava, the native will be extremely opulent, be honourable, truthful, firm in policy, endowed with many horses and be interested in singing.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Vyatipata) == 11,
        des: "Vyatipata in 12",
        result:
          "If Vyatipata is in Vyaya Bhava, the native will be given to anger, associated with many activities, disabled, irreligious and hate his own relatives.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Parivesha) == 0,
        des: "Parivesha in 1",
        result:
          "If Parivesha is in Tanu Bhava, the native will be learned, truthful, peaceful, rich, endowed with sons, pure, charitable and dear to elders.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Parivesha) == 1,
        des: "Parivesha in 2",
        result:
          "If Parivesha is in Dhana Bhava, the native will be wealthy, charming, will enjoy pleasures, be happy, very religious and be a Lord.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Parivesha) == 2,
        des: "Parivesha in 3",
        result:
          "If Parivesha is in Sahaja Bhava, the native will be fond of his wife, be very charming, pious, well disposed to his men, be a servant and be respectful of his elders.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Parivesha) == 3,
        des: "Parivesha in 4",
        result:
          "If Parivesha is in Bandhu Bhava, the native will be wonder-struck, helpful to enemies as well, kind, endowed with everything and be skilful in singing.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Parivesha) == 4,
        des: "Parivesha in 5",
        result:
          "If Parivesha is in Putra Bhava, the native will be affluent, virtuous, splendourous, affectionate, religious and dear to his wife.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Parivesha) == 5,
        des: "Parivesha in 6",
        result:
          "If Parivesha is in Ari Bhava, the native will be famous and wealthy, be endowed with sons and pleasures, be helpful to all and will conquer his enemies.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Parivesha) == 6,
        des: "Parivesha in 7",
        result:
          "If Parivesha is in Yuvati Bhava, the native will have limited number of children, be devoid of happiness, be of mediocre intelligence, very hard-headed and will have a sickly wife.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Parivesha) == 7,
        des: "Parivesha in 8",
        result:
          "If Parivesha is in Randhra Bhava, the native will be spiritually disposed, peaceful, strong-bodied, firm in decision, religious and gentle.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Parivesha) == 8,
        des: "Parivesha in 9",
        result:
          "If Parivesha is in Dharma Bhava, the native will be endowed with sons, be happy, brilliant, very affluent, be devoid of excessive passion, be honourable and be happy with even a iota.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Parivesha) == 9,
        des: "Parivesha in 10",
        result:
          "If Parivesha is in Karma Bhava, the native will be versed in arts, will enjoy pleasures, be strong-bodied and be learned in all Shastras.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Parivesha) == 10,
        des: "Parivesha in 11",
        result:
          "If Parivesha is in Labha Bhava, the native will enjoy pleasures through women, be virtuous, intelligent, dear to his people and will suffer disorders of digestive fire.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Parivesha) == 11,
        des: "Parivesha in 12",
        result:
          "If Parivesha is in Vyaya Bhava, the native will always be a spendthrift, be miserable, firm and will dishonour elders.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Chapa) == 0,
        des: "Chapa in 1",
        result:
          "If Chapa is in Tanu Bhava, the native will be endowed with wealth, grains and gold, be grateful, agreeable and devoid of all actions.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Chapa) == 1,
        des: "Chapa in 2",
        result:
          "If Chapa is in Dhana Bhava, the native will speak affably, be very rich, modest, learned, charming and religious.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Chapa) == 2,
        des: "Chapa in 3",
        result:
          "If Chapa is in Sahaja Bhava, the native will be a miser, be versed in many arts, will indulge in thieving, be devoid of some limb and be unfriendly.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Chapa) == 3,
        des: "Chapa in 4",
        result:
          "If Chapa is in Bandhu Bhava, the native will be happy, endowed with quadrupeds, wealth, grains etc., be honoured by the king and be devoid of sickness.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Chapa) == 4,
        des: "Chapa in 5",
        result:
          "If Chapa is in Putra Bhava, the native will be splendourous, far-sighted, pious, affable and will acquire prosperity in all his undertakings.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Chapa) == 5,
        des: "Chapa in 6",
        result:
          "If Chapa is in Ari Bhava, the native will destroy his enemies, be happy, affectionate, pure and will achieve plentifulness in all his undertakings.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Chapa) == 6,
        des: "Chapa in 7",
        result:
          "If Chapa is in Yuvati Bhava, the native will be wealthy, endowed with all virtues, learned in Shastras, religious and agreeable.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Chapa) == 7,
        des: "Chapa in 8",
        result:
          "If Chapa is in Randhra Bhava, the native will be interested in other`s jobs, be cruel, interested in other`s wives and have a defective limb.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Chapa) == 8,
        des: "Chapa in 9",
        result:
          "If Chapa is in Dharma Bhava, the native will perform penance, will take to religious observations, be highly learned and be famous among men.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Chapa) == 9,
        des: "Chapa in 10",
        result:
          "If Chapa is in Karma Bhava, the native will be endowed with many sons, abundant wealth, cows, buffaloes etc. and will be famous among men.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Chapa) == 10,
        des: "Chapa in 11",
        result:
          "If Chapa is in Labha Bhava, the native will gain many treasures, will be free from diseases, very fiery in disposition, affectionate to his wife and will have knowledge of Mantras and weapons.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Chapa) == 11,
        des: "Chapa in 12",
        result:
          "If Chapa is in Vyaya Bhava, the native will be wicked, very honourable, evil in disposition, shameless, will go to other`s females and be ever poor.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Upketu) == 0,
        des: "Upaketu in 1",
        result:
          "If Upaketu is in Tanu Bhava, the native will be skilful in all branches of learning, be happy, efficient in speech, agreeable and be very affectionate.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Upketu) == 1,
        des: "Upaketu in 2",
        result:
          "If Upaketu is in Dhana Bhava, the native will be a good and affable speaker, be splendourous, will write poetry, be scholarly, honourable, modest and endowed with conveyances.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Upketu) == 2,
        des: "Upaketu in 3",
        result:
          "If Upaketu is in Sahaja Bhava, the native will be miserly, cruel acts, thin-bodied, poor and will incur severe diseases.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Upketu) == 3,
        des: "Upaketu in 4",
        result:
          "If Upaketu is in Bandhu Bhava, the native will be charming, very virtuous, gentle, interested in Vedic Knowledge and be always happy.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Upketu) == 4,
        des: "Upaketu in 5",
        result:
          "If Upaketu is in Putra Bhava, the native will be happy, will enjoy pleasures, be versed in arts, skilled in expedients, intelligent, eloquent and will respect elders.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Upketu) == 5,
        des: "Upaketu in 6",
        result:
          "If Upaketu is in Ari Bhava, the native will be ominous for material relatives, will win over his enemies, be endowed with many relatives, valiant, splendourous and skilful.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Upketu) == 6,
        des: "Upaketu in 7",
        result:
          "If Upaketu is in Yuvati Bhava, the native will be interested in gambling, be sensuous, will enjoy pleasures and will befriend prostitutes.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Upketu) == 7,
        des: "Upaketu in 8",
        result:
          "If Upaketu is in Randhra Bhava, the native will be interested in base acts, be sinful, shameless, will blame others, will lack in marital happiness and will take other`s side.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Upketu) == 8,
        des: "Upaketu in 9",
        result:
          "If Upaketu is in Dharma Bhava, the native will wear badges, be delighted, helpfully disposed to all and he will be skilled in religious deeds.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Upketu) == 9,
        des: "Upaketu in 10",
        result:
          "If Upaketu is in Karma Bhava, the native will be endowed with happiness and fortunes, be fond of females, be charitable and will befriend Brahmins.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Upketu) == 10,
        des: "Upaketu in 11",
        result:
          "If Upaketu is in Labha Bhava, the native will ever acquire gains, be very religious, honourable, affluent, fortunate, valiant and skilled in sacrificial rites.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Upketu) == 11,
        des: "Upaketu in 12",
        result:
          "If Upaketu is in Vyaya Bhava, the native will be interested in sinful acts, be valiant, untrustworthy, unkind, interested in other`s females and be short-tempered.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Gulika) == 0,
        des: "Gulika in 1",
        result:
          "If Gulika is in Tanu Bhava, the native will be afflicted by diseases, be lustful, sinful, crafty, wicked and very miserable.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Gulika) == 1,
        des: "Gulika in 2",
        result:
          "If Gulika is in Dhana Bhava, the native will be unsightly in appearance, miserable, mean, given to vices, shameless and penniless.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Gulika) == 2,
        des: "Gulika in 3",
        result:
          "If Gulika is in Sahaja Bhava, the native will be charming in appearance, will head a village, be fond of virtuous men and be honoured by the king.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Gulika) == 3,
        des: "Gulika in 4",
        result:
          "If Gulika is in Bandhu Bhava, the native will be sickly, devoid of happiness, sinful and afflicted due to windy and billious excesses.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Gulika) == 4,
        des: "Gulika in 5",
        result:
          "If Gulika is in Putra Bhava, the native will not be praise-worthy, be poor, short-lived, spiteful, mean, be a eunuch, be subdued by his wife and be a heterodox.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Gulika) == 5,
        des: "Gulika in 6",
        result:
          "If Gulika is in Ari Bhava, the native will be devoid of enemies, be strong-bodied, splendourous, liked by his wife, enthusiastic, very friendly and helpful in disposition.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Gulika) == 6,
        des: "Gulika in 7",
        result:
          "If Gulika is in Yuvati Bhava, the native will subdue to his spouse, be sinful, will go to other`s females, be emaciated, devoid of friendship and will live on his wife`s wealth.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Gulika) == 7,
        des: "Gulika in 8",
        result:
          "If Gulika is in Randhra Bhava, the native will be troubled by hunger, be miserable, cruel, very much short-tempered, very unkind, poor and bereft of good qualities.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Gulika) == 8,
        des: "Gulika in 9",
        result:
          "If Gulika is in Dharma Bhava, the native will undergo many ordeals, be emaciated, will perform evil acts, be very unkind, sluggish and be a talebearer.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Gulika) == 9,
        des: "Gulika in 10",
        result:
          "If Gulika is in Karma Bhava, the native will be endowed with sons, be happy, will enjoy many things, be fond of worshipping gods and fire and will practice meditation and religion.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Gulika) == 10,
        des: "Gulika in 11",
        result:
          "If Gulika is in Labha Bhava, the native will enjoy women of class, be a leader of men, be helpful to his relatives, be short stature and be an emperor.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
      {
        rule: Bhaava(Gulika) == 11,
        des: "Gulika in 12",
        result:
          "If Gulika is in Vyaya Bhava, the native will indulge in base deeds, be sinful, defective-limbed, unfortunate, indolent and will join mean people.",
        sou: "Hora Shastra",
        group: "Upagrahas and Kalavelas",
      },
  
      /* {'rule':,'des':'','sou':'Saravali','result':''},
         {'rule':,'des':'','sou':'Saravali','result':''},
         {'rule':,'des':'','sou':'Saravali','result':''},
         {'rule':,'des':'','sou':'Saravali','result':''},
         {'rule':,'des':'','sou':'Saravali','result':''},  */
      { rule: "", des: "", sou: "Saravali", result: "" },
    ];
    this.html =
      "<table><tr><th>No.</th><th>Description</th><th>Effect</th><th>Source</th></tr>";
    for (i = 0, ij = 1; i < phala.length; i++) {
      if (phala[i].rule) {
        this.html +=
          "<tr><td>" +
          ij +
          '</td><td style="width:15%">' +
          phala[i].des +
          "</td><td>" +
          phala[i].result +
          '</td><td style="width:10%">' +
          phala[i].sou +
          "</td></tr>";
        ij++;
      }
    }
    this.html += "</table>";
    return this;
  };
  