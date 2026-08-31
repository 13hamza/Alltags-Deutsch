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
  }
];

/* ---------- Word-by-word glossary (lowercase German -> English) ---------- */

const GLOSSARY = {
  "ab": "from now on", "abend": "evening", "aber": "but",
  "alte": "old", "alten": "old", "am": "at the / on the",
  "an": "at / on", "andere": "other", "ans": "to the (an + das)",
  "arbeit": "work", "auch": "also", "auf": "on",
  "aus": "out of / from", "bei": "with / at", "bekommt": "gets",
  "bemerkt": "notices", "beobachtet": "watches", "berger": "Berger (name)",
  "bett": "bed", "bindet": "ties", "blaue": "blue",
  "brauner": "brown", "bringt": "brings", "bruno": "Bruno (name)",
  "büro": "office", "café": "café", "dabei": "while doing so",
  "das": "the / that", "dem": "the (dative)", "den": "the (accusative/dative)",
  "der": "the", "die": "the", "diese": "these / this",
  "diesem": "this (dative)", "dinge": "things", "direkt": "directly",
  "dort": "there", "dritte": "third", "durch": "through",
  "eigentlich": "actually", "ein": "a / an", "eine": "a / an",
  "einem": "a / an (dative)", "einfach": "simply", "endlich": "finally",
  "entschuldigung": "excuse me", "er": "he", "es": "it",
  "etwas": "something", "feder": "feather", "fenster": "window",
  "fest": "tightly", "findet": "finds", "folgt": "follows",
  "fragt": "asks", "frau": "woman / Mrs.", "freunde": "friends",
  "freundin": "friend (female)", "freundinnen": "friends (female)", "früh": "early",
  "für": "for", "ganze": "whole", "garten": "garden",
  "geht": "goes", "geschenke": "gifts", "geschichte": "story",
  "gestern": "yesterday", "graue": "grey", "gute": "good",
  "handy": "mobile phone", "hat": "has", "haus": "house",
  "hause": "home", "heißt": "is called", "her": "toward here (hinter...her = after)",
  "herr": "Mr.", "heute": "today", "hinter": "behind",
  "hund": "dog", "hört": "hears", "idee": "idea",
  "ihn": "him", "ihnen": "them", "ihr": "her",
  "ihrer": "her (dative/genitive)", "im": "in the", "immer": "always",
  "in": "in", "ist": "is", "jackentasche": "jacket pocket",
  "jeden": "every", "jetzt": "now", "kaffee": "coffee",
  "katze": "cat", "kein": "no / not any", "kleine": "small",
  "kleiner": "small", "kleines": "small", "klopft": "knocks",
  "knopf": "button", "kommt": "comes", "kuchen": "cake",
  "küche": "kitchen", "lacht": "laughs", "lange": "for a long time",
  "legt": "puts / places", "leise": "quietly", "liebt": "loves",
  "liegt": "lies", "lukas": "Lukas (name)", "lustige": "funny",
  "lächelt": "smiles", "lädt": "invites (lädt ... ein)", "läuft": "runs",
  "mann": "man", "marie": "Marie (name)", "meine": "my",
  "minuten": "minutes", "mit": "with", "mittagspause": "lunch break",
  "montag": "Monday", "morgen": "morning", "mund": "mouth",
  "nach": "after", "nachbarn": "neighbors", "nachmittag": "afternoon",
  "nachricht": "message", "neben": "next to", "netten": "nice",
  "nicht": "not", "nie": "never", "nimmt": "takes",
  "normalerweise": "normally", "offenes": "open", "oft": "often",
  "oh": "oh", "ohne": "without", "park": "park",
  "passiert": "happens", "plötzlich": "suddenly", "problem": "problem",
  "redet": "talks", "regenschirm": "umbrella", "regenschirme": "umbrellas",
  "regentag": "rainy day", "regnet": "rains", "rennt": "runs",
  "roten": "red", "ruft": "calls (ruft ... an = calls up)", "sagt": "says",
  "sammelt": "collects", "schaut": "looks", "schirm": "umbrella",
  "schnell": "quickly", "schon": "already", "schreiben": "to write",
  "schön": "nice / beautiful", "schönen": "nice / beautiful", "sehr": "very",
  "sein": "his / to be", "seine": "his", "seinen": "his (accusative)",
  "seiner": "his (dative)", "seit": "since", "sich": "herself / himself",
  "sie": "she / they", "sieht": "sees", "sind": "are",
  "sonnenuntergang": "sunset", "sonst": "otherwise / usually", "spazieren": "to stroll",
  "springt": "jumps", "spät": "late", "stattdessen": "instead",
  "stellt": "places / sets", "stoff": "fabric", "straße": "street",
  "stück": "piece", "sucht": "looks for", "tag": "day",
  "tasche": "bag / pocket", "telefon": "telephone", "trifft": "meets",
  "trinkt": "drinks", "trotzdem": "anyway / still", "trägt": "carries",
  "tür": "door", "und": "and", "unser": "our",
  "verschwindet": "disappears", "viele": "many", "von": "from",
  "vor": "in front of / before", "vorsichtig": "carefully", "vögel": "birds",
  "wagner": "Wagner (name)", "war": "was", "wartet": "waits",
  "warum": "why", "weg": "away", "weiter": "continues to",
  "weiß": "knows", "wer": "who", "wie": "how",
  "wieder": "again", "will": "wants", "wir": "we",
  "wissen": "know", "woche": "week", "zehn": "ten",
  "zeit": "time", "zu": "to", "zum": "to the",
  "zur": "to the", "zurück": "back", "ältere": "older",
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
