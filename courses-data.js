/* ============================================================
   Alltags-Deutsch — courses-data.js
   Grammar courses, one per CEFR level (A1, A2, B1, B2). Each
   course has a "status" of "available" or "soon". Available
   courses have a `topics` array; each topic is a numbered
   grammar point with an English explanation, optional
   comparison table(s), an optional tip callout, and a list of
   German/English example sentences (clickable to hear spoken
   aloud via speakGerman, same as the rest of the site).

   Source: A1 content adapted from the uploaded "German A1
   Guide" reference document, reorganized into the site's
   topic-card format. A2/B1/B2 are placeholders until written.

   To add a new course level: push a { level, id, status: "soon" }
   object into COURSES, then flip status to "available" and add
   a `topics` array once the content is ready — see the A1 course
   below for the full shape.
   ============================================================ */

const COURSES = [
  {
    id: "a1",
    level: "A1",
    title: "German A1",
    subtitle: "A Beginner's Guide — Explained in English",
    tagline: "Nouns, verbs, pronouns, sentence structure, questions, negation, cases, past tense, and more — every core A1 topic, explained with examples.",
    status: "available",
    topics: [
      {
        number: "01",
        id: "nouns-articles",
        en: "Nouns & Articles",
        de: "Nomen & Artikel",
        intro: [
          "In German, every noun has a gender: masculine (der), feminine (die), or neuter (das). Unlike English, German nouns are always capitalized, no matter where they appear in a sentence. The article (der/die/das) tells you the gender — and you usually just have to memorize it along with the noun."
        ],
        tables: [
          {
            caption: "The three genders",
            headers: ["Gender", "Article", "Example", "Meaning"],
            rows: [
              ["Masculine", "der", "der Mann", "the man"],
              ["Feminine", "die", "die Frau", "the woman"],
              ["Neuter", "das", "das Kind", "the child"],
              ["Plural (all genders)", "die", "die Kinder", "the children"]
            ]
          },
          {
            caption: "Definite vs indefinite articles",
            headers: ["Gender", "Definite (\u201cthe\u201d)", "Indefinite (\u201ca/an\u201d)"],
            rows: [
              ["Masculine", "der Tisch", "ein Tisch"],
              ["Feminine", "die Lampe", "eine Lampe"],
              ["Neuter", "das Buch", "ein Buch"]
            ]
          }
        ],
        tip: "There's no reliable rule for guessing gender every time, so it's best to always learn a noun together with its article — say \u201cdie Lampe\u201d, not just \u201cLampe\u201d.",
        examples: [
          { de: "der Hund", en: "the dog (masculine)" },
          { de: "die Katze", en: "the cat (feminine)" },
          { de: "das Haus", en: "the house (neuter)" },
          { de: "ein Apfel", en: "an apple (masculine, indefinite)" },
          { de: "eine Tasche", en: "a bag (feminine, indefinite)" },
          { de: "ein Auto", en: "a car (neuter, indefinite)" },
          { de: "die Bücher", en: "the books (plural)" },
          { de: "Der Tisch ist groß.", en: "The table is big." }
        ]
      },
      {
        number: "02",
        id: "verbs-conjugation",
        en: "Verbs & Conjugation",
        de: "Verben & Konjugation",
        intro: [
          "German verbs change their ending depending on who is doing the action (the subject) — this is called conjugation. Most verbs in the infinitive (dictionary form) end in -en, like machen (to do/make) or spielen (to play).",
          "A handful of common verbs are irregular and change their stem vowel — but only in the du and er/sie/es forms. Ich, wir, and ihr almost always stay regular. One verb, wissen, is the exception: it changes in ich, du, AND er (ich weiß, du weißt, er weiß)."
        ],
        tables: [
          {
            caption: "Present tense — regular verb \u201cmachen\u201d (to do/make)",
            headers: ["Pronoun", "Verb form", "Meaning"],
            rows: [
              ["ich (I)", "mache", "I do"],
              ["du (you, informal)", "machst", "you do"],
              ["er/sie/es (he/she/it)", "macht", "he/she/it does"],
              ["wir (we)", "machen", "we do"],
              ["ihr (you all)", "macht", "you all do"],
              ["sie/Sie (they/you formal)", "machen", "they/you do"]
            ]
          },
          {
            caption: "Two key irregular verbs — \u201csein\u201d (to be) and \u201chaben\u201d (to have)",
            headers: ["Pronoun", "sein (to be)", "haben (to have)"],
            rows: [
              ["ich", "bin", "habe"],
              ["du", "bist", "hast"],
              ["er/sie/es", "ist", "hat"],
              ["wir", "sind", "haben"],
              ["ihr", "seid", "habt"],
              ["sie/Sie", "sind", "haben"]
            ]
          }
        ],
        tip: "The verb stem (machen → mach-) stays the same; only the ending changes based on the subject. Learn the six endings (-e, -st, -t, -en, -t, -en) and you can conjugate almost any regular verb. For stem-changing verbs, always double-check the du and er/sie/es forms: Du siehst ✅ (not Du sehst ❌), Er nimmt ✅ (not Er nehmt ❌).",
        examples: [
          { de: "Ich lerne Deutsch.", en: "I am learning German." },
          { de: "Du spielst Fußball.", en: "You play soccer." },
          { de: "Er wohnt in Berlin.", en: "He lives in Berlin." },
          { de: "Wir haben ein Auto.", en: "We have a car." },
          { de: "Ihr seid sehr nett.", en: "You all are very nice." },
          { de: "Sie arbeitet viel.", en: "She works a lot." },
          { de: "Ich weiß die Antwort nicht.", en: "I don't know the answer." },
          { de: "Er nimmt den Zug.", en: "He takes the train." },
          { de: "Sie sieht fern.", en: "She watches TV." },
          { de: "Wir fahren nach Berlin.", en: "We are driving to Berlin." }
        ]
      },
      {
        number: "03",
        id: "pronouns",
        en: "Pronouns",
        de: "Pronomen",
        intro: [
          "Personal pronouns replace nouns (like \u201cI\u201d, \u201cyou\u201d, \u201che\u201d). German has an informal \u201cyou\u201d (du) for friends and family, and a formal \u201cyou\u201d (Sie) for strangers, elders, or professional settings — Sie is always capitalized."
        ],
        tables: [
          {
            caption: "Personal pronouns",
            headers: ["German", "English", "Notes"],
            rows: [
              ["ich", "I", "always lowercase unless first word"],
              ["du", "you (singular, informal)", "friends, family, children"],
              ["er", "he", "for masculine nouns"],
              ["sie", "she", "for feminine nouns"],
              ["es", "it", "for neuter nouns"],
              ["wir", "we", "plural"],
              ["ihr", "you all (plural, informal)", "group of friends"],
              ["sie", "they", "plural, lowercase"],
              ["Sie", "you (formal, singular/plural)", "always capitalized"]
            ]
          }
        ],
        tip: "Use \u201cdu\u201d with people your own age or younger, family, and friends. Use \u201cSie\u201d with strangers, in shops, at work, or with anyone older — when in doubt, use \u201cSie\u201d.",
        examples: [
          { de: "Ich heiße Anna.", en: "My name is Anna." },
          { de: "Du bist mein Freund.", en: "You are my friend." },
          { de: "Er kommt aus Spanien.", en: "He comes from Spain." },
          { de: "Sie ist Lehrerin.", en: "She is a teacher." },
          { de: "Es regnet.", en: "It is raining." },
          { de: "Wir gehen ins Kino.", en: "We are going to the cinema." },
          { de: "Woher kommt ihr?", en: "Where do you all come from?" },
          { de: "Sprechen Sie Englisch?", en: "Do you (formal) speak English?" }
        ]
      },
      {
        number: "04",
        id: "sentence-structure",
        en: "Sentence Structure",
        de: "Satzbau",
        intro: [
          "The most important rule in German main clauses is the \u201cVerb-Second\u201d (V2) rule: the conjugated verb is always the second element of the sentence — not necessarily the second word, but the second unit of meaning ('chunk'). This means you can start a sentence with something other than the subject (like a time or place), and the verb still stays in position two — the subject simply moves after it."
        ],
        tip: "Count the sentence in 'chunks,' not words. \u201cIn Berlin\u201d is one chunk (position 1), so the verb \u201cwohnt\u201d must come right after it — position 2 — even though it's technically the third word.",
        examples: [
          { de: "Ich trinke Kaffee.", en: "I drink coffee. (Subject – Verb – Object)" },
          { de: "Ich gehe heute ins Kino.", en: "I am going to the cinema today." },
          { de: "Heute gehe ich ins Kino.", en: "Today I am going to the cinema. (verb stays 2nd)" },
          { de: "Morgen lernt sie Deutsch.", en: "Tomorrow she learns German." },
          { de: "In Berlin wohnt meine Familie.", en: "My family lives in Berlin." },
          { de: "Wir essen jeden Tag Brot.", en: "We eat bread every day." },
          { de: "Am Wochenende spiele ich Fußball.", en: "On the weekend I play soccer." },
          { de: "Der Lehrer erklärt die Grammatik.", en: "The teacher explains the grammar." }
        ]
      },
      {
        number: "05",
        id: "questions",
        en: "Questions",
        de: "Fragen",
        intro: [
          "There are two main types of questions in German: Yes/No questions (Ja/Nein-Fragen), formed by putting the verb first; and W-questions (W-Fragen), formed with a question word, similar to English \u201cwh-\u201d words."
        ],
        tables: [
          {
            caption: "W-question words",
            headers: ["German", "English"],
            rows: [
              ["wer", "who"],
              ["was", "what"],
              ["wo", "where"],
              ["wann", "when"],
              ["warum", "why"],
              ["wie", "how"],
              ["woher", "where…from"],
              ["welche/r/s", "which"]
            ]
          }
        ],
        tip: "In a W-question, the pattern is: W-word + Verb + Subject + rest. In a Yes/No question, just move the verb to the very front: \u201cDu kommst.\u201d → \u201cKommst du?\u201d",
        examples: [
          { de: "Kommst du mit?", en: "Are you coming along? (Yes/No — verb first)" },
          { de: "Sprichst du Deutsch?", en: "Do you speak German?" },
          { de: "Wer bist du?", en: "Who are you?" },
          { de: "Was machst du?", en: "What are you doing?" },
          { de: "Wo wohnst du?", en: "Where do you live?" },
          { de: "Wann beginnt der Film?", en: "When does the film start?" },
          { de: "Warum lernst du Deutsch?", en: "Why are you learning German?" },
          { de: "Wie heißt du?", en: "What is your name?" },
          { de: "Woher kommst du?", en: "Where are you from?" }
        ]
      },
      {
        number: "06",
        id: "negation",
        en: "Negation",
        de: "Verneinung",
        intro: [
          "German has two main ways to say \u201cno\u201d or \u201cnot\u201d: nicht and kein. Choosing the right one depends on what you are negating. nicht goes at the end of the sentence when you are negating the verb or the whole action; when you negate a definite noun (der/die/das), you put nicht directly before that noun."
        ],
        tables: [
          {
            caption: "nicht vs. kein",
            headers: ["Word", "Used to negate", "Example"],
            rows: [
              ["nicht", "verbs, adjectives, adverbs, definite nouns", "Ich komme nicht. (I'm not coming.)"],
              ["kein / keine", "indefinite nouns (a/an) or nouns with no article", "Ich habe kein Auto. (I don't have a car.)"]
            ]
          }
        ],
        tip: "\u201cKein\u201d kills the article, \u201cnicht\u201d kills everything else. Quick test: if you could put \u201ca/an\u201d or \u201csome\u201d in front of the English noun, use kein(e). Otherwise (for verbs, adjectives, or specific/definite things), use nicht.",
        examples: [
          { de: "Ich verstehe das nicht.", en: "I don't understand that." },
          { de: "Das ist nicht richtig.", en: "That is not correct." },
          { de: "Ich habe keine Zeit.", en: "I don't have time." },
          { de: "Er hat kein Geld.", en: "He has no money." },
          { de: "Wir sind nicht müde.", en: "We are not tired." },
          { de: "Sie trinkt keinen Kaffee.", en: "She doesn't drink coffee." },
          { de: "Ich mag das nicht.", en: "I don't like that." },
          { de: "Das ist kein Problem.", en: "That is not a problem." }
        ]
      },
      {
        number: "07",
        id: "akkusativ",
        en: "Akkusativ (Accusative Case)",
        de: "Akkusativ",
        intro: [
          "The Akkusativ case is used for the direct object of a sentence — the thing that directly receives the action of the verb. Only the masculine article changes in the accusative; feminine, neuter, and plural stay the same as in the nominative (subject) case."
        ],
        tables: [
          {
            caption: "Article changes: nominative vs akkusativ",
            headers: ["Gender", "Nominative (subject)", "Akkusativ (object)"],
            rows: [
              ["Masculine", "der / ein", "den / einen"],
              ["Feminine", "die / eine", "die / eine (no change)"],
              ["Neuter", "das / ein", "das / ein (no change)"],
              ["Plural", "die", "die (no change)"]
            ]
          }
        ],
        tip: "To find the Akkusativ object, ask \u201cwen?\u201d (whom?) or \u201cwas?\u201d (what?) after the verb: \u201cIch sehe den Mann\u201d → \u201cWen sehe ich?\u201d → \u201cden Mann.\u201d Remember: only masculine der/ein change (to den/einen) — everything else stays the same.",
        examples: [
          { de: "Ich sehe den Mann.", en: "I see the man. (der → den)" },
          { de: "Ich kaufe einen Apfel.", en: "I am buying an apple. (ein → einen)" },
          { de: "Sie liest die Zeitung.", en: "She reads the newspaper. (die stays die)" },
          { de: "Wir haben das Buch.", en: "We have the book. (das stays das)" },
          { de: "Ich trinke einen Kaffee.", en: "I drink a coffee." },
          { de: "Er isst den Kuchen.", en: "He eats the cake." },
          { de: "Ich suche eine Wohnung.", en: "I am looking for an apartment." },
          { de: "Kennst du den Lehrer?", en: "Do you know the teacher?" }
        ]
      },
      {
        number: "08",
        id: "possessives",
        en: "Possessive Articles",
        de: "Possessivartikel (mein, dein, sein…)",
        intro: [
          "Possessive articles show ownership (\u201cmy\u201d, \u201cyour\u201d, \u201chis\u201d…). They follow the same endings as \u201cein\u201d, so they're called \u201cein-words\u201d."
        ],
        tables: [
          {
            caption: "Possessive articles",
            headers: ["German", "English"],
            rows: [
              ["mein", "my"],
              ["dein", "your (informal)"],
              ["sein", "his / its"],
              ["ihr", "her"],
              ["unser", "our"],
              ["euer", "your (plural informal)"],
              ["ihr / Ihr", "their / your (formal)"]
            ]
          }
        ],
        examples: [
          { de: "Das ist mein Bruder.", en: "That is my brother." },
          { de: "Wo ist deine Tasche?", en: "Where is your bag?" },
          { de: "Das ist ihre Katze.", en: "That is her cat." }
        ]
      },
      {
        number: "09",
        id: "modal-verbs",
        en: "Modal Verbs",
        de: "Modalverben (können, müssen, wollen, möchten…)",
        intro: [
          "Modal verbs express ability, necessity, desire, or permission. They are irregular and push the main verb (in infinitive form) to the very end of the sentence."
        ],
        tables: [
          {
            caption: "Common modal verbs",
            headers: ["Modal verb", "Meaning"],
            rows: [
              ["können", "can / to be able to"],
              ["müssen", "must / to have to"],
              ["wollen", "to want to"],
              ["möchten", "would like to"],
              ["dürfen", "to be allowed to"],
              ["sollen", "should"]
            ]
          }
        ],
        examples: [
          { de: "Ich kann gut schwimmen.", en: "I can swim well." },
          { de: "Du musst jetzt gehen.", en: "You have to go now." },
          { de: "Wir möchten Pizza essen.", en: "We would like to eat pizza." }
        ]
      },
      {
        number: "10",
        id: "separable-verbs",
        en: "Separable Verbs",
        de: "Trennbare Verben",
        intro: [
          "Some German verbs have a prefix that \u201cseparates\u201d and moves to the end of the sentence in the present tense — for example aufstehen (to get up) → auf…stehen."
        ],
        examples: [
          { de: "Ich stehe um 7 Uhr auf.", en: "I get up at 7 o'clock." },
          { de: "Sie ruft mich an.", en: "She calls me." },
          { de: "Wir machen das Fenster zu.", en: "We close the window." }
        ]
      },
      {
        number: "11",
        id: "prepositions",
        en: "Prepositions",
        de: "Präpositionen",
        intro: [
          "Certain prepositions always take the Akkusativ case (für, durch, ohne, gegen, um), while others always take the Dativ case (mit, nach, bei, seit, von, zu, aus)."
        ],
        examples: [
          { de: "Das Geschenk ist für dich.", en: "The gift is for you. (Akkusativ)" },
          { de: "Ich fahre mit dem Bus.", en: "I travel by bus. (Dativ)" },
          { de: "Wir gehen ohne ihn.", en: "We are going without him. (Akkusativ)" }
        ]
      },
      {
        number: "12",
        id: "numbers-time",
        en: "Numbers & Telling Time",
        de: "Zahlen & Uhrzeit",
        intro: [
          "Numbers and clock time come up constantly in everyday German — prices, phone numbers, appointments, opening hours."
        ],
        tables: [
          {
            caption: "Numbers 1–100",
            headers: ["Range", "German"],
            rows: [
              ["1–5", "eins, zwei, drei, vier, fünf"],
              ["6–10", "sechs, sieben, acht, neun, zehn"],
              ["11–15", "elf, zwölf, dreizehn, vierzehn, fünfzehn"],
              ["20 / 30 / 100", "zwanzig / dreißig / hundert"]
            ]
          }
        ],
        examples: [
          { de: "Es ist drei Uhr.", en: "It is three o'clock." },
          { de: "Wie viel Uhr ist es?", en: "What time is it?" }
        ]
      },
      {
        number: "13",
        id: "plurals",
        en: "Plural Noun Forms",
        de: "Pluralformen",
        intro: [
          "German plurals don't just add \u201c-s\u201d like English. Common patterns include adding -e, -er, -n/-en, or an umlaut — each noun's plural is usually learned individually, alongside the noun itself."
        ],
        tables: [
          {
            caption: "Singular → plural examples",
            headers: ["Singular", "Plural"],
            rows: [
              ["das Kind", "die Kinder"],
              ["der Tisch", "die Tische"],
              ["die Frau", "die Frauen"],
              ["das Auto", "die Autos"]
            ]
          }
        ],
        examples: [
          { de: "die Kinder", en: "the children" },
          { de: "die Tische", en: "the tables" },
          { de: "die Frauen", en: "the women" },
          { de: "die Autos", en: "the cars" }
        ]
      },
      {
        number: "14",
        id: "dativ",
        en: "Dativ (Dative Case)",
        de: "Dativ",
        intro: [
          "The Dativ case is used for the indirect object — usually the person something is given to, told to, or done for. It also follows a fixed set of prepositions (mit, nach, bei, seit, von, zu, aus — see Prepositions above). Unlike the Akkusativ, all three genders and the plural change their article in the Dativ."
        ],
        tables: [
          {
            caption: "Article changes: nominative vs dativ",
            headers: ["Gender", "Nominative", "Dativ"],
            rows: [
              ["Masculine", "der / ein", "dem / einem"],
              ["Feminine", "die / eine", "der / einer"],
              ["Neuter", "das / ein", "dem / einem"],
              ["Plural", "die", "den (+ -n on the noun: die Kinder → den Kindern)"]
            ]
          }
        ],
        tip: "To find the Dativ object, ask \u201cwem?\u201d (to/for whom?). \u201cIch gebe dem Kind einen Apfel\u201d → \u201cWem gebe ich einen Apfel?\u201d → \u201cdem Kind.\u201d Verbs like geben, helfen, danken, and gehören almost always take a Dativ object.",
        examples: [
          { de: "Ich gebe dem Mann das Buch.", en: "I give the man the book. (der → dem)" },
          { de: "Sie hilft der Frau.", en: "She helps the woman. (die → der)" },
          { de: "Wir danken dem Kind.", en: "We thank the child. (das → dem)" },
          { de: "Das gehört den Kindern.", en: "That belongs to the children. (plural + -n)" },
          { de: "Ich fahre mit dem Bus.", en: "I travel by bus. (mit + Dativ)" }
        ]
      },
      {
        number: "15",
        id: "perfekt",
        en: "Perfekt (Past Tense)",
        de: "Perfekt",
        intro: [
          "The Perfekt tense is how German normally talks about the past in everyday speech (not just in writing). It's built from a helper verb — haben or sein — conjugated in the present tense, plus a Partizip II (past participle) sent to the very end of the sentence.",
          "Most verbs use haben. Verbs of motion or change of state (gehen, fahren, kommen, sein, werden…) use sein instead."
        ],
        tables: [
          {
            caption: "Forming the Partizip II",
            headers: ["Verb type", "Pattern", "Example"],
            rows: [
              ["Regular (weak)", "ge- + stem + -t", "machen → gemacht"],
              ["Irregular (strong)", "ge- + stem (often changed) + -en", "gehen → gegangen"],
              ["-ieren verbs", "stem + -t (no ge-)", "studieren → studiert"],
              ["Separable verbs", "prefix + ge- + stem", "aufstehen → aufgestanden"]
            ]
          }
        ],
        tip: "Quick test for haben vs sein: if the verb describes movement from A to B, or a change of state (aufwachen, sterben, werden…), use sein. Otherwise, default to haben. And sein itself is irregular: ich bin gewesen (I have been).",
        examples: [
          { de: "Ich habe Deutsch gelernt.", en: "I have learned German. / I learned German." },
          { de: "Du hast Pizza gegessen.", en: "You ate pizza." },
          { de: "Er ist nach Berlin gefahren.", en: "He drove/traveled to Berlin. (sein)" },
          { de: "Wir sind ins Kino gegangen.", en: "We went to the cinema. (sein)" },
          { de: "Sie hat in Spanien studiert.", en: "She studied in Spain. (-ieren, no ge-)" },
          { de: "Ich bin um 7 Uhr aufgestanden.", en: "I got up at 7 o'clock. (separable verb)" }
        ]
      },
      {
        number: "16",
        id: "imperative",
        en: "Imperative (Commands)",
        de: "Imperativ",
        intro: [
          "The imperative is used for commands, instructions, and requests. It has three forms depending on who you're talking to — du, ihr, or Sie — and the verb always comes first in the sentence."
        ],
        tables: [
          {
            caption: "Imperative forms — \u201cmachen\u201d (to do)",
            headers: ["Form", "Pattern", "Example"],
            rows: [
              ["du", "stem (no -st ending)", "Mach das! (Do that!)"],
              ["ihr", "same as ihr present tense", "Macht das! (Do that, you all!)"],
              ["Sie", "infinitive + Sie", "Machen Sie das! (Do that, please.)"]
            ]
          }
        ],
        tip: "Stem-changing e→i/ie verbs (like sehen, nehmen) keep that change in the du-form imperative but drop the usual -e: Sieh! (not Siehe!), Nimm! (not Nehme!). The Sie-form is always the most polite and simply flips infinitive + Sie.",
        examples: [
          { de: "Komm her!", en: "Come here! (du)" },
          { de: "Setzt euch!", en: "Sit down, everyone! (ihr)" },
          { de: "Kommen Sie bitte mit!", en: "Please come along. (Sie)" },
          { de: "Sei ruhig!", en: "Be quiet! (du, irregular from sein)" },
          { de: "Öffnen Sie das Fenster.", en: "Open the window. (Sie)" }
        ]
      },
      {
        number: "17",
        id: "conjunctions",
        en: "Conjunctions & Word Order",
        de: "Konjunktionen & Wortstellung",
        intro: [
          "Coordinating conjunctions (und, oder, aber, denn) simply link two main clauses — they don't change word order at all. Subordinating conjunctions (weil, dass, wenn) are different: they send the conjugated verb all the way to the end of their own clause."
        ],
        tables: [
          {
            caption: "Coordinating (no word-order change) vs subordinating (verb-to-end)",
            headers: ["Type", "Conjunctions", "Effect on word order"],
            rows: [
              ["Coordinating", "und, oder, aber, denn", "none — verb stays in position 2"],
              ["Subordinating", "weil, dass, wenn, ob", "verb moves to the very end of its clause"]
            ]
          }
        ],
        tip: "\u201cDenn\u201d and \u201cweil\u201d both mean \u201cbecause\u201d, which is why learners mix them up — but denn is coordinating (normal word order) and weil is subordinating (verb to the end): \u201cIch bleibe zu Hause, denn ich bin müde\u201d vs. \u201cIch bleibe zu Hause, weil ich müde bin.\u201d",
        examples: [
          { de: "Ich lerne Deutsch, und du lernst Englisch.", en: "I'm learning German, and you're learning English." },
          { de: "Wir bleiben zu Hause, aber sie gehen aus.", en: "We're staying home, but they're going out." },
          { de: "Ich bleibe zu Hause, denn ich bin müde.", en: "I'm staying home, because I'm tired. (normal order)" },
          { de: "Ich bleibe zu Hause, weil ich müde bin.", en: "I'm staying home because I'm tired. (verb to end)" },
          { de: "Ich weiß, dass du müde bist.", en: "I know that you're tired. (verb to end)" },
          { de: "Ruf mich an, wenn du ankommst.", en: "Call me when you arrive. (verb to end)" }
        ]
      },
      {
        number: "18",
        id: "time-expressions",
        en: "Time Expressions",
        de: "Zeitangaben",
        intro: [
          "German uses three different little words to say \u201cat/on/in\u201d depending on whether you're naming a clock time, a day, or a month — mixing them up is one of the most common A1 mistakes."
        ],
        tables: [
          {
            caption: "um / am / im",
            headers: ["Word", "Used with", "Example"],
            rows: [
              ["um", "clock times", "um 8 Uhr (at 8 o'clock)"],
              ["am", "days & dates", "am Montag (on Monday), am 3. Mai (on May 3rd)"],
              ["im", "months & seasons", "im Januar (in January), im Winter (in winter)"]
            ]
          },
          {
            caption: "Days of the week",
            headers: ["German", "English"],
            rows: [
              ["Montag, Dienstag, Mittwoch", "Monday, Tuesday, Wednesday"],
              ["Donnerstag, Freitag", "Thursday, Friday"],
              ["Samstag/Sonnabend, Sonntag", "Saturday, Sunday"]
            ]
          }
        ],
        examples: [
          { de: "Der Kurs beginnt um 8 Uhr.", en: "The course starts at 8 o'clock." },
          { de: "Wir treffen uns am Montag.", en: "We're meeting on Monday." },
          { de: "Ihr Geburtstag ist im Januar.", en: "Her birthday is in January." },
          { de: "Am Wochenende habe ich frei.", en: "I'm off on the weekend." },
          { de: "Im Sommer fahren wir ans Meer.", en: "In summer we go to the seaside." }
        ]
      }
    ]
  },
  { id: "a2", level: "A2", title: "German A2", subtitle: "Elementary German", status: "soon" },
  { id: "b1", level: "B1", title: "German B1", subtitle: "Intermediate German", status: "soon" },
  { id: "b2", level: "B2", title: "German B2", subtitle: "Upper-Intermediate German", status: "soon" }
];

function getCourseById(id) {
  return COURSES.find(c => c.id === id) || null;
}
