export const characterData = [
  {
    id: 'gusar', name: 'Gusar', title: 'Arhetip Persone', fach: 'Bas-bariton',
    description: 'Ponosni kapetan čija je oholost maska za unutarnju nesigurnost. Njegov svijet je svijet kontrole, a oluja ga tjera na suočavanje sa samim sobom.',
    lyricQuote: '"JA SAM KRALJ VALOVA! O\' MORE, O\' MORE! MASKE SVE SLANE MOJE, SVE SI MORE, OGLEDALO MOJE!"',
    imageUrl: 'https://placehold.co/600x800.png',
    aiHint: 'pirate captain',
  },
  {
    id: 'sirena', name: 'Sirena', title: 'Arhetip Anime', fach: 'Sopran',
    description: 'Zavodljivo i tragično biće, simbol ovisnosti i destruktivne ljepote. Njena pjesma je i mamac i krik za pomoć.',
    lyricQuote: '"PJEVAM DA TE SPASIM OD SEBE, A TI ČUJEŠ SAMO PJESMU, NE I RIJEČI..."',
    imageUrl: 'https://placehold.co/600x800.png',
    aiHint: 'siren mermaid',
  },
  {
    id: 'mjesec', name: 'Mjesec', title: 'Arhetip Mudraca/Terapueta', fach: 'Tenor',
    description: 'Objektivni promatrač i vodič. Nudi svjetlo i perspektivu, ali ne intervenira direktno, poštujući slobodnu volju likova.',
    lyricQuote: '"JA SAM SAMO OGLEDALO ŠTO SJA, PUT MORAŠ PRONAĆI SAM..."',
    imageUrl: 'https://placehold.co/600x800.png',
    aiHint: 'moon sea',
  },
   {
    id: 'cudoviste', name: 'Čudovište', title: 'Arhetip Sjene', fach: 'Bas',
    description: 'Personifikacija potisnute traume, straha i svega odbačenog. Ne želi uništiti, već biti viđeno i integrirano.',
    lyricQuote: '"NE TRAŽIM DA ME VOLE, TRAŽIM DA ME PRESTANU BOJATI SE..."',
    imageUrl: 'https://placehold.co/600x800.png',
    aiHint: 'sea monster',
  },
];
export type characterDataType = typeof characterData;


export const musicTracks = [
    { title: 'I. Čin: Mare Silentium', duration: '5:12', file: '/music/cin_1.mp3' },
    { title: 'II. Čin: Pirata Superbia', duration: '7:34', file: '/music/cin_2.mp3' },
    { title: 'III. Čin: Sirena Pendentia', duration: '6:45', file: '/music/cin_3.mp3' },
    { title: 'IV. Čin: Luna Therapeutica', duration: '4:58', file: '/music/cin_4.mp3' },
    { title: 'V. Čin: Monstrum Abyssi', duration: '8:02', file: '/music/cin_5.mp3' },
    { title: 'VI. Čin: Dea Tempestatis', duration: '6:15', file: '/music/cin_6.mp3' },
    { title: 'VII. Čin: Mater Dolorosa', duration: '5:50', file: '/music/cin_7.mp3' },
    { title: 'VIII. Čin: Memoria Maris', duration: '7:21', file: '/music/cin_8.mp3' },
    { title: 'IX. Čin: Nova Aurora', duration: '3:30', file: '/music/cin_9.mp3' },
];

export const galleryImages = [
  { src: 'https://placehold.co/800x600.png', alt: 'Scena Oluje', aiHint: 'storm sea' },
  { src: 'https://placehold.co/600x800.png', alt: 'Gusarev Brod', aiHint: 'pirate ship' },
  { src: 'https://placehold.co/800x600.png', alt: 'Sirena u Dubini', aiHint: 'siren underwater' },
  { src: 'https://placehold.co/800x600.png', alt: 'Mjesečina nad Pučinom', aiHint: 'moonlight sea' },
  { src: 'https://placehold.co/600x800.png', alt: 'Sjena Čudovišta', aiHint: 'monster shadow' },
  { src: 'https://placehold.co/800x600.png', alt: 'Koncept Kostima', aiHint: 'costume concept' },
];


export const chessData = {
    gusar: { operaName: "GUSAR", operaRole: "Herojski Bariton", operaDesc: "Zarobljenik vlastite slike o muškosti. Njegova internalizirana homofobija i ovisnost vode ga u propast. Njegova tragedija je nemogućnost pomirenja prirode s idealom.", chessPiece: "CRNI SKAKAČ", chessSymbol: "♞", analysis: "Gusar je Crni Skakač. Njegov put nije direktan; on 'preskače' društvene norme i vlastite obrane. Njegovo djelovanje je nepredvidivo, intuitivno i često destruktivno, baš kao i Skakačev iznenadni napad. On je buntovnik koji se ne uklapa u pravocrtnu logiku (Top) ili dijagonalnu ideologiju (Lovac), već traži svoj, kosi put. Kao crna figura, on reagira na pritiske 'bijelog' svijeta – očekivanja oca, društva, tradicije." },
    sirena: { operaName: "SIRENA", operaRole: "Dramski Koloraturni Sopran", operaDesc: "Utjelovljenje potisnute ženstvenosti, ovisnosti i gladi za prihvaćanjem. Njena ljepota je njeno prokletstvo, a pjesma krik protiv objektivizacije.", chessPiece: "CRNA KRALJICA", chessSymbol: "♛", analysis: "Sirena je Crna Kraljica. Ona je najmoćnija, najslobodnija i najopasnija sila na ploči. Njena moć je apsolutna, kombinirajući pravocrtnu snagu i dijagonalnu suptilnost. Ona je ultimativna prijetnja i ultimativna želja. Kao i Kraljica, ona dominira emocionalnim i psihološkim prostorom, a njen gubitak (smrt) fundamentalno mijenja prirodu igre, ostavljajući iza sebe prazninu i tugu." },
    mater: { operaName: "KOPNO / MATER", operaRole: "Duboki Mezzosopran", operaDesc: "Čuvarica uspomena, arhetip domovine i tradicije. Njena patnja je statična, ali aktivna. Njezina sjećanja su i utočište i zatvor.", chessPiece: "BIJELI TOP", chessSymbol: "♖", analysis: "Mater je Bijeli Top. Ona je tvrđava, temelj, sidro u stvarnosti. Predstavlja sigurnost doma, tradicije i poznatog svijeta. Kao i Top, njena snaga je u stabilnosti i obrani 'kuta' iz kojeg potječe Gusar. Ona je 'bijela' jer pripada uspostavljenom, svjesnom poretku. Njena tragedija je tragedija Topa koji ostaje zarobljen iza vlastitih zidina (pješaka/sjećanja), nesposoban djelovati na otvorenom polju." },
    mjesec: { operaName: "MJESEC", operaRole: "Lirski Tenor", operaDesc: "Princip analitičke svijesti, terapeut koji nudi teorije i okvire, ali je slijep za iracionalne istine. Njegova svjetlost je hladna i klinička.", chessPiece: "BIJELI LOVAC", chessSymbol: "♗", analysis: "Mjesec je Bijeli Lovac. Njegova moć je velika, ali strogo ograničena – on se kreće samo po jednoj boji polja. To savršeno simbolizira analitički um koji djeluje unutar jednog sustava (npr. WDEP, Jung), ali je potpuno slijep za drugu polovicu stvarnosti (emocije, kaos, iracionalno). On je 'bijeli' jer pripada svijetu logike i reda, pokušavajući osvijetliti tamu, ali nikada je ne može u potpunosti razumjeti ili integrirati." },
    cudoviste: { operaName: "ČUDOVIŠTE", operaRole: "Zbor basova", operaDesc: "Neopipljiva Sjena. Nije biće, već stanje: magla, PTSP, neizgovorena trauma. Predstavlja sve što likovi odbijaju vidjeti u sebi.", chessPiece: "PJEŠAČKA STRUKTURA", chessSymbol: "♟", analysis: "Čudovište nije jedna figura, već Pješačka Struktura. Ono je 'kostur' psihe – konfiguracija malih, svakodnevnih obrana, strahova i trauma (pješaka) koja definira cijelu igru. 'Loša' pješačka struktura (izolirani, udvostručeni, zaostali pješaci) stvara trajne slabosti i guši pokret, baš kao što nerazriješena trauma paralizira psihu. Ono je kolektivna slabost, a ne pojedinačni neprijatelj." },
    oluja: { operaName: "BOŽICA OLUJE", operaRole: "Dramski Kontraalt", operaDesc: "Apsolutna, kapriciozna i tiranska moć. Kritika gnjevnog, starozavjetnog Boga. Njena oluja je kazna koja nije pravedna, već čin sile.", chessPiece: "RUKA IGRAČA", chessSymbol: "⚡️", analysis: "Božica Oluje nadilazi simboliku figura. Ona je Ruka Igrača – vanjska, sudbinska sila koja može prekinuti igru u svakom trenutku. Ona ne poštuje pravila ploče; ona je ta koja ruši figure. Predstavlja vanjski kaos, sudbinu, ili čak samog autora/Boga koji intervenira u priču, čineći sve unutarnje borbe privremeno nevažnima pred licem apsolutne moći." }
};

export const operaStructure = {
    acts: [
        { id: 'prologus', title: "ČIN I: VRATA PAKLA", krug: "I. Krug: Vrata Pakla", dan: "Prije Stvaranja", paradox: "Kaos i potencijal iz kojeg sve nastaje.", scenes: [ { title: "Slika A: Otvaranje Knjige", content: "Pripovjedač započinje monolog o prirodi priče i sjećanja." }, { title: "Slika B: Postavljanje Pozornice", content: "Pripovjedač opisuje sedam perspektiva, njihove motive i psihološke okvire." }, { title: "Slika C: Pitanje Publici", content: "Pripovjedač poziva publici da u svakom liku pronađe dio sebe." } ] },
        { id: 'actus2', title: "ČIN II: POŽUDA", krug: "II. Krug: Požuda", dan: "Dan 1: Stvaranje svjetla i tame", paradox: "Svjetlo Sirenine pjesme rađa tamu opsesije.", scenes: [ { title: "Scena A: Cantus Lucis", content: "Aria I (Sirena): 'Vox mea, lux vestra' (Moj glas, vaše svjetlo): Sirena pjeva zanosnu, blistavu koloraturnu ariju." }, { title: "Scena B: Responsum Tenebrarum", content: "Chorus Virorum (Zbor muškaraca): Opčinjeni, ponavljaju njezine melodijske fraze, ali harmonija postaje mračnija, opsesivna." }, { title: "Scena C: Fames Salis", content: "Aria II (Sirena): 'Hoc sale vivo, hoc sale morior' (Od ove soli živim, od ove soli umirem): Pjeva o svojoj ovisnosti o slanoj vodi koja je održava, ali i peče." } ] },
        { id: 'actus3', title: "ČIN III: PROŽDRLJIVOST", krug: "III. Krug: Proždrljivost", dan: "Dan 2: Razdvajanje voda od neba", paradox: "Glad Čudovišta ne jede, već proždire dušu iznutra.", scenes: [ { title: "Slika A: Potiskivanje", content: "Zbor basova pjeva disonantne klastere. Zvuk traume." }, { title: "Slika B: Projekcija", content: "Agresivni duet s Gusarom. Čudovište mu šapuće potisnute misli." }, { title: "Slika D: Integracija", content: "Čudovište prihvaća da nije odgovor, već vječno pitanje." } ] },
        { id: 'actus4', title: "ČIN IV: POHLEPA", krug: "IV. Krug: Pohlepa", dan: "Dan 3: Stvaranje kopna i biljaka", paradox: "Pohlepa Majke nije za blagom, već za korijenima i prošlošću.", scenes: [ { title: "Slika A: Prizivanje Prošlosti", content: "Tiha, folklorna arija; pjeva o djetinjstvu Gusara." }, { title: "Slika B: Održavanje Nade", content: "Arija u kojoj plete mrežu, simbol nade, ali i zamke." }, { title: "Slika D: Vječnost Čekanja", content: "Rezignirana, monumentalna arija; njezin lik se skamenio u čekanju." } ] },
        { id: 'actus5', title: "ČIN V: GNJEV", krug: "V. Krug: Gnjev", dan: "Dan 4: Stvaranje nebeskih tijela", paradox: "Nebeski red Božice Oluje izgovor je za božanski kaos.", scenes: [ { title: "Slika A: Presuda s Visina", content: "Moćna, grandiozna arija u kojoj najavljuje kaznu." }, { title: "Slika B: Potop", content: "Veliki ansambl. Gusar, Sirena i Kopno pjevaju protiv Oluje." }, { title: "Slika D: Smiraj Ravnodušnosti", content: "Oluja se povlači, njezina svrha je ispunjena. Nema kajanja." } ] },
        { id: 'actus6', title: "ČIN VI: HEREZA", krug: "VI. Krug: Hereza", dan: "Dan 5: Stvaranje morskih stvorenja", paradox: "Gusarova hereza je pobuna protiv vlastite prirode; čovjek mora u ratu s morem u sebi.", scenes: [ { title: "Slika A (Want): Kruna od Pjene", content: "Veličanstvena arija u kojoj Gusar projicira svoju moć na more." }, { title: "Slika B (Doing): Željezno Kormilo i Slana Prašina", content: "Brza, ritmična arija o pobjedama i ovisnosti o 'soli'." }, { title: "Slika C (Evaluation): Napukli Kompas", content: "Gusar shvaća da njegova kontrola ne postoji." } ] },
        { id: 'actus7', title: "ČIN VII: NASILJE", krug: "VII. Krug: Nasilje", dan: "Dan 6: Stvaranje čovjeka", paradox: "Nasilje Mjesečeve spoznaje; hladna istina kao oružje.", scenes: [ { title: "Slika A: Dijagnoza", content: "Arija u kojoj Mjesec 'stručno' analizira likove." }, { title: "Slika C: Kriza Terapeuta", content: "Duet s Božicom Oluje. Mjesec shvaća da njegovo znanje nije dovoljno." }, { title: "Slika D: Otpuštanje", content: "Mjesec se svjesno povlači, shvaćajući da ne može 'popraviti' likove." } ] },
        { id: 'actus8', title: "ČIN VIII: PREVARA", krug: "VIII. Krug: Prevara", dan: "Dan 7: Počinak", paradox: "Najveća laž Mora je konačna istina; njegov počinak je ravnodušnost.", scenes: [ { title: "Slika A: Svjedočanstvo", content: "Zbor pjeva o svemu što je vidio, ponavljajući teme bez emocija." }, { title: "Slika C: Ravnodušnost", content: "Moćna zborska izjava o amoralnoj prirodi postojanja." }, { title: "Slika D: Vječnost", content: "Zbor pjeva o budućim olujama i budućim gusarima." } ] },
        { id: 'epilogus', title: "ČIN IX: IZDAJA", krug: "IX. Krug: Izdaja", dan: "Nakon Stvaranja", paradox: "Konačna 'izdaja' je spoznaja o vlastitoj samoobmani.", scenes: [ { title: "Slika A: Posljedice", content: "Pripovjedač opisuje smrt Gusara i Sirene." }, { title: "Slika B: Glasserova Istina", content: "Monolog o tome da ne postoji 'izdaja', već samo nerealna očekivanja." }, { title: "Slika C: Pitanje Slobode", content: "Pripovjedač postavlja publici niz retoričkih pitanja o slobodi." } ] }
    ],
    connectors: [
        "Prolog postavlja pozornicu kaosa. Iz njega se rađa prvi dualitet: Svjetlo i Tama, kroz zavodljivi, ali opasni zov Sirene.",
        "Sirenina pjesma ne ispunjava, već stvara glad. Ta proždrljiva praznina rađa bezoblično Čudovište, traumu koja obitava u 'vodama ispod neba'.",
        "U bijegu od unutarnjeg Čudovišta, psiha se okreće vanjskom, čvrstom tlu. Rađa se Majčino Kopno, kao pohlepna čežnja za sigurnim korijenima i prošlošću.",
        "Tvrdoglava vezanost za zemaljsko izaziva nebesa. Stvaraju se Sunce i Mjesec, a s njima i gnjevna Božica Oluje koja vlada njihovom moći.",
        "Kozmički gnjev Oluje pogađa bića mora. Gusar, kao stvorenje mora, suočen je s tom silom, što ga tjera u herezu protiv vlastite prirode.",
        "Gusarova pobuna i bol prizivaju svjesnost. Stvara se Čovjek, a s njim i Mjesec kao analitički um koji vrši nasilje istine nad iluzijama.",
        "Neuspjeh hladne analize da iscijeli rane otkriva konačnu istinu. Bog se odmara, a More se otkriva kao ultimativna prevara – ravnodušna priroda.",
        "Nakon što je More ispralo sve iluzije, Pripovjedač se vraća da objasni konačnu izdaju: ne onu od svijeta, već onu prema samome sebi."
    ]
};
