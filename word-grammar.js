/* ============================================================
   Alltags-Deutsch — word-grammar.js
   A small, rule-based German grammar engine used by the Words
   page. Given one entry from WORDS ({ de, en, ... }) it works
   out:
     - the word type (Nomen, Verb, Adjektiv/Adverb, Pronomen,
       Präposition, Konjunktion, Zahl, Ausdruck, …)
     - for nouns: gender + plural (when the Wortliste gives one)
     - for verbs: modal / separable / reflexive flags, the
       Präsens and Präteritum paradigms for ich/du/er-sie-es/
       wir/ihr/sie-Sie, and the Perfekt form
     - a small curated list of synonyms/antonyms where we have
       reliable ones on file

   This is a teaching aid, not a full dictionary: for verbs and
   nouns not covered by a principal-parts hint in the word list
   or by the small hand-written irregular tables below, the
   engine falls back to the regular ("weak") conjugation rules,
   which is the best a rule-based helper can safely do.
   ============================================================ */

/* ---------- Closed word classes (finite, hand-written) ---------- */

const GRAMMAR_MODAL_VERBS = new Set([
  "können", "müssen", "dürfen", "sollen", "wollen", "mögen", "möchten"
]);

// Prefixes that always split off in a simple main clause (trennbar).
const GRAMMAR_SEPARABLE_PREFIXES = [
  "ab", "an", "auf", "aus", "bei", "durch", "ein", "fest", "her", "hin",
  "los", "mit", "nach", "statt", "teil", "vor", "weg", "weiter", "zu",
  "zurück", "zusammen", "zurecht", "her ein", "herein", "heraus", "raus",
  "rein", "runter", "rauf", "hoch", "fern"
];

// Prefixes that never split off (untrennbar).
const GRAMMAR_INSEPARABLE_PREFIXES = [
  "be", "emp", "ent", "er", "ge", "miss", "ver", "zer"
];

const GRAMMAR_PRONOUNS = new Set([
  "ich", "du", "er", "sie", "es", "wir", "ihr", "Sie",
  "mich", "dich", "ihn", "uns", "euch",
  "mir", "dir", "ihm", "ihnen", "Ihnen",
  "mein", "meine", "meiner", "meins", "dein", "deine",
  "sein", "seine", "ihr", "ihre", "unser", "unsere", "euer", "eure",
  "man", "jemand", "niemand", "etwas", "nichts", "alles", "alle",
  "beide", "beides", "einige", "manche", "mancher", "welche", "welcher",
  "welches", "dies-", "dieser", "diese", "dieses", "jeder", "jede",
  "jedes", "keiner", "keine", "meiner/meine/meins",
  "der/die/das", "wer", "was"
]);

const GRAMMAR_PREPOSITIONS = new Set([
  "an", "auf", "aus", "bei", "bis", "durch", "für", "gegen", "gegenüber",
  "hinter", "in", "mit", "nach", "neben", "ohne", "seit", "über", "um",
  "unter", "von", "vor", "während", "wegen", "zwischen", "zu", "ab",
  "außer", "außerhalb", "innerhalb", "entlang", "trotz", "statt",
  "anstatt", "laut", "je"
]);

const GRAMMAR_CONJUNCTIONS = new Set([
  "und", "oder", "aber", "denn", "sondern", "weil", "dass", "wenn",
  "als", "obwohl", "während", "bevor", "nachdem", "damit", "falls",
  "sowie", "doch", "also", "deshalb", "deswegen", "darum", "trotzdem",
  "außerdem", "allerdings", "jedoch", "sonst", "entweder", "weder",
  "sowohl", "sobald", "seitdem", "zwar", "obgleich", "indem"
]);

const GRAMMAR_NUMBERS = new Set([
  "null", "eins", "ein-", "zwei", "drei", "vier", "fünf", "sechs",
  "sieben", "acht", "neun", "zehn", "elf", "zwölf", "dreizehn",
  "vierzehn", "fünfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn",
  "zwanzig", "dreißig", "vierzig", "fünfzig", "sechzig", "siebzig",
  "achtzig", "neunzig", "hundert", "tausend", "million", "erste-",
  "zweite-", "dritte-", "letzte-", "nächste-", "paar"
]);

const GRAMMAR_INTERJECTIONS = new Set([
  "hallo", "tschüss", "tschau", "servus", "moin", "bitte", "danke",
  "ja", "nein", "doch", "ach", "oh", "aua", "prost", "genau", "klar",
  "stimmt", "super", "toll", "schade", "okay", "ok", "achtung",
  "entschuldigung", "gern", "gerne"
]);

// A reasonably large explicit list of common adjectives, to catch
// ones that don't end in a "typical" adjective suffix.
const GRAMMAR_COMMON_ADJECTIVES = new Set([
  "gut", "schlecht", "groß", "klein", "alt", "neu", "jung", "schön",
  "hässlich", "schnell", "langsam", "teuer", "billig", "hoch", "niedrig",
  "tief", "breit", "schmal", "dick", "dünn", "stark", "schwach", "hell",
  "dunkel", "laut", "leise", "warm", "kalt", "heiß", "kühl", "nass",
  "trocken", "sauber", "schmutzig", "voll", "leer", "offen",
  "geschlossen", "leicht", "schwer", "einfach", "schwierig", "richtig",
  "falsch", "wichtig", "gefährlich", "gesund", "krank", "müde",
  "hungrig", "durstig", "glücklich", "traurig", "nett", "freundlich",
  "unfreundlich", "ruhig", "reich", "arm", "lang", "kurz", "weich",
  "hart", "nah", "fern", "früh", "spät", "fertig", "kaputt", "frei",
  "besetzt", "modern", "sauer", "munter", "finster", "praktisch",
  "gestorben", "verboten", "geöffnet", "erlaubt", "verheiratet",
  "geschieden", "ledig", "berufstätig", "arbeitslos",
  "willkommen", "oben", "unten", "draußen", "drinnen", "eben",
  "drüben", "vorbei", "unterwegs", "zusammen", "einverstanden",
  "gemeinsam", "getrennt", "geeignet", "beliebt", "gespannt", "bequem", "gemütlich", "interessant",
  "langweilig", "lustig", "ernst", "bekannt", "berühmt", "fremd",
  "eigen", "sicher", "unsicher", "möglich", "unmöglich", "nötig",
  "billig", "sauer", "süß", "bitter", "scharf", "mild", "frisch"
]);

/* ---------- Curated synonym / antonym dictionary (best-effort) ---------- */
/* Only words we're confident about are listed here; everything else
   simply shows "not available yet" rather than a guess. */

const GRAMMAR_SYN_ANT = {
  "groß": { syn: ["riesig"], ant: ["klein"] },
  "klein": { syn: ["winzig"], ant: ["groß"] },
  "gut": { syn: ["prima", "toll"], ant: ["schlecht"] },
  "schlecht": { syn: ["mies"], ant: ["gut"] },
  "alt": { ant: ["neu", "jung"] },
  "neu": { ant: ["alt"] },
  "jung": { ant: ["alt"] },
  "schön": { syn: ["hübsch"], ant: ["hässlich"] },
  "hässlich": { ant: ["schön"] },
  "schnell": { syn: ["rasch"], ant: ["langsam"] },
  "langsam": { ant: ["schnell"] },
  "teuer": { ant: ["billig"] },
  "billig": { syn: ["günstig"], ant: ["teuer"] },
  "hoch": { ant: ["niedrig", "tief"] },
  "niedrig": { ant: ["hoch"] },
  "tief": { ant: ["hoch"] },
  "breit": { ant: ["schmal"] },
  "schmal": { ant: ["breit"] },
  "dick": { ant: ["dünn"] },
  "dünn": { ant: ["dick"] },
  "stark": { ant: ["schwach"] },
  "schwach": { ant: ["stark"] },
  "hell": { ant: ["dunkel"] },
  "dunkel": { ant: ["hell"] },
  "laut": { ant: ["leise"] },
  "leise": { ant: ["laut"] },
  "warm": { ant: ["kalt"] },
  "kalt": { ant: ["warm", "heiß"] },
  "heiß": { ant: ["kalt"] },
  "nass": { syn: ["feucht"], ant: ["trocken"] },
  "trocken": { ant: ["nass"] },
  "sauber": { ant: ["schmutzig"] },
  "schmutzig": { syn: ["dreckig"], ant: ["sauber"] },
  "voll": { ant: ["leer"] },
  "leer": { ant: ["voll"] },
  "offen": { ant: ["geschlossen", "zu"] },
  "geschlossen": { ant: ["offen"] },
  "leicht": { ant: ["schwer"] },
  "schwer": { ant: ["leicht"] },
  "einfach": { syn: ["leicht"], ant: ["schwierig"] },
  "schwierig": { syn: ["kompliziert"], ant: ["einfach"] },
  "richtig": { ant: ["falsch"] },
  "falsch": { ant: ["richtig"] },
  "wichtig": { ant: ["unwichtig"] },
  "gesund": { ant: ["krank"] },
  "krank": { ant: ["gesund"] },
  "glücklich": { syn: ["froh"], ant: ["traurig", "unglücklich"] },
  "traurig": { ant: ["glücklich", "froh"] },
  "freundlich": { ant: ["unfreundlich"] },
  "unfreundlich": { ant: ["freundlich"] },
  "ruhig": { ant: ["laut", "unruhig"] },
  "reich": { ant: ["arm"] },
  "arm": { ant: ["reich"] },
  "lang": { ant: ["kurz"] },
  "kurz": { ant: ["lang"] },
  "weich": { ant: ["hart"] },
  "hart": { ant: ["weich"] },
  "nah": { ant: ["fern", "weit"] },
  "weit": { ant: ["nah"] },
  "früh": { ant: ["spät"] },
  "spät": { ant: ["früh"] },
  "fertig": { ant: ["unfertig"] },
  "frei": { ant: ["besetzt"] },
  "besetzt": { ant: ["frei"] },
  "möglich": { ant: ["unmöglich"] },
  "sicher": { ant: ["unsicher"] },
  "unsicher": { ant: ["sicher"] },
  "süß": { ant: ["sauer", "bitter"] },
  "sauer": { ant: ["süß"] },
  "immer": { ant: ["nie"] },
  "nie": { ant: ["immer"] },
  "hier": { ant: ["dort"] },
  "dort": { ant: ["hier"] },
  "oben": { ant: ["unten"] },
  "unten": { ant: ["oben"] },
  "links": { ant: ["rechts"] },
  "rechts": { ant: ["links"] },
  "viel": { ant: ["wenig"] },
  "wenig": { ant: ["viel"] },
  "mann": { syn: ["der Herr"], ant: ["die Frau"] },
  "frau": { ant: ["der Mann"] },
  "tag": { ant: ["die Nacht"] },
  "nacht": { ant: ["der Tag"] },
  "anfang": { ant: ["das Ende"] },
  "ende": { ant: ["der Anfang"] },
  "frage": { ant: ["die Antwort"] },
  "antwort": { ant: ["die Frage"] },
  "kaufen": { ant: ["verkaufen"] },
  "verkaufen": { ant: ["kaufen"] },
  "kommen": { ant: ["gehen"] },
  "gehen": { syn: ["laufen"], ant: ["kommen"] },
  "öffnen": { syn: ["aufmachen"], ant: ["schließen", "zumachen"] },
  "schließen": { syn: ["zumachen"], ant: ["öffnen", "aufmachen"] },
  "anfangen": { syn: ["beginnen"], ant: ["aufhören", "beenden"] },
  "aufhören": { syn: ["beenden"], ant: ["anfangen", "beginnen"] },
  "geben": { ant: ["nehmen"] },
  "nehmen": { ant: ["geben"] },
  "lieben": { ant: ["hassen"] },
  "hassen": { ant: ["lieben"] },
  "gewinnen": { ant: ["verlieren"] },
  "verlieren": { ant: ["gewinnen"] },
  "fragen": { ant: ["antworten"] },
  "antworten": { ant: ["fragen"] },
  "lachen": { ant: ["weinen"] },
  "weinen": { ant: ["lachen"] },
  "sprechen": { syn: ["reden"] },
  "sehen": { syn: ["schauen", "blicken"] },
  "auto": { syn: ["der Wagen"] },
  "haus": { syn: ["das Gebäude"] }
};

/* ---------- Small curated tables for irregular verbs ---------- */
/* Präteritum "ich" form + Partizip II, for base (unprefixed) verbs.
   The rest of the Präteritum paradigm is built from "ich" (du =
   stem+st, er/sie/es = stem, wir/sie/Sie = stem+en, ihr = stem+t). */

const GRAMMAR_STRONG_PAST = {
  "sein": { ich: "war", part: "gewesen", aux: "sein" },
  "haben": { ich: "hatte", part: "gehabt", aux: "haben" },
  "werden": { ich: "wurde", part: "geworden", aux: "sein" },
  "gehen": { ich: "ging", part: "gegangen", aux: "sein" },
  "kommen": { ich: "kam", part: "gekommen", aux: "sein" },
  "sehen": { ich: "sah", part: "gesehen", aux: "haben" },
  "geben": { ich: "gab", part: "gegeben", aux: "haben" },
  "nehmen": { ich: "nahm", part: "genommen", aux: "haben" },
  "essen": { ich: "aß", part: "gegessen", aux: "haben" },
  "trinken": { ich: "trank", part: "getrunken", aux: "haben" },
  "fahren": { ich: "fuhr", part: "gefahren", aux: "sein" },
  "fliegen": { ich: "flog", part: "geflogen", aux: "sein" },
  "sprechen": { ich: "sprach", part: "gesprochen", aux: "haben" },
  "lesen": { ich: "las", part: "gelesen", aux: "haben" },
  "schreiben": { ich: "schrieb", part: "geschrieben", aux: "haben" },
  "finden": { ich: "fand", part: "gefunden", aux: "haben" },
  "halten": { ich: "hielt", part: "gehalten", aux: "haben" },
  "helfen": { ich: "half", part: "geholfen", aux: "haben" },
  "sitzen": { ich: "saß", part: "gesessen", aux: "haben" },
  "stehen": { ich: "stand", part: "gestanden", aux: "haben" },
  "tragen": { ich: "trug", part: "getragen", aux: "haben" },
  "treffen": { ich: "traf", part: "getroffen", aux: "haben" },
  "waschen": { ich: "wusch", part: "gewaschen", aux: "haben" },
  "wissen": { ich: "wusste", part: "gewusst", aux: "haben" },
  "ziehen": { ich: "zog", part: "gezogen", aux: "haben" },
  "bleiben": { ich: "blieb", part: "geblieben", aux: "sein" },
  "bringen": { ich: "brachte", part: "gebracht", aux: "haben" },
  "denken": { ich: "dachte", part: "gedacht", aux: "haben" },
  "laufen": { ich: "lief", part: "gelaufen", aux: "sein" },
  "rufen": { ich: "rief", part: "gerufen", aux: "haben" },
  "schlafen": { ich: "schlief", part: "geschlafen", aux: "haben" },
  "schließen": { ich: "schloss", part: "geschlossen", aux: "haben" },
  "schneiden": { ich: "schnitt", part: "geschnitten", aux: "haben" },
  "singen": { ich: "sang", part: "gesungen", aux: "haben" },
  "springen": { ich: "sprang", part: "gesprungen", aux: "sein" },
  "verstehen": { ich: "verstand", part: "verstanden", aux: "haben" },
  "vergessen": { ich: "vergaß", part: "vergessen", aux: "haben" },
  "gewinnen": { ich: "gewann", part: "gewonnen", aux: "haben" },
  "beginnen": { ich: "begann", part: "begonnen", aux: "haben" },
  "empfehlen": { ich: "empfahl", part: "empfohlen", aux: "haben" },
  "fallen": { ich: "fiel", part: "gefallen", aux: "sein" },
  "heißen": { ich: "hieß", part: "geheißen", aux: "haben" },
  "lassen": { ich: "ließ", part: "gelassen", aux: "haben" },
  "liegen": { ich: "lag", part: "gelegen", aux: "haben" },
  "raten": { ich: "riet", part: "geraten", aux: "haben" },
  "riechen": { ich: "roch", part: "gerochen", aux: "haben" },
  "scheinen": { ich: "schien", part: "geschienen", aux: "haben" },
  "schwimmen": { ich: "schwamm", part: "geschwommen", aux: "sein" },
  "steigen": { ich: "stieg", part: "gestiegen", aux: "sein" },
  "sterben": { ich: "starb", part: "gestorben", aux: "sein" },
  "tun": { ich: "tat", part: "getan", aux: "haben" },
  "werfen": { ich: "warf", part: "geworfen", aux: "haben" },
  "wachsen": { ich: "wuchs", part: "gewachsen", aux: "sein" },
  "bitten": { ich: "bat", part: "gebeten", aux: "haben" },
  "bieten": { ich: "bot", part: "geboten", aux: "haben" },
  "binden": { ich: "band", part: "gebunden", aux: "haben" },
  "beißen": { ich: "biss", part: "gebissen", aux: "haben" },
  "leiden": { ich: "litt", part: "gelitten", aux: "haben" },
  "reißen": { ich: "riss", part: "gerissen", aux: "haben" },
  "schießen": { ich: "schoss", part: "geschossen", aux: "haben" },
  "schweigen": { ich: "schwieg", part: "geschwiegen", aux: "haben" },
  "stehlen": { ich: "stahl", part: "gestohlen", aux: "haben" },
  "verlieren": { ich: "verlor", part: "verloren", aux: "haben" },
  "backen": { ich: "backte", part: "gebacken", aux: "haben" },
  "braten": { ich: "briet", part: "gebraten", aux: "haben" },
  "laden": { ich: "lud", part: "geladen", aux: "haben" },
  "waschen": { ich: "wusch", part: "gewaschen", aux: "haben" },
  "schlagen": { ich: "schlug", part: "geschlagen", aux: "haben" },
  "empfangen": { ich: "empfing", part: "empfangen", aux: "haben" },
  "gefallen": { ich: "gefiel", part: "gefallen", aux: "haben" },
  "geschehen": { ich: "geschah", part: "geschehen", aux: "sein" },
  "erschrecken": { ich: "erschrak", part: "erschrocken", aux: "sein" },
  "riechen": { ich: "roch", part: "gerochen", aux: "haben" },
  "genießen": { ich: "genoss", part: "genossen", aux: "haben" },
  "bekommen": { ich: "bekam", part: "bekommen", aux: "haben" },
  "bewerben": { ich: "bewarb", part: "beworben", aux: "haben" },
  "verbringen": { ich: "verbrachte", part: "verbracht", aux: "haben" },
  "versprechen": { ich: "versprach", part: "versprochen", aux: "haben" },
  "vorschlagen": { ich: "schlug vor", part: "vorgeschlagen", aux: "haben" },
  "anziehen": { ich: "zog an", part: "angezogen", aux: "haben" },
  "ausziehen": { ich: "zog aus", part: "ausgezogen", aux: "haben" },
  "umziehen": { ich: "zog um", part: "umgezogen", aux: "sein" },
  "can_": null
};
delete GRAMMAR_STRONG_PAST.can_;

const GRAMMAR_MODAL_PAST = {
  "können": { ich: "konnte" }, "müssen": { ich: "musste" },
  "dürfen": { ich: "durfte" }, "sollen": { ich: "sollte" },
  "wollen": { ich: "wollte" }, "mögen": { ich: "mochte" },
  "möchten": { ich: "wollte", note: "möchten itself has no separate simple past; use wollte." }
};

// Modal verbs drop their umlaut and use "ge...t" (not the plain verb
// stem) in the Partizip II; möchten is essentially never used there.
const GRAMMAR_MODAL_PARTICIPLE = {
  "können": "gekonnt", "müssen": "gemusst", "dürfen": "gedurft",
  "sollen": "gesollt", "wollen": "gewollt", "mögen": "gemocht",
  "möchten": "\u2013 (m\u00f6chten has no real Partizip II; it borrows mögen \u2192 gemocht)"
};

// sein is irregular enough in the present tense that it needs its
// own full table rather than being derived from a single hint form.
const GRAMMAR_FULLY_IRREGULAR_PRESENT = {
  "sein": { ich: "bin", du: "bist", er: "ist", wir: "sind", ihr: "seid", sie: "sind" }
};

// Modal verbs are their own irregular class in the present tense
// (no -e on ich, no -t on er, and most lose their umlaut in the
// singular) — always used directly rather than the general rules.
const GRAMMAR_MODAL_PRESENT = {
  "können": { ich: "kann", du: "kannst", er: "kann", wir: "können", ihr: "könnt", sie: "können" },
  "müssen": { ich: "muss", du: "musst", er: "muss", wir: "müssen", ihr: "müsst", sie: "müssen" },
  "dürfen": { ich: "darf", du: "darfst", er: "darf", wir: "dürfen", ihr: "dürft", sie: "dürfen" },
  "sollen": { ich: "soll", du: "sollst", er: "soll", wir: "sollen", ihr: "sollt", sie: "sollen" },
  "wollen": { ich: "will", du: "willst", er: "will", wir: "wollen", ihr: "wollt", sie: "wollen" },
  "mögen": { ich: "mag", du: "magst", er: "mag", wir: "mögen", ihr: "mögt", sie: "mögen" },
  "möchten": { ich: "möchte", du: "möchtest", er: "möchte", wir: "möchten", ihr: "möchtet", sie: "möchten" }
};

// A handful of common irregular present-tense stem changes not always
// present with full principal parts in the A1 list (base verb, no
// separable prefix).
const GRAMMAR_STRONG_PRESENT = {
  "fahren": "fährt", "fallen": "fällt", "schlafen": "schläft",
  "tragen": "trägt", "waschen": "wäscht", "laufen": "läuft",
  "backen": "bäckt", "braten": "brät", "halten": "hält",
  "lassen": "lässt", "raten": "rät",
  "sehen": "sieht", "lesen": "liest", "geben": "gibt",
  "essen": "isst", "nehmen": "nimmt", "sprechen": "spricht",
  "helfen": "hilft", "treffen": "trifft", "werfen": "wirft",
  "sterben": "stirbt", "werden": "wird", "wissen": "weiß",
  "sein": "ist", "haben": "hat", "stehlen": "stiehlt",
  "laden": "lädt", "schlagen": "schlägt", "gefallen": "gefällt",
  "bewerben": "bewirbt", "empfehlen": "empfiehlt", "vergessen": "vergisst",
  "sprechen": "spricht"
};

const GRAMMAR_SEIN_VERBS = new Set([
  "sein", "werden", "gehen", "kommen", "fahren", "fliegen", "laufen",
  "reisen", "schwimmen", "wandern", "steigen", "fallen", "sterben",
  "wachsen", "bleiben", "passieren", "geschehen", "aufstehen",
  "einschlafen", "aufwachen", "ankommen", "abfahren", "umziehen",
  "gelingen", "rennen"
]);

/* ---------- Helpers ---------- */

function gLemma(str) {
  return String(str || "").trim().replace(/^\(|\)$/g, "");
}

function gFirstToken(str) {
  return gLemma(str).split(/[,\s]/)[0].replace(/[()]/g, "");
}

// Is a comma-separated fragment "safe" to treat as a principal-part
// form (single short verb-ish chunk, not a leaked example sentence)?
function gLooksLikeFormFragment(str) {
  const s = str.trim();
  if (!s) return false;
  if (/[.!?]/.test(s)) return false;
  if (s.split(/\s+/).length > 3) return false;
  return true;
}

/* ---------- Noun parsing ---------- */

function analyzeNoun(de) {
  const m = de.match(/^(der|die|das)\s+([^,]+)(?:,\s*(.+))?$/);
  if (!m) return null;
  const gender = m[1];
  const nounRaw = m[2].trim();
  let pluralNote = null;
  const markerRaw = m[3] ? m[3].trim() : null;

  if (markerRaw && gLooksLikeFormFragment(markerRaw) && markerRaw.length <= 8) {
    const marker = markerRaw.replace(/\s+/g, "");
    if (marker === "-" || marker === "\u2013") {
      pluralNote = "same as singular (die " + nounRaw + ")";
    } else if (/^[\u00e4\u00f6\u00fc\u00c4]$/.test(marker) || marker === "\u00a8") {
      pluralNote = "umlaut only, no ending";
    } else if (/^[\u00a8\u2013-]?-?[a-zA-Z\u00e4\u00f6\u00fc]+$/.test(marker)) {
      const hasUmlaut = marker.includes("\u00a8");
      let ending = marker.replace(/[\u00a8-]/g, "");
      let base = nounRaw;
      // A few loanwords replace their final vowel rather than just
      // appending the ending (Firma -> Firmen, not Firmaen).
      if (/a$/.test(base) && /^en?/.test(ending)) base = base.slice(0, -1);
      pluralNote = "die " + base + (hasUmlaut ? " (+ umlaut)" : "") + ending;
    }
  }

  return { gender, noun: nounRaw, pluralNote };
}

/* ---------- Verb parsing ---------- */

function gDetectPrefix(infinitive) {
  const sortedPrefixes = [...GRAMMAR_SEPARABLE_PREFIXES].sort((a, b) => b.length - a.length);
  for (const p of sortedPrefixes) {
    if (infinitive.startsWith(p) && infinitive.length > p.length + 2) {
      return p;
    }
  }
  return null;
}

// Built lazily from WORDS (if present on the page): infinitive -> the
// richer { pres3, aux, participle } hint taken from whichever entry
// in the whole vocabulary list happens to spell it out. This lets a
// bare A1 entry like "abfahren" borrow the principal parts given by
// the matching A2 entry "abfahren, fährt ab, ist abgefahren".
let GRAMMAR_VERB_HINT_INDEX = null;
function gBuildVerbHintIndex() {
  const index = {};
  if (typeof WORDS === "undefined") return index;
  for (const w of WORDS) {
    const de = w && w.de;
    if (!de || !de.includes(",")) continue;
    const parts = de.split(",").map(s => s.trim()).filter(Boolean);
    if (parts.length < 2) continue;
    const inf = parts[0].replace(/\(sich\)/, "").replace(/^sich\s+/, "").trim();
    if (!/en$/.test(inf)) continue;
    if (index[inf]) continue; // first hit wins
    const hint = {};
    if (gLooksLikeFormFragment(parts[1])) hint.pres3 = parts[1].replace(/^sich\s+/, "").trim();
    const part2IsPerfekt = parts[2] && /^(hat|ist)\b/.test(parts[2]);
    if (parts[2] && !part2IsPerfekt && gLooksLikeFormFragment(parts[2]) && parts[3]) {
      hint.preteriteHint = parts[2].replace(/^sich\s+/, "").trim();
      if (gLooksLikeFormFragment(parts[3])) {
        const pm = parts[3].match(/^(hat|ist)\s+(?:sich\s+)?(.+)$/);
        if (pm) { hint.aux = pm[1] === "hat" ? "haben" : "sein"; hint.participle = pm[2].trim(); }
      }
    } else if (parts[2] && gLooksLikeFormFragment(parts[2])) {
      const pm = parts[2].match(/^(hat|ist)\s+(?:sich\s+)?(.+)$/);
      if (pm) { hint.aux = pm[1] === "hat" ? "haben" : "sein"; hint.participle = pm[2].trim(); }
    }
    if (hint.pres3 || hint.participle) index[inf] = hint;
  }
  return index;
}

function analyzeVerb(de) {
  const parts = de.split(",").map(s => s.trim()).filter(Boolean);
  let infRaw = parts[0];
  const reflexive = /\(sich\)/.test(infRaw) || /^sich\s/.test(infRaw);
  const infinitive = infRaw.replace(/\(sich\)/, "").replace(/^sich\s+/, "").trim();

  let pres3 = null, aux = null, participle = null, preteriteHint = null;

  if (parts[1] && gLooksLikeFormFragment(parts[1])) {
    pres3 = parts[1].replace(/^sich\s+/, "").trim();
  }

  // Some sources (e.g. the Goethe B1 Wortliste) give a fuller set of
  // principal parts: infinitive, 3rd-sg present, 3rd-sg preterite,
  // then the hat/ist + participle clause (4 comma-separated parts
  // instead of A1/A2's 3). Detect that shape so the preterite is
  // read from part[2] rather than mistaken for the Perfekt clause.
  const part2IsPerfekt = parts[2] && /^(hat|ist)\b/.test(parts[2]);
  if (parts[2] && !part2IsPerfekt && gLooksLikeFormFragment(parts[2]) && parts[3]) {
    preteriteHint = parts[2].replace(/^sich\s+/, "").trim();
    if (parts[3] && gLooksLikeFormFragment(parts[3])) {
      const pm = parts[3].match(/^(hat|ist)\s+(?:sich\s+)?(.+)$/);
      if (pm) {
        aux = pm[1] === "hat" ? "haben" : "sein";
        participle = pm[2].trim();
      }
    }
  } else if (parts[2] && gLooksLikeFormFragment(parts[2])) {
    const pm = parts[2].match(/^(hat|ist)\s+(?:sich\s+)?(.+)$/);
    if (pm) {
      aux = pm[1] === "hat" ? "haben" : "sein";
      participle = pm[2].trim();
    }
  }

  // Borrow richer principal parts from elsewhere in the word list when
  // this particular entry didn't give us any (typical for plain A1
  // infinitives that reappear with full forms in the A2 list).
  if (!pres3 && !participle) {
    if (GRAMMAR_VERB_HINT_INDEX === null) GRAMMAR_VERB_HINT_INDEX = gBuildVerbHintIndex();
    const hint = GRAMMAR_VERB_HINT_INDEX[infinitive];
    if (hint) {
      if (hint.pres3) pres3 = hint.pres3;
      if (hint.aux) aux = hint.aux;
      if (hint.participle) participle = hint.participle;
      if (hint.preteriteHint) preteriteHint = hint.preteriteHint;
    }
  }

  // Separable? Prefer evidence from the given 3rd-person-present hint
  // ("gibt ab" -> prefix "ab"); otherwise fall back to a prefix-list guess.
  let separable = false, prefix = null;
  if (pres3 && pres3.includes(" ")) {
    const toks = pres3.split(" ");
    const last = toks[toks.length - 1];
    if (infinitive.startsWith(last) && last.length >= 2) {
      separable = true;
      prefix = last;
    }
  }
  if (!separable) {
    const guessed = gDetectPrefix(infinitive);
    if (guessed) { separable = true; prefix = guessed; }
  }

  // Strip a trailing separable prefix off the preterite hint too, the
  // same way it's stripped off the present-tense hint below.
  if (preteriteHint && separable && prefix && preteriteHint.endsWith(" " + prefix)) {
    preteriteHint = preteriteHint.slice(0, -(prefix.length + 1));
  }

  const base = separable && prefix ? infinitive.slice(prefix.length) : infinitive;
  const modal = GRAMMAR_MODAL_VERBS.has(infinitive);

  return { infinitive, base, reflexive, pres3, aux, participle, separable, prefix, modal, preteriteHint };
}

/* ---------- Conjugation engine (operates on the *base* verb, i.e.
   with any separable prefix already removed; the caller re-attaches
   the prefix afterwards). ---------- */

function gEndsInDoubleLetter(s) {
  return s.length >= 2 && s[s.length - 1] === s[s.length - 2];
}

function gNeedsEInsertion(stem) {
  if (/[dt]$/.test(stem)) return true;
  const last = stem.slice(-1), prev = stem.slice(-2, -1);
  if ((last === "m" || last === "n") && prev && /[bcdfghjklpqrstvwxz]/.test(prev) && prev !== last) {
    return true; // e.g. regnen -> regn-, atmen -> atm-
  }
  return false;
}

function conjugatePresentRegular(base) {
  if (base.endsWith("eln")) {
    // sammeln: ich sammle, du sammelst, er sammelt, wir sammeln, ihr sammelt, sie sammeln
    const stem = base.slice(0, -3);
    return { ich: stem + "le", du: stem + "elst", er: stem + "elt", wir: base, ihr: stem + "elt", sie: base };
  }
  if (base.endsWith("ern")) {
    const stem = base.slice(0, -3);
    return { ich: stem + "ere", du: stem + "erst", er: stem + "ert", wir: base, ihr: stem + "ert", sie: base };
  }

  const stem = base.endsWith("en") ? base.slice(0, -2) : base.slice(0, -1);
  const needsE = gNeedsEInsertion(stem);
  const sibilant = /[s\u00dfxz]$/.test(stem) && !gEndsInDoubleLetter(stem.slice(0, -1) + stem.slice(-1));

  const ich = stem + "e";
  const er = needsE ? stem + "et" : stem + "t";
  const du = /[s\u00dfxz]$/.test(stem) ? er : (needsE ? stem + "est" : stem + "st");
  const wir = base;
  const ihr = needsE ? stem + "et" : stem + "t";
  const sie = base;
  return { ich, du, er, wir, ihr, sie };
}

function conjugatePresentFromHint(base, pres3hint) {
  // pres3hint is the bare 3rd-person-singular form for the BASE verb
  // (prefix already stripped by the caller), e.g. "gibt", "fährt".
  let stem, du;
  if (pres3hint.endsWith("et")) {
    stem = pres3hint.slice(0, -2);
    du = stem + "est";
  } else if (pres3hint.endsWith("t")) {
    stem = pres3hint.slice(0, -1);
    du = /[s\u00dfxz]$/.test(stem) ? pres3hint : stem + "st";
  } else {
    stem = pres3hint; du = pres3hint + "st";
  }

  const infStem = base.endsWith("en") ? base.slice(0, -2) : base.slice(0, -1);
  const ich = infStem + "e";
  const ihr = gNeedsEInsertion(infStem) ? infStem + "et" : infStem + "t";

  return { ich, du, er: pres3hint, wir: base, ihr, sie: base };
}

function conjugatePresent(v) {
  if (GRAMMAR_FULLY_IRREGULAR_PRESENT[v.base]) {
    return GRAMMAR_FULLY_IRREGULAR_PRESENT[v.base];
  }
  if (v.modal && GRAMMAR_MODAL_PRESENT[v.infinitive]) {
    return GRAMMAR_MODAL_PRESENT[v.infinitive];
  }
  let table;
  if (v.pres3) {
    // pres3 may include the trailing prefix token for separable verbs;
    // strip it so we conjugate just the base form, then re-attach below.
    let hint = v.pres3;
    if (v.separable && v.prefix && hint.endsWith(" " + v.prefix)) {
      hint = hint.slice(0, -(v.prefix.length + 1));
    }
    table = conjugatePresentFromHint(v.base, hint);
  } else if (GRAMMAR_STRONG_PRESENT[v.base]) {
    table = conjugatePresentFromHint(v.base, GRAMMAR_STRONG_PRESENT[v.base]);
  } else {
    table = conjugatePresentRegular(v.base);
  }
  if (v.separable && v.prefix) {
    const out = {};
    for (const k of ["ich", "du", "er", "wir", "ihr", "sie"]) out[k] = table[k] + " ... " + v.prefix;
    return out;
  }
  return table;
}

function conjugatePastRegular(base) {
  const stem = base.endsWith("en") ? base.slice(0, -2) : base.slice(0, -1);
  const link = gNeedsEInsertion(stem) ? "ete" : "te";
  return {
    ich: stem + link, du: stem + link + "st", er: stem + link,
    wir: stem + link + "n", ihr: stem + link + "t", sie: stem + link + "n"
  };
}

// Endings for a strong/modal Präteritum stem (built from the "ich" form).
function gPastEndings(stem) {
  const endsE = stem.endsWith("e");
  const du = /[s\u00df]$/.test(stem) ? stem + "t" : stem + "st";
  const wirSie = endsE ? stem + "n" : stem + "en";
  const ihr = (!endsE && gNeedsEInsertion(stem)) ? stem + "et" : stem + "t";
  return { du, wir: wirSie, sie: wirSie, ihr };
}

function conjugatePast(v) {
  let table, aux, note = null;
  const strong = GRAMMAR_STRONG_PAST[v.base];
  const modalPast = v.modal ? GRAMMAR_MODAL_PAST[v.infinitive] : null;

  if (v.preteriteHint) {
    // Best case: the source itself gives the 3rd-person preterite, so
    // build the whole paradigm from real data instead of a guess or
    // lookup table. In German, ich and er/sie/es always share the
    // same Präteritum stem, weak or strong verbs alike.
    const stem = v.preteriteHint;
    const e = gPastEndings(stem);
    table = { ich: stem, du: e.du, er: stem, wir: e.wir, ihr: e.ihr, sie: e.sie };
    aux = v.aux || (strong ? strong.aux : (GRAMMAR_SEIN_VERBS.has(v.infinitive) || GRAMMAR_SEIN_VERBS.has(v.base) ? "sein" : "haben"));
  } else if (modalPast) {
    const stem = modalPast.ich;
    const e = gPastEndings(stem);
    table = { ich: stem, du: e.du, er: stem, wir: e.wir, ihr: e.ihr, sie: e.sie };
    aux = "haben";
    note = modalPast.note || null;
  } else if (strong) {
    const stem = strong.ich;
    const e = gPastEndings(stem);
    table = { ich: stem, du: e.du, er: stem, wir: e.wir, ihr: e.ihr, sie: e.sie };
    aux = strong.aux;
  } else {
    table = conjugatePastRegular(v.base);
    aux = GRAMMAR_SEIN_VERBS.has(v.infinitive) || GRAMMAR_SEIN_VERBS.has(v.base) ? "sein" : "haben";
  }

  if (v.separable && v.prefix) {
    const out = { aux, note };
    for (const k of ["ich", "du", "er", "wir", "ihr", "sie"]) out[k] = table[k] + " ... " + v.prefix;
    return out;
  }
  table.aux = aux;
  table.note = note;
  return table;
}

function buildParticiple(v) {
  if (v.modal && GRAMMAR_MODAL_PARTICIPLE[v.infinitive]) return GRAMMAR_MODAL_PARTICIPLE[v.infinitive];
  if (v.participle) return v.participle;
  const strong = GRAMMAR_STRONG_PAST[v.base];
  const basePart = strong ? strong.part : (function () {
    const stem = v.base.endsWith("en") ? v.base.slice(0, -2) : v.base.slice(0, -1);
    const noGe = GRAMMAR_INSEPARABLE_PREFIXES.some(p => v.base.startsWith(p)) || v.base.endsWith("ieren");
    const ending = gNeedsEInsertion(stem) ? "et" : "t";
    return (noGe ? "" : "ge") + stem + ending;
  })();
  if (v.separable && v.prefix) {
    // A strong-table participle already starts with "ge"; splice the
    // prefix in before it (aufgestanden), matching regular formation.
    return v.prefix + basePart;
  }
  return basePart;
}

function buildAux(v) {
  if (v.aux) return v.aux;
  const strong = GRAMMAR_STRONG_PAST[v.base];
  if (strong) return strong.aux;
  return GRAMMAR_SEIN_VERBS.has(v.infinitive) || GRAMMAR_SEIN_VERBS.has(v.base) ? "sein" : "haben";
}

/* ---------- Word-type classification ---------- */

// A few very common irregular infinitives that don't end in "-en" /
// "-eln" / "-ern", so the general verb-shape heuristic below would
// otherwise miss them.
const GRAMMAR_IRREGULAR_INFINITIVES = new Set(["sein", "tun"]);

function classifyWordType(de) {
  const lemma = gLemma(de).replace(/\(sich\)/gi, "").trim();
  const firstTok = gFirstToken(lemma).toLowerCase();
  const bareFirst = lemma.split(",")[0].trim();
  const verbCandidate = bareFirst.replace(/^sich\s+/, "").trim().toLowerCase();

  if (/^(der|die|das)\s/.test(lemma)) return "noun";

  if (GRAMMAR_MODAL_VERBS.has(firstTok) || GRAMMAR_IRREGULAR_INFINITIVES.has(verbCandidate)) return "verb";
  if (GRAMMAR_COMMON_ADJECTIVES.has(firstTok)) return "adjective";
  if (GRAMMAR_PRONOUNS.has(firstTok) || GRAMMAR_PRONOUNS.has(lemma)) return "pronoun";
  if (GRAMMAR_PREPOSITIONS.has(firstTok)) return "preposition";
  if (GRAMMAR_CONJUNCTIONS.has(firstTok)) return "conjunction";
  if (GRAMMAR_NUMBERS.has(firstTok)) return "number";
  if (GRAMMAR_INTERJECTIONS.has(firstTok)) return "interjection";

  if (/(en|eln|ern)$/.test(verbCandidate) && !verbCandidate.includes(" ")) return "verb";

  if (/(ig|lich|isch|bar|sam|los|voll|haft|ell|iv|\u00f6s|ant|ent|end)$/.test(firstTok) && !lemma.includes(" ")) {
    return "adjective";
  }

  if (lemma.includes(" ") || lemma.includes("/")) return "phrase";

  return "adjective"; // safest default bucket for short, uninflected A1/A2 words
}

const GRAMMAR_TYPE_LABELS = {
  noun: "Nomen \u00b7 Noun",
  verb: "Verb",
  adjective: "Adjektiv/Adverb \u00b7 Adjective/Adverb",
  pronoun: "Pronomen \u00b7 Pronoun",
  preposition: "Pr\u00e4position \u00b7 Preposition",
  conjunction: "Konjunktion \u00b7 Conjunction",
  number: "Zahlwort \u00b7 Number",
  interjection: "Interjektion \u00b7 Interjection/Particle",
  phrase: "Ausdruck \u00b7 Phrase/Expression"
};

/* ---------- Public entry point ---------- */

function analyzeWordGrammar(word) {
  const de = word.de || "";
  const type = classifyWordType(de);
  const result = { type, typeLabel: GRAMMAR_TYPE_LABELS[type] || "Wort \u00b7 Word" };

  const lookupKey = de.split(",")[0].trim()
    .replace(/^(der|die|das)\s+/, "")
    .replace(/\s*\([^)]*\)\s*/g, "")
    .toLowerCase();
  const synAnt = GRAMMAR_SYN_ANT[lookupKey];
  if (synAnt) result.synAnt = synAnt;

  if (type === "noun") {
    const n = analyzeNoun(de);
    if (n) {
      result.gender = n.gender;
      result.genderWord = n.gender === "der" ? "masculine (der)" : n.gender === "die" ? "feminine (die)" : "neuter (das)";
      result.plural = n.pluralNote;
    }
  }

  if (type === "verb") {
    const v = analyzeVerb(de);
    result.infinitive = v.infinitive;
    result.modal = v.modal;
    result.separable = v.separable;
    result.prefix = v.prefix;
    result.reflexive = v.reflexive;
    result.present = conjugatePresent(v);
    result.past = conjugatePast(v);
    result.participle = buildParticiple(v);
    result.aux = buildAux(v);
  }

  return result;
}
