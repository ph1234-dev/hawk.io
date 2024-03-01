export let transFormedFilipinoRules = [
    {
        "pattern": [
            "* tamis * \bdiarrhea\b(?!_) *",
            "bakit pwede kang magka-diarrhea o magtatae kung mahilig ka sa matatamis",
            "Bakit dapat iwasan hindi maganda ang sobrang pagkain ng matatamis para maiwasan ang diarrhea",
            "Bakit nakakapagdulot ng diarrhea ang sobrang pagkain ng matatamis",
            "Paano nakakaapekto ang pagiging mahilig sa matatamis sa pagkakaroon ng diarrhea",
            "bakit ang pagkain ng matamis ay nakakadiarrhea"
        ],
        "response": [
            "Ang mga matamis ay maaaring mag-trigger ng pagtatae dahil sa kanilang kakayahang lumikha ng isang osmotic na epekto sa mga bituka, kumukuha ng tubig mula sa katawan patungo sa digestive tract, at dahil din sa kanilang kakayahang pasiglahin ang paggawa ng mga digestive enzymes at dagdagan ang paggalaw ng bituka, na humahantong sa hindi kumpletong pagsipsip ng sustansya at tubig.\n        \n        Gayundin, kung minsan ang mga matatamis ay hindi masyadong nasisipsip ng katawan at maaaring mag-ferment sa bituka, na nagiging sanhi ng gas, bloating at pagtatae sa mga madaling kapitan. Halimbawa, ang mga taong lactose-intolerant ay kulang sa enzyme lactase, na kinakailangan upang masira ang lactose sa gatas at mga produkto ng pagawaan ng gatas. Kung ang lactose ay hindi nasira nang maayos, maaari itong maging sanhi ng pagtatae"
        ],
        "dimension": 1,
        "index": 0
    },
    {
        "pattern": [
            "* allergy * \bdiarrhea\b(?!_) *",
            "Ano ang dahilan kung bakit pwede kang magka-diarrhea o magtatae kapag may allergy",
            "Bakit nakakapagdulot ng diarrhea ang allergy",
            "Paano nakakaapekto ang pagkakaroon ng allergy sa pagkain sa pagkakaroon ng diarrhea ",
            "bakit ang allergy ng matamis ay diarrhea"
        ],
        "response": [
            "Ang mga allergy ay maaaring mag-trigger ng pagtatae bilang resulta ng immune response ng katawan sa isang allergen. Kapag may nakitang allergen, ang immune system ay naglalabas ng histamine at iba pang mga kemikal na maaaring magdulot ng pamamaga at pangangati sa bituka. \n        \n        Ang pamamaga na ito ay maaaring humantong sa pagtaas ng paggalaw ng bituka, pagbawas ng pagsipsip ng tubig, at ang pagtatago ng labis na likido sa mga bituka, na nagreresulta sa pagtatae."
        ],
        "dimension": 1,
        "index": 1
    },
    {
        "pattern": [
            "* parasite * \bdiarrhea\b(?!_) *",
            "Ano ang dahilan kung bakit pwede kang magka-diarrhea o magtatae dahil sa parasite",
            "Bakit importante ang proper hygiene para maiwasan ang pagkakaroon ng parasitic infection",
            "Paano maiiwasan ang pagkakaroon ng parasitic infection na nagdudulot ng diarrhea ",
            "Paano matutukoy kung ang diarrhea  ay sanhi ng parasitic infection",
            "bakit ang parasite ay nakapagtatae"
        ],
        "response": [
            "Ang parasites ay maaaring dumikit as bituka na nagdudulot ng pinsala at naglalabas ng mga lason na maaaring mag-trigger ng immune response at pamamaga. Ang pamamaga na ito ay maaaring humantong sa mas madalas na paggalaw ng bituka, pagbawas ng pagsipsip ng tubig, at labis na pagkaubos ng likido ng katawan na nagreresulta sa pagtatae. At saka, ang ilang mga parasito ay maaaring gumawa ng mga enzyme na nakakasagabal sa pagsipsip ng mga sustansya na humahantong sa malabsorption at pagtatae.\n        "
        ],
        "dimension": 1,
        "index": 2
    },
    {
        "pattern": [
            "* bacterial * \bdiarrhea\b(?!_) *",
            "Ano ang bacterial infection at paano ito maaaring maiwasan",
            "Paano bakit nakakapagdulot ng diarrhea ang mga bakterya",
            "bakit ang bacteria ay nakapagtatae"
        ],
        "response": [
            "Ang mga impeksyon dulot ng bakterya ay maaaring magdulot ng pagtatae dahil sa ito ay nakakalason. Ito ay pumipinsala sa bituka, na nagiging sanhi ng pamamaga at pangangati. At saka ang mga bakterya ay nag tritrigger sa paglabas ng tubig sa katawan ng dahil sa pagtatae. Ang mga bakterya nag naglalabas ng mga enzymes na nakakaapekto sa kakayahan ng bituka na sumipsip ng nutrisyon at tubig na pwedeng humantong sa malabsorption."
        ],
        "dimension": 1,
        "index": 3
    },
    {
        "pattern": [
            "* virus * \bdiarrhea\b(?!_) *",
            "Ano ang mga pamamaraan sa paggamot ng viral infection na nagdudulot ng diarrhea ",
            "Paano nakakahawa ang viral infection at paano ito maaaring maiwasan",
            "Paano nakakapagdulot ng diarrhea ang mga virus",
            "bakit ang virus ay nakapagtatae"
        ],
        "response": [
            "Ang mga impeksyong dulot ng mga virus ay maaaring humantong sa pinsala sa lining ng bituka, na maaaring magpababa sa kakayahan ng iyong katawan na sumipsip ng tubig at nutrients. Ang mga virus ay maaaring magagpapalabas sa katawan ng mga kemikal na nagpapataas ng motility ng bituka, na hahantong sa pagtatae. \n        \n        Mayroong iba't ibang mga virus na maaaring magdulot ng pagtatae, kabilang ang mga norovirus, rotavirus at adenovirus na madaling kumalat sa pamamagitan ng kontaminadong pagkain o tubig; malapit na pakikipag-ugnayan sa isang taong nahawahan.\n        "
        ],
        "dimension": 1,
        "index": 4
    },
    {
        "pattern": [
            "* kuha * \bdiarrhea\b(?!_) *",
            "Ano ang mga bagay na nagdudulot pagkakahawa ng diarrhea ",
            "Ano ang mga pinagmumulan dahilan sanhi sanhi kung bakit nagkakaroon ng diarrhea ",
            "Anong mga paraan para magka-diarrhea  ang isang tao",
            "Mga pangkaraniwang paraan para magka-diarrhea ",
            "Paano Saan magkakaroon ng diarrhea ",
            "Paano Saan nakukuha nagmumula makuha ang pagtatae o diarrhea"
        ],
        "response": [
            "Maraming bagay bagay na nag dudulot ng diarrhea o magtaetae. Halimbawa nito ay kapag mahina ang iyong resistnensya at may problema ka sa bituka. Maari ding epekto ito ng gamot na kinain mo.  Pero madalas talaga, ang sanhi ng pagtatae ay pagkain. Iyong ibang mga tao may mga food allergy o bawal kumain ng mga natatanging pagkain. Iyong iba naman hindi kayang tunawing ang pagkaing may gatas, sorbitol, pampatamis, at fructose na madalas nakikita sa mga pinoprosesong pagkain."
        ],
        "dimension": 1,
        "index": 5
    },
    {
        "pattern": [
            "* (dulot|trigger|dahilan) * diarrhea*",
            "Ano ang mga posibleng pangunahing dahilan sanhi ng pagkakaroon ng diarrhea ",
            "anong Mga pagkain na maaaring magdulot ng diarrhea"
        ],
        "response": [
            "\n        Ang kontaminasyon ng pagkain at tubig, halimbawa ay ang mga pagkain na hindi maayos na inihanda o pinangangasiwaan, ay maaaring magdulot ng pagtatae.\n\n        At saka, ang ilang mga gamot tulad ng mga antibiotic ay maaaring baguhin ang balanse ng bakterya sa iyong digestive tract at humantong sa mga gastrointestinal disorder.\n        \n        Ang stress, mga pagbabago sa dieta at mga ibang kondisyon ng katawan ay maaari ding mag-resulta sa pagkakaroon ng pagtatae. Ang panganib na magkaroon ng pagtatae ay maaaring mabawasan sa pamamagitan ng madalas na paglinis tulad ng ng madalas na paghuhugas ng kamay at ligtas na paghawak ng pagkain."
        ],
        "dimension": 1,
        "index": 6
    },
    {
        "pattern": [
            "* (tubig|hydrate) * treat * \bdiarrhea\b(?!_) * ",
            "Bakit dapat palaging mag-inom ng tubig ang may diarrhea ",
            "Bakit importante ang hydration o pag-iinom ng maraming tubig para sa may diarrhea ",
            "Paano makakatulong ang pagpapa-hydrate pag-iinom ng tubig sa pag gamot ng diarrhea ",
            "Paano mapipigilan ang pagkakaroon ng dehydration dahil sa diarrhea ",
            "bakit mag hydrate o uminom ng tubig kapag nagtatae"
        ],
        "response": [
            "\n        Ang pananatiling hydrated ay mahalaga dahil ang pagtatae ay maaaring humantong sa pagkaubos sa likido ng katawan. Ang pagtatae ay nagiging sanhi ng pagkawala ng tubig at mga electrolyte ng katawan, tulad ng sodium at potassium, na mahalaga para sa normal na paggana ng katawan. \n        \n        Kaya, ang taong nagtatae ay pinapayuhang uminom ng maraming likido, tulad ng tubig, buko juice, am, arrozcaldo, soup, sports drink, sabaw, at oral rehydration solution, ay maaaring palitan ang mga nawawalang likido at electrolyte at maiwasan ang dehydration. Inirerekomenda din na iwasan ang mga inumin na maaaring higit pang makairita sa tiyan, tulad ng alkohol, caffeine, at matamis na inumin.\n       \n        Ang wastong hydration sa panahon ng pagtatae ay makakatulong na mapawi ang mga sintomas at maiwasan ang mga komplikasyon na maaaring magmula sa dehydration.\n        "
        ],
        "dimension": 7,
        "index": 0
    },
    {
        "pattern": [
            "* zinc * treat * \bdiarrhea\b(?!_) *",
            "Ano ang dahilan kung bakit nakapagpapagaling ang pag-inom ng zinc sa may diarrhea ",
            "Bakit dapat importante epektibo ang pag-inom ng zinc sa pagpapagaling ng diarrhea ",
            "Bakit nakakatulong ang zinc sa pagpapagaling ng mayroong diarrhea ",
            "Bakit Paano nakapagpapagaling nakatutulong ang zinc sa may diarrhea "
        ],
        "response": [
            "Ang zinc ay nakakabawas ng tagal at kalubhaan ng pagtatae at posibilidad ng kasunod na impeksyon. Maaari rin itong makatulong na mapanatili ang balanse ng mga likido at electrolyte, na maaaring maabala kapag nagkakaroon ng pagtatae. Bukod dito, ang zinc ay maaari ding makatulong sa pagpapanumbalik ng malusog na flora ng bituka. Gayunpaman, dahil ang labis na paggamit nito ay maaaring makapinsala, ipinapayong lahat ng mga suplemento ay dapat talakayin sa isang propesyonal sa pangangalagang pangkalusugan bago gamitin.\n        "
        ],
        "dimension": 7,
        "index": 1
    },
    {
        "pattern": [
            "* treat * \bdiarrhea\b(?!_) * ",
            "Ano ang mga dapat gawin kung hindi agad gumaling ang taong may diarrhea ",
            "Ano ang mga dapat gawin unpang maiwasa ang pagkakaroon ng diarrhea ",
            "Ano ang mga gamot na pwedeng ibigay sa taong may diarrhea ",
            "paano ano ang gamot sa diarrhea"
        ],
        "response": [
            "Ang paggamot sa pagtatae ay depende sa dahilan. Para sa mga hindi malalang kaso, maaaring makatulong ang mga over the counter na mga gamot tulad ng loperamide o bismuth subsicylate. Gayunpaman, ang pag-inom ng maraming likido tulad ng tubig, sabaw, sopas, inuming pampalakasan, tubig ng niyog, mga solusyon sa oral rehydration at pag-iwas sa mga inumin na maaaring magpalubha ng tiyan, tulad ng alchohol, ay dapat isaalang-alang. Kailangan mong manatiling hydrated. Kung nagpapatuloy ang mga sintomas, mahalagang magpatingin sa iyong doktor para sa tamang diagnosis at paggamot.\n        "
        ],
        "dimension": 1,
        "index": 7
    },
    {
        "pattern": [
            "* gamutin * \bdiarrhea\b(?!_) * saan * ",
            "* saan * gamutin * \bdiarrhea\b(?!_) * ",
            "saan pwede mag punta magagamot pag ako may nagtatae",
            "asan ko ba pwede gamuting ang pagtatae",
            "Saan ka pupunta kung nais mong magpagamot ng diarrhea",
            "Saan puwedeng magpagamot ng diarrhea"
        ],
        "response": [
            "Depende sa kalubhaan ng mga sintomas, ang paggamot na may pagtatae ay maaaring gawin sa bahay o sa isang pasilidad ng pangangalagang pangkalusugan. Ang pahinga, hydration at dietary modification ay karaniwang ang pinaka-epektibong paraan upang gamutin ang mga banayad na kaso ng pagtatae. \n        \n        Ang mga sintomas ay maaari ding mapawi sa pamamagitan ng paggamit ng mga over the counter na mga produktong panggamot tulad ng loperamide at bismuth subsicylate. \n        \n        Ngunit ang agarang paggamot ay dapat na simulan kung ang pagtatae ay malubha o sinamahan ng anumang iba pang mga sintomas, kabilang ang lagnat, pag-aalis ng tubig at dugo sa dumi. Gayundin kung ang pagtatae ay nagpapatuloy ng higit sa 48 oras, dalhin ang pasyente sa isang pasilidad ng pangangalagang pangkalusugan. Pumunta sa pinakamalapit na barangay health center\n        ."
        ],
        "dimension": 5,
        "index": 0
    },
    {
        "pattern": [
            "* treat * dugo * (tae|diarrhea) *",
            "* dugo * (tae|diarrhea) * gawin *",
            "Ano ang mga dapat gawin inuming gamot kung may kasamang dugo sa diarrhea ",
            "Ano ang mga pagkain na dapat kainin o iwasan kapag may kasamang dugo sa diarrhea ",
            "Ano ang mga pamamaraan para maiwasan ang dugo sa diarrhea ",
            "Anong dapat gawin kapag may dugo sa diarrhea ",
            "Paano maiiwasan malulunasan ang pagkakaroon ng dugo sa diarrhea",
            "Saan pwede magpatingin kung may kasamang dugo ang diarrhea ",
            "ano ang gamot kapag nag dudugo na nagtatae"
        ],
        "response": [
            "Mahalagang humingi kaagad ng propesyonal na payo kung may napansin kang dugo sa iyong pagtatae. Maaaring ito ay isang senyales ng matinding karamdaman, halimbawa, pamamaga ng bituka, impeksyon o iba pang mga digestive disorder. Huwag uminom ng mga gamot na nasa counter gaya ng mga antimotility agent tulad ng loperamide imodium at pepto bismol. Panatilihing uminom palagi ng tubig. Upang magamot ang pinagbabatayan ng sanhi ng madugong pagtatae, maaaring magrekomenda ang iyong doktor ng pagsusuri at pagrereseta ng mga produktong panggamot.\n        "
        ],
        "dimension": 2,
        "index": 0
    },
    {
        "pattern": [
            "* treat * \bdiarrhea\b(?!_) * lagnat * ",
            "* treat * lagnat * \bdiarrhea\b(?!_) * ",
            "Ano ang mga dapat gawin inuming gamot para sa may lagnat na kasabay ng diarrhea ",
            "Kailan dapat mag-alala kung may lagnat na kasabay ng diarrhea ",
            "May mga gamot ba para sa may lagnat na kasabay ng diarrhea ",
            "Paano mapapababa malunasan ang lagnat sa may kasamang diarrhea ",
            "ano ang gamot sa nilalagnat na may diarrhea"
        ],
        "response": [
            "Kung ikaw ay nilalagnat, maglagay ng basa at mainit init na tela sa iyong noo. Mag suot din ng komportableng damit. Kung ikaw naman ay nanginging ay mag damit ka ng marami. Tapos mag pahinga ka, kailangan mo yan.\n\n        Kapag nagtatae ka din, ay uminom ka ng maraming tubig o di kaya iyong mga sabaw, sports drinks, tubig na galing sa nyog, oral rehydration solutions at umiwas ka sa mga inuming nakakakati ng bituka tulad ng alchohol.\n\n        Pwede ka din gumamit ng antimotility o bismuth subsalicylate. Ngunit wag mo iyon gamitin kung ikaw ay nilalagat.\n\n        Kapag hindi parin mawala ang iyong sakit ay magpatingin kana sa doktor.\n        "
        ],
        "dimension": 2,
        "index": 1
    },
    {
        "pattern": [
            "* treat * \bdiarrhea\b(?!_) * ",
            "* \bdiarrhea\b(?!_) * treat * ano * ",
            "Ano ang mga dapat gawin para mapabilis ang paggaling mula sa diarrhea ",
            "Ano ang mga gamot na hindi dapat maaaring gamitin sa pagpapagaling ng diarrhea ",
            "Anong mga gamot ang dapat inumin para sa diarrhea ",
            "Paano gamutin ang diarrhea sa bahay",
            "anong gamot ang dapat gamitin para sa diarrhea ",
            "sabihin mo sakin paano ba dapat gamutin ang diarrhea",
            "paano ginagamot ang pagtatae",
            "ano ang pwede kong gawin para bumuti ang aking pagtatae"
        ],
        "response": [
            "\n        Ang paggamot sa pagtatae ay depende sa dahilan. Para sa mga hindi malalang kaso, maaaring makatulong ang mga over the counter na mga gamot tulad ng loperamide o bismuth subsicylate.Ngunit, huwag kang gumamit nito kung ikaw ay nilalagnat o nagdudugo ang iyong pagtatae. \n        \n        Gayunpaman, ang pag-inom ng maraming likido tulad ng tubig, sabaw, sopas, inuming pampalakasan, tubig ng niyog, mga solusyon sa oral rehydration at pag-iwas sa mga inumin na maaaring magpalubha ng tiyan, tulad ng alchohol, ay dapat isaalang-alang. Kailangan mong manatiling hydrated. Kung nagpapatuloy ang mga sintomas, mahalagang magpatingin sa iyong doktor para sa tamang diagnosis at paggamot.\n        \n        Kapag ang iyong pagtatae ay tumagal ng dalawang araw ay pinapapayuhan kang mag patingin kaagad sa doctor.\n        "
        ],
        "dimension": 1,
        "index": 8
    },
    {
        "pattern": [
            "* balatan * prutas * ",
            "* huwag * kain * hindi * nabalatan * prutas * ",
            "Ano ang dahilan kung bakit dapat balatan ang mga prutas",
            "Ano ang masama mangyari kung hindi balatan ang mga prutas",
            "Bakit delikado ang pagkain ng prutas na hindi binabalatan",
            "Bakit hindi dapat pwedeng kainin ang balat ng mga prutas",
            "Bakit mahalagang kailangan balatan ang mga prutas",
            "Paano nakakatulong ang pagbabalat ng mga prutas sa kalusugan",
            "Para saan ang pagbabalat ng mga prutas bago kainin"
        ],
        "response": [
            "Upang maiwasan ang pagtatae, inirerekumenda na balatan ang mga prutas bago kainin dahil ito ay maaaring naglalaman ng mga nakakapinsalang bakterya, parasito at mga virus na maaaring magdulot ng mga impeksiyon. As saka, ang panganib ng kontaminasyon ay maaaring mas mababawasan sa pamamagitan ng maingat na paghuhugas ng mga prutas ng malinaw na tubig bago ito balatan."
        ],
        "dimension": 5,
        "index": 1
    },
    {
        "pattern": [
            "* huwag  * kain * hilaw * karne *",
            "* kain * hindi * luto * karne *",
            "* iwasan *hilaw * karne * ",
            "bakit kailangan ang hilaw na karne at maaring magdulot ng impeksyon sa tiyan.",
            "bakit dapat maayos ang mga pagkakaluto sa karneng hilaw para hindi magkadiarrhea.",
            "bakit kailangang lutuin ng mabugi ang karne bago kainin",
            "bakit Maaring magdulot ng diarrhea ang pagkain ng hilaw na karne."
        ],
        "response": [
            "Ang tamang pagluluto ng pagkain ay mahalaga dahil pinapatay nito ang mga nakakapinsalang bakterya, mga virus, at mga parasito na maaaring magdulot ng mga impeksyon sa bituka. Ang pagkain ng hindi luto o hilaw na pagkain, lalo na ang mga karne, manok, itlog, at pagkaing-dagat, ay maaaring mapanganib dahil dito. \n      \n      Ang mga wastong pagluluto, tulad ng pagluluto ng pagkain na naaangkop sa temperatura at pag-iwas sa cross-contamination sa pagitan ng mga hilaw at lutong pagkain, ay maaaring makatulong na maiwasan ang pagkalat ng mga nakakapinsalang bakterya at mabawasan ang panganib na magkaroon ng pagtatae."
        ],
        "dimension": 5,
        "index": 2
    },
    {
        "pattern": [
            "* pwede * diarrhea * hindi * kuha *",
            "* pwede * diarrhea * iwasan *",
            "Ano ang dapat gawin upang hindi magka-diarrhea ",
            "Ano ang mga hakbang para hindi magka-diarrhea ",
            "Ano ang mga bagay na dapat iwasan gawin upang hindi magka-diarrhea ",
            "Ano ang mga natural na hakbang paraan upang maiwasan ang pagkakaroon ng diarrhea ",
            "Ano ang mga tips paraan para maagapan o maiwasan ang diarrhea ",
            "Paano mababawasan ang posibilidad ng pagkakaroon ng diarrhea ",
            "Paano maiiwasan ang pagkalat pagkakaroon ng diarrhea ",
            "anong dapat gawin upang makaiwas sa pagtatae",
            "pano ba iwasan ang pagtatae"
        ],
        "response": [
            "Ang pagiging malinis, tulad ng paghuhugas ng kamay gamit ang sabon o tubig bago ka kumain at pagkatapos ng pagpunta sa banyo, ay mahalaga upang hindi magkaroon ng pagtatae. \n      \n      Ang pagtiyak ng malinis at ligtas na pinagkukunan ng pagkain at tubig pati na rin ang tamang pagluluto ng mga pagkain upang maalis ang anumang nakakapinsalang bakterya o mga parasito ay mahalaga din. Ang pag-iwas sa pagtatae ay maaari din sa pamamagitan ng hidi pagkain ng mga hilaw o hindi natulo na pagkain, mga produktong gumagamit ng gatas na hindi na-pasteurize at hindi malinis na pinagmumulan ng tubig. \n      \n      At saka, ang pananatiling hydrated at pagpapanatili ng isang malusog na diyeta ay makakatulong na palakasin ang immune system at maiwasan ang mga impeksyon na maaaring humantong sa pagtatae."
        ],
        "dimension": 1,
        "index": 9
    },
    {
        "pattern": [
            "* treat * pagkain * diarrhea * ",
            "* pagkain * treat * diarrhea *",
            "* diarrhea * pagkain * treat*  ",
            "ano aling lista ang mga nakakatulong pagkaing pwede kainin pag may diarrhea",
            "Ano mga pagkain ang pwedeng maaaring kainin dapat na makakatulong kung may diarrhea ",
            "Kailangan Pwede ba akong humingi ng listahan ng pagkain ang pwede kainin kapag may diarrhea "
        ],
        "response": [
            "Maaari kang kumain ng arrozcaldo, saging, sabaw, manok, chicken soup, congee, electrolyte drink, oatmeal, peanut butter , patatas, kanin, sopas, sports drink, toast, tubig, yogurt, rice soup (am) , at buko juice. \n       \n      Ngunit, ang paggamot sa pagtatae ay depende sa dahilan. Para sa mga hindi malalang kaso, maaaring makatulong ang mga over the counter na mga gamot tulad ng loperamide o bismuth subsicylate.Kung nagpapatuloy ang mga sintomas, mahalagang magpatingin sa iyong doktor para sa tamang diagnosis at paggamot."
        ],
        "dimension": 4,
        "index": 0
    },
    {
        "pattern": [
            "* masama * hydration * diarrhea *",
            "* diarrhea_foods_not_allowed_bad_hydration * diarrhea *",
            "bakit dapat umiwas hindi kumain uminom ng pagkaing nakakadehydrate masama sa hydration kapag may diarrhea",
            "bakit umiwas hindi kumain inom sa diarrhea_foods_not_allowed_bad_hydration pag nakakaranas ng diarrhea"
        ],
        "response": [
            "Mahalagang iwasan ang mga pagkaing tulad ng iyong nabanggit kapag nakakaranas ng pagtatae dahil ang mga ito ay maaaring higit pang mag-dehydrate ng katawan. Sa halip, kumain ng pagkaing madaling matunaw at naglalaman ng maraming tubig tulad ng sabaw, mga sopas, pinakuluang gulay, at prutas na may mataas na nilalaman ng tubig, upang makatulong na palitan ang mga naubos na likido at electrolyte sa katawa at nang maiwasan din ang sobrang pagkauhaw."
        ],
        "dimension": 4,
        "index": 1
    },
    {
        "pattern": [
            "* lactose * diarrhea *",
            "* lactose *",
            "*diarrhea_foods_not_allowed_contains_lactose*",
            "* diarrhea_foods_not_allowed_contains_lactose * diarrhea *",
            "bakit dapat umiwas hindi kumain uminom pagkaing may lactose kapag may diarrhea",
            "bakit umiwas hindi kumain inom sa diarrhea_foods_not_allowed_contains_lactose pag nakakaranas ng diarrhea"
        ],
        "response": [
            "Kung ikaw ay nag tatae, umiwas ka sa mga pagkaing may lactose dahil maaari nitong sirain ang lining ng iyong maliit na bituka. Pag nangyari ito, nababawasan ang kakayahang ng bituka na gumawa ng lactase na isang enzyme na tumutulong sa pagsira ng lactose. Maaari ma-stuck ang iyong kinain sa mas malaking bituka, na magdulot ng pangungutot, paglobo ng tyan o hindi pagkatunaw ng pagkain kapag ang katawan ay hindi kayang i absorb ang lactose nang maayos. \n      \n      Ang pag iwas ng mga pagkaing naglalaman ng lactose ay makakatulong upang mabawasan ang mga sintomas ng pagtatae at maiwasan ang mga problema sa hinahara kung hindi ka kakain ng mga pagkain tulad ng gatas, keso o ice cream.\n      \n      Subalit may mga iba ka pa namang pwedeng gawin. Halimbawa, pwede kang uminom o kamain ng mga pagkaing maraming tubig tulad ng arrozcaldo, saging, sabaw, manok, chicken soup, congee, electrolyte drink, oatmeal, peanut butter , patatas, kanin, sopas, sports drink, toast, tubig, yogurt, rice soup (am) , at buko juice. \n      \n      Pwede ka ding kumain ng loperamide o bismuth subsicylate.Kung nagpapatuloy ang mga sintomas, mahalagang magpatingin sa iyong doktor para sa tamang diagnosis at paggamot.\n      "
        ],
        "dimension": 4,
        "index": 2
    },
    {
        "pattern": [
            "* diarrhea_foods_not_allowed_irritate_stomach *",
            "* diarrhea_foods_not_allowed_irritate_stomach * diarrhea *",
            "bakit dapat umiwas hindi kumain uminom pagkaing may anghang maanghang o spicy kapag may diarrhea",
            "bakit umiwas hindi kumain inom sa diarrhea_foods_not_allowed_irritate_stomach pag nakakaranas ng diarrhea"
        ],
        "response": [
            "\n      Ang mga maanghang na pagkain ay maaaring makairita sa tiyan. Ito rin ay maaaring humantong sa paglala ng mga sintomas ng pagtatae. Higit pa rito, ang mga maanghang na pagkain ay maaaring maglaman ng mga sangkap na mahirap matunaw, na nagdudulot ng karagdagang gastrointestinal distress o panankit ng tyan. Ipinapayo na iwasan ang paggamit ng mga pagkaing pampalasa na maaanghang.\n\n      Sa halip, pwede kang uminom o kamain ng mga pagkaing maraming tubig tulad ng arrozcaldo, saging, sabaw, manok, chicken soup, congee, electrolyte drink, oatmeal, peanut butter , patatas, kanin, sopas, sports drink, toast, tubig, yogurt, rice soup (am) , at buko juice. \n      \n      Pwede ka ding kumain ng loperamide o bismuth subsicylate.Kung nagpapatuloy ang mga sintomas, mahalagang magpatingin sa iyong doktor para sa tamang diagnosis at paggamot.\n      "
        ],
        "dimension": 4,
        "index": 3
    },
    {
        "pattern": [
            "* diarrhea_foods_not_allowed_oily *",
            "* diarrhea_foods_not_allowed_oily * diarrhea *",
            "bakit dapat umiwas hindi kumain uminom pagkaing may anghang maanghang o spicy kapag may diarrhea",
            "bakit umiwas hindi kumain inom sa diarrhea_foods_not_allowed_irritate_stomach pag nakakaranas ng diarrhea"
        ],
        "response": [
            "Ang mga mamantikang pagkain ay naglalaman ng maraming taba na nag papabagal sa pagkatunaw ng pagkain sa tiyan. \n      \n      Dahil mahirap matunaw ang mantika at mamantika na pagkain, maaaring itong maging sanhi ng pagtatae. Maaari rin itong maging sanhi ng pagtaas ng produksyon ng acid sa tiyan, na umiirita sa bituka at humantong sa paglala ng mga sintomas. \n      \n      Kung mayroon kang pagtatae, ang pag iwas sa mga mamantikaing pagkain ay makatulong upang mabawasan ang mga sintomas at mapabilis ang paggaling.\n      \n      Upang gumaling, subukang uminom o kamain ng mga pagkaing maraming tubig tulad ng arrozcaldo, saging, sabaw, manok, chicken soup, congee, electrolyte drink, oatmeal, peanut butter , patatas, kanin, sopas, sports drink, toast, tubig, yogurt, rice soup (am) , at buko juice. \n      \n      Pwede ka ding kumain ng loperamide o bismuth subsicylate.Kung nagpapatuloy ang mga sintomas, mahalagang magpatingin sa iyong doktor para sa tamang diagnosis at paggamot.\n      "
        ],
        "dimension": 4,
        "index": 4
    },
    {
        "pattern": [
            "* pagkain * iwasan * diarrhea *",
            "* pagkain * (hindi * (inom|kain) ) * diarrhea *",
            "* diarrhea * iwasan * pagkain *",
            "* diarrhea * (hindi * (inom|kain) ) * pagkain *",
            "Ano ang mga pagkain na dapat kainin inumin iwasan para hindi lalong lumala ang may diarrhea ",
            "Anong mga pagkain ang nakakasama sa kalagayan ng may diarrhea ",
            "Paano malalaman kung alin ang mga pagkaing hindi dapat kainin inumin iwasan kapag may diarrhea ",
            "anong mga pagkain ang hindi magandang kainin o inumin pag nagtatae o may diarrhea",
            "ano alin ang mga pagkain na iwasan hindi kainin pag nagtatae",
            "anong pagkain ang hindi dapat kainin pag may diarrhea"
        ],
        "response": [
            "\n      Ang pag-iwas sa ilang partikular na pagkain kapag nagtatae ay mahalaga dahil ang ilang sa mga ito ay maaaring makairita sa digestive system at magpapalala ng mga sintomas. Maaaring mahirap matunaw ng katawan ang maanghang, mamantika, o matatabang pagkain, habang ang mga pagkaing naglalaman ng lactose o fructose ay maaaring magpalala ng pagtatae sa mga taong may lactose o fructose intolerance. Higit pa rito, ang ilang uri ng fiber, gaya ng mga makikita sa beans, cruciferous vegetables, at whole grains, ay maaaring mahirap matunaw at maaaring magdulot ng pangungutot o kabag.\n\n      Ang mga pagkaing at inuming dapat mong iwasan ay ang mga inuming nag lalaman ng alchohol, beans, berries, brocoli, repolyo, cauliflower, keso, chickpeas, kape, mais, dates, fruit jucies, ubas, berdeng madahong gulay, gum, honey ice cream, gatas, mani, mamantikaing pagkain, mga maaanghang na pagkain, paminta, hilaw na karne , salad, shellfish, soft drink, at tsaa.\n      "
        ],
        "dimension": 4,
        "index": 5
    },
    {
        "pattern": [
            "* diarrhea * problema * sino * ",
            "* problema * diarrhea * sino * ",
            "* diarrhea * sino * problema * ",
            "* problema * sino * diarrhea * ",
            "* sino * problema * diarrhea * ",
            "Alin ang mga taong maaring makaroon ng problema n dahil sa pagkakaroon ng diarrhea ",
            "Ano ang mga grupo ng tao na maaring magka-problema sa pagtatae o diarrhea",
            "Sino ang mga nanganganib na magkaroon ng diarrhea ",
            "Sino ang mga maaring magka-problema kapag mayroong diarrhea ",
            "Sino ang mga taong dapat mag-ingat upang hindi magka-diarrhea "
        ],
        "response": [
            "Maaring magkaroon ng matinding problema ang mga mga batang wala pang 3 taong gulang, mas matatandang pasyente, mga taong mahina ang immune system, malnourished na mga bata, may pagtatae ng higit sa 24 na oras, mga pasyente na may 39 degree celcius, mga pasyente na may dumi at nana, mga pasyente na may mga gamot sa altapresyon, at mga manlalakbay na may mga kasalukuyang kondisyon sa kalusugan ay ang mga taong may panganib na magkaroon ng mga komplikasyon"
        ],
        "dimension": 1,
        "index": 10
    },
    {
        "pattern": [
            "* dose * antimotility *",
            "* hakbang * antimotility *",
            "* (kainin|gamitin|inumin) * antimotility *",
            "* antimotility * (gamitin|kainin|inumin) *",
            "Ano ang dapat tandaan sundin na dosage sa pag-inom o paggamit ng antimotility ",
            "Ano ang tamang dosage ng antimotility",
            "Anong dapat isaalang-alang na tamang paraan ng pag-inom paggamit ng antimotility",
            "Paano ang tamang paraan ng pag-inom ng gamot na antimotility ",
            "Paano tamang dapat inumin o gamitin dosage gamitin ang antimotility ",
            "ano ang dose ng antimotility"
        ],
        "response": [
            "Uminom ng maraming tubig habang ginagamot mo ang iyong pagtatae gamit ang antimotilities. Ang pagtatae ay maaaring magpa-dehydrate sa iyo. \n\n        Para sa mga nasa hustong gulang at mga bata sa edad na 12 at mas matanda, ang inirerekomendang dosis ay 2 tablet sa pamamagitan ng bibig pagkatapos ng unang maluwag na dumi. Pagkatapos, uminom ng 1 tablet pagkatapos ng bawat maluwag na dumi. Huwag uminom ng higit sa 4 na tablet sa loob ng 24 na oras. \n        \n        Para sa mga batang edad 9 hanggang 11 taon o mga bata na tumitimbang ng 60 lbs hanggang 95 lbs, ang inirerekomendang dosis ay 1 tablet sa bibig pagkatapos ng unang maluwag na dumi. Pagkatapos, uminom ng kalahati ng isang tableta pagkatapos ng bawat maluwag na dumi. Huwag uminom ng higit sa 3 buong tablet sa loob ng 24 na oras. \n        \n        Para sa mga batang edad 6 hanggang 8 taong gulang o mga bata na tumitimbang ng 48 lbs hanggang 59 lbs, ang inirerekomendang dosis ay 1 tablet sa bibig pagkatapos ng unang maluwag na dumi. Pagkatapos, uminom ng kalahati ng isang tableta pagkatapos ng bawat maluwag na dumi. Huwag uminom ng higit sa 2 buong tablet sa loob ng 24 na oras. \n        \n        Para sa mga batang 5 taon at mas bata, tanungin ang doktor ng iyong anak upang makita kung ano ang iba pang mga opsyon na magagamit upang gamutin ang pagtatae ng iyong anak.\n        \n        Ang mga nabangit na paraan ng pag inom ng antimotility ay pawang mga halibawa lamang. \n        "
        ],
        "dimension": 7,
        "index": 2
    },
    {
        "pattern": [
            "* ano * antimotility *",
            "Ano ang ibig sabihin kahulugan ng antimotility",
            "Anong nangyayari kapag uminom ng antimotility",
            "Ano ang mga sakit na nakakatulong ang antimotility",
            "ano ang antimotility"
        ],
        "response": [
            "Ang mga antimotility tulad ng Loperamide at Imodium ay ginagamit upang pabagalin o pahintuhin ang paggalaw ng bituka. Gumagana ito sa pamamagitan ng pagbubuklod sa mga opioid receptor ng bituka na nag babawas  sa contraction ntio at tumutulong na pabagalin ang pagdaan ng dumi sa bituka. Ang gamot na ito ay may ibat ibang anyo tulad ng mga tablet, kapsula, likido at mga suspensyon. "
        ],
        "dimension": 7,
        "index": 3
    },
    {
        "pattern": [
            "* gamit * antimotility *",
            "Saan ginagamit ang antimotility",
            "Para sa anong karamdaman ginagamit ang antimotility",
            "paano anong saan gamit ng antimotility"
        ],
        "response": [
            "Ang mga antimotility tulad ng Loperamide at Imodium ay nagbabawas o nagpigil sa mga pag-galaw ng bituka. Nagbibigay din ito sa katawan ng mas maraming oras upang sumipsip ng tubig at mga sustansya mula sa natitirang mga nilalaman ng bituka, na maaaring humantong sa pagbaba sa dalas at intensity ng pagdumi. Ang gamot na ito ay may ibat ibang anyo tulad ng mga tablet, kapsula, likido at mga suspensyon. "
        ],
        "dimension": 7,
        "index": 4
    },
    {
        "pattern": [
            "* gana * antimotility * ",
            "* antimotility * gana * ",
            "Paano nakakatulong gumagana ang antimotility",
            "Paano nakakapagbigay ng ginhawa ang antimotility",
            "paano gumagana nagpapagaling ang antimotility"
        ],
        "response": [
            "Ang mga antimotility, tulad ng Loperamide at Imodium, ay pumipigil sa paggalaw ng bituka at maaaring gamitin upang gamutin ang pagtatae. Gumagana ang mga ito sa pamamagitan ng mas mabilis na pagsipsip ng tubig at mga electrolyte sa iyong dumi. Kaya, napapadalang ang pagdumi pagkatapos kumain nito.  Madalas gumana ang gamot pagkatapos ng humigit-kumulang isang oras, ngunit maaari itong mag-iba sa bawat tao. Gayunpaman, tandaan na maaaring hindi angkop ang mga ito para sa bawat pasyente at maaaring magkaroon ng potensyal na epekto."
        ],
        "dimension": 7,
        "index": 5
    },
    {
        "pattern": [
            "* hindi * ((kain|inom|gamit) | iwas)  * antimotility *",
            "Kailan hindi dapat epektibo gamitin ang antimotility",
            "Paano malalaman kung hindi dapat gumamit ng antimotility"
        ],
        "response": [
            "Dapat na iwasan ang mga antimotility agent kung may mga senyales ng matinding dehydration, mataas na lagnat, o may dugo ang iyong dumi, dahil ang mga ito ay maaaring magpahiwatig ng mas malubhang kondisyon na nangangailangan ng medikal na atensyon"
        ],
        "dimension": 7,
        "index": 6
    },
    {
        "pattern": [
            "* effect * antimotility  * ",
            "* hindi * maganda * epekto * antimotility  *",
            "Ano ang mga maaaring posibleng masamang negatibong epekto reaksyon sa antimotility",
            "Mayroon bang mga hindi inaasahang magandang epekto ang antimotility na dapat bantayan",
            "Paano nakakaapekto ang antimotility sa katawan",
            "ano ang hindi magandang side effect ng antimotility"
        ],
        "response": [
            "Ang mga antimotility, tulad ng Loperamide, ay maaaring magdulot ng mga side effect. Madalas na makaramdam ang mga tao ng kabag, pananakit ng tiyan, pagduduwal, pagsusuka, at tuyong bibig. Ang ilang mga tao ay maaari ring makaranas ng pagkahilo, pag-aantok, at hirap sa pag-ihi. Mahalagang sundin nang mabuti ang mga tagubilin ng iyong doktor o ang label ng gamot.\n        "
        ],
        "dimension": 7,
        "index": 7
    },
    {
        "pattern": [
            "* tips * antimotility *",
            "Ano ang mga dapat kong gawin habang nag gumagamit uminom kain ako ng antimotility",
            "Ano ang mga rekomendasyon sa pagkain ng antimotility",
            "ano ang mga payo tips sa pagkain o inom ng antimotility"
        ],
        "response": [
            "Huwag gumamit ng antimotilities kung mayroong dugo sa iyong dumi o itim na dumi. Kung mayroon kang kasaysayan ng sakit sa atay o mga problema sa ritmo ng puso, maaaring hindi rin ito ang pinakamahusay na gamot para sa iyo"
        ],
        "dimension": 7,
        "index": 8
    },
    {
        "pattern": [
            "* alternatibo *  antimotility *",
            "Ano ang ibang alternatibo herbal na gamot sa antimotility",
            "Ano ang mga herbal na panlunas sa pagtatae na puwedeng gamitin sa halip na antimotility",
            "Ano ang mga ibang herbal na gamot na puwedeng gamitin bukod sa antimotility",
            "Ano ang mga natural na paraan na puwedeng gawin sa pagpapakalma ng tiyan nang hindi gumagamit ng antimotility",
            "paano ano ang alternatibo herbal na gamot sa antimotility"
        ],
        "response": [
            "Mayroong ilang mga natural o herbal na alternatibo sa mga antimotilities.\n        \n        Halimbawa, ang pagpapakulo ng dahon ng bayabas at pag-inom nito ay maaaring makatulong sa paglaban sa bakterya at mga virus.\n       \n        At saka , Ang luya ay may mga anti-inflammatory properties na maaaring makatulong sa pagpapaginhawa sa digestive system at bawasan ang pagtatae. \n        \n        Maaari ka ring kumain ng saging. Naglalaman ang mga ito ng mataas na antas ng potassium, na makakatulong sa pag-regulate ng pagdumi at pagpapalit ng mga nawawalang electrolyte. Naglalaman din ang mga ito ng pectin, na makakatulong sa pagpapakapal ng dumi at mabawasan ang pagtatae\n        "
        ],
        "dimension": 7,
        "index": 9
    },
    {
        "pattern": [
            "* (hakbang|gamitin|kainin|inumin|dose) * bismuth *",
            "* bismuth * (hakbang|gamitin|kainin|inumin|dose)  *",
            "Ano ang mga dapat tandaan sa pag-inom at gamit ng Bismuth Subsalicylate ",
            "Ano ang tamang paraan hakbang dosis ng Bismuth Subsalicylate",
            "Anong paraan hakbang ng pag-inom o paggamit ng Bismuth Subsalicylate ang dapat sundin",
            "Gaano kadalas dapat inumin o gamitin ang Bismuth Subsalicylate",
            "Paano dapat gamitin at inumin o kainin ang Bismuth Subsalicylate",
            "Paano dapat ang dose ng Bismuth Subsalicylate sa taong may diarrhea ",
            "Paano gamitin inumin kainin ng wasto ang Bismuth subsalicylate",
            "ano ba ang dose sa pag gamit ng bismuth subsalicylate"
        ],
        "response": [
            "May pagkakaiba sa pagitan ng tablet at likidong anyo.Ilan sa paraan o karaniwang dosing ng Bismuth Subsalicylate ay ang mga sumusunod. \n        \n        Halimbawa, para sa tablet, kung ang tao ay may edad na 12 at mas matanda, ang karaniwang dosis ay 2 tablets (524 mg) tuwing 30 at hanggang 60 minuto kung kinakailangan hanggang sa 2 araw. Huwag uminom ng higit sa 16 na tableta (4,192 mg) sa isang araw.\n        \n        Kung mayroon ito naman ay likidong anyo, kung ang tao ay may edad na 12 at mas matanda , ang karaniwang dosis ay 30 mL (525 mg) bawat 30 minuto at kung kinakailangan ay hanggang sa 2 araw. Kung umiinom ka ng bismuth subsalicylate (Pepto-Bismol) upang gamutin ang pagtatae, maaari kang uminom ng 60 mL (1,050 mg) tuwing 60 minuto. Huwag uminom ng higit sa 240 mL (4,200 mg) sa isang araw\n        \n        Ang mga nabangit na paraan ng pag inom ng antimotility ay pawang mga halibawa lamang. "
        ],
        "dimension": 7,
        "index": 10
    },
    {
        "pattern": [
            "* bismuth *",
            "Paano ba talaga ang kahulugan maipapaliwanag ang Bismuth subsalicylate",
            "Para saan ginagamit ang Bismuth subsalicylate",
            "Bakit kailangan ng Bismuth subsalicylate",
            "Ano ang mga benepisyo ng Bismuth subsalicylate"
        ],
        "response": [
            "Ang Bismuth subsalicylate (Pepto-bismol o Bismatrol) ay isang over-the-counter na gamot na ginagamit upang gamutin ang sira ng tiyan at pagtatae. Gumagana ito nang maayos upang ihinto ang pagtatae, ngunit maaaring kailanganin mong inumin ito nang maraming beses sa isang araw. Ang gamot na ito ay karaniwang okay naman kainin ng isang tao, ngunit maaari itong magdulot ng hindi nakakapinsalang pagdidilim ng iyong dila o dumi. Karaniwang mabibili ito bilang tablet, kapsula, likidong suspensyon, o tabletas"
        ],
        "dimension": 7,
        "index": 11
    },
    {
        "pattern": [
            "* gamit * bismuth *",
            "Para saan Kailan dapat gamitin ang Bismuth subsalicylate",
            "Sino ang dapat  paano saan anong gamit ng Bismuth"
        ],
        "response": [
            "Ang bismuth subsalicylate  (Pepto-bismol o Bismatrol)  ay isang over-the-counter na gamot na ginagamit para sa paggamot ng pagtatae, kabag, sakit sa tiyan, hindi pagkatunaw ng pagkain, heartburn, pagduduwal at bilang isang prophylaxis para sa pagtatae ng manlalakbay.Karaniwang mabibili ito bilang tablet, kapsula, likidong suspensyon, o tabletas"
        ],
        "dimension": 7,
        "index": 12
    },
    {
        "pattern": [
            "* bismuth * gana * ",
            "* gana * bismuth * ",
            "Paano ba gumagana nagpapagaling ang Bismuth subsalicylate",
            "paano nagpapagaling ang Bismuth"
        ],
        "response": [
            "\n        Ang bismuth subsalicylate  (Pepto-bismol o Bismatrol)  ay isang oral antidiarrheal na gamot. Ito rin ay antibacterial, na maaaring makatulong sa paglaban sa mga pathogen na nagdudulot ng pagtatae. Maaaring makatulong ang bismuth subsalicylate na gamutin ang mga sintomas tulad ng pag-cramping ng tiyan, pagtatae, o pagduduwal dahil sa pagbawas ng pamamaga at pagkaubos ng mga likido ng katawan. Gayunpaman, mahalagang tandaan na ang bismuth subsalicylate ay hindi dapat inumin kapag umiinom ng aspirin, may allergy ka, may bleeding disorder ka, o renal impairment ka. Dapat din itong gamitin nang may pag-iingat ng mga bata at buntis.Hindi ka dapat gumamit ng bismuth subsalicylate nang higit sa 2 araw.\n        "
        ],
        "dimension": 7,
        "index": 13
    },
    {
        "pattern": [
            "* huwag * ( (kain|inom|gamit) | iwas )  *bismuth *",
            "Ano ang mga babala sa paggamit ng Bismuth subsalicylate",
            "Ano ang mga kondisyon kung saan hindi dapat uminom o kumain ng Bismuth subsalicylate",
            "Kailan hindi inirerekomenda ang pag-inom o pagkain ng Bismuth subsalicylate",
            "May mga pagkakataon ba na hindi magandang uminom o kumain ng Bismuth subsalicylate",
            "Kailan hindi dapat uminom o kumain ng Bismuth subsalicylate"
        ],
        "response": [
            "Hindi mo ito dapat inumin kung mayroon kang mga problema sa pagdurugo, ulser sa tiyan, dugo sa iyong dumi, o kung ikaw ay alerdyi sa aspirin o iba pang gamot. Huwag ibigay ang gamot na ito sa isang bata o teenager na may lagnat, sintomas ng trangkaso, o bulutong-tubig"
        ],
        "dimension": 7,
        "index": 14
    },
    {
        "pattern": [
            "* effect * bismuth * ",
            "* hindi * maganda * epekto * bismuth *",
            "Ano ang mga negatibong side effect ng paggamit ng Bismuth subsalicylate",
            "Maaari bang magdulot ng masamang epekto ang paggamit ng Bismuth subsalicylate",
            "Mayroon bang panganib hindi magandang epekto ang Bismuth subsalicylate",
            "Nakakaranas ba ng hindi magandang epekto ang pag-inom ng Bismuth subsalicylate",
            "ano ang hindi magandang epekto o side effect ng Bismuth"
        ],
        "response": [
            "Maaari kang makaranas ng pansamantalang pangingitim ng dumi o dila. Kung makaranas ng matinding reaksiyong alerhiya tulad ng kahirapan sa paghinga, pantal sa balat, at pamamaga, at Rye's syndrome na nagpapakita ng pagtatae, pagsusuka, hindi pangkaraniwang mababang enerhiya, pagkawala ng malay, seizure, pagbabago sa pag-uugali, pagkalito, panghihina ng kalamnan, pagbabago sa paningin o pandinig, makipag-ugnayan kaagad sa iyong doktor"
        ],
        "dimension": 7,
        "index": 15
    },
    {
        "pattern": [
            "* tips *bismuth *",
            "Anong mga babala ang dapat malaman bago gamitin ang Bismuth Subsalicylate para sa mga may diarrhea ",
            "Ano ang mga dapat tandaan sa paggamit ng Bismuth subsalicylate",
            "Mayroon bang mga babala o paalala sa pag-inom ng Bismuth subsalicylate",
            "Mayroon bang mga tips sa paggamit ng Bismuth subsalicylate",
            "Ano ang mga kailangan malaman tungkol sa paggamit ng Bismuth subsalicylate"
        ],
        "response": [
            "Uminom ng maraming tubig habang umiinom ka ng bismuth subsalicylate. Ang pagtatae ay maaaring magdulot ng dehydration at ang pag-inom ng sapat na likido ay makakatulong na maiwasan ito. Lunukin ang mga kapsula nang buo sa tubig. Huwag nguyain ang mga ito. Lunukin ang mga kapsula nang buo sa tubig. Huwag nguyain ang mga ito."
        ],
        "dimension": 7,
        "index": 16
    },
    {
        "pattern": [
            "* alternatibo * bismuth *",
            "Ano ang ibang mga natural herbal alternatives na pwedeng magamit na pamalit sa Bismuth subsalicylate",
            "Ano ang mga herbal na pwedeng magamit na pamalit sa Bismuth subsalicylate",
            "Ano ang mga ibang alternative gamot na pwedeng gamitin sa halip ng Bismuth subsalicylate",
            "May mga natural na herbal alternatibo ba sa Bismuth subsalicylate",
            "Mayroon bang mga natural na lunas na pwedeng magamit na alternatibo sa Bismuth subsalicylate",
            "paano ano ang alternatibo sa bismuth"
        ],
        "response": [
            "Pwede kang bumili ng antimotilities. Mayroon ding mga natural na gamot. Halimbawa, maaari kang uminom ng luya at kalawag dahil mayroon itong mga anti-inflammatory at antimicrobial na katangian na maaaring makatulong na mabawasan ang mga sintomas ng pagtatae. Maaari ka ring uminom ng tubig ng niyog na may mataas na nilalaman ng electrolyte."
        ],
        "dimension": 7,
        "index": 17
    },
    {
        "pattern": [
            "* saan * gamutin * diarrhea * ",
            "* saan * punta * diarrhea * "
        ],
        "response": [
            "Sa karamihan ng mga kaso, ang pagtatae ay maaaring gamutin sa bahay at malulutas nito ang sarili sa loob ng ilang araw. Kung talagang nakakaramdam ka ng matinding discomfort, tumagal ito ng higit sa 2 araw, nakakakita ng dugo sa iyong dumi, o nilalagnat, pinakamainam para sa iyo na pumunta sa malapit na healthcare center"
        ],
        "dimension": 5,
        "index": 3
    },
    {
        "pattern": [
            "* diarrhea * symptoms *",
            "* (symptoms|masabi) * diarrhea * ",
            "Ano ang mga palatandaan indikasyon na nagpapakita na mayroong diarrhea ang isang tao",
            "Ano ang mga palatandaan senyales at sintomas ng taong may diarrhea o nag tatae",
            "Ano ang mga senyales at sintomas ng isang taong mayroong diarrhea",
            "Ano ang mga sintomas na nararanasan ng isang tao kapag may diarrhea",
            "Ano nga ba ang diarrhea",
            "Paano mo malalaman masasabi kung mayroong diarrhea o nag tatae ang isang tao",
            "ano ang sintomas ng diarrhea",
            "ano ba ang sinasabing diarrhea",
            "paano ba malaman kung ako ay nagtatae",
            "sabihin o ibigay mo sakin ang listahan ng sintomas o senyales ng pagtatae"
        ],
        "response": [
            "Maraming sintomas ang pagtatae. Kadalasan kapag mayroon ka nito makakaramdam ka ng pananakit ng tiyan , bloating, dugo sa dumi, masakit na kabag o utot, pagkapagod, lagnat, panginginig, madalas na pagnanais na magbawas, malaking dami ng uhog ng dumi, pagduduwal, at patuloy na pagsusuka."
        ],
        "dimension": 1,
        "index": 11
    },
    {
        "pattern": [
            "* virus * trangkaso *",
            "Ano ang dahilan kung bakit ang virus ay nakakapagdulot ng influenza",
            "Ano ang epekto ng virus sa katawan na nagiging sanhi ng trangkaso",
            "Bakit Paano nagiging sanhi ng trangkaso ang virus sa katawan",
            "Bakit nakakaapekto ang virus sa katawan at nagiging sanhi ng influenza",
            "Paano bakit nakakapagdulot ng influenza ang virus sa katawan"
        ],
        "response": [
            "Ang mga virus ay nagdudulot ng trangkaso. Ang mga ito ay kumakalat kapag ang mga taong may trangkaso ay umuubo, bumahin o nagsasalita, nagpapadala ng mga droplet na may virus sa hangin at posibleng sa mga bibig o ilong ng mga taong nasa malapit."
        ],
        "dimension": 1,
        "index": 12
    },
    {
        "pattern": [
            "* kuha * trangkaso *",
            "Ano ang mga bagay paraan na maaaring magdulot pagkakahawa ng trangkaso",
            "Paano nakakapasa kumakalat ng trangkaso sa iba"
        ],
        "response": [
            "Maaari kang makakuha ng trangkaso kapag nalalanghap mo o nalalanghap ang hangin na inilabas ng taong bumahing o umuubo kahit kaunti lang. Ang mga virus na ito ay maaari ding maipasa sa pamamagitan ng paghawak sa mga bagay na nahawaan ng virus. Sa simpleng mga salita, maaari mo itong makuha kapag nadikit ka sa mga ibabaw, materyales, at damit na kontaminado ng dischages ng taong nahawahan. Ang mga pana-panahong pagbabago ay maaari ding magdulot ng trangkaso dahil humihina ang mga panlaban natin lalo na sa pagbaba ng temperatura."
        ],
        "dimension": 1,
        "index": 13
    },
    {
        "pattern": [
            "* kuha * trangkaso * ",
            "Maari bang kumalat ang trangkaso sa mga taong nakakasalamuha mo",
            "Maaring magdulot makahawa mahawa ng trangkaso sa ibang tao",
            "Nakukuha Nakakahawa ba ang trangkaso ",
            "Saan nagmumula nakukuha ang trangkaso"
        ],
        "response": [
            "Ang paglanghap ng hangin at ang pagkakaroon ng pisikal na paghawak sa mga bagay na nahawaan ng virus ay ang mga kilalang paraan ng pagkakaroon ng trangkaso. Palaging magsuot ng mask sa mataong lugar, maghugas ng kamay nang madalas, at gumamit ng hand sanitizer bilang pag-iingat."
        ],
        "dimension": 1,
        "index": 14
    },
    {
        "pattern": [
            "* pahinga * trangkaso *",
            "Ano ang epekto benepisyo ng pagpapahinga sa paggaling mula sa trangkaso",
            "Bakit mahalaga ang pagpapahinga sa paggaling mula sa trangkaso",
            "Bakit mahalagang magpahinga kapag may trangkaso",
            "Paano Bakit nakakatulong ang pagpapahinga sa paggaling mula sa trangkaso"
        ],
        "response": [
            "Dapat kang manatili sa bahay hanggang sa mawala ang iyong lagnat nang hindi bababa sa 24 na oras. Ang isang taong may trangkaso ay natural na gagaling sa loob ng 2 hanggang 7 araw. Sa pamamagitan ng pagpapahinga sa araw, ang iyong katawan ay maaaring maglaan ng mas maraming mapagkukunan sa paglaban sa virus. Bukod sa pagtulong sa iyong gumaling, ang pananatili sa bahay ay pinipigilan din ang pagkalat ng trangkaso sa ibang tao sa iyong komunidad o lugar ng trabaho."
        ],
        "dimension": 1,
        "index": 15
    },
    {
        "pattern": [
            "* inom * tubig * trangkaso *",
            "Ano ang epekto ng pag-inom ng tubig sa paggaling ng trangkaso",
            "Bakit mahalaga ang pag-inom ng tubig kapag may trangkaso",
            "Paano nakakatulong ang tubig sa pagpapagaling ng trangkaso"
        ],
        "response": [
            "Pinapayuhan ang sinumang nakakararanas ng trangkaso na dalasan ang pag inom ng tubig.Ang isang sintomas ng trangkaso ay isang mataas na lagnat, na maaaring humantong sa pagpapawis. Maaari ka ring dumaranas ng mga pagsusuka o pagtatae. Ang iyong katawan ay nangangailangan ng maraming likido upang palitan ang mga nawawalang likido, at higit pa upang labanan ang impeksiyon."
        ],
        "dimension": 1,
        "index": 16
    },
    {
        "pattern": [
            "* sino * gamot * trangkaso * ",
            "Kanino ka  dapat lumapit puwedeng humingi ng tulong kapag ikaw ay may trangkaso",
            "Sino Mayroon bang mga tao na makakatulong sa iyo kapag ikaw ay may trangkaso",
            "Sino ang mga dapat mong lapitan maaaring tumulong kapag ikaw ay may trangkaso",
            "Sino ang puwedeng mag-alaga tumulong sa iyo kapag ikaw ay may trangkaso"
        ],
        "response": [
            "Maaari mong alagaan ang iyong sarili. May mga over-the-counter na gamot na makakatulong sa pagpapabuti ng mga sintomas tulad ng lagnat, pananakit at ubo. Kinakailangan mong ding magpahinga upang gumaling. Dapat manatili lang sa bahay hanggang sa mawala ang iyong lagnat. Ugaliing uminom ng maraming tubig. Iwasan din ang mga nakakapagod na gawain. Kumain din ng masusustansyang pagkain. Gayunpaman, mas makakatulong sa iyo ang pagpapatingin sa doktor kung mas malala ang iyong pakiramdam. Maaari silang magreseta sa iyo ng partikular na gamot at direksyon."
        ],
        "dimension": 1,
        "index": 17
    },
    {
        "pattern": [
            "* gamutin * trangkaso * saan *",
            "* saan * gamutin * trangkaso *",
            "saan pwedeng magagamot ang trangkaso",
            "saan pwede mag punta pag ako may trangkaso",
            "asan ko ba pwede gamutin ang trangkaso",
            "puwede kang magpagaling sa bahay lamang pag may trangkaso",
            "Saan ka pupunta kung nais mong magpagamot ng trangkaso",
            "Saan puwedeng magpagamot ng trangkaso"
        ],
        "response": [
            "Maaari mo itong gawin iyong tahanan. Kapag malala ang kaso nito, kailangan mong magpatingin kaagad sa doktor lalo na kung kabilang ka sa mga high risk group"
        ],
        "dimension": 5,
        "index": 4
    },
    {
        "pattern": [
            "* gamot * trangkaso *",
            "* trangkaso * gamot*",
            "Ano ang mga hakbang dapat gawin kainin o inumin kapag may trangkaso",
            "Ano ang mga pamamaraan na makakatulong sa pagpapagaling mula sa trangkaso",
            "May mga gamot ba na pwedeng gamitin upang pagalingin ang trangkaso",
            "Mga dapat gawin para bumuti ang pakiramdam kapag may trangkaso",
            "Paano po ba paraan malunasan mabawasan ang trangkaso",
            "sabihin mo sakin paano ba dapat gamutin ang trangkaso",
            "ano ba ang mga ginagamit na gamot sa trangkaso",
            "paano gamutin ang trangkaso",
            "pano ginagamot ang trangkaso",
            "ano gamot sa trangkaso"
        ],
        "response": [
            "\n        Ang trangkaso , o karaniwang tinatawag na flu, ay isang impeksyon durlog ng virus na nakakaapekto sa paghinga o baga ng isang tao. Kaya dapat magpahinga at uminom ng mga likido upang maiwasan ang pagkaubos ng tubig sa katawan.\n\n        Mayroon ding mga over the counter na gamot na mabibili. Maaari kang uminom ng mga antihistamine upang mapawi ang mga nakakainis na sintomas gaya ng pagbabahing, pangangati, at pagkaka sipon. Minsan ay iniinom ang mga analgesic tulad ng acetaminophen o ibuprofen upang mabawasan ang lagnat at mapawi ang pananakit ng katawan. Gayundin, ang mga non-steroidal na anti-inflammatory na gamot. Kung may barado kang ilong, nakakatulong din ang mga decongestant dahil nakakatulong ito sa pagtanggal ng baradong ilong at pag-alis ng presyon sa iyong sinuses. Kung umuubo, ang mga antitussives naman ay nakakatulong sa pamamagitan ng ng pagluwag ng makapal na uhog. Sa wakas, ang lozenges ay maaaring pansamantalang mapawi ang mga sintomas tulad ng namamagang lalamunan, pangangati ng lalamunan, o ubo.\n\n        Ang mga malalang kaso ay maaaring kailanganin ang ospital. Ang pag-iwas sa mga bagay bagay na pwedeng makahawa sa trangkaso ay kinakailangan. Kaya ang pagkuha ng taunang bakuna laban sa trangkaso ay ang pinakamabisang paraan upang maprotektahan ang sarili mula sa pagkakasakit.\n        "
        ],
        "dimension": 1,
        "index": 18
    },
    {
        "pattern": [
            "* magpabakuna * trangkaso *",
            "Ano ang mga epekto benepisyo ng pagpabakuna laban sa trangkaso",
            "Bakit kailangan mahalaga magpabakuna laban sa trangkaso",
            "Paano nakakatulong magpapabakuna laban sa trangkaso"
        ],
        "response": [
            "Bagama't walang gamot na makakapigil sa trangkaso, ang pagpapabakuna makakatulong sa pagprotekta sa iyo upang maibsan ang mga panganib na dala nito. Partikular itong nakakatulong sa mga taong may ilang malalang kondisyon sa kalusugan (tulad ng mga kondisyon sa puso). Pinoprotektahan din nito ang mga buntis, mga bata at mga tao sa paligid mo."
        ],
        "dimension": 5,
        "index": 5
    },
    {
        "pattern": [
            "* (iwasan|huwag) * dikit * trangkaso *",
            "* lumayo * trangkaso trangkaso *",
            "Ano ang dahilan ng pag iwas sa matataong lugar o social distancing kung may trangkaso",
            "Bakit dapat tayong lumayo sa mga taong may trangkaso",
            "Paano maiiwasan iniiwasan ang trangkaso",
            "Paano nakakatulong ang pag iwas sa matataong lugar sa pagpigil ng pagkalat ng trangkaso",
            "Paano nakapagpapababa ng posibilidad ng pagkalat ng trangkaso ang social distancing",
            "Paano nakatutulong ang pag iwas sa mga taong may trangkaso sa pagpigil ng pagkalat nito"
        ],
        "response": [
            "Umiwas sa taong nakakaramdam ng sintomas ng trangkaso. Kung ikaw ang may sakit, panatilihin ang iyong distansya sa iba. Tandaan, dumistansya nang higit sa isang metro mula sa mga taong umuubo. Ilayo ang iyong sarili sa mga taong may sipon. Pinapayuhan ka ring umiwas sa mga matataong lugar dahil maaari kang mahawaan. Kailangan mong gawin ang mga bagay na ito upang maiwasan ang pagkalat pa ng virus."
        ],
        "dimension": 5,
        "index": 6
    },
    {
        "pattern": [
            "* takpan * (bunganga|ilong) * (trangkaso|ubo|bahing) *",
            "Anong dahilan kung bakit kailangan takpan ang bibig at ilong kapag bumabahing trangkaso",
            "Bakit importante ang pagtakip ng bibig at ilong upang maiwasan ang trangkaso",
            "Bakit mahalaga ang pagtakip takpan ng bibig at ilong kapag bumabahing trangkaso",
            "Paano maiiwasan ang pagkalat ng sakit sa pamamagitan ng pagtakip ng bibig at ilong kapag bumabahing",
            "Paano makatutulong ang pagtakip ng bibig at ilong sa pag iwas ng pagkalat ng trangkaso sa iba",
            "Paano nakakaiwas sa pagkalat ng trangkaso sa pamamagitan ng pagtakip ng bibig at ilong"
        ],
        "response": [
            "Takpan ang iyong bibig at ilong ng tissue kapag umuubo o bumabahing upang maiwasang magkasakit ang mga nasa paligid mo."
        ],
        "dimension": 5,
        "index": 7
    },
    {
        "pattern": [
            "* huwag * hawak * (mata|ilong|bunganga) *",
            "Ano ang dahilan kung bakit hindi dapat hawakan ang mata, ilong, o bibig kapag may trangkaso",
            "Ano ang maaring mangyari kapag hawak ng hawak sa mata, ilong, at bibig kapag may trangkaso",
            "Bakit bawal hawakan ang mata, ilong, at bibig kapag may trangkaso",
            "Bakit nakakatulong ang pag iwas sa paghawak sa mata, ilong, at bibig para maiwasan ang trangkaso",
            "Paano makakaapekto sa kalusugan ng tao ang paghawak sa mata, ilong, o bibig kapag may trangkaso",
            "Paano nakakalat ang virus ng trangkaso kapag hawak ng hawak sa mata, ilong, o bibig",
            "Paano nakakapagdulot ng panganib ang paghawak sa mata, ilong, o bibig kapag may trangkaso"
        ],
        "response": [
            "Ang mga mikrobyo ay madalas na kumakalat kapag ang isang tao ay nakahawak ng isang bagay na kontaminado ng nito at pagkatapos ay hinawakan ang kanyang mga mata, ilong, o bibig"
        ],
        "dimension": 5,
        "index": 8
    },
    {
        "pattern": [
            "* (gamit|suot|lagay) * mask * ",
            "Ano ang layunin ng pagsusuot ng face mask sa panahon ng trangkaso",
            "Bakit dapat gumamit ng face mask para maiwasan ang pagkakahawa sa trangkaso",
            "Bakit importante na maglagay pagsusuot ng face mask kapag may trangkaso",
            "Bakit kailangan maglagay ng face mask para makaiwas sa trangkaso",
            "Bakit mahalagang magsuot ng face mask kapag may trangkaso",
            "Paano nakakatulong nakakaprotekta ang pagsusuot ng face mask sa pagkalat panahon ng trangkaso"
        ],
        "response": [
            "Ang pagsusuot ng face mask nakakatulong na mapigilan ang pagkahawa sa impkesyong dahil sa mga virus na maaaring makuha sa hangin o mapunta sa anumang bagay na hinawakan o ginagamit ng isang taong may trangkaso."
        ],
        "dimension": 5,
        "index": 9
    },
    {
        "pattern": [
            "* iwas * trangkaso * ",
            "Ano ang mga dapat gawin para maiwasan ang pagkakasakit ng trangkaso",
            "Anong mga paraan para maiwasan ang trangkaso",
            "Mga tips paraan para hindi magka trangkaso",
            "Paano maiiwasan ang mga sakit tulad ng trangkaso",
            "Paano maiiwasan ang pagkakasakit pagkakaroon pagkahawa sa trangkaso"
        ],
        "response": [
            "Ugaliing magpabakuna para maka iwas sa trangkaso. Umiwas ka sa taong nakakaramdam ng mga sintomas ng trangkaso. Kung ikaw ay may sakit, mas mabuting manatili na muna sa bahay at magpahinga upang maiwasan ang pagkalat ng virus sa iba. \n        \n        Laging takpan ang iyong bibig at ilong, upang mabawasan ang panganib na maipasa ang virus sa iba. Ang pagsusuot ng face mask ay makakatulong sa iyo kung kinakailangan mo talagang lumabas ng bahay. \n        \n        Panatilihin din ang pagiging malinis. Halimbawa, madalas na linisin ang iyong mga kamay at iwasang hawakan ang iyong mga mata, ilong o bibig upang maiwasan ang anumang virus na pumasok sa iyong katawan."
        ],
        "dimension": 1,
        "index": 19
    },
    {
        "pattern": [
            "* treat*  pagkain * trangkaso * ",
            "* pagkain * treat  * trangkaso *",
            "* trangkaso * pagkain * treat*  ",
            "sabihin mo sa akin kung anong mga pagkain ba ang maaring kainin pag may trangkaso"
        ],
        "response": [
            "Mayroong ilang mga pagkain na maaaring makatulong sa iyo na gumaling nang mas mabilis. Halimbawa, ang pag kain o inom ng mga sabaw at sopas na gawa sa manok, baka, at gulay ay maaaring maiwasan ang dehydration at ang init nito ay maaaring mapawi ang barado ilong at mapawi ang pananakit ng lalamunan. \n        \n        Maaari ka ring kumain ng bawang dahil maaari itong makapagpagaling ng sakit at mabawasan ang serverity ng mga sintomas. Ang mga pagkaing naglalaman ng mga probiotics tulad ng yogurt ay maaari ding makatulong sa pamamagitan ng pagpaparami ng magandang bacteria sa bituka na sumusuporta sa iyong immune system. \n        \n        Ang pagkain ng mga prutas at gulay na naglalaman ng bitamina c ay maaari ding makatulong. Kabilang dito ang mga paminta, dalandan, citrus, lemon, ubas at mga maitim na madahong gulay. Maaari ka ring kumain ng broccoli. Higit pa rito, ang oatmeal ay naglalaman ng mga nutrients na nagpapalakas ng immune tulad ng copper, iron, selenium, zinc fiber at protien. \n        \n        Maaari ka ring magdagdag ng mga pampalasa tulad ng luya at kalawag sa iyong pagkain. Panghuli, palaging uminom ng mga likido tulad ng tubig upang mapanatili kang hydrated."
        ],
        "dimension": 4,
        "index": 6
    },
    {
        "pattern": [
            "* influenza_foods_not_allowed_greasy_foods * ",
            "* influenza_foods_not_allowed_greasy_foods * influenza *",
            "bakit umiwas huwag kumain uminom ng mga mga pinirito ng influenza",
            "bakit umiwas huwag kumain uminom ng influenza_foods_not_allowed_greasy_foods kapag may influenza"
        ],
        "response": [
            "Nararapat na iwasan ang mga pagkaing matataba o mamaintikain dahil mahirap itong i tunawin ng iyong gastrointestinal system o bituka. Kaya ang mga pagkaing mataas sa saturated fat ay dapat na iwasan o limitahan, gayundin ang pritong, mamantika na pagkain.\n        \n        Sa halip, kumain o inom ng mga sabaw at sopas na gawa sa manok, baka, at gulay. Maaari ka ring kumain ng bawang dahil maaari itong makapagpagaling ng sakit at mabawasan ang serverity ng mga sintomas.\n        \n        Kung kinakailangan mo ng gamot, pwede kang uminom ng antihistamine, analgesic tulad ng acetaminophen o ibuprofen upang mabawasan ang lagnat at mapawi ang pananakit ng katawa, at decongestants kung hirap kang huminga dahil sa baradong ilong. Kung ika'y umuubo, pwede kang kumain ng antitussives. At pag makati o masakit ang lalamunan pwede kang uminom ng lozenges.\n        \n        "
        ],
        "dimension": 4,
        "index": 7
    },
    {
        "pattern": [
            "* influenza_foods_not_allowed_sugary_foods * ",
            "* influenza_foods_not_allowed_sugary_foods * influenza *",
            "bakit umiwas huwag kumain uminom ng mga matamis matatamis na mga pagkain kapag may nakakaramdam ng influenza",
            "bakit umiwas huwag kumain uminom ng influenza_foods_not_allowed_sugary_foods kapag may influenza"
        ],
        "response": [
            "Ang mga matatamis na pagkain ay pwedeng magpahina sa immune system na pangunahing lumalaban sa flu. Ang pagkain nito ay nag dudulot ng pamamaga sa katawan na syang pwedeng magpapalala sa masakit na lalamunan at ubo. At saka, ang mga matatamis na pagkain ay nag papataas ng blood sugar na pwedeng ika fatigue or pagod ng tao. Pwede din nitong mapalala ang ibang sintomas ng trangkaso.\n        \n        Sa halip, kumain o inom ng mga sabaw at sopas na gawa sa manok, baka, at gulay. Maaari ka ring kumain ng bawang dahil maaari itong makapagpagaling ng sakit at mabawasan ang serverity ng mga sintomas.\n        \n        Kung kinakailangan mo ng gamot, pwede kang uminom ng antihistamine, analgesic tulad ng acetaminophen o ibuprofen upang mabawasan ang lagnat at mapawi ang pananakit ng katawa, at decongestants kung hirap kang huminga dahil sa baradong ilong. Kung ika'y umuubo, pwede kang kumain ng antitussives. At pag makati o masakit ang lalamunan pwede kang uminom ng lozenges.\n        "
        ],
        "dimension": 4,
        "index": 8
    },
    {
        "pattern": [
            "* pagkain * iwasan * trangkaso *",
            "* pagkain * ( hindi * (inom|kain) ) * trangkaso *",
            "* trangkaso * (hindi * (inom|kain) ) * pagkain *",
            "* trangkaso * (iwasan) * pagkain *",
            "Ano ang mga bawal kainin dapat iwasan na pagkain kapag may trangkaso",
            "Ano ang mga hindi dapat kainin inumin o iwasan kapag may trangkaso",
            "Anong mga pagkain at inumin ang dapat iwasan para hindi lumala ang trangkaso",
            "May mga pagkain at inumin bang dapat iwasan habang nagpapagaling sa trangkaso"
        ],
        "response": [
            "Kung sa tingin mo ay mayroon kang trangkaso, kailangan mong umiwas sa mga inuming may caffeine, alkohol, mamantika na pagkain, mahirap matunaw na butil, at matamis na pagkain o inumin. Sa halip, subukang uminom ng mga sopas o sabaw para mapalitan ang likido ng katawan at sodium na maaaring mawala sa iyo. Subukan din kumain ng puting tinapay, patatas, puting bigas, saging, sarsa ng mansanas, walang taba na karne tulad ng manok at isda.\n        \n        Sa halip, kumain o inom ng mga sabaw at sopas na gawa sa manok, baka, at gulay. Maaari ka ring kumain ng bawang dahil maaari itong makapagpagaling ng sakit at mabawasan ang serverity ng mga sintomas.\n        \n        Kung kinakailangan mo ng gamot, pwede kang uminom ng antihistamine, analgesic tulad ng acetaminophen o ibuprofen upang mabawasan ang lagnat at mapawi ang pananakit ng katawa, at decongestants kung hirap kang huminga dahil sa baradong ilong. Kung ika'y umuubo, pwede kang kumain ng antitussives. At pag makati o masakit ang lalamunan pwede kang uminom ng lozenges.\n        "
        ],
        "dimension": 4,
        "index": 9
    },
    {
        "pattern": [
            "* (kain|inom) * (influenza_foods_not_allowed|influenza_foods_not_allowed_caffeinated_drinks|influenza_foods_not_allowed_greasy_foods|influenza_foods_not_allowed_hard_grains|\n        influenza_foods_not_allowed_sugary_foods) * trangkaso *"
        ],
        "response": [
            "May mga pagkain na kailangan mong mag-ingat. Kung ikaw ay may trangkaso, subukang kumain ng sabaw, mga pagkaing mayaman sa probiotic tulad ng mga fermented, sabaw at murang pagkain tulad ng puting tinapay, patatas, puting bigas, saging, sarsa ng mansanas, walang taba na karne tulad ng manok at isda."
        ],
        "dimension": 4,
        "index": 10
    },
    {
        "pattern": [
            "* problema * sino * trangkaso *",
            "* problema * trangkaso * sino *",
            "* sino * problema * trangkaso *",
            "* trangkaso * problema * sino *",
            "* trangkaso * sino * problema *",
            "Sino ang dapat magingat dahil maari na magkaroon ng malubhang trangkaso",
            "Sino ang kadalasang nakakaranas ng mas malalang mga trangkaso",
            "Sino ang mas dapat mag ingat dahil mas delikado ang kanilang kalagayan kapag sila ay nagka trangkaso",
            "Sino ang may mataas na panganib na magkaroon ng malubhang komplikasyon dahil sa trangkaso",
            "Sino ang mayroong mas mataas na panganib ng malubhang trangkaso"
        ],
        "response": [
            "May ilang grupo ng mga tao na nasa panganib na magkaroon ng mga komplikasyon mula sa trangkaso. Ang mga taong anim na buwan at matanda, mga taong may malalang kondisyong medikal tulad ng hika, sakit sa puso, diabetes, bato, sakit sa atay, at malalang sakit sa baga, mga taong may mahinang immune system, at mga taong sobrang laki ay kailangang mag-ingat sa pagkakaroon ng ang sakit na ito."
        ],
        "dimension": 1,
        "index": 20
    },
    {
        "pattern": [
            "* dose * antihistamine *",
            "* hakbang * antihistamine *",
            "* (paano|ano) * (gamitin|inumin|kainin) * antihistamine *",
            "* (paano|ano) * antihistamine * (gamitin|inumin|kainin) *",
            "Aling paraan ang tama sa paggamit ng antihistamines at ano ang tamang dosis para sa akin",
            "Ano paano ang tamang dosis ng antihistamines at paano ito dapat gamitin",
            "Anong paano tamang paraan sa pag inom ng antihistamines at paano malalaman ang tamang dosis",
            "Kailan dapat inumin ang antihistamines at paano ito dapat gamitin nang tama",
            "Paano dapat gamitin ang antihistamines nang tama? Anong dosis ang dapat sundin",
            "Paano malalaman ang tamang dosis ng antihistamines at kailan dapat ito inumin",
            "Saan ako makakahanap ng impormasyon tungkol sa tamang dosis at paggamit ng antihistamines",
            "ano paano ang dose ng antihistamines"
        ],
        "response": [
            "Ang mga antihistamine tulad ng Citerizine at Benadryl ay maaaring inumin kasama ng pagkain o isang baso ng tubig o gatas upang mabawasan ang pangangati ng tiyan kung kinakailangan. Para sa cetirizine, narito kung paano mo ito inumin. Ang 6 na taong gulang at mas matanda ay maaaring magkaroon ng 5 hanggang 10 miligrams isang beses sa isang araw. Ang mga 4-6 taong gulang ay maaaring uminom ng maximum na 5mg isang beses o 2.5mg dalawang beses sa isang araw. Ang mga mas bata pa rito (4 sa ibaba) ay hindi dapat uminom ng gamot na ito.\n        \n        Bagama't ipinakita ko sa iyo ang ilang impormasyon kung paano uminom ng mga antihistamines, mas mainam na humingi ka ng tulong sa mga doktor. PWede sila mag reseta naaangkop na gamot para sa iyong kondisyon. "
        ],
        "dimension": 7,
        "index": 18
    },
    {
        "pattern": [
            "* antihistamine *",
            "Ano ang ipaliwanag kahulugan ibig sabihin ng antihistamine at para saan ito"
        ],
        "response": [
            "Ang mga antihistamine tulad ng Citerizine at Benadryl ay ginagamit upang mapawi o maiwasan ang mga sintomas ng hay fever at iba pang uri ng allergy.Ang mga antihistamine ay may iba't ibang anyo. Pwede ito maging mga likido, lotion, syrup, gel, eyedrops, tablet, kapsula, cream, at suppositories. Gumagana ang mga ito sa pamamagitan ng pagpigil sa mga epekto ng histamine, na ginawa ng katawan bilang reaksyon tuwing may sakit. Ang histamine ay maaaring maging sanhi ng pangangati, pagbahing, sipon, at matubig na mga mata. Gayundin, sa ilang mga tao ay maaaring isara ng histamine ang mga bronchial tubes (mga daanan ng hangin ng mga baga) at nagpapahirap sa paghinga "
        ],
        "dimension": 7,
        "index": 19
    },
    {
        "pattern": [
            "* gamit * antihistamine *",
            "Para saan at paano maaaring gatimin ang antihistamines",
            "anong gamit ng antihistamines",
            "saan paano ginagamit ang antihistamines"
        ],
        "response": [
            "\n       Ang mga antihistamines tulad ng Citerizine at Benadryl ay mga gamot na karaniwang ginagamit para sa mga allergies. Itong mga gamot na to ay tumulong sa mga sakit na nagdudulog sa maraming histamine na isang kemikal na ginagawa ng katawan ng tao bilang immune response. Kaya ito ay madalas na ginagamit din sa ibang sakit tulad ng pananakit ng tyan, sipon, anxiety at iba pa. Ang gamot na ito ay pwede mabili bilang likido, lotion, syrup, gel, eyedrops, tablet, kapsula, cream, at suppositories. "
        ],
        "dimension": 7,
        "index": 20
    },
    {
        "pattern": [
            "* antihistamine * gana *",
            "* paano * gana * antihistamine * ",
            "Paano ba gumagana nagpapagaling ang antihistamines"
        ],
        "response": [
            "Ang mga antihistamine ay hindi karaniwang ginagamit upang gamutin ang trangkaso.  Ang mga antihistamine ay ginagamit upang mapawi ang ilan sa mga sintomas ng allergy, tulad ng pagbahing, runny nose, at pangangati, ngunit hindi ito epektibo laban sa flu virus. Gumagana ang mga gamot na ito sa pamamagitan ng paghihinto sa mga histamine na inilalabas ng katawan pag nagkaka-allergy. Bukod pa rito, maaaring gamitin ang iba pang mga gamot tulad ng mga pain reliever at pampababa ng lagnat ay maari ding gamitin upang malunasan ang iba pang mga sintomas.\n        "
        ],
        "dimension": 7,
        "index": 21
    },
    {
        "pattern": [
            "* ( huwag * (kain|inom|gamit) | iwas ) * antihistamine *",
            "Kailan hindi dapat uminom ng antihistamines",
            "Paano malalaman kung hindi dapat uminom ng antihistamines",
            "bakit iwasan hindi uminom kainin ng antihistamines"
        ],
        "response": [
            "Karamihan sa mga tao ay maaaring ligtas na uminom ng mga antihistamine. Gayunpaman, ang mga taong buntis, nagpapasuso, bata, umiinom ng iba pang mga gamot, may pinagbabatayan na mga kondisyon tulad ng sakit sa puso, sakit sa atay, sakit sa bato o epilepsy ay kinakailangang maging maingat kapag umiinom nito."
        ],
        "dimension": 7,
        "index": 22
    },
    {
        "pattern": [
            "* effect * antihistamine * ",
            "* hindi * maganda * epekto * antihistamine *",
            "Ano ang mga posibleng hindi magandang side effects ng pag kain pag-inom pag gamit ng antihistamines",
            "Mayroon bang hindi magandang o masamang epekto sa katawan ang antihistamines",
            "Nakakapagdulot ba ng side effects ang antihistamines"
        ],
        "response": [
            "Ang mga antihistamine ay maaaring magdulot ng mga side effect. Ito ay maaaring mag-iba depende sa gamot na kinuha. Gayunpaman, ang mga antihistamine ay maaaring magdulot sa iyo ng antok, pagkahilo, tuyong bibig, malabo ang paningin, paninigas ng dumi, at kahirapan sa pag-ihi. Kung mayroon kang iniindang  kondisyong medikal o umiinom ng iba pang mga gamot, mahalagang magtanong muna sa doktor bago gamitin ito. \n        "
        ],
        "dimension": 7,
        "index": 23
    },
    {
        "pattern": [
            "* tips * antihistamine *",
            "Ano ang dapat kong malaman o mga tips tungkol sa paggamit ng antihistamines",
            "Ano ang mga dapat isaalang-alang o mga tips bago gamitin ang antihistamines",
            "Ano ang mga importanteng bagay o mga tips na dapat kong malaman tungkol sa antihistamines",
            "ano ang mga tips sa pagkain o inom ng antihistamines"
        ],
        "response": [
            "Kapag umiinom ng gamot na ito, subukang umiwas sa mga alak, sedatives, at tranquilizers, dahil sa mas mataas na panganib ng antok. Maaari itong maging sanhi ng depresyon ng Central nervous system. Kaya iwasan ang mga aktibidad na nangangailangan ng mental alertness. Mag-ingat kapag ang pasyente ay may kapansanan sa atay o bato. Pareho sa mga matatanda dahil mas sensitibo sila sa masamang epekto.\n        "
        ],
        "dimension": 7,
        "index": 24
    },
    {
        "pattern": [
            "* alternatibo * antihistamine *",
            "Ano ang mga alternatibo herbal na gamot na pwedeng gamitin maliban sa antihistamines",
            "ano ang mga pwedeng pamalit sa antihistamines",
            "sabihin bigay listahan ng iba pang alterantibong natural na herbal na gamot bukod sa antihistamine",
            "Ano ang mga natural herbal na gamot para mabawasan ang allergy",
            "Ano pa ang ibang paraan sa paggamot ng allergy maliban sa mga decongestant",
            "Mayroon bang alternative herbal na gamot na pwede kong gamitin para magamot ang allergy"
        ],
        "response": [
            "Subukan mong kumain ng luya. Ayon sa Sinus and Allergy Wellness Center, ito ay isang natural na histamine, potent antiviral agent at isang immute booster. Ang luya ay isang ligtas at lubos na epektibong halamang gamot na nagpapaginhawa sa sistema ng pagtunaw at nagpapabuti sa sirkulasyon. Maaari kang gumawa ng ilang tsaa ng luya upang maibsan ang pagsisikip ng ilong at pananakit ng ulo. Habang humihigop ka ng iyong tsaa, langhapin ang singaw na lumalabas sa iyong tasa. Gayundin, subukang gamitin ito kasama ng iba pang mga halamang gamot, tulad ng turmeric, na isa pang malakas na natural na manggagamot."
        ],
        "dimension": 7,
        "index": 25
    },
    {
        "pattern": [
            "* (hakbang|dose) * analgesics *",
            "* paano * (inumin|gamitin|kainin) * analgesics *",
            "* paano * analgesics * (inumin|gamitin|kainin) *",
            "Ano ang tamang dosage dosis o paraan ng pag-inom paggamit ng mga analgesics",
            "Paano ba dapat inumin o kainin ang analgesics nang maayos",
            "Paano dapat gamitin ang mga analgesics",
            "Paano maiiwasan ang sobrang dosage sa paggamit ng mga analgesics",
            "Paano masigurado malalaman ang tamang dose ng mga analgesics"
        ],
        "response": [
            "Para sa ibuprofen an (NSAID), 400mg ang dosage kada inuman at 1200 sa butong araw.\n\n        Para sa naproxen (NSAID), maaari kang uminom ng 500mg kada inuman at 750 sa butong araw.\n        \n        Para sa acetaminophen (paracetamol) maaari kang uminom ng 1000mg tuwing iinom ka at hanggang 4000mg para sa buong araw. \n        \n        Para sa aspirin, na kilala rin bilang acetylsalicylic acid, maaari kang uminom ng hanggang 1000mg na may maximum na pang-araw-araw na dosis. At 3000mg naman para sa mga taong wala pang 65 at 200mg para sa mga taong higit sa 65 taong gulang.\n     \n        Tandaan na ang mga nabangit na paraan ng pag inom nitong gamot ay pawang mga halibawa lamang. \n        "
        ],
        "dimension": 7,
        "index": 26
    },
    {
        "pattern": [
            "* analgesics *",
            "Ano ang ipaliwanag kahulugan ibig sabihin ng analgesics at para saan ito"
        ],
        "response": [
            "\n        Ang mga analgesics tulad ng ibuprofen, acetaminophen, aspirin, paracetamol, biogesic, at calpol ay kay kilala din bilang pain killers. Ito ay mga gamot na ginagamit para maibsan ang mga masasakit na bahagi ng katawan tulad ng sakit as ulo at pinsala sa katawan. Ang mga anti-inflammatory analagesics ay tumutulong sa mga pamamaga sa katawan, habang ang mga opioi analgesics naman ay sinasalin kung paano nararamadaman ang sakit sa utak. Tandaang maraming anyo ang analgesics tulad ng mga films, likido, mga patch ng pang-ilong, mga tabletas, mga tablet, mga kapsula, at pinaghalong powder. "
        ],
        "dimension": 7,
        "index": 27
    },
    {
        "pattern": [
            "* gamit * analgesics *",
            "Ano ang mga sakit na ginagamot ng analgesics",
            "Paano nakakatulong ang analgesics sa mga pasyente o may sakit",
            "saan paano ginagamit ang analgesics"
        ],
        "response": [
            "\n        Ang mga analgesics tulad ng ibuprofen, acetaminophen, aspirin, paracetamol, biogesic, at calpol ay nakakapagpabuti sa mga hindi masyado malalang mga masakit na bahagi ng katawan. Ang pagiging epektibo nito ay naka depende parin sa lala ng kondisyon at sa dosage na ininom ng tao. Ang mga gamot din na ito ay nabibili kahit walang riseta. Maari itong igamot sa mga hindi ganoon ka lalang sakit. Ngunit , hindi nararapat na inumin ito ng sunod sunod na araw. Tandaang maraming anyo ang analgesics tulad ng mga films, likido, mga patch ng pang-ilong, mga tabletas, mga tablet, mga kapsula, at pinaghalong powder."
        ],
        "dimension": 7,
        "index": 28
    },
    {
        "pattern": [
            "* analgesics * treat *",
            "* treat * analgesics *",
            "Paano ginagamit gumagana nakakatulong ang analgesics "
        ],
        "response": [
            "Ang analgesics, o mga pain reliever, ay maaaring makatulong sa pagpapagaan ng karamdaman at lagnat na nauugnay sa trangkaso. Gumagana ang mga ito sa pamamagitan ng pagharang sa paggawa ng ilang mga kemikal sa katawan na nagdudulot ng pananakit at pamamaga. Ang mga karaniwang analgesics na ginagamit para sa trangkaso ay kinabibilangan ng acetaminophen, ibuprofen, at aspirin. Gayunpaman, mahalagang sundin ang mga inirerekomendang dosis at pag-iingat, dahil ang ilang analgesics ay maaaring hindi angkop para sa ilang partikular na indibidwal o maaaring magkaroon ng masamang epekto kapag ginamit nang hindi wasto.\n        "
        ],
        "dimension": 7,
        "index": 29
    },
    {
        "pattern": [
            "* ( huwag * (kain|inom|gamit) | iwas) * analgesics *",
            "Paano malalaman kung hindi dapat kumain ng analgesics",
            "bakit iwasan hindi uminom kainin ang analgesics"
        ],
        "response": [
            "Ayon sa WebMD, hindi mo dapat inumin ang gamot na ito para sa self-treatment ng sakit nang mas mahaba kaysa sa 10 araw. Hindi mo dapat gamitin ang gamot na ito upang gamutin ang sarili ng lagnat na tumatagal ng higit sa 3 araw. Sa mga ganitong kaso, kumunsulta sa doktor dahil maaaring mas malubha ang kondisyon mo"
        ],
        "dimension": 7,
        "index": 30
    },
    {
        "pattern": [
            "* effect * analgesics * ",
            "* hindi * maganda * epekto * analgesics *",
            "Ano ang mga posibleng hindi magandang side effects ng pag kain pag-inom pag gamit ng analgesics",
            "Mayroon bang hindi magandang o masamang epekto sa katawan ang analgesics",
            "Nakakapagdulot ba ng side effects ang analgesics"
        ],
        "response": [
            "Ang mga anti-inflammatory analgesics ay karaniwang ligtas. Ngunit maaari silang magdulot ng mga side effect at komplikasyon, kung madalas mong gamitin ang mga ito, nang masyadong mahaba o sa napakalaking dosis: Pinsala sa lamang loob tulad ng atay o bato, pagtatae o paninigas ng dumi, mga problema sa puso, hypersensitivity, pagduduwal, sakit ng tiyan,  at ulser sa tiyan"
        ],
        "dimension": 7,
        "index": 31
    },
    {
        "pattern": [
            "* tips * analgesics *",
            "Ano ang mga dapat tandaan o mga tips sa paggamit ng analgesics",
            "Mayroon bang mga tips sa tamang paggamit ng analgesics",
            "Ano ang mga dapat gawin bago gamitin ang analgesics",
            "ano ang mga tips sa pagkain o inom ng analgesics"
        ],
        "response": [
            "Uminom ng isang buong baso ng tubig (8 ounces/240 mililitro) kasama nito. Huwag humiga nang hindi bababa sa 10 minuto pagkatapos mong inumin ang gamot na ito. Kung sumakit ang tiyan habang iniinom mo ang gamot na ito, maaari mo itong inumin kasama ng pagkain o gatas."
        ],
        "dimension": 7,
        "index": 32
    },
    {
        "pattern": [
            "* alternatibo * analgesics *",
            "Ano ang mga alternatibo herbal na gamot na pwedeng gamitin maliban sa analgesics",
            "ano ang mga pwedeng pamalit sa analgesics",
            "sabihin bigay listahan ng iba pang alterantibong natural na herbal na gamot bukod sa analgesics",
            "Ano ang mga natural herbal na gamot para mabawasan ang masakit na katawan",
            "Ano pa ang ibang paraan sa paggamot ng masakit na katawan maliban sa mga analgesics",
            "Mayroon bang alternative herbal na gamot na pwede kong gamitin para magamot ang masakit na katawan"
        ],
        "response": [
            "Ang Philippine Institute of Traditional and Alternative Healthcare ay nagpahiwatig na maaari mong Ampalaya, Yerba Buena, ulasimang bato o pansit-pansitan, at bayabas ay may analagesic effect."
        ],
        "dimension": 7,
        "index": 33
    },
    {
        "pattern": [
            "* dose * decongestant *",
            "* hakbang * decongestant *",
            "* paano * (gamitin|inumin|kainin) * decongestant *",
            "* paano * decongestant * (gamitin|inumin|kainin)  *",
            "Ano ang tamang dose dosage paraan ng paggamit ng decongestants",
            "Gaano kadalas dapat uminom at gaano karami ang dapat na decongestants na inumin",
            "Ilabas ang tamang dose para sa decongestants.",
            "Paano ko dapat take kainin inumin gamitin ng tama ang decongestants"
        ],
        "response": [
            "Ang karaniwang dosis ay depende sa gamot na iyong iinumin. Para sa Pseudoephedrine (sudafed) gayunpaman narito ang ilan sa mga rekomendasyon. \n        \n        Ang karaniwang dosis ng pseudoephedrine ay 60mg tablets o bilang isang likidong naglalaman ng 30mg sa 5ml.\n\n        Ang mga matatanda at bata na may edad 12 hanggang 17 taon ay pwede uminom ng isang 60mg tablet o dalawang 5ml na kutsara (10ml) ng likido hanggang 4 na beses sa isang araw.\n        \n        Ang mga batang may edad 6 hanggang 11 taon ay pwedeng uminom ng kalahating tableta (30mg) o isang 5ml na kutsara ng likido hanggang 4 na beses sa isang araw.\n        \n        Tandaan na ang mga nabangit na paraan ng pag inom nitong gamot ay pawang mga halibawa lamang. \n        "
        ],
        "dimension": 7,
        "index": 34
    },
    {
        "pattern": [
            "* decongestant *",
            "Ano ang ipaliwanag kahulugan ibig sabihin ng decongestant at para saan ito"
        ],
        "response": [
            "Ang mga decongestant tulad ng phenylephrine, decolgen, o sudafed ay mga gamot na nagpapaginhawa sa pamamagitan ng pagbabawas ng pamamaga, pamamaga at pagbuo ng mucus sa loob ng mga daanan ng ilong o mata. Wala silang ibang epekto sa mga sintomas tulad ng runny nose o pagbahin. Ang mga gamot na ito ay mabibili bilang patak sa ilong, patak sa mata, o di kaya mga tablet, kapsula, at syrup."
        ],
        "dimension": 7,
        "index": 35
    },
    {
        "pattern": [
            "* gamit * decongestant *",
            "Ano ang mga gamot na decongestants at saan ito ginagamit",
            "saan paano Kailan ginagamit ang decongestants"
        ],
        "response": [
            "\n        Ang mga decongestants tulad ng phenylephrine, decolgen, o sudafed ay mga gamot na tumutulog magpaginhawa ng baradong ilong. Ang pagbara nito na nararamdaman kapag may flu ay dahil sa virus na nag dudulot ng flu, sinusitis o allergy.Ang mga gamot na ito ay mabibili bilang patak sa ilong, patak sa mata, o di kaya mga tablet, kapsula, at syrup."
        ],
        "dimension": 7,
        "index": 36
    },
    {
        "pattern": [
            "* gana * decongestant *",
            "* decongestant * (gana|treat) *",
            "Ano ang ginagawa ng mga decongestants",
            "Paano ba nagpapababa ng pamamaga ang mga decongestants",
            "Paano nakakatulong gumagana ang mga decongestants sa pagpapagaling"
        ],
        "response": [
            "Gumagana ang mga decongestant sa pamamagitan ng pagpapaliit ng mga daluyan ng dugo sa iyong ilong. Ang namamagang tissue sa loob ng ilong ay lumiliit, at mas madaling dumaan ang hangin."
        ],
        "dimension": 7,
        "index": 37
    },
    {
        "pattern": [
            "* ( huwag * (kain|inom|gamit) | iwas) * decongestant *",
            "Kailan hindi dapat gumamit ng mga decongestants",
            "Saan Paano malalaman kung  hindi dapat gamitin ang mga decongestants",
            "bakit iwasan hindi kainin uminom ng decongestants"
        ],
        "response": [
            "Huwag uminom ng mga decongestant kung mayroon kang mataas na presyon ng dugo na hindi nakokontrol. Ang pag-inom ng mga decongestant ay maaaring magpataan ng iyong presyon ng dugo kahit na ito ay kontrolado o halos normal. Maaaring kailanganin mong maghanap ng alternatibo sa mga decongestant. Huwag magbigay ng mga decongestant sa mga batang wala pang 6 taong gulang."
        ],
        "dimension": 7,
        "index": 38
    },
    {
        "pattern": [
            "* effect * decongestant * ",
            "* hindi * maganda * epekto * decongestant *",
            "Ano ang mga posibleng hindi magandang side effects ng pag kain pag-inom pag gamit ng decongestant",
            "Mayroon bang hindi magandang o masamang epekto sa katawan ang decongestant",
            "Nakakapagdulot ba ng nakakahamak side effects adverse reaction ang decongestant"
        ],
        "response": [
            "Ang mga decongestant ay maaaring magka side effect. Maaari silang pansamantalang magdulot ng nerbiyos, pagkahilo, at mga problema sa pagtulog. Maaari silang maging sanhi ng palpitations ng puso (pakiramdam na mabilis na pagtibog ng iyong puso) o mas mataas na presyon ng dugo"
        ],
        "dimension": 7,
        "index": 39
    },
    {
        "pattern": [
            "* tips * decongestant *",
            "Ano ang mga dapat kong isaalang-alang sa paggamit ng decongestants",
            "Mayroon ba akong dapat malaman bago kumain ng decongestants",
            "Mayroon bang mga bagay na hindi dapat gawin habang naka-decongestants",
            "ano ang mga tips sa pagkain o inom ng decongestants"
        ],
        "response": [
            "Ang mga decongestant ay maaaring inumin upang makatulong na mapawi ang kasikipan na nakakaapekto sa ilong, sinuses, at mata o direktang i-spray sa ilong o itanim sa mata para sa mas lokal na epekto."
        ],
        "dimension": 7,
        "index": 40
    },
    {
        "pattern": [
            "* alternatibo * decongestant *",
            "Ano ang mga alternatibo herbal na gamot na pwedeng gamitin maliban sa decongestant",
            "ano ang mga pwedeng pamalit sa decongestant",
            "sabihin bigay listahan ng iba pang alterantibong natural na herbal na gamot bukod sa decongestant",
            "Ano ang mga natural herbal na gamot para mabawasan ang sipon",
            "Ano pa ang ibang paraan sa paggamot ng sipon maliban sa mga decongestant",
            "Mayroon bang alternative herbal na gamot na pwede kong gamitin para magamot ang sipon"
        ],
        "response": [
            "Available ang mga alternatibo sa oral decongestant. Sa larangan ng droga, ang mga antihistamine tulad ng diphenhydramine (Benadryl), chlorpheniramine (Chlor-Trimeton), cetirizine (Zyrtec), at loratadine (Claritin) ay makakatulong sa baradong ilong na ligtas para sa pandinig"
        ],
        "dimension": 7,
        "index": 41
    },
    {
        "pattern": [
            "* dose * expectorant*",
            "* hakbang * expectorant*",
            "* paano * (kainin|gamitin|inumin) * expectorant*",
            "* paano * expectorant * (kainin|gamitin|inumin)  *",
            "Paano ba tamang pag kain inom gamitin o dose ng mga expectorants",
            "Paano dapat iinumin gamitin inumin ang mga expectorants",
            "Paano ko malalaman kung tamang ang dose ng expectorants na gagamitin ko",
            "Paano kung hindi ako sigurado sa tamang dosage ng expectorants na gagamitin ko",
            "ano ang tamang paraan sa pag inom gamit kainin sa mga expectorants"
        ],
        "response": [
            "\n        Ang pag inom ng expectorants ay naka depedende sa gamot, tanda, at bigat ng katawan ng isa tao. Ang mga susunod kong banggitin ay ilan laman sa mga halimbawa kung paano ito.\n\n        Ang mga matatanda ay maaaring tumagal ng 200 hanggang 400 milligrams (mg) bawat apat na oras.\n\n        Ang mga batang 6 hanggang 12 taong gulang ay maaaring tumagal ng 100 hanggang 200 mg bawat apat na oras.\n\n        Ang mga batang 4 hanggang 6 na taong gulang ay maaaring tumagal ng 50 hanggang 100 mg bawat apat na oras.\n\n        Ang mga bata at sanggol hanggang 4 na taong gulang ay hindi dapat uminom nito.\n        \n        Tandaan na ang mga nabangit na paraan ng pag inom nitong gamot ay pawang mga halibawa lamang. \n        "
        ],
        "dimension": 7,
        "index": 42
    },
    {
        "pattern": [
            "* expectorant*",
            "Ano ang kahulugan ibig sabihin ng expectorant at para saan ito"
        ],
        "response": [
            "Ang mga expectorant tulad ng Guiafenesin o Robutissin ay mga sangkap na nagpapaluwag sa daluyan ng hangin. Ginagawa nila ito sa pamamagitan ng pagtaas ng tubig na nilalaman ng mga secretions na nagpapababa ng kanilang lagkit upang mas madaling maibo ito. Ang mga expectorant ay kadalasang ginagamit upang tumulong sa paggamot sa mga kondisyon ng paghinga tulad ng bronchitis, pulmonya, at karaniwang sipon. Tandaan na ang gamot na ito ay maaring bilhin bilang likido o tabletas.\n        "
        ],
        "dimension": 7,
        "index": 43
    },
    {
        "pattern": [
            "* gamit * expectorant*",
            "Anong ang ginagamot ng mga expectorants",
            "Para saan ba talaga ginagamit ang mga expectorants",
            "saan paano ano ginagamit ang expectorants"
        ],
        "response": [
            "Maaari kang uminom ng expectorant tulad ng Guiafenesin o Robutissin upang makahinga ng mabuti kung mayroon kang sipon o trangkaso. Available ang mga ito bilang mga standalone na gamot o bilang isang sangkap sa isang all-in-one na gamot sa sipon o trangkaso. Tandaan na ang gamot na ito ay maaring bilhin bilang likido o tabletas"
        ],
        "dimension": 7,
        "index": 44
    },
    {
        "pattern": [
            "* gana * expectorant* ",
            "* expectorant* (gana|treat) * ",
            "Paano gumagana ang expectorants ",
            "paano nagpapagaling ang expectorants"
        ],
        "response": [
            "Ang mga expectorant ay nagpapadulas sa iyong daanan ng hangin. Nakakatulong ito na lumuwag ang uhog at gawing mas manipis ang daluyan ng hangin pag humihinga. Sa pamamagitan ng pagluwag ng uhog, ginagawang mas produktibo ng mga expectorant ang iyong ubo. Ginagawa nitong mas madali para sa iyo na mabisang umubo ng uhog at malinis ang iyong lalamunan."
        ],
        "dimension": 7,
        "index": 45
    },
    {
        "pattern": [
            "* ( huwag * (kain|inom|gamit) | iwas) * expectorant*",
            "Kailan hindi dapat ligtas na gumamit ng expectorants",
            "Saan hindi dapat gamitin uminom kain ng expectorants",
            "bakit iwasan hindi uminom kainin ng expectorants"
        ],
        "response": [
            "Dapat kang makipag-usap sa doktor bago gumamit ng expectorant lalo na kung ikaw ay buntis o nagpapasuso. Kung mayroon kang anumang uri ng reaksiyong alerdyi o hindi pagpaparaan sa mga expectorant sa nakaraan, hindi mo dapat gamitin ang mga gamot na ito.\n\n        Mag-ingat kapag nagmamaneho o gumagamit ng makinarya habang umiinom ng expectorant, dahil ang mga gamot na ito ay maaaring magdulot sa iyo ng antok o pagkahilo."
        ],
        "dimension": 7,
        "index": 46
    },
    {
        "pattern": [
            "* effect * expectorant* ",
            "* hindi * maganda * epekto * expectorant *",
            "Ano ang mga posibleng hindi magandang side effects ng pag kain pag-inom pag gamit ng expectorant",
            "Mayroon bang hindi magandang o masamang epekto sa katawan ang expectorant",
            "Nakakapagdulot ba ng nakakahamak side effects adverse reaction ang expectorant"
        ],
        "response": [
            "Ang mga expectorant ay hindi karaniwang nagdudulot ng malubhang epekto. Ang pinakakaraniwang epekto ay ang pagkahilo, pag-aantok, at pantal."
        ],
        "dimension": 7,
        "index": 47
    },
    {
        "pattern": [
            "* tips * expectorant*",
            "Mayroon bang pagkain na dapat iwasan habang umiinom ng expectorants",
            "Ano ang mga dapat gawin para ma-maximize ang epekto ng expectorants",
            "Ano ang mga dapat tandaan sa pag-inom ng expectorants",
            "Mayroon ba kayong mga tips para sa pag-inom ng expectorants",
            "Paano dapat gamitin ang expectorants nang tama",
            "ano ang mga tips sa pagkain o inom ng expectorants"
        ],
        "response": [
            "Huwag durugin ang mga tabletas, at siguraduhing sukatin ang mga likidong formulasyon gamit ang mga panukat na tool na ibinigay kasama ng iyong gamot. Kadalasang inirerekomenda na uminom ka ng maraming likido kapag umiinom ng expectorant."
        ],
        "dimension": 7,
        "index": 48
    },
    {
        "pattern": [
            "* alternatibo * expectorant*",
            "Ano ang mga alternatibo herbal na gamot na pwedeng gamitin maliban sa expectorant",
            "ano ang mga pwedeng pamalit sa expectorant",
            "sabihin bigay listahan ng iba pang alterantibong natural na herbal na gamot bukod sa expectorant",
            "Ano ang mga natural herbal na gamot para mabawasan ang plema pleghm",
            "Ano pa ang ibang paraan sa paggamot ng plema pleghm maliban sa mga expectorant",
            "Mayroon bang alternative herbal na gamot na pwede kong gamitin para magamot ang plema pleghm"
        ],
        "response": [
            "Ang mga natural na expectorant ay isa pang opsyon kung sinusubukan mong paluwagin ang uhog at mapawi ang pagsikip ng dibdib. Kasama sa mga natural na expectorant ang:Menthol, Ivyleaf extract , oral hydration (pag-inom ng maraming tubig), steaming (paglanghap ng mainit na basang hangin), at honey (pagdaragdag ng pulot sa mga inumin)"
        ],
        "dimension": 7,
        "index": 49
    },
    {
        "pattern": [
            "* (dose|hakbang|inumin|gamitin|kainin) * antitussive  *",
            "Ano ang tamang paggamit ng mga antitussives",
            "Gaano kadalas dapat ang antitussives gamitin kainin inumin dose",
            "May mga bagay ba na dapat isaalan bago gumamit ng antitussives",
            "Paano dapat gamitin kainin inumin dose ang mga antitussives",
            "ano ang tamang dose pag kain o pag inom sa antitussives",
            "Paano malalaman kung tama ang dosage ng antitussives na gagamitin"
        ],
        "response": [
            "Sa pangkalahatan, ang mga antitussive ay iniinom at may iba't ibang anyo, tulad ng mga tablet, kapsula, syrup, at patak. Ang dosis ay karaniwang tinutukoy ng isang doktor at maaaring iakma batay sa mga salik tulad ng edad at bigat ng pasyente, ang kalubhaan ng ubo, at anumang iba pang kondisyong pangkalusugan na maaaring mayroon ang pasyente.\n        \n        Mayroong ilang mga karaniwang kaalaman sa dosis na maaaring matagpuan mula sa mga kagalang-galang na mapagkukunang medikal online. Para sa mga antitussive bilang lozenges, maaaring mag-iba ang dosis. Para sa mga, mga matatanda at bata 12 taong gulang at mas matanda-5 hanggang 15 mg bawat dalawa hanggang apat na oras, kung kinakailangan.Para sa mga mga batang 6 hanggang 12 taong gulang, 5 hanggang 15 mg bawat dalawa hanggang anim na oras, kung kinakailangan. Para naman sa mga batang 4 hanggang 6 na taong gulang, pwede ang 5 mg kada apat na oras, kung kinakailangan. Mga bata at sanggol hanggang 4 na taong gulang—Hindi inirerekomenda ang paggamit. \n        \n        Para sa mga antitussive na kinuha bilang syrup, ang dosis ay nag-iiba din. Ang mga matatanda at bata 12 taong gulang at mas matanda ay pwedeng kumain ng 30 mg tuwing anim hanggang walong oras, kung kinakailangan. Ang mga batang 6 hanggang 12 taong gulang naman ay pwedeng uminom ng 7 mg tuwing apat na oras o 15 mg tuwing anim hanggang walong oras, kung kinakailangan. Para naman sa mga batang 4 hanggang 6 na taong gulang, pwedeng mag take ng 3.5 mg bawat apat na oras o 7.5 mg bawat anim hanggang walong oras, kung kinakailangan. Ngunit ang mga bata at sanggol hanggang 4 na taong gulang ay hindi pinapayuhang kumain nito.\n        \n        Bagama't ipinakita ko sa iyo ang ilang impormasyon kung paano uminom ng mga antitussive, mas mainam kung humingi ka ng tulong sa mga doktor habang nagrereseta sila ng mga naaangkop na gamot para sa iyong kondisyon.\n        "
        ],
        "dimension": 7,
        "index": 50
    },
    {
        "pattern": [
            "* ano * antitussive  *",
            "Ano ang ipaliwanag kahulugan ibig sabihin ng antitussive at para saan ito"
        ],
        "response": [
            "Ang mga antitussive tulad ng Dexthromethorphan o Robitussin ay mga reseta o over-the-counter na gamot na ginagamit para gamutin ang ubo. Maaari itong mabili bilang isang tableta, kapsula, gel, likido, syrup, lozenge o strips. Gayunpaman, maaari ko lamang irekomenda ang karaniwang dosis ng mga logenze at syrup form nito"
        ],
        "dimension": 7,
        "index": 51
    },
    {
        "pattern": [
            "* gamit * antitussive *",
            "Kailan dapat uminom pwedeng gamitin ang antitussives",
            "paano Para saan nakakatulong ginagamit ang antitussives"
        ],
        "response": [
            "Karaniwang ginagamit ang mga antitussive tulad ng Dexthromethorphan o Robitussin upang gamutin ang tuyong ubo na dulot ng mga allergy, sakit sa paghinga, o impeksyon. Maaari ding gamutin ng mga antitussive ang post-viral na ubo, o isang patuloy na ubo na nabubuo pagkatapos malutas ang isang impeksiyon.Maaari itong mabili bilang isang tableta, kapsula, gel, likido, syrup, lozenge o strips."
        ],
        "dimension": 7,
        "index": 52
    },
    {
        "pattern": [
            "* antitussives * (gana|treat) *",
            "Paano gumagana nakakatulong nagpapagaling ang mga antitussives",
            "Paano nakakapagbigay ng kaginhawahan sa pakiramdam ang mga antitussives",
            "Paano nakakapagpababa ng ubo ang mga antitussives"
        ],
        "response": [
            "Ang mga antitussive tulad ng Dexthromethorphan o Robitussin ay gumagana sa pamamagitan ng pagpigil sa isang coordinating region para sa pag-ubo na matatagpuan sa stem ng utak, na nakakagambala sa cough reflex arc; bagaman ang eksaktong mekanismo ng pagkilos ay hindi alam.Maaari itong mabili bilang isang tableta, kapsula, gel, likido, syrup, lozenge o strips. "
        ],
        "dimension": 7,
        "index": 53
    },
    {
        "pattern": [
            "* ( huwag * (kain|inom|gamit) | iwas) * antitussive *",
            "Ano ang mga kondisyon na hindi dapat gamutin ng antitussives",
            "Kailan sino hindi dapat uminom o magtake ng antitussives",
            "Kailan sino hindi ligtas recommended ang paggamit pag-inom ng antitussives",
            "May mga tao ba na hindi dapat uminom ng antitussives",
            "bakit iwasan hindi kainin uminom ang antitussives"
        ],
        "response": [
            "Ang gamot na ito ay hindi ligtas para sa mga batang wala pang 4 taong gulang."
        ],
        "dimension": 7,
        "index": 54
    },
    {
        "pattern": [
            "* effect * antitussive  *",
            "* hindi * maganda * epekto * antitussive *",
            "Ano ang mga posibleng hindi magandang side effects ng pag kain pag-inom pag gamit ng antitussive",
            "Mayroon bang hindi magandang o masamang epekto sa katawan ang antitussive",
            "Nakakapagdulot ba ng nakakahamak side effects adverse reaction ang antitussive"
        ],
        "response": [
            "Ang pinakakaraniwang epekto ay kinabibilangan ng pagduduwal at pag-aantok. Ang ilang mga pasyente ay maaaring makaranas ng pantal o kahirapan sa paghinga. Ang mataas na dosis ay maaaring magdulot ng mga guni-guni at pagkakahiwalay, at ang gamot ay naiulat na ginagamit bilang isang panlibang na gamot. Kaya dapat mag ingat pag kumain ng antitussives"
        ],
        "dimension": 7,
        "index": 55
    },
    {
        "pattern": [
            "* tips * antitussive  *",
            "Ano ang magandang gawin dapat tandaan bago mag take ng antitussives",
            "Ano ang mga bagay na dapat kong gawin bago mag take ng antitussives",
            "Ano ang mga dapat kong malaman bago mag take ng antitussives",
            "ano ang mga tips sa pagkain o inom ng antitussives"
        ],
        "response": [
            "Inumin ang gamot na ito sa pamamagitan ng bibig na mayroon o walang pagkain na may isang buong baso ng tubig (8 onsa o 240 mililitro) o ayon sa direksyon ng iyong doktor."
        ],
        "dimension": 7,
        "index": 56
    },
    {
        "pattern": [
            "* alternatibo * antitussive  *",
            "Ano ang mga alternatibo herbal na gamot na pwedeng gamitin maliban sa antitussive",
            "ano ang mga pwedeng pamalit sa antitussive",
            "sabihin bigay listahan ng iba pang alterantibong natural na herbal na gamot bukod sa antitussive",
            "Ano ang mga natural herbal na gamot para mabawasan ang ubo",
            "Ano pa ang ibang paraan sa paggamot ng ubo maliban sa mga antitussive",
            "Mayroon bang alternative herbal na gamot na pwede kong gamitin para magamot ang ubo"
        ],
        "response": [
            "Ang Honey o pulot ay isang napapanahong lunas para sa namamagang lalamunan. Ayon sa isang pag-aaral, maaari din nitong mapawi ang ubo nang mas epektibo kaysa sa mga OTC na gamot na naglalaman ng dextromethorphan (DM), isang panpigil sa ubo."
        ],
        "dimension": 7,
        "index": 57
    },
    {
        "pattern": [
            "* (hakbang|dose|inom|gamitin|kainin) * lozenge*",
            "* lozenge* (hakbang|dose|inum|gamitin|kainin)  *",
            "Ano ang tamang paraan ng hakbangdose inom gamitin kainin ng lozenges",
            "Anong tamang dose ng lozenges",
            "Ilang beses kailangan kumain ng lozenges sa isang araw",
            "Paano ba dapat gamitin ang lozenges",
            "paano tamang dose ginagamit kinakain iniinom ang lozenges"
        ],
        "response": [
            "Hayaang matunaw ang lozenge nang dahan-dahan sa iyong bibig at lunukin ang natunaw na likido kasama ng iyong laway. Huwag nguyain o lunukin nang buo. Karaniwang ginagamit ang produktong ito tuwing 2 oras kung kinakailangan"
        ],
        "dimension": 7,
        "index": 58
    },
    {
        "pattern": [
            "* lozenge*",
            "Ano ang ipaliwanag kahulugan ibig sabihin ng lozenge at para saan ito"
        ],
        "response": [
            "Ginagamit ang lozenges tulad ng Bactidol o Strepsils upang pansamantalang mapawi ang pananakit mula sa maliliit na problema sa bibig (tulad ng mga ulser, namamagang gilagid/lalamunan, pinsala sa bibig/gigilid)."
        ],
        "dimension": 7,
        "index": 59
    },
    {
        "pattern": [
            "* gamit * lozenge*",
            "Kailan dapat kainin gamitin inumin ang lozenges",
            "paano Para saan ginagamit ang lozenges"
        ],
        "response": [
            "Ang pag gamit ng Lozenges tulad ng Bactidol o Strepsils ay isang abot-kayang opsyon para sa nagpapakilalang paggamot ng talamak at talamak na pharyngitis, pangangati o pamamaga ng upper respiratory tract at pagpapagaan ng hindi kasiya-siyang sensasyon sa lalamunan."
        ],
        "dimension": 7,
        "index": 60
    },
    {
        "pattern": [
            "* lozenges * treat *",
            "* gana * lozenge*",
            "* lozenge * gana *",
            "Bakit nagpapagaling nakakatulong nakakagamot ang lozenges sa pagtanggal ng sakit pag-irita pamamaga sa lalamunan"
        ],
        "response": [
            "Kapag sumipsip ka ng lozenge Lozenges tulad ng Bactidol o Strepsils, nagsisimula itong matunaw at maglalabas ng gamot. Kaya dapat itong tunawin nang dahan-dahan sa bibig upang pansamantalang sugpuin ang ubo, at mag-lubricate at paginhawahin ang nanggagalit na mga tisyu ng lalamunan.\n        \n        Ang mga lozenges ay tumutulong sa paglaban sa sipon, at karamihan ay may pampamanhid upang makatulong na mabawasan ang sakit. Naglalaman din ito ng menthol o eucalyptus, na makakatulong sa pagpapalamig at pagpapatahimik sa lalamunan. Ang iba ay naglalaman ng pulot, na kilala na may mga katangian ng pagsugpo sa ubo."
        ],
        "dimension": 7,
        "index": 61
    },
    {
        "pattern": [
            "* ( huwag * (kain|inom|gamit) | iwas ) * lozenge*",
            "Kailan bakit hindi dapat gumamit ng lozenges",
            "Mayroon bang mga kondisyon na hindi pinapayagan ang paggamit ng lozenges",
            "Sa mga anong sitwasyon hindi dapat mag-take ng lozenges",
            "bakit iwasan hindi uminom kainin gumamit ng lozenges"
        ],
        "response": [
            "Kung mayroon kang namamagang lalamunan na malubha o tumatagal ng higit sa 2 araw, o ubo na tumatagal ng higit sa 7 araw na patuloy na bumabalik, o may mga sintomas na may lagnat, sakit ng ulo, pantal, pamamaga, pagduduwal, o pagsusuka, magpatingin na sa iyong doktor kaagad"
        ],
        "dimension": 7,
        "index": 62
    },
    {
        "pattern": [
            "* effect * lozenge*",
            "* hindi * maganda * epekto * lozenge*",
            "Ano ang mga posibleng hindi magandang side effects ng pag kain pag-inom pag gamit ng lozenge",
            "Mayroon bang hindi magandang o masamang epekto sa katawan ang lozenge",
            "Nakakapagdulot ba ng nakakahamak side effects adverse reaction ang lozenge"
        ],
        "response": [
            "Maaaring mangyari ang bahagyang paghapdi ng lalamunan. Kung ang alinman sa mga epektong ito ay tumagal o lumala, sabihin kaagad sa iyong doktor o parmasyutiko."
        ],
        "dimension": 7,
        "index": 63
    },
    {
        "pattern": [
            "* tips * lozenge*",
            "Ano ang dapat kong malaman bago gamitin ang lozenges",
            "Paano tamang gamitin ang mga lozenges",
            "alin ang dapat tandaan pag kumain ng lozenges",
            "ano ang mga tips paalala sa pagkain o inom ng lozenges"
        ],
        "response": [
            "Huwag nguyain o lunukin nang buo. Ang produktong ito ay karaniwang ginagamit tuwing 2 oras kung kinakailangan."
        ],
        "dimension": 7,
        "index": 64
    },
    {
        "pattern": [
            "* alternatibo * lozenge*",
            "Ano ang mga alternatibo herbal na gamot na pwedeng gamitin maliban sa lozenge",
            "ano ang mga pwedeng pamalit sa lozenge",
            "sabihin bigay listahan ng iba pang alterantibong natural na herbal na gamot bukod sa lozenge",
            "Ano ang mga natural herbal na gamot para mabawasan ang sakit sa lalamunan",
            "Ano pa ang ibang paraan sa paggamot ng sakit sa lalamunan maliban sa mga lozenges",
            "Mayroon bang alternative herbal na gamot na pwede kong gamitin para magamot ang sakit sa lalamunan"
        ],
        "response": [
            "Ang pagsipsip ng tsaa na may pulot ay maaaring makatulong at mapawi ang mga kondisyon ng lalamunan."
        ],
        "dimension": 7,
        "index": 65
    },
    {
        "pattern": [
            "* saan * (punta|gamutin) * trangkaso *",
            "Alin ang pinakamalapit na lugar na pwede magpatingin kung may trangkaso",
            "Anong mga lugar ang pwede puntahan kung may trangkaso",
            "Saan pwede magpakonsulta kung may trangkaso"
        ],
        "response": [
            "Maaari mong alagaan ang sarili mo sa inyong bahay lamang. Gayunpaman, magpatingin kaagad sa iyong doktor kung ikaw ay nasa mas mataas na panganib ng malubhang komplikasyon ng trangkaso"
        ],
        "dimension": 5,
        "index": 10
    },
    {
        "pattern": [
            "* sintomas * trangkaso * ",
            "* masabi * trangkaso *",
            "Ano ang mga palatandaan senyales sintomas ng trangkaso",
            "Paano ko malalaman kung may trangkaso ako",
            "sabihin o ibigay mo sakin ang listahan ng sintomas palatandaan o senyales ng flu"
        ],
        "response": [
            "Ayon sa Center of Disease and Control, ang mga taong may trangkaso ay maaring makaranas ng lagnat, ubo, namamagang lalamunan, sipon o baradong ilong, pananakit ng kalamnan o katawan, pananakit ng ulo, at pagkapagod (pagkapagod). Ang ilan sa iba ay maaaring magkaroon ng pagsusuka at pagtatae kahit na ito ay mas karaniwan sa mga bata at matatanda."
        ],
        "dimension": 1,
        "index": 21
    },
    {
        "pattern": [
            "* (gamutin|bawasan|control) * suka *",
            "* (kainin|inumin|bilhin) * suka * ",
            "Ano ang dapat gawin para mapigilan ang pagsusuka",
            "Ano ang dapat gawin kainin kapag may pagsusuka",
            "Ano ang mga natural pagkain na makakatulong pagpapagaling kapag mayroong pagsusuka",
            "Mayroon bang pwedeng gamot kainin kahit may pagsusuka",
            "Paano maaaring malunasan maiiwasan makakakain ang pagsusuka pagkain o inumin",
            "Paano malulunasan ang pagsusuka",
            "sabihin mo nga sakin anong pwede kong gawin kasi ako ay nagsusuka",
            "anong pwede gawin kung nagsusuka ako"
        ],
        "response": [
            "\n        Ang pagsusuka ay ang dahasang paglabas ng kinain ng isang tao galing sa kanyang bitua papuntang bunganga at minsan sa ilong din na pwedeng umubos sa tubig at electrolytes ng katawan. Ito ay karaniwang sintomas ng isang sakit tulad ng gastroenteritis, pagkalason, motion sickness, pagiging buntis ang iba pa.\n\n        Kung ikaw ay nagsusuka, maari mong sundin ang mga sumusunod.\n        \n        1. Maghintay ng ilang oras bago kumain o uminom. \n\n        2. Subukang uminom paunti unti ng fluids tulad ng tubig, sports drinks, o sabaw. HUwag kang uminom ng mga mga maasim na juice o gatas. At saka umiwas ka sa mga pagkain o inuming may alchohol, caffeine, mamantikain, maanghang, gatas o keso. Kung kaya mo ay uminom kalang ng tubig paunti unti.\n\n        3. Kung ikaw ay gutom, subukan mong kumain ng saging, kanin, tuyong tinapay, o soda crakers. Kung kaya mo nang kumain ng mga walang lasang pagkain , saka lang kumain ng normal. Ang mga wala masyadong lasang pagkain ay mga tulad ng patatas, bigay, pasta, mga niluto naka pack na prutas, mga nalutong gulay, at karne. \n\n        Laging isa isip na ang paulit ulit na pagsusuka ay nangangailangan ng agarang gamutan. \n        "
        ],
        "dimension": 2,
        "index": 2
    },
    {
        "pattern": [
            "* (gamutin|bawasan|control) * nausea *",
            "* (ano|paano|paraan) * (gamutin|bawasan|control) *  nausea *",
            "* pagkain * (iwas| (huwag|hindi) * (kainin|inumin|bilhin)) * nausea *",
            "Aling mga pagkain ang dapat mong iwasan kapag ikaw ay mayroong nausea",
            "Ano ang mga dapat iwasang gawin kung mayroong nausea",
            "Ano ang pwedeng gawin para maibsan ang nausea",
            "Anong lunas gamot ang pwedeng inumin kung mayroong nausea",
            "Anong mga pagkain ang makakapagpabuti kung ikaw ay mayroong nausea",
            "Anong mga tips sa pagkain ang makatutulong upang mabawasan ang nausea",
            "May mga natural na paraan ba para maalis ang nausea",
            "May paraan ba para mawala ang nausea",
            "Mayroon bang gamot para sa nausea",
            "Mayroon bang mga natural na pagkain gamot na pwedeng gamitin para sa nausea",
            "Paano mapapaginhawa ang pakiramdam kung mayroong nausea",
            "sabihin mo nga sakin anong pwede kong gawin kasi ako ay nausea",
            "anong pwede gawin kung nausea ako"
        ],
        "response": [
            "Ang nausea o pag duduwal ay iyong pakiramdam na madalas na nagyayari bago magsuka ang isang tao. Ito ay maaring dahilan ng ibang sakit tulad ng motion sickess, sakit sa tyan, epekto ng mga kinaing gamot, at iba pa. Para maibsan ang iniindang karamdaman, magpahinga at uminom ng tubig, sports drinks, o sabaw. Umiwas muna sa mga pinirito , mamantikaing pagkain at mga matatamis. Sa halip, subukang kumain ng mga pagkaing wala masyadong lasa tulad ng saltine crackers o tinapay ng paunti unti. Pag nagpapahinga naman ay subukang I angat ang iyong ulo.\n        "
        ],
        "dimension": 4,
        "index": 11
    },
    {
        "pattern": [
            "* magpakulo * ",
            "* magpakulo * tubig * ",
            "Ano ang dahilan kung bakit dapat magpakulo ng tubig",
            "Ano ang nakukuha sa pagpakulo ng tubig",
            "Bakit dapat pakuluin ang tubig",
            "Bakit kailangan magpakulo ng tubig",
            "Bakit kailangan pa magpakulo ng tubig kung malinis na ito",
            "Bakit mahalaga ang pagpapakulo ng tubig",
            "Para saan ba ang pagpakulo ng tubig"
        ],
        "response": [
            "Ang pagpapakulo ng tubig ay gingawa upang mapatay ang mga bacteria, virus at protozoa na nakahalo sa tubig. Kapag magpapakulo, siguraduhin na kumukulo ang tubig ng hindi baba sa isang minuto. Kung medyo malabo naman ang tubig, subukang i filter muna ito gamit ang malinis na tela o papel bago ito pakuluin. Para magkaroon ng lasa ang tubig, maari mong lagyan ng isang pinch ng asin kada litro o ilipat ang tubig sa ibang malinis na paglalagyan. "
        ],
        "dimension": 1,
        "index": 22
    },
    {
        "pattern": [
            "* hakbang * disinfect *",
            "* disinfect * tubig *",
            "* ano * (bilhin|gamitin) * disinfect * tubig *",
            "Ano ang mga hakbang pamamaraan para malinis ang tubig",
            "Ano ang mga dapat gawin upang malinis ang tubig",
            "Anong mga bagay ang pwedeng bilhin o gamitin para mai-disinfect ang tubig",
            "Paano linisin ang tubig at ano ang mga kailangan na gamitin"
        ],
        "response": [
            "Ang paglilinis ng tubig ay kinakailangan upang mawala ang mga masasamang bacteria, virus o parasites na pwedeng makapagdulot ng sakit tulad ng cholera , typhoid, dystentery at diarrhea. Kapag ang tubig ay di malinia, maari itong macontaminate ng mga microorgaanisms na pwedeng mapagmulan ng ibang ibang sakit. Ang prosesong ito ay nagpapababa na tsansang makakuha ang isang tao ng water borne diseases at masisiguro nito na pwedeng mainom ang tubig.\n\n        Pwede ka mag disinfect ng tubig gamit ang chlorine. Mag handa ng isang stock ng tubig kung saan lagyan ito ng chlorine compounds na 65% hanggang 75% kada litro. Pagkatapos ay maglagay ng dalawang teaspoon ng stock solution na ito sa limang galon (20 liters) ng tubig. Haluin ito ng maayos at hayaan ito ng at least 30 minutes bago unimin.\n        "
        ],
        "dimension": 1,
        "index": 23
    },
    {
        "pattern": [
            "* (gamutin|bawasan|control) * (lagnat|panginginig) * ",
            "Ano ang dapat gawin kapag may lagnat at panginginig",
            "Ano ang dapat kong inumin o gawin kapag nanginginig ako",
            "Ano ang mabisang paraan para mapababa ang lagnat at panginginig",
            "Ano ang mga dahilan ng panginginig at lagnat at paano ito gagamutin",
            "Ano ang mga dapat kainin o iwasan kapag may lagnat at panginginig",
            "Ano ang mga home remedy sa panginginig ng katawan",
            "Ano ang mga pagkain na pwedeng kainin kapag mayroon akong panginginig ng katawan",
            "Ano ang mga paraan upang gamutin ang lagnat o panginginig",
            "Kailan dapat pumunta sa doktor kung may lagnat at panginginig",
            "May mga home remedy ba para sa lagnat at panginginig",
            "May mga natural na paraan ba upang gamutin ang lagnat at panginginig",
            "Mayroon akong chills, anong dapat kong gawin",
            "Paano ko malalaman kung mayroon akong fever o lagnat",
            "Paano maaalis ang lamig ng katawan",
            "Paano maiiwasan o malulunasan ang pagkakaroon ng lagnat at panginginig",
            "Paano makatutulong ang pag-inom ng gamot sa paggamot ng lagnat at panginginig",
            "Paano mawawala ang pangangatog ng katawan",
            "sabihin mo nga sakin anong pwede kong gawin kasi ako ay nanginginig",
            "nilalagnat ako"
        ],
        "response": [
            "Pwede kang uminom ng fluids para mapatili mo ang sarili mong hydrated. May mga gamot din na nabibili sa botika upang maibsan ang iniida mong sakit. Pwede kang huminge ng payo sa pharmachist ukol sa acetaminophen para sa sakit ng katawan. Kapag ikaw naman ay nilalagnat, subukan maglagay ng medyo basa at mainit na damit sa noo ng pasyente. Magsuot ka din na komportableng mga damit. Hingit na mahalaga na mapanatili mong mainit ang iyong katawan. Magpahinga ka din."
        ],
        "dimension": 2,
        "index": 3
    },
    {
        "pattern": [
            "* (gamutin|bawasan|control) * bara * ilong *",
            "Ano ang mga mabisang gawin paraan para iwasan malunasan ang baradong ilong",
            "Meron bang mga pagkain na nakakatulong sa pagbawas paggamot lunasan ang sipon at baradong ilong",
            "Paano maiiwasan ang pangangati ng ilong dahil sa baradong ilong",
            "Paano tanggalin ang sipon at baradong ilong",
            "anong pwede gawin o gamutin kasi parang barado ilong ko"
        ],
        "response": [
            "Ang clogged nose ay nagyayari dahil may bumabara sa iyong nasal passages. Ito ay tinatawag na nasal congestion at maaring dahil ito sa allergies, sipon, flu, sinus infection at iba pang sakit sa baga. Kabilang sa sinotmas ng clogged nose ang hirap na paghinga, madalas na pagkahulog ng sipon or pagbara nito, pressure o sakit sa may ilong at kapag hindi masyado makaamoy at kapag mawal ng lasa ang isang tao.\n\n        Para bumuti ang iniindang sakit, ugaliing uminom ng marmaing tubig upang magnipinis ang sipon sa iyong sinus. Huwag ka ding uminom ng mga inuming nakaka dehydrate tulad ng kape at iyong may mga alchohol. Pwede kang uminom ng mga mainit na tsaa o mga sabaw. Pwede ka ding kumain ng Vitamin C. Ang pag tataob ay pwede ding makatulog sayo upang maka hinga ka. Kinakailangan mo din ng mahabang pahinga. Maglakagay ka din ng warm compress sa may ilong mo. Kung wala ka nito ay subukan mong kumuha ka damit na pwede mong basain ng mainit na tubig at idampi ito sa mukhang ng ilang beses upang maibsan ang nasal congestion. Pwede ka ding gumamit ng saline nasal spray upang bumuka ang iyong nasal pasages. Napag alaman din na ang pagkain ng mga maaanghang ay nakakatulog sa clogged nose. Panghuli, ugaliing gumamit ng tamang gamot. "
        ],
        "dimension": 2,
        "index": 4
    },
    {
        "pattern": [
            "* (gamutin|bawasan|control) *  sakit * ulo *",
            "anong pwede kong gawin kasi masaki ang ulo ko",
            "Ano ang mga paraan para maibsan maiwasan magamot ang sakit ng ulo",
            "Ano ang pwedeng inumin o kainin para maibsan ang sakit ng ulo",
            "May mga gamot ba para sa sakit ng ulo nahihilo",
            "May paraan ba para mabawasan lunasan ang sakit ng ulo pagkahilo",
            "Mayroon bang lunas para sa sakit ng ulo",
            "Paano gamutin ang sakit ng ulo pagkahilo",
            "Paano malulunasa maibsan ang sakit ng ulo",
            "masakit ang aking ulo, ano pwede kong gawin dito",
            "sumasakit ang aking ulo, sabihin mo sakin pano ito gamutin"
        ],
        "response": [
            "Ang sakit sa ulo ay isa iba iba kaya iba iba din ang mga paraan ng paggamot nito. Ang tension headaches ay kilala din sa hatband headaches. Dahil ang sakit ay nagagagling sa likod ng ulo, temples at noo. Ito ay maaring manatili ng ilang oras hanggang sa ilang araw. Ang mga gamot nito ay physical therapy , muscle relaxants, at over the counter pain relievers (aspirin o ibuprofen). Ang isa pang uri ng sakit sa ulo ay ang tinatawag na migraine. Para maibsan ang sakit ng ulo. Subukang magkulong sa isang madilim na kwarto at mag lagay ng hot o cold compress. Subukan din imasahe ang iyong katawan."
        ],
        "dimension": 2,
        "index": 5
    },
    {
        "pattern": [
            "* (gamutin|bawasan|control) *  abdominal * cramps *",
            "* (gamutin|bawasan|control) * sakit * (tyan|tiyan) *",
            "Ano ang mabisang kainin gamot sa masakit na tiyan o abdominal cramps",
            "Ano ang mga gamot sa abdominal cramps",
            "Ano ang mga natural na lunas sa masakit na tiyan o abdominal cramps",
            "Ano ang pwede kong gawin kainin o iwasan kung mayroon akong masakit na tiyan o abdominal cramps",
            "Ano ang pwedeng gawin para maibsan ang sakit ng tiyan habang naghihintay ng gamot",
            "Anong natural na paraan para gamutin ang abdominal cramps",
            "Mayroon ba kayong payo para sa masakit na tiyan o abdominal cramps",
            "Paano mababawasan maiiwasan maibsan ang pagkakaroon ng masakit na tiyan o abdominal cramps",
            "Paano malulunasan ang masakit na tiyan o abdominal cramps",
            "Paano mawawala ang abdominal cramps",
            "masakit ang aking tyan, ano pwede kong gawin dito",
            "anong pwede kong gamutin o kainin kasi sumasakit ang aking tiyan"
        ],
        "response": [
            " Madalas na ang sakit sa tyan ay nawawala din kahit di ginagamot. Ngunit, may mga bagay bagay parin namang pwede gawin. Subukang mag lagay na mainit na tubig sa botelya sa iyong tiyan. Pwede din subukang maligo sa mainit na tubig. Ingatan mo lang at baka ikaw ay mapaso. Uminom din ng maraming tubig. Huwag ka munang iminom ng kape, tsaaa o may mga alchohol dahil magpapalala ito ng sakit ng tyan. Kapag pwede ka nang kamain ulit, sumubukan mong uminom ng mga tubig tapos kumain ka ng mga wala masyadong lasang pagkain tulad ng crackers, kanin, saging o toas. Magpahinga ka din."
        ],
        "dimension": 2,
        "index": 6
    },
    {
        "pattern": [
            "* (gamutin|bawasan|control) * sakit * lalamunan *",
            "Ano ang iwasan na pagkain o inumin kung may masakit na lalamunan",
            "Ano ang gawin kainin para maiwasan na magkaroon ng masakit na lalamunan",
            "Ano ang kainin gamot inumin para mabilis na gumaling ang masakit na lalamunan",
            "May mga paraan ba para gamutin ang masakit na lalamunan",
            "Paano gamutin ang pamamaga at pananakit ng lalamunan",
            "masakit ang aking lalamunan, makati din ito",
            "sumasakit ang aking lalamunan"
        ],
        "response": [
            "Kapag nananakit ang iyong lalamunan, imuinom ka ng maraming tubig upang matanggal ang sipon na dumikit o para hindi matuyo ang iyong lalamunan. Kumain ng gamot. I angat ng kaunti ang ulo sa unan kapag hirap kang huminga at para hindi ka masyado umubo.  Subukan mong kumain ng cough drops o lozenges upang guminhawa ang iyong lalamunan. Huwag ka din lumapit sa mga usok. Sa ibang paraan, pwede kang mag mugmog ng mainit na tubig. Ngunin hindi ito ipanapayo sa mga bata."
        ],
        "dimension": 2,
        "index": 7
    },
    {
        "pattern": [
            "* takpan * bahing *",
            "Ano ang tamang paraan ng pagtakip ng bibig at ilong kapag bumabahing",
            "Ano dahilan kung bakit kailangan takpan ang bibig at ilong kapag bumabahing",
            "Ano sakit ang maaaring ikalat kapag hindi tinatakpan ang bibig at ilong kapag bumabahing",
            "Bakit dapat tayong maging responsable at takpan ang bibig at ilong kapag bumabahing",
            "Mayroon bang panganib kapag hindi tinatakpan ang bibig at ilong kapag bumabahing",
            "Nakakasama ba sa kalusugan ang hindi pagtakip ng bibig at ilong kapag bumabahing",
            "Paano nakakatulong ang pagtakip ng bibig at ilong sa pagbabahing",
            "Sino ang dapat magtakip ng bibig at ilong kapag bumabahing"
        ],
        "response": [
            "Pinapayuhang takpan ang bunganga at ilong kapag ikaw ang bumabahing o umuubo upang hindi ka magkalat ng virus sa iyong paligid. Pwede kang bumahing sa isang tisuee kung kinakailangan. Ngunit siguraduhin mong itapon ito ng maayo. Kung wala ka namang tissue, bumahing o umubo sa iyong braso at hindi sa iyong kamay. Pagkatapos ay hugasan ito ng maayo at gumamit ng sanitizer."
        ],
        "dimension": 2,
        "index": 8
    },
    {
        "pattern": [
            "* hakbang * hugas * kamay * ",
            "* hugas * kamay * ",
            "* linis * kamay * ",
            "Ano ang kahalagahan tamang paraan ng paghuhugas ng kamay",
            "Bakit kailangan pang humugas ng kamay kahit malinis naman ang kamay",
            "Bakit kailangang linisin maghugas ng kamay",
            "Bakit mahalaga ang paglilinis ng kamay",
            "Paano ba ang tamang paghugas ng kamay",
            "Paano dapat hugasan ang kamay",
            "Paano hugasan ang kamay nang maayos",
            "Paano makakapaglinis ng kamay nang mabuti",
            "Paano makakapagpigil ng sakit sa paglilinis ng kamay",
            "Paano makakatulong ang paglilinis ng kamay sa kalusugan",
            "Paano malilinis ang kamay",
            "ano ang panglinis ng kamay"
        ],
        "response": [
            "Ang pag huhugas ng kamay ay mag proprotekta sayo laban sa mga mikrobyo. Maglagay ng sabon nang hindi bababa sa 20 segundo. Pagkatapos maglagay ng sabon sa iyong mga kamay, kuskusin ang iyong mga kamay nang hindi bababa sa 20 segundo. Gawin mo yan hanggang matapos mong kantahin ang Maligayang Kaarawan nang dalawang beses. \n        \n        Gumamit ng hand sanitizer kapag hindi posible ang paghuhugas. Gumamit ng alcohol-based na hand sanitizer kapag walang tubig. Ilapat ang hand sanitizer gaya ng pag-hand lotion mo, siguraduhing takpan ang harap at likod ng magkabilang kamay. Gumamit ng isang produkto na naglalaman ng hindi bababa sa 60% na alkohol."
        ],
        "dimension": 6,
        "index": 0
    },
    {
        "pattern": [
            "* (sintomas|senyales|tanda) *"
        ],
        "response": [
            "\n        Ang mga sakit may may kanya kanyang sintomas at senyales. Upang matulungan kita, baka pwedeng maging specific ka sa impormasyon sa mga chat mo kung para sa pagtatae o trangkaso ang hinahanap mo."
        ],
        "dimension": 1,
        "index": 24
    },
    {
        "pattern": [
            "* (hi|hello) *",
            "* (magandang)? (umaga|gabi|tanghali) *",
            "* kamusta *"
        ],
        "response": [
            "Kamusta, paano kita matutulungan. Paumanhin, hindi ko nauwaan ang nasabi mo. Hindi ako ganon katalino kaya kung maari ay tulungan natin ang isa't isa sa ating paguusap."
        ],
        "dimension": 1,
        "index": 25
    },
    {
        "pattern": [
            "* antimotility *"
        ],
        "response": [
            "Paumanhin, hindi ko naintindihan ang iyong sinabi tungkol sa antimotilities."
        ],
        "dimension": 1,
        "index": 26
    },
    {
        "pattern": [
            "*bismuth*"
        ],
        "response": [
            "Paumanhin, hindi ko naintindihan ang iyong sinabi tungkol sa bismuth subsalicylate."
        ],
        "dimension": 1,
        "index": 27
    },
    {
        "pattern": [
            "* antihistamines *"
        ],
        "response": [
            "Hindi kita naintindihan ba, pasensya na. Ano nga iyong sinasabi mo tungkol sa bismuth subsalicylate"
        ],
        "dimension": 1,
        "index": 28
    },
    {
        "pattern": [
            "* analgesics *"
        ],
        "response": [
            "Hindi ko naintindihan ang mga sinabi mo tungkol sa analgesics. Pasensya na."
        ],
        "dimension": 1,
        "index": 29
    },
    {
        "pattern": [
            "* nsaids *"
        ],
        "response": [
            "Hindi ko naintindihan ang mga sinabi mo tungkol sa nsaids. Pasensya na."
        ],
        "dimension": 1,
        "index": 30
    },
    {
        "pattern": [
            "* decongestants *"
        ],
        "response": [
            "Alam kong tungkol sa decongestants pinagsasabi mo, pero hindi ko ito naintindihan ba. Pasensya na."
        ],
        "dimension": 1,
        "index": 31
    },
    {
        "pattern": [
            "* expectorants *"
        ],
        "response": [
            "Alam kong tungkol sa expectorants pinagsasabi mo, pero hindi ko ito naintindihan ba. Pasensya na."
        ],
        "dimension": 1,
        "index": 32
    },
    {
        "pattern": [
            "* antitussives *"
        ],
        "response": [
            "Alam kong tungkol sa antitussives pinagsasabi mo, pero hindi ko ito naintindihan ba. Pasensya na."
        ],
        "dimension": 1,
        "index": 33
    },
    {
        "pattern": [
            "* lozenges *"
        ],
        "response": [
            "Alam kong tungkol sa lozenges pinagsasabi mo, pero hindi ko ito naintindihan ba. Pasensya na."
        ],
        "dimension": 1,
        "index": 34
    },
    {
        "pattern": [
            "* (tulong|help) *"
        ],
        "response": [
            "Gusto kitang tulungan ngunit kinakailangan ko ng karagdagang impormasyon. Pwede mo ako tanungin tungkol sa pagtatae o trangkaso. Pwede kitang mabigyan ng impormasyon para matulungan ka."
        ],
        "dimension": 1,
        "index": 35
    },
    {
        "pattern": [
            "* pagtatae *"
        ],
        "response": [
            "Mukhang hindi ko naintindihan ang sinabi mo tungkol sa pagtatae. Para matulungan kita ng maayos, baka pwedeng pakiulit ang iyong sinabi. Maari kang mag tanong tungkol sa mga gamot, mga payo, at kung ano ang mga dapat mong iwasan o pwede mong kaining mga pagkain."
        ],
        "dimension": 1,
        "index": 36
    },
    {
        "pattern": [
            "* influenza *"
        ],
        "response": [
            "Mukhang hindi ko naintindihan ang sinabi mo tungkol sa influenza o trangkaso. Para matulungan kita ng maayos, baka pwedeng pakiulit ang iyong sinabi. Maari kang mag tanong tungkol sa mga gamot, mga payo, at kung ano ang mga dapat mong iwasan o pwede mong kaining mga pagkain."
        ],
        "dimension": 1,
        "index": 37
    },
    {
        "pattern": [
            "*vomit*"
        ],
        "response": [
            "Pasensya na, hindi ko masyadong naintindihan ang sinabi mo tungkol sa pagsusuka. Ngunit, pwede kitang bigyan ng payo para guminhawa ang nakakaramdam nito"
        ],
        "dimension": 1,
        "index": 38
    },
    {
        "pattern": [
            "*headache*",
            "*ulo*",
            "*masakit*ulo*"
        ],
        "response": [
            "Pasensya na, hindi ko masyadong naintindihan ang sinabi mo tungkol sa masakit na ulo. Ngunit, pwede kitang bigyan ng payo para guminhawa ang nakakaramdam nito"
        ],
        "dimension": 1,
        "index": 39
    },
    {
        "pattern": [
            "*abdominal * cramps *",
            "* cramps *",
            "* abdominal *"
        ],
        "response": [
            "Pasensya na, hindi ko masyadong naintindihan ang sinabi mo tungkol sa sumasakit na tyan. Ngunit, pwede kitang bigyan ng payo para guminhawa ang nakakaramdam nito"
        ],
        "dimension": 1,
        "index": 40
    },
    {
        "pattern": [
            "*baradong*ilong*",
            "*clogged*nose*",
            "*nose*"
        ],
        "response": [
            "Pasensya na, hindi ko masyadong naintindihan ang sinabi mo tungkol sa baradong ilong o taong hindi masyado makahinga. Ngunit, pwede kitang bigyan ng payo para guminhawa ang nakakaramdam nito"
        ],
        "dimension": 1,
        "index": 41
    },
    {
        "pattern": [
            "*nausea*"
        ],
        "response": [
            "Pasensya na, hindi ko masyadong naintindihan ang sinabi mo tungkol sa nausea o pagduduwal. Ngunit, pwede kitang bigyan ng payo para guminhawa ang nakakaramdam nito"
        ],
        "dimension": 1,
        "index": 42
    },
    {
        "pattern": [
            "*fever*"
        ],
        "response": [
            "Pasensya na, hindi ko masyadong naintindihan ang sinabi mo tungkol sa pagkakaroon ng lagnat. Ngunit, pwede kitang bigyan ng payo para guminhawa ang nakakaramdam nito"
        ],
        "dimension": 1,
        "index": 43
    },
    {
        "pattern": [
            "*"
        ],
        "response": [
            "Pasensya na, mukhang hindi ko naiintindihan ang iyong sinasabi."
        ],
        "dimension": 1,
        "index": 44
    }
]