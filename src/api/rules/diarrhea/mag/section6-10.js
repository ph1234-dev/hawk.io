import { encodeMemory } from "@/api/configuration/model"

let section6 = [
    encodeMemory([
      `* duken * upisan * unga * `, 
    ],[
      `Nasisista I nan ka aw na to na nasimbulan na duti o kagaw a bacterya, virus endu parasites.`,
    ],5),
    encodeMemory([
      `* duken * di * kan * mailaw * karne * `,
      `* duken * di * kan * da ma(lu|w)t(o|u) * karne * `,
      `* duken * di * kan * da * upisan * unga * `
    ],[
      `Iluto ka ebpyapya su karne edu matay I kagaw a bacteria, virus abpeg a parasite  a nakadampo sa karne`,
    ],5),
    encodeMemory([
      `* duken * di * kan * da * upisan * unga * `
    ],[
      `Nasisista na enggulan I namba ka basi nasimbulan na duti abpeg a kagaw a bacteria, virus parasites I nan.`
    ],5),
    encodeMemory([
        `* ten * mangay * tagudo * `, 
        `* endaw * mangay * tagudo *`
    ],[
      `Saki na kapakay ko seka enggan sa mga ulaula o ngin gulan sa mga gamot endu ngen I pakairan sa sakit a nan upama ka aden ganggedam nengka. Kapakay ka bun lemu sa barangay health center, midsa sa doctor o nurse, o lu ka sa pendagang sa gamot.`,
    ],5),
    encodeMemory([
      `* endaw * kan * tagudo * `, 
    ],[
      `Endu di ka maka dalo, na nya mapya na kan ka bo lu sa mga pendagang a to na pamlimpyo endu mapya I kinaami nilan sa pegken a pendagangen nilan.`,
    ],5),
    
    encodeMemory([
      `* endaw * ( mamasa | pamasa ) * gamot * tagudo * `, 
    ],[
      `Kapakay I nan pamasan sa botika`,
    ],5),
    
    encodeMemory([
      `* (panon|ngen) * ingat * tagudo * `, 
      `* (panon|ngen) * kasambot * tagudo * `, 
    ],[
      `madakel man I kapakay nengka galbeken. Nya isa a enggulan nu taw na keman sa mapya a pegken. Minom sa ig a malingaw. Ka gagas sa lima sa sabon abpeg a ig. Upama manem ka dala I tu na gemamit  sa alchohol. I ka papedsembay su twalya nengka, salidot, endu mga endaw pan sa a gamit nengka. Upama ka aden bakuna, na pabakuna ka bon.`,
    ],1),
    
    encodeMemory([
      `* kapakay * tagudo * kasambutan * `, 
    ],[
      `Uway, tangka ka sa nan. Pangingidsay ako nengka bo.`,
    ],1),
    
]



let section7 = [
    
   encodeMemory([
    `* duken * (inom|kan) * diarrhea_foods_allowed *  tagudo *`, 
    `* duken * (pamasa) * diarrhea_foods_allowed * tagudo *`, 
    `* duken * (inom|kan) * diarrhea_foods_allowed * tagudo *`, 
    `* diarrhea_foods_allowed * (inom|kan) * tagudo *  `, 
    `* diarrhea_foods_allowed * (mapya|tabang|kapakay) * tagudo *`, 
   ],[
     `Nam ba a pegken na makadtabang sa leka para di ka lenukan edsamiken. Upama ka aden pedtagundo na makadtabang I namba ka makadtegas sa tae.`,
   ],1),
   encodeMemory([
    `* (kapakay|mapya|tabang) * pegken * tagudo * `, 
    `* tagudo * pegken * (kapakay|mapya|tabang) *`, 
    `* tagudo *  (kapakay|mapya|tabang) * pegken * `, 
    `* (kapakay|mapya|tabang) * tagudo * pegken * `, 
    `* pegken * (kapakay|mapya|tabang) * tagudo *`, 
    `* pegken * tagudo  * (kapakay|mapia|tabang) * `, 
    `* pegken * tagudo * `, 
    `* tagudo * pegken * `, 
   ],[
     `Madalik I nan silan. Kapakay ka pegkan sa arroscaldo, saging, sabaw, manok, binubog, electrolyte drinks, oatmeal, peanutbutter, patatas, emay, sports drinks, toast, ig, yogurt, am, abpeg a beteng. Mapakay ko bun edalon ngin I di ka pegkan upama ka pedtagudo ka.  `,
   ],2),
]


let section8 = [
    encodeMemory([
      `* duken * diarrhea_foods_not_allowed_bad_hydration * di * (inom|kan|pamasan) * tagudo *`, 
      `* duken * di * (inom|kan|pamasan) * diarrhea_foods_not_allowed_bad_hydration * tagudo * `,  
    ],[
      `Tangkay ka I namaba ka pakalenuk I namba edsamikel.`,
    ],4),
    encodeMemory([
      `* duken * diarrhea_foods_not_allowed_produces_gas * di * (inom|kan|pamasan) * tagudo *`, 
      `* duken * di * (inom|kan|pamasan) * diarrhea_foods_not_allowed_produces_gas * tagudo * `, 
    ],[
      `Kaped sa nan na makadtagetut. Di nenmba mapya upama ka pedtagudo I taw ka makalunsan sa sakit.`,
    ],4),
    encodeMemory([
      `* duken * diarrhea_foods_not_allowed_contains_lactose * di * (inom|kan|pamasan) * tagudo *`, 
      `* duken * di * (inom|kan|pamasan) * diarrhea_foods_not_allowed_contains_lactose * tagudo *`, 
    ],[
      `Upama ka di ka kapakyan pegkan sa gatas ka edtagudo ka na di namba mapya pegkanen. Upama ka edtagudo ka tupan na kinapasad nengka keman sa aden gatas nin e telni ka I kakan sa nan`,
    ],4),
    encodeMemory([
      `* duken * diarrhea_foods_not_allowed_contains_fructose * di * (inom|kan|pamasan) * tagudo *`, 
      `* duken * di * (inom|kan|pamasan) * diarrhea_foods_not_allowed_contains_fructose * tagudo *`, 
    ],[
      `Aden mga tao a galunsanan I kapedtagudo nilan kagina nakakan silan sa pegken a madakel a benel I dalem nin a fructose. Pangingati ka bo I namba.`,
    ],4),
    encodeMemory([
      `* duken * diarrhea_foods_not_allowed_irritate_stomach * di * (inom|kan|pamasan) * tagudo *`, 
      `* duken * di * (inom|kan|pamasan) * diarrhea_foods_not_allowed_irritate_stomach * tagudo *`, 
    ],[
      `Nya ba a pegken na makadsakit sa tyan na di mapya upama ka pedtagudo su taw.`,
    ],4),
    encodeMemory([
      `* duken * pegken_a_malana * di * (inom|kan|pamasan) * tagudo *`, 
      `* duken * di * (inom|kan|pamasan) * pegken_a_malana * tagudo *`, 
    ],[
      `Namba malana ged a pegken na makagkasebod, endu malgen I kapaukit nin sa pegken sa tinae na tao. Da ka ged pegkan sa nan upamaka ka pedtagudo ka.`,
    ],4),
    encodeMemory([
      `* duken * (mailaw| da * maluto) * di * (inom|kan) * tagudo * `, 
      `* duken * di * (inom|kan) * (mailaw|dala * maluto) * `, 
    ],[
      `Namba a mga pegken na aw na to a aden mga duti nin. Da ka pegkan sa nan upama ka pedsakit I tyan nengka o pedtagudo ka.`,
    ],4),
    encodeMemory([
      `* ngen * pegken * di * (inom|kan) * tagudo * `, 
      `* pegken * di * (inom|kan) * tagudo *`, 
      `* tagudo * di * (inom|kan) * pegken *`, 
    ],[
      `Madakil I nan silan. Kaped sa nan na alchohol , beans, berries, broccoli, repolyo, cauliflower, chees, cheakpeas, kapi, kamais, petsay, fruit juice, grapes, mga gadong a kamo, teneb, ice crea, gatas, mani, lanan a pegken, malalas a pegken, paminta, mailaw a pegken, salad, shellfish, softdrinks, at tea. `,
    ],4),
    
    encodeMemory([
      `* (pamasa|kan|inom) * (diarrhea_pagkain_masama_hydration| diarrhea_pagkain_may_lactose| diarrhea_pagkain_may_fructose| diarrhea_pagkain_nakakairita_tiyan| diarrhea_pagkain_oily) * tagudo *`,
    ],[
      `Di ka pagengay o pegkan sa nan upama ka pedtagudo ka. Aden kaped a mapya nengka makan a madtabang sa leka. Edsay ako nengka ba.`,
    ],4),
]

let section9 = [
  
]

let section10 = [
    encodeMemory([
      `* ten * problema * tagudo * `, 
      `* tagudo * ten * problema *`, 
      `* tagudo * problem * ten *`, 
      `* problema * ten * tagudo * `, 
      `* problema * tagudo * ten *`, 
    ],[
      `Su wata a naka tlo lagon pan, su mga matuwa na malubay I lawas nin, su di pakakan pyapya, tayn I pedtagudo sa naipos a dwa gay, su pegkayaw sa 39 degree celcius, su aden dana na tai nin, su mapulo I lugo nin, su aden pagangayan nin, abpeg na su aden bon sakit ni andang n abasi kalunsanan I sakit nilan.`,
    ],1),
]


let data = 
  [].concat(section6)
    .concat(section7)
    .concat(section8)
    .concat(section9)
    .concat(section10)


export{
    data
}