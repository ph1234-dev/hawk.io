// const { encodeMemory,encodeTopic } = require("../../../blueprint/model")
let encodeMemory = function(pattern,response,nextTopic){
    return{
      "pattern": pattern,
      "response": response,  
      "nextTopic": nextTopic
    }
}

let section11 = [
    encodeMemory([
        `* (duken|panon) * antimotility * (awa|gamot|kapya|tabang) * `
    ],[
        `Su loperamide na mapya a gamot sa kadtagudo. Papegkalunggaden nin I pegken sa tainao na taw para ka sesep nu lawas su ig nu pegken.Nya a ba gamot na makagkapaydu sa kaudo nu tao ugayd na aw na to na makalunsan bun sa ten I aden bun andang a sakit nin.`
    ]),
    encodeMemory([
        `* (duken|panon) * bismuth subsalicylate * (awa|gamot|kapya|tabang) *`
    ],[
        `Nya penggulan na nya a gamot na papegkapaydon nin I kapagukit na ig sa tinai nu tao. `
    ]),
    encodeMemory([
        `* (duken|panon) * electrolyte * (awa|gamot|kapya|tabang) *`,
    ],[
        `Papedtanan ni kapagukit nu ig sa tinai no taw. Papegkapaydon nin bon su tai a belyu  sa taw.`
    ]),
    encodeMemory([
        `* (duken|panon) * petroleum jelly * (awa|gamot|kapya|tabang) *`,
    ],[
        `Makadtabang I nya ba upama ka magatel I pes una pudit nengka.`
    ]),
    encodeMemory([
        `* (duken|panon) * rehydration solution * (awa|gamot|kapya|tabang) *`,
    ],[
        `Di nan pakagamot sa kadtagudo, ugayd na makadtabang I namba sa kapagukit na ig sa lawas nu tao endu di ka lenukan edsamik upama ka edtagudo ka`
    ]),
    encodeMemory([
        `* (duken|panon) * probiotics * (awa|gamot|kapya|tabang) *`,
    ],[
        `Aw na to na su kadtagudo na sabap sa da di magidsan I kadakel na mapya abpeg a mawag a kagaw na tyan. Su kainom na probiotic na makadtabang sa namba ka papagidsanen nin I kadakel na mapya a kagaw sa tyan nu taw.`
    ]),
    encodeMemory([
        `* (duken|panon) * zinc * (awa|gamot|kapya|tabang) *`,
    ],[
        `Su kapaginom sa zinc na makadtabang sa pedtagudo ka isa I namba a importranti a pedsesepen ,pegkabagel endu kaukit na ig sa lawas nu taw.`
    ]),
    encodeMemory([
        `* ngen * generic * gamot * diarrhea * `,
    ],[
        `Aden loperamide endu bismuth subsalicylate a antimotility. Aden bon hydrite a kapamasa bon sa botika. `
    ]),
    encodeMemory([
        `* ngen * branded * antidiarrheal * drugs *`,
        `* ngen * branded * gamot * diarrhea *`,
    ],[
        `Su Imodium abpeg a pepto bismol na kaped sa mga branded a ngala na gamot sa kadtagudo`
    ]),
    encodeMemory([
        `* (panon|ngen) * penggulan * nin * `,
    ],[
        ``
    ]),
    // antimotility
    encodeMemory([
        `* ngen * generic * antimotility * `,
    ],[
        `Su loperamide na generic a ngala na gamot na kadtagudo ka gaton sa botika.`
    ]),
    encodeMemory([
        `* ngen * branded * antimotility * `,
    ],[
        `Aden Imodium a branded a ngala na loperamide`
    ]),
    encodeMemory([
        `* ngen * dose * (!loperamide|imodium) *`,
        `* panon * (gamit|kan|inom) * (!loperamide|imodium) * `,
        `* ngen * ukit * (!loperamide|imodium) * `,
        `* panon * (!loperamide|imodium) * (gamit|kan|inom) * `,
    ],[
        `Inom ka sa ig upama ka penggamutan nengka I kadtagudo sa loperamide. Su kadtagudo na makalenguk ged I namaba. Nya ba I enggula ka samaya. Sa mga wata a sampong gu dwa o mas matuwa pan san na paimon ka sa dwa katabletas kapasad nin makaudo. Edaw kapasad nin, painom ka sa isa ka tabletas uman den makaudo. Di ka papaginom sa sobra sa pat timan a tabletas su taw sa sagay.  Sa mga wata a siyaw taman sa sampong gu isa lagon o mga wata a 60 lbs I kaugat nin taman sa 95 lbs na painom ka sa saka tabletas endaw kapasad nin makaudo. Kapasad nin na painom ka sa sabad na tabletas a nan uman makaudo. Di ka papaginom su wata sa tlo ka tabletas sa sagay. Sa mga wata a nem taman sa walo lago o mga wata a 48 lbs taman sa 59 lbs na painom ka sa saka tabletas endaw kapasad nin makaudo.kapasad nin na painom ka sa sabad a tabletas sa sagay. Sa mga wata a lima lagon o mas wata man na idsa ka sa doctor panon I kagamot lon.`
    ]),
    encodeMemory([
        `* ngen * (!loperamide|imodium) * `,
    ],[
        `Su loperamide (Imodium A-D) na kapamasa sa botika apya da riseta nin na makadtabang sa kadtagudo. Paginomen I nya ba upama ka lemedsu su kapagudo abpeg kapasad na kaudo.`
    ]),
    encodeMemory([
        `* endaw * (!loperamide|imodium) * gamit * `,
        `* endaw * gamit * (!loperamide|imodium) *`,
    ],[
        `Pegkontrolen nin I mangegedeman na kadtagudo.`
    ]),
    encodeMemory([
        `* panon * galbek * (!loperamide|imodium) *`,
        `* panon * (!loperamide|imodium) * galbek * `
    ],[
        `Su loperamide (Imodium A-D) na lemyo I bisa nin mga sakawras . Ugayd na aw na to na di maginsan I nan sa kaped a mg ataw. Angay ka sa doctor nengka upama ka edsalseg I sakit nengka  sa nya ba a gamot.`
    ]),
    encodeMemory([
        `* kano * di * (kan|inom|gamit) * (!loperamide|imodium) * `,
    ],[
        `Da ka paginom sa loperamide ( Imodium A-D) upama ka aden limyo a mawag a kanggegedam nengka kapasad nengka keman sa gamot a nan. Mayto bon upama ka kaytem su tae nengka. Nya mapya enggulan nu tao na midsa na doctor bago gemamit sa loperamide ( Imodium A-D) upama ka pegkayaw su taw o aden dana nu tay nin.`
    ]),
    encodeMemory([
        `* di * mapya * epekto * (!loperamide|imodium) * `,
    ],[
        `Su loperamide ( Imodium A-D) na makalangot aw na to na makalugat pan. Da ka pendrive o penggulan sa mga galbel nasisita I kabfocus taman sa sa di nengka katawan ngin I enggulan na gamot a nan sa leka. Upamaka ka lemebag su tyan nengka na angay ka sa doctor gagan.`
    ]),
    encodeMemory([
        `* ngen * (tips|enggulan) *  (!loperamide|imodium) * `,
    ],[
        `Da ka penggamit sa loperamide ( imodim A-D ) upama ka pebpilugo o maytem su tae. Upama ka aden bun sakit nengka andang sa atay o pamusungan na dikena bon ged I nya ba mapya a gamot sa leka.`
    ]),
    encodeMemory([
        `* pila * (!loperamide|imodium) * `,
        `* (!loperamide|imodium) * pila * `,
    ],[
        `Su loperamide na generic a gamot na nya malmo I alaga nin sa branded. Lu sa watsons, na pebpasan I nya bas a pitopulong ngu dwa (72 pesos) 2mg pat timan. Ugayd n abasi mas malmo I alaga nin I nya sa kaped pan a botika.`
    ]),
    encodeMemory([
        `* embalangan * (!loperamide|imodium) * `,
    ],[
        `Aw na to na nya nin buntal I nya ba na capsul, igen, tablitas, o pedsesek sa pudit.`
    ]),
    encodeMemory([
        `* sambi * (!loperamide|imodium) * `,
    ],[
        `Aden Lomotil (diphenoxylate / atropine), ugayd na di kapamasa I nan amay ka dala risita na doctor. `
    ]),
    // bismuth subsalicylate
    encodeMemory([
        `* ngen * generic * !bismuth !subsalicylate *`,
    ],[
        `Namba na generic a ngala na gamot pakat.`
    ]),
    encodeMemory([
        `* ngen * branded * !bismuth !subsalicylate *`,
    ],[
        `Namba na katawan bon sa ngala a Pink Bismuth, Peptobismol endu bismatrol.`
    ]),
    encodeMemory([
        `* ngen * dose * !bismuth !subsalicylate * `,
        `* panon * (gamit|kan|inom) * !bismuth !subsalicylate * `,
        `* ngen * ukit * !bismuth !subsalicylate * `,
        `* panon * !bismuth !subsalicylate  * (gamit|kan|inom) *`,
    ],[
        `Nya ba I gamutan na bismuth subsalicaylate.  Aden embidayan na tablitas sa igen a gamot. Su tablitas na amayka su taw ka sampulo engu dwa (12 years old) o matuwa pan san na pakan ka sekanin sa dwa timan (2pcs) a 524 mg uman tlo pulo taman sa nem pulo (30-60 minutes) uman gay. Da ka paginom sa sapulo enggu nem (16) ka tablistas sa sagay.  Amayka sui gen a gamot I nan sa leka, na amayka su taw na sapulong enggu dwa (12 years) o matuwa pan san na panggamot ka sa 30mL uman tlo pulo ka minutos taman sa dwa gay. Amayka painumen nengka sa bismuth subsalicaylate ( pepto-bismol) su pedtagudo, na inom ka bo sa 60 ml uman nem pulo (60 minutes) ka minutos. Da ka pedsubla paginom sa 240ml (4200mg) sa sagay`
    ]),
    encodeMemory([
        `* ngen * bismuth !subsalicylate  * `,
    ],[
        `Su bismuth subsalicylate ( pepto-Bismol) ka pamasa sa botika apya dala riseta nin. Pakagamot I namba sa pedtagudo. Nya nin penggulan na makapaenda nin su kadtagudo. Ugayd na inom aw na to na inom ka I namba makapila sa kagabyan. Su bismuth subasalicylate ( pept-bismol ) na mapya bon man, ugay na aw na to na makagkaytem sa dila o tae.`
    ]),
    encodeMemory([
        `* endaw * bismuth !subsalicylate  * gamit * `,
        `* endaw * gamit * bismuth !subsalicylate  * `,
    ],[
        `Su bismuth subsalicylate na kapamasa sa botika apya da riseta na doctor. Pakagamot I namba sa kadtagudo , sakit a tyan, endu su kanggedam a mana ka pakauta. Makadtabang I namba sa mga tao a istidi aden pebpawangan nin.`
    ]),
    encodeMemory([
        `* panon * galbek * bismuth !subsalicylate  *`,
        `* panon * bismuth !subsalicylate  * galbek * `
    ],[
        `Kadakelan sa pasinti na gapya I manggegedam nilan mga pat ka oras kapasad a kina inom nengka sa gamot. Da ka pegkan sa bismuth subsalicylate (pepto-bismol) sa dwa gay. Umayka di pon mawa su kadtagudo sa namba dwa gay a nan na edtanggit ka I pasinti sa ospital.`
    ]),
    encodeMemory([
        `* kano * di * (kan|inom|gamit) * bismuth !subsalicylate  * `,
    ],[
        `Di ka papegkan su taw sa namba umayka malmo ka ebpilugo, aden ulcer nin, aden lugo na tay nin, aden allergy nin sa asipiri o pegkan ka sa kaped a salicylates. Di ka benel papegkan I wata o manguda a pegkayaw , pembatuken o aden chickenpox nin.`
    ]),
    encodeMemory([
        `* di * mapya * epekto * bismuth !subsalicylate  * `,
    ],[
        `Aw na to na gaitem I tai nengka o dila nengka sa gamot a nan. Amayka makanggedam ka sa allergy mana di ka paka ginawa, blyu mga tapilak, blebag ka,  endu rye syndrome a katusan amayka pedtagudo ka a pakauta ka na dala bagel nengka abpeg kalangot ka a mana ka ga beleg na edtanggit ka I pasente sa doctor`
    ]),
    encodeMemory([
        `* ngen * (tips|enggulan) *  !bismuth !subsalicylate * `,
    ],[
        `inom ka sa di maldsik a ig umayka mininom ka sa bismuth subsalicylate ( pepto-bismol). Su kadtagudo ga ludus nis u ig na lawas bali lenukan ka edsamikel. Tu banan su kapaginom sa ig na masya I makatabang nin kano taw. Upama ka enggamot ka na lenuk ka su capsule. Di ka pedsepa su gamot.`
    ]),
    encodeMemory([
        `* pila * !bismuth !subsalicylate * `,
        `* !bismuth !subsalicylate * pila * `,
    ],[
        `Gapamasa I namba sa saka pakete. Lu sa iprice.ph na mga lima gatos ( 500) I alaga nan amba. Ugayd na di ged mapulo alaga nin upama ka pamasan nengka sa gaga isa bo`
    ]),
    encodeMemory([
        `* embalangan * !bismuth !subsalicylate * `,
    ],[
        ``
    ]),
    encodeMemory([
        `* sambi * !bismuth !subsalicylate * `,
    ],[
        `Su loperamide (Imodium-AD) na kapakayan nengka bon pamasan upama ka di ka nengka kalinyan I nya ba.`
    ]),
]
// incomplete... where are the rest? only 2 are medicines??
// are you sure??


let section12 = [
    encodeMemory([
        `* endaw * gamot * tagudo * `,
        `* endaw * (ilay|ebpawang) * tagudo * `,
    ],[
        `Su kadtagudo na mapakay na apya sa walay nu bo gamuti. Kapya bon I nan mga pila gay. Ugayd na amayka di den a benel mapya I kangegedam nengka, limambas den sa dwa gay I kauget nin, pebpilugo I tay nin o pegkayaw pan sekanin, na nya mapya san na edtanggit ka den sa ospital I pasente nengka.`
    ]),
    encodeMemory([
        `* (ngen|kano|panon) * acute * diarrhea * `,
    ],[
        `Umayka su kadtagudo na sagay o dwa gay bo na aw na to namba I pedtalon nilan a mabagel a tagudo. Aw na to na aden nakan nengka o nainom nengka a aden kagaw nin a mana bacteria, vairus, o parasites. Umayka pendadalakaw na ka nidtagudo ka nan amba I pedtalon nilan a “travellers diarrhea”. Nya kagamot sa namba na kapaginom  sa mga kapamasa bon a gamot sa buti kya abpeg ka stidi den mon a kapagainom. Umayka edsalseg I namba sa dwa gay  na ilay ka base aden lugo na tay nin. Aw na to na basi aden mayaw nin. Upama ka mailay nengka i nya ba na edtanggit ka den sekanin sa doktor. `
    ]),
    encodeMemory([
        `* (ngen|kano|panon) * chronic * diarrhea *`,
    ],[
        `Katawan nengka amayka namba kadtagudo nengka na maugel maawa upama ka embabalingan I namba edsamikel uman padian. Aw na to na nya sabap I namba na sakit sa tyan. Kagamotan nengka I namba sa kapaginom sa ig endu gamot. Nya bon pinakamapya na edtanggit ka su pasete sa doctor ka silan I mataw panon I pakaira sa namba pembabalingan a nan a kadtagudo.`
    ]),
    encodeMemory([
        `* (ngen|panon) * bidayan * acute diarrhea * chronic diarrhea * `,
        `* (ngen|panon) * bidayan * chronic diarrhea * acute diarrhea * `,
    ],[
        `Su kadtagudo na aw na to na mababel aw na to na pembabalingan. Umayka du kadtagudo na sagay o dwa gay mo na mabagel I sakit a nan. Ugayd na tu pembabalingan a kadtagudo a mana di den gaawa ka uman padian den na mauget I namba mawa a tagudo.  Basta edtagudo ka na nya mapya san na inom ka edsamikel sa ig endu kasambiyan su langon a ig a nadtapik na kinaudo nengka.`
    ]),
    encodeMemory([
        `* panon * gamot * acute * diarrhea * `,
    ],[
        `Nya una enggulan a taw upamaka ka mabagel I kadtagudo nin na kainom nin sa ig edsamikel. Nya mapya inomin nin na oral rehydration solution. Su kainom sa loperamide na mapakay bon ka makagkapegkag sa mangigignawa I namba. `
    ]),
    encodeMemory([
        `* panon * gamot * chronic * diarrhea * `,
    ],[
        `Nasisita su kainom edtangang sa ig ka endu kasambiyan su ig a pakaud nengka sya ebpon sa lawas nengka. Nya bon mapya na pangeni ka sa tabang sa mataw enggamot a doctor endu maton nilan I sabap na kapedtagudo a nan`
    ]),
]

let section13 = [
    encodeMemory([
        `* ngen * problema * tagudo * `,
        `* problema * tagudo * ngen * `,
        `* ngen * tagudo * problema * `,
        `* makadtaday * tagudo * problema * `,
        `* problema * makadtaday * tagudo * `,
        `* tagudo * problema * makadtaday *`,
    ],[
        `Su kadtagudo na pakaibped sa ig nu lawas ka paunot pakaudo. Umayka su taw na lenukan edsamikel, na tanda ba I nan na kulang sekanin sa ig endu mga electrolytes ( sodium, chroride, postassium endu bicarbonate) a papedtalagoy salawas nin. Amayka edsalseg na makapatay ba I nanba a sakit. Tu ba nan importati a painumen sa taw sa ig edsamikel. Su kadtagudo na sabapan bon na malabsorption. Nya ba na kanggula amayka di kasesep nu lawas su dalem na pegken sya sa tyan. Makangguna ba I nyaba sa kagkalubay nu lawas. Aw na to na namba kadtagudo a nan na kaped a sakit a kangegedam nu taw. `
    ]),
]

let section14 = [
    encodeMemory([
        `* (ten|endaw) * idsa * (sign|symptoms|sintomas|senyales|padsa)  * tagudo * `,
        `* (sign|symptoms|sintomas|senyales|padsa)  * tagudo * (ten|daw) * idsa * `,
    ],[
        `Kapakay ako nengka edsan sa mga ngin i enggulan nu tao amayka pedsakit. Ugayd na nya bon mapya na edsa ka sa mataw engamot.`
    ]),
    encodeMemory([
        `* endaw * ebpawang * tagudo * `,
    ],[
        `Kagamutan nengka bon I kadtagudo apya san ka bo sa walay. Nya kan enggula na inom ka sa gamot a gapamasa bon sa botika endu pegkapya I kanggegedam nengka. Amayka maylay nengka a pebpilugo I kapagudo nengka, pegkayaw ka o di nan aka dwa gay den I kapedtagudo nengka na nya mapya na pailay ka sa doctor.`
    ]),
    encodeMemory([
        `* ngen * (sign|symptoms|sintomas|senyales|padsa)  * diarrhea * `,
        `* ngen * (sign|symptoms|sintomas|senyales|padsa)   * dehydration * `,
        `* panon * (kataw) * tagudo * `,
    ],[
        `Madakel I sipat na kapedtagudo. Kadakelan sa  mga taw na nya nilan kanggedam na pedsakit I tyan nilan, pegkasla tyan nila, aden lugo na tay nilan, pedtagetut silan a paka tik pan, galugat ket, pegkayaw, pegkegkel, pakaudo den edtandang, masla I ka nga udo din, aw na to na pakauta pan.`
    ]),
    encodeMemory([
        `* panon * gamot * tagudo * `,
    ],[
        `Kapakay ka paginom sa gamot a kapamasa sa botika apya dala den risita na doctor. Ugayd na bago ka paginom na ilay ka amay ka aden lugo na tay nengka. Amayka aden na di ka paginum sa mga gamot a kapamasa sa botika sad ala riseta nin.`
    ]),
    encodeMemory([
        `* padsa_na_tagudo * (sign|symptoms|sintomas|senyales|padsa)   * tagudo * `,
        `* padsa_na_tagudo * tagudo * (sign|symptoms|sintomas|senyales|padsa)  * `,
    ],[
        `Uway, sipat I namba na sakit a nan.`
    ]),
]

let section15 = [
    encodeMemory([
        ``
    ],[
        ``
    ]),
]

let data = 
[].concat(section11)
    .concat(section12)
    .concat(section13)
    .concat(section14)
    .concat(section15)



export{
    data
}