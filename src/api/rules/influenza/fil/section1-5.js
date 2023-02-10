import { encodeMemory } from "@/api/engine/model"

let section4 = [
    encodeMemory([
        "* (bakit|paano|kailan) * virus * trangkaso *"
    ],[
        "Ang mga virus ay nagdudulot ng trangkaso. Ang mga ito ay kumakalat kapag ang mga taong may trangkaso ay umuubo, bumahin o nagsasalita, nagpapadala ng mga droplet na may virus sa hangin at posibleng sa mga bibig o ilong ng mga taong nasa malapit."
    ]),
    encodeMemory([
        "* (paano|saan) * kuha * trangkaso * ",
        "* kuha * trangkaso * (paano|saan) *"
    ],[
        "Maaari kang makakuha ng trangkaso kapag nalalanghap mo o nalalanghap ang hangin na inilabas ng taong bumahing o umuubo kahit kaunti lang. Ang mga virus na ito ay maaari ding maipasa sa pamamagitan ng paghawak sa mga bagay na nahawaan ng virus. Sa simpleng mga salita, maaari mo itong makuha kapag nadikit ka sa mga ibabaw, materyales, at damit na kontaminado ng dischages ng taong nahawahan. Ang mga pana-panahong pagbabago ay maaari ding magdulot ng trangkaso dahil humihina ang mga panlaban natin lalo na sa pagbaba ng temperatura."
    ]),
    encodeMemory([
        "* kuha * trangkaso * dahilan_ng_trangkaso * "
    ],[
        "Ang paglanghap ng nahawaang hangin at ang pagkakaroon ng pisikal na paghawak sa mga bagay na nahawaan ng virus ay ang mga kilalang paraan ng pagkakaroon ng trangkaso. Palaging magsuot ng mask sa mataong lugar, maghugas ng kamay nang madalas, at gumamit ng hand sanitizer bilang pag-iingat."
    ]),
    encodeMemory([
        "* ano * (trigger|dulot|resulta|bigay|dahilan) * trangkaso * "
    ],[
        "Ang influenza ay sanhi ng virus. Kung huminga ka ng hanging ibinuga ng isang taong nahawahan, maaari mong malanghap ang virus at makakuha ng sakit. Ang parehong bagay ay maaaring mangyari kung hinawakan mo ang isang bagay na nahawakan ng isang nahawaang tao. Maaari kang makakuha ng virus, kung ang iyong mga kamay ay nadikit sa iyong mga mata, ilong, at bibig."
    ]),
    encodeMemory([
        "* dahilan_ng_ trangkaso * diarrhea * "
    ],[
        "Ang alam natin ay ang mga virus ay nagdudulot ng trangkaso. Kapag nalalanghap mo ang hangin na nalalanghap ng isang taong nahawahan o nahawakan ang mga bagay na nahawakan ng isang taong nahawaan, maaari kang makakuha ng trangkaso"
    ]),
]

let section5 = [
    encodeMemory([
        "*(bakit|paano) * pahinga  * (tulong|gamot|buti|galing) * trangkaso *"
    ],[
        "Dapat kang manatili sa bahay hanggang sa mawala ang iyong lagnat nang hindi bababa sa 24 na oras. Ang isang taong may trangkaso ay natural na gagaling sa loob ng 2 hanggang 7 araw. Sa pamamagitan ng pagpapahinga sa araw, ang iyong katawan ay maaaring maglaan ng mas maraming mapagkukunan sa paglaban sa virus. Bukod sa pagtulong sa iyong gumaling, ang pananatili sa bahay ay pinipigilan din ang pagkalat ng trangkaso sa ibang tao sa iyong komunidad o lugar ng trabaho."
    ]),
    encodeMemory([
        "*(bakit|paano) * inom  * tubig *  (tulong|gamot|buti|galing) * trangkaso *"
    ],[
        "Ang isang sintomas ng trangkaso ay isang mataas na lagnat, na maaaring humantong sa pagpapawis. Maaari ka ring dumaranas ng mga pagsusuka o pagtatae. Ang iyong katawan ay nangangailangan ng maraming likido upang palitan ang mga nawawalang likido, at higit pa upang labanan ang impeksiyon."
    ]),
    encodeMemory([
        "*(bakit|paano) * iwasan * pagod  * tubig *  (tulong|gamot|buti|galing) * trangkaso *"
    ],[
        "Ang paggawa ng mga aktibidad na nangangailangan ng iyong lakas ay maaaring magdulot sa iyo ng pag-ubo, paghingal, pagbahing at pag-iipon ng hininga na maaaring hindi ka komportable. Maaari mo ring ikalat ang virus sa ganitong paraan. Maghintay ng ilang araw bago gumawa ng mabibigat na aktibidad o hanggang gumaling ka."
    ]),
    encodeMemory([
        "*(bakit|paano) * masustansya *   (tulong|gamot|buti|galing) * trangkaso *"
    ],[
        "Ang iyong katawan ay nangangailangan ng mas mahusay na nutrisyon upang gumaling mula sa trangkaso. Ang mga sariwang prutas at gulay ay nagbibigay ng mahahalagang bitamina, mineral, at antioxidant na nagpapalakas sa iyong immune system habang nilalabanan nito ang virus."
    ]),
    encodeMemory([
        "*(bakit|paano) * consult * doktor *  (tulong|gamot|buti|galing) * trangkaso *"
    ],[
        "Ang trangkaso ay kadalasang gagaling nang mag-isa, ngunit maaari itong magdulot ng malubhang karamdaman sa ilang tao. Kung ikaw ay nasa espesyal na panganib ng mga komplikasyon, makipag-ugnayan sa iyong doktor sa sandaling magsimula ang iyong mga sintomas."
    ]),
    encodeMemory([
        "*(bakit|paano) * inom  * tubig *  trangkaso *"
    ],[
        "Ang isang sintomas ng trangkaso ay isang mataas na lagnat, na maaaring humantong sa pagpapawis. Maaari ka ring dumaranas ng mga pagsusuka o pagtatae. Ang iyong katawan ay nangangailangan ng maraming likido upang palitan ang mga nawawalang likido, at higit pa upang labanan ang impeksiyon"
    ]),
    encodeMemory([
        "*(bakit|paano) * kain  * masustanya *  trangkaso *"
    ],[
        "Ang iyong katawan ay nangangailangan ng mas mahusay na nutrisyon upang gumaling mula sa trangkaso. Ang mga sariwang prutas at gulay ay nagbibigay ng mahahalagang bitamina, mineral, at antioxidant na nagpapalakas sa iyong immune system habang nilalabanan nito ang virus."
    ]),
    encodeMemory([
        "* sino *  (tulong|gamot|buti|galing) * trangkaso * "
    ],[
        "Maaari mong pamahalaan ang trangkaso sa iyong sarili. May mga over-the-counter na gamot na makakatulong sa pagpapagaan ng mga sintomas tulad ng lagnat, pananakit at ubo. Kung mayroon kang virus, kailangan mong magkaroon ng sapat na pahinga. Dapat kang manatili sa bahay hanggang sa mawala ang iyong lagnat nang hindi bababa sa 24 na oras, uminom ng maraming likido, iwasan ang mga nakakapagod na gawin, kumain ng masusustansyang pagkain. Gayunpaman, mas makakatulong sa iyo ang pagpapatingin sa doktor kung mas malala ang iyong pakiramdam. Maaari silang magreseta sa iyo ng partikular na gamot at direksyon."
    ]),
    encodeMemory([
        "* pwede * trangkaso * gamutin * ",
        "* pwede * gamutin * trangkaso *"
    ],[
        "Oo. Kung mayroon kang virus, kailangan mong magkaroon ng sapat na pahinga. Dapat kang manatili sa bahay hanggang sa mawala ang iyong lagnat nang hindi bababa sa 24 na oras, uminom ng maraming likido, iwasan ang pagpapagod,at  kumain ng masusustansyang pagkain. Mapapamahalaan mo rin ang mga sintomas nito sa pamamagitan ng pag-inom ng mga gamot na nasa counter."
    ]),
    encodeMemory([
        "* kailan * consult * doktor * trangkaso * "
    ],[
        "Ang trangkaso ay kadalasang gagaling nang mag-isa, ngunit maaari itong magdulot ng malubhang karamdaman sa ilang tao. Kung ikaw ay nasa espesyal na panganib ng mga komplikasyon, makipag-ugnayan sa iyong doktor sa sandaling magsimula ang iyong mga sintomas."
    ]),
    encodeMemory([
        "* saan * gamutin * trangkaso * ",
        "* gamutin * trangkaso * saan *"
    ],[
        "Maaari kang magsanay ng pangangalaga sa sarili sa iyong tahanan. Sa mga may malalang kaso, kailangan mong magpatingin kaagad sa doktor lalo na kung kabilang ka sa mga high risk group"
    ]),
    encodeMemory([
        "* saan * bili * gamot_trangkaso * ",
        "* saan * gamot_trangkaso * bili * ",
        "* saan * bili * gamot * trangkaso",
    ],[
        "Karamihan sa mga over-the counter na gamot na makakatulong sa pamamahala ng mga sintomas ay mabibili sa iyong pinakamalapit na parmasya. Gayunpaman, kailangan mong magkaroon ng reseta sa mga gamot tulad ng mga antiviral."
    ]),
    encodeMemory([
        "* trangkaso * (tulong|gamot|buti|galing|gawin)   * paano * ",
        "* (tulong|gamot|buti|galing|gawin) * trangkaso * paano * ",
        "* paano * (tulong|gamot|buti|galing|gawin) * trangkaso *",
        "* ano *  (tulong|gamot|buti|galing|gawin) * trangkaso * ",
        "* ano * trangkaso * (tulong|gamot|buti|galing|gawin) *",
        "* (tulong|gamot|buti|galing|gawin) * trangkaso * ano *",
    ],[
        "Dalawang uri ng gamot ang ginagamit upang gamutin ang trangkaso: mga gamot sa pagkontrol ng sintomas at mga gamot na antiviral. Maaari mong pamahalaan ang trangkaso sa iyong sarili. Gaya ng sabi ko may mga over the counter na gamot na makakatulong sa pagpapagaan ng mga sintomas tulad ng lagnat, pananakit at ubo. Maaari kang uminom ng mga pain reliever para mabawasan ang lagnat, sakit ng ulo at pananakit ng katawan gaya ng ibuprofen at acetaminophen (paracetamol ). Maaari kang uminom ng mga decongestant upang makatulong na buksan ang iyong mga daanan ng ilong at mapawi ang presyon sa iyong mga sinus. Ang mga suppressant ng ubo tulad ng robitussin ay makakatulong sa iyo na mapawi ang tuyong ubo. Makakatulong din ang mga expectorant sa pamamagitan ng pagluwag ng makapal na uhog. Makakatulong din ang mga antihistamine sa pamamagitan ng pag-alis ng mga nakakainis na sintomas gaya ng pagbahing, pangangati, at paglabas ng ilong. Tungkol sa pangangalaga sa sarili, Kung mayroon kang virus, kailangan mong magkaroon ng sapat na pahinga. Dapat kang manatili sa bahay hanggang sa mawala ang iyong lagnat nang hindi bababa sa 24 na oras, uminom ng maraming likido, iwasan ang pagpapagod, kumain ng masusustansyang pagkain. Gayunpaman, mas makakatulong sa iyo ang pagpapatingin sa doktor kung mas malala ang iyong pakiramdam. Maaari silang magreseta sa iyo ng partikular na gamot at direksyon."
    ]),
]


export const data = 
    [].concat(section4)
        .concat(section5)
