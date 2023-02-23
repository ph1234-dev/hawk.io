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
        `* (bakit|paano|kailan) * mahina * immune system * diarrhea * `
    ],[
        `Kung parati kang nagtatae, umuutot o kinakabag, baka mahina ang iyong resistensya.`
    ]),
    encodeMemory([
        `* (bakit|paano|kailan) * tamis  * diarrhea *`
    ],[
        `May mga taong nahihirapang I digest ang sorbitol na makikita sa mga nabibiling pagkain`
    ]),
    encodeMemory([
        `* (bakit|paano|kailan) * allergy * pagkain  * diarrhea *`
    ],[
        `Ang mga hindi natunaw na disacchirides ay nakakahatak ng tubig at electrolytes sa katawan. Dahil dito, maaring hindi na aabsorb ng nutrients galling sa pagkain.`
    ]),
    encodeMemory([
        `* (bakit|paano|kailan) * malnutrition  * diarrhea *`
    ],[
        `Ang malabsorption ay pwedeng makapagbigay ng diarrhea at maaring magdulot ng kakulangan sa nutrisyon. Kapag Malala ito, maaring ang isang pangmataglang pagtatae ay hindi gagaling dahil sa mahinang resistensya sa katawan at mahinang mucosal recovery. Nakakapalala din ng matagalang pag tatae ang food intolerance and hindi magandang diet.`
    ]),
    encodeMemory([
        `* (bakit|paano|kailan) * gamot  * diarrhea *`
    ],[
        `Ang diarrhea ay maaring seryosong epekto ng mga gamot. Ito ay maaring paunang senyales ng pagkalason sa mga gamot.`
    ]),
    encodeMemory([
        `* (bakit|paano|kailan) * parasite * infection  * diarrhea *`
    ],[
        `Ang parasites ay maaaring dumikit as bituka ng tao at pwede maka sira sa kakayahan ng katawan na sumipsip ng fats at carbohydrates sa mga tinutunaw na pagkain.`
    ]),
    encodeMemory([
        `* (bakit|paano|kailan) * bacterial * infection  * diarrhea *`
    ],[
        `Ang bacterial gastroenteritis ay nangyayari kapag bakterya ang dulot ng impeksyon sa iyong bituka. Ang impeksyong dulot nito ay nakakadulot ng pamamaga sa tiyan at bituka.`
    ]),
    encodeMemory([
        `* (bakit|paano|kailan) * virus * infection  * diarrhea *`
    ],[
        `Ang viral gastroenteritis ay isang pamamaga sa lining ng bituka. Ito ay maaring sanhi ng mga virus tulad ng rotavirus, norovirus, adenovirus at iba pa. Ang mga sanggol ay pwedeng protektahan gamit ang bakuna. Ang kadalasang sintomas nito ay pagkahilo, pagsusuka at matubig na pagtatae.`
    ]),
    encodeMemory([
        `* (bakit|paano|kailan) * sakit * tiyan * diarrhea *`
    ],[
        `Ang pagtatae ay maaring sanhi ng abnormalidad o sakit sa maliit at malaking bituka. Ngunin ito rin ay maaring sanhi ng ibang sakit tulad ng IBS, Chrons disease, Ulcerative colitis, celiac disease, microscopic colitis at small intestinal bacterial overgrowth (SIBO).`
    ]),
    encodeMemory([
        `* (paano|saan) * kuha * diarrhea * `,
        `* kuha * diarrhea * (paano|saan) *`
    ],[
        `Maraming paraan para maka diarrhea o magtaetae. Heto ang madalas na dahilan. Kapag mahina ang iyong resistnensya at may problema ka sa bituka. Maaring maging epekto ng gamot na kinain mo.  Pero madalas talaga, ang sanhi ng pagtatae ay pagkain. Iyong ibang mga tao may mga food allergy o bawal kumain ng mga natatanging pagkain. Iyong iba naman hindi kayang tunawing ang pagkaing may gatas, sorbitol, pampatamis, at fructose na madalas nakikita sa mga pinoprosesong pagkain.`
    ]),
    encodeMemory([
        `* kuha * diarrhea * dahilan_ng_diarrhea * `
    ],[
        `Oo. May mga ulat na pwede kang magtaetae dahil jan. Kaya mag ingat ka. Kapag meron ka nito wag ka mag panic. Mawawala din ito ng kusa. May mga gamot kang pwede gamitin para maibsan ang dinadanas mo. Ngunit kapag nagdudugo ang iyong pagtatae, mas mabuting magpatingin ka sa doctor o ospital`
    ]),
    encodeMemory([
        `* kuha * diarrhea * diarrhea_unabsorbable_sugar_to_some * *`
    ],[
        ``
    ]),
    encodeMemory([
        `* ano * (trigger|dulot|resulta|bigay|dahilan) * diarrhea `
    ],[
        `Ayon sa mga ulat, pwede kang magtaetae dahil sa mga impeksyong dulot ng bacteria, virus, at parasites. Kapag mahina resistensya mo , mas Malaki ang tsansang magkaroon ka nito. Lalo na kapag ikaw ay may problema sa bituka. Ang pagtatae ay maari ding epekto ng gamot. Sa usaping pagkain, iyong may mga lactose, fructose at sorbitol naman ay pwedeng  din makapagpataetae kung hindi mo kaya ng katawan mo tunawin ito.`
    ]),
    encodeMemory([
        `* dahilan_ng_diarrhea * diarrhea * `
    ],[
        `Oo kaibigan. Pwedeng pwede yan makapagpa tae tae.`
    ]),
]

let section5 = [
    encodeMemory([
        `*(bakit|paano) * hydrate  * (tulong|gamot|buti|galing) * diarrhea * `
    ],[
        `Kailangan mong uminom ng uminom para hindi ka madehydrate. Kapag ikaw ay nag tatae, bumababa ang dami ng tubig sa iyong katawan. Kaya mabuting uminom ng mga fluids tulad ng tubig, buko juice, oral rehydration solutions, am arrozcaldo, sopas, sports drinks at sabaw. `
    ]),
    encodeMemory([
        `*(bakit|paano) * tubig  * (tulong|gamot|buti|galing) * diarrhea *`
    ],[
        `Kapag ikaw ay nagtatae, nauubosan ka ng tubig sa katawan. Uminom ka ng tubig para mapalitan ang nawawalang tubig sa iyong katawan.`
    ]),
    encodeMemory([
        `*(bakit|paano) * zinc  * (tulong|gamot|buti|galing)  * diarrhea *`
    ],[
        `Ang paggamit ng zinc ay nakakatulong sa batang nagtatae dahil ito ay importantent micronutrient para sa protein synthesis, cell growth and differentiation, immune function, at paggalaw ng ng tubig at electrolytes sa katawan. Ito rin ay mabisang paraan para bumilis ang paggaling and humina ang paglala ng pagtatae at mga ipeksyon.`
    ]),
    encodeMemory([
        `*(bakit|paano) * masustansya  * (tulong|gamot|buti|galing)  * diarrhea *`
    ],[
        `Kapag ika’y nag tatae, ang mga kinakain at ang pagkain mo ay napaka importante sa iyong paggaling. `
    ]),
    encodeMemory([
        `*(bakit|paano) * doctor * (tulong|gamot|buti|galing)  * diarrhea *`
    ],[
        `Magpatingin ka kaagad sa doctor kapag ikaw ay nakakaranas ng alin man sa mga sumusunod. Dalawang araw o mas matagal pang pagtatae. Pagtatae na may lagnat na umaabot ng 102 degrees ( kaumbas ng 38.8888 degrees celcius ) o mas mataas pa. Pagbabawas sa ng anim na beses o mas mahigit pa sa loob ng 24 oras. `
    ]),
    encodeMemory([
        `* bakit * inom * tubig * `
    ],[
        `Kailangan mong palitan ang tubig na nababawas sayo tuwing nagtatae para maiwasan ang dehydration.`
    ]),
    encodeMemory([
        `* bakit * hydrate * `
    ],[
        `Ang oral rehydration salts ay hindi nakakapigil ng pagtatae. Pero ito ay nakakatulong para mapalitan ang tubig at essential salts na Nawala sayo para maibsan ang dehydration. Dahil jan, pwede itong maktulong sa iyong pagtatae.`
    ]),
    encodeMemory([
        `* bakit * (gamit|kain|inom) * zinc * diarrhea * `
    ],[
        `Ang paggamit ng 20 milligram zinc kada araw para sa batang mahigit sa anim na buwan o kaya 10 milligram kada araw sa mga batang mas mababa sa 10-14 days ay pwedeng makatulong.`
    ]),
    encodeMemory([
        `* bakit * (kain|inom) * masustansya * pagkain * diarrhea * `
    ],[
        `Kapag nagtatae, ang pagkaing kinakain mo at ang mga ito ay importante para sa iyong paggaling.`
    ]),
    encodeMemory([
        `* paano * (tulong|gamot|buti|galing) * diarrhea * `
    ],[
        `May mga bagay ka naman na pwedeng gawin kapag ikaw ay nag tatae. Pwede kang gumamit ng oral rehydration solutions para mapalitan ang nabawas sayo na tubig. Pwede ding gumamit ng zinc supplements. Kumain ka din ng masustansyang pagkain. Pero , kung maari, magpataingin ka sa doctor kapag nagtatae kana ng mahigit 48 hours ( dalawang araw ) o kapag nagdudugo ito. `
    ]),
    encodeMemory([
        `* sino *  (tulong|gamot|buti|galing) *diarrhea * `
    ],[
        `Madalas,ang pagtatae ay gumagaling ng kusa. Pero kapag ito ay hindi, o kaya ay mahigit dalawang araw na o nagdudugo na ito, magpatingin kana sa doctor kaagad.`
    ]),
    encodeMemory([
        `* pwede * diarrhea * gamutin * `,
        `* pwede * gamutin * diarrhea * `
    ],[
        `Oo, pwede mo naman I manage ang iyong pagtatae.`
    ]),
    encodeMemory([
        `* kailan * consult * doktor * diarrhea * `
    ],[
        `Kapag ang iyong pagtatae ay mahigit na sa 48 oras, o kapag nagdudugo na tae mo, o nakakaramdam kana ng senyales ng dehydration, kailangan mo na talagang magpatingin sa doctor o ospital.`
    ]),
    encodeMemory([
        `*saan * gamutin * diarrhea * `,
        `* gamutin * diarrhea * saan * `,
    ],[
        `Kung hindi naman malala ang iyong pagtatae, pwede mo naman to gamutin sa bahay. Pero kapag ito ay mahigit na sa 48 oras, dumudugo ito, o nakakaramdam ka ng pagkadehydrate, dalhin mo na sya sa ospital. Una, pumunta ka muna sa barangay health center.`
    ]),
    encodeMemory([
        `* saan * bili * gamot_diarrhea * `,
        `* saan * gamot_diarrhea * bili * `,
        `* saan * bili * gamot * diarrhea  *`
    ],[
        `Pwede mo itong bilhin sa mga botika, sabihin mo lang sa kanila na kailangan mo ng gamot. Tandaan, kapag ang pasyente ay nagdudugo ng tae o nilalagnat, wag bumili ng antimotility drugs tulad ng loperamide at Imodium. Pwede kang bumili ng oral rehydration solutions para makatulong na pagpalit ng fluid o tubig na Nawala sa pasyente.`
    ]),
    encodeMemory([
        `* ano *  (tulong|gamot|buti|galing|gawin)   * dugo * (tae|diarrhea) *`,
        `* dugo * (tae|diarrhea) * ano * gawin *`
    ],[
        `Ang dumudugong pagtatae ay indikasyon ng impeksyon sa bituka. Wag na wag kang bumili ng gamot o antimotility tulad ng loperamide, Imodium, peptobismol. Panatilihing uminom parati. Pinapayuhan ka rin na magpatingin sa doctor kung maari. Sila ang mas nakakaalam kung ano gagawin mo kung nag dudugo ang iyong pagtatae.`
    ]),
    encodeMemory([
        `* ano * (tulong|gamot|buti|galing|gawin)   * lagnat * diarrhea * `,
        `* ano * (tulong|gamot|buti|galing|gawin)   * diarrhea * lagnat * `,
    ],[
        `Wag kang gumamit ng antimotility agents tulad ng loperamide at Imodium.  Sa halip, uminom ka ng fluids o tubig. Kung maari, ay kaagad magpatingin sa doctor.`
    ]),
    encodeMemory([
        `* diarrhea * (tulong|gamot|buti|galing|gawin)   * paano * `,
        `*  (tulong|gamot|buti|galing|gawin)   * diarrhea * paano * `,
        `* paano *  (tulong|gamot|buti|galing|gawin)   * diarrhea * `,
        `* ano *  (tulong|gamot|buti|galing|gawin)   * diarrhea * `,
        `* ano * diarrhea *  (tulong|gamot|buti|galing|gawin)   * `,
        `*  (tulong|gamot|buti|galing|gawin)   * diarrhea * paano * `,
        `* ano *  (tulong|gamot|buti|galing|gawin)   * diarrhea *`,
        `* diarrhea *  (tulong|gamot|buti|galing|gawin)   * ano * `,
        `*  (tulong|gamot|buti|galing|gawin)   * diarrhea * ano * `,
    ],[
        `Madalas, ang di malalang pagtatae ay gumagaling ng kusa. Pwede kang uminom ng antimotility agents tulad ng loperamide, Imodium at bismuth subsalicylate. Ngunit, huwag kang gumamit nito kung ikaw ay nilalagnat o nagdudugo ang iyong pagttae.  Kapag ikaw ay nagtatae, nauubos ang tubig sa iyong katawan. Kailangan mong uminom ng fluids tulad ng sabaw, sopas, sports drinks, coconut water, tubig o oral rehydration solutions. Pwede ka ding uminom ng zinc. Kumain ka din ng mga masusustansyang pagkain. Kapag ang iyong pagtatae ay tumagal ng dalawang araw ay pinapapayuhan kang mag patingin kaagad sa doctor.`
    ]),
]

  
let data = 
[].concat(section4)
  .concat(section5)



export{
    data
}