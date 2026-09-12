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
          "Numbers and clock times are some of the most useful words you'll ever learn in German, because they show up everywhere in daily life: reading a price tag, giving someone your phone number, agreeing on when to meet, or checking when a shop opens. The number words themselves follow a fairly logical building pattern once you know 1 through 12 by heart, similar to how English counts \u201cthirteen, fourteen, fifteen\u201d by combining smaller pieces — German just glues its pieces together slightly differently (and often in reverse order for two-digit numbers, e.g. \u201ceinundzwanzig\u201d is literally \u201cone-and-twenty\u201d for 21)."
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
