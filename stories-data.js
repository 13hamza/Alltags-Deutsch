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
  { id: "ALL", label: "A1 & A2", sublabel: "All" },
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
  },
  {
    id: "der-verlorene-schluessel",
    level: "A2",
    icon: "🔑",
    number: "01",
    title: { de: "Der verlorene Schlüssel", en: "The Lost Key" },
    tagline: "Nina kommt spät nach Hause und findet ihren Schlüssel nicht mehr.",
    taglineEn: "Nina comes home late and can't find her key anymore.",
    paragraphs: [
      "Nina arbeitet seit drei Jahren als Krankenschwester in einem großen Krankenhaus. An diesem Abend hat sie eine Doppelschicht gearbeitet und ist erst kurz vor Mitternacht mit dem letzten Bus nach Hause gefahren. Sie ist so müde, dass sie kaum noch geradeaus denken kann.",
      "Vor ihrer Wohnungstür angekommen, sucht sie in ihrer Handtasche nach dem Schlüssel. Sie durchsucht jede Tasche, jedes Fach, sogar die kleine Innentasche, in der sie sonst nie etwas verliert. Der Schlüssel ist weg.",
      "Zuerst wird Nina nervös, dann ärgert sie sich über sich selbst. Sie erinnert sich, dass sie den Schlüssel am Morgen noch benutzt hat, um die Tür abzuschließen. Seitdem war sie im Krankenhaus, in der Kantine und kurz im Park, um frische Luft zu schnappen.",
      "Weil es schon nach Mitternacht ist, möchte sie niemanden mehr anrufen. Trotzdem entscheidet sie sich, ihre Nachbarin Frau Keller zu wecken, die einen Ersatzschlüssel für Notfälle besitzt. Frau Keller öffnet verschlafen die Tür und lächelt, als sie Nina sieht.",
      "'Das ist mir letztes Jahr auch passiert', sagt Frau Keller und gibt ihr den Ersatzschlüssel. Gemeinsam gehen sie noch einmal den Weg zum Bus zurück, und tatsächlich liegt der Schlüssel auf einer Bank im Park, genau dort, wo Nina kurz gesessen hatte.",
      "Am nächsten Tag bringt Nina ihrer Nachbarin als Dankeschön ein Stück selbstgebackenen Kuchen vorbei. Seitdem lässt sie einen zweiten Ersatzschlüssel bei Frau Keller, nur für den Fall, dass es noch einmal passiert."
    ]
  },
  {
    id: "ein-wochenende-auf-dem-land",
    level: "A2",
    icon: "🚜",
    number: "02",
    title: { de: "Ein Wochenende auf dem Land", en: "A Weekend in the Countryside" },
    tagline: "Tobias besucht seinen Onkel auf dem Bauernhof und lernt ein neues Leben kennen.",
    taglineEn: "Tobias visits his uncle's farm and discovers a whole new way of life.",
    paragraphs: [
      "Tobias wohnt sein ganzes Leben in der Großstadt und kennt das Landleben nur aus Büchern. Als sein Onkel Werner ihn zu einem Wochenende auf seinem Bauernhof einlädt, zögert er zuerst, weil er lieber mit Freunden ins Kino gehen würde. Am Ende packt er trotzdem seine Tasche.",
      "Schon am ersten Morgen weckt ihn der Hahn um halb sechs. Tobias ist überhaupt nicht daran gewöhnt, so früh aufzustehen, aber sein Onkel lacht nur und sagt: 'Auf dem Land steht man mit den Tieren auf, nicht mit dem Wecker.'",
      "Zusammen füttern sie die Hühner, melken die Kühe und sammeln frische Eier aus dem Stall. Tobias ist überrascht, wie viel Arbeit hinter einem einfachen Frühstück steckt. Er lernt, dass Milch nicht einfach im Supermarkt entsteht.",
      "Am Nachmittag hilft er seinem Onkel im Gemüsegarten. Sie graben Kartoffeln aus der Erde und pflücken reife Tomaten. Die Arbeit ist anstrengend, aber Tobias fühlt sich zum ersten Mal seit Langem richtig entspannt, weil er sein Handy den ganzen Tag nicht angeschaut hat.",
      "Am Abend sitzen sie zusammen vor dem Haus, essen selbstgemachtes Brot mit Käse und schauen dem Sonnenuntergang zu. Sein Onkel erzählt Geschichten aus seiner Kindheit auf demselben Hof. Der Himmel ist voller Sterne, wie Tobias sie in der Stadt nie sieht.",
      "Als er am Sonntagabend wieder in seine Wohnung zurückkommt, fühlt sich alles ein bisschen zu laut und zu hell an. Tobias beschließt, seinen Onkel bald wieder zu besuchen — vielleicht sogar für eine ganze Woche im Sommer."
    ]
  },
  {
    id: "das-vorstellungsgespraech",
    level: "A2",
    icon: "💼",
    number: "03",
    title: { de: "Das Vorstellungsgespräch", en: "The Job Interview" },
    tagline: "Julia ist sehr nervös vor ihrem ersten Vorstellungsgespräch nach dem Studium.",
    taglineEn: "Julia is very nervous before her first job interview after graduating.",
    paragraphs: [
      "Julia hat vor zwei Monaten ihr Studium abgeschlossen und seitdem viele Bewerbungen geschrieben. Endlich hat eine Firma geantwortet und sie zu einem Vorstellungsgespräch eingeladen. Seit drei Tagen kann sie an nichts anderes mehr denken.",
      "Am Abend vorher legt sie ihre Kleidung schon bereit und übt vor dem Spiegel, wie sie sich vorstellen möchte. Ihre beste Freundin ruft an und sagt: 'Du hast so hart dafür gearbeitet, jetzt musst du nur noch zeigen, wer du bist.'",
      "Am Morgen des Gesprächs wacht Julia viel zu früh auf, weil sie so aufgeregt ist. Sie trinkt einen starken Kaffee, obwohl ihr Magen schon nervös genug ist, und fährt eine ganze Stunde vor dem Termin los, um auf keinen Fall zu spät zu kommen.",
      "Im Wartezimmer der Firma sitzen noch zwei weitere Bewerber. Julias Hände zittern leicht, als ihr Name aufgerufen wird. Sie atmet tief durch und geht mit einem Lächeln ins Büro der Personalchefin.",
      "Das Gespräch dauert fast eine Stunde. Julia beantwortet jede Frage ruhig und ehrlich, auch wenn sie manchmal kurz überlegen muss. Am Ende fragt die Personalchefin, ob Julia noch Fragen habe, und Julia stellt drei kluge Fragen über das Team und die Projekte.",
      "Eine Woche später klingelt ihr Telefon. Es ist die Personalchefin: Julia hat die Stelle bekommen! Sie ruft sofort ihre Freundin an, die nur lacht und sagt: 'Ich habe es dir doch gesagt.'"
    ]
  },
  {
    id: "die-nachbarschaftshilfe",
    level: "A2",
    icon: "🤝",
    number: "04",
    title: { de: "Die Nachbarschaftshilfe", en: "The Neighborhood Help" },
    tagline: "Als Herr Novak sich das Bein bricht, hilft ihm die ganze Nachbarschaft.",
    taglineEn: "When Herr Novak breaks his leg, the whole neighborhood steps in to help.",
    paragraphs: [
      "Herr Novak wohnt seit über zwanzig Jahren allein in einer kleinen Wohnung im dritten Stock. Er ist über siebzig Jahre alt, aber noch sehr aktiv und geht jeden Tag mit seinem Hund spazieren. Eines Tages rutscht er auf einer vereisten Treppe aus und bricht sich das Bein.",
      "Nach einer Woche im Krankenhaus darf er endlich wieder nach Hause, aber mit einem Gipsbein kann er weder einkaufen noch die Treppe alleine hochgehen. Seine Tochter wohnt leider in einer anderen Stadt und kann nicht jeden Tag kommen.",
      "Die junge Familie aus dem ersten Stock hört von seinem Unfall und klopft an seine Tür. 'Wir helfen Ihnen gerne', sagt die Mutter. 'Sagen Sie uns einfach, was Sie brauchen.' Herr Novak ist gerührt, denn er kennt die Familie kaum.",
      "Von diesem Tag an organisieren die Nachbarn gemeinsam einen kleinen Plan: Jeden Montag bringt jemand Einkäufe vorbei, mittwochs geht ein Student mit seinem Hund spazieren, und am Wochenende kommt eine Nachbarin einfach zum Kaffeetrinken und Reden vorbei.",
      "Herr Novak, der früher dachte, moderne Nachbarn kümmern sich nicht mehr umeinander, ändert langsam seine Meinung. Er lernt sogar die Namen aller Kinder im Haus kennen und erzählt ihnen Geschichten aus seiner Jugend.",
      "Als sein Gips endlich abgenommen wird, lädt Herr Novak die ganze Nachbarschaft zu einem großen Fest im Hof ein. 'Ohne euch', sagt er mit Tränen in den Augen, 'wäre diese Zeit viel schwerer gewesen.'"
    ]
  },
  {
    id: "ein-unerwarteter-gast",
    level: "A2",
    icon: "🚪",
    number: "05",
    title: { de: "Ein unerwarteter Gast", en: "An Unexpected Guest" },
    tagline: "Mitten in der Nacht klopft jemand an Simons Tür.",
    taglineEn: "In the middle of the night, someone knocks on Simon's door.",
    paragraphs: [
      "Simon lebt allein in einem kleinen Haus am Rand der Stadt. Er arbeitet als Programmierer und verbringt die meisten Abende ruhig vor seinem Computer. An diesem Abend geht er früh ins Bett, weil er am nächsten Tag eine wichtige Präsentation halten muss.",
      "Gegen zwei Uhr nachts wacht er plötzlich auf. Jemand klopft laut an die Haustür. Simons Herz schlägt schnell, während er im Dunkeln zur Tür geht. Er fragt sich, wer um diese Uhrzeit noch zu Besuch kommen könnte.",
      "Vor der Tür steht eine junge Frau, nass vom Regen und völlig durchgefroren. 'Es tut mir so leid, Sie zu wecken', sagt sie zitternd, 'aber mein Auto hat eine Panne, und mein Handy hat keinen Akku mehr. Darf ich kurz Ihr Telefon benutzen?'",
      "Simon zögert einen Moment, aber die Frau wirkt ehrlich verzweifelt. Er lässt sie herein, gibt ihr eine warme Decke und eine Tasse Tee, während sie einen Abschleppdienst anruft. Sie erzählt, dass sie auf dem Weg zu ihrer kranken Mutter war.",
      "Eine halbe Stunde später kommt der Abschleppwagen. Die Frau bedankt sich herzlich bei Simon und will ihm Geld für den Tee geben, aber er lehnt lachend ab. 'Das war doch selbstverständlich', sagt er.",
      "Ein paar Tage später klingelt es wieder an Simons Tür — diesmal am helllichten Tag. Es ist dieselbe Frau, mit einem selbstgebackenen Kuchen in der Hand. 'Als Dankeschön', sagt sie lächelnd, und seitdem trinken die beiden jeden Sonntag zusammen Kaffee."
    ]
  },
  {
    id: "die-fahrradtour",
    level: "A2",
    icon: "🚴",
    number: "06",
    title: { de: "Die Fahrradtour", en: "The Bike Tour" },
    tagline: "Drei Freunde planen eine lange Fahrradtour entlang des Flusses — und es läuft nicht alles nach Plan.",
    taglineEn: "Three friends plan a long bike tour along the river — and not everything goes as planned.",
    paragraphs: [
      "Seit Wochen planen Leon, Mira und Paul eine Fahrradtour entlang des Flusses, die über drei Tage gehen soll. Sie haben eine Route ausgesucht, Zelte gepackt und genug Proviant für die ganze Reise eingekauft.",
      "Am ersten Tag läuft alles wie geplant. Die drei Freunde fahren durch grüne Wälder und kleine Dörfer, machen Pausen an schönen Aussichtspunkten und essen ihr Mittagessen am Ufer des Flusses. Die Stimmung ist gut, und alle freuen sich auf die nächsten Tage.",
      "Am zweiten Tag ändert sich das Wetter plötzlich. Dunkle Wolken ziehen auf, und kurz darauf beginnt es stark zu regnen. Die drei suchen schnell Schutz unter einer alten Brücke, aber ihre Zelte und Kleidung sind schon vollkommen durchnässt.",
      "'Vielleicht sollten wir in der nächsten Stadt eine Pension suchen', schlägt Mira vor, als der Regen nicht aufhört. Leon ist zuerst dagegen, weil er unbedingt draußen übernachten wollte, aber am Ende stimmt auch er zu, denn niemand möchte krank werden.",
      "In der kleinen Pension trocknen sie ihre Sachen und lachen über das ganze Abenteuer. Der Besitzer der Pension erzählt ihnen von einem geheimen Weg durch den Wald, der am nächsten Morgen viel schöner sein soll als die geplante Route.",
      "Am dritten Tag scheint wieder die Sonne. Die Freunde folgen dem Tipp des Besitzers und entdecken einen versteckten Wasserfall, den sie sonst nie gefunden hätten. Am Ende sind sich alle einig: Der Regen hat ihre Reise nicht ruiniert, sondern sogar noch besser gemacht."
    ]
  },
];

/* ---------- Word-by-word glossary (lowercase German -> English) ---------- */

const GLOSSARY = {
  "ab": "from now on", "abend": "evening", "aber": "but", "acht": "eight",
  "alle": "everyone / all", "allein": "alone", "als": "as", "alt": "old",
  "alte": "old", "alten": "old", "am": "at the / on the", "an": "at / on",
  "andere": "other", "anderen": "other (dative)", "anfänger": "beginner",
  "ankommst": "arrive", "anna": "anna", "ans": "to the (an + das)",
  "apfel": "apple", "arbeit": "work", "arbeitet": "works", "arm": "arm",
  "ast": "branch", "atmet": "breathes", "auch": "also", "auf": "on",
  "aufgeregt": "excited", "aufhängen": "to hang up",
  "aufräumen": "to tidy up", "augen": "eyes", "aus": "out of / from",
  "aushang": "notice / poster", "auto": "car", "backen": "to bake",
  "backt": "bakes", "badezimmer": "bathroom",
  "bahnangestellter": "railway employee", "bahnhof": "train station",
  "bahnsteig": "platform", "ballon": "balloon", "bank": "bench",
  "begeistert": "enthusiastic", "bei": "with / at", "beiden": "both",
  "bekommt": "gets", "bemerkt": "notices", "beobachtet": "watches",
  "berg": "mountain", "berger": "Berger (name)", "besuch": "visit",
  "besuchen": "to visit", "besucht": "visits", "bett": "bed",
  "bienen": "bees", "bildschirm": "screen", "bin": "am", "bindet": "ties",
  "bisschen": "a little bit", "bist": "are", "blaue": "blue",
  "bleiben": "remain", "bleibt": "remains", "blumen": "flowers",
  "blühen": "bloom", "brauner": "brown", "brille": "glasses",
  "bringt": "brings", "brot": "bread", "brunnen": "fountain / well",
  "bruno": "Bruno (name)", "brötchen": "rolls", "buch": "book",
  "bunte": "colorful", "busch": "bush", "bäcker": "baker",
  "bäckerei": "bakery", "bäckerin": "baker (female)", "bäckt": "bakes",
  "bäume": "trees", "büro": "office", "café": "café", "da": "there",
  "dabei": "while doing so", "dackel": "dachshund", "danach": "after that",
  "dank": "thank", "danke": "thanks", "dann": "then", "darf": "may",
  "das": "the / that", "deine": "your", "dem": "the (dative)",
  "den": "the (accusative/dative)", "denkt": "thinks", "der": "the",
  "dich": "you", "die": "the", "dienstag": "tuesday",
  "dienstagabend": "tuesday evening", "diese": "these / this",
  "diesem": "this (dative)", "dieser": "this", "dieses": "this",
  "dinge": "things", "direkt": "directly", "dorf": "village",
  "dort": "there", "draußen": "outside", "dritte": "third",
  "drückt": "presses", "du": "you", "durch": "through",
  "durchsucht": "searches through", "dörfer": "villages",
  "eigentlich": "actually", "ein": "a / an", "eine": "a / an",
  "einem": "a / an (dative)", "einen": "a", "einer": "one", "eines": "one",
  "einfach": "simply", "einfache": "simple", "einkaufen": "to shop",
  "einlädt": "invites", "einmal": "once", "eins": "one", "einst": "once",
  "emma": "emma", "endlich": "finally", "enkel": "grandson",
  "entdeckt": "discovers", "entfernt": "removes",
  "entschuldigung": "excuse me", "er": "he", "erklärt": "explains",
  "erkunden": "explore", "erleichtert": "relieved", "ersten": "first",
  "erzählt": "tells", "es": "it", "essen": "to eat", "etwas": "something",
  "fahren": "drive", "familie": "family", "fast": "almost",
  "fast food": "fast food", "feder": "feather", "felix": "felix",
  "fenster": "window", "fensterplatz": "window seat",
  "fernsehen": "to watch TV", "fest": "tightly", "findet": "finds",
  "flasche": "bottle", "folgt": "follows", "food": "food", "fragt": "asks",
  "frau": "woman / Mrs.", "freude": "joy", "freunde": "friends",
  "freundin": "friend (female)", "freundinnen": "friends (female)",
  "freundlich": "friendly", "freundliche": "friendly",
  "freundlicher": "friendlier", "freut": "is happy (freut sich)",
  "frische": "freshness", "früh": "early", "fund": "find / discovery",
  "fuß": "foot", "fährt": "drives / travels", "für": "for",
  "ganze": "whole", "garten": "garden", "gartenparty": "garden party",
  "gartenschere": "pruning shears", "gebrochen": "broken",
  "gebäude": "building", "gefallen": "to fall (gefallen)",
  "gefunden": "found", "gegangen": "gone", "geheim": "secret",
  "geheime": "secret", "geht": "goes", "gehört": "heard",
  "gekocht": "cooked", "gelbe": "yellow", "gelernt": "learned",
  "gelesen": "read", "gemacht": "made", "gemüse": "vegetables",
  "gemüsesuppe": "vegetable soup", "genau": "exactly", "gerade": "just",
  "geschenke": "gifts", "geschichte": "story", "geschlossen": "closed",
  "gestern": "yesterday", "gesund": "healthy", "getragen": "worn",
  "gibt": "gives", "gleis": "platform / track",
  "glück": "luck / happiness", "glücklich": "happy", "graue": "grey",
  "griff": "handle", "groß": "big / large", "große": "big",
  "großen": "big", "großmutter": "grandmother", "grüne": "green",
  "gut": "good", "gute": "good", "guten": "good", "habe": "have",
  "hals": "neck", "halt": "stop", "handschuhe": "gloves",
  "handy": "mobile phone", "hast": "have", "hat": "has", "haus": "house",
  "hause": "home", "hebt": "lifts", "hecke": "hedge", "heißt": "is called",
  "held": "hero", "helfen": "to help",
  "her": "toward here (hinter...her = after)", "herr": "Mr.",
  "hervorragend": "terrific", "heute": "today", "hilft": "helps",
  "hinein": "into", "hinter": "behind", "hoch": "high",
  "hoffmann": "Hoffmann (name)", "holt": "fetch", "holz": "wood",
  "hund": "dog", "hängt": "hangs", "hört": "hears", "ich": "i",
  "idee": "idea", "ihm": "him", "ihn": "him", "ihnen": "them",
  "ihr": "her", "ihre": "her", "ihren": "your",
  "ihrer": "her (dative/genitive)", "im": "in the", "immer": "always",
  "in": "in", "ins": "into the", "isst": "eats", "ist": "is", "ja": "yes",
  "jacke": "jacket", "jackentasche": "jacket pocket", "jahre": "years",
  "jede": "every", "jeden": "every", "jeder": "every", "jetzt": "now",
  "junge": "boy", "kaffee": "coffee", "kakao": "hot chocolate",
  "kann": "can", "kannst": "can", "karotten": "carrots", "katze": "cat",
  "kaufen": "to buy", "kauft": "buys", "kein": "no / not any",
  "kette": "chain", "kissen": "cushion", "kleine": "small",
  "kleinen": "small", "kleiner": "small", "kleines": "small",
  "klopft": "knocks", "kluge": "clever", "knarren": "creak",
  "knopf": "button", "koch": "cook", "kochen": "to cook",
  "kochkurs": "cooking class", "kocht": "cooks", "komm": "come",
  "kommt": "comes", "krankenhaus": "hospital", "krause": "Krause (name)",
  "kuchen": "cake", "kunde": "customer", "kunden": "customers",
  "kurs": "course", "küche": "kitchen", "lacht": "laughs",
  "land": "countryside", "landschaft": "landscape",
  "lange": "for a long time", "lauten": "loud", "lecker": "delicious",
  "leckeren": "delicious", "legen": "to put", "legt": "puts / places",
  "leise": "quietly", "lernen": "learn", "lernt": "learns",
  "lesen": "to read", "letzte": "last", "leuten": "people",
  "liebe": "dear (Liebe)", "lieber": "dear",
  "lieblingsort": "favorite place", "liebt": "loves", "liegt": "lies",
  "liest": "reads", "lila": "purple", "lobt": "praises",
  "lukas": "Lukas (name)", "lustige": "funny", "lächelt": "smiles",
  "lädt": "invites (lädt ... ein)", "läuft": "runs", "machen": "make",
  "macht": "makes / does", "mal": "just", "mama": "mother",
  "manchmal": "sometimes", "mann": "man", "marie": "Marie (name)",
  "max": "maximum", "mehr": "more", "meier": "Meier (name)", "mein": "my",
  "meine": "my", "melde": "registers", "meldet": "reports",
  "mensch": "human", "menschen": "people", "mia": "Mia (name)",
  "mias": "vies", "mich": "me", "minuten": "minutes", "mir": "me",
  "mit": "with", "mittagspause": "lunch break", "mitte": "center",
  "mitten": "in the middle", "montag": "Monday", "morgen": "morning",
  "morgens": "morning", "mund": "mouth", "muss": "must", "musst": "must",
  "mutter": "mother", "möchte": "would like", "nach": "after",
  "nachbarin": "neighbor (female)", "nachbarn": "neighbors",
  "nachdenken": "to think", "nachmittag": "afternoon",
  "nachricht": "message", "nachttisch": "nightstand", "neben": "next to",
  "nett": "nice", "netten": "nice", "neue": "new", "neuen": "new",
  "neues": "new", "neugierig": "curious", "nicht": "not", "nie": "never",
  "niemand": "no one", "nimmt": "takes", "noch": "still",
  "normalerweise": "normally", "nudeln": "noodles", "nächsten": "next",
  "nächster": "next", "näher": "closer", "oder": "or", "offenes": "open",
  "oft": "often", "oh": "oh", "ohne": "without", "packt": "packs",
  "papa": "dad", "paprika": "bell pepper", "paradies": "paradise",
  "park": "park", "party": "party", "passiert": "happens",
  "paul": "Paul (name)", "pfannkuchen": "pancakes", "pfeffer": "pepper",
  "pflanzt": "plants", "pizza": "pizza", "plötzlich": "suddenly",
  "problem": "problem", "redet": "talks", "regenschirm": "umbrella",
  "regenschirme": "umbrellas", "regentag": "rainy day", "regnet": "rains",
  "reise": "journey", "reisender": "traveler", "rennen": "run",
  "rennt": "runs", "rezept": "recipe", "rezepte": "recipes",
  "richtige": "right / correct", "richtigen": "correct",
  "richtiger": "more correct", "riecht": "smells", "rose": "rose",
  "rosen": "roses", "rosten": "rusty", "rostigen": "rusty", "rote": "red",
  "roten": "red", "rotes": "red", "rucksack": "backpack", "rufe": "shout",
  "ruft": "calls (ruft ... an = calls up)", "sagen": "to say",
  "sagt": "says", "salat": "salad", "salz": "salt", "sammelt": "collects",
  "samstag": "Saturday", "samstagmorgen": "saturday morning",
  "sarah": "Sarah (name)", "schau": "look", "schaut": "looks",
  "schenkt": "gives", "schirm": "umbrella", "schlimm": "terrible",
  "schmeckt": "tastes", "schmetterlinge": "butterflies",
  "schmidt": "Schmidt (name)", "schneidet": "cuts", "schnell": "quickly",
  "schnur": "string", "schokolade": "chocolate",
  "schokoladenkuchen": "chocolate cake", "schon": "already",
  "schreiben": "to write", "schreibt": "writes", "schublade": "drawer",
  "schubladen": "drawers", "schult": "teaches", "schwarz": "black",
  "schweiz": "Switzerland", "schweizer": "Swiss", "schwer": "heavy",
  "schwester": "sister", "schön": "nice / beautiful",
  "schönen": "nice / beautiful", "schöner": "more beautiful",
  "see": "lake", "seh": "see (ich seh)", "sehen": "to see", "sehr": "very",
  "sein": "his / to be", "seine": "his", "seinem": "his",
  "seinen": "his (accusative)", "seiner": "his (dative)", "seit": "since",
  "selbst": "self", "sessel": "armchair", "setzt": "sets / sits",
  "sich": "herself / himself", "sie": "she / they", "sieht": "sees",
  "sind": "are", "sitzt": "sits", "so": "so", "sofa": "sofa",
  "sofort": "immediately", "sogar": "even", "sonne": "sun",
  "sonnenblumen": "sunflowers", "sonnenuntergang": "sunset",
  "sonnig": "sunny", "sonnigen": "sunny", "sonst": "otherwise / usually",
  "sorgen": "care for", "soße": "sauce", "spazieren": "to stroll",
  "spielt": "plays", "springt": "jumps", "spät": "late", "stadt": "city",
  "stattdessen": "instead", "stehen": "to stand", "steht": "stands",
  "steigt": "rises", "stellt": "places / sets", "stimme": "voice",
  "stock": "stick", "stoff": "fabric", "stolz": "proud",
  "straße": "street", "student": "student", "stunden": "hours",
  "stück": "piece", "stühle": "chairs", "sucht": "looks for",
  "suppe": "soup", "süß": "sweet", "süßes": "sweet", "tag": "day",
  "tages": "day", "talent": "talent", "tasche": "bag / pocket",
  "tasse": "cup", "telefon": "telephone", "tief": "deep", "tisch": "table",
  "tochter": "daughter", "topf": "pot", "traurig": "sad",
  "treffen": "to meet", "treppe": "stairs", "treppenhaus": "stairwell",
  "trifft": "meets", "trinkt": "drinks", "trotzdem": "anyway / still",
  "trägt": "carries / wears", "tür": "door", "tüte": "bag (paper)",
  "tüten": "bags", "uhr": "clock / o'clock", "um": "around / at",
  "umarmt": "hugs", "und": "and", "uni": "university", "unkraut": "weeds",
  "unser": "our", "unter": "under", "vater": "father",
  "veilchen": "violets", "verlieren": "to lose", "verliert": "loses",
  "verloren": "lost", "verlorene": "lost", "verschiedenen": "different",
  "verschwinden": "disappear", "verschwindet": "disappears",
  "verschwunden": "disappeared", "versteckt": "hidden",
  "versteckte": "hid", "verzweifelt": "desperate", "viel": "much",
  "viele": "many", "vielen": "many",
  "volkshochschule": "adult education center", "voll": "full",
  "von": "from", "vor": "in front of / before", "vorher": "before",
  "vorsichtig": "carefully", "vögel": "birds", "wachsen": "to grow",
  "wacht": "wakes", "wagner": "Wagner (name)", "wand": "wall",
  "wann": "when", "war": "was", "wartet": "waits", "warum": "why",
  "wasser": "water", "weckt": "wakes up", "weg": "away", "weil": "because",
  "weinen": "to cry", "weit": "far", "weiter": "continues to",
  "weiß": "knows", "wem": "whom", "wenig": "few", "wenn": "if",
  "wer": "who", "wie": "how", "wieder": "again", "wiese": "meadow",
  "wiesen": "meadows", "wild": "wild", "wilder": "savage", "will": "wants",
  "winkt": "waves", "wir": "we", "wissen": "know", "woche": "week",
  "wohnen": "to live", "wohnt": "lives", "wohnung": "apartment",
  "wohnzimmer": "living room", "wunderbar": "wonderful",
  "wunderschön": "beautiful", "wunderschönen": "beautiful",
  "wunderschöner": "more beautiful", "wächst": "grows", "würzt": "seasons",
  "zehn": "ten", "zeigt": "shows", "zeit": "time", "zettel": "note",
  "ziehen": "to move", "zieht": "moves", "zimmer": "room", "zu": "to",
  "zug": "train", "zugticket": "train ticket", "zum": "to the",
  "zur": "to the", "zurück": "back", "zusammen": "together", "zwei": "two",
  "zwiebeln": "onions", "ältere": "older", "äste": "branches",
  "öffnet": "opens", "öfter": "more often", "über": "about / over",
  "überall": "everywhere",

  /* ---------- A2 stories vocabulary ---------- */
  "abende": "evenings", "abenteuer": "adventure",
  "abgenommen": "taken off / removed",
  "abgeschlossen": "completed / finished",
  "abschleppdienst": "towing service", "abschleppwagen": "tow truck",
  "abzuschließen": "to lock (up)", "akku": "battery", "aktiv": "active",
  "alleine": "alone", "aller": "of all / everyone's", "alles": "everything",
  "anderes": "other / something else", "angekommen": "arrived",
  "angeschaut": "looked at", "anrufen": "to call (phone)",
  "anruft": "calls (phone)", "anstrengend": "strenuous / tiring",
  "aufgerufen": "called out", "aufhört": "stops", "aufzustehen": "to get up",
  "ausgesucht": "chosen / picked out", "aussichtspunkten": "viewpoints",
  "bald": "soon", "bauernhof": "farm", "beantwortet": "answers",
  "bedankt": "thanks (sich bedanken)", "beginnt": "begins", "bein": "leg",
  "bekommen": "to get / receive", "benutzen": "to use", "benutzt": "uses",
  "bereit": "ready", "beschließt": "decides", "besitzer": "owner",
  "besitzers": "owner's", "besitzt": "owns", "besser": "better",
  "beste": "best", "bewerber": "applicants", "bewerbungen": "applications",
  "brauchen": "to need", "bricht": "breaks", "brücke": "bridge",
  "bus": "bus", "büchern": "books", "computer": "computer",
  "dachte": "thought", "dafür": "for it / for that", "dagegen": "against it",
  "dankeschön": "thank you / thanks", "daran": "of it / about it",
  "darauf": "after that / on it", "dass": "that (conjunction)",
  "dauert": "lasts", "decke": "blanket", "demselben": "the same (dative)",
  "denken": "to think", "denn": "because / for", "des": "the (genitive)",
  "dieselbe": "the same (feminine)", "diesmal": "this time", "dir": "to you",
  "doch": "after all / still", "doppelschicht": "double shift",
  "drei": "three", "dritten": "third",
  "dunkeln": "dark (im Dunkeln = in the dark)", "dunkle": "dark",
  "durchgefroren": "frozen through / chilled to the bone",
  "durchnässt": "soaked", "ehrlich": "honest", "eier": "eggs",
  "einfachen": "simple", "eingekauft": "bought / shopped",
  "eingeladen": "invited", "einig": "agreed / in agreement",
  "einkäufe": "purchases / shopping", "ende": "end",
  "entdecken": "to discover", "entlang": "along", "entscheidet": "decides",
  "entspannt": "relaxed", "entsteht": "arises / is created",
  "erde": "earth / soil", "erinnert": "remembers",
  "ersatzschlüssel": "spare key", "erst": "only / not until",
  "euch": "you (plural, accusative/dative)", "fach": "compartment",
  "fahrradtour": "bike tour", "fall": "case", "firma": "company",
  "flusses": "river's (genitive)", "folgen": "to follow",
  "frage": "question", "fragen": "questions / to ask",
  "freuen": "to be happy / look forward to", "freunden": "friends (dative)",
  "früher": "earlier / in the past", "frühstück": "breakfast",
  "fühlt": "feels", "füttern": "to feed", "ganzen": "whole / entire",
  "ganzes": "whole / entire", "geantwortet": "answered",
  "gearbeitet": "worked", "geben": "to give",
  "gefahren": "driven / traveled", "gegen": "against / around (time)",
  "geheimen": "secret", "gehen": "to go", "geld": "money",
  "gemeinsam": "together", "gemüsegarten": "vegetable garden",
  "genug": "enough", "gepackt": "packed", "geplant": "planned",
  "geplante": "planned", "geradeaus": "straight ahead", "gerne": "gladly",
  "gerührt": "touched (emotionally)", "gesagt": "said",
  "geschichten": "stories", "geschrieben": "written", "gesessen": "sat",
  "gespräch": "conversation", "gesprächs": "conversation's (genitive)",
  "gewesen": "been", "gewöhnt": "used to / accustomed",
  "gips": "cast (plaster)", "gipsbein": "leg in a cast", "graben": "to dig",
  "großstadt": "big city", "haben": "to have", "hahn": "rooster",
  "halb": "half", "halbe": "half", "halten": "to hold / to give (a talk)",
  "hand": "hand", "handtasche": "handbag", "hart": "hard", "hatte": "had",
  "haustür": "front door", "hell": "bright / light",
  "helllichten": "broad (am helllichten Tag = in broad daylight)",
  "herein": "in / inside", "herz": "heart", "herzlich": "warmly",
  "himmel": "sky", "hochgehen": "to go up", "hof": "yard / farmyard",
  "hände": "hands", "hätten": "would have", "hühner": "chickens",
  "innentasche": "inside pocket", "jahr": "year", "jahren": "years",
  "jedes": "each / every", "jemand": "someone", "jugend": "youth",
  "julia": "Julia (name)", "julias": "Julia's",
  "kaffeetrinken": "coffee drinking / having coffee", "kantine": "canteen",
  "kartoffeln": "potatoes", "kaum": "hardly", "keinen": "no / not any",
  "keller": "Keller (name) / cellar", "kennen": "to know (a person/thing)",
  "kennt": "knows", "kinder": "children", "kindheit": "childhood",
  "kino": "cinema", "kleidung": "clothing", "klingelt": "rings",
  "kommen": "to come", "krank": "sick", "kranken": "sick",
  "krankenschwester": "nurse", "kurz": "short / briefly", "käse": "cheese",
  "könnte": "could", "kühe": "cows", "kümmern": "to take care (of)",
  "lachen": "to laugh", "lachend": "laughing", "landleben": "country life",
  "langem": "long (seit langem)", "langsam": "slowly", "laut": "loud",
  "leben": "life / to live", "lebt": "lives", "lehnt": "leans / declines",
  "leicht": "light / easy", "leid": "sorry (es tut mir leid)",
  "leider": "unfortunately", "leon": "Leon (name)", "letzten": "last",
  "letztes": "last", "los": "off / go", "luft": "air", "lächeln": "to smile",
  "lächelnd": "smiling", "lässt": "lets", "magen": "stomach",
  "man": "one / you (impersonal)", "meinung": "opinion", "meisten": "most",
  "melken": "to milk", "milch": "milk", "mira": "Mira (name)",
  "mittagessen": "lunch", "mitternacht": "midnight",
  "mittwochs": "on Wednesdays", "moderne": "modern", "moment": "moment",
  "monaten": "months", "müde": "tired", "nachbarschaft": "neighborhood",
  "nachts": "at night", "name": "name", "namen": "names", "nass": "wet",
  "nervös": "nervous", "nichts": "nothing", "niemanden": "no one",
  "nina": "Nina (name)", "notfälle": "emergencies", "novak": "Novak (name)",
  "nur": "only", "ob": "whether / if", "obwohl": "although",
  "onkel": "uncle", "organisieren": "to organize", "paar": "couple / a few",
  "panne": "breakdown", "pausen": "breaks", "pension": "guesthouse",
  "personalchefin": "HR manager (female)", "pflücken": "to pick",
  "plan": "plan", "planen": "to plan", "programmierer": "programmer",
  "projekte": "projects", "proviant": "provisions / supplies",
  "präsentation": "presentation", "rand": "edge", "reden": "to talk",
  "regen": "rain", "regnen": "to rain", "reife": "ripe",
  "richtig": "right / correct / real", "route": "route",
  "ruhig": "calm / quiet", "ruiniert": "ruined", "rutscht": "slips",
  "sachen": "things", "sammeln": "to collect", "schauen": "to look",
  "scheint": "shines / seems", "schlägt": "beats", "schlüssel": "key",
  "schnappen": "to snatch (frische Luft schnappen = to get some fresh air)",
  "schutz": "protection / shelter", "schwerer": "harder", "sechs": "six",
  "seitdem": "since then", "selbstgebackenen": "homemade / home-baked",
  "selbstgemachtes": "homemade", "selbstverständlich": "of course / obvious",
  "siebzig": "seventy", "simon": "Simon (name)", "simons": "Simon's",
  "sitzen": "to sit", "soll": "should / is supposed to", "sollten": "should",
  "sommer": "summer", "sondern": "but rather", "sonntag": "Sunday",
  "sonntagabend": "Sunday evening", "spiegel": "mirror", "später": "later",
  "stall": "stable / barn", "stark": "strong", "starken": "strong",
  "steckt": "is (hidden) behind", "stelle": "job / position",
  "sterne": "stars", "stimmt": "is right / agrees", "stimmung": "mood",
  "studium": "studies / degree program", "stunde": "hour",
  "suchen": "to look for", "supermarkt": "supermarket", "tage": "days",
  "tagen": "days", "tatsächlich": "actually / indeed", "team": "team",
  "tee": "tea", "termin": "appointment", "tieren": "animals", "tipp": "tip",
  "tobias": "Tobias (name)", "tomaten": "tomatoes", "trinken": "to drink",
  "trocknen": "to dry", "tränen": "tears", "tut": "does (es tut mir leid)",
  "ufer": "riverbank / shore", "uhrzeit": "time (of day)",
  "umeinander": "about/for one another", "unbedingt": "absolutely",
  "unfall": "accident", "uns": "us", "verbringt": "spends (time)",
  "vereisten": "icy / iced-over", "verschlafen": "sleepy / half-asleep",
  "versteckten": "hidden", "vielleicht": "maybe", "voller": "full of",
  "vollkommen": "completely", "vom": "from the", "vorbei": "past / by",
  "vorstellen": "to introduce / imagine",
  "vorstellungsgespräch": "job interview", "völlig": "completely",
  "wald": "forest", "warme": "warm", "wartezimmer": "waiting room",
  "was": "what", "wasserfall": "waterfall", "wecken": "to wake (someone)",
  "wecker": "alarm clock", "weder": "neither",
  "weitere": "further / additional", "werden": "to become",
  "werner": "Werner (name)", "wetter": "weather", "wichtige": "important",
  "wird": "becomes / will", "wirkt": "seems / appears", "wo": "where",
  "wochen": "weeks", "wochenende": "weekend",
  "wohnungstür": "apartment door", "wolken": "clouds", "wollte": "wanted",
  "während": "while / during", "wälder": "forests", "wäre": "would be",
  "würde": "would", "zeigen": "to show", "zelte": "tents",
  "zittern": "to shake / tremble", "zitternd": "trembling",
  "zuerst": "first / at first", "zurückkommt": "comes back",
  "zwanzig": "twenty", "zweiten": "second", "zögert": "hesitates",
  "ändert": "changes", "ärgert": "is annoyed (sich ärgern)",
  "überhaupt": "at all", "überlegen": "to think over / consider",
  "übernachten": "to stay overnight", "überrascht": "surprised",
  "übt": "practices",
};

/* ---------- Helpers ---------- */

function getStoryById(id) {
  return STORIES.find(s => s.id === id) || null;
}

function getStoriesByLevel(level) {
  if (level === "ALL" || level === "All") {
    return STORIES.filter(s => s.level === "A1" || s.level === "A2");
  }
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

/* ---------- Dynamic API & Storage Cache ---------- */

let DYNAMIC_GLOSSARY_CACHE = {};
try {
  DYNAMIC_GLOSSARY_CACHE = JSON.parse(localStorage.getItem("story_glossary_cache") || "{}");
} catch (e) {}

/**
 * Fetches a translation using free translation APIs if word is missing in GLOSSARY.
 * Primary: Google Translate (dict-chrome-ex free endpoint)
 * Fallback: MyMemory Free Translation API
 */
async function fetchFreeTranslation(word) {
  const cleanWord = (word || "").toLowerCase().trim();
  if (!cleanWord) return "";

  if (GLOSSARY[cleanWord]) return GLOSSARY[cleanWord];
  if (DYNAMIC_GLOSSARY_CACHE[cleanWord]) {
    GLOSSARY[cleanWord] = DYNAMIC_GLOSSARY_CACHE[cleanWord];
    return DYNAMIC_GLOSSARY_CACHE[cleanWord];
  }

  // 1. Primary Free API: Google Translate
  try {
    const url = "https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=de&tl=en&q=" + encodeURIComponent(cleanWord);
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const translatedText = Array.isArray(data) ? data[0] : (typeof data === "string" ? data : null);
      if (translatedText && translatedText.toLowerCase() !== cleanWord) {
        const finalTrans = translatedText.toLowerCase();
        GLOSSARY[cleanWord] = finalTrans;
        DYNAMIC_GLOSSARY_CACHE[cleanWord] = finalTrans;
        try { localStorage.setItem("story_glossary_cache", JSON.stringify(DYNAMIC_GLOSSARY_CACHE)); } catch (e) {}
        return finalTrans;
      }
    }
  } catch (e) {
    console.warn("Primary free translation API error:", e);
  }

  // 2. Fallback Free API: MyMemory
  try {
    const fallbackUrl = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(cleanWord) + "&langpair=de|en";
    const response = await fetch(fallbackUrl);
    if (response.ok) {
      const data = await response.json();
      if (data && data.responseData && data.responseData.translatedText) {
        const finalTrans = data.responseData.translatedText.toLowerCase();
        GLOSSARY[cleanWord] = finalTrans;
        DYNAMIC_GLOSSARY_CACHE[cleanWord] = finalTrans;
        try { localStorage.setItem("story_glossary_cache", JSON.stringify(DYNAMIC_GLOSSARY_CACHE)); } catch (e) {}
        return finalTrans;
      }
    }
  } catch (e) {
    console.error("Fallback free translation API error:", e);
  }

  return "translation unavailable";
}

function lookupGloss(word) {
  const cleanWord = (word || "").toLowerCase().trim();
  const found = GLOSSARY[cleanWord] || DYNAMIC_GLOSSARY_CACHE[cleanWord];
  if (found && found !== "translation coming soon") {
    return found;
  }
  return null;
}
