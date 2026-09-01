/* ============================================================
   Alltags-Deutsch — stories-data.js
   Short graded-reader stories. Every story is a list of German
   paragraphs; GLOSSARY maps each lowercase German word that
   appears anywhere in the stories to its English meaning, so
   any word can be clicked for a translation + pronunciation.

   To add a new story later: write your paragraphs, then make
   sure every word in them has an entry in GLOSSARY below.
   ============================================================ */

const STORY_LEVELS = [
  { id: "A1", label: "Beginner", sublabel: "A1" },
  { id: "A2", label: "Beginner", sublabel: "A2" },
  { id: "B1", label: "Intermediate", sublabel: "B1" }
];

const STORIES = [
  {
    id: "die-geheimnisvolle-katze",
    level: "A1",
    icon: "🐱",
    number: "01",
    title: { de: "Die geheimnisvolle Katze", en: "The Mysterious Cat" },
    tagline: "Jeden Morgen liegt etwas Neues vor Maries Tür.",
    taglineEn: "Every morning, something new appears at Marie's door.",
    paragraphs: [
      "Jeden Morgen findet Marie etwas vor ihrer Tür. Heute liegt dort eine kleine blaue Feder. Gestern war es ein Knopf. Wer bringt diese Dinge?",
      "Marie hat eine Idee. Sie stellt sich früh ans Fenster und wartet. Nach zehn Minuten sieht sie eine graue Katze. Die Katze trägt etwas im Mund.",
      "Die Katze legt ein kleines Stück Stoff vor die Tür und läuft schnell weg. Marie folgt ihr leise durch die Straße.",
      "Die Katze läuft zu einem alten Haus und springt durch ein offenes Fenster. Marie klopft vorsichtig an die Tür.",
      "Eine ältere Frau öffnet. \"Oh, meine Katze war wieder bei Ihnen?\", fragt sie und lacht. \"Sie sammelt kleine Dinge im Park und bringt sie zu netten Nachbarn.\"",
      "Die Frau heißt Frau Berger. Sie lädt Marie zu Kaffee und Kuchen ein. Seit diesem Tag sind Marie und Frau Berger gute Freundinnen — und die Katze bringt ihr weiter kleine Geschenke."
    ]
  },
  {
    id: "der-regenschirm-dieb",
    level: "A1",
    icon: "☔",
    number: "02",
    title: { de: "Der Regenschirm-Dieb", en: "The Umbrella Thief" },
    tagline: "Herr Wagners Regenschirm verschwindet jeden Regentag.",
    taglineEn: "Herr Wagner's umbrella disappears every rainy day.",
    paragraphs: [
      "Herr Wagner hat ein Problem. Jeden Regentag verschwindet sein Regenschirm vor dem Café. Das passiert schon die dritte Woche.",
      "Heute regnet es wieder. Herr Wagner stellt seinen roten Regenschirm neben die Tür und trinkt seinen Kaffee. Er beobachtet den Schirm die ganze Zeit.",
      "Plötzlich sieht er etwas: Ein kleiner brauner Hund läuft zum Schirm, nimmt ihn vorsichtig in den Mund und rennt weg!",
      "Herr Wagner läuft schnell hinter dem Hund her. Der Hund läuft direkt zu einem Garten und legt den Schirm neben viele andere Regenschirme.",
      "Ein Mann kommt aus dem Haus. \"Entschuldigung! Das ist Bruno, unser Hund. Er liebt Regenschirme, aber wir wissen nicht, warum\", sagt er und lacht.",
      "Herr Wagner bekommt seinen Schirm zurück — und auch eine lustige Geschichte für seine Freunde. Ab jetzt bindet er seinen Schirm immer fest."
    ]
  },
  {
    id: "der-tag-ohne-handy",
    level: "A1",
    icon: "📵",
    number: "03",
    title: { de: "Der Tag ohne Handy", en: "The Day Without a Phone" },
    tagline: "Lukas verliert sein Handy — und entdeckt etwas Schönes.",
    taglineEn: "Lukas loses his phone — and discovers something nice.",
    paragraphs: [
      "Am Montag sucht Lukas sein Handy überall: im Bett, in der Küche, in der Tasche. Es ist einfach weg.",
      "Ohne Handy weiß er nicht, wie spät es ist. Er läuft schnell zur Arbeit und kommt trotzdem zu spät.",
      "In der Mittagspause will er eine Nachricht schreiben, aber er hat kein Handy. Er ruft stattdessen von einem Telefon im Büro an.",
      "Am Nachmittag trifft er eine alte Freundin auf der Straße. Ohne Handy redet er lange mit ihr — normalerweise schaut er dabei oft auf sein Handy.",
      "Am Abend geht er ohne Handy im Park spazieren. Er hört die Vögel und sieht den schönen Sonnenuntergang. Das bemerkt er sonst nie.",
      "Zu Hause findet er sein Handy endlich — es liegt die ganze Zeit in seiner Jackentasche. Lukas lächelt. Der Tag ohne Handy war eigentlich sehr schön."
    ]
  },
  {
    id: "die-freundliche-baeckerin",
    level: "A1",
    icon: "🥖",
    number: "04",
    title: { de: "Die freundliche Bäckerin", en: "The Friendly Baker" },
    tagline: "Jeden Tag kauft Emma Brötchen bei Frau Hoffmann.",
    taglineEn: "Every day, Emma buys rolls from Mrs. Hoffmann.",
    paragraphs: [
      "Emma wohnt in einer kleinen Stadt. Jeden Morgen geht sie zu der Bäckerei von Frau Hoffmann. Sie kauft immer frische Brötchen und manchmal auch ein süßes Stück Kuchen. Frau Hoffmann lächelt immer freundlich und sagt: 'Guten Morgen, Emma!'",
      "Eines Morgens ist die Bäckerei geschlossen. Emma steht vor der Tür und ist traurig. Sie möchte ein Brötchen essen, aber sie hat kein Brot zu Hause. Ein Zettel an der Tür sagt: 'Heute geschlossen, weil Frau Hoffmann im Krankenhaus ist.' Emma macht sich Sorgen.",
      "Am Nachmittag geht Emma mit Blumen zu dem Krankenhaus. Sie besucht Frau Hoffmann und fragt: 'Geht es Ihnen gut?' Frau Hoffmann liegt im Bett und sagt: 'Ich habe mir den Fuß gebrochen, aber es ist nicht so schlimm. Vielen Dank für den Besuch!'",
      "Frau Hoffmann muss eine Woche im Bett bleiben. Emma hat eine Idee. Sie geht jeden Morgen zur Bäckerei und hilft dem neuen Bäcker. Sie packt die Brötchen in Tüten und gibt sie den Kunden.",
      "Nach einer Woche kommt Frau Hoffmann zurück. Sie sagt: 'Emma, du bist eine gute Freundin. Komm, wir backen heute zusammen einen großen Kuchen!' Die beiden backen einen leckeren Schokoladenkuchen und essen ihn zusammen mit einer Tasse Kaffee.",
      "Seit diesem Tag backt Emma öfter mit Frau Hoffmann. Sie hat viel über das Backen gelernt und isst jeden Tag noch lieber Brötchen als vorher."
    ]
  },
  {
    id: "der-rote-ballon",
    level: "A1",
    icon: "🎈",
    number: "05",
    title: { de: "Der rote Ballon", en: "The Red Balloon" },
    tagline: "Paul findet einen roten Ballon im Park.",
    taglineEn: "Paul finds a red balloon in the park.",
    paragraphs: [
      "Paul ist acht Jahre alt und wohnt mit seiner Familie in einem großen Haus am Park. An einem sonnigen Samstag geht er mit seinem Hund Max spazieren. Max ist ein kleiner brauner Dackel und liebt es, im Park zu rennen.",
      "Plötzlich sieht Paul etwas Rotes in einem Busch. Er geht näher und findet einen wunderschönen roten Ballon. Der Ballon hat eine lange Schnur. Paul ruft: 'Mama, schau! Ich habe einen Ballon gefunden!' Seine Mutter lächelt und sagt: 'Das ist ein schöner Fund.'",
      "Paul bindet den Ballon an seine Jacke und spielt weiter. Aber er fragt sich: 'Wem gehört dieser Ballon?' Er geht zu verschiedenen Leuten im Park und fragt: 'Ist das Ihr Ballon?' Aber niemand sagt ja.",
      "Am Abend geht Paul mit dem Ballon nach Hause. Er möchte ihn in seinem Zimmer aufhängen. Im Treppenhaus trifft er seine Nachbarin, Frau Krause. Sie hat rote Augen und sieht traurig aus. Paul fragt: 'Frau Krause, warum weinen Sie?'",
      "Frau Krause erzählt: 'Mein Enkel hat heute seinen roten Ballon verloren. Er war sehr traurig.' Paul fragt: 'War es dieser Ballon?' Er zeigt ihr den Ballon. Frau Krause ruft glücklich: 'Ja, genau der! Vielen Dank, Paul!'",
      "Am nächsten Tag schenkt Paul den Ballon dem kleinen Enkel von Frau Krause. Der Junge lächelt und sagt: 'Danke, Paul! Du bist mein Held.' Paul lächelt auch. Es macht ihn glücklich, anderen Menschen eine Freude zu machen."
    ]
  },
  {
    id: "der-geheime-garten",
    level: "A1",
    icon: "🌻",
    number: "06",
    title: { de: "Der geheime Garten", en: "The Secret Garden" },
    tagline: "Hinter einem alten Haus entdeckt Mia einen versteckten Garten.",
    taglineEn: "Behind an old house, Mia discovers a hidden garden.",
    paragraphs: [
      "Mia und ihre Familie ziehen in ein neues Haus. Das Haus ist sehr alt und hat einen großen Garten. Mia ist neugierig und geht sofort nach draußen, um den Garten zu erkunden. Sie findet einen alten Brunnen und viele Bäume.",
      "Hinter einer großen Hecke entdeckt Mia eine kleine, versteckte Tür. Die Tür ist aus Holz und hat einen rostigen Griff. Mia drückt vorsichtig und die Tür öffnet sich mit einem lauten Knarren.",
      "Hinter der Tür ist ein wunderschöner, wilder Garten. Überall blühen bunte Blumen: rote Rosen, gelbe Sonnenblumen und lila Veilchen. In der Mitte steht eine alte Bank. Mia setzt sich und atmet tief ein. Es riecht wunderbar.",
      "Am nächsten Tag holt Mia ihre Gartenschere und ihre kleinen Handschuhe. Sie möchte den Garten aufräumen. Sie schneidet die alten Äste und entfernt das Unkraut. Sie arbeitet jeden Nachmittag für zwei Stunden.",
      "Nach einer Woche ist der Garten wieder schön. Mia pflanzt neue Blumen und setzt einen kleinen Tisch und Stühle in die Mitte. Sie lädt ihre Freunde ein und macht eine kleine Gartenparty.",
      "Jetzt ist der geheime Garten Mias Lieblingsort. Sie sitzt oft auf der Bank, liest ein Buch und beobachtet die Bienen und Schmetterlinge. Dieser Garten ist ihr kleines Paradies."
    ]
  },
  {
    id: "die-verlorene-brille",
    level: "A1",
    icon: "👓",
    number: "07",
    title: { de: "Die verlorene Brille", en: "The Lost Glasses" },
    tagline: "Herr Meier kann seine Brille nicht finden.",
    taglineEn: "Herr Meier cannot find his glasses.",
    paragraphs: [
      "Herr Meier ist 67 Jahre alt und wohnt allein in einer kleinen Wohnung. Er trägt eine Brille zum Lesen. Ohne Brille sieht er nicht gut. Eines Morgens wacht er auf und sucht seine Brille auf dem Nachttisch. Aber sie ist nicht da.",
      "Er sucht im Badezimmer, in der Küche und im Wohnzimmer. Er durchsucht alle Schubladen und schaut unter das Sofa. Aber die Brille ist verschwunden. Herr Meier ist verzweifelt. Er kann ohne Brille nicht lesen und nicht fernsehen.",
      "Herr Meier ruft seine Tochter an. 'Anna, ich habe meine Brille verloren. Kannst du mir helfen?' Anna kommt sofort und sucht mit ihm. Sie schaut überall, aber die Brille bleibt verschwunden.",
      "Anna hat eine Idee. Sie fragt: 'Papa, wann hast du deine Brille das letzte Mal getragen?' Herr Meier denkt nach und sagt: 'Gestern Abend habe ich im Sessel gelesen, dann bin ich ins Bett gegangen.'",
      "Anna geht zum Sessel und hebt das große Kissen hoch. Und da liegt die Brille! Sie ist hinter das Kissen gefallen. Herr Meier lacht erleichtert: 'Danke, Anna! Du bist meine kluge Tochter!'",
      "Herr Meier kauft am nächsten Tag eine rote Kette für seine Brille. Jetzt hängt er die Brille um den Hals. So verliert er sie nicht mehr. Anna lacht und sagt: 'Eine gute Idee, Papa!'"
    ]
  },
  {
    id: "der-kochkurs",
    level: "A1",
    icon: "🍳",
    number: "08",
    title: { de: "Der Kochkurs", en: "The Cooking Class" },
    tagline: "Felix lernt kochen in einem Kurs.",
    taglineEn: "Felix learns to cook in a class.",
    paragraphs: [
      "Felix ist Student und kann nicht gut kochen. Er isst oft Fast Food oder macht einfache Nudeln mit Soße. Seine Mutter sagt immer: 'Felix, du musst lernen, gesund zu kochen!'",
      "Eines Tages sieht Felix einen Aushang in der Uni: 'Kochkurs für Anfänger – jeden Dienstagabend.' Felix denkt: 'Das ist eine gute Idee!' Er meldet sich sofort an.",
      "Am ersten Dienstag geht Felix in die Küche der Volkshochschule. Der Koch heißt Herr Schmidt und ist sehr nett. Er erklärt: 'Heute kochen wir eine Gemüsesuppe und einen Salat.'",
      "Felix schneidet Karotten, Paprika und Zwiebeln. Er kocht das Gemüse in einem großen Topf und würzt es mit Salz und Pfeffer. Herr Schmidt lobt ihn: 'Gut gemacht, Felix! Du hast ein Talent.'",
      "Nach dem Kochen essen alle zusammen. Die Suppe schmeckt hervorragend. Felix ist stolz auf sich. Er ruft seine Mutter an und erzählt: 'Mama, ich habe heute eine Suppe gekocht!' Seine Mutter freut sich sehr.",
      "Felix besucht jetzt jede Woche den Kochkurs. Er lernt viele neue Rezepte: Pizza, Pfannkuchen und sogar einen Schokoladenkuchen. Jetzt kocht er oft für seine Freunde und alle sind begeistert."
    ]
  },
  {
    id: "die-reise-mit-dem-zug",
    level: "A1",
    icon: "🚂",
    number: "09",
    title: { de: "Die Reise mit dem Zug", en: "The Journey by Train" },
    tagline: "Sarah fährt zum ersten Mal allein mit dem Zug zu ihrer Großmutter.",
    taglineEn: "Sarah travels alone by train to her grandmother for the first time.",
    paragraphs: [
      "Sarah ist 14 Jahre alt und besucht ihre Großmutter in einer anderen Stadt. Normalerweise fährt ihr Vater mit dem Auto, aber dieses Mal darf Sarah allein mit dem Zug fahren. Sie ist aufgeregt.",
      "Am Samstagmorgen packt Sarah ihren Rucksack. Sie legt ein Buch, eine Flasche Wasser und einen Apfel hinein. Ihre Mutter gibt ihr das Zugticket und sagt: 'Viel Glück, meine Liebe! Rufe mich an, wenn du ankommst.'",
      "Am Bahnhof ist es sehr voll. Sarah sucht den richtigen Gleis. Ein freundlicher Bahnangestellter hilft ihr und zeigt auf den großen Bildschirm. Sarah findet ihren Zug und steigt ein.",
      "Der Zug fährt ab. Sarah hat einen Fensterplatz und schaut dem Landschaft zu. Sie sieht grüne Wiesen, kleine Dörfer und einen großen See. Es ist sehr schön. Sarah liest ein wenig und isst ihren Apfel.",
      "Nach zwei Stunden sagt eine Stimme: 'Nächster Halt: Stadt der Großmutter.' Sarah packt ihren Rucksack und steigt aus. Auf dem Bahnsteig steht schon ihre Großmutter und winkt.",
      "Sarah umarmt ihre Großmutter und erzählt ihr von der Reise. Sie ist glücklich und ein bisschen stolz. Ihre Großmutter sagt: 'Du bist jetzt ein richtiger kleiner Reisender. Komm, ich habe Kuchen und Kakao für dich!'"
    ]
  }
];

/* ---------- Word-by-word glossary (lowercase German -> English) ---------- */

const GLOSSARY = {
  "ab": "from now on", "abend": "evening", "aber": "but",
  "allein": "alone", "alle": "everyone / all", "alten": "old",
  "alte": "old", "am": "at the / on the", "an": "at / on",
  "andere": "other", "anderen": "other (dative)", "ans": "to the (an + das)",
  "apfel": "apple", "arbeit": "work", "arbeitet": "works",
  "arm": "arm", "ast": "branch", "atmet": "breathes",
  "auch": "also", "auf": "on", "aufgeregt": "excited",
  "aufhängen": "to hang up", "aufräumen": "to tidy up", "aus": "out of / from",
  "aushang": "notice / poster", "badezimmer": "bathroom",
  "bahnangestellter": "railway employee", "bahnhof": "train station",
  "bahnsteig": "platform", "ballon": "balloon", "bank": "bench",
  "bäcker": "baker", "bäckerei": "bakery", "backen": "to bake",
  "bäckerin": "baker (female)", "bäckt": "bakes",
  "begeistert": "enthusiastic", "bei": "with / at", "bekommt": "gets",
  "bemerkt": "notices", "berg": "mountain", "berger": "Berger (name)",
  "besuchen": "to visit", "besucht": "visits", "bett": "bed",
  "beobachtet": "watches", "bildschirm": "screen", "bindet": "ties",
  "bisschen": "a little bit", "blaue": "blue", "blumen": "flowers",
  "blühen": "bloom", "brauner": "brown", "brille": "glasses",
  "bringt": "brings", "brot": "bread", "brötchen": "rolls",
  "bruno": "Bruno (name)", "brunnen": "fountain / well", "buch": "book",
  "bunte": "colorful", "büro": "office", "busch": "bush",
  "café": "café", "dabei": "while doing so", "dackel": "dachshund",
  "danach": "after that", "danke": "thanks", "dank": "thank",
  "das": "the / that", "dem": "the (dative)", "den": "the (accusative/dative)",
  "denkt": "thinks", "der": "the", "die": "the", "diese": "these / this",
  "diesem": "this (dative)", "dinge": "things", "direkt": "directly",
  "dorf": "village", "dort": "there", "draußen": "outside",
  "dritte": "third", "drückt": "presses", "durch": "through",
  "durchsucht": "searches through", "eigentlich": "actually", "ein": "a / an",
  "eine": "a / an", "einem": "a / an (dative)", "einfach": "simply",
  "einkaufen": "to shop", "einlädt": "invites", "einmal": "once",
  "eins": "one", "einst": "once", "endlich": "finally",
  "enkel": "grandson", "entdeckt": "discovers", "entfernt": "removes",
  "entschuldigung": "excuse me", "er": "he", "erklärt": "explains",
  "erleichtert": "relieved", "erzählt": "tells", "es": "it",
  "essen": "to eat", "etwas": "something", "fährt": "drives / travels",
  "familie": "family", "fast": "almost", "fast food": "fast food",
  "feder": "feather", "fenster": "window", "fensterplatz": "window seat",
  "fernsehen": "to watch TV", "fest": "tightly",
  "findet": "finds", "flasche": "bottle", "folgt": "follows",
  "fragt": "asks", "frau": "woman / Mrs.", "freude": "joy",
  "freunde": "friends", "freundin": "friend (female)",
  "freundinnen": "friends (female)", "freundliche": "friendly",
  "freut": "is happy (freut sich)", "früh": "early",
  "für": "for", "fund": "find / discovery", "fuß": "foot",
  "ganze": "whole", "garten": "garden", "gartenschere": "pruning shears",
  "gartenparty": "garden party", "gebäude": "building",
  "gefallen": "to fall (gefallen)", "geheim": "secret", "geheime": "secret",
  "geht": "goes", "gelbe": "yellow", "gelernt": "learned",
  "gemüse": "vegetables", "gemüsesuppe": "vegetable soup",
  "genau": "exactly", "gerade": "just", "geschlossen": "closed",
  "geschenke": "gifts", "geschichte": "story",
  "gestern": "yesterday", "gesund": "healthy", "getragen": "worn",
  "gibt": "gives", "gleis": "platform / track", "glück": "luck / happiness",
  "glücklich": "happy", "graue": "grey", "griff": "handle",
  "grüne": "green", "groß": "big / large", "große": "big",
  "großmutter": "grandmother", "gute": "good", "handschuhe": "gloves",
  "handy": "mobile phone", "hängt": "hangs", "hat": "has",
  "haus": "house", "hause": "home", "hecke": "hedge",
  "hebt": "lifts", "heißt": "is called", "held": "hero",
  "helfen": "to help", "hilft": "helps", "her": "toward here (hinter...her = after)",
  "herr": "Mr.", "heute": "today", "hinein": "into",
  "hinter": "behind", "hoffmann": "Hoffmann (name)", "holz": "wood",
  "hört": "hears", "hund": "dog", "idee": "idea",
  "ihn": "him", "ihnen": "them", "ihr": "her",
  "ihrer": "her (dative/genitive)", "im": "in the", "immer": "always",
  "in": "in", "ist": "is", "jacke": "jacket",
  "jackentasche": "jacket pocket", "jeder": "every",
  "jeden": "every", "junge": "boy", "kaffee": "coffee",
  "kakao": "hot chocolate", "karotten": "carrots", "katze": "cat",
  "kaufen": "to buy", "kauft": "buys", "kein": "no / not any",
  "kette": "chain", "kissen": "cushion", "kleine": "small",
  "kleiner": "small", "kleines": "small", "klopft": "knocks",
  "kluge": "clever", "knarren": "creak", "knopf": "button",
  "koch": "cook", "kochen": "to cook", "kochkurs": "cooking class",
  "kommt": "comes", "krankenhaus": "hospital", "krause": "Krause (name)",
  "kuchen": "cake", "küche": "kitchen", "kunde": "customer",
  "kurs": "course", "lacht": "laughs", "land": "countryside",
  "landschaft": "landscape", "lange": "for a long time",
  "lauten": "loud", "legen": "to put", "legt": "puts / places",
  "leise": "quietly", "lecker": "delicious", "lesen": "to read",
  "liebe": "dear (Liebe)", "liebt": "loves", "liegt": "lies",
  "lila": "purple", "liest": "reads", "lobt": "praises",
  "lukas": "Lukas (name)", "lustige": "funny",
  "lächelt": "smiles", "lädt": "invites (lädt ... ein)",
  "läuft": "runs", "macht": "makes / does", "mann": "man",
  "manchmal": "sometimes", "marie": "Marie (name)",
  "mehr": "more", "meier": "Meier (name)",
  "meine": "my", "melde": "registers", "mensch": "human",
  "mia": "Mia (name)", "minuten": "minutes", "mit": "with",
  "mittagspause": "lunch break", "mitten": "in the middle",
  "montag": "Monday", "morgen": "morning", "möchte": "would like",
  "mund": "mouth", "mutter": "mother", "nach": "after",
  "nachbarn": "neighbors", "nachbarin": "neighbor (female)",
  "nachdenken": "to think", "nachmittag": "afternoon",
  "nachricht": "message", "nachttisch": "nightstand",
  "näher": "closer", "neben": "next to", "neue": "new",
  "netten": "nice", "neugierig": "curious", "nicht": "not",
  "nie": "never", "nimmt": "takes", "niemand": "no one",
  "normalerweise": "normally", "nudeln": "noodles", "offenes": "open",
  "oft": "often", "oh": "oh", "ohne": "without", "packt": "packs",
  "papa": "dad", "paprika": "bell pepper", "paradies": "paradise",
  "park": "park", "party": "party", "passiert": "happens",
  "paul": "Paul (name)", "pfeffer": "pepper", "pfannkuchen": "pancakes",
  "pflanzt": "plants", "pizza": "pizza", "plötzlich": "suddenly",
  "problem": "problem", "redet": "talks", "regenschirm": "umbrella",
  "regenschirme": "umbrellas", "regentag": "rainy day",
  "regnet": "rains", "reise": "journey", "rezept": "recipe",
  "rennt": "runs", "riecht": "smells", "richtige": "right / correct",
  "rose": "rose", "rosten": "rusty", "rote": "red",
  "roten": "red", "rucksack": "backpack",
  "ruft": "calls (ruft ... an = calls up)", "sagen": "to say",
  "sagt": "says", "salat": "salad", "salz": "salt",
  "sammelt": "collects", "samstag": "Saturday", "sarah": "Sarah (name)",
  "schaut": "looks", "schirm": "umbrella", "schmetterlinge": "butterflies",
  "schmidt": "Schmidt (name)", "schnell": "quickly",
  "schnur": "string", "schokolade": "chocolate",
  "schokoladenkuchen": "chocolate cake", "schon": "already",
  "schön": "nice / beautiful", "schönen": "nice / beautiful",
  "schreibt": "writes", "schreiben": "to write",
  "schublade": "drawer", "schult": "teaches",
  "schwarz": "black", "schweiz": "Switzerland", "schweizer": "Swiss",
  "schwester": "sister", "schwer": "heavy",
  "see": "lake", "sehen": "to see", "seh": "see (ich seh)",
  "sehr": "very", "sein": "his / to be", "seine": "his",
  "seinen": "his (accusative)", "seiner": "his (dative)",
  "seit": "since", "selbst": "self", "sessel": "armchair",
  "setzt": "sets / sits", "sich": "herself / himself",
  "sie": "she / they", "sieht": "sees", "sind": "are",
  "sofort": "immediately", "soße": "sauce", "sonne": "sun",
  "sonnenblumen": "sunflowers", "sonnenuntergang": "sunset",
  "sonnig": "sunny", "sonst": "otherwise / usually",
  "spazieren": "to stroll", "spät": "late",
  "springt": "jumps", "stadt": "city", "stattdessen": "instead",
  "stehen": "to stand", "steht": "stands", "stellt": "places / sets",
  "stimme": "voice", "stock": "stick", "stoff": "fabric",
  "straße": "street", "stück": "piece", "student": "student",
  "sucht": "looks for", "süß": "sweet", "tag": "day",
  "talent": "talent", "tasche": "bag / pocket", "tasse": "cup",
  "telefon": "telephone", "tief": "deep", "tochter": "daughter",
  "topf": "pot", "trägt": "carries / wears", "traurig": "sad",
  "treffen": "to meet", "treppe": "stairs",
  "treppenhaus": "stairwell", "trifft": "meets", "trinkt": "drinks",
  "trotzdem": "anyway / still", "tür": "door",
  "tüte": "bag (paper)", "über": "about / over",
  "überall": "everywhere", "uhr": "clock / o'clock",
  "um": "around / at", "umarmt": "hugs", "uni": "university",
  "unkraut": "weeds", "unser": "our", "vater": "father",
  "veilchen": "violets", "verlieren": "to lose", "verliert": "loses",
  "verlorene": "lost", "verschwinden": "disappear",
  "verschwindet": "disappears", "versteckt": "hidden",
  "verzweifelt": "desperate", "viel": "much", "viele": "many",
  "volkshochschule": "adult education center", "von": "from",
  "vor": "in front of / before", "vorher": "before",
  "vorsichtig": "carefully", "vögel": "birds",
  "wachsen": "to grow", "wächst": "grows", "wacht": "wakes",
  "wagner": "Wagner (name)", "wand": "wall", "war": "was",
  "wartet": "waits", "warum": "why", "wasser": "water",
  "weckt": "wakes up", "weg": "away", "weinen": "to cry",
  "weit": "far", "weiter": "continues to", "weiß": "knows",
  "wer": "who", "wie": "how", "wieder": "again",
  "wiese": "meadow", "wild": "wild", "will": "wants",
  "winkt": "waves", "wir": "we", "wissen": "know",
  "woche": "week", "wohnen": "to live", "wohnung": "apartment",
  "wohnzimmer": "living room", "wunderbar": "wonderful",
  "wunderschön": "beautiful", "würzt": "seasons",
  "zehn": "ten", "zeigt": "shows", "zeit": "time",
  "zettel": "note", "ziehen": "to move", "zieht": "moves",
  "zu": "to", "zug": "train", "zugticket": "train ticket",
  "zum": "to the", "zur": "to the", "zurück": "back",
  "zusammen": "together", "zwiebeln": "onions", "ältere": "older",
  "öffnet": "opens", "überall": "everywhere"
};

/* ---------- Helpers ---------- */

function getStoryById(id) {
  return STORIES.find(s => s.id === id) || null;
}

function getStoriesByLevel(level) {
  return STORIES.filter(s => s.level === level);
}

function storyWordCount(story) {
  return story.paragraphs.join(" ").trim().split(/\s+/).length;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Turns a German paragraph into HTML where every word is wrapped
 * in a clickable <span class="story-word" data-word="...">.
 * Punctuation and spacing are left untouched.
 */
const STORY_WORD_RE = /([A-Za-zÀ-ÖØ-öø-ÿ]+)/g;

function renderClickableParagraph(text) {
  const safe = escapeHtml(text);
  return safe.replace(STORY_WORD_RE, match =>
    `<span class="story-word" data-word="${match.toLowerCase()}" tabindex="0" role="button">${match}</span>`
  );
}

function lookupGloss(word) {
  return GLOSSARY[word.toLowerCase()] || "translation coming soon";
}
