import { encodeMemory } from "@/api/config/model"



// section 5
let data = []

// hydration
// data.push(encodeMemory([
//     `* ig * (awa|gamot|kapya|tabang) *  tagudo * `,
//     `nginto ka amayka minom edtandang su taw sa ig na egkakabagel sekanin sa kadtagudo nin`,
//     `panon a to ka mapya su kapaginom bo sa ig i kagkabagel na taw a pedtagudo`,
// ],[
//     `So ka inom sa ig na nasisita enggo kasambiyan su ig abpeg a mga electrolytes a mana su sodium abpeg potassium a nasisita nu lawas nu taw.

//     Tu ba nan ka inom ka sa aden ig nin mana su ig, beteng, buko juice, oral rehydration solutions, am, arroscalso, sabaw, o sports drinks. Da ka paginom sa mga aden alchohol nin, caffeine nin o su mga mamis a to a paginumen. 
        
//     Nya ba kapaginom a nya na makatabang sa kagamot sa sintomas endu di galunsanan i kapedtagudo sabap sa dehydration`
    
// ],1))

// healthy food
// data.push(encodeMemory([
//     `* mapya * pegken * tagudo *`,
//     `nasisita ko kakan sa malimpyo amay ka pedtagudo , eduken`,
//     `ngin to ka keman sa mapya upama ka su taw na pedtagudo`,
//     `nginto ka nya mapya enggulan nu taw a pedtagudo na keman sa pegken a mapya sa lawas`,
// ],[
//     `Nasisita su kakan ebpyapya kagina pakatabang i namaba ka kagkabagel na immune system nu taw o su lawas nin
//     `
// ],1))

// consult doctor 
// data.push(encodeMemory([
//     `* doctor * (awa|gamot|kapya|tabang) *  (awa|gamot|kapya) * tagudo *`,
//     `kano besen i ka angay sa dotor amayka pedtagudo i taw`,
//     `ngin to ka nasisita i ka angay sa doktor upama ka pedtagudo ako`,
// ],[
//     `Nya bon mapya na pailay ksa sa doktor ka silan na katawan nilan panon endu ngin i gamot na mga sakit nu taw`
// ],1))

// where to buy medicines
// data.push(encodeMemory([
//     `endaw gailay i gamot`,
//     `endaw gapamasa i gamot`,
//     `endaw mamasa sa gamot`,
// ],[
//     `Tanday ka na su gamot na sya bo pamasen sa kila a mga botika. Aden bon mga grocery a pendagang sa gamot.`
// ],5))

// SYMPTOMS 

// 1. VOMITING
// https://uhs.umich.edu/diarrheavomiting#:~:text=Do%20not%20eat%20or%20drink,ice%2C%20popsicles%20or%20apple%20juice.

data.push(
    encodeMemory([
        `* gamot * uta *`
        `* (awa|gamot|kapya|tabang) * uta * `,
        `amayka su taw na nanguta na ngin i pakan o painom lon`,
        `ngen i mapakay a kanen, inomen, o pamasan na taw a panguta`,
        `ngin i mapya enggulan o galbeken na taw a mana pakauta`,
        `su taw a panguta na ngin i enggulan nin`,
        `umapa ka pakagedam panguta i taw na ngin i pakan o painom lon gen i enggulan nin`,
    ],[
        `Su kapanguta na namba su pedtekaw den mon a to a blyu i kinan nu taw sa ngali o ngilong nin. Namba na pakaibped sa ig nu lawas abpeg mga electrolytes. Namba na tanda na sakit mana su gastroenteritis, food poisoning, motion sickness, kagingay, engo nganin nganin a kaped pan san. 
        
        Upama ka paauka na nya ba i mapakay a unuti ka. 

        1. Da ka pegkan o paginom sa pila kauras.

        2. Tikaw ka semesep sa babaydo a ig, sports drinks, o sabaw.Tanday ka na da ka paginom sa maledsem o gatas. Endu da ka pegkan sa mga magatel na tinay o tyan mana su aden alchohol nin, aden caffeine nin, su mga lanan ged, su mga malalaas, abpeg su gatas engo su cheese.Upamaka ka pagaga ka denminom, na umani ka embabaydo i paginumen nengka.
        
        3. Upama ka kagutem ka na mapakay ka keman sa saging, emay, pan, abpeg soda crackers. Upama ka makakagaga ka keman sa mga da ged nanam ni a pegken, na tupamba ka makakan ka sa apya ngen. Tanday ka su mga da nanam nin a pegken na nya nin mga kaped na su tinanda a patatas, emay, pasta, naluto a unga na kayo, naluto a kamo, abpeg a karne. 

        Ingati ka ka su pembabalingan a kapanguta na nasisista nin i kapendoktor labi den upama ka pakagedam ka sa kapegka(langot|langut) o amayka da bagel nengka.
        `
    ],2)
)

// nausea
data.push(
    // nausea should be added in the dictionary
    encodeMemory([
        `* (awa|gamot|kapya|tabang) * (langot|langut) *`,
        `* (ngen|panon) * (awa|gamot|kapya|tabang) * (langot|langut) *`,
        `* ngen * di * (kan|inom|pamasa) * (langot|langut) * `,
        `ga(langot|langut) ako ngen i mapya a enggulan ko`,
        `ngen i di mapakay a kanen o inomen nu taw a ga(langot|langut)`,
        `ngen i enggulan o galbeken na taw a mana ga(langot|langut)`,
        `ngen i gamot na taw a ga(langot|langut)`,
        `ngen i mga di mapya a kenen na taw a ga(langot|langut)`,
        `panon i kagamot sa taw a galanot`,
        // chatgpt end
    ],[
        // reference
        // https://www.urmc.rochester.edu/encyclopedia/content.aspx?contenttypeid=56&contentid=2939
        `Uman balangan na (langot|langut) o sakit na ulo na embidabida i kapenggamot lun. Su tension headaches na kila sa tawag a hatband headache. Sya manggedam na taw i nya ba sa taligkudan na ulo nin abpeg sa bunan bunan nu taw. Nya ba na aw na to na taman sa pila kaoras taman sa pila gay. Nya kapenggamot na sya ba na physical therapy, muscle relaxants, engo mga pain relievers mana su aspirin abpeg ibuprofen. Aden pan kaped a balangan na sakit na ulo a nya tawag lun na migraine. Engu pegkapya mangiginawa nengka na degka ka sa malibuting a kwartu, depbpasi ka ulo nengka sa mayaw o matengaw , engo pamisel ka ulo nengka`
    ],4),
)


// boiling water
data.push(
    encodeMemory([
        `* tabel * ig * `,
        `duken * tabel * `,
        `enduken ka temabel`,
        `enduken o panon a to ka nasisita su ka tabel`,
        `labit ka sa mapakay a katabel sa ig`,
        `ngin i ukit na katabel sa ig`,
        `nginto na temabel i taw`,
        `panon i kapedtabel sa ig`,
        // chatgpt end
    ],[
        ` Su katabel na nasisista engo pebpatay su pathogenic a mga bacteria, virus engo protozoa. Amayka pedtabel su taw na mangata sekanin sa dwa ka minutos kapasad nin edsebu. Upama ka su ig na malbog na pangatay ka a makadtakena sekanin engo ibubus nengka su ig sa gapas engu ga salal u mga maldsik nin. Amayka malini ka sa aden nanam na ig ba nan a tinabel nengka na betad ka sa paydo a timos uman saka litro na ig o I alat nengka su ig sa kaped a gabetadan na ig.
        `
    ],1),
)

// disinfecting water
data.push(
    encodeMemory([
        `* (pamasa|gamit) * limpyo * ig * `,
        `* limpyo * ig *`,
        `* ukit * limpyo * `,
        `ngen i ibetad sa ig para kalimpyoan i to ba`,
        `ngen i mapakay a gamiten sa sa kalimpyo sa ig`,
        `pano i mga embalangan ukit na ka limpyo sa ig`,
        `panon i ka linis sa ig a paginumen`,
        // chatgpt end
    ],[
        `Su kalinis sa ig na nasisista endu gaawa su mga bacteria, virus endu parasistes a pakangguna sa sakit a mana su cholera, typhoid, dysentery abepeg kapedtagudo. Upama ka dikena nalimpyuan i ig a paginumen, na mapakay i namaba ka deketan na mga microorganisms a pakadalo. Endu su kablinis sa ig na pakatabang endu di ka makakwa sa mga sakit a sabap sa maldsik a ig. 

        Mapakay nengka blimpyoan i ig  a paginumen nengka sa chlorine. Padtakena ka sa saka saka botol a ig tupan na tunag ka sa isa a powdered chlorine compounds a mga 65 to 75 ka porsento uman saka litro na ig. Mapasad i namba, na tupan ka kwa ka sa 2 teaspoon ebun sa ig a to a aden chlorine nin ka isimbol nengka sa lima ka galon o 20 liters a ig. Padsimbol ka silan ebpyapya endu pangata ka sa 30 ka minutos bago gainom su ig.    
        `
    ],1)
)


// from influenza
// fever chills
data.push(
    // 
    encodeMemory([
        `* (awa|gamot|kapya|tabang) * (kegkel|kayaw) * `,
        `amayka aden pegkayaw i taw na ngin i gamot nin`,
        `ngen i mapakay enggulan a galbeken na taw a pegkegkel`,
        `upama ka mayaw o pegkegkel i lawas nu taw na panon i aawa na to ba abpeg panon i kagamot sa sakit nin`,
        //chatgpt end
    ],[
        ` Upama ka pegkayaw su taw na minom sekanin sa madakel a ig. Aden mga gamot sa botika a gapamasa apya da riseta nin a makatabang sa leka. Mapakay ka mangingidsa sa pendagang a pharcmacist sa Acetaminophen para sa sakit na lawas. Upama ka pegkayaw ka na betadi ka sa mawasa a malalabendaw a gapas i ulo nengka. Embalgkas ka bon sa dikena ged masimpit. Upama manem ka pegkegkel ka, na nya mapya na embalegkas ka sa pila timan engu mayaw i manggedam nengka. Tupan na degka ka sa mauget engo pegkabagel i lawas nengka.`
    ],2)
)


//  nose
data.push(
    // add to dictionary stuffed or clogged
    encodeMemory([
        `* (awa|gamot|kapya|tabang) * (sepu|ngog) *`,
        `ngin i enggulan nu taw a pedsepo`,
        `ngin i galbeken a taw a aden sepu nin`,
        //chatgpt end
    ],[
        `Su clogged nose na kanggula upama ka aden naka aln sa ngilong nu taw. Nya kaped a tawag sa namba na nasal congestion. Kaped sa mga sabap na namba na allergies, sepu, flu, sinus infection engo kaped a sakit na baga. Su sintomas na clogged nose na su aw na to na di pakaginawa, pagigis pedtandang i sepu nin o aw na to na di blue, masakit i tampal sa ngilong nin endu di ged maka baw o nanam.

        Engu pegkapya mangedam nu taw, na minom sekanin sa madakel a ig engo pakalyo su ngog. Ugayd na da ka paginom sa paka dehydrate mana su kapi endu soft drinks. Mapakay ka semesep sa mga mayaw a paginumen, mga ti o sabaw. Mapakay ka bon engamot sa vitamin C. Mapakay ka bon semengap sa mga mayaw a bel endu makaginawa ka. Degka ka bon. Aw na to na betad ka sa warm compress. Upama ka da leka meto na tekaw ka iwasa sa twalya sa mayaw a ig. Itapi nengka namba sa biyas nengka maka pila sa sagay.Upama ka aden humidifier nengka na mapakay ka bon gemamit sa to ba. Mapaky ka bon enamot sa saline nasal spray. Aw na to na kan ka sa mga malalas a pegken kagina pakatabang i mga namba sa kagkalwag na nginlong nu taw. Engo pamaka sa sa gamot para engkapya mangegedam nengka.`
    ],2)
)


// headache
data.push(
    encodeMemory([
        //chatgpt end
        `* (awa|gamot|kapya|tabang) * sakit  * ulo * `,
        `negn i enggulan upama ka di gaawa i sakit na ulo`,
        `ngen i pakairan galbeken nu taw upama amayka ka masakit i ulo nin`,
        `panon i kagamot na taw sa ginawa nin upama ka masakit i ulo nin`,
    ],[
        `Su kasakit na ulo na madakel i embalangan nin, tu ba nan bibidaya bon i gamot nin. Su tension headaches na kila bon sa tawag a hatband headaches. Nya ba na sakit na ulo na sya kagedam sa talugkodan na uow, temples endo bunan bunan. Namba na mangedam nu taw sa pila kawras taman sa pila gay. So mga gamot na nya ba na physical therapy, muscle relaxants engu gamot a gapamasa sa da riseta nin mana su aspirin abpeg ibuprofen. Isa pan a balangan na sakit na ulo na su migraine. Endu pegkapya su mangedam nu taw na demegka sekanin sa malibuteng a kwarto, depasan nin su lawas nin sa warm compress o cold compress , engu pamasel ka su ulo nengka.
        `
    ],2),
)


// abdominal crams
data.push(
    encodeMemory([
        `* (awa|gamot|kapya|tabang) * (lipedes|sakit) * tyan *`,
        `masakit i tyan ko , panon kagamot sa nya ba`,
        `ngen i galbeken na taw amayka pedsakit i tyan nin`,
        `ngen i gamot na masakit a tyan`,
        `panon i kagamot sa pedsakit a tyan`,
        `upama ka masakit i tyan, ngen i mapakay a enggulan nu taw`,
        //chatgpt end
    ],[
        `Apya di pengamutan su kasakit na nya na maawa bon i nan. Ugayd na aden bon kaped a mapakay engulan nu taw engu mapya i mangegedam nin.  Tekaw ka betad sa botol a aden mayaw nin a ig sa tyan nengka. Ebpaygo ka bon sa malalabendaw a ig. Pangingat ka engu di ka maupang. Inom ka bon sa madakel a ig. Pakapaydo ka bo i kainom nengka sa kapi, ti abpeg aden alcohol nin kanina makalunan i mga namba sa sakit na tyan. Upama ka pakagaga ka den keman na inom ka muna sa ig, tupan na kan ka sa mga da ged nanam nin mana su crackers, emay, saging o pan. Degka ka bon.`
    ],2),
)

// sore throat
data.push(
    encodeMemory([
        `* (awa|gamot|kapya|tabang) * masakit * tidek * `,
        `masakit i tidek ko , ngin i galbeken ko`,
        `panon i kagamot ko sa masakit ko a tidek`,
        `su tidek ko na pedsakit, ngin mapakay a enggulan ko`,
        //chatgpt end
    ],[
        `Upama ka masakit i tidek nengka na nya ba edtalon ko na mapakay nengka engulan. Inom ka sa madakel a ig engu pegkapaydo i ngog sa tidek nengka. Kan ka sa gamot depende sa ngin nalabit na doctor nengka. Pakapulo ka bon i ulo nengka sa unan upama ka miga ka. Da ka pedsengap sa bel. Mapakay ka bon emumug sa mayaw a ig ugayd na di pa papengula i nya sa mga wata.`
    ],2),
)

// stiffness
// data.push(
//     encodeMemory([
//         `* (awa|gamot|kapya|tabang) * kapanegas * `,
//         `mana pangegas lawas ko, ngen enggulan o galbeken ko`,
//         //chatgpt end
//     ],[
//         `Upama ka penegas i lawas nengka na degka ka, papamesel ka endu betadi ka sa mayaw o matengaw a compress so panegas sa lawas nengka. Su kabetad sa mayaw sa muscle nengka na makagkaluwag sa mangegedam nu taw. Upama manem ka nya nengka engulan na betadan nengka sa matengaw lawas nengka na makatabang i namba endu di kalunsanan kablebag nengka.`
//     ],2),
// )


// SNEEZE
data.push(
    encodeMemory([
        `* tagub * balen * `,
        `* tagob * (ngilong|ngali) *`,
        `duken ka nasisita i katagod sa ngilong abpeg ngali upama ka pembalen`,
        `duken ka pedtagob amayka pembalen`,
        `nginto ka pedtagub upama ka nimbalen su taw`,
        `duken ka edtagob sa ngilong abpeg ngali`,
        //chatgpt end
    ],[
        `
        Nasisista na taguban nu taw su ngale abpeg ngilon nin upama ka pagatsing, pembaln, o pembatok su taw endu du masangap na kaped nin su virus. Upama ka embaln na ka sya ka engula i namba sa tissue. Ugayd na idtog nengka i namba ebpyapya. Upama ka da tissue nengka, ta tagubi ka sa siko nengka. Gagasi ka namba kapasad nengka.`
    ],2),
)

data.push(
    encodeMemory([
        `* kaugas * lima * `,
        `panon i kapenggagas sa lima`,
        `ngen i pagunutan sa kagagas sa lima`,
        `pano i kagagas sa lima`,
        `Panon i ka limpyo na lima`,
    ],[
        `Su kagagas sa lima na pakatabang engo pebpatay i mga kagaw. Betadi ka sa sabon I lima nengka sa dwa pulo ka Segundo. Kapasad nengka , kukus I lima nengka sa dwa pulo bon ka Segundo. Edsengal ka sa happy birthday sa makadwa tupan na gagasi ka su sabon. Amayka da sabon nengka na gagasi ka su lima nengka sa sanitizer. Gamit ka sa alchohol a sanitizer upama ka dala ig. Betadi ka lima nengka sa namba pya pya mana kabetad nengka sa losyon. Ilay ka ka nga ka gamit na su 60% I kabagel nin a alchohol. `
    ],6),
)



// GENERAL CONVERSATIONS
// treatments
// data.push(
//     encodeMemory([
//         `* gamot *`,
//     ],[
//         `Su mga gamot na pegkanen nu taw a pedsakit engu pegkapya mangedam nilan. Pakatabang silan sa masakit, blebag, pendana, engo sa nganin nganin pan sa lawas nengka. Ugayd na nasisista su kaingat sa kakan sa gamot.

//         Upama ka aden pan bagidsan nengka, na mapakay ko seka engan sa ula ula na panon i kanggamot sa natimotilities, bismuth subsalicylate, antihistamines, analgesics, nsaids, decongestants, expectorants, antitussives, abpeg lozenges.`
//     ],1)
// )

// medicines

// treatments
data.push(
    encodeMemory([
        `* (sintomas|senyales|tanda) *`,
    ],[
        `Langon na sakit na aden sintomas nin abpeg senyales. Endo katabangan ko seka epyapya na labit ka amayka para sa kapedtagudo o influenza i bityala nengka.`
    ],1)
)

// symptoms
data.push(
    encodeMemory([
        `* mapya (mapita|maudto|malulem|magabi) *`,
        `* ngen * betad * nengka *`,
    ],[
        `
        Ngin betad nengka? Ngen makadtabang ko saleka? Ampon ka bo upama ka di ko kasabutan i pedtalon nengka. Dikena ko ged pakasabot tu banan tabangan ta i engagaysa engu makadsabuta ta.`
    ],1)
)

// data.push(
//     encodeMemory([
//         `* (tayn|ngin|endaw|panon|kanu) *`,
//     ],[
//         `
//         Ampon ka bo, mana su di ko gasabutan pedtalon nengka. Labit ka kon edsaluman endu labit ka amayka para sa kapedtagudo i tu ba o sa influenza`
//     ],1)
// )

// antimotilities
data.push(
    encodeMemory([
        `* antimotility *`,
    ],[
        `Ampon ka bo, di ko gasabutan i pedtalon nengka sa antimotilities`
    ],1)
)

// bismuth 
data.push(
    encodeMemory([
        `*bismuth *`,
    ],[
        `Ampon ka bo, di ko gasabutan i pedtalon nengka sa bismuth subsalicylate`
    ],1)
)

// antihistamines
data.push(
    encodeMemory([
        `* antihistamines *`,
    ],[
        `Da ko samaya kasabuti i pedtalon nengka. Ampon ka bo. Basi labit ka kon edsaluman ngin i tu ba pedtalon nengka sa antihistamines`
    ],1)
)

// analgesics
data.push(
    encodeMemory([
        `* analgesics *`,
    ],[
        `Da ko samaya kasabuti i pedtalon nengka. Ampon ka bo. Basi labit ka kon edsaluman ngin i tu ba pedtalon nengka sa analgesics`
    ],1)
)
// nsaids
data.push(
    encodeMemory([
        `* nsaids *`,
    ],[
        `Da ko samaya kasabuti i pedtalon nengka. Ampon ka bo. Basi labit ka kon edsaluman ngin i tu ba pedtalon nengka sa nsaids`
    ],1)
)

// decongestants
data.push(
    encodeMemory([
        `* decongestants *`,
    ],[
        `Gatawan ko nya nengka blabiten na decongestants, ugayd mana su di ko gasabutan i pedtalon nengka. Ampon ka bo.`
    ],1)
)

// expectorants
data.push(
    encodeMemory([
        `* expectorants *`,
    ],[
        `Gatawan ko nya nengka blabiten na expectorants, ugayd mana su di ko gasabutan i pedtalon nengka. Ampon ka bo.`
    ],1)
)

// anttussives
data.push(
    encodeMemory([
        `* antitussives *`,
    ],[
        `Gatawan ko nya nengka blabiten na antitussives, ugayd mana su di ko gasabutan i pedtalon nengka. Ampon ka bo.`
    ],1)
)

// lozenges
data.push(
    encodeMemory([
        `* lozenges *`,
    ],[
        `Ampon ka bo, di ko gasabutan i pedtalon nengka sa lozenges`
    ],1)
)

// help
data.push(
    encodeMemory([
        `* tabang *`,
    ],[
        `Bago ko seka katabangan na pasabot ako ko nengka muna. Mapakay ako nengka idsan sa kapedtagudo o influenza. Mapakay ko labiten ngin i enggulan nengka edu mapya mangiginawa nengka`
    ],1)
)


// what is diarrhea
data.push(
    encodeMemory([
        `* tagudo *`,
    ],[
        `Ampon ka bo, mana na ko kasabuti i pedtalon nengka pantag sa kapedtagudo. Engu katabangan ko seka sa mapya, na edsalumani ka to ba. Aw na to na mapakay ka midsa sa mga gamot, ngen mapya enggulan endo ngin i mga mapakay a kanen nu taw a to a pedsakit.`
    ],1))

data.push(
    encodeMemory([
        `* influenza *`,
    ],[
        `Ampon ka bo, mana na ko kasabuti i pedtalon pantag sa influenza. Engu katabangan ko seka sa mapya, na edsalumani ka to ba.Aw na to na mapakay ka midsa sa mga gamot, ngen mapya enggulan endo ngin i mga mapakay a kanen nu taw a to a pedsakit.`
    ],1))

data.push(
    encodeMemory([
        `*kapanegas*`,
    ],[
        `Ampon ka bo, ka di ko samana gasabutan i pedtalon nengka pantag sa kapanegas nu lawas kapanegas. Ugayd na mapakay ko labiten sa leka ngi i mga mapya enggulan endo pegkapya kangegedam nu taw a pedsakit sa namba ba`
    ],1)
)


data.push(
    encodeMemory([
        `*(langot|langut)*`,
    ],[
        `Ampon ka bo, ka di ko samana gasabutan i pedtalon nengka pantag sa taw a ga(langot|langut). Ugayd na mapakay ko labiten sa leka ngi i mga mapya enggulan endo pegkapya kangegedam nu taw a pedsakit sa namba ba`
    ],1)
)


data.push(
    encodeMemory([
        `*mayaw*`,
    ],[
        `Ampon ka bo, ka di ko samana gasabutan i pedtalon nengka pantag sa kapegkayaw. Ugayd na mapakay ko labiten sa leka ngi i mga mapya enggulan endo pegkapya kangegedam nu taw a pedsakit sa namba ba`
    ],1)
)

data.push(
    encodeMemory([
        `*ngilon*`,
    ],[
        `Ampon ka bo, ka di ko samana gasabutan i pedtalon nengka pantag sa di ged pakaginawa sa ngilong. Ugayd na mapakay ko labiten sa leka ngi i mga mapya enggulan endo pegkapya kangegedam nu taw a pedsakit sa namba ba`
    ],1)
)


data.push(
    encodeMemory([
        `*tyan*`,
    ],[
        `Ampon ka bo, ka di ko samana gasabutan i pedtalon nengka pantag sa kapedsakit na tyan. Ugayd na mapakay ko labiten sa leka ngi i mga mapya enggulan endo pegkapya kangegedam nu taw a pedsakit sa namba ba`
    ],1)
)

data.push(
    encodeMemory([
        `*ulo*`,
    ],[
        `Ampon ka bo, ka di ko samana gasabutan i pedtalon nengka pantag sa kapedsakit na ulo. Ugayd na mapakay ko labiten sa leka ngi i mga mapya enggulan endo pegkapya kangegedam nu taw a pedsakit sa namba ba`
    ],1)
)


data.push(
    encodeMemory([
        `*uta*`,
    ],[
        `Ampon ka bo, ka di ko samana gasabutan i pedtalon nengka pantag sa kapanguta. Ugayd na mapakay ko labiten sa leka ngi i mga mapya enggulan endo pegkapya kangegedam nu taw a pedsakit sa namba ba`
    ],1)
)
// catch all
data.push(
    encodeMemory([
        `*`,
    ],[
        `Ampon ka bo, mana su di ko gasabutan i pedtalon nengka.`
    ],1))


    
export let mag = [].concat(data)