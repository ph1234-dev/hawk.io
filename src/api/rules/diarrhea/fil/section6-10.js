import { encodeMemory } from "@/api/engine/model"



let section6 = [
    encodeMemory([
      `* bakit * balatan * prutas * `
    ],[
      `Kailangan mo gawin yan kasi ito ay maaring nahaluan ng chemical o baka naman nadapuan ng infectious agents tulad ng bakterya , virus at parasites.`
    ],5),
    encodeMemory([
      `* bakit * iwasan *hilaw * karne * `,
      `* bakit * huwag  * kain * hilaw * karne *`,
      `* bakit * huwag  * kain * hindi * luto * karne *`,
    ],[
      `Ugaliing lutuing Mabuti ang karne para mamatay ang mga infectious agents tulad ng bakterya, virus at parasites na dumapo sa karne.`
    ],5),
    encodeMemory([
      `* bakit * huwag * kain * hindi * nabalatan * prutas * `,
    ],[
      `Kailangan mo gawin yan kasi ito ay maaring nahaluan ng chemical o baka naman nadapuan ng infectious agents tulad ng bakterya , virus at parasites`,
    ],5),
    encodeMemory([
      `* sino * consult * diarrhea * `,
      `* saan * consult * diarrhea * `,
    ],[
      `Pwede kitang bigyan ng payo o palala tulad ng anong gamot pwede mo gamitin o ano gagawin mo kung may sinomas ka. Pwede ka din pumunta sa malapit na barangay health center, mag tanong sa mga doctor, nurses at kahit sa botika.`
    ],5),
    encodeMemory([
      `* saan * kain * diarrhea * `
    ],[
      `Para sa iyong kaligtasan, mainam na kumain lamang sa mga tindahan, buffet, at street vendors na malinis ang paghahanda sa mga pagkain nila. `
    ],5),
    encodeMemory([
      `* saan * bili * gamot * diarrhea *`
    ],[
      `Pwede ka makabili nyan sa mga botika.`
    ],5),
    encodeMemory([
      `* (paano|ano) * iwas * diarrhea * `,
      `* (paano|ano ) * pangiwas * diarrhea * `,
    ],[
      `Maraming bagay ang maaari mong gawin. Marahil ang pinaka-halata ay ang kumain ng mga pagkaing inihanda nang maayos. Uminom din ng tubig mula sa malinis na pinagkukunan. Palaging hugasan ang iyong mga kamay gamit ang sabon at tubig, kung wala kang sabon subukang gumamit ng mga hand sanitizer. Maaari mo ring ihinto ang pagpapahiram ng iyong mga tuwalya, kubyertos at mga kagamitan. Minsan, nakakatulong din ang pagkuha ng mga bakuna.`
    ],1),
    encodeMemory([
      `* pwede * diarrhea * iwasan *`,
      `* pwede * diarrhea * hindi * kuha *`,
    ],[
      `Oo maiiwasan mo ito. Masasabi ko sa iyo kung ano ang mga ito. kailangan mo lang itanong`
    ],1),

]
  
  
let section7 = [
    encodeMemory([
      `* bakit * (inom|kain|bili) * pagkaing_pwede_diarrhea * diarrhea * `,
      `* pagkaing_pwede_diarrhea * (inom|kain|bili) * diarrhea * `,
      `* pagkaing_pwede_diarrhea *  (tulong|gamot|buti|galing|gawin)   * diarrhea * `,
      `* pagkaing_pwede_diarrhea * (inom|kain|bili) * diarrhea * `,
    ],[
      `Ang mga pagkaing ito ay maaaring makatulong sa iyo na mag-hydrate. Kung mayroon kang pagtatae, makakatulong ito na patatagin ang iyong dumi.`
    ],1),
    encodeMemory([
      `* (pwede|ganda|tulong|buti|galing)*  pagkain * diarrhea * `,
      `* pagkain * (pwede|ganda|tulong|buti|galing)*  diarrhea *`,
      `* diarrhea * pagkain * (pwede|ganda|tulong|buti|galing)*  `,
      `* pagkain * (pwede|ganda|tulong|buti|galing) * diarrhea * `,
      `* ano * pagkain  * (pwede|ganda|tulong|buti|galing)  * diarrhea *`,
    ],[
      `Marami sila. Maaari kang kumain ng arrozcaldo, saging, sabaw, manok, chicken soup, congee, electrolyte drink, oatmeal, peanut butter , patatas, kanin, sopas, sports drink, toast, tubig, yogurt, rice soup (am) , at buko juice. Kung gusto mo masasabi ko rin sa iyo kung ano ang dapat mong iwasan kapag nagtatae`
    ],2),
]
  
  
let section8 = [
    encodeMemory([
      `* bakit * diarrhea_pagkain_masama_hydration * (iwasan| (hindi|huwag) * (bili|inom|kain) )  * diarrhea * `,
      `* bakit * (iwasan| (hindi|huwag) * (bili|inom|kain) )   * diarrhea_pagkain_masama_hydration * diarrhea * `,
    ],[
      `Kailangan mong layuan ang mga iyan. Ang mga ito ay karaniwang hindi mabuti para sa hydration`
    ],4),
    encodeMemory([
      `* bakit * diarrhea_pagkain_may_gas * (iwasan| (hindi|huwag) (bili|inom|kain) )  * diarrhea *`,
      `* bakit * (iwasan| (hindi|huwag) * (bili|inom|kain) )   * diarrhea_pagkain_may_gas * diarrhea *`,
    ],[
      `Ang ilan sa mga ito ay maaari ring magdulot ng pangungutot. Marahil ay hindi mo gusto iyon kapag nagtatae. Lalala ito`
    ],4),
    encodeMemory([
      `* bakit * diarrhea_pagkain_may_lactose * (iwasan| (hindi|huwag) * (bili|inom|kain) )  * diarrhea *`,
      `* bakit * (iwasan| (hindi|huwag) * (bili|inom|kain) )   * diarrhea_pagkain_may_lactose * diarrhea *`,
    ],[
      `Kung ikaw ay lactose intolerant, hindi ito mabuti para sa iyo. Ang ibig kong sabihin ay kung pupunta ka sa banyo pagkatapos uminom ng isang bagay na naglalaman ng gatas, kailangan mong iwasan ito`
    ],4),
    encodeMemory([
      `* bakit * diarrhea_pagkain_may_fructose * (iwasan| (hindi|huwag) * (bili|inom|kain) )  * diarrhea *`,
      `* bakit * (iwasan| (hindi|huwag) * (bili|inom|kain) )   * diarrhea_pagkain_may_fructose * diarrhea *`,
    ],[
      `May mga ulat na ang ilang mga tao ay nakaranas ng paglala ng kanilang pagtatae dahil sa mataas na dami ng fructose. Malamang na kailangan mong mag-ingat sa mga ito pansamantala`
    ],4),
    encodeMemory([
      `* bakit * diarrhea_pagkain_nakakairita_tiyan * (iwasan| (hindi|huwag) * (bili|inom|kain) )  * diarrhea *`,
      `* bakit * (iwasan| (hindi|huwag) * (bili|inom|kain) )   * diarrhea_pagkain_nakakairita_tiyan * diarrhea *`,
    ],[
      `Ang pagkaing ito ay maaaring makairita sa iyong tiyan at magpapalala ng iyong pagtatae`
    ],4),
    encodeMemory([
      `* bakit * diarrhea_pagkain_oily * (iwasan| (hindi|huwag) * (bili|inom|kain) )  * diarrhea *`,
      `* bakit * (iwasan| (hindi|huwag) * (bili|inom|kain) )   * diarrhea_pagkain_oily * diarrhea *`,
    ],[
      `Ang mga mamantika na pagkain ay naglalaman ng mataas na dami ng taba, pinapabagal nila ang pag-alis ng laman ng tiyan. Ayaw mo niyan kung natatae ka.`
    ],4),
    encodeMemory([
      `* bakit * (hilaw|hindi * luto ) * (iwasan| (hindi|huwag) * (inom|kain) )* diarrhea * `,
      `* bakit *  (iwasan| (hindi|huwag) * (inom|kain) )* diarrhea * `,
    ],[
      `Ang mga pagkaing ito ay maaaring maglaman ng mga lason at maaaring humantong sa pagkalason sa pagkain. Hindi mo ito gusto kapag ikaw ay nasiraan ng tiyan.`
    ],4),
    encodeMemory([
      `* anong * pagkain *  (iwasan| (hindi|huwag) * (inom|kain) ) * diarrhea *`,
      `* pagkaing *  (iwasan| (hindi|huwag) * (inom|kain) ) * diarrhea *`,
      `* diarrhea * (iwasan| (hindi|huwag) * (inom|kain) ) * pagkain *`,
    ],[
      `Nako marami rami din yan. Alchohol, beans, berries, brocoli, repolyo, cauliflower, keso, chickpeas, kape, mais, petsa, katas ng prutas, ubas, berdeng madahong gulay, gum, honey ice cream, gatas, mani, mamantika na pagkain, maanghang na pagkain, paminta, hilaw karne , salad, shellfish, soft drink, at tsaa ang ilan sa kailangan mong iwasan`
    ],4),
    encodeMemory([
      `* (bili|kain|inom) * 
      (diarrhea_pagkain_masama_hydration| diarrhea_pagkain_may_lactose| diarrhea_pagkain_may_fructose| diarrhea_pagkain_nakakairita_tiyan| diarrhea_pagkain_oily) * diarrhea * 
      `
    ],[
      `Wag mong ibigay o gamitin yan kapag may diarrhea. May mga mas mabuting pagpipilian. Pwede kong pangalanan ang iba.`
    ],4),
]
  
let section9 = [
    
]
  
let section10 = [
    encodeMemory([
      `* sino * problema * diarrhea * `,
      `* diarrhea * sino * problema * `,
      `* diarrhea * problema * sino * `,
      `* problema * sino * diarrhea * `,
      `* problema * diarrhea * sino * `,
    ],[
      `Mga batang wala pang 3 taong gulang, mas matatandang pasyente, mga taong mahina ang immune system, malnourished na mga bata, may pagtatae ng higit sa 24 na oras, mga pasyente na may 39 degree celcius, mga pasyente na may dumi at nana, mga pasyente na may mga gamot sa altapresyon, at mga manlalakbay na may mga kasalukuyang kondisyon sa kalusugan ay ang mga taong may panganib na magkaroon ng mga komplikasyon`
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