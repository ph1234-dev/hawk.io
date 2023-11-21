import { encodeMemory } from "@/api/config/model"


let section11 = [
    // antihistamines
    encodeMemory([
        `*generic * antihistamine * `,
        `di ko katawan ngin i mga generic a antihistamines`,
        `enggay ka sa mga ngala na generic a antihistamines a gamot na influenza`,
        `ngen i mga ngala na generic a antihistamines a gamot na influenza`,
        `ngin e mga generic a mga antihistamines a gamot na influenza`,
        `pangilay ako sa generic a antihistamine`,
        `ngen i generic a antihistamine`,
    ],[
        `Su citerizine na isa a kila a generic antihistamine a gapamasa sa botika. Nya ba a gamot na madakel i ngala nin depende sa dalpa abpeg minumbal lun. Upama ka pakagedam ka sa influenza, na degka ka, inom ka sa madakel a ig apeg da ka ged pagubay sa mga pembidsul. Nasisita i ka pailay sa doktor o pharmacist upama ka keman ka sa nya ba gamot. `
    ],7),
    encodeMemory([
        `* branded * antihistamine * `,
        `ngen i mga ngala na branded a antihistamines a gamot na influenza`,
        `ngin e mga branded a mga antihistamines a gamot na influenza`,
        `enggay ka sa mga ngala na branded a antihistamines a gamot na influenza`,
        `di ko katawan ngin i mga branded a antihistamines`,
        `pangilay ako sa branded a antihistamine`,
        `ngen i branded a antihistamine`,
    ],[
        `Su Bendryl na isa sa mga kila a branded a antihistamine. Tanay na na nya ba mga gamot na kanen bo upama ka aden guide na health profession. Upama ka pakagedam ka sa influenza, na degka ka, inom sa ig, endu da ka pagubay sa bel.`
    ],7),
    encodeMemory([
        `* dose * antihistamine*`,
        `* (gamit|kan|inom) * antihistamine * `,
        `* ukit * antihistamine * `,
        `* antihistamine  * (gamit|kan|inom) *`,
        `ngin i nakasugat a ukit ka kapegkan sa antihistamines`,
        `ngin i nakasugat a ukit ka kagamot sa antihistamines`,
        `ngin i nakasugat a ukit ka kainom sa antihistamines`,
        `panon i kakan sa gamot a antihistamines`,
        `panon i kainom sa gamot a antihistamines`,
        `di ko katawan i dose na kakan sa antihistamines`,
        `di ko katawan i dose na kainom sa antihistamines`,
        `di ko katawan i dose na kapenggamit sa antihistamines`,
        `su antihistamine na pano i kapegkan lon`,
        `ngin i dose na antihistamines`,
        `panon i dose na antihistamines`,
    ],[
        `Su antihistamine na kapay nengka pegkanin apya da ka kan, da ka makainum sa ig o gatas enggu di get kagatel tyan nengka. Nyaba I enggula ka upama ka keman ka sa citerizine. Su nem lagon a wata apeg a matuwa na kapakayan a keman sa lima taman sa sapulo ka milligram uman gay. Su pat taman sa nem lagon na kapakay kelan sa lima ka milligram o dwa enggula sabad maka dwa sa sagay. So tayn manem I da makasot sa pat lagon na d papegkanen sa nya ba a gamot.`
    ],7),
    encodeMemory([
        `* antihistamine * `,
        `ngin i pidtalo a antihistamines`,
        `ngen besen i antihistamines`,
        `di ko katawan ngin i antihistamines`,
        `labit ka kon ngin i antihistamines`,
    ],[
        `Su anti histamine na embalangan a gamot na penggamiten na madakel sa kapenggamot s allergy. Nya ba silan na pakadtabang upama ka madakel ged I histamine nu taw. Nya ba na chemical na pagumbalen nu lawas nu gagaysa. Nya ba gamot na penggamitin nu madakel sa allergy sa polen abpeg kaped pan. Ugayd na kapakayan bon I penggamot sa kaped a sakit mana su sakit na nya, sepu, anxiety abpeg kaped pan.`
    ],7),
    encodeMemory([
        `*antihistamine * gamit * `,
        `* gamit * antihistamine *`,
        `endaw kagamit i antihistamines`,
        `ngin besen i penggamutan na antihistamines`,
        `endaw i antihistamines kagamit`,
        `di ko katawan edaw kagamit i antihistamines`,
        `endaw penggamuten i antihistamine`,
        `kano i kainom,kakan,kagamit sa antihistamines`,
        `ngin i gamit na antihistamines`,
    ],[
        `Su anti histamine na kagamit sekanin enggu pakatabang sa allergy o mga kagkagatel. Nya ba gamot na penggamutan i sobla kadakel na histamine a pagumbalen na lawas upamaka ka pedsakit su taw. Su antihistamines na pengamiten  nu mga taw a aden allergic reaction nilan sa polens engu allergens. Pakagamot bon i nya ba sa kaped a sakit mana su sakit na nya, sepu, anxiety abpeg kaped pan.`
    ],7),
    encodeMemory([
        `* antihistamines? * (awa|gamot|kapya|tabang) *`,
        `* antihistamine  * galbek * `,
        `* galbek * antihistamine  *`,
        `di ko katawan ngin i galbek na antihistamines`,
        `ngin i galbek na antihistamines`,
        `panon besen i kapenggamot na antihistamines`,
        `panon i kapenggalbek na antihistamines`,
        `su antihistamine ngin i penggulan nin nin`,
        `panon i kagalbek na antihistamine`,
    ],[
        `Su antihistamines na penggamiten sa kapenggamot sa hay fever o kapegkayaw abpeg allergy o mga kagkagated. Papedtalenen nin su histamines a pagumbalen nu lawas upama ka aden sakit na taw a sabapan na kagkagatel, kambals, blyu edtandang i ngong, abpeg kadsakit na mata.`
    ],7),
    encodeMemory([
        `* antihistamines * di * (kan|inom|gamit) *`,
        `* di * (kan|inom|gamit) * antihistamines *`,
        `* di * (kan|inom|gamit) * antihistamine  * `,
        `di ko katawan kanu i di kanggamot sa antihistamines`,
        `di ko katawan kanu i di kainom  sa antihistamines`,
        `di ko katawan kanu i di kakan sa antihistamines`,
        `duken ka di mapya a enggamot sa antihistamines`,
        `duken ka di mapya a minom sa antihistamines`,
        `duken ka di mapya a keman  sa antihistamines`,
        `enduken ka di keman sa antihistamines i taw a aden influenza`,
        `enduken ka di  minom sa antihistamines i taw a aden influenza`,
        `kano i di kakan sa antihistamines`,
        `kano i di kainom sa antihistamines`,
        `kano i di kagamit sa antihistamines`,
        `ngen to ka di dayt a keman sa antihistamine su gagaisa a taw`,
        `ngen to ka so antihistamines na di mapya a kanen , inomen o gamiten nu taw aden influenza`,
        `nginto ka di mapakay a keman sa antihistamines`,
        `nginto ka di mapakay a minom sa antihistamines`,
        `nginto ka di mapakay a enggamot sa antihistamines`,
        `panon a to ka di mapakay a keman i taw sa antihistamines i taw a aden influenza nin`,
    ],[
        `Madakel sa mga taw na da manggulan nilan upama ka minom sa antihistamines. Ugayd na aden mga taw mana su mga maginay, papedsusu, wata , pegkan sa kaped a mga gamot, aden mga sakit nin mana su sakit a pamusungan, sakit na atay, sakit na kidney o eplipepsy na mangingat sa kapegkan sa nya ba gamot.
        `
    ],7),
    encodeMemory([
        `* di * mapya * epekto * antihistamine * `,
        `ngen i di mapya a manggula na taw a keman sa antihistamines`,
        `ngen i di mapya a manggula na taw a mininom sa antihistamines`,
        `ngen i mga di mapya a epekto amayka minom i taw sa antihistamines`,
        `ngen i mga di mapya a epekto amayka keman  i taw sa antihistamines`,
        `di ko katawan ngin di mapya manggula nu taw amayka enggamot sekanin sa antihistamines`,
        `di ko katawan ngin di mapya manggula nu taw amayka keman sekanin sa antihistamines`,
        `di ko katawan ngin di mapya manggula nu taw amayka minom sekanin sa antihistamines`,
        `su anthistamine na kano i di kapya nin pegkanen`,
        `ngin i di mapya epekto na antihistamine`,
    ],[
        `Mana kaped a gamot, aden dikena mapya a epekto na antihistamine. Nya ba na embidabida sa taw.Ugayd na su antihistamines na makalangot, makagkalbog sa kailay, makagkalgen sa kaudo, abpeg kagkalgen na ka titi. upama ka aden sakit nengka o pegkan ka sa kaped a gamot na nasisita i ka id sa nengka sa doktor o pendagang sa gamot mana su pharmacist panon i nakasugat a kakan sa nya ba.s
        `
    ],7),
    encodeMemory([
        `* tips* antihistamine  * `,
        `enggay ka sa mga tanda na kapegkan sa antihistamines`,
        `panon i mga ula ula na kapegkan sa antihistamines`,
        `ngen i mga tips na kapegkan sa antihistamine`,
        `aden mga tips nengka san ka kanggamot sa antihistamine`,
        `ngin i tips na antihistamine`,
    ],[
        `Upama ka keman ka nya ba a gamot na da ka paginom sa aden alchohol nin abpeg a makandadalangot. Da ka ged pengalbek sa mga galbekan a makapagitong ka gayd. Panginat ka bon upama ka su aden sakit nin na aden hepatic abpeg a renal impairment nin. Pagidsan bun sa matuwa ka nya malmo nilan mangedam I dikena mapya a epekto na nya ba.`
    ],7),
    encodeMemory([
        `* pila * antihistamine * `,
        `* antihistamine  * pila * `,
        `ngen i alaga na antihistamines`,
        `gagapila i antihistamines`,
        `pila i alaga na antihistamines`,
    ],[
        `Su alaga na citerizine na embidabida. Su antihistamine a mana su citerizine na 10mg na nya nin alaga sa 15 pilak sa Wasons. Su Benadryl manem na 41 pilak.`
    ],7),
    encodeMemory([
        `* embalangan * antihistamine  * `,
        `ngen i mga balangan na antihistamines`,
        `ngen i mga embalangan nu gamot a antihistamines`,
        `di ko katawan ngin i mga balangan na antihistamines`,
        `aden mga balangan na antihistamine`,
        `labit ka ngin i mga balangan na antihistamine`,
        `panon i balangan na antihistamine`
    ],[
        `Su antihistamines na madakel I embalangan nin mana igen, ipegkugil, syrup, gel, eyedrops, tablitas, capsules, creams abpeg I pegsumbok sa pudit nu taw. `
    ],7),
    encodeMemory([
        `* sambi * antihistamine  * `,
        `ngen a mga gamot i mapakay i sambi sa antihistamines`,
        `ngen i kaped a gamot a gapakay isambi sa antihistamines`,
        `aden pan kaped a gamot a mapakay inomen o kanen na taw lyu sa antihistamines para kagamotan i influenza`,
        `di ko katawan ngin pan i mga kaped a gamot lyu sa antihistamines`,
        `aden manggamot na taw lyu sa antihistamine`,
    ],[
        `Tekaw ka kan sa luya. Niya tig na Sinus and Allergy Wellness Center na namba na natural a histamine. Niya nin mana na isa sekanin a pakadtabang sa lawas. So luya na mapya a makadtabang a gamot kagina pakadtabang sekanin sa lawas. Kapakay ka mumbal sa sa ti para makatabang sa kapedsakit na ulo. Upama ka pagigop ka manem sa ti na, pagebaw ka it to ba. Mayto bon na tekaw ka gamit sa kaped pan a gamut mana su kalawag ka mabagel I namba a natural a gamot.`
    ],7),
    // analgesic
    encodeMemory([
        `* generic * analgesic  * `,
        `ngen i mga ngala na generic a analgesics a gamot na influenza`,
        `ngin e mga generic a mga analgesics a gamot na influenza`,
        `enggay ka sa mga ngala na generic a analgesics a gamot na influenza`,
        `di ko katawan ngin i generic a analgesic`,
        `ngin i mga generic a analgesic`,
        `ngen i generic a analgesic`,
    ],[
        `Su ibuprofen, acetaminophen, aspirin paracetamol, naproxen abpeg ketoprofen na mga generic analagesics. Nya ba ma gamot na pepedtalnen nin su kapagumbal nu lawas sa prostraglandins a chemical a pakangguna sa kablebag abpeg su masakit a kangegedam. Sabap sa nya ba na su mga analgesics na pakatabang sa kapapegkapaydo sa masakit abpeg mga blebag sa lawas`
    ],7),
    encodeMemory([
        `* branded * analgesic * `,
        `ngen i mga ngala na branded a analgesics a gamot na influenza`,
        `ngin e mga branded a mga analgesics a gamot na influenza`,
        `enggay ka sa mga ngala na branded a analgesics a gamot na influenza`,
        `di ko katawan ngin i branded a analgesics`,
        `ngen i mga branded a analgesic`,
        `ngen i branded a analgesic`,
    ],[
        `Su biogesic abpeg a calpol na mga branded a mga paracetamol. Nya ba ma gamot na pepedtalnen nin su kapagumbal nu lawas sa prostraglandins a chemical a pakangguna sa kablebag abpeg su masakit a kangegedam. Sabap sa nya ba na su mga analgesics na pakatabang sa kapapegkapaydo sa masakit abpeg mga blebag sa lawas`
    ],7),
    encodeMemory([
        `* dose * analgesic * `,
        `* (gamit|kan|inom) *  analgesic  * `,
        `* ukit * analgesic * `,
        `* analgesic  * (gamit|kan|inom) *`,
        `di ko katawan pano i kapegkan sa analgesic`,
        `ngin i nakasugat a ukit ka kagamot sa analgesics`,
        `ngin i nakasugat a ukit ka kainom sa analgesics`,
        `ngin i nakasugat a ukit ka kapegkan  sa analgesics`,
        `panon i kainom sa analgesic`,
        `panon i kainom sa gamot a analgesics`,
        `panon i kakan sa analgesic`,
        `panon i kakan sa gamot a analgesics`,
        `panon i kanggamot sa analgesic`,
        `panon i kapegkan  sa analgesics`,
        `panon i kapenggamot sa analgesics`,
        `ngin i dose na analgesic`,
        `panon i dose na analgesic`,
    ],[
        `Su analgesics na embalangan na gamot na papagenda sa mga masakit sa lawas. Maya ba I kapengkan sa nya ba gamot. Su ibuprofen na nya nin den pinaka masla a dose nin a makaysa nengka kanin na 400mg bo. Sa sagay n ataman sa 1200mg I kapakayan. Upama ka naproxen, na kapakay ka keman sa 500mg sa makaysa. Ugayd n ataman bo I namba sa 750 sa sagay.. sa acetaminophen na taman sa 1000mg  sa sagay ugayd na di kapakayan na lumampas ka pan sa 400mg. sa aspirin , na kapakay I 1000mg a makaysa a dose ugayd na sa gay na 3000mg bo sa mga taw a mababa I umul nin sa 65. upama manem ka mas matuwa pan san na taman bo sa 200mg.`
    ],7),
    encodeMemory([
        `* analgesic  * `,
        `ngin i pidtalo a analgesics`,
        `ngen besen i analgesics`,
        `di ko katawan ngin i analgesics`,
        `ngin i nadtalo a analgesics`,
        `ngin i analgesics`,
    ],[
        `Su mga analgesics na nabedtuan a pain killers a pagamot sa embalangan na masakit mana su masakit a ulo , su mga injuries, abpeg arthitis. Su mga anti-inflammatory analgesics na mga gamot a papegkapaydon nin su kablebgag. So opoiod analgesics manem na pedsambian nin su panun su kapegkagedam sa sakit nu taw sya kanu utek nin.`
    ],7),
    encodeMemory([
        `* analgesic  * gamit * `,
        `* gamit * analgesic  `,
        `endaw kagamit i analgesics`,
        `ngin besen i penggamutan na analgesics`,
        `edaw i analgesics kagamit`,
        `do ko katawan panon i kagamit sa analgesics`,
        `endaw penggamuten i analgesics`,
        `aden kagamutan na analgesics`,
        `di ko katawan endaw pengamiten i analgesics`,
        `kano i kainom,kakan,kagamit sa analgesics`,
        `ngin i gamit na analgesics`,
    ],[
        `Su mga over the counter a analagesics na gapamasa sa parmachies mana su ibuprofen abpeg a acetaminophen o paracetamol na pakagkapya sa mga masakit. Ugayd na ibibidaya i kapya na gamot a nan sa upaman nu sakit, su  kabagel nin, enggo su kadakel nu gamot a pegkanen. Su pain killers na gapamasa sa da resita nin na kapakayan penggamuten sa mga dikena ged mga masakit a kangedam nu taw. Ugayd na di ba inan dayt a pegkanen sa edututundog a pila gay endu su kakan sa nya ba di di dayn a pedsublan `
    ],7),
    encodeMemory([
        `* galbek * analgesic *`,
        `* analgesic  * galbek *`,
        `* analgesics? * (awa|gamot|kapya|tabang) *`,
        `panon i kapenggalbek na analgesics`,
        `ngin i galbek na analgesics`,
        `panon besen i kapenggamot na analgesics`,
        `di ko katawan ngin i analgesics`,
        `panon i kagalbek na analgesics`,
    ],[
        `Su analgesics a bedtuan bon sa pain releivers na pakatabang sa kagkapya na mga mangedam nu taw abpeg su mayaw a kadtapik nu influenza. Nya penggulan na gamot ba nan paptedtalnen nin su kapagumbal nu lawas sa chemicals a sabapan na kangedam nu taw sa masakit abpeg kablebag. Su mga common a mga analgesics a gapamasa na su acetaminophe, ibuprofen, abpeg a aspirin. Ugayd, na nasisita su kaunot sa nakasugat a kapegkan lun ka aden mga analgesics a di dayt a inumen nu taw ka makalunsan sa sakit nin.`
    ],7),
    encodeMemory([
        `* di * (kan|inom|gamit) * analgesic  * `,
        `* di * (kan|inom|gamit) * analgesics *`,
        `* analgesics * di * (kan|inom|gamit) *`,
        `duken ka di mapya a keman sa analgesics`,
        `duken ka di mapya a enggamot sa analgesics`,
        `duken ka di mapya a minom sa analgesics`,
        `kano i di kakan sa analgesics`,
        `kano i di kagamit sa analgesics`,
        `kano i di kainom sa analgesics`,
        `nginto ka di mapakay a enggamot sa analgesics`,
        `nginto ka di mapakay a keman  sa analgesics`,
        `nginto ka di mapakay a minom sa analgesics`,
        `ngen to ka so analgesics na di mapya a kanen  nu taw aden influenza`,
        `ngen to ka so analgesics na di mapya a gamiten nu taw aden influenza`,
        `ngen to ka so analgesics na di mapya a inomen nu taw aden influenza`,
        `enduken ka di keman o minom sa analgesics i taw a aden influenza`,
        `di ko katawan kano i di kakan, kainom, kanggamot sa analgesics`,
        `aden taw a di mapakay keman sa analgesics`,
        `tayn samana i di dayt a keman sa analgesics`,
        `tayn i temangka sa kakan sa analgesics`,
        `labit ka ngen i duken di mapakay a keman i taw sa analgesics`,
    ],[
        `Nya tig na WebMD, na di ka paginom sa namba gamot upama ka so sakit nengka nan aka sapulo gay den. Di dayt a penggamuten I nya ba upama ka su mayaw nu tao na sobla den sa tlo gay. Upama ka mauma den sa may aba na pailay ka den sa doctor ka basi sakabiyas den a dalo I namba.`
    ],7),
    encodeMemory([
        `* di * mapya * epekto * analgesic  * `,
        `ngen i di mapya a manggula na taw a mininom sa analgesics`,
        `ngen i di mapya a manggula na taw a keman sa analgesics`,
        `ngen i mga di mapya a epekto amayka keman i taw sa analgesics`,
        `ngen i mga di mapya a epekto amayka minom i taw sa analgesics`,
        `ngin i di mapya a epekto na analgesics`,
        `ngen i di mga pakabinasa a epekto na analgesics`,
        `enduken ka pakabinasa i analgesics`,
        `ngin i di mapya epekto na analgesics`,
    ],[
        `Su anti-inflammatory analgesics na di bun makagkayd. Ugayd na makagkayd ba i nya sa kaped a tao. Upama ka minum ka edtandang sa gamot a nya sa mawget na pakabinasa ba I nya bas a ludep a lawas nu taw. Gabinasa nin su atay abpeg su kidney. Makadtaguno abpeg a madtegan pan I nya ba. Makadsakit sa tangila abpeg makabinasa ba I nya sa tyan.`
    ],7),
    encodeMemory([
        `* tips* analgesic  *`,
        `enggay ka sa mga tanda na kapegkan sa analgesics`,
        `panon i mga ula ula na kapegkan sa analgesics`,
        `aden mga tips nengka san sa kagamot, kakan, kainom sa analgesics`,
        `ngin i mga tips na analgesics`,
    ],[
        `Pegkanin I nya ba a gamot. Inom ka sa ig mga walo ka baso. Da ka pagiga sa mga sapulo ka minutos kapasad nengka keman sa nya ba gamot. Upama ka edsakit I tyan nengka kapasad nengka keman sa nya ba na kan ka sa pegken o inom ka s agatas. `
    ],7),
    encodeMemory([
        `* pila * analgesic  * `,
        `* analgesic * pila *`,
        `ngen i alaga na analgesics`,
        `gagapila i analgesics`,
        `pila i alaga na analgesics`,
    ],[
        `Niya tig na Muramed apbeg Watsons na su paracetamol na mga 4 o pat pilak. So aspirin manem na aw na to na lemedsu sa 3.5 pilak. Namba na nakalista sa Watson pharmacy. Ugayd na di ba I namba gapamasa sad ala riseta nin endu aw na to na edsasakabiyas I alaga nin I to ba. `
    ],7),
    encodeMemory([
        `* embalangan * analgesic * `,
        `ngen i mga balangan na analgesics`,
        `ngen i mga embalangan nu gamot a analgesics`,
        `di ko katawan i mga balangan na analgesics`,
        `aden mga balangan na analgesics`,
        `labit ka ngin i mga balangan na analgesics`,
        `panon i balangan na analgesics`
    ],[
        `Su analgesics na aw na to na nya nin buntal na film, ig, nasal spray, tablitas, capsules, aw na to na powder`
    ],7),
    encodeMemory([
        `* sambi * analgesic  *`,
        `ngen i kaped a gamot a gapakay isambi sa analgesics`,
        `aden pan kaped a gamot a mapakay inomen o kanen na taw lyu sa analgesics para kagamotan i influenza`,
        `di ko katawan ngin i mga balangan na analgesics`,
        `aden mga gapakay a gamot a pegkanen lyu sa analgesics`,
        `aden mga gapakay a pegkanen, pegkanen, paginumen o gamiten nu taw lyu sa analgesics`,
    ],[
        `Su Philippine Institute of Traditional and Alternative Healthcare na niya nilan tig na makadtabang kon su palya, yerba Buena, ulasimang bato o pansit-pansita, endu so bayabas kagina aden kon analgesic effect nilan.`
    ],7),
    // nsaids
    // encodeMemory([
    //     `* generic * nsaid*`,
    //     `ngen i mga ngala na generic a nsaids a gamot na influenza`,
    //     `ngin e mga generic a mga nsaids a gamot na influenza`,
    //     `enggay ka sa mga ngala na generic a nsaids a gamot na influenza`,
    //     `di ko katawan ngin i generic a nsaids`,
    //     `labit ka sa mga generic a nsaids`,
    //     `ngen i generic a nsaids`,
    // ],[
    //     `Su NSAID na mga ngala na generic a gamut a mana su ibuprofen, naproxen abpeg a aspirin na kapamasa sa botika a anti-inflammatory`
    // ],7),
    // encodeMemory([
    //     `* branded * nsaid*`,
    //     `ngen i mga ngala na branded a nsaids a gamot na influenza`,
    //     `ngin e mga branded a mga nsaids a gamot na influenza`,
    //     `enggay ka sa mga ngala na branded a nsaids a gamot na influenza`,
    //     `di ko katawan ngin i branded a nsaids`,
    //     `labit ka sa mga branded a nsaids`,
    //     `ngen i branded a nsaids`,
    // ],[
    //     `Su advil na isa sa na namba a kila a ibuprofen. Su Flanax forte manem na isa bon sa kila a Naproxen.`
    // ],7),
    // encodeMemory([
    //     `* dose * nsaid * `,
    //     `* (gamit|kan|inom) * nsaid * `,
    //     `* ukit * nsaid * `,
    //     `* nsaid* (gamit|kan|inom) *`,
    //     `ngin i nakasugat a ukit ka kapegkan , kagamot o kainom sa nsaids`,
    //     `panon i kapegkan  o kainom o kapenggamot sa nsaids`,
    //     `panon i kakan o kainom sa gamot a nsaids`,
    //     `di ako mataw panon i dosage, dose, kakan, kainom o kanggamot sa nsaids`,
    //     `di ko katawan panon i  dosage, dose, kakan, kainom o kanggamot sa nsaids`,
    //     `ngin i dose na nsaid`,
    //     `panon i dose na nsaid`,
    // ],[
    //     `
    //     Nya ba edtalon ko ba nya na aw na to na gapakay pagunutan sa kapegkan sa mga NSAIDs.
    //     Upama ka keman su taw sa ibuprofen na nya den pinaka masla dose a kapayan kanen nu isa na 400mg. Sa isa a gay na taman bo sa 1200mg. Upama manem ka naproxen, na taman sa 500mg bo sa makaisa a kainom. Sa sagay na taman bo sa 750mg. Upama manem ka aspirin, na taman sa 1000mg sa saka inuman. Taman bo sa 3000mg sa sagay sa taw a 65 lagon. Su mga mas matuwa pan san na taman bo sa 200mg.
    //     `,
    // ],7),
    // encodeMemory([
    //     `* nsaid * `,
    //     `ngin i pidtalo a nsaids`,
    //     `ngen besen i nsaids`,
    //     `di ko katawan ngin i nsaids`,
    //     `ngin i nsaids`,
    // ],[
    //     `Su non-steroidal anti-inflammatory drugs o NSAIDs na mga gamot a pakadtabang sa kagamot sa mga sakit nu lawas, lebag abpeg mayaw.`
    // ],7),
    // encodeMemory([
    //     `* nsaid * gamit * `,
    //     `* gamit * nsaid * `,
    //     `endaw kagamit i nsaids`,
    //     `ngin besen i penggamutan na nsaids`,
    //     `edaw i nsaids kagamit`,
    //     `di ko katawan endaw kagamit i nsaids`,
    //     `kano i kainom,kakan,kagamit sa nsaids`,
    //     `ngin i gamit na nsaids`,
    // ],[
    //     `Nya ba mga gamot na pengamiten na madakel sa sakit sa ulo, upama ka nalepu I taw, aden sepu ni, aden rayuma nin abpeg ped pan a sakit.`
    // ],7),
    // encodeMemory([
    //     `* galbek * nsaid *`,
    //     `* nsaid * galbek * `,
    //     `* nsaids? * (awa|gamot|kapya|tabang) *`,
    //     `panon i kapenggalbek na nsaids`,
    //     `ngin i galbek na nsaids`,
    //     `panon besen i kapenggamot na nsaids`,
    //     `di ko katawan ngin i galbek na nsaids`,
    //     `labit ka kon panun i galbekan nu nsaids`,
    //     `panon i kagalbek na nsaids`,
    // ],[
    //     `Nya penggulan na NSAID na papagendan nin su cyclooxygenase na pengamiten nu lawas sa kapagumbal sa prostaglandins. Sabap sa kapagenda nin sa lawas sa kapagumbal sa namba, na nya ba gamot na pakadtabang sa mayaw abpeg a lebag enggu mga masakit sa lawas`
    // ],7),
    // encodeMemory([
    //     `* di * (kan|inom|gamit) * nsaid  * `,
    //     `kano i di kakan , kainom o kagamit sa nsaids`,
    //     `nginto ka di mapakay a keman, minom o enggamot sa nsaids`,
    //     `ngen to ka so nsaids na di mapya a kanen , inomen o gamiten nu taw aden influenza`,
    //     `enduken ka di keman o minom sa nsaids i taw a aden influenza`,
    //     `panon a to ka di mapakay a keman i taw sa nsaids i taw a aden influenza`,
    //     `di ko katawan kano i di kaka, kainom, o kanggamot sa nsaids`,
    //     `aden di gapakay pegkan sa nsaids`,
    //     `tayn i di dayt a keman sa nsaids`,
    // ],[
    //     `Su NSAID a mga gamot na dikena ba I nya ba mapya sa mga taw a aden sakit nin sa kidney, pamusungan, atay o cirrhosis, abpeg tayn I pegkan sa padtagiti. Su kaped a pasinti na na pagallergy sa aspirin na kapakay pegkan sa nya bam ga gamot ugayd na imbityala nengka muna I namba sa doctor. `
    // ],7),
    // encodeMemory([
    //     `* di * mapya * epekto * nsaid* `,
    //     `ngen i di mapya a manggula na taw a keman o mininom sa nsaids`,
    //     `ngen i mga di mapya a epekto amayka keman o minom i taw sa nsaids`,
    //     `di ko katawan ngin di mapya manggula nu taw amayka enggamot  sa nsaids`,
    //     `aden di mapya epekto na nsaids`,
    //     `aden mga side effect na nsaids`,
    //     `ngin i di mapya epekto na nsaid`,
    // ],[
    //     `Mana kaped a gamot, aden bun dikena mapya a manggula nu taw amayka keman sekanin sa NSAID. Su mga side effects na mangedam nu taw amayka sobra I kadakel a kanggamot nin, aw na to na matuwa den su penggamot, o aw na to dikena mapya I kangiginawa nin.
        
    //     Su taw na pegkan sa nya ba na aw na to na makagedam sa sakit na ulo, kapegkalangot, allergy, sakit sa atay, kidey, pamusungan abpeg a stroke. 
        
    //     Su NSAID a kapamasa sa botika na mas paydo I side effect nin upama ka ilayn ta i mga mas mabagel a embalangan na gamot a nya a nasisita su riseta nu doktor. `
    // ],7),
    // encodeMemory([
    //     `* tips*  nsaid* `,
    //     `enggay ka sa mga tanda na kapegkan sa nsaids`,
    //     `panon i mga ula ula na kapegkan sa nsaids`,
    //     `aden mga tips san ka kakan, kainom, o kanggamot sa nsaids`,
    //     `ngin i tips na nsaids`,
    // ],[
    //     `Da ka pegkan sa kaped a nsaid upama ka mininom ka den sa nya ba agmot. Upama ka keman ka sa aspirin o iburprofen , na dala ka pegkan sa kaped a NSAID bon. `
    // ],7),
    // encodeMemory([
    //     `* pila * nsaid* `,
    //     `* nsaid* pila * `,
    //     `ngen i alaga na nsaids`,
    //     `gagapila i nsaids`,
    //     `pila i alaga na nsaids`,
    // ],[
    //     `Nya alaga na nya ba gamot tig a Watson pharmacy na walo pilak uman isa. `
    // ],7),
    // encodeMemory([
    //     `* embalangan * nsaid * `,
    //     `ngen i mga balangan na nsaids`,
    //     `ngen i mga embalangan nu gamot a nsaids`,
    //     `di ko katawan i balangan na nsaids`,
    //     `aden mga balangan na nsaids`,
    //     `labit ka ngin i mga balangan na nsaids`,
    //     `panon i balangan na nsaids`
    // ],[
    //     `Su nsaids na aw na to na nya nin buntal na capsules, tablitas, ipegkugil, o gel. `
    // ],7),
    // encodeMemory([
    //     `* sambi * nsaid* `,
    //     `ngen i kaped a gamot a gapakay isambi sa nsaids`,
    //     `aden pan kaped a gamot a mapakay kanen na taw lyu sa nsaids para kagamotan i influenza`,
    //     `aden pan kaped a gamot a mapakay inomen na taw lyu sa nsaids para kagamotan i influenza`,
    //     `di ko katawan i kaped a gamot lyu sa nsaids`,
    //     `aden kaped a mapakay inumen , kanen, gamiten lyu sa nsaids`,
    // ],[
    //     `Isa sa nya ba na su paracetamol a kapamasa bon sa mga botika sa apya da den resita nin. 
    //     `
    // ],7),
    // decongestants
    encodeMemory([
        `* generic * decongestant *`,
        `ngen i mga ngala na generic a decongestants a gamot na influenza`,
        `ngin e mga generic a mga decongestants a gamot na influenza`,
        `enggay ka sa mga ngala na generic a decongestants a gamot na influenza`,
        `di ko katawan i generic a decongestants`,
        `labit ka sa generic a decongestants`,
        `ngen i generic a decongestant`,
    ],[
        `Su mga generic a decongestants na su pseudoephedrine, phenylephrine, abpeg oxymetazoline. Nya ba mga gamot na kapamasa sa botika apya da riseta nin. Aden ba nya ba balangan nin mana su tablitas, capsules, spray na ngilong, o liquids. Nasisista su kaunot sa dosage na nakabetad sa gamot a pinamasa nengka kagina nya ba na malamo ka nin makakedu, makagkalngas sa kagina , engo makagkapulo sa lugo`
    ],7),
    encodeMemory([
        `* branded * decongestant *`,
        `ngen i mga ngala na branded a decongestants a gamot na influenza`,
        `ngin e mga branded a mga decongestants a gamot na influenza`,
        `enggay ka sa mga ngala na branded a decongestants a gamot na influenza`,
        `di ko katawan ngin i kaped a mga branded a decongestants`,
        `labit ka sa branded a decongestants`,
        `ngen i branded a decongestant`,
    ],[
        `Kaped a kila a mga branded a decongestants na su Decolgen abpeg su Sudafed. Nasisista su kaunot sa dosage na nakabetad sa gamot a pinamasa nengka kagina nya ba na malamo ka nin makakedu, makagkalngas sa kagina , engo makagkapulo sa lugo`
    ],7),
    encodeMemory([
        `* dose * decongestant * `,
        `* (gamit|kan|inom) * decongestant * `,
        `* ukit * decongestant * `,
        `* decongestant  * (gamit|kan|inom) *`,
        `ngin i nakasugat a ukit ka kainom sa decongestants`,
        `ngin i nakasugat a ukit ka kapegkan sa decongestants`,
        `ngin i nakasugat a ukit ka kagamot sa decongestants`,
        `panon i kainom sa decongestants`,
        `panon i kapenggamot sa decongestants`,
        `panon i kapegkan  sa decongestants`,
        `panon i kainom sa gamot a decongestants`,
        `panon i gamot a decongestants`,
        `di ko katawan i dosage, dose, o ukit na kapegkan sa decongestants`,
        `panon i kapenggamit sa decongestants`,
        `ngin i dose na decongestants`,
        `panon i dose na decongestants`,
    ],[
        `Su kapegkan sa nya ba gamot na nakadepended sa gamot a pengkanin. Upamaka ka nya nengka pinamasa na pseudoephedrine o Sudafed, the su gamutan nin na 60mg a tablitas. upama ka sui gen I kanen nengka na 30mg in 5ml.

        Su matuwa abpeg a wat ana nya nin lagon 12 taman sa 17 na nya gamutan nin na 60mg tablet o dwa ka 5ml nu igen a gamot a to taman sa makapat sa sagay.
        
        Sa mga wata a nem lagon taman sa sapulo enggu isa na sabad ka tablitas mana 30mg bo o 5ml a salidot nu igen a gamot taman sa makapat sa sagay.
        `
    ],7),
    encodeMemory([
        `* decongestant  * `,
        `ngin i pidtalo a decongestants`,
        `ngen besen i decongestants`,
        `di ko katawan ngin i decongestants`,
    ],[
        `Su decongestant na gamot a pakadtabang sa di ged pakaginawa i ngilong nin. Papedtanan nin  I lebag a nan abpeg su ngog nu taw. Da ged epekto nin I namba sa pagigingis I ngog nin abpeg pembaln.`
    ],7),
    encodeMemory([
        `* decongestant * gamit * `,
        `* gamit * decongestant * `,
        `endaw kagamit i decongestants`,
        `ngin besen i penggamutan na decongestants`,
        `edaw i decongestants kagamit`,
        `di ko katawan i gamit na decongestants`,
        `kano i kainom,kakan,kagamit sa decongestants`,
        `ngin i gamit na decongestants`,
    ],[
        `Su decongestants na mga gamot a pakadtabang sa di pakaginawa ka naalnan I ngilong nin sa ngog. Namba di nin a nan kapenginawa na sabap ba I naman sa sa virus or sakit a flu, sinusitis o allergy.`
    ],7),
    encodeMemory([
        `* galbek * decongestant *`,
        `* decongestant * galbek * `,
        `* decongestants? * (awa|gamot|kapya|tabang) *`,
        `panon i kapenggalbek na decongestants`,
        `ngin i galbek na decongestants`,
        `panon besen i kapenggamot na decongestants`,
        `di ko katawan i galbek na decongestants`,
        `panon i kagalbek na decongestants`,
    ],[
        `Su decongenstant na nya nin galbek na papedsimpiten nin su blood vessels sa ngilong. Su blebag a tissue na ngilong na pegkanawt enggu pegkapya kapengginawa nu taw.`
    ],7),
    encodeMemory([
        `* di * (kan|inom|gamit) * decongestant * `,
        `* di * (kan|inom|gamit) * decongestants *`,
        `* decongestants * di * (kan|inom|gamit) *`,
        `duken ka di mapya a minom sa decongestants`,
        `duken ka di mapya a keman sa decongestants`,
        `duken ka di mapya a enggamot sa decongestants`,
        `kano i di kagamit sa decongestants`,
        `kano i di kagamit sa decongestants`,
        `kano i di kainom sa decongestants`,
        `nginto ka di mapakay enggamot sa decongestants`,
        `nginto ka di mapakay enggamot sa decongestants`,
        `nginto ka di mapakay minomsa decongestants`,
        `ngen to ka so decongestants na di mapya a kanen  nu taw aden influenza`,
        `ngen to ka so decongestants na di mapya a gamiten nu taw aden influenza`,
        `ngen to ka so decongestants na di mapya a inomen nu taw aden influenza`,
        `enduken ka di keman o minom sa decongestants i taw a aden influenza`,
        `panon a to ka di mapakay a keman i taw sa decongestants i taw a aden influenza`,
        `di ko katawan kano i di kakan sa decongestants`,
        `di ko katawan kano i di kainom sa decongestants`,
    ],[
        `Da ka pegkan sa decongenstants upama ka mapulo I lugo nengka o di nengka ka control I namaba kagina makagkapulo nya ba sa lugo. Ilay ka sa kaped a kapakayan nengka kanin. Enggu di ka papegkan su wata a mababa pan sa nem lagon sa nya ba a agamot.`
    ],7),
    encodeMemory([
        `* di * mapya * epekto * decongestant * `,
        `ngen i di mapya a manggula na taw a keman sa decongestants`,
        `ngen i di mapya a manggula na taw a mininom sa decongestants`,
        `ngen i mga di mapya a epekto amayka minom i taw sa decongestants`,
        `ngen i mga di mapya a epekto amayka keman i taw sa decongestants`,
        `di ko katawan ngin di mapya epekto na decongestants`,
        `aden mga side effects o di mapya epekto na decongestants`,
        `kano di mapya pegkanen i decongestants`,
        `ngin i di mapya epekto na decongestants`,
    ],[
        `Su decongenstants na aw na to na di mapya sa kaped a taw. Nya ba gamot na malmu ta makakedu, malagot, abpeg makatulog. Aw nato na makagkalngkas I nya ba sa kapenginawa o kapulo I lugo nengka.`
    ],7),
    encodeMemory([
        `* tips*  decongestant  * `,
        `enggay ka sa mga tanda na kapegkan sa decongestants`,
        `panon i mga ula ula na kapegkan sa decongestants`,
        `aden tips nengka san sa kakan sa decongestants`,
        `ngin i tips na decongestants`,
    ],[
        `Su decongestatnt na kapakay pegkanen sa ngali endu makaginawa taw a aden sakit nin sa ngilog.`
    ],7),
    encodeMemory([
        `* pila * decongestant * `,
        `* decongestant  * pila * `,
        `ngen i alaga na decongestants`,
        `gagapila i decongestants`,
        `pila i alaga na decongestants`,
    ],[
        `Su alaga na nya ba gamot na embidabida uman saka botika. Su nasal spray na 90 pilak. Su drops na 78 pilak tig a rose pharmacy. Su tablitas na nem pilak tig a watsons pharmacy`
    ],7),
    encodeMemory([
        `* embalangan * decongestant  * `,
        `ngen i mga balangan na decongestants`,
        `ngen i mga embalangan nu gamot a decongestants`,
        `di ko katawan i kaped a balangan na decongestants`,
        `aden balangan na decongestants`,
        `aden upaman na decongestants`,
        `labit ka ngin i mga balangan na decongestants`,
        `panon i balangan na decongestants`
    ],[
        `Su decongestants na nya kapamasa sekanin sa nose drops , nasal sprays, eye drops, tablitas, capsuls, abpeg syrup. `
    ],7),
    encodeMemory([
        `* sambi * decongestant  * `,
        `ngen i kaped a gamot a gapakay isambi sa decongestants`,
        `aden pan kaped a gamot a mapakay inomen na taw lyu sa decongestants para kagamotan i influenza`,
       `aden pan kaped a gamot a mapakay kanen na taw lyu sa decongestants para kagamotan i influenza`,
        `di ko katawan ngin pan i kaped a gamot lyu sa decongestants`,
        `aden kaped a gamot a kapakay pegkanen lyu sa decongestants`,
        `aden kaped a gamot a kapakay paginumen lyu sa decongestants`,
    ],[
        `Amayka di kapakayan su oral decongestants sa lek ana aden kaped nengka pan a manggamot. Umpama ka gamot bon, ka tekawi ka I antihistamines mana su Benadryl, citericine abpeg loratadine. Nya ba na makatabang bon I nya bas a barado I ngilong nin.`
    ],7),

    // expectorants
    encodeMemory([
        `* generic * expectorant *`,
        `ngen i mga ngala na generic a expectorants a gamot na influenza`,
        `ngin e mga generic a mga expectorants a gamot na influenza`,
        `enggay ka sa mga ngala na generic a expectorants a gamot na influenza`,
        `di ko katawan i generic a expectorants`,
        `labit ka sa generic a expectorant`,
        `ngen i generic a expectorant`,
    ],[
        `Su guaifenesin abpeg potassium iodide na generic a ngala na expectorants. Aw na to na nakasimbol ba i nya sa kaped a gamot mana su Mucinex abpeg so Robitusin. Nya ba na penggamuten sa mga sakit mana su broncitis, asthma, abpeg su sepu. Tanday ka nya ba a gamot na dikena kapakay a inumen na apya tayn den endu inumen depende sa nadtalo na healtchare professional.`
    ],7),
    encodeMemory([
        `* branded * expectorant *`,
        `ngen i mga ngala na branded a expectorants a gamot na influenza`,
        `ngin e mga branded a mga expectorants a gamot na influenza`,
        `enggay ka sa mga ngala na branded a expectorants a gamot na influenza`,
        `di ko katawan i mga branded a expectorants`,
        `labit ka sa branded a expectorant`,
        `ngen i branded a expectorant`,
    ],[
        `Su mucimex abpeg na robitussin na mga kila ba nya a branded. Nya ba a gamot na madakel i ngala nin. Ugayd na pagidsan bon i dalem nila. Nya nilan penggulan na papegkapaydon nin su sepu endu malmo i kabatok nengka. Unuti ka i dosage o nakasugat a ukit na kakan sa nya ba a gamot`
    ],7),
    encodeMemory([
        `* dose * expectorant * `,
        `* (gamit|kan|inom) * expectorant * `,
        `* ukit * expectorant * `,
        `* expectorant * (gamit|kan|inom) *`,
        `ngin i nakasugat a ukit ka kainom sa expectorants`,
        `ngin i nakasugat a ukit ka kapegkan  sa expectorants`,
        `ngin i nakasugat a ukit ka kagamo sa expectorants`,
        `panon i kapegkan sa expectorants`,
        `panon i kapenggamot sa expectorants`,
        `panon i kainom sa expectorants`,
        `panon i kainom sa gamot a expectorants`,
        `panon i kakan sa gamot a expectorants`,
        `di ko katawan panon i dose, dosage o ukit na kakan sa expectorants `,
        `su expectorant na di ako mataw panon i kainom, kakan, kagamot lun`,
        `ngin i dose na expectorant`,
        `panon i dose na expectorant`,
    ],[
        `
        Su kapenggamit sa expectorants na nakadepende sa gamot, lagon, kaugat endu lawas nu taw. 

        So mga matuwa na mapakay keman sa 200 to 400 milligrams uman pat kauras. 

        Su mga wata a 6 taman sa 12 lagon na mapakay keman sa 100 taman sa 200 mg uman pat kauras.

        Su mga wata manem a 4 taman sa 6 lagon na mapakay keman sa 50 taman sa 100mg uman pat kauras.

        Su mga bago pimbata endu da makasaw i umul nin sa 4 lagon na di pakanen sa nya ba gamot.

        Nya ba pidtalo ko a nya na makatadbang upama ka di nengka katawas panon i enggulan nengka. Ugayd na nasisita i pailay ka o angay ka sa doctor engu kainggan su taw a sa nakasugat a gamot nu sakit nin.
        `
    ],7),
    encodeMemory([
        `* expectorant * `,
        `ngin i pidtalo a expectorants`,
        `ngen besen i expectorants`,
        `di ko katawan i expectorants`,
        `ngin i expectorant`,
    ],[
        `Su expectorants na papegkalmon nin su kalyu nu ngog o klad. Sabap ba i nya na papegkadakel nin sa ig sa mga namba. Kagina mayto ba i penggulan nin na malbo i ka lyu nin sa lawas nu taw upama ka embatuken sekanin. Su mga expectornats na kagamit silan sa kapenggamot sa mga sakit mana su bronchitis, pneumonia, abpeg sepu.`
    ],7),
    encodeMemory([
        `* expectorant  * gamit * `,
        `* gamit * expectorant  * `,
        `endaw kagamit i expectorants`,
        `ngin besen i penggamutan na expectorants`,
        `edaw i expectorants kagamit`,
        `di ko katawan i gamit na expectorants`,
        `kano i kanggamut sa expectorants`,
        `kano i kakan sa expectorants`,
        `kano i kainom sa expectorants`,
        `ngin i gamit na expectorants`,
    ],[
        `Kapakay ka pegkan sa expectorant enggu amayka di ka ged pakaginawa sabap sa sepu. Nya ba a gamot na na aw nato na isa nin bo a gamot na da maamong sa kaped a gamot. `
    ],7),
    encodeMemory([
        `* galbek * expectorant *`,
        `* expectorant * galbek * `,
        `* expectorants? * (awa|gamot|kapya|tabang) *`,
        `panon i kapenggalbek na expectorants`,
        `ngin i galbek na expectorants`,
        `panon besen i kapenggamot na expectorants`,
        `di ko katawan galbek na expectorants`,
        `kano i kanggalbek na expectorants`,
        `panon i kagalbek na expectorants`,
    ],[
        `Su expectorants na papegkalindegen nin u pagukitan na sabmel sa lawas nu taw. Sabap sa namba penggulan nin na papegkalmon nin su kablyu nu ngong engu klad nu taw. Kagina malmo den i ka lyu na ngog na malmo bon i kabatok nu taw endu gaawa su ngog endu klad sa tidek `
    ],7),
    encodeMemory([
        `* di * (kan|inom|gamit) * expectorant * `,
        `aden mga taw a di mapakay a keman, minom , enggamot , gemamit sa expectorants`,
        `di ko katawan kano di kagamit sa expectorants`,
        `di ko katawan kano di kakan sa expectorants`,
        `di ko katawan kano di kakan sa expectorants`,
        `enduken ka di keman sa expectorants i taw a aden influenza`,
        `enduken ka di minom sa expectorants i taw a aden influenza`,
        `kano i di kagamit sa expectorants`,
        `kano i di kainom sa expectorants`,
        `kano i di kakan sa expectorants`,
        `ngen to ka so expectorants na di mapya a kanen , inomen o gamiten nu taw aden influenza`,
        `nginto ka di mapakay a enggamot sa expectorants`,
        `nginto ka di mapakay a keman sa expectorants`,
        `nginto ka di mapakay a minom sa expectorants`,
        `panon a to ka di mapakay a keman i taw sa expectorants i taw a aden influenza`,
    ],[
        `Embityala nengka I doctor nengka bago ka penggamot sa expectorant upama magingay ka o papedsusu ka. Upama ka nya ka kailay na nagallergy ka na telni ka gamot a nan. 
        Ingat ka sa kandrive ka o kagamit nengka sa makina upama ka pengkan ka sa expectorant kagina makandadalangot ba I nya ba
        `
    ],7),
    encodeMemory([
        `* di * mapya * epekto * expectorant * `,
        `ngen i di mapya a manggula na taw a keman sa expectorants`,
        `ngen i di mapya a manggula na taw a mininom sa expectorants`,
        `ngen i mga di mapya a epekto amayka minom i taw sa expectorants`,
        `ngen i mga di mapya a epekto amayka keman i taw sa expectorants`,
        `di ko katawan ngin e di mapya a epekto na expectorants`,
        `aden mga di mapya epekto o side effect na expectorants`,
        `ngin i di mapya epekto na expectorants`,
    ],[
        `Su expectorant na da ged masla a side effect nin. Ugayd, na makandadadalangot ba I nya ba abpeg makanggagatel`
    ],7),
    encodeMemory([
        `* tips*  expectorant * `,
        `enggay ka sa mga tanda na kapegkan sa expectorants`,
        `panon i mga ula ula na kapegkan sa expectorants`,
        `aden mga tips nengka san ka kapegkan sa expectorants`,
        `ngin i tips na expectorants`,
    ],[
        `Di ka blupet I gamot a nan. Upama ka nya nengka paginumen sui gen a gamot na bilang ka I kadakel nin. Inom ka bon sa madakel a ig upama ka pegkan ka sa expectorant.`
    ],7),
    encodeMemory([
        `* pila * expectorant * `,
        `* expectorant * pila * `,
        `ngen i alaga na expectorants`,
        `gagapila i expectorants`,
        `pila i alaga na expectorants`,
    ],[
        `Sya sa Watson na su robitussin guaifenesisn na 92 pilak I alaga nin.`
    ],7),
    encodeMemory([
        `* embalangan * expectorant * `,
        `ngen i mga balangan na expectorants`,
        `ngen i mga embalangan nu gamot a expectorants`,
        `di ko katawan i mga kaped a balangan na expectorants`,
        `aden mga balangan na expectorants`,
        `labit ka ngin i mga balangan na expectorant`,
        `panon i balangan na expectorant`
    ],[
        `Su expectorants na kapamasa ba I nya ba sa botika apya da riseta nin. Aw na to na ig abpeg a tablitas a I nya ba.`
    ],7),
    encodeMemory([
        `* sambi * expectorant * `,
        `ngen i kaped a gamot a gapakay isambi sa expectorants`,
        `aden pan kaped a gamot a mapakay inomen na taw lyu sa expectorants para kagamotan i influenza`,
        `aden pan kaped a gamot a mapakay kanen na taw lyu sa expectorants para kagamotan i influenza`,
        `di ko katawan i mapakay a isambi lyu sa expectorants`,
    ],[
        `Su mga natural a expectoral na kapakay nengka bon pengamiten. Nya ba na mana su menthol, ivy leaf extract, oral hydration solutions , kapaginom sa madakel a ig, abpeg a teneb. `
    ],7),
    // antitussive
    encodeMemory([
        `* generic * antitussive *`,
        `ngen i mga ngala na generic a antitussives a gamot na influenza`,
        `ngin e mga generic a mga antitussives a gamot na influenza`,
        `enggay ka sa mga ngala na generic a antitussives a gamot na influenza`,
        `di ko katawan i generic a antitussives`,
        `labit ka sa mga generic a antitussives`,
        `ngen i generic a antitussives`,
    ],[
        `Su Dexthomethorphan, diphenhydramine, endu codeine na mga generic antitussive. Nasisista na tandan nu taw na su mga antitussives na pagidsan bon i dalem nin sa mga branded a gamot`
    ],7),
    encodeMemory([
        `* branded * antitussive   *`,
        `ngen i mga ngala na branded a antitussives a gamot na influenza`,
        `ngin e mga branded a mga antitussives a gamot na influenza`,
        `enggay ka sa mga ngala na branded a antitussives a gamot na influenza`,
        `di ko katawan i branded a antitussives`,
        `labit ka kon ngin i mga branded a antitussives`,
        `ngen i branded a antitussive`,
    ],[
        `Su Robitussin na isa sa namba mga branded a nan a gamot. Tandan nu gagaisa na su mga branded abpeg mga generic a antitussive na pagidsan i dalem nilan. Mas mapulu bo i alaga na branded.`
    ],7),
    encodeMemory([
        `* dose * antitussive  * `,
        `* (gamit|kan|inom) * antitussive  * `,
        `* ukit *  antitussive   * `,
        `* antitussive  * (gamit|kan|inom) *`,
        `ngin i nakasugat a ukit ka kapegkan sa antitussives`,
        `ngin i nakasugat a ukit ka kainom sa antitussives`,
        `ngin i nakasugat a ukit ka kagamot sa antitussives`,
        `panon i kapenggamot sa antitussives`,
        `panon i kapegkan sa antitussives`,
        `panon i kainom sa antitussives`,
        `panon i kainom sa gamot a antitussives`,
        `panon i kakan sa gamot a antitussives`,
        `di ko katawan i dose,dosage o ukit na kakan kainom o kanggamot sa antitussives`,
        `panon kadakel i kakan sa antitussives`,
        `ngin i dose na antitussives`,
        `panon i dose na antitussives`,
    ],[
        `
        Su mga antitussives na paginumen. Ugayd na madakel i upaman nim na tablitas, capsules, syrups engo drops. So dosage na gamot a nya na nya bo makadtalo lon na isa a healthcare provided kagina pagilayn nila su lagon , kaugat nu pasente, su kabagel nu batok, endu kaped a kanggedam nu taw.
        
        kaped sa mga ula ula sa kakan sa antitussive na gaton sa mga medical resources sya sa internet. Nya nin upaman na su antitussive a nya nin buntal na lozenges. Bibidaya i ukit a kakan lol. Upama ka nya pegkan na wata a 12 lago o matuwa pan san na kapakay keman sekanin na enggamot sa 5 taman sa 15mg uman dwa taman sa pat kauras. Su mga wata manem a 6 taman sa 12 lagon na  mapakay keman sa 5 taman sa 15mg uman dwa taman sa nem kauras. Su mga wata manem a 4 taman sa 6 lagon na mapakay keman sa 5mg uman pat kauras. Ugayd na su mga wala a da makasampay sa 4 lagon i umul nin na di keman sa nya ba gamot.

        Upama manem ka antitussive na syrup na bidabida bon i kakan lon. Upama ka nya pegkan na wata a 12 lago o matuwa pan san na kapakay keman sekanin na enggamot sa 30mg uman nem taman sa walo kauras. Su mga wata manem a 6 taman sa 12 lagon na  mapakay keman sa 7mg uman pat kauras o 15mg uman nem taman sa walo ka oras. Su mga wata manem a 4 taman sa 6 lagon na mapakay keman sa 3.5mg uman pat kauras o 7.5mg uman nem taman sa walo ka oras. Ugayd na su mga wala a da makasampay sa 4 lagon i umul nin na di keman sa nya ba gamot.

        Nya ba nadtalo ko a nya na mga upaman bo na panon i kakan sa antitussive. Nasisista i kaangay nengka sa doktor engu madtalo nin ngin i mapya o nakasugat a dose para sa leka.
        `
    ],7),
    encodeMemory([
        `* antitussive   * `,
        `ngin i pidtalo a antitussives`,
        `ngen besen i antitussives`,
        `di ko katawan ngin i antitussives`,
        `ngin i antitussives`,
    ],[
        `Su antitussives a gamot na batok na kapakayan a kapamasa apya da den resita nin ugayd na aw na to na aden bon resita nin`
    ],7),
    encodeMemory([
        `* antitussive  * gamit * `,
        `* gamit * antitussive  * `,
        `endaw kagamit i antitussives`,
        `ngin besen i penggamutan na antitussives`,
        `edaw i antitussives kagamit`,
        `di ko katawan edaw kagamit i antitussives`,
        `kano penggamiten i antitussives`,
        `kano i kakan, kainom, kanggamot sa antitussives`,
        `ngin i gamit na antitussive`,
    ],[
        `Nya ba gamot a na pegkanen upama ka matitik I batok nu taw sabap sa allergy o kaped a sakit a baga. Su antitussives na pakagamot bun sa post-viral cough o di den a nan pagenda a batok sabap sa virus infection.`
    ],7),
    encodeMemory([
        `* galbek * antitussive  *`,
        `* antitussive * galbek * `,
        `* antitussives? * (awa|gamot|kapya|tabang) *`,
        `panon i kapenggalbek na antitussives`,
        `ngin i galbek na antitussives`,
        `panon besen i kapenggamot na antitussives`,
        `di ko katawan ngin i galbek na antitussives`,
        `panon i kagalbek na antitussives`,
    ],[
        `Su antitussives na papedtelenin nin su tulan a papembatok sa taw na gailay sa brain stem. Ugayd na su sakto a penggulan nin na di bun katawan na mga doctor taman saguna.`
    ],7),
    encodeMemory([
        `* di * (kan|inom|gamit) * antitussive  * `,
        `kano i di kagamit sa antitussives`,
        `kano i di kakan sa antitussives`,
        `kano i di kainom sa antitussives`,
        `nginto ka di mapakay a enggamot sa antitussives`,
        `nginto ka di mapakay a keman sa antitussives`,
        `nginto ka di mapakay a minom sa antitussives`,
        `ngen to ka so antitussives na di mapya a kanen , inomen o gamiten nu taw aden influenza`,
        `enduken ka di keman sa antitussives i taw a aden influenza`,
        `enduken ka di minom sa antitussives i taw a aden influenza`,
        `panon a to ka di mapakay a keman i taw sa antitussives i taw a aden influenza`,
        `di ko katawan kano i di dayt a kakan, kainom o kagamit sa antitussive`,
        `aden di dayt a keman, minom, enggamot, gemamit sa antitussives`,
    ],[
        `Dikena ba I nya mapya a gamot sa mga wata a da man mauma I umul nin sa 4 lagon`
    ],7),
    encodeMemory([
        `* di * mapya * epekto * antitussive  * `,
        `ngen i di mapya a manggula na taw a keman sa antitussives`,
        `ngen i di mapya a manggula na taw a mininom sa antitussives`,
        `ngen i mga di mapya a epekto amayka minom i taw sa antitussives`,
        `ngen i mga di mapya a epekto amayka keman  i taw sa antitussives`,
        `di ko katawan ngin di mapya epekto na antitussives`,
        `aden di mapya epekto o side effects na antitussives`,
        `ngin i di mapya epekto na antitussives`,
    ],[
        `Nya epekto na gamot ba  a nya na aw na to na makangegedam su taw sa kapanguta, abpeg kalangot. Su kaped a pasinti na aw na to na kagatel o kalgenan silan sa ka ginawa. Upama ka masla ged a dose I nakan du taw na aw na to na di ged mapya kapagitong nin`
    ],7),
    encodeMemory([
        `* tips*  antitussive  * `,
        `enggay ka sa mga tanda na kapegkan sa antitussives`,
        `panon i mga ula ula na kapegkan sa antitussives`,
        `aden mga tips nengka sa kapegkan sa antitussives`,
        `ngin i tips na antitussives`,
    ],[
        `Kapakayan ba I nya ba pegkanin apya dala ka kan basta inom ka sa ig a madakel ( mga walo ka baso)`
    ],7),
    encodeMemory([
        `* pila * antitussive   * `,
        `* antitussive  * pila * `,
        `ngen i alaga na antitussives`,
        `gagapila i antitussives`,
        `pila i alaga na antitussives`,
    ],[
        `Sa southdrug store, na su dextromenthorphan syrup na 133 pilak. Sa watsons na 189 pilak. Su alaga nin a embibidaya uman botika. `
    ],7),
    encodeMemory([
        `* embalangan * antitussive   * `,
        `ngen i mga balangan na antitussives`,
        `ngen i mga embalangan nu gamot a antitussives`,
        `di ko katawan i balangan na antitussives`,
        `aden mga balangan na antitussives`,
        `panon i balangan na antitussives`
    ],[
        `Su antitussive na madakel I embalangan nin. Aw na to na tablitas, capsul, gel, igen, syrup , lozenge o strips I nya ba. Ugayd na na saki na nya ko bo ma recommend na su legengez abpeg a syrup bo.`
    ],7),
    encodeMemory([
        `* sambi * antitussive  * `,
        `ngen i kaped a gamot a gapakay isambi sa antitussives`,
        `aden pan kaped a gamot a mapakay kanen na taw lyu sa antitussives para kagamotan i influenza`,
        `aden pan kaped a gamot a mapakay inomen  na taw lyu sa antitussives para kagamotan i influenza`,
        `di ko katawan ngin pan i kaped a gamot lyu sa antitussives`,
        `aden mapakay pamasen, inomen, kanen, enggamuten lyu sa antitussives`,
    ],[
        `Su teneb na na gamot ba I nya ba.  Su mga nangagi sa nya ba gamot na ya tig nilan na makatabang ba I nya sa kambabatok enggu nya pan mapya sa kapamasa a gamot sa otika. `
    ],7),
    // lozenges
    encodeMemory([
        `* generic * lozenge *`,
        `ngen i mga ngala na generic a lozenges a gamot na influenza`,
        `ngin e mga generic a mga lozenges a gamot  na influenza`,
        `enggay ka sa mga ngala na generic a lozenges a gamot  na influenza`,
        `di ko katawan i lozenges`,
        `labit ka sa generic a lozenges`,
        `ngen i generic a lozenges`,
    ],[
        `Su dexthromethorphan abpeg a benzocainementhol na mga generic ba I nya ba a logenzes.`
    ],7),
    encodeMemory([
        `* branded * lozenge *`,
        `ngen i mga ngala na branded a lozenges a gamot  na influenza`,
        `ngin e mga branded a mga lozenges a gamot  na influenza`,
        `enggay ka sa mga ngala na branded a lozenges a gamot  na influenza`,
        `di ko katawan i mga branded a lozenges`,
        `labit ka sa mga branded a lozenges`,
        `ngen i branded a lozenges`,
    ],[
        `Su bactidol abpeg a streptsil na mga branded ba I nya ba a logenzes a makadtabang sa tidek nu taw.`
    ],7),
    encodeMemory([
        `* dose * lozenge * `,
        `* (gamit|kan|inom) * lozenge * `,
        `* ukit * lozenge * `,
        `* lozenge  * (gamit|kan|inom) *`,
        `ngin i nakasugat a ukit ka kapegkan , kagamot o kainom sa lozenges`,
        `panon i kapegkan  sa lozenges`,
        `panon i kapenggamot sa lozenges`,
        `panon i kainom sa lozenges`,
        `panon i kakan sa gamot a lozenges`,
        `panon i kainom sa gamot a lozenges`,
        `di ko katawan i dose, dosage, o ukit na kakan, kainom, o kanggamot sa lozenges`,
        `su lozenges na panon i kapegkan, kapaginom, kanggamot lun`,
        `ngin i dose na lozenges`,
        `panon i dose na lozenges`,
    ],[
        `Nya kapenggamot sa lozenges na pedtunagen sekanin sa ngali tupan na blunuken kaped na yug nu taw. Di ka pedsepa su gamot a nya o blenuk sa makaisa. Nya kapegkan na sya ba na uman dwa ka oras.`
    ],7),
    encodeMemory([
        `* lozenges  * `,
        `ngin i pidtalo a lozenges`,
        `ngen besen i lozenges`,
        `di ko katawan i lozenges`,
        `ngin i lozenges`,
    ],[
        `Nya ba a gamot na pakadtabang bon sa mga sakit na ngali mana su sorethroat, sore gums, mouth gums injury. `
    ],7),
    encodeMemory([
        `* lozenge * gamit * `,
        `*  gamit *lozenge * `,
        `di ko katawan i kagamit sa lozenges`,
        `edaw i lozenges kagamit`,
        `endaw kagamit i lozenges`,
        `kano paginumen, pegkanen, penggamuten, penggamiten i lozenges`,
        `ngin besen i penggamutan na lozenges`,
        `ngin i gamit na lozenges`,
    ],[
        `Su kakan sa logenze na dikena ged malgen abpeg kapamasa sa tayn I aden sakit nin a mana su chronic pharyngitis, aden sakit nin sa respiratory tract, apeg aden kangegedam nin sa tidek nin.`
    ],7),
    encodeMemory([
        `* lozenges * (awa|gamot|kapya|tabang) *`,
        `* galbek * lozenge *`,
        `* lozenge * galbek * `,
        `di ko katawan ngin i galbek na lozenges`,
        `ngin i galbek na lozenges`,
        `panon besen i kapenggamot na lozenges`,
        `panon i kapenggalbek na lozenges`,
        `panon i kagalbek na lozenges`,
    ],[
        `Upama ka su taw na enggamot sa lozenge, na lemedsu I nya ba sa katunag nin ka tupamba lemyo I gamot a nan. Inumbal i namba engo mauget i katunag nin. Pedtunagen bo sa ngali enggu makagamot sa batok abpeg a tidek. Su kaped a logenzes na pakagamot bon sa aden sepu. Su kaped manem na aden eucalyptus nin na pakadtabang sa masakit a tidek. Su kaped manem na inamunan sa teneb`
    ],7),
    encodeMemory([
        `* di * (kan|inom|gamit) * lozenge * `,
        `aden di mapakay mamasa sa lozenges`,
        `aden di mapakay keman sa lozenges`,
        `aden di mapakay enggamot sa lozenges`,
        `di ko katawan kanu i di kakan, kainom, o kagamot sa lozenges`,
        `enduken ka di keman o minom sa lozenges i taw a aden influenza`,
        `kano i di kakan sa lozenges`,
        `kano i di kagamit sa lozenges`,
        `kano i di kainom sa lozenges`,
        `ngen to ka so lozenges na di mapya a inomen  nu taw aden influenza`,
        `ngen to ka so lozenges na di mapya a kanen nu taw aden influenza`,
        `nginto ka di mapakay a keman, minom o enggamot sa lozenges`,
        `panon a to ka di mapakay a keman i taw sa lozenges i taw a aden influenza`,
    ],[
        `Upama ka masakit I tidek nengka sa naipos a dwa gay, basi pembatuken ka den sa nakasapadian, o babalingan den I batok nengka o aw na to na aden pan mayaw nengka sakit na ulo abpeg a kagatel, lebag, aw na to na manguta ka pan na nya mapya na ebpawang ka den sa doctor.`
    ],7),
    encodeMemory([
        `* di * mapya * epekto * lozenge  * `,
        `aden di mapya epekto o side effects na lozenges`,
        `di ko katawan i epekto na lozenges`,
        `ngen i di mapya a manggula na taw a keman sa lozenges`,
        `ngen i di mapya a manggula na taw a mininom sa lozenges`,
        `ngen i mga di mapya a epekto amayka  minom i taw sa lozenges`,
        `ngen i mga di mapya a epekto amayka keman i taw sa lozenges`,
        `ngin i di mapya epekto na lozenges`,
    ],[
        `Aw na to na egkasakit I tidek nengka. Amaykaaden manggedam nengka a mayaba o basi esaldseg I namba sakit nengka na ebpawang ka den sa doctor.`
    ],7),
    encodeMemory([
        `* tips*  lozenge * `,
        `enggay ka sa mga tanda na kapegkan sa lozenges`,
        `panon i mga ula ula na kapegkan sa lozenges`,
        `aden mga tips nengka san kano i kakan, kainom, kanggamot sa lozenges`,
        `ngin i tips na lozenge`,
    ],[
        `Di ka pedsepa o blenok I gamot a nya. Tunag ka sa ngali nengka. Uman dwa ka oras I kakan nengka sa nya ba gamot.`
    ],7),
    encodeMemory([
        `* lozenge * pila * `,
        `* pila * lozenge * `,
        `gagapila i lozenges`,
        `ngen i alaga na lozenges`,
        `pila i alaga na lozenges`,
    ],[
        `Sa rose pharmacy na gaga 5 pilak ba I nya ba uman isa. Ugayd na di ta katawan sa kaped ka bibidaya ba I nyaba.`
    ],7),
    encodeMemory([
        `* embalangan * lozenge * `,
        `aden mga balangan na lozenges`,
        `di ko katawan i balangan na lozenges`,
        `ngen i mga balangan na lozenges`,
        `ngen i mga embalangan nu gamot a lozenges`,
        `labit ka ngin i mga balangan na lozenges`,
        `panon i balangan na lozenges`
    ],[
        `Su nya ba gamot na pedtunagen sa ngali.  Su mategas a embalangan na nya ba nan amba I tig nilan a nan a logenzes, troches o drops. So dikena ged mategas nan amba tawag nilan na pastilles, chewable, gelatin a embalangan na lozenges. Aw na to na nya nilan tig san ba na gummy. `
    ],7),
    encodeMemory([
        `* sambi * lozenge * `,
        `aden ba mga gamot ka gapakay pegkanen, paginumen, penggamuten lyu sa lozenges`,
        `aden pan kaped a gamot a mapakay inomen na taw lyu sa lozenges para kagamotan i influenza`,
        `aden pan kaped a gamot a mapakay kanen na taw lyu sa lozenges para kagamotan i influenza`,
        `di ko katawan i kaped a pakasambi sa lyu sa lozenges`,
        `ngen i kaped a gamot a gapakay isambi sa lozenges`,
    ],[
        `So kasisip sa tin a aden teneb nin na makadtabang abpeg makagkapya sa tidek.`
    ],7),
]

let section12 = [
    encodeMemory([
        `* endaw * ebpawang * influenza *`,
        `* endaw * gamot * influenza * `,
        `endaw kagamutan su influenza`,
        `endaw mangay i taw upama ka influenza`,
        `endaw mapakay penggamotan i influenza`,
        `influenza ako, endaw ako ebpawang`,
    ],[
        `Kapakayan nengka pedtyakapan sakit nengka sa walay. Ugay na angay ka sa doctor upama ka nga nengka kailay na masla I mangguna na flu a nan sa leka. `
    ],5),
    // encodeMemory([
    //     `* influenza * type a * `,
    //     `bityala ka sa laki i influenza type a`,
        
    // ],[
    //     `Su embalangan na flu a influenza a na pakaalat kanu binatang. Ugayd na sya ba I nya ba kangailay sa tao a aden mga sakit nin a makapantag kano flu.`
    // ],1),
    // encodeMemory([
    //     `*  influenza * type b * `,
    //     `bityala ka sa laki i influenza type b`,
    // ],[
    //     `Dikena mana su “type A” a embalangan na flu, su “type B” na sya bo gaton sa taw. Nya ba na dikena ged makadsakit su tao , dikena mana su “type a”. ugayd na sambidawbidaw a to na nya ba na dikena makangguna sa di ged mapya. Dikena ba I nya ba pakangguna sa pandemic.`
    // ],1),
    // encodeMemory([
    //     `*  influenza * type c * `,
    //     `bityala ka sa laki i influenza type c`,
    // ],[
    //     `Su “influenza c” virus na sya bon ga ton sa taw. Ugayd na nya ba na maslasla bon I kagkayd nin sa tao upama ka ilayn ta su “type A” abpeg su “type B”. Su taw na di ged makadalo sa nya ba. Enggu dikena bon I nya ba sekanin pakangguna sa epidemic. `
    // ],1),
    // encodeMemory([
    //     `* bidayan * type A * type B * type c *`,
    //     `*  bidayan * type b * type c * type a * `,
    //     `* bidayan * type c * type a * type b * `,
    //     `*  bidayan * type A * type c * type b * `,
    //     `* bidayan * type b * type a * type c * `,
    //     `*  bidayan * type c * type B * type a *`,
    //     `ngin i bidayan na influenza b,c,a`
    // ],[
    //     `Su “type a” virus na pakaalat sa binatang ugayd na gaton bon sa tao. Pakanggula ba I nya bas a pandemic. Su “type b” influenza na sya bo ga ton sa tao. Dikena ged I nya ba makandadalo mana su “type a”. su “type c” na sya bon ga ton sa tao. Dikena bon I nya makandadali. Mana su “type B”, dikena bun I nya ba makaguula sa epidemic. `
    // ],1),
]

let section13 = [
    encodeMemory([
        `* problema * influenza * `,
        `* influenza * problema *`,
        `* makadtaday * influenza * problema * `,
        `* problema * makadtaday * influenza * `,
        `* influenza * problema * makadtaday * `,
        `ngin i mga di mapya a manggula na taw a aden influenza nin`,
        `ngin i mabproblema nu taw a aden influenza nin`,
        `amayka padtadayn i influenza na ngin i manggula`,
        `ngin i manggula nu taw a pakagedam sa influenza`,
        `ngin i mabproblema nu taw a aden influenza nin`,
        `ngen i influenza`,
        `ngin i problema na influenza`
    ],[
        `Upama ka di pengamutan su influenza na makagedam su taw sa kaped a sakit mana su bacterial abpeg viral pneumonia, bronchitis o inflammed airways, sinus infection, dehydration, ear infections, encephalitis a sakit sa utek, enggo sepsis o sakit na lugo. Pakalunsan bon i nya ba kaped a sakit nu taw a mana su asthma o su aden sakit na pamusungan nin. Pakapatay i nya ba sakit sa mga mauwa endu wata a malubay i lawas nin.`
    ],1),
]

let section14 = [
    // encodeMemory([
    //     `*  idsa * sintomas  * influenza * `,
    //     `*sintomas  * influenza *  idsa *`,
    //     `endaw mapakay midsa sa sintomas na influenza`,
    //     `tayn i mapakay idsan sa sintomas na influenza`,
    //     `endaw ako mangay para midsa sa senyales na influenza`,
    //     `tayn i kaidsan sa sintomas, symptoms, senyales , padsa , tanda na influenza`,
    //     `endaw midsa sa sintomas na influenza`
    // ],[
    //     `Madtalo ko sa leka i mga sintomas na influenza. Ugayd na upama ka nya nengka nasisita i madakel a ulaula na tekaw ka midsa lu sa Center for Disease and Control abpeg sa Department of Health. `
    // ],1),
    encodeMemory([
        `* ebpawang * influenza *`,
        `endaw mangay i aden influenza nin`,
        `endaw mapagamot amengka aden influenza nu taw`,
        `endaw bagangay upama ka pedsakit sa influenza i taw`,
        `amayka pakagedam sa influenza i taw na endaw mangay`,
        `amayka pakagedam sa influenza i taw na endaw mapagamot`,
        `su taw a aden pakagedam sa influenza na endaw mangay`,
        `endaw epawang amayka aden influenza nin`
    ],[
        `Nya tig na Centers for Disease Control and Prevention na su influenza na pakaalat i namba a sakit sabap sa virus a paka infect na ngilong, tidek endu baga nu taw. 
        
        Kapakay nengka pengamutan i mga kangagedam nengka sa walay bo. Ugayd na nasisita i kapailay sa doctor. Namba silan na mapakay silan menggay sa riseta na gamot a mapamasa nengka engu pegkabagel ka. 

        `
    ],5),
    encodeMemory([
        `* sintomas * influenza * `,
        `* (kataw) * influenza *`,
        `panon i kataw na taw na sekanin a pakagedam sa influenza`,
        `ngin i mga sintomas na influenza`,
        `nganinganin i mga sintomas na influenza`,
        `ngin i ilayn sa taw a aden influenza nin`,
        `aden mga days a pagilay engo katawan i influenza`,
        `di ko katawan i sign, symptoms, sintomas , senyales o tanda na influenza`,
        `labit ka sa listahan na senyales ng flu`,
        `enggay ka sa listahan na sintomas ng flu`,
        `enggay ka sa listahan na senyales ng flu`,
        `labit ka sa listahan na sintomas ng flu`,
        `ngin i sintomas na influenza`
    ],[
        `Su Center of Diseases and Control na nya nilan nadtalo na su taw a aden trangkaso nin na aden pila timan nin a sintomas. Aw na to na aden mayaw nilan, batok, blebag a tideg, sepu o di pakaginawa, pedsakit a lawas, pedsakit a ulo, abpeg a kalugat pedtandang. Su kaped na pakauta pan abpeg a pedtagudo ugayd na sya ba I nya ba kailay ged sa mga wata abpeg matuwa.`
    ],1),
]

let section15 = []


export const data = 
    [].concat(section11)
        .concat(section12)
        .concat(section13)
        .concat(section14)
        .concat(section15)

