import { encodeMemory } from "@/api/config/model"


let section11 = [
    // encodeMemory([
    //     `* generic * antimotility * `,
    //     `ngen i mga ngala na generic a antimotility`,
    //     `enggay ka sa mga ngala na generic a antimotility `,
    //     `ngen aden mga generic a antimotility`,
    // ],[
    //     `Su loperamide na generic a ngala na gamot na kadtagudo ka gaton sa botika. Nya ba na aden mga balangan nin mana su tablitas, capsules, o igen a gamot. Paginumen i nya ba a gamot. Nasisista su kaunot sa direction a nakabetad sa gamot engo di ka makagedam sa di mapya`
    // ],7),
    // encodeMemory([
    //     `* branded * antimotility * `,
    //     `ngen i mga ngala na branded a antimotility`,
    //     `enggay ka sa mga ngin ngala na branded a antimotility `,
    //     `ngen aden brand na antimotility`,
    // ],[
    //     `Aden Imodium a branded a ngala na antimotility. Endu di ka makagedam sa di mapya, na nasisita a unutan su dosage o direction na nakabetad sa gamot a nan.`
    // ],7),
    encodeMemory([
        `* dose * antimotility *`,
        `* (gamit|kan|inom) * antimotility * `,
        `* ukit * antimotility * `,
        `* antimotility * (gamit|kan|inom) * `,
        `di ko katawan panon i kapaginom sa antimotility`,
        `ngin i nakasugat a ukit ka kainom kagamot sa antimotility`,
        `panon i kainom kakan kapegkan sa gamot a antimotility`,
        `panon ngin i kapenggamot dose sa antimotility`,
    ],[
        `Inom ka sa ig upama ka penggamutan nengka I kadtagudo sa antimotilities. Su kadtagudo na makalenguk ged I namaba. Nya ba I enggula ka samaya. Sa mga wata a sampong gu dwa o mas matuwa pan san na paimon ka sa dwa katabletas kapasad nin makaudo. Edaw kapasad nin, painom ka sa isa ka tabletas uman den makaudo. Di ka papaginom sa sobra sa pat timan a tabletas su taw sa sagay.  Sa mga wata a siyaw taman sa sampong gu isa lagon o mga wata a 60 lbs I kaugat nin taman sa 95 lbs na painom ka sa saka tabletas endaw kapasad nin makaudo. Kapasad nin na painom ka sa sabad na tabletas a nan uman makaudo. Di ka papaginom su wata sa tlo ka tabletas sa sagay. Sa mga wata a nem taman sa walo lago o mga wata a 48 lbs taman sa 59 lbs na painom ka sa saka tabletas endaw kapasad nin makaudo.kapasad nin na painom ka sa sabad a tabletas sa sagay. Sa mga wata a lima lagon o mas wata man na idsa ka sa doctor panon I kagamot lon.`
    ],7),
    encodeMemory([
        `* antimotility * `,
        `ngin i pidtalo a antimotility`,
        `ngen besen i loperamide`,
        `di ko katawan ngin i antimotility`,
    ],[
        `Su antimotility mana so Loperamide abpeg Imodium na papegkalungaden nin su kapenggedi nu tyan. Ny anin penggulan na pembind nin su opioid receptors nu tinai endu pegkapaydo su kapengedi nin endu pegkalungat su kapagukit nu tay sa tinae. Nya buntal na gamot a nya ba na aw na to na capsul, igen, o tablitas.`
    ],7),
    encodeMemory([
        `* antimotility * gamit * `,
        `* gamit * antimotility *`,
        `endaw kagamit i loperamide `,
        `ngin besen i penggamutan gamit na loperamide `,
        `di ko katawan ngin i antimotility`,
        `kano i kakan, kainom, kanggamot sa antimotility`,
    ],[
        `Su antimotility  mana so Loperamide abpeg Imodium na nya nen pengamutan na su sintomas na kapedtagudo. Papegkapaydun nin su kapenggedi nu tyan endu di ged pakaukit su pegken abpeg su ig. Nya ba na pangenggan nin su tinay sa oras para gasesep nin su ig abpeg nutrients sa tinay. Nya ba na pakagkapaydu sa kalyu na tay.Nya buntal na gamot a nya ba na aw na to na capsul, igen, o tablitas.`
    ],7),
    encodeMemory([
        `*galbek * antimotility *`,
        `* antimotility * galbek * `,
        `panon ngin i galbek na loperamide sa tagudo`,
        `panon besen i kapenggamot na loperamide  sa tagudo`,
        `di ko katawan ngin i galbek na antimotility`,
    ],[
        `Su antimolitities a mana su loperamide abpeg a imodium na pedtabang sa kapengedi na tyan endu pakagamot sa kapedtagudo. Nya nilan penggulan na pedtabang sa kasesep sa ig abpeg electroltes sa tay. Sabap sa nya ba na pegkapaydu i kapagudo nu taw. Nya mga a gamot na pangatan sa sakawras endu pegkapya i manggegedam nu taw. Ugayd na embibidaya i nya ba sa mga tao. Ugayd, na tanday ka dikena ba langon na pedtaguo na mapakaay enggamot sa nya ba endu aden side effects na nya ba.`
    ],7),
    encodeMemory([
        `* di * (kan|inom|gamit) * antimotility * `,
        `kano i di kakan kagamit kainom sa loperamide `,
        `nginto ka di mapakay a enggamot keman minom sa loperamide `,
        `ngen to ka so loperamide  na di mapya a gamiten kanen inomen nu taw`,
        `enduken ka di minom keman sa loperamide taw`,
        `panon a to ka di mapakay a keman i taw sa loperamide i taw`,
        `duken ka di pegkanen su antimotility`,
        `di ko katawan kano i di kanggamot, kakan, kainom, kagamit, sa antimotility`,
        `aden mga tao a di mapakay o dayt a keman, minom, enggamot, o gemamit sa antimotility`,
    ],[
        `So mga antimotility na di dayt inumen nu taw amengka gailay nengka a dehydrated to taw, mapulu i kayaw nin o aden lugo na gaudo nin ka nya ba na padsa na kaped a sakit na nasisita i pendoktor.`
    ],7),
    encodeMemory([
        `* di * mapya * epekto * antimotility * `,
        `ngen i di mapya a manggula na taw a mininom keman sa loperamide `,
        `ngen i mga di mapya a epekto amayka keman minom i taw sa loperamide `,
        `labit ka sa mga di mapya epekto sa taw na loperamide `,
        `di ko katawan ngen di mapya manggula nu taw amayka keman sa antimotility`,
        `aden di mapya epekto o side effect na antimotility`,
        `panon ngin i di mapya epekto na antimotility`,
    ],[
        `Su antimotilities na makalangot aw na to na makalugat pan. Da ka pendrive o penggulan sa mga galbel nasisita I kabfocus taman sa sa di nengka katawan ngin I enggulan na gamot a nan sa leka. Upamaka ka lemebag su tyan nengka na angay ka sa doctor gagan.`
    ],7),
    encodeMemory([
        `* tips*  antimotility * `,
        `enggay ka sa mga tanda na kapegkan sa loperamide `,
        `panon i mga ula ula na kapegkan sa loperamide `,
        `aden mga tips nengka san sa kanggamot kakan kainom sa antimotility`,
        `ngin i tips na antimotility`,
    ],[
        `So antimotilities a mana su loperamide na aden mga side effects nin.  Da ka penggamit sa nya ba a agamot upama ka pebpilugo o maytem su tae. Upama ka aden bun sakit nengka andang sa atay o pamusungan na dikena bon ged I nya ba mapya a gamot sa leka.`
    ],7),
    // encodeMemory([
    //     `* pila * antimotility * `,
    //     `* antimotility * pila * `,
    //     `ngen i alaga na loperamide `,
    //     `gagapila i loperamide `,
    // ],[
    //     `Su loperamide na generic a gamot na nya malmo I alaga nin sa branded. Lu sa watsons, na pebpasan I nya bas a pitopulong ngu dwa (72 pesos) 2mg pat timan. Ugayd n abasi mas malmo I alaga nin I nya sa kaped pan a botika.`
    // ],7),
    // encodeMemory([
    //     `* embalangan * antimotility * `,
    //     `ngen i aden mga balangan o buntal na loperamide `,
    //     `madakel i embalangan, upaman o buntal na antimotility`,
    //     `panon labit ka ngin i balangan na antimotility`,
    // ],[
    //     `Aw na to na nya nin buntal I nya ba na capsul, igen, tablitas, o pedsesek sa pudit. Su gamot a antimotility mana loperamide na gapasa sa aw nato na tablitas sekanin o mana ig buntal nin.`
    // ],7),
    encodeMemory([
        `* sambi * antimotility * `,
        `ngen a mga gamot i mapakay i sambi sa loperamide `,
        `ngen i kaped a herbal gamot a gapakay isambi sa loperamide `,
        `aden pan kaped a herbal gamot a mapakay inomen kanen na taw lyu sa loperamide`,
        `di ko katawan ngen i kaped a gapakay pegkanen lyu sa antimotility`,
        `aden mga pakasambi a herbal gamot sa antimotility a mapakay kanen, inomen, enggamuten nu taw`,
    ],[
        `Aden kaped a mga gamot sa antimotilitiesl mana su kapaginom sa tinabel a lawn. Si luya na aden anti-inflammatory properties nin a pakatabang sa tyan nu taw. Mayto bon su saging kagina mapulo i postassium nin a pakatabang sa kapengedi na tyan. Endu su saging na aden pectin nin na pakadtabang endu pegkakapal su tay nu taw a pedtagudo.`
    ],7),
    // bismuth subsalicylate
    // encodeMemory([
    //     `* generic *bismuth *`,
    //     `ngin e mga ngala generic na mga bismuth subsalicylate `,
    //     `enggay ka sa mga ngala na generic a bismuth subsalicylate `,
    //     `aden ngen generic a bismuth subsalicylate`,
    // ],[
    //     `Su Bismuth subsalicylate na generic a gamot a gapamasa sa botika. Endu gi ka makadalo upamaka ka kanen nengka namba na nasisista i unuti ka i nakasugat a kapegkan lon`
    // ],7),
    // encodeMemory([
    //     `* branded *bismuth *`,
    //     `ngin  mga ngala branded a mga bismuth subsalicylate `,
    //     `enggay ka sa mga ngala na branded a bismuth subsalicylate `,
    //     `aden ngen branded a bismuth subsalicylate`,
    // ],[
    //     `Su Pepto-Bismon abpeg a Bismatrol na mga branded i namba. Endu gi ka makadalo upamaka ka kanen nengka namba na nasisista i unuti ka i nakasugat a kapegkan lon`
    // ],7),
    encodeMemory([
        `* dose *bismuth * `,
        `* (gamit|kan|inom) *bismuth * `,
        `* ukit *bismuth * `,
        `* bismuth subsalicylate  * (gamit|kan|inom) *`,
        `ngin i nakasugat a ukit kakainom kapegkan sa bismuth subsalicylate`,
        `panon i nakasugat a kapenggamot kapegkan sa bismuth subsalicylate`,
        `panon i nakasugat a kakan kainom kainom sa gamot a bismuth subsalicylate`,
        `panon ngin i nakasugat a dose na bismuth`,
    ],[
        `Su kapegkan sa bismuth subsalicyltae na depende sa buntal nin. kagina aden bidayan nu tablitas endu igen a to. 
        
        Su mga wata a 12 lagon na mapakay keman sa dwa ka tablitas o 524mg uman 30 ka minutus taman sa 60 minutes taman sa dwa gay. Di dayt a kanin i nya subla sa 16 ka tablitas sa sagay.
        
        Upama manem ka igen i buntal na bismuth subsalicylate na su taw a 12 i umol ni na mapakay enggamot sa 30ml uman 30 minutes taman sa dwa gay. Di dayt a edsubla i kakan sa nya ba 240ml sa sagay.

        Namba nalabit ko a nan na upaman bo i nan a panon i kanggamot lul. Su nakasugat a dose nin na dayt a pagunutan. Idsa ka sa doctor panon i kakan lun ka silan na katawan nilan i namba.
        `
    ],7),
    encodeMemory([
        `* bismuth * `,
        `ngen i pidtalo  a bismuth subsalicylate `,
        `di ko katawan ngin i bismuth subsalicylate`,
    ],[
        `Su bismuth subsalicylate mana su pepto-Bismol o bismatrol na ga pamasa sa botika apya dala riseta nin. Pakagamot I namba sa pedtagudo. Nya nin penggulan na makapaenda nin su kadtagudo. Ugayd na inom aw na to na inom ka I namba makapila sa kagabyan. Su bismuth subasalicylate ( pept-bismol ) na mapya bon man, ugay na aw na to na makagkaytem sa dila o tae. Nya ba gamot na nya nin buntal na tablitas, capsule, aw na to na igen.`
    ],7),
    encodeMemory([
        `* bismuth * gamit * `,
        `* gamit * bismuth * `,
        `ngin endaw besen i kagamit penggamutan na bismuth subsalicylate`,
        `di katawan i penggulan na bismuth subsalicylate`,
        `ngin kanu i kakan, kanggamot, kainom sa bismuth subsalicylate`,
    ],[
        `Su bismuth subsalicylate na kapamasa sa botika apya da riseta na doctor. Pakagamot I namba sa kadtagudo , sakit a tyan, endu su kanggedam a mana ka pakauta. Makadtabang I namba sa mga tao a istidi aden pebpawangan nin. Nya ba gamot na nya nin buntal na tablitas, capsule, aw na to na igen.`
    ],7),
    encodeMemory([
        `* galbek * bismuth *`,
        `*bismuth * galbek * `,
        `panon ngin i kapenggalbek kapenggamot na bismuth subsalicylate`,
    ],[
        `Su bismuth subsalicylate mana su pepto-Bismol o bismatrol na nabedtuan sa antidiarrheal medicine o gamot para sa kapedtagudo kanina pakagkapya sekanin sa kablibag endu kaibped na ig nu tinae nu taw. Antibacterial bon sekanin a pakadtabang sa kapedtagudo. Su nya ba a gamot na pakatabang bon amayka pakagedam su taw sa kapanegas nu tyan nin, kangri nin, kadtabrik, endu kalangot sabap sa kinaibped nu ig nu lawas nin. Ugayd, na nasisista na tuntay ka na su bismuth subsalicylate na di dayt a kanen nu taw a aden allegy nin sa aspirin, allergy sa kabpilugo, o aden sakit na tinay nin. Endu mangingat ka kagina di dayt i nya ba ipakan sa mga wala apbeg maginay. Di dayt ka kanen ba i nya edsubla sa dwa gay.`,
    ],7),
    encodeMemory([
        `* di * (kan|inom|gamit) * bismuth * `,
        `kano i di kagamit kakan kainom sa bismuth subsalicylate`,
        `nginto ka di mapakay a enggamot keman minom sa bismuth subsalicylate`,
        `ngen to ka so bismuth subsalicylate na di mapya a kanen , inomen o gamiten nu taw`,
        `enduken ka di keman minom sa bismuth subsalicylate i taw`,
        `panon a to ka di mapakay a keman i taw sa bismuth subsalicylate i taw`,
        `duken ka di pegkanen su bismuth subsalicylate`,
    ],[
        `Di ka papegkan su taw sa namba umayka aden bleeding problems nengka, o sakit a malbo ka ebpilugo, aden ulcer nin, aden lugo na tay nin, aden allergy nin sa asipiri o pegkan ka sa kaped a salicylates. Di ka benel papegkan I wata o manguda a pegkayaw , pembatuken o aden chickenpox nin.`
    ],7),
    encodeMemory([
        `* di * mapya * epekto * bismuth * `,
        `ngen i di mapya a manggula na taw a mininom sa bismuth subsalicylate`,
        `ngen i di mapya a manggula na taw a keman sa bismuth subsalicylate`,
        `ngen i mga di mapya a epekto amayka keman i taw sa bismuth subsalicylate`,
        `ngen i mga di mapya a epekto amayka minom i taw sa bismuth subsalicylate`,
        `labit ka sa mga di mapya epekto sa taw na bismuth subsalicylate`,
        `panon a to ka aden di mapya epekto na bismuth subsalicylate`,
        `di ko katawan ngin manggula nu taw amayka keman sekanin sa bismuth subsalicylate`,
        `ngin i di mapya epekto na bismuth`,
    ],[
        `Aw na to na gaitem I tai nengka o dila nengka sa gamot a nan. Amayka makanggedam ka sa allergy mana di ka paka ginawa, blyu mga tapilak, blebag ka,  endu rye syndrome a katusan amayka pedtagudo ka a pakauta ka na dala bagel nengka abpeg kalangot ka a mana ka ga beleg na edtanggit ka I pasente sa doctor`
    ],7),
    encodeMemory([
        `* tips* bismuth * `,
        `enggay ka sa mga tanda na kapegkan sa bismuth subsalicylate`,
        `panon i mga ula ula na kapegkan sa bismuth subsalicylate`,
        `ngen i enggulan nu taw amayka pegkan sekanin sa bismuth subsalicylate`,
        `aden mga tips nengka san ka kakan, kanggamot, o kainom sa bismuth subsalicylate`,
        `ngin i tips na bismuth`,
    ],[
        `Inom ka sa di maldsik a ig umayka mininom ka sa bismuth subsalicylate ( pepto-bismol). Su kadtagudo ga ludus nis u ig na lawas bali lenukan ka edsamikel. Tu banan su kapaginom sa ig na masya I makatabang nin kano taw. Upama ka enggamot ka na lenuk ka su capsule. Di ka pedsepa su gamot.`
    ],7),
    // encodeMemory([
    //     `*bismuth * pila * `,
    //     `* pila *bismuth * `,
    //     `gagapila i bismuth subsalicylate`,
    //     `ngen pila i alaga na bismuth subsalicylate`,
    // ],[
    //     `Gapamasa I namba sa saka pakete. Lu sa iprice.ph na mga lima gato I alaga nan amba. Ugayd na di ged mapulo alaga nin upama ka pamasan nengka sa gaga isa bo`
    // ],7),
    // encodeMemory([
    //     `* embalangan * bismuth * `,
    //     `madakel i embalangan, upaman o buntal na bismuth subsalicylate`,
    //     `ngen i mga kaped a embalangan nu gamot a bismuth subsalicylate `,
    //     `labit panon aden ngin balangan na bismuth subsalicylate`,
    // ],[
    //     `Su bismuth subsalicylate na nya nin buntal na mana tablitas, capsule, at na to na igen. Depende I nan sa minumbal lon endo so penggamutan nin.`
    // ],7),
    encodeMemory([
        `* sambi *bismuth * `,
        `ngen a mga herbal gamot i mapakay i sambi sa bismuth subsalicylate `,
        `ngen i kaped a herbal gamot a gapakay isambi sa bismuth subsalicylate `,
        `ngen pan i mapakay kanen a enggamuten nu taw`,
        `aden pan kaped a herbal gamot a mapakay kanen inomen na taw lyu sa bismuth subsalicylate`,
        `aden mga gamot a mapakay enggamuten kanen inumen a pakasambi sa bismuth subsalicylate`,
    ],[
        `Mapakay ka mamasa sa antimotitilities. Aden bon mga kaped a mapakay nengka kanen na dikena gamot a gapamasa sa botika. Mapakay ka keman sa luya o kalawag kagina nya ba na pakadtabang sa lebag abpeg aden antimicrobial property nin a pakadtabang sa pakagedam sa kapedtagudo. mapakay ka bon minom sa beteng kagina madakel i electrolytes nin. `
    ],7),
]
// incomplete... where are the rest? only 2 are medicines??
// are you sure??


let section12 = [
    encodeMemory([
        `* endaw * gamot * tagudo * `,
        `* ebpawang * tagudo * `,
        `endaw mapakay kagamutan penggamotan i kapedtagudo`,
        `pedtagudo ako, endaw ako ebpawang`,
        `endaw mangay i taw upama ka pedtagudo`,
        `aden kabpawangan endu kagamutan i kapedtagudo ko`,
        `endaw penggamutan i kapedtagudo`,
    ],[
        `Su kadtagudo na mapakay na apya sa walay nu bo penggamutan. Egkapya bon I nan mga pila gay. Ugayd na amayka di den a benel mapya I kangegedam nengka, limambas den sa dwa gay I kauget nin, pebpilugo I tay nin o pegkayaw pan sekanin, na nya mapya san na edtanggit ka den sa ospital I pasente nengka.`
    ],5),
    // encodeMemory([
    //     `*  acute * \bdiarrhea\b(?!_) * `,
    //     `ngen i pidtalo a acute diarrhea`,
    // ],[
    //     `Umayka su kadtagudo na sagay o dwa gay bo na aw na to namba I pedtalon nilan a mabagel a tagudo. Aw na to na aden nakan nengka o nainom nengka a aden kagaw nin a mana bacteria, vairus, o parasites. Umayka pendadalakaw na ka nidtagudo ka nan amba I pedtalon nilan a “travellers diarrhea”. Nya kagamot sa namba na kapaginom  sa mga kapamasa bon a gamot sa buti kya abpeg ka stidi den mon a kapagainom. Umayka edsalseg I namba sa dwa gay  na ilay ka base aden lugo na tay nin. Aw na to na basi aden mayaw nin. Upama ka mailay nengka i nya ba na edtanggit ka den sekanin sa doktor. `
    // ],1),
    // encodeMemory([
    //     `*  chronic * \bdiarrhea\b(?!_) *`,
    //     `ngen i pidtalo a chronic diarrhea`,
    // ],[
    //     `Katawan nengka amayka namba kadtagudo nengka na maugel maawa upama ka embabalingan I namba edsamikel uman padian. Aw na to na nya sabap I namba na sakit sa tyan. Kagamotan nengka I namba sa kapaginom sa ig endu gamot. Nya bon pinakamapya na edtanggit ka su pasete sa doctor ka silan I mataw panon I pakaira sa namba pembabalingan a nan a kadtagudo.`
    // ],1),
    // encodeMemory([
    //     `*  bidayan * acute \bdiarrhea\b(?!_) * chronic \bdiarrhea\b(?!_) * `,
    //     `* bidayan * chronic \bdiarrhea\b(?!_) * acute \bdiarrhea\b(?!_) * `,
    //     `ngin i bidayan na chronic \bdiarrhea\b(?!_) * acute \bdiarrhea\b(?!_) * `
    // ],[
    //     `Su kadtagudo na aw na to na mababel aw na to na pembabalingan. Umayka du kadtagudo na sagay o dwa gay mo na mabagel I sakit a nan. Ugayd na tu pembabalingan a kadtagudo a mana di den gaawa ka uman padian den na mauget I namba mawa a tagudo.  Basta edtagudo ka na nya mapya san na inom ka edsamikel sa ig endu kasambiyan su langon a ig a nadtapik na kinaudo nengka.`
    // ],1),
    // encodeMemory([
    //     `* gamot * acute * \bdiarrhea\b(?!_) * `,
    //     `panon i kapenggamot sa acute diarrhea`,
    // ],[
    //     `Nya una enggulan a taw upamaka ka mabagel I kadtagudo nin na kainom nin sa ig edsamikel. Nya mapya inomin nin na oral rehydration solution. Su kainom sa antimotilities na mapakay bon ka makagkapegkag sa mangigignawa I namba. `
    // ],1),
    // encodeMemory([
    //     `* gamot * chronic * \bdiarrhea\b(?!_) * `,
    //     `panon i kapenggamot sa chronic diarrhea`,
    // ],[
    //     `Nasisita su kainom edtangang sa ig ka endu kasambiyan su ig a pakaud nengka sya ebpon sa lawas nengka. Nya bon mapya na pangeni ka sa tabang sa mataw enggamot a doctor endu maton nilan I sabap na kapedtagudo a nan`
    // ],1),
]

let section13 = [
    // encodeMemory([
    //     `* problema * tagudo * `,
    //     `* makadtaday * tagudo * problema * `,
    //     `* problema * makadtaday * tagudo * `,
    //     `* tagudo * problema * makadtaday *`,
    //     `ngin i mga di mapya  mabproblema nu taw a pedtagudo`,
    //     `amayka padtadayn i kapedtagudo na ngin i manggula`,
    //     `aden mga taw a kalunsanan mangingat i sakit nin sa kapedtagudo`,
    //     `ngen i kapedtagudo`,
    //     `ngin i problema na tagudo`
    // ],[
    //     ` Su ta a pedtagudo na aw na to na makagedam sa kagkasakit na tyan, makailay sa lugo sa tayo nin, edtagetut, malmo malugat, pegkayaw, pegkegkel, masla ged kaudo nin, mana galangot o panguta pedtandang. Nya ba kadtagudo na pakaibped sa ig nu lawas ka paunot pakaudo. Umayka su taw na lenukan edsamikel, na tanda ba I nan na kulang sekanin sa ig endu mga electrolytes ( sodium, chroride, postassium endu bicarbonate) a papedtalagoy salawas nin. Amayka edsalseg na makapatay ba I nanba a sakit. Tu ba nan importati a painumen sa taw sa ig edsamikel. Su kadtagudo na sabapan bon na malabsorption. Nya ba na kanggula amayka di kasesep nu lawas su dalem na pegken sya sa tyan. Makangguna ba I nyaba sa kagkalubay nu lawas. Aw na to na namba kadtagudo a nan na kaped a sakit a kangegedam nu taw. `
    // ],1),
]

let section14 = [
    // encodeMemory([
    //     `* idsa * sintomas  * tagudo * `,
    //     `* sintomas  * tagudo *  idsa * `,
    //     `endaw mapakay midsa sa sintomas na kadtagudo`,
    //     `tayn i mapakay idsan sa sintomas na kapedtagudo`,
    //     `endaw ako mangay para makaidsa sa senyales na tagudo`,
    //     `ten gapakay a idsan ko sa kapedtagudo`,
    //     `aden kaidsan sa sintomas, senyales, o tanda na kapedtagudo`,
    //     `endaw midsa sa signs na tagudo`
    // ],[
    //     `Kapakay ako nengka edsan sa mga ngin i enggulan nu tao amayka pedsakit. Ugayd na nya bon mapya na edsa ka sa mataw enggamot.`
    // ],5),
    // encodeMemory([
    //     `* ebpawang * tagudo * `,
    //     `endaw mangay i taw a pedtagudo`,
    //     `endaw dayt a ebpawang i pedtagudo`,
    //     `gapakay penggamutan i kapedtagudo sa walay`,
    //     `aden kabpawangan a taw a pedtagudo`
    // ],[
    //     `Kagamutan nengka bon I kadtagudo apya san ka bo sa walay. Nya kan enggula na inom ka sa gamot a gapamasa bon sa botika endu pegkapya I kanggegedam nengka. Amayka maylay nengka a pebpilugo I kapagudo nengka, pegkayaw ka o di nan aka dwa gay den I kapedtagudo nengka na nya mapya na pailay ka sa doctor.`
    // ],5),
    encodeMemory([
        `* sintomas * \bdiarrhea\b(?!_) * `,
        `* (kataw) * tagudo * `,
        `panon i kataw na taw na sekanin a pedtagudo`,
        `ngin i mga sintomas na kapedtagudo`,
        `nganin i mga sintomas na tagudo`,
        `ngin i ilayn sintomas senyales sa taw a pedtagudo`,
        `ngin i pagilayn sintomas senyales sa pedtagudo`,
        `aden mga signs, symptoms, sintomas, senyales , padsa o tanda na kapedtagudo`,
        `labit ka o enggay ka sa listahan na sintomas o senyales ng pedtagudo`,
        `ngin i sintomas tanda signs na diarrhea`,
        `Panon I katuntay kataw sintomas tanda o signs na su taw na pedtagudo`,
    ],[
        `Madakel I sipat na kapedtagudo. Kadakelan sa  mga taw na nya nilan kanggedam na pedsakit I tyan nilan, pegkasla tyan nila, aden lugo na tay nilan, pedtagetut silan a paka tik pan, galugat ket, pegkayaw, pegkegkel, pakaudo den edtandang, masla I ka nga udo din, aw na to na pakauta pan.`
    ],1),
]

let section15 = []

let data = 
[].concat(section11)
    .concat(section12)
    .concat(section13)
    .concat(section14)
    .concat(section15)



export{
    data
}