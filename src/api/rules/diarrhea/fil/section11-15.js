import { encodeMemory } from "@/api/engine/model"

let section11 = [
    encodeMemory([
        `* (bakit|paano) * antimotility * (tulong|gamot|buti|galing) *`
    ],[
        `Ang Loperamide ay ang pinaka-epektibong mga ahente para sa paggamot ng talamak na pagtatae. Pinapabagal nito ang paggalaw ng pagkain sa pamamagitan ng iyong bituka, na nagpapahintulot sa iyong katawan na sumipsip ng mas maraming likido. Ang isang antidiarrheal na gamot, tulad ng Lomotil o Imodium, ay maaaring bawasan ang bilang ng mga dumi ng pagtatae ngunit maaari ring maging sanhi ng mga komplikasyon para sa mga taong may malubhang impeksyon.`
    ],7),
    encodeMemory([
        `* (bakit|paano) * bismuth subsalicylate * (tulong|gamot|buti|galing) *`
    ],[
        `Gumagana ito sa pamamagitan ng pagpapababa ng daloy ng mga likido at electrolyte sa bituka.`
    ],7),
    encodeMemory([
        `* (bakit|paano) * electrolyte * (tulong|gamot|buti|galing) *`,
    ],[
        `Binabalanse nito kung paano gumagalaw ang likido sa iyong digestive tract. Binabawasan nito ang paglabas ng dumi ng pagtatae sa mga matatanda at bata`
    ],7),
    encodeMemory([
        `* (bakit|paano) * petroleum jelly * (tulong|gamot|buti|galing) *`,
    ],[
        `Kung ang iyong rectal area ay nagiging masakit, nangangati, ito ay maaring makatulong.`
    ],7),
    encodeMemory([
        `* (bakit|paano) * rehydration solution * (tulong|gamot|buti|galing) *`,
    ],[
        `Hindi nito ginagamot ang pagtatae, ngunit nakakatulong itong palitan ang mga likido upang maiwasan ang pag-aalis ng tubig sa katawan or dehydration.`
    ],7),
    encodeMemory([
        `* (bakit|paano) * probiotics * (tulong|gamot|buti|galing) *`,
    ],[
        `minsan ang pagtatae ay resulta ng kawalan ng balanse ng bacteria sa bituka. Ang pag-inom ng mga probiotic ay nakakatulong sa pamamagitan ng pagpapanumbalik ng balanseng ito sa pamamagitan ng pagbibigay ng mas mataas na antas ng mabubuting bakterya.`
    ],7),
    encodeMemory([
        `* (bakit|paano) * zinc * (tulong|gamot|buti|galing) *`,
    ],[
        `Ang paggamit ng zinc ay nakakatulong sa mga bata na may pagtatae dahil ito ay isang mahalagang micronutrient na mahalaga para sa synthesis ng protina, paglaki at pagkakaiba ng cell, immune function, at bituka na transportasyon ng tubig at electrolytes`
    ],7),
    encodeMemory([
        `* ano * generic * (gamot|drug) * diarrhea * `,
    ],[
        `Pwede ang loperamide at bismuth subsalicylate bilang antimotility. May hydrite na mabibili mo sa lokal na parmasya`
    ],7),
    encodeMemory([
        `* ano * branded * (gamot|drug) * diarrhea *`,
        ` * ano * branded * antidiarrheal * drugs *`,
    ],[
        `Ang Imodium at Pepto Bismol ay ilan sa mga branded na pangalan ng antidiarrhea na gamot`
    ],7),
    encodeMemory([
        `* paano * gumana * `,
    ],[
        ``
    ],7),
    // antimotility
    encodeMemory([
        `* ano * generic * antimotility * `,
    ],[
        `Ang Loperamide ay isang generic na pangalan ng isang antidiarrheal na gamot na makikita mo sa mga parmasya`
    ],7),
    encodeMemory([
        `* ano * branded * antimotility *`,
    ],[
        `Mayroong tayong Imodium na isang branded na pangalan ng loperamide`
    ],7),
    encodeMemory([
        `* ano * dose * (!loperamide|imodium) *`,
        `* paano * (kainin|gamittin|inumin) * (!loperamide|imodium) *`,
        `* ano * hakbang * (!loperamide|imodium) *`,
        `* paano * (!loperamide|imodium) * (gamitin|kainin|inumin) *`,
    ],[
        `Uminom ng maraming malinaw na likido habang ginagamot mo ang iyong pagtatae gamit ang loperamide. Ang pagkakaroon ng pagtatae ay maaaring magpa-dehydrate sa iyo. Narito ang iba't ibang dosing na maaari mong sundin. Para sa mga nasa hustong gulang at mga bata sa edad na 12 at mas matanda, ang inirerekomendang dosis ay 2 tablet sa pamamagitan ng bibig pagkatapos ng unang maluwag na dumi. Pagkatapos, uminom ng 1 tablet pagkatapos ng bawat maluwag na dumi. Huwag uminom ng higit sa 4 na tablet sa loob ng 24 na oras. Para sa mga batang edad 9 hanggang 11 taon o mga bata na tumitimbang ng 60 lbs hanggang 95 lbs, ang inirerekomendang dosis ay 1 tablet sa bibig pagkatapos ng unang maluwag na dumi. Pagkatapos, uminom ng kalahati ng isang tableta pagkatapos ng bawat maluwag na dumi. Huwag uminom ng higit sa 3 buong tablet sa loob ng 24 na oras. Para sa mga batang edad 6 hanggang 8 taong gulang o mga bata na tumitimbang ng 48 lbs hanggang 59 lbs, ang inirerekomendang dosis ay 1 tablet sa bibig pagkatapos ng unang maluwag na dumi. Pagkatapos, uminom ng kalahati ng isang tableta pagkatapos ng bawat maluwag na dumi. Huwag uminom ng higit sa 2 buong tablet sa loob ng 24 na oras. Para sa mga batang 5 taon at mas bata: Tanungin ang doktor ng iyong anak upang makita kung ano ang iba pang mga opsyon na magagamit upang gamutin ang pagtatae ng iyong anak.`
    ],7),
    encodeMemory([
        `* ano * (!loperamide|imodium) *`,
    ],[
        `Loperamide (Imodium A-D) is an over-the-counter (OTC) medication  that works well to stop diarrhea, including traveler's diarrhea. It's usually taken once you start having loose stools and after each loose stool thereafter.`
    ],7),
    encodeMemory([
        `* (saan|ano) * gamit *  (!loperamide|imodium) *`,
    ],[
        `Kinokontrol nito ang mga sintomas ng pagtatae`
    ],7),
    encodeMemory([
        `* paano * gana *  (!loperamide|imodium) * `,
        `* paano * (!loperamide|imodium) * gana * `
    ],[
        `Loperamide (Imodium A-D) takes about an hour to help with your diarrhea symptoms, but this can vary from  person to person. Contact your provider if your  symptoms become worse after taking the medication`
    ],7),
    encodeMemory([
        `* kailan * ( (huwag|hindi) * (kain|inom|gamit) | iwas)  * (!loperamide|imodium) *`,
    ],[
        `Hindi ka dapat uminom ng loperamide (Imodium A-D) kung nagkaroon ka na ng allergic reaction sa gamot o kung mayroon kang magudong dumi o itim na dumi. Maaaring gusto mong makipag-ugnayan sa iyong provider bago gumamit ng loperamide (Imodium A-D) kung mayroon kang lagnat o mucus sa iyong dumi.`
    ],7),
    encodeMemory([
        `* (side|masama) * (effect|epekto) * (!loperamide|imodium)  * `,
        `* hindi * maganda * epekto * (!loperamide|imodium)  *`,
    ],[
        `Ang Loperamide (Imodium A-D) ay maaaring magdulot ng pagkahilo, pag-aantok, o pagkapagod. Huwag magmaneho o gumawa ng anumang bagay na kailangan mong tumuon hanggang sa malaman mo kung paano nakakaapekto sa iyo ang gamot. Kung sakaling makaranas ka ng pamamaga ng tiyan, makipag-ugnayan kaagad sa doktor`
    ],7),
    encodeMemory([
        `* tips * (!loperamide|imodium) *`,
    ],[
        `Huwag gumamit ng loperamide (Imodium A-D) kung mayroong dugo sa iyong dumi o itim na dumi. Kung mayroon kang kasaysayan ng sakit sa atay o mga problema sa ritmo ng puso, maaaring hindi rin ito ang pinakamahusay na gamot para sa iyo`
    ],7),
    encodeMemory([
        `* (price|presyo|gaano kamahal|kano) * (!loperamide|imodium)  *`,
        `* (!loperamide|imodium) * (price|presyo|gaano kamahal|kano) * `,
    ],[
        `Available ang Loperamide bilang isang generic na gamot at maaaring mas mura kumpara sa bersyon ng brand. Sa watsons, ito ay ibinebenta sa halagang 2mg (4pcs) sa halagang 72 pesos. Maaaring mas mababa ito sa ibang mga parmasya.`
    ],7),
    encodeMemory([
        `* uri *  (!loperamide|imodium) *`,
    ],[
        `Maaari itong maging kapsula, solusyon, tableta, at suspensyon`
    ],7),
    encodeMemory([
        `* alternatibo *  (!loperamide|imodium) *`,
    ],[
        `Mayroong Lomotil (diphenoxylate / atropine), ngunit kailangan mong kumuha ng reseta para doon. Hindi mo basta-basta mabibili ito tulad ng loperamide kapag pumunta ka sa botika`
    ],7),
    // bismuth subsalicylate
    encodeMemory([
        `* ano * generic * !bismuth !subsalicylate *`,
    ],[
        `Iyon ay isang generic na pangalan aking kaibigan`
    ],7),
    encodeMemory([
        `* ano * branded * !bismuth !subsalicylate * `,
    ],[
        `Ang ilan sa mga kilala ay ang Pink Bismuth, Pepto-Bismol, at Bismatrol`
    ],7),
    encodeMemory([
        `* ano * dose * !bismuth !subsalicylate *`,
        `* paano * (kainin|gamittin|inumin) * !bismuth !subsalicylate *`,
        `* ano * hakbang * !bismuth !subsalicylate *`,
        `* paano * !bismuth !subsalicylate * (gamitin|kainin|inumin) *`,
    ],[
        `Ang karaniwang dosing ng Bismuth Subsalicylate ay ang mga sumusunod. May pagkakaiba sa pagitan ng tablet at likidong anyo. Para sa tablet, kung ang tao ay may edad na 12 at mas matanda, ang karaniwang dosis ay 2 tablets (524 mg) sa pamamagitan ng bibig tuwing 30 hanggang 60 minuto kung kinakailangan hanggang sa 2 araw. Huwag uminom ng higit sa 16 na tableta (4,192 mg) sa isang araw. Kung mayroon kang likidong anyo, kung ang tao ay may edad na 12 at mas matanda , ang karaniwang dosis ay 30 mL (525 mg) sa pamamagitan ng bibig bawat 30 minuto kung kinakailangan hanggang sa 2 araw. Kung umiinom ka ng bismuth subsalicylate (Pepto-Bismol) upang gamutin ang pagtatae, maaari kang uminom ng 60 mL (1,050 mg) sa pamamagitan ng bibig tuwing 60 minuto sa halip. Huwag uminom ng higit sa 240 mL (4,200 mg) sa isang araw`
    ],7),
    encodeMemory([
        `* ano * !bismuth !subsalicylate  *`,
    ],[
        `Ang Bismuth subsalicylate (Pepto-Bismol) ay isang over-the-counter na gamot na ginagamit upang gamutin ang sira ng tiyan at pagtatae. Gumagana ito nang maayos upang ihinto ang pagtatae, ngunit maaaring kailanganin mong inumin ito nang maraming beses sa isang araw. Ang bismuth subsalicylate (Pepto-Bismol) ay karaniwang pinahihintulutan o okay naman, ngunit maaari itong magdulot ng hindi nakakapinsalang pagdidilim ng iyong dila o dumi.`
    ],7),
    encodeMemory([
        `* (saan|ano) * gamit * !bismuth !subsalicylate *`,
    ],[
        `Ang bismuth subsalicylate ay isang over-the-counter na gamot na ginagamit para sa paggamot ng pagtatae, kabag, sakit sa tiyan, hindi pagkatunaw ng pagkain, heartburn, pagduduwal at bilang isang prophylaxis para sa pagtatae ng manlalakbay`
    ],7),
    encodeMemory([
        `* paano * gana *  !bismuth !subsalicylate * `,
        `* paano * !bismuth !subsalicylate * gana * `
    ],[
        `Karamihan sa mga pasyente ay dapat makakita ng positibong therapeutic response sa loob ng apat na oras pagkatapos ng paglunok. Hindi ka dapat gumamit ng bismuth subsalicylate (Pepto-Bismol) nang higit sa 2 araw. Kung mayroon ka pa ring pagtatae o mga problema sa tiyan pagkatapos ng 2 araw na pag-inom nito, makipag-usap sa iyong provider.`
    ],7),
    encodeMemory([
        `* kailan * ( (huwag|hindi) * (kain|inom|gamit) | iwas)  )  * !bismuth !subsalicylate *`,
    ],[
        `Hindi mo ito dapat ibigay kung mayroon kang mga problema sa pagdurugo, ulser sa tiyan, dugo sa iyong dumi, o kung ikaw ay alerdyi sa aspirin o iba pang salicylates. Huwag ibigay ang gamot na ito sa isang bata o teenager na may lagnat, sintomas ng trangkaso, o bulutong-tubig`
    ],7),
    encodeMemory([
        `* (side|masama) * (effect|epekto) * !bismuth !subsalicylate * `,
        `* hindi * maganda * epekto * * !bismuth !subsalicylate *`
    ],[
        `Maaari kang makaranas ng pansamantalang pagdidilim ng dumi o dila. Kung makaranas ng matinding reaksiyong alerhiya tulad ng kahirapan sa paghinga, pantal sa balat, at pamamaga, at Rye's syndrome na nagpapakita ng pagtatae, pagsusuka, hindi pangkaraniwang mababang enerhiya, pagkawala ng malay, seizure, pagbabago sa pag-uugali, pagkalito, panghihina ng kalamnan, pagbabago sa paningin o pandinig, makipag-ugnayan kaagad sa iyong doktor`
    ],7),
    encodeMemory([
        `* tips * !bismuth !subsalicylate *`,
    ],[
        `Uminom ng maraming malinaw na likido habang umiinom ka ng bismuth subsalicylate (Pepto-Bismol). Ang pagtatae ay maaaring magdulot ng dehydration at ang pag-inom ng sapat na likido ay makakatulong na maiwasan ito. Lunukin ang mga kapsula nang buo sa tubig. Huwag nguyain ang mga ito. Lunukin ang mga kapsula nang buo sa tubig. Huwag nguyain ang mga ito.`
    ],7),
    encodeMemory([
        `* (price|presyo|gaano kamahal|kano) * bismuth !subsalicylate * `,
        `* bismuth !subsalicylate * * (price|presyo|gaano kamahal|kano) *`
    ],[
        `Madalas itong ibinebenta bilang pack. Base sa mga listing sa iprice ph, mga 500 pesos. Maaaring mas mura ito para sa mga indibidwal na tablet`
    ],7),
    encodeMemory([
        `* uri * !bismuth !subsalicylate *`,
    ],[
        ``
    ],7),
    encodeMemory([
        `* alternatibo * !bismuth !subsalicylate *`,
    ],[
        `Ang Loperamide (Imodium A-D) ay maaaring isang alternatibo`
    ],7),
]
// incomplete... where are the rest? only 2 are medicines??
// are you sure??


let section12 = [
    encodeMemory([
        `* saan * gamutin * diarrhea * `,
        `* saan * punta * diarrhea * `,
    ],[
        `Sa karamihan ng mga kaso, ang pagtatae ay maaaring gamutin sa bahay at malulutas nito ang sarili sa loob ng ilang araw. Kung talagang nakakaramdam ka ng matinding discomfort, tumagal ito ng higit sa 2 araw, nakakakita ng dugo sa iyong dumi, o nilalagnat, pinakamainam para sa iyo na pumunta sa malapit na healthcare center`
    ],5),
    encodeMemory([
        `* (ano|kailan|paano) * acute * diarrhea *  `,
    ],[
        `Kapag ang pagtatae ay tumagal ng 1 o 2 araw pagkatapos posibleng mayron ka ng matinding pagtatae. Maaaring sanhi ito ng pagkain o tubig na nahawahan -ng bacteria, virus, o parasito. Kapag naglalakbay ka, may pagkakataong makuha mo ang tinatawag nilang “travelers diarrhea”. Magagamot mo ang iyong pagtatae sa pamamagitan ng pag-inom ng mga gamot at sa pamamagitan ng rehydration. Kung nagpapatuloy ang kondisyon nang higit sa 2 araw, tingnan ang dugo sa iyong dumi o may lagnat, maaaring gusto mong pumunta sa malapit na healthcare center para sa mas mabuting tulong.`
    ],1),
    encodeMemory([
        `* (ano|kailan|paano) * chronic * diarrhea * `,
    ],[
        `Malalaman mo kung mayroon kang pangmatagalang pagtatae kapag tumagal ito ng ilang linggo. Ito ay maaaring sanhi ng isa pang problema sa kalusugan tulad ng irritable bowel syndrome. Maaari rin itong sanhi ng sakit sa bituka. Mapapamahalaan mo ang iyong pagtatae sa pamamagitan ng pag-inom ng mga gamot at sa pamamagitan ng rehydration. Gayunpaman, maaaring gusto mong pumunta sa malapit na sentro ng pangangalagang pangkalusugan upang mahanap nila kung ano ang sanhi nito at upang magbigay ng mas naaangkop na tulong.`
    ],1),
    encodeMemory([
        `* ( ano|paano) * iba * acute diarrhea * chronic diarrhea * `,
        `* ( ano|paano) * iba * chronic diarrhea * acute diarrhea * `,
    ],[
        `Ang pagtatae ay maaaring matindi o pangmatagalan. Ang matinding pagtatae ay kilala na tumatagal ng 1 hanggang 2 araw. Ang pagmatagalang pagtatae, sa kabilang banda, ay tumatagal ng ilang linggo. Ang parehong uri ng pagtatae ay maaaring maging sanhi ng pag-aalis ng tubig kaya panatilihing mag-hydrate upang maiwasan ito.`
    ],1),
    encodeMemory([
        `* pano * gamutin * acute * diarrhea * `,
    ],[
        `Ang unang hakbang sa paggamot sa matinding pagtatae ay rehydration, mas mabuting uminom ng ng oral rehydration. Ang pag-inom ng loperamide ay maaaring magbigay ng mas mabilis at mas kumpletong kaginhawaan sa matinding pagtatae at kakulangan sa ginhawa na nauugnay sa pangungutot kaysa sa alinmang gamot lamang.`
    ],1),
    encodeMemory([
        `* paano * gamutin * chronic * diarrhea * `,
    ],[
        `Kailangan mong patuloy na mag-hydrate upang mapunan ang mga likidong iyong inilabas. Gayunpaman, inirerekomenda para sa iyo na humingi ng medikal na tulong mula sa doktor upang mahanap nila ang sanhi nito at magamot ka para sa anumang mga komplikasyon.`
    ],1),
]

let section13 = [
    encodeMemory([
        `* ano * problema * diarrhea * `,
        `* problema * diarrhea * ano * `,
        `* ano * diarrhea * problema * `,
    ],[
        `Ang pagtatae ay maaaring magdulot ng banayad, katamtaman o matinding pag-aalis ng tubig dahil sa pagpapalabas ng labis na likido. Kapag ang isa ay dehydration, ang kanilang katawan ay kulang ng sapat na likido at mga electrolyte (sodium, chloride, potassium, at bicarbonate) upang gumana nang maayos. Sa pinakamasama, maaari itong maging banta sa buhay. Mahalagang uminom parati upang mapunan ang mga likidong ito. Ang pagtatae ay maaari ding magresulta sa malabsorption. Kung ang mga tao ay hindi sumipsip ng sapat na sustansya mula sa pagkain na kanilang kinakain, maaari silang maging malnourished. Mayroong maraming iba pang mga problema na nauugnay sa pagtatae. Ito ay ilan lamang sa mga kapansin-pansin.`
    ],1),
]

let section14 = [
    encodeMemory([
        `* (sino|saan) * tanong * senyales * diarrhea *`,
        `* senyales * diarrhea * (sino|saan) * tanong *`
    ],[
        `Maaari mo akong tanungin ng mga pangunahing kaalaman. Ngunit lubos kong inirerekumenda na magtanong ka sa malapit na propesyonal sa pangangalagang pangkalusugan`
    ],5),
    encodeMemory([
        `* saan * (punta|gamutin) * senyales * diarrhea * `,
    ],[
        `Maaari mo naming gamutin ang iyong pagtatae sa iyong tahanan. Baka gusto mong uminom ng ilang gamot na nasa counter para maibsan ang iyong nararamdaman. Kung makakita ka ng dugo sa iyong dumi, may lagnat, o tumagal ng 2 araw, mas mabuting magpatingin kaagad sa doktor para sa karagdagang tulong`
    ],5),
    encodeMemory([
        `* Ano * senyales * diarrhea * `,
        `* ano * senyales * dehydration * `,
        `* pano * masabi * diarrhea * `,
    ],[
        `Maraming sintomas ng pagtatae. Kadalasan kapag mayroon ka nito mararamdaman mo ang alinman sa mga sumusunod: pananakit ng tiyan , bloating, dugo sa dumi, sumasabog at masakit na kabag o utot, pagkapagod, lagnat, panginginig, madalas na pagnanais na magbawas, malaking dami ng uhog ng dumi, pagduduwal, at patuloy na pagsusuka.`
    ],1),
    encodeMemory([
        `* paano * gamutin * diarrhea `,
    ],[
        `Maaari kang uminom ng ilan sa mga gamot na nasa counter, ngunit kailangan mong bantayan kung ano ang iyong iniinom lalo na kung mayroon kang dugo sa dumi. Ang mga gamot na nasa counter ay hindi inirerekomenda kung nararanasan mo ito`
    ],1),
    encodeMemory([
        `* sintomas_ng_diarrhea * senyales * diarrhea * `,
        `* sintomas_ng_diarrhea * diarrhea * senyales * `,
    ],[
        `Oo, ito ay isang sintomas`
    ],1),
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