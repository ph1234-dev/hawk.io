import { encodeMemory } from "@/api/config/model"


// section 5
let data = []

// hydration
// data.push(encodeMemory([
//     `* hydrate * (tulong|gamot|buti|galing) * `,
//     `* tubig * (tulong|gamot|buti|galing) * `,
//     `Ano ang ibang uri ng pagkain o inumin na nakatutulong sa pagpapa-hydrate sa may pagtatae`,
//     `Ano ang magandang gawin kung hindi kayang uminom ng malaking halaga ng tubig ang may pagtatae`,
//     `Ano ang magandang gawin upang mapanatili ang tamang hydration`,
//     `Ano ang magandang uri ng inumin para  mapanatili ang hydration`,
//     `Bakit dapat palaging mag-inom ng tubig `,
//     `Bakit importante ang hydration para sa may pagtatae`,
//     `Bakit importante ang pag-iinom ng maraming tubig `,
//     `Bakit kailangan mag-inom ng sapat na tubig upang maiwasan ang dehydration `,
//     `Bakit nakakatulong ang pag-iinom ng tubig `,
// ],[
//     `
//     Ang pananatiling hydrated ay mahalaga dahil maaaring maubosan ng tubig ang katawan dulot ng dehydration. Ang ilang pwedeng maging sanhi nito ay ang pagtatae o sobra sobrang pagpapawis. Kaya, ang pinapayuhang uminom ka ng maraming likido, tulad ng tubig, buko juice, am, arrozcaldo, soup, sports drink, sabaw, at oral rehydration solution, ay maaaring palitan ang mga nawawalang likido at electrolyte at maiwasan ito. Inirerekomenda din na iwasan ang mga inumin na maaaring higit pang makairita sa tiyan, tulad ng alchohol, caffeine, at matamis na inumin.  Ang wastong hydration ay makakatulong na mapawi ang mga sintomas at maiwasan ang mga komplikasyon na maaaring magmula sa dehydration.
//     `
// ],1))

// healthy food
// data.push(encodeMemory([
//         //chatgpt start
//     `* masustansya  * (tulong|gamot|buti|galing)`,
//     `Ano ang benepisyo ng pagkain ng mga masustansyang pagkain kung may sakit`,
//     `Ano ang epekto ng masustansyang pagkain sa paggaling`,
//     `Bakit dapat kumain ng pagkain na mayaman sa sustansiya upang gumaling `,
//     `Bakit importante ang pag-iinom o pagkain ng masustansya`,
//     `Bakit importante na kumain ng masustansya`,
//     `Bakit mahalagang kumain ng mga pagkain na mayaman sa sustansiya `,
//     `Bakit nakakatulong ang pag-iinom o pagkain ng masustansya`,
//     `Paano makakatulong ang masustansyang pagkain sa paggaling `,
//     `Paano makakatulong ang pagkain na mayaman sa sustansiya sa pagpapagaling `,
//     `Sa anong paraan ang masustansyang pagkain ay nakatutulong sa pagpapagaling `,
// ],[
//     `Mahalagang kumain ng maayos dahil sinusuportahan nito ang immune system ng iyong katawan.` 
// ],1))

// consult doctor 
// data.push(encodeMemory([
//     `Anong oras dapat magpatingin sa doktor `,
//     `Kailan dapat magpa-checkup o magpatingin sa doktor `,
//     `Kailangan ba ng doktor `,
//     `Kailangan ba ng medical attention`,
//     `Kailangan bang magpa-checkup `,
//     `Kailangan bang magpakonsulta sa doktor`,
//     `Sa anong punto kailangan magpakonsulta sa doktor `,
// ],[
//     `Ipinapayo sa nakakarami na magpatingin sa mga medical professsionals pag may sakit dahil sila ang may higit na alam kung paano gamutin ang mga sakit.`
// ],1))

// where to buy medicines
// data.push(encodeMemory([
//     `saan ako maka bili ng gamot`,
//     `saan mahanap ang gamot`,
//     `saan nakakabili ng gamot`,
//     `san ko pwede bilhin ang gamot`,
// ],[
//     ` Ang mga gamot sa sakit ay maari mong bilhin sa mga bokita. Ang ibang mga grocery outles ay mayron din mga drug sections kung saan pwede kang bumili ng gamot.`
// ],5))

// SYMPTOMS 

// 1. VOMITING
// https://uhs.umich.edu/diarrheavomiting#:~:text=Do%20not%20eat%20or%20drink,ice%2C%20popsicles%20or%20apple%20juice.

data.push(
    encodeMemory([
        `* (gamutin|bawasan|control) *  suka *`,
        `* (kainin|inumin|bilhin) * suka * `,
        `Ano ang dapat gawin para mapigilan ang pagsusuka`,
        `Ano ang dapat gawin kainin kapag may pagsusuka`,
        `Ano ang mga natural pagkain na makakatulong pagpapagaling kapag mayroong pagsusuka`, 
        `Mayroon bang pwedeng gamot kainin kahit may pagsusuka`, 
        `Paano maaaring malunasan maiiwasan makakakain ang pagsusuka pagkain o inumin`,
        `Paano malulunasan ang pagsusuka`,
        `sabihin mo nga sakin anong pwede kong gawin kasi ako ay nagsusuka`,
        `anong pwede gawin kung nagsusuka ako`,
    ],[
        `
        Ang pagsusuka ay ang dahasang paglabas ng kinain ng isang tao galing sa kanyang bitua papuntang bunganga at minsan sa ilong din na pwedeng umubos sa tubig at electrolytes ng katawan. Ito ay karaniwang sintomas ng isang sakit tulad ng gastroenteritis, pagkalason, motion sickness, pagiging buntis ang iba pa.

        Kung ikaw ay nagsusuka, maari mong sundin ang mga sumusunod.
        
        1. Maghintay ng ilang oras bago kumain o uminom. 

        2. Subukang uminom paunti unti ng fluids tulad ng tubig, sports drinks, o sabaw. HUwag kang uminom ng mga mga maasim na juice o gatas. At saka umiwas ka sa mga pagkain o inuming may alchohol, caffeine, mamantikain, maanghang, gatas o keso. Kung kaya mo ay uminom kalang ng tubig paunti unti.

        3. Kung ikaw ay gutom, subukan mong kumain ng saging, kanin, tuyong tinapay, o soda crakers. Kung kaya mo nang kumain ng mga walang lasang pagkain , saka lang kumain ng normal. Ang mga wala masyadong lasang pagkain ay mga tulad ng patatas, bigay, pasta, mga niluto naka pack na prutas, mga nalutong gulay, at karne. 

        Laging isa isip na ang paulit ulit na pagsusuka ay nangangailangan ng agarang gamutan. 
        `
    ],2)
)

// nausea
data.push(
    // nausea should be added in the dictionary
    encodeMemory([
        `* (gamutin|bawasan|control) * nausea *`,
        `* (ano|paano|paraan) * (gamutin|bawasan|control) *  nausea *`,
        `* pagkain * (iwas| (huwag|hindi) * (kainin|inumin|bilhin)) * nausea *`,
        `Aling mga pagkain ang dapat mong iwasan kapag ikaw ay mayroong nausea`,  
        `Ano ang mga dapat iwasang gawin kung mayroong nausea`,
        `Ano ang pwedeng gawin para maibsan ang nausea`,
        `Anong lunas gamot ang pwedeng inumin kung mayroong nausea`,  
        `Anong mga pagkain ang makakapagpabuti kung ikaw ay mayroong nausea`,  
        `Anong mga tips sa pagkain ang makatutulong upang mabawasan ang nausea`,
        `May mga natural na paraan ba para maalis ang nausea`,
        `May paraan ba para mawala ang nausea`,
        `Mayroon bang gamot para sa nausea`,
        `Mayroon bang mga natural na pagkain gamot na pwedeng gamitin para sa nausea`,
        `Paano mapapaginhawa ang pakiramdam kung mayroong nausea`,
        `sabihin mo nga sakin anong pwede kong gawin kasi ako ay nausea`,
        `anong pwede gawin kung nausea ako`,
    ],[
        // reference
        // https://www.urmc.rochester.edu/encyclopedia/content.aspx?contenttypeid=56&contentid=2939
        `Ang nausea o pag duduwal ay iyong pakiramdam na madalas na nagyayari bago magsuka ang isang tao. Ito ay maaring dahilan ng ibang sakit tulad ng motion sickess, sakit sa tyan, epekto ng mga kinaing gamot, at iba pa. Para maibsan ang iniindang karamdaman, magpahinga at uminom ng tubig, sports drinks, o sabaw. Umiwas muna sa mga pinirito , mamantikaing pagkain at mga matatamis. Sa halip, subukang kumain ng mga pagkaing wala masyadong lasa tulad ng saltine crackers o tinapay ng paunti unti. Pag nagpapahinga naman ay subukang I angat ang iyong ulo.
        `
    ],4),
)


// boiling water
data.push(
    encodeMemory([
        `* magpakulo * `,
        `* magpakulo * tubig * `,
        `Ano ang dahilan kung bakit dapat magpakulo ng tubig`,
        `Ano ang nakukuha sa pagpakulo ng tubig`,
        `Bakit dapat pakuluin ang tubig`,
        `Bakit kailangan magpakulo ng tubig`,
        `Bakit kailangan pa magpakulo ng tubig kung malinis na ito`,  
        `Bakit mahalaga ang pagpapakulo ng tubig`,
        `Para saan ba ang pagpakulo ng tubig`,
    ],[
        `Ang pagpapakulo ng tubig ay gingawa upang mapatay ang mga bacteria, virus at protozoa na nakahalo sa tubig. Kapag magpapakulo, siguraduhin na kumukulo ang tubig ng hindi baba sa isang minuto. Kung medyo malabo naman ang tubig, subukang i filter muna ito gamit ang malinis na tela o papel bago ito pakuluin. Para magkaroon ng lasa ang tubig, maari mong lagyan ng isang pinch ng asin kada litro o ilipat ang tubig sa ibang malinis na paglalagyan. `
    ],1),
)

// disinfecting water
data.push(
    encodeMemory([
        `* hakbang * disinfect *`,
        `* disinfect * tubig *`,
        `* ano * (bilhin|gamitin) * disinfect * tubig *`,
        `Ano ang mga hakbang pamamaraan para malinis ang tubig`,
        `Ano ang mga dapat gawin upang malinis ang tubig`,
        `Anong mga bagay ang pwedeng bilhin o gamitin para mai-disinfect ang tubig`,    
        `Paano linisin ang tubig at ano ang mga kailangan na gamitin`,  
    ],[
        `Ang paglilinis ng tubig ay kinakailangan upang mawala ang mga masasamang bacteria, virus o parasites na pwedeng makapagdulot ng sakit tulad ng cholera , typhoid, dystentery at diarrhea. Kapag ang tubig ay di malinia, maari itong macontaminate ng mga microorgaanisms na pwedeng mapagmulan ng ibang ibang sakit. Ang prosesong ito ay nagpapababa na tsansang makakuha ang isang tao ng water borne diseases at masisiguro nito na pwedeng mainom ang tubig.

        Pwede ka mag disinfect ng tubig gamit ang chlorine. Mag handa ng isang stock ng tubig kung saan lagyan ito ng chlorine compounds na 65% hanggang 75% kada litro. Pagkatapos ay maglagay ng dalawang teaspoon ng stock solution na ito sa limang galon (20 liters) ng tubig. Haluin ito ng maayos at hayaan ito ng at least 30 minutes bago unimin.
        `
    ],1)
)


// fever chills
data.push(
    // 
    encodeMemory([
        `* (gamutin|bawasan|control) * (lagnat|panginginig) * `,
        `Ano ang dapat gawin kapag may lagnat at panginginig`,
        `Ano ang dapat kong inumin o gawin kapag nanginginig ako`,
        `Ano ang mabisang paraan para mapababa ang lagnat at panginginig`,
        `Ano ang mga dahilan ng panginginig at lagnat at paano ito gagamutin`,
        `Ano ang mga dapat kainin o iwasan kapag may lagnat at panginginig`,
        `Ano ang mga home remedy sa panginginig ng katawan`,
        `Ano ang mga pagkain na pwedeng kainin kapag mayroon akong panginginig ng katawan`,
        `Ano ang mga paraan upang gamutin ang lagnat o panginginig`,
        `Kailan dapat pumunta sa doktor kung may lagnat at panginginig`,
        `May mga home remedy ba para sa lagnat at panginginig`,
        `May mga natural na paraan ba upang gamutin ang lagnat at panginginig`,
        `Mayroon akong chills, anong dapat kong gawin`,
        `Paano ko malalaman kung mayroon akong fever o lagnat`,
        `Paano maaalis ang lamig ng katawan`,
        `Paano maiiwasan o malulunasan ang pagkakaroon ng lagnat at panginginig`,
        `Paano makatutulong ang pag-inom ng gamot sa paggamot ng lagnat at panginginig`,
        `Paano mawawala ang pangangatog ng katawan`,
        `sabihin mo nga sakin anong pwede kong gawin kasi ako ay nanginginig`,
        `nilalagnat ako`,
    ],[
        `Pwede kang uminom ng fluids para mapatili mo ang sarili mong hydrated. May mga gamot din na nabibili sa botika upang maibsan ang iniida mong sakit. Pwede kang huminge ng payo sa pharmachist ukol sa acetaminophen para sa sakit ng katawan. Kapag ikaw naman ay nilalagnat, subukan maglagay ng medyo basa at mainit na damit sa noo ng pasyente. Magsuot ka din na komportableng mga damit. Hingit na mahalaga na mapanatili mong mainit ang iyong katawan. Magpahinga ka din.`
    ],2)
)


//  nose
data.push(
    // add to dictionary stuffed or clogged
    encodeMemory([
        `* (gamutin|bawasan|control) * bara * ilong *`,
        `Ano ang mga mabisang gawin paraan para iwasan malunasan ang baradong ilong`,
        `Meron bang mga pagkain na nakakatulong sa pagbawas paggamot lunasan ang sipon at baradong ilong`,
        `Paano maiiwasan ang pangangati ng ilong dahil sa baradong ilong`,
        `Paano tanggalin ang sipon at baradong ilong`,
        `anong pwede gawin o gamutin kasi parang barado ilong ko`,
    ],[
        `Ang clogged nose ay nagyayari dahil may bumabara sa iyong nasal passages. Ito ay tinatawag na nasal congestion at maaring dahil ito sa allergies, sipon, flu, sinus infection at iba pang sakit sa baga. Kabilang sa sinotmas ng clogged nose ang hirap na paghinga, madalas na pagkahulog ng sipon or pagbara nito, pressure o sakit sa may ilong at kapag hindi masyado makaamoy at kapag mawal ng lasa ang isang tao.

        Para bumuti ang iniindang sakit, ugaliing uminom ng marmaing tubig upang magnipinis ang sipon sa iyong sinus. Huwag ka ding uminom ng mga inuming nakaka dehydrate tulad ng kape at iyong may mga alchohol. Pwede kang uminom ng mga mainit na tsaa o mga sabaw. Pwede ka ding kumain ng Vitamin C. Ang pag tataob ay pwede ding makatulog sayo upang maka hinga ka. Kinakailangan mo din ng mahabang pahinga. Maglakagay ka din ng warm compress sa may ilong mo. Kung wala ka nito ay subukan mong kumuha ka damit na pwede mong basain ng mainit na tubig at idampi ito sa mukhang ng ilang beses upang maibsan ang nasal congestion. Pwede ka ding gumamit ng saline nasal spray upang bumuka ang iyong nasal pasages. Napag alaman din na ang pagkain ng mga maaanghang ay nakakatulog sa clogged nose. Panghuli, ugaliing gumamit ng tamang gamot. `
    ],2)
)


// headache
data.push(
    encodeMemory([
        `* (gamutin|bawasan|control) *  sakit * ulo *`,
        'anong pwede kong gawin kasi masaki ang ulo ko',
        `Ano ang mga paraan para maibsan maiwasan magamot ang sakit ng ulo`,
        `Ano ang pwedeng inumin o kainin para maibsan ang sakit ng ulo`,
        `May mga gamot ba para sa sakit ng ulo nahihilo`,
        `May paraan ba para mabawasan lunasan ang sakit ng ulo pagkahilo`,  
        `Mayroon bang lunas para sa sakit ng ulo`,
        `Paano gamutin ang sakit ng ulo pagkahilo`,  
        `Paano malulunasa maibsan ang sakit ng ulo`,
        `masakit ang aking ulo, ano pwede kong gawin dito`,
        `sumasakit ang aking ulo, sabihin mo sakin pano ito gamutin`,
    ],[
        `Ang sakit sa ulo ay isa iba iba kaya iba iba din ang mga paraan ng paggamot nito. Ang tension headaches ay kilala din sa hatband headaches. Dahil ang sakit ay nagagagling sa likod ng ulo, temples at noo. Ito ay maaring manatili ng ilang oras hanggang sa ilang araw. Ang mga gamot nito ay physical therapy , muscle relaxants, at over the counter pain relievers (aspirin o ibuprofen). Ang isa pang uri ng sakit sa ulo ay ang tinatawag na migraine. Para maibsan ang sakit ng ulo. Subukang magkulong sa isang madilim na kwarto at mag lagay ng hot o cold compress. Subukan din imasahe ang iyong katawan.`
    ],2),
)


// abdominal crams
data.push(
    encodeMemory([
        `* (gamutin|bawasan|control) *  abdominal * cramps *`,
        `* (gamutin|bawasan|control) * sakit * (tyan|tiyan) *`,
        `Ano ang mabisang kainin gamot sa masakit na tiyan o abdominal cramps`,
        `Ano ang mga gamot sa abdominal cramps`,
        `Ano ang mga natural na lunas sa masakit na tiyan o abdominal cramps`,
        `Ano ang pwede kong gawin kainin o iwasan kung mayroon akong masakit na tiyan o abdominal cramps`,
        `Ano ang pwedeng gawin para maibsan ang sakit ng tiyan habang naghihintay ng gamot`,
        `Anong natural na paraan para gamutin ang abdominal cramps`,
        `Mayroon ba kayong payo para sa masakit na tiyan o abdominal cramps`,
        `Paano mababawasan maiiwasan maibsan ang pagkakaroon ng masakit na tiyan o abdominal cramps`,
        `Paano malulunasan ang masakit na tiyan o abdominal cramps`,
        `Paano mawawala ang abdominal cramps`,
        `masakit ang aking tyan, ano pwede kong gawin dito`,
        `anong pwede kong gamutin o kainin kasi sumasakit ang aking tiyan`,
        //chatgpt end
    ],[
        ` Madalas na ang sakit sa tyan ay nawawala din kahit di ginagamot. Ngunit, may mga bagay bagay parin namang pwede gawin. Subukang mag lagay na mainit na tubig sa botelya sa iyong tiyan. Pwede din subukang maligo sa mainit na tubig. Ingatan mo lang at baka ikaw ay mapaso. Uminom din ng maraming tubig. Huwag ka munang iminom ng kape, tsaaa o may mga alchohol dahil magpapalala ito ng sakit ng tyan. Kapag pwede ka nang kamain ulit, sumubukan mong uminom ng mga tubig tapos kumain ka ng mga wala masyadong lasang pagkain tulad ng crackers, kanin, saging o toas. Magpahinga ka din.`
    ],2),
)

// sore throat
data.push(
    encodeMemory([
        `* (gamutin|bawasan|control) * sakit * lalamunan *`,
        `Ano ang iwasan na pagkain o inumin kung may masakit na lalamunan`,  
        `Ano ang gawin kainin para maiwasan na magkaroon ng masakit na lalamunan`,
        `Ano ang kainin gamot inumin para mabilis na gumaling ang masakit na lalamunan`,  
        `May mga paraan ba para gamutin ang masakit na lalamunan`,  
        `Paano gamutin ang pamamaga at pananakit ng lalamunan`,  
        `masakit ang aking lalamunan, makati din ito`,
        `sumasakit ang aking lalamunan`,
    ],[
        `Kapag nananakit ang iyong lalamunan, imuinom ka ng maraming tubig upang matanggal ang sipon na dumikit o para hindi matuyo ang iyong lalamunan. Kumain ng gamot. I angat ng kaunti ang ulo sa unan kapag hirap kang huminga at para hindi ka masyado umubo.  Subukan mong kumain ng cough drops o lozenges upang guminhawa ang iyong lalamunan. Huwag ka din lumapit sa mga usok. Sa ibang paraan, pwede kang mag mugmog ng mainit na tubig. Ngunin hindi ito ipanapayo sa mga bata.`
    ],2),
)

// stiffness
// data.push(
//     encodeMemory([
//         //chatgpt end
//         `* (gamutin|bawasan|control) * paninigas *`,
//         `Ano ang mga gamot para sa paninigas`,
//         `Ano ang mga paraan para mabawasan ang paninigas sa katawan`,
//         `Anong mga natural na pamamaraan ang makatutulong sa pagtanggal ng paninigas sa katawan`,
//         `Paano maaaring maibsan ang paninigas sa pamamagitan ng natural na paraan`,
//     ],[
//         `Para maibsan ang paninigas ng katawan, pwede mong gawin ang mga sumusuno. Pwede mong gamutin ito sa pamamagitan ng pagpapahinga , pag mamasahe sa katawan, o di kaya pag lagay ng heat at saka cold compress kung saan ito nangyayari. Ang paglagay ng heat o init sa muscle ay makatutulong upang mag loosen ang paninigas nito. Habang ang pag lalagay naman ng cold compress ay nakakatulong upang mabawasan ang pamamaga nito. `
//     ],2),
// )


// SNEEZE
data.push(
    encodeMemory([
        `* takpan * bahing *`,
        `Ano ang tamang paraan ng pagtakip ng bibig at ilong kapag bumabahing`,
        `Ano dahilan kung bakit kailangan takpan ang bibig at ilong kapag bumabahing`,
        `Ano sakit ang maaaring ikalat kapag hindi tinatakpan ang bibig at ilong kapag bumabahing`,
        `Bakit dapat tayong maging responsable at takpan ang bibig at ilong kapag bumabahing`,
        `Mayroon bang panganib kapag hindi tinatakpan ang bibig at ilong kapag bumabahing`,
        `Nakakasama ba sa kalusugan ang hindi pagtakip ng bibig at ilong kapag bumabahing`,
        `Paano nakakatulong ang pagtakip ng bibig at ilong sa pagbabahing`,
        `Sino ang dapat magtakip ng bibig at ilong kapag bumabahing`,
    ],[
        `Pinapayuhang takpan ang bunganga at ilong kapag ikaw ang bumabahing o umuubo upang hindi ka magkalat ng virus sa iyong paligid. Pwede kang bumahing sa isang tisuee kung kinakailangan. Ngunit siguraduhin mong itapon ito ng maayo. Kung wala ka namang tissue, bumahing o umubo sa iyong braso at hindi sa iyong kamay. Pagkatapos ay hugasan ito ng maayo at gumamit ng sanitizer.`
    ],2),
)

data.push(
    encodeMemory([
        `* hakbang * hugas * kamay * `,
        `* hugas * kamay * `,
        `* linis * kamay * `,
        `Ano ang kahalagahan tamang paraan ng paghuhugas ng kamay`,
        `Bakit kailangan pang humugas ng kamay kahit malinis naman ang kamay`,
        `Bakit kailangang linisin maghugas ng kamay`,
        `Bakit mahalaga ang paglilinis ng kamay`,
        `Paano ba ang tamang paghugas ng kamay`,
        `Paano dapat hugasan ang kamay`,
        `Paano hugasan ang kamay nang maayos`,
        `Paano makakapaglinis ng kamay nang mabuti`,
        `Paano makakapagpigil ng sakit sa paglilinis ng kamay`,
        `Paano makakatulong ang paglilinis ng kamay sa kalusugan`,
        `Paano malilinis ang kamay`,
        `ano ang panglinis ng kamay`,
    ],[
        `Ang pag huhugas ng kamay ay mag proprotekta sayo laban sa mga mikrobyo. Maglagay ng sabon nang hindi bababa sa 20 segundo. Pagkatapos maglagay ng sabon sa iyong mga kamay, kuskusin ang iyong mga kamay nang hindi bababa sa 20 segundo. Gawin mo yan hanggang matapos mong kantahin ang Maligayang Kaarawan nang dalawang beses. 
        
        Gumamit ng hand sanitizer kapag hindi posible ang paghuhugas. Gumamit ng alcohol-based na hand sanitizer kapag walang tubig. Ilapat ang hand sanitizer gaya ng pag-hand lotion mo, siguraduhing takpan ang harap at likod ng magkabilang kamay. Gumamit ng isang produkto na naglalaman ng hindi bababa sa 60% na alkohol.`
    ],6),
)



// GENERAL CONVERSATIONS
// treatments
// data.push(
//     encodeMemory([
//         `* gamot *`,
//     ],[
//         `
//         Ang mga gamot ay kadalasang hinahanap ng mga pasyente dahil ito ay mas nakakapagpapabuti sa sakit at mga sintomas nito.Maari nitong controling ang mga condisyon ng tao , ang mga pamama, mga impekyon, at ang pangkalahatang kalusugan ng tao. Ngunit, importanteng maging maingat. 

//         Kung ikaw may may karandagang tanong, maari akong magbigay ng impormasyon ukol sa mga gamot tulad ng antimotilities, bismuth subsalicylate, antihistamines, analgesics, nsaids, decongestants, expectorants, antitussives at lozenges.`
//     ],1)
// )

// medicines

// treatments
data.push(
    encodeMemory([
        `* (sintomas|senyales|tanda) *`,
    ],[
        `
        Ang mga sakit may may kanya kanyang sintomas at senyales. Upang matulungan kita, baka pwedeng maging specific ka sa impormasyon sa mga chat mo kung para sa pagtatae o trangkaso ang hinahanap mo.`
    ],1)
)

// symptoms
data.push(
    encodeMemory([
        `* (hi|hello) *`,
        `* (magandang)? (umaga|gabi|tanghali) *`,
        `* kamusta *`,
    ],[
        `Kamusta, paano kita matutulungan. Paumanhin, hindi ko nauwaan ang nasabi mo. Hindi ako ganon katalino kaya kung maari ay tulungan natin ang isa't isa sa ating paguusap.`
    ],1)
)

// signs
// data.push(
//     encodeMemory([
//         ` * (ano|sino|saan|paano|kailan) *`,
//     ],[
//         `Paumanhin, mukhang hindi ko naintindihan ang iyong pinagsasabi. Baka pwedeng muli mo itong sabihin linawin kung tungkol ba ito sa trangkaso o pagtatae`
//     ],1)
// )

// antimotilities
data.push(
    encodeMemory([
        `* antimotility *`,
    ],[
        `Paumanhin, hindi ko naintindihan ang iyong sinabi tungkol sa antimotilities.`
    ],1)
)

// bismuth 
data.push(
    encodeMemory([
        `*bismuth*`,
    ],[
        `Paumanhin, hindi ko naintindihan ang iyong sinabi tungkol sa bismuth subsalicylate.`
    ],1)
)

// antihistamines
data.push(
    encodeMemory([
        `* antihistamines *`,
    ],[
        `Hindi kita naintindihan ba, pasensya na. Ano nga iyong sinasabi mo tungkol sa bismuth subsalicylate`
    ],1)
)

// analgesics
data.push(
    encodeMemory([
        `* analgesics *`,
    ],[
        `Hindi ko naintindihan ang mga sinabi mo tungkol sa analgesics. Pasensya na.`
    ],1)
)
// nsaids
data.push(
    encodeMemory([
        `* nsaids *`,
    ],[
        `Hindi ko naintindihan ang mga sinabi mo tungkol sa nsaids. Pasensya na.`
    ],1)
)

// decongestants
data.push(
    encodeMemory([
        `* decongestants *`,
    ],[
        `Alam kong tungkol sa decongestants pinagsasabi mo, pero hindi ko ito naintindihan ba. Pasensya na.`
    ],1)
)

// expectorants
data.push(
    encodeMemory([
        `* expectorants *`,
    ],[
        `Alam kong tungkol sa expectorants pinagsasabi mo, pero hindi ko ito naintindihan ba. Pasensya na.`
    ],1)
)

// anttussives
data.push(
    encodeMemory([
        `* antitussives *`,
    ],[
        `Alam kong tungkol sa antitussives pinagsasabi mo, pero hindi ko ito naintindihan ba. Pasensya na.`
    ],1)
)

// lozenges
data.push(
    encodeMemory([
        `* lozenges *`,
    ],[
        `Alam kong tungkol sa lozenges pinagsasabi mo, pero hindi ko ito naintindihan ba. Pasensya na.`
    ],1)
)

// help
data.push(
    encodeMemory([
        `* (tulong|help) *`,
    ],[
        `Gusto kitang tulungan ngunit kinakailangan ko ng karagdagang impormasyon. Pwede mo ako tanungin tungkol sa pagtatae o trangkaso. Pwede kitang mabigyan ng impormasyon para matulungan ka.`
    ],1)
)


// what is diarrhea
data.push(
    encodeMemory([
        `* pagtatae *`,
    ],[
        `Mukhang hindi ko naintindihan ang sinabi mo tungkol sa pagtatae. Para matulungan kita ng maayos, baka pwedeng pakiulit ang iyong sinabi. Maari kang mag tanong tungkol sa mga gamot, mga payo, at kung ano ang mga dapat mong iwasan o pwede mong kaining mga pagkain.`
    ],1))

data.push(
    encodeMemory([
        `* influenza *`,
    ],[
        `Mukhang hindi ko naintindihan ang sinabi mo tungkol sa influenza o trangkaso. Para matulungan kita ng maayos, baka pwedeng pakiulit ang iyong sinabi. Maari kang mag tanong tungkol sa mga gamot, mga payo, at kung ano ang mga dapat mong iwasan o pwede mong kaining mga pagkain.`
    ],1))


data.push(
    encodeMemory([
        `*vomit*`,
    ],[
        `Pasensya na, hindi ko masyadong naintindihan ang sinabi mo tungkol sa pagsusuka. Ngunit, pwede kitang bigyan ng payo para guminhawa ang nakakaramdam nito`
    ],1)
)
data.push(
    encodeMemory([
        `*headache*`,
        `*ulo*`,
        `*masakit*ulo*`
    ],[
        `Pasensya na, hindi ko masyadong naintindihan ang sinabi mo tungkol sa masakit na ulo. Ngunit, pwede kitang bigyan ng payo para guminhawa ang nakakaramdam nito`
    ],1)
)
data.push(
    encodeMemory([
        `*abdominal * cramps *`,
        `* cramps *`,
        `* abdominal *`,
    ],[
        `Pasensya na, hindi ko masyadong naintindihan ang sinabi mo tungkol sa sumasakit na tyan. Ngunit, pwede kitang bigyan ng payo para guminhawa ang nakakaramdam nito`
    ],1)
)

data.push(
    encodeMemory([
        `*baradong*ilong*`,
        `*clogged*nose*`,
        `*nose*`,
    ],[
        `Pasensya na, hindi ko masyadong naintindihan ang sinabi mo tungkol sa baradong ilong o taong hindi masyado makahinga. Ngunit, pwede kitang bigyan ng payo para guminhawa ang nakakaramdam nito`
    ],1)
)

data.push(
    encodeMemory([
        `*nausea*`,
    ],[
        `Pasensya na, hindi ko masyadong naintindihan ang sinabi mo tungkol sa nausea o pagduduwal. Ngunit, pwede kitang bigyan ng payo para guminhawa ang nakakaramdam nito`
    ],1)
)

data.push(
    encodeMemory([
        `*fever*`,
    ],[
        `Pasensya na, hindi ko masyadong naintindihan ang sinabi mo tungkol sa pagkakaroon ng lagnat. Ngunit, pwede kitang bigyan ng payo para guminhawa ang nakakaramdam nito`
    ],1)
)


// catch all
data.push(
    encodeMemory([
        `*`,
    ],[
        `Pasensya na, mukhang hindi ko naiintindihan ang iyong sinasabi.`
    ],1))


export let fil = [].concat(data)