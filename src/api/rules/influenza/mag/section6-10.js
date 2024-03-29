import { encodeMemory } from "@/api/config/model"


let section6 = [
    encodeMemory([
        `*bakuna * influenza *`,
        `aden mapakay a mapabakuna sa influenza`,
        `duken su bakuna na makatabang sa influenza`,
        `panon ngin to ka pakadtabang nasisita i kapembakuna`,
        `panon nginto a to ka kemwa sa bakuna i taw endu di kaalatan na influenza`,
        `nginto panon to ka pakatabang so kambakuna`,
        `duken ka pabakuna sa influenza`
    ],[
        `Saguna na dala pan gamot sa flu, ugayd na su kambakuna na makadtabang sa leka. Su flu vaccine abpeg su kapailay sa doctor uman lagon na makatabang bun. Namba na makatabang para di ged pegkabagel I sakit nu tao. Su mga tao a aden sakit nin mana su sakit na pamusungan na katabangan nin. Kagina ka mayto na su kapaguspital sabap sa nya na di ged manggula. Makatabang bon I nyaba sa magingay, wata abpeg a tao sa ubay nengka.`
    ],5),
    encodeMemory([
        `* (tangka|awa) * influenza *`,
        `* di * ubay * influenza *`,
        `panon ngin ka di magubay sa taw a aden influenza nin`,
        `nginto panon to ka di mapya mobay sa aden influenza nin`,
        `eduken panon a ka nasisita i katangka sa taw a aden influenza nin`,
        `panon a ka di ubayn i taw a aden influenza nin`,
        `enduken ka temangka sa influenza`,
        `panon i katangaka sa influenza`,
    ],[
        `Da ka aged pagubay sa kaped nengka upama ka aden sakit nin. Upama ka seka i aden sakit nin na tangka ka. da ka pagubay sa saka lepa sa mga tao a pembabatok. Tangka ka bon sa tayn I aden ngog nin. Da ka ged pagamong sa madakel a taw ka makwa nengka i kagaw a nan. Enggula ka I nyaba para di den makalanag I sakit a nya.`
    ],5),
    // encodeMemory([
    //     `* degka * influenza *`,
    //     `aden dayt a demegka sa walay amayka aden influenza nin`,
    //     `ngin to ka demegka i taw sa walay amayka a aden influenza nin`,
    //     `panon a to ka demegka i taw sa walay amayka a aden influenza nin`,
    //     `panon a to ka so kapendegka  sa walay na pakatabang sa taw a aden influenza nin`,
    //     `tayn i dayt a demegka sa walay upama ka aden influenza nin`,
    //     `enduken ka demegka amayka aden influenza`
    // ],[
    //     `Lenek ka sa walay amayka aden sakit nengka para di den makaalat I sakit a nan sa kaped nengka.`
    // ],5),
    encodeMemory([
        `* taguban * (ngilong|ngali|batok|balen) * influenza *`,
        `aden pakatagob sa ngilong, o ngali amayka aden influenza`,
        `aden taw a edtagob amayka aden influenza nin`,
        `panon enduken ngin a to i pakatagob su taw amayka aden influenza nin`,
        `panon a to ka su katagob sa ngilong o ngali na pakadtabang sa influenza`,
        `enduken ka edtagob sa ngali,batok o embalen`
    ],[
        `Tagubi ka I ngali abpeg ngilong nengka sa tissue upama ka pembatuken ka o pembalen ka enggu di maalat I sakit a nan sa kaped nengka.`
    ],5),
    encodeMemory([
        `* gagas * lima * `,
        `nginto panon ngen a to ka gemagas sa lima`,
        `panon ngin sabap nin ka mangagas gemagas sa lima`,
        `enduken ka gagasan su lima`,
    ],[
        `Gagas ka sa lima edsamikel para di nengka madtapik I kagaw a nan. Upama ka dala sabon abpeg a ig, na bubusi ka lima nengka sa alchohol.`
    ],5),

    encodeMemory([
        `* gamit * mask * `,
        `enduken ngen panon to ka sukob ka sa facemask`,
        `enduken ngen panon a to ka tagob ka sa face mask`,
        `aden taw a gemamit sa face mask`,
        `ngin sabap nin ka gemagas sa mask`,
        `enduken ka gemamit sa facemask`,
    ],[
        `Gamit ka sa facemask enggu di ka kaalatan  na virus kagina namba na makwa bun sa sambel o upama ka maami nengka o magamit nengka su nganin ngain a gamit na a naabpel nu tao  a to`
    ],5),
    // encodeMemory([
    //     `* endaw * mangay * influenza *`,
    //     `* ten * mangay * influenza * `,
    //     `daw midsa sa influenza`,
    //     `di ko katawan endaw mangay amayka aden influenza`,
    //     `endaw ako egkonsulta upama ka aden influenza ko`,
    //     `tayn i angayan nu taw a aden influenza nin`,
    //     `aden angayan nu taw a aden influenza nin`,
    //     `tayn i mapakay a gemamot sa influenza`,
    //     `aden mapakay a gemamot sa influenza`,
    //     `tayn i mapakay a kaidsan sa influenza`,
    //     `aden mapakay a kaidsan sa influenza`,
    //     `aden pinaka mapya a ebpawangan nu taw endu kagamutan su influenza`,
    //     `tayn i pinaka mapya a ebpawangan nu taw endu kagamutan su influenza`,
    // ],[
    //     `
    //     Upama ka pa pakagedam ka sa influenza na angay ka sa general practitioner o family physician. Aw na to na lu ka nilan pabpawangen sa inflectious disease specialist umayka nabolan i namba sakit nengka.

    //     Upama manem ka pakagedam ka sa di ged mapya a kapenginawa na aw na to na lu ka mapakay mangay sa pulmonologist. Su mga taw manem a aden kaped a sakit nin na aw na to na pabpawangen sa kaped a specialista mana su cardiologist, endocrinologist, o neurologist.
    //     `
    // ],5),
    encodeMemory([
        `* (ingat|tangka|kapananggila) * influenza * `,
        `* influenza * kapananggila * `,
        `nasisita a galbeken nu taw endu di sekanin kaalatan na influenza`,
        `ngin galbeken enggulan nu taw para di sekanin maka kwa endu makatangka kaalatan sa influenza`,
        `panon ngen mapakay a enggulan nu taw endu di edsakit sa influenza`,
        `panon enggulan nu taw para di sekanin maka kwa kaalatan makatangka sa influenza`,
        `panon galbeken taw endu di sekanin kaalatan na influenza`,
        `ngin mapakay enggulan endu di ma makakwa sa influenza`,
        `panon i kapananggila sa influenza`,
    ],[
        `Upama ka pakagaga ka na pabakuna ka. Tangkay ka su mga taw a aden sakit nin. Upamak ka seka su aden sakit nin na lenek kawm pan sa lawas endu di mganalat sakit nengka. Tagubi ka istidi i ngali abpeg su ngilong nengka endu di makaalat i sakit a nana. Gmait ka sa facemask. Pamlimpyo ka mana su kakagad sa lima endu di ka pagamit i mata , ngilong abpeg a ngali nengka endu di maka ludep i virus a nan sa lawas nengka.`
    ],1),
]


let section7 = [
    encodeMemory([
        `* (kapakay|mapya|tabang) * influenza * pegken * `,
        `* (kapakay|mapya|tabang) * pegken * influenza * `,
        `* influenza * (kapakay|mapya|tabang) * pegken * `,
        `* influenza * pegken * `,
        `* pegken * (kapakay|mapya|tabang) * influenza *`,
        `* pegken * influenza * (kapakay|mapia|tabang) * `,
        `* pegken * influenza * `,
        // `labit ka ngin i mga mapya pegken paginumen a makadtabang sa taw a pakagedam sa influenza `,
        // `labit ka ngin i mapakay pakan ipasepa paginumen sa taw a pakagedam sa influenza`,
        // `labit ka ngin i mga pegken a kapakay a pamasan kanen inumen nu taw a pakagedam sa influenza`,
    ],[
        `Aden embalangan a pegken na makadtabang endu engkabagel ka sa malengkas. Nya nin umpaman na su sabaw na manok, sapi o kamo na makadtabang sa dehydration engo su kayaw nin ma makadtabang sa kagkapya na tidek. Kapakay ka bon keman sa lansuna kagina makakagkapya bon I nya bas a sakit abpeg su mga padsa nin. Su mga pegken a to a aden probiotic nin a mana s yogurt na kapakay bon makadtabang sa kapegpadadakel sa mapya a bakterya na tinae abpeg nu lawas. Su mga unga na kayo abpeg su kamo na aden vitamin c na makadtabang bon. Nya nin mga kaped I nya ban a su paminta, kalamansi, grapes abpeg su mga madakel a to I lawn I a kamo. Kapakay ka bon keman sa kamo a mana su broccoli. Su oatmeal bon na aden nutrients nin mana su copper, iron, selenium, zinc fiber endo proteen na makagkabagel bon sa lawas. Kaped pan sa makadtabang na su mga luya abpeg a kalawag. Nya bon tanto a makadtabang na di ka blepatani I kainom sa madakel a ig. `
    ],4),
]


let section8 = [
    // encodeMemory([
    //     `* influenza_foods_not_allowed_caffeinated_drinks * di * (inom|kan|pamasan) * influenza *`,
    //     `* di * (inom|kan|pamasan) * influenza_foods_not_allowed_caffeinated_drinks  * influenza *`,
    //     `nginto ka di pakanen su taw sa influenza_foods_not_allowed_caffeinated_drinks upama aden influenza`,
    //     `ngin to ka temangka su taw sa influenza_foods_not_allowed_caffeinated_drinks amayka pakagedam sa influenza`,
    //     `mapakay a keman o minom su taw a aden influenza sa influenza_foods_not_allowed_caffeinated_drinks`,
    //     `kapakayan a keman o minum sa influenza_foods_not_allowed_caffeinated_drinks i taw a pakagedam sa influenza`,
    //     `enduken ka di mamasa sa influenza_foods_not_allowed_caffeinated_drinks i tayn san a aden influenza nin`,
    //     `ngin sabap nin ka , da ka pamasa sa influenza_foods_not_allowed_caffeinated_drinks upama ka aden influenza su taw`,
    //     `enduken ka di keman sa influenza_foods_not_allowed_caffeinated_drinks amayka aden influenza nin`,
    // ],[
    //     `Upama ka pegkayaw ka, aw na to na ebpapulo kayaw na lawas nnengka engu pagatingan ka edsamikel pan. Su dehydration na ingati ka upama ka. Su caffien abpeg a alchohol na makalunsan sa sakit nengka. Nya mapya na igop ka ig abpeg kapid a aden ig nin uman gay`
    // ],4),
    encodeMemory([
        `* influenza_foods_not_allowed_greasy_foods * `,
        `* influenza_foods_not_allowed_greasy_foods * influenza * `,
        `enduken ka di kan keman minom sa lanan a pegken i pendalo sa influenza`,
        `enduken ka di kan keman minom sa influenza_foods_not_allowed_greasy_foods i pakagedam sa aden influenza`,
    ],[
        `
        Su mga lanan a mga pegken na makalunsan sa sakit na tidek, kambabatok abpeg di kepenginawa. Tu ba nan su mga pegken a madakel i fats nin na tangkan o di ged kanen nu taw. Nya sabap na nya ba na malken su ka tunag nilan sya kano tyan nu taw. Nasisista na di ka ged pegkan sa nya ba endo malmo kagkabagel na lawas nengka`
    ],4),
    // encodeMemory([
    //     `*  influenza_foods_not_allowed_hard_grains * di * (inom|kan|pamasan) * influenza *`,
    //     `* di * (inom|kan|pamasan) * influenza_foods_not_allowed_hard_grains * influenza *`,
        
    //     `enduken ka di keman sa influenza_foods_not_allowed_hard_grains amayka aden influenza nin`,
    //     `nginto ka di pakanen su taw sa influenza_foods_not_allowed_hard_grains upama ka aden influenza nu taw`,
    //   `ngin to ka temangka su taw sa influenza_foods_not_allowed_hard_grains amayka pakagedam sa influenza`,
    //   `mapakay a keman o minom su taw a influenza sa influenza_foods_not_allowed_hard_grains`,
    //   `kapakayan a keman o minum sa influenza_foods_not_allowed_hard_grains i taw a aden influenza nin`,
    //   `enduken ka di mamasa sa influenza_foods_not_allowed_hard_grains i tayn san a pakagedam sa influenza`,
    //   `ngin sabap nin ka , da ka pamasa sa influenza_foods_not_allowed_hard_grains upama ka aden influenza nu taw`,
    // ],[
    //     `Su flu na aw na to na makagkasakit sa tyan. Bali kan ka bo sa mga pegken a malmo gatunag sa tyan nengka mana su simple o refined carbohydrates. Su mga pegken a mana su biskwit, pan abpeg a pretzel na kapakay negka bon kanen. Mapya bon upama ka di ka ged keman sa mga kamo a malgen gatunag sa tyan.`
    // ],4),
    encodeMemory([
      `* influenza_foods_not_allowed_sugary_foods * `,
      `* influenza_foods_not_allowed_sugary_foods * influenza *`,
      `enduken ka di kan keman minom sa na sobran soblan sa kamis mamis ged a pegken i pendalo sa influenza`,
      `enduken ka di kan keman minom sa influenza_foods_not_allowed_sugary_foods i pakagedam sa aden influenza`,

    ],[
        `Su mga kakan sa amadakel I mamis nin a pegken na makagkalubay sa immune system nengka a pedtabang sa mga sakit mana su flu. Su kakan bon sa nya ba na pakalebag. Nya ba na pakalunsan sa sakit na tidek abpeg a batok. Endo su mga mamis ged a pegken na pakagkapulu sa blood sugar levels a sabapan na sobla sobla a kapegkalugat abpeg malunggad a kagkabagel sa flu.`
    ],4),
    encodeMemory([
        `* pegken * di * (inom|kan) * influenza * `,
        `* influenza * di * (inom|kan) * pegken *`,
        `ngin i mga pegken o paginumen kanen a di dayt a kanen nu taw a pakagedam sa influenza`,
        `labit ka sa laki ngin i mga pegken a di mapakay kanen nu taw a pakagedam sa influenza`,
        `ngin i mga pegken a tangkan di dayt a pamasan kanen o iluton nu taw a aden influenza nin,`,
        `ngin i pegken a di mapakay dayt inomen kanen na pendalo sa influenza `,
        'ngin i di kanen inumem pamasan nu daw a pendalo sa influenza',
        'nakadalo sa influenza ngin i di i pakan lon',
        'pakenen ko pendalo a nya sa influenza nin i pakan lun',
        'ngin i pegken a pananggilan upama ka aden influenza',
        'Ngen a mga pegken I di ko dayt a kanen inumen upama ka aden trangkaso',
    ],[
        `Upama ka pakagedam ka sa flu na da ka paginom engo pegkan sa mga caffeinated drinks, coks, lanan ged, mategas a mga pegken, abpeg mga mamis a bnel a pegken. Tekaw ka kan sa mga aden sabay nin engo kasambiyan su mga nadadag a ig nu lawas. Kan ka sa pan, patatas, emay, saging, manok abpeg seda.`
    ],4),
]

let section9 = []

let section10 = [
    encodeMemory([
        `* problema * influenza * `,
        `* influenza * problema *`,
        `ngin i problema na aden influenza nin`,
        `enduken ka aden problema sa influenza`,
    ],[
       `Aden mga taw a mangingat sabap sa influenza. Nya ba silan a mana su mga nem ulan o mga matuwa. Abpeg su mga taw a to a aden mga sakit nin a kaped mana su umes, sakit a pamusungan, diabetes, sakit sa kidney, sakit sa atay, mga di ged pakaginawa, so mga malubay a taw abpeg su sobla sobra den i kasebud nin a mga taw.`
    ],1),
]


export const data = 
    [].concat(section6)
        .concat(section7)
        .concat(section8)
        .concat(section9)
        .concat(section10)

