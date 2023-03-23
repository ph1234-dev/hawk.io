import { encodeMemory } from "@/api/engine/model"

let section6 = [
    encodeMemory([
        "* bakit * magpabakuna * trangkaso * "
    ],[
        "Bagama't walang gamot na makakapigil sa trangkaso, ang bakuna laban sa trangkaso ay natagpuan na makakatulong sa pagprotekta sa iyo. Pinipigilan ng pagbabakuna sa trangkaso ang mga sakit at bumibisita ang mga doktor na nauugnay sa trangkaso bawat taon. Nakakatulong ito na mabawasan ang kalubhaan ng mga sakit sa mga taong nabakunahan ngunit nagkakasakit pa rin. Partikular itong nakakatulong sa mga taong may ilang malalang kondisyon sa kalusugan (tulad ng mga kondisyon sa puso). Sa pamamagitan nito, binabawasan nito ang pagkakaospital na nauugnay sa trangkaso. Pinoprotektahan din nito ang mga buntis, mga bata at mga tao sa paligid mo."
    ],5),
    encodeMemory([
        "* bakit * iwasan * dikit * trangkaso *",
        "* bakit * huwag * dikit * trangkaso *",
        "* bakit * lumayo * trangkaso trangkaso *"
    ],[
        "Iwasan ang malapit na pakikipag-ugnayan sa mga taong may sakit. Kung ikaw ang may sakit, panatilihin ang iyong distansya sa iba. Distansya ang iyong sarili nang hindi bababa sa 1 metro mula sa mga taong umuubo. Ilayo ang iyong sarili sa mga taong may sipon. Iwasan ang mga matataong lugar dahil maaari nilang madagdagan ang panganib na magkaroon ng virus. Kailangan mong gawin ang mga bagay na ito upang maiwasan ang pagkalat pa ng virus."
    ],5),
    encodeMemory([
        "* bakit * manatili * bahay * trangkaso *"
    ],[
        "Manatili sa bahay mula sa trabaho, paaralan, at mga gawain kapag ikaw ay may sakit upang maiwasan ang pagkalat ng iyong sakit sa iba."
    ],5),
    encodeMemory([
        "* bakit * takpan * (bunganga|ilong) * (trangkaso|ubo|bahing) *"
    ],[
        "Takpan ang iyong bibig at ilong ng tissue kapag umuubo o bumabahing upang maiwasang magkasakit ang mga nasa paligid mo."
    ],5),
    encodeMemory([
        "*bakit * (disinfect|linis) * kamay * "
    ],[
        "Ang madalas na paghuhugas ng iyong mga kamay ay makakatulong na maprotektahan ka mula sa mga mikrobyo. Kung walang sabon at tubig, gumamit ng alcohol-based na hand rub"
    ],5),
    encodeMemory([
        "*bakit * huwag * hawak * (mata|ilong|bunganga) *"
    ],[
        "Ang mga mikrobyo ay madalas na kumakalat kapag ang isang tao ay humipo ng isang bagay na kontaminado ng mikrobyo at pagkatapos ay hinawakan ang kanyang mga mata, ilong, o bibig"
    ],5),
    encodeMemory([
        "* bakit * (gamit|suot|lagay)  * face * mask * "
    ],[
        "Ang pagsusuot ng face mask ay pinipigilan ang impeksyon dahil ang virus ay maaaring makuha sa hangin o mapunta sa anumang bagay na hinawakan o ginagamit ng isang taong may trangkaso."
    ],5),
    encodeMemory([
        "* sino * consult * trangkaso * ",
        "* saan * consult * trangkaso *"
    ],[
        "Maaari kitang bigyan ng mga direksyon sa pangunahing pangangalaga sa sarili na maaari mong gawin sa iyong tahanan. Gayunpaman, isa lang akong programang ginawa para tumulong sa mga sitwasyong ito. Kung kailangan mo ng karagdagang paglilinaw maaaring kailanganin mong magpatingin sa doktor."
    ],5),
    encodeMemory([
        "* saan * kain * trangkaso *"
    ],[
        "Ang pangkalahatang rekomendasyon ay iwasang lumabas upang maiwasan ang pagkalat ng virus. Sa oras na tulad ng isang pandemya, ang pagkain sa labas ay maaaring maging hindi mabuti dahil maaari kang makakuha ng virus mula sa paglabas. Mas mabuting manatili sa bahay sa ngayon."
    ],5),
    encodeMemory([
        "* saan * bili * gamot * trangkaso *"
    ],[
        "Ang mga karaniwang gamot na ginagamit sa paggamot sa mga sakit ay karaniwang matatagpuan sa mga parmasya. Ilang sari-sari store ang nagbebenta ng mga ito, ngunit mag-ingat. Ang ilan ay maaaring nag-expire na. Mag-ingat din sa paglaganap ng mga pekeng gamot. Para sa gayong kadahilanan, pinakamahusay na bumili mula sa isang sertipikadong tindahan ng gamot."
    ],5),
    encodeMemory([
        "* (paano|ano) * iwas * trangkaso * ",
        "* (paano|ano ) * pangiwas * trangkaso *"
    ],[
        "narito ang mga bagay na maaari mong gawin upang maiwasan ang pagkakaroon ng trangkaso. Kung kaya mo, magpabakuna. Iwasan ang malapit na pakikipag-ugnayan sa mga taong may sakit. Kung ikaw ay may sakit, mas mabuting manatili sa bahay upang maiwasan ang pagkalat ng virus sa iba. Laging takpan ang iyong bibig at ilong, upang mabawasan ang panganib na maipasa ang virus sa iba. Ang pagsusuot ng mukha ay makakatulong sa iyo dito. Magsanay ng mabuting kalinisan. Halimbawa, madalas na linisin ang iyong mga kamay at iwasang hawakan ang iyong mga mata, ilong o bibig upang maiwasan ang anumang virus na pumasok sa iyong katawan."
    ],1),
    encodeMemory([
        "* pwede * trangkaso * iwasan *",
        "* pwede * trangkaso * hindi * kuha*"
    ],[
        "Oo, maiiwasan ang trangkaso. Mayroong ilang mga bagay na maaari mong gawin."
    ],1),
]


let section7 = [
    encodeMemory([
        "* bakit * (inom|kain|bili) * pagkaing_pwede_trangkaso * trangkaso * ",
        "* pagkaing_pwede_trangkaso * (inom|kain|bili) * trangkaso * ",
        "* pagkaing_pwede_trangkaso *  (tulong|gamot|buti|galing|gawin)   * trangkaso *  ",
        "* pagkaing_pwede_trangkaso * (inom|kain|bili) * trangkaso *",
    ],[
        "Ang pagkain ng mga iyon ay maaaring mapawi ang iyong kalagayan at makatulong sa iyong gumaling nang mas mabilis."
    ],4),
    encodeMemory([
        "* (pwede|ganda|tulong|buti|galing)*  pagkain * trangkaso * ",
        "* pagkain * (pwede|ganda|tulong|buti|galing)*  trangkaso *",
        "* trangkaso * pagkain * (pwede|ganda|tulong|buti|galing)*  ",
        "* pagkain * (pwede|ganda|tulong|buti|galing) * trangkaso * ",
        "* ano * pagkain  * (pwede|ganda|tulong|buti|galing)  * trangkaso *",
    ],[
        `Mayroong ilang mga pagkain na maaaring makatulong sa iyo na gumaling nang mas mabilis. Maaari mong isaalang-alang ang pagkuha ng ilang pagkain. Ang mga sabaw at sopas na gawa sa manok, baka, at gulay ay maaaring maiwasan ang dehydration at ang init nito ay maaaring mapawi ang kasikipan at mapawi ang pananakit ng lalamunan. Maaari ka ring kumain ng bawang dahil maaari itong makapagpagaling ng sakit at mabawasan ang serverity ng mga sintomas. Ang mga pinagmumulan ng pagkain na may mga probiotic tulad ng yogurt ay maaari ding makatulong sa pamamagitan ng pagpaparami ng "magandang" gut bacteria na sumusuporta sa iyong immune system. Ang mga prutas at gulay na naglalaman ng bitamina c ay maaari ding makatulong. Kabilang dito ang mga paminta, dalandan, citrus, lemon, ubas at mga maitim na madahong gulay. Maaari ka ring kumain ng broccoli. Higit pa rito, ang oatmeal ay naglalaman ng mga nutrients na nagpapalakas ng immune tulad ng copper, iron, selenium, zinc fiber at protien. Bilang karagdagan, maaari ka ring magdagdag ng mga pampalasa tulad ng luya at kalawag sa iyong pagkain. Panghuli, palaging uminom ng mga likido tulad ng tubig upang mapanatili kang hydrate.`
    ],4),
]



let section8 = [
    encodeMemory([
        "* bakit * influenza_pagkain_dapat_iwasan * ( iwasan| (hindi|huwag) * (bili|inom|kain) ) * trangkaso *",
        "* bakit * (iwasan| (hindi|huwag) * (bili|inom|kain) ) * trangkaso_pagkain_dapat_iwasan * trangkaso * ",
    ],[
        "Para matulungan kang gumaling, mahalagang pangalagaan mong mabuti ang iyong sarili. Kailangan mong iwasan ang mga iyon dahil maaari itong magpalala sa iyong mga kondisyon sa kalusugan."
    ],4),
    encodeMemory([
        "* bakit * trangkaso_pagkain_dapat_iwasan_caffeinated * (iwasan| (hindi|huwag) * (bili|inom|kain) ) * influenza * ",
        "* bakit * (iwasan| (hindi|huwag) * (bili|inom|kain) ) * trangkaso_pagkain_dapat_iwasan_caffeinated * trangkaso * ",
    ],[
        "Kapag mayroon kang lagnat, maaari kang makaranas ng mataas na temperatura at pagtaas ng pagpapawis, ang pag-aalis ng tubig ay isang bagay na dapat mag-ingat kapag mayroon kang lagnat. Ang caffeine at alkohol ay maaaring magpalala sa iyong mga sintomas (lalo na ang mga sintomas na nauugnay sa tiyan). Mas mainam na humigop ng tubig at malinaw na likido sa buong araw."
    ],4),
    encodeMemory([
        "* bakit * trangkaso_pagkain_dapat_iwasan_mamantikain * (iwasan| (hindi|huwag) * (bili|inom|kain) ) * influenza * ",
        "* bakit * (iwasan| (hindi|huwag) * (bili|inom|kain) ) * trangkaso_pagkain_dapat_iwasan_mamantikain * trangkaso * ",
    ],[
        "Gusto mong iwasan ang mga pagkaing mahirap masira at mahirap sa iyong gastrointestinal system. Ang mga pagkaing mataas sa saturated fat ay dapat na iwasan o limitahan, gayundin ang pritong, mamantika na pagkain."
    ],4),
    encodeMemory([
        "* bakit * trangkaso_pagkain_dapat_iwasan_matigas_butil * (iwasan| (hindi|huwag) * (bili|inom|kain) ) * trangkaso * ",
        "* bakit * (iwasan| (hindi|huwag) * (bili|inom|kain) ) * trangkaso_pagkain_dapat_iwasan_matigas_butil * trangkaso * ",
    ],[
        "Ang trangkaso ay paminsan-minsan ay nagdudulot sa iyo na magkaroon ng sakit sa tiyan, kaya ang pagdidikit sa mga pagkaing madaling matunaw tulad ng simple/pinong carbohydrates ay inirerekomenda. Ang mga pagkaing tulad ng dry saltine crackers, toast at pretzel ay madali sa iyong tiyan at malamang na matitiis kapag mayroon kang trangkaso. Mainam din na umiwas pansamantala sa mga pagkaing mahibla."
    ],4),
    encodeMemory([
        "* bakit * trangkaso_pagkain_dapat_iwasan_matatamis * (iwasan| (hindi|huwag) * (bili|inom|kain) ) * trangkaso * ",
        "* bakit * (iwasan| (hindi|huwag) * (bili|inom|kain) ) *  trangkaso_pagkain_dapat_iwasan_matatamis* trangkaso * ",
    ],[
        "Maaaring kauntihan ng mga pagkaing mayaman sa asukal ang iyong immune system, na kailangan ng iyong katawan upang labanan ang trangkaso"
    ],4),
    encodeMemory([
        "* anong * pagkain * (iwasan| (hindi|huwag) * (inom|kain) ) * trangkaso *",
        "* pagkaing *  (iwasan| (hindi|huwag) * (inom|kain) ) * trangkaso *",
        "* trangkaso * (iwasan| (hindi|huwag) * (inom|kain) ) * pagkain *",
    ],[
        "Kung sa tingin mo ay mayroon kang trangkaso, kailangan mong iwasan ang mga inuming may caffeine, alkohol, mamantika na pagkain, mahirap matunaw na butil, at matamis na pagkain o inumin. Sa halip, subukang uminom ng mga sopas na nakabatay sa sabaw upang makatulong sa paglalagay ng anumang likido at sodium na maaaring mawala sa iyo. Subukan din ang mga murang pagkain na kinabibilangan ng puting tinapay, patatas, puting bigas, saging, sarsa ng mansanas, walang taba na karne tulad ng manok at isda."
    ],4),
    encodeMemory([
        `* (bili|kain|inom) * (trangkaso_pagkain_dapat_iwasan|trangkaso_pagkain_dapat_iwasan_caffeinated|trangkaso_pagkain_dapat_iwasan_mamantikain|trangkaso_pagkain_dapat_iwasan_matigas_butil|
        trangkaso_pagkain_dapat_iwasan_matatamis) * trangkaso *`,
    ],[
        "May mga pagkain na kailangan mong mag-ingat. Kung ikaw ay may trangkaso, subukang kumain ng sabaw, mga pagkaing mayaman sa probiotic tulad ng mga fermented, sabaw at murang pagkain tulad ng puting tinapay, patatas, puting bigas, saging, sarsa ng mansanas, walang taba na karne tulad ng manok at isda."
    ],4),
]


let section9 = []


let section10 = [
    encodeMemory([
        "* sino * problema * trangkaso *",
        "* trangkaso * sino * problema *",
        "* trangkaso * problema * sino *",
        "* problema * sino * trangkaso *",
        "* problema * trangkaso * sino *",
    ],[
        "May ilang grupo ng mga tao na nasa panganib na magkaroon ng mga komplikasyon mula sa trangkaso. Ang mga taong anim na buwan at matanda, mga taong may malalang kondisyong medikal tulad ng hika, sakit sa puso, diabetes, bato, sakit sa atay, at malalang sakit sa baga, mga taong may mahinang immune system, at mga taong sobrang laki ay kailangang mag-ingat sa pagkakaroon ng ang sakit na ito."
    ],1),
]



export const data = 
    [].concat(section6)
        .concat(section7)
        .concat(section8)
        .concat(section9)
        .concat(section10)
    
