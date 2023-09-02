import { encodeMemory } from "@/api/config/model"

let section4 = [
    encodeMemory([
        `* (bakit|paano|kailan) * virus * trangkaso *`,
        `Ano ang dahilan kung bakit ang virus ay nakakapagdulot ng influenza?`,  
        `Ano ang epekto ng virus sa katawan na nagiging sanhi ng trangkaso o influenza?`,  
        `Ano ang proseso kung bakit ang virus ay nakakapagdulot ng trangkaso o influenza sa katawan?`,
        `Ano ang proseso kung bakit nagkakaroon ng influenza dahil sa virus?`,  
        `Bakit nagiging sanhi ng trangkaso o influenza ang virus sa katawan?`,  
        `Bakit nagkakaroon ng trangkaso o influenza dahil sa virus?`,  
        `Bakit nakakaapekto ang virus sa katawan at nagiging sanhi ng influenza?`,  
        `Paano nakakapagdulot ng influenza ang virus sa katawan?`,  
        `Paano nakakapagdulot ng trangkaso o influenza ang virus sa katawan?`,  
        `Paano nakakapagdulot ng sakit tulad ng influenza ang mga virus?`,  
    ],[
        `Ang mga virus ay nagdudulot ng trangkaso. Ang mga ito ay kumakalat kapag ang mga taong may trangkaso ay umuubo, bumahin o nagsasalita, nagpapadala ng mga droplet na may virus sa hangin at posibleng sa mga bibig o ilong ng mga taong nasa malapit.`
    ],1),
    encodeMemory([
        `* (paano|saan) * kuha * trangkaso *`,
        `* kuha * trangkaso * (paano|saan) *`,
        `Ano ang mga bagay na maaaring magdulot ng trangkaso?`,
        `Ano ang mga gawain o pagkakataon na maaaring magdulot ng trangkaso?`,
        `Ano ang mga paraan ng pagkakahawa ng trangkaso?`,
        `Paano kumakalat ang trangkaso?`,
        `Paano nakakapasa ng trangkaso sa iba?`,
        `Saan nagmumula ang trangkaso?`,
        `Saan pinakamadalas makukuha ang trangkaso?`,
        `Sino ang mga madalas magdala at magpakalat ng trangkaso?`,
    ],[
        `Maaari kang makakuha ng trangkaso kapag nalalanghap mo o nalalanghap ang hangin na inilabas ng taong bumahing o umuubo kahit kaunti lang. Ang mga virus na ito ay maaari ding maipasa sa pamamagitan ng paghawak sa mga bagay na nahawaan ng virus. Sa simpleng mga salita, maaari mo itong makuha kapag nadikit ka sa mga ibabaw, materyales, at damit na kontaminado ng dischages ng taong nahawahan. Ang mga pana-panahong pagbabago ay maaari ding magdulot ng trangkaso dahil humihina ang mga panlaban natin lalo na sa pagbaba ng temperatura.`
    ],1),
    encodeMemory([
        `* kuha * trangkaso * `,
        `Maaari bang mahawa sa  trangkaso?`,
        `Maari bang kumalat ang trangkaso sa mga taong nakakasalamuha mo`,
        `Maaring magdulot ng trangkaso sa ibang tao?`,
        `Maaring makahawa ang trangkaso ?`,
        `Nakakahawa ba ang trangkaso ?`,
        `Nakukuha ba ang trangkaso ?`,
        `Posible bang magkahawaan ng trangkaso ?`,
    ],[
        `Ang paglanghap ng hangin at ang pagkakaroon ng pisikal na paghawak sa mga bagay na nahawaan ng virus ay ang mga kilalang paraan ng pagkakaroon ng trangkaso. Palaging magsuot ng mask sa mataong lugar, maghugas ng kamay nang madalas, at gumamit ng hand sanitizer bilang pag-iingat.`
    ],1),
    encodeMemory([
        `* ano * (trigger|dulot|resulta|bigay|dahilan) * trangkaso *`,
        `Ano ang mga nagiging dahilan ng trangkaso?`,
        `Ano ang mga pangunahing dahilan ng trangkaso?`,
        `Ano ang mga pinagmulan ng trangkaso sa katawan?`,
        `Ano ang mga sanhi ng trangkaso sa isang tao?`,
        `Bakit nagkakaroon ng trangkaso ang isang tao?`,
        `Maaari bang makakuha ng trangkaso mula sa ibang tao?`,
        `Mayroon bang mga bagay na nakapagpapahirap ng trangkaso?`,
        `Paano maaaring magka-trangkaso ang isang tao?`,
        `Paano magkakatrangkaso ang isang tao?`,
        `Saan nanggagaling ang trangkaso sa tao?`,
    ],[
        `Ang influenza ay sanhi ng virus. Kung huminga ka ng hanging ibinuga ng isang taong nahawahan, maaari mong malanghap ang virus at makakuha ng sakit. Ang parehong bagay ay maaaring mangyari kung hinawakan mo ang isang bagay na nahawakan ng isang nahawaang tao. Maaari kang makakuha ng virus, kung ang iyong mga kamay ay nadikit sa iyong mga mata, ilong, at bibig.`
    ],1),
]

let section5 = [
    encodeMemory([
         `Ano ang epekto ng pagpapahinga sa paggaling mula sa trangkaso o influenza?`, 
        `*(bakit|paano) * pahinga * (tulong|gamot|buti|galing) * trangkaso *`,
        `Ano ang mga benepisyo ng pagpapahinga sa paggaling mula sa trangkaso o influenza?`, 
        `Ano ang mga dapat gawin upang makatulong sa pagpapalakas ng immune system sa pamamagitan ng pagpapahinga?`, 
        `Bakit mahalaga ang pagpapahinga sa paggaling mula sa trangkaso o influenza?`, 
        `Bakit mahalagang magpahinga kapag may trangkaso o influenza?`,
        `Paano maiiwasan ang pagkasira ng immune system sa pamamagitan ng pagpapahinga?`, 
        `Paano nakakapagpahinga ang katawan sa pagpapahinga upang makipaglaban sa trangkaso o influenza?`, 
        `Paano nakakatulong ang pagpapahinga sa pagbaba ng lagnat sa panahon ng trangkaso o influenza?`, 
        `Paano o Bakit nakakatulong ang pagpapahinga sa paggaling mula sa trangkaso o influenza?`, 
    ],[
        `Dapat kang manatili sa bahay hanggang sa mawala ang iyong lagnat nang hindi bababa sa 24 na oras. Ang isang taong may trangkaso ay natural na gagaling sa loob ng 2 hanggang 7 araw. Sa pamamagitan ng pagpapahinga sa araw, ang iyong katawan ay maaaring maglaan ng mas maraming mapagkukunan sa paglaban sa virus. Bukod sa pagtulong sa iyong gumaling, ang pananatili sa bahay ay pinipigilan din ang pagkalat ng trangkaso sa ibang tao sa iyong komunidad o lugar ng trabaho.`
    ],1),
    encodeMemory([
        `*(bakit|paano) * inom * tubig * (tulong|gamot|buti|galing) * trangkaso *`,
        `Ano ang epekto ng pag-inom ng tubig sa paggaling ng trangkaso o influenza?`,  
        `Ano ang tamang paraan ng pag-inom ng tubig para makatulong sa pagpapagaling ng trangkaso o influenza?`,  
        `Bakit ang tubig ay mas mainam kaysa sa ibang mga inumin kapag may trangkaso o influenza?`,  
        `Bakit mahalaga ang pag-inom ng tubig kapag may trangkaso o influenza?`,  
        `Gaano karaming tubig ang dapat mong inumin para mapabilis ang paggaling mo sa trangkaso o influenza?`,  
        `Magkano ang tubig na dapat mong inumin kapag may trangkaso o influenza?`,  
        `May mga pagkaing dapat iwasan kapag may trangkaso o influenza, pero bakit hindi kasama dito ang tubig?`,
        `Paano mo malalaman kung sapat na ang naiinom mong tubig para sa pagpapagaling ng trangkaso o influenza?`,  
        `Paano nakakatulong ang tubig sa pagpapagaling ng trangkaso o influenza?`,  
        `Saan galing ang benepisyo ng pag-inom ng tubig sa pagpapagaling ng trangkaso o influenza?`,  
    ],[
        `Pinapayuhan ang sinumang nakakararanas ng trangkaso na dalasan ang pag inom ng tubig.Ang isang sintomas ng trangkaso ay isang mataas na lagnat, na maaaring humantong sa pagpapawis. Maaari ka ring dumaranas ng mga pagsusuka o pagtatae. Ang iyong katawan ay nangangailangan ng maraming likido upang palitan ang mga nawawalang likido, at higit pa upang labanan ang impeksiyon.`
    ],1),
    encodeMemory([
        `*(bakit|paano) * iwasan * pagod * (tulong|gamot|buti|galing) * trangkaso *`,
        `Ano ang epekto ng sobrang pagod sa ating katawan habang may trangkaso o influenza?`, 
        `Ano ang maaaring mangyari kapag nagpapagod tayo habang may trangkaso o influenza?`, 
        `Ano ang mga epekto ng hindi sapat na pahinga sa ating katawan habang may trangkaso o influenza?`,
        `Bakit hindi maganda na magpapagod kapag may trangkaso o influenza?`, 
        `Bakit mahalaga ang pag-iwas sa pagod para gumaling sa trangkaso o influenza?`, 
        `Bakit mahalaga ang sapat na pahinga para sa mabilis na paggaling sa trangkaso o influenza?`, 
        `Paano makaaapekto ang sobrang trabaho sa paggaling ng trangkaso o influenza?`, 
        `Paano makakaapekto ang sobrang pagod sa ating immune system kapag may trangkaso o influenza?`, 
        `Paano makakatulong ang pagpapahinga sa ating katawan habang may trangkaso o influenza?`, 
        `Paano nakakatulong ang sapat na pahinga sa ating immune system kapag may trangkaso o influenza?`, 
    ],[
        `Ang pagiging aktibo ay maaaring magdulot ng pag-ubo, paghingal, pagbahing at pag-iipon ng hininga na maaaring hindi ka komportable. Maaari mo ring maikalat ang virus sa ganitong paraan. Maghintay ng ilang araw bago gumawa ng mabibigat na aktibidad o hanggang gumaling ka.`
    ],1),
    encodeMemory([
        `*(bakit|paano) * masustansya * (tulong|gamot|buti|galing) * trangkaso *`,
        `Ano ang kahalagahan ng pagkakaroon ng sapat na nutrisyon sa paggaling ng trangkaso o influenza?`,
        `Ano ang mga pagkain na dapat kainin upang mapabilis ang paggaling sa trangkaso o influenza?`,
        `Ano ang mga uri ng pagkain na dapat iwasan habang may trangkaso o influenza?`,
        `Bakit dapat kumain ng masusustansyang pagkain para magkaroon ng lakas sa pakikipaglaban sa trangkaso o influenza?`,
        `Bakit kailangang magkaroon ng balanced diet para malabanan ang trangkaso o influenza?`,
        `Bakit mahalaga ang pagkain ng mga masusustansyang pagkain upang malabanan ang trangkaso o influenza?`,
        `Bakit mahalagang kumain ng mga pagkain na mayaman sa protina para makatulong sa pagpapagaling sa trangkaso o influenza?`,
        `Paano nakakatulong ang tamang nutrisyon sa pagpapalakas ng resistensya upang maiwasan ang trangkaso o influenza?`,
        `Paano nakatutulong ang masusustansyang pagkain sa pagpapalakas ng immune system para labanan ang trangkaso o influenza?`,
        `Paano nakatutulong ang mga prutas at gulay sa pagpapalakas ng katawan upang malabanan ang trangkaso o influenza?`,
    ],[
        `Ang iyong katawan ay nangangailangan ng tamang nutrisyon upang gumaling mula sa trangkaso. Ang mga sariwang prutas at gulay ay nagbibigay ng mahahalagang bitamina, mineral, at antioxidant na nagpapalakas sa iyong immune system habang nilalabanan nito ang virus.`
    ],4),
    encodeMemory([
        `* kailan * consult * doktor * trangkaso * `,
        `* sino * (tulong|gamot|buti|galing) * trangkaso * `,
        `*(bakit|paano) * consult * doktor *  (tulong|gamot|buti|galing) * trangkaso *`,
        `Ano ang mga senyales na hindi dapat balewalain upang magpatingin sa doktor kung may trangkaso o influenza?`,
        `Ano ang mga senyales na kailangan ng doktor kung may trangkaso o influenza?`,
        `Anong magiging benepisyo kung magkonsulta sa doktor para sa trangkaso o influenza?`,  
        `Anong mga gamot o pamamaraan ang maaaring ibigay ng doktor para sa trangkaso o influenza?`,  
        `Anong mga impormasyon ang makukuha sa doktor para sa tamang pagpapagamot ng trangkaso o influenza?`,  
        `Bakit hindi dapat balewalain ang pagkonsulta sa doktor para sa trangkaso o influenza?`,  
        `Bakit hindi dapat mag-self medicate para sa trangkaso o influenza at dapat magpakonsulta sa doktor?`,
        `Bakit importante ang pagpunta sa doktor para gumaling sa trangkaso o influenza?`,  
        `Bakit mahalagang sundin ang payo ng doktor para sa tamang pagpapagaling sa trangkaso o influenza?`,  
        `Kailan dapat magpatingin sa doktor kung may trangkaso o influenza?`,
        `Kailan nararapat na magpatingin sa doktor kung may trangkaso o influenza?`,
        `Kailangan ba ng doktor kung may trangkaso o influenza?`,
        `Kailangan ba ng reseta ng doktor kung may trangkaso o influenza?`,
        `Kanino ka dapat lumapit kapag ikaw ay may trangkaso?`,
        `Kanino ka puwedeng humingi ng tulong kapag ikaw ay may trangkaso?`,
        `Mayroon bang mga tao na makakatulong sa iyo kapag ikaw ay may trangkaso?`,
        `Meron bang mga senyales na dapat bantayan para magpatingin sa doktor kung may trangkaso o influenza?`,
        `Meron bang mga senyales na hindi dapat ikaligta upang magpatingin sa doktor kung may trangkaso o influenza?`,
        `Paano magbibigay ng tamang diagnosis ang doktor para sa trangkaso o influenza?`,  
        `Paano makakatulong ang doktor upang gumaling sa trangkaso o influenza?`,  
        `Paano makakatulong ang doktor upang maiwasan ang posibleng komplikasyon mula sa trangkaso o influenza?`,  
        `Sa anong punto dapat magpatingin sa doktor kung may trangkaso o influenza?`,
    ],[
        `Ang trangkaso ay kadalasang gumagaling ng kusa, ngunit maaari itong magdulot ng malubhang karamdaman sa ilang tao tulad ng pneumonia na pwedeng ikamatay ng isang tao. Ang mga doktor ay maaring magpayo ng tamang gamot para sa trangkaso.  Kung nangangaib dahil sa ng mga komplikasyon, makipag-ugnayan sa iyong doktor sa sandaling magsimula ang iyong mga sintomas.`
    ],5),
    encodeMemory([
        `* sino * (tulong|gamot|buti|galing) * trangkaso * `,
        `Kanino ka dapat lumapit kapag ikaw ay may trangkaso?`,
        `Kanino ka puwedeng humingi ng tulong kapag ikaw ay may trangkaso?`,
        `Mayroon bang mga tao na makakatulong sa iyo kapag ikaw ay may trangkaso?`,
        `Sino ang maaaring magbigay ng tulong sa iyo kapag ikaw ay may trangkaso?`,
        `Sino ang mga dapat mong lapitan kapag ikaw ay may trangkaso?`,
        `Sino ang mga taong maaaring tumulong sa iyo sa panahon ng iyong pagkakasakit?`,
        `Sino ang mga taong maaring magbigay ng support sa iyo sa panahon ng iyong pagkakasakit?`,
        `Sino ang puwedeng mag-alaga sa iyo kapag ikaw ay may trangkaso?`,
        `Sino ang puwedeng mag-alaga sa iyo sa panahon ng iyong pagkakasakit?`,
        `Sino ang puwedeng tumulong sa iyo para gumaling sa iyong trangkaso?`,
    ],[
        `Maaari mong alagaan ang iyong sarili. May mga over-the-counter na gamot na makakatulong sa pagpapabuti ng mga sintomas tulad ng lagnat, pananakit at ubo. Kinakailangan mong ding magpahinga upang gumaling. Dapat manatili lang sa bahay hanggang sa mawala ang iyong lagnat. Ugaliing uminom ng maraming tubig. Iwasan din ang mga nakakapagod na gawain. Kumain din ng masusustansyang pagkain. Gayunpaman, mas makakatulong sa iyo ang pagpapatingin sa doktor kung mas malala ang iyong pakiramdam. Maaari silang magreseta sa iyo ng partikular na gamot at direksyon.`
    ],1),
    encodeMemory([
        `* gamutin * trangkaso * saan *`,
        `* saan * gamutin * trangkaso *`,
        `Alin ang mga lugar na nag-ooffer ng mga gamot para sa trangkaso o influenza?`,  
        `Anong mga lugar ang puwede mong puntahan para magpagamot ng trangkaso o influenza?`,  
        `Kailangan mo bang pumunta sa doktor o puwede kang magpagaling sa bahay lamang?`,  
        `Mayroon bang mga clinics o hospitals na nagtutugon sa mga taong may trangkaso o influenza?`,  
        `Saan ka pupunta kung nais mong magpagamot ng trangkaso o influenza?`,  
        `Saan puwedeng magpagamot ng trangkaso o influenza?`,  
        `Saang mga establisyemento ka pwedeng magpatingin kung ikaw ay may trangkaso o influenza?`,  
        `Saang mga lugar puwedeng makabili ng mga natural na lunas para sa trangkaso o influenza?`,
    ],[
        `Maaari mo itong gawin iyong tahanan. Kapag malala ang kaso nito, kailangan mong magpatingin kaagad sa doktor lalo na kung kabilang ka sa mga high risk group`
    ],5),
    encodeMemory([
        `* saan * bili * (analgesics?|ibuprofen|advil|naproxen|paracetamol|aspirin|antihistamines?|benadryl|cetirizine|decongestants?|expectorants?|antitussives?|cough suppressants?|dextromethorphan|guaifenesin|robitussin) *`,
        `* saan * (analgesics?|ibuprofen|advil|naproxen|paracetamol|aspirin|antihistamines?|benadryl|cetirizine|decongestants?|expectorants?|antitussives?|cough suppressants?|dextromethorphan|guaifenesin|robitussin) * bili *`,
        `* saan * bili * gamot * trangkaso`,
        `Saan makakabili ng gamot tulad ng (analgesics?|ibuprofen|advil|naproxen|paracetamol|aspirin|antihistamines?|benadryl|cetirizine|decongestants?|expectorants?|antitussives?|cough suppressants?|dextromethorphan|guaifenesin|robitussin) para sa trangkaso o influenza?`,
        `Nasaan mabibili ang tulad ng (analgesics?|ibuprofen|advil|naproxen|paracetamol|aspirin|antihistamines?|benadryl|cetirizine|decongestants?|expectorants?|antitussives?|cough suppressants?|dextromethorphan|guaifenesin|robitussin) gamot para sa trangkaso o influenza?`,
        `Mayroon bang mga botika saan makakabili ng gamot tulad ng (analgesics?|ibuprofen|advil|naproxen|paracetamol|aspirin|antihistamines?|benadryl|cetirizine|decongestants?|expectorants?|antitussives?|cough suppressants?|dextromethorphan|guaifenesin|robitussin) para sa trangkaso o influenza?`,
        `Saang mga tindahan makakabili ng gamot tulad ng (analgesics?|ibuprofen|advil|naproxen|paracetamol|aspirin|antihistamines?|benadryl|cetirizine|decongestants?|expectorants?|antitussives?|cough suppressants?|dextromethorphan|guaifenesin|robitussin) para sa trangkaso o influenza?`,
        `Anong mga lugar ang nagbebenta ng gamot tulad ng (analgesics?|ibuprofen|advil|naproxen|paracetamol|aspirin|antihistamines?|benadryl|cetirizine|decongestants?|expectorants?|antitussives?|cough suppressants?|dextromethorphan|guaifenesin|robitussin) para sa trangkaso o influenza?`,
        `May mga pharmacy ba sa paligid na nagtitinda ng gamot tulad ng (analgesics?|ibuprofen|advil|naproxen|paracetamol|aspirin|antihistamines?|benadryl|cetirizine|decongestants?|expectorants?|antitussives?|cough suppressants?|dextromethorphan|guaifenesin|robitussin) para sa trangkaso o influenza?`,
        `Saan nakakabili ng tamang gamot tulad ng (analgesics?|ibuprofen|advil|naproxen|paracetamol|aspirin|antihistamines?|benadryl|cetirizine|decongestants?|expectorants?|antitussives?|cough suppressants?|dextromethorphan|guaifenesin|robitussin) para sa trangkaso o influenza?`,
        `Saan puwedeng bumili ng (analgesics?|ibuprofen|advil|naproxen|paracetamol|aspirin|antihistamines?|benadryl|cetirizine|decongestants?|expectorants?|antitussives?|cough suppressants?|dextromethorphan|guaifenesin|robitussin)  sa trangkaso o influenza?`,
        `Saan maganda bumili ng (analgesics?|ibuprofen|advil|naproxen|paracetamol|aspirin|antihistamines?|benadryl|cetirizine|decongestants?|expectorants?|antitussives?|cough suppressants?|dextromethorphan|guaifenesin|robitussin)  para sa trangkaso o influenza?`,
    ],[
        `Karamihan sa mga over-the counter na gamot na makakatulong para sa mga sintomas ng trangkaso ay mabibili sa iyong pinakamalapit na parmasya. Gayunpaman, kailangan mong magkaroon ng reseta sa mga gamot tulad ng mga antiviral.`
    ],5),
    encodeMemory([
        `* (tulong|gamot|buti|galing|gawin) * trangkaso * ano *`,
        `* (tulong|gamot|buti|galing|gawin) * trangkaso * paano *`,
        `* ano *  (tulong|gamot|buti|galing|gawin) * trangkaso *`,
        `* ano * trangkaso * (tulong|gamot|buti|galing|gawin) *`,
        `* paano * (tulong|gamot|buti|galing|gawin) * trangkaso *`,
        `* trangkaso * (tulong|gamot|buti|galing|gawin) * paano *`,
        `Ano ang dapat gawin para gumaling mula sa trangkaso o influenza?`,
        `Ano ang mga dapat kainin o inumin kapag may trangkaso o influenza?`,
        `Ano ang mga dapat kainin o inumin para mapabilis ang pagpapagaling mula sa trangkaso o influenza?`,
        `Ano ang mga hakbang na dapat gawin upang malunasan ang trangkaso o influenza?`,
        `Ano ang mga pamamaraan na makakatulong sa pagpapagaling mula sa trangkaso o influenza?`,
        `Ano ang mga paraan para mabawasan ang  trangkaso o influenza?`,
        `May mga gamot ba na pwedeng gamitin upang pagalingin ang trangkaso o influenza?`,
        `Mayroon bang mga natural na paraan upang magpagaling mula sa trangkaso o influenza?`,
        `Mga dapat gawin para bumuti ang pakiramdam kapag may trangkaso o influenza`,
        `Paano magpagaling sa trangkaso o influenza sa pamamagitan ng self-care?`,
        `Paano magpakalma ng nararamdaman sa gitna ng trangkaso o influenza?`,
        `Paano mapapagaan ang mga trangkaso o influenza?`,
        `Paano matutulungan ang sarili na makarekober mula sa trangkaso o influenza?`,
        `Paano po ba malunasan ang trangkaso o influenza?`, `Ano ang mga paraan upang malunasan ang trangkaso o influenza?`,
        //chatgpt end
    ],[
        `
        Ang trangkaso , o karaniwang tinatawag na flu, ay isang impeksyon durlog ng virus na nakakaapekto sa paghinga o baga ng isang tao. Kaya dapat magpahinga at uminom ng mga likido upang maiwasan ang pagkaubos ng tubig sa katawan.

        Mayroon ding mga over the counter na gamot na mabibili. Maaari kang uminom ng mga antihistamine upang mapawi ang mga nakakainis na sintomas gaya ng pagbabahing, pangangati, at pagkaka sipon. Minsan ay iniinom ang mga analgesic tulad ng acetaminophen o ibuprofen upang mabawasan ang lagnat at mapawi ang pananakit ng katawan. Gayundin, ang mga non-steroidal na anti-inflammatory na gamot. Kung may barado kang ilong, nakakatulong din ang mga decongestant dahil nakakatulong ito sa pagtanggal ng baradong ilong at pag-alis ng presyon sa iyong sinuses. Kung umuubo, ang mga antitussives naman ay nakakatulong sa pamamagitan ng ng pagluwag ng makapal na uhog. Sa wakas, ang lozenges ay maaaring pansamantalang mapawi ang mga sintomas tulad ng namamagang lalamunan, pangangati ng lalamunan, o ubo.

        Ang mga malalang kaso ay maaaring kailanganin ang ospital. Ang pag-iwas sa mga bagay bagay na pwedeng makahawa sa trangkaso ay kinakailangan. Kaya ang pagkuha ng taunang bakuna laban sa trangkaso ay ang pinakamabisang paraan upang maprotektahan ang sarili mula sa pagkakasakit.
        `
    ],1),
]


export const data = 
    [].concat(section4)
        .concat(section5)
