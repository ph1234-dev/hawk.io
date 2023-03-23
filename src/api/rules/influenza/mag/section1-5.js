import { encodeMemory } from "@/api/engine/model"


let section4 = [
    encodeMemory([
        "* (duken|panon|kano) * virus * influenza *"
    ],[
        "Su mga kagaw na makambababatok. Pakaalat I namba amayka su taw na pembatok, pembalen, o pedtagedteb ka pakadtubpa nin I yug nin sa sa sambel. Namba na paakalat sa tao amayka ka sengot nin sa ngali o ngilong nin."
    ],1),
    encodeMemory([
        "* (panon|endaw) * kwa * influenza *",
        "* kwa * influenza * (panon|endaw) * "
    ],[
        "Makwa nengka I kambabatokbatok umayka gasengap nengka su sambel nun nimbatok a tu. Su mga virus na kapakayan bun a makaalat sa leka amayka maami nengka I mga katamanan a natubpan na kagaw a to. Nya nin mana na kapakay nengka makwa umayka nadeketan nengka I langon na naabpel nu aden a to sakit nn. Ugayd na mapakay bon na upama ka su gay na pedsambi den pendtandang na makandadalo bun I to ba."
    ],1),
    encodeMemory([
        "* kwa * tagudo * dahilan_ng_influenza * "
    ],[
        "So kasengap sa sambel a natubpan na virus o kagaw endo su kapangabpel sa katamanan na naabpel nu aden dalu nin na kapakay ka nin kaalatan. I sukob nengka istidi ni mask amayka madadel I taw, gagasi ka su lima nengka , enggo gamit ka sa sabot"
    ],1),
    encodeMemory([
        "* ngin * enggay * influenza * ",
        "* ngin * maka * influenza * ",
        "* ngin * makainfluenza * "
    ],[
        "Su kambabatok na sabap ba I namba sa virus. Amayka makadsembak nengka su taw a to a aden dalo nin na makakwa ka ba nan sa sakit. Pagidsan bon upama ka mangabpel ka sa apya ngen den. Labi den upama ka abepelen nengka I mata, ngilong endu ngali nengka."
    ],1),
    encodeMemory([
        "* su_makaginfluenza * ngin  *"
    ],[
        "Nya tano nasabutan samaya na nya virus o kagaw i sabap na kambabatok. Amayka masengot nengka namba samit a nan o makabpel ka sa naabpel na kaped nengka na kapakayanan ka mama kwa sa dalo"
    ],1),
]


let section5 = [
    encodeMemory([
        "* (duken|panon) * degka * (awa|gamot|kapya|tabang) *  influenza *"
    ],[
        "Nya tinumo I da ka bylu sa walatay taman sa di maawa su kayaw nengka sa sa gay. Su taw a aden sakit nin na kagamotan bun apya di enggamot duwa taman sa pito gay. Su kadegka na mapya ka pakagkabagel sa lawas. Lyu sa katulog, na su kandegka sa walay na makatabang endu di ka kaalatan I mga kaped nengka."
    ],1),
    encodeMemory([
        "* (duken|panon) * ig * (awa|gamot|kapya|tabang) *  influenza *"
    ],[
        "Su isa a pagilayan upama ka aden sakit nengka a kambabatokbatok na amayka pegkegkel su tao abpeg a pagatingan den pedsamikel. Kapakay bun na makauta ka o edtagudo ka. Su lawas nengka na nasisita nin ig umpa mangegedam nengka I nyama enggo kasambiyan su ig na na lyo nengka sa lawas nengka."
    ],1),
    encodeMemory([
        "* (duken|panon) * degka * (awa|gamot|kapya|tabang) *  influenza *"
    ],[
        "Su kagkategel edsamikel na awna to na makambatok, makambalen, enggu makaibped sa sambel. Kapakay negka makaalat I sakit sa maya ba. Tu ba nan , degka ka sa walay bago ka gagalbek."
    ],1),
    encodeMemory([
        "* (duken|panon) * mapya * pegken * (awa|gamot|kapya|tabang) *  influenza *"
    ],[
        "su lawas nengka na nasisita nin I mapya a pegken enggo ka pegkabagel. Su mga unga na kayo endu kamo na mapya ba I namba ka madakel I vitamins, mineral endu anti oxidant nin na makagkabagel a lawas."
    ],4),
    encodeMemory([
        "* (duken|panon) * doctor * (awa|gamot|kapya|tabang) *  (awa|gamot|kapya) * influenza *"
    ],[
        "Su namba a sakit na kagamutan bon apya dala enggulan nengka. Ugayd na aw na to na pedsaldseg I namba sa kaped a mga tao. Tu ba nan upa nya nengka kailay sa ginawa nengka na aden kaped nengka a dalo, na embawang ka sa doctor upama ka aden den mangedamgedam nengka."
    ],5),
    encodeMemory([
        "* (duken|panon) * inom * ig * (awa|gamot|kapya|tabang) *  influenza *"
    ],[
        "Su isa sa padsa na namba a sakit na mapulo a mayaw, na awna to na pagatingan ka edsamikel. Aw na to na makauta ka endu makawudo ka edsamikel. Su lawas nengka na nasisita nun I madakel a ig endu kagabagel."
    ],7),
    encodeMemory([
        "* (duken|panon) * mapya * pegken * (awa|gamot|kapya|tabang) *  influenza *"
    ],[
        "su lawas nengka na nasisita nin I mapya a pegken enggo ka pegkabagel. Su mga unga na kayo endu kamo na mapya ba I namba ka madakel I vitamins, mineral endu anti oxidant nin na makagkabagel a lawas."
    ],4),
    encodeMemory([
        "* ten * (awa|gamot|kapya|tabang|ebpawang) * influenza *"
    ],[
        "Katyakapan nengka su dalo nengka sa ginawa nengka. And bum ga over-the-counter a gamot a makadtabang sa leka sa kaped nin a sakit mana su mayaw endu kadsakit na ulo. Upamaka ka aden dalo nengka na degka ka pan sa walay taman sa di embaba su kayaw nengka sa 24 oras. Iom ka sa madakel a ig, da ka ged pegkategel, endu kan na ebpyapya. Ugayd na labi bon I kapya nin upama ka mapailay sa doctor ka engu ka nilan ka enggan sa risita na gamot endu madtalo nila ngin I kapayan nengka engullan."
    ],1),
    encodeMemory([
        "* kapakay * influenza * gamot *",
        "* kapakay * gamot * influenza *"
    ],[
        "Uway. Upama ka adel dalo nengka na degka ka. Da ka blyu sa walay taman sa di maawa I kayaw nengka sa 24 oras, inom ka sa madael a ig, di ka blugata I lawas nengka, endu kan ka empyapya. Kagamutan ka bon upama ka makakan ka sa gamot a ka nga ton bun sa botika. "
    ],1),
    encodeMemory([
        "* kano * (ebpawang|kailay) * doctor * influenza * ",
    ],[
        "Su kambabatok na kagamutan bun apya da enggulan nengka. Ugayd na makalunsan ba I nya ba sa kaped a sakit nu tao. Upama ka aden kaped a sakit nengka , na nya basi mpya enggulan na pailay ka sa doctor."
    ],5),
    encodeMemory([
        "* endaw * gamutan * influenza * ",
        "* gamutan * influenza * endaw *"
    ],[
        "Kapakay nengka bon na tyakapi ka bo I ginawa nengka. Sum ga pedsaldseg i dalu nin na nya labi a mapya na pailay ka sa dokto minuna den upama ka isa ka sa mga tao a to a aden kaped a dalo nin. "
    ],5),
    encodeMemory([
        "* endaw * (kwa|pamasa) * gamot_influenza * ",
        "* endaw * gamot_influenza *  (kwa|pamasa) *",
        " endaw * (kwa|pamasa) * gamot * influenza * "
    ],[
        "Su mga over-the-coutner a gamot na pakadtabang ba I nan sa mga sipat nu dalo na kapamasa sa botika. Ugayd na dikena langon na gamot na kapamasa sad ala riseta nin mana su antiviral."
    ],5),
    encodeMemory([
        "* influenza * (awa|gamot|kapya|tabang) * panon *",
        "* (awa|gamot|kapya|tabang) * influenza * panon * ",
        "* panon  * (awa|gamot|kapya|tabang) * influenza * ",
        "* ngen * (awa|gamot|kapya|tabang) * influenza * ",
        "* ngen * influenza * (awa|gamot|kapya|tabang) * ",
        "* (awa|gamot|kapya|tabang) * influenza * panon * ",
        "* ngen * gamot * influenza * ",
        "* influenza * gamot * ngen * ",
        "* gamot * influenza * ngen *",
    ],[
        "Aden dwa a embalangan nu gamot na kambabatok. Isa na sum ga gamot a pegkontrolen nin bo su sipat nu sakit mana su antiviral. Kapakay apya seka bo I temyakap sa ginawa nengka. kagina aden mga over-the-counter a mga gamot a kapakay nengka paginumen para sa mayaw, sakit a ulo, batok endu kaped pan. Su sakit nu lawas a kagamutn manm na ibuprofen endu acetaminophen (paracetaml). Kapakay ka bon minom sa decongestant para katabangan ka sa sepu nengka. Su suppressant manem na mana su robitussin na makadtabang sa katabang sa aden batok nin. Madtabang bon su expectorant sa klad nengka. Su antihistamine na makadtabang bon sa  kaped a dalo nin mana su kambalen pedsamikel, kangagatel, endu kaawa na ngog. Sya manem sa ka tyakap sa ginawa, na upama ka aden sakit nengka na degka ka. Da ka ged blyu sa walay nengka amayka aden mayaw nengka sa naipus a 24 na oras. Inom ka bon sa madakel a ig. Da ka ged pegkategel. Kan ka sa ebpyapya. Ugayd na nya bun a benel mapya na upama ka kagaga nengka bon a angay ka sa penggamot a mana su doktol. Namba silan na kaenggan ka nilan sa riseta na gamot a mabagel endu madtalo nilan sa leka ngin I mapya enggulan."
    ],1),
]

export const data = 
    [].concat(section4)
        .concat(section5)
