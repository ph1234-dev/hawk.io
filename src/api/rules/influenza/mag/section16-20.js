import { encodeMemory } from "@/api/engine/model"

let section16 = [
    encodeMemory([
        "* duken * di * (kan|inom|gamit) * gamot_na_tagudo * gamot_na_influenza * "
    ],[
        ""
    ]),
    encodeMemory([
        "* duken * di * (kan|inom|gamit) * gamot_na_influenza *",
        "* duken * gamot_na_influenza * di * (kan|inom|gamit) *",
    ],[
        ""
    ]),
    encodeMemory([
        "* duken * di * (kan|inom|gamit) * antibiotics *",
        "* duken * antibiotics * di * (kan|inom|gamit) *",
    ],[
        "Namba antibiotic a nan na pakagamot bo sa bacteria. Su influenza a sabap sa virus na di nin I namba kagamutan. Nya nin nasisita samba na antiviral."
    ]),
    encodeMemory([
        "* duken * di * (kan|inom|gamit) * aspirin *",
        "* duken * aspirin * di * (kan|inom|gamit) *",
    ],[
        "Su kainom sa aspirin upama ka aden mga lebag nengka na aw na t na makagkapulo sa Reyes syndrome na paka binasa sa utek abpeg nu atay."
    ]),
    encodeMemory([
        "* duken * di * (kan|inom|gamit) * analgesics *",
        "* duken * analgesics * di * (kan|inom|gamit) *",
    ],[
        "Kapakayan bon I kapaginom sa analgesics. Ugayd na da ka paginom sa isa pan a gamut a den bon acetaminophen nin. Su sobla sobra a kapegkan sa namba na pakabinasa sa atay."
    ]),
    encodeMemory([
        "* duken * di * (kan|inom|gamit) * antihistamines *",
        "* duken * antihistamines * di * (kan|inom|gamit) *",
    ],[
        "Su antihistamine a gamut a mga allergy a mana su mga sepu, kambabatok abpeg a kaped pan. Ugayd, na su nya ba a gamut na pakatulog ba I nya ba. Upama ka aden galbek nengka a nasisita nin I kadtulan nengka mana du kan drive na da ka paginom sa nya ba gamut."
    ]),
    encodeMemory([
        "* duken * di * (kan|inom|gamit) * decongestants *",
        "* duken * decongestants * di * (kan|inom|gamit) *",
    ],[
        "Da ka penggamit sa nasal decongenstants sa sobra sa dwa o tlo a gay. Kagina ka papangilayn ba I namba na ngilong nengka. Kaped pan na pakagkabagel bon I nya bas a pamusungan a side effect nin. Tu ba nan pangingat ka upama ka enggamot ka sa nya ba labi den mapulo lugo nengka, aden sakit na pamusungan nengka o di kena mapya I pusong nengka."
    ]),
    encodeMemory([
        "* ten * di * (kan|inom|gamit) * gamot_na_influenza * ",
        "* ten * di * (kan|inom|gamit) * gamot_na_influenza * ",
        "* diarrhea_drugs * di * (kan|inom|gamit) * ",
    ],[
        "Niya tig a Center for Disease and Control na su mga antiviral a gamut na trangkaso na iberisita (mga tablitas, ig, inhaled powder, o isa a intravenous solution) na pakadtabang sa virus na lawas. Su ma antivarial a gamut na di pendagaganeng sa counter. Makwa nengka bo I nya ba upama aden riseta nin sa dktor. Su antiviral a gamut na sakabiyas I nya bas a antibiotic a gamut na bacterial infection.  Su mga antiviral a gamut para sa trangkaso na pakadtabang sa kapenggamot sa trangkaso.  "
    ]),
]

let section17 = []

let section18 = []

let section19 = []

let section20 = [
    encodeMemory([
        "* (ngen|panon) * (awa|gamot|kapya|tabang) * kayaw * kegkel*",
        "* (ngen|panon) * (awa|gamot|kapya|tabang) *  kegkel * ",
        "* (ngen|panon) * (awa|gamot|kapya|tabang) * kayaw * "
    ],[
        "Upama ka pegkayaw ka na kapakay nengka penggulan I mga nya ba. Ilay ka I kapulu na mayaw nin uman pat ka oras. Kapakay ka paginom sa paracetamol upamaka ka makawma I kayaw nengka sa 37.5 – degree celcius uman pat ka oras. Ebpaygo ka uman gay umapa paka gaga ka endo amayka kapakayan na sigurado ka a mapya I kalyo abpeg ka ludep na sambel sa kwarto nengka.  Da ka ged pedsot sa madakel a balegkas. Inom ka sa madakel a ig, abpeg juice a unga na kayo abpeg ti."
    ]),
    encodeMemory([
        "* (ngen|panon) * (awa|gamot|kapya|tabang) * uta *"
    ],[
        "Pantag sa katangka nengka sa kagaw nab ago ka kan, mami sa lima apbeg ngilong, na gagas ka sa lima. Gagas ka bon sa lima upama mami ka sa kaped nengka kapasad nengka embalen, batok, abpeg senga. Di ka papedsembay I gamit nengka a mana so pamunas nengka sa lawas, lipstick, dalmeta, o nganingain a nabayugan na kagaw. Di ka bon papedsembay sa pegken, gamit sa kapegkan abpeg pametadan sa ig."
    ]),
    encodeMemory([
        "* (ngen|panon) * (awa|gamot|kapya|tabang) * (sepu|ngog) *"
    ],[
        "Nya ba I mga kapakayan nengka penggulan amay ka belyu den pedtandang I sepu nengka o di ka pakaginawa sabap sa ngog. Nasisita na inom ka sa madakel a ig para makalyo ngog nengka sya ebpon sa sinus. Da ka ged paginom sa nganinganin nin a paka dehydrate mana su kapi endo su aden alchohol nin mana su softdrinks. Kapakay ka minom sa mga sabaw a aden gamut nin, ti abepg kaped pan a sabaw. Tekaw ka bon sa vitamin c. Su mayaw na table na makadtabang bon. Makadtabang bon amayka demegka ka. Betadi ka o pamunasi ka sa mayaw a ig I biyas nengka ka pakadtabang I namba. Sengot ka sa mayaw a sambel na table. Upama ka aden humidifier nengka ka gamit ka. Kapakay ka boy gemamit sa nasal spray. So kakan sa mga malas na makadtabang bon sa di pakaginawa a ngilong. Nya bon tanto na pamasa ka na pakadtabang a over-the-counter a gamut upama ka pagubay no bon I botika."
    ]),
    encodeMemory([
        "* (ngen|panon) * (awa|gamot|kapya|tabang) * langot *"
    ],[
        "Nya ka enggula upamaka mana ka galangot na inom ka malingaw o matengaw a  ig. Kan ka sa paydo abpeg mga da ged nanam nin mana su saltine crackers o biskwit o pan. Da ka ged pegkan sa sinendag , mga malana o mamis ged. Pakalugad ka I kakan nengka. Kan ka sa paydopaydo ugayd na makapila sa sagay. Di ka papedsimbol I kakan nengka sa mayaw tupan na matengaw a ig. Amayka minom ka na endtagad ka. D aka ged pengagalbek o pegkategel kapasad nengka keman. Ddi ka muna bilinisi I ngipen nengka kapasad nengka keman. Pangilay ka sa pegken na magaga nengka keman."
    ]),
    encodeMemory([
        "* (ngen|panon) * (awa|gamot|kapya|tabang) * sakit  * ulo * "
    ],[
        "So mga embalangan na sakit na ulo na bidaya bon I ka gamut lon. Su kasakit na ulo na mana su tension headache, na kila bon a “hatband”. Nya nin guna I nya ba na sakit sa taligkudan na ulo, temples, abpeg pad a ulo. Mapakay ba I nya ba kawget sa pila ka oras taman sa pila gay. Nya mga kagamot sa nya ba na physical therapy, muscle relaxant abpeg over-the-counter a mga pain reliever mana su aspirin abpeg ibuprofen). Aden bon balangan a sakit a ulo a mana su migraine. Para egkapya I lawas nengka , degka ka sa malibuteng a kwarto, kwa ka sa mayaw o matengaw a compress ka denggawi ka lawas I ulo nengka."
    ]),
    encodeMemory([
        "* (ngen|panon) * (awa|gamot|kapya|tabang) * sakit  * tyan *",
        "* (ngen|panon) * (awa|gamot|kapya|tabang) * lipedes  * tyan *"
    ],[
        "So kasakit na tiyan na gaawa bon I namba apya di bon penggamotan. Ugayd, na aden bon mga kaped nengka enggulan engu kapya I kangegedam nengka. Tekaw ka betad sa myaw a butul na ig o denggawi ka sa mayaw i tyan nengka. Ebpaygo ka sa mayaw. Ingati ka bo a maupang ka. Inom ka sa madakel a malingaw a ig. Da ka ged paginom sa kapi, ti, abpeg makalangot ka makalunsan I namba sa sakit. Upama ka kapakay ka den pagkan esaluman, na ludsu ka sa malingaw a mga ig tu pan na kan sa cracker o biskwit, emay, saging, o toas a pan. Degka ka bon."
    ]),
]

let section21 = [
    encodeMemory([
        "* (ngen|panon) * (awa|gamot|kapya|tabang) * influenza * "
    ],[
        "Dwa a embalangan na gamut I aden sa kapenggamot sa influenza o trangkaso. Aden mga gamut a pengkontrol sa sintomas nin a mana su antiviral. Kapakayan nengka pengamutan I ginawa nengka apya seka po. Aden mga kapamasa den a gamut sa botika a makadtabang sa kanggedam nengka mana su kapegkayaw, masakit a lawas abpeg a kambabatok. Kapakay ka bon paginom sa pain reliever mana su ibuprofen abpeg a acetaminophen ( paracetamol ). Kapakay ka bon minom sa decongenstant para makadtabang sa kaginawa nengka sa ngilong nengka. Su mga pakaenda sa batok mana su rubitosin na makadtabang sa kaenda nu batok. Makatabang bon su mga expectorant ka pabluwagen nin su klad. Katabang bon su antihistamine ka pakaawa sekanin sa kambaln pedtandang abpeg su mga magatel. Nya ukit na ka tyakap nengka sa ginawa nengka , na nasisista su kadegka. Lenek ka sa walay taman sa di madadag I mayaw nengka sa sagay. Inom ka bon sa madakel a ig. Da ka ged pegkategel sa walay. Kan ka bon sa mga mapya a mga pegken. Apya ngen den I manggula na pailay ka den sa doctor upama ka galunsanan I sakit nengka. Enggan ka nin sa riseta samana sa gamut a makadtabang sa leka. "
    ]),
    encodeMemory([
        "* (ngen|panon) * tagub * balen * "
    ],[
        "Nya ka den enggula na tagubi ka su ngali abpeg su ngilong nengka upama ka pembalen ka o pembatuken ka enggu di nengka kaalatan kaped nengka sa virus a nan. Upama ka embalen ka na sya sa tissue, o sya sa siko nengka. Di ka san sa pad a lima nengka. Nya nengka kapasad na gagasi ka lima nengka o gamit ka sa sanitizer."
    ]),
    encodeMemory([
        "* (ngen|panon) * (awa|gamot|kapya|tabang) * masakit * tidek * "
    ],[
        "Upama ka blebag su tidek nengka na nya ba I enggula ka. Inom ka sa madakel a ig enggu pegkanipis I klad nengka o di ged kamalan I tidek nengka. inom ka sa gamut depende san gin I pedtalo na doctor nengka. Ibetad nengka su ulo nengka sa unan enggu makadtabang sa kaginawa nengka. Tangka ka sa mga bel. Kapakay ka bon bemumug sa mayawyaw a ig.  "
    ]),
    encodeMemory([
        "* (ngen|panon) * (awa|gamot|kapya|tabang) * kapanegas * "
    ],[
        "Enggu kagamotan I kasakit na lawas nengka na enggula ka I mga nya ba. Edtatayga ka , paagot ka , o betad ka sa apya ngen din a mayaw o matenggaw a pakadebpas nengka. Su kabetad nengka sa mayaw na tulan nengka na makadtabang sa kaluwag na kasimpit na lwas. Su metenggaw manem nan a pakadtabang sa mga lebag nu lawas. "
    ]),
]

export const data = 
    [].concat(section16)
        .concat(section17)
        .concat(section18)
        .concat(section19)
        .concat(section20)
        .concat(section21)

