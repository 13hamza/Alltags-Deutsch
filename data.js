/* ============================================================
   Alltags-Deutsch — data.js
   All topic content lives here. To add a new topic later,
   just push another object into the TOPICS array below —
   index.html and topic.html both read from this file.
   ============================================================ */

const TOPICS = [
  {
    id: "restaurant",
    icon: "🍽️",
    en: "Restaurant / Café",
    de: "Restaurant / Café",
    tagline: "Eating out & lunch breaks",
    number: "01",
    vocab: [
      { de: "die Speisekarte", en: "the menu" },
      { de: "der Kellner / die Kellnerin", en: "the waiter / waitress" },
      { de: "die Rechnung", en: "the bill" },
      { de: "bestellen", en: "to order" },
      { de: "die Vorspeise", en: "the starter" },
      { de: "die Hauptspeise", en: "the main course" },
      { de: "der Nachtisch", en: "the dessert" },
      { de: "das Getränk", en: "the drink" },
      { de: "lecker", en: "delicious" },
      { de: "Zahlen, bitte!", en: "The bill, please!" },
      { de: "ein Tisch für zwei", en: "a table for two" },
      { de: "reserviert", en: "reserved" },
      { de: "das Wasser", en: "the water" },
      { de: "die Serviette", en: "the napkin" },
      { de: "Guten Appetit!", en: "Enjoy your meal!" }
    ],
    dialogues: [
      {
        title: "Reserving a table",
        lines: [
          { speaker: "Gast", de: "Guten Tag! Haben Sie einen Tisch für zwei Personen?", en: "Good afternoon! Do you have a table for two?" },
          { speaker: "Kellner", de: "Haben Sie reserviert?", en: "Do you have a reservation?" },
          { speaker: "Gast", de: "Nein, wir haben nicht reserviert.", en: "No, we don't have a reservation." },
          { speaker: "Kellner", de: "Kein Problem, folgen Sie mir bitte.", en: "No problem, please follow me." }
        ]
      },
      {
        title: "Ordering food",
        lines: [
          { speaker: "Kellner", de: "Was möchten Sie bestellen?", en: "What would you like to order?" },
          { speaker: "Gast", de: "Ich hätte gern die Suppe und ein Wasser, bitte.", en: "I would like the soup and a water, please." },
          { speaker: "Kellner", de: "Gerne. Und als Hauptspeise?", en: "Sure. And for the main course?" },
          { speaker: "Gast", de: "Das Schnitzel mit Pommes, bitte.", en: "The schnitzel with fries, please." },
          { speaker: "Kellner", de: "Kommt sofort!", en: "Coming right up!" }
        ]
      },
      {
        title: "Asking for the bill",
        lines: [
          { speaker: "Gast", de: "Entschuldigung, die Rechnung bitte!", en: "Excuse me, the bill please!" },
          { speaker: "Kellner", de: "Zusammen oder getrennt?", en: "Together or separate?" },
          { speaker: "Gast", de: "Zusammen, bitte.", en: "Together, please." },
          { speaker: "Kellner", de: "Das macht 24 Euro.", en: "That comes to 24 euros." }
        ]
      }
    ]
  },
  {
    id: "supermarket",
    icon: "🛒",
    en: "Supermarket",
    de: "Supermarkt",
    tagline: "Buying food & toiletries",
    number: "02",
    vocab: [
      { de: "der Einkaufswagen", en: "the shopping cart" },
      { de: "der Einkaufskorb", en: "the shopping basket" },
      { de: "die Kasse", en: "the checkout" },
      { de: "das Obst", en: "the fruit" },
      { de: "das Gemüse", en: "the vegetables" },
      { de: "die Milch", en: "the milk" },
      { de: "das Brot", en: "the bread" },
      { de: "die Zahnpasta", en: "the toothpaste" },
      { de: "das Toilettenpapier", en: "the toilet paper" },
      { de: "der Kassenbon", en: "the receipt" },
      { de: "bar bezahlen", en: "to pay cash" },
      { de: "mit Karte bezahlen", en: "to pay by card" },
      { de: "die Tüte", en: "the bag" },
      { de: "im Angebot", en: "on sale" },
      { de: "Wo finde ich...?", en: "Where can I find...?" }
    ],
    dialogues: [
      {
        title: "Finding an item",
        lines: [
          { speaker: "Kunde", de: "Entschuldigung, wo finde ich die Milch?", en: "Excuse me, where can I find the milk?" },
          { speaker: "Mitarbeiter", de: "Die Milch ist in Gang drei, links.", en: "The milk is in aisle three, on the left." },
          { speaker: "Kunde", de: "Vielen Dank!", en: "Thank you very much!" }
        ]
      },
      {
        title: "At the checkout",
        lines: [
          { speaker: "Kassiererin", de: "Haben Sie eine Kundenkarte?", en: "Do you have a loyalty card?" },
          { speaker: "Kunde", de: "Nein, habe ich nicht.", en: "No, I don't." },
          { speaker: "Kassiererin", de: "Das macht 15,40 Euro. Bar oder Karte?", en: "That's 15.40 euros. Cash or card?" },
          { speaker: "Kunde", de: "Mit Karte, bitte.", en: "By card, please." },
          { speaker: "Kassiererin", de: "Brauchen Sie eine Tüte?", en: "Do you need a bag?" },
          { speaker: "Kunde", de: "Ja, bitte.", en: "Yes, please." }
        ]
      }
    ]
  },
  {
    id: "bakery",
    icon: "🥐",
    en: "Bakery",
    de: "Bäckerei",
    tagline: "Buying daily breakfast rolls (Brötchen)",
    number: "03",
    vocab: [
      { de: "das Brötchen", en: "the bread roll" },
      { de: "das Vollkornbrot", en: "the wholegrain bread" },
      { de: "das Croissant", en: "the croissant" },
      { de: "der Kuchen", en: "the cake" },
      { de: "die Brezel", en: "the pretzel" },
      { de: "frisch", en: "fresh" },
      { de: "Was darf es sein?", en: "What can I get you?" },
      { de: "Ich hätte gern...", en: "I would like..." },
      { de: "Sonst noch etwas?", en: "Anything else?" },
      { de: "Das wäre alles.", en: "That would be all." },
      { de: "zum Mitnehmen", en: "to take away" },
      { de: "aufgeschnitten", en: "sliced" },
      { de: "backen", en: "to bake" }
    ],
    dialogues: [
      {
        title: "Buying rolls",
        lines: [
          { speaker: "Bäckerin", de: "Guten Morgen! Was darf es sein?", en: "Good morning! What can I get you?" },
          { speaker: "Kunde", de: "Ich hätte gern sechs Brötchen, bitte.", en: "I would like six bread rolls, please." },
          { speaker: "Bäckerin", de: "Gerne. Sonst noch etwas?", en: "Sure. Anything else?" },
          { speaker: "Kunde", de: "Ja, ein Vollkornbrot bitte, aufgeschnitten.", en: "Yes, a wholegrain bread please, sliced." },
          { speaker: "Bäckerin", de: "Kommt sofort. Das wäre dann 7,50 Euro.", en: "Right away. That'll be 7.50 euros." }
        ]
      },
      {
        title: "Coffee and croissant to go",
        lines: [
          { speaker: "Kunde", de: "Einen Kaffee und ein Croissant zum Mitnehmen, bitte.", en: "A coffee and a croissant to take away, please." },
          { speaker: "Bäckerin", de: "Gerne, welche Größe?", en: "Sure, what size?" },
          { speaker: "Kunde", de: "Klein, bitte.", en: "Small, please." },
          { speaker: "Bäckerin", de: "Das macht 4,20 Euro.", en: "That's 4.20 euros." }
        ]
      }
    ]
  },
  {
    id: "pharmacy",
    icon: "💊",
    en: "Pharmacy / Apotheke",
    de: "Apotheke",
    tagline: "Medicine, vitamins, skincare",
    number: "04",
    vocab: [
      { de: "die Apotheke", en: "the pharmacy" },
      { de: "der Apotheker / die Apothekerin", en: "the pharmacist" },
      { de: "das Medikament", en: "the medication" },
      { de: "die Tablette", en: "the pill/tablet" },
      { de: "die Salbe", en: "the ointment" },
      { de: "das Rezept", en: "the prescription" },
      { de: "verschreibungspflichtig", en: "prescription required" },
      { de: "rezeptfrei", en: "over-the-counter" },
      { de: "die Kopfschmerzen", en: "the headache" },
      { de: "die Erkältung", en: "the cold" },
      { de: "das Fieber", en: "the fever" },
      { de: "die Creme", en: "the cream" },
      { de: "das Vitamin", en: "the vitamin" },
      { de: "die Halspastille", en: "the throat lozenge" },
      { de: "die Nebenwirkung", en: "the side effect" }
    ],
    dialogues: [
      {
        title: "Buying cold medicine",
        lines: [
          { speaker: "Kunde", de: "Guten Tag! Ich habe eine Erkältung. Haben Sie etwas dagegen?", en: "Good day! I have a cold. Do you have something for it?" },
          { speaker: "Apotheker", de: "Gerne. Haben Sie Fieber?", en: "Certainly. Do you have a fever?" },
          { speaker: "Kunde", de: "Ja, ein bisschen.", en: "Yes, a little." },
          { speaker: "Apotheker", de: "Dann empfehle ich dieses Medikament. Es ist rezeptfrei.", en: "Then I recommend this medication. It's over-the-counter." }
        ]
      },
      {
        title: "Picking up a prescription",
        lines: [
          { speaker: "Kunde", de: "Ich möchte ein Rezept einlösen.", en: "I'd like to pick up a prescription." },
          { speaker: "Apothekerin", de: "Haben Sie das Rezept dabei?", en: "Do you have the prescription with you?" },
          { speaker: "Kunde", de: "Ja, hier bitte.", en: "Yes, here you go." },
          { speaker: "Apothekerin", de: "Das dauert fünf Minuten. Möchten Sie sich setzen?", en: "That'll take five minutes. Would you like to sit down?" }
        ]
      }
    ]
  },
  {
    id: "train-station",
    icon: "🚂",
    en: "Train Station",
    de: "Bahnhof",
    tagline: "Commuting / regional travel",
    number: "05",
    vocab: [
      { de: "der Bahnhof", en: "the train station" },
      { de: "der Zug", en: "the train" },
      { de: "das Gleis", en: "the platform/track" },
      { de: "die Fahrkarte", en: "the ticket" },
      { de: "das Ticket", en: "the ticket" },
      { de: "der Fahrplan", en: "the schedule" },
      { de: "die Verspätung", en: "the delay" },
      { de: "die Abfahrt", en: "the departure" },
      { de: "die Ankunft", en: "the arrival" },
      { de: "der Bahnsteig", en: "the platform" },
      { de: "einfach", en: "one-way" },
      { de: "hin und zurück", en: "round trip" },
      { de: "der Schalter", en: "the ticket counter" },
      { de: "die Fahrkartenkontrolle", en: "the ticket inspection" },
      { de: "umsteigen", en: "to transfer/change trains" }
    ],
    dialogues: [
      {
        title: "Buying a ticket",
        lines: [
          { speaker: "Kunde", de: "Einmal nach Berlin, bitte.", en: "One ticket to Berlin, please." },
          { speaker: "Verkäufer", de: "Einfach oder hin und zurück?", en: "One-way or round trip?" },
          { speaker: "Kunde", de: "Einfach, bitte.", en: "One-way, please." },
          { speaker: "Verkäufer", de: "Das macht 42 Euro. Gleis 5, Abfahrt 10:15 Uhr.", en: "That's 42 euros. Track 5, departure 10:15 AM." }
        ]
      },
      {
        title: "Asking about delays",
        lines: [
          { speaker: "Kunde", de: "Entschuldigung, wie viel Verspätung hat der Zug nach München?", en: "Excuse me, how much delay does the train to Munich have?" },
          { speaker: "Mitarbeiter", de: "Der Zug hat 15 Minuten Verspätung.", en: "The train has a 15-minute delay." },
          { speaker: "Kunde", de: "Von welchem Gleis fährt er ab?", en: "From which track does it depart?" },
          { speaker: "Mitarbeiter", de: "Gleis 3. Es kann sein, dass er auch Gleis 4 wechselt.", en: "Track 3. It might change to track 4." }
        ]
      }
    ]
  },
  {
    id: "bus-tram",
    icon: "🚌",
    en: "Bus / Tram",
    de: "Bus / Straßenbahn",
    tagline: "Daily commuting to work/school",
    number: "06",
    vocab: [
      { de: "der Bus", en: "the bus" },
      { de: "die Straßenbahn", en: "the tram" },
      { de: "die Haltestelle", en: "the stop" },
      { de: "der Fahrplan", en: "the schedule" },
      { de: "die Fahrkarte", en: "the ticket" },
      { de: "der Fahrer / die Fahrerin", en: "the driver" },
      { de: "einsteigen", en: "to board" },
      { de: "aussteigen", en: "to get off" },
      { de: "umsteigen", en: "to transfer" },
      { de: "die Linie", en: "the route/line" },
      { de: "die Fahrkartenkontrolle", en: "the ticket inspection" },
      { de: "der Monatspass", en: "the monthly pass" },
      { de: "der Studentenausweis", en: "the student ID" },
      { de: "die Innenstadt", en: "the city center" },
      { de: "die nächste Haltestelle", en: "the next stop" }
    ],
    dialogues: [
      {
        title: "Boarding the bus",
        lines: [
          { speaker: "Fahrer", de: "Morgen! Wohin möchten Sie?", en: "Morning! Where would you like to go?" },
          { speaker: "Passagier", de: "In die Innenstadt, bitte.", en: "To the city center, please." },
          { speaker: "Fahrer", de: "Einzelfahrt 2,80 Euro. Ist das Ihr erster Tag?", en: "Single ticket 2.80 euros. Is this your first day?" },
          { speaker: "Passagier", de: "Ja, ich wohne neu hier.", en: "Yes, I'm new here." }
        ]
      },
      {
        title: "Missing the stop",
        lines: [
          { speaker: "Passagier", de: "Entschuldigung, ist das die Haltestelle Universität?", en: "Excuse me, is this the University stop?" },
          { speaker: "Anderer Passagier", de: "Nein, das war die vorletzte Haltestelle. Sie müssen aussteigen und zurückgehen.", en: "No, that was the second-to-last stop. You need to get off and go back." },
          { speaker: "Passagier", de: "Oh, danke! Bis wann fährt der Bus zurück?", en: "Oh, thanks! When does the bus go back?" }
        ]
      }
    ]
  },
  {
    id: "subway",
    icon: "🚇",
    en: "Subway / U-Bahn",
    de: "U-Bahn",
    tagline: "City transport",
    number: "07",
    vocab: [
      { de: "die U-Bahn", en: "the subway" },
      { de: "die U-Bahn-Station", en: "the subway station" },
      { de: "der Bahnsteig", en: "the platform" },
      { de: "die Linie", en: "the line" },
      { de: "die Fahrt", en: "the ride/trip" },
      { de: "die Haltestelle", en: "the stop" },
      { de: "die Treppe", en: "the stairs" },
      { de: "die Rolltreppe", en: "the escalator" },
      { de: "der Aufzug", en: "the elevator" },
      { de: "die Fahrkarte", en: "the ticket" },
      { de: "die Fahrkartenautomat", en: "the ticket machine" },
      { de: "die Richtung", en: "the direction" },
      { de: "die Endstation", en: "the terminus/end station" },
      { de: "die Innenstadt", en: "the city center" },
      { de: "der Ausgang", en: "the exit" }
    ],
    dialogues: [
      {
        title: "Buying a ticket at the machine",
        lines: [
          { speaker: "Passagier", de: "Entschuldigung, wie funktioniert dieser Automat?", en: "Excuse me, how does this machine work?" },
          { speaker: "Anderer Passagier", de: "Sie drücken zuerst die Stadtmitte-Taste, dann zahlen Sie.", en: "You press the city center button first, then you pay." },
          { speaker: "Passagier", de: "Ach so! Kann ich mit Karte zahlen?", en: "Oh, I see! Can I pay with card?" },
          { speaker: "Anderer Passagier", de: "Ja, das geht auch.", en: "Yes, that works too." }
        ]
      },
      {
        title: "Finding the right direction",
        lines: [
          { speaker: "Passagier", de: "In welche Richtung fährt die U-Bahn Linie 3?", en: "Which direction does subway line 3 go?" },
          { speaker: "Mitarbeiter", de: "Die Linie 3 fährt in Richtung Hauptbahnhof. Sie müssen die Treppe zum Bahnsteig 1.", en: "Line 3 goes toward the main station. You need the stairs to platform 1." },
          { speaker: "Passagier", de: "Vielen Dank! Wie viele Stationen sind es bis zum Hauptbahnhof?", en: "Thank you very much! How many stations is it to the main station?" },
          { speaker: "Mitarbeiter", de: "Drei Stationen.", en: "Three stations." }
        ]
      }
    ]
  },
  {
    id: "office",
    icon: "💼",
    en: "Workplace / Office",
    de: "Büro / Arbeitsplatz",
    tagline: "Daily work conversations",
    number: "08",
    vocab: [
      { de: "das Büro", en: "the office" },
      { de: "der Arbeitsplatz", en: "the workplace" },
      { de: "der Computer", en: "the computer" },
      { de: "der Drucker", en: "the printer" },
      { de: "das Meeting", en: "the meeting" },
      { de: "die Besprechung", en: "the meeting/discussion" },
      { de: "die Präsentation", en: "the presentation" },
      { de: "die E-Mail", en: "the email" },
      { de: "das Telefon", en: "the telephone" },
      { de: "der Kollege / die Kollegin", en: "the colleague" },
      { de: "der Chef / die Chefin", en: "the boss" },
      { de: "die Pause", en: "the break" },
      { de: "die Mittagspause", en: "the lunch break" },
      { de: "die Aufgabe", en: "the task" },
      { de: "das Projekt", en: "the project" }
    ],
    dialogues: [
      {
        title: "Starting the workday",
        lines: [
          { speaker: "Kollege", de: "Guten Morgen! Wie war dein Wochenende?", en: "Good morning! How was your weekend?" },
          { speaker: "Kollegin", de: "Sehr gut! Ich war in den Bergen. Und du?", en: "Very good! I was in the mountains. And you?" },
          { speaker: "Kollege", de: "Ich habe die Füße hochgelegt. Nichts Besonderes.", en: "I put my feet up. Nothing special." }
        ]
      },
      {
        title: "Making a phone call",
        lines: [
          { speaker: "Mitarbeiter", de: "Frau Müller, guten Morgen. Ich rufe wegen der Präsentation an.", en: "Ms. Müller, good morning. I'm calling about the presentation." },
          { speaker: "Chefin", de: "Ja, Hallo! Hast du schon die Daten?", en: "Yes, hello! Do you already have the data?" },
          { speaker: "Mitarbeiter", de: "Ja, ich schicke Ihnen gleich die E-Mail.", en: "Yes, I'll send you the email right away." },
          { speaker: "Chefin", de: "Super! Dann besprechen wir es im Meeting um 10.", en: "Great! Then we'll discuss it in the meeting at 10." }
        ]
      }
    ]
  },
  {
    id: "kitchen",
    icon: "🍳",
    en: "Kitchen (at home)",
    de: "Küche",
    tagline: "Cooking, eating, cleaning dishes",
    number: "09",
    vocab: [
      { de: "die Küche", en: "the kitchen" },
      { de: "kochen", en: "to cook" },
      { de: "der Herd", en: "the stove" },
      { de: "der Backofen", en: "the oven" },
      { de: "die Mikrowelle", en: "the microwave" },
      { de: "der Kühlschrank", en: "the refrigerator" },
      { de: "die Spüle", en: "the sink" },
      { de: "das Geschirr", en: "the dishes" },
      { de: "spülen", en: "to do the dishes" },
      { de: "die Gabel", en: "the fork" },
      { de: "das Messer", en: "the knife" },
      { de: "der Löffel", en: "the spoon" },
      { de: "das Glas", en: "the glass" },
      { de: "die Tasse", en: "the cup" },
      { de: "der Topf", en: "the pot" }
    ],
    dialogues: [
      {
        title: "Cooking together",
        lines: [
          { speaker: "Partnerin", de: "Was kochst du heute?", en: "What are you cooking today?" },
          { speaker: "Partner", de: "Ich mache Pasta mit Tomatensauce.", en: "I'm making pasta with tomato sauce." },
          { speaker: "Partnerin", de: "Kann ich dir helfen?", en: "Can I help you?" },
          { speaker: "Partner", de: "Ja, du kannst die Tomaten schneiden.", en: "Yes, you can chop the tomatoes." }
        ]
      },
      {
        title: "Doing the dishes",
        lines: [
          { speaker: "Mutter", de: "Kannst du bitte das Geschirr spülen?", en: "Can you please do the dishes?" },
          { speaker: "Kind", de: "Ja, Mama. Ist die Spülmaschine schon ausgeräumt?", en: "Yes, Mom. Is the dishwasher already emptied?" },
          { speaker: "Mutter", de: "Nein, mach das zuerst, dann die Spülmaschine ein.", en: "No, do that first, then load the dishwasher." },
          { speaker: "Kind", de: "Alles klar!", en: "All right!" }
        ]
      }
    ]
  },
  {
    id: "bedroom",
    icon: "🛏️",
    en: "Bedroom",
    de: "Schlafzimmer",
    tagline: "Waking up, sleeping, getting ready",
    number: "10",
    vocab: [
      { de: "das Schlafzimmer", en: "the bedroom" },
      { de: "das Bett", en: "the bed" },
      { de: "der Wecker", en: "the alarm clock" },
      { de: "aufwachen", en: "to wake up" },
      { de: "aufstehen", en: "to get up" },
      { de: "schlafen", en: "to sleep" },
      { de: "ins Bett gehen", en: "to go to bed" },
      { de: "der Schlafanzug", en: "the pajamas" },
      { de: "die Decke", en: "the blanket" },
      { de: "das Kissen", en: "the pillow" },
      { de: "der Kleiderschrank", en: "the wardrobe" },
      { de: "sich anziehen", en: "to get dressed" },
      { de: "sich ausziehen", en: "to get undressed" },
      { de: "die Lampe", en: "the lamp" },
      { de: "die Vorhänge", en: "the curtains" }
    ],
    dialogues: [
      {
        title: "Waking up in the morning",
        lines: [
          { speaker: "Partner", de: "Guten Morgen! Hast du gut geschlafen?", en: "Good morning! Did you sleep well?" },
          { speaker: "Partnerin", de: "Ja, aber der Wecker hat viel zu früh geklingelt.", en: "Yes, but the alarm went off way too early." },
          { speaker: "Partner", de: "Ich weiß. Möchtest du noch fünf Minuten liegen bleiben?", en: "I know. Do you want to stay in bed for another five minutes?" },
          { speaker: "Partnerin", de: "Lieber aufstehen, sonst kommen wir zu spät.", en: "Better get up, otherwise we'll be late." }
        ]
      },
      {
        title: "Getting ready for bed",
        lines: [
          { speaker: "Kind", de: "Mama, ich will noch nicht schlafen!", en: "Mom, I don't want to sleep yet!" },
          { speaker: "Mutter", de: "Es ist schon 21 Uhr. Zieh dich aus und putz die Zähne.", en: "It's already 9 PM. Get undressed and brush your teeth." },
          { speaker: "Kind", de: "Kann ich noch ein Buch lesen?", en: "Can I read a book?" },
          { speaker: "Mutter", de: "Eine Seite, dann wird das Licht ausgemacht.", en: "One page, then the light goes off." }
        ]
      }
    ]
  }
];

/* ---------- Shared pronunciation helper (used by app.js & topic.js) ---------- */

let __deVoice = null;
function pickGermanVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find(v => v.lang === "de-DE") ||
    voices.find(v => v.lang && v.lang.startsWith("de")) ||
    null
  );
}
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    __deVoice = pickGermanVoice();
  };
  __deVoice = pickGermanVoice();
}

/**
 * Speak a German phrase aloud. Cancels anything currently speaking first,
 * so rapid clicking never queues up overlapping audio.
 */
function speakGerman(text) {
  if (!("speechSynthesis" in window)) {
    console.warn("Speech synthesis not supported in this browser.");
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "de-DE";
  utter.rate = 0.92;
  if (__deVoice) utter.voice = __deVoice;
  window.speechSynthesis.speak(utter);
}

/** Speak a whole dialogue line by line, in order. */
function speakDialogue(lines) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  lines.forEach(line => {
    const utter = new SpeechSynthesisUtterance(line.de);
    utter.lang = "de-DE";
    utter.rate = 0.92;
    if (__deVoice) utter.voice = __deVoice;
    window.speechSynthesis.speak(utter);
  });
}

function getTopicById(id) {
  return TOPICS.find(t => t.id === id) || null;
}