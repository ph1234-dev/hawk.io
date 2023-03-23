import { encodeMemory } from "@/api/engine/model"


let section6 = [
    encodeMemory([
        "* duken * bakuna * influenza *"
    ],[
        "Saguna na dala pan gamot sa flu, ugayd na su kambakuna na makadtabang sa leka. Su flu vaccine abpeg su kapailay sa doctor uman lagon na makatabang bun. Namba na makatabang para di ged pegkabagel I sakit nu tao. Su mga tao a aden sakit nin mana su sakit na pamusungan na katabangan nin. Kagina ka mayto na su kapaguspital sabap sa nya na di ged manggula. Makatabang bon I nyaba sa magingay, wata abpeg a tao sa ubay nengka."
    ],5),
    encodeMemory([
        "* duken * di * ubay * influenza *",
        "* duken * di * ubay * influenza *",
        "* duken * (tangka|awa) * influenza *"
    ],[
        "Da ka aged pagubay sa kaped nengka upama ka aden sakit nin. Upama ka seka i aden sakit nin na tangka ka. da ka pagubay sa saka lepa sa mga tao a pembabatok. Tangka ka bon sa tayn I aden ngog nin. Da ka ged pagamong sa madakel a taw ka makwa nengka i kagaw a nan. Enggula ka I nyaba para di den makalanag I sakit a nya."
    ],5),
    encodeMemory([
        "* duken * degka * influenza *"
    ],[
        "Lenek ka sa walay amayka aden sakit nengka para di den makaalat I sakit a nan sa kaped nengka."
    ],5),
    encodeMemory([
        "* duken * taguban * (ngilong|ngali) * (influenza|batok|balen) *  influenza *"
    ],[
        "Tagubi ka I ngali abpeg ngilong nengka sa tissue upama ka pembatuken ka o pembalen ka enggu di maalat I sakit a nan sa kaped nengka."
    ],5),
    encodeMemory([
        "* duken * limpyo * lima * "
    ],[
        "Gagas ka sa lima edsamikel para di nengka madtapik I kagaw a nan. Upama ka dala sabon abpeg a ig, na bubusi ka lima nengka sa alchohol."
    ],5),
    encodeMemory([
        "* duken * gamit * face * mask * "
    ],[
        "Gamit ka sa facemask enggu di ka kaalatan  na virus kagina namba na makwa bun sa sambel o upama ka maami nengka o magamit nengka su nganin ngain a gamit na a naabpel nu tao  a to"
    ],5),
    encodeMemory([
        "* ten * mangay * influenza * ",
        "* endaw * mangay * influenza *"
    ],[
        "Madtalo ko bun seka sa ngin I enggulan nengka mana su nganin ngain a kapakay nengka magula sa walay nengka. Ugayed na saki na program a ko bo. Nya bun mapya na pailay ka sa doctor. "
    ],5),
    encodeMemory([
        "* endaw * kan * influenza * "
    ],[
        "Nya bon mapya lenek o tangka den muna di ka ged pendadalakaw para di ka makapangalat sa virus. Labi den mana nya ba a pandemic na dikena ged mapya I kakan sa lyu, malmo ka makawa sa namba virus a nan. Saguna na mas mapya I sya kawm pan sa walay lemenek."
    ],5),
    encodeMemory([
        "* endaw * pamasa * gamot * influenza * "
    ],[
        "Su mga gamot malmo gaton sa botika. Aden sari sari store a pendagang sa kaped ugayd na pangingat ka ka aw na to na expired den I to ba. Nya nin mana na dikena den mapya. Pangingat ka bon sa mga fake a mga gamot. Nya bon mapya na pamasa ka bon sa katawan ta a tidto a botika."
    ],5),
    encodeMemory([
        "* (panon|ngen) * ingat * influenza * ",
        "* (panon|ngen) * kasambot * influenza *"
    ],[
        "Nya ba I kapakayan nengka enggulan enggu di ka makakwa sa influenza. Pambakuna ka. Da ka ged pagubay sa tao a aden sakit nin. Upama ka seka I aden sakit nin na da ka muna pendadalakaw enggu di makaalat sa kapend nengka I sakit nengka. Tagubi ka I ngali nengka abpeg su ngilong nengka enggu di nengka kaalatan kaped nengka. Aw na to na gamit ka sa face mask. Pamlimpyo ka sa ginawa nengka. Gagasi ka lima nengka bago nengka pagamiin in mata,ngilong, o ngali nengka enggu di makaludep sa lawas nengka su virus."
    ],1),
    encodeMemory([
        "* kapakay * influenza * kasambutan *"
    ],[
        "Uway su virus na kapakay pendsambutan. Aden mga kapakayan nengka enggulan.  "
    ],1),
]


let section7 = [
    encodeMemory([
        "* duken * (inom|kan) * pegken_kapakay_sa_influenza * influenza * ",
        "* duken * (pamasa) * pegken_kapakay_sa_influenza * influenza *",
        "* duken * (inom|kan) *  pegken_kapakay_sa_influenza * influenza * ",
        "* pegken_kapakay_sa_influenza * (inom|kan) * influenza *  ",
        "* pegken_kapakay_sa_influenza * (mapya|tabang|kapakay) * influenza *",
        "* pegken_kapakay_sa_influenza * (mapya|tabang|kapakay) * influenza *",
    ],[
        "Kakan sa namba na makagkapya sa kangegedam nengka abpeg a matakadtabang sa kagkabagel."
    ],4),
    encodeMemory([
        "* (kapakay|mapya|tabang) * pegken * influenza * ",
        "* tagudo * pegken * (kapakay|mapya|tabang) *",
        "* influenza * (kapakay|mapya|tabang) * pegken * ",
        "* (kapakay|mapya|tabang) * influenza * pegken * ",
        "* pegken * (kapakay|mapya|tabang) * influenza *",
        "* pegken * tagudo  * (kapakay|mapia|tabang) * ",
        "* pegken * influenza * ",
        "* influenza * pegken * ",
    ],[
        `Aden embalangan a pegken na makadtabang endu engkabagel ka sa malengkas. Nya nin umpaman na su sabaw na manok, sapi o kamo na makadtabang sa dehydration engo su kayaw nin ma makadtabang sa kagkapya na tidek. Kapakay ka bon keman sa lansuna kagina makakagkapya bon I nya bas a sakit abpeg su mga padsa nin. Su mga pegken a to a aden probiotic nin a mana s yogurt na kapakay bon makadtabang sa kapegpadadakel sa mapya a bakterya na tinae abpeg nu lawas. Su mga unga na kayo abpeg su kamo na aden vitamin c na makadtabang bon. Nya nin mga kaped I nya ban a su paminta, kalamansi, grapes abpeg su mga madakel a to I lawn I a kamo. Kapakay ka bon keman sa kamo a mana su broccoli. Su oatmeal bon na aden nutrients nin mana su copper, iron, selenium, zinc fiber endo proteen na makagkabagel bon sa lawas. Kaped pan sa makadtabang na su mga luya abpeg a kalawag. Nya bon tanto a makadtabang na di ka blepatani I kainom sa madakel a ig. `
    ],4),
]


let section8 = [
    encodeMemory([
        "* duken * influenza_pegken_di_mapya * di * (inom|kan|pamasan) * influenza *",
        "* duken * di * (inom|kan|pamasan) * influenza_pegken_di_mapya * influenza *",
    ],[
        "Endu egkabagel ka, nasisita su katyakap nengka sa ginawa nengka. Nasisita na tangka ka sa mga namba kagina di ba I namba pakadtabang sa kangegedam nengka. "
    ],4),
    encodeMemory([
        "* duken * influenza_pegken_di_mapya_caffeinated * di * (inom|kan|pamasan) * influenza *",
        "* duken * di * (inom|kan|pamasan) * influenza_pegken_di_mapya_caffeinated  * influenza *"
    ],[
        "Upama ka pegkayaw ka, aw na to na ebpapulo kayaw nengka engu pagatingan ka edsamikel pan. Su dehydration na ingati ka upama ka aden mayaw nengka. Su caffein abpeg a alchohol na makalunsan sa sakit nengka. Nya mapya na igop ka ig abpeg kapid a aden ig nin uman gay"
    ],4),
    encodeMemory([
        "* duken * influenza_pegken_di_mapya_lanan * di * (inom|kan|pamasan) * influenza *",
        "* duken * di * (inom|kan|pamasan) * influenza_pegken_di_mapya_lanan * influenza *"
    ],[
        "Da ka ged keman sa pegken a malgen sa tyan nengka. Su mga lanan a benel o madakel I saturated fat nin na tangkay ka, abpeg su sinendag, abpeg a lana nin"
    ],4),
    encodeMemory([
        "* duken * influenza_pegken_di_mapya_mategas * di * (inom|kan|pamasan) * influenza *",
        "* duken * di * (inom|kan|pamasan) * influenza_pegken_di_mapya_mategas * influenza *"
    ],[
        "Su flu na aw na to na makagkasakit sa tyan. Bali kan ka bo sa mga pegken a malmo sa tyan nengka mana su simple refined carbohydrates. Su mga pegkina biskwit, pan abpeg a pretzel na kapakay negka bon kanen. Mapya bon upama ka di ka ged keman sa mga kamo a malgen gatunag sa tyan."
    ],4),
    encodeMemory([
        "* duken * influenza_pegken_di_mapya_mamis  * di * (inom|kan|pamasan) * influenza *",
        "* duken * di * (inom|kan|pamasan) * influenza_pegken_di_mapya_mamis * influenza *"
    ],[
        "Su mga madakel I mamis nin na makagkalubay sa immune system nengka a pedtabang sa mga sakit mana su flu."
    ],4),
    encodeMemory([
        "* ngen * pegken * di * (inom|kan) * influenza * ",
        "* pegken * di * (inom|kan) * influenza *",
        "* influenza * di * (inom|kan) * pegken *"
    ],[
        "Upama ka nya nengka kailay na aden flu nengka na da ka paginom o pegkan sa aden caffein nin, alchohol nin, lanan a pegken, mga malgen katunag a kamo, abpeg mga mamisen a pegken o paginumen. Nya mapya na kan sa aden sabaw nin enggu makatabang na nalyo nengka to a ig. Tekaw ka bon kan sa da nanam nin a pegken mana su pan, patatas, emay, saging, sinabawan a apple, karne a mana manok abpeg a seda."
    ],4),
    encodeMemory([
        "* (pamasa|kan|inom) * (pegken_di_mapya_influenza | influenza_pegken_di_mapya_caffeinated | influenza_pegken_di_mapya_lanan | influenza_pegken_di_mapya_mategas | influenza_pegken_di_mapya_mamis ) * influenza *"
    ],[
        "Aden mga pegken a panginati ka. Upama ka aden flu nengka, kan ka sa sinabawan, aden probiotic nin a mana su niledak a pegken, mga da nanam nin a pegken a mana su pan, patatas, emay, saging, sinabawan a apple, karne a mana su manok abpeg a seda."
    ],4),
]

let section9 = []

let section10 = [
    encodeMemory([
        "* ten * problema * influenza * ",
        "* influenza * ten * problema *",
        "* influenza * problem * ten *",
        "* problema * ten * influenza * ",
        "* problema * influenza * ten *",
    ],[
        "Aden pangkatan a mga taw a kalunansan i sakit nilan upama ka aden influenza nilan. Su taw a nem ulan abpeg su matuwa, su aden nauget den I sakit nin, mana su umer, sakit na pusong, diabities, sakit a atay, kidney, sakit na ladeb , su malubay I tulan nin, sum ga tao a nganin den I kasla nin na mangingat sa nya ba a sakit."
    ],1),
]


export const data = 
    [].concat(section6)
        .concat(section7)
        .concat(section8)
        .concat(section9)
        .concat(section10)

