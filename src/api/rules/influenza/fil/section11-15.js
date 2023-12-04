import { encodeMemory } from "@/api/config/model"

let section11 = [
    // antihistamines
    // encodeMemory([
    //     `* generic * antihistamine * `,
    //     `bigay ilista sabihin ano ang mga pangalan ng generic na antihistamines`,
    //     `Mayroon ka bang listahan o Maaari mo bang sabihin ang mga pangalan ng generic na antihistamines`,
    // ], [
    //     `Ang Citerizine ay isa sa mga kilalang generic na antihistamine. Mahalagang tandaan na ang mga gamot na ito ay maaaring may iba't ibang mga pangalan o brand depende sa bansa at tagagawa. Kung nakakaramdam ka ng sintomsa ng trangkaso, magpahinga ka at lumayo sa mga mauusok na lugar. Laging tandaan na kumunsulta sa isang doktor o parmasyutiko bago uminom ng anumang gamot.
    //     `
    // ],7),
    // encodeMemory([
    //     `* branded * antihistamine * `,
    //     `bigay ilista sabihin ano ang mga pangalan ng branded na antihistamines`,
    // ], [
    //     `Ang Benadryl ay isa sa mga sikat na branded na antihistamine. Mahalagang tandaan na ang mga antihistamine ay dapat lamang inumin sa ilalim ng gabay ng isang doktor.Kung nakakaramdam ka ng sintomsa ng trangkaso, magpahinga ka at lumayo sa mga mauusok na lugar. Laging tandaan na kumunsulta sa isang doktor o parmasyutiko bago uminom ng anumang gamot.
    //     `
    // ],7),
    encodeMemory([
        `* dose * antihistamine *`,
        `* hakbang * antihistamine *`,
        `* (paano|ano) * (gamitin|inumin|kainin) * antihistamine *`,
        `* (paano|ano) * antihistamine * (gamitin|inumin|kainin) *`,
        `Aling paraan ang tama sa paggamit ng antihistamines at ano ang tamang dosis para sa akin`,      
        `Ano paano ang tamang dosis ng antihistamines at paano ito dapat gamitin`,
        `Anong paano tamang paraan sa pag inom ng antihistamines at paano malalaman ang tamang dosis`,
        `Kailan dapat inumin ang antihistamines at paano ito dapat gamitin nang tama`,
        `Paano dapat gamitin ang antihistamines nang tama? Anong dosis ang dapat sundin`,
        `Paano malalaman ang tamang dosis ng antihistamines at kailan dapat ito inumin`,
        `Saan ako makakahanap ng impormasyon tungkol sa tamang dosis at paggamit ng antihistamines`,
        `ano paano ang dose ng antihistamines`,
    ], [
        `Ang mga antihistamine tulad ng Citerizine at Benadryl ay maaaring inumin kasama ng pagkain o isang baso ng tubig o gatas upang mabawasan ang pangangati ng tiyan kung kinakailangan. Para sa cetirizine, narito kung paano mo ito inumin. Ang 6 na taong gulang at mas matanda ay maaaring magkaroon ng 5 hanggang 10 miligrams isang beses sa isang araw. Ang mga 4-6 taong gulang ay maaaring uminom ng maximum na 5mg isang beses o 2.5mg dalawang beses sa isang araw. Ang mga mas bata pa rito (4 sa ibaba) ay hindi dapat uminom ng gamot na ito.
        
        Bagama't ipinakita ko sa iyo ang ilang impormasyon kung paano uminom ng mga antihistamines, mas mainam na humingi ka ng tulong sa mga doktor. PWede sila mag reseta naaangkop na gamot para sa iyong kondisyon. `
    ],7),
    encodeMemory([
        `* antihistamine *`,
        `Ano ang ipaliwanag kahulugan ibig sabihin ng antihistamine at para saan ito`,  
    ], [
        `Ang mga antihistamine tulad ng Citerizine at Benadryl ay ginagamit upang mapawi o maiwasan ang mga sintomas ng hay fever at iba pang uri ng allergy.Ang mga antihistamine ay may iba't ibang anyo. Pwede ito maging mga likido, lotion, syrup, gel, eyedrops, tablet, kapsula, cream, at suppositories. Gumagana ang mga ito sa pamamagitan ng pagpigil sa mga epekto ng histamine, na ginawa ng katawan bilang reaksyon tuwing may sakit. Ang histamine ay maaaring maging sanhi ng pangangati, pagbahing, sipon, at matubig na mga mata. Gayundin, sa ilang mga tao ay maaaring isara ng histamine ang mga bronchial tubes (mga daanan ng hangin ng mga baga) at nagpapahirap sa paghinga `
    ],7),
    encodeMemory([
        `* gamit * antihistamine *`,
        `Para saan at paano maaaring gatimin ang antihistamines`,       
        `anong gamit ng antihistamines`,
        `saan paano ginagamit ang antihistamines`,
    ], [
       `
       Ang mga antihistamines tulad ng Citerizine at Benadryl ay mga gamot na karaniwang ginagamit para sa mga allergies. Itong mga gamot na to ay tumulong sa mga sakit na nagdudulog sa maraming histamine na isang kemikal na ginagawa ng katawan ng tao bilang immune response. Kaya ito ay madalas na ginagamit din sa ibang sakit tulad ng pananakit ng tyan, sipon, anxiety at iba pa. Ang gamot na ito ay pwede mabili bilang likido, lotion, syrup, gel, eyedrops, tablet, kapsula, cream, at suppositories. `     
    ],7),
    encodeMemory([
        `* antihistamine * gana *`,
        `* paano * gana * antihistamine * `,
        `Paano ba gumagana nagpapagaling ang antihistamines`,
    ], [
        `Ang mga antihistamine ay hindi karaniwang ginagamit upang gamutin ang trangkaso.  Ang mga antihistamine ay ginagamit upang mapawi ang ilan sa mga sintomas ng allergy, tulad ng pagbahing, runny nose, at pangangati, ngunit hindi ito epektibo laban sa flu virus. Gumagana ang mga gamot na ito sa pamamagitan ng paghihinto sa mga histamine na inilalabas ng katawan pag nagkaka-allergy. Bukod pa rito, maaaring gamitin ang iba pang mga gamot tulad ng mga pain reliever at pampababa ng lagnat ay maari ding gamitin upang malunasan ang iba pang mga sintomas.
        `
    ],7),
    encodeMemory([
        `* ( huwag * (kain|inom|gamit) | iwas ) * antihistamine *`,
        `Kailan hindi dapat uminom ng antihistamines`,
        `Paano malalaman kung hindi dapat uminom ng antihistamines`,
        `bakit iwasan hindi uminom kainin ng antihistamines`,
    ], [
        `Karamihan sa mga tao ay maaaring ligtas na uminom ng mga antihistamine. Gayunpaman, ang mga taong buntis, nagpapasuso, bata, umiinom ng iba pang mga gamot, may pinagbabatayan na mga kondisyon tulad ng sakit sa puso, sakit sa atay, sakit sa bato o epilepsy ay kinakailangang maging maingat kapag umiinom nito.`
    ],7),
    encodeMemory([
        `* effect * antihistamine * `,
        `* hindi * maganda * epekto * antihistamine *`,
        `Ano ang mga posibleng hindi magandang side effects ng pag kain pag-inom pag gamit ng antihistamines`,
        `Mayroon bang hindi magandang o masamang epekto sa katawan ang antihistamines`,
        `Nakakapagdulot ba ng side effects ang antihistamines`,
    ], [
        `Ang mga antihistamine ay maaaring magdulot ng mga side effect. Ito ay maaaring mag-iba depende sa gamot na kinuha. Gayunpaman, ang mga antihistamine ay maaaring magdulot sa iyo ng antok, pagkahilo, tuyong bibig, malabo ang paningin, paninigas ng dumi, at kahirapan sa pag-ihi. Kung mayroon kang iniindang  kondisyong medikal o umiinom ng iba pang mga gamot, mahalagang magtanong muna sa doktor bago gamitin ito. 
        `
    ],7),
    encodeMemory([
        `* tips * antihistamine *`,
        `Ano ang dapat kong malaman o mga tips tungkol sa paggamit ng antihistamines`,
        `Ano ang mga dapat isaalang-alang o mga tips bago gamitin ang antihistamines`,
        `Ano ang mga importanteng bagay o mga tips na dapat kong malaman tungkol sa antihistamines`,
        `ano ang mga tips sa pagkain o inom ng antihistamines`,
    ], [
        `Kapag umiinom ng gamot na ito, subukang umiwas sa mga alak, sedatives, at tranquilizers, dahil sa mas mataas na panganib ng antok. Maaari itong maging sanhi ng depresyon ng Central nervous system. Kaya iwasan ang mga aktibidad na nangangailangan ng mental alertness. Mag-ingat kapag ang pasyente ay may kapansanan sa atay o bato. Pareho sa mga matatanda dahil mas sensitibo sila sa masamang epekto.
        `
    ],7),
    // encodeMemory([
    //     `* price * antihistamine *`,
    //     `* antihistamine * price *`,
    //     `Magkano ang halaga presyo ng antihistamines`,
    // ], [
    //     `Ang presyo ng antihistamine ay magkaiba sa bawat pharmacy. Ang citerizine na 10mg halimbawa ay tig 15 pesos kada tableta ayos sa Watson pharmacy. Ang Benadryl naman ay nagkakahalaga ng 41 pesos kada tabletas.
    //     `
    // ],7),
    // encodeMemory([
    //     `* uri * antihistamine *`,
    //     `Ano ang mga uri ng antihistamines`,
    // ], [
    //     `Ang mga antihistamine ay may iba't ibang anyo. Pwede ito maging mga likido, lotion, syrup, gel, eyedrops, tablet, kapsula, cream, at suppositories`
    // ],7),
    encodeMemory([
        `* alternatibo * antihistamine *`,
        `Ano ang mga alternatibo herbal na gamot na pwedeng gamitin maliban sa antihistamines`,
        `ano ang mga pwedeng pamalit sa antihistamines`,
        `sabihin bigay listahan ng iba pang alterantibong natural na herbal na gamot bukod sa antihistamine`,
        `Ano ang mga natural herbal na gamot para mabawasan ang allergy`, 
        `Ano pa ang ibang paraan sa paggamot ng allergy maliban sa mga decongestant`, 
        `Mayroon bang alternative herbal na gamot na pwede kong gamitin para magamot ang allergy`,
    ], [
        `Subukan mong kumain ng luya. Ayon sa Sinus and Allergy Wellness Center, ito ay isang natural na histamine, potent antiviral agent at isang immute booster. Ang luya ay isang ligtas at lubos na epektibong halamang gamot na nagpapaginhawa sa sistema ng pagtunaw at nagpapabuti sa sirkulasyon. Maaari kang gumawa ng ilang tsaa ng luya upang maibsan ang pagsisikip ng ilong at pananakit ng ulo. Habang humihigop ka ng iyong tsaa, langhapin ang singaw na lumalabas sa iyong tasa. Gayundin, subukang gamitin ito kasama ng iba pang mga halamang gamot, tulad ng turmeric, na isa pang malakas na natural na manggagamot.`
    ],7),
    // analgesics
    // encodeMemory([
    //     `* generic * analgesics * `,
    //     `bigay ilista sabihin ano ang mga pangalan ng generic na analgesics`,
    // ], [
    //     `Ang ilang karaniwang generic na analgesics ay kinabibilangan ng ibuprofen, acetaminophen, aspirin, paracetamol, naproxen, at ketoprofen. Gumagana ang mga gamot na ito sa pamamagitan ng pagharang o pagbabawas ng produksyon ng mga prostaglandin ng katawan. Ito ay mga kemikal na nagdudulot ng pamamaga at pananakit. Sa pamamagitan ng pagbabawas ng produksyon ng mga prostaglandin, ang mga gamot na ito ay makakatulong upang mabawasan ang sakit at pamamaga sa katawan.Kung nakakaramdam ka ng sintomsa ng trangkaso, magpahinga ka at lumayo sa mga mauusok na lugar. Laging tandaan na kumunsulta sa isang doktor o parmasyutiko bago uminom ng anumang gamot.
    //     `
    // ],7),
    // encodeMemory([
    //     `* branded * analgesics *`,
    //     `bigay ilista sabihin ano ang mga pangalan ng branded na analgesics`,
    // ], [
    //     `Ang ilan sa mga branded na pangalan ng paracetamol ay Biogesic at Calpol. Gumagana ang mga gamot na ito sa pamamagitan ng pagharang o pagbabawas ng produksyon ng katawan ng mga prostaglandin, na mga kemikal na nagdudulot ng pamamaga at pananakit. Sa pamamagitan ng pagbabawas ng produksyon ng mga prostaglandin, ang mga gamot na ito ay makakatulong upang mabawasan ang sakit at pamamaga sa katawan.Kung nakakaramdam ka ng sintomsa ng trangkaso, magpahinga ka at lumayo sa mga mauusok na lugar. 
        
    //     Laging tandaan na kumunsulta sa isang doktor o parmasyutiko bago uminom ng anumang gamot.
    //     `
    // ],7),
    encodeMemory([
        `* (hakbang|dose) * analgesics *`,
        `* paano * (inumin|gamitin|kainin) * analgesics *`,
        `* paano * analgesics * (inumin|gamitin|kainin) *`,
        `Ano ang tamang dosage dosis o paraan ng pag-inom paggamit ng mga analgesics`,
        `Paano ba dapat inumin o kainin ang analgesics nang maayos`,
        `Paano dapat gamitin ang mga analgesics`,
        `Paano maiiwasan ang sobrang dosage sa paggamit ng mga analgesics`,
        `Paano masigurado malalaman ang tamang dose ng mga analgesics`,
    ], [
        `Para sa ibuprofen an (NSAID), 400mg ang dosage kada inuman at 1200 sa butong araw.

        Para sa naproxen (NSAID), maaari kang uminom ng 500mg kada inuman at 750 sa butong araw.
        
        Para sa acetaminophen (paracetamol) maaari kang uminom ng 1000mg tuwing iinom ka at hanggang 4000mg para sa buong araw. 
        
        Para sa aspirin, na kilala rin bilang acetylsalicylic acid, maaari kang uminom ng hanggang 1000mg na may maximum na pang-araw-araw na dosis. At 3000mg naman para sa mga taong wala pang 65 at 200mg para sa mga taong higit sa 65 taong gulang.
     
        Tandaan na ang mga nabangit na paraan ng pag inom nitong gamot ay pawang mga halibawa lamang. 
        `
    ],7),
    encodeMemory([
        `* analgesics *`,
        `Ano ang ipaliwanag kahulugan ibig sabihin ng analgesics at para saan ito`, 
    ], [
        `
        Ang mga analgesics tulad ng ibuprofen, acetaminophen, aspirin, paracetamol, biogesic, at calpol ay kay kilala din bilang pain killers. Ito ay mga gamot na ginagamit para maibsan ang mga masasakit na bahagi ng katawan tulad ng sakit as ulo at pinsala sa katawan. Ang mga anti-inflammatory analagesics ay tumutulong sa mga pamamaga sa katawan, habang ang mga opioi analgesics naman ay sinasalin kung paano nararamadaman ang sakit sa utak. Tandaang maraming anyo ang analgesics tulad ng mga films, likido, mga patch ng pang-ilong, mga tabletas, mga tablet, mga kapsula, at pinaghalong powder. `
    ],7),
    encodeMemory([
        `* gamit * analgesics *`,
        `Ano ang mga sakit na ginagamot ng analgesics`,
        `Paano nakakatulong ang analgesics sa mga pasyente o may sakit`,
        `saan paano ginagamit ang analgesics`,
    ], [
        `
        Ang mga analgesics tulad ng ibuprofen, acetaminophen, aspirin, paracetamol, biogesic, at calpol ay nakakapagpabuti sa mga hindi masyado malalang mga masakit na bahagi ng katawan. Ang pagiging epektibo nito ay naka depende parin sa lala ng kondisyon at sa dosage na ininom ng tao. Ang mga gamot din na ito ay nabibili kahit walang riseta. Maari itong igamot sa mga hindi ganoon ka lalang sakit. Ngunit , hindi nararapat na inumin ito ng sunod sunod na araw. Tandaang maraming anyo ang analgesics tulad ng mga films, likido, mga patch ng pang-ilong, mga tabletas, mga tablet, mga kapsula, at pinaghalong powder.`
    ],7),
    encodeMemory([
        `* analgesics * treat *`,
        `* treat * analgesics *`,
        `Paano ginagamit gumagana nakakatulong ang analgesics `,
    ], [
        `Ang analgesics, o mga pain reliever, ay maaaring makatulong sa pagpapagaan ng karamdaman at lagnat na nauugnay sa trangkaso. Gumagana ang mga ito sa pamamagitan ng pagharang sa paggawa ng ilang mga kemikal sa katawan na nagdudulot ng pananakit at pamamaga. Ang mga karaniwang analgesics na ginagamit para sa trangkaso ay kinabibilangan ng acetaminophen, ibuprofen, at aspirin. Gayunpaman, mahalagang sundin ang mga inirerekomendang dosis at pag-iingat, dahil ang ilang analgesics ay maaaring hindi angkop para sa ilang partikular na indibidwal o maaaring magkaroon ng masamang epekto kapag ginamit nang hindi wasto.
        `
    ],7),
    encodeMemory([
        `* ( huwag * (kain|inom|gamit) | iwas) * analgesics *`,
        `Paano malalaman kung hindi dapat kumain ng analgesics`,
        `bakit iwasan hindi uminom kainin ang analgesics`,  
    ], [
        `Ayon sa WebMD, hindi mo dapat inumin ang gamot na ito para sa self-treatment ng sakit nang mas mahaba kaysa sa 10 araw. Hindi mo dapat gamitin ang gamot na ito upang gamutin ang sarili ng lagnat na tumatagal ng higit sa 3 araw. Sa mga ganitong kaso, kumunsulta sa doktor dahil maaaring mas malubha ang kondisyon mo`
    ],7),
    encodeMemory([
        `* effect * analgesics * `,
        `* hindi * maganda * epekto * analgesics *`,
        `Ano ang mga posibleng hindi magandang side effects ng pag kain pag-inom pag gamit ng analgesics`,
        `Mayroon bang hindi magandang o masamang epekto sa katawan ang analgesics`,
        `Nakakapagdulot ba ng side effects ang analgesics`,
    ], [
        `Ang mga anti-inflammatory analgesics ay karaniwang ligtas. Ngunit maaari silang magdulot ng mga side effect at komplikasyon, kung madalas mong gamitin ang mga ito, nang masyadong mahaba o sa napakalaking dosis: Pinsala sa lamang loob tulad ng atay o bato, pagtatae o paninigas ng dumi, mga problema sa puso, hypersensitivity, pagduduwal, sakit ng tiyan,  at ulser sa tiyan`
    ],7),
    encodeMemory([
        `* tips * analgesics *`,
        `Ano ang mga dapat tandaan o mga tips sa paggamit ng analgesics`,
        `Mayroon bang mga tips sa tamang paggamit ng analgesics`,
        `Ano ang mga dapat gawin bago gamitin ang analgesics`,
        `ano ang mga tips sa pagkain o inom ng analgesics`,
    ], [
        `Uminom ng isang buong baso ng tubig (8 ounces/240 mililitro) kasama nito. Huwag humiga nang hindi bababa sa 10 minuto pagkatapos mong inumin ang gamot na ito. Kung sumakit ang tiyan habang iniinom mo ang gamot na ito, maaari mo itong inumin kasama ng pagkain o gatas.`
    ],7),
    // encodeMemory([
    //     `* price * analgesics *`,
    //     `* analgesics * price *`,
    //     `Magkano ang halaga presyo ng analgesics`,
    // ], [
    //     `Ayon sa botika ng Muramed at Watsons, ang paracetamol tulad ng biogesic ay maaaring magsimula sa 4 pesos. Samantala, ang aspirin ay maaaring magsimula sa 3.50 pesos na nakalista ng watsons pharmacy. Gayunpaman, hindi mo ito mabibili nang walang reseta at maaaring mag-iba ang mga presyo depende sa kung saan mo binili ang mga ito.`
    // ],7),
    // encodeMemory([
    //     `* uri * analgesics *`,
    //     `Ano ang mga uri ng analgesics`,
    // ], [
    //     `Maraming anyo ang analgesics tulad ng mga films, likido, mga patch ng pang-ilong, mga tabletas, mga tablet, mga kapsula, at pinaghalong powder.`
    // ],7),
    encodeMemory([
        `* alternatibo * analgesics *`,
        `Ano ang mga alternatibo herbal na gamot na pwedeng gamitin maliban sa analgesics`,
        `ano ang mga pwedeng pamalit sa analgesics`,
        `sabihin bigay listahan ng iba pang alterantibong natural na herbal na gamot bukod sa analgesics`,
        
        `Ano ang mga natural herbal na gamot para mabawasan ang masakit na katawan`, 
        `Ano pa ang ibang paraan sa paggamot ng masakit na katawan maliban sa mga analgesics`, 
        `Mayroon bang alternative herbal na gamot na pwede kong gamitin para magamot ang masakit na katawan`,
    ], [
        `Ang Philippine Institute of Traditional and Alternative Healthcare ay nagpahiwatig na maaari mong Ampalaya, Yerba Buena, ulasimang bato o pansit-pansitan, at bayabas ay may analagesic effect.`
    ],7),
    // nsaids
    // encodeMemory([
    //     `* generic * nsaid*`,
    //     `Alin-aling mga pangalan ng generic na nsaids ang maaari kong gamitin`,
    //     `Ano ang mga pangalan ng generic na anti-inflammatory drugs o nsaids`,
    //     `Ano-ano ang mga pangalan ng mga nsaids na maaaring bilhin sa generic form`,
    //     `Anong mga generic na gamot na nsaids ang maaaring ituro sa akin`,
    //     `Anong mga nsaids ang may generic na pangalan`,
    //     `Generic names ng mga nsaids, ano ang mga ito`,
    //     `Maaari mo bang ibigay ang mga pangalan ng mga nsaids sa generic form`,
    //     `Mga generic na pangalan ng mga nsaids, paki-lista naman.`,
    //     `Mga pangalan ng mga nsaids sa generic form, alin-alin ang mga ito`,
    //     `Pangalan ng mga generic na nsaids, ano-ano ang mga ito`,
    // ], [
    //     `Ang NSAID ay may mga generic na pangalan tulad ng ibuprofen, naproxen, at aspirin na kadalasang nabibili ng walang riseta wq mga botika`
    // ],7),
    // encodeMemory([
    //     `* branded * nsaid*`,
    //     `Alam mo ba kung anong mga branded na nsaids ang available sa merkado`,
    //     `Ano ang mga branded na pangalan ng mga nsaids`,
    //     `Anong mga pangalan ng branded na nsaids ang alam mo`,
    //     `Mayroon bang mga nsaids na mayroong branded na pangalan? Kung meron, ano ang mga ito`,
    //     `Pwede bang malaman kung anong mga nsaids ang may branded na pangalan`,
    //     `Pwede ka bang magbigay ng ilang mga halimbawa ng branded na nsaids`,
    //     `Pwede mo bang ibigay ang mga branded na pangalan ng mga nsaids`,
    //     `Pwede mo bang ilarawan kung anong mga nsaids ang may branded na version`,
    //     `Pwede mo bang sabihin kung anong mga nsaids ang may branded na version`,
    //     `ano ang branded na nsaids`
        
    // ], [
    //     `Ang Advil ay isang kilalang ibuprofen. Samantala, ang Flanax Forte ay isang kilalang brand para sa Naproxen.`
    // ],7),
    // encodeMemory([
    //     `* (hakbang) * nsaid*`,
    //     `* (dose) * nsaid*`,
    //     `* (inumin) * nsaid*`,
    //     `* (gamitin) * nsaid*`,
    //     `* (kainin) * nsaid*`,
    //     `* nsaid * (kainin) *`,
    //     `* nsaid * (inumin) *`,
    //     `* nsaid * (gamitin) *`,
    //     `Alin ang tamang dosage para sa mga nsaids`,  
    //     `Ano ang mga dapat tandaan sa tamang paggamit ng mga nsaids`, 
    //     `Ano ang tamang dose o paraan ng paggamit ng mga nsaids`,  
    //     `Anong tamang dosage ng nsaids`,  
    //     `Ilabas mo ang tamang paraan ng paggamit ng nsaids.`,  
    //     `Maaari mo bang ipaliwanag kung paano gamitin ng tama ang mga nsaids`, 
    //     `Paano dapat i-take ang nsaids para masiguro ang kaligtasan`,
    //     `Paano tamang gamitin o dosis ng mga nsaids`,  
    //     `Papaano ba ang tamang paggamit ng nsaids`,  
    // ], [
    //     `Para sa ibuprofen an (NSAID), 400mg ang dosage kada inuman at 1200 sa butong araw.

    //     Para sa naproxen (NSAID), maaari kang uminom ng 500mg kada inuman at 750 sa butong araw.
        
    //     Para sa acetaminophen (paracetamol) maaari kang uminom ng 1000mg tuwing iinom ka at hanggang 4000mg para sa buong araw. 
        
    //     Para sa aspirin, na kilala rin bilang acetylsalicylic acid, maaari kang uminom ng hanggang 1000mg na may maximum na pang-araw-araw na dosis. At 3000mg naman para sa mga taong wala pang 65 at 200mg para sa mga taong higit sa 65 taong gulang.

    //     Bagama't ipinakita ko sa iyo ang ilang impormasyon kung paano uminom ng mga nsaids, mas mainam na humingi ka ng tulong sa mga doktor. PWede sila mag reseta naaangkop na gamot para sa iyong kondisyon.  `
    // ],7),
    // encodeMemory([
    //     `* nsaid *`,
    //     `Ano ang mga dapat tandaan tungkol sa paggamit ng nsaids`,
    //     `Ano ang mga nsaids`,
    //     `Gamot ba ang nsaids`,
    //     `Para saan ang nsaids`,
    // ], [
    //     `Ang mga non-steroidal anti-inflammatory drugs (NSAIDs) ay mga gamot na ginagamit upang mapawi ang pananakit, bawasan ang pamamaga, at magpababa ng mataas na temperatura.`
    // ],7),
    // encodeMemory([
    //     `* gamit * nsaid*`,
    //     `Ano ang gamit ng NSAIDs`,
    //     `Ano ang mga uri ng sakit ang ginagamot ng NSAIDs`,
    //     `Kailan dapat gamitin ang NSAIDs`,
    //     `Mayroon bang specific na sakit na gamot ang NSAIDs`,
    //     `Mga anong sakit ang kayang gamutin ng NSAIDs`,
    //     `Paano ang NSAIDs ay nakakatulong sa pagpapagaling ng sakit`,
    //     `Para saan ginagamit ang NSAIDs`,
    //     `Sa anong mga kondisyon ginagamit ang NSAIDs`,
    //     `anong gamit ng NSAIDs`,
    //     `saan ginagamit ang NSAIDs`,
    //     `paano ginagamit ang NSAIDs`,
    // ], [
    //     `Kadalasang ginagamit ang mga ito upang mapawi ang mga sintomas ng pananakit ng ulo, pananakit ng regla, sprains at strains, sipon at trangkaso, arthritis, at iba pang sanhi ng pangmatagalang pananakit.`
    // ],7),
    // encodeMemory([
    //     `* nsaid * treat *`,
    //     `* paano * gana * nsaid*`,
    //     `* paano * nsaid* gana * `,
    //     `Ano ang mga paraan ng nsaids para mapigilan ang pamamaga`,
    //     `Ano ang paraan ng pag-gagana ng nsaids`,
    //     `Paano gumagana ang nsaids sa katawan`,
    //     `Paano nakakatulong ang nsaids sa sakit ng katawan`,
    //     `paano nagpapagaling ang nsaids`
    // ], [
    //     `Hinaharang ng mga NSAID ang isang partikular na enzyme na tinatawag na cyclooxygenase (o COX) na ginagamit ng katawan upang gumawa ng mga prostaglandin. Sa pamamagitan ng pagbabawas ng produksyon ng mga prostaglandin, ang mga NSAID ay nakakatulong na mapawi ang kakulangan sa ginhawa ng lagnat at mabawasan ang pamamaga at ang kaugnay na pananakit.`
    // ],7),
    // encodeMemory([
    //     `* ( huwag * (kain|inom|gamit) | iwas ) * nsaid*`,
    //     `May mga pagkakataon ba na hindi dapat kumain ng NSAIDs`,
    //     `Kailan ba bawal kumain ng NSAIDs`,
    //     `Paano malalaman kung hindi pwedeng kumain ng NSAIDs`,
    //     `bakit iwasan ang NSAIDs`,
    //     `bakit hindi kainin ang NSAIDs`,
    //     `bakit hindi uminom ng NSAIDs`,
    // ], [
    //     `Ang mga NSAID ay karaniwang hindi inirerekomenda para sa mga taong may sakit sa bato, sakit sa puso, sakit sa atay o cirrhosis, o para sa mga taong umiinom ng diuretics. Ang ilang mga pasyente na alerdye sa aspirin ay maaaring makainom nito, bagama't dapat mag tanong muna sa doktor kung pwede nga ba talagang pagsabayin ito.`
    // ],7),
    // encodeMemory([
    //     `* effect * nsaid*`,
    //     `* hindi * maganda * epekto * nsaid*`,
    //     `Ano ang dapat kong malaman tungkol sa mga epekto ng nsaids`,
    //     `Ano ang mga epekto ng nsaids`,
    //     `Ano-ano ang mga hindi ka nais-nais na epekto ng nsaids`,
    //     `Ano-ano ang mga senyales ng hindi magandang reaksyon sa nsaids`,
    //     `Kakailanganin ko bang mag-alala tungkol sa mga epekto ng nsaids`,
    //     `Maaaring magdulot ng ano-ano ang nsaids`,
    //     `May mga bawal ba na kasabay sa pag-inom ng NSAIDs`,
    //     `Mayroon bang mga masamang epekto ang pag-inom ng nsaids`,
    //     `Mayroon bang mga side effect ang paggamit ng nsaids`,
    //     `Nakakadulot ba ng mga side effect ang pag-inom ng nsaids`,
    //     `Paano malalaman kung mayroon akong naging side effect mula sa nsaids`,
    //     `ano ang side effect ng nsaids`,
    //     `ano ang hindi magandang epekto ng nsaids`,
    // ], [
    //     `May panganib o mga side effect ang NSAID. Mas karaniwan ang mga ito kung umiinom ka ng mataas na dosis sa mahabang panahon, o ikaw ay matanda na o nasa mahinang pangkalahatang kalusugan.
        
    //     Ang mga posibleng side effect ay kinabibilangan ng hindi pagkatunaw ng pagkain, pananakit ng tiyan, ulser sa tiyan, pananakit ng ulo, pag-aantok, pagkahilo, mga reaksiyong alerhiya, maaari rin itong magdulot ng mga problema sa iyong atay, bato o sirkulasyon ng puso, tulad ng pagpalya ng puso, atake sa puso at stroke.

    //     Sa pangkalahatan, ang mga over-the-counter na NSAID ay may mas kaunting mga side effect kaysa sa mas malalakas na inireresetang gamot.`
    // ],7),
    // encodeMemory([
    //     `* tips * nsaid*`,
    //     `Ano ang mga dapat iwasan o tandaan kapag gumagamit ng nsaids`,
    //     `Magbigay ka ng payo tungkol sa tamang gamit ng mga nsaids.`,
    //     `Mayroon ba kayong mga payo sa pag-inom ng nsaids`,
    //     `Mayroon ba kayong mga tips para maiwasan ang mga side effects ng nsaids`,
    //     `Paano masisiguro na hindi magkakaroon ng side effects sa paggamit ng nsaids`,
    //     `ano ang mga tips sa pagkain o inom ng nsaids`,
    // ], [
    //     `Huwag pagsabaying inumin ang ibat ibang NSAID. Halimbawa, huwag uminom ng aspirin o ibuprofen kasama ng anumang iba pang nonsteroidal anti-inflammatory na gamot.`
    // ],7),
    // encodeMemory([
    //     `* price * nsaid*`,
    //     `* nsaid* price *`,
    //     `Ano po ang presyo ng NSAIDs`,
    //     `Gaano kamahal ang NSAIDs`,
    //     `Ilan po ang halaga ng NSAIDs`,
    //     `Magkano ang NSAIDs at saan mabibili`,
    //     `Magkano po ba ang NSAIDs`,
    //     `May discount po ba sa NSAIDs`,
    //     `Mayroon po bang mura na NSAIDs`,
    //     `Mayroon po bang promo sa NSAIDs`,
    //     `Pwede po bang hingi ng presyo ng NSAIDs`,
    // ], [
    //     `Batay sa data mula sa watsons, ang gamot na ito ay karaniwang nagsisimula sa 8php bawat piraso.`
    // ],7),
    // encodeMemory([
    //     `* uri * nsaid*`,
    //     `Ano ang mga klasipikasyon ng nsaids`,
    //     `Ano ang mga uri ng nsaids na mabibili sa merkado`,
    //     `Ano-ano ang mga uri ng nsaids na maaaring gamitin`,
    //     `Ilan ang mga uri ng nsaids`,
    //     `Mga anong uri ng nsaids ang available`,
    //     `ano ang uri ng nsaid`,
    //     `sabihin mo sakin ano ang mga porma ng nsaid`
    // ], [
    //     `Madalas, ang mga NSAIDs ay capsules, tabletas, cream, o gel`
    // ],7),
    // encodeMemory([
    //     `* alternatibo * nsaid*`,
    //     `Ano ang ibang mga gamot na pwedeng gamitin na hindi nsaids`,
    //     `Ano ang ibang mga herbal na gamot na pwedeng gamitin bilang alternatibo sa nsaids`,
    //     `Anong ibang gamot ang pwedeng gamitin na alternatibo sa nsaids`,
    //     `Anong mga natural na pamamaraan ang pwedeng gawin bilang alternatibo sa nsaids`,
    //     `May ibang gamot bang pwedeng gamitin bilang alternatibo sa nsaids`,
    //     `May ibang paraan bang makapagbibigay ng relief sa sakit bukod sa paggamit ng nsaids`,
    //     `May ibang paraan bang mapapagaan ang sakit kesa sa paggamit ng nsaids`,
    //     `ano ang alternatibo sa nsaids`,
    //     `paano ang alternatibo sa nsaids`,
    // ], [
    //     `Dahil ang mga NSAID ay maaaring magdulot ng mga nakakabagabag na epekto, ang mga alternatibo ay kadalasang inirerekomenda muna.

    //     Ang pangunahing alternatibo para sa lunas sa pananakit ay ang paracetamol, na available sa counter at ligtas na inumin ng karamihan ng mga tao.
    //     `
    // ],7),

    // decongestants
    // encodeMemory([
    //     `* generic * decongestant *`,
    //     `bigay ilista sabihin ano ang mga pangalan ng generic na decongestant`,
    // ], [
    //     `Ang ilang halimbawa ng mga generic na decongestant ay phenylephrine, pseudoephedrine, at oxymetazoline. Ang mga gamot na ito ay bibili sa counter at may iba't ibang anyo gaya ng mga tablet, kapsula, spray ng ilong, o likido. Mahalagang sundin ang inirerekomendang dosis at pag-iingat kapag umiinom ng mga decongestant dahil maaari silang magdulot ng mga side effect gaya ng pagiging nerbiyoso, pagtaas ng tibok ng puso, at mataas na presyon ng dugo sa ilang indibidwal.
                
    //     Tandaan na ang mga nabangit na paraan ng pag inom nitong gamot ay pawang mga halibawa lamang. 
    //     `
    // ],7),
    // encodeMemory([
    //     `* branded * decongestant *`,
    //     `bigay ilista sabihin ano ang mga pangalan ng branded na decongestant`,
    // ], [
    //     `Ang ilan sa mga branded na decongestant ay decolgen at sudafed.Mahalagang sundin ang inirerekomendang dosis at pag-iingat kapag umiinom ng mga decongestant dahil maaari silang magdulot ng mga side effect gaya ng pagiging nerbiyoso, pagtaas ng tibok ng puso, at mataas na presyon ng dugo sa ilang indibidwal.`
    // ],7),
    encodeMemory([
        `* dose * decongestant *`,
        `* hakbang * decongestant *`,
        `* paano * (gamitin|inumin|kainin) * decongestant *`,
        `* paano * decongestant * (gamitin|inumin|kainin)  *`,
        `Ano ang tamang dose dosage paraan ng paggamit ng decongestants`, 
        `Gaano kadalas dapat uminom at gaano karami ang dapat na decongestants na inumin`,  
        `Ilabas ang tamang dose para sa decongestants.`, 
        `Paano ko dapat take kainin inumin gamitin ng tama ang decongestants`,
    ], [
        `Ang karaniwang dosis ay depende sa gamot na iyong iinumin. Para sa Pseudoephedrine (sudafed) gayunpaman narito ang ilan sa mga rekomendasyon. 
        
        Ang karaniwang dosis ng pseudoephedrine ay 60mg tablets o bilang isang likidong naglalaman ng 30mg sa 5ml.

        Ang mga matatanda at bata na may edad 12 hanggang 17 taon ay pwede uminom ng isang 60mg tablet o dalawang 5ml na kutsara (10ml) ng likido hanggang 4 na beses sa isang araw.
        
        Ang mga batang may edad 6 hanggang 11 taon ay pwedeng uminom ng kalahating tableta (30mg) o isang 5ml na kutsara ng likido hanggang 4 na beses sa isang araw.
        
        Tandaan na ang mga nabangit na paraan ng pag inom nitong gamot ay pawang mga halibawa lamang. 
        `
    ],7),
    encodeMemory([
        `* decongestant *`,
        `Ano ang ipaliwanag kahulugan ibig sabihin ng decongestant at para saan ito`, 
    ], [
        `Ang mga decongestant tulad ng phenylephrine, decolgen, o sudafed ay mga gamot na nagpapaginhawa sa pamamagitan ng pagbabawas ng pamamaga, pamamaga at pagbuo ng mucus sa loob ng mga daanan ng ilong o mata. Wala silang ibang epekto sa mga sintomas tulad ng runny nose o pagbahin. Ang mga gamot na ito ay mabibili bilang patak sa ilong, patak sa mata, o di kaya mga tablet, kapsula, at syrup.`
    ],7),
    encodeMemory([
        `* gamit * decongestant *`,
        `Ano ang mga gamot na decongestants at saan ito ginagamit`,
        `saan paano Kailan ginagamit ang decongestants`,
    ], [ 
        `
        Ang mga decongestants tulad ng phenylephrine, decolgen, o sudafed ay mga gamot na tumutulog magpaginhawa ng baradong ilong. Ang pagbara nito na nararamdaman kapag may flu ay dahil sa virus na nag dudulot ng flu, sinusitis o allergy.Ang mga gamot na ito ay mabibili bilang patak sa ilong, patak sa mata, o di kaya mga tablet, kapsula, at syrup.`
    ],7),
    encodeMemory([
        `* gana * decongestant *`,
        `* decongestant * (gana|treat) *`,
        `Ano ang ginagawa ng mga decongestants`,
        `Paano ba nagpapababa ng pamamaga ang mga decongestants`,
        `Paano nakakatulong gumagana ang mga decongestants sa pagpapagaling`,
    ], [
        `Gumagana ang mga decongestant sa pamamagitan ng pagpapaliit ng mga daluyan ng dugo sa iyong ilong. Ang namamagang tissue sa loob ng ilong ay lumiliit, at mas madaling dumaan ang hangin.`
    ],7),
    encodeMemory([
        `* ( huwag * (kain|inom|gamit) | iwas) * decongestant *`,
        `Kailan hindi dapat gumamit ng mga decongestants`,
        `Saan Paano malalaman kung  hindi dapat gamitin ang mga decongestants`,
        `bakit iwasan hindi kainin uminom ng decongestants`,
    ], [
        `Huwag uminom ng mga decongestant kung mayroon kang mataas na presyon ng dugo na hindi nakokontrol. Ang pag-inom ng mga decongestant ay maaaring magpataan ng iyong presyon ng dugo kahit na ito ay kontrolado o halos normal. Maaaring kailanganin mong maghanap ng alternatibo sa mga decongestant. Huwag magbigay ng mga decongestant sa mga batang wala pang 6 taong gulang.`
    ],7),
    encodeMemory([
        `* effect * decongestant * `,
        `* hindi * maganda * epekto * decongestant *`,
        `Ano ang mga posibleng hindi magandang side effects ng pag kain pag-inom pag gamit ng decongestant`,
        `Mayroon bang hindi magandang o masamang epekto sa katawan ang decongestant`,
        `Nakakapagdulot ba ng nakakahamak side effects adverse reaction ang decongestant`,

    ], [
        `Ang mga decongestant ay maaaring magka side effect. Maaari silang pansamantalang magdulot ng nerbiyos, pagkahilo, at mga problema sa pagtulog. Maaari silang maging sanhi ng palpitations ng puso (pakiramdam na mabilis na pagtibog ng iyong puso) o mas mataas na presyon ng dugo`
    ],7),
    encodeMemory([
        `* tips * decongestant *`,
        `Ano ang mga dapat kong isaalang-alang sa paggamit ng decongestants`,
        `Mayroon ba akong dapat malaman bago kumain ng decongestants`,
        `Mayroon bang mga bagay na hindi dapat gawin habang naka-decongestants`,
        `ano ang mga tips sa pagkain o inom ng decongestants`,
    ], [
        `Ang mga decongestant ay maaaring inumin upang makatulong na mapawi ang kasikipan na nakakaapekto sa ilong, sinuses, at mata o direktang i-spray sa ilong o itanim sa mata para sa mas lokal na epekto.`
    ],7),
    // encodeMemory([
    //     `* price * decongestant *`,
    //     `* decongestant * price *`,
    //     `Magkano ang halaga presyo ng decongestant`,
    // ], [
    //     `Ang presyo ay nag-iiba ayon sa anyo ng gamot. Halimbawa, para sa nasal sprays ito ay nagsisimula sa 90php , para sa mga patak sa paligid ng 78 (rose pharmacy website), at mga tablet tulad ng decolgen ito ay nagsisimula sa 6php (watsons).`
    // ],7),
    // encodeMemory([
    //     `* uri *  decongestant *`,
    //     `Ano ang mga uri ng decongestant`,
    // ], [
    //     `Available ang mga decongestant bilang mga patak sa ilong, patak sa mata, at bilang mga tablet, kapsula, at syrup.`
    // ],7),
    encodeMemory([
        `* alternatibo * decongestant *`,
        `Ano ang mga alternatibo herbal na gamot na pwedeng gamitin maliban sa decongestant`,
        `ano ang mga pwedeng pamalit sa decongestant`,
        `sabihin bigay listahan ng iba pang alterantibong natural na herbal na gamot bukod sa decongestant`,
        `Ano ang mga natural herbal na gamot para mabawasan ang sipon`, 
        `Ano pa ang ibang paraan sa paggamot ng sipon maliban sa mga decongestant`, 
        `Mayroon bang alternative herbal na gamot na pwede kong gamitin para magamot ang sipon`,
    ], [
        `Available ang mga alternatibo sa oral decongestant. Sa larangan ng droga, ang mga antihistamine tulad ng diphenhydramine (Benadryl), chlorpheniramine (Chlor-Trimeton), cetirizine (Zyrtec), at loratadine (Claritin) ay makakatulong sa baradong ilong na ligtas para sa pandinig`
    ],7),
    // expectorant
    // encodeMemory([
    //     `* generic * expectorant*`,
    //     `bigay ilista sabihin ano ang mga pangalan ng generic na expectorant`,
    // ], [
    //    `Ang Guiafenesin at Potassium iodide ay mga halimbawa ng generic na expectorant. Ang mga ito ay matatagpuan din sa mga produkto tulad ng Mucinex at Robitussin. Ang mga gamot na ito ay karaniwang ginagamit upang gamutin ang mga kondisyon ng paghinga tulad ng bronchitis, hika, at karaniwang sipon. Mahalagang tandaan na ang mga gamot na ito ay maaaring hindi angkop para sa lahat at dapat gamitin ayon sa mga tagubilin ng isang propesyonal sa pangangalagang pangkalusugan.`
    // ],7),
    // encodeMemory([
    //     `* branded * expectorant*`, 
    //     `bigay ilista sabihin ano ang mga pangalan ng branded na expectorant`,
    // ], [
    //     `Ang Mucinex at Robitussin ay iilan lang sa mga branded na expectorants.Mahalagang tandaan na ang mga gamot na ito ay maaaring hindi angkop para sa lahat at dapat gamitin ayon sa mga tagubilin ng isang propesyonal sa pangangalagang pangkalusugan.`
    // ],7),
    encodeMemory([
        `* dose * expectorant*`,
        `* hakbang * expectorant*`,
        `* paano * (kainin|gamitin|inumin) * expectorant*`,
        `* paano * expectorant * (kainin|gamitin|inumin)  *`,
        `Paano ba tamang pag kain inom gamitin o dose ng mga expectorants`,
        `Paano dapat iinumin gamitin inumin ang mga expectorants`,
        `Paano ko malalaman kung tamang ang dose ng expectorants na gagamitin ko`,
        `Paano kung hindi ako sigurado sa tamang dosage ng expectorants na gagamitin ko`,
        `ano ang tamang paraan sa pag inom gamit kainin sa mga expectorants`
    ], [
        `
        Ang pag inom ng expectorants ay naka depedende sa gamot, tanda, at bigat ng katawan ng isa tao. Ang mga susunod kong banggitin ay ilan laman sa mga halimbawa kung paano ito.

        Ang mga matatanda ay maaaring tumagal ng 200 hanggang 400 milligrams (mg) bawat apat na oras.

        Ang mga batang 6 hanggang 12 taong gulang ay maaaring tumagal ng 100 hanggang 200 mg bawat apat na oras.

        Ang mga batang 4 hanggang 6 na taong gulang ay maaaring tumagal ng 50 hanggang 100 mg bawat apat na oras.

        Ang mga bata at sanggol hanggang 4 na taong gulang ay hindi dapat uminom nito.
        
        Tandaan na ang mga nabangit na paraan ng pag inom nitong gamot ay pawang mga halibawa lamang. 
        `
    ],7),
    encodeMemory([
        `* expectorant*`,
        `Ano ang kahulugan ibig sabihin ng expectorant at para saan ito`,  
    ], [

        `Ang mga expectorant tulad ng Guiafenesin o Robutissin ay mga sangkap na nagpapaluwag sa daluyan ng hangin. Ginagawa nila ito sa pamamagitan ng pagtaas ng tubig na nilalaman ng mga secretions na nagpapababa ng kanilang lagkit upang mas madaling maibo ito. Ang mga expectorant ay kadalasang ginagamit upang tumulong sa paggamot sa mga kondisyon ng paghinga tulad ng bronchitis, pulmonya, at karaniwang sipon. Tandaan na ang gamot na ito ay maaring bilhin bilang likido o tabletas.
        `
    ],7),
    encodeMemory([
        `* gamit * expectorant*`,
        `Anong ang ginagamot ng mga expectorants`,
        `Para saan ba talaga ginagamit ang mga expectorants`,
        `saan paano ano ginagamit ang expectorants`,
    ], [
        `Maaari kang uminom ng expectorant tulad ng Guiafenesin o Robutissin upang makahinga ng mabuti kung mayroon kang sipon o trangkaso. Available ang mga ito bilang mga standalone na gamot o bilang isang sangkap sa isang all-in-one na gamot sa sipon o trangkaso. Tandaan na ang gamot na ito ay maaring bilhin bilang likido o tabletas`
    ],7),
    encodeMemory([
        `* gana * expectorant* `,
        `* expectorant* (gana|treat) * `,
        `Paano gumagana ang expectorants `,
        `paano nagpapagaling ang expectorants`
    ], [
        `Ang mga expectorant ay nagpapadulas sa iyong daanan ng hangin. Nakakatulong ito na lumuwag ang uhog at gawing mas manipis ang daluyan ng hangin pag humihinga. Sa pamamagitan ng pagluwag ng uhog, ginagawang mas produktibo ng mga expectorant ang iyong ubo. Ginagawa nitong mas madali para sa iyo na mabisang umubo ng uhog at malinis ang iyong lalamunan.`
    ],7),
    encodeMemory([
        `* ( huwag * (kain|inom|gamit) | iwas) * expectorant*`,
        `Kailan hindi dapat ligtas na gumamit ng expectorants`,
        `Saan hindi dapat gamitin uminom kain ng expectorants`,
        `bakit iwasan hindi uminom kainin ng expectorants`,    
    ], [
        `Dapat kang makipag-usap sa doktor bago gumamit ng expectorant lalo na kung ikaw ay buntis o nagpapasuso. Kung mayroon kang anumang uri ng reaksiyong alerdyi o hindi pagpaparaan sa mga expectorant sa nakaraan, hindi mo dapat gamitin ang mga gamot na ito.

        Mag-ingat kapag nagmamaneho o gumagamit ng makinarya habang umiinom ng expectorant, dahil ang mga gamot na ito ay maaaring magdulot sa iyo ng antok o pagkahilo.`
    ],7),
    encodeMemory([
        `* effect * expectorant* `,
        `* hindi * maganda * epekto * expectorant *`,
        `Ano ang mga posibleng hindi magandang side effects ng pag kain pag-inom pag gamit ng expectorant`,
        `Mayroon bang hindi magandang o masamang epekto sa katawan ang expectorant`,
        `Nakakapagdulot ba ng nakakahamak side effects adverse reaction ang expectorant`,
    ], [
        `Ang mga expectorant ay hindi karaniwang nagdudulot ng malubhang epekto. Ang pinakakaraniwang epekto ay ang pagkahilo, pag-aantok, at pantal.`
    ],7),
    encodeMemory([
        `* tips * expectorant*`,
        `Mayroon bang pagkain na dapat iwasan habang umiinom ng expectorants`,
        `Ano ang mga dapat gawin para ma-maximize ang epekto ng expectorants`,
        `Ano ang mga dapat tandaan sa pag-inom ng expectorants`,
        `Mayroon ba kayong mga tips para sa pag-inom ng expectorants`,
        `Paano dapat gamitin ang expectorants nang tama`,
        `ano ang mga tips sa pagkain o inom ng expectorants`,
    ], [
        `Huwag durugin ang mga tabletas, at siguraduhing sukatin ang mga likidong formulasyon gamit ang mga panukat na tool na ibinigay kasama ng iyong gamot. Kadalasang inirerekomenda na uminom ka ng maraming likido kapag umiinom ng expectorant.`
    ],7),
    // encodeMemory([
    //     `* price * expectorant*`,
    //     `* expectorant* price *`,
    //     `Magkano ang halaga presyo ng expectorant`,
    // ], [
    //     `Sa watsons, ang robitussin guaifenesin price ay nagsisimula sa 92php.`
    // ],7),
    // encodeMemory([
    //     `* uri *  expectorant*`,
    //     `Ano ang mga uri ng expectorant`,
    // ], [
    //     `Sa pangkalahatan, available ang mga expectorant na over-the-counter (OTC) sa mga form na likido, tableta, at tablet.`
    // ],7),
    encodeMemory([
        `* alternatibo * expectorant*`,
        `Ano ang mga alternatibo herbal na gamot na pwedeng gamitin maliban sa expectorant`,
        `ano ang mga pwedeng pamalit sa expectorant`,
        `sabihin bigay listahan ng iba pang alterantibong natural na herbal na gamot bukod sa expectorant`,
        `Ano ang mga natural herbal na gamot para mabawasan ang plema pleghm`, 
        `Ano pa ang ibang paraan sa paggamot ng plema pleghm maliban sa mga expectorant`, 
        `Mayroon bang alternative herbal na gamot na pwede kong gamitin para magamot ang plema pleghm`, 

    ], [
        `Ang mga natural na expectorant ay isa pang opsyon kung sinusubukan mong paluwagin ang uhog at mapawi ang pagsikip ng dibdib. Kasama sa mga natural na expectorant ang:Menthol, Ivyleaf extract , oral hydration (pag-inom ng maraming tubig), steaming (paglanghap ng mainit na basang hangin), at honey (pagdaragdag ng pulot sa mga inumin)`
    ],7),

    // antitussives
    // encodeMemory([
    //     `* generic * antitussive *`,
    //     `bigay ilista sabihin ano ang mga pangalan ng generic na antitussive`,
    // ], [
    //     `Ang Dexthromethorphan, codeine at diphenhydramine ay mga generic antitussive na nabibili sa botika. Mahalagang tandaan na ang mga generic na antitussive ay naglalaman ng mga katulad na aktibong sangkap na matatagpuan din sa isang branded`
    // ],7),
    // encodeMemory([
    //     `* branded * antitussive *`,
    //     `bigay ilista sabihin ano ang mga pangalan ng branded na antitussive`,
    // ], [
    //     `Ang Robitussin ay isang sikat na antitussive na mabibili sa mga parmasya. Dapat mong tandaan na sa kabila ng pagkakaroon ng magkatulad na sangkap, ang mga branded ay mas mahal kaysa sa mga generic`
    // ],7),
    encodeMemory([
        `* (dose|hakbang|inumin|gamitin|kainin) * antitussive  *`,
        `Ano ang tamang paggamit ng mga antitussives`,  
        `Gaano kadalas dapat ang antitussives gamitin kainin inumin dose`,  
        `May mga bagay ba na dapat isaalan bago gumamit ng antitussives`,
        `Paano dapat gamitin kainin inumin dose ang mga antitussives`,    
        `ano ang tamang dose pag kain o pag inom sa antitussives`,
        `Paano malalaman kung tama ang dosage ng antitussives na gagamitin`,  
    ], [
        `Sa pangkalahatan, ang mga antitussive ay iniinom at may iba't ibang anyo, tulad ng mga tablet, kapsula, syrup, at patak. Ang dosis ay karaniwang tinutukoy ng isang doktor at maaaring iakma batay sa mga salik tulad ng edad at bigat ng pasyente, ang kalubhaan ng ubo, at anumang iba pang kondisyong pangkalusugan na maaaring mayroon ang pasyente.
        
        Mayroong ilang mga karaniwang kaalaman sa dosis na maaaring matagpuan mula sa mga kagalang-galang na mapagkukunang medikal online. Para sa mga antitussive bilang lozenges, maaaring mag-iba ang dosis. Para sa mga, mga matatanda at bata 12 taong gulang at mas matanda-5 hanggang 15 mg bawat dalawa hanggang apat na oras, kung kinakailangan.Para sa mga mga batang 6 hanggang 12 taong gulang, 5 hanggang 15 mg bawat dalawa hanggang anim na oras, kung kinakailangan. Para naman sa mga batang 4 hanggang 6 na taong gulang, pwede ang 5 mg kada apat na oras, kung kinakailangan. Mga bata at sanggol hanggang 4 na taong gulang—Hindi inirerekomenda ang paggamit. 
        
        Para sa mga antitussive na kinuha bilang syrup, ang dosis ay nag-iiba din. Ang mga matatanda at bata 12 taong gulang at mas matanda ay pwedeng kumain ng 30 mg tuwing anim hanggang walong oras, kung kinakailangan. Ang mga batang 6 hanggang 12 taong gulang naman ay pwedeng uminom ng 7 mg tuwing apat na oras o 15 mg tuwing anim hanggang walong oras, kung kinakailangan. Para naman sa mga batang 4 hanggang 6 na taong gulang, pwedeng mag take ng 3.5 mg bawat apat na oras o 7.5 mg bawat anim hanggang walong oras, kung kinakailangan. Ngunit ang mga bata at sanggol hanggang 4 na taong gulang ay hindi pinapayuhang kumain nito.
        
        Bagama't ipinakita ko sa iyo ang ilang impormasyon kung paano uminom ng mga antitussive, mas mainam kung humingi ka ng tulong sa mga doktor habang nagrereseta sila ng mga naaangkop na gamot para sa iyong kondisyon.
        `
    ],7),
    encodeMemory([
        `* ano * antitussive  *`,
        `Ano ang ipaliwanag kahulugan ibig sabihin ng antitussive at para saan ito`,  
    ], [
        `Ang mga antitussive tulad ng Dexthromethorphan o Robitussin ay mga reseta o over-the-counter na gamot na ginagamit para gamutin ang ubo. Maaari itong mabili bilang isang tableta, kapsula, gel, likido, syrup, lozenge o strips. Gayunpaman, maaari ko lamang irekomenda ang karaniwang dosis ng mga logenze at syrup form nito`
    ],7),
    encodeMemory([
        `* gamit * antitussive *`,
        `Kailan dapat uminom pwedeng gamitin ang antitussives`,
        `paano Para saan nakakatulong ginagamit ang antitussives`,
    ], [
        `Karaniwang ginagamit ang mga antitussive tulad ng Dexthromethorphan o Robitussin upang gamutin ang tuyong ubo na dulot ng mga allergy, sakit sa paghinga, o impeksyon. Maaari ding gamutin ng mga antitussive ang post-viral na ubo, o isang patuloy na ubo na nabubuo pagkatapos malutas ang isang impeksiyon.Maaari itong mabili bilang isang tableta, kapsula, gel, likido, syrup, lozenge o strips.`
    ],7),
    encodeMemory([
        `* antitussives * (gana|treat) *`,
        `Paano gumagana nakakatulong nagpapagaling ang mga antitussives`,
        `Paano nakakapagbigay ng kaginhawahan sa pakiramdam ang mga antitussives`,
        `Paano nakakapagpababa ng ubo ang mga antitussives`,
    ], [
        `Ang mga antitussive tulad ng Dexthromethorphan o Robitussin ay gumagana sa pamamagitan ng pagpigil sa isang coordinating region para sa pag-ubo na matatagpuan sa stem ng utak, na nakakagambala sa cough reflex arc; bagaman ang eksaktong mekanismo ng pagkilos ay hindi alam.Maaari itong mabili bilang isang tableta, kapsula, gel, likido, syrup, lozenge o strips. `
    ],7),
    encodeMemory([
        `* ( huwag * (kain|inom|gamit) | iwas) * antitussive *`,
        `Ano ang mga kondisyon na hindi dapat gamutin ng antitussives`,
        `Kailan sino hindi dapat uminom o magtake ng antitussives`,
        `Kailan sino hindi ligtas recommended ang paggamit pag-inom ng antitussives`,
        `May mga tao ba na hindi dapat uminom ng antitussives`,
        `bakit iwasan hindi kainin uminom ang antitussives`,
    ], [
        `Ang gamot na ito ay hindi ligtas para sa mga batang wala pang 4 taong gulang.`
    ],7),
    encodeMemory([
        `* effect * antitussive  *`,
        `* hindi * maganda * epekto * antitussive *`,
        `Ano ang mga posibleng hindi magandang side effects ng pag kain pag-inom pag gamit ng antitussive`,
        `Mayroon bang hindi magandang o masamang epekto sa katawan ang antitussive`,
        `Nakakapagdulot ba ng nakakahamak side effects adverse reaction ang antitussive`,
    ], [
        `Ang pinakakaraniwang epekto ay kinabibilangan ng pagduduwal at pag-aantok. Ang ilang mga pasyente ay maaaring makaranas ng pantal o kahirapan sa paghinga. Ang mataas na dosis ay maaaring magdulot ng mga guni-guni at pagkakahiwalay, at ang gamot ay naiulat na ginagamit bilang isang panlibang na gamot. Kaya dapat mag ingat pag kumain ng antitussives`
    ],7),
    encodeMemory([
        `* tips * antitussive  *`,
        `Ano ang magandang gawin dapat tandaan bago mag take ng antitussives`,
        `Ano ang mga bagay na dapat kong gawin bago mag take ng antitussives`,
        `Ano ang mga dapat kong malaman bago mag take ng antitussives`,
        `ano ang mga tips sa pagkain o inom ng antitussives`,
    ], [
        `Inumin ang gamot na ito sa pamamagitan ng bibig na mayroon o walang pagkain na may isang buong baso ng tubig (8 onsa o 240 mililitro) o ayon sa direksyon ng iyong doktor.`
    ],7),
    // encodeMemory([
    //     `* price * antitussive *`,
    //     `* antitussive * price *`,
    //     `Magkano ang halaga presyo ng antitussive`,
    // ], [
    //     `Sa southstar drug store, ang halaga ng dextromethorphan syrup ay nagsisimula sa 113php. It watsons, nasa 189php. Maaaring mag-iba ito sa ibang mga parmasya`
    // ],7),
    // encodeMemory([
    //     `* uri * antitussive  *`,
    //     `Ano ang mga uri ng antitussive`,
    // ], [
    //     `Ang mga antitussive ay may maraming anyo. Maaari itong maging isang tableta, kapsula, gel, likido, syrup, lozenge o strips. Gayunpaman, maaari ko lamang irekomenda ang karaniwang dosis ng mga logenze at syrup form nito.`
    // ],7),
    encodeMemory([
        `* alternatibo * antitussive  *`,
        `Ano ang mga alternatibo herbal na gamot na pwedeng gamitin maliban sa antitussive`,
        `ano ang mga pwedeng pamalit sa antitussive`,
        `sabihin bigay listahan ng iba pang alterantibong natural na herbal na gamot bukod sa antitussive`,
        `Ano ang mga natural herbal na gamot para mabawasan ang ubo`, 
        `Ano pa ang ibang paraan sa paggamot ng ubo maliban sa mga antitussive`, 
        `Mayroon bang alternative herbal na gamot na pwede kong gamitin para magamot ang ubo`, 

    ], [
        `Ang pulot ay isang napapanahong lunas para sa namamagang lalamunan. Ayon sa isang pag-aaral, maaari din nitong mapawi ang ubo nang mas epektibo kaysa sa mga OTC na gamot na naglalaman ng dextromethorphan (DM), isang panpigil sa ubo.`
    ],7),

    // lozenges
    // encodeMemory([
    //     `* generic * lozenge*`,
    //     `bigay ilista sabihin ano ang mga pangalan ng generic na lozenge`,
    // ], [
    //     `Ang ilan sa mga generic na pangalan ng logenzes ay kinabibilangan ng dextromethorphan at benzocaine-menthol`
    // ],7),
    // encodeMemory([
    //     `* branded * lozenge*`,
    //     `bigay ilista sabihin ano ang mga pangalan ng branded na lozenge`,
    // ], [
    //     `Ang Bactidol at strepsils ay ilan sa mga branded na pangalan ng logenzes na makakatulong na mapawi ang iyong lalamunan`
    // ],7),
    encodeMemory([
        `* (hakbang|dose|inom|gamitin|kainin) * lozenge*`,
        `* lozenge* (hakbang|dose|inum|gamitin|kainin)  *`,
        `Ano ang tamang paraan ng hakbangdose inom gamitin kainin ng lozenges`,
        `Anong tamang dose ng lozenges`,
        `Ilang beses kailangan kumain ng lozenges sa isang araw`,
        `Paano ba dapat gamitin ang lozenges`,
        `paano tamang dose ginagamit kinakain iniinom ang lozenges`,
    ], [
        `Hayaang matunaw ang lozenge nang dahan-dahan sa iyong bibig at lunukin ang natunaw na likido kasama ng iyong laway. Huwag nguyain o lunukin nang buo. Karaniwang ginagamit ang produktong ito tuwing 2 oras kung kinakailangan`
    ],7),
    encodeMemory([
        `* lozenge*`,
        `Ano ang ipaliwanag kahulugan ibig sabihin ng lozenge at para saan ito`,  
    ], [
        `Ginagamit ang lozenges tulad ng Bactidol o Strepsils upang pansamantalang mapawi ang pananakit mula sa maliliit na problema sa bibig (tulad ng mga ulser, namamagang gilagid/lalamunan, pinsala sa bibig/gigilid).`
    ],7),
    encodeMemory([
        `* gamit * lozenge*`,
        `Kailan dapat kainin gamitin inumin ang lozenges`,
        `paano Para saan ginagamit ang lozenges`,
    ], [
        `Ang pag gamit ng Lozenges tulad ng Bactidol o Strepsils ay isang abot-kayang opsyon para sa nagpapakilalang paggamot ng talamak at talamak na pharyngitis, pangangati o pamamaga ng upper respiratory tract at pagpapagaan ng hindi kasiya-siyang sensasyon sa lalamunan.`
    ],7),
    encodeMemory([
        `* lozenges * treat *`,
        `* gana * lozenge*`,
        `* lozenge * gana *`,
        `Bakit nagpapagaling nakakatulong nakakagamot ang lozenges sa pagtanggal ng sakit pag-irita pamamaga sa lalamunan`,
    ], [
        `Kapag sumipsip ka ng lozenge Lozenges tulad ng Bactidol o Strepsils, nagsisimula itong matunaw at maglalabas ng gamot. Kaya dapat itong tunawin nang dahan-dahan sa bibig upang pansamantalang sugpuin ang ubo, at mag-lubricate at paginhawahin ang nanggagalit na mga tisyu ng lalamunan.
        
        Ang mga lozenges ay tumutulong sa paglaban sa sipon, at karamihan ay may pampamanhid upang makatulong na mabawasan ang sakit. Naglalaman din ito ng menthol o eucalyptus, na makakatulong sa pagpapalamig at pagpapatahimik sa lalamunan. Ang iba ay naglalaman ng pulot, na kilala na may mga katangian ng pagsugpo sa ubo.`
    ],7),
    encodeMemory([
        `* ( huwag * (kain|inom|gamit) | iwas ) * lozenge*`,
        `Kailan bakit hindi dapat gumamit ng lozenges`,  
        `Mayroon bang mga kondisyon na hindi pinapayagan ang paggamit ng lozenges`,  
        `Sa mga anong sitwasyon hindi dapat mag-take ng lozenges`,
        `bakit iwasan hindi uminom kainin gumamit ng lozenges`,    
    ], [
        `Kung mayroon kang namamagang lalamunan na malubha o tumatagal ng higit sa 2 araw, o ubo na tumatagal ng higit sa 7 araw na patuloy na bumabalik, o may mga sintomas na may lagnat, sakit ng ulo, pantal, pamamaga, pagduduwal, o pagsusuka, magpatingin na sa iyong doktor kaagad`
    ],7),
    encodeMemory([
        `* effect * lozenge*`,
        `* hindi * maganda * epekto * lozenge*`,
        `Ano ang mga posibleng hindi magandang side effects ng pag kain pag-inom pag gamit ng lozenge`,
        `Mayroon bang hindi magandang o masamang epekto sa katawan ang lozenge`,
        `Nakakapagdulot ba ng nakakahamak side effects adverse reaction ang lozenge`,
    ], [
        `Maaaring mangyari ang bahagyang paghapdi ng lalamunan. Kung ang alinman sa mga epektong ito ay tumagal o lumala, sabihin kaagad sa iyong doktor o parmasyutiko.`
    ],7),
    encodeMemory([
        `* tips * lozenge*`,
        `Ano ang dapat kong malaman bago gamitin ang lozenges`,
        `Paano tamang gamitin ang mga lozenges`,
        `alin ang dapat tandaan pag kumain ng lozenges`,
        `ano ang mga tips paalala sa pagkain o inom ng lozenges`,
    ], [
        `Huwag nguyain o lunukin nang buo. Ang produktong ito ay karaniwang ginagamit tuwing 2 oras kung kinakailangan.`
    ],7),
    // encodeMemory([
    //     `* price * lozenge*`,
    //     `* lozenge* price * `,
    //     `Magkano ang halaga presyo ng lozenge`,
    // ], [
    //     `Sa rose pharmacy nagsisimula ito sa paligid ng 5php bawat piraso. Maaaring mag-iba ang presyo sa ibang mga parmasya`
    // ],7),
    // encodeMemory([
    //     `* uri * lozenge*`,
    //     `Ano ang mga uri ng lozenge`,
    // ], [
    //     `Ang mga form ng dosis na mabagal na natutunaw sa bibig o maaaring nguyain at madaling lunukin ay nagiging popular, lalo na para sa mga pediatric na pasyente. Ang matigas (na-compress o hinulma) na paghahanda ng form na ito ng dosis ay tinatawag na lozenges, troches, o patak. Ang malambot (molded) na lozenges o troches ay kadalasang tinatawag na pastilles, at ang chewable, gelatin-based na lozenges o troches ay kadalasang tinatawag na gummy, bagong-bagong mga produkto.`
    // ],7),
    encodeMemory([
        `* alternatibo * lozenge*`,
        `Ano ang mga alternatibo herbal na gamot na pwedeng gamitin maliban sa lozenge`,
        `ano ang mga pwedeng pamalit sa lozenge`,
        `sabihin bigay listahan ng iba pang alterantibong natural na herbal na gamot bukod sa lozenge`,
        `Ano ang mga natural herbal na gamot para mabawasan ang sakit sa lalamunan`, 
        `Ano pa ang ibang paraan sa paggamot ng sakit sa lalamunan maliban sa mga lozenges`, 
        `Mayroon bang alternative herbal na gamot na pwede kong gamitin para magamot ang sakit sa lalamunan`, 
    ], [
        `Ang pagsipsip ng tsaa na may pulot ay maaaring makatulong at mapawi ang mga kondisyon ng lalamunan.`
    ],7),
]

let section12 = [
    encodeMemory([
        `* saan * (punta|gamutin) * trangkaso *`,
        `Alin ang pinakamalapit na lugar na pwede magpatingin kung may trangkaso`,  
        `Anong mga lugar ang pwede puntahan kung may trangkaso`,   
        `Saan pwede magpakonsulta kung may trangkaso`,  
    ], [
        `Maaari mong alagaan ang sarili mo sa inyong bahay lamang. Gayunpaman, magpatingin kaagad sa iyong doktor kung ikaw ay nasa mas mataas na panganib ng malubhang komplikasyon ng trangkaso`
    ],5),
    // encodeMemory([
    //     `* influenza * type A *`,
    //     `Ano ang pagkakaiba ng trangkaso sa influenza type A`,  
    //     `Ano ba ang trangkaso type A`,  
    //     `Paano malalaman kung meron ka ng trangkaso type A`,  
    //     `Saan nagmumula ang trangkaso type A`,  
    // ], [
    //     `Ang Type A na trangkaso A ay may kakayahang makahawa sa mga hayop, bagama't mas karaniwan sa mga tao ang dumaranas ng mga karamdamang nauugnay sa ganitong uri ng trangkaso. `
    // ],1),
    // encodeMemory([
    //     `* influenza * type B *`,
    //     `Ano ang kaibahan ng trangkaso type B sa ibang uri ng influenza`,
    //     `Ano ang kaibahan ng trangkaso type B`,
    //     `Paano malalaman kung mayroon kang trangkaso type B`,
    //     `Sino ang mas madaling mahawahan ng trangkaso type B`,
    // ], [
    //     `Hindi tulad ng mga virus ng type A na trangkaso, ang uri ng trangkaso B ay matatagpuan lamang sa mga tao. Ang type B na trangkaso ay maaaring magdulot ng hindi gaanong matinding reaksyon kaysa sa type A flu virus, ngunit paminsan-minsan, ang type B na trangkaso ay maaari pa ring maging lubhang nakakapinsala. Ang mga virus ng influenza type B ay hindi inuri ayon sa subtype at hindi nagiging sanhi ng mga pandemya.`
    // ],1),
    // encodeMemory([
    //     `* influenza * type C *`,
    //     `Paano malalaman kung may trangkaso type C`, 
    //     `May mga kaibahan ba ang trangkaso type C sa ibang uri ng trangkaso`, 
    // ], [
    //     `Ang mga virus ng Influenza C ay matatagpuan din sa mga tao. Gayunpaman, ang mga ito ay mas banayad kaysa sa alinman sa uri A o B. Ang mga tao sa pangkalahatan ay hindi nagkakasakit nang husto mula sa mga virus ng influenza type C. Ang mga virus ng type C na trangkaso ay hindi nagdudulot ng mga epidemya.`
    // ],1),
    // encodeMemory([
    //     `* iba * type A * type B * type c *`,
    //     `* iba * type A * type c * type b *`,
    //     `* iba * type b * type a * type c *`,
    //     `* iba * type b * type c * type a *`,
    //     `*  iba * type c * type B * type a *`,
    //     `* iba * type c * type a * type b *`,
    //     `Ano ang kaibahan ng influenza type A, B, at C`,
    //     `Ano ang mga dapat gawin kung mayroong kahit anong type ng influenza`,
    //     `Ano ang mga influenza type A, B, at C`,
    //     `Gaano katagal bago gumaling ang influenza type A, B, at C`,
    //     `Iniiba ba ng influenza type A, B, at C`,
    //     `May ibang epekto ba sa kalusugan ang pagkakaroon ng influenza type A, B, at C`,
    //     `May pagkakaiba ba ang influenza type A, B, at C`,
    //     `Mayroon bang mas epektibong gamot sa influenza type A, B, at C`,
    //     `Mayroon bang mas malalang influenza type A kaysa sa B at C`,
    //     `Mayroon bang pagkakaiba sa kalubhaan ng sakit sa pagitan ng influenza type A, B, at C`,
    //     `Paano maiiwasan ang pagkakaroon ng influenza type A, B, at C`,
    //     `Paano malalaman kung ano ang type ng influenza na meron ka`,
    //     `Paano nagkakaiba ang paggamot sa influenza type A, B, at C`,
    //     `Saan nakukuha ang influenza type A, B, at C`,
    // ], [
    //     `Ang mga virus ng Type A na trangkaso A ay may kakayahang makahawa sa mga hayop, bagama't mas karaniwan sa mga tao ang dumaranas ng mga karamdamang nauugnay sa ganitong uri ng trangkaso. Maaari itong magdulot ng Epidemya. Ang Type B na trangkaso ay matatagpuan lamang sa mga tao at nagiging sanhi ng hindi gaanong matinding reaksyon kaysa sa Type A na virus. Hindi tulad ng Type A, hindi ito nagdudulot ng mga pandemya. Ang Type C ay matatagpuan din sa mga tao. Ang mga tao ay hindi masyadong nagkakasakit mula sa Type C na mga virus. Tulad ng uri B, hindi ito maaaring magdulot ng mga epidemya.`
    // ],1),
]



let section13 = [
    // encodeMemory([
    //     `* trangkaso * problema *`,
    //     `* problema * trangkaso *`,
    //     `Ano ang mga banta sa kalusugan posibleng masamang epekto kapag hindi naibsan ang trangkaso`,  
    //     `Ano ang mga maaring epekto komplikasyon ng trangkaso kung hindi ito maagapan`,
    //     `ano ang hindi mangandang epekto ng trangkaso`,
    //     `May mga posibleng epekto ba sa kalusugan kapag pinabayaan ang trangkaso`,   
    //     `Paano nakakaapekto sa kalusugan ang pagpabaya sa trangkaso`,  
    //     `ano ang pwede maging problema o epekto ng trangkaso`,
    //     `bakit hindi pabayaan ang trangkaso`
    // ], [
    //     `Ang trangkaso ay maaaring mag dulot ng bacterial pneumonia, bronchitis (inflamed airways), dehydration, impeksyon sa tainga, encephalitis (isang impeksyon sa utak), sepsis (isang impeksyon sa dugo), mga impeksyon sa sinus, viral pneumonia at maaaring lumala ang mga malalang kondisyong medikal.`
    // ],1),
]

let section14 = [
    // encodeMemory([
    //     `* (sino|saan) * tanong * sintomas * trangkaso *`,
    //     `* sintomas * trangkaso * (sino|saan) * tanong *`,
    //     `Anong ahensya ang pwedeng magbigay ng impormasyon tungkol sa trangkaso`,  
    //     `Anong mga organisasyon ang pwedeng lapitan para sa impormasyon tungkol sa trangkaso`,  
    //     `Mayroon bang doktor na pwedeng magbigay ng impormasyon tungkol sa trangkaso`,  
    //     `Saan pwede maghanap ng mga artikulo o balita tungkol sa trangkaso`,  
    //     `Saan pwede maghanap ng mga gabay sa kung paano magpapakonsulta tungkol sa trangkaso`,
    //     `Saan pwede magtanong tungkol sa mga bakuna para sa trangkaso`,  
    //     `Saan pwede magtanong tungkol sa mga sintomas ng trangkaso`,  
    //     `Saan pwede makahanap ng impormasyon tungkol sa mga gamot para sa trangkaso`,  
    //     `Sino ang pwedeng konsultahin tungkol sa trangkaso`,  
    //     `Sino ang pwedeng magbigay ng payo tungkol sa kung paano maiiwasan ang trangkaso`,  
    // ], [
    //     `Maaari mo ako tanungin sa mga pangunahing impormasyon. Ngunit kung kailangan mo ng mas malawak na impormasyon, subukang pumunta sa Center for Disease and Control at Department of Health. Mayroon silang mas detalyadong talakayan.`
    // ],1),
    // encodeMemory([
    //     `* saan * (punta|gamutin) * senyales * trangkaso * `,
    //     `Ano ang mga dapat gawin kapag mayroong sintomas ng trangkaso`,
    //     `May mga gamot sa bahay ba para sa sintomas ng trangkaso`,
    //     `Saan pwede magpatingin kung mayroong sintomas ng trangkaso`,
    // ], [
    //     `
    //     Ayon sa Centers for Disease Control and Prevention, ang trangkaso ay isang nakakahawang sakit sa paghinga na dulot ng mga virus ng trangkaso na nakahahawa sa ilong, lalamunan, at kung minsan sa mga baga.

    //     Bagama't maaari mong gamutin ang mga sintomas ng trangkaso sa bahay, karaniwang inirerekomenda na humingi ng medikal na atensyon mula sa isang tagapagbigay ng pangangalagang pangkalusugan. Maaari silang magreseta ng mga gamot na antiviral at magbigay ng iba pang mga paggamot upang makatulong na pamahalaan ang iyong mga sintomas at maiwasan ang anumang mga komplikasyon.

    //     Mahalagang kumunsulta sa doktor kung nakakaranas ka ng mga seryosong sintomas o nasa mas mataas na panganib para sa mga komplikasyon.
    //     `
    // ],5),
    encodeMemory([
        `* sintomas * trangkaso * `,
        `* masabi * trangkaso *`,
        `Ano ang mga palatandaan senyales sintomas ng trangkaso`,
        `Paano ko malalaman kung may trangkaso ako`,
        `sabihin o ibigay mo sakin ang listahan ng sintomas palatandaan o senyales ng flu`,
    ], [
        `Ayon sa Center of Disease and Control, ang mga taong may trangkaso ay maaring makaranas ng lagnat, ubo, namamagang lalamunan, sipon o baradong ilong, pananakit ng kalamnan o katawan, pananakit ng ulo, at pagkapagod (pagkapagod). Ang ilan sa iba ay maaaring magkaroon ng pagsusuka at pagtatae kahit na ito ay mas karaniwan sa mga bata at matatanda.`
    ],1),
]


let section15 = []


export const data = []
    .concat(section11)
    .concat(section12)
    .concat(section13)
    .concat(section14)
    .concat(section15)
