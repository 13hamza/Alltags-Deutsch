/* ============================================================
   Alltags-Deutsch — data.js
   All topic content lives here. To add a new topic later,
   just push another object into the TOPICS array below —
   index.html and topic.html both read from this file.
   ============================================================ */

const TOPICS = [
  {
    id: "restaurant",
    category: "daily",
    icon: "🍽️",
    en: "Restaurant / Café",
    de: "Restaurant / Café",
    tagline: "Eating out & lunch breaks",
    number: "01",
    vocab: [
      {
        de: "die Speisekarte",
        en: "the menu"
      },
      {
        de: "der Kellner / die Kellnerin",
        en: "the waiter / waitress"
      },
      {
        de: "die Rechnung",
        en: "the bill"
      },
      {
        de: "bestellen",
        en: "to order"
      },
      {
        de: "die Vorspeise",
        en: "the starter"
      },
      {
        de: "die Hauptspeise",
        en: "the main course"
      },
      {
        de: "der Nachtisch",
        en: "the dessert"
      },
      {
        de: "das Getränk",
        en: "the drink"
      },
      {
        de: "lecker",
        en: "delicious"
      },
      {
        de: "Zahlen, bitte!",
        en: "The bill, please!"
      },
      {
        de: "ein Tisch für zwei",
        en: "a table for two"
      },
      {
        de: "reserviert",
        en: "reserved"
      },
      {
        de: "das Wasser",
        en: "the water"
      },
      {
        de: "die Serviette",
        en: "the napkin"
      },
      {
        de: "Guten Appetit!",
        en: "Enjoy your meal!"
      },
      {
        de: "der Teller",
        en: "the plate"
      },
      {
        de: "das Glas",
        en: "the glass"
      },
      {
        de: "das Besteck",
        en: "the cutlery"
      },
      {
        de: "das Trinkgeld",
        en: "the tip"
      },
      {
        de: "reservieren",
        en: "to reserve"
      },
      {
        de: "die Bar",
        en: "the bar"
      },
      {
        de: "das Menü",
        en: "the set menu"
      },
      {
        de: "empfehlen",
        en: "to recommend"
      },
      {
        de: "die Beilage",
        en: "the side dish"
      },
      {
        de: "scharf",
        en: "spicy"
      },
      {
        de: "der Ober",
        en: "the waiter (formal)"
      },
      {
        de: "die Küche",
        en: "the kitchen"
      }
    ],
    dialogues: [
      {
        title: "Reserving a table",
        lines: [
          {
            speaker: "Gast",
            de: "Guten Tag! Haben Sie einen Tisch für zwei Personen?",
            en: "Good afternoon! Do you have a table for two?"
          },
          {
            speaker: "Kellner",
            de: "Haben Sie reserviert?",
            en: "Do you have a reservation?"
          },
          {
            speaker: "Gast",
            de: "Nein, wir haben nicht reserviert.",
            en: "No, we don't have a reservation."
          },
          {
            speaker: "Kellner",
            de: "Kein Problem, folgen Sie mir bitte.",
            en: "No problem, please follow me."
          }
        ]
      },
      {
        title: "Ordering food",
        lines: [
          {
            speaker: "Kellner",
            de: "Was möchten Sie bestellen?",
            en: "What would you like to order?"
          },
          {
            speaker: "Gast",
            de: "Ich hätte gern die Suppe und ein Wasser, bitte.",
            en: "I would like the soup and a water, please."
          },
          {
            speaker: "Kellner",
            de: "Gerne. Und als Hauptspeise?",
            en: "Sure. And for the main course?"
          },
          {
            speaker: "Gast",
            de: "Das Schnitzel mit Pommes, bitte.",
            en: "The schnitzel with fries, please."
          },
          {
            speaker: "Kellner",
            de: "Kommt sofort!",
            en: "Coming right up!"
          }
        ]
      },
      {
        title: "Asking for the bill",
        lines: [
          {
            speaker: "Gast",
            de: "Entschuldigung, die Rechnung bitte!",
            en: "Excuse me, the bill please!"
          },
          {
            speaker: "Kellner",
            de: "Zusammen oder getrennt?",
            en: "Together or separate?"
          },
          {
            speaker: "Gast",
            de: "Zusammen, bitte.",
            en: "Together, please."
          },
          {
            speaker: "Kellner",
            de: "Das macht 24 Euro.",
            en: "That comes to 24 euros."
          }
        ]
      }
    ]
  },
  {
    id: "supermarket",
    category: "daily",
    icon: "🛒",
    en: "Supermarket",
    de: "Supermarkt",
    tagline: "Buying food & toiletries",
    number: "02",
    vocab: [
      {
        de: "der Einkaufswagen",
        en: "the shopping cart"
      },
      {
        de: "der Einkaufskorb",
        en: "the shopping basket"
      },
      {
        de: "die Kasse",
        en: "the checkout"
      },
      {
        de: "das Obst",
        en: "the fruit"
      },
      {
        de: "das Gemüse",
        en: "the vegetables"
      },
      {
        de: "die Milch",
        en: "the milk"
      },
      {
        de: "das Brot",
        en: "the bread"
      },
      {
        de: "die Zahnpasta",
        en: "the toothpaste"
      },
      {
        de: "das Toilettenpapier",
        en: "the toilet paper"
      },
      {
        de: "der Kassenbon",
        en: "the receipt"
      },
      {
        de: "bar bezahlen",
        en: "to pay cash"
      },
      {
        de: "mit Karte bezahlen",
        en: "to pay by card"
      },
      {
        de: "die Tüte",
        en: "the bag"
      },
      {
        de: "im Angebot",
        en: "on sale"
      },
      {
        de: "Wo finde ich...?",
        en: "Where can I find...?"
      },
      {
        de: "das Regal",
        en: "the shelf"
      },
      {
        de: "die Abteilung",
        en: "the aisle/department"
      },
      {
        de: "der Kassierer / die Kassiererin",
        en: "the cashier"
      },
      {
        de: "das Sonderangebot",
        en: "the special offer"
      },
      {
        de: "die Marke",
        en: "the brand"
      },
      {
        de: "einkaufen",
        en: "to shop"
      },
      {
        de: "die Warteschlange",
        en: "the queue"
      },
      {
        de: "anstehen",
        en: "to queue/wait in line"
      },
      {
        de: "die Selbstbedienungskasse",
        en: "the self-checkout"
      },
      {
        de: "das Pfand",
        en: "the bottle deposit"
      },
      {
        de: "die Mehrwegflasche",
        en: "the reusable bottle"
      },
      {
        de: "der Einkaufszettel",
        en: "the shopping note"
      }
    ],
    dialogues: [
      {
        title: "Finding an item",
        lines: [
          {
            speaker: "Kunde",
            de: "Entschuldigung, wo finde ich die Milch?",
            en: "Excuse me, where can I find the milk?"
          },
          {
            speaker: "Mitarbeiter",
            de: "Die Milch ist in Gang drei, links.",
            en: "The milk is in aisle three, on the left."
          },
          {
            speaker: "Kunde",
            de: "Vielen Dank!",
            en: "Thank you very much!"
          }
        ]
      },
      {
        title: "At the checkout",
        lines: [
          {
            speaker: "Kassiererin",
            de: "Haben Sie eine Kundenkarte?",
            en: "Do you have a loyalty card?"
          },
          {
            speaker: "Kunde",
            de: "Nein, habe ich nicht.",
            en: "No, I don't."
          },
          {
            speaker: "Kassiererin",
            de: "Das macht 15,40 Euro. Bar oder Karte?",
            en: "That's 15.40 euros. Cash or card?"
          },
          {
            speaker: "Kunde",
            de: "Mit Karte, bitte.",
            en: "By card, please."
          },
          {
            speaker: "Kassiererin",
            de: "Brauchen Sie eine Tüte?",
            en: "Do you need a bag?"
          },
          {
            speaker: "Kunde",
            de: "Ja, bitte.",
            en: "Yes, please."
          }
        ]
      }
    ]
  },
  {
    id: "bakery",
    category: "daily",
    icon: "🥐",
    en: "Bakery",
    de: "Bäckerei",
    tagline: "Buying daily breakfast rolls (Brötchen)",
    number: "03",
    vocab: [
      {
        de: "das Brötchen",
        en: "the bread roll"
      },
      {
        de: "das Vollkornbrot",
        en: "the wholegrain bread"
      },
      {
        de: "das Croissant",
        en: "the croissant"
      },
      {
        de: "der Kuchen",
        en: "the cake"
      },
      {
        de: "die Brezel",
        en: "the pretzel"
      },
      {
        de: "frisch",
        en: "fresh"
      },
      {
        de: "Was darf es sein?",
        en: "What can I get you?"
      },
      {
        de: "Ich hätte gern...",
        en: "I would like..."
      },
      {
        de: "Sonst noch etwas?",
        en: "Anything else?"
      },
      {
        de: "Das wäre alles.",
        en: "That would be all."
      },
      {
        de: "zum Mitnehmen",
        en: "to take away"
      },
      {
        de: "aufgeschnitten",
        en: "sliced"
      },
      {
        de: "backen",
        en: "to bake"
      },
      {
        de: "die Bäckerei",
        en: "the bakery"
      },
      {
        de: "der Bäcker / die Bäckerin",
        en: "the baker"
      },
      {
        de: "das Baguette",
        en: "the baguette"
      },
      {
        de: "die Zimtschnecke",
        en: "the cinnamon roll"
      },
      {
        de: "der Belag",
        en: "the topping"
      },
      {
        de: "herzhaft",
        en: "savory"
      },
      {
        de: "die Theke",
        en: "the counter"
      },
      {
        de: "die Auswahl",
        en: "the selection"
      },
      {
        de: "das Gebäck",
        en: "the pastry"
      },
      {
        de: "warm",
        en: "warm"
      },
      {
        de: "die Scheibe",
        en: "the slice"
      },
      {
        de: "frisch gebacken",
        en: "freshly baked"
      }
    ],
    dialogues: [
      {
        title: "Buying rolls",
        lines: [
          {
            speaker: "Bäckerin",
            de: "Guten Morgen! Was darf es sein?",
            en: "Good morning! What can I get you?"
          },
          {
            speaker: "Kunde",
            de: "Ich hätte gern sechs Brötchen, bitte.",
            en: "I would like six bread rolls, please."
          },
          {
            speaker: "Bäckerin",
            de: "Gerne. Sonst noch etwas?",
            en: "Sure. Anything else?"
          },
          {
            speaker: "Kunde",
            de: "Ja, ein Vollkornbrot bitte, aufgeschnitten.",
            en: "Yes, a wholegrain bread please, sliced."
          },
          {
            speaker: "Bäckerin",
            de: "Kommt sofort. Das wäre dann 7,50 Euro.",
            en: "Right away. That'll be 7.50 euros."
          }
        ]
      },
      {
        title: "Coffee and croissant to go",
        lines: [
          {
            speaker: "Kunde",
            de: "Einen Kaffee und ein Croissant zum Mitnehmen, bitte.",
            en: "A coffee and a croissant to take away, please."
          },
          {
            speaker: "Bäckerin",
            de: "Gerne, welche Größe?",
            en: "Sure, what size?"
          },
          {
            speaker: "Kunde",
            de: "Klein, bitte.",
            en: "Small, please."
          },
          {
            speaker: "Bäckerin",
            de: "Das macht 4,20 Euro.",
            en: "That's 4.20 euros."
          }
        ]
      }
    ]
  },
  {
    id: "pharmacy",
    category: "daily",
    icon: "💊",
    en: "Pharmacy / Apotheke",
    de: "Apotheke",
    tagline: "Medicine, vitamins, skincare",
    number: "04",
    vocab: [
      {
        de: "die Apotheke",
        en: "the pharmacy"
      },
      {
        de: "der Apotheker / die Apothekerin",
        en: "the pharmacist"
      },
      {
        de: "das Medikament",
        en: "the medication"
      },
      {
        de: "die Tablette",
        en: "the pill/tablet"
      },
      {
        de: "die Salbe",
        en: "the ointment"
      },
      {
        de: "das Rezept",
        en: "the prescription"
      },
      {
        de: "verschreibungspflichtig",
        en: "prescription required"
      },
      {
        de: "rezeptfrei",
        en: "over-the-counter"
      },
      {
        de: "die Kopfschmerzen",
        en: "the headache"
      },
      {
        de: "die Erkältung",
        en: "the cold"
      },
      {
        de: "das Fieber",
        en: "the fever"
      },
      {
        de: "die Creme",
        en: "the cream"
      },
      {
        de: "das Vitamin",
        en: "the vitamin"
      },
      {
        de: "die Halspastille",
        en: "the throat lozenge"
      },
      {
        de: "die Nebenwirkung",
        en: "the side effect"
      },
      {
        de: "die Drogerie",
        en: "the drugstore"
      },
      {
        de: "das Pflaster",
        en: "the band-aid"
      },
      {
        de: "der Verband",
        en: "the bandage"
      },
      {
        de: "die Dosierung",
        en: "the dosage"
      },
      {
        de: "einnehmen",
        en: "to take (medicine)"
      },
      {
        de: "die Packungsbeilage",
        en: "the package insert"
      },
      {
        de: "die Allergie",
        en: "the allergy"
      },
      {
        de: "das Fieberthermometer",
        en: "the thermometer"
      },
      {
        de: "die Impfung",
        en: "the vaccination"
      },
      {
        de: "der Sonnenschutz",
        en: "the sunscreen"
      },
      {
        de: "die Nasentropfen",
        en: "the nasal drops"
      },
      {
        de: "der Hustensaft",
        en: "the cough syrup"
      }
    ],
    dialogues: [
      {
        title: "Buying cold medicine",
        lines: [
          {
            speaker: "Kunde",
            de: "Guten Tag! Ich habe eine Erkältung. Haben Sie etwas dagegen?",
            en: "Good day! I have a cold. Do you have something for it?"
          },
          {
            speaker: "Apotheker",
            de: "Gerne. Haben Sie Fieber?",
            en: "Certainly. Do you have a fever?"
          },
          {
            speaker: "Kunde",
            de: "Ja, ein bisschen.",
            en: "Yes, a little."
          },
          {
            speaker: "Apotheker",
            de: "Dann empfehle ich dieses Medikament. Es ist rezeptfrei.",
            en: "Then I recommend this medication. It's over-the-counter."
          }
        ]
      },
      {
        title: "Picking up a prescription",
        lines: [
          {
            speaker: "Kunde",
            de: "Ich möchte ein Rezept einlösen.",
            en: "I'd like to pick up a prescription."
          },
          {
            speaker: "Apothekerin",
            de: "Haben Sie das Rezept dabei?",
            en: "Do you have the prescription with you?"
          },
          {
            speaker: "Kunde",
            de: "Ja, hier bitte.",
            en: "Yes, here you go."
          },
          {
            speaker: "Apothekerin",
            de: "Das dauert fünf Minuten. Möchten Sie sich setzen?",
            en: "That'll take five minutes. Would you like to sit down?"
          }
        ]
      }
    ]
  },
  {
    id: "train-station",
    category: "daily",
    icon: "🚂",
    en: "Train Station",
    de: "Bahnhof",
    tagline: "Commuting / regional travel",
    number: "05",
    vocab: [
      {
        de: "der Bahnhof",
        en: "the train station"
      },
      {
        de: "der Zug",
        en: "the train"
      },
      {
        de: "das Gleis",
        en: "the platform/track"
      },
      {
        de: "die Fahrkarte",
        en: "the ticket"
      },
      {
        de: "das Ticket",
        en: "the ticket"
      },
      {
        de: "der Fahrplan",
        en: "the schedule"
      },
      {
        de: "die Verspätung",
        en: "the delay"
      },
      {
        de: "die Abfahrt",
        en: "the departure"
      },
      {
        de: "die Ankunft",
        en: "the arrival"
      },
      {
        de: "der Bahnsteig",
        en: "the platform"
      },
      {
        de: "einfach",
        en: "one-way"
      },
      {
        de: "hin und zurück",
        en: "round trip"
      },
      {
        de: "der Schalter",
        en: "the ticket counter"
      },
      {
        de: "die Fahrkartenkontrolle",
        en: "the ticket inspection"
      },
      {
        de: "umsteigen",
        en: "to transfer/change trains"
      },
      {
        de: "der Zugausfall",
        en: "the train cancellation"
      },
      {
        de: "die Reservierung",
        en: "the reservation"
      },
      {
        de: "die erste Klasse",
        en: "first class"
      },
      {
        de: "der Speisewagen",
        en: "the dining car"
      },
      {
        de: "das Gepäck",
        en: "the luggage"
      },
      {
        de: "der Koffer",
        en: "the suitcase"
      },
      {
        de: "der Zielort",
        en: "the destination"
      },
      {
        de: "der Fahrkartenautomat",
        en: "the ticket machine"
      },
      {
        de: "kontrollieren",
        en: "to check (tickets)"
      },
      {
        de: "der Schaffner / die Schaffnerin",
        en: "the conductor"
      },
      {
        de: "warten",
        en: "to wait"
      },
      {
        de: "der Wartesaal",
        en: "the waiting room"
      }
    ],
    dialogues: [
      {
        title: "Buying a ticket",
        lines: [
          {
            speaker: "Kunde",
            de: "Einmal nach Berlin, bitte.",
            en: "One ticket to Berlin, please."
          },
          {
            speaker: "Verkäufer",
            de: "Einfach oder hin und zurück?",
            en: "One-way or round trip?"
          },
          {
            speaker: "Kunde",
            de: "Einfach, bitte.",
            en: "One-way, please."
          },
          {
            speaker: "Verkäufer",
            de: "Das macht 42 Euro. Gleis 5, Abfahrt 10:15 Uhr.",
            en: "That's 42 euros. Track 5, departure 10:15 AM."
          }
        ]
      },
      {
        title: "Asking about delays",
        lines: [
          {
            speaker: "Kunde",
            de: "Entschuldigung, wie viel Verspätung hat der Zug nach München?",
            en: "Excuse me, how much delay does the train to Munich have?"
          },
          {
            speaker: "Mitarbeiter",
            de: "Der Zug hat 15 Minuten Verspätung.",
            en: "The train has a 15-minute delay."
          },
          {
            speaker: "Kunde",
            de: "Von welchem Gleis fährt er ab?",
            en: "From which track does it depart?"
          },
          {
            speaker: "Mitarbeiter",
            de: "Gleis 3. Es kann sein, dass er auch Gleis 4 wechselt.",
            en: "Track 3. It might change to track 4."
          }
        ]
      }
    ]
  },
  {
    id: "bus-tram",
    category: "daily",
    icon: "🚌",
    en: "Bus / Tram",
    de: "Bus / Straßenbahn",
    tagline: "Daily commuting to work/school",
    number: "06",
    vocab: [
      {
        de: "der Bus",
        en: "the bus"
      },
      {
        de: "die Straßenbahn",
        en: "the tram"
      },
      {
        de: "die Haltestelle",
        en: "the stop"
      },
      {
        de: "der Fahrplan",
        en: "the schedule"
      },
      {
        de: "die Fahrkarte",
        en: "the ticket"
      },
      {
        de: "der Fahrer / die Fahrerin",
        en: "the driver"
      },
      {
        de: "einsteigen",
        en: "to board"
      },
      {
        de: "aussteigen",
        en: "to get off"
      },
      {
        de: "umsteigen",
        en: "to transfer"
      },
      {
        de: "die Linie",
        en: "the route/line"
      },
      {
        de: "die Fahrkartenkontrolle",
        en: "the ticket inspection"
      },
      {
        de: "der Monatspass",
        en: "the monthly pass"
      },
      {
        de: "der Studentenausweis",
        en: "the student ID"
      },
      {
        de: "die Innenstadt",
        en: "the city center"
      },
      {
        de: "die nächste Haltestelle",
        en: "the next stop"
      },
      {
        de: "die Endstation",
        en: "the terminus"
      },
      {
        de: "der Sitzplatz",
        en: "the seat"
      },
      {
        de: "stehen",
        en: "to stand"
      },
      {
        de: "die Stoßzeit",
        en: "rush hour"
      },
      {
        de: "der Fahrscheinautomat",
        en: "the ticket machine"
      },
      {
        de: "die Klimaanlage",
        en: "the air conditioning"
      },
      {
        de: "voll",
        en: "full/crowded"
      },
      {
        de: "die Ansage",
        en: "the announcement"
      },
      {
        de: "die Fahrgäste",
        en: "the passengers"
      },
      {
        de: "die Verbindung",
        en: "the connection"
      },
      {
        de: "umleiten",
        en: "to divert/reroute"
      },
      {
        de: "die Tageskarte",
        en: "the day pass"
      }
    ],
    dialogues: [
      {
        title: "Boarding the bus",
        lines: [
          {
            speaker: "Fahrer",
            de: "Morgen! Wohin möchten Sie?",
            en: "Morning! Where would you like to go?"
          },
          {
            speaker: "Passagier",
            de: "In die Innenstadt, bitte.",
            en: "To the city center, please."
          },
          {
            speaker: "Fahrer",
            de: "Einzelfahrt 2,80 Euro. Ist das Ihr erster Tag?",
            en: "Single ticket 2.80 euros. Is this your first day?"
          },
          {
            speaker: "Passagier",
            de: "Ja, ich wohne neu hier.",
            en: "Yes, I'm new here."
          }
        ]
      },
      {
        title: "Missing the stop",
        lines: [
          {
            speaker: "Passagier",
            de: "Entschuldigung, ist das die Haltestelle Universität?",
            en: "Excuse me, is this the University stop?"
          },
          {
            speaker: "Anderer Passagier",
            de: "Nein, das war die vorletzte Haltestelle. Sie müssen aussteigen und zurückgehen.",
            en: "No, that was the second-to-last stop. You need to get off and go back."
          },
          {
            speaker: "Passagier",
            de: "Oh, danke! Bis wann fährt der Bus zurück?",
            en: "Oh, thanks! When does the bus go back?"
          }
        ]
      }
    ]
  },
  {
    id: "subway",
    category: "daily",
    icon: "🚇",
    en: "Subway / U-Bahn",
    de: "U-Bahn",
    tagline: "City transport",
    number: "07",
    vocab: [
      {
        de: "die U-Bahn",
        en: "the subway"
      },
      {
        de: "die U-Bahn-Station",
        en: "the subway station"
      },
      {
        de: "der Bahnsteig",
        en: "the platform"
      },
      {
        de: "die Linie",
        en: "the line"
      },
      {
        de: "die Fahrt",
        en: "the ride/trip"
      },
      {
        de: "die Haltestelle",
        en: "the stop"
      },
      {
        de: "die Treppe",
        en: "the stairs"
      },
      {
        de: "die Rolltreppe",
        en: "the escalator"
      },
      {
        de: "der Aufzug",
        en: "the elevator"
      },
      {
        de: "die Fahrkarte",
        en: "the ticket"
      },
      {
        de: "die Fahrkartenautomat",
        en: "the ticket machine"
      },
      {
        de: "die Richtung",
        en: "the direction"
      },
      {
        de: "die Endstation",
        en: "the terminus/end station"
      },
      {
        de: "die Innenstadt",
        en: "the city center"
      },
      {
        de: "der Ausgang",
        en: "the exit"
      },
      {
        de: "umsteigen",
        en: "to transfer"
      },
      {
        de: "der Eingang",
        en: "the entrance"
      },
      {
        de: "die Durchsage",
        en: "the announcement"
      },
      {
        de: "überfüllt",
        en: "crowded"
      },
      {
        de: "der Waggon",
        en: "the train car"
      },
      {
        de: "die Tür",
        en: "the door"
      },
      {
        de: "Vorsicht an der Bahnsteigkante!",
        en: "Mind the platform edge!"
      },
      {
        de: "die Fahrgäste",
        en: "the passengers"
      },
      {
        de: "der Streckenplan",
        en: "the route map"
      },
      {
        de: "die Verspätung",
        en: "the delay"
      }
    ],
    dialogues: [
      {
        title: "Buying a ticket at the machine",
        lines: [
          {
            speaker: "Passagier",
            de: "Entschuldigung, wie funktioniert dieser Automat?",
            en: "Excuse me, how does this machine work?"
          },
          {
            speaker: "Anderer Passagier",
            de: "Sie drücken zuerst die Stadtmitte-Taste, dann zahlen Sie.",
            en: "You press the city center button first, then you pay."
          },
          {
            speaker: "Passagier",
            de: "Ach so! Kann ich mit Karte zahlen?",
            en: "Oh, I see! Can I pay with card?"
          },
          {
            speaker: "Anderer Passagier",
            de: "Ja, das geht auch.",
            en: "Yes, that works too."
          }
        ]
      },
      {
        title: "Finding the right direction",
        lines: [
          {
            speaker: "Passagier",
            de: "In welche Richtung fährt die U-Bahn Linie 3?",
            en: "Which direction does subway line 3 go?"
          },
          {
            speaker: "Mitarbeiter",
            de: "Die Linie 3 fährt in Richtung Hauptbahnhof. Sie müssen die Treppe zum Bahnsteig 1.",
            en: "Line 3 goes toward the main station. You need the stairs to platform 1."
          },
          {
            speaker: "Passagier",
            de: "Vielen Dank! Wie viele Stationen sind es bis zum Hauptbahnhof?",
            en: "Thank you very much! How many stations is it to the main station?"
          },
          {
            speaker: "Mitarbeiter",
            de: "Drei Stationen.",
            en: "Three stations."
          }
        ]
      }
    ]
  },
  {
    id: "office",
    category: "daily",
    icon: "💼",
    en: "Workplace / Office",
    de: "Büro / Arbeitsplatz",
    tagline: "Daily work conversations",
    number: "08",
    vocab: [
      {
        de: "das Büro",
        en: "the office"
      },
      {
        de: "der Arbeitsplatz",
        en: "the workplace"
      },
      {
        de: "der Computer",
        en: "the computer"
      },
      {
        de: "der Drucker",
        en: "the printer"
      },
      {
        de: "das Meeting",
        en: "the meeting"
      },
      {
        de: "die Besprechung",
        en: "the meeting/discussion"
      },
      {
        de: "die Präsentation",
        en: "the presentation"
      },
      {
        de: "die E-Mail",
        en: "the email"
      },
      {
        de: "das Telefon",
        en: "the telephone"
      },
      {
        de: "der Kollege / die Kollegin",
        en: "the colleague"
      },
      {
        de: "der Chef / die Chefin",
        en: "the boss"
      },
      {
        de: "die Pause",
        en: "the break"
      },
      {
        de: "die Mittagspause",
        en: "the lunch break"
      },
      {
        de: "die Aufgabe",
        en: "the task"
      },
      {
        de: "das Projekt",
        en: "the project"
      },
      {
        de: "der Bildschirm",
        en: "the screen"
      },
      {
        de: "die Tastatur",
        en: "the keyboard"
      },
      {
        de: "die Maus",
        en: "the mouse"
      },
      {
        de: "das Dokument",
        en: "the document"
      },
      {
        de: "der Ordner",
        en: "the folder"
      },
      {
        de: "der Abgabetermin",
        en: "the deadline"
      },
      {
        de: "die Konferenz",
        en: "the conference"
      },
      {
        de: "der Bericht",
        en: "the report"
      },
      {
        de: "die Unterschrift",
        en: "the signature"
      },
      {
        de: "unterschreiben",
        en: "to sign"
      },
      {
        de: "das Formular",
        en: "the form"
      },
      {
        de: "der Vertrag",
        en: "the contract"
      }
    ],
    dialogues: [
      {
        title: "Starting the workday",
        lines: [
          {
            speaker: "Kollege",
            de: "Guten Morgen! Wie war dein Wochenende?",
            en: "Good morning! How was your weekend?"
          },
          {
            speaker: "Kollegin",
            de: "Sehr gut! Ich war in den Bergen. Und du?",
            en: "Very good! I was in the mountains. And you?"
          },
          {
            speaker: "Kollege",
            de: "Ich habe die Füße hochgelegt. Nichts Besonderes.",
            en: "I put my feet up. Nothing special."
          }
        ]
      },
      {
        title: "Making a phone call",
        lines: [
          {
            speaker: "Mitarbeiter",
            de: "Frau Müller, guten Morgen. Ich rufe wegen der Präsentation an.",
            en: "Ms. Müller, good morning. I'm calling about the presentation."
          },
          {
            speaker: "Chefin",
            de: "Ja, Hallo! Hast du schon die Daten?",
            en: "Yes, hello! Do you already have the data?"
          },
          {
            speaker: "Mitarbeiter",
            de: "Ja, ich schicke Ihnen gleich die E-Mail.",
            en: "Yes, I'll send you the email right away."
          },
          {
            speaker: "Chefin",
            de: "Super! Dann besprechen wir es im Meeting um 10.",
            en: "Great! Then we'll discuss it in the meeting at 10."
          }
        ]
      }
    ]
  },
  {
    id: "kitchen",
    category: "daily",
    icon: "🍳",
    en: "Kitchen (at home)",
    de: "Küche",
    tagline: "Cooking, eating, cleaning dishes",
    number: "09",
    vocab: [
      {
        de: "die Küche",
        en: "the kitchen"
      },
      {
        de: "kochen",
        en: "to cook"
      },
      {
        de: "der Herd",
        en: "the stove"
      },
      {
        de: "der Backofen",
        en: "the oven"
      },
      {
        de: "die Mikrowelle",
        en: "the microwave"
      },
      {
        de: "der Kühlschrank",
        en: "the refrigerator"
      },
      {
        de: "die Spüle",
        en: "the sink"
      },
      {
        de: "das Geschirr",
        en: "the dishes"
      },
      {
        de: "spülen",
        en: "to do the dishes"
      },
      {
        de: "die Gabel",
        en: "the fork"
      },
      {
        de: "das Messer",
        en: "the knife"
      },
      {
        de: "der Löffel",
        en: "the spoon"
      },
      {
        de: "das Glas",
        en: "the glass"
      },
      {
        de: "die Tasse",
        en: "the cup"
      },
      {
        de: "der Topf",
        en: "the pot"
      },
      {
        de: "die Pfanne",
        en: "the pan"
      },
      {
        de: "die Schüssel",
        en: "the bowl"
      },
      {
        de: "das Schneidebrett",
        en: "the cutting board"
      },
      {
        de: "das Küchentuch",
        en: "the kitchen towel"
      },
      {
        de: "der Mixer",
        en: "the blender"
      },
      {
        de: "die Küchenwaage",
        en: "the kitchen scale"
      },
      {
        de: "der Wasserkocher",
        en: "the kettle"
      },
      {
        de: "die Arbeitsplatte",
        en: "the countertop"
      },
      {
        de: "die Schublade",
        en: "the drawer"
      },
      {
        de: "der Ofenhandschuh",
        en: "the oven mitt"
      },
      {
        de: "schneiden",
        en: "to cut"
      }
    ],
    dialogues: [
      {
        title: "Cooking together",
        lines: [
          {
            speaker: "Partnerin",
            de: "Was kochst du heute?",
            en: "What are you cooking today?"
          },
          {
            speaker: "Partner",
            de: "Ich mache Pasta mit Tomatensauce.",
            en: "I'm making pasta with tomato sauce."
          },
          {
            speaker: "Partnerin",
            de: "Kann ich dir helfen?",
            en: "Can I help you?"
          },
          {
            speaker: "Partner",
            de: "Ja, du kannst die Tomaten schneiden.",
            en: "Yes, you can chop the tomatoes."
          }
        ]
      },
      {
        title: "Doing the dishes",
        lines: [
          {
            speaker: "Mutter",
            de: "Kannst du bitte das Geschirr spülen?",
            en: "Can you please do the dishes?"
          },
          {
            speaker: "Kind",
            de: "Ja, Mama. Ist die Spülmaschine schon ausgeräumt?",
            en: "Yes, Mom. Is the dishwasher already emptied?"
          },
          {
            speaker: "Mutter",
            de: "Nein, mach das zuerst, dann die Spülmaschine ein.",
            en: "No, do that first, then load the dishwasher."
          },
          {
            speaker: "Kind",
            de: "Alles klar!",
            en: "All right!"
          }
        ]
      }
    ]
  },
  {
    id: "bedroom",
    category: "daily",
    icon: "🛏️",
    en: "Bedroom",
    de: "Schlafzimmer",
    tagline: "Waking up, sleeping, getting dressed",
    number: "10",
    vocab: [
      {
        de: "das Schlafzimmer",
        en: "the bedroom"
      },
      {
        de: "das Bett",
        en: "the bed"
      },
      {
        de: "der Wecker",
        en: "the alarm clock"
      },
      {
        de: "aufwachen",
        en: "to wake up"
      },
      {
        de: "aufstehen",
        en: "to get up"
      },
      {
        de: "schlafen",
        en: "to sleep"
      },
      {
        de: "ins Bett gehen",
        en: "to go to bed"
      },
      {
        de: "der Schlafanzug",
        en: "the pajamas"
      },
      {
        de: "die Decke",
        en: "the blanket"
      },
      {
        de: "das Kissen",
        en: "the pillow"
      },
      {
        de: "der Kleiderschrank",
        en: "the wardrobe"
      },
      {
        de: "sich anziehen",
        en: "to get dressed"
      },
      {
        de: "sich ausziehen",
        en: "to get undressed"
      },
      {
        de: "die Lampe",
        en: "the lamp"
      },
      {
        de: "die Vorhänge",
        en: "the curtains"
      },
      {
        de: "die Matratze",
        en: "the mattress"
      },
      {
        de: "das Bettlaken",
        en: "the bed sheet"
      },
      {
        de: "der Nachttisch",
        en: "the nightstand"
      },
      {
        de: "die Nachttischlampe",
        en: "the bedside lamp"
      },
      {
        de: "das Fenster",
        en: "the window"
      },
      {
        de: "die Jalousie",
        en: "the blinds"
      },
      {
        de: "das Kopfkissen",
        en: "the pillow"
      },
      {
        de: "der Schlafmangel",
        en: "the sleep deprivation"
      },
      {
        de: "gähnen",
        en: "to yawn"
      },
      {
        de: "sich umziehen",
        en: "to change clothes"
      },
      {
        de: "die Tagesdecke",
        en: "the bedspread"
      }
    ],
    dialogues: [
      {
        title: "Waking up in the morning",
        lines: [
          {
            speaker: "Partner",
            de: "Guten Morgen! Hast du gut geschlafen?",
            en: "Good morning! Did you sleep well?"
          },
          {
            speaker: "Partnerin",
            de: "Ja, aber der Wecker hat viel zu früh geklingelt.",
            en: "Yes, but the alarm went off way too early."
          },
          {
            speaker: "Partner",
            de: "Ich weiß. Möchtest du noch fünf Minuten liegen bleiben?",
            en: "I know. Do you want to stay in bed for another five minutes?"
          },
          {
            speaker: "Partnerin",
            de: "Lieber aufstehen, sonst kommen wir zu spät.",
            en: "Better get up, otherwise we'll be late."
          }
        ]
      },
      {
        title: "Getting ready for bed",
        lines: [
          {
            speaker: "Kind",
            de: "Mama, ich will noch nicht schlafen!",
            en: "Mom, I don't want to sleep yet!"
          },
          {
            speaker: "Mutter",
            de: "Es ist schon 21 Uhr. Zieh dich aus und putz die Zähne.",
            en: "It's already 9 PM. Get undressed and brush your teeth."
          },
          {
            speaker: "Kind",
            de: "Kann ich noch ein Buch lesen?",
            en: "Can I read a book?"
          },
          {
            speaker: "Mutter",
            de: "Eine Seite, dann wird das Licht ausgemacht.",
            en: "One page, then the light goes off."
          }
        ]
      }
    ]
  },
  {
    id: "bathroom",
    category: "daily",
    icon: "🚿",
    en: "Bathroom",
    de: "Badezimmer",
    tagline: "Morning routine, showering",
    number: "11",
    vocab: [
      {
        de: "das Badezimmer",
        en: "the bathroom"
      },
      {
        de: "die Dusche",
        en: "the shower"
      },
      {
        de: "duschen",
        en: "to shower"
      },
      {
        de: "die Badewanne",
        en: "the bathtub"
      },
      {
        de: "baden",
        en: "to bathe"
      },
      {
        de: "das Waschbecken",
        en: "the sink"
      },
      {
        de: "der Spiegel",
        en: "the mirror"
      },
      {
        de: "sich die Zähne putzen",
        en: "to brush one's teeth"
      },
      {
        de: "die Zahnbürste",
        en: "the toothbrush"
      },
      {
        de: "das Handtuch",
        en: "the towel"
      },
      {
        de: "das Shampoo",
        en: "the shampoo"
      },
      {
        de: "die Seife",
        en: "the soap"
      },
      {
        de: "sich rasieren",
        en: "to shave"
      },
      {
        de: "der Föhn",
        en: "the hair dryer"
      },
      {
        de: "die Toilette",
        en: "the toilet"
      },
      {
        de: "der Abfluss",
        en: "the drain"
      },
      {
        de: "verstopft",
        en: "clogged"
      },
      {
        de: "der Wasserhahn",
        en: "the faucet"
      },
      {
        de: "das Peeling",
        en: "the scrub"
      },
      {
        de: "die Bürste",
        en: "the brush"
      },
      {
        de: "der Bademantel",
        en: "the bathrobe"
      },
      {
        de: "die Hausschuhe",
        en: "the slippers"
      },
      {
        de: "die Toilettenbürste",
        en: "the toilet brush"
      },
      {
        de: "sich schminken",
        en: "to put on makeup"
      },
      {
        de: "die Zahnpasta",
        en: "the toothpaste"
      },
      {
        de: "das Toilettenpapier",
        en: "the toilet paper"
      }
    ],
    dialogues: [
      {
        title: "Bathroom's occupied",
        lines: [
          {
            speaker: "Mitbewohner",
            de: "Bist du bald fertig im Bad? Ich muss auch noch duschen.",
            en: "Will you be done in the bathroom soon? I still need to shower too."
          },
          {
            speaker: "Mitbewohnerin",
            de: "Zwei Minuten, ich putze mir noch die Zähne.",
            en: "Two minutes, I'm just brushing my teeth."
          },
          {
            speaker: "Mitbewohner",
            de: "Kein Stress, ich warte.",
            en: "No worries, I'll wait."
          }
        ]
      },
      {
        title: "Running out of shampoo",
        lines: [
          {
            speaker: "Partnerin",
            de: "Wir haben kein Shampoo mehr!",
            en: "We're out of shampoo!"
          },
          {
            speaker: "Partner",
            de: "Wirklich? Ich kaufe morgen welches.",
            en: "Really? I'll buy some tomorrow."
          },
          {
            speaker: "Partnerin",
            de: "Kannst du auch Seife mitbringen?",
            en: "Can you also bring soap?"
          },
          {
            speaker: "Partner",
            de: "Klar, kein Problem.",
            en: "Sure, no problem."
          }
        ]
      }
    ]
  },
  {
    id: "living-room",
    category: "daily",
    icon: "🛋️",
    en: "Living Room",
    de: "Wohnzimmer",
    tagline: "Relaxing, watching TV, guests",
    number: "12",
    vocab: [
      {
        de: "das Wohnzimmer",
        en: "the living room"
      },
      {
        de: "das Sofa",
        en: "the sofa"
      },
      {
        de: "der Sessel",
        en: "the armchair"
      },
      {
        de: "der Fernseher",
        en: "the TV"
      },
      {
        de: "fernsehen",
        en: "to watch TV"
      },
      {
        de: "die Fernbedienung",
        en: "the remote control"
      },
      {
        de: "sich entspannen",
        en: "to relax"
      },
      {
        de: "der Gast / die Gäste",
        en: "the guest(s)"
      },
      {
        de: "Besuch bekommen",
        en: "to have visitors"
      },
      {
        de: "das Kissen",
        en: "the cushion"
      },
      {
        de: "der Teppich",
        en: "the rug"
      },
      {
        de: "das Regal",
        en: "the shelf"
      },
      {
        de: "es sich gemütlich machen",
        en: "to make oneself comfortable"
      },
      {
        de: "die Serie",
        en: "the (TV) series"
      },
      {
        de: "der Gastgeber / die Gastgeberin",
        en: "the host"
      },
      {
        de: "das Bücherregal",
        en: "the bookshelf"
      },
      {
        de: "das Buch",
        en: "the book"
      },
      {
        de: "die Pflanze",
        en: "the plant"
      },
      {
        de: "die Dekoration",
        en: "the decoration"
      },
      {
        de: "der Couchtisch",
        en: "the coffee table"
      },
      {
        de: "die Kerze",
        en: "the candle"
      },
      {
        de: "das Poster",
        en: "the poster"
      },
      {
        de: "Musik hören",
        en: "to listen to music"
      },
      {
        de: "der Besuch",
        en: "the visit"
      },
      {
        de: "gemütlich",
        en: "cozy"
      },
      {
        de: "die Stehlampe",
        en: "the floor lamp"
      },
      {
        de: "die Ecke",
        en: "the corner"
      }
    ],
    dialogues: [
      {
        title: "Choosing what to watch",
        lines: [
          {
            speaker: "Partner",
            de: "Was schauen wir heute Abend?",
            en: "What are we watching tonight?"
          },
          {
            speaker: "Partnerin",
            de: "Wollen wir die neue Serie weiterschauen?",
            en: "Do you want to keep watching the new series?"
          },
          {
            speaker: "Partner",
            de: "Gute Idee. Mach es dir gemütlich, ich hole Snacks.",
            en: "Good idea. Get comfortable, I'll get snacks."
          }
        ]
      },
      {
        title: "Welcoming a guest",
        lines: [
          {
            speaker: "Gastgeberin",
            de: "Komm rein! Setz dich aufs Sofa.",
            en: "Come in! Sit on the sofa."
          },
          {
            speaker: "Gast",
            de: "Danke, du hast es hier wirklich gemütlich.",
            en: "Thanks, you have a really cozy place here."
          },
          {
            speaker: "Gastgeberin",
            de: "Möchtest du etwas trinken?",
            en: "Would you like something to drink?"
          },
          {
            speaker: "Gast",
            de: "Ja, gern ein Wasser.",
            en: "Yes, a water please."
          }
        ]
      }
    ]
  },
  {
    id: "grocery-list",
    category: "daily",
    icon: "📝",
    en: "Grocery Shopping List",
    de: "Einkaufsliste",
    tagline: "Fruits, vegetables, dairy, meat",
    number: "13",
    vocab: [
      {
        de: "die Einkaufsliste",
        en: "the shopping list"
      },
      {
        de: "der Apfel",
        en: "the apple"
      },
      {
        de: "die Banane",
        en: "the banana"
      },
      {
        de: "die Kartoffel",
        en: "the potato"
      },
      {
        de: "die Zwiebel",
        en: "the onion"
      },
      {
        de: "die Tomate",
        en: "the tomato"
      },
      {
        de: "der Käse",
        en: "the cheese"
      },
      {
        de: "der Joghurt",
        en: "the yogurt"
      },
      {
        de: "die Butter",
        en: "the butter"
      },
      {
        de: "das Hähnchen",
        en: "the chicken"
      },
      {
        de: "das Rindfleisch",
        en: "the beef"
      },
      {
        de: "die Eier",
        en: "the eggs"
      },
      {
        de: "etwas brauchen",
        en: "to need something"
      },
      {
        de: "ausgehen (etwas geht aus)",
        en: "to run out (of something)"
      },
      {
        de: "eine Liste schreiben",
        en: "to write a list"
      },
      {
        de: "das Mehl",
        en: "the flour"
      },
      {
        de: "der Zucker",
        en: "the sugar"
      },
      {
        de: "das Salz",
        en: "the salt"
      },
      {
        de: "der Pfeffer",
        en: "the pepper"
      },
      {
        de: "das Öl",
        en: "the oil"
      },
      {
        de: "der Reis",
        en: "the rice"
      },
      {
        de: "die Nudeln",
        en: "the pasta"
      },
      {
        de: "das Waschmittel",
        en: "the laundry detergent"
      },
      {
        de: "die Vorräte",
        en: "the supplies"
      },
      {
        de: "fehlen",
        en: "to be missing/out of"
      }
    ],
    dialogues: [
      {
        title: "Writing the list together",
        lines: [
          {
            speaker: "Partnerin",
            de: "Was brauchen wir noch für diese Woche?",
            en: "What else do we need for this week?"
          },
          {
            speaker: "Partner",
            de: "Uns gehen Eier und Käse aus.",
            en: "We're running out of eggs and cheese."
          },
          {
            speaker: "Partnerin",
            de: "Ich schreibe das auf die Liste. Brauchen wir auch Obst?",
            en: "I'll write that on the list. Do we also need fruit?"
          },
          {
            speaker: "Partner",
            de: "Ja, Äpfel und Bananen bitte.",
            en: "Yes, apples and bananas please."
          }
        ]
      },
      {
        title: "Checking off the list",
        lines: [
          {
            speaker: "Kunde",
            de: "Warte, haben wir schon Zwiebeln?",
            en: "Wait, do we already have onions?"
          },
          {
            speaker: "Partnerin",
            de: "Nein, die stehen noch auf der Liste.",
            en: "No, they're still on the list."
          },
          {
            speaker: "Kunde",
            de: "Okay, ich hole sie schnell.",
            en: "Okay, I'll quickly grab them."
          }
        ]
      }
    ]
  },
  {
    id: "directions",
    category: "daily",
    icon: "🗺️",
    en: "Asking for Directions",
    de: "Nach dem Weg fragen",
    tagline: "Getting lost in a new city",
    number: "14",
    vocab: [
      {
        de: "der Weg",
        en: "the way"
      },
      {
        de: "geradeaus",
        en: "straight ahead"
      },
      {
        de: "links abbiegen",
        en: "to turn left"
      },
      {
        de: "rechts abbiegen",
        en: "to turn right"
      },
      {
        de: "die Kreuzung",
        en: "the intersection"
      },
      {
        de: "die Ampel",
        en: "the traffic light"
      },
      {
        de: "die Ecke",
        en: "the corner"
      },
      {
        de: "in der Nähe",
        en: "nearby"
      },
      {
        de: "weit weg",
        en: "far away"
      },
      {
        de: "sich verlaufen",
        en: "to get lost (on foot)"
      },
      {
        de: "Wie komme ich zu...?",
        en: "How do I get to...?"
      },
      {
        de: "gegenüber",
        en: "across from"
      },
      {
        de: "zu Fuß",
        en: "on foot"
      },
      {
        de: "die Straße überqueren",
        en: "to cross the street"
      },
      {
        de: "die Karte",
        en: "the map"
      },
      {
        de: "die Straße",
        en: "the street"
      },
      {
        de: "neben",
        en: "next to"
      },
      {
        de: "zwischen",
        en: "between"
      },
      {
        de: "hinter",
        en: "behind"
      },
      {
        de: "vor",
        en: "in front of"
      },
      {
        de: "der Stadtplan",
        en: "the city map"
      },
      {
        de: "sich orientieren",
        en: "to orient oneself"
      },
      {
        de: "die Sackgasse",
        en: "the dead end"
      },
      {
        de: "die Abkürzung",
        en: "the shortcut"
      },
      {
        de: "der Block",
        en: "the block"
      }
    ],
    dialogues: [
      {
        title: "Finding the museum",
        lines: [
          {
            speaker: "Tourist",
            de: "Entschuldigung, wie komme ich zum Museum?",
            en: "Excuse me, how do I get to the museum?"
          },
          {
            speaker: "Passant",
            de: "Gehen Sie hier geradeaus bis zur Ampel, dann links abbiegen.",
            en: "Go straight ahead here to the traffic light, then turn left."
          },
          {
            speaker: "Tourist",
            de: "Ist es weit von hier?",
            en: "Is it far from here?"
          },
          {
            speaker: "Passant",
            de: "Nein, nur fünf Minuten zu Fuß.",
            en: "No, only five minutes on foot."
          }
        ]
      },
      {
        title: "Lost near the station",
        lines: [
          {
            speaker: "Tourist",
            de: "Ich glaube, ich habe mich verlaufen. Wo ist der Bahnhof?",
            en: "I think I got lost. Where is the train station?"
          },
          {
            speaker: "Passantin",
            de: "Der Bahnhof ist gegenüber der Post.",
            en: "The station is across from the post office."
          },
          {
            speaker: "Tourist",
            de: "Muss ich die Straße überqueren?",
            en: "Do I need to cross the street?"
          },
          {
            speaker: "Passantin",
            de: "Ja, genau, an der Kreuzung dort.",
            en: "Yes, exactly, at that intersection there."
          }
        ]
      }
    ]
  },
  {
    id: "weather",
    category: "daily",
    icon: "☀️",
    en: "Weather",
    de: "Wetter",
    tagline: "Small talk with neighbors/coworkers",
    number: "15",
    vocab: [
      {
        de: "das Wetter",
        en: "the weather"
      },
      {
        de: "die Sonne",
        en: "the sun"
      },
      {
        de: "der Regen",
        en: "the rain"
      },
      {
        de: "es regnet",
        en: "it's raining"
      },
      {
        de: "die Wolke",
        en: "the cloud"
      },
      {
        de: "der Wind",
        en: "the wind"
      },
      {
        de: "kalt",
        en: "cold"
      },
      {
        de: "warm",
        en: "warm"
      },
      {
        de: "heiß",
        en: "hot"
      },
      {
        de: "der Schnee",
        en: "the snow"
      },
      {
        de: "es schneit",
        en: "it's snowing"
      },
      {
        de: "der Regenschirm",
        en: "the umbrella"
      },
      {
        de: "die Vorhersage",
        en: "the forecast"
      },
      {
        de: "sonnig",
        en: "sunny"
      },
      {
        de: "bewölkt",
        en: "cloudy"
      },
      {
        de: "der Nebel",
        en: "the fog"
      },
      {
        de: "das Gewitter",
        en: "the thunderstorm"
      },
      {
        de: "der Blitz",
        en: "the lightning"
      },
      {
        de: "der Donner",
        en: "the thunder"
      },
      {
        de: "der Sturm",
        en: "the storm"
      },
      {
        de: "die Temperatur",
        en: "the temperature"
      },
      {
        de: "das Grad",
        en: "the degree"
      },
      {
        de: "feucht",
        en: "humid"
      },
      {
        de: "trocken",
        en: "dry"
      },
      {
        de: "der Frost",
        en: "the frost"
      },
      {
        de: "der Regenbogen",
        en: "the rainbow"
      }
    ],
    dialogues: [
      {
        title: "Morning small talk",
        lines: [
          {
            speaker: "Nachbar",
            de: "Guten Morgen! Schönes Wetter heute, oder?",
            en: "Good morning! Nice weather today, isn't it?"
          },
          {
            speaker: "Nachbarin",
            de: "Ja, endlich Sonne! Gestern hat es den ganzen Tag geregnet.",
            en: "Yes, finally sun! Yesterday it rained all day."
          },
          {
            speaker: "Nachbar",
            de: "Stimmt. Morgen soll es aber wieder regnen.",
            en: "True. But it's supposed to rain again tomorrow."
          }
        ]
      },
      {
        title: "Checking the forecast",
        lines: [
          {
            speaker: "Kollegin",
            de: "Brauche ich heute einen Regenschirm?",
            en: "Do I need an umbrella today?"
          },
          {
            speaker: "Kollege",
            de: "Laut Vorhersage ist es bewölkt, aber es soll trocken bleiben.",
            en: "According to the forecast it's cloudy, but it should stay dry."
          },
          {
            speaker: "Kollegin",
            de: "Gut, dann nehme ich nur eine Jacke.",
            en: "Good, then I'll just take a jacket."
          }
        ]
      }
    ]
  },
  {
    id: "time-appointments",
    category: "daily",
    icon: "🕒",
    en: "Time / Appointments",
    de: "Uhrzeit / Termine",
    tagline: "Saying when, scheduling meetings",
    number: "16",
    vocab: [
      {
        de: "die Uhrzeit",
        en: "the time (of day)"
      },
      {
        de: "der Termin",
        en: "the appointment"
      },
      {
        de: "einen Termin vereinbaren",
        en: "to schedule an appointment"
      },
      {
        de: "pünktlich",
        en: "on time"
      },
      {
        de: "zu spät",
        en: "late"
      },
      {
        de: "verschieben",
        en: "to postpone/reschedule"
      },
      {
        de: "absagen",
        en: "to cancel"
      },
      {
        de: "die Woche",
        en: "the week"
      },
      {
        de: "übermorgen",
        en: "the day after tomorrow"
      },
      {
        de: "nächste Woche",
        en: "next week"
      },
      {
        de: "Wie spät ist es?",
        en: "What time is it?"
      },
      {
        de: "um wie viel Uhr",
        en: "at what time"
      },
      {
        de: "halb drei",
        en: "half past two"
      },
      {
        de: "Viertel nach",
        en: "quarter past"
      },
      {
        de: "der Kalender",
        en: "the calendar"
      },
      {
        de: "die Minute",
        en: "the minute"
      },
      {
        de: "die Stunde",
        en: "the hour"
      },
      {
        de: "die Sekunde",
        en: "the second"
      },
      {
        de: "der Moment",
        en: "the moment"
      },
      {
        de: "rechtzeitig",
        en: "in time"
      },
      {
        de: "die Verabredung",
        en: "the appointment/date"
      },
      {
        de: "der Zeitpunkt",
        en: "the point in time"
      },
      {
        de: "verpassen",
        en: "to miss (an appointment)"
      },
      {
        de: "der Alltag",
        en: "everyday life"
      },
      {
        de: "die Uhr",
        en: "the clock"
      }
    ],
    dialogues: [
      {
        title: "Scheduling an appointment",
        lines: [
          {
            speaker: "Kunde",
            de: "Ich möchte gern einen Termin vereinbaren.",
            en: "I'd like to schedule an appointment."
          },
          {
            speaker: "Empfang",
            de: "Gerne, passt Ihnen Dienstag um 14 Uhr?",
            en: "Sure, does Tuesday at 2 PM work for you?"
          },
          {
            speaker: "Kunde",
            de: "Geht es auch etwas später, so um halb drei?",
            en: "Could it be a bit later, around half past two?"
          },
          {
            speaker: "Empfang",
            de: "Ja, das passt auch.",
            en: "Yes, that works too."
          }
        ]
      },
      {
        title: "Rescheduling a meeting",
        lines: [
          {
            speaker: "Kollege",
            de: "Können wir unser Meeting verschieben? Ich bin heute zu spät dran.",
            en: "Can we reschedule our meeting? I'm running late today."
          },
          {
            speaker: "Kollegin",
            de: "Kein Problem. Geht es dir übermorgen um zehn?",
            en: "No problem. Does the day after tomorrow at ten work for you?"
          },
          {
            speaker: "Kollege",
            de: "Perfekt, danke!",
            en: "Perfect, thanks!"
          }
        ]
      }
    ]
  },
  {
    id: "phone-calls",
    category: "daily",
    icon: "📞",
    en: "Telephone Calls",
    de: "Telefonieren",
    tagline: "Calling work, friends, or services",
    number: "17",
    vocab: [
      {
        de: "anrufen",
        en: "to call"
      },
      {
        de: "der Anruf",
        en: "the call"
      },
      {
        de: "zurückrufen",
        en: "to call back"
      },
      {
        de: "auflegen",
        en: "to hang up"
      },
      {
        de: "dranbleiben",
        en: "to hold the line"
      },
      {
        de: "die Mailbox",
        en: "the voicemail"
      },
      {
        de: "eine Nachricht hinterlassen",
        en: "to leave a message"
      },
      {
        de: "Wer ist am Apparat?",
        en: "Who's calling?"
      },
      {
        de: "Am Apparat.",
        en: "Speaking."
      },
      {
        de: "die Nummer",
        en: "the number"
      },
      {
        de: "besetzt",
        en: "busy (line)"
      },
      {
        de: "die Verbindung",
        en: "the connection"
      },
      {
        de: "schlechte Verbindung",
        en: "bad connection"
      },
      {
        de: "Kann ich mit... sprechen?",
        en: "Can I speak with...?"
      },
      {
        de: "verbinden",
        en: "to connect/transfer (a call)"
      },
      {
        de: "das Telefon",
        en: "the phone"
      },
      {
        de: "der Anrufbeantworter",
        en: "the answering machine"
      },
      {
        de: "stumm schalten",
        en: "to mute"
      },
      {
        de: "die Vorwahl",
        en: "the area code"
      },
      {
        de: "das Freizeichen",
        en: "the dial tone"
      },
      {
        de: "unterbrechen",
        en: "to interrupt"
      },
      {
        de: "der Videoanruf",
        en: "the video call"
      },
      {
        de: "die Warteschleife",
        en: "the hold queue"
      },
      {
        de: "laut und deutlich",
        en: "loud and clear"
      },
      {
        de: "Ich rufe später zurück.",
        en: "I'll call back later."
      }
    ],
    dialogues: [
      {
        title: "Calling to reschedule",
        lines: [
          {
            speaker: "Anrufer",
            de: "Guten Tag, kann ich mit Herrn Schmidt sprechen?",
            en: "Good day, can I speak with Mr. Schmidt?"
          },
          {
            speaker: "Empfang",
            de: "Einen Moment, ich verbinde Sie.",
            en: "One moment, I'll connect you."
          },
          {
            speaker: "Herr Schmidt",
            de: "Schmidt, am Apparat.",
            en: "Schmidt speaking."
          },
          {
            speaker: "Anrufer",
            de: "Guten Tag, ich muss leider unseren Termin absagen.",
            en: "Good day, I'm afraid I need to cancel our appointment."
          }
        ]
      },
      {
        title: "Bad connection",
        lines: [
          {
            speaker: "Freund",
            de: "Hallo? Ich kann dich kaum hören!",
            en: "Hello? I can barely hear you!"
          },
          {
            speaker: "Freundin",
            de: "Die Verbindung ist schlecht. Ich rufe dich gleich zurück.",
            en: "The connection is bad. I'll call you right back."
          },
          {
            speaker: "Freund",
            de: "Okay, bis gleich!",
            en: "Okay, talk soon!"
          }
        ]
      }
    ]
  },
  {
    id: "texting",
    category: "daily",
    icon: "💬",
    en: "WhatsApp / Texting",
    de: "Texten / Nachrichten",
    tagline: "Daily digital communication",
    number: "18",
    vocab: [
      {
        de: "die Nachricht",
        en: "the message"
      },
      {
        de: "schreiben",
        en: "to write/text"
      },
      {
        de: "eine SMS schicken",
        en: "to send a text"
      },
      {
        de: "die Sprachnachricht",
        en: "the voice message"
      },
      {
        de: "das Emoji",
        en: "the emoji"
      },
      {
        de: "antworten",
        en: "to reply"
      },
      {
        de: "gelesen",
        en: "read (seen)"
      },
      {
        de: "online sein",
        en: "to be online"
      },
      {
        de: "der Anhang",
        en: "the attachment"
      },
      {
        de: "ein Foto schicken",
        en: "to send a photo"
      },
      {
        de: "sich melden",
        en: "to get in touch"
      },
      {
        de: "Bin gleich da.",
        en: "Be right there."
      },
      {
        de: "Alles klar!",
        en: "All good! / Got it!"
      },
      {
        de: "Bis später!",
        en: "See you later!"
      },
      {
        de: "die Gruppe",
        en: "the (chat) group"
      },
      {
        de: "die App",
        en: "the app"
      },
      {
        de: "der Chat",
        en: "the chat"
      },
      {
        de: "tippen",
        en: "to type"
      },
      {
        de: "senden",
        en: "to send"
      },
      {
        de: "der Kontakt",
        en: "the contact"
      },
      {
        de: "blockieren",
        en: "to block"
      },
      {
        de: "der Sticker",
        en: "the sticker"
      },
      {
        de: "weiterleiten",
        en: "to forward"
      },
      {
        de: "löschen",
        en: "to delete"
      },
      {
        de: "Gesehen",
        en: "Seen (message status)"
      },
      {
        de: "zuletzt online",
        en: "last seen online"
      }
    ],
    dialogues: [
      {
        title: "Making a plan",
        lines: [
          {
            speaker: "Freundin",
            de: "Hey, hast du Lust heute Abend auf einen Kaffee?",
            en: "Hey, do you feel like coffee tonight?"
          },
          {
            speaker: "Freund",
            de: "Klar! Wann und wo?",
            en: "Sure! When and where?"
          },
          {
            speaker: "Freundin",
            de: "Um 18 Uhr im Café am Markt?",
            en: "6 PM at the café by the market?"
          },
          {
            speaker: "Freund",
            de: "Alles klar, bis später!",
            en: "Got it, see you later!"
          }
        ]
      },
      {
        title: "Running late",
        lines: [
          {
            speaker: "Kollege",
            de: "Bin leider spät dran, tut mir leid!",
            en: "I'm running late, sorry about that!"
          },
          {
            speaker: "Kollegin",
            de: "Kein Problem, wie lange noch?",
            en: "No problem, how much longer?"
          },
          {
            speaker: "Kollege",
            de: "Bin gleich da, noch fünf Minuten.",
            en: "Be right there, five more minutes."
          }
        ]
      }
    ]
  },
  {
    id: "formal-emails",
    category: "daily",
    icon: "📧",
    en: "Emails (formal)",
    de: "E-Mails (formell)",
    tagline: "Writing to your boss or landlord",
    number: "19",
    vocab: [
      {
        de: "die E-Mail",
        en: "the email"
      },
      {
        de: "der Betreff",
        en: "the subject line"
      },
      {
        de: "Sehr geehrte Damen und Herren,",
        en: "Dear Sir or Madam,"
      },
      {
        de: "Sehr geehrter Herr...,",
        en: "Dear Mr. ...,"
      },
      {
        de: "Sehr geehrte Frau...,",
        en: "Dear Ms. ...,"
      },
      {
        de: "Mit freundlichen Grüßen",
        en: "Kind regards"
      },
      {
        de: "der Anhang",
        en: "the attachment"
      },
      {
        de: "anbei",
        en: "attached/enclosed"
      },
      {
        de: "sich beziehen auf",
        en: "to refer to"
      },
      {
        de: "die Anfrage",
        en: "the inquiry"
      },
      {
        de: "mitteilen",
        en: "to inform"
      },
      {
        de: "bezüglich",
        en: "regarding"
      },
      {
        de: "im Voraus danken",
        en: "to thank in advance"
      },
      {
        de: "die Frist",
        en: "the deadline"
      },
      {
        de: "der Absender / die Absenderin",
        en: "the sender"
      },
      {
        de: "höflich",
        en: "polite"
      },
      {
        de: "das Anliegen",
        en: "the matter/concern"
      },
      {
        de: "kurz zusammenfassen",
        en: "to summarize briefly"
      },
      {
        de: "Ich freue mich auf Ihre Antwort.",
        en: "I look forward to your reply."
      },
      {
        de: "die Rückmeldung",
        en: "the feedback/response"
      },
      {
        de: "angehängt",
        en: "attached"
      },
      {
        de: "die Kopie",
        en: "the CC/copy"
      },
      {
        de: "weiterleiten",
        en: "to forward"
      },
      {
        de: "dringend",
        en: "urgent"
      },
      {
        de: "der Empfänger",
        en: "the recipient"
      }
    ],
    dialogues: [
      {
        title: "Requesting time off (writing pattern)",
        lines: [
          {
            speaker: "Angestellte",
            de: "Sehr geehrte Frau Bauer, ich möchte gern Urlaub für nächste Woche beantragen.",
            en: "Dear Ms. Bauer, I would like to request vacation for next week."
          },
          {
            speaker: "Angestellte",
            de: "Über eine kurze Rückmeldung würde ich mich freuen.",
            en: "I would appreciate a brief reply."
          },
          {
            speaker: "Angestellte",
            de: "Mit freundlichen Grüßen, Anna Weber",
            en: "Kind regards, Anna Weber"
          }
        ]
      },
      {
        title: "Writing to a landlord",
        lines: [
          {
            speaker: "Mieter",
            de: "Sehr geehrter Herr Klein, die Heizung in meiner Wohnung funktioniert nicht.",
            en: "Dear Mr. Klein, the heating in my apartment isn't working."
          },
          {
            speaker: "Mieter",
            de: "Könnten Sie das bitte so schnell wie möglich reparieren lassen?",
            en: "Could you please have this repaired as soon as possible?"
          },
          {
            speaker: "Mieter",
            de: "Vielen Dank im Voraus. Mit freundlichen Grüßen, Tom Fischer",
            en: "Thank you in advance. Kind regards, Tom Fischer"
          }
        ]
      }
    ]
  },
  {
    id: "bank-atm",
    category: "daily",
    icon: "🏧",
    en: "Bank / ATM",
    de: "Bank / Geldautomat",
    tagline: "Getting cash (Germany loves cash!)",
    number: "20",
    vocab: [
      {
        de: "die Bank",
        en: "the bank"
      },
      {
        de: "der Geldautomat",
        en: "the ATM"
      },
      {
        de: "Geld abheben",
        en: "to withdraw money"
      },
      {
        de: "Geld einzahlen",
        en: "to deposit money"
      },
      {
        de: "das Konto",
        en: "the account"
      },
      {
        de: "das Girokonto",
        en: "the checking account"
      },
      {
        de: "die Kontonummer",
        en: "the account number"
      },
      {
        de: "die PIN",
        en: "the PIN"
      },
      {
        de: "die Kreditkarte",
        en: "the credit card"
      },
      {
        de: "die EC-Karte",
        en: "the debit card"
      },
      {
        de: "der Kontostand",
        en: "the account balance"
      },
      {
        de: "überweisen",
        en: "to transfer (money)"
      },
      {
        de: "die Überweisung",
        en: "the bank transfer"
      },
      {
        de: "die Gebühr",
        en: "the fee"
      },
      {
        de: "Bargeld",
        en: "cash"
      },
      {
        de: "die Filiale",
        en: "the branch"
      },
      {
        de: "der Kredit",
        en: "the loan"
      },
      {
        de: "der Kontoauszug",
        en: "the bank statement"
      },
      {
        de: "das Sparkonto",
        en: "the savings account"
      },
      {
        de: "die IBAN",
        en: "the IBAN"
      },
      {
        de: "der Dauerauftrag",
        en: "the standing order"
      },
      {
        de: "die Lastschrift",
        en: "the direct debit"
      },
      {
        de: "die Schulden",
        en: "the debts"
      },
      {
        de: "der Zinssatz",
        en: "the interest rate"
      },
      {
        de: "blockiert",
        en: "blocked"
      },
      {
        de: "die Beratung",
        en: "the consultation"
      }
    ],
    dialogues: [
      {
        title: "Withdrawing cash",
        lines: [
          {
            speaker: "Kunde",
            de: "Entschuldigung, wo finde ich einen Geldautomaten?",
            en: "Excuse me, where can I find an ATM?"
          },
          {
            speaker: "Passant",
            de: "Gleich um die Ecke, neben der Bank.",
            en: "Just around the corner, next to the bank."
          },
          {
            speaker: "Kunde",
            de: "Danke! Ich muss dringend Geld abheben.",
            en: "Thanks! I urgently need to withdraw money."
          }
        ]
      },
      {
        title: "At the bank counter",
        lines: [
          {
            speaker: "Kundin",
            de: "Ich möchte gern Geld auf ein anderes Konto überweisen.",
            en: "I'd like to transfer money to another account."
          },
          {
            speaker: "Bankangestellter",
            de: "Kein Problem. Haben Sie die Kontonummer dabei?",
            en: "No problem. Do you have the account number with you?"
          },
          {
            speaker: "Kundin",
            de: "Ja, hier ist sie.",
            en: "Yes, here it is."
          },
          {
            speaker: "Bankangestellter",
            de: "Danke. Das dauert normalerweise ein bis zwei Werktage.",
            en: "Thank you. This usually takes one to two business days."
          }
        ]
      }
    ]
  },
  {
    id: "post-office",
    category: "daily",
    icon: "📦",
    en: "Post Office / DHL",
    de: "Post / Paket",
    tagline: "Sending packages (very common)",
    number: "21",
    vocab: [
      {
        de: "die Post",
        en: "the post office"
      },
      {
        de: "das Paket",
        en: "the package"
      },
      {
        de: "der Brief",
        en: "the letter"
      },
      {
        de: "die Briefmarke",
        en: "the stamp"
      },
      {
        de: "verschicken",
        en: "to send/ship"
      },
      {
        de: "die Sendungsverfolgung",
        en: "the tracking"
      },
      {
        de: "der Absender",
        en: "the sender"
      },
      {
        de: "der Empfänger",
        en: "the recipient"
      },
      {
        de: "die Adresse",
        en: "the address"
      },
      {
        de: "das Porto",
        en: "the postage"
      },
      {
        de: "die Postfiliale",
        en: "the post office branch"
      },
      {
        de: "der Paketschein",
        en: "the shipping label"
      },
      {
        de: "Wie lange dauert das?",
        en: "How long does it take?"
      },
      {
        de: "zerbrechlich",
        en: "fragile"
      },
      {
        de: "die Abholung",
        en: "the pickup"
      },
      {
        de: "das Einschreiben",
        en: "the registered mail"
      },
      {
        de: "die Postleitzahl",
        en: "the postal code"
      },
      {
        de: "das Päckchen",
        en: "the small package"
      },
      {
        de: "der Karton",
        en: "the box"
      },
      {
        de: "verpacken",
        en: "to package"
      },
      {
        de: "die Lieferung",
        en: "the delivery"
      },
      {
        de: "der Zusteller",
        en: "the delivery person"
      },
      {
        de: "international",
        en: "international"
      },
      {
        de: "national",
        en: "domestic"
      },
      {
        de: "die Öffnungszeiten",
        en: "the opening hours"
      }
    ],
    dialogues: [
      {
        title: "Sending a package",
        lines: [
          {
            speaker: "Kunde",
            de: "Guten Tag, ich möchte dieses Paket verschicken.",
            en: "Good day, I'd like to send this package."
          },
          {
            speaker: "Angestellter",
            de: "Wohin soll es gehen?",
            en: "Where is it going?"
          },
          {
            speaker: "Kunde",
            de: "Nach Frankreich, bitte.",
            en: "To France, please."
          },
          {
            speaker: "Angestellter",
            de: "Das macht 8,50 Euro. Möchten Sie eine Sendungsverfolgung?",
            en: "That's 8.50 euros. Would you like tracking?"
          },
          {
            speaker: "Kunde",
            de: "Ja, gerne.",
            en: "Yes, please."
          }
        ]
      },
      {
        title: "Buying stamps",
        lines: [
          {
            speaker: "Kundin",
            de: "Ich brauche drei Briefmarken für Postkarten.",
            en: "I need three stamps for postcards."
          },
          {
            speaker: "Angestellte",
            de: "Innerhalb Deutschlands oder ins Ausland?",
            en: "Within Germany or abroad?"
          },
          {
            speaker: "Kundin",
            de: "Ins Ausland, nach Italien.",
            en: "Abroad, to Italy."
          },
          {
            speaker: "Angestellte",
            de: "Das macht dann 3,60 Euro zusammen.",
            en: "That's 3.60 euros total."
          }
        ]
      }
    ]
  },
  {
    id: "doctor",
    category: "daily",
    icon: "🩺",
    en: "Doctor (General)",
    de: "Arzt (Allgemein)",
    tagline: "Sick notes, check-ups, colds",
    number: "22",
    vocab: [
      {
        de: "der Arzt / die Ärztin",
        en: "the doctor"
      },
      {
        de: "der Termin",
        en: "the appointment"
      },
      {
        de: "die Sprechstunde",
        en: "the office hours / consultation"
      },
      {
        de: "die Krankschreibung",
        en: "the sick note"
      },
      {
        de: "die Versicherungskarte",
        en: "the insurance card"
      },
      {
        de: "die Symptome",
        en: "the symptoms"
      },
      {
        de: "Was fehlt Ihnen?",
        en: "What's wrong with you?"
      },
      {
        de: "Es tut hier weh.",
        en: "It hurts here."
      },
      {
        de: "die Untersuchung",
        en: "the examination"
      },
      {
        de: "der Blutdruck",
        en: "the blood pressure"
      },
      {
        de: "die Überweisung",
        en: "the referral"
      },
      {
        de: "krank",
        en: "sick"
      },
      {
        de: "gesund",
        en: "healthy"
      },
      {
        de: "die Diagnose",
        en: "the diagnosis"
      },
      {
        de: "sich erholen",
        en: "to recover"
      },
      {
        de: "der Zahnarzt / die Zahnärztin",
        en: "the dentist"
      },
      {
        de: "die Praxis",
        en: "the practice/clinic"
      },
      {
        de: "das Wartezimmer",
        en: "the waiting room"
      },
      {
        de: "die Krankenversicherung",
        en: "the health insurance"
      },
      {
        de: "die Krankenschwester / der Krankenpfleger",
        en: "the nurse"
      },
      {
        de: "die Spritze",
        en: "the injection"
      },
      {
        de: "das Attest",
        en: "the medical certificate"
      },
      {
        de: "der Notfall",
        en: "the emergency"
      },
      {
        de: "die Behandlung",
        en: "the treatment"
      },
      {
        de: "allergisch sein",
        en: "to be allergic"
      }
    ],
    dialogues: [
      {
        title: "Booking an appointment",
        lines: [
          {
            speaker: "Patientin",
            de: "Guten Tag, ich hätte gern einen Termin, bitte.",
            en: "Good day, I'd like an appointment, please."
          },
          {
            speaker: "Arzthelferin",
            de: "Was ist der Grund für Ihren Besuch?",
            en: "What's the reason for your visit?"
          },
          {
            speaker: "Patientin",
            de: "Ich fühle mich seit zwei Tagen krank.",
            en: "I've been feeling sick for two days."
          },
          {
            speaker: "Arzthelferin",
            de: "Können Sie morgen um 9 Uhr kommen?",
            en: "Can you come tomorrow at 9?"
          }
        ]
      },
      {
        title: "At the check-up",
        lines: [
          {
            speaker: "Arzt",
            de: "Was fehlt Ihnen denn?",
            en: "What's wrong with you?"
          },
          {
            speaker: "Patient",
            de: "Ich habe Halsschmerzen und leichtes Fieber.",
            en: "I have a sore throat and a slight fever."
          },
          {
            speaker: "Arzt",
            de: "Ich schreibe Sie für drei Tage krank.",
            en: "I'll write you a sick note for three days."
          },
          {
            speaker: "Patient",
            de: "Vielen Dank, Herr Doktor.",
            en: "Thank you very much, doctor."
          }
        ]
      }
    ]
  },
  {
    id: "lunch-dinner-talk",
    category: "daily",
    icon: "🍴",
    en: "Lunch / Dinner Talk",
    de: "Mittagessen / Abendessen",
    tagline: "Discussing what to eat",
    number: "23",
    vocab: [
      {
        de: "das Mittagessen",
        en: "lunch"
      },
      {
        de: "das Abendessen",
        en: "dinner"
      },
      {
        de: "Hunger haben",
        en: "to be hungry"
      },
      {
        de: "Was gibt's zu essen?",
        en: "What's for food?"
      },
      {
        de: "kochen",
        en: "to cook"
      },
      {
        de: "bestellen",
        en: "to order (food)"
      },
      {
        de: "die Reste",
        en: "the leftovers"
      },
      {
        de: "vegetarisch",
        en: "vegetarian"
      },
      {
        de: "vegan",
        en: "vegan"
      },
      {
        de: "die Portion",
        en: "the portion"
      },
      {
        de: "satt sein",
        en: "to be full"
      },
      {
        de: "Hast du Lust auf...?",
        en: "Do you feel like...?"
      },
      {
        de: "Ich habe schon gegessen.",
        en: "I've already eaten."
      },
      {
        de: "Guten Appetit!",
        en: "Enjoy your meal!"
      },
      {
        de: "die Mahlzeit",
        en: "the meal"
      },
      {
        de: "das Rezept",
        en: "the recipe"
      },
      {
        de: "die Zutaten",
        en: "the ingredients"
      },
      {
        de: "der Geschmack",
        en: "the taste"
      },
      {
        de: "würzen",
        en: "to season"
      },
      {
        de: "am Tisch sitzen",
        en: "to sit at the table"
      },
      {
        de: "die Nachspeise",
        en: "the dessert"
      },
      {
        de: "gemeinsam essen",
        en: "to eat together"
      },
      {
        de: "der Appetit",
        en: "the appetite"
      },
      {
        de: "probieren",
        en: "to try/taste"
      },
      {
        de: "der Teller",
        en: "the plate"
      }
    ],
    dialogues: [
      {
        title: "Deciding what to eat",
        lines: [
          {
            speaker: "Mitbewohner",
            de: "Hast du Lust auf Pasta heute Abend?",
            en: "Do you feel like pasta tonight?"
          },
          {
            speaker: "Mitbewohnerin",
            de: "Klingt gut, aber ich habe schon Reste vom Wochenende.",
            en: "Sounds good, but I already have leftovers from the weekend."
          },
          {
            speaker: "Mitbewohner",
            de: "Okay, dann koche ich nur für mich.",
            en: "Okay, then I'll just cook for myself."
          }
        ]
      },
      {
        title: "During the meal",
        lines: [
          {
            speaker: "Gastgeberin",
            de: "Guten Appetit! Nimm dir ruhig noch mehr.",
            en: "Enjoy your meal! Feel free to take more."
          },
          {
            speaker: "Gast",
            de: "Danke, aber ich bin schon ziemlich satt.",
            en: "Thanks, but I'm already pretty full."
          },
          {
            speaker: "Gastgeberin",
            de: "Kein Problem, es gibt Reste für morgen.",
            en: "No problem, there are leftovers for tomorrow."
          }
        ]
      }
    ]
  },
  {
    id: "breakfast",
    category: "daily",
    icon: "🥐",
    en: "Breakfast",
    de: "Frühstück",
    tagline: "Bread, cheese, jam, coffee",
    number: "24",
    vocab: [
      {
        de: "das Frühstück",
        en: "breakfast"
      },
      {
        de: "das Brötchen",
        en: "the bread roll"
      },
      {
        de: "der Käse",
        en: "the cheese"
      },
      {
        de: "die Marmelade",
        en: "the jam"
      },
      {
        de: "die Butter",
        en: "the butter"
      },
      {
        de: "das Ei",
        en: "the egg"
      },
      {
        de: "der Honig",
        en: "the honey"
      },
      {
        de: "der Aufschnitt",
        en: "the cold cuts"
      },
      {
        de: "der Joghurt",
        en: "the yogurt"
      },
      {
        de: "das Müsli",
        en: "the muesli"
      },
      {
        de: "frühstücken",
        en: "to have breakfast"
      },
      {
        de: "der Kaffee",
        en: "the coffee"
      },
      {
        de: "der Orangensaft",
        en: "the orange juice"
      },
      {
        de: "Was möchtest du frühstücken?",
        en: "What would you like for breakfast?"
      },
      {
        de: "auf dem Tisch decken",
        en: "to set the table"
      },
      {
        de: "das Rührei",
        en: "the scrambled egg"
      },
      {
        de: "das Spiegelei",
        en: "the fried egg"
      },
      {
        de: "die Cornflakes",
        en: "the cereal"
      },
      {
        de: "der Toaster",
        en: "the toaster"
      },
      {
        de: "die Konfitüre",
        en: "the preserves/jam"
      },
      {
        de: "der Schokoaufstrich",
        en: "the chocolate spread"
      },
      {
        de: "ausschlafen",
        en: "to sleep in"
      },
      {
        de: "der Löffel",
        en: "the spoon"
      },
      {
        de: "die Kanne Kaffee",
        en: "the pot of coffee"
      },
      {
        de: "die Scheibe Brot",
        en: "the slice of bread"
      }
    ],
    dialogues: [
      {
        title: "Family breakfast",
        lines: [
          {
            speaker: "Mutter",
            de: "Was möchtest du frühstücken?",
            en: "What would you like for breakfast?"
          },
          {
            speaker: "Kind",
            de: "Ein Brötchen mit Marmelade, bitte.",
            en: "A roll with jam, please."
          },
          {
            speaker: "Mutter",
            de: "Möchtest du auch ein Ei dazu?",
            en: "Would you like an egg too?"
          },
          {
            speaker: "Kind",
            de: "Ja, gerne, gekocht bitte.",
            en: "Yes, please, boiled please."
          }
        ]
      },
      {
        title: "Breakfast on the go",
        lines: [
          {
            speaker: "Kollege",
            de: "Hast du heute schon gefrühstückt?",
            en: "Have you had breakfast yet today?"
          },
          {
            speaker: "Kollegin",
            de: "Nein, nur einen Kaffee bisher.",
            en: "No, just a coffee so far."
          },
          {
            speaker: "Kollege",
            de: "Ich hole mir ein Croissant, willst du auch eins?",
            en: "I'm getting a croissant, do you want one too?"
          },
          {
            speaker: "Kollegin",
            de: "Ja, das wäre super, danke!",
            en: "Yes, that would be great, thanks!"
          }
        ]
      }
    ]
  },
  {
    id: "drinks",
    category: "daily",
    icon: "🥤",
    en: "Drinks / Beverages",
    de: "Getränke",
    tagline: "Water, juice, beer, wine, coffee",
    number: "25",
    vocab: [
      {
        de: "das Getränk",
        en: "the drink"
      },
      {
        de: "das Wasser",
        en: "the water"
      },
      {
        de: "mit Kohlensäure",
        en: "sparkling / with carbonation"
      },
      {
        de: "ohne Kohlensäure",
        en: "still / without carbonation"
      },
      {
        de: "der Saft",
        en: "the juice"
      },
      {
        de: "das Bier",
        en: "the beer"
      },
      {
        de: "der Wein",
        en: "the wine"
      },
      {
        de: "der Kaffee",
        en: "the coffee"
      },
      {
        de: "der Tee",
        en: "the tea"
      },
      {
        de: "die Limonade",
        en: "the soda"
      },
      {
        de: "durstig sein",
        en: "to be thirsty"
      },
      {
        de: "Zum Wohl! / Prost!",
        en: "Cheers!"
      },
      {
        de: "ein Glas",
        en: "a glass"
      },
      {
        de: "eiskalt",
        en: "ice-cold"
      },
      {
        de: "Was möchten Sie trinken?",
        en: "What would you like to drink?"
      },
      {
        de: "die Cola",
        en: "the cola"
      },
      {
        de: "der Alkohol",
        en: "the alcohol"
      },
      {
        de: "alkoholfrei",
        en: "non-alcoholic"
      },
      {
        de: "der Cocktail",
        en: "the cocktail"
      },
      {
        de: "die Flasche",
        en: "the bottle"
      },
      {
        de: "die Dose",
        en: "the can"
      },
      {
        de: "einschenken",
        en: "to pour"
      },
      {
        de: "der Strohhalm",
        en: "the straw"
      },
      {
        de: "gekühlt",
        en: "chilled"
      },
      {
        de: "der Sekt",
        en: "the sparkling wine"
      },
      {
        de: "der Schnaps",
        en: "the schnapps"
      }
    ],
    dialogues: [
      {
        title: "Ordering drinks",
        lines: [
          {
            speaker: "Kellnerin",
            de: "Was möchten Sie trinken?",
            en: "What would you like to drink?"
          },
          {
            speaker: "Gast",
            de: "Ein Wasser mit Kohlensäure, bitte.",
            en: "A sparkling water, please."
          },
          {
            speaker: "Kellnerin",
            de: "Groß oder klein?",
            en: "Large or small?"
          },
          {
            speaker: "Gast",
            de: "Groß, bitte, und noch ein Bier.",
            en: "Large, please, and a beer too."
          }
        ]
      },
      {
        title: "A toast",
        lines: [
          {
            speaker: "Freund",
            de: "So, alle Gläser voll?",
            en: "So, all glasses full?"
          },
          {
            speaker: "Freundin",
            de: "Ja, bereit!",
            en: "Yes, ready!"
          },
          {
            speaker: "Freund",
            de: "Dann, zum Wohl!",
            en: "Then, cheers!"
          },
          {
            speaker: "Freundin",
            de: "Prost!",
            en: "Cheers!"
          }
        ]
      }
    ]
  },
  {
    id: "numbers-prices",
    category: "daily",
    icon: "🔢",
    en: "Numbers & Prices",
    de: "Zahlen & Preise",
    tagline: "Paying for everything",
    number: "26",
    vocab: [
      {
        de: "die Zahl",
        en: "the number"
      },
      {
        de: "der Preis",
        en: "the price"
      },
      {
        de: "Wie viel kostet das?",
        en: "How much does that cost?"
      },
      {
        de: "billig",
        en: "cheap"
      },
      {
        de: "teuer",
        en: "expensive"
      },
      {
        de: "der Rabatt",
        en: "the discount"
      },
      {
        de: "das Angebot",
        en: "the deal/offer"
      },
      {
        de: "die Mehrwertsteuer",
        en: "the VAT"
      },
      {
        de: "das Wechselgeld",
        en: "the change"
      },
      {
        de: "runden",
        en: "to round (a number)"
      },
      {
        de: "die Hälfte",
        en: "the half"
      },
      {
        de: "ungefähr",
        en: "approximately"
      },
      {
        de: "das macht...",
        en: "that comes to..."
      },
      {
        de: "geschenkt",
        en: "free (colloquially, 'a steal')"
      },
      {
        de: "der Cent",
        en: "the cent"
      },
      {
        de: "die Ziffer",
        en: "the digit"
      },
      {
        de: "der Betrag",
        en: "the amount"
      },
      {
        de: "der Preisnachlass",
        en: "the price reduction"
      },
      {
        de: "verhandeln",
        en: "to negotiate"
      },
      {
        de: "die Summe",
        en: "the sum/total"
      },
      {
        de: "doppelt",
        en: "double"
      },
      {
        de: "das Prozent",
        en: "the percent"
      },
      {
        de: "aufrunden",
        en: "to round up"
      },
      {
        de: "abrunden",
        en: "to round down"
      },
      {
        de: "teilen",
        en: "to divide/split"
      }
    ],
    dialogues: [
      {
        title: "Asking the price",
        lines: [
          {
            speaker: "Kunde",
            de: "Entschuldigung, wie viel kostet dieser Pullover?",
            en: "Excuse me, how much does this sweater cost?"
          },
          {
            speaker: "Verkäuferin",
            de: "Der kostet 39,99 Euro, aber gerade ist er im Angebot.",
            en: "It costs 39.99 euros, but it's on sale right now."
          },
          {
            speaker: "Kunde",
            de: "Wie viel Rabatt gibt es?",
            en: "How much of a discount is there?"
          },
          {
            speaker: "Verkäuferin",
            de: "20 Prozent, also 32 Euro.",
            en: "20 percent, so 32 euros."
          }
        ]
      },
      {
        title: "Getting change",
        lines: [
          {
            speaker: "Kassierer",
            de: "Das macht 17,30 Euro.",
            en: "That comes to 17.30 euros."
          },
          {
            speaker: "Kunde",
            de: "Hier sind 20 Euro.",
            en: "Here's 20 euros."
          },
          {
            speaker: "Kassierer",
            de: "Und Ihr Wechselgeld, 2,70 Euro.",
            en: "And your change, 2.70 euros."
          },
          {
            speaker: "Kunde",
            de: "Danke schön!",
            en: "Thank you!"
          }
        ]
      }
    ]
  },
  {
    id: "days-months-dates",
    category: "daily",
    icon: "📅",
    en: "Days / Months / Dates",
    de: "Tage / Monate / Daten",
    tagline: "Planning your week",
    number: "27",
    vocab: [
      {
        de: "der Tag",
        en: "the day"
      },
      {
        de: "die Woche",
        en: "the week"
      },
      {
        de: "der Monat",
        en: "the month"
      },
      {
        de: "das Datum",
        en: "the date"
      },
      {
        de: "heute",
        en: "today"
      },
      {
        de: "morgen",
        en: "tomorrow"
      },
      {
        de: "gestern",
        en: "yesterday"
      },
      {
        de: "nächste Woche",
        en: "next week"
      },
      {
        de: "letzte Woche",
        en: "last week"
      },
      {
        de: "der Montag",
        en: "Monday"
      },
      {
        de: "das Wochenende",
        en: "the weekend"
      },
      {
        de: "Welcher Tag ist heute?",
        en: "What day is today?"
      },
      {
        de: "Wann hast du Zeit?",
        en: "When do you have time?"
      },
      {
        de: "der Kalender",
        en: "the calendar"
      },
      {
        de: "der Feiertag",
        en: "the holiday"
      },
      {
        de: "das Jahr",
        en: "the year"
      },
      {
        de: "der Zeitraum",
        en: "the time period"
      },
      {
        de: "der Geburtstag",
        en: "the birthday"
      },
      {
        de: "die Jahreszeit",
        en: "the season"
      },
      {
        de: "der Sommer",
        en: "the summer"
      },
      {
        de: "der Winter",
        en: "the winter"
      },
      {
        de: "der Frühling",
        en: "the spring"
      },
      {
        de: "der Herbst",
        en: "the fall"
      },
      {
        de: "das Jubiläum",
        en: "the anniversary"
      },
      {
        de: "vorgestern",
        en: "the day before yesterday"
      }
    ],
    dialogues: [
      {
        title: "Planning a meetup",
        lines: [
          {
            speaker: "Freund",
            de: "Wann hast du diese Woche Zeit?",
            en: "When do you have time this week?"
          },
          {
            speaker: "Freundin",
            de: "Am Mittwoch geht's gut, oder am Wochenende.",
            en: "Wednesday works well, or the weekend."
          },
          {
            speaker: "Freund",
            de: "Dann sagen wir Samstagnachmittag?",
            en: "Then let's say Saturday afternoon?"
          },
          {
            speaker: "Freundin",
            de: "Perfekt, das passt mir.",
            en: "Perfect, that works for me."
          }
        ]
      },
      {
        title: "Confirming a date",
        lines: [
          {
            speaker: "Kollegin",
            de: "Welches Datum haben wir heute?",
            en: "What's the date today?"
          },
          {
            speaker: "Kollege",
            de: "Heute ist der neunte August.",
            en: "Today is August ninth."
          },
          {
            speaker: "Kollegin",
            de: "Dann ist die Frist übermorgen.",
            en: "Then the deadline is the day after tomorrow."
          }
        ]
      }
    ]
  },
  {
    id: "family-members",
    category: "daily",
    icon: "👨‍👩‍👧‍👦",
    en: "Family Members",
    de: "Familie",
    tagline: "Talking about parents, siblings, kids",
    number: "28",
    vocab: [
      {
        de: "die Familie",
        en: "the family"
      },
      {
        de: "die Mutter",
        en: "the mother"
      },
      {
        de: "der Vater",
        en: "the father"
      },
      {
        de: "die Eltern",
        en: "the parents"
      },
      {
        de: "die Geschwister",
        en: "the siblings"
      },
      {
        de: "der Bruder",
        en: "the brother"
      },
      {
        de: "die Schwester",
        en: "the sister"
      },
      {
        de: "das Kind",
        en: "the child"
      },
      {
        de: "die Großeltern",
        en: "the grandparents"
      },
      {
        de: "die Tante",
        en: "the aunt"
      },
      {
        de: "der Onkel",
        en: "the uncle"
      },
      {
        de: "der Cousin / die Cousine",
        en: "the cousin"
      },
      {
        de: "verheiratet sein",
        en: "to be married"
      },
      {
        de: "das Einzelkind",
        en: "the only child"
      },
      {
        de: "Wie viele Geschwister hast du?",
        en: "How many siblings do you have?"
      },
      {
        de: "die Großmutter / Oma",
        en: "the grandmother"
      },
      {
        de: "der Großvater / Opa",
        en: "the grandfather"
      },
      {
        de: "der Ehemann",
        en: "the husband"
      },
      {
        de: "die Ehefrau",
        en: "the wife"
      },
      {
        de: "der Partner / die Partnerin",
        en: "the partner"
      },
      {
        de: "die Schwiegereltern",
        en: "the in-laws"
      },
      {
        de: "der Neffe",
        en: "the nephew"
      },
      {
        de: "die Nichte",
        en: "the niece"
      },
      {
        de: "ledig",
        en: "single"
      },
      {
        de: "geschieden",
        en: "divorced"
      },
      {
        de: "die Zwillinge",
        en: "the twins"
      },
      {
        de: "erwachsen",
        en: "grown-up/adult"
      }
    ],
    dialogues: [
      {
        title: "Talking about siblings",
        lines: [
          {
            speaker: "Kollege",
            de: "Hast du Geschwister?",
            en: "Do you have siblings?"
          },
          {
            speaker: "Kollegin",
            de: "Ja, einen Bruder und eine Schwester.",
            en: "Yes, a brother and a sister."
          },
          {
            speaker: "Kollege",
            de: "Wohnen sie auch hier in der Stadt?",
            en: "Do they also live here in the city?"
          },
          {
            speaker: "Kollegin",
            de: "Nein, meine Schwester wohnt in Hamburg.",
            en: "No, my sister lives in Hamburg."
          }
        ]
      },
      {
        title: "Visiting grandparents",
        lines: [
          {
            speaker: "Enkelin",
            de: "Wir besuchen dieses Wochenende die Großeltern.",
            en: "We're visiting the grandparents this weekend."
          },
          {
            speaker: "Freundin",
            de: "Wie schön! Wo wohnen sie?",
            en: "How nice! Where do they live?"
          },
          {
            speaker: "Enkelin",
            de: "In einem kleinen Dorf bei München.",
            en: "In a small village near Munich."
          }
        ]
      }
    ]
  },
  {
    id: "housework",
    category: "daily",
    icon: "🧹",
    en: "Housework / Cleaning",
    de: "Hausarbeit",
    tagline: "Washing, vacuuming, dusting",
    number: "29",
    vocab: [
      {
        de: "die Hausarbeit",
        en: "the housework"
      },
      {
        de: "putzen",
        en: "to clean"
      },
      {
        de: "staubsaugen",
        en: "to vacuum"
      },
      {
        de: "Staub wischen",
        en: "to dust"
      },
      {
        de: "Wäsche waschen",
        en: "to do laundry"
      },
      {
        de: "die Waschmaschine",
        en: "the washing machine"
      },
      {
        de: "abspülen / spülen",
        en: "to wash the dishes"
      },
      {
        de: "die Spülmaschine",
        en: "the dishwasher"
      },
      {
        de: "aufräumen",
        en: "to tidy up"
      },
      {
        de: "der Müll",
        en: "the trash"
      },
      {
        de: "den Müll rausbringen",
        en: "to take out the trash"
      },
      {
        de: "bügeln",
        en: "to iron"
      },
      {
        de: "der Besen",
        en: "the broom"
      },
      {
        de: "das Putzmittel",
        en: "the cleaning product"
      },
      {
        de: "Wer ist dran?",
        en: "Whose turn is it?"
      },
      {
        de: "der Staubsauger",
        en: "the vacuum cleaner"
      },
      {
        de: "das Bügeleisen",
        en: "the iron"
      },
      {
        de: "die Reinigung",
        en: "the cleaning"
      },
      {
        de: "der Wischmopp",
        en: "the mop"
      },
      {
        de: "der Putzlappen",
        en: "the cleaning rag"
      },
      {
        de: "der Eimer",
        en: "the bucket"
      },
      {
        de: "die Ordnung",
        en: "the order/tidiness"
      },
      {
        de: "unordentlich",
        en: "messy"
      },
      {
        de: "der Putzplan",
        en: "the cleaning schedule"
      },
      {
        de: "das Waschmittel",
        en: "the laundry detergent"
      }
    ],
    dialogues: [
      {
        title: "Splitting chores",
        lines: [
          {
            speaker: "Mitbewohnerin",
            de: "Wer ist heute mit Putzen dran?",
            en: "Whose turn is it to clean today?"
          },
          {
            speaker: "Mitbewohner",
            de: "Ich glaube, ich bin dran. Ich sauge staub.",
            en: "I think it's my turn. I'll vacuum."
          },
          {
            speaker: "Mitbewohnerin",
            de: "Super, dann wische ich den Boden.",
            en: "Great, then I'll mop the floor."
          }
        ]
      },
      {
        title: "Weekend chores",
        lines: [
          {
            speaker: "Partner",
            de: "Kannst du bitte die Wäsche waschen?",
            en: "Can you please do the laundry?"
          },
          {
            speaker: "Partnerin",
            de: "Klar, und kannst du den Müll rausbringen?",
            en: "Sure, and can you take out the trash?"
          },
          {
            speaker: "Partner",
            de: "Mach ich gleich.",
            en: "I'll do it right away."
          }
        ]
      }
    ]
  },
  {
    id: "neighbors",
    category: "daily",
    icon: "🏘️",
    en: "Neighbors",
    de: "Nachbarn",
    tagline: "Greetings in the hallway",
    number: "30",
    vocab: [
      {
        de: "der Nachbar / die Nachbarin",
        en: "the neighbor"
      },
      {
        de: "das Treppenhaus",
        en: "the stairwell"
      },
      {
        de: "Guten Tag!",
        en: "Good day!"
      },
      {
        de: "die Ruhezeit",
        en: "the quiet hours"
      },
      {
        de: "laut",
        en: "loud"
      },
      {
        de: "leise",
        en: "quiet"
      },
      {
        de: "sich beschweren",
        en: "to complain"
      },
      {
        de: "die Klingel",
        en: "the doorbell"
      },
      {
        de: "klingeln",
        en: "to ring (the bell)"
      },
      {
        de: "der Briefkasten",
        en: "the mailbox"
      },
      {
        de: "die Hausordnung",
        en: "the house rules"
      },
      {
        de: "vorbeikommen",
        en: "to stop by"
      },
      {
        de: "sich vorstellen",
        en: "to introduce oneself"
      },
      {
        de: "der Müllraum",
        en: "the trash room"
      },
      {
        de: "das Fest / die Feier",
        en: "the party"
      },
      {
        de: "das Mehrfamilienhaus",
        en: "the apartment building"
      },
      {
        de: "der Vermieter / die Vermieterin",
        en: "the landlord"
      },
      {
        de: "der Mieter / die Mieterin",
        en: "the tenant"
      },
      {
        de: "die Miete",
        en: "the rent"
      },
      {
        de: "freundlich",
        en: "friendly"
      },
      {
        de: "rücksichtsvoll",
        en: "considerate"
      },
      {
        de: "die Beschwerde",
        en: "the complaint"
      },
      {
        de: "sich streiten",
        en: "to argue"
      },
      {
        de: "der Hausmeister",
        en: "the caretaker"
      },
      {
        de: "grüßen",
        en: "to greet"
      },
      {
        de: "kennenlernen",
        en: "to get to know"
      }
    ],
    dialogues: [
      {
        title: "Meeting a new neighbor",
        lines: [
          {
            speaker: "Nachbarin",
            de: "Guten Tag! Sind Sie neu hier eingezogen?",
            en: "Good day! Did you just move in?"
          },
          {
            speaker: "Neuer Nachbar",
            de: "Ja, genau, letzte Woche.",
            en: "Yes, exactly, last week."
          },
          {
            speaker: "Nachbarin",
            de: "Willkommen! Ich wohne im dritten Stock.",
            en: "Welcome! I live on the third floor."
          }
        ]
      },
      {
        title: "Quiet hours reminder",
        lines: [
          {
            speaker: "Nachbar",
            de: "Entschuldigung, könnten Sie bitte etwas leiser sein? Es ist schon Ruhezeit.",
            en: "Excuse me, could you please be a bit quieter? It's already quiet hours."
          },
          {
            speaker: "Mieter",
            de: "Oh, Entschuldigung, das wusste ich nicht.",
            en: "Oh, sorry, I didn't know that."
          },
          {
            speaker: "Nachbar",
            de: "Kein Problem, danke Ihnen!",
            en: "No problem, thank you!"
          }
        ]
      }
    ]
  },
  {
    id: "elevator-stairs",
    category: "daily",
    icon: "🛗",
    en: "Elevator / Stairs",
    de: "Aufzug / Treppe",
    tagline: "Daily building navigation",
    number: "31",
    vocab: [
      {
        de: "der Aufzug / der Fahrstuhl",
        en: "the elevator"
      },
      {
        de: "die Treppe",
        en: "the stairs"
      },
      {
        de: "das Stockwerk",
        en: "the floor (of a building)"
      },
      {
        de: "das Erdgeschoss",
        en: "the ground floor"
      },
      {
        de: "der Knopf",
        en: "the button"
      },
      {
        de: "drücken",
        en: "to press"
      },
      {
        de: "nach oben",
        en: "upward"
      },
      {
        de: "nach unten",
        en: "downward"
      },
      {
        de: "steckenbleiben",
        en: "to get stuck"
      },
      {
        de: "außer Betrieb",
        en: "out of order"
      },
      {
        de: "die Tür halten",
        en: "to hold the door"
      },
      {
        de: "Nach Ihnen!",
        en: "After you!"
      },
      {
        de: "In welchem Stock wohnen Sie?",
        en: "Which floor do you live on?"
      },
      {
        de: "die Treppe nehmen",
        en: "to take the stairs"
      },
      {
        de: "eng",
        en: "cramped/tight"
      },
      {
        de: "der Notausgang",
        en: "the emergency exit"
      },
      {
        de: "der Keller",
        en: "the basement"
      },
      {
        de: "das Geländer",
        en: "the handrail"
      },
      {
        de: "die Stufe",
        en: "the step"
      },
      {
        de: "der Lift",
        en: "the lift (colloquial)"
      },
      {
        de: "hinauf",
        en: "up (direction)"
      },
      {
        de: "hinunter",
        en: "down (direction)"
      },
      {
        de: "die Wartung",
        en: "the maintenance"
      },
      {
        de: "rutschig",
        en: "slippery"
      },
      {
        de: "klettern",
        en: "to climb"
      }
    ],
    dialogues: [
      {
        title: "Sharing the elevator",
        lines: [
          {
            speaker: "Nachbarin",
            de: "Können Sie bitte die Tür halten?",
            en: "Can you please hold the door?"
          },
          {
            speaker: "Nachbar",
            de: "Klar, kein Problem. In welchen Stock?",
            en: "Sure, no problem. Which floor?"
          },
          {
            speaker: "Nachbarin",
            de: "Fünfter Stock, bitte.",
            en: "Fifth floor, please."
          },
          {
            speaker: "Nachbar",
            de: "Nach Ihnen!",
            en: "After you!"
          }
        ]
      },
      {
        title: "Elevator out of order",
        lines: [
          {
            speaker: "Mieter",
            de: "Der Aufzug ist leider außer Betrieb.",
            en: "The elevator is unfortunately out of order."
          },
          {
            speaker: "Mieterin",
            de: "Oh nein, dann müssen wir die Treppe nehmen.",
            en: "Oh no, then we'll have to take the stairs."
          },
          {
            speaker: "Mieter",
            de: "Es sind ja nur drei Stockwerke.",
            en: "It's only three floors, after all."
          }
        ]
      }
    ]
  },
  {
    id: "keys-locks",
    category: "daily",
    icon: "🔑",
    en: "Keys / Locks",
    de: "Schlüssel / Schloss",
    tagline: "Locking doors, lost keys",
    number: "32",
    vocab: [
      {
        de: "der Schlüssel",
        en: "the key"
      },
      {
        de: "das Schloss",
        en: "the lock"
      },
      {
        de: "abschließen",
        en: "to lock"
      },
      {
        de: "aufschließen",
        en: "to unlock"
      },
      {
        de: "ausgesperrt sein",
        en: "to be locked out"
      },
      {
        de: "der Ersatzschlüssel",
        en: "the spare key"
      },
      {
        de: "der Schlüsselbund",
        en: "the keychain / bunch of keys"
      },
      {
        de: "der Hausschlüssel",
        en: "the house key"
      },
      {
        de: "verlieren",
        en: "to lose"
      },
      {
        de: "der Schlüsseldienst",
        en: "the locksmith"
      },
      {
        de: "steckenbleiben (Schlüssel)",
        en: "to get stuck (key)"
      },
      {
        de: "die Wohnungstür",
        en: "the apartment door"
      },
      {
        de: "einrasten",
        en: "to click/lock into place"
      },
      {
        de: "abgeschlossen",
        en: "locked"
      },
      {
        de: "Hast du deinen Schlüssel dabei?",
        en: "Do you have your key with you?"
      },
      {
        de: "die Sicherheitstür",
        en: "the security door"
      },
      {
        de: "der Riegel",
        en: "the bolt/latch"
      },
      {
        de: "verriegeln",
        en: "to bolt/lock"
      },
      {
        de: "das Vorhängeschloss",
        en: "the padlock"
      },
      {
        de: "der Nachschlüssel",
        en: "the duplicate key"
      },
      {
        de: "nachmachen lassen",
        en: "to have (a key) copied"
      },
      {
        de: "klemmen",
        en: "to jam (lock/key)"
      },
      {
        de: "die Tür zufallen lassen",
        en: "to let the door shut"
      },
      {
        de: "der Zylinder",
        en: "the lock cylinder"
      },
      {
        de: "der Code",
        en: "the code"
      }
    ],
    dialogues: [
      {
        title: "Locked out",
        lines: [
          {
            speaker: "Mitbewohner",
            de: "Oh nein, ich glaube ich bin ausgesperrt!",
            en: "Oh no, I think I'm locked out!"
          },
          {
            speaker: "Mitbewohnerin",
            de: "Hast du deinen Schlüssel wirklich nicht dabei?",
            en: "Do you really not have your key with you?"
          },
          {
            speaker: "Mitbewohner",
            de: "Nein, er liegt noch auf dem Tisch drinnen.",
            en: "No, it's still on the table inside."
          },
          {
            speaker: "Mitbewohnerin",
            de: "Kein Problem, ich habe einen Ersatzschlüssel.",
            en: "No problem, I have a spare key."
          }
        ]
      },
      {
        title: "Leaving the house",
        lines: [
          {
            speaker: "Partnerin",
            de: "Hast du die Tür abgeschlossen?",
            en: "Did you lock the door?"
          },
          {
            speaker: "Partner",
            de: "Ja, ich habe zweimal abgeschlossen.",
            en: "Yes, I locked it twice."
          },
          {
            speaker: "Partnerin",
            de: "Gut, dann können wir los.",
            en: "Good, then we can go."
          }
        ]
      }
    ]
  },
  {
    id: "internet-wifi",
    category: "daily",
    icon: "📶",
    en: "Internet / WiFi",
    de: "Internet / WLAN",
    tagline: "Asking for passwords everywhere",
    number: "33",
    vocab: [
      {
        de: "das Internet",
        en: "the internet"
      },
      {
        de: "das WLAN",
        en: "the WiFi"
      },
      {
        de: "das Passwort",
        en: "the password"
      },
      {
        de: "sich verbinden",
        en: "to connect"
      },
      {
        de: "die Verbindung",
        en: "the connection"
      },
      {
        de: "langsam",
        en: "slow"
      },
      {
        de: "schnell",
        en: "fast"
      },
      {
        de: "der Router",
        en: "the router"
      },
      {
        de: "das Netzwerk",
        en: "the network"
      },
      {
        de: "offline sein",
        en: "to be offline"
      },
      {
        de: "Wie ist das WLAN-Passwort?",
        en: "What's the WiFi password?"
      },
      {
        de: "der Empfang",
        en: "the signal/reception"
      },
      {
        de: "herunterladen",
        en: "to download"
      },
      {
        de: "hochladen",
        en: "to upload"
      },
      {
        de: "abstürzen",
        en: "to crash"
      },
      {
        de: "das Datenvolumen",
        en: "the data allowance"
      },
      {
        de: "das Handynetz",
        en: "the mobile network"
      },
      {
        de: "die Bandbreite",
        en: "the bandwidth"
      },
      {
        de: "die IP-Adresse",
        en: "the IP address"
      },
      {
        de: "der Hotspot",
        en: "the hotspot"
      },
      {
        de: "streamen",
        en: "to stream"
      },
      {
        de: "die Firewall",
        en: "the firewall"
      },
      {
        de: "der Virus",
        en: "the virus"
      },
      {
        de: "surfen",
        en: "to browse the internet"
      },
      {
        de: "die Webseite",
        en: "the website"
      }
    ],
    dialogues: [
      {
        title: "Asking for WiFi",
        lines: [
          {
            speaker: "Gast",
            de: "Entschuldigung, wie ist das WLAN-Passwort?",
            en: "Excuse me, what's the WiFi password?"
          },
          {
            speaker: "Gastgeberin",
            de: "Es steht auf dem Router, unten drauf.",
            en: "It's on the router, on the bottom."
          },
          {
            speaker: "Gast",
            de: "Ah, gefunden, danke!",
            en: "Ah, found it, thanks!"
          }
        ]
      },
      {
        title: "Slow connection",
        lines: [
          {
            speaker: "Kollege",
            de: "Das Internet ist heute total langsam.",
            en: "The internet is really slow today."
          },
          {
            speaker: "Kollegin",
            de: "Ja, bei mir stürzt sogar die Verbindung ab.",
            en: "Yeah, my connection is even crashing."
          },
          {
            speaker: "Kollege",
            de: "Vielleicht sollten wir den Router neu starten.",
            en: "Maybe we should restart the router."
          }
        ]
      }
    ]
  },
  {
    id: "mobile-phone-charger",
    category: "daily",
    icon: "🔋",
    en: "Mobile Phone / Charger",
    de: "Handy / Ladegerät",
    tagline: "Daily battery panic",
    number: "34",
    vocab: [
      {
        de: "das Handy",
        en: "the mobile phone"
      },
      {
        de: "das Ladegerät",
        en: "the charger"
      },
      {
        de: "der Akku",
        en: "the battery"
      },
      {
        de: "aufladen",
        en: "to charge"
      },
      {
        de: "der Akku ist leer",
        en: "the battery is dead"
      },
      {
        de: "das Kabel",
        en: "the cable"
      },
      {
        de: "die Steckdose",
        en: "the power outlet"
      },
      {
        de: "die Powerbank",
        en: "the power bank"
      },
      {
        de: "das Display",
        en: "the screen"
      },
      {
        de: "kaputt",
        en: "broken"
      },
      {
        de: "der Bildschirm ist gesprungen",
        en: "the screen is cracked"
      },
      {
        de: "Hast du ein Ladekabel?",
        en: "Do you have a charging cable?"
      },
      {
        de: "im Flugmodus",
        en: "in airplane mode"
      },
      {
        de: "die Apps",
        en: "the apps"
      },
      {
        de: "das Update",
        en: "the update"
      },
      {
        de: "das Smartphone",
        en: "the smartphone"
      },
      {
        de: "die SIM-Karte",
        en: "the SIM card"
      },
      {
        de: "die Hülle",
        en: "the phone case"
      },
      {
        de: "die Kopfhörer",
        en: "the headphones"
      },
      {
        de: "vibrieren",
        en: "to vibrate"
      },
      {
        de: "der Lautstärkeregler",
        en: "the volume control"
      },
      {
        de: "die Benachrichtigung",
        en: "the notification"
      },
      {
        de: "die Kamera",
        en: "the camera"
      },
      {
        de: "ein Foto machen",
        en: "to take a photo"
      },
      {
        de: "der Speicherplatz",
        en: "the storage space"
      },
      {
        de: "die Wireless-Ladestation",
        en: "the wireless charging pad"
      }
    ],
    dialogues: [
      {
        title: "Battery emergency",
        lines: [
          {
            speaker: "Freund",
            de: "Mein Akku ist gleich leer, hast du ein Ladekabel?",
            en: "My battery is about to die, do you have a charging cable?"
          },
          {
            speaker: "Freundin",
            de: "Ja, hier, und da drüben ist eine Steckdose.",
            en: "Yes, here, and there's an outlet over there."
          },
          {
            speaker: "Freund",
            de: "Perfekt, danke dir!",
            en: "Perfect, thanks!"
          }
        ]
      },
      {
        title: "Broken screen",
        lines: [
          {
            speaker: "Kollegin",
            de: "Was ist mit deinem Handy passiert?",
            en: "What happened to your phone?"
          },
          {
            speaker: "Kollege",
            de: "Es ist mir runtergefallen, das Display ist gesprungen.",
            en: "I dropped it, the screen is cracked."
          },
          {
            speaker: "Kollegin",
            de: "Oh nein, das musst du reparieren lassen.",
            en: "Oh no, you have to get that fixed."
          }
        ]
      }
    ]
  },
  {
    id: "sleeping-wakeup",
    category: "daily",
    icon: "⏰",
    en: "Sleeping / Wake-up",
    de: "Schlafen / Aufwachen",
    tagline: "Alarm clocks, tiredness",
    number: "35",
    vocab: [
      {
        de: "schlafen",
        en: "to sleep"
      },
      {
        de: "aufwachen",
        en: "to wake up"
      },
      {
        de: "der Wecker",
        en: "the alarm clock"
      },
      {
        de: "einschlafen",
        en: "to fall asleep"
      },
      {
        de: "müde",
        en: "tired"
      },
      {
        de: "ausgeschlafen",
        en: "well-rested"
      },
      {
        de: "verschlafen",
        en: "to oversleep"
      },
      {
        de: "das Bett",
        en: "the bed"
      },
      {
        de: "früh aufstehen",
        en: "to get up early"
      },
      {
        de: "ein Nickerchen machen",
        en: "to take a nap"
      },
      {
        de: "gut schlafen",
        en: "to sleep well"
      },
      {
        de: "die Schlaflosigkeit",
        en: "insomnia"
      },
      {
        de: "träumen",
        en: "to dream"
      },
      {
        de: "den Wecker stellen",
        en: "to set the alarm"
      },
      {
        de: "Ich bin todmüde.",
        en: "I'm exhausted."
      },
      {
        de: "die Bettdecke",
        en: "the blanket"
      },
      {
        de: "schnarchen",
        en: "to snore"
      },
      {
        de: "der Albtraum",
        en: "the nightmare"
      },
      {
        de: "die Schlafqualität",
        en: "the sleep quality"
      },
      {
        de: "die Schlaftablette",
        en: "the sleeping pill"
      },
      {
        de: "die Nachtruhe",
        en: "the night's rest"
      },
      {
        de: "der Schlafrhythmus",
        en: "the sleep rhythm"
      },
      {
        de: "durchschlafen",
        en: "to sleep through the night"
      },
      {
        de: "gähnen",
        en: "to yawn"
      },
      {
        de: "ins Bett gehen",
        en: "to go to bed"
      }
    ],
    dialogues: [
      {
        title: "Feeling tired",
        lines: [
          {
            speaker: "Kollege",
            de: "Du siehst müde aus. Schlecht geschlafen?",
            en: "You look tired. Sleep badly?"
          },
          {
            speaker: "Kollegin",
            de: "Ja, ich habe kaum geschlafen letzte Nacht.",
            en: "Yes, I hardly slept last night."
          },
          {
            speaker: "Kollege",
            de: "Vielleicht machst du in der Pause ein Nickerchen.",
            en: "Maybe take a nap during the break."
          }
        ]
      },
      {
        title: "Oversleeping",
        lines: [
          {
            speaker: "Partnerin",
            de: "Warum bist du so spät dran?",
            en: "Why are you running so late?"
          },
          {
            speaker: "Partner",
            de: "Ich habe verschlafen, der Wecker hat nicht geklingelt.",
            en: "I overslept, the alarm didn't go off."
          },
          {
            speaker: "Partnerin",
            de: "Oh nein, beeil dich!",
            en: "Oh no, hurry up!"
          }
        ]
      }
    ]
  },
  {
    id: "work-schedule",
    category: "daily",
    icon: "🕘",
    en: "Work Schedule",
    de: "Arbeitszeiten",
    tagline: "Start time, break time, home time",
    number: "36",
    vocab: [
      {
        de: "die Arbeitszeit",
        en: "the work hours"
      },
      {
        de: "anfangen",
        en: "to start (work)"
      },
      {
        de: "Feierabend haben",
        en: "to be done for the day"
      },
      {
        de: "die Pause",
        en: "the break"
      },
      {
        de: "die Mittagspause",
        en: "the lunch break"
      },
      {
        de: "pünktlich",
        en: "on time"
      },
      {
        de: "Überstunden machen",
        en: "to work overtime"
      },
      {
        de: "der Schichtdienst",
        en: "shift work"
      },
      {
        de: "die Frühschicht",
        en: "the early shift"
      },
      {
        de: "die Spätschicht",
        en: "the late shift"
      },
      {
        de: "Homeoffice",
        en: "working from home"
      },
      {
        de: "der Urlaubstag",
        en: "the vacation day"
      },
      {
        de: "Wann fängst du an?",
        en: "When do you start?"
      },
      {
        de: "Wann hast du Feierabend?",
        en: "When are you done for the day?"
      },
      {
        de: "flexibel",
        en: "flexible"
      },
      {
        de: "die Vollzeit",
        en: "full-time"
      },
      {
        de: "die Teilzeit",
        en: "part-time"
      },
      {
        de: "die Kündigung",
        en: "the resignation/termination"
      },
      {
        de: "kündigen",
        en: "to quit/terminate"
      },
      {
        de: "die Gehaltsabrechnung",
        en: "the payslip"
      },
      {
        de: "sich krankmelden",
        en: "to call in sick"
      },
      {
        de: "die Schicht",
        en: "the shift"
      },
      {
        de: "der Zeitplan",
        en: "the schedule"
      },
      {
        de: "die Arbeitswoche",
        en: "the work week"
      },
      {
        de: "die Probezeit",
        en: "the probation period"
      }
    ],
    dialogues: [
      {
        title: "Discussing hours",
        lines: [
          {
            speaker: "Kollegin",
            de: "Wann fängst du morgen an?",
            en: "When do you start tomorrow?"
          },
          {
            speaker: "Kollege",
            de: "Um acht, wie immer. Und du?",
            en: "At eight, as always. And you?"
          },
          {
            speaker: "Kollegin",
            de: "Ich habe Frühschicht, also schon um sechs.",
            en: "I have the early shift, so already at six."
          }
        ]
      },
      {
        title: "End of the workday",
        lines: [
          {
            speaker: "Chef",
            de: "Können Sie heute noch etwas länger bleiben?",
            en: "Can you stay a bit longer today?"
          },
          {
            speaker: "Angestellter",
            de: "Eigentlich habe ich um fünf Feierabend.",
            en: "I'm actually done at five."
          },
          {
            speaker: "Chef",
            de: "Kein Problem, das verstehe ich.",
            en: "No problem, I understand."
          }
        ]
      }
    ]
  },
  {
    id: "meetings",
    category: "daily",
    icon: "🗣️",
    en: "Meetings (work/school)",
    de: "Besprechungen / Unterricht",
    tagline: "Daily group interactions",
    number: "37",
    vocab: [
      {
        de: "die Besprechung",
        en: "the meeting"
      },
      {
        de: "der Unterricht",
        en: "the class/lesson"
      },
      {
        de: "teilnehmen",
        en: "to participate"
      },
      {
        de: "die Tagesordnung",
        en: "the agenda"
      },
      {
        de: "eine Frage stellen",
        en: "to ask a question"
      },
      {
        de: "das Protokoll",
        en: "the minutes/notes"
      },
      {
        de: "verschieben",
        en: "to reschedule/postpone"
      },
      {
        de: "absagen",
        en: "to cancel"
      },
      {
        de: "die Präsentation",
        en: "the presentation"
      },
      {
        de: "zu spät kommen",
        en: "to be late"
      },
      {
        de: "die Diskussion",
        en: "the discussion"
      },
      {
        de: "zustimmen",
        en: "to agree"
      },
      {
        de: "Können wir das kurz besprechen?",
        en: "Can we discuss that briefly?"
      },
      {
        de: "die Gruppenarbeit",
        en: "the group work"
      },
      {
        de: "das Meeting beginnt gleich.",
        en: "The meeting starts soon."
      },
      {
        de: "der Teilnehmer / die Teilnehmerin",
        en: "the participant"
      },
      {
        de: "die Einladung",
        en: "the invitation"
      },
      {
        de: "einladen",
        en: "to invite"
      },
      {
        de: "der Konferenzraum",
        en: "the conference room"
      },
      {
        de: "die Videokonferenz",
        en: "the video conference"
      },
      {
        de: "Notizen machen",
        en: "to take notes"
      },
      {
        de: "der Vorschlag",
        en: "the suggestion"
      },
      {
        de: "vorschlagen",
        en: "to suggest"
      },
      {
        de: "die Entscheidung",
        en: "the decision"
      },
      {
        de: "entscheiden",
        en: "to decide"
      },
      {
        de: "pünktlich beginnen",
        en: "to start on time"
      }
    ],
    dialogues: [
      {
        title: "Starting a meeting",
        lines: [
          {
            speaker: "Chefin",
            de: "Gut, dann fangen wir an. Alle da?",
            en: "Okay, let's begin. Is everyone here?"
          },
          {
            speaker: "Mitarbeiter",
            de: "Fast, Tim kommt fünf Minuten später.",
            en: "Almost, Tim is coming five minutes later."
          },
          {
            speaker: "Chefin",
            de: "Kein Problem, wir starten schon mal.",
            en: "No problem, we'll get started already."
          }
        ]
      },
      {
        title: "Rescheduling",
        lines: [
          {
            speaker: "Kollege",
            de: "Können wir die Besprechung auf morgen verschieben?",
            en: "Can we reschedule the meeting to tomorrow?"
          },
          {
            speaker: "Kollegin",
            de: "Klar, wann passt es dir?",
            en: "Sure, when works for you?"
          },
          {
            speaker: "Kollege",
            de: "Um zehn Uhr wäre super.",
            en: "Ten o'clock would be great."
          }
        ]
      }
    ]
  },
  {
    id: "eating-utensils",
    category: "daily",
    icon: "🍴",
    en: "Eating Utensils",
    de: "Besteck",
    tagline: "Fork, knife, spoon (used 3x a day)",
    number: "38",
    vocab: [
      {
        de: "das Besteck",
        en: "the cutlery"
      },
      {
        de: "die Gabel",
        en: "the fork"
      },
      {
        de: "das Messer",
        en: "the knife"
      },
      {
        de: "der Löffel",
        en: "the spoon"
      },
      {
        de: "der Teelöffel",
        en: "the teaspoon"
      },
      {
        de: "der Teller",
        en: "the plate"
      },
      {
        de: "die Schüssel",
        en: "the bowl"
      },
      {
        de: "das Glas",
        en: "the glass"
      },
      {
        de: "die Tasse",
        en: "the cup"
      },
      {
        de: "die Serviette",
        en: "the napkin"
      },
      {
        de: "abwaschen",
        en: "to wash up"
      },
      {
        de: "decken (den Tisch)",
        en: "to set (the table)"
      },
      {
        de: "Kannst du mir eine Gabel geben?",
        en: "Can you hand me a fork?"
      },
      {
        de: "schmutzig",
        en: "dirty"
      },
      {
        de: "sauber",
        en: "clean"
      },
      {
        de: "der Untersetzer",
        en: "the coaster"
      },
      {
        de: "die Tischdecke",
        en: "the tablecloth"
      },
      {
        de: "das Tablett",
        en: "the tray"
      },
      {
        de: "der Krug",
        en: "the pitcher/jug"
      },
      {
        de: "der Öffner",
        en: "the opener"
      },
      {
        de: "der Korkenzieher",
        en: "the corkscrew"
      },
      {
        de: "die Zange",
        en: "the tongs"
      },
      {
        de: "die Kelle",
        en: "the ladle"
      },
      {
        de: "die Salatschüssel",
        en: "the salad bowl"
      },
      {
        de: "Vorsicht, heiß!",
        en: "Careful, hot!"
      }
    ],
    dialogues: [
      {
        title: "Setting the table",
        lines: [
          {
            speaker: "Mutter",
            de: "Kannst du den Tisch decken?",
            en: "Can you set the table?"
          },
          {
            speaker: "Kind",
            de: "Klar, wie viele Gabeln brauchen wir?",
            en: "Sure, how many forks do we need?"
          },
          {
            speaker: "Mutter",
            de: "Vier, und vier Messer bitte.",
            en: "Four, and four knives please."
          }
        ]
      },
      {
        title: "Missing a spoon",
        lines: [
          {
            speaker: "Gast",
            de: "Entschuldigung, könnte ich einen Löffel bekommen?",
            en: "Excuse me, could I get a spoon?"
          },
          {
            speaker: "Kellner",
            de: "Natürlich, einen Moment bitte.",
            en: "Of course, one moment please."
          },
          {
            speaker: "Gast",
            de: "Danke schön.",
            en: "Thank you."
          }
        ]
      }
    ]
  },
  {
    id: "toilet-restroom",
    category: "daily",
    icon: "🚻",
    en: "Toilet / Restroom",
    de: "Toilette / WC",
    tagline: "Asking where it is",
    number: "39",
    vocab: [
      {
        de: "die Toilette / das WC",
        en: "the toilet/restroom"
      },
      {
        de: "Wo ist die Toilette?",
        en: "Where is the restroom?"
      },
      {
        de: "besetzt",
        en: "occupied"
      },
      {
        de: "frei",
        en: "vacant/free"
      },
      {
        de: "das Toilettenpapier",
        en: "the toilet paper"
      },
      {
        de: "die Damentoilette",
        en: "the women's restroom"
      },
      {
        de: "die Herrentoilette",
        en: "the men's restroom"
      },
      {
        de: "sich die Hände waschen",
        en: "to wash one's hands"
      },
      {
        de: "das Waschbecken",
        en: "the sink"
      },
      {
        de: "die Kabine",
        en: "the stall"
      },
      {
        de: "der Seifenspender",
        en: "the soap dispenser"
      },
      {
        de: "das Handtuch",
        en: "the towel"
      },
      {
        de: "spülen",
        en: "to flush"
      },
      {
        de: "kaputt / defekt",
        en: "broken/out of order"
      },
      {
        de: "Ist hier eine Toilette in der Nähe?",
        en: "Is there a restroom nearby?"
      },
      {
        de: "die Toilettenbürste",
        en: "the toilet brush"
      },
      {
        de: "die Spülung",
        en: "the flush"
      },
      {
        de: "die Behindertentoilette",
        en: "the accessible restroom"
      },
      {
        de: "der Wickeltisch",
        en: "the changing table"
      },
      {
        de: "öffentliche Toilette",
        en: "public restroom"
      },
      {
        de: "Ist besetzt.",
        en: "It's occupied."
      },
      {
        de: "riechen",
        en: "to smell"
      },
      {
        de: "die Hygiene",
        en: "the hygiene"
      },
      {
        de: "das Schild",
        en: "the sign"
      },
      {
        de: "der Spiegel",
        en: "the mirror"
      }
    ],
    dialogues: [
      {
        title: "Asking for directions",
        lines: [
          {
            speaker: "Gast",
            de: "Entschuldigung, wo ist die Toilette, bitte?",
            en: "Excuse me, where's the restroom, please?"
          },
          {
            speaker: "Kellnerin",
            de: "Hinten links, neben der Bar.",
            en: "In the back on the left, next to the bar."
          },
          {
            speaker: "Gast",
            de: "Vielen Dank.",
            en: "Thank you very much."
          }
        ]
      },
      {
        title: "Restroom occupied",
        lines: [
          {
            speaker: "Kunde",
            de: "Ist die Toilette frei?",
            en: "Is the restroom free?"
          },
          {
            speaker: "Mitarbeiter",
            de: "Nein, gerade besetzt, einen Moment bitte.",
            en: "No, it's occupied right now, one moment please."
          },
          {
            speaker: "Kunde",
            de: "Kein Problem, ich warte.",
            en: "No problem, I'll wait."
          }
        ]
      }
    ]
  },
  {
    id: "shopping-bags",
    category: "daily",
    icon: "🛍️",
    en: "Shopping Bags",
    de: "Einkaufstüten",
    tagline: "Plastic vs. reusable bags",
    number: "40",
    vocab: [
      {
        de: "die Einkaufstüte",
        en: "the shopping bag"
      },
      {
        de: "die Plastiktüte",
        en: "the plastic bag"
      },
      {
        de: "der Stoffbeutel",
        en: "the fabric/tote bag"
      },
      {
        de: "wiederverwendbar",
        en: "reusable"
      },
      {
        de: "Brauchen Sie eine Tüte?",
        en: "Do you need a bag?"
      },
      {
        de: "die Papiertüte",
        en: "the paper bag"
      },
      {
        de: "der Rucksack",
        en: "the backpack"
      },
      {
        de: "der Netzbeutel",
        en: "the mesh bag"
      },
      {
        de: "kostenlos",
        en: "free of charge"
      },
      {
        de: "kostenpflichtig",
        en: "chargeable / not free"
      },
      {
        de: "mitbringen",
        en: "to bring along"
      },
      {
        de: "umweltfreundlich",
        en: "eco-friendly"
      },
      {
        de: "die Kiste",
        en: "the crate/box"
      },
      {
        de: "eng gepackt",
        en: "tightly packed"
      },
      {
        de: "Ich habe meine eigene Tüte dabei.",
        en: "I have my own bag with me."
      },
      {
        de: "die Tragetasche",
        en: "the carrier bag"
      },
      {
        de: "reißen",
        en: "to tear/rip"
      },
      {
        de: "schwer",
        en: "heavy"
      },
      {
        de: "leicht",
        en: "light"
      },
      {
        de: "packen",
        en: "to pack"
      },
      {
        de: "der Einkauf",
        en: "the purchase/shopping"
      },
      {
        de: "die Einkäufe tragen",
        en: "to carry the groceries"
      },
      {
        de: "die Größe",
        en: "the size"
      },
      {
        de: "praktisch",
        en: "practical"
      },
      {
        de: "nachhaltig",
        en: "sustainable"
      }
    ],
    dialogues: [
      {
        title: "At the checkout",
        lines: [
          {
            speaker: "Kassiererin",
            de: "Brauchen Sie eine Tüte?",
            en: "Do you need a bag?"
          },
          {
            speaker: "Kunde",
            de: "Nein danke, ich habe meinen eigenen Stoffbeutel dabei.",
            en: "No thanks, I have my own tote bag with me."
          },
          {
            speaker: "Kassiererin",
            de: "Sehr gut, das spart Plastik.",
            en: "Very good, that saves plastic."
          }
        ]
      },
      {
        title: "Buying a bag",
        lines: [
          {
            speaker: "Kunde",
            de: "Oh, ich habe keine Tüte dabei. Verkaufen Sie welche?",
            en: "Oh, I don't have a bag with me. Do you sell them?"
          },
          {
            speaker: "Kassierer",
            de: "Ja, eine Papiertüte kostet 20 Cent.",
            en: "Yes, a paper bag costs 20 cents."
          },
          {
            speaker: "Kunde",
            de: "Gerne, eine bitte.",
            en: "Sure, one please."
          }
        ]
      }
    ]
  },
  {
    id: "coffee-tea",
    category: "daily",
    icon: "☕",
    en: "Coffee / Tea",
    de: "Kaffee / Tee",
    tagline: "Ordering or making it daily",
    number: "41",
    vocab: [
      {
        de: "der Kaffee",
        en: "the coffee"
      },
      {
        de: "der Tee",
        en: "the tea"
      },
      {
        de: "der Milchkaffee",
        en: "the coffee with milk"
      },
      {
        de: "der Espresso",
        en: "the espresso"
      },
      {
        de: "der Cappuccino",
        en: "the cappuccino"
      },
      {
        de: "schwarz",
        en: "black (coffee)"
      },
      {
        de: "mit Zucker",
        en: "with sugar"
      },
      {
        de: "ohne Zucker",
        en: "without sugar"
      },
      {
        de: "die Kaffeemaschine",
        en: "the coffee machine"
      },
      {
        de: "der Teebeutel",
        en: "the tea bag"
      },
      {
        de: "aufbrühen",
        en: "to brew"
      },
      {
        de: "koffeinfrei",
        en: "decaffeinated"
      },
      {
        de: "Möchten Sie Milch dazu?",
        en: "Would you like milk with that?"
      },
      {
        de: "die Kanne",
        en: "the pot"
      },
      {
        de: "heiß",
        en: "hot"
      },
      {
        de: "der Kaffeesatz",
        en: "the coffee grounds"
      },
      {
        de: "die Kaffeebohne",
        en: "the coffee bean"
      },
      {
        de: "mahlen",
        en: "to grind"
      },
      {
        de: "der Grüntee",
        en: "the green tea"
      },
      {
        de: "der Schwarztee",
        en: "the black tea"
      },
      {
        de: "der Kräutertee",
        en: "the herbal tea"
      },
      {
        de: "süßen",
        en: "to sweeten"
      },
      {
        de: "der Zuckerwürfel",
        en: "the sugar cube"
      },
      {
        de: "der Milchschaum",
        en: "the milk foam"
      },
      {
        de: "aufwärmen",
        en: "to reheat"
      },
      {
        de: "kalt werden",
        en: "to get cold"
      }
    ],
    dialogues: [
      {
        title: "Ordering coffee",
        lines: [
          {
            speaker: "Barista",
            de: "Was darf es sein?",
            en: "What can I get you?"
          },
          {
            speaker: "Kunde",
            de: "Einen Cappuccino, bitte, ohne Zucker.",
            en: "A cappuccino, please, without sugar."
          },
          {
            speaker: "Barista",
            de: "Gerne, groß oder klein?",
            en: "Sure, large or small?"
          },
          {
            speaker: "Kunde",
            de: "Klein, danke.",
            en: "Small, thanks."
          }
        ]
      },
      {
        title: "Making tea at home",
        lines: [
          {
            speaker: "Mitbewohner",
            de: "Möchtest du auch eine Tasse Tee?",
            en: "Would you like a cup of tea too?"
          },
          {
            speaker: "Mitbewohnerin",
            de: "Ja, gerne, mit Honig bitte.",
            en: "Yes, please, with honey please."
          },
          {
            speaker: "Mitbewohner",
            de: "Kommt sofort, das Wasser kocht schon.",
            en: "Coming right up, the water's already boiling."
          }
        ]
      }
    ]
  },
  {
    id: "milk-dairy",
    category: "daily",
    icon: "🧀",
    en: "Milk / Dairy",
    de: "Milchprodukte",
    tagline: "Yogurt, cheese, butter",
    number: "42",
    vocab: [
      {
        de: "die Milch",
        en: "the milk"
      },
      {
        de: "der Käse",
        en: "the cheese"
      },
      {
        de: "der Joghurt",
        en: "the yogurt"
      },
      {
        de: "die Butter",
        en: "the butter"
      },
      {
        de: "die Sahne",
        en: "the cream"
      },
      {
        de: "der Quark",
        en: "the quark (fresh curd cheese)"
      },
      {
        de: "fettarm",
        en: "low-fat"
      },
      {
        de: "Vollmilch",
        en: "whole milk"
      },
      {
        de: "laktosefrei",
        en: "lactose-free"
      },
      {
        de: "haltbar",
        en: "long-life/shelf-stable"
      },
      {
        de: "das Verfallsdatum",
        en: "the expiration date"
      },
      {
        de: "der Frischkäse",
        en: "the cream cheese"
      },
      {
        de: "abgelaufen",
        en: "expired"
      },
      {
        de: "die Molkerei",
        en: "the dairy"
      },
      {
        de: "Ist die Milch noch gut?",
        en: "Is the milk still good?"
      },
      {
        de: "der Weichkäse",
        en: "the soft cheese"
      },
      {
        de: "der Hartkäse",
        en: "the hard cheese"
      },
      {
        de: "die Buttermilch",
        en: "the buttermilk"
      },
      {
        de: "die Kondensmilch",
        en: "the condensed milk"
      },
      {
        de: "pasteurisiert",
        en: "pasteurized"
      },
      {
        de: "die Kühlkette",
        en: "the cold chain"
      },
      {
        de: "geöffnet",
        en: "opened"
      },
      {
        de: "ungeöffnet",
        en: "unopened"
      },
      {
        de: "cremig",
        en: "creamy"
      },
      {
        de: "der Bioladen",
        en: "the organic store"
      }
    ],
    dialogues: [
      {
        title: "Checking the milk",
        lines: [
          {
            speaker: "Mitbewohnerin",
            de: "Ist die Milch im Kühlschrank noch gut?",
            en: "Is the milk in the fridge still good?"
          },
          {
            speaker: "Mitbewohner",
            de: "Schau mal aufs Verfallsdatum, ich glaube nicht.",
            en: "Check the expiration date, I don't think so."
          },
          {
            speaker: "Mitbewohnerin",
            de: "Stimmt, sie ist schon abgelaufen.",
            en: "You're right, it's already expired."
          }
        ]
      },
      {
        title: "Buying dairy",
        lines: [
          {
            speaker: "Kunde",
            de: "Haben Sie laktosefreien Käse?",
            en: "Do you have lactose-free cheese?"
          },
          {
            speaker: "Verkäuferin",
            de: "Ja, im Kühlregal ganz rechts.",
            en: "Yes, in the fridge shelf on the far right."
          },
          {
            speaker: "Kunde",
            de: "Super, danke!",
            en: "Great, thanks!"
          }
        ]
      }
    ]
  },
  {
    id: "bread-grains",
    category: "daily",
    icon: "🍞",
    en: "Bread / Grains",
    de: "Brot / Getreide",
    tagline: "German staple food",
    number: "43",
    vocab: [
      {
        de: "das Brot",
        en: "the bread"
      },
      {
        de: "das Vollkornbrot",
        en: "the wholegrain bread"
      },
      {
        de: "das Roggenbrot",
        en: "the rye bread"
      },
      {
        de: "der Reis",
        en: "the rice"
      },
      {
        de: "die Nudeln",
        en: "the pasta/noodles"
      },
      {
        de: "das Mehl",
        en: "the flour"
      },
      {
        de: "die Haferflocken",
        en: "the oats"
      },
      {
        de: "der Toast",
        en: "the toast"
      },
      {
        de: "die Scheibe",
        en: "the slice"
      },
      {
        de: "frisch gebacken",
        en: "freshly baked"
      },
      {
        de: "altbacken",
        en: "stale"
      },
      {
        de: "das Getreide",
        en: "the grain"
      },
      {
        de: "die Kruste",
        en: "the crust"
      },
      {
        de: "weich",
        en: "soft"
      },
      {
        de: "knusprig",
        en: "crunchy/crusty"
      },
      {
        de: "das Weißbrot",
        en: "the white bread"
      },
      {
        de: "das Dinkelbrot",
        en: "the spelt bread"
      },
      {
        de: "die Semmel",
        en: "the roll (regional)"
      },
      {
        de: "der Sauerteig",
        en: "the sourdough"
      },
      {
        de: "backen",
        en: "to bake"
      },
      {
        de: "die Bäckerei",
        en: "the bakery"
      },
      {
        de: "die Kohlenhydrate",
        en: "the carbohydrates"
      },
      {
        de: "glutenfrei",
        en: "gluten-free"
      },
      {
        de: "das Getreidekorn",
        en: "the grain kernel"
      },
      {
        de: "der Laib",
        en: "the loaf"
      },
      {
        de: "aufschneiden",
        en: "to slice"
      }
    ],
    dialogues: [
      {
        title: "Buying bread",
        lines: [
          {
            speaker: "Kunde",
            de: "Ich hätte gern ein Roggenbrot, bitte.",
            en: "I'd like a rye bread, please."
          },
          {
            speaker: "Bäckerin",
            de: "Ganz oder halb?",
            en: "Whole or half?"
          },
          {
            speaker: "Kunde",
            de: "Halb reicht, danke.",
            en: "Half is enough, thanks."
          }
        ]
      },
      {
        title: "Stale bread",
        lines: [
          {
            speaker: "Partner",
            de: "Das Brot ist schon ziemlich altbacken.",
            en: "The bread is already pretty stale."
          },
          {
            speaker: "Partnerin",
            de: "Dann toasten wir es einfach.",
            en: "Then let's just toast it."
          },
          {
            speaker: "Partner",
            de: "Gute Idee.",
            en: "Good idea."
          }
        ]
      }
    ]
  },
  {
    id: "fruits",
    category: "daily",
    icon: "🍎",
    en: "Fruits",
    de: "Obst",
    tagline: "Apples, bananas, oranges",
    number: "44",
    vocab: [
      {
        de: "das Obst",
        en: "the fruit"
      },
      {
        de: "der Apfel",
        en: "the apple"
      },
      {
        de: "die Banane",
        en: "the banana"
      },
      {
        de: "die Orange",
        en: "the orange"
      },
      {
        de: "die Traube",
        en: "the grape"
      },
      {
        de: "die Erdbeere",
        en: "the strawberry"
      },
      {
        de: "die Zitrone",
        en: "the lemon"
      },
      {
        de: "die Birne",
        en: "the pear"
      },
      {
        de: "reif",
        en: "ripe"
      },
      {
        de: "sauer",
        en: "sour"
      },
      {
        de: "süß",
        en: "sweet"
      },
      {
        de: "schälen",
        en: "to peel"
      },
      {
        de: "der Obststand",
        en: "the fruit stand"
      },
      {
        de: "das Kilo",
        en: "the kilogram"
      },
      {
        de: "Wie viel kostet ein Kilo Äpfel?",
        en: "How much does a kilo of apples cost?"
      },
      {
        de: "die Ananas",
        en: "the pineapple"
      },
      {
        de: "die Kirsche",
        en: "the cherry"
      },
      {
        de: "die Melone",
        en: "the melon"
      },
      {
        de: "die Kiwi",
        en: "the kiwi"
      },
      {
        de: "die Himbeere",
        en: "the raspberry"
      },
      {
        de: "die Heidelbeere",
        en: "the blueberry"
      },
      {
        de: "der Pfirsich",
        en: "the peach"
      },
      {
        de: "die Pflaume",
        en: "the plum"
      },
      {
        de: "die Avocado",
        en: "the avocado"
      },
      {
        de: "unreif",
        en: "unripe"
      },
      {
        de: "der Fruchtsaft",
        en: "the fruit juice"
      }
    ],
    dialogues: [
      {
        title: "At the fruit stand",
        lines: [
          {
            speaker: "Kundin",
            de: "Wie viel kostet ein Kilo Bananen?",
            en: "How much does a kilo of bananas cost?"
          },
          {
            speaker: "Verkäufer",
            de: "1,80 Euro das Kilo.",
            en: "1.80 euros per kilo."
          },
          {
            speaker: "Kundin",
            de: "Dann hätte ich gern zwei Kilo, bitte.",
            en: "Then I'd like two kilos, please."
          }
        ]
      },
      {
        title: "Choosing ripe fruit",
        lines: [
          {
            speaker: "Kunde",
            de: "Sind diese Erdbeeren schon reif?",
            en: "Are these strawberries ripe yet?"
          },
          {
            speaker: "Verkäuferin",
            de: "Ja, ganz frisch heute Morgen geliefert.",
            en: "Yes, delivered fresh just this morning."
          },
          {
            speaker: "Kunde",
            de: "Perfekt, ich nehme eine Schale.",
            en: "Perfect, I'll take a punnet."
          }
        ]
      }
    ]
  },
  {
    id: "vegetables",
    category: "daily",
    icon: "🥕",
    en: "Vegetables",
    de: "Gemüse",
    tagline: "Potatoes, onions, salad",
    number: "45",
    vocab: [
      {
        de: "das Gemüse",
        en: "the vegetables"
      },
      {
        de: "die Kartoffel",
        en: "the potato"
      },
      {
        de: "die Zwiebel",
        en: "the onion"
      },
      {
        de: "die Karotte",
        en: "the carrot"
      },
      {
        de: "der Salat",
        en: "the lettuce/salad"
      },
      {
        de: "die Tomate",
        en: "the tomato"
      },
      {
        de: "die Gurke",
        en: "the cucumber"
      },
      {
        de: "der Paprika",
        en: "the bell pepper"
      },
      {
        de: "der Knoblauch",
        en: "the garlic"
      },
      {
        de: "frisch",
        en: "fresh"
      },
      {
        de: "roh",
        en: "raw"
      },
      {
        de: "gekocht",
        en: "cooked"
      },
      {
        de: "schneiden",
        en: "to cut/chop"
      },
      {
        de: "die Waage",
        en: "the scale"
      },
      {
        de: "Bio-Gemüse",
        en: "organic vegetables"
      },
      {
        de: "der Brokkoli",
        en: "the broccoli"
      },
      {
        de: "der Blumenkohl",
        en: "the cauliflower"
      },
      {
        de: "die Aubergine",
        en: "the eggplant"
      },
      {
        de: "der Kürbis",
        en: "the pumpkin"
      },
      {
        de: "der Spinat",
        en: "the spinach"
      },
      {
        de: "die Bohne",
        en: "the bean"
      },
      {
        de: "die Erbse",
        en: "the pea"
      },
      {
        de: "der Mais",
        en: "the corn"
      },
      {
        de: "die Zucchini",
        en: "the zucchini"
      },
      {
        de: "der Pilz",
        en: "the mushroom"
      },
      {
        de: "die Petersilie",
        en: "the parsley"
      }
    ],
    dialogues: [
      {
        title: "Buying vegetables",
        lines: [
          {
            speaker: "Kunde",
            de: "Ich brauche noch Kartoffeln und Zwiebeln.",
            en: "I still need potatoes and onions."
          },
          {
            speaker: "Verkäuferin",
            de: "Die Kartoffeln sind da drüben, im Netz.",
            en: "The potatoes are over there, in the net bag."
          },
          {
            speaker: "Kunde",
            de: "Danke, und wo finde ich Bio-Gemüse?",
            en: "Thanks, and where can I find organic vegetables?"
          },
          {
            speaker: "Verkäuferin",
            de: "Ganz hinten, im letzten Regal.",
            en: "All the way in the back, on the last shelf."
          }
        ]
      },
      {
        title: "Cooking together",
        lines: [
          {
            speaker: "Partner",
            de: "Kannst du die Gurke schneiden?",
            en: "Can you cut the cucumber?"
          },
          {
            speaker: "Partnerin",
            de: "Klar, brauchst du auch die Tomaten geschnitten?",
            en: "Sure, do you need the tomatoes cut too?"
          },
          {
            speaker: "Partner",
            de: "Ja, bitte, für den Salat.",
            en: "Yes, please, for the salad."
          }
        ]
      }
    ]
  },
  {
    id: "meat-fish",
    category: "daily",
    icon: "🥩",
    en: "Meat / Fish",
    de: "Fleisch / Fisch",
    tagline: "Butcher counter, dinner choices",
    number: "46",
    vocab: [
      {
        de: "das Fleisch",
        en: "the meat"
      },
      {
        de: "der Fisch",
        en: "the fish"
      },
      {
        de: "das Hähnchen",
        en: "the chicken"
      },
      {
        de: "das Rindfleisch",
        en: "the beef"
      },
      {
        de: "das Schweinefleisch",
        en: "the pork"
      },
      {
        de: "die Wurst",
        en: "the sausage"
      },
      {
        de: "die Metzgerei",
        en: "the butcher shop"
      },
      {
        de: "der Metzger / die Metzgerin",
        en: "the butcher"
      },
      {
        de: "das Hackfleisch",
        en: "the ground meat"
      },
      {
        de: "gebraten",
        en: "fried/roasted"
      },
      {
        de: "gegrillt",
        en: "grilled"
      },
      {
        de: "die Portion",
        en: "the portion"
      },
      {
        de: "durchgebraten",
        en: "well done (cooked through)"
      },
      {
        de: "roh",
        en: "raw"
      },
      {
        de: "Wie hätten Sie es gern?",
        en: "How would you like it?"
      },
      {
        de: "der Lachs",
        en: "the salmon"
      },
      {
        de: "der Thunfisch",
        en: "the tuna"
      },
      {
        de: "die Garnele",
        en: "the shrimp"
      },
      {
        de: "das Lammfleisch",
        en: "the lamb"
      },
      {
        de: "das Putenfleisch",
        en: "the turkey meat"
      },
      {
        de: "die Bratwurst",
        en: "the grilled sausage"
      },
      {
        de: "der Schinken",
        en: "the ham"
      },
      {
        de: "das Filet",
        en: "the fillet"
      },
      {
        de: "mariniert",
        en: "marinated"
      },
      {
        de: "die Haut",
        en: "the skin"
      }
    ],
    dialogues: [
      {
        title: "At the butcher counter",
        lines: [
          {
            speaker: "Kundin",
            de: "Ich hätte gern 500 Gramm Hackfleisch, bitte.",
            en: "I'd like 500 grams of ground meat, please."
          },
          {
            speaker: "Metzger",
            de: "Rind oder gemischt?",
            en: "Beef or mixed?"
          },
          {
            speaker: "Kundin",
            de: "Gemischt, bitte.",
            en: "Mixed, please."
          },
          {
            speaker: "Metzger",
            de: "Sonst noch etwas?",
            en: "Anything else?"
          }
        ]
      },
      {
        title: "Choosing dinner",
        lines: [
          {
            speaker: "Partner",
            de: "Sollen wir heute Fisch oder Hähnchen machen?",
            en: "Should we make fish or chicken today?"
          },
          {
            speaker: "Partnerin",
            de: "Fisch, glaube ich, das haben wir lange nicht gehabt.",
            en: "Fish, I think, we haven't had that in a while."
          },
          {
            speaker: "Partner",
            de: "Gute Idee, ich grille ihn draußen.",
            en: "Good idea, I'll grill it outside."
          }
        ]
      }
    ]
  },
  {
    id: "snacks-sweets",
    category: "daily",
    icon: "🍫",
    en: "Snacks / Sweets",
    de: "Snacks / Süßigkeiten",
    tagline: "Chocolate, chips, ice cream",
    number: "47",
    vocab: [
      {
        de: "die Süßigkeiten",
        en: "the sweets/candy"
      },
      {
        de: "die Schokolade",
        en: "the chocolate"
      },
      {
        de: "die Chips",
        en: "the chips"
      },
      {
        de: "das Eis",
        en: "the ice cream"
      },
      {
        de: "der Keks",
        en: "the cookie"
      },
      {
        de: "die Nüsse",
        en: "the nuts"
      },
      {
        de: "der Snack",
        en: "the snack"
      },
      {
        de: "naschen",
        en: "to snack/nibble on sweets"
      },
      {
        de: "die Tüte Chips",
        en: "the bag of chips"
      },
      {
        de: "das Gummibärchen",
        en: "the gummy bear"
      },
      {
        de: "süß",
        en: "sweet"
      },
      {
        de: "salzig",
        en: "salty"
      },
      {
        de: "Lust auf etwas Süßes?",
        en: "Craving something sweet?"
      },
      {
        de: "die Waffel",
        en: "the waffle/wafer"
      },
      {
        de: "knabbern",
        en: "to nibble/munch"
      },
      {
        de: "der Lolli",
        en: "the lollipop"
      },
      {
        de: "der Riegel",
        en: "the candy bar"
      },
      {
        de: "das Popcorn",
        en: "the popcorn"
      },
      {
        de: "der Kaugummi",
        en: "the chewing gum"
      },
      {
        de: "der Pudding",
        en: "the pudding"
      },
      {
        de: "die Bonbons",
        en: "the candies"
      },
      {
        de: "ungesund",
        en: "unhealthy"
      },
      {
        de: "gesund",
        en: "healthy"
      },
      {
        de: "verlockend",
        en: "tempting"
      },
      {
        de: "zunehmen",
        en: "to gain weight"
      },
      {
        de: "die Nascherei",
        en: "the treat/snack"
      }
    ],
    dialogues: [
      {
        title: "Craving something sweet",
        lines: [
          {
            speaker: "Freundin",
            de: "Ich habe total Lust auf etwas Süßes.",
            en: "I'm really craving something sweet."
          },
          {
            speaker: "Freund",
            de: "Wir haben noch Schokolade im Schrank.",
            en: "We still have chocolate in the cupboard."
          },
          {
            speaker: "Freundin",
            de: "Perfekt, genau das brauche ich jetzt.",
            en: "Perfect, that's exactly what I need right now."
          }
        ]
      },
      {
        title: "Buying ice cream",
        lines: [
          {
            speaker: "Kind",
            de: "Können wir bitte ein Eis kaufen?",
            en: "Can we please buy an ice cream?"
          },
          {
            speaker: "Vater",
            de: "Klar, welche Sorte möchtest du?",
            en: "Sure, which flavor would you like?"
          },
          {
            speaker: "Kind",
            de: "Schokolade, bitte!",
            en: "Chocolate, please!"
          }
        ]
      }
    ]
  },
  {
    id: "health-feeling-sick",
    category: "daily",
    icon: "🤒",
    en: "Health / Feeling Sick",
    de: "Gesundheit / Krankheit",
    tagline: "\"I have a headache\"",
    number: "48",
    vocab: [
      {
        de: "die Gesundheit",
        en: "health"
      },
      {
        de: "krank sein",
        en: "to be sick"
      },
      {
        de: "die Kopfschmerzen",
        en: "the headache"
      },
      {
        de: "die Bauchschmerzen",
        en: "the stomachache"
      },
      {
        de: "die Halsschmerzen",
        en: "the sore throat"
      },
      {
        de: "der Husten",
        en: "the cough"
      },
      {
        de: "der Schnupfen",
        en: "the runny nose"
      },
      {
        de: "sich schlecht fühlen",
        en: "to feel unwell"
      },
      {
        de: "sich erkälten",
        en: "to catch a cold"
      },
      {
        de: "die Schmerzen",
        en: "the pain"
      },
      {
        de: "gute Besserung",
        en: "get well soon"
      },
      {
        de: "ausruhen",
        en: "to rest"
      },
      {
        de: "die Tablette nehmen",
        en: "to take a pill"
      },
      {
        de: "müde und schwach",
        en: "tired and weak"
      },
      {
        de: "Was fehlt dir?",
        en: "What's wrong with you?"
      },
      {
        de: "die Übelkeit",
        en: "the nausea"
      },
      {
        de: "der Schwindel",
        en: "the dizziness"
      },
      {
        de: "die Grippe",
        en: "the flu"
      },
      {
        de: "der Notarzt",
        en: "the emergency doctor"
      },
      {
        de: "die Verletzung",
        en: "the injury"
      },
      {
        de: "sich verletzen",
        en: "to get injured"
      },
      {
        de: "die Erschöpfung",
        en: "the exhaustion"
      },
      {
        de: "der Krankenwagen",
        en: "the ambulance"
      },
      {
        de: "gesund werden",
        en: "to get better/recover"
      },
      {
        de: "das Fieber",
        en: "the fever"
      }
    ],
    dialogues: [
      {
        title: "Feeling unwell",
        lines: [
          {
            speaker: "Kollegin",
            de: "Du siehst blass aus. Was fehlt dir?",
            en: "You look pale. What's wrong?"
          },
          {
            speaker: "Kollege",
            de: "Ich habe seit heute Morgen Kopfschmerzen.",
            en: "I've had a headache since this morning."
          },
          {
            speaker: "Kollegin",
            de: "Solltest du vielleicht nach Hause gehen?",
            en: "Maybe you should go home?"
          },
          {
            speaker: "Kollege",
            de: "Ja, ich glaube, das wäre besser.",
            en: "Yes, I think that would be better."
          }
        ]
      },
      {
        title: "Wishing someone well",
        lines: [
          {
            speaker: "Freundin",
            de: "Ich habe gehört, du bist erkältet.",
            en: "I heard you have a cold."
          },
          {
            speaker: "Freund",
            de: "Ja, leider, mit Husten und Schnupfen.",
            en: "Yes, unfortunately, with a cough and runny nose."
          },
          {
            speaker: "Freundin",
            de: "Gute Besserung! Ruh dich gut aus.",
            en: "Get well soon! Rest up well."
          }
        ]
      }
    ]
  },
  {
    id: "payments-cash-card",
    category: "daily",
    icon: "💳",
    en: "Payments / Cash / Card",
    de: "Bezahlen / Bargeld / Karte",
    tagline: "\"Cash or card?\"",
    number: "49",
    vocab: [
      {
        de: "bezahlen",
        en: "to pay"
      },
      {
        de: "das Bargeld",
        en: "the cash"
      },
      {
        de: "die Karte",
        en: "the card"
      },
      {
        de: "Bar oder Karte?",
        en: "Cash or card?"
      },
      {
        de: "kontaktlos bezahlen",
        en: "to pay contactless"
      },
      {
        de: "die PIN eingeben",
        en: "to enter the PIN"
      },
      {
        de: "der Kassenbon",
        en: "the receipt"
      },
      {
        de: "das Wechselgeld",
        en: "the change"
      },
      {
        de: "abgelehnt (Karte)",
        en: "declined (card)"
      },
      {
        de: "der Kleingeld",
        en: "the small change/coins"
      },
      {
        de: "zusammen bezahlen",
        en: "to pay together"
      },
      {
        de: "getrennt bezahlen",
        en: "to pay separately"
      },
      {
        de: "das Trinkgeld",
        en: "the tip"
      },
      {
        de: "Nehmen Sie Karten?",
        en: "Do you accept cards?"
      },
      {
        de: "abbuchen",
        en: "to charge/debit"
      },
      {
        de: "die Geldbörse",
        en: "the wallet"
      },
      {
        de: "das Portemonnaie",
        en: "the purse/wallet"
      },
      {
        de: "die Münze",
        en: "the coin"
      },
      {
        de: "der Geldschein",
        en: "the banknote"
      },
      {
        de: "die Ratenzahlung",
        en: "the installment payment"
      },
      {
        de: "akzeptieren",
        en: "to accept"
      },
      {
        de: "die Zahlungsmethode",
        en: "the payment method"
      },
      {
        de: "die Zahlung",
        en: "the payment"
      },
      {
        de: "der Betrag",
        en: "the amount"
      },
      {
        de: "die Kreditkarte",
        en: "the credit card"
      }
    ],
    dialogues: [
      {
        title: "Choosing payment method",
        lines: [
          {
            speaker: "Kassiererin",
            de: "Bar oder Karte?",
            en: "Cash or card?"
          },
          {
            speaker: "Kunde",
            de: "Mit Karte, bitte, kontaktlos.",
            en: "By card, please, contactless."
          },
          {
            speaker: "Kassiererin",
            de: "Gerne, das hat funktioniert. Kassenbon?",
            en: "Sure, that worked. Receipt?"
          },
          {
            speaker: "Kunde",
            de: "Nein danke, brauche ich nicht.",
            en: "No thanks, I don't need one."
          }
        ]
      },
      {
        title: "Card declined",
        lines: [
          {
            speaker: "Kellner",
            de: "Es tut mir leid, die Karte wurde abgelehnt.",
            en: "I'm sorry, the card was declined."
          },
          {
            speaker: "Gast",
            de: "Oh, wirklich? Ich versuche es nochmal.",
            en: "Oh, really? I'll try again."
          },
          {
            speaker: "Kellner",
            de: "Kein Problem, oder haben Sie Bargeld dabei?",
            en: "No problem, or do you have cash with you?"
          }
        ]
      }
    ]
  },
  {
    id: "receipt-invoice",
    category: "daily",
    icon: "🧾",
    en: "Receipt / Invoice",
    de: "Quittung / Rechnung",
    tagline: "Getting a receipt for returns",
    number: "50",
    vocab: [
      {
        de: "die Quittung",
        en: "the receipt"
      },
      {
        de: "die Rechnung",
        en: "the invoice/bill"
      },
      {
        de: "der Kassenbon",
        en: "the till receipt"
      },
      {
        de: "zurückgeben",
        en: "to return (an item)"
      },
      {
        de: "umtauschen",
        en: "to exchange"
      },
      {
        de: "das Rückgaberecht",
        en: "the right of return"
      },
      {
        de: "die Garantie",
        en: "the warranty"
      },
      {
        de: "das Original",
        en: "the original (item/copy)"
      },
      {
        de: "erstatten",
        en: "to refund"
      },
      {
        de: "die Erstattung",
        en: "the refund"
      },
      {
        de: "aufbewahren",
        en: "to keep/save"
      },
      {
        de: "Ich möchte das umtauschen.",
        en: "I'd like to exchange this."
      },
      {
        de: "Haben Sie die Quittung noch?",
        en: "Do you still have the receipt?"
      },
      {
        de: "defekt",
        en: "defective"
      },
      {
        de: "der Beleg",
        en: "the proof of purchase"
      },
      {
        de: "der Kaufbeleg",
        en: "the proof of purchase"
      },
      {
        de: "die Rücksendung",
        en: "the return shipment"
      },
      {
        de: "die Reklamation",
        en: "the complaint/claim"
      },
      {
        de: "reklamieren",
        en: "to file a complaint"
      },
      {
        de: "innerhalb von",
        en: "within (a time period)"
      },
      {
        de: "die Rechnungsnummer",
        en: "the invoice number"
      },
      {
        de: "bar erstatten",
        en: "to refund in cash"
      },
      {
        de: "gutschreiben",
        en: "to credit"
      },
      {
        de: "die Gutschrift",
        en: "the credit note"
      },
      {
        de: "der Kunde / die Kundin",
        en: "the customer"
      }
    ],
    dialogues: [
      {
        title: "Returning an item",
        lines: [
          {
            speaker: "Kundin",
            de: "Ich möchte diesen Pullover zurückgeben, er ist zu klein.",
            en: "I'd like to return this sweater, it's too small."
          },
          {
            speaker: "Verkäufer",
            de: "Haben Sie die Quittung noch?",
            en: "Do you still have the receipt?"
          },
          {
            speaker: "Kundin",
            de: "Ja, hier ist sie.",
            en: "Yes, here it is."
          },
          {
            speaker: "Verkäufer",
            de: "Gut, möchten Sie umtauschen oder eine Erstattung?",
            en: "Good, would you like to exchange it or get a refund?"
          }
        ]
      },
      {
        title: "Defective product",
        lines: [
          {
            speaker: "Kunde",
            de: "Dieses Gerät ist leider defekt.",
            en: "This device is unfortunately defective."
          },
          {
            speaker: "Verkäuferin",
            de: "Das tut mir leid. Haben Sie noch Garantie?",
            en: "I'm sorry to hear that. Do you still have warranty?"
          },
          {
            speaker: "Kunde",
            de: "Ja, ich habe es vor zwei Monaten gekauft.",
            en: "Yes, I bought it two months ago."
          },
          {
            speaker: "Verkäuferin",
            de: "Dann tauschen wir es kostenlos um.",
            en: "Then we'll exchange it free of charge."
          }
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
