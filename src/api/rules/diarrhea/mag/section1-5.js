// const { encodeMemory,encodeTopic } = require("../../../blueprint/model")
let encodeMemory = function(pattern,response,nextTopic){
    return{
      "pattern": pattern,
      "response": response,  
      "nextTopic": nextTopic
    }
  }

let section4 = [

    encodeMemory([
        `* (duken|panon|kano) * (malubay) * immune system * (tagudo) *`,
    ],[
        `Amayka pakaudo ka den pedtamiken, pedtagetut ka na basi malubay I lawas nengka.`,
    ]),
    encodeMemory([
        `* (duken|panon|kano)  *  mamis * tagudo *`,
    ],[
        `Aden mga tao a galgenan sa ka kapegkan sa sorbitol na gatun sa mga gapamasa a pegken`,
    ]),
    encodeMemory([
        `* (duken|panon|kano)  *  allergy * pegken * tagudo *`,
    ],[
        `Su mga di ga kan a disacchirides na paka gandel sa ig abpeg a electrolytes nu lawas. Sabap sa to na di ga sakem na lawas su dalem nu pegken.`,
    ]),
    encodeMemory([
        `* (duken|panon|kano)  *  malnutrition * tagudo *`,
    ],[
        `Su malabsorption na makadtagudo abpeg a makagkalubay sa lawas. Upama ka kalunsan n abasi mauget I namba maawa umapama ka malubay ka. Nya pakalunsan sa namba na su ka kan sa di kakagaga pegkanin nu tao abpeg di mapya a pegkanen. `,
    ]),
    encodeMemory([
        `* (duken|panon|kano)  *  gamot * tagudo *`,
    ],[
        `Su kadtagudo na aw na to na sabap kano mga kinan a gamot.  Aw na to na pads aba I namba na nasubran o nadutian ka na gamot.`,
    ]),
    encodeMemory([
        `* (duken|panon|kano)  *  parasite * infection * tagudo *`,
    ],[
        `Su kagaw na makadeket sa tinae na tao na makabinasa kano bagel na lawas nin sa ka sesep sa fats abpeg a carbohydrates a kinan nu tao.`,
    ]),
    encodeMemory([
        `* (duken|panon|kano)  *  bacterial * infection * tagudo *`,
    ],[
        `Su bacterial gastroenteritis na ga kwa umayka lemebag su tinae sabap sa uled. Su lebag sa tinae na namba I pakalebag sa tyan.`,
    ]),
    encodeMemory([
        `* (duken|panon|kano)  *  virus * infection * tagudo *`,
    ],[
        `Su viral gastroenteritis na sa gangula umayka limelebag su dadtel na tinae. Nya sabapan na nya ba na kagaw na mana rotavirus, norovirus, adenovirus abpeg aden pan kaped. Su mga wat ana kapakay silan pabakunan endu kadtabangan sila. Nya sipat na nya ba na umayka kalangot, pakauta, abpeg malyug su tay. `,
    ]),
    encodeMemory([
        `* (duken|panon|kano)  *  sakit * tiyan * tagudo *`,
    ],[
        `Su kadtagudo na aw na to na sipat na sakit sa tinae. Ugayd na na awnato na sabap ba inamba na kaped a saki mana su IBS, chrons disease, uncreative colitis, celiac disease, microscopic colitis endu small intestinal bacterial overgrowth.`,
    ]),
    encodeMemory([
        `* (panon|endaw) * kwa * tagudo *`,
        `* kwa * tagudo * (panon|endaw) * `,
    ],[
        `Madakel I makadtagudo. Nya ba I mga katawan tao saguna. Upama ka malubas su lawas abpeg aden sakit na tinai na makadtagudo bon. Aw na to na sabap I namba sa gamot a kinan nengka. Ugayd na nya kadakelan na pedtagudo na sabap sa kinan nilan. Su kaped manem na sabap sa di nilan kagaga pegkanin su pegken mana su aden mga gatas nin, sorbitol, mamis, fructose a gangatun sa pendagangen a pegken. `,
    ]),
    encodeMemory([
        `* kwa * tagudo * dahilan_ng_diarrhea * `,
    ],[
        `Uway, makadtagudo I namba. Tu ba nan pagingat ka. umayka edtagudo ka na lenek ka. Madadagbun I nan apya da engulan nengka. Aden bun mga gamot a kapaynengka pegkanin para gapkya I ganggedam nengka. Ugayd na upama ka aden lugo na tae nengka na di ka pegkan I namba ka pailay ka den sa doctor. `,
    ]),
    encodeMemory([
        `* Kwa * tagudo * mamis * `,
    ],[
        ``,
    ]),
    encodeMemory([
        `* ngin * enggay * tagudo * `,
        `* ngin * makadtagudo * `
    ],[
        `Nya tano nasabutan saguna na su kadtagudo na sabap I namba sa lebag o dana na kagaw a mana su bacteria, virus endu parasites. Umayka malubay i lawas nengka na malmo ka makadsakit sa nya ba. Minuna den upama ka aden sakit nengka sa tinae. Su kadtagudo na na aw na to na sabap sa kinan nengka a gamot. Kaaped a mga pegken na aden lactose, fructose abpeg a sorbitol ni na makadtagudo bon.  `,
    ]),
    encodeMemory([
        `* su_makadtagudo * ngin `,
    ],[
        `Uway. Makadtagudo I namba.`,
    ]),
]

let section5 = [
    encodeMemory([
        `* (duken|panon) * kainom * (awa|gamot|kapya|tabang) *  tagudo * `,
    ],[
        `Inom ka edsamikel sa ig ka endu di ka lenukan. Umayka pedtagudo ka na pegkapaydo su ig nu tao sa lawas nin. Tu ba nan ka inom ka sa aden ig nin mana ig den mun, buko juice, oral rehydration solutions, am, arroscalso, sabaw, sports drink. `,
    ]),
    encodeMemory([
        `* (duken|panon) * kainom *  ig *  (awa|gamot|kapya|tabang) * tagudo *`,
    ],[
        `Upama pedtagudo su tao, na kadtapid nu kadtagudo nin su ig nu lawas nin, Tu ba nan minum su tao sa ig edsamikel ka pedsambiyan su ig nu lawas a nakalyo.`,
    ]),
    encodeMemory([
        `* (duken|panon) * zinc * (awa|gamot|kapya|tabang) * tagudo *`,
    ],[
        `Su kakan sa zinc na makadtabang sa wata a pedtagudo ka nasisita I nya ba nu lawas sa protein synthesis, cell growth at differentiation endu immune function., enggo ig endu electrolyes nu lawas. Mabagel I bis ana nyaba sa kagkabagel nu tao a pedtagudo. Makatabang bun I nya ba endu di ka bun edtagudo.`,
    ]),
    encodeMemory([
        `* (duken|panon) * mapya * pegken * (awa|gamot|kapya|tabang) * pegken * tagudo *`,
    ],[
        `Upama ka pedtagdo ka na su pegken a pegkanen nengka, na pagilay ilay ka ka importanti ba I nya ba sa kagkabagel nengka.`,
    ]),
    encodeMemory([
        `* (duken|panon) * doctor * (awa|gamot|kapya|tabang) *  (awa|gamot|kapya) * tagudo *`,
    ],[
        `Agnay ka doktrol umayka aden ganggedam nengka apya endaw sya ba. Pedtagudo ka sa naka dwa gay den.  Pegkayaw ka a limambas sa 38 degress celcius. Sobrasobra ,mga nem, a kapagudo sa nagabian.`,
    ]),
    encodeMemory([
        `* duken * inom * ig * `,
    ],[
        `Nasisita su kasambi kano ig a naudo nengka umayka pedtagudo ka endu di ka lenukan.`,
    ]),
    encodeMemory([
        `* duken * inom * `,
    ],[
        `Su oral rehydration salts na di pakamot sa kadtagudo. Ugayd na makadtabang sekanin endu di ka lenukan edtandang. Sabap sya ba na makadtabang I nya ba sa kadtagudo`,
    ]),
    encodeMemory([
        `* duken * (kan|inom) * zinc * tagudo *`,
    ],[
        `Pakanen su wata nem ulan o matuwan pan san sa 20miligram a zinc uman gay. 10 miligram mandem I ipakan kano wata a sapulo taman sa sapunggo pat a gay pun I kinambata lon. `,
    ]),
    encodeMemory([
        `* duken * (kan|inom) * mapya * pegken * tagudo *`,
    ],[
        `Umayka pedtagudo, na pagilay ilay ka su pegken a pengkanen negka ka ka makadtabang I nya bas a kagkapya negka.`,
    ]),
    encodeMemory([
        `* panon * (awa|gamot|kapya|tabang) * tagudo * `,
    ],[
        `Upama ka pedtagudo ka na kapakay na keman sa oral rehydration solution endu di ka ged lenukan endu di nengka ged maudo I ig na lawas nengka. Kapakay ka bon keman sa zinc supplements. Kan ka bon sa mga mapya a mga pegken. Ugayd na , na bon mapya na pailay ka sa penggamot umayka pedtagudo ka bo sa nya ban aka dwa gay a nya endu umayka aden lugo na tae nengka.`,
    ]),
    encodeMemory([
        `* ten * (awa|gamot|kapya|tabang|ebpawang) * tagudo *`,
    ],[
        `Aw na to na apya dala enggulan nengka na kagamotan bun I kapedtagudo. Ugay na upama manem ka di, aw na to nan aka dwa gay den na pedtagudo ka bon a pailay ka den sa penggamot.`,
    ]),
    encodeMemory([
        `* kapakay * tagudo * gamot *`,
        `* kapakay * gamot * tagudo * `,
    ],[
        `Kapagay nengka bon penggamutan sa seka bo I kapedtagudo.`,
    ]),
    encodeMemory([
        `* kano * (ebpawang|kailay)* doctor * tagudo * `,
    ],[
        `Upama ka su kadtagudo na sobra den sa dwa gay o aw na to na belenukan na den pedtandang na pailay ka den sa doctor`,
    ]),
    encodeMemory([
        `* endaw * gamutan * tagudo *`,
        `* gamutan * tagudo * endaw * `
    ],[
        `Upama ka di manem pedsublasubla I kapedtagudo nengka na kapakay bun a gamuti ka den I namba sa walay no. ugayd na upama ka sobra den sa dwa gay, aw na to na ebpelugo pan, o lenekuan ka den edtandang na edtanggit ka den I nan sa ospital. Aw na to na tekaw ka muna sa barangay health center.`,
    ]),
    encodeMemory([
        `* endaw * (kwa|pamasa) * gamot_diarrhea * `,
        `* endaw * gamot_diarrhea *  (kwa|pamasa) *`,
        `* endaw * (kwa|pamasa) * gamot * tagudo * `,
    ],[
        `Kapamasa nengka I namba sa botika. Edtalo ka bo sa lekanilan I nasisita nengka I gamot a tagudo. Pangingati ka umpama ka pedtagudo na pakaudo sa aden lugo nin, aw na to na aden pan mayaw nin, na da ka pamasa sa gamot a mana antimotility a mana loperamide abpeg Imodium. Nya mapya ka igamot nengka lol na oral rehydration solutions endu katabangan sekanin a di nin maudo I ig a lawas nin.`,
    ]),
    encodeMemory([
        `* ngen * (tabang|enggulan|kapya) * lugo * (tagudo|tai) *`,
        `* lugo * (tagudo|tai) * ngen * (tabang|enggulan|kapya) *  `
    ],[
        `Su pebpilugo a kadtagudo a sipat ba I namba na pendana a tinae. Da ka pamasa sa gamot a antimotility mana loperamide, Imodium, peptobismol. Panginom ka den mon edsamikil sa ig. O kagaga nengkabo na pailay ka da penggamot a doctor ka silan I mataw panon I enggulan sa namba.`,
    ]),
    encodeMemory([
        `* ngin * (gamot|tabang|kapya) * pegkayaw * tagudo * `,
        `* ngin * (gamot|tabang|kapya) * tagudo * pegkayaw *`
    ],[
        `Da ka keman sa antimotility agents mana loperamide endu Imodium. Nya ka enggula na paginom ka den mun sa ig. Ugayd na nya bun mapya na pailay ka sa doctor. `,
    ]),
    encodeMemory([
        `* tagudo * (awa|gamot|kapya|tabang) * panon *`,
        `* (awa|gamot|kapya|tabang) * tagudo * panon * `,
        `* panon  * (awa|gamot|kapya|tabang) * tagudo * `,
        `* ngen * (awa|gamot|kapya|tabang) * tagudo * `,
        `* ngen * tagudo * (awa|gamot|kapya|tabang) * `,
        `* (awa|gamot|kapya|tabang) * tagudo * panon * `,
        `* ngen * gamot * tagudo * `,
        `* tagudo * gamot * ngen * `,
        `* gamot * tagudo * ngen * `,
    ],[
        `su kadtagudo a dikena manem sobra sobra na kaawa bun apya dala enggulan nengka. Kapay minom su taw sa antimotility agents mana loperamide, Imodium endu bismuth subsalicylate. Ugayd na da ka paginom na nya ba umayka pegkayaw ka o aden lugo na kangaudo nengka. Upama ka pedtagudo ka na paginom ka istidi sa aden mga igen mana ig, sabaw, sports drinks, beteng, o oral rehydration solutions. Kapakay bun na keman su tao sa zinc. Kan ka bon sa mapya a pegken. Umapa ka su kapedtagudo na lemambas den sa dwa gay na pailay ka den sa doctor.`,
    ]),
]

let data = 
[].concat(section4)
  .concat(section5)



export{
    data
}