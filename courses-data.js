/* ============================================================
   Alltags-Deutsch — courses-data.js
   Grammar courses, one per CEFR level (A1, A2, B1). Each
   course has a "status" of "available" or "soon". Available
   courses have a `topics` array; each topic is a numbered
   grammar point with an English explanation, optional
   comparison table(s), an optional tip callout, and a list of
   German/English example sentences (clickable to hear spoken
   aloud via speakGerman, same as the rest of the site).

   Source: A1 content adapted from the uploaded "German A1
   Guide" reference document, reorganized into the site's
   topic-card format. A2/B1 are placeholders until written.

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
          "Think of every German noun as wearing a little name tag that says whether it's a \u2018boy word\u2019, a \u2018girl word\u2019, or a \u2018neither word\u2019. Grammar books call these genders masculine, feminine, and neuter — but it has nothing to do with real-life boys and girls. \u201cDas Mädchen\u201d (the girl) is actually neuter! It's just a label the word carries around, and German speakers learned which label goes with which word the same way you learned that a stove is hot: by hearing it over and over as a kid.",
          "The name tag itself is the article — a tiny word that comes right before the noun. \u201cDer\u201d marks a boy word, \u201cdie\u201d marks a girl word, and \u201cdas\u201d marks a neither word. So \u201cder Mann\u201d, \u201cdie Frau\u201d, and \u201cdas Kind\u201d are really just \u201clabel + word\u201d pairs. There's a second kind of label too: \u201cein/eine\u201d, which works like English \u201ca/an\u201d — it means you're talking about any one example of something (\u201ca dog\u201d), not one specific thing (\u201cthe dog\u201d).",
          "One more thing that surprises beginners: in German, every single noun starts with a capital letter, always — not just names of people and places like in English, but ordinary words too, like \u201cHund\u201d (dog) or \u201cTisch\u201d (table). So if you see a capital letter in the middle of a German sentence, that's your clue: \u201cthis word is a thing\u201d.",
          "German also loves gluing two (or more) nouns together into one long compound word instead of using separate words like English does — \u201cdas Wasser\u201d (the water) + \u201cdie Flasche\u201d (the bottle) becomes \u201cdie Wasserflasche\u201d (the water bottle). The handy rule: a compound noun always takes the gender and article of its LAST word, no matter what the earlier pieces were. So even though \u201cWasser\u201d is neuter (das), \u201cWasserflasche\u201d ends in \u201cFlasche\u201d, which is feminine — so the whole compound is \u201cdie Wasserflasche\u201d."
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
          },
          {
            caption: "Pointing something out: \u201cDas ist / Das sind...\u201d",
            headers: ["Gender", "Definite", "Indefinite", "Pointing it out"],
            rows: [
              ["Masculine", "der Mann", "ein Mann", "Das ist ein Mann."],
              ["Neuter", "das Auto", "ein Auto", "Das ist ein Auto."],
              ["Feminine", "die Frau", "eine Frau", "Das ist eine Frau."],
              ["Plural", "die Bücher", "\u2014", "Das sind Bücher."]
            ]
          }
        ],
        tip: "There's no reliable rule for guessing gender every time, so it's best to always learn a noun together with its article — say \u201cdie Lampe\u201d, not just \u201cLampe\u201d. \u201cDas ist...\u201d (that is...) and \u201cDas sind...\u201d (those are...) are the easiest way to point something out and practice articles at the same time — \u201cdas\u201d itself doesn't change here; it just means \u201cthat/this\u201d, not the neuter article.",
        examples: [
          { de: "der Hund", en: "the dog (masculine)" },
          { de: "die Katze", en: "the cat (feminine)" },
          { de: "das Haus", en: "the house (neuter)" },
          { de: "ein Apfel", en: "an apple (masculine, indefinite)" },
          { de: "eine Tasche", en: "a bag (feminine, indefinite)" },
          { de: "ein Auto", en: "a car (neuter, indefinite)" },
          { de: "die Bücher", en: "the books (plural)" },
          { de: "Der Tisch ist groß.", en: "The table is big." },
          { de: "Das ist eine Kirche. Die Kirche heißt Michaeliskirche.", en: "That is a church. The church is called Michaeliskirche." },
          { de: "das Wasser + die Flasche = die Wasserflasche", en: "water + bottle = the water bottle (compound takes the last word's gender)" }
        ]
      },
      {
        number: "02",
        id: "verbs-conjugation",
        en: "Verbs & Conjugation",
        de: "Verben & Konjugation",
        intro: [
          "A verb is an action word — running, eating, learning. In German, the verb changes its ending depending on WHO is doing the action, kind of like how the verb wears a different little hat for \u201cI\u201d than it does for \u201cwe\u201d. This changing is called conjugation, and it happens every single time you use a verb, so it's worth getting comfortable with early on.",
          "Here's the easy part: almost every German verb starts life in a plain, un-conjugated form called the infinitive — the form you'd look up in a dictionary — and it ends in \u201c-en\u201d, like machen (to do/make) or spielen (to play). To conjugate it, you chop off the \u201c-en\u201d to get the stem (mach-, spiel-) and glue on a new ending that matches the subject: -e for ich, -st for du, -t for er/sie/es, and so on. The stem itself never changes for regular verbs — only the ending does.",
          "A small group of very common verbs are a bit rebellious: their middle vowel changes, but ONLY when the subject is du or er/sie/es — never for ich, wir, or ihr. For example sehen (to see) becomes du siehst and er sieht, even though ich sehe stays normal. There's exactly one verb that breaks even that pattern: wissen (to know a fact), which changes for ich, du, AND er all three: ich weiß, du weißt, er weiß."
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
          { de: "Wir fahren nach Berlin.", en: "We are driving to Berlin." },
          { de: "Ich komme aus Pakistan.", en: "I come from Pakistan." },
          { de: "Woher kommst du? — Ich komme aus Pakistan.", en: "Where are you from? — I come from Pakistan." },
          { de: "Wo wohnst du? — Ich wohne in Lahore.", en: "Where do you live? — I live in Lahore." }
        ]
      },
      {
        number: "03",
        id: "pronouns",
        en: "Pronouns",
        de: "Pronomen",
        intro: [
          "A pronoun is just a short word that stands in for a noun so you don't have to repeat it — instead of saying \u201cAnna is happy, Anna is going home\u201d, you say \u201cAnna is happy, she is going home.\u201d German pronouns work the same job as English ones: ich (I), du (you), er (he), sie (she), es (it), wir (we), ihr (you all), sie (they).",
          "The one big difference from English is that German has TWO separate words for \u201cyou\u201d, and choosing the right one matters. \u201cDu\u201d is the casual, warm, everyday \u201cyou\u201d you'd use with friends, family, and other kids — like talking to your best friend. \u201cSie\u201d (always spelled with a capital S, even in the middle of a sentence) is the polite, respectful \u201cyou\u201d you'd use with a teacher, a shopkeeper, or any grown-up you don't know well — a bit like calling an adult \u201cMr./Ms. Smith\u201d instead of their first name. Picking the wrong one isn't dangerous, but it can sound either too formal with a friend or too casual with a stranger, so German speakers pay close attention to it."
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
          { de: "Sprechen Sie Englisch?", en: "Do you (formal) speak English?" },
          { de: "Wie heißen Sie?", en: "What is your name? (formal, to Sie)" },
          { de: "Wo wohnen Sie?", en: "Where do you live? (formal)" },
          { de: "Welche Sprachen sprechen Sie?", en: "Which languages do you speak? (formal)" }
        ]
      },
      {
        number: "04",
        id: "sentence-structure",
        en: "Sentence Structure",
        de: "Satzbau",
        intro: [
          "Imagine a German sentence as a line of train cars, and the verb is a car that is ALWAYS only allowed to park in the second spot on the track — no matter what. This is the single most important rule of German word order, and once it clicks, a lot of \u201cweird\u201d German sentences suddenly make sense.",
          "In the simplest sentences, the subject comes first and the verb comes right after, just like in English: \u201cIch trinke Kaffee\u201d (I drink coffee). But the \u201cfirst spot\u201d doesn't have to be the subject — it can be a time word, a place, or almost anything else, as long as it's only ONE chunk of meaning. If you put something else first, the subject simply hops over the verb to third place, but the verb itself never moves out of position two.",
          "So \u201cheute\u201d (today) can go first: \u201cHeute gehe ich ins Kino\u201d (Today I'm going to the cinema) — \u201cgehe\u201d is still the second thing in the sentence, and \u201cich\u201d slid to third place to make room. The trick is to count in chunks of meaning, not in words: \u201cIn Berlin\u201d is one chunk even though it's two words, so the verb still has to land right after it."
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
          "There are only two ways to ask a question in German, and both are simpler than they sound. The first is a Yes/No question (Ja/Nein-Frage) — the kind where the answer is just \u201cyes\u201d or \u201cno\u201d. To make one, you don't add any extra word at all; you just pick up the verb and move it to the very front of the sentence, ahead of the subject. \u201cDu kommst\u201d (You are coming) turns into \u201cKommst du?\u201d (Are you coming?) simply by swapping the order of those two words.",
          "The second type is a W-question (W-Frage), named after the fact that almost all German question words start with the letter W — wer (who), was (what), wo (where), wann (when), warum (why), wie (how), woher (where...from). The pattern here is: W-word, then verb, then subject, then everything else. So \u201cWo wohnst du?\u201d literally lines up as \u201cWhere / live / you?\u201d — the question word grabs the very first spot, and the verb still has to sit in second place, exactly like in a normal statement.",
          "Now here's the part learners often aren't shown: what happens when you want to ask a NEGATIVE question — one that expects the answer \u201cno, I'm not\u201d or checks something isn't true, like English \u201cAren't you coming?\u201d or \u201cWhy don't you understand?\u201d. Good news: German doesn't need any special new rule for this. You build the question exactly the same way as always (verb first for Yes/No, W-word first for W-questions), and then you just drop in \u201cnicht\u201d or \u201ckein\u201d in the normal negation spot, at or near the end of the question. \u201cKommst du?\u201d (Are you coming?) becomes \u201cKommst du nicht?\u201d (Aren't you coming? / Are you not coming?). \u201cWarum verstehst du das?\u201d (Why do you understand that?) becomes \u201cWarum verstehst du das nicht?\u201d (Why don't you understand that?). The question shape and the negation shape simply stack on top of each other — nothing new to memorize beyond the two skills you already have."
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
          },
          {
            caption: "Turning a question negative",
            headers: ["Positive question", "Negative question", "Meaning"],
            rows: [
              ["Kommst du mit?", "Kommst du nicht mit?", "Are you coming along? → Aren't you coming along?"],
              ["Verstehst du das?", "Verstehst du das nicht?", "Do you understand that? → Don't you understand that?"],
              ["Hast du Zeit?", "Hast du keine Zeit?", "Do you have time? → Don't you have time? (kein, indefinite noun)"],
              ["Warum kommst du?", "Warum kommst du nicht?", "Why are you coming? → Why aren't you coming?"]
            ]
          }
        ],
        tip: "In a W-question, the pattern is: W-word + Verb + Subject + rest. In a Yes/No question, just move the verb to the very front: \u201cDu kommst.\u201d → \u201cKommst du?\u201d To make either type negative, keep the exact same word order and just add \u201cnicht\u201d (usually near the end) or \u201ckein/keine\u201d (right before an indefinite noun) — the same nicht/kein rules you use in statements apply unchanged inside questions.",
        examples: [
          { de: "Kommst du mit?", en: "Are you coming along? (Yes/No — verb first)" },
          { de: "Kommst du nicht mit?", en: "Aren't you coming along? (negative Yes/No question)" },
          { de: "Sprichst du Deutsch?", en: "Do you speak German?" },
          { de: "Sprichst du kein Deutsch?", en: "Don't you speak any German? (kein + indefinite noun)" },
          { de: "Wer bist du?", en: "Who are you?" },
          { de: "Was machst du?", en: "What are you doing?" },
          { de: "Was machst du nicht?", en: "What aren't you doing? (negative W-question)" },
          { de: "Wo wohnst du?", en: "Where do you live?" },
          { de: "Wann beginnt der Film?", en: "When does the film start?" },
          { de: "Warum lernst du Deutsch nicht?", en: "Why aren't you learning German? (nicht stacked onto a warum-question)" },
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
          "In English you basically have one all-purpose way to say \u201cnot\u201d: you don't understand, you have no money, that's not right — always the same little word doing the job. German splits that one job between TWO different words, nicht and kein, and picking the right one is really just about answering one question: \u201cAm I saying no to a noun that would normally have a/an in front of it, or am I saying no to something else?\u201d",
          "Use \u201ckein\u201d (or its endings keine, keinen, keinem...) only when you're negating a noun that either has \u201cein/eine\u201d (a/an) in front of it, or no article at all. Think of \u201ckein\u201d as swallowing the \u201cein\u201d whole and turning it into its opposite: \u201cein Auto\u201d (a car) → \u201ckein Auto\u201d (no car / not a car). It's the word you reach for when the English sentence would use \u201ca\u201d, \u201can\u201d, \u201csome\u201d, or \u201cany\u201d.",
          "Use \u201cnicht\u201d for absolutely everything else: negating a verb (I am not coming), an adjective (it's not big), an adverb (not often), or a noun that already has a definite article like der/die/das (not THIS book, specifically). A simple test that works almost every time: could you put \u201ca/an/some\u201d in front of the English noun you're negating? If yes, reach for kein. If no — because it's a verb, an adjective, or a specific/definite thing — reach for nicht.",
          "Where does nicht actually go in the sentence? As a general rule of thumb for beginners: if you're negating the WHOLE action (the entire idea of the sentence), nicht tends to land at the very end, after everything else — \u201cIch verstehe das nicht\u201d (I don't understand that). But if nicht is negating one specific word right next to it — an adjective, an adverb, or a definite noun — it jumps in directly before that word instead: \u201cDas ist nicht groß\u201d (That is not big), \u201cIch komme nicht heute\u201d (I'm not coming today, though maybe another day). It feels fuzzy at first, but it becomes natural with practice — for now, defaulting to \u201cnicht near the end\u201d is a safe starting point."
        ],
        tables: [
          {
            caption: "nicht vs. kein",
            headers: ["Word", "Used to negate", "Example"],
            rows: [
              ["nicht", "verbs, adjectives, adverbs, definite nouns", "Ich komme nicht. (I'm not coming.)"],
              ["kein / keine", "indefinite nouns (a/an) or nouns with no article", "Ich habe kein Auto. (I don't have a car.)"]
            ]
          },
          {
            caption: "Negation inside questions",
            headers: ["Type of question", "How to negate it", "Example"],
            rows: [
              ["Yes/No question", "keep verb-first order, add nicht/kein near the end", "Kommst du nicht mit? (Aren't you coming along?)"],
              ["W-question", "keep W-word + verb + subject order, add nicht/kein afterward", "Warum verstehst du das nicht? (Why don't you understand that?)"]
            ]
          }
        ],
        tip: "\u201cKein\u201d kills the article, \u201cnicht\u201d kills everything else. Quick test: if you could put \u201ca/an\u201d or \u201csome\u201d in front of the English noun, use kein(e). Otherwise (for verbs, adjectives, or specific/definite things), use nicht. And in questions, negation doesn't change the question's word order at all — you build the question exactly as usual, then simply add nicht or kein, the same way you would in a statement. A very common everyday pattern combines all of this: someone guesses wrong, you say \u201cNein, das ist kein/keine...\u201d, and then correct them with the real answer.",
        examples: [
          { de: "Ich verstehe das nicht.", en: "I don't understand that." },
          { de: "Das ist nicht richtig.", en: "That is not correct." },
          { de: "Ich habe keine Zeit.", en: "I don't have time." },
          { de: "Er hat kein Geld.", en: "He has no money." },
          { de: "Wir sind nicht müde.", en: "We are not tired." },
          { de: "Sie trinkt keinen Kaffee.", en: "She doesn't drink coffee." },
          { de: "Ich mag das nicht.", en: "I don't like that." },
          { de: "Das ist kein Problem.", en: "That is not a problem." },
          { de: "Kommst du heute nicht?", en: "Aren't you coming today? (negative question)" },
          { de: "Hast du kein Auto?", en: "Don't you have a car? (negative question with kein)" },
          { de: "Warum isst du das nicht?", en: "Why aren't you eating that? (negative W-question)" },
          { de: "Ist das ein Auto? — Nein, das ist kein Auto. Das ist ein Buch.", en: "Is that a car? — No, that's not a car. That's a book." },
          { de: "Ist das eine Katze? — Nein, das ist keine Katze. Das ist ein Hund.", en: "Is that a cat? — No, that's not a cat. That's a dog." },
          { de: "Ist das eine Kirche? — Nein, das ist keine Kirche. Das ist ein Bahnhof.", en: "Is that a church? — No, that's not a church. That's a train station." },
          { de: "Ist das ein Restaurant? — Nein, das ist kein Restaurant. Das ist ein Hotel.", en: "Is that a restaurant? — No, that's not a restaurant. That's a hotel." }
        ]
      },
      {
        number: "07",
        id: "akkusativ",
        en: "Akkusativ (Accusative Case)",
        de: "Akkusativ",
        intro: [
          "In English, word order tells you who's doing what: \u201cThe dog bites the man\u201d means something very different from \u201cThe man bites the dog\u201d, even though the words are the same. German has a second trick for showing this on top of word order: it changes the little article word (der/die/das/ein...) depending on whether a noun is the one DOING the action (the subject) or the one RECEIVING the action (the object). The Akkusativ case is the label for \u201cI am the thing this action happens to.\u201d",
          "The good news for beginners: only the masculine article actually changes shape. \u201cDer\u201d becomes \u201cden\u201d, and \u201cein\u201d becomes \u201ceinen\u201d, whenever a masculine noun is the object instead of the subject. Feminine (die/eine), neuter (das/ein), and plural (die) nouns don't change at all between subject and object — so really, there's just one small pattern to remember."
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
          },
          {
            caption: "der / ein / kein — the full pattern in one sentence",
            headers: ["Statement (Nominativ)", "der → den", "ein → einen", "kein → keinen"],
            rows: [
              ["Der Apfel ist süß.", "Ich kaufe den Apfel.", "Ich kaufe einen Apfel.", "Ich kaufe keinen Apfel."],
              ["Das Brot ist lecker.", "Ich esse das Brot. (no change)", "Ich esse ein Brot.", "Ich esse kein Brot."]
            ]
          }
        ],
        tip: "To find the Akkusativ object, ask \u201cwen?\u201d (whom?) or \u201cwas?\u201d (what?) after the verb: \u201cIch sehe den Mann\u201d → \u201cWen sehe ich?\u201d → \u201cden Mann.\u201d Remember: only masculine der/ein change (to den/einen) — everything else stays the same. A handful of very common verbs almost always come with an Akkusativ object, so it's worth learning them as a group: machen, haben, kaufen, kochen, nehmen, brauchen, essen, trinken.",
        examples: [
          { de: "Ich sehe den Mann.", en: "I see the man. (der → den)" },
          { de: "Ich kaufe einen Apfel.", en: "I am buying an apple. (ein → einen)" },
          { de: "Sie liest die Zeitung.", en: "She reads the newspaper. (die stays die)" },
          { de: "Wir haben das Buch.", en: "We have the book. (das stays das)" },
          { de: "Ich trinke einen Kaffee.", en: "I drink a coffee." },
          { de: "Er isst den Kuchen.", en: "He eats the cake." },
          { de: "Ich suche eine Wohnung.", en: "I am looking for an apartment." },
          { de: "Kennst du den Lehrer?", en: "Do you know the teacher?" },
          { de: "Wir essen den/einen/keinen Salat.", en: "We eat the/a/no salad. (der Salat, showing all three forms)" },
          { de: "Ich esse den Käse. / Ich esse einen Käse.", en: "I eat the cheese. / I eat a cheese." },
          { de: "Der Hund isst den Keks.", en: "The dog eats the cookie." },
          { de: "Ich esse die Gurke.", en: "I eat the cucumber. (die stays die)" },
          { de: "Ich mache die Marmelade.", en: "I make the jam." },
          { de: "Die Marmelade ist rot. Ich nehme die Marmelade.", en: "The jam is red. I'll take the jam." }
        ]
      },
      {
        number: "08",
        id: "possessives",
        en: "Possessive Articles",
        de: "Possessivartikel (mein, dein, sein…)",
        intro: [
          "Possessive articles are the words you use to show that something belongs to someone — my, your, his, her, our. In German they're built from a simple base word (mein-, dein-, sein-, ihr-, unser-, euer-) and then they borrow the exact same set of endings as \u201cein\u201d does, which is why grammar books call them \u201cein-words\u201d. If you already learned how \u201cein/eine/einen\u201d change with gender and case, you already know how \u201cmein/meine/meinen\u201d work too — just swap the front part."
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
        tip: "Notice that \u201cmein\u201d has NO ending before a masculine or neuter noun (mein Buch, mein Bruder) but adds \u201c-e\u201d before a feminine or plural noun (meine Schwester, meine Kinder) — exactly the pattern \u201cein\u201d already follows. The whole family of possessives lines up one-to-one with the pronoun that owns the thing: ich→mein, du→dein, er→sein, sie→ihr, wir→unser, ihr→euer, Sie→Ihr.",
        examples: [
          { de: "Das ist mein Bruder.", en: "That is my brother." },
          { de: "Wo ist deine Tasche?", en: "Where is your bag?" },
          { de: "Das ist ihre Katze.", en: "That is her cat." },
          { de: "Ich bin Max. Das ist mein Buch. Das ist meine Flasche.", en: "I'm Max. That's my book. That's my bottle. (das Buch/neuter, die Flasche/feminine)" },
          { de: "Du bist Anna. Das ist dein Fahrrad. Das sind deine Bücher.", en: "You're Anna. That's your bike. Those are your books." },
          { de: "Er ist Luca. Das ist sein Hund. Das sind seine Autos.", en: "He's Luca. That's his dog. Those are his cars." },
          { de: "Sie ist Anna. Das ist ihr Auto. Das ist ihre Tasche.", en: "She's Anna. That's her car. That's her bag." },
          { de: "Wir sind Studenten. Das ist unsere Schule.", en: "We're students. That's our school." },
          { de: "Ihr seid meine Kinder. Das ist euer Zimmer.", en: "You all are my children. That's your room." },
          { de: "Sie sind mein Chef. Das ist Ihr Handy.", en: "You are my boss. That's your phone. (formal Ihr)" },
          { de: "Wie ist deine Handynummer? / Wie ist Ihre Handynummer?", en: "What's your phone number? (informal / formal)" }
        ]
      },
      {
        number: "09",
        id: "modal-verbs",
        en: "Modal Verbs",
        de: "Modalverben (können, müssen, wollen, möchten…)",
        intro: [
          "Modal verbs are little \u201chelper\u201d verbs that don't describe an action by themselves — instead, they describe your relationship to an action: whether you CAN do it (können), MUST do it (müssen), WANT to do it (wollen), WOULD LIKE to do it (möchten), are ALLOWED to do it (dürfen), or SHOULD do it (sollen). They always team up with a second, real action verb to complete the thought.",
          "Here's the pattern that makes German feel like it has \u201cbackwards\u201d sentences at first: the modal verb takes the normal conjugated spot (position two, just like any other verb), but the actual action verb gets demoted to its plain, unconjugated infinitive form and gets sent all the way to the very end of the sentence. So \u201cIch kann schwimmen\u201d literally lines up as \u201cI / can / ...(more info)... / swim\u201d — you have to wait until the last word to find out what the action actually is, which takes some getting used to but becomes second nature quickly."
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
          },
          {
            caption: "sollen and dürfen conjugated",
            headers: ["Pronoun", "sollen (should)", "dürfen (may/allowed to)"],
            rows: [
              ["ich", "soll", "darf"],
              ["du", "sollst", "darfst"],
              ["er/es/sie", "soll", "darf"],
              ["wir", "sollen", "dürfen"],
              ["ihr", "sollt", "dürft"],
              ["Sie/sie", "sollen", "dürfen"]
            ]
          },
          {
            caption: "möchten conjugated (the polite way to say \u2018would like\u2019)",
            headers: ["Pronoun", "möchten"],
            rows: [
              ["ich", "möchte"],
              ["du", "möchtest"],
              ["er/sie/es", "möchte"],
              ["wir", "möchten"],
              ["ihr", "möchtet"],
              ["Sie/sie", "möchten"]
            ]
          }
        ],
        tip: "\u2018dürfen\u2019 in the negative (\u2018darf nicht\u2019) is how German says something is NOT ALLOWED, which is stronger than just saying you don't want to: \u2018Ich darf nicht im Klassenzimmer essen\u2019 (I'm not allowed to eat in the classroom) is a rule, not a preference. \u2018sollen\u2019 is softer than \u2018müssen\u2019 — it's more like \u2018I'm supposed to\u2019 or advice, while \u2018müssen\u2019 is a hard requirement. \u2018möchten\u2019 is really just a politer version of \u2018wollen\u2019 — \u2018Ich möchte einen Kaffee\u2019 sounds nicer than the blunter \u2018Ich will einen Kaffee\u2019, the same way English \u2018I would like\u2019 sounds nicer than \u2018I want\u2019.",
        examples: [
          { de: "Ich kann gut schwimmen.", en: "I can swim well." },
          { de: "Du musst jetzt gehen.", en: "You have to go now." },
          { de: "Wir möchten Pizza essen.", en: "We would like to eat pizza." },
          { de: "Ich soll jeden Tag die Hausaufgabe machen.", en: "I'm supposed to do homework every day." },
          { de: "Ich darf nicht im Klassenzimmer essen.", en: "I'm not allowed to eat in the classroom." },
          { de: "Du darfst heute ins Kino gehen.", en: "You're allowed to go to the cinema today." },
          { de: "Ich kann Deutsch lernen. Ich will Deutsch lernen. Ich muss Deutsch lernen.", en: "I can learn German. I want to learn German. I must learn German. (same sentence, three different modals)" },
          { de: "Ich möchte einen Apfelsaft.", en: "I would like an apple juice." },
          { de: "Du musst Tee trinken. Du darfst nicht rausgehen.", en: "You have to drink tea. You're not allowed to go outside. (doctor's orders — sollen/dürfen in real use)" },
          { de: "Du sollst nicht so viel arbeiten.", en: "You shouldn't work so much." }
        ]
      },
      {
        number: "10",
        id: "separable-verbs",
        en: "Separable Verbs",
        de: "Trennbare Verben",
        intro: [
          "Some German verbs are actually two pieces stuck together in the dictionary: a small prefix glued onto a base verb, like \u201caufstehen\u201d (auf + stehen, literally \u201cup-stand\u201d, meaning \u201cto get up\u201d). When you actually use one of these verbs in a normal present-tense sentence, the two pieces come apart — the base verb stays in its usual verb-second spot and gets conjugated as normal, while the little prefix breaks off and floats all the way to the end of the sentence, like a boomerang that gets thrown but lands later.",
          "So \u201cIch stehe auf\u201d (I get up) is really \u201cIch stehe ... auf\u201d — \u201csteh(e)\u201d is the conjugated piece in position two, and \u201cauf\u201d is the separated prefix waiting patiently at the end. You only see the verb written as one whole word (aufstehen) in its dictionary/infinitive form, or later at the end of a longer sentence with a modal verb.",
          "And that last point matters: when a separable verb teams up with a modal verb (Topic 9), the prefix doesn't get a chance to separate at all — the WHOLE verb, prefix and all, gets glued back together and sent to the end as one infinitive, exactly like any other verb would with a modal. So \u201cDu musst aufstehen\u201d (You have to get up) keeps \u201caufstehen\u201d as one solid word at the end, unlike the plain present tense \u201cDu stehst auf\u201d where it splits."
        ],
        tables: [
          {
            caption: "Common separable verbs",
            headers: ["Verb", "Meaning"],
            rows: [
              ["einladen", "to invite"],
              ["abholen", "to pick up (a person)"],
              ["anrufen", "to call (phone)"],
              ["anfangen", "to begin"],
              ["mitkommen", "to come along"],
              ["mitbringen", "to bring along"],
              ["mitmachen", "to join in"],
              ["einsammeln", "to collect/gather"],
              ["aufstehen", "to get up"],
              ["vorstellen", "to introduce"]
            ]
          }
        ],
        tip: "To spot a separable verb in the dictionary, look for a short, meaningful prefix stuck to the front: auf-, an-, ab-, mit-, vor-, ein-, aus-, zu-. Most of these prefixes are also stand-alone words you already know (auf = on/up, an = at/on, mit = with), which is a handy way to remember roughly what they add to the meaning of the base verb.",
        examples: [
          { de: "Ich stehe um 7 Uhr auf.", en: "I get up at 7 o'clock." },
          { de: "Sie ruft mich an.", en: "She calls me." },
          { de: "Wir machen das Fenster zu.", en: "We close the window." },
          { de: "Ich lade meine Freunde ein.", en: "I invite my friends." },
          { de: "Der Unterricht fängt um 18 Uhr an.", en: "The lesson starts at 6pm." },
          { de: "Ich will meine Freunde einladen.", en: "I want to invite my friends. (whole word glued together with a modal verb)" },
          { de: "Du musst um 8 Uhr aufstehen.", en: "You have to get up at 8 o'clock. (aufstehen stays together with müssen)" },
          { de: "Entschuldigung, ich kann um 8 Uhr nicht aufstehen.", en: "Sorry, I can't get up at 8 o'clock." }
        ]
      },
      {
        number: "11",
        id: "prepositions",
        en: "Prepositions",
        de: "Präpositionen",
        intro: [
          "A preposition is a small connector word like \u201cfor\u201d, \u201cwith\u201d, or \u201cwithout\u201d that links a noun into the rest of the sentence. The tricky part in German is that certain prepositions always force the noun that follows them into a particular case, no matter what — you don't get to choose, the preposition decides for you. Some prepositions always demand the Akkusativ case (für, durch, ohne, gegen, um), and a different set always demand the Dativ case (mit, nach, bei, seit, von, zu, aus). Since there's no logical reason WHY a given preposition picks one case over the other, the easiest approach is simply to memorize each preposition together with its case, the same way you memorize a noun together with its article."
        ],
        tables: [
          {
            caption: "Dativ prepositions and their contractions",
            headers: ["Preposition", "Meaning", "Contraction", "Example"],
            rows: [
              ["aus", "from/out of", "\u2014", "Ich komme aus der Bank."],
              ["bei", "at/near", "bei + dem = beim", "Ich bin beim Arzt."],
              ["mit", "with", "\u2014", "Ich gehe mit dem Auto."],
              ["nach", "after/to", "\u2014", "Ich esse Pizza nach dem Unterricht."],
              ["seit", "since/for (time)", "\u2014", "Ich lerne Deutsch seit einem Monat."],
              ["von", "from/of", "von + dem = vom", "Ich komme vom Arzt."],
              ["zu", "to", "zu + der = zur, zu + dem = zum", "Ich gehe zur Schule. / Ich gehe zum Arzt."]
            ]
          }
        ],
        tip: "German loves to squash a preposition and its following \u2018dem/der\u2019 into one shorter word when they'd otherwise be said constantly — zu+dem becomes zum, zu+der becomes zur, bei+dem becomes beim, von+dem becomes vom. You'll hear the contracted forms far more often than the two separate words, so it's worth learning them as their own vocabulary items.",
        examples: [
          { de: "Das Geschenk ist für dich.", en: "The gift is for you. (Akkusativ)" },
          { de: "Ich fahre mit dem Bus.", en: "I travel by bus. (Dativ)" },
          { de: "Wir gehen ohne ihn.", en: "We are going without him. (Akkusativ)" },
          { de: "Ich gehe zum Arzt.", en: "I'm going to the doctor. (zu + dem = zum)" },
          { de: "Ich komme vom Supermarkt.", en: "I'm coming from the supermarket. (von + dem = vom)" }
        ]
      },
      {
        number: "12",
        id: "numbers-time",
        en: "Numbers",
        de: "Zahlen",
        intro: [
          "Numbers are some of the most useful words you'll ever learn in German, because they show up everywhere in daily life: reading a price tag, giving someone your phone number, agreeing on how many of something you need, or reading an address. Once you know 0 through 12 by heart, the rest builds fairly logically, similar to how English counts \u201cthirteen, fourteen, fifteen\u201d by combining smaller pieces — German just glues its pieces together slightly differently, and often in REVERSE order for two-digit numbers: \u201ceinundzwanzig\u201d (21) is literally \u201cone-and-twenty\u201d, said one-digit-first the way English never does.",
          "For big numbers — hundreds, thousands, millions — German just keeps gluing everything into one long compound word instead of using spaces like English: 2,323 isn't written or said as separate chunks, it becomes one solid word, \u201czweitausenddreihundertdreiundzwanzig\u201d (two-thousand-three-hundred-three-and-twenty). It looks intimidating on the page, but if you can already say each piece — zwei, tausend, drei, hundert, dreiundzwanzig — you can build the whole thing; German just removes the spaces English would use."
        ],
        tables: [
          {
            caption: "Numbers 0–20",
            headers: ["Number", "German"],
            rows: [
              ["0–5", "null, eins, zwei, drei, vier, fünf"],
              ["6–10", "sechs, sieben, acht, neun, zehn"],
              ["11–15", "elf, zwölf, dreizehn, vierzehn, fünfzehn"],
              ["16–20", "sechzehn, siebzehn, achtzehn, neunzehn, zwanzig"]
            ]
          },
          {
            caption: "Tens (note the reversed order: einundzwanzig = 'one-and-twenty')",
            headers: ["Number", "German"],
            rows: [
              ["20 / 30 / 40 / 50", "zwanzig / dreißig / vierzig / fünfzig"],
              ["60 / 70 / 80 / 90", "sechzig / siebzig / achtzig / neunzig"],
              ["21 / 22 / 23", "einundzwanzig / zweiundzwanzig / dreiundzwanzig"],
              ["55 / 76 / 95", "fünfundfünfzig / sechsundsiebzig / fünfundneunzig"]
            ]
          },
          {
            caption: "Hundreds, thousands, and beyond",
            headers: ["Number", "German"],
            rows: [
              ["100 / 200 / 900", "(ein)hundert / zweihundert / neunhundert"],
              ["1.000 / 10.000", "(ein)tausend / zehntausend"],
              ["1.000.000", "eine Million"],
              ["126", "einhundertsechsundzwanzig"],
              ["2.323", "zweitausenddreihundertdreiundzwanzig"],
              ["7.490", "siebentausendvierhundertneunzig"]
            ]
          }
        ],
        tip: "The single trickiest habit to build is reading two-digit numbers RIGHT to LEFT: for 24, say the \u20184\u2019 first (vier-) then \u2018and\u2019 (und) then \u2018twenty\u2019 (zwanzig) — vierundzwanzig. It feels backwards at first coming from English, but it becomes automatic with practice, and every two-digit number (21–99) follows this same pattern without exception.",
        examples: [
          { de: "Ich habe drei Bücher.", en: "I have three books." },
          { de: "Meine Handynummer ist…", en: "My phone number is…" },
          { de: "Das kostet zwanzig Euro.", en: "That costs twenty euros." },
          { de: "einundzwanzig, zweiundzwanzig, dreiundzwanzig", en: "twenty-one, twenty-two, twenty-three" },
          { de: "Ich bin dreiundzwanzig Jahre alt.", en: "I am twenty-three years old." }
        ]
      },
      {
        number: "13",
        id: "plurals",
        en: "Plural Noun Forms",
        de: "Pluralformen",
        intro: [
          "In English, making something plural is almost always the same simple trick: add an \u201c-s\u201d (dog → dogs). German doesn't have one single trick — instead it has several different plural patterns, and which one applies depends on the individual noun rather than a strict rule. A noun's ending might get \u201c-e\u201d added, or \u201c-er\u201d, or \u201c-n\u201d/\u201c-en\u201d, sometimes together with an umlaut change on the main vowel (a→ä, o→ö, u→ü) — and a small number of nouns don't change at all in the plural. Because of this, the safest habit is to learn each noun's plural form at the same time you learn the noun itself, the way you already learn it together with its article."
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
          "Some sentences have not just one, but two objects: think of \u201cI give the man the book.\u201d The book is the thing being given (that's the direct object, in the Akkusativ case you already learned) — but \u201cthe man\u201d is the person RECEIVING it, and that role gets its own special case in German: the Dativ. A good way to spot a Dativ object is to ask yourself \u201cto whom, or for whom, is this happening?\u201d",
          "Unlike the Akkusativ (where only the masculine article changed), the Dativ case changes the article for ALL genders and the plural: der→dem, die→der, das→dem, and die (plural)→den, with an extra \u201c-n\u201d tacked onto the end of most plural nouns themselves. The Dativ also shows up automatically after a fixed group of prepositions you just have to memorize — mit, nach, bei, seit, von, zu, aus — the same way you learned in the Prepositions topic."
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
        tip: "To find the Dativ object, ask \u201cwem?\u201d (to/for whom?). \u201cIch gebe dem Kind einen Apfel\u201d → \u201cWem gebe ich einen Apfel?\u201d → \u201cdem Kind.\u201d Verbs like geben, helfen, danken, and gehören almost always take a Dativ object. And since \u201cin\u201d + a fixed location also takes Dativ (Topic 24's \u201cWo?\u201d rule), everyday shopping-location sentences are a great place to practice it.",
        examples: [
          { de: "Ich gebe dem Mann das Buch.", en: "I give the man the book. (der → dem)" },
          { de: "Sie hilft der Frau.", en: "She helps the woman. (die → der)" },
          { de: "Wir danken dem Kind.", en: "We thank the child. (das → dem)" },
          { de: "Das gehört den Kindern.", en: "That belongs to the children. (plural + -n)" },
          { de: "Ich fahre mit dem Bus.", en: "I travel by bus. (mit + Dativ)" },
          { de: "Wo kaufen Sie Brot? — Ich kaufe Brot in der Bäckerei.", en: "Where do you buy bread? — I buy bread at the bakery. (die Bäckerei → der, Dativ location)" },
          { de: "in der Metzgerei / auf dem Markt / im Supermarkt", en: "at the butcher's / at the market / at the supermarket (all Dativ locations)" }
        ]
      },
      {
        number: "15",
        id: "perfekt",
        en: "Perfekt (Past Tense)",
        de: "Perfekt",
        intro: [
          "When German speakers talk about something that already happened — even something that happened five minutes ago — they usually don't use one single past-tense verb form the way English does with \u201cate\u201d or \u201cwent\u201d. Instead, everyday spoken German reaches for a two-piece construction called the Perfekt: a small helper verb (either haben or sein), conjugated normally in the present tense and sitting in the usual verb-second spot, plus a second piece called the Partizip II (past participle) that gets shipped off to the very end of the sentence — very similar in spirit to how modal verbs push the action verb to the end.",
          "So how do you know whether to use haben or sein as your helper? Most verbs — the large majority — simply use haben, and that's a safe default if you're unsure. A smaller, specific group of verbs use sein instead: mainly verbs about moving from one place to another (gehen \u2013 to go, fahren \u2013 to drive/travel, kommen \u2013 to come) or about changing from one state into another (werden \u2013 to become, sterben \u2013 to die), plus the verb sein itself. Think of sein-verbs as \u201cverbs where something's location or condition changes\u201d — everything else defaults to haben."
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
        tip: "Quick test for haben vs sein: if the verb describes movement from A to B, or a change of state (aufwachen, sterben, werden…), use sein. Otherwise, default to haben. And sein itself is irregular: ich bin gewesen (I have been). \u2018-ieren\u2019 verbs are especially easy since they never take \u2018ge-\u2019 at all — telefonieren, studieren, trainieren, kontrollieren, markieren, fotografieren, inhalieren all just add \u2018-t\u2019 straight onto the stem.",
        examples: [
          { de: "Ich habe Deutsch gelernt.", en: "I have learned German. / I learned German." },
          { de: "Du hast Pizza gegessen.", en: "You ate pizza." },
          { de: "Er ist nach Berlin gefahren.", en: "He drove/traveled to Berlin. (sein)" },
          { de: "Wir sind ins Kino gegangen.", en: "We went to the cinema. (sein)" },
          { de: "Sie hat in Spanien studiert.", en: "She studied in Spain. (-ieren, no ge-)" },
          { de: "Ich bin um 7 Uhr aufgestanden.", en: "I got up at 7 o'clock. (separable verb)" },
          { de: "Ich habe am Wochenende trainiert.", en: "I trained over the weekend." },
          { de: "Tina hat Statistik gelernt. Daniel hat Fußball gespielt.", en: "Tina studied statistics. Daniel played soccer." },
          { de: "Tina hat in der Bäckerei gearbeitet.", en: "Tina worked at the bakery." },
          { de: "Wann sind Sie nach Berlin gekommen?", en: "When did you come to Berlin? (question in Perfekt — verb still splits: sind...gekommen)" },
          { de: "Wo haben Sie letztes Jahr gearbeitet?", en: "Where did you work last year?" }
        ]
      },
      {
        number: "16",
        id: "imperative",
        en: "Imperative (Commands)",
        de: "Imperativ",
        intro: [
          "The imperative is the \u201cbossy\u201d form of a verb — the one you use to tell someone to do something, whether it's a friendly request (\u201cPass the salt!\u201d) or a firm instruction (\u201cStop!\u201d). Just like with the pronoun \u201cyou\u201d, German has different imperative forms depending on exactly who you're talking to: one for a single person you'd call du, one for a group of people you'd call ihr, and one polite form for anyone you'd address as Sie. In every case, the trick is simple: the verb jumps to the very front of the sentence, ahead of everything else, since there's no need to even say the word \u201cyou\u201d out loud — it's already obvious from context."
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
          },
          {
            caption: "Same command, all three forms",
            headers: ["Sie", "du", "ihr"],
            rows: [
              ["Gehen Sie geradeaus!", "Geh geradeaus!", "Geht geradeaus!"],
              ["Trinken Sie ein Glas Wasser!", "Trink ein Glas Wasser!", "Trinkt ein Glas Wasser!"],
              ["Seien Sie leise! (irregular, from sein)", "Sei leise!", "Seid leise!"]
            ]
          }
        ],
        tip: "Stem-changing e\u2192i/ie verbs (like sehen, nehmen) keep that change in the du-form imperative but drop the usual -e: Sieh! (not Siehe!), Nimm! (not Nehme!). The Sie-form is always the most polite and simply flips infinitive + Sie. \u2018sein\u2019 (to be) is irregular in the imperative too \u2014 Sei/Seid/Seien Sie, not the stem \u2018bin-\u2019.",
        examples: [
          { de: "Komm her!", en: "Come here! (du)" },
          { de: "Setzt euch!", en: "Sit down, everyone! (ihr)" },
          { de: "Kommen Sie bitte mit!", en: "Please come along. (Sie)" },
          { de: "Sei ruhig!", en: "Be quiet! (du, irregular from sein)" },
          { de: "Öffnen Sie das Fenster.", en: "Open the window. (Sie)" },
          { de: "Hören Sie das Gespräch!", en: "Listen to the conversation!" },
          { de: "Kochen Sie Biryani!", en: "Cook biryani!" },
          { de: "Steh auf!", en: "Get up! (du, separable verb — prefix stays attached)" }
        ]
      },
      {
        number: "17",
        id: "conjunctions",
        en: "Conjunctions & Word Order",
        de: "Konjunktionen & Wortstellung",
        intro: [
          "A conjunction is a connector word that joins two smaller sentences (clauses) into one bigger sentence — words like \u201cand\u201d, \u201cbut\u201d, or \u201cbecause\u201d. German conjunctions come in two very different families, and telling them apart matters a lot because they affect word order in completely opposite ways.",
          "Coordinating conjunctions — und (and), oder (or), aber (but), denn (because/for) — are the easy, low-stakes family: they just glue two complete, independent sentences together, side by side, and don't disturb the word order of either one at all. The conjugated verb in the second clause stays exactly where it would normally be, in position two.",
          "Subordinating conjunctions — weil (because), dass (that), wenn (if/when), ob (whether) — are the trickier family. The moment you use one of these, the conjugated verb in that clause gets kicked out of its usual second-place spot and marched all the way to the very end of its own clause, after everything else. This is one of the most distinctive quirks of German sentence structure, and it takes practice to say naturally, but the payoff is that you can spot a subordinating conjunction instantly just by noticing the verb has moved to the end."
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
          "English gets away with using \u201cat\u201d, \u201con\u201d, and \u201cin\u201d fairly loosely for time (at 8 o'clock, on Monday, in January), but the choice isn't always obvious to a learner going the other direction. German actually makes this easier once you see the pattern: it uses three specific little words, and each one is tied to a specific TYPE of time word, not just picked at random. \u201cUm\u201d always pairs with a clock time (um 8 Uhr — at 8 o'clock). \u201cAm\u201d always pairs with a day or date (am Montag — on Monday). \u201cIm\u201d always pairs with a month or season (im Januar — in January). Once you know which bucket a time word falls into — exact clock time, day, or month/season — the right little word follows automatically, which is why mixing them up is one of the easiest mistakes to fix once you notice the pattern."
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
          },
          {
            caption: "Talking about meal times (three ways to say the same thing)",
            headers: ["am + noun", "-s ending (adverb)", "zum + meal"],
            rows: [
              ["am Morgen", "morgens", "zum Frühstück"],
              ["am Mittag", "mittags", "zum Mittagessen"],
              ["am Abend", "abends", "zum Abendessen"]
            ]
          }
        ],
        tip: "\u2018Zuerst\u2019 (first) and \u2018dann\u2019 (then) are handy little words for putting several actions in order — and just like any other single-chunk time word, each one can take the very first slot in its sentence, pushing the verb into position two and the subject after it: \u2018Zuerst lerne ich Deutsch. Dann gehe ich ins Kino.\u2019 (First I learn German. Then I go to the cinema.)",
        examples: [
          { de: "Der Kurs beginnt um 8 Uhr.", en: "The course starts at 8 o'clock." },
          { de: "Wir treffen uns am Montag.", en: "We're meeting on Monday." },
          { de: "Ihr Geburtstag ist im Januar.", en: "Her birthday is in January." },
          { de: "Am Wochenende habe ich frei.", en: "I'm off on the weekend." },
          { de: "Im Sommer fahren wir ans Meer.", en: "In summer we go to the seaside." },
          { de: "Ich esse am Morgen Brot mit Milch. / Am Morgen esse ich Brot mit Milch.", en: "I eat bread with milk in the morning. (both orders are correct, verb stays position two)" },
          { de: "Zum Mittagessen esse ich Biryani.", en: "For lunch I eat biryani." },
          { de: "Zuerst lerne ich Deutsch. Dann gehe ich ins Kino.", en: "First I learn German. Then I go to the cinema." },
          { de: "Zuerst muss Anna zur Bank gehen. Dann muss Anna mit dem Chef sprechen.", en: "First Anna has to go to the bank. Then Anna has to talk to the boss." }
        ]
      },
      {
        number: "19",
        id: "alphabet-pronunciation",
        en: "Alphabet & Pronunciation",
        de: "Alphabet & Aussprache",
        intro: [
          "The German alphabet uses the same 26 letters as English, so you already know most of it. The only newcomers are three vowels with two little dots on top \u2014 ä, ö, ü, called umlauts \u2014 and one special letter that looks like a fancy B: ß (called \u201cEszett\u201d), which is just a shortcut for writing \u201css\u201d. None of these are scary: an umlaut just means \u201cround your mouth into a different shape while making that vowel sound\u201d, and ß simply sounds exactly like ss.",
          "Beyond individual letters, German has a handful of letter TEAMS \u2014 two or three letters that always work together to make one single sound, the same way English \u201csh\u201d in \u201cship\u201d isn't pronounced as \u201cs\u201d + \u201ch\u201d separately. Once you recognize a team like \u201csch\u201d or \u201cch\u201d or \u201cei\u201d on sight, you stop sounding out letter-by-letter and just say the team's one sound \u2014 which is exactly how native speakers read, too."
        ],
        tables: [
          {
            caption: "The three umlauts and ß",
            headers: ["Letter", "How to make the sound", "Example"],
            rows: [
              ["ä", "like the \u2018e\u2019 in English \u2018bed\u2019", "Mädchen (girl)"],
              ["ö", "round your lips like you're saying \u2018o\u2019, but say \u2018e\u2019", "schön (beautiful)"],
              ["ü", "round your lips like you're saying \u2018u\u2019, but say \u2018i\u2019", "über (over/about)"],
              ["ß", "always just sounds like \u2018ss\u2019", "Straße (street), groß (big)"]
            ]
          },
          {
            caption: "Common letter teams and how they sound",
            headers: ["Team", "Sounds like", "Example"],
            rows: [
              ["ei", "English \u2018eye\u2019 (the second letter is the loud one)", "mein, heißen, eins"],
              ["ie", "English \u2018ee\u2019 as in \u2018see\u2019 (the second letter is the loud one)", "die, wie, Sie"],
              ["ch (after a, o, u, au)", "a soft, throaty \u2018h\u2019, like clearing your throat gently", "Buch, Nacht, auch"],
              ["ch (after e, i, ö, ü, l, r, or at the start)", "a soft \u2018hy\u2019 hiss, like the start of \u2018huge\u2019", "ich, Milch, Bücher"],
              ["sch", "like English \u2018sh\u2019 in \u2018ship\u2019", "Schule, Englisch"],
              ["tsch", "like English \u2018ch\u2019 in \u2018chips\u2019", "Tschüs, Deutsch"],
              ["au", "like English \u2018ow\u2019 in \u2018cow\u2019", "Auto, Frau, aus"],
              ["eu", "like English \u2018oy\u2019 in \u2018boy\u2019", "Leute, Freund, neu"],
              ["tion", "like English \u2018tsyohn\u2019, stress on the last part", "Information, Lektion"],
              ["-ig (at the end of a word)", "like English \u2018ich\u2019, not a hard \u2018g\u2019", "fertig, zwanzig"],
              ["z", "like English \u2018ts\u2019 in \u2018cats\u2019, never like English \u2018z\u2019", "zu, Zahl, zwanzig"],
              ["s (at the start of a word)", "like English \u2018z\u2019 in \u2018zoo\u2019", "Sofa, Salat, Saft"],
              ["s (at the end of a word)", "like English \u2018s\u2019 in \u2018bus\u2019", "Bus, aus"],
              ["sp / st (at the start of a word)", "sounds like \u2018shp\u2019 / \u2018sht\u2019", "Sport, Start, Straße"],
              ["doubled letters (nn, mm, ss…)", "just makes the vowel before it short — say the consonant once", "Sonne, lassen, kommen"]
            ]
          }
        ],
        tip: "The easiest way to tell \u2018ei\u2019 and \u2018ie\u2019 apart: whichever vowel comes SECOND is the one you actually hear. \u2018ei\u2019 \u2192 you hear the \u2018i\u2019 sound (\u2018eye\u2019). \u2018ie\u2019 \u2192 you hear the \u2018e\u2019 sound stretched long (\u2018ee\u2019). And remember ß is never its own new sound \u2014 it's just a fancy way of writing double-s.",
        examples: [
          { de: "Ä ä, Ö ö, Ü ü, ß", en: "the umlauts and Eszett" },
          { de: "Mein Name ist Klein.", en: "My name is Klein. (ei = 'eye' sound)" },
          { de: "Wie heißen Sie?", en: "What's your name? (ie = 'ee' sound, ß = ss)" },
          { de: "Ich spreche ein bisschen Deutsch.", en: "I speak a little German. (ch, sch, tsch all appear here)" },
          { de: "Die Straße ist groß.", en: "The street is big. (ß = ss in both words)" }
        ]
      },
      {
        number: "20",
        id: "telling-time",
        en: "Telling Time",
        de: "Die Uhrzeit",
        intro: [
          "German actually has two completely different ways to tell time, and you'll hear both, so it's worth knowing them separately rather than mixing them up. The first is the \u201cofficial\u201d style \u2014 the one used on train timetables, TV schedules, and official invitations. It's wonderfully simple: you just say the hour as a number from 0 to 23 (like a 24-hour clock), followed by \u201cUhr\u201d, followed by the minutes as a plain number. 14:30 is simply \u201cvierzehn Uhr dreißig\u201d \u2014 no tricks, just numbers in order.",
          "The second style is the \u201cinformal\u201d one people actually use when chatting \u2014 similar to how English speakers say \u201chalf past three\u201d or \u201cquarter to five\u201d instead of \u201c15:45\u201d. German uses viertel (quarter), halb (half), vor (before/to), and nach (after/past) to build these. The one big trap for beginners: \u201chalb\u201d in German always points FORWARD to the next hour, not backward to the current one. So \u201chalb neun\u201d isn't \u201chalf past nine\u201d \u2014 it's \u201chalfway TO nine\u201d, meaning 8:30. This trips up almost every learner at first, so it's worth slowing down on."
        ],
        tables: [
          {
            caption: "Official time (24-hour, used for schedules)",
            headers: ["Clock", "German"],
            rows: [
              ["3:00", "Es ist drei Uhr."],
              ["11:00", "Es ist elf Uhr."],
              ["14:30", "Es ist vierzehn Uhr dreißig."],
              ["18:17", "Es ist achtzehn Uhr siebzehn."],
              ["23:45", "Es ist dreiundzwanzig Uhr fünfundvierzig."],
              ["00:15", "Es ist null Uhr fünfzehn."]
            ]
          },
          {
            caption: "Informal, spoken time",
            headers: ["Pattern", "Meaning", "Example"],
            rows: [
              ["viertel nach + hour", "quarter past", "12:15 = viertel nach zwölf"],
              ["halb + NEXT hour", "half past (halfway to the next hour!)", "8:30 = halb neun (not halb acht)"],
              ["viertel vor + NEXT hour", "quarter to", "8:45 = viertel vor neun"],
              ["fünf nach halb + NEXT hour", "5 past half — i.e. 12:35 style times", "12:35 = fünf nach halb eins"],
              ["fünf vor halb + NEXT hour", "5 to half — i.e. 2:25 style times", "2:25 = fünf vor halb drei"]
            ]
          }
        ],
        tip: "Ask \u2018Wie spät ist es?\u2019 or \u2018Wie viel Uhr ist es?\u2019 to ask what time it is \u2014 both mean the same thing. If you're ever unsure which style to use, the official 24-hour style is always safe and never ambiguous, even in casual conversation \u2014 it just sounds a touch more formal.",
        examples: [
          { de: "Wie spät ist es?", en: "What time is it?" },
          { de: "Es ist drei Uhr.", en: "It's three o'clock." },
          { de: "Es ist halb neun.", en: "It's 8:30. (halfway to nine, NOT half past nine)" },
          { de: "Es ist viertel nach zwölf.", en: "It's 12:15." },
          { de: "Es ist viertel vor neun.", en: "It's 8:45." },
          { de: "Der Kurs beginnt um vierzehn Uhr dreißig.", en: "The course starts at 14:30." }
        ]
      },
      {
        number: "21",
        id: "ordinal-dates",
        en: "Ordinal Numbers & Dates",
        de: "Ordnungszahlen & das Datum",
        intro: [
          "An ordinal number is the \u201cranking\u201d version of a number \u2014 not \u201cthree\u201d but \u201cthird\u201d, not \u201cten\u201d but \u201ctenth\u201d. German builds these by adding an ending onto the regular number: \u201c-ten\u201d for numbers 1 through 19, and \u201c-sten\u201d for 20 and above. A handful of small numbers are irregular and don't quite follow the pattern \u2014 ersten (1st), dritten (3rd), siebten (7th), and achten (8th) \u2014 so those are worth memorizing individually, the same way English has \u201cfirst\u201d and \u201cthird\u201d instead of \u201conneth\u201d and \u201cthreeth\u201d.",
          "Dates use these ordinal numbers together with the little word \u201cam\u201d (on): to say \u201con the 15th of April\u201d, German says \u201cam fünfzehnten April\u201d \u2014 literally \u201con the fifteenth April\u201d, no \u201cof\u201d needed. You'll see this constantly when talking about birthdays, appointments, or any date on the calendar."
        ],
        tables: [
          {
            caption: "Building ordinal numbers",
            headers: ["Number", "Ordinal", "Pattern"],
            rows: [
              ["1", "ersten", "irregular"],
              ["3", "dritten", "irregular"],
              ["4", "vierten", "regular: number + -ten"],
              ["7", "siebten", "irregular"],
              ["8", "achten", "irregular"],
              ["10", "zehnten", "regular: number + -ten"],
              ["19", "neunzehnten", "regular: number + -ten (last one before the switch)"],
              ["20", "zwanzigsten", "regular: number + -sten (20 and up)"],
              ["21", "einundzwanzigsten", "regular: number + -sten"],
              ["31", "einunddreißigsten", "regular: number + -sten"]
            ]
          }
        ],
        tip: "The switch point to remember: 1\u201319 take \u2018-ten\u2019, but 20 and everything above takes \u2018-sten\u2019 instead. To ask someone's birthday, say \u2018Wann haben Sie Geburtstag?\u2019 (formal) or \u2018Wann hast du Geburtstag?\u2019 (informal) \u2014 the answer always starts with \u2018am\u2019.",
        examples: [
          { de: "Wann haben Sie Geburtstag?", en: "When is your birthday? (formal)" },
          { de: "Ich habe am fünfzehnten April Geburtstag.", en: "My birthday is on April 15th." },
          { de: "Der Kurs beginnt am ersten Mai.", en: "The course starts on May 1st." },
          { de: "Wir treffen uns am zweiundzwanzigsten Mai.", en: "We're meeting on May 22nd." },
          { de: "Ihr Geburtstag ist am dritten September.", en: "Her birthday is on September 3rd." }
        ]
      },
      {
        number: "22",
        id: "family-professions",
        en: "Family, Marital Status & Professions",
        de: "Familie, Familienstand & Berufe",
        intro: [
          "Talking about your family in German mostly means learning a set of vocabulary words \u2014 there's no tricky grammar rule here, just names for relatives, most of which come in matching \u201cmale/female\u201d pairs like der Bruder (brother) / die Schwester (sister), or der Sohn (son) / die Tochter (daughter). A few words, like das Baby, don't split by gender at all.",
          "Professions follow a very handy pattern worth learning early: the male version of a job title is the plain word (der Lehrer \u2014 male teacher), and you almost always make the female version by simply adding \u201c-in\u201d onto the end (die Lehrerin \u2014 female teacher). This same \u201c-in\u201d trick works for the vast majority of German professions, so once you spot it you can guess the female form of almost any job word you learn."
        ],
        tables: [
          {
            caption: "Family members",
            headers: ["Category", "German"],
            rows: [
              ["Grandparents", "die Großeltern: der Großvater/der Opa, die Großmutter/die Oma"],
              ["Parents", "die Eltern: der Vater, die Mutter, der Onkel, die Tante"],
              ["Siblings & cousins", "die Geschwister: der Bruder, die Schwester, der Cousin, die Cousine"],
              ["Spouses", "die Ehepartner: der Ehemann, die Ehefrau"],
              ["Children", "die Kinder: der Sohn, die Tochter, der Junge, das Mädchen, das Baby"],
              ["Grandchildren", "der Enkel, die Enkelin"]
            ]
          },
          {
            caption: "Marital status (ledig, verheiratet…)",
            headers: ["German", "English"],
            rows: [
              ["ledig", "single"],
              ["verlobt", "engaged"],
              ["verheiratet", "married"],
              ["geschieden", "divorced"],
              ["verwitwet", "widowed"]
            ]
          },
          {
            caption: "Professions — male vs female form",
            headers: ["Male (der...)", "Female (die...-in)"],
            rows: [
              ["der Lehrer (teacher)", "die Lehrerin"],
              ["der Student (student)", "die Studentin"],
              ["der Informatiker (IT specialist)", "die Informatikerin"]
            ]
          }
        ],
        tip: "\u2018Was sind Sie von Beruf?\u2019 or \u2018Was bist du von Beruf?\u2019 asks what someone's job is; answer with \u2018Ich bin Lehrer/Lehrerin\u2019 (no article needed before the job name, unlike English \u2018I am A teacher\u2019). \u2018Die Hausfrau\u2019 (housewife) is a common answer too. To ask about someone's work schedule, use \u2018Wann arbeiten Sie?\u2019 \u2192 \u2018Ich arbeite von Montag bis Freitag.\u2019, and \u2018Wann haben Sie frei?\u2019 \u2192 \u2018Ich habe am Wochenende frei.\u2019",
        examples: [
          { de: "Das ist mein Bruder. Er ist ledig.", en: "That's my brother. He's single." },
          { de: "Meine Tante ist geschieden.", en: "My aunt is divorced." },
          { de: "Was sind Sie von Beruf?", en: "What is your profession?" },
          { de: "Ich bin Lehrerin.", en: "I am a teacher. (female)" },
          { de: "Ich arbeite von Montag bis Freitag.", en: "I work from Monday to Friday." },
          { de: "Ich habe am Wochenende frei.", en: "I'm off on the weekend." }
        ]
      },
      {
        number: "23",
        id: "accusative-pronouns",
        en: "Personal Pronouns in the Akkusativ",
        de: "Personalpronomen im Akkusativ",
        intro: [
          "You already know that English pronouns change shape depending on their job in the sentence: \u201cI see him\u201d, not \u201cI see he\u201d. German pronouns do exactly the same thing, and the Akkusativ topic you already learned is precisely why: when a pronoun is the object receiving the action (or following certain prepositions like für), it switches from its normal subject form into a special object form.",
          "The good news is you only need to learn one short list, and most of the pronouns barely change at all \u2014 es, sie, and Sie stay identical. The main ones actually worth memorizing are ich\u2192mich, du\u2192dich, er\u2192ihn, wir\u2192uns, and ihr\u2192euch. This list becomes especially useful with the preposition für (for), which always takes the Akkusativ: \u201cThe pizza is for me\u201d is \u201cDie Pizza ist für mich\u201d, never \u201cfür ich\u201d."
        ],
        tables: [
          {
            caption: "Nominative vs Akkusativ pronouns",
            headers: ["Nominativ (subject)", "Akkusativ (object)", "Example with für"],
            rows: [
              ["ich", "mich", "Die Pizza ist für mich."],
              ["du", "dich", "Das Wasser ist für dich."],
              ["er", "ihn", "Das Handy ist für ihn."],
              ["es", "es", "\u2014"],
              ["sie (she)", "sie", "Der Salat ist für sie."],
              ["wir", "uns", "Der Kuchen ist für uns."],
              ["ihr", "euch", "Die Bücher sind für euch."],
              ["Sie (formal)", "Sie", "Die Cola ist für Sie."],
              ["sie (they)", "sie", "\u2014"]
            ]
          }
        ],
        tip: "Ask \u2018Für wen?\u2019 (for whom?) to find the Akkusativ pronoun you need, the same way you'd ask \u2018wen/was?\u2019 for an Akkusativ noun. Notice this is the exact same list of endings you'd use with kein/den/einen from the earlier Akkusativ topic — nothing new to learn structurally, just a different set of words wearing the same \u2018object\u2019 costume.",
        examples: [
          { de: "Ich bringe einen Kuchen für dich.", en: "I'm bringing a cake for you." },
          { de: "Ich lade dich ein.", en: "I'm inviting you." },
          { de: "Ich lade meinen Freund ein.", en: "I'm inviting my friend." },
          { de: "Für wen ist die Pizza?", en: "Who is the pizza for?" },
          { de: "Die Pizza ist für uns.", en: "The pizza is for us." }
        ]
      },
      {
        number: "24",
        id: "wechselpraepositionen",
        en: "Wohin vs. Wo — Two-Way Prepositions",
        de: "Wechselpräpositionen: Wohin? / Wo?",
        intro: [
          "A small group of German prepositions \u2014 including \u201cin\u201d (in/into) \u2014 are shape-shifters: they can trigger EITHER the Akkusativ or the Dativ case, and which one applies depends entirely on the question being answered. If the sentence describes MOVEMENT toward or into a place \u2014 answering \u201cWohin?\u201d (to where?) \u2014 you use the Akkusativ. If the sentence describes something simply BEING in a location, with no movement \u2014 answering \u201cWo?\u201d (where?) \u2014 you use the Dativ instead.",
          "A helpful way to picture it: Akkusativ is for the journey, Dativ is for the resting place. \u201cIch stelle den Computer ins Arbeitszimmer\u201d (I'm putting the computer INTO the office) describes an action moving the computer somewhere new, so it's Akkusativ (ins = in + das). But \u201cDer Computer steht im Arbeitszimmer\u201d (The computer IS in the office) just describes where it already sits, so it's Dativ (im = in + dem)."
        ],
        tables: [
          {
            caption: "Wohin? (movement → Akkusativ) vs Wo? (location → Dativ)",
            headers: ["Question", "Case", "Example"],
            rows: [
              ["Wohin? (to where)", "Akkusativ", "Ich stelle den Computer ins Arbeitszimmer. (in + das = ins)"],
              ["Wo? (where)", "Dativ", "Der Computer ist im Arbeitszimmer. (in + dem = im)"],
              ["Wohin?", "Akkusativ", "Ich stelle das Buch auf den Tisch."],
              ["Wo?", "Dativ", "Das Buch ist auf dem Tisch."],
              ["Wohin?", "Akkusativ", "Ich parke das Auto vor die Wohnung."],
              ["Wo?", "Dativ", "Das Auto steht vor der Wohnung."]
            ]
          }
        ],
        tip: "Quick test: can you picture something actually traveling from point A to point B in the sentence? If yes \u2014 an object being placed, someone walking somewhere \u2014 it's Wohin/Akkusativ. If the sentence is just a snapshot of where something already is, sitting still, it's Wo/Dativ. Watch for the contractions: in+das=ins, in+dem=im \u2014 they're easy to miss but very common in speech.",
        examples: [
          { de: "Wohin stelle ich den Computer?", en: "Where should I put the computer? (asking about movement)" },
          { de: "Carla will den Fernseher ins Schlafzimmer stellen.", en: "Carla wants to put the TV in the bedroom. (movement)" },
          { de: "Das Bett ist im Schlafzimmer.", en: "The bed is in the bedroom. (location)" },
          { de: "Der Herd steht in der Küche.", en: "The stove is in the kitchen. (location, feminine die Küche → der)" }
        ]
      },
      {
        number: "25",
        id: "hobbies-opinions",
        en: "Hobbies & Saying What You Like",
        de: "Hobbys & Vorlieben",
        intro: [
          "To say you enjoy doing something in German, you don't need a separate verb like English \u201cI like to swim\u201d \u2014 you just take the normal action verb and drop the little word \u201cgern\u201d (gladly/happily) right after it. \u201cIch schwimme\u201d is \u201cI swim\u201d; \u201cIch schwimme gern\u201d is \u201cI like swimming\u201d, literally \u201cI swim gladly\u201d. It's a small addition that does a lot of work.",
          "To ask someone if they enjoy an activity, keep the exact same Yes/No question pattern you already know (verb first) and simply include gern: \u201cSchwimmst du gern?\u201d (Do you like swimming?). There's a set of three go-to answers you'll hear constantly in casual conversation: \u201cJa, sehr gern\u201d (Yes, very much), \u201cNein, nicht so gern\u201d (No, not really), and \u201cEs geht so\u201d (It's okay / so-so) \u2014 handy phrases for talking about food, hobbies, or pretty much any preference."
        ],
        tables: [
          {
            caption: "Asking and answering about likes",
            headers: ["Question", "Possible answers"],
            rows: [
              ["Kochen Sie gern?", "Ja, sehr gern. / Nein, nicht so gern. / Es geht so."],
              ["Gehst du gern ins Kino?", "Ja, sehr gern. / Nein, nicht so gern. / Es geht so."],
              ["Reisen Sie gern?", "Ja, sehr gern. / Nein, nicht so gern."]
            ]
          }
        ],
        tip: "\u2018Mein Hobby ist lesen\u2019 (My hobby is reading) uses the plain infinitive as a noun, while \u2018Meine Hobbys sind Kochen und Schwimmen\u2019 (My hobbies are cooking and swimming) capitalizes them because, remember, any noun in German is capitalized \u2014 even a verb being used as a noun like this.",
        examples: [
          { de: "Ich koche gern.", en: "I like cooking." },
          { de: "Kochen Sie gern?", en: "Do you like cooking? (formal)" },
          { de: "Gehst du gern ins Kino?", en: "Do you like going to the cinema?" },
          { de: "Mein Hobby ist lesen.", en: "My hobby is reading." },
          { de: "Meine Hobbys sind Kochen und Schwimmen.", en: "My hobbies are cooking and swimming." },
          { de: "Schwimmen Sie gern? — Wir schwimmen gern.", en: "Do you like swimming? — We like swimming." },
          { de: "Er schwimmt gern.", en: "He likes swimming." },
          { de: "Gehen wir ins Kino?", en: "Shall we go to the cinema? (a plain Yes/No question: Verb + Subjekt + …)" }
        ]
      },
      {
        number: "26",
        id: "email-writing",
        en: "Writing an Email (Informal & Formal)",
        de: "Eine E-Mail schreiben",
        intro: [
          "Just like in English, German emails open and close differently depending on how well you know the reader \u2014 and unlike English, the choice also lines up with the du/Sie distinction you learned earlier. Writing to a friend, you'd open with \u201cLiebe...\u201d (to a woman) or \u201cLieber...\u201d (to a man), both meaning roughly \u201cDear...\u201d, and sign off with \u201cViele Grüße\u201d (Lots of greetings/Best wishes). Writing to someone formally \u2014 a landlord, a company, someone you'd address as Sie \u2014 you'd instead open with \u201cSehr geehrte Frau...\u201d / \u201cSehr geehrter Herr...\u201d (or \u201cSehr geehrte Damen und Herren\u201d if you don't know the name at all) and close with \u201cMit freundlichen Grüßen\u201d.",
          "A typical short German email, whether informal or formal, tends to follow the same simple shape: a greeting, a sentence hoping the reader is doing well, the actual reason you're writing, any necessary details, and then the closing. Keeping that structure makes emails easy to write even with a fairly small vocabulary."
        ],
        tables: [
          {
            caption: "Greetings and closings",
            headers: ["Style", "Greeting", "Closing"],
            rows: [
              ["Informal (du)", "Liebe Anna, / Lieber Max,", "Viele Grüße"],
              ["Formal, name known (Sie)", "Liebe Frau…, / Lieber Herr…,", "Mit freundlichen Grüßen"],
              ["Formal, name unknown (Sie)", "Sehr geehrte Damen und Herren,", "Mit freundlichen Grüßen"]
            ]
          }
        ],
        tip: "A safe all-purpose opening line for either style is \u2018Ich hoffe, es geht dir/Ihnen gut\u2019 (I hope you're doing well) \u2014 dir for informal, Ihnen for formal. That one sentence alone signals which register you're using before the reader even reaches your main message.",
        examples: [
          { de: "Liebe Mayer, ich hoffe, es geht dir gut. Vielen Dank für die Einladung.", en: "Dear Mayer, I hope you're doing well. Thank you for the invitation. (informal thank-you)" },
          { de: "Es tut mir leid, aber ich kann leider nicht kommen.", en: "I'm sorry, but unfortunately I can't come." },
          { de: "Sehr geehrte Damen und Herren, ich suche eine Wohnung für sechs Monate.", en: "Dear Sir or Madam, I'm looking for an apartment for six months. (formal inquiry)" },
          { de: "Ich komme am 5. Mai in Weimar an. Ich warte auf die Antwort.", en: "I'll arrive in Weimar on May 5th. I look forward to your reply." },
          { de: "Mit freundlichen Grüßen", en: "Kind regards (formal sign-off)" },
          { de: "Liebe Anna, ich habe am Samstag Geburtstag und ich möchte dich einladen. Kommst du?", en: "Dear Anna, it's my birthday on Saturday and I'd like to invite you. Are you coming? (informal invitation)" }
        ]
      },
      {
        number: "27",
        id: "useful-phrases",
        en: "Useful Everyday Phrases",
        de: "Nützliche Alltagsphrasen",
        intro: [
          "A handful of sentence patterns cover an enormous amount of real-life German conversation \u2014 asking politely for something, asking permission, saying something isn't allowed, and asking for directions. They're worth learning as ready-made templates you can plug different words into, rather than building each sentence from scratch every time.",
          "The magic word tying most of these together is \u201cbitte\u201d (please), which in German does double duty: it softens a request (\u201cBitte geben Sie mir...\u201d \u2014 Please give me...) and it's also the standard reply to \u201cthank you\u201d (like English \u201cyou're welcome\u201d). Combine bitte with the imperative you already learned, and you can politely ask for almost anything."
        ],
        tables: [
          {
            caption: "Asking for something / getting help",
            headers: ["Pattern", "Example"],
            rows: [
              ["Bitte geben/bringen/zeigen/leihen Sie mir…", "Bitte geben Sie mir einen Apfel. (Please give me an apple.)"],
              ["Mein/e … ist kaputt. Bitte leihen Sie mir …", "Mein Bleistift ist kaputt. Bitte leihen Sie mir einen Bleistift."],
              ["> Hier bitte!", "Here you go! (handing something over)"]
            ]
          },
          {
            caption: "Permission & prohibition",
            headers: ["Pattern", "Example"],
            rows: [
              ["Bitte … Sie hier nicht. Es ist verboten.", "Bitte rauchen/schwimmen Sie hier nicht. Es ist verboten. (Please don't smoke/swim here. It's forbidden.)"],
              ["Bitte sprechen/telefonieren Sie hier nicht.", "Bitte sprechen Sie hier nicht laut. / Bitte telefonieren Sie hier nicht."],
              ["Es tut mir leid. Ich weiß das nicht.", "I'm sorry. I don't know that. (a safe, polite way to say you weren't aware of a rule)"],
              ["Bitte machen Sie … an/aus/auf/zu.", "Bitte machen Sie das Fenster auf. / Bitte machen Sie die Tür zu."]
            ]
          },
          {
            caption: "Asking for directions",
            headers: ["Pattern", "Example"],
            rows: [
              ["Bitte sagen Sie mir den Weg zu…", "Bitte sagen Sie mir den Weg zum Supermarkt. / …zur Kirche."],
              ["Antwort", "Gehen Sie links, dann geradeaus und dann rechts. Da ist die U-Bahn."]
            ]
          },
          {
            caption: "Asking for someone's personal details",
            headers: ["Question", "What it means"],
            rows: [
              ["Buchstabieren Sie Ihren Vornamen/Nachnamen!", "Spell your first/last name! (letter by letter)"],
              ["Wie ist Ihre Handynummer/Postleitzahl/Hausnummer?", "What's your mobile number/postal code/house number?"],
              ["Wie ist Ihre E-Mail-Adresse?", "What's your email address?"]
            ]
          }
        ],
        tip: "\u2018anmachen\u2019 (turn on), \u2018ausmachen\u2019 (turn off), \u2018aufmachen\u2019 = öffnen (open), and \u2018zumachen\u2019 = schließen (close) are separable verbs (remember Topic 10!) \u2014 the little an/aus/auf/zu piece jumps to the end: \u2018Bitte machen Sie das Licht an.\u2019 When reading an email address or spelling something out loud, @ is read as \u2018ät\u2019, a period is \u2018Punkt\u2019, a hyphen is \u2018minus\u2019, and an underscore is \u2018Unterstrich\u2019.",
        examples: [
          { de: "Bitte zeigen Sie mir Ihren Ausweis.", en: "Please show me your ID." },
          { de: "Ich habe Hunger. Bitte geben Sie mir einen Apfel.", en: "I'm hungry. Please give me an apple." },
          { de: "Bitte rauchen Sie hier nicht. Es ist verboten.", en: "Please don't smoke here. It's forbidden." },
          { de: "Bitte machen Sie das Radio aus.", en: "Please turn the radio off." },
          { de: "Bitte sagen Sie mir den Weg zur Bank.", en: "Please tell me the way to the bank." },
          { de: "Da links ist das Hotel.", en: "The hotel is there on the left." },
          { de: "Wo ist die U-Bahn? — Gehen Sie links, dann geradeaus und dann rechts.", en: "Where is the subway? — Go left, then straight, then right." },
          { de: "Wie ist deine Handynummer? / Wie ist deine E-Mail-Adresse?", en: "What's your phone number? / What's your email address?" },
          { de: "Schönes Wochenende! — Gleichfalls!", en: "Have a nice weekend! — You too!" }
        ]
      },
      {
        number: "28",
        id: "preterite-haben-sein",
        en: "Simple Past of haben & sein",
        de: "Präteritum von haben und sein",
        intro: [
          "You already learned that everyday spoken German mostly uses the Perfekt tense to talk about the past. There's exactly one pair of exceptions almost everyone makes, even in casual speech: the verbs haben (to have) and sein (to be). Building their Perfekt forms would technically work (\u201cich habe gehabt\u201d), but it sounds clunky and old-fashioned, so German speakers reach instead for a short, one-word past-tense form called the Präteritum \u2014 hatte for haben, war for sein.",
          "The good news is these two verbs are irregular but very predictable once memorized, and you'll use them constantly, since \u201cI was...\u201d and \u201cI had...\u201d come up in almost every story about the past."
        ],
        tables: [
          {
            caption: "Präteritum of haben and sein",
            headers: ["Pronoun", "haben → hatte", "sein → war"],
            rows: [
              ["ich", "hatte", "war"],
              ["du", "hattest", "warst"],
              ["er/es/sie", "hatte", "war"],
              ["wir", "hatten", "waren"],
              ["ihr", "hattet", "wart"],
              ["Sie/sie", "hatten", "waren"]
            ]
          }
        ],
        tip: "Swap habe→hatte and bin/ist→war/waren the same way you'd swap present-tense verbs, and the rest of the sentence (word order, everything else) doesn't change at all. This makes hatte/war very approachable even before you've mastered the full Perfekt system.",
        examples: [
          { de: "Ich habe ein Auto. > Ich hatte ein Auto.", en: "I have a car. > I had a car." },
          { de: "Ich bin krank. > Ich war krank.", en: "I am sick. > I was sick." },
          { de: "Wir sind Studenten. > Wir waren Studenten.", en: "We are students. > We were students." },
          { de: "Ich war am Wochenende im Café. Das Café war sehr schön.", en: "I was at the café over the weekend. The café was very nice." },
          { de: "Ich hatte viel Hunger. Der Tee war nicht gut.", en: "I was very hungry. The tea wasn't good." }
        ]
      },
      {
        number: "29",
        id: "self-introduction",
        en: "Introducing Yourself",
        de: "Sich vorstellen",
        intro: [
          "Introducing yourself in German follows a predictable checklist that comes up constantly — in class, at the start of a language exam, or just meeting someone new: your name, your age, where you're from, where you live, what languages you speak, your job, and your hobby. Because it's such a fixed set of questions, it's worth preparing your own answers to all seven ahead of time, the way you'd rehearse an elevator pitch.",
          "Notice that each answer reuses grammar you already know: \u201cIch bin...\u201d/\u201cIch heiße...\u201d for your name (Topic 2), \u201cIch komme aus...\u201d + Topic 11's Dativ preposition aus, \u201cIch wohne in...\u201d, \u201cIch spreche...\u201d for languages, \u201cIch bin [Beruf]\u201d with no article (Topic 22), and \u201cMein Hobby ist...\u201d (Topic 25). Self-introduction isn't really new grammar — it's a chance to combine everything you've learned into one short, confident paragraph."
        ],
        tables: [
          {
            caption: "The self-introduction checklist",
            headers: ["Category", "Question", "Answer pattern"],
            rows: [
              ["Name", "Wie heißen Sie? / Wie heißt du?", "Mein Name ist… / Ich heiße…"],
              ["Alter (age)", "Wie alt sind Sie? / Wie alt bist du?", "Ich bin … Jahre alt."],
              ["Land (country)", "Woher kommen Sie?", "Ich komme aus…"],
              ["Wohnort (residence)", "Wo wohnen Sie?", "Ich wohne in…"],
              ["Sprachen (languages)", "Welche Sprachen sprechen Sie?", "Ich spreche…"],
              ["Beruf (job)", "Was sind Sie von Beruf?", "Ich bin… (no article before the job)"],
              ["Hobby", "Was ist Ihr Hobby?", "Mein Hobby ist… / Meine Hobbys sind…"]
            ]
          }
        ],
        tip: "In a speaking exam or a first meeting, you don't need to answer these questions one at a time — you can string them into one short paragraph, moving from name to age to country to languages to job to hobby, exactly the way the sample below does. Once you've built and practiced your own version, you'll be ready for almost any \u2018tell me about yourself\u2019 moment.",
        examples: [
          { de: "Mein Name ist Luqman.", en: "My name is Luqman." },
          { de: "Ich bin 25 Jahre alt.", en: "I am 25 years old." },
          { de: "Ich komme aus Pakistan.", en: "I come from Pakistan." },
          { de: "Ich wohne in Gujranwala.", en: "I live in Gujranwala." },
          { de: "Ich spreche Urdu, Englisch und ein bisschen Deutsch.", en: "I speak Urdu, English, and a bit of German." },
          { de: "Ich bin Student.", en: "I am a student." },
          { de: "Mein Hobby ist lesen.", en: "My hobby is reading." },
          { de: "Ich bin Luca. Ich wohne in Berlin. Ich komme aus Deutschland.", en: "I'm Luca. I live in Berlin. I come from Germany." }
        ]
      },
      {
        number: "30",
        id: "adjectives-colors",
        en: "Adjectives & Colors",
        de: "Adjektive & Farben",
        intro: [
          "Describing words behave differently in German depending on WHERE they sit in the sentence — and that surprises a lot of beginners coming from English, where an adjective always looks the same no matter what. If the adjective comes AFTER the verb \u201csein\u201d (to be), describing the subject from a distance, it needs no ending at all — just use the plain dictionary form: \u201cDas Auto ist rot\u201d (The car is red). Grammar books call this a predicate adjective, but you can just think of it as \u201cadjective after sein \u2014 no changes needed\u201d.",
          "It's a different story when the adjective sits directly in front of the noun it describes, right between the article and the noun \u2014 that's called an attributive adjective, and now it needs an ending. At the A1 level, the pattern to know is: after der/die/das (or dieser/diese/dieses), the adjective adds \u201c-e\u201d in the singular, whichever gender the noun is \u2014 der alte Mann, die alte Frau, das alte Auto. You'll meet more ending patterns (after ein/eine, in the plural, in other cases) as you go further, but \u201c-e\u201d after a definite article is the safe starting point.",
          "Colors are just a special case of adjectives, so the exact same rules apply to them: \u201cDas Auto ist rot\u201d needs no ending, but \u201cdas rote Auto\u201d does. German also builds extra shades the same tidy way every time, by gluing \u201chell-\u201d (light) or \u201cdunkel-\u201d (dark) straight onto the front of a color word \u2014 hellblau (light blue), dunkelgrün (dark green) \u2014 no separate words needed, unlike English."
        ],
        tables: [
          {
            caption: "Predicate vs. attributive adjectives",
            headers: ["Position", "Ending needed?", "Example"],
            rows: [
              ["After sein (predicate)", "No ending — plain form", "Das Auto ist rot."],
              ["Before the noun, after der/die/das (attributive)", "Add \u2013e", "das rote Auto"],
              ["Before the noun, masculine", "Add \u2013e", "der alte Mann"],
              ["Before the noun, feminine", "Add \u2013e", "die kleine Katze"],
              ["Before the noun, neuter", "Add \u2013e", "das kleine Kind"]
            ]
          },
          {
            caption: "Primary colors & shade modifiers",
            headers: ["German", "English", "With a shade"],
            rows: [
              ["rot", "red", "hellrot (light red)"],
              ["grün", "green", "dunkelgrün (dark green)"],
              ["blau", "blue", "hellblau (light blue)"],
              ["gelb", "yellow", "dunkelgelb (dark yellow)"],
              ["schwarz / weiß", "black / white", "\u2014"]
            ]
          }
        ],
        tip: "Quick test for which pattern to use: can you swap the adjective and \u201csein\u201d without it sounding broken (\u201cDas Auto ist rot\u201d)? Then it needs no ending. Is the adjective squeezed directly between an article and its noun instead (\u201cdas rote Auto\u201d)? Then add \u201c-e\u201d, at least for singular nouns after der/die/das. Colors follow this exact same rule \u2014 they're not a separate system to memorize.",
        examples: [
          { de: "Das Auto ist rot.", en: "The car is red. (predicate, no ending)" },
          { de: "Das rote Auto gefällt mir.", en: "I like the red car. (attributive, -e ending)" },
          { de: "der alte Mann, die alte Frau, das alte Kind", en: "the old man, the old woman, the old child" },
          { de: "Meine Lieblingsfarbe ist Blau.", en: "My favorite color is blue." },
          { de: "Sie trägt ein hellblaues Kleid.", en: "She's wearing a light blue dress." },
          { de: "Der Himmel ist heute dunkelgrau.", en: "The sky is dark gray today." }
        ]
      },
      {
        number: "31",
        id: "comparatives-superlatives",
        en: "Comparatives & Superlatives",
        de: "Komparativ & Superlativ",
        intro: [
          "Just like English has \u201cgood, better, best\u201d, German adjectives and adverbs have three grades: the plain form (Positiv), the comparative for \u201cmore/-er\u201d (Komparativ), and the superlative for \u201cmost/-est\u201d (Superlativ). Regular German adjectives build the comparative by simply adding \u201c-er\u201d, and the superlative with \u201cam ___-sten\u201d \u2014 schnell (fast) becomes schneller (faster) and am schnellsten (fastest). To say \u201cthan\u201d when comparing two things, German uses the little word \u201cals\u201d: \u201cMein Auto ist schneller als deins\u201d (My car is faster than yours).",
          "Two extremely common words break the regular pattern completely and just have to be memorized, the same way English doesn't say \u201cgooder\u201d or \u201cgoodest\u201d: gut (good) becomes besser (better) and am besten (best), and gern (gladly \u2014 used to say you like doing something) becomes lieber (prefer) and am liebsten (like most of all). Because \u201cgern\u201d is how German expresses liking an activity in the first place (\u201cIch spiele gern Fußball\u201d \u2014 I like playing football), its comparative \u201clieber\u201d is one of the most useful words you'll learn for talking about preferences."
        ],
        tables: [
          {
            caption: "Regular pattern vs. the two irregulars",
            headers: ["Positive", "Comparative", "Superlative"],
            rows: [
              ["schnell (fast)", "schneller", "am schnellsten"],
              ["klein (small)", "kleiner", "am kleinsten"],
              ["gut (good)", "besser", "am besten"],
              ["gern (gladly)", "lieber", "am liebsten"]
            ]
          }
        ],
        tip: "\u201cAls\u201d is the German word for \u201cthan\u201d in any comparison \u2014 \u201cbesser als\u201d (better than), \u201cschneller als\u201d (faster than) \u2014 don't reach for \u201cwie\u201d here, that's reserved for saying two things are equally alike (\u201cso schnell wie\u201d \u2014 as fast as). And remember gut/besser/am besten and gern/lieber/am liebsten by rote, the same way you memorized \u201cgood, better, best\u201d in English \u2014 no rule will get you there.",
        examples: [
          { de: "Mein Auto ist schneller als deins.", en: "My car is faster than yours." },
          { de: "Berlin ist groß, aber München ist kleiner.", en: "Berlin is big, but Munich is smaller." },
          { de: "Dieser Kuchen ist gut, aber der andere ist besser.", en: "This cake is good, but the other one is better." },
          { de: "Von allen Städten mag ich Hamburg am besten.", en: "Of all the cities, I like Hamburg the best." },
          { de: "Ich spiele gern Fußball, aber ich schwimme lieber.", en: "I like playing football, but I prefer swimming." },
          { de: "Am liebsten trinke ich Kaffee am Morgen.", en: "What I like most is drinking coffee in the morning." }
        ]
      }
    ]
  },
  {
    id: "a2",
    level: "A2",
    title: "German A2",
    subtitle: "Elementary German — Explained in English",
    tagline: "Cases in depth, prepositions, connectors, indirect questions, Präteritum, adjective endings, Passiv, Genitiv, relative clauses, reflexive verbs, and the everyday vocabulary to go with each one.",
    status: "available",
    topics: [
        {
                "number": "01",
                "id": "cases-review",
                "en": "Cases Review: Nominative, Accusative & Dative",
                "de": "Wiederholung: Nominativ, Akkusativ, Dativ",
                "intro": [
                        "In A1 you met three ‘cases’ without maybe realizing it: Nominativ (the subject — who or what is doing something), Akkusativ (the direct object — who or what receives the action), and Dativ (the indirect object — who benefits from or receives something). Think of it like a sentence with roles to fill: “Ich gebe dem Kind den Ball” (I give the child the ball) has ich as the do-er (Nominativ), den Ball as the thing being handed over (Akkusativ), and dem Kind as the person receiving it (Dativ).",
                        "The articles change shape depending on which role a noun is playing — that's really all a ‘case’ is: a costume the article wears to show its job in the sentence. Only der/das and ein change in the Akkusativ (der → den, ein → einen); die and the plural never change there. In the Dativ, every gender changes: der/das → dem, die → der, and the plural noun itself even gets an extra -n (den Kindern).",
                        "A simple test: find the verb, ask ‘who/what is doing this?’ for Nominativ, ‘who/what is directly affected?’ for Akkusativ, and ‘who benefits, or to/for whom?’ for Dativ. Many verbs — geben (give), zeigen (show), schreiben (write), schicken (send) — naturally take BOTH an Akkusativ and a Dativ object at once, which is exactly why this review matters before we go further into A2."
                ],
                "tables": [
                        {
                                "caption": "The three cases side by side",
                                "headers": [
                                        "Case",
                                        "Question",
                                        "der/das →",
                                        "die →",
                                        "Plural →"
                                ],
                                "rows": [
                                        [
                                                "Nominativ (subject)",
                                                "Wer/Was?",
                                                "der/das",
                                                "die",
                                                "die"
                                        ],
                                        [
                                                "Akkusativ (direct object)",
                                                "Wen/Was?",
                                                "den/das",
                                                "die",
                                                "die"
                                        ],
                                        [
                                                "Dativ (indirect object)",
                                                "Wem?",
                                                "dem",
                                                "der",
                                                "den + -n"
                                        ]
                                ]
                        }
                ],
                "tip": "If a verb answers ‘to/for whom’ as well as ‘what’, it usually wants both cases at once — and in a normal sentence the Dativ (person) comes before the Akkusativ (thing): “Ich schenke meiner Mutter (Dativ) eine Blume (Akkusativ).” Swap that order and it still works, but it sounds like you're emphasizing the flower.",
                "examples": [
                        {
                                "de": "Der Mann liest ein Buch.",
                                "en": "The man is reading a book. (Nominativ: der Mann, Akkusativ: ein Buch)"
                        },
                        {
                                "de": "Ich sehe den Hund.",
                                "en": "I see the dog. (der → den because it's the direct object)"
                        },
                        {
                                "de": "Ich gebe dem Kind den Ball.",
                                "en": "I give the child the ball. (dem Kind = Dativ, den Ball = Akkusativ)"
                        },
                        {
                                "de": "Wir schreiben unseren Freunden eine Karte.",
                                "en": "We're writing our friends a card."
                        },
                        {
                                "de": "Sie zeigt der Lehrerin das Bild.",
                                "en": "She shows the teacher the picture."
                        },
                        {
                                "de": "Er schickt den Kindern ein Paket.",
                                "en": "He sends the children a package. (plural → den Kindern, note the extra -n)"
                        }
                ]
        },
        {
                "number": "02",
                "id": "dative-pronouns",
                "en": "Personal Pronouns in the Dative",
                "de": "Personalpronomen im Dativ",
                "intro": [
                        "You already know ich, du, er, sie, es, wir, ihr, sie/Sie as subjects. Now that you're using the Dativ case more, you need their Dativ forms too — the versions that mean ‘to me’, ‘to you’, ‘to him’, and so on. German doesn't add a separate word like English ‘to’; the pronoun itself simply changes shape.",
                        "The good news: you've secretly used two of these already. “Wie geht es dir?” (How are you?) literally means ‘how goes it to you’ — dir is the Dativ of du. And “Mir geht es gut” uses mir, the Dativ of ich. Once you notice that pattern, the rest of the set is just new vocabulary to memorize, not a new grammar concept.",
                        "These Dativ pronouns show up constantly with verbs like gefallen (to please/like), helfen (to help), danken (to thank), and gehören (to belong to) — verbs that grammatically always take a Dativ object in German, even when the English equivalent uses a direct object. “Ich helfe dir” literally translates as ‘I help to-you’, which is why German learners often say “Ich helfe du” by mistake — don't fall into that trap!"
                ],
                "tables": [
                        {
                                "caption": "Subject pronouns → their Dativ forms",
                                "headers": [
                                        "Subject (Nominativ)",
                                        "Dativ form",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "ich",
                                                "mir",
                                                "to/for me"
                                        ],
                                        [
                                                "du",
                                                "dir",
                                                "to/for you"
                                        ],
                                        [
                                                "er",
                                                "ihm",
                                                "to/for him"
                                        ],
                                        [
                                                "sie",
                                                "ihr",
                                                "to/for her"
                                        ],
                                        [
                                                "es",
                                                "ihm",
                                                "to/for it"
                                        ],
                                        [
                                                "wir",
                                                "uns",
                                                "to/for us"
                                        ],
                                        [
                                                "ihr",
                                                "euch",
                                                "to/for you (plural)"
                                        ],
                                        [
                                                "sie/Sie",
                                                "ihnen/Ihnen",
                                                "to/for them/you (formal)"
                                        ]
                                ]
                        }
                ],
                "tip": "A handful of very common verbs — helfen, danken, gefallen, gehören, gratulieren, antworten — always take a Dativ object, never an Akkusativ, even though the English translation looks like a direct object (‘I help you’, not ‘I help to you’). It's worth memorizing this short list as ‘Dativ verbs’ rather than translating word for word from English.",
                "examples": [
                        {
                                "de": "Kannst du mir helfen?",
                                "en": "Can you help me?"
                        },
                        {
                                "de": "Das Kleid gefällt ihr sehr gut.",
                                "en": "She likes the dress a lot. (literally: the dress pleases her)"
                        },
                        {
                                "de": "Ich danke dir für das Geschenk.",
                                "en": "Thank you for the gift."
                        },
                        {
                                "de": "Gehört das Buch dir?",
                                "en": "Does the book belong to you?"
                        },
                        {
                                "de": "Wir gratulieren euch zur Hochzeit!",
                                "en": "Congratulations on the wedding!"
                        },
                        {
                                "de": "Er hat uns die ganze Geschichte erzählt.",
                                "en": "He told us the whole story."
                        }
                ]
        },
        {
                "number": "03",
                "id": "dative-possessives",
                "en": "Possessive Articles in the Dative",
                "de": "Possessivartikel im Dativ",
                "intro": [
                        "You learned mein, dein, sein, ihr, unser, euer as A1's way of saying ‘my’, ‘your’, ‘his’, and so on. Just like der/die/das, these possessive articles also put on a Dativ ‘costume’ when the noun they describe is the indirect object of the sentence.",
                        "The pattern is refreshingly predictable: possessives follow exactly the same endings as ein in the Dativ. Masculine and neuter nouns add -em (meinem, deinem, seinem...), feminine nouns add -er (meiner, deiner...), and plural nouns add -en (meinen, deinen...) — plus, remember, the plural noun itself also gets an -n if it doesn't already end in one.",
                        "This comes up naturally whenever you're describing something happening to or for a person connected to you — talking to your mother, helping your friend, giving something to your brother. Since possessives are some of the most frequent words in everyday speech, getting comfortable with their Dativ forms pays off immediately in conversation."
                ],
                "tables": [
                        {
                                "caption": "Possessive + Dativ endings",
                                "headers": [
                                        "Owner",
                                        "Masc./Neut. (+ -em)",
                                        "Feminine (+ -er)",
                                        "Plural (+ -en)"
                                ],
                                "rows": [
                                        [
                                                "my",
                                                "meinem",
                                                "meiner",
                                                "meinen"
                                        ],
                                        [
                                                "your (du)",
                                                "deinem",
                                                "deiner",
                                                "deinen"
                                        ],
                                        [
                                                "his/its",
                                                "seinem",
                                                "seiner",
                                                "seinen"
                                        ],
                                        [
                                                "her",
                                                "ihrem",
                                                "ihrer",
                                                "ihren"
                                        ],
                                        [
                                                "our",
                                                "unserem",
                                                "unserer",
                                                "unseren"
                                        ],
                                        [
                                                "your (ihr)",
                                                "eurem",
                                                "eurer",
                                                "euren"
                                        ],
                                        [
                                                "their/your (formal)",
                                                "ihrem/Ihrem",
                                                "ihrer/Ihrer",
                                                "ihren/Ihren"
                                        ]
                                ]
                        }
                ],
                "tip": "Say the noun's gender to yourself first, then reach for the ending: masculine and neuter always sound like ‘-em’, feminine always ‘-er’, plural always ‘-en’. Once that three-way split is automatic, you can apply it to any possessive without re-learning the pattern each time.",
                "examples": [
                        {
                                "de": "Ich schreibe meinem Bruder eine E-Mail.",
                                "en": "I'm writing my brother an email. (masculine → -em)"
                        },
                        {
                                "de": "Sie hilft ihrer Schwester bei den Hausaufgaben.",
                                "en": "She's helping her sister with homework. (feminine → -er)"
                        },
                        {
                                "de": "Wir zeigen unseren Freunden die Fotos.",
                                "en": "We're showing our friends the photos. (plural → -en)"
                        },
                        {
                                "de": "Er kauft seinem Kind ein Eis.",
                                "en": "He's buying his child an ice cream. (neuter → -em)"
                        },
                        {
                                "de": "Kannst du deinem Vater danken?",
                                "en": "Could you thank your father?"
                        },
                        {
                                "de": "Das gehört meiner Mutter.",
                                "en": "That belongs to my mother."
                        }
                ]
        },
        {
                "number": "04",
                "id": "language-learning-vocab",
                "en": "Everyday German: Languages & Learning",
                "de": "Vokabeln zu Sprachen & Lernen",
                "intro": [
                        "A2 is where you start talking ABOUT your own language journey — which languages you speak, how you're learning German, and what's easy or hard for you. This vocabulary set gives you the words to describe that experience naturally, instead of falling back on simple ‘Ich lerne Deutsch’ every time.",
                        "Notice that talking about ability uses two different patterns: “Ich spreche Englisch” (I speak English — a plain fact) versus “Ich kann ein bisschen Deutsch” (I can [speak] a bit of German — using the modal verb können to hedge your confidence level). Both are useful, and native speakers switch between them constantly depending on how fluent they feel.",
                        "Words like Muttersprache (mother tongue), Fremdsprache (foreign language), and fließend (fluently) let you build much richer self-descriptions than at A1, while phrases like “Wie sagt man ... auf Deutsch?” (How do you say ... in German?) and “Können Sie das bitte wiederholen?” (Could you repeat that please?) are exactly the survival phrases you'll actually need in a real German classroom or conversation."
                ],
                "tables": [
                        {
                                "caption": "Talking about language ability",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "die Muttersprache",
                                                "mother tongue / native language"
                                        ],
                                        [
                                                "die Fremdsprache",
                                                "foreign language"
                                        ],
                                        [
                                                "fließend sprechen",
                                                "to speak fluently"
                                        ],
                                        [
                                                "ein bisschen / ein wenig",
                                                "a little"
                                        ],
                                        [
                                                "verstehen / nicht verstehen",
                                                "to understand / not understand"
                                        ],
                                        [
                                                "üben",
                                                "to practice"
                                        ],
                                        [
                                                "der Wortschatz",
                                                "vocabulary"
                                        ],
                                        [
                                                "die Aussprache",
                                                "pronunciation"
                                        ]
                                ]
                        }
                ],
                "tip": "Keep two survival phrases ready for every conversation: “Können Sie das bitte wiederholen?” (Could you repeat that?) and “Können Sie bitte langsamer sprechen?” (Could you speak more slowly?). Native speakers are almost always happy to slow down once you ask — they just don't know to do it unprompted.",
                "examples": [
                        {
                                "de": "Meine Muttersprache ist Urdu, aber ich spreche auch Englisch.",
                                "en": "My native language is Urdu, but I also speak English."
                        },
                        {
                                "de": "Ich lerne seit sechs Monaten Deutsch.",
                                "en": "I've been learning German for six months."
                        },
                        {
                                "de": "Meine Aussprache ist noch nicht perfekt.",
                                "en": "My pronunciation isn't perfect yet."
                        },
                        {
                                "de": "Wie sagt man ‘library’ auf Deutsch?",
                                "en": "How do you say 'library' in German?"
                        },
                        {
                                "de": "Können Sie das bitte wiederholen? Ich habe es nicht verstanden.",
                                "en": "Could you repeat that please? I didn't understand it."
                        },
                        {
                                "de": "Ich übe jeden Tag ein bisschen Wortschatz.",
                                "en": "I practice a bit of vocabulary every day."
                        }
                ]
        },
        {
                "number": "05",
                "id": "congratulations-condolences",
                "en": "Congratulations & Condolences",
                "de": "Glückwünsche & Beileidsbekundungen",
                "intro": [
                        "Every language has fixed phrases for life's big moments — birthdays, weddings, births, exams, and also losses. Using the right one at the right moment matters far more than grammatical accuracy here; these are set expressions that native speakers say automatically, so the goal is simply to memorize them as whole chunks.",
                        "Most congratulation phrases use the pattern “Herzlichen Glückwunsch zu + Dativ” (congratulations on ...), which is another good real-world reason the Dativ case from this chapter matters: “zum Geburtstag” (zu + dem), “zur Hochzeit” (zu + der), “zur Geburt” (to the birth).",
                        "For condolences, German tends to be simpler and more restrained than English — “Mein Beileid” (my condolences) or “Mein herzliches Beileid” said quietly is usually enough; there's no expectation to say more unless you know the person well."
                ],
                "tables": [
                        {
                                "caption": "Set phrases for key life moments",
                                "headers": [
                                        "Occasion",
                                        "German phrase",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "Birthday",
                                                "Herzlichen Glückwunsch zum Geburtstag!",
                                                "Happy birthday!"
                                        ],
                                        [
                                                "Wedding",
                                                "Herzlichen Glückwunsch zur Hochzeit!",
                                                "Congratulations on the wedding!"
                                        ],
                                        [
                                                "New baby",
                                                "Herzlichen Glückwunsch zur Geburt!",
                                                "Congratulations on the birth!"
                                        ],
                                        [
                                                "Passing an exam",
                                                "Herzlichen Glückwunsch zur bestandenen Prüfung!",
                                                "Congratulations on passing the exam!"
                                        ],
                                        [
                                                "New job",
                                                "Alles Gute für den neuen Job!",
                                                "All the best for the new job!"
                                        ],
                                        [
                                                "Condolences",
                                                "Mein herzliches Beileid.",
                                                "My deepest condolences."
                                        ]
                                ]
                        }
                ],
                "tip": "“Alles Gute!” (all the best) is the safest all-purpose phrase in German — it works for birthdays, new jobs, farewells, and almost any positive occasion when you're not sure of the exact right expression. When in doubt, “Alles Gute!” will never sound wrong.",
                "examples": [
                        {
                                "de": "Herzlichen Glückwunsch zum Geburtstag!",
                                "en": "Happy birthday!"
                        },
                        {
                                "de": "Alles Gute zum neuen Job!",
                                "en": "All the best in the new job!"
                        },
                        {
                                "de": "Ich wünsche dir viel Glück bei der Prüfung.",
                                "en": "I wish you good luck with the exam."
                        },
                        {
                                "de": "Herzlichen Glückwunsch, ihr beide!",
                                "en": "Congratulations, you two!"
                        },
                        {
                                "de": "Mein herzliches Beileid zu Ihrem Verlust.",
                                "en": "My deepest condolences on your loss."
                        },
                        {
                                "de": "Alles Gute für die Zukunft!",
                                "en": "All the best for the future!"
                        }
                ]
        },
        {
                "number": "06",
                "id": "accusative-prepositions",
                "en": "Prepositions That Always Take the Accusative",
                "de": "Akkusativ-Präpositionen",
                "intro": [
                        "Some German prepositions have a fixed rule: no matter what, the noun that follows them always goes into the Akkusativ case. You don't need to think about direction or location for these — just memorize the short list and apply Akkusativ endings automatically every time you see one.",
                        "There are only five common ones, which makes them easy to memorize as a set: für (for), durch (through), gegen (against), ohne (without), and um (around/at). A popular trick many learners use is the acronym FUDGO or the sillier mnemonic sentence ‘Fritz Durch Gegen Ohne Um’ — whatever sticks in your memory.",
                        "Watch for the contraction für + das = fürs in casual speech (“Das ist fürs Kind”), which you'll hear constantly even though the full form für das is what you'll usually write."
                ],
                "tables": [
                        {
                                "caption": "The five Accusative prepositions",
                                "headers": [
                                        "Preposition",
                                        "Meaning",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "für",
                                                "for",
                                                "Das Geschenk ist für dich."
                                        ],
                                        [
                                                "durch",
                                                "through",
                                                "Wir gehen durch den Park."
                                        ],
                                        [
                                                "gegen",
                                                "against",
                                                "Er ist gegen den Vorschlag."
                                        ],
                                        [
                                                "ohne",
                                                "without",
                                                "Ich trinke Kaffee ohne Zucker."
                                        ],
                                        [
                                                "um",
                                                "around / at (time)",
                                                "Wir treffen uns um den Tisch. / um 8 Uhr."
                                        ]
                                ]
                        }
                ],
                "tip": "Because these five prepositions ALWAYS trigger Akkusativ, you never need to ask ‘wo?’ or ‘wohin?’ the way you do with two-way prepositions later in this course — für, durch, gegen, ohne, and um are Akkusativ, full stop, every single time.",
                "examples": [
                        {
                                "de": "Dieses Buch ist für meinen Bruder.",
                                "en": "This book is for my brother."
                        },
                        {
                                "de": "Wir laufen durch den Wald.",
                                "en": "We're walking through the forest."
                        },
                        {
                                "de": "Ich habe nichts gegen deinen Plan.",
                                "en": "I have nothing against your plan."
                        },
                        {
                                "de": "Er trinkt seinen Tee ohne Milch.",
                                "en": "He drinks his tea without milk."
                        },
                        {
                                "de": "Die Kinder sitzen um den Tisch.",
                                "en": "The children are sitting around the table."
                        },
                        {
                                "de": "Das Geschenk ist für meine Mutter.",
                                "en": "The gift is for my mother."
                        }
                ]
        },
        {
                "number": "07",
                "id": "dative-prepositions",
                "en": "Prepositions That Always Take the Dative",
                "de": "Dativ-Präpositionen",
                "intro": [
                        "Just as five prepositions always demand the Akkusativ, another set always demands the Dativ, no exceptions. This is the flip side of the previous topic — and together, these two short lists cover most of the prepositions you'll use daily that AREN'T the flexible two-way ones you'll meet in the next chapter.",
                        "The most common Dativ prepositions are: aus (out of/from), bei (at/near), mit (with), nach (after/to), seit (since/for), von (from/of), and zu (to). A classic memory trick is the sentence ‘Aus Bei Mit Nach Seit Von Zu fährt der Bus’ (aus bei mit nach seit von zu, the bus goes) — nonsensical, but the rhythm makes it stick.",
                        "Two contractions are so common they've become the default in everyday speech: bei + dem = beim, and zu + dem = zum, zu + der = zur. You'll hear “Ich bin beim Arzt” and “Ich gehe zum Bahnhof” far more often than the uncontracted forms."
                ],
                "tables": [
                        {
                                "caption": "The seven common Dative prepositions",
                                "headers": [
                                        "Preposition",
                                        "Meaning",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "aus",
                                                "out of / from (origin)",
                                                "Ich komme aus Deutschland."
                                        ],
                                        [
                                                "bei",
                                                "at / near / while",
                                                "Ich bin beim Arzt."
                                        ],
                                        [
                                                "mit",
                                                "with",
                                                "Ich fahre mit dem Bus."
                                        ],
                                        [
                                                "nach",
                                                "after / to (a place/city)",
                                                "Nach der Arbeit gehe ich nach Hause."
                                        ],
                                        [
                                                "seit",
                                                "since / for (time)",
                                                "Ich lerne seit einem Jahr Deutsch."
                                        ],
                                        [
                                                "von",
                                                "from / of",
                                                "Das Geschenk ist von meiner Oma."
                                        ],
                                        [
                                                "zu",
                                                "to (a place/person)",
                                                "Ich gehe zum Supermarkt."
                                        ]
                                ]
                        }
                ],
                "tip": "Two contractions are used constantly in spoken German and you should learn them as single words: beim (bei + dem) and zum/zur (zu + dem / zu + der). Saying “Ich bin bei dem Arzt” instead of “Ich bin beim Arzt” isn't wrong, but it sounds noticeably stiff to native ears.",
                "examples": [
                        {
                                "de": "Ich komme aus Pakistan.",
                                "en": "I come from Pakistan."
                        },
                        {
                                "de": "Wir fahren mit dem Auto zur Arbeit.",
                                "en": "We drive to work by car."
                        },
                        {
                                "de": "Nach dem Essen trinken wir Kaffee.",
                                "en": "After the meal we drink coffee."
                        },
                        {
                                "de": "Ich wohne seit drei Jahren in Berlin.",
                                "en": "I've lived in Berlin for three years."
                        },
                        {
                                "de": "Das Buch ist von meinem Lehrer.",
                                "en": "The book is from my teacher."
                        },
                        {
                                "de": "Ich gehe jetzt zum Bahnhof.",
                                "en": "I'm going to the station now."
                        }
                ]
        },
        {
                "number": "08",
                "id": "family-celebrations-vocab",
                "en": "Everyday German: Family & Family Celebrations",
                "de": "Vokabeln zu Familie und Familienfesten",
                "intro": [
                        "A1 gave you the core family words — Mutter, Vater, Bruder, Schwester. A2 expands that circle to the extended family and, just as importantly, the vocabulary for talking about family gatherings and traditions, since these come up constantly in real conversation once you can hold a longer exchange.",
                        "Notice that German, like English, has separate words for in-laws built on Schwieger- (die Schwiegermutter, der Schwiegervater) and separate words for step-relations built on Stief- (die Stiefmutter, der Stiefbruder) — recognizing these prefixes lets you guess the meaning of family words you've never seen before.",
                        "This is also a natural place to combine grammar with vocabulary: describing a family celebration means talking about who gave what to whom, which is exactly the Dativ + Akkusativ pattern from earlier in this chapter (“Meine Tante hat mir ein Geschenk gegeben”)."
                ],
                "tables": [
                        {
                                "caption": "Extended family & celebration words",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "die Großeltern",
                                                "grandparents"
                                        ],
                                        [
                                                "die Enkelkinder",
                                                "grandchildren"
                                        ],
                                        [
                                                "der Onkel / die Tante",
                                                "uncle / aunt"
                                        ],
                                        [
                                                "der Cousin / die Cousine",
                                                "male cousin / female cousin"
                                        ],
                                        [
                                                "die Schwiegereltern",
                                                "parents-in-law"
                                        ],
                                        [
                                                "das Familientreffen",
                                                "family reunion/gathering"
                                        ],
                                        [
                                                "die Tradition, -en",
                                                "tradition"
                                        ],
                                        [
                                                "feiern",
                                                "to celebrate"
                                        ]
                                ]
                        }
                ],
                "tip": "Once you know that Schwieger- signals ‘in-law’ and Stief- signals ‘step-’, you can build almost any extended-family word yourself: die Schwiegertochter (daughter-in-law), der Stiefvater (stepfather) — no need to memorize each one separately.",
                "examples": [
                        {
                                "de": "Meine Großeltern wohnen auf dem Land.",
                                "en": "My grandparents live in the countryside."
                        },
                        {
                                "de": "Wir feiern jedes Jahr ein großes Familientreffen.",
                                "en": "We celebrate a big family reunion every year."
                        },
                        {
                                "de": "Meine Tante hat mir ein Geschenk gegeben.",
                                "en": "My aunt gave me a gift."
                        },
                        {
                                "de": "Mein Cousin wohnt in Hamburg.",
                                "en": "My cousin lives in Hamburg."
                        },
                        {
                                "de": "Diese Tradition ist in unserer Familie sehr wichtig.",
                                "en": "This tradition is very important in our family."
                        },
                        {
                                "de": "Meine Schwiegermutter kocht sehr gut.",
                                "en": "My mother-in-law cooks very well."
                        }
                ]
        },
        {
                "number": "09",
                "id": "two-way-prepositions",
                "en": "Two-Way Prepositions: Wechselpräpositionen",
                "de": "Wechselpräpositionen",
                "intro": [
                        "So far you've met prepositions that are ALWAYS Akkusativ or ALWAYS Dativ. Now come the nine ‘two-way’ prepositions — in, an, auf, über, unter, vor, hinter, neben, zwischen — which can take EITHER case, depending on one simple question: is something moving TO a place, or already sitting/happening AT a place?",
                        "The test is: ask ‘wohin?’ (where to? — movement, a destination is being reached) or ‘wo?’ (where? — a fixed location, no movement into it). Movement toward a new location → Akkusativ. Staying in one place, or movement happening within that place → Dativ. “Ich gehe in die Küche” (I'm walking INTO the kitchen — movement, Akkusativ) vs. “Ich bin in der Küche” (I'm IN the kitchen — location, Dativ).",
                        "This single wohin/wo test is the single most useful grammar trick in the entire A2 level — once it clicks, an entire category of mistakes disappears. It doesn't matter which of the nine prepositions you're using; the same question decides the case every time."
                ],
                "tables": [
                        {
                                "caption": "The nine two-way prepositions",
                                "headers": [
                                        "Preposition",
                                        "Meaning",
                                        "Wohin? (Akk.) example",
                                        "Wo? (Dat.) example"
                                ],
                                "rows": [
                                        [
                                                "in",
                                                "in/into",
                                                "Ich gehe in die Schule.",
                                                "Ich bin in der Schule."
                                        ],
                                        [
                                                "an",
                                                "at/on (vertical)",
                                                "Ich hänge das Bild an die Wand.",
                                                "Das Bild hängt an der Wand."
                                        ],
                                        [
                                                "auf",
                                                "on (horizontal)",
                                                "Ich lege das Buch auf den Tisch.",
                                                "Das Buch liegt auf dem Tisch."
                                        ],
                                        [
                                                "über",
                                                "over/above",
                                                "Der Ball fliegt über den Zaun.",
                                                "Die Lampe hängt über dem Tisch."
                                        ],
                                        [
                                                "unter",
                                                "under",
                                                "Die Katze läuft unter den Tisch.",
                                                "Die Katze liegt unter dem Tisch."
                                        ],
                                        [
                                                "vor",
                                                "in front of",
                                                "Er stellt sich vor die Tür.",
                                                "Er steht vor der Tür."
                                        ],
                                        [
                                                "hinter",
                                                "behind",
                                                "Sie geht hinter das Haus.",
                                                "Sie ist hinter dem Haus."
                                        ],
                                        [
                                                "neben",
                                                "next to",
                                                "Setz dich neben mich.",
                                                "Er sitzt neben mir."
                                        ],
                                        [
                                                "zwischen",
                                                "between",
                                                "Stell den Stuhl zwischen die Tische.",
                                                "Der Stuhl steht zwischen den Tischen."
                                        ]
                                ]
                        }
                ],
                "tip": "Before choosing a case, physically ask yourself the German question out loud: ‘Wohin?’ or ‘Wo?’ If the sentence describes a destination being reached (moving TO somewhere new) → Akkusativ. If it describes something already positioned or happening AT a location → Dativ. This one test replaces memorizing nine separate rules.",
                "examples": [
                        {
                                "de": "Ich lege den Schlüssel auf den Tisch.",
                                "en": "I'm putting the key on the table. (movement → Akkusativ)"
                        },
                        {
                                "de": "Der Schlüssel liegt auf dem Tisch.",
                                "en": "The key is lying on the table. (location → Dativ)"
                        },
                        {
                                "de": "Wir gehen ins Kino.",
                                "en": "We're going to the cinema. (in + das → ins, movement → Akkusativ)"
                        },
                        {
                                "de": "Wir sind im Kino.",
                                "en": "We're at the cinema. (in + dem → im, location → Dativ)"
                        },
                        {
                                "de": "Die Katze springt auf das Sofa.",
                                "en": "The cat jumps onto the sofa. (movement)"
                        },
                        {
                                "de": "Die Katze schläft auf dem Sofa.",
                                "en": "The cat is sleeping on the sofa. (location)"
                        }
                ]
        },
        {
                "number": "10",
                "id": "accusative-dative-verbs",
                "en": "Verbs That Take Accusative or Dative",
                "de": "Akkusativ- und Dativ-Verben",
                "intro": [
                        "Just like prepositions, individual verbs in German have a fixed ‘favorite case’ for their object — and it doesn't always match what you'd expect from English. Most verbs (sehen, kaufen, essen, lesen) simply take an Akkusativ object, the same way English direct objects work, so these feel intuitive.",
                        "But a specific group of verbs always takes a Dativ object instead, even though in English they look like ordinary direct objects: helfen (help), danken (thank), gefallen (please/like), gehören (belong to), glauben (believe), folgen (follow), antworten (answer), gratulieren (congratulate). There's no shortcut here — these simply have to be memorized as a set, the same way you'd memorize irregular verbs.",
                        "The practical test: if you can mentally insert an invisible ‘to’ in the English translation without it sounding strange (‘I help [to] you’, ‘it belongs [to] me’), that's often a sign the German verb wants Dativ — though this is a helpful hint, not a rule, so the safest approach is still memorizing the list."
                ],
                "tables": [
                        {
                                "caption": "Common Dativ-only verbs to memorize",
                                "headers": [
                                        "Verb",
                                        "Meaning",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "helfen",
                                                "to help",
                                                "Ich helfe dir."
                                        ],
                                        [
                                                "danken",
                                                "to thank",
                                                "Ich danke Ihnen."
                                        ],
                                        [
                                                "gefallen",
                                                "to please/like",
                                                "Das Kleid gefällt mir."
                                        ],
                                        [
                                                "gehören",
                                                "to belong to",
                                                "Das Auto gehört meinem Vater."
                                        ],
                                        [
                                                "glauben",
                                                "to believe",
                                                "Ich glaube dir."
                                        ],
                                        [
                                                "antworten",
                                                "to answer",
                                                "Er antwortet der Lehrerin."
                                        ],
                                        [
                                                "gratulieren",
                                                "to congratulate",
                                                "Wir gratulieren euch."
                                        ],
                                        [
                                                "folgen",
                                                "to follow",
                                                "Der Hund folgt mir."
                                        ]
                                ]
                        }
                ],
                "tip": "When in doubt whether a verb takes Akkusativ or Dativ, look it up rather than guess — but the eight verbs in the table above cover the vast majority of Dativ-verb sentences you'll actually need at A2, so memorizing just this short list will carry you a long way.",
                "examples": [
                        {
                                "de": "Ich helfe meiner Schwester.",
                                "en": "I'm helping my sister."
                        },
                        {
                                "de": "Das Geschenk gefällt mir sehr.",
                                "en": "I really like the gift."
                        },
                        {
                                "de": "Wem gehört diese Tasche?",
                                "en": "Who does this bag belong to?"
                        },
                        {
                                "de": "Ich glaube dir nicht.",
                                "en": "I don't believe you."
                        },
                        {
                                "de": "Er antwortet mir nicht.",
                                "en": "He's not answering me."
                        },
                        {
                                "de": "Wir danken Ihnen für Ihre Hilfe.",
                                "en": "We thank you for your help."
                        }
                ]
        },
        {
                "number": "11",
                "id": "indefinite-pronouns",
                "en": "Indefinite Pronouns",
                "de": "Indefinitpronomen",
                "intro": [
                        "Indefinite pronouns let you talk about people or things without naming them specifically — ‘someone’, ‘no one’, ‘something’, ‘nothing’, ‘everyone’, ‘some/a few’. You already have the building blocks from earlier levels; this topic organizes them into a system you can use confidently.",
                        "The core pairs to know are: jemand/niemand (someone/no one — for people), etwas/nichts (something/nothing — for things), and alle/manche/einige (everyone / some / a few). Unlike nouns, etwas and nichts never change form no matter what case they're in, which makes them refreshingly easy.",
                        "Jemand and niemand DO take case endings, though you'll often hear them left uninflected in casual speech: jemand → jemanden (Akkusativ) → jemandem (Dativ). In relaxed conversation, many speakers just say “Ich habe jemand gesehen” instead of the fully correct “jemanden” — both are common enough that you'll understand either."
                ],
                "tables": [
                        {
                                "caption": "Key indefinite pronouns",
                                "headers": [
                                        "German",
                                        "English",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "jemand",
                                                "someone",
                                                "Jemand hat angerufen."
                                        ],
                                        [
                                                "niemand",
                                                "no one",
                                                "Niemand war zu Hause."
                                        ],
                                        [
                                                "etwas",
                                                "something",
                                                "Ich möchte etwas essen."
                                        ],
                                        [
                                                "nichts",
                                                "nothing",
                                                "Ich habe nichts gehört."
                                        ],
                                        [
                                                "alle",
                                                "everyone/all",
                                                "Alle waren da."
                                        ],
                                        [
                                                "manche",
                                                "some (people/things)",
                                                "Manche Leute mögen das nicht."
                                        ],
                                        [
                                                "einige",
                                                "a few/several",
                                                "Einige Freunde kommen mit."
                                        ]
                                ]
                        }
                ],
                "tip": "Etwas and nichts are the easiest indefinite pronouns in German because they NEVER change form for case — unlike almost everything else you've learned so far. Use that as a mental reward: two words you can use anywhere without worrying about endings at all.",
                "examples": [
                        {
                                "de": "Hat jemand meine Tasche gesehen?",
                                "en": "Has anyone seen my bag?"
                        },
                        {
                                "de": "Niemand weiß die Antwort.",
                                "en": "No one knows the answer."
                        },
                        {
                                "de": "Möchtest du etwas trinken?",
                                "en": "Would you like something to drink?"
                        },
                        {
                                "de": "Ich habe heute nichts gegessen.",
                                "en": "I haven't eaten anything today."
                        },
                        {
                                "de": "Alle sind mit dem Plan einverstanden.",
                                "en": "Everyone agrees with the plan."
                        },
                        {
                                "de": "Einige Kollegen bleiben länger im Büro.",
                                "en": "A few colleagues are staying longer at the office."
                        }
                ]
        },
        {
                "number": "12",
                "id": "travel-vocabulary",
                "en": "Everyday German: Travel Vocabulary",
                "de": "Reise-Vokabeln",
                "intro": [
                        "A2 is where travel conversations get real — not just ‘Wo ist der Bahnhof?’ from A1, but planning trips, describing your journey, and handling the small complications that come up along the way (delays, connections, luggage). This set builds the vocabulary foundation for the ticket-booking dialogue in the next topic.",
                        "Notice the useful word pairs: abfahren (depart) vs. ankommen (arrive), einsteigen (board/get in) vs. aussteigen (get off), Hinfahrt (outbound journey) vs. Rückfahrt (return journey) — German loves building precise opposite pairs like this with separable prefixes, and recognizing the pattern helps you guess new words.",
                        "You'll also want umsteigen (to change/transfer trains), verspätet (delayed), and der Anschluss (connection) — the three words that come up the moment anything goes even slightly wrong with a journey, which, realistically, it eventually will."
                ],
                "tables": [
                        {
                                "caption": "Core travel vocabulary",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "die Hinfahrt / die Rückfahrt",
                                                "outbound journey / return journey"
                                        ],
                                        [
                                                "abfahren / ankommen",
                                                "to depart / to arrive"
                                        ],
                                        [
                                                "einsteigen / aussteigen / umsteigen",
                                                "to board / to get off / to change (trains)"
                                        ],
                                        [
                                                "der Anschluss, ¨-e",
                                                "connection (train/flight)"
                                        ],
                                        [
                                                "verspätet / die Verspätung",
                                                "delayed / the delay"
                                        ],
                                        [
                                                "das Gleis, -e",
                                                "platform/track"
                                        ],
                                        [
                                                "der Fahrplan, ¨-e",
                                                "timetable"
                                        ],
                                        [
                                                "das Gepäck",
                                                "luggage"
                                        ]
                                ]
                        }
                ],
                "tip": "If your train is delayed, you'll hear “der Zug hat 10 Minuten Verspätung” (the train is 10 minutes late) over the loudspeaker — recognizing Verspätung instantly, without translating it word by word, will save you real confusion at a busy station.",
                "examples": [
                        {
                                "de": "Wann fährt der Zug ab?",
                                "en": "When does the train depart?"
                        },
                        {
                                "de": "Wir müssen in Frankfurt umsteigen.",
                                "en": "We have to change trains in Frankfurt."
                        },
                        {
                                "de": "Der Zug hat 15 Minuten Verspätung.",
                                "en": "The train is 15 minutes late."
                        },
                        {
                                "de": "Von welchem Gleis fährt der Zug nach Berlin?",
                                "en": "Which platform does the train to Berlin leave from?"
                        },
                        {
                                "de": "Ich habe mein Gepäck im Zug vergessen!",
                                "en": "I left my luggage on the train!"
                        },
                        {
                                "de": "Haben wir noch Anschluss nach München?",
                                "en": "Do we still have a connection to Munich?"
                        }
                ]
        },
        {
                "number": "13",
                "id": "booking-train-ticket",
                "en": "Everyday German: Booking a Train Ticket",
                "de": "Anleitung zur Buchung eines Zugtickets",
                "intro": [
                        "This topic turns the vocabulary from the last lesson into a full working dialogue — the kind of exchange you'd actually have at a ticket counter (der Schalter) or on a ticket machine (der Fahrkartenautomat) in a German-speaking country. Walking through it once means you'll recognize every part of it when it happens for real.",
                        "A booking conversation almost always follows the same shape: state your destination and preferred time, choose one-way or return (einfach oder hin und zurück), pick a class (1. or 2. Klasse), and confirm payment. Learning this fixed shape means you can focus your listening on just the details that change — times, prices, platforms — rather than parsing the whole sentence from scratch each time.",
                        "Two phrases are worth memorizing as complete chunks because you'll use them at every counter or machine: “Einmal nach [Stadt], bitte” (One [ticket] to [city], please) and “Wann fährt der nächste Zug nach ...?” (When does the next train to ... leave?)."
                ],
                "tables": [
                        {
                                "caption": "A ticket-booking dialogue",
                                "headers": [
                                        "Speaker",
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "You",
                                                "Einmal nach Berlin, bitte. Einfach oder hin und zurück?",
                                                "One to Berlin please. One-way or return?"
                                        ],
                                        [
                                                "Clerk",
                                                "Hin und zurück, bitte. Wann möchten Sie fahren?",
                                                "Return please. When would you like to travel?"
                                        ],
                                        [
                                                "You",
                                                "Am Samstag, um 9 Uhr.",
                                                "On Saturday, at 9 o'clock."
                                        ],
                                        [
                                                "Clerk",
                                                "1. oder 2. Klasse?",
                                                "1st or 2nd class?"
                                        ],
                                        [
                                                "You",
                                                "2. Klasse, bitte. Was kostet das?",
                                                "2nd class please. How much does that cost?"
                                        ],
                                        [
                                                "Clerk",
                                                "Das macht 45 Euro. Der Zug fährt von Gleis 7.",
                                                "That comes to 45 euros. The train leaves from platform 7."
                                        ]
                                ]
                        }
                ],
                "tip": "At an automated ticket machine (Fahrkartenautomat), the same vocabulary appears as menu options instead of spoken questions — so learning this dialogue also prepares you to navigate the machine's touchscreen confidently, without needing a live person to help.",
                "examples": [
                        {
                                "de": "Einmal nach Hamburg, bitte.",
                                "en": "One [ticket] to Hamburg, please."
                        },
                        {
                                "de": "Einfach oder hin und zurück?",
                                "en": "One-way or return?"
                        },
                        {
                                "de": "Wann fährt der nächste Zug nach München?",
                                "en": "When does the next train to Munich leave?"
                        },
                        {
                                "de": "Ich hätte gern einen Fensterplatz.",
                                "en": "I'd like a window seat."
                        },
                        {
                                "de": "Was kostet eine Fahrkarte nach Köln?",
                                "en": "How much does a ticket to Cologne cost?"
                        },
                        {
                                "de": "Von welchem Gleis fährt der Zug ab?",
                                "en": "Which platform does the train leave from?"
                        }
                ]
        },
        {
                "number": "14",
                "id": "connectors-weil-denn-dass",
                "en": "Connectors: weil, denn & dass",
                "de": "Konnektoren (weil, denn, dass)",
                "intro": [
                        "These three little words all translate roughly as ‘because’ or ‘that’ in English, but they behave very differently in German — and mixing them up is one of the most common A2 mistakes. The key difference is what each one does to word order.",
                        "Weil (because) is a subordinating conjunction: it sends the conjugated verb all the way to the END of its clause. “Ich bleibe zu Hause, weil ich krank bin” (I'm staying home because I'm sick) — notice bin lands at the very end. Dass (that) works exactly the same way: it also pushes the verb to the end (“Ich weiß, dass du müde bist”).",
                        "Denn (because/for), by contrast, is a coordinating conjunction — it simply joins two independent, normal-word-order sentences, like ‘und’ or ‘aber’ already do. “Ich bleibe zu Hause, denn ich bin krank” keeps bin in its normal second position. Both weil and denn are correct and mean almost the same thing; the difference is purely about where the verb goes."
                ],
                "tables": [
                        {
                                "caption": "Same meaning, different word order",
                                "headers": [
                                        "Connector",
                                        "Type",
                                        "Verb position",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "weil",
                                                "subordinating",
                                                "goes to the end",
                                                "..., weil ich krank bin."
                                        ],
                                        [
                                                "denn",
                                                "coordinating",
                                                "stays in position 2",
                                                "..., denn ich bin krank."
                                        ],
                                        [
                                                "dass",
                                                "subordinating",
                                                "goes to the end",
                                                "Ich weiß, dass du recht hast."
                                        ]
                                ]
                        }
                ],
                "tip": "Quick test: after weil or dass, try to find the conjugated verb — if it's sitting at the very end of the clause, you're using it correctly. After denn, the verb should look exactly like it would in its own separate sentence, in normal second position.",
                "examples": [
                        {
                                "de": "Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.",
                                "en": "I'm learning German because I want to work in Germany."
                        },
                        {
                                "de": "Ich lerne Deutsch, denn ich möchte in Deutschland arbeiten.",
                                "en": "I'm learning German, for I want to work in Germany."
                        },
                        {
                                "de": "Ich glaube, dass er recht hat.",
                                "en": "I believe that he's right."
                        },
                        {
                                "de": "Sie kommt nicht, weil sie krank ist.",
                                "en": "She's not coming because she's sick."
                        },
                        {
                                "de": "Weißt du, dass das Geschäft heute geschlossen ist?",
                                "en": "Do you know that the shop is closed today?"
                        },
                        {
                                "de": "Er ist müde, denn er hat die ganze Nacht gearbeitet.",
                                "en": "He's tired, for he worked all night."
                        }
                ]
        },
        {
                "number": "15",
                "id": "hobbies-sport-first-aid",
                "en": "Everyday German: Hobbies, Sport & First Aid",
                "de": "Hobbys, Sport und Erste Hilfe",
                "intro": [
                        "This topic combines two practical vocabulary sets that A2 learners need for everyday small talk and safety: talking about your free time and sports, and knowing the basic words for a first-aid emergency — useful vocabulary you hope you'll never need, but should recognize instantly if you do.",
                        "For hobbies, the pattern “Ich spiele + [sport]” covers ball sports (Fußball, Tennis, Basketball), while “Ich gehe + [activity]” covers activities you do rather than play (schwimmen, laufen, wandern). Getting this pattern right (rather than saying “Ich spiele schwimmen”) is a small but very noticeable detail to native speakers.",
                        "First-aid vocabulary is short but critical: der Notfall (emergency), die Erste Hilfe (first aid), verletzt (injured), der Krankenwagen (ambulance), and the number 112, which is the EU-wide emergency number for both ambulance and fire brigade."
                ],
                "tables": [
                        {
                                "caption": "Hobby & first-aid essentials",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "Ich spiele Fußball/Tennis.",
                                                "I play football/tennis."
                                        ],
                                        [
                                                "Ich gehe schwimmen/laufen.",
                                                "I go swimming/running."
                                        ],
                                        [
                                                "der Notfall, ¨-e",
                                                "emergency"
                                        ],
                                        [
                                                "die Erste Hilfe",
                                                "first aid"
                                        ],
                                        [
                                                "verletzt sein",
                                                "to be injured"
                                        ],
                                        [
                                                "der Krankenwagen, -",
                                                "ambulance"
                                        ],
                                        [
                                                "Hilfe!",
                                                "Help!"
                                        ],
                                        [
                                                "Rufen Sie einen Krankenwagen!",
                                                "Call an ambulance!"
                                        ]
                                ]
                        }
                ],
                "tip": "Memorize the number 112 as a set phrase, not just a number: “Rufen Sie 112!” is understood across the entire EU for any emergency, so it's worth being able to say it instantly under stress, without having to think.",
                "examples": [
                        {
                                "de": "In meiner Freizeit spiele ich gern Fußball.",
                                "en": "In my free time I like playing football."
                        },
                        {
                                "de": "Er geht jeden Morgen laufen.",
                                "en": "He goes running every morning."
                        },
                        {
                                "de": "Sie ist beim Sport verletzt worden.",
                                "en": "She got injured while playing sport."
                        },
                        {
                                "de": "Rufen Sie schnell einen Krankenwagen!",
                                "en": "Call an ambulance quickly!"
                        },
                        {
                                "de": "Das ist ein Notfall! Ich brauche Hilfe!",
                                "en": "This is an emergency! I need help!"
                        },
                        {
                                "de": "Hast du einen Erste-Hilfe-Kurs gemacht?",
                                "en": "Have you taken a first-aid course?"
                        }
                ]
        },
        {
                "number": "16",
                "id": "indirect-questions",
                "en": "Indirect Questions with ob & W-Words",
                "de": "Indirekte Fragen mit ob und W-Fragen",
                "intro": [
                        "An indirect question is a polite way of asking something by wrapping it inside a bigger sentence — “Wissen Sie, wo der Bahnhof ist?” (Do you know where the station is?) instead of the blunt “Wo ist der Bahnhof?” This is a huge step up in politeness and naturalness at A2, and it uses grammar you already have: the subordinate-clause verb-to-the-end rule from weil and dass.",
                        "For yes/no questions, German uses ob (whether/if) as the connecting word: “Ich weiß nicht, ob er kommt” (I don't know whether he's coming). For questions that already start with a W-word (was, wer, wo, wann, warum, wie...), you simply keep that same W-word and push the verb to the end of the clause: “Ich weiß nicht, wann der Bus kommt.”",
                        "Common sentence-starters for this pattern are worth memorizing as ready-made openers: “Wissen Sie, ob/wo/wann...?”, “Können Sie mir sagen, ob/wo/wann...?”, and “Ich möchte wissen, ob/wo/wann...” — these three alone will carry you through most polite requests for information."
                ],
                "tables": [
                        {
                                "caption": "Direct question → indirect question",
                                "headers": [
                                        "Direct question",
                                        "Indirect question"
                                ],
                                "rows": [
                                        [
                                                "Kommt er heute?",
                                                "Ich weiß nicht, ob er heute kommt."
                                        ],
                                        [
                                                "Wo ist der Bahnhof?",
                                                "Können Sie mir sagen, wo der Bahnhof ist?"
                                        ],
                                        [
                                                "Wann fährt der Zug?",
                                                "Wissen Sie, wann der Zug fährt?"
                                        ],
                                        [
                                                "Warum ist er nicht da?",
                                                "Ich frage mich, warum er nicht da ist."
                                        ]
                                ]
                        }
                ],
                "tip": "Whenever the direct question has NO question word (just a yes/no question), reach for ob. Whenever the direct question already has a question word (wo, wann, warum...), simply reuse that same word — don't add ob on top of it.",
                "examples": [
                        {
                                "de": "Wissen Sie, ob das Geschäft heute geöffnet ist?",
                                "en": "Do you know whether the shop is open today?"
                        },
                        {
                                "de": "Können Sie mir sagen, wo die Toilette ist?",
                                "en": "Could you tell me where the toilet is?"
                        },
                        {
                                "de": "Ich weiß nicht, wann der Film beginnt.",
                                "en": "I don't know when the film starts."
                        },
                        {
                                "de": "Ich frage mich, warum sie nicht angerufen hat.",
                                "en": "I wonder why she didn't call."
                        },
                        {
                                "de": "Weißt du, ob wir morgen Unterricht haben?",
                                "en": "Do you know whether we have class tomorrow?"
                        },
                        {
                                "de": "Können Sie mir sagen, wie viel das kostet?",
                                "en": "Could you tell me how much that costs?"
                        }
                ]
        },
        {
                "number": "17",
                "id": "letters-sms-vocabulary",
                "en": "Everyday German: Letters & Text Messages",
                "de": "Brief- & SMS-Vokabeln",
                "intro": [
                        "Written German splits into two very different registers: formal letters (Briefe), which follow strict conventions you'd use for official or business correspondence, and text messages (SMS/Nachrichten), which are as relaxed and abbreviated as texting in any language. A2 is the right level to learn both, since you'll need formal letters for German bureaucracy and casual texts for everyday friendships.",
                        "A formal letter always opens with “Sehr geehrte Damen und Herren” (Dear Sir or Madam) if you don't know the recipient, or “Sehr geehrte Frau/Herr [Name]” if you do, and closes with “Mit freundlichen Grüßen” (Kind regards) — both phrases should be memorized exactly as fixed formulas, not built word by word.",
                        "Texting, by contrast, uses informal openers like “Hallo” or “Hey”, drops full sentences freely, and leans on the same kind of abbreviations English texters use: LG (liebe Grüße — best wishes), VG (viele Grüße), and bb (bis bald — see you soon)."
                ],
                "tables": [
                        {
                                "caption": "Formal letters vs. casual texts",
                                "headers": [
                                        "Formal letter",
                                        "Casual text"
                                ],
                                "rows": [
                                        [
                                                "Sehr geehrte Damen und Herren,",
                                                "Hallo! / Hey!"
                                        ],
                                        [
                                                "Mit freundlichen Grüßen",
                                                "LG (liebe Grüße) / VG (viele Grüße)"
                                        ],
                                        [
                                                "Ich schreibe Ihnen, um ...",
                                                "Ich wollte nur sagen ..."
                                        ],
                                        [
                                                "Vielen Dank für Ihre schnelle Antwort.",
                                                "Danke! 😊"
                                        ],
                                        [
                                                "Ich freue mich auf Ihre Rückmeldung.",
                                                "Melde dich!"
                                        ]
                                ]
                        }
                ],
                "tip": "Never mix the two registers — starting an official letter with “Hey” or ending a casual text with “Mit freundlichen Grüßen” both sound noticeably odd to a native speaker. When unsure which register a situation calls for, formal is always the safer default.",
                "examples": [
                        {
                                "de": "Sehr geehrte Damen und Herren, ich schreibe Ihnen bezüglich meiner Bewerbung.",
                                "en": "Dear Sir or Madam, I am writing to you regarding my application."
                        },
                        {
                                "de": "Mit freundlichen Grüßen, Anna Müller",
                                "en": "Kind regards, Anna Müller"
                        },
                        {
                                "de": "Hey, kommst du heute Abend mit ins Kino?",
                                "en": "Hey, are you coming to the cinema tonight?"
                        },
                        {
                                "de": "Bin gleich da, warte kurz! LG",
                                "en": "I'll be right there, wait a sec! Best"
                        },
                        {
                                "de": "Vielen Dank für Ihre Nachricht. Ich melde mich morgen bei Ihnen.",
                                "en": "Thank you for your message. I'll be in touch with you tomorrow."
                        },
                        {
                                "de": "Alles klar, bis später! 👋",
                                "en": "Got it, see you later!"
                        }
                ]
        },
        {
                "number": "18",
                "id": "media-complaints",
                "en": "Everyday German: Media Types & Complaints",
                "de": "Medienarten sowie Reklamationen",
                "intro": [
                        "This topic covers two very different but equally practical vocabulary areas: naming the different kinds of media you consume (die Medien), and making a complaint (die Reklamation) when a product or service goes wrong — both common real-world situations at A2.",
                        "For media, you'll want die Zeitung (newspaper), die Zeitschrift (magazine), das Radio, der Podcast, and die sozialen Medien (social media) — plus the verb, nutzen (to use), which pairs naturally with all of them: “Ich nutze oft soziale Medien.”",
                        "For complaints, German business culture tends to be direct but polite: state the problem clearly, say what you'd like done about it, and use “Ich möchte mich beschweren” (I'd like to make a complaint) or the milder “Es gibt ein Problem mit ...” (There's a problem with ...) as your opening line."
                ],
                "tables": [
                        {
                                "caption": "Media words & complaint phrases",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "die Zeitung / die Zeitschrift",
                                                "newspaper / magazine"
                                        ],
                                        [
                                                "die sozialen Medien",
                                                "social media"
                                        ],
                                        [
                                                "der Podcast, -s",
                                                "podcast"
                                        ],
                                        [
                                                "die Reklamation, -en",
                                                "complaint (about a product/service)"
                                        ],
                                        [
                                                "sich beschweren",
                                                "to complain"
                                        ],
                                        [
                                                "Ich möchte mich beschweren.",
                                                "I'd like to make a complaint."
                                        ],
                                        [
                                                "umtauschen",
                                                "to exchange (a product)"
                                        ],
                                        [
                                                "das Geld zurückbekommen",
                                                "to get a refund"
                                        ]
                                ]
                        }
                ],
                "tip": "For a smooth complaint, follow this three-step shape: name the problem (“Der Fernseher funktioniert nicht.”), say what you want (“Ich möchte ihn umtauschen.”), and stay polite throughout — German customer service responds far better to calm, clear requests than to raised voices.",
                "examples": [
                        {
                                "de": "Ich lese jeden Morgen die Zeitung.",
                                "en": "I read the newspaper every morning."
                        },
                        {
                                "de": "Nutzt du oft soziale Medien?",
                                "en": "Do you use social media often?"
                        },
                        {
                                "de": "Ich möchte mich über diesen Artikel beschweren.",
                                "en": "I'd like to complain about this article/item."
                        },
                        {
                                "de": "Der Fernseher funktioniert nicht. Ich möchte ihn umtauschen.",
                                "en": "The TV doesn't work. I'd like to exchange it."
                        },
                        {
                                "de": "Kann ich mein Geld zurückbekommen?",
                                "en": "Can I get my money back?"
                        },
                        {
                                "de": "Ich höre gern Podcasts über Geschichte.",
                                "en": "I like listening to history podcasts."
                        }
                ]
        },
        {
                "number": "19",
                "id": "modal-verbs-preteritum",
                "en": "Modal Verbs in the Simple Past",
                "de": "Modalverben im Präteritum",
                "intro": [
                        "You already know können, müssen, dürfen, sollen, wollen, mögen from A1, and you know the Perfekt tense (haben/sein + Partizip II) for talking about the past. But modal verbs are the one big exception to that rule: in everyday spoken German, they almost always use the simple past (Präteritum) instead of the Perfekt, even in casual conversation.",
                        "The good news is that modal verbs in the Präteritum are actually easier than regular verbs: they drop their umlaut (können → konnte, not ‘könnte’ which is a different form entirely — the Konjunktiv II) and simply add regular weak-verb endings: -te, -test, -te, -ten, -tet, -ten. Once you know the ich-form, every other form follows the same predictable pattern.",
                        "This matters enormously for storytelling and explaining past situations: “Ich konnte nicht kommen, weil ich arbeiten musste” (I couldn't come because I had to work) sounds completely natural, while the Perfekt version “Ich habe nicht kommen können” is technically correct but rarely used in speech — native speakers reach for the Präteritum almost automatically with modals."
                ],
                "tables": [
                        {
                                "caption": "Modal verbs in the Präteritum (ich-form, then pattern)",
                                "headers": [
                                        "Infinitive",
                                        "Präteritum (ich)",
                                        "Meaning"
                                ],
                                "rows": [
                                        [
                                                "können",
                                                "konnte",
                                                "could / was able to"
                                        ],
                                        [
                                                "müssen",
                                                "musste",
                                                "had to"
                                        ],
                                        [
                                                "dürfen",
                                                "durfte",
                                                "was allowed to"
                                        ],
                                        [
                                                "sollen",
                                                "sollte",
                                                "was supposed to"
                                        ],
                                        [
                                                "wollen",
                                                "wollte",
                                                "wanted to"
                                        ],
                                        [
                                                "mögen",
                                                "mochte",
                                                "liked"
                                        ]
                                ]
                        }
                ],
                "tip": "All six modals in the Präteritum follow the exact same ending pattern as regular weak verbs (-te, -test, -te, -ten, -tet, -ten) — so once you know ‘ich konnte’, you automatically know ‘du konntest’, ‘wir konnten’, and so on, for every single modal verb without exception.",
                "examples": [
                        {
                                "de": "Ich konnte gestern nicht kommen.",
                                "en": "I couldn't come yesterday."
                        },
                        {
                                "de": "Wir mussten den ganzen Tag arbeiten.",
                                "en": "We had to work all day."
                        },
                        {
                                "de": "Sie durfte als Kind nicht allein ausgehen.",
                                "en": "She wasn't allowed to go out alone as a child."
                        },
                        {
                                "de": "Er wollte Arzt werden, aber es hat nicht geklappt.",
                                "en": "He wanted to become a doctor, but it didn't work out."
                        },
                        {
                                "de": "Ich sollte dich anrufen, aber ich habe es vergessen.",
                                "en": "I was supposed to call you, but I forgot."
                        },
                        {
                                "de": "Als Kind mochte ich kein Gemüse.",
                                "en": "As a child I didn't like vegetables."
                        }
                ]
        },
        {
                "number": "20",
                "id": "connectors-als-wenn-falls",
                "en": "Connectors: als, wenn & falls",
                "de": "Konnektoren (als, wenn, falls)",
                "intro": [
                        "All three of these words can translate as ‘when’ or ‘if’ in English, which is exactly why German learners mix them up — but each one has a specific, non-negotiable job. Getting this trio right is a real marker of moving past beginner German.",
                        "Als is used ONLY for a single completed event in the past — one specific moment that happened once and is now over: “Als ich zwanzig war, bin ich nach Berlin gezogen” (When I was twenty, I moved to Berlin). Wenn covers everything else related to time: repeated events in the past (‘whenever’), and any event in the present or future, even a one-time one: “Wenn ich Zeit habe, lese ich” (Whenever I have time, I read) or “Wenn ich morgen Zeit habe, rufe ich dich an” (If/when I have time tomorrow, I'll call you).",
                        "Falls is reserved for a genuine hypothetical — something that may or may not happen, closer to English ‘in case’ than ‘if’: “Falls es regnet, bleiben wir zu Hause” (In case it rains, we'll stay home). All three send the verb to the end of their clause, following the same subordinate-clause pattern as weil and dass."
                ],
                "tables": [
                        {
                                "caption": "Choosing the right word for 'when/if'",
                                "headers": [
                                        "Word",
                                        "Use case",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "als",
                                                "one single event, past only",
                                                "Als ich klein war, ..."
                                        ],
                                        [
                                                "wenn",
                                                "repeated past events, or any present/future event",
                                                "Wenn ich Zeit habe, ..."
                                        ],
                                        [
                                                "falls",
                                                "a genuine hypothetical ('in case')",
                                                "Falls es regnet, ..."
                                        ]
                                ]
                        }
                ],
                "tip": "The fastest test: is it a ONE-TIME event that already happened? Use als. Is it repeated, or happening now/in the future? Use wenn. Is it uncertain whether it will happen at all? Use falls. When in doubt between wenn and falls for a future event, wenn is almost always the safer, more common choice.",
                "examples": [
                        {
                                "de": "Als ich nach Deutschland kam, konnte ich kein Deutsch.",
                                "en": "When I came to Germany, I couldn't speak German."
                        },
                        {
                                "de": "Wenn ich müde bin, trinke ich Kaffee.",
                                "en": "Whenever I'm tired, I drink coffee."
                        },
                        {
                                "de": "Wenn du morgen Zeit hast, können wir uns treffen.",
                                "en": "If you have time tomorrow, we can meet up."
                        },
                        {
                                "de": "Falls du Fragen hast, ruf mich einfach an.",
                                "en": "In case you have questions, just call me."
                        },
                        {
                                "de": "Als wir Kinder waren, hatten wir keinen Fernseher.",
                                "en": "When we were children, we didn't have a TV."
                        },
                        {
                                "de": "Wenn es schneit, fahre ich mit dem Bus.",
                                "en": "Whenever it snows, I take the bus."
                        }
                ]
        },
        {
                "number": "21",
                "id": "restaurant-vocabulary",
                "en": "Everyday German: Ordering at a Restaurant",
                "de": "Restaurant-Vokabeln und das Bestellen im Restaurant",
                "intro": [
                        "A1 gave you basic food words; A2 gives you the full toolkit for a real restaurant visit — asking for a table, reading a menu, ordering with confidence, and handling the bill at the end. This is one of the most immediately useful conversations you can master.",
                        "A restaurant visit follows a predictable shape: being seated (Haben Sie einen Tisch für zwei?), ordering (Ich hätte gern... / Ich nehme...), and asking for the bill (Die Rechnung, bitte! / Zahlen, bitte!). Notice “Ich hätte gern” (I would like) is the polite conditional form — more natural in a restaurant than the blunter “Ich will”.",
                        "One cultural note worth knowing: in Germany, Austria, and Switzerland the waiter usually doesn't bring the bill automatically — you have to actively ask for it (“Zahlen, bitte!”) when you're ready to leave, unlike in some countries where it appears once you've finished eating."
                ],
                "tables": [
                        {
                                "caption": "A restaurant dialogue toolkit",
                                "headers": [
                                        "Situation",
                                        "German phrase",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "Asking for a table",
                                                "Haben Sie einen Tisch für zwei?",
                                                "Do you have a table for two?"
                                        ],
                                        [
                                                "Ordering",
                                                "Ich hätte gern die Suppe, bitte.",
                                                "I'd like the soup please."
                                        ],
                                        [
                                                "Asking for a recommendation",
                                                "Was empfehlen Sie?",
                                                "What do you recommend?"
                                        ],
                                        [
                                                "Dietary needs",
                                                "Ich bin Vegetarier/in.",
                                                "I'm a vegetarian."
                                        ],
                                        [
                                                "Asking for the bill",
                                                "Die Rechnung, bitte! / Zahlen, bitte!",
                                                "The bill please!"
                                        ],
                                        [
                                                "Splitting the bill",
                                                "Getrennt oder zusammen?",
                                                "Separately or together?"
                                        ]
                                ]
                        }
                ],
                "tip": "“Ich hätte gern...” is the single most useful ordering phrase in German — it's polite, natural, and works for literally anything you want to order, from a coffee to a full three-course meal. Default to it whenever you're unsure how formal to be.",
                "examples": [
                        {
                                "de": "Haben Sie einen Tisch für vier Personen?",
                                "en": "Do you have a table for four people?"
                        },
                        {
                                "de": "Ich hätte gern das Schnitzel mit Kartoffeln.",
                                "en": "I'd like the schnitzel with potatoes."
                        },
                        {
                                "de": "Was können Sie empfehlen?",
                                "en": "What can you recommend?"
                        },
                        {
                                "de": "Ich bin Vegetarierin, haben Sie etwas ohne Fleisch?",
                                "en": "I'm a vegetarian, do you have something without meat?"
                        },
                        {
                                "de": "Können wir bitte zahlen?",
                                "en": "Could we pay please?"
                        },
                        {
                                "de": "Getrennt, bitte.",
                                "en": "Separately please."
                        }
                ]
        },
        {
                "number": "22",
                "id": "um-zu-damit",
                "en": "Purpose Clauses: um...zu & damit",
                "de": "Konnektoren „um...zu“ und „damit“",
                "intro": [
                        "Both of these connectors answer the question ‘why?’ or ‘for what purpose?’, but the choice between them depends on one simple thing: is the SAME person doing both actions, or are TWO DIFFERENT people/subjects involved?",
                        "Um...zu is used when the subject of both parts of the sentence is the same person: “Ich lerne Deutsch, um in Deutschland zu arbeiten” (I'm learning German [in order] to work in Germany) — ‘I’ am both learning and working. Notice that um...zu uses an infinitive at the end (zu arbeiten), not a full conjugated clause.",
                        "Damit is required the moment the subject changes between the two halves: “Ich spreche langsam, damit du mich verstehst” (I speak slowly so that you understand me) — ‘I’ am speaking, but ‘you’ are understanding. Damit needs a full clause with a conjugated verb sent to the end, the same pattern as weil and dass."
                ],
                "tables": [
                        {
                                "caption": "um...zu vs. damit",
                                "headers": [
                                        "Situation",
                                        "Connector",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "Same subject for both actions",
                                                "um...zu + infinitive",
                                                "Ich spare Geld, um ein Auto zu kaufen."
                                        ],
                                        [
                                                "Different subjects",
                                                "damit + conjugated verb",
                                                "Ich gebe dir das Buch, damit du es liest."
                                        ]
                                ]
                        }
                ],
                "tip": "Ask yourself: is it the SAME person doing both things? If yes — um...zu, and end with a bare infinitive. If a DIFFERENT person is involved in the second half, you must switch to damit, since um...zu can never take its own separate subject.",
                "examples": [
                        {
                                "de": "Ich lerne jeden Tag, um die Prüfung zu bestehen.",
                                "en": "I study every day [in order] to pass the exam."
                        },
                        {
                                "de": "Sie ruft mich an, damit ich Bescheid weiß.",
                                "en": "She calls me so that I'm informed."
                        },
                        {
                                "de": "Wir sparen Geld, um eine Reise zu machen.",
                                "en": "We're saving money to take a trip."
                        },
                        {
                                "de": "Ich schreibe es auf, damit ich es nicht vergesse.",
                                "en": "I'm writing it down so I don't forget it."
                        },
                        {
                                "de": "Er arbeitet viel, um seine Familie zu unterstützen.",
                                "en": "He works a lot to support his family."
                        },
                        {
                                "de": "Ich spreche laut, damit alle mich hören können.",
                                "en": "I speak loudly so that everyone can hear me."
                        }
                ]
        },
        {
                "number": "23",
                "id": "polite-requests",
                "en": "Formulating Polite Requests",
                "de": "Höfliche Bitten formulieren",
                "intro": [
                        "At A1 you could make basic requests with bitte and simple imperatives (“Geben Sie mir bitte...”). A2 gives you softer, more natural-sounding ways to ask for things — the kind of polite hedging German speakers use constantly in shops, offices, and among strangers.",
                        "The workhorse phrase is “Könnten Sie...?” (Could you...?) — note the umlaut: könnten is the Konjunktiv II form of können, and it's noticeably softer and more polite than the plain “Können Sie...?”, the same way English ‘Could you’ sounds gentler than ‘Can you’.",
                        "Two more essential softening phrases: “Ich hätte gern...” (I would like..., which you already met in the restaurant topic) and “Würden Sie mir bitte helfen?” (Would you help me please?). Sprinkling in vielleicht (maybe) or eventuell (possibly) softens a request even further: “Könnten Sie mir vielleicht helfen?”"
                ],
                "tables": [
                        {
                                "caption": "From blunt to polite",
                                "headers": [
                                        "Level",
                                        "Phrase",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "Direct",
                                                "Helfen Sie mir!",
                                                "Help me!"
                                        ],
                                        [
                                                "Polite (A1 level)",
                                                "Können Sie mir bitte helfen?",
                                                "Can you help me please?"
                                        ],
                                        [
                                                "Softer (A2 level)",
                                                "Könnten Sie mir bitte helfen?",
                                                "Could you help me please?"
                                        ],
                                        [
                                                "Very soft",
                                                "Könnten Sie mir vielleicht helfen?",
                                                "Could you maybe help me?"
                                        ]
                                ]
                        }
                ],
                "tip": "Swapping können for könnten (and wollen for würden, as in “Würden Sie...”) is the single easiest way to sound noticeably more polite in German — it's a small spelling change with a big effect on tone, and it costs you nothing extra to learn since you already know the base verb.",
                "examples": [
                        {
                                "de": "Könnten Sie mir bitte den Weg zum Bahnhof zeigen?",
                                "en": "Could you show me the way to the station please?"
                        },
                        {
                                "de": "Würden Sie mir bitte die Speisekarte bringen?",
                                "en": "Would you bring me the menu please?"
                        },
                        {
                                "de": "Ich hätte gern noch etwas Wasser.",
                                "en": "I'd like some more water please."
                        },
                        {
                                "de": "Könnten Sie das bitte wiederholen?",
                                "en": "Could you repeat that please?"
                        },
                        {
                                "de": "Wäre es möglich, den Termin zu verschieben?",
                                "en": "Would it be possible to reschedule the appointment?"
                        },
                        {
                                "de": "Könnten Sie mir vielleicht kurz helfen?",
                                "en": "Could you maybe help me for a moment?"
                        }
                ]
        },
        {
                "number": "24",
                "id": "animals-farm-life",
                "en": "Everyday German: Animals & Farm Life",
                "de": "Tiere & Bauernhofleben",
                "intro": [
                        "This vocabulary topic rounds out your everyday German with a category that comes up more often than you'd expect — pets, wildlife, and farm animals appear constantly in casual conversation, children's stories, and simple reading texts, making this a genuinely useful set to know at A2.",
                        "Notice how many animal names are simply compound words or closely related to their English cousins once you know the pattern: die Kuh (cow), das Schwein (pig, also colloquially used the way English uses ‘pig’ as an insult), das Huhn (chicken) — and der Bauernhof itself literally means ‘farmer's yard’, i.e. farm.",
                        "Pets get their own small vocabulary too: der Hund (dog), die Katze (cat), and der Vogel (bird) are the three you'll use constantly when talking about your own or someone else's pets — useful in small talk about home life."
                ],
                "tables": [
                        {
                                "caption": "Common animals",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "die Kuh, ¨-e",
                                                "cow"
                                        ],
                                        [
                                                "das Schwein, -e",
                                                "pig"
                                        ],
                                        [
                                                "das Huhn, ¨-er",
                                                "chicken"
                                        ],
                                        [
                                                "das Pferd, -e",
                                                "horse"
                                        ],
                                        [
                                                "das Schaf, -e",
                                                "sheep"
                                        ],
                                        [
                                                "der Bauernhof, ¨-e",
                                                "farm"
                                        ],
                                        [
                                                "der Hund / die Katze",
                                                "dog / cat"
                                        ],
                                        [
                                                "der Vogel, ¨-",
                                                "bird"
                                        ]
                                ]
                        }
                ],
                "tip": "Many German animal sounds and phrases are built the same way as English (‘der Hund bellt’ — the dog barks), so you can often guess the verb once you know the animal — a handy shortcut when reading simple stories or children's books in German.",
                "examples": [
                        {
                                "de": "Auf dem Bauernhof gibt es viele Tiere.",
                                "en": "There are many animals on the farm."
                        },
                        {
                                "de": "Die Kühe stehen auf der Wiese.",
                                "en": "The cows are standing in the meadow."
                        },
                        {
                                "de": "Mein Hund bellt jede Nacht.",
                                "en": "My dog barks every night."
                        },
                        {
                                "de": "Wir haben zwei Katzen zu Hause.",
                                "en": "We have two cats at home."
                        },
                        {
                                "de": "Die Hühner legen jeden Tag Eier.",
                                "en": "The chickens lay eggs every day."
                        },
                        {
                                "de": "Kannst du reiten? Ich liebe Pferde.",
                                "en": "Can you ride (a horse)? I love horses."
                        }
                ]
        },
        {
                "number": "25",
                "id": "apartment-search",
                "en": "Everyday German: Searching for an Apartment",
                "de": "Wohnungssuche",
                "intro": [
                        "Finding a flat is one of the first real-world challenges many newcomers face in a German-speaking country, and it comes with its own specialized vocabulary — from reading listings to viewing an apartment to signing the lease. This topic gives you the words to handle that process confidently.",
                        "German apartment listings use a lot of abbreviations you'll need to decode: ZKB (Zimmer, Küche, Bad — rooms, kitchen, bathroom), qm (Quadratmeter — square meters), and kalt/warm (cold rent = just the base rent, vs. warm rent = rent including utilities/heating, called Nebenkosten).",
                        "The key verb throughout this whole process is mieten (to rent, as the tenant) versus vermieten (to rent out, as the landlord) — easy to confuse since they look almost identical, but the prefix ver- signals the landlord's side of the transaction."
                ],
                "tables": [
                        {
                                "caption": "Apartment-hunting essentials",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "die Wohnung, -en",
                                                "flat/apartment"
                                        ],
                                        [
                                                "mieten / vermieten",
                                                "to rent / to rent out"
                                        ],
                                        [
                                                "der Vermieter / die Vermieterin",
                                                "landlord / landlady"
                                        ],
                                        [
                                                "die Miete, -n",
                                                "rent"
                                        ],
                                        [
                                                "die Nebenkosten (Pl.)",
                                                "utility costs (heating, water, etc.)"
                                        ],
                                        [
                                                "die Kaution, -en",
                                                "deposit"
                                        ],
                                        [
                                                "besichtigen",
                                                "to view/tour (an apartment)"
                                        ],
                                        [
                                                "der Mietvertrag, ¨-e",
                                                "lease/rental contract"
                                        ]
                                ]
                        }
                ],
                "tip": "When a listing says “65 qm, 2 ZKB, warm 750€” it means: 65 square meters, 2 rooms plus kitchen and bathroom, and a total of 750€ per month including utilities — learning to read these compact abbreviations instantly will save you a lot of confusion while flat-hunting.",
                "examples": [
                        {
                                "de": "Ich suche eine Zweizimmerwohnung in der Stadt.",
                                "en": "I'm looking for a two-room flat in the city."
                        },
                        {
                                "de": "Wie hoch ist die Miete pro Monat?",
                                "en": "How much is the rent per month?"
                        },
                        {
                                "de": "Sind die Nebenkosten im Preis enthalten?",
                                "en": "Are the utilities included in the price?"
                        },
                        {
                                "de": "Kann ich die Wohnung am Samstag besichtigen?",
                                "en": "Can I view the flat on Saturday?"
                        },
                        {
                                "de": "Die Kaution beträgt drei Monatsmieten.",
                                "en": "The deposit is three months' rent."
                        },
                        {
                                "de": "Wir müssen noch den Mietvertrag unterschreiben.",
                                "en": "We still need to sign the lease."
                        }
                ]
        },
        {
                "number": "26",
                "id": "adjective-comparison",
                "en": "Adjective Forms & Comparison",
                "de": "Adjektivformen & Steigerung",
                "intro": [
                        "Just like English has ‘big, bigger, biggest’, German adjectives have three degrees: the base form (Positiv), the comparative (Komparativ, for comparing two things), and the superlative (Superlativ, for the single best/most example). The regular pattern adds -er for comparative and am ...-sten for superlative.",
                        "Many common one-syllable adjectives also add an umlaut in both the comparative and superlative: alt → älter → am ältesten (old → older → oldest), groß → größer → am größten (big → bigger → biggest), jung → jünger → am jüngsten (young → younger → youngest). There's no shortcut here beyond noticing the pattern and practicing the common ones.",
                        "A handful of very frequent adjectives are fully irregular and simply need to be memorized as their own set: gut → besser → am besten (good → better → best), viel → mehr → am meisten (much → more → most), gern → lieber → am liebsten (gladly → more gladly → most gladly, used constantly for expressing preferences)."
                ],
                "tables": [
                        {
                                "caption": "Regular, umlaut, and irregular comparison",
                                "headers": [
                                        "Type",
                                        "Positiv",
                                        "Komparativ",
                                        "Superlativ"
                                ],
                                "rows": [
                                        [
                                                "Regular",
                                                "schnell",
                                                "schneller",
                                                "am schnellsten"
                                        ],
                                        [
                                                "Umlaut",
                                                "alt",
                                                "älter",
                                                "am ältesten"
                                        ],
                                        [
                                                "Umlaut",
                                                "groß",
                                                "größer",
                                                "am größten"
                                        ],
                                        [
                                                "Irregular",
                                                "gut",
                                                "besser",
                                                "am besten"
                                        ],
                                        [
                                                "Irregular",
                                                "viel",
                                                "mehr",
                                                "am meisten"
                                        ],
                                        [
                                                "Irregular",
                                                "gern",
                                                "lieber",
                                                "am liebsten"
                                        ]
                                ]
                        }
                ],
                "tip": "“Am liebsten” (most gladly / favorite) is one of the most useful superlative phrases in daily German — it's how you say what you like best: “Am liebsten trinke ich Tee” (My favorite thing to drink is tea, literally: I drink tea most gladly).",
                "examples": [
                        {
                                "de": "Mein Bruder ist größer als ich.",
                                "en": "My brother is taller than me."
                        },
                        {
                                "de": "Berlin ist die größte Stadt in Deutschland.",
                                "en": "Berlin is the biggest city in Germany."
                        },
                        {
                                "de": "Dieser Kaffee schmeckt besser als der andere.",
                                "en": "This coffee tastes better than the other one."
                        },
                        {
                                "de": "Am liebsten esse ich Pizza.",
                                "en": "My favorite food is pizza."
                        },
                        {
                                "de": "Sie ist die jüngste in ihrer Familie.",
                                "en": "She's the youngest in her family."
                        },
                        {
                                "de": "Im Sommer arbeite ich am meisten.",
                                "en": "I work the most in summer."
                        }
                ]
        },
        {
                "number": "27",
                "id": "dative-adjective-endings",
                "en": "Adjective Endings in the Dative",
                "de": "Adjektivendungen im Dativ",
                "intro": [
                        "When an adjective sits directly before a noun (“a big house”, not just “the house is big”), it needs an ending — and that ending depends on the noun's case, gender, and which type of article (if any) comes before it. This topic focuses specifically on the Dativ case, building on the possessive-article endings you learned earlier in this chapter.",
                        "The good news: in the Dativ, adjective endings are refreshingly simple and uniform. After der-words (der/die/das/dem/der/den) and after ein-words (ein/eine/mein/dein...), the adjective ending is always -en in the Dativ, regardless of gender. This is one of the few places in German grammar where you don't need to memorize a table with different endings for masculine/feminine/neuter — it's -en across the board.",
                        "Compare this to the Nominativ and Akkusativ, where the endings do vary by gender — the Dativ's uniform -en is one less thing to worry about, and a good reason to feel confident once you've got this one locked in."
                ],
                "tables": [
                        {
                                "caption": "Dativ adjective endings (always -en)",
                                "headers": [
                                        "Gender",
                                        "Article + adjective + noun",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "Masculine",
                                                "mit dem neuen Auto",
                                                "with the new car"
                                        ],
                                        [
                                                "Feminine",
                                                "mit der neuen Tasche",
                                                "with the new bag"
                                        ],
                                        [
                                                "Neuter",
                                                "mit dem neuen Fahrrad",
                                                "with the new bicycle"
                                        ],
                                        [
                                                "Plural",
                                                "mit den neuen Schuhen",
                                                "with the new shoes"
                                        ]
                                ]
                        }
                ],
                "tip": "Whenever you're forming a Dativ phrase with an adjective, you never need to check gender first — the ending is always -en. This makes the Dativ the easiest case to get adjective endings right in, so use it to build confidence before tackling Nominativ and Akkusativ endings.",
                "examples": [
                        {
                                "de": "Ich fahre mit meinem neuen Auto zur Arbeit.",
                                "en": "I drive to work in my new car."
                        },
                        {
                                "de": "Sie kommt mit ihrer besten Freundin.",
                                "en": "She's coming with her best friend."
                        },
                        {
                                "de": "Wir wohnen in einem kleinen Dorf.",
                                "en": "We live in a small village."
                        },
                        {
                                "de": "Er spricht mit den netten Nachbarn.",
                                "en": "He's talking with the nice neighbours."
                        },
                        {
                                "de": "Ich helfe meinem kleinen Bruder.",
                                "en": "I'm helping my little brother."
                        },
                        {
                                "de": "Das Geschenk ist von meiner alten Lehrerin.",
                                "en": "The gift is from my old teacher."
                        }
                ]
        },
        {
                "number": "28",
                "id": "time-adverbs",
                "en": "Time Adverbs",
                "de": "Temporaladverbien",
                "intro": [
                        "Time adverbs are the small words that anchor a sentence to a moment — heute (today), gestern (yesterday), morgen (tomorrow), and their extended family. You've used a few since A1, but A2 fills out the full set you need for describing sequences of events and habits with real precision.",
                        "A useful trick: German builds many time words by combining a base word with -morgen (morning), -mittag (noon), and -abend (evening): vorgestern (the day before yesterday), übermorgen (the day after tomorrow), heute Morgen (this morning), gestern Abend (yesterday evening). Once you spot der Baustein (building block) pattern, you can often guess new time words before ever looking them up.",
                        "Frequency adverbs — immer (always), oft (often), manchmal (sometimes), selten (rarely), nie (never) — typically sit right after the conjugated verb in a normal sentence, giving your storytelling and daily-routine descriptions much more nuance than simple present-tense statements alone."
                ],
                "tables": [
                        {
                                "caption": "Building a time vocabulary",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "vorgestern",
                                                "the day before yesterday"
                                        ],
                                        [
                                                "gestern",
                                                "yesterday"
                                        ],
                                        [
                                                "heute",
                                                "today"
                                        ],
                                        [
                                                "morgen",
                                                "tomorrow"
                                        ],
                                        [
                                                "übermorgen",
                                                "the day after tomorrow"
                                        ],
                                        [
                                                "immer / oft / manchmal / selten / nie",
                                                "always / often / sometimes / rarely / never"
                                        ]
                                ]
                        }
                ],
                "tip": "Combine a day-word with a time-of-day word to build precise phrases: gestern Abend (yesterday evening), heute Morgen (this morning), morgen früh (tomorrow morning) — these compact two-word combinations are extremely common in spoken German and sound far more natural than longer alternatives.",
                "examples": [
                        {
                                "de": "Gestern Abend habe ich einen Film gesehen.",
                                "en": "Yesterday evening I watched a film."
                        },
                        {
                                "de": "Ich stehe morgens immer um sechs Uhr auf.",
                                "en": "I always get up at six in the morning."
                        },
                        {
                                "de": "Wir treffen uns übermorgen um 15 Uhr.",
                                "en": "We're meeting the day after tomorrow at 3 pm."
                        },
                        {
                                "de": "Er ruft mich selten an.",
                                "en": "He rarely calls me."
                        },
                        {
                                "de": "Manchmal gehe ich nach der Arbeit spazieren.",
                                "en": "Sometimes I go for a walk after work."
                        },
                        {
                                "de": "Ich war noch nie in Berlin.",
                                "en": "I've never been to Berlin."
                        }
                ]
        },
        {
                "number": "29",
                "id": "planning-city-trip",
                "en": "Everyday German: Planning a City Trip",
                "de": "Eine Städtereise planen",
                "intro": [
                        "This topic pulls together travel and time vocabulary into a practical planning conversation — deciding where to go, when, and what to see. It's exactly the kind of exchange that happens naturally between friends or in a travel agency, and it's a great way to practice future-tense thinking without yet needing the formal Futur tense (present tense + a time word does the job perfectly well in German).",
                        "Key planning vocabulary includes die Sehenswürdigkeit (tourist attraction/sight), buchen (to book), and die Unterkunft (accommodation) — plus the modal verbs möchten (would like to) and wollen (want to) for expressing plans and intentions.",
                        "Notice that German commonly uses the present tense with a future time word to talk about future plans, exactly the way English sometimes does (“We're leaving tomorrow”): “Wir fahren nächste Woche nach München” already clearly means a future trip, even though fahren is grammatically present tense."
                ],
                "tables": [
                        {
                                "caption": "Trip-planning phrases",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "Wohin möchtest du fahren?",
                                                "Where would you like to go?"
                                        ],
                                        [
                                                "die Sehenswürdigkeit, -en",
                                                "tourist attraction/sight"
                                        ],
                                        [
                                                "ein Hotel/Zimmer buchen",
                                                "to book a hotel/room"
                                        ],
                                        [
                                                "die Unterkunft, ¨-e",
                                                "accommodation"
                                        ],
                                        [
                                                "Was möchtest du besichtigen?",
                                                "What would you like to visit/tour?"
                                        ],
                                        [
                                                "der Reiseführer, -",
                                                "travel guide(book)"
                                        ]
                                ]
                        }
                ],
                "tip": "You don't need the future tense (werden + infinitive) to talk about travel plans — German speakers overwhelmingly prefer present tense + a time word (nächste Woche, im Sommer, am Freitag) for anything that's already decided, keeping the sentence simpler and more natural.",
                "examples": [
                        {
                                "de": "Wir fahren nächsten Monat nach Wien.",
                                "en": "We're going to Vienna next month."
                        },
                        {
                                "de": "Welche Sehenswürdigkeiten möchtest du besichtigen?",
                                "en": "Which sights would you like to visit?"
                        },
                        {
                                "de": "Ich habe schon ein Hotel gebucht.",
                                "en": "I've already booked a hotel."
                        },
                        {
                                "de": "Wir brauchen noch eine Unterkunft für die letzte Nacht.",
                                "en": "We still need accommodation for the last night."
                        },
                        {
                                "de": "Hast du einen Reiseführer für Prag?",
                                "en": "Do you have a travel guide for Prague?"
                        },
                        {
                                "de": "Am liebsten möchte ich das Schloss besichtigen.",
                                "en": "What I'd most like to do is visit the castle."
                        }
                ]
        },
        {
                "number": "30",
                "id": "writing-biography",
                "en": "Everyday German: Writing a Short Biography",
                "de": "Eine Biografie schreiben",
                "intro": [
                        "Writing about your own life story — or someone else's — is a classic A2 milestone, since it requires weaving together past tense, time expressions, and connectors you've now learned throughout this course into a coherent narrative rather than isolated sentences.",
                        "A short biography typically moves chronologically: geboren werden (to be born), aufwachsen (to grow up), zur Schule gehen (to go to school), studieren/eine Ausbildung machen (to study/do an apprenticeship), heiraten (to marry), and umziehen (to move/relocate) — knowing this sequence of life-stage verbs gives you a ready-made skeleton for any biography.",
                        "Notice how connectors from this chapter now do real work: “Als ich 18 war, bin ich nach Berlin gezogen” (als for a one-time past event) or “Ich habe in München studiert, weil die Universität dort sehr gut ist” (weil for giving a reason) — this is where grammar and storytelling finally merge."
                ],
                "tables": [
                        {
                                "caption": "Life-stage vocabulary",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "geboren werden",
                                                "to be born"
                                        ],
                                        [
                                                "aufwachsen",
                                                "to grow up"
                                        ],
                                        [
                                                "die Kindheit",
                                                "childhood"
                                        ],
                                        [
                                                "eine Ausbildung machen",
                                                "to do an apprenticeship/training"
                                        ],
                                        [
                                                "heiraten",
                                                "to marry"
                                        ],
                                        [
                                                "umziehen",
                                                "to move/relocate"
                                        ],
                                        [
                                                "die Erfahrung, -en",
                                                "experience"
                                        ]
                                ]
                        }
                ],
                "tip": "When writing a biography, try to use at least one als-clause (for a single defining past moment) and one weil-clause (for explaining a decision) — combining these naturally is exactly the skill A2 exams are looking for, and it will make your writing sound far more connected than a string of short, separate sentences.",
                "examples": [
                        {
                                "de": "Ich bin 1998 in Lahore geboren.",
                                "en": "I was born in Lahore in 1998."
                        },
                        {
                                "de": "Ich bin in einer kleinen Stadt aufgewachsen.",
                                "en": "I grew up in a small town."
                        },
                        {
                                "de": "Als ich 20 war, habe ich eine Ausbildung als Elektriker gemacht.",
                                "en": "When I was 20, I did an apprenticeship as an electrician."
                        },
                        {
                                "de": "2020 bin ich nach Deutschland umgezogen, weil ich hier arbeiten wollte.",
                                "en": "In 2020 I moved to Germany because I wanted to work here."
                        },
                        {
                                "de": "Meine Frau und ich haben letztes Jahr geheiratet.",
                                "en": "My wife and I got married last year."
                        },
                        {
                                "de": "Ich habe viel Erfahrung im Bereich IT.",
                                "en": "I have a lot of experience in the IT field."
                        }
                ]
        },
        {
                "number": "31",
                "id": "passive-voice-werden",
                "en": "The Passive Voice with werden",
                "de": "Das Verb „werden“ & Passiv",
                "intro": [
                        "So far, every sentence you've built has had a clear subject doing the action (“Ich schreibe den Brief” — I write the letter). The passive voice flips the focus onto the thing being acted upon, without necessarily saying who's doing it: “Der Brief wird geschrieben” (The letter is being written). German builds this using the verb werden (to become) plus the Partizip II — the same past participle you already use for the Perfekt tense.",
                        "The formula is: a form of werden + Partizip II at the end of the sentence, following the same verb-to-the-end pattern you've seen throughout this chapter. “Das Auto wird repariert” (The car is being repaired), “Die Fenster werden geputzt” (The windows are being cleaned) — notice the doer of the action simply isn't mentioned, which is exactly the point of using passive voice.",
                        "If you DO want to mention who's doing the action in a passive sentence, use von + Dativ: “Der Brief wird von meiner Chefin geschrieben” (The letter is being written by my boss). This is common in news reports, instructions, and formal writing, where the focus is naturally on the process or result rather than the person doing it."
                ],
                "tables": [
                        {
                                "caption": "Building the present-tense passive",
                                "headers": [
                                        "Subject",
                                        "werden (conjugated)",
                                        "Partizip II",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "Das Auto",
                                                "wird",
                                                "repariert.",
                                                "The car is being repaired."
                                        ],
                                        [
                                                "Die Fenster",
                                                "werden",
                                                "geputzt.",
                                                "The windows are being cleaned."
                                        ],
                                        [
                                                "Ich",
                                                "werde",
                                                "informiert.",
                                                "I am being informed."
                                        ],
                                        [
                                                "Wir",
                                                "werden",
                                                "eingeladen.",
                                                "We are being invited."
                                        ]
                                ]
                        }
                ],
                "tip": "Don't confuse the passive-voice werden with the future-tense werden (both use the same verb!) — the passive always pairs werden with a Partizip II (repariert, geputzt), while the future tense pairs werden with a plain infinitive (reparieren, putzen). Check which form comes at the end to tell them apart.",
                "examples": [
                        {
                                "de": "Das Haus wird gerade gebaut.",
                                "en": "The house is currently being built."
                        },
                        {
                                "de": "Die Rechnung wird morgen bezahlt.",
                                "en": "The bill will be paid tomorrow."
                        },
                        {
                                "de": "Hier wird kein Deutsch gesprochen.",
                                "en": "No German is spoken here."
                        },
                        {
                                "de": "Der Brief wird von meiner Kollegin geschrieben.",
                                "en": "The letter is being written by my colleague."
                        },
                        {
                                "de": "Die Kinder werden von den Großeltern abgeholt.",
                                "en": "The children are being picked up by the grandparents."
                        },
                        {
                                "de": "Wie wird dieses Wort ausgesprochen?",
                                "en": "How is this word pronounced?"
                        }
                ]
        },
        {
                "number": "32",
                "id": "job-vocabulary",
                "en": "Everyday German: Job-Specific Vocabulary",
                "de": "Berufsspezifischer Wortschatz",
                "intro": [
                        "Talking about work at A2 means going beyond simply naming your job title (from A1) to describing your responsibilities, your workplace, and your working conditions — the vocabulary that makes up most real workplace small talk.",
                        "Core structural phrases include “Ich bin zuständig für...” (I'm responsible for...) and “Meine Aufgaben sind...” (My tasks/duties are...) — both far more informative than just stating a job title, and exactly what you'd use in an interview or when describing your role to a new colleague.",
                        "Notice der Arbeitgeber (employer) versus der Arbeitnehmer (employee) — another pair built on the same geben/nehmen (give/take) logic you may have noticed elsewhere in German vocabulary: the employer ‘gives’ work, the employee ‘takes’ it."
                ],
                "tables": [
                        {
                                "caption": "Workplace vocabulary",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "der Arbeitgeber / die Arbeitgeberin",
                                                "employer"
                                        ],
                                        [
                                                "der Arbeitnehmer / die Arbeitnehmerin",
                                                "employee"
                                        ],
                                        [
                                                "zuständig sein für",
                                                "to be responsible for"
                                        ],
                                        [
                                                "die Aufgabe, -n",
                                                "task/duty"
                                        ],
                                        [
                                                "die Erfahrung, -en",
                                                "experience"
                                        ],
                                        [
                                                "die Teilzeit / die Vollzeit",
                                                "part-time / full-time"
                                        ],
                                        [
                                                "das Gehalt, ¨-er",
                                                "salary"
                                        ],
                                        [
                                                "der Kollege / die Kollegin",
                                                "colleague"
                                        ]
                                ]
                        }
                ],
                "tip": "“Ich bin zuständig für...” is a genuinely powerful phrase to have ready for interviews or introducing yourself professionally — it sounds confident and precise, much more so than a vague “Ich mache...” (I do...).",
                "examples": [
                        {
                                "de": "Ich bin zuständig für die Buchhaltung.",
                                "en": "I'm responsible for the accounting."
                        },
                        {
                                "de": "Meine Aufgaben sind Kundenservice und Verkauf.",
                                "en": "My duties are customer service and sales."
                        },
                        {
                                "de": "Ich arbeite Vollzeit bei einer großen Firma.",
                                "en": "I work full-time at a large company."
                        },
                        {
                                "de": "Wie hoch ist das Gehalt für diese Stelle?",
                                "en": "What's the salary for this position?"
                        },
                        {
                                "de": "Ich habe fünf Jahre Erfahrung in diesem Bereich.",
                                "en": "I have five years of experience in this field."
                        },
                        {
                                "de": "Meine Kollegen sind sehr freundlich.",
                                "en": "My colleagues are very friendly."
                        }
                ]
        },
        {
                "number": "33",
                "id": "reading-job-ads",
                "en": "Everyday German: Understanding Job Ads",
                "de": "Stellenanzeigen verstehen",
                "intro": [
                        "German job advertisements (Stellenanzeigen) follow a fairly fixed structure and use a set of recurring phrases that, once learned, make any listing much easier to decode — even one full of unfamiliar company-specific vocabulary.",
                        "Every ad typically has three core sections: Ihre Aufgaben (your duties — what the job involves), Ihr Profil (your profile — what qualifications they want), and Wir bieten (we offer — salary, benefits, perks). Recognizing these three headers instantly lets you skim any job ad efficiently for the parts that matter most to you.",
                        "Common requirement phrases include “abgeschlossene Ausbildung” (completed training/apprenticeship), “gute Deutschkenntnisse” (good German skills), and “Berufserfahrung erwünscht” (professional experience desired) — the word erwünscht (desired) signals a nice-to-have, while erforderlich (required) signals a hard requirement, an important distinction when deciding whether to apply."
                ],
                "tables": [
                        {
                                "caption": "Decoding a job ad",
                                "headers": [
                                        "German phrase",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "Ihre Aufgaben",
                                                "Your duties (section header)"
                                        ],
                                        [
                                                "Ihr Profil",
                                                "Your profile (section header)"
                                        ],
                                        [
                                                "Wir bieten",
                                                "We offer (section header)"
                                        ],
                                        [
                                                "abgeschlossene Ausbildung",
                                                "completed apprenticeship/training"
                                        ],
                                        [
                                                "Berufserfahrung erwünscht",
                                                "professional experience desired"
                                        ],
                                        [
                                                "gute Deutschkenntnisse erforderlich",
                                                "good German skills required"
                                        ]
                                ]
                        }
                ],
                "tip": "The word erforderlich (required) versus erwünscht (desired/nice-to-have) is worth memorizing precisely — many qualified applicants talk themselves out of applying because they see a ‘desired’ qualification they don't have and mistake it for a hard requirement.",
                "examples": [
                        {
                                "de": "Ihre Aufgaben: Kundenberatung und Terminplanung.",
                                "en": "Your duties: customer consultation and appointment scheduling."
                        },
                        {
                                "de": "Ihr Profil: abgeschlossene kaufmännische Ausbildung.",
                                "en": "Your profile: completed commercial apprenticeship."
                        },
                        {
                                "de": "Wir bieten: flexible Arbeitszeiten und ein gutes Gehalt.",
                                "en": "We offer: flexible working hours and a good salary."
                        },
                        {
                                "de": "Berufserfahrung ist von Vorteil, aber nicht erforderlich.",
                                "en": "Professional experience is an advantage, but not required."
                        },
                        {
                                "de": "Gute Deutschkenntnisse sind für diese Stelle erforderlich.",
                                "en": "Good German skills are required for this position."
                        },
                        {
                                "de": "Bewerben Sie sich noch heute!",
                                "en": "Apply today!"
                        }
                ]
        },
        {
                "number": "34",
                "id": "writing-cv",
                "en": "Everyday German: Writing a CV",
                "de": "Einen Lebenslauf schreiben",
                "intro": [
                        "Der Lebenslauf (literally ‘life-run’, i.e. CV/resume) follows a strict, standardized format in German-speaking countries that's worth learning precisely, since deviating from the expected structure can hurt an application even when the content itself is strong.",
                        "The standard sections, in order, are: persönliche Daten (personal details — name, address, contact info), Berufserfahrung (work experience, listed newest first), Ausbildung (education/training), and Kenntnisse (skills — languages, software, certifications). Unlike some countries, German CVs traditionally include a small photo (though this practice is slowly becoming less universal) and are almost always exactly one to two pages, no longer.",
                        "Dates on a German CV use the format seit (since, for an ongoing period) and von...bis (from...to, for a completed period): “seit 2021: Softwareentwickler bei...” or “von 2018 bis 2021: Studium an der...” — learning this exact pattern will make your CV instantly readable to a German employer."
                ],
                "tables": [
                        {
                                "caption": "CV structure & key phrases",
                                "headers": [
                                        "Section",
                                        "What goes here"
                                ],
                                "rows": [
                                        [
                                                "Persönliche Daten",
                                                "Name, address, phone, email, date of birth"
                                        ],
                                        [
                                                "Berufserfahrung",
                                                "Work experience, newest first, with seit / von...bis"
                                        ],
                                        [
                                                "Ausbildung",
                                                "Education and training, with dates and institution"
                                        ],
                                        [
                                                "Kenntnisse",
                                                "Language skills, software, certificates"
                                        ]
                                ]
                        }
                ],
                "tip": "Always list Berufserfahrung and Ausbildung in reverse chronological order — most recent first — since that's the standard German convention and reviewers expect to read your CV top-to-bottom as ‘most relevant/recent first’.",
                "examples": [
                        {
                                "de": "Seit 2022: Verkäufer bei Media Markt.",
                                "en": "Since 2022: Salesperson at Media Markt."
                        },
                        {
                                "de": "Von 2019 bis 2022: Ausbildung zum Einzelhandelskaufmann.",
                                "en": "From 2019 to 2022: Apprenticeship as a retail clerk."
                        },
                        {
                                "de": "Sprachkenntnisse: Deutsch (fließend), Englisch (gut).",
                                "en": "Language skills: German (fluent), English (good)."
                        },
                        {
                                "de": "EDV-Kenntnisse: Microsoft Office, SAP.",
                                "en": "Computer skills: Microsoft Office, SAP."
                        },
                        {
                                "de": "Geboren am 12. März 1995 in Lahore.",
                                "en": "Born on March 12, 1995 in Lahore."
                        },
                        {
                                "de": "Ich freue mich auf Ihre Rückmeldung.",
                                "en": "I look forward to hearing from you."
                        }
                ]
        },
        {
                "number": "35",
                "id": "genitive-case",
                "en": "Understanding the Genitive Case",
                "de": "Den Genitiv verstehen",
                "intro": [
                        "The Genitiv is German's fourth and final case, used to show possession or a close relationship between two nouns — the equivalent of English ‘’s’ or ‘of the’. “Das Auto meines Vaters” means ‘my father's car’ (literally: the car of-my-father).",
                        "The articles change shape again: der/das → des, die → der, and plural → der. But here's the twist unique to the Genitiv: masculine and neuter nouns ALSO add an ending directly onto the noun itself — usually -s or -es: der Vater → des Vaters, das Kind → des Kindes. This noun-ending is the clearest sign you're looking at a Genitiv phrase.",
                        "In everyday spoken German, the Genitiv is increasingly being replaced by von + Dativ (“das Auto von meinem Vater” instead of “das Auto meines Vaters”), especially in casual conversation. But the Genitiv still appears constantly in writing, news, and formal speech, so recognizing it is essential even if you use the von-alternative yourself in daily talk."
                ],
                "tables": [
                        {
                                "caption": "The Genitiv article + noun-ending pattern",
                                "headers": [
                                        "Gender",
                                        "Article",
                                        "Noun ending",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "Masculine",
                                                "des",
                                                "+ -s/-es",
                                                "des Vaters (of the father)"
                                        ],
                                        [
                                                "Feminine",
                                                "der",
                                                "no change",
                                                "der Mutter (of the mother)"
                                        ],
                                        [
                                                "Neuter",
                                                "des",
                                                "+ -s/-es",
                                                "des Kindes (of the child)"
                                        ],
                                        [
                                                "Plural",
                                                "der",
                                                "no change",
                                                "der Kinder (of the children)"
                                        ]
                                ]
                        }
                ],
                "tip": "In spoken, everyday German, feel free to use von + Dativ instead of the Genitiv (“das Haus von meiner Schwester” rather than “das Haus meiner Schwester”) — it's completely acceptable in conversation. Reserve the true Genitiv for writing and more formal contexts, where it's still expected.",
                "examples": [
                        {
                                "de": "Das ist das Auto meines Bruders.",
                                "en": "That's my brother's car."
                        },
                        {
                                "de": "Die Farbe des Himmels ist heute besonders schön.",
                                "en": "The color of the sky is especially beautiful today."
                        },
                        {
                                "de": "Das Ende des Films war überraschend.",
                                "en": "The ending of the film was surprising."
                        },
                        {
                                "de": "Wegen des schlechten Wetters bleiben wir zu Hause.",
                                "en": "Because of the bad weather, we're staying home."
                        },
                        {
                                "de": "Das Zimmer der Kinder ist sehr bunt.",
                                "en": "The children's room is very colourful."
                        },
                        {
                                "de": "Das Haus von meiner Schwester ist neu.",
                                "en": "My sister's house is new. (common spoken alternative)"
                        }
                ]
        },
        {
                "number": "36",
                "id": "car-vocabulary",
                "en": "Everyday German: Cars & Car Parts",
                "de": "Auto und Autoteile",
                "intro": [
                        "Whether you're buying a car, taking one to the mechanic, or just describing a traffic situation, this practical vocabulary set covers the essential words for talking about vehicles — a topic that comes up constantly in daily life once you're settled in a German-speaking country.",
                        "For basic parts, you'll want der Motor (engine), die Bremse (brake), der Reifen (tyre), and das Lenkrad (steering wheel). At the mechanic's, the key phrase is “Mein Auto macht komische Geräusche” (My car is making strange noises) — a genuinely useful sentence for describing a problem you may not have precise vocabulary for.",
                        "Traffic-related vocabulary rounds out the set: der Stau (traffic jam), die Ampel (traffic light), and tanken (to fill up with fuel) are all words you'll hear and need almost daily if you drive regularly in a German-speaking country."
                ],
                "tables": [
                        {
                                "caption": "Car & driving vocabulary",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "der Motor, -en",
                                                "engine"
                                        ],
                                        [
                                                "die Bremse, -n",
                                                "brake"
                                        ],
                                        [
                                                "der Reifen, -",
                                                "tyre"
                                        ],
                                        [
                                                "das Lenkrad, ¨-er",
                                                "steering wheel"
                                        ],
                                        [
                                                "tanken",
                                                "to fill up (with fuel)"
                                        ],
                                        [
                                                "der Stau, -s",
                                                "traffic jam"
                                        ],
                                        [
                                                "die Ampel, -n",
                                                "traffic light"
                                        ],
                                        [
                                                "die Werkstatt, ¨-en",
                                                "garage/repair shop"
                                        ]
                                ]
                        }
                ],
                "tip": "“Mein Auto macht komische Geräusche” (My car is making strange noises) is a genuinely practical sentence to memorize — you don't need to know the precise technical vocabulary for a car problem; this phrase lets any mechanic take over the diagnosis from there.",
                "examples": [
                        {
                                "de": "Mein Auto macht komische Geräusche.",
                                "en": "My car is making strange noises."
                        },
                        {
                                "de": "Ich muss noch tanken, der Tank ist fast leer.",
                                "en": "I still need to fill up, the tank is almost empty."
                        },
                        {
                                "de": "Wir stehen seit einer Stunde im Stau.",
                                "en": "We've been stuck in traffic for an hour."
                        },
                        {
                                "de": "Die Bremsen müssen repariert werden.",
                                "en": "The brakes need to be repaired."
                        },
                        {
                                "de": "Fahr los, die Ampel ist grün!",
                                "en": "Go, the light is green!"
                        },
                        {
                                "de": "Ich bringe mein Auto morgen in die Werkstatt.",
                                "en": "I'm taking my car to the garage tomorrow."
                        }
                ]
        },
        {
                "number": "37",
                "id": "relative-clauses",
                "en": "Relative Pronouns & Relative Clauses",
                "de": "Relativpronomen und Relativsätze",
                "intro": [
                        "A relative clause adds extra information about a noun without starting a new sentence — “Der Mann, der dort steht, ist mein Lehrer” (The man who is standing there is my teacher). The word der here is a relative pronoun, and the whole clause “der dort steht” describes which man you mean.",
                        "The great news: German relative pronouns look almost exactly like the definite articles you already know (der, die, das, den, dem...) — with only two small differences in the Dativ plural (denen instead of den) and the Genitiv (dessen/deren instead of des/der). The pronoun's GENDER and NUMBER come from the noun it describes, but its CASE comes from its job inside the relative clause itself.",
                        "Relative clauses always send the verb to the end (the same subordinate-clause pattern from weil, dass, and als) and are set off by commas on both sides. This structure lets you combine two short, choppy sentences into one flowing, more sophisticated one — a real hallmark of moving beyond beginner German."
                ],
                "tables": [
                        {
                                "caption": "Relative pronouns by case",
                                "headers": [
                                        "Case",
                                        "Masculine",
                                        "Feminine",
                                        "Neuter",
                                        "Plural"
                                ],
                                "rows": [
                                        [
                                                "Nominativ",
                                                "der",
                                                "die",
                                                "das",
                                                "die"
                                        ],
                                        [
                                                "Akkusativ",
                                                "den",
                                                "die",
                                                "das",
                                                "die"
                                        ],
                                        [
                                                "Dativ",
                                                "dem",
                                                "der",
                                                "dem",
                                                "denen"
                                        ]
                                ]
                        }
                ],
                "tip": "To pick the right relative pronoun, ask two separate questions: what GENDER/NUMBER is the noun being described (that decides the column), and what CASE does the pronoun play inside its own clause (that decides the row) — the two questions are independent, which is exactly why it can feel tricky at first.",
                "examples": [
                        {
                                "de": "Der Mann, der dort steht, ist mein Nachbar.",
                                "en": "The man who is standing there is my neighbour. (Nominativ: der is the subject of 'steht')"
                        },
                        {
                                "de": "Das Buch, das ich lese, ist sehr spannend.",
                                "en": "The book that I'm reading is very exciting. (Akkusativ: das is the object of 'lese')"
                        },
                        {
                                "de": "Die Frau, der ich geholfen habe, war sehr dankbar.",
                                "en": "The woman I helped was very grateful. (Dativ: helfen takes Dativ)"
                        },
                        {
                                "de": "Das ist die Freundin, mit der ich studiert habe.",
                                "en": "That's the friend I studied with. (mit + Dativ)"
                        },
                        {
                                "de": "Die Kinder, denen ich das Buch gegeben habe, waren glücklich.",
                                "en": "The children I gave the book to were happy. (Dativ plural: denen)"
                        },
                        {
                                "de": "Ich habe den Film gesehen, den du empfohlen hast.",
                                "en": "I saw the film that you recommended."
                        }
                ]
        },
        {
                "number": "38",
                "id": "films-inventions-vocab",
                "en": "Everyday German: Films, Series & Inventions",
                "de": "Filme & Serien sowie Produkte & Erfindungen",
                "intro": [
                        "This topic pairs two conversational areas you'll want at A2: talking about entertainment you watch, and talking about products and inventions — both common small-talk subjects, and both a great place to practice relative clauses from the previous topic (“der Film, den ich gesehen habe...”).",
                        "For entertainment, key words are die Serie (TV series), die Folge (episode), and Staffel (season) — note that Staffel means TV season, while Jahreszeit means the actual season of the year, an easy pair to confuse since English uses ‘season’ for both.",
                        "For products and inventions, erfinden (to invent) and die Erfindung (invention/discovery) let you describe how something came to be, while nützlich (useful) and praktisch (practical/handy) are the two adjectives you'll reach for constantly when reviewing or recommending a product."
                ],
                "tables": [
                        {
                                "caption": "Entertainment & invention vocabulary",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "die Serie, -n",
                                                "TV series"
                                        ],
                                        [
                                                "die Folge, -n / die Staffel, -n",
                                                "episode / season (of a show)"
                                        ],
                                        [
                                                "erfinden / die Erfindung",
                                                "to invent / the invention"
                                        ],
                                        [
                                                "nützlich / praktisch",
                                                "useful / practical, handy"
                                        ],
                                        [
                                                "Ich habe gerade ... gesehen.",
                                                "I just watched ..."
                                        ],
                                        [
                                                "Kannst du das empfehlen?",
                                                "Can you recommend that?"
                                        ]
                                ]
                        }
                ],
                "tip": "Remember the split: Staffel is a TV season (‘Staffel 3’), while Jahreszeit is a calendar season (spring, summer, autumn, winter) — mixing these up is a very common and easily avoided A2 mistake once you know to watch for it.",
                "examples": [
                        {
                                "de": "Ich habe gerade die neue Staffel gesehen.",
                                "en": "I just watched the new season."
                        },
                        {
                                "de": "Die Serie, die du empfohlen hast, ist wirklich gut.",
                                "en": "The series you recommended is really good."
                        },
                        {
                                "de": "Wer hat das Telefon erfunden?",
                                "en": "Who invented the telephone?"
                        },
                        {
                                "de": "Diese App ist sehr praktisch.",
                                "en": "This app is very handy."
                        },
                        {
                                "de": "Das ist eine nützliche Erfindung.",
                                "en": "That's a useful invention."
                        },
                        {
                                "de": "Kannst du mir einen guten Film empfehlen?",
                                "en": "Can you recommend a good film to me?"
                        }
                ]
        },
        {
                "number": "39",
                "id": "reflexive-verbs",
                "en": "Reflexive Verbs & Reflexive Pronouns",
                "de": "Reflexive Verben und Reflexivpronomen",
                "intro": [
                        "A reflexive verb is one where the action ‘bounces back’ onto the subject — the person doing the action and the person receiving it are the same. English does this occasionally with ‘-self’ words (‘I hurt myself’), but German uses reflexive verbs far more often, including for actions that don't feel reflexive in English at all: sich freuen (to be happy/look forward to), sich interessieren (to be interested), sich erinnern (to remember).",
                        "The reflexive pronoun changes with the subject, just like a regular pronoun would: mich, dich, sich, uns, euch, sich. Most reflexive verbs use the Akkusativ reflexive pronoun (“Ich freue mich”), but a smaller group uses the Dativ reflexive pronoun instead, especially when there's already another Akkusativ object in the sentence (“Ich putze mir die Zähne” — I clean my teeth, literally: I clean to-myself the teeth).",
                        "A key habit to build: many common German verbs are ALWAYS reflexive, with no non-reflexive version that means the same thing — sich beeilen (to hurry), sich erkälten (to catch a cold), sich verspäten (to be late). These need to be learned as a single unit, verb + pronoun together, right from the start."
                ],
                "tables": [
                        {
                                "caption": "Reflexive pronouns (Akkusativ)",
                                "headers": [
                                        "Subject",
                                        "Reflexive pronoun",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "ich",
                                                "mich",
                                                "Ich freue mich."
                                        ],
                                        [
                                                "du",
                                                "dich",
                                                "Du freust dich."
                                        ],
                                        [
                                                "er/sie/es",
                                                "sich",
                                                "Er freut sich."
                                        ],
                                        [
                                                "wir",
                                                "uns",
                                                "Wir freuen uns."
                                        ],
                                        [
                                                "ihr",
                                                "euch",
                                                "Ihr freut euch."
                                        ],
                                        [
                                                "sie/Sie",
                                                "sich",
                                                "Sie freuen sich."
                                        ]
                                ]
                        }
                ],
                "tip": "When you learn a new reflexive verb, always learn it together with its pronoun as one chunk — ‘sich freuen’, not just ‘freuen’ — so the reflexive pronoun becomes automatic rather than something you have to remember to add afterward.",
                "examples": [
                        {
                                "de": "Ich freue mich auf das Wochenende.",
                                "en": "I'm looking forward to the weekend."
                        },
                        {
                                "de": "Er interessiert sich für Musik.",
                                "en": "He's interested in music."
                        },
                        {
                                "de": "Wir müssen uns beeilen, der Bus kommt gleich.",
                                "en": "We have to hurry, the bus is coming soon."
                        },
                        {
                                "de": "Ich erinnere mich nicht an diesen Film.",
                                "en": "I don't remember this film."
                        },
                        {
                                "de": "Putz dir bitte die Zähne!",
                                "en": "Please brush your teeth! (Dativ reflexive pronoun)"
                        },
                        {
                                "de": "Sie hat sich letzte Woche erkältet.",
                                "en": "She caught a cold last week."
                        }
                ]
        },
        {
                "number": "40",
                "id": "emotions-feelings",
                "en": "Everyday German: Emotions & Feelings",
                "de": "Emotionen und Gefühle",
                "intro": [
                        "This final A2 topic gives you the vocabulary to describe how you and others feel — essential for genuine conversation, and a natural place to put the reflexive verbs from the previous lesson to immediate use, since so many emotion verbs in German are reflexive.",
                        "The core pattern for describing feelings uses sein + adjective (“Ich bin glücklich” — I am happy) or the reflexive verb pattern (“Ich freue mich” — I'm happy/pleased) almost interchangeably, though the reflexive version often implies the feeling is caused by something specific (freuen sich auf/über etwas).",
                        "Notice the useful preposition pairing: sich freuen AUF + Akkusativ is used for looking forward to something in the future (“Ich freue mich auf die Ferien”), while sich freuen ÜBER + Akkusativ is used for being happy about something that already happened (“Ich freue mich über das Geschenk”) — a subtle but genuinely important distinction."
                ],
                "tables": [
                        {
                                "caption": "Common emotion words & phrases",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "glücklich / traurig",
                                                "happy / sad"
                                        ],
                                        [
                                                "wütend / verärgert",
                                                "angry / annoyed"
                                        ],
                                        [
                                                "nervös / aufgeregt",
                                                "nervous / excited"
                                        ],
                                        [
                                                "sich freuen auf + Akk.",
                                                "to look forward to (future)"
                                        ],
                                        [
                                                "sich freuen über + Akk.",
                                                "to be happy about (already happened)"
                                        ],
                                        [
                                                "Angst haben vor + Dativ",
                                                "to be afraid of"
                                        ]
                                ]
                        }
                ],
                "tip": "Keep the auf/über distinction clear with a memory trick: auf points forward (like an arrow to the future), über sits on top of something that's already there (something that's already happened) — ‘auf die Zukunft, über die Vergangenheit’.",
                "examples": [
                        {
                                "de": "Ich freue mich auf meinen Urlaub.",
                                "en": "I'm looking forward to my holiday."
                        },
                        {
                                "de": "Ich freue mich sehr über dein Geschenk.",
                                "en": "I'm very happy about your gift."
                        },
                        {
                                "de": "Sie ist traurig, weil ihr Freund weggezogen ist.",
                                "en": "She's sad because her friend moved away."
                        },
                        {
                                "de": "Ich habe Angst vor Spinnen.",
                                "en": "I'm afraid of spiders."
                        },
                        {
                                "de": "Er war sehr nervös vor der Prüfung.",
                                "en": "He was very nervous before the exam."
                        },
                        {
                                "de": "Warum bist du so wütend?",
                                "en": "Why are you so angry?"
                        }
                ]
        }
]
  },
  {
    id: "b1",
    level: "B1",
    title: "German B1",
    subtitle: "Intermediate German — Explained in English",
    tagline: "Past-tense mastery, Konjunktiv II, Passiv in every tense, nominalization, indirect speech, advanced connectors, and the vocabulary for real discussion, work, health, and study.",
    status: "available",
    topics: [
        {
                "number": "01",
                "id": "perfekt-vs-preteritum",
                "en": "Perfekt vs. Präteritum: Choosing the Right Past Tense",
                "de": "Perfekt vs. Präteritum",
                "intro": [
                        "You already know both of these past tenses individually — the Perfekt (haben/sein + Partizip II) from A1, and the Präteritum of sein, haben, and modal verbs from A2. B1 is where you learn the real rule for choosing between them, because for most verbs, German speakers don't mix the two randomly — the choice depends on whether you're speaking or writing.",
                        "In SPOKEN German (conversation, casual storytelling), the Perfekt is overwhelmingly preferred for almost all verbs: “Ich habe gestern einen Film gesehen” sounds natural and is what you'll hear constantly in daily life. The Präteritum in speech is really only common for sein, haben, and the modal verbs (war, hatte, konnte, wollte...) — which is exactly why A2 taught you those forms first.",
                        "In WRITTEN German — news articles, novels, formal reports, fairy tales — the Präteritum is the default narrative past tense for all verbs. This is why reading a German newspaper article about yesterday's events will show you “er sagte” (Präteritum) far more often than “er hat gesagt” (Perfekt), even though both are grammatically valid."
                ],
                "tables": [
                        {
                                "caption": "When to use which past tense",
                                "headers": [
                                        "Context",
                                        "Preferred tense",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "Spoken conversation (most verbs)",
                                                "Perfekt",
                                                "Ich habe das Buch gelesen."
                                        ],
                                        [
                                                "Spoken conversation (sein/haben/modals)",
                                                "Präteritum",
                                                "Ich war müde. Ich hatte Zeit. Ich konnte nicht kommen."
                                        ],
                                        [
                                                "Written narrative, news, novels",
                                                "Präteritum",
                                                "Er ging langsam nach Hause."
                                        ],
                                        [
                                                "Formal writing about recent events",
                                                "Either, Perfekt common in reports",
                                                "Die Firma hat neue Mitarbeiter eingestellt."
                                        ]
                                ]
                        }
                ],
                "tip": "As a rule of thumb for B1: if you're SPEAKING, default to the Perfekt for regular verbs, and use the Präteritum only for sein, haben, and modals. If you're WRITING a story or reading the news, expect and use the Präteritum throughout — the two tenses essentially split along the spoken/written divide, not by meaning.",
                "examples": [
                        {
                                "de": "Ich habe gestern meine Oma besucht.",
                                "en": "I visited my grandma yesterday. (spoken, Perfekt)"
                        },
                        {
                                "de": "Es war ein regnerischer Tag im Oktober.",
                                "en": "It was a rainy day in October. (written narrative, Präteritum)"
                        },
                        {
                                "de": "Ich hatte keine Zeit, dich anzurufen.",
                                "en": "I didn't have time to call you. (spoken, haben → Präteritum)"
                        },
                        {
                                "de": "Der Zug kam pünktlich an, und die Passagiere stiegen aus.",
                                "en": "The train arrived on time, and the passengers got off. (written narrative)"
                        },
                        {
                                "de": "Wir sind letztes Jahr nach Italien gefahren.",
                                "en": "We went to Italy last year. (spoken, Perfekt)"
                        },
                        {
                                "de": "Sie konnte die Prüfung nicht bestehen.",
                                "en": "She couldn't pass the exam. (spoken, modal → Präteritum)"
                        }
                ]
        },
        {
                "number": "02",
                "id": "plusquamperfekt",
                "en": "Plusquamperfekt: The Past-Before-the-Past",
                "de": "Plusquamperfekt",
                "intro": [
                        "The Plusquamperfekt (pluperfect, or ‘past perfect’ in English) describes an event that happened BEFORE another past event — the ‘past of the past’. English does exactly the same thing with ‘had done’: “I had already eaten when she arrived” shows two past events in a clear order, and German needs the same tool to keep that order clear.",
                        "The formula is simple once you know the Perfekt: just swap haben/sein for their Präteritum forms, hatte or war, and keep the same Partizip II: “Ich hatte schon gegessen, als sie ankam” (I had already eaten when she arrived). If you can build the Perfekt of a verb, you can build its Plusquamperfekt by changing only the helping verb's tense.",
                        "This tense appears constantly with the connector nachdem (after), which specifically signals that one thing finished before another started: “Nachdem ich gegessen hatte, ging ich spazieren” (After I had eaten, I went for a walk) — notice the earlier action (eating) is Plusquamperfekt, while the later action (going for a walk) can stay in simple Präteritum or Perfekt."
                ],
                "tables": [
                        {
                                "caption": "Building the Plusquamperfekt",
                                "headers": [
                                        "Tense",
                                        "Formula",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "Perfekt",
                                                "haben/sein (present) + Partizip II",
                                                "Ich habe gegessen."
                                        ],
                                        [
                                                "Plusquamperfekt",
                                                "hatte/war (Präteritum) + Partizip II",
                                                "Ich hatte gegessen."
                                        ],
                                        [
                                                "With sein-verbs",
                                                "war + Partizip II",
                                                "Ich war schon angekommen, als er anrief."
                                        ]
                                ]
                        }
                ],
                "tip": "Whenever you see nachdem in a sentence, the clause it introduces should almost always be in the Plusquamperfekt, because nachdem specifically exists to mark ‘the thing that finished first’ — spotting nachdem is your cue to reach for hatte/war + Partizip II.",
                "examples": [
                        {
                                "de": "Ich hatte schon gegessen, als du angerufen hast.",
                                "en": "I had already eaten when you called."
                        },
                        {
                                "de": "Nachdem wir das Museum besucht hatten, gingen wir essen.",
                                "en": "After we had visited the museum, we went to eat."
                        },
                        {
                                "de": "Sie war schon weggefahren, bevor ich ankam.",
                                "en": "She had already left before I arrived."
                        },
                        {
                                "de": "Er hatte nie zuvor Deutsch gesprochen, bevor er nach Berlin zog.",
                                "en": "He had never spoken German before, before he moved to Berlin."
                        },
                        {
                                "de": "Wir hatten das Buch gelesen, bevor der Film herauskam.",
                                "en": "We had read the book before the film came out."
                        },
                        {
                                "de": "Nachdem sie ihre Ausbildung beendet hatte, fand sie schnell einen Job.",
                                "en": "After she had finished her training, she quickly found a job."
                        }
                ]
        },
        {
                "number": "03",
                "id": "experiences-travel-vocab",
                "en": "Everyday German: Experiences, Travel & Childhood Memories",
                "de": "Wortschatz: Erlebnisse, Reisen, Kindheit, Erinnerungen",
                "intro": [
                        "B1 conversation moves toward sharing longer personal stories — describing a memorable trip, a childhood memory, or a life experience in real detail. This vocabulary set, combined with the Perfekt/Präteritum/Plusquamperfekt distinctions from this chapter, gives you everything you need to tell a genuinely engaging story rather than a simple list of facts.",
                        "Key storytelling vocabulary includes das Erlebnis (experience, something that happened to you) versus die Erfahrung (experience in the sense of accumulated skill/knowledge) — an important distinction: “Ein unvergessliches Erlebnis” (an unforgettable experience/event) versus “viel Erfahrung” (a lot of experience/expertise).",
                        "For childhood memories specifically, sich erinnern an + Akkusativ (to remember) and die Erinnerung (memory, the thing remembered) let you frame reminiscing naturally: “Ich erinnere mich an meine Kindheit”, while damals (back then, at that time) is the go-to word for signaling you're describing the past in a nostalgic, storytelling way."
                ],
                "tables": [
                        {
                                "caption": "Storytelling vocabulary",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "das Erlebnis, -se",
                                                "experience/event (something that happened)"
                                        ],
                                        [
                                                "die Erfahrung, -en",
                                                "experience (accumulated skill/knowledge)"
                                        ],
                                        [
                                                "sich erinnern an + Akk.",
                                                "to remember"
                                        ],
                                        [
                                                "die Erinnerung, -en",
                                                "memory"
                                        ],
                                        [
                                                "damals",
                                                "back then, at that time"
                                        ],
                                        [
                                                "unvergesslich",
                                                "unforgettable"
                                        ]
                                ]
                        }
                ],
                "tip": "Use damals as your storytelling signal word the way English uses ‘back then’: it instantly frames whatever follows as a nostalgic look at the past, and pairs beautifully with the Präteritum for a natural narrative flow.",
                "examples": [
                        {
                                "de": "Das war ein unvergessliches Erlebnis für mich.",
                                "en": "That was an unforgettable experience for me."
                        },
                        {
                                "de": "Ich erinnere mich noch gut an meine Kindheit.",
                                "en": "I still remember my childhood well."
                        },
                        {
                                "de": "Damals hatten wir kein Internet zu Hause.",
                                "en": "Back then we didn't have internet at home."
                        },
                        {
                                "de": "Meine schönste Erinnerung ist unser Familienurlaub in Italien.",
                                "en": "My fondest memory is our family holiday in Italy."
                        },
                        {
                                "de": "Ich habe viel Erfahrung mit dem Reisen alleine.",
                                "en": "I have a lot of experience travelling alone."
                        },
                        {
                                "de": "Als Kind habe ich oft bei meinen Großeltern übernachtet.",
                                "en": "As a child I often stayed overnight at my grandparents'."
                        }
                ]
        },
        {
                "number": "04",
                "id": "obwohl-trotzdem-waehrend",
                "en": "Connectors: obwohl, trotzdem & während",
                "de": "Nebensätze mit obwohl, trotzdem, während",
                "intro": [
                        "These three connectors let you express contrast and contradiction — saying that something happened despite an obstacle, or that two things were happening at the same time. They're essential for the more nuanced, opinion-based conversations B1 is building toward.",
                        "Obwohl (although) is a subordinating conjunction, so it sends the verb to the end of its clause, exactly like weil and dass: “Ich bin zur Arbeit gegangen, obwohl ich krank war” (I went to work although I was sick). Während can mean either ‘while’ (simultaneous time) or ‘whereas’ (contrast between two situations) — both uses are subordinating and both push the verb to the end.",
                        "Trotzdem (nevertheless/despite that) works differently: it's an adverb, not a subordinating conjunction, so it takes position 1 in its OWN separate sentence and triggers regular verb-second word order: “Ich war krank. Trotzdem bin ich zur Arbeit gegangen” — notice trotzdem itself occupies position 1, pushing bin into position 2. Obwohl and trotzdem express the same contrast; the difference is purely structural, just like weil vs. denn."
                ],
                "tables": [
                        {
                                "caption": "Expressing contrast three ways",
                                "headers": [
                                        "Word",
                                        "Type",
                                        "Verb position",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "obwohl",
                                                "subordinating",
                                                "end of clause",
                                                "Ich ging aus, obwohl es regnete."
                                        ],
                                        [
                                                "trotzdem",
                                                "adverb (own sentence)",
                                                "verb in position 2",
                                                "Es regnete. Trotzdem ging ich aus."
                                        ],
                                        [
                                                "während",
                                                "subordinating (time or contrast)",
                                                "end of clause",
                                                "Während ich kochte, las sie."
                                        ]
                                ]
                        }
                ],
                "tip": "If you want to link two ideas into ONE sentence with a comma, reach for obwohl. If you'd rather write two separate, punchier sentences, use trotzdem to start the second one — both are equally correct and equally common in natural B1-level German.",
                "examples": [
                        {
                                "de": "Obwohl es kalt war, sind wir spazieren gegangen.",
                                "en": "Although it was cold, we went for a walk."
                        },
                        {
                                "de": "Es war kalt. Trotzdem sind wir spazieren gegangen.",
                                "en": "It was cold. Nevertheless, we went for a walk."
                        },
                        {
                                "de": "Während ich arbeite, hört mein Kollege Musik.",
                                "en": "While I work, my colleague listens to music."
                        },
                        {
                                "de": "Ich mag Kaffee, während meine Frau lieber Tee trinkt.",
                                "en": "I like coffee, whereas my wife prefers tea."
                        },
                        {
                                "de": "Obwohl er müde war, hat er weitergearbeitet.",
                                "en": "Although he was tired, he kept working."
                        },
                        {
                                "de": "Sie hat die Prüfung nicht bestanden. Trotzdem bleibt sie optimistisch.",
                                "en": "She didn't pass the exam. Nevertheless, she remains optimistic."
                        }
                ]
        },
        {
                "number": "05",
                "id": "deshalb-deswegen-daher",
                "en": "Connectors: deshalb, deswegen & daher",
                "de": "deshalb, deswegen, daher",
                "intro": [
                        "These three words all mean ‘therefore/that's why’ and are essentially interchangeable — a rare case in German grammar where you can pick whichever one sounds best to you without worrying about a meaning difference. They're the natural next step after weil: while weil explains a reason inside one sentence, these three connect a reason in one sentence to its result in the next.",
                        "Like trotzdem, all three are adverbs, not subordinating conjunctions — they start their own new sentence and take position 1, pushing the verb into position 2: “Es regnet. Deshalb bleibe ich zu Hause” (It's raining. That's why I'm staying home). This mirrors exactly the weil/denn-vs-trotzdem structural split you've now seen several times in this course.",
                        "A natural, very common B1 pattern is to combine a weil-clause with a deshalb-sentence for extra emphasis, even though it's technically a little redundant: “Weil es regnet, bleibe ich deshalb zu Hause” — native speakers do this constantly in casual speech, so don't be surprised to hear it, even if the cleanest style keeps them separate."
                ],
                "tables": [
                        {
                                "caption": "Three interchangeable words for 'therefore'",
                                "headers": [
                                        "Word",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "deshalb",
                                                "Ich bin krank. Deshalb bleibe ich zu Hause."
                                        ],
                                        [
                                                "deswegen",
                                                "Ich bin krank. Deswegen bleibe ich zu Hause."
                                        ],
                                        [
                                                "daher",
                                                "Ich bin krank. Daher bleibe ich zu Hause."
                                        ]
                                ]
                        }
                ],
                "tip": "Since deshalb, deswegen, and daher are fully interchangeable in meaning, use this as an opportunity to vary your writing style — native speakers naturally rotate between all three rather than repeating the same one in every sentence, and doing the same will make your B1 writing sound noticeably more fluent.",
                "examples": [
                        {
                                "de": "Ich habe keine Zeit. Deshalb kann ich nicht kommen.",
                                "en": "I don't have time. That's why I can't come."
                        },
                        {
                                "de": "Er hat die Prüfung nicht bestanden. Deswegen ist er sehr enttäuscht.",
                                "en": "He didn't pass the exam. That's why he's very disappointed."
                        },
                        {
                                "de": "Es gab keinen Parkplatz. Daher sind wir mit dem Bus gefahren.",
                                "en": "There was no parking spot. That's why we went by bus."
                        },
                        {
                                "de": "Die Preise sind gestiegen. Deshalb sparen wir mehr Geld.",
                                "en": "Prices have risen. That's why we're saving more money."
                        },
                        {
                                "de": "Sie spricht fließend Deutsch. Deswegen hat sie den Job bekommen.",
                                "en": "She speaks fluent German. That's why she got the job."
                        },
                        {
                                "de": "Das Wetter war schlecht. Daher haben wir den Ausflug verschoben.",
                                "en": "The weather was bad. That's why we postponed the trip."
                        }
                ]
        },
        {
                "number": "06",
                "id": "opinion-discussion-vocab",
                "en": "Everyday German: Expressing Opinions & Discussing",
                "de": "Wortschatz: Meinung, Zustimmung/Widerspruch, Argumente",
                "intro": [
                        "B1 is the level where you start genuinely discussing and debating in German — giving your opinion, agreeing or disagreeing with someone else's, and weighing advantages and disadvantages. This vocabulary set, paired with the connectors from this chapter, is your toolkit for that kind of conversation.",
                        "To state an opinion, “Ich finde, dass...” (I think that...) and “Meiner Meinung nach...” (In my opinion...) are the two workhorse openers — note that meiner Meinung nach doesn't need dass afterward, since it's not a subordinating structure, just an introductory phrase before a normal main clause.",
                        "For agreement and disagreement, “Da stimme ich dir zu” (I agree with you there) and “Da bin ich anderer Meinung” (I have a different opinion there / I disagree) are both polite, natural ways to engage in discussion without sounding either too timid or too blunt — exactly the register B1 discussions are aiming for."
                ],
                "tables": [
                        {
                                "caption": "Opinion & discussion phrases",
                                "headers": [
                                        "Function",
                                        "German phrase",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "Give an opinion",
                                                "Ich finde, dass ... / Meiner Meinung nach ...",
                                                "I think that ... / In my opinion ..."
                                        ],
                                        [
                                                "Agree",
                                                "Da stimme ich dir zu. / Genau!",
                                                "I agree with you there. / Exactly!"
                                        ],
                                        [
                                                "Disagree politely",
                                                "Da bin ich anderer Meinung.",
                                                "I have a different opinion there."
                                        ],
                                        [
                                                "Give a reason",
                                                "..., weil ... / Ein Grund dafür ist, dass ...",
                                                "..., because ... / One reason for that is that ..."
                                        ],
                                        [
                                                "Weigh pros/cons",
                                                "Einerseits ..., andererseits ...",
                                                "On one hand ..., on the other hand ..."
                                        ]
                                ]
                        }
                ],
                "tip": "“Einerseits ..., andererseits ...” (on one hand, on the other hand) is one of the most valuable structures for B1-level discussion and writing — it lets you present a balanced argument in a single elegant sentence, exactly the kind of nuanced thinking B1 exams reward.",
                "examples": [
                        {
                                "de": "Ich finde Online-Unterricht praktisch, weil man von zu Hause lernen kann.",
                                "en": "I think online classes are practical because you can learn from home."
                        },
                        {
                                "de": "Meiner Meinung nach sollte man mehr öffentliche Verkehrsmittel benutzen.",
                                "en": "In my opinion, people should use public transport more."
                        },
                        {
                                "de": "Da stimme ich dir voll und ganz zu.",
                                "en": "I completely agree with you there."
                        },
                        {
                                "de": "Da bin ich anderer Meinung. Ich denke, das Gegenteil ist richtig.",
                                "en": "I disagree there. I think the opposite is true."
                        },
                        {
                                "de": "Einerseits ist Homeoffice bequem, andererseits fehlt der Kontakt zu Kollegen.",
                                "en": "On one hand, working from home is convenient, on the other hand you miss contact with colleagues."
                        },
                        {
                                "de": "Ein Grund dafür ist, dass die Lebenshaltungskosten gestiegen sind.",
                                "en": "One reason for that is that the cost of living has risen."
                        }
                ]
        },
        {
                "number": "07",
                "id": "futur-1",
                "en": "Futur I: Talking About the Future",
                "de": "Futur I",
                "intro": [
                        "You've been getting by with present tense + a time word for the future since A2 (“Ich fahre morgen nach Berlin”), and that's still perfectly correct and extremely common. Futur I (werden + infinitive) is the more explicit ‘true’ future tense, and B1 is where you formally add it to your toolkit — mainly for predictions, promises, and assumptions rather than for simple scheduled plans.",
                        "The formula is: werden (conjugated) + infinitive at the end of the sentence — the exact same werden you already know from the passive voice, just paired with a plain infinitive instead of a Partizip II this time. “Es wird regnen” (It will rain), “Ich werde dir helfen” (I will help you).",
                        "Futur I is used less for simple future facts (where present tense still wins in everyday speech) and more for three specific jobs: making predictions (“Es wird bald regnen”), making promises with emphasis (“Ich werde es nicht vergessen!”), and expressing present-tense assumptions about something happening right now (“Er wird wohl noch schlafen” — He's probably still asleep, a surprisingly common use where Futur I isn't about the future at all)."
                ],
                "tables": [
                        {
                                "caption": "Building Futur I",
                                "headers": [
                                        "Subject",
                                        "werden",
                                        "+ Infinitive",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "ich",
                                                "werde",
                                                "helfen.",
                                                "I will help."
                                        ],
                                        [
                                                "du",
                                                "wirst",
                                                "kommen.",
                                                "You will come."
                                        ],
                                        [
                                                "er/sie/es",
                                                "wird",
                                                "regnen.",
                                                "It will rain."
                                        ],
                                        [
                                                "wir",
                                                "werden",
                                                "es schaffen.",
                                                "We will manage it."
                                        ],
                                        [
                                                "ihr",
                                                "werdet",
                                                "gewinnen.",
                                                "You (pl.) will win."
                                        ],
                                        [
                                                "sie/Sie",
                                                "werden",
                                                "sich freuen.",
                                                "They will be happy."
                                        ]
                                ]
                        }
                ],
                "tip": "Don't feel obligated to use Futur I for every future-tense sentence — present tense + a time word remains the more natural everyday choice for planned, scheduled events. Reach specifically for werden + infinitive when you're predicting, promising, or guessing, since that's where it adds real meaning.",
                "examples": [
                        {
                                "de": "Ich werde dir morgen helfen.",
                                "en": "I will help you tomorrow. (a promise)"
                        },
                        {
                                "de": "Es wird wahrscheinlich regnen.",
                                "en": "It will probably rain. (a prediction)"
                        },
                        {
                                "de": "Wir werden nächstes Jahr heiraten.",
                                "en": "We will get married next year."
                        },
                        {
                                "de": "Er wird wohl noch im Büro sein.",
                                "en": "He's probably still at the office. (a present-tense guess)"
                        },
                        {
                                "de": "Ich werde diesen Fehler nie wieder machen.",
                                "en": "I will never make this mistake again."
                        },
                        {
                                "de": "Die Preise werden nächstes Jahr steigen.",
                                "en": "Prices will rise next year."
                        }
                ]
        },
        {
                "number": "08",
                "id": "future-probability-career-vocab",
                "en": "Expressing Probability & Career Plans",
                "de": "wahrscheinlich / vielleicht / bestimmt — Zukunft, Karriere, Ziele",
                "intro": [
                        "Alongside Futur I, three adverbs let you fine-tune exactly HOW likely you think a future event is — useful nuance for describing career plans, goals, and predictions with real precision rather than sounding either too certain or too vague.",
                        "Ranked from least to most certain: vielleicht (maybe, roughly 50/50), wahrscheinlich (probably, more likely than not), and bestimmt/sicher (definitely/for sure, near-certainty). These slot naturally into either present-tense-for-future or Futur I sentences: “Ich werde wahrscheinlich befördert” or simply “Ich werde wahrscheinlich befördert werden”, both understood the same way.",
                        "This is also the natural vocabulary moment for talking about career and life goals: das Ziel (goal), die Karriere (career), and vorhaben (to plan/intend) let you describe ambitions clearly — “Ich habe vor, mein eigenes Unternehmen zu gründen” (I plan to start my own company)."
                ],
                "tables": [
                        {
                                "caption": "Certainty adverbs, weakest to strongest",
                                "headers": [
                                        "German",
                                        "Certainty level",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "vielleicht",
                                                "maybe (~50%)",
                                                "maybe"
                                        ],
                                        [
                                                "wahrscheinlich",
                                                "probably (>50%)",
                                                "probably"
                                        ],
                                        [
                                                "bestimmt / sicher",
                                                "definitely (near 100%)",
                                                "definitely / for sure"
                                        ]
                                ]
                        },
                        {
                                "caption": "Career & goals vocabulary",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "das Ziel, -e",
                                                "goal"
                                        ],
                                        [
                                                "die Karriere, -n",
                                                "career"
                                        ],
                                        [
                                                "vorhaben",
                                                "to plan/intend"
                                        ],
                                        [
                                                "ein Unternehmen gründen",
                                                "to start a company"
                                        ],
                                        [
                                                "befördert werden",
                                                "to be promoted"
                                        ]
                                ]
                        }
                ],
                "tip": "These three probability adverbs are your dial for hedging confidently in German — native speakers use them constantly to avoid sounding either falsely certain or unhelpfully vague, so weaving them naturally into your speech is a genuine marker of B1-level fluency.",
                "examples": [
                        {
                                "de": "Ich werde wahrscheinlich nächstes Jahr die Stelle wechseln.",
                                "en": "I'll probably change jobs next year."
                        },
                        {
                                "de": "Vielleicht mache ich noch eine Weiterbildung.",
                                "en": "Maybe I'll do further training too."
                        },
                        {
                                "de": "Ich habe vor, nach meinem Studium ins Ausland zu gehen.",
                                "en": "I plan to go abroad after my studies."
                        },
                        {
                                "de": "Mein Ziel ist es, eine eigene Firma zu gründen.",
                                "en": "My goal is to start my own company."
                        },
                        {
                                "de": "Nach meinem Studium werde ich in Deutschland arbeiten.",
                                "en": "After my studies I will work in Germany."
                        },
                        {
                                "de": "Sie wird bestimmt befördert, sie arbeitet so hart.",
                                "en": "She'll definitely be promoted, she works so hard."
                        }
                ]
        },
        {
                "number": "09",
                "id": "relative-clauses-prepositions",
                "en": "Relative Clauses with Prepositions",
                "de": "Relativsätze mit Präpositionen",
                "intro": [
                        "You met basic relative clauses at A2 (“der Mann, der dort steht...”). B1 extends this to relative clauses that need a preposition — describing someone or something you did an action WITH, FOR, ABOUT, or AT, which comes up constantly in more sophisticated description.",
                        "The preposition simply moves to the front of the relative clause, directly before the relative pronoun, and the pronoun's case is now decided by that preposition rather than by the verb: “Das ist der Mann, mit dem ich gestern gesprochen habe” (That's the man I spoke with yesterday) — mit always takes Dativ, so dem appears, matching the masculine noun der Mann.",
                        "For things (rather than people), German prefers a special construction using wo(r)- + preposition instead of a preposition + pronoun: “Das ist das Thema, worüber wir gesprochen haben” (That's the topic we talked about) uses worüber instead of “über das”. The ‘r’ is inserted only when the preposition starts with a vowel (worüber, worauf, but wovon, womit)."
                ],
                "tables": [
                        {
                                "caption": "Relative clauses with prepositions",
                                "headers": [
                                        "For",
                                        "Pattern",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "People",
                                                "preposition + relative pronoun",
                                                "der Mann, mit dem ich gesprochen habe"
                                        ],
                                        [
                                                "People",
                                                "preposition + relative pronoun",
                                                "die Frau, für die ich arbeite"
                                        ],
                                        [
                                                "Things",
                                                "wo(r) + preposition",
                                                "das Thema, worüber wir sprachen"
                                        ],
                                        [
                                                "Things",
                                                "wo(r) + preposition",
                                                "die Sache, womit ich mich beschäftige"
                                        ]
                                ]
                        }
                ],
                "tip": "When the relative clause refers to a PERSON, keep the standard preposition + der/die/dem/den pattern. When it refers to a THING or an abstract idea, switch to the wo(r)- construction — this person/thing split is the key decision point every time.",
                "examples": [
                        {
                                "de": "Das ist der Mann, mit dem ich gestern gesprochen habe.",
                                "en": "That's the man I spoke with yesterday."
                        },
                        {
                                "de": "Die Kollegin, für die ich diese Aufgabe erledigt habe, war sehr dankbar.",
                                "en": "The colleague I did this task for was very grateful."
                        },
                        {
                                "de": "Das ist das Problem, worüber wir diskutiert haben.",
                                "en": "That's the problem we discussed."
                        },
                        {
                                "de": "Das Hobby, womit ich mich am liebsten beschäftige, ist Fotografie.",
                                "en": "The hobby I most like doing is photography."
                        },
                        {
                                "de": "Der Freund, auf den ich mich verlassen kann, heißt Tom.",
                                "en": "The friend I can rely on is called Tom."
                        },
                        {
                                "de": "Das ist genau der Grund, weshalb ich hier bin.",
                                "en": "That's exactly the reason why I'm here."
                        }
                ]
        },
        {
                "number": "10",
                "id": "describing-people-places-vocab",
                "en": "Everyday German: Describing People, Places & Things",
                "de": "Wortschatz: Menschen, Orte, Gegenstände, Eigenschaften",
                "intro": [
                        "B1 description goes beyond simple adjectives like gut or schön into more nuanced character traits, place descriptions, and object qualities — the kind of detailed, specific language that makes your German sound genuinely descriptive rather than generically positive or negative.",
                        "For describing people's character (der Charakter, die Eigenschaft), useful adjectives include zuverlässig (reliable), großzügig (generous), ehrgeizig (ambitious), and stur (stubborn) — a much richer palette than the basic nett/freundlich pair most learners rely on by default.",
                        "For places, words like lebendig (lively/vibrant), gemütlich (cozy), and ruhig (quiet/peaceful) let you capture atmosphere, not just facts — exactly the kind of vocabulary the relative clauses from the previous topic are designed to carry (“eine Stadt, die sehr lebendig ist”)."
                ],
                "tables": [
                        {
                                "caption": "Character traits & atmosphere words",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "zuverlässig",
                                                "reliable"
                                        ],
                                        [
                                                "großzügig",
                                                "generous"
                                        ],
                                        [
                                                "ehrgeizig",
                                                "ambitious"
                                        ],
                                        [
                                                "stur",
                                                "stubborn"
                                        ],
                                        [
                                                "gemütlich",
                                                "cozy"
                                        ],
                                        [
                                                "lebendig",
                                                "lively/vibrant"
                                        ],
                                        [
                                                "ruhig",
                                                "quiet/peaceful"
                                        ]
                                ]
                        }
                ],
                "tip": "Practice combining these richer adjectives with the relative clauses from the previous topic — “Ich habe einen Freund, der sehr zuverlässig ist” — this combination of detailed vocabulary and grammatical structure is exactly what distinguishes B1 description from A2's simpler sentences.",
                "examples": [
                        {
                                "de": "Mein Chef ist sehr zuverlässig und großzügig.",
                                "en": "My boss is very reliable and generous."
                        },
                        {
                                "de": "Sie ist ehrgeizig, aber manchmal auch ein bisschen stur.",
                                "en": "She's ambitious, but sometimes also a bit stubborn."
                        },
                        {
                                "de": "Das Café hat eine sehr gemütliche Atmosphäre.",
                                "en": "The café has a very cozy atmosphere."
                        },
                        {
                                "de": "Berlin ist eine lebendige, aufregende Stadt.",
                                "en": "Berlin is a lively, exciting city."
                        },
                        {
                                "de": "Ich suche eine ruhige Wohnung außerhalb der Stadt.",
                                "en": "I'm looking for a quiet flat outside the city."
                        },
                        {
                                "de": "Das ist eine Person, auf die man sich immer verlassen kann.",
                                "en": "That's a person you can always rely on."
                        }
                ]
        },
        {
                "number": "11",
                "id": "konjunktiv-ii",
                "en": "Konjunktiv II: Wishes, Politeness & Hypotheticals",
                "de": "Konjunktiv II",
                "intro": [
                        "Konjunktiv II is German's tool for talking about things that AREN'T real — wishes, hypothetical situations, polite requests, and unreal conditions (‘if I were...’). It's one of the most useful and frequently used structures at B1, and you've actually already met small pieces of it: könnten and würden from the polite-request lessons back in A2 ARE Konjunktiv II forms.",
                        "For almost all verbs, you build Konjunktiv II with würde + infinitive, exactly like a lighter version of Futur I: “Ich würde gern nach Deutschland reisen” (I would love to travel to Germany). This würde-construction is by far the most common form used in everyday spoken German, and it's always safe to fall back on.",
                        "A handful of very frequent verbs have their own short, irregular Konjunktiv II forms that are used INSTEAD of the würde-construction, because they're so common that the short forms have survived: sein → wäre, haben → hätte, and the modals können → könnte, müssen → müsste, sollen → sollte, dürfen → dürfte. Native speakers say “Ich wäre gern reich”, never “Ich würde gern reich sein”, even though both would technically work."
                ],
                "tables": [
                        {
                                "caption": "The Konjunktiv II toolkit",
                                "headers": [
                                        "Verb",
                                        "Konjunktiv II form",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "most verbs",
                                                "würde + infinitive",
                                                "Ich würde viel reisen."
                                        ],
                                        [
                                                "sein",
                                                "wäre",
                                                "Ich wäre gern reich."
                                        ],
                                        [
                                                "haben",
                                                "hätte",
                                                "Ich hätte gern mehr Zeit."
                                        ],
                                        [
                                                "können",
                                                "könnte",
                                                "Ich könnte dir helfen."
                                        ],
                                        [
                                                "sollen",
                                                "sollte",
                                                "Du solltest mehr schlafen."
                                        ],
                                        [
                                                "müssen",
                                                "müsste",
                                                "Ich müsste eigentlich lernen."
                                        ],
                                        [
                                                "dürfen",
                                                "dürfte",
                                                "Dürfte ich Sie etwas fragen?"
                                        ]
                                ]
                        }
                ],
                "tip": "For sein, haben, and the modal verbs, always use their short irregular forms (wäre, hätte, könnte, müsste, sollte, dürfte) rather than würde + infinitive — native speakers never say ‘würde haben’ or ‘würde können’. For every other verb, würde + infinitive is exactly right and universally used.",
                "examples": [
                        {
                                "de": "Wenn ich mehr Geld hätte, würde ich viel reisen.",
                                "en": "If I had more money, I would travel a lot."
                        },
                        {
                                "de": "Ich würde gern in Deutschland studieren.",
                                "en": "I would love to study in Germany."
                        },
                        {
                                "de": "An deiner Stelle würde ich mehr Sport machen.",
                                "en": "In your place, I would exercise more."
                        },
                        {
                                "de": "Könnten Sie mir bitte helfen?",
                                "en": "Could you help me please?"
                        },
                        {
                                "de": "Das wäre wirklich toll!",
                                "en": "That would be really great!"
                        },
                        {
                                "de": "Du solltest wirklich mehr schlafen.",
                                "en": "You really should sleep more."
                        }
                ]
        },
        {
                "number": "12",
                "id": "passive-all-tenses",
                "en": "Passiv in Every Tense",
                "de": "Passiv: Präsens, Präteritum, Perfekt",
                "intro": [
                        "You met the present-tense passive at A2 (werden + Partizip II). B1 extends this same pattern into the past tenses, which is simpler than it sounds: you already know how to change werden's tense from the active-voice lessons in this course, so building the passive in any tense is really just plugging in the right form of werden.",
                        "For the Präteritum passive, swap werden for its simple-past form wurde: “Das Haus wurde 1990 gebaut” (The house was built in 1990) — this is the passive tense you'll see constantly in historical descriptions and news reporting, matching the general preference for Präteritum in written narration.",
                        "For the Perfekt passive, things get a little more unusual: you need ist/sind + Partizip II + worden (a special short form of geworden used only in the passive Perfekt). “Das Haus ist letztes Jahr renoviert worden” (The house was renovated last year) — note worden, not geworden, which is the one true irregularity to memorize in this whole system."
                ],
                "tables": [
                        {
                                "caption": "Passiv across the tenses",
                                "headers": [
                                        "Tense",
                                        "Formula",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "Präsens",
                                                "werden + Partizip II",
                                                "Das Auto wird repariert."
                                        ],
                                        [
                                                "Präteritum",
                                                "wurde + Partizip II",
                                                "Das Auto wurde repariert."
                                        ],
                                        [
                                                "Perfekt",
                                                "ist/sind + Partizip II + worden",
                                                "Das Auto ist repariert worden."
                                        ]
                                ]
                        }
                ],
                "tip": "The Perfekt passive's worden (not geworden) is the single irregularity to memorize in this whole topic — everywhere else, the passive simply borrows werden's normal tense forms exactly as you already know them from the active voice and the future tense.",
                "examples": [
                        {
                                "de": "Die Brücke wird gerade repariert.",
                                "en": "The bridge is currently being repaired. (Präsens)"
                        },
                        {
                                "de": "Das Museum wurde 1920 eröffnet.",
                                "en": "The museum was opened in 1920. (Präteritum)"
                        },
                        {
                                "de": "Der Brief ist gestern verschickt worden.",
                                "en": "The letter was sent yesterday. (Perfekt)"
                        },
                        {
                                "de": "Diese Regel wurde letztes Jahr geändert.",
                                "en": "This rule was changed last year."
                        },
                        {
                                "de": "Das Konzert ist wegen des Wetters abgesagt worden.",
                                "en": "The concert was cancelled due to the weather."
                        },
                        {
                                "de": "In diesem Land werden viele Sprachen gesprochen.",
                                "en": "Many languages are spoken in this country."
                        }
                ]
        },
        {
                "number": "13",
                "id": "passive-with-modals-tech-vocab",
                "en": "Passiv with Modal Verbs & Technology Vocabulary",
                "de": "Passiv mit Modalverben — Wortschatz: Produktion, Technik, Umwelt",
                "intro": [
                        "German frequently combines the passive voice with a modal verb to express what CAN, MUST, or SHOULD be done to something — extremely common in instructions, rules, and technical or environmental discussions, which is exactly why this topic pairs the grammar with related vocabulary.",
                        "The formula stacks two things you already know: the modal verb conjugated normally, plus werden's infinitive form at the very end, plus the Partizip II sitting just before it: “Das muss repariert werden” (That has to be repaired) — modal in position 2, Partizip II + werden together at the end of the sentence.",
                        "This structure shows up constantly in instructions (“Die Maschine muss ausgeschaltet werden”), news about technology and environment (“Der CO2-Ausstoß muss reduziert werden”), and general rules (“Das darf nicht gemacht werden”) — a genuinely high-value pattern for B1-level reading and writing about current issues."
                ],
                "tables": [
                        {
                                "caption": "Passiv + modal verb formula",
                                "headers": [
                                        "Subject",
                                        "Modal",
                                        "Partizip II",
                                        "werden",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "Das",
                                                "muss",
                                                "repariert",
                                                "werden.",
                                                "That has to be repaired."
                                        ],
                                        [
                                                "Die Maschine",
                                                "kann",
                                                "ausgeschaltet",
                                                "werden.",
                                                "The machine can be switched off."
                                        ],
                                        [
                                                "Der CO2-Ausstoß",
                                                "sollte",
                                                "reduziert",
                                                "werden.",
                                                "CO2 emissions should be reduced."
                                        ],
                                        [
                                                "Das Problem",
                                                "muss",
                                                "gelöst",
                                                "werden.",
                                                "The problem has to be solved."
                                        ]
                                ]
                        },
                        {
                                "caption": "Technology & environment vocabulary",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "die Technik",
                                                "technology"
                                        ],
                                        [
                                                "die Produktion, -en",
                                                "production"
                                        ],
                                        [
                                                "die Umwelt",
                                                "environment"
                                        ],
                                        [
                                                "der CO2-Ausstoß",
                                                "CO2 emissions"
                                        ],
                                        [
                                                "reduzieren",
                                                "to reduce"
                                        ],
                                        [
                                                "herstellen",
                                                "to manufacture/produce"
                                        ]
                                ]
                        }
                ],
                "tip": "The word order in Passiv + modal is entirely predictable once you notice the pattern: modal verb in position 2, then everything else, with Partizip II and werden's infinitive stacked together right at the very end of the sentence, in that fixed order (Partizip II first, werden last).",
                "examples": [
                        {
                                "de": "Diese Maschine muss regelmäßig gewartet werden.",
                                "en": "This machine has to be maintained regularly."
                        },
                        {
                                "de": "Der CO2-Ausstoß sollte weltweit reduziert werden.",
                                "en": "CO2 emissions should be reduced worldwide."
                        },
                        {
                                "de": "Das Auto wird in Deutschland hergestellt.",
                                "en": "The car is manufactured in Germany."
                        },
                        {
                                "de": "Diese Regeln müssen von allen Mitarbeitern beachtet werden.",
                                "en": "These rules have to be observed by all employees."
                        },
                        {
                                "de": "Das Problem kann technisch gelöst werden.",
                                "en": "The problem can be solved technically."
                        },
                        {
                                "de": "Plastikmüll sollte besser recycelt werden.",
                                "en": "Plastic waste should be recycled better."
                        }
                ]
        },
        {
                "number": "14",
                "id": "nominalisierung-infinitiv-zu",
                "en": "Nominalization & Infinitive with zu",
                "de": "Nominalisierung und Infinitiv mit zu",
                "intro": [
                        "Nominalisierung means turning a verb into a noun — German does this constantly, especially in writing, news, and formal speech, producing a more compact, sophisticated style. The simplest method: take the infinitive of almost any verb and capitalize it, and it becomes a neuter noun. Lesen (to read) → das Lesen (reading); Rauchen (to smoke) → das Rauchen (smoking, as in ‘Rauchen verboten’ — No smoking).",
                        "This lets you compress a full clause into a noun phrase: instead of “Wenn man Sport treibt, ist das gesund” (If you exercise, that's healthy), a more B1/formal style would say “Sport treiben ist gesund” or even more nominalized, “Sporttreiben ist gesund” — shorter, punchier, and very common in written German.",
                        "Separately, the infinitive with zu is used after many verbs and adjectives to link a main clause to an action: “Ich habe vor, nach Berlin zu ziehen” (I plan to move to Berlin), “Es ist wichtig, viel zu üben” (It's important to practice a lot). With separable verbs, zu is inserted right in the middle, between the prefix and the verb stem: aufzustehen, anzurufen — a small but important detail that trips up many learners."
                ],
                "tables": [
                        {
                                "caption": "Verb → noun (Nominalisierung)",
                                "headers": [
                                        "Infinitive (verb)",
                                        "Nominalized (noun)",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "lesen",
                                                "das Lesen",
                                                "Lesen macht Spaß."
                                        ],
                                        [
                                                "schwimmen",
                                                "das Schwimmen",
                                                "Schwimmen ist gut für die Gesundheit."
                                        ],
                                        [
                                                "rauchen",
                                                "das Rauchen",
                                                "Rauchen ist hier verboten."
                                        ],
                                        [
                                                "ankommen (separable)",
                                                "die Ankunft (special noun)",
                                                "Die Ankunft des Zuges verspätet sich."
                                        ]
                                ]
                        }
                ],
                "tip": "With separable verbs, zu is squeezed in between the prefix and the base verb, forming one single word: auf + zu + stehen = aufzustehen, an + zu + rufen = anzurufen — remembering this one insertion rule prevents a very common B1 writing mistake.",
                "examples": [
                        {
                                "de": "Schwimmen ist mein Lieblingssport.",
                                "en": "Swimming is my favorite sport."
                        },
                        {
                                "de": "Rauchen ist in diesem Gebäude verboten.",
                                "en": "Smoking is forbidden in this building."
                        },
                        {
                                "de": "Ich habe vor, nächstes Jahr umzuziehen.",
                                "en": "I plan to move next year."
                        },
                        {
                                "de": "Es ist wichtig, jeden Tag Deutsch zu üben.",
                                "en": "It's important to practice German every day."
                        },
                        {
                                "de": "Ich habe vergessen, meine Mutter anzurufen.",
                                "en": "I forgot to call my mother."
                        },
                        {
                                "de": "Gesundes Essen ist wichtig für ein langes Leben.",
                                "en": "Healthy eating is important for a long life."
                        }
                ]
        },
        {
                "number": "15",
                "id": "um-zu-ohne-zu-statt-zu",
                "en": "um...zu, ohne...zu & statt...zu",
                "de": "um … zu, ohne … zu, statt … zu",
                "intro": [
                        "You met um...zu at A2 for expressing purpose (‘in order to’). B1 adds its two close relatives, ohne...zu (without doing) and statt...zu (instead of doing), which follow exactly the same structural rule: same subject in both halves of the sentence, ending in a bare infinitive with no separate conjugated verb.",
                        "Ohne...zu describes an action done WITHOUT something else happening: “Er ist gegangen, ohne sich zu verabschieden” (He left without saying goodbye). Statt...zu describes doing one thing INSTEAD of another: “Sie hat gearbeitet, statt Pause zu machen” (She worked instead of taking a break).",
                        "All three — um...zu, ohne...zu, statt...zu — share the identical rule from A2: they only work when the subject of both actions is the same person. The instant a different subject enters the second half, you must switch to a full clause with weil/damit/indem instead."
                ],
                "tables": [
                        {
                                "caption": "The three zu-infinitive connectors",
                                "headers": [
                                        "Connector",
                                        "Meaning",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "um … zu",
                                                "in order to",
                                                "Ich lerne, um die Prüfung zu bestehen."
                                        ],
                                        [
                                                "ohne … zu",
                                                "without doing",
                                                "Er ging, ohne sich zu verabschieden."
                                        ],
                                        [
                                                "statt … zu",
                                                "instead of doing",
                                                "Sie las, statt zu schlafen."
                                        ]
                                ]
                        }
                ],
                "tip": "All three of these connectors follow the exact same rule as a family: same subject required, bare infinitive at the end, no separate conjugated verb inside the phrase. Learning them together, as variations on one pattern, is far more efficient than treating each as a brand-new structure.",
                "examples": [
                        {
                                "de": "Ich spare Geld, um mir ein neues Auto zu kaufen.",
                                "en": "I'm saving money to buy myself a new car."
                        },
                        {
                                "de": "Sie verließ die Party, ohne sich zu verabschieden.",
                                "en": "She left the party without saying goodbye."
                        },
                        {
                                "de": "Er hat ferngesehen, statt seine Hausaufgaben zu machen.",
                                "en": "He watched TV instead of doing his homework."
                        },
                        {
                                "de": "Wir sind früh aufgestanden, um den Sonnenaufgang zu sehen.",
                                "en": "We got up early to see the sunrise."
                        },
                        {
                                "de": "Man kann nicht Deutsch lernen, ohne viel zu üben.",
                                "en": "You can't learn German without practicing a lot."
                        },
                        {
                                "de": "Ich bleibe lieber zu Hause, statt ins Kino zu gehen.",
                                "en": "I'd rather stay home instead of going to the cinema."
                        }
                ]
        },
        {
                "number": "16",
                "id": "workplace-application-vocab",
                "en": "Everyday German: Workplace & Job Applications",
                "de": "Wortschatz: Arbeitsplatz, Bewerbung, Vorstellungsgespräch, Kollegen",
                "intro": [
                        "B1-level work vocabulary moves beyond simple job titles into the language of applying for jobs, interviewing, and navigating workplace relationships — the kind of real professional German you'll need once you're job-hunting or working in a German-speaking environment.",
                        "For the application process: sich bewerben (to apply), das Bewerbungsschreiben (cover letter), and das Vorstellungsgespräch (job interview) are the three essential nouns/verbs, while “Ich möchte mich auf die Stelle als ... bewerben” (I would like to apply for the position of ...) is a ready-made sentence opener for any application email or letter.",
                        "For workplace relationships and conditions, die Arbeitsbedingungen (working conditions), der Arbeitsvertrag (employment contract), and das Team (team) round out the vocabulary you'll need for describing your job situation in real depth, well beyond A2's basic job vocabulary."
                ],
                "tables": [
                        {
                                "caption": "Application & workplace vocabulary",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "sich bewerben um/auf + Akk.",
                                                "to apply for"
                                        ],
                                        [
                                                "das Bewerbungsschreiben, -",
                                                "cover letter"
                                        ],
                                        [
                                                "das Vorstellungsgespräch, -e",
                                                "job interview"
                                        ],
                                        [
                                                "die Arbeitsbedingungen (Pl.)",
                                                "working conditions"
                                        ],
                                        [
                                                "der Arbeitsvertrag, ¨-e",
                                                "employment contract"
                                        ],
                                        [
                                                "das Team, -s",
                                                "team"
                                        ]
                                ]
                        }
                ],
                "tip": "“Ich möchte mich auf die Stelle als [job title] bewerben” is a genuinely reusable sentence template — memorize its exact shape once, and you can plug in any job title to open a cover letter or application email confidently.",
                "examples": [
                        {
                                "de": "Ich möchte mich auf die Stelle als Softwareentwickler bewerben.",
                                "en": "I would like to apply for the position of software developer."
                        },
                        {
                                "de": "Bitte finden Sie mein Bewerbungsschreiben im Anhang.",
                                "en": "Please find my cover letter attached."
                        },
                        {
                                "de": "Mein Vorstellungsgespräch ist nächsten Montag.",
                                "en": "My job interview is next Monday."
                        },
                        {
                                "de": "Die Arbeitsbedingungen in dieser Firma sind sehr gut.",
                                "en": "The working conditions at this company are very good."
                        },
                        {
                                "de": "Ich habe meinen Arbeitsvertrag noch nicht unterschrieben.",
                                "en": "I haven't signed my employment contract yet."
                        },
                        {
                                "de": "Unser Team arbeitet sehr gut zusammen.",
                                "en": "Our team works together very well."
                        }
                ]
        },
        {
                "number": "17",
                "id": "sodass-dadurch",
                "en": "Advanced Connectors: sodass & dadurch",
                "de": "Konnektoren auf B1-Niveau: sodass, dadurch",
                "intro": [
                        "These two connectors round out your B1 toolkit for expressing cause and result with real precision. Sodass (so that / with the result that) is a subordinating conjunction — it introduces a RESULT that follows from what was just said, and, like weil and dass, it sends the verb to the end of its clause.",
                        "“Es regnete stark, sodass wir zu Hause blieben” (It rained heavily, so that we stayed home) — notice sodass differs subtly from weil: weil explains WHY something happened (looking backward for a cause), while sodass shows the CONSEQUENCE of what came before (looking forward to a result). The information flows in the opposite direction.",
                        "Dadurch (through that / as a result of that) works like trotzdem and deshalb — it's an adverb that starts its own sentence and takes position 1, triggering normal verb-second order: “Es regnete stark. Dadurch wurden die Straßen überflutet” (It rained heavily. As a result, the streets were flooded). Dadurch specifically emphasizes that the PREVIOUS event was the mechanism or means that caused the new result."
                ],
                "tables": [
                        {
                                "caption": "sodass vs. dadurch",
                                "headers": [
                                        "Word",
                                        "Type",
                                        "Verb position",
                                        "Example"
                                ],
                                "rows": [
                                        [
                                                "sodass",
                                                "subordinating (one sentence)",
                                                "end of clause",
                                                "Es regnete, sodass wir zu Hause blieben."
                                        ],
                                        [
                                                "dadurch",
                                                "adverb (own sentence)",
                                                "verb in position 2",
                                                "Es regnete. Dadurch wurden die Straßen nass."
                                        ]
                                ]
                        }
                ],
                "tip": "Keep the direction of logic straight: weil looks BACKWARD to explain a cause (‘why did this happen?’), while sodass and dadurch look FORWARD to a result (‘what happened because of this?’). Getting this direction right is what separates confident B1 writing from simple guesswork.",
                "examples": [
                        {
                                "de": "Der Stau war so lang, sodass wir zwei Stunden zu spät kamen.",
                                "en": "The traffic jam was so long that we arrived two hours late."
                        },
                        {
                                "de": "Die Firma hat viele neue Kunden gewonnen, sodass sie mehr Mitarbeiter braucht.",
                                "en": "The company gained many new customers, so that it now needs more employees."
                        },
                        {
                                "de": "Es gab einen Stromausfall. Dadurch fiel das Internet aus.",
                                "en": "There was a power outage. As a result, the internet went down."
                        },
                        {
                                "de": "Sie hat viel geübt, sodass sie die Prüfung mit Bestnote bestanden hat.",
                                "en": "She practiced a lot, so that she passed the exam with top marks."
                        },
                        {
                                "de": "Die Preise sind gestiegen. Dadurch kaufen die Leute weniger.",
                                "en": "Prices have risen. As a result, people buy less."
                        },
                        {
                                "de": "Er hat zu spät angefangen zu lernen, sodass er die Prüfung nicht schaffte.",
                                "en": "He started studying too late, so that he didn't pass the exam."
                        }
                ]
        },
        {
                "number": "18",
                "id": "environment-climate-vocab",
                "en": "Everyday German: Environment & Climate Change",
                "de": "Wortschatz: Umwelt, Klimawandel, Recycling, Energie, Gesellschaft",
                "intro": [
                        "Environmental topics are a B1-exam staple and a genuinely common real-world conversation subject — this vocabulary set, combined with the cause/result connectors from this chapter, lets you discuss problems and their consequences with real nuance rather than only very basic statements.",
                        "Core vocabulary includes der Klimawandel (climate change), die erneuerbaren Energien (renewable energy), and der Treibhauseffekt (greenhouse effect) — words you'll see constantly in German news articles and B1 reading texts on this topic.",
                        "For everyday environmental action, mülltrennen/Müll trennen (to separate/sort waste) and recyceln (to recycle) describe the practical habits most German households follow, while umweltfreundlich (environmentally friendly) is the go-to adjective for describing any green product or choice."
                ],
                "tables": [
                        {
                                "caption": "Environment & climate vocabulary",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "der Klimawandel",
                                                "climate change"
                                        ],
                                        [
                                                "die erneuerbaren Energien",
                                                "renewable energy"
                                        ],
                                        [
                                                "der Treibhauseffekt",
                                                "greenhouse effect"
                                        ],
                                        [
                                                "Müll trennen / recyceln",
                                                "to sort waste / to recycle"
                                        ],
                                        [
                                                "umweltfreundlich",
                                                "environmentally friendly"
                                        ],
                                        [
                                                "die Ressourcen (Pl.)",
                                                "resources"
                                        ]
                                ]
                        }
                ],
                "tip": "Combine this vocabulary with sodass/dadurch to build genuinely exam-ready sentences about cause and effect: “Der CO2-Ausstoß steigt, sodass sich das Klima erwärmt” — exactly the kind of complex, connected sentence B1 writing tasks are looking for.",
                "examples": [
                        {
                                "de": "Der Klimawandel ist eines der größten Probleme unserer Zeit.",
                                "en": "Climate change is one of the biggest problems of our time."
                        },
                        {
                                "de": "Viele Menschen benutzen öffentliche Verkehrsmittel, um die Umwelt zu schützen.",
                                "en": "Many people use public transport to protect the environment."
                        },
                        {
                                "de": "Wir sollten mehr in erneuerbare Energien investieren.",
                                "en": "We should invest more in renewable energy."
                        },
                        {
                                "de": "In Deutschland trennt man den Müll sehr genau.",
                                "en": "In Germany, waste is sorted very carefully."
                        },
                        {
                                "de": "Dieses Produkt ist besonders umweltfreundlich.",
                                "en": "This product is especially environmentally friendly."
                        },
                        {
                                "de": "Wir verbrauchen zu viele natürliche Ressourcen.",
                                "en": "We consume too many natural resources."
                        }
                ]
        },
        {
                "number": "19",
                "id": "indirect-speech-konjunktiv-i",
                "en": "Indirect Speech & an Introduction to Konjunktiv I",
                "de": "Indirekte Rede und Konjunktiv I (Einführung)",
                "intro": [
                        "Indirect speech lets you report what someone else said without quoting them word for word — “Sie sagte, sie sei müde” (She said she was tired) instead of the direct quote “Ich bin müde”. You already do a simple version of this in English constantly; German has a dedicated grammatical form for it: Konjunktiv I.",
                        "At B1, you mainly need to RECOGNIZE Konjunktiv I rather than produce every form perfectly — it appears constantly in news reporting (“Der Minister sagte, die Lage sei ernst”) and is built by taking the verb stem and adding: -e, -est, -e, -en, -et, -en. The most common form you'll meet by far is the er/sie/es form, since news reports third-person statements.",
                        "In everyday spoken German, however, people very often just use the indicative (normal present tense) or dass-clauses instead of true Konjunktiv I, especially when the Konjunktiv I form would look identical to the normal present tense (which happens for most verbs except sein): “Sie sagte, dass sie müde ist” is completely natural and common, alongside the more formal “Sie sagte, sie sei müde.”"
                ],
                "tables": [
                        {
                                "caption": "Konjunktiv I: recognizing the pattern (er/sie/es form)",
                                "headers": [
                                        "Infinitive",
                                        "Konjunktiv I (er/sie/es)",
                                        "Example in reported speech"
                                ],
                                "rows": [
                                        [
                                                "sein",
                                                "sei",
                                                "Er sagte, er sei krank."
                                        ],
                                        [
                                                "haben",
                                                "habe",
                                                "Sie sagte, sie habe keine Zeit."
                                        ],
                                        [
                                                "können",
                                                "könne",
                                                "Er meinte, er könne nicht kommen."
                                        ],
                                        [
                                                "gehen",
                                                "gehe",
                                                "Sie sagte, sie gehe später."
                                        ]
                                ]
                        }
                ],
                "tip": "At B1, focus on RECOGNIZING Konjunktiv I when reading news and formal texts, especially the very common sei (from sein) — in your own speaking and writing, it's completely acceptable to use the simpler dass + normal indicative pattern instead, which native speakers use constantly too.",
                "examples": [
                        {
                                "de": "Der Politiker sagte, die Wirtschaft sei stabil.",
                                "en": "The politician said the economy was stable."
                        },
                        {
                                "de": "Sie erklärte, sie habe keine andere Wahl gehabt.",
                                "en": "She explained she had had no other choice."
                        },
                        {
                                "de": "Er meinte, das Problem könne bald gelöst werden.",
                                "en": "He said the problem could soon be solved."
                        },
                        {
                                "de": "Sie sagte, dass sie morgen kommt.",
                                "en": "She said that she's coming tomorrow. (common spoken alternative)"
                        },
                        {
                                "de": "Laut dem Bericht sei die Situation ernst.",
                                "en": "According to the report, the situation is serious."
                        },
                        {
                                "de": "Der Sprecher sagte, man arbeite an einer Lösung.",
                                "en": "The spokesperson said they were working on a solution."
                        }
                ]
        },
        {
                "number": "20",
                "id": "verbs-with-prepositions",
                "en": "Verbs with Fixed Prepositions",
                "de": "Verben mit Präpositionen und Präpositionaladverbien",
                "intro": [
                        "Many German verbs are permanently paired with a specific preposition, and the pairing often doesn't match English at all — you simply have to learn verb + preposition as a single unit, the same way you'd learn an English phrasal verb like ‘look forward TO’ or ‘depend ON’.",
                        "Common pairs include sich freuen auf/über (already met in A2), warten auf (to wait for), sich interessieren für (to be interested in), and denken an (to think of/about) — note that English ‘wait FOR’ becomes German ‘warten AUF’, a completely different preposition, which is exactly why these need dedicated memorization.",
                        "When you want to ask a QUESTION about one of these verb+preposition pairs, or refer back to it with a pronoun, German uses special wo(r)- and da(r)- words instead of preposition + question word or preposition + pronoun for things: “Worauf wartest du?” (What are you waiting for?) and “Ich warte darauf” (I'm waiting for it) — the same wo(r)-/da(r)- pattern you saw in the relative-clause topic earlier in this course, now applied to questions and pronoun references."
                ],
                "tables": [
                        {
                                "caption": "Common verb + preposition pairs",
                                "headers": [
                                        "Verb + preposition",
                                        "Meaning",
                                        "Question form",
                                        "Pronoun reference"
                                ],
                                "rows": [
                                        [
                                                "warten auf + Akk.",
                                                "to wait for",
                                                "Worauf wartest du?",
                                                "Ich warte darauf."
                                        ],
                                        [
                                                "sich interessieren für + Akk.",
                                                "to be interested in",
                                                "Wofür interessierst du dich?",
                                                "Ich interessiere mich dafür."
                                        ],
                                        [
                                                "denken an + Akk.",
                                                "to think of/about",
                                                "Woran denkst du?",
                                                "Ich denke daran."
                                        ],
                                        [
                                                "sich freuen auf + Akk.",
                                                "to look forward to",
                                                "Worauf freust du dich?",
                                                "Ich freue mich darauf."
                                        ]
                                ]
                        }
                ],
                "tip": "For THINGS and ideas (not people), always use the wo(r)-/da(r)- forms for questions and pronoun references — never say ‘Auf was wartest du?’ (understandable, but not standard); the correct, natural form is always ‘Worauf wartest du?’",
                "examples": [
                        {
                                "de": "Ich warte auf den Bus.",
                                "en": "I'm waiting for the bus."
                        },
                        {
                                "de": "Worauf wartest du?",
                                "en": "What are you waiting for?"
                        },
                        {
                                "de": "Ich interessiere mich sehr für Geschichte.",
                                "en": "I'm very interested in history."
                        },
                        {
                                "de": "Woran denkst du gerade?",
                                "en": "What are you thinking about right now?"
                        },
                        {
                                "de": "Ich freue mich schon darauf, dich zu sehen.",
                                "en": "I'm already looking forward to seeing you."
                        },
                        {
                                "de": "Wovon handelt dieses Buch?",
                                "en": "What is this book about?"
                        }
                ]
        },
        {
                "number": "21",
                "id": "internet-social-media-vocab",
                "en": "Everyday German: Internet, Social Media & AI",
                "de": "Wortschatz: Internet, soziale Medien, Nachrichten, künstliche Intelligenz, Smartphones",
                "intro": [
                        "Modern technology vocabulary is essential at B1, both for everyday conversation and because tech and media topics appear frequently in B1 reading and discussion tasks. This set covers the core vocabulary for talking about the internet, phones, and increasingly, artificial intelligence.",
                        "Core vocabulary includes hochladen/herunterladen (to upload/download), teilen (to share, as in social media), and die künstliche Intelligenz (artificial intelligence, often abbreviated KI, the German equivalent of AI) — words you'll encounter constantly in any modern German conversation or news article.",
                        "For discussing pros and cons of technology (a very common B1 discussion topic), süchtig nach + Dativ (addicted to) and abhängig von + Dativ (dependent on) let you critically discuss overuse, while praktisch (practical) and zeitsparend (time-saving) let you highlight benefits — exactly the balanced vocabulary needed for an einerseits/andererseits discussion from earlier in this course."
                ],
                "tables": [
                        {
                                "caption": "Technology & media vocabulary",
                                "headers": [
                                        "German",
                                        "English"
                                ],
                                "rows": [
                                        [
                                                "hochladen / herunterladen",
                                                "to upload / to download"
                                        ],
                                        [
                                                "teilen",
                                                "to share"
                                        ],
                                        [
                                                "die künstliche Intelligenz (KI)",
                                                "artificial intelligence (AI)"
                                        ],
                                        [
                                                "süchtig nach + Dativ",
                                                "addicted to"
                                        ],
                                        [
                                                "abhängig von + Dativ",
                                                "dependent on"
                                        ],
                                        [
                                                "zeitsparend",
                                                "time-saving"
                                        ]
                                ]
                        }
                ],
                "tip": "The German abbreviation for artificial intelligence is KI (künstliche Intelligenz), not AI — recognize this immediately in German news and tech articles, since the English abbreviation simply doesn't appear in German-language text.",
                "examples": [
                        {
                                "de": "Ich habe die Fotos schon auf mein Handy heruntergeladen.",
                                "en": "I've already downloaded the photos to my phone."
                        },
                        {
                                "de": "Viele Jugendliche sind süchtig nach sozialen Medien.",
                                "en": "Many young people are addicted to social media."
                        },
                        {
                                "de": "Künstliche Intelligenz verändert unser Leben schnell.",
                                "en": "Artificial intelligence is changing our lives quickly."
                        },
                        {
                                "de": "Ich teile meine Fotos gern mit Freunden.",
                                "en": "I like sharing my photos with friends."
                        },
                        {
                                "de": "Smartphones sind sehr praktisch, aber auch zeitraubend.",
                                "en": "Smartphones are very practical, but also time-consuming."
                        },
                        {
                                "de": "Viele Menschen sind heute abhängig von ihrem Handy.",
                                "en": "Many people today are dependent on their phone."
                        }
                ]
        }
]
  }
];

function getCourseById(id) {
  return COURSES.find(c => c.id === id) || null;
}
