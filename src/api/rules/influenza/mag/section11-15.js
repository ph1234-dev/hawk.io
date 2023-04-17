import { encodeMemory } from "@/api/configuration/model"

let section11 = [
    // antihistamines
    encodeMemory([
        "* ngen * generic * (!antihistamines?|benadryl|citerizine) * "
    ],[
        "Su Citirezine na isa a mapayag a gamot na nya nin generic a ngala na antihistamines"
    ],7),
    encodeMemory([
        "* ngen * branded * (!antihistamines?|benadryl|citerizine) * "
    ],[
        "Su Benadryl na isa a mapayag a gamot na nya nin generic a ngala na antihistamines"
    ],7),
    encodeMemory([
        "* ngen * dose * (!antihistamines?|benadryl|citerizine)*",
        "* panon * (gamit|kan|inom) * (!antihistamines?|benadryl|citerizine) * ",
        "* ngen * ukit * (!antihistamines?|benadryl|citerizine) * ",
        "* panon * (!antihistamines?|benadryl|citerizine)  * (gamit|kan|inom) *",
    ],[
        "Su antihistamine na kapay nengka pegkanin apya da ka kan o minum ka sa ig o gatas enggu di get kagatel tyan nengka. Nyaba I enggula ka upama ka keman ka sa citerizine. Su nem lagon a wata apeg a matura na kapakayan a keman sa lima taman sa sapulo ka milligram uman gay. Su pat taman sa nem lagon na kapakay kelan sa lima ka milligram o dwa enggula sabad maka dwa sa sagay. So tayn manem I da makasot sa pat lagon na d papegkanen sa nya ba a gamot."
    ],7),
    encodeMemory([
        "* ngen * (!antihistamines?|benadryl|citerizine) * "
    ],[
        "Su anti histamine na embalangan a gamot na penggamited n madakel sa kapenggamot s allergy. Nya ba silan na pakadtabang upama ka madakel ged I histamine nu taw. Nya ba na chemical na pagumbalen nu lawas nu gagaysa. Nya ba gamot na penggamitin nu madakel sa allergy sa polen abpeg kaped pan. Ugayd na kapakayan bon I penggamot sa kaped a sakit mana su sakit na nya, sepu, anxiety abpeg kaped pan."
    ],7),
    encodeMemory([
        "* endaw * (!antihistamines?|benadryl|citerizine) * gamit * ",
        "* endaw * gamit * (!antihistamines?|benadryl|citerizine) *"
    ],[
        "Su anti histamine na kagamit sekanin enggu pakatabang sa kagkayaw abpeg kaped pan a allergy. Petabang sekanin sa histamine na pagumablen nu lawas nu taw. Nya ba histamine a nya na nya ba su pakangguna sa kagatel, kambalen, pagigis a sepu abpeg a pagig a mata. Sa kaped a taw na su histamine na pakatabang sa brncial tubes na napintuan a papegkalgen sa kapengginawa."
    ],7),
    encodeMemory([
        "* panon * galbek * (!antihistamines?|benadryl|citerizine)  *",
        "* panon * (!antihistamines?|benadryl|citerizine)  * galbek * ",
        "* (duken|panon) * antihistamines? * (awa|gamot|kapya|tabang) *"
    ],[
        "Su antihistamine na papedtelnin nin su epekto nu histamine sa lawas nu taw."
    ],7),
    encodeMemory([
        "* kano * di * (kan|inom|gamit) * (!antihistamines?|benadryl|citerizine)  * "
    ],[
        "Kadakelan sa mga taw na da bun manggulanin upama ka keman silan sa antihistamine. Ugayd na sum ga magingay, papedsusu, wata , pegkan sa kaped a gamot, aden mga sakit nin a mana sakit sa pamusungan, atay, kidney, o epilepsy na mangingat sa nya ba a gamot."
    ],7),
    encodeMemory([
        "* di * mapya * epekto * (!antihistamines?|benadryl|citerizine) * "
    ],[
        `Mana kaped a gamot, aden dikena mapya a epekto na antihistamine. 

        Aw na to na su antihistamines na malangot ka nin, makapatulog ka nin, makaawa sa bagel, di ka ged makapagitong. Tu ba nana da ka papedtalagoy sa trak or pengamit sa makina upama ka kiman ka sa nya ba.  Nya ba gamot na maka lenok, maka balg, malgen I ka titi nu taw.
        
        Su di manem makalangot a embalangan na antihistamine na aw nato na makalangot bon, maka lenok, aw na to di mapya ged manggiginawa nengka. 
        `
    ],7),
    encodeMemory([
        "* ngen * (tips|enggulan) * (!antihistamines?|benadryl|citerizine)  * "
    ],[
        "Upama ka keman ka nya ba a gamot na da ka paginom sa aden alchohol nin abpeg a makandadalangot. Da ka ged pengalbek sa mga galbekan a makapagitong ka gayd. Panginat ka bon upama ka su aden sakit nin na aden hepatic abpeg a renal impairment nin. Pagidsan bun sa matuwa ka nya malmo nilan mangedam I dikena mapya a epekto na nya ba."
    ],7),
    encodeMemory([
        "* pila * (!antihistamines?|benadryl|citerizine) * ",
        "* (!antihistamines?|benadryl|citerizine)  * pila * "
    ],[
        "Su alaga na citerizine na embidabida. Su antihistamine a mana su citerizine na 10mg na nya nin alaga sa 15 pilak sa Wasons. Su Benadryl manem na 41 pilak."
    ],7),
    encodeMemory([
        "* embalangan * (!antihistamines?|benadryl|citerizine)  * "
    ],[
        "Su antihistamines na madakel I embalangan nin mana igen, ipegkugil, syrup, gel, eyedrops, tablitas, capsules, creams abpeg I pegsumbok sa pudit nu taw. "
    ],7),
    encodeMemory([
        "* sambi * (!antihistamines?|benadryl|citerizine)  * "
    ],[
        "Tekaw ka kan sa luya. Niya tig na Sinus and Allergy Wellness Center na namba na natural a histamine. Niya nin mana na isa sekanin a pakadtabang sa lawas. So luya na mapya a makadtabang a gamot kagina pakadtabang sekanin sa lawas. Kapakay ka mumbal sa sa ti para makatabang sa kapedsakit na ulo. Upama ka pagigop ka manem sa ti na, pagebaw ka it to ba. Mayto bon na tekaw ka gamit sa kaped pan a gamut mana su kalawag ka mabagel I namba a natural a gamot."
    ],7),
    // analgesic
    encodeMemory([
        "* ngen * generic * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  * "
    ],[
        "Su generic a ngala nin na paracetamon, acetaminophen abpeg aspirin."
    ],7),
    encodeMemory([
        "* ngen * branded * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) * "
    ],[
        "Su mga branded na ngala na paracetamol na biogesis abpeg calpol. Sa aspirin manem na aspen abpeg anthrom."
    ],7),
    encodeMemory([
        "* ngen * dose * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) * ",
        "* panon * (gamit|kan|inom) *  (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  * ",
        "* ngen * ukit * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) * ",
        "* panon * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  * (gamit|kan|inom) *"
    ],[
        "Su analgesics na embalangan na gamot na papagenda sa mga masakit sa lawas. Maya ba I kapengkan sa nya ba gamot. Su ibuprofen na nya nin den pinaka masla a dose nin a makaysa nengka kanin na 400mg bo. Sa sagay n ataman sa 1200mg I kapakayan. Upama ka naproxen, na kapakay ka keman sa 500mg sa makaysa. Ugayd n ataman bo I namba sa 750 sa sagay.. sa acetaminophen na taman sa 1000mg  sa sagay ugayd na di kapakayan na lumampas ka pan sa 400mg. sa aspirin , na kapakay I 1000mg a makaysa a dose ugayd na sa gay na 3000mg bo sa mga taw a mababa I umul nin sa 65. Umapa manem ka mas matuwa pan san na taman bo sa 200mg."
    ],7),
    encodeMemory([
        "* ngen * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  * "
    ],[
        "Su analgesics na papagenda sa kasakit nu lawas mana su sakit na ulo abpeg a arthiritis. Su embalangan na nya nilan bedtuan na anti-inflammatory analgesics manem na pakadtabang sa lebag. Su opiod analgesics manem na gasalin nin su utek nu tao sa panun I kangedam nin sa masakit."
    ],7),
    encodeMemory([
        "* endaw * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  * gamit * ",
        "* endaw * gamit * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  "
    ],[
        "Su mga gamot a masakit na kapama I namba sa botika a mana su ibuprofen abpeg a acetaminophen o paracetamol. Nya ba na makadtabang sa sakit a lawas. Ugayd na su kabagel na gamot na dipindi sa kasla enggo kasakit a ganggegedam nu taw. Nya bam ga gamot a gapama sa botika na kapakayan bo sa mga dikena ged tanto a masakit a kanggegedam. Di ba nya silan kapakayan pengkanen sa edtutundog a gay. Di bon kapakayanan na edsubla ka sa kakan nengka sa nya ba gamot."
    ],7),
    encodeMemory([
        " * panon * galbek * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        "* panon * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  * galbek *",
        "* (duken|panon) * analgesics? * (awa|gamot|kapya|tabang) *"
    ],[
        "Aden dwa embalangan na analgesics. Su anti-inflammatory analgesics abpeg su opoids. Su anti-inflammatory a mga gamot na pakadtabang sa lebas a lawas abpeg sa mga masakit a kanggegedam nengka. Nya bam ga gamot na mana su acetaminophen , aspirin abpeg nons teroidal anti-inflammatory drugs mana su ibuprofen abpeg a naproxen. Su analgesic opiods manem na pedsalinen nin su utek tano, sa panon I katuntay tano sa masakit. nya ba a gamot a mana su fentanyl, hydrocodone abpeg methadone."
    ],7),
    encodeMemory([
        "* kano * di * (kan|inom|gamit) * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  * "
    ],[
        "Nya tig na WebMD, na di ka paginom sa namba gamot upama ka so sakit nengka nan aka sapulo gay den. Di dayt a penggamuten I nya ba upama ka su mayaw nu tao na sobla den sa tlo gay. Upama ka mauma den sa may aba na pailay ka den sa doctor ka basi sakabiyas den a dalo I namba."
    ],7),
    encodeMemory([
        "* di * mapya * epekto * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  * "
    ],[
        "Su anti-inflammatory analgesics na di bun makagkayd. Ugayd na aden I nya bam ga side effect nin. Aden bun kagkayd nin sa ped. Upama ka gamiten I I nya ba edtandang o gamiten nengka sa mawget na pakabinasa ba I nya bas a ludep a lawas nu taw. Gabinasa nin su atay abpeg su kidney. Makadtaguno abpeg a madtegan pan I nya ba. Makadsakit sa tangila abpeg makabinasa ba I nya sa tyan."
    ],7),
    encodeMemory([
        "* ngen * (tips|enggulan) * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  *"
    ],[
        "Pegkanin I nya ba a gamot. Inom ka sa ig mga walo ka baso. Da ka pagiga sa mga sapulo ka minutos kapasad nengka keman sa nya ba gamot. Upama ka edsakit I tyan nengka kapasad nengka keman sa nya ba na kan ka sa pegken o inom ka s agatas. "
    ],7),
    encodeMemory([
        "* pila * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  * ",
        "* (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) * pila *"
    ],[
        "Niya tig na Muramed apbeg Watsons na su paracetamol na mga 4 o pat pilak. So aspirin manem na aw na to na lemedsu sa 3.5 pilak. Namba na nakalista sa Watson pharmacy. Ugayd na di ba I namba gapamasa sad ala riseta nin endu aw na to na edsasakabiyas I alaga nin I to ba. "
    ],7),
    encodeMemory([
        "* embalangan * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) * "
    ],[
        "Su analgesics na aw na to na nya nin buntal na film, ig, nasal spray, tablitas, capsules, aw na to na powder"
    ],7),
    encodeMemory([
        "* sambi * (!loperamide|imodium) *"
    ],[
        "Su Philippine Institute of Traditional and Alternative Healthcare na niya nilan tig na makadtabang kon su palya, yerba Buena, ulasimang bato o pansit-pansita, endu so bayabas kagina aden kon analgesic effect nilan."
    ],7),
    // nsaids
    encodeMemory([
        "* ngen * generic * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  *"
    ],[
        "Su NSAID na mga ngala na generic a gamut a mana su ibuprofen, naproxen abpeg a aspirin na kapamasa sa botika a anti-inflammatory"
    ],7),
    encodeMemory([
        "* ngen * branded * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  *"
    ],[
        "Su advil na isa sa na namba a kila a ibuprofen. Su Flanax forte manem na isa bon sa kila a Naproxen."
    ],7),
    encodeMemory([
        "* ngen * dose * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * ",
        "* panon * (gamit|kan|inom) * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * ",
        "* ngen * ukit * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * ",
        "* panon * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  * (gamit|kan|inom) *"
    ],[
        "Nya ba I ukit na gamutan nin. Su ibuprofen na nya den pinakamasla nin a gamutan sa saka iuman na 400mg. sa sagay na 1200mg bo. Sa naproxen na nya den pinaka masla na 500mg sa saka inuman. Sa sagay na 650mg bo. Sa aspirin n ataman bo sa 1000mg. nya den pinaka masla a makan nu taw na 1000mg sa saka inuman. nya den pinaka masla kapakayan sa sagay na 3000mg sa taw na nya nin umul na mababa sa 65. 200 mg mamen sa tayn I matuwa pan sa 65."
    ],7),
    encodeMemory([
        "* ngen * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * "
    ],[
        "Su non-steroidal anti-inflammatory drugs o NSAIDs na mga gamot a pakadtabang sa kagamot sa mga sakit nu lawas, lebag abpeg mayaw."
    ],7),
    encodeMemory([
        "* endaw * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * gamit * ",
        "* endaw * gamit * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * "
    ],[
        "Nya ba mga gamot na pengamitin na madakel sa sakit sa ulo, upama ka nalepu I taw, aden sepu ni, aden rayuma nin abpeg ped pan a sakit."
    ],7),
    encodeMemory([
        "* panon * galbek * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)   *",
        "* panon * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * galbek * ",
        "* (duken|panon) * nsaids? * (awa|gamot|kapya|tabang) *"
    ],[
        "Nya penggululan na NSAID na papagendan nin su cyclooxygenase na pagumbalen nu lawas sa kapagumbal sa prostaglandins. Papegkapaydun nin I nya ba. Su nya ba gamot na pakadtabang sa mayaw abpeg a lebag enggu mga masakit sa lawas"
    ],7),
    encodeMemory([
        "* kano * di * (kan|inom|gamit) * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)    * "
    ],[
        "Su NSAID a mga gamot na dikena ba I nya ba mapya sa mga taw a aden sakit nin sa kidney, pamusungan, cirrhosis, abpeg tayn I pegkan sa padtagiti. Su kaped a pasinti na na pagallergy sa aspirin na kapakay pegkan sa nya bam ga gamot ugayd na imbityala nengka muna I namba sa doctor. "
    ],7),
    encodeMemory([
        "* di * mapya * epekto * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  * "
    ],[
        "Mana kaped a gamot, aden bun dikena mapya a manggula nu taw amayka keman sekanin sa NSAID. Nya ba na manggedam nu taw a pengkan sa sobra I kadakel a kanggamot nin , aw na to na matuwa den , aw na to dikena mapya I kangiginawa nin. Su NSAID a kapamasa sa botika na aw na to na paydo bo I side effect nin upama ka ilayn ta I mga mabagel a to a gamot na iberesita na doctor. Su taw na pegkan sa nya ba na aw na to na makagedam sa sakit na ulo, kapegkalangot, allergy, sakit sa atay, kidey, pamusungan abpeg a stroke. "
    ],7),
    encodeMemory([
        "* ngen * (tips|enggulan) *  (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  * "
    ],[
        "Da ka papedsalngan sa kakan nengka sa NSAID. Upama ka keman ka sa aspirin o iburprofen , na dala ka pegkan sa kaped a NSAID bon. "
    ],7),
    encodeMemory([
        "* pila * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  * ",
        "* (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  * pila * "
    ],[
        "Nya alaga na nya ba gamot tig a Watson pharmacy na walo pilak uman isa. "
    ],7),
    encodeMemory([
        "* embalangan * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)   * "
    ],[
        "Su nsaids na aw na to na nya nin buntal na capsules, tablitas, ipegkugil, o gel. "
    ],7),
    encodeMemory([
        "* sambi * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  * "
    ],[
        `Su NSAID na aden mga di mapya nin a side effect. Bago ka enggamot sa nya ba na aden mga kaped a kapakayan nengka pan kanen.

        Isa sa nya ba na su paracetamol a kapamasa bon sa mga botika sa apya da den resita nin. Kadakelan sa mga taw na di bon nya makagkayd a gamot.
        `
    ],7),
    // decongestants
    encodeMemory([
        "* ngen * generic * (!decongestants?|pseudoephedrine|sudafed) *"
    ],[
        "Isa sa mga kilala a mga gamot na decongestant na su pseudoephedrine phenylephrine."
    ],7),
    encodeMemory([
        "* ngen * branded * (!decongestants?|pseudoephedrine|sudafed) *"
    ],[
        "Su decolgen abpeg su Sudafed na nya ba nga mga branded a gamot."
    ],7),
    encodeMemory([
        "* ngen * dose * (!decongestants?|pseudoephedrine|sudafed) * ",
        "* panon * (gamit|kan|inom) * (!decongestants?|pseudoephedrine|sudafed) * ",
        "* ngen * ukit * (!decongestants?|pseudoephedrine|sudafed) * ",
        "* panon * (!decongestants?|pseudoephedrine|sudafed)  * (gamit|kan|inom) *"
    ],[
        `Su kapegkan sa nya ba gamot na nakadepended sa gamot a pengkanin. Upamaka ka nya nengka pinamasa na pseudoephedrine o Sudafed, the su gamutan nin na 60mg a tablitas. Umapa ka sui gen I kanen nengka na 30mg in 5ml.

        Su matuwa abpeg a wat ana nya nin lagon 12 taman sa 17 na nya gamutan nin na 60mg tablet o dwa ka 5ml nu igen a gamot a to taman sa makapat sa sagay.
        
        Sa mga wata a nem lagon taman sa sapulo enggu isa na sabad ka tablitas mana 30mg bo o 5ml a salidot nu igen a gamot taman sa makapat sa sagay.
        `
    ],7),
    encodeMemory([
        "* ngen * (!decongestants?|pseudoephedrine|sudafed)  * "
    ],[
        "Su decongestant na gamot a pakadtabang sa di ged pakaginawa sa ngilong. Papedtanan nin  I lebag a nan abpeg su ngog nu taw. Da ged epekto nin I namba sa pagigingis I ngog nin abpeg pembaln."
    ],7),
    encodeMemory([
        "* endaw * (!decongestants?|pseudoephedrine|sudafed) * gamit * ",
        "* endaw * gamit * (!decongestants?|pseudoephedrine|sudafed)   * "
    ],[
        "Su decongestants na mga gamot a pakadtabang sa di pakaginawa ka naalnan I ngilong nin sa ngog. Namba di nin a nan kapenginawa na sabap ba I naman sa sa virus or sakit a flu, sinusitis o allergy."
    ],7),
    encodeMemory([
        "* panon * galbek * (!decongestants?|pseudoephedrine|sudafed) *",
        "* panon * (!decongestants?|pseudoephedrine|sudafed) * galbek * ",
        "* (duken|panon) * decongestants? * (awa|gamot|kapya|tabang) *"
    ],[
        "Su decongenstant na nya nin galbek na papedsimpiten nin su blood vessels sa ngilon. Su blebag a tissue na ngilong na pegkanawt enggu pegkapya kapengginawa nu taw."
    ],7),
    encodeMemory([
        "* kano * di * (kan|inom|gamit) * (!decongestants?|pseudoephedrine|sudafed) * "
    ],[
        "Da ka pegkan sa decongenstants upama ka mapulo I lugo nengka o di nengka ka control I namaba kagina makagkapulo nya ba sa lugo. Ilay ka sa kaped a kapakayan nengka kanin. Enggu di ka papegkan su wata a mababa pan sa nem lagon sa nya ba a agamot."
    ],7),
    encodeMemory([
        "* di * mapya * epekto * (!decongestants?|pseudoephedrine|sudafed) * "
    ],[
        "Su decongenstants na aw na to na aden side effect nin. Aw na to na nya ba gamot na malmu ta makakedu, malagot, abpeg makatulog. Aw nato na makagkalngkas I nya ba sa kapenginawa o kapulo I lugo nengka."
    ],7),
    encodeMemory([
        "* ngen * (tips|enggulan) *  (!decongestants?|pseudoephedrine|sudafed)  * "
    ],[
        "Su decongestatnt na kapakay pegkanen sa ngali endu makaginawa taw a aden sakit nin sa ngilog."
    ],7),
    encodeMemory([
        "* pila * (!decongestants?|pseudoephedrine|sudafed) * ",
        "* (!decongestants?|pseudoephedrine|sudafed)  * pila * "
    ],[
        "Su alaga na nya ba gamot na embidabida uman saka botika. Su nasal spray na 90 pilak. Su drops na 78 pilak tig a rose pharmacy. Su tablitas na nem pilak tig a watsons pharmacy"
    ],7),
    encodeMemory([
        "* embalangan * (!decongestants?|pseudoephedrine|sudafed)  * "
    ],[
        "Su decongestants na nya kapamasa sekanin sa nose drops , nasal sprays, eye drops, tablitas, capsuls, abpeg syrup. "
    ],7),
    encodeMemory([
        "* sambi * (!decongestants?|pseudoephedrine|sudafed)  * "
    ],[
        "Amayka di kapakayan su oral decongestants sa lek ana aden kaped nengka pan a manggamot. Umpama ka gamot bon, ka tekawi ka I antihistamines mana su Benadryl, citericine abpeg loratadine. Nya ba na makatabang bon I nya bas a barado I ngilong nin."
    ],7),

    // expectorants
    encodeMemory([
        "* ngen * generic * (!expectorants?|guaifenesin) *"
    ],[
        "Su guaifenesin abpeg potassium iodide na mga gamot ba I nyaba a generic"
    ],7),
    encodeMemory([
        "* ngen * branded * (!expectorants?|guaifenesin) *"
    ],[
        "Su mucimex abpeg na robitussin na mga kila ba nya a branded."
    ],7),
    encodeMemory([
        "* ngen * dose * (!expectorants?|guaifenesin) * ",
        "* panon * (gamit|kan|inom) * (!expectorants?|guaifenesin) * ",
        "* ngen * ukit * (!expectorants?|guaifenesin) * ",
        "* panon * (!expectorants?|guaifenesin) * (gamit|kan|inom) *"
    ],[
        `Nya ba I gamotan na guaifenesisn. 
        upama ka pembatuken, su matuwa na kapakay pegkan sa 200 taman sa 400 mg uman pat ka oras. Su wata  a 6 taman sa 12 years old na kapakay keman sa 100 taman sa 200mg uman pat ka uras.
        Su wata manem a 4 tamansa 6 lagon na 50 taman sa 100mg upan pat kauras. 
        Su wata mnem a mababa pan sa 4 years na di dayt a papengkanen sa nya ba a gamot.
        `
    ],7),
    encodeMemory([
        "* ngen * (!expectorants?|guaifenesin) * "
    ],[
        "Su expectorants na mga pakadtabang ba I nya ba na kaginawa na taw ka blue I clad abpeg ngog nu taw. "
    ],7),
    encodeMemory([
        "* endaw *  (!expectorants?|guaifenesin)  * gamit * ",
        "* endaw * gamit * (!expectorants?|guaifenesin)  * "
    ],[
        "Kapakay ka pegkan sa expectorant enggu amayka di ka ged pakaginawa sabap sa sepu. Nya ba a gamot na na aw nato na isa nin bo a gamot na da maamong sa kaped a gamot. "
    ],7),
    encodeMemory([
        "* panon * galbek * (!expectorants?|guaifenesin) *",
        "* panon * (!expectorants?|guaifenesin) * galbek * ",
        "* (duken|panon) * expectorants? * (awa|gamot|kapya|tabang) *"
    ],[
        "Su expectorants na papegkalindegen nin I ludep na ngilong nengka taman sa tidek embaba pan. Pedtabang I nya ba ka papegkalmun nin I ka lyo na ngog upama ka embatok ka. Upamaka ka ka embatok ka na malmo I ka duda nengka sa ngog abpeg klad a nan."
    ],7),
    encodeMemory([
        "* kano * di * (kan|inom|gamit) * (!expectorants?|guaifenesin) * "
    ],[
        `Embityala nengka I doctor nengka bago ka penggamot sa expectorant upama maginay ka o papedsusu ka. Upama ka nya ka kailay na nagallergy ka na telni ka gamot a nan. 
        Ingat ka sa kandrive ka o kagamit nengka sa makina upama ka pengkan ka sa expectorant kagina makandadalangot ba I nya ba
        `
    ],7),
    encodeMemory([
        "* di * mapya * epekto * (!expectorants?|guaifenesin) * "
    ],[
        "Su expectorant na da ged masla a side effect nin. Ugayd, na makandadadalangot ba I nya ba abpeg makanggagatel"
    ],7),
    encodeMemory([
        "* ngen * (tips|enggulan) *  (!expectorants?|guaifenesin) * "
    ],[
        "di ka blupet I gamot a nan. Upama ka nya nengka paginumen sui gen a gamot na bilang ka I kadakel nin. Inom ka bon sa madakel a ig upama ka pegkan ka sa expectorant."
    ],7),
    encodeMemory([
        "* pila * (!expectorants?|guaifenesin) * ",
        "* (!expectorants?|guaifenesin) * pila * "
    ],[
        "Sya sa Watson na su robitussin guaifenesisn na 92 pilak I alaga nin."
    ],7),
    encodeMemory([
        "* embalangan * (!expectorants?|guaifenesin) * "
    ],[
        "Su expectorants na kapamasa ba I nya ba sa botika apya da riseta nin. Aw na to na ig abpeg a tablitas a I nya ba."
    ],7),
    encodeMemory([
        "* sambi * (!expectorants?|guaifenesin) * "
    ],[
        "Su mga natural a expectoral na kapakay nengka bon pengamiten. Nya ba na mana su menthol, ivy leaf extract, oral hydration solutions , kapaginom sa madakel a ig, abpeg a teneb. "
    ],7),
    // antitussive
    encodeMemory([
        "* ngen * generic * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)   *"
    ],[
        "Su Dexthomethorphan abpeg diphenhydramine na mga generic antitussive"
    ],7),
    encodeMemory([
        "* ngen * branded * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)   *"
    ],[
        "Su Robitussin na isa sa namba."
    ],7),
    encodeMemory([
        "* ngen * dose * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  * ",
        "* panon * (gamit|kan|inom) * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  * ",
        "* ngen * ukit *  (!antitussives?|cough suppressants?|dextromethorphan |robitussin)   * ",
        "* panon * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  * (gamit|kan|inom) *"
    ],[
        `Nya ba I kapenggamot sa lozenges

        Upama ka aden batok nin. 
        Su matwa abpeg a wata a 12 lagon na 5 taman sa 15mg uman dwa o pat ka oras I kakan nin.
        
        Su wata a 6 taman sa 12 lagon na 5mg taman sa 15mg dwa taman sa nem ka oras.
        
        Su wata a 4 taman sa 6 lagon na 5mg uman pat ka oras.
        
        Su wata na da makasot sa 4 lagon na di pakanen sa nya ba gamot.
        
        Upama ka syrup I pakan sa tao na nya ba I gamotan nin: 
        
        Upama ka matuwa o wata a 12 lago o matuwa muwa pan na 30mg uman 6 taman sa walo ka oras.
        
        Sa wata a 6 taman sa 12 lagon na 7mg uman 4 oras o 15 uman nem taman sa walo ka oras. upama ka wata a 4 taman sa 6 lagon na 3.5mg uman pat ka oras o 7.5mg uman nem taman sa walo ka oras. 
        
        Umapa manem ka wata a mababa pan sa pat lagon na di pakenin sa nya ba a gamot.
        `
    ]),
    encodeMemory([
        "* ngen * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)   * "
    ],[
        "Su antitussives a gamot na batok na kapakayan a kapamasa apya da den resita nin ugayd na aw na to na aden bon resita nin"
    ],7),
    encodeMemory([
        "* endaw *  (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  * gamit * ",
        "* endaw * gamit * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  * "
    ],[
        "Nya ba gamot a na pegkanen upama ka matitik I batok nu taw sabap sa allergy o kaped a sakit a baga. Su antitussives na pakagamot bun sa post-viral cough o di den a nan pagenda a batok sabap sa virus infection."
    ],7),
    encodeMemory([
        "* panon * galbek * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  *",
        "* panon * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  * galbek * ",
        "* (duken|panon) * antitussives? * (awa|gamot|kapya|tabang) *"
    ],[
        "Su antitussives na papedtelenin nin su tulan a papembatok sa taw na gailay sa brain stem. Ugayd na su sakto a penggulan nin na di bun katawan na mga doctor taman saguna."
    ],7),
    encodeMemory([
        "* kano * di * (kan|inom|gamit) * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  * "
    ],[
        "Dikena ba I nya mapya a gamot sa mga wata a da man mauma I umul nin sa 4 lagon"
    ],7),
    encodeMemory([
        "* di * mapya * epekto * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  * "
    ],[
        "Nya epekto na gamot ba  a nya na aw na to na makangegedam su taw sa kapanguta, abpeg kalangot. Su kaped a pasinti na aw na to na kagatel o kalgenan silan sa ka ginawa. Upama ka masla ged a dose I nakan du taw na aw na to na di ged mapya kapagitong nin"
    ],7),
    encodeMemory([
        "* ngen * (tips|enggulan) *  (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  * "
    ],[
        "Kapakayan ba I nya ba pegkanin apya dala ka kan basta inom ka sa ig a madakel ( mga walo ka baso)"
    ],7),
    encodeMemory([
        "* pila * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)   * ",
        "* (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  * pila * "
    ],[
        "Sa southdrug store, na su dextromenthorphan syrup na 133 pilak. Sa watsons na 189 pilak. Su alaga nin a embibidaya uman botika. "
    ],7),
    encodeMemory([
        "* embalangan * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)   * "
    ],[
        "Su antitussive na madakel I embalangan nin. Aw na to na tablitas, capsul, gel, igen, syrup , lozenge o strips I nya ba. Ugayd na na saki na nya ko bo ma recommend na su legengez abpeg a syrup bo."
    ],7),
    encodeMemory([
        "* sambi * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  * "
    ],[
        "Su teneb na na gamot ba I nya ba.  Su mga nangagi sa nya ba gamot na ya tig nilan na makatabang ba I nya sa kambabatok enggu nya pan mapya sa kapamasa a gamot sa otika. "
    ],7),
    // lozenges
    encodeMemory([
        "* ngen * generic * (lozenges?) *"
    ],[
        "Su dexthromethorphan abpeg a benzocainementhol na mga generic ba I nya ba a logenzes."
    ],7),
    encodeMemory([
        "* ngen * branded * (lozenges?) *"
    ],[
        "Su bactidol abpeg a streptsil na mga branded ba I nya ba a logenzes a makadtabang sa tidek nu taw."
    ],7),
    encodeMemory([
        "* ngen * dose * (lozenges?) * ",
        "* panon * (gamit|kan|inom) * (lozenges?) * ",
        "* ngen * ukit * (lozenges?) * ",
        "* panon * (lozenges?)  * (gamit|kan|inom) *",
    ],[
        "Nya kapenggamot sa lozenges na pedtunagen sekanin sa ngali tupan na blunuken kaped na yug nu taw. Di ka pedsepa su gamot a nya o blenuk sa makaisa. Nya kapegkan na sya ba na uman dwa ka oras."
    ],7),
    encodeMemory([
        "* ngen * (lozenges?)  * "
    ],[
        "Nya ba a gamot na pakadtabang bon sa mga sakit na ngali mana su sorethroat, sore gums, mouth gums injury. "
    ],7),
    encodeMemory([
        "* endaw *  (lozenges?) * gamit * ",
        "* endaw * gamit *(lozenges?) * "
    ],[
        "Su kakan sa logenze na dikena ged malgen abpeg kapamasa sa tayn I aden sakit nin a mana su chronic pharyngitis, aden sakit nin sa respiratory tract, apeg aden kangegedam nin sa tidek nin."
    ],7),
    encodeMemory([
        "* panon * galbek * (lozenges?) *",
        "* panon *(lozenges?) * galbek * ",
        "* (duken|panon) * lozenges? * (awa|gamot|kapya|tabang) *"
    ],[
        "Upama ka su taw na enggamot sa lozenge, na lemedu I nya ba sa katunag nin ka tupamba lemyo I gamot a nan. Nan ba I ikaumbal nin sa nya ba a gamot. Mauget a gay a pedtunagen bo sa ngali enggu makagamot sa batok abpeg a tidek. Su kaped a logenzes na makatabang bon sa aden sepu. Su kaped na aden nanam nin a eucalyptus na pakadtabang sa tidek. Su kaped manem na inamungan sa teneb ka pakadtabang bon I tub a. "
    ],7),
    encodeMemory([
        "* kano * di * (kan|inom|gamit) * (lozenges?) * "
    ],[
        "Upama ka masakit I tidek nengka sa naipos a dwa gay, basi pembatuken ka den sa nakasapadian, o babalingan den I batok nengka o aw na to na aden pan mayaw nengka sakit na ulo abpeg a kagatel, lebag, aw na to na manguta ka pan na nya mapya na ebpawang ka den sa doctor."
    ],7),
    encodeMemory([
        "* di * mapya * epekto * (lozenges?)  * "
    ],[
        "Aw na to na egkasakit I tidek nengka. Amaykaaden manggedam nengka a mayaba o basi esaldseg I namba sakit nengka na ebpawang ka den sa doctor."
    ],7),
    encodeMemory([
        "* ngen * (tips|enggulan) *  (lozenges?) * "
    ],[
        "Di ka pedsepa o blenok I gamot a nya. Tunag ka sa ngali nengka. Uman dwa ka oras I kakan nengka sa nya ba gamot."
    ],7),
    encodeMemory([
        "* pila * (lozenges?) * ",
        "* (lozenges?) * pila * "
    ],[
        "Sa rose pharmacy na gaga 5 pilak ba I nya ba uman isa. Ugayd na di ta katawan sa kaped ka bibidaya ba I nyaba."
    ],7),
    encodeMemory([
        "* embalangan * (lozenges?) * "
    ],[
        "Su nya ba gamot na pedtunagen sa ngali.  Su mategas a embalangan na nya ba nan amba I tig nilan a nan a logenzes, troches o drops. So dikena ged mategas nan amba tawag nilan na pastilles, chewable, gelatin a embalangan na lozenges. Aw na to na nya nilan tig san ba na gummy. "
    ],7),
    encodeMemory([
        "* sambi * (lozenges?) * "
    ],[
        "So kasisip sa tin a aden teneb nin na makadtabang abpeg makagkapya sa tidek."
    ],7),
]

let section12 = [
    encodeMemory([
        "* endaw * gamot * influenza * ",
        "* endaw * (ilay|ebpawang) * influenza *"
    ],[
        "Kapakayan nengka pedtyakapan sakit nengka sa walay. Ugay na angay ka sa doctor upama ka nga nengka kailay na masla I mangguna na flu a nan sa leka. "
    ],5),
    encodeMemory([
        "* (ngen|kano|panon) * influenza * type a * "
    ],[
        "Su embalangan na flu a influenza a na pakaalat kanu binatang. Ugayd na sya ba I nya ba kangailay sa tao a aden mga sakit nin a makapantag kano flu."
    ],1),
    encodeMemory([
        "* (ngen|kano|panon) * influenza * type b * "
    ],[
        "Dikena mana su “type A” a embalangan na flu, su “type B” na sya bo gaton sa taw. Nya ba na dikena ged makadsakit su tao , dikena mana su “type a”. ugayd na sambidawbidaw a to na nya ba na dikena makangguna sa di ged mapya. Dikena ba I nya ba pakangguna sa pandemic."
    ],1),
    encodeMemory([
        "* (ngen|kano|panon) * influenza * type c * "
    ],[
        "Su “influenza c” virus na sya bon ga ton sa taw. Ugayd na nya ba na maslasla bon I kagkayd nin sa tao upama ka ilayn ta su “type A” abpeg su “type B”. Su taw na di ged makadalo sa nya ba. Enggu dikena bon I nya ba sekanin pakangguna sa epidemic. "
    ],1),
    encodeMemory([
        "* (ngen|panon) * bidayan * type A * type B * type c *",
        "* (ngen|panon) * bidayan * type b * type c * type a * ",
        "* (ngen|panon) * bidayan * type c * type a * type b * ",
        "* (ngen|panon) * bidayan * type A * type c * type b * ",
        "* (ngen|panon) * bidayan * type b * type a * type c * ",
        "* (ngen|panon) * bidayan * type c * type B * type a *",
    ],[
        "Su “type a” virus na pakaalat sa binatang ugayd na gaton bon sa tao. Pakanggula ba I nya bas a pandemic. Su “type b” influenza na sya bo ga ton sa tao. Dikena ged I nya ba makandadalo mana su “type a”. su “type c” na sya bon ga ton sa tao. Dikena bon I nya makandadali. Mana su “type B”, dikena bun I nya ba makaguula sa epidemic. "
    ],1),
    encodeMemory([
        "* panon * (awa|gamot|kapya|tabang) * influenza * "
    ],[
        "Aw na to na nya nengka bo kailangan o nasisita na makadegka ka engo minum sa madakel a ig para engkapya I trangkaso a nan. Ugayd na upama ka aden dalo nengka a kaped, na mataw sa kanggagagamot a mana so doctor na kapakay remeseta sa antiviral a gamut para makatabang sa trangkaso nengka."
    ],1),
]

let section13 = [
    encodeMemory([
        "* ngen * problema * tagudo * ",
        "* problema * tagudo * ngen * ",
        "* ngen * tagudo * problema *",
        "* makadtaday * influenza * problema * ",
        "* problema * makadtaday * influenza * ",
        "* influenza * problema * makadtaday * ",
    ],[
        "Su influenza na makangguna sa bacterial pneumonia, bronchitis, dehydration, ear infectins, encephalitis, sepsis, sinus infection, viral pneumonia, enggu makakagka bagel i nya bas a kapid a sakit."
    ],1),
]

let section14 = [
    encodeMemory([
        "* (ten|endaw) * idsa * (sign|symptoms|sintomas|senyales|padsa)  * influenza * ",
        "*(sign|symptoms|sintomas|senyales|padsa)  * influenza * (ten|daw) * idsa *",
    ],[
        "Kapakay ako nengka pagidsan sa mga kataw sa namba. Ugayd na upama ka nya nengka nasisita i madakel a ulaula na tekaw ka midsa lu sa Center for Disease and Control abpeg sa Department of Health. "
    ],1),
    encodeMemory([
        "* endaw * ebpawang * influenza *"
    ],[
        "Kapakay nengka pedtyakapan I sakit a nya sa walay. Ugayd, na embpawang ka sa doctor upama ka nya nengka kailay na masla I mangguna na nya ba sakit sa leka."
    ],5),
    encodeMemory([
        "* ngen * (sign|symptoms|sintomas|senyales|padsa) * influenza * ",
        "* ngen * (sign|symptoms|sintomas|senyales|padsa) * influenza * ",
        "* panon * (kataw) * influenza *",
    ],[
        "Su Center of Diseases and Control na nya nilan nadtalo na su taw a aden trangkaso nin na aden pila timan nin a sintomas. Aw na to na aden mayaw nilan, batok, blebag a tideg, sepu o di pakaginawa, pedsakit a lawas, pedsakit a ulo, abpeg a kalugat pedtandang. Su kaped na pakauta pan abpeg a pedtagudo ugayd na sya ba I nya ba kailay ged sa mga wata abpeg matuwa."
    ],1),
    encodeMemory([
        "* influenza_causes * (sign|symptoms|sintomas|senyales|padsa) * influenza * ",
        "* influenza_causes * influenza * (sign|symptoms|sintomas|senyales|padsa)  * ",
    ],[
        "Uway"
    ],1),
]

let section15 = []


export const data = 
    [].concat(section11)
        .concat(section12)
        .concat(section13)
        .concat(section14)
        .concat(section15)

