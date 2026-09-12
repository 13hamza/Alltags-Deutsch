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
          "Think of every German noun as wearing a little name tag that says whether it's a \u2018boy word\u2019, a \u2018girl word\u2019, or a \u2018neither word\u2019. Grammar books call these genders masculine, feminine, and neuter — but it has nothing to do with real-life boys and girls. \u201cDas Mädchen\u201d (the girl) is actually neuter! It's just a label the word carries around, and German speakers learned which label goes with which word the same way you learned that a stove is hot: by hearing it over and over as a kid.",
          "The name tag itself is the article — a tiny word that comes right before the noun. \u201cDer\u201d marks a boy word, \u201cdie\u201d marks a girl word, and \u201cdas\u201d marks a neither word. So \u201cder Mann\u201d, \u201cdie Frau\u201d, and \u201cdas Kind\u201d are really just \u201clabel + word\u201d pairs. There's a second kind of label too: \u201cein/eine\u201d, which works like English \u201ca/an\u201d — it means you're talking about any one example of something (\u201ca dog\u201d), not one specific thing (\u201cthe dog\u201d).",
          "One more thing that surprises beginners: in German, every single noun starts with a capital letter, always — not just names of people and places like in English, but ordinary words too, like \u201cHund\u201d (dog) or \u201cTisch\u201d (table). So if you see a capital letter in the middle of a German sentence, that's your clue: \u201cthis word is a thing\u201d."
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
          { de: "Wir fahren nach Berlin.", en: "We are driving to Berlin." }
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
          { de: "Sprechen Sie Englisch?", en: "Do you (formal) speak English?" }
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
        tip: "\u201cKein\u201d kills the article, \u201cnicht\u201d kills everything else. Quick test: if you could put \u201ca/an\u201d or \u201csome\u201d in front of the English noun, use kein(e). Otherwise (for verbs, adjectives, or specific/definite things), use nicht. And in questions, negation doesn't change the question's word order at all — you build the question exactly as usual, then simply add nicht or kein, the same way you would in a statement.",
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
          { de: "Warum isst du das nicht?", en: "Why aren't you eating that? (negative W-question)" }
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
          }
        ],
        tip: "\u2018dürfen\u2019 in the negative (\u2018darf nicht\u2019) is how German says something is NOT ALLOWED, which is stronger than just saying you don't want to: \u2018Ich darf nicht im Klassenzimmer essen\u2019 (I'm not allowed to eat in the classroom) is a rule, not a preference. \u2018sollen\u2019 is softer than \u2018müssen\u2019 — it's more like \u2018I'm supposed to\u2019 or advice, while \u2018müssen\u2019 is a hard requirement.",
        examples: [
          { de: "Ich kann gut schwimmen.", en: "I can swim well." },
          { de: "Du musst jetzt gehen.", en: "You have to go now." },
          { de: "Wir möchten Pizza essen.", en: "We would like to eat pizza." },
          { de: "Ich soll jeden Tag die Hausaufgabe machen.", en: "I'm supposed to do homework every day." },
          { de: "Ich darf nicht im Klassenzimmer essen.", en: "I'm not allowed to eat in the classroom." },
          { de: "Du darfst heute ins Kino gehen.", en: "You're allowed to go to the cinema today." }
        ]
      },
      {
        number: "10",
        id: "separable-verbs",
        en: "Separable Verbs",
        de: "Trennbare Verben",
        intro: [
          "Some German verbs are actually two pieces stuck together in the dictionary: a small prefix glued onto a base verb, like \u201caufstehen\u201d (auf + stehen, literally \u201cup-stand\u201d, meaning \u201cto get up\u201d). When you actually use one of these verbs in a normal present-tense sentence, the two pieces come apart — the base verb stays in its usual verb-second spot and gets conjugated as normal, while the little prefix breaks off and floats all the way to the end of the sentence, like a boomerang that gets thrown but lands later.",
          "So \u201cIch stehe auf\u201d (I get up) is really \u201cIch stehe ... auf\u201d — \u201csteh(e)\u201d is the conjugated piece in position two, and \u201cauf\u201d is the separated prefix waiting patiently at the end. You only see the verb written as one whole word (aufstehen) in its dictionary/infinitive form, or later at the end of a longer sentence with a modal verb."
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
          }
        ],
        examples: [
          { de: "Der Kurs beginnt um 8 Uhr.", en: "The course starts at 8 o'clock." },
          { de: "Wir treffen uns am Montag.", en: "We're meeting on Monday." },
          { de: "Ihr Geburtstag ist im Januar.", en: "Her birthday is in January." },
          { de: "Am Wochenende habe ich frei.", en: "I'm off on the weekend." },
          { de: "Im Sommer fahren wir ans Meer.", en: "In summer we go to the seaside." }
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
              ["-ig (at the end of a word)", "like English \u2018ich\u2019, not a hard \u2018g\u2019", "fertig, zwanzig"]
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
          { de: "Meine Hobbys sind Kochen und Schwimmen.", en: "My hobbies are cooking and swimming." }
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
          { de: "Mit freundlichen Grüßen", en: "Kind regards (formal sign-off)" }
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
              ["Bitte … Sie hier nicht. Es ist verboten.", "Bitte rauchen Sie hier nicht. Es ist verboten. (Please don't smoke here. It's forbidden.)"],
              ["Es tut mir leid. Ich weiß das nicht.", "I'm sorry. I don't know that. (a safe, polite way to say you weren't aware of a rule)"],
              ["Bitte machen Sie … an/aus/auf/zu.", "Bitte machen Sie das Fenster auf. (Please open the window.)"]
            ]
          },
          {
            caption: "Asking for directions",
            headers: ["Pattern", "Example"],
            rows: [
              ["Bitte sagen Sie mir den Weg zu…", "Bitte sagen Sie mir den Weg zum Hotel. (Please tell me the way to the hotel.)"],
              ["Antwort", "Gehen Sie links, dann geradeaus und dann rechts. (Go left, then straight, then right.)"]
            ]
          }
        ],
        tip: "\u2018anmachen\u2019 (turn on), \u2018ausmachen\u2019 (turn off), \u2018aufmachen\u2019 = öffnen (open), and \u2018zumachen\u2019 = schließen (close) are separable verbs (remember Topic 10!) \u2014 the little an/aus/auf/zu piece jumps to the end: \u2018Bitte machen Sie das Licht an.\u2019",
        examples: [
          { de: "Bitte zeigen Sie mir Ihren Ausweis.", en: "Please show me your ID." },
          { de: "Bitte rauchen Sie hier nicht. Es ist verboten.", en: "Please don't smoke here. It's forbidden." },
          { de: "Bitte machen Sie das Radio aus.", en: "Please turn the radio off." },
          { de: "Bitte sagen Sie mir den Weg zur Bank.", en: "Please tell me the way to the bank." },
          { de: "Da links ist das Hotel.", en: "The hotel is there on the left." }
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
