import { encodeMemory } from "@/api/configuration/model"

let section11 = [

    // antihistamines
    encodeMemory([
        `* ano * generic * (!antihistamines?|benadryl|citerizine) * `,
        //chatgpt start
        "Ano ang mga pangalan ng generic na antihistamines?",
        "Pwede mo bang ibigay ang mga pangalan ng generic na antihistamines?",
        "Alin ang mga pangalan ng generic na antihistamines?",
        "Mayroon ka bang listahan ng mga pangalan ng generic na antihistamines?",
        "Anu-ano ang mga pangalan ng generic na antihistamines?",
        "Pangalan ng mga generic na antihistamines, ano nga ulit?",
        "Maaari mo bang sabihin ang mga pangalan ng generic na antihistamines?",
        "Mga generic na antihistamines, anong mga pangalan nila?",
        "Pangalan ng mga generic na antihistamines, may alam ka ba?",
        "Anong mga antihistamine ang available sa generic form?"
        //chatgpt end
    ], [
        "Ang Citerizine ay isa sa mga sikat na generic na antihistamine"
    ],7),
    encodeMemory([
        "* ano * branded * (!antihistamines?|benadryl|citerizine) * trangkaso *",
        //chatgpt start
        "Ano ang mga pangalan ng branded na antihistamines?",    
        "Magbigay ka naman ng mga pangalan ng antihistamines na sikat.",  
        "Ilista mo sa akin ang mga antihistamines na kilala at may brand name.", 
        "Maaari mo bang bigyan ako ng mga pangalan ng branded na antihistamines?",
        "Ano-ano ang mga pangalan ng branded na antihistamines?",
        "Pwede mo ba akong magbigay ng mga pangalan ng branded na antihistamines?",
        "Magturo ka ng mga pangalan ng branded na antihistamines.",
        "Makapagbigay ka nga ng mga pangalan ng branded na antihistamines.",
        "Anong mga antihistamines na may brand ang pwede mong irekomenda?",
        "May alam ka bang mga branded na antihistamines?",
        "Maaari bang mag-request ng mga pangalan ng antihistamines na may brand?",
        "Anong mga antihistamines na may pangalan ng brand ang pwede mong mairekomenda?" 
        //chatgpt end
    ], [
        "Ang Benadryl ay isa sa mga sikat na branded na antihistamine na mabibili mo"
    ],7),
    encodeMemory([
        "* ano * dose * (!antihistamines?|benadryl|citerizine) *",
        "* paano * (kainin|gamitin|inumin) * (!antihistamines?|benadryl|citerizine) *",
        "* ano * hakbang * (!antihistamines?|benadryl|citerizine) *",
        "* paano * (!antihistamines?|benadryl|citerizine) * (gamitin|kainin|inumin) *",
        //chatgpt start
        "Ano ang tamang dosis ng antihistamines at paano ito dapat gamitin?",
        "Paano dapat gamitin ang antihistamines nang tama? Anong dosis ang dapat sundin?",
        "Saan dapat magsimula sa paggamit ng antihistamines at ano ang tamang dosis nito?",
        "Aling paraan ang tama sa paggamit ng antihistamines at ano ang tamang dosis para sa akin?",
        "Kailangan bang magpakonsulta sa doktor para sa tamang dosis ng antihistamines?",
        "Ano ang mga alituntunin sa paggamit ng antihistamines, kabilang ang tamang dosis?",
        "Paano malalaman ang tamang dosis ng antihistamines at kailan dapat ito inumin?",
        "May mga pag-aalinlangan pa rin ako sa tamang dosis ng antihistamines, paano ko ito malalaman?",
        "Paano dapat gamitin ang antihistamines sa paraang tama at ano ang mga dapat sundin na alituntunin?",
        "Anong paraan ang tama sa pag-inom ng antihistamines at paano malalaman ang tamang dosis?",
        "Saan ako makakahanap ng impormasyon tungkol sa tamang dosis at paggamit ng antihistamines?",
        "Paano malalaman kung tama ang dosis ng antihistamines na ininom at ano ang mga dapat gawin kung mayroong sobrang dosis?",
        "Kailan dapat inumin ang antihistamines at paano ito dapat gamitin nang tama?",
        "Ano ang mga bagay na dapat isaalang-alang sa paggamit ng antihistamines, kasama na ang tamang dosis?",      
        //chatgpt end
    ], [
        "Ang mga antihistamine ay maaaring inumin kasama ng pagkain o isang baso ng tubig o gatas upang mabawasan ang pangangati ng tiyan kung kinakailangan. Para sa cetirizine, narito kung paano mo ito inumin. Ang 6 na taong gulang at mas matanda ay maaaring magkaroon ng 5 hanggang 10 miligrams isang beses sa isang araw. Ang mga 4-6 taong gulang ay maaaring uminom ng maximum na 5mg isang beses o 2.5mg dalawang beses sa isang araw. Ang mga mas bata pa rito (4 sa ibaba) ay hindi dapat uminom ng gamot na ito."
    ],7),
    encodeMemory([
        "* ano  * ang (!antihistamines?|benadryl|citerizine) *",
        //chatgpt start
        "Ano nga ba ang mga antihistamines?",  
        "Ano ba ang kahulugan ng antihistamines?", 
        "Ano ang antihistamines at para saan ito?",  
        "Mga antihistamines, alam mo ba kung ano ito?",  
        "Ano-ano ang mga antihistamines?",  
        "Alam mo ba ang antihistamines?",  
        "Ano ang pinagagamit ng antihistamines?",  
        "Paano mo malalaman kung ano ang antihistamines?", 
        "Mga antihistamines, ano ang mga ito?",  
        "Ano ang mga bagay na dapat mong malaman tungkol sa antihistamines?"
        //chatgpt end
    ], [
        "Ang mga antihistamine ay isang klase ng mga gamot na karaniwang ginagamit upang gamutin ang mga sintomas ng allergy. Ang mga gamot na ito ay tumutulong sa paggamot sa mga kondisyon na dulot ng sobrang histamine, isang kemikal na nilikha ng immune system ng iyong katawan. Ang mga antihistamine ay kadalasang ginagamit ng mga taong may mga reaksiyong alerdyi sa pollen at iba pang mga allergens. Ginagamit din ang mga ito upang gamutin ang iba't ibang mga kondisyon tulad ng mga problema sa tiyan, sipon, pagkabalisa at higit pa."
    ],7),
    encodeMemory([
        "* (saan|ano) * gamit * (!antihistamines?|benadryl|citerizine) *",
        //chatgpt start
         "Para saan ginagamit ang antihistamines?",  
         "Anong mga kondisyon ang ginagamot ng antihistamines?",
         "Ano ang gamot na antihistamines at para saan ito?",
         "Saan maaaring magamit ang antihistamines?",       
        //chatgpt end
    ], [
        "Ang mga antihistamine ay ginagamit upang mapawi o maiwasan ang mga sintomas ng hay fever at iba pang uri ng allergy. Gumagana ang mga ito sa pamamagitan ng pagpigil sa mga epekto ng isang sangkap na tinatawag na histamine, na ginawa ng katawan. Ang histamine ay maaaring maging sanhi ng pangangati, pagbahing, sipon, at matubig na mga mata. Gayundin, sa ilang mga tao ay maaaring isara ng histamine ang mga bronchial tubes (mga daanan ng hangin ng mga baga) at nagpapahirap sa paghinga."
    ],7),
    encodeMemory([
        "* paano * gana * (!antihistamines?|benadryl|citerizine) * ",
        "* paano * (!antihistamines?|benadryl|citerizine) * gana *",
        "* ano * generic * (!antihistamines?|benadryl|citerizine) * ",
        //chatgpt start
        "Paano ba gumagana ang antihistamines?",
        "Ano ang proseso ng pagiging epektibo ng antihistamines?",
        "Papaano nga ba nakakatulong ang antihistamines?",
        "Paano nakakatanggal ng allergies ang antihistamines?",
        "Paano ginagamit ng katawan ang antihistamines para labanan ang allergies?",
        "Ano ang paraan ng pagkakatanggal ng antihistamines sa allergies?",
        "Paano nagagamot ng antihistamines ang mga sintomas ng allergies?",
        //chatgpt end
    ], [
        "Ang antihistamines ay gumagana sa pamamagitan ng pagbabawas ng histamine sa katawan. Ang histamine ay isang kemikal na nagiging sanhi ng mga sintomas ng allergy tulad ng pangangati, pamamaga, at pamamaga ng mata. Sa pamamagitan ng pagbabawas ng histamine, nababawasan ang mga sintomas ng allergy."
    ],7),
    encodeMemory([
        "* kailan * ( (huwag|hindi) * (kain|inom|gamit) | iwas ) * (!antihistamines?|benadryl|citerizine) *",
        //chatgpt start
        "Kailan hindi dapat uminom ng antihistamines?",
        "Ano ang mga sitwasyon na hindi pwedeng uminom ng antihistamines?",
        "May mga kondisyon ba na bawal uminom ng antihistamines?",
        "Paano malalaman kung hindi dapat uminom ng antihistamines?",
        "Anong mga bagay ang dapat iconsider bago uminom ng antihistamines?",
        //chatgpt end
    ], [
        "Karamihan sa mga tao ay maaaring ligtas na uminom ng mga antihistamine. Gayunpaman, ang mga taong buntis, nagpapasuso, bata, umiinom ng iba pang mga gamot, may pinagbabatayan na mga kondisyon tulad ng sakit sa puso, sakit sa atay, sakit sa bato o epilepsy ay maaaring kailangang maging maingat kapag umiinom nito."
    ],7),
    encodeMemory([
        "* (side|masama) * (effect|epekto) * (!antihistamines?|benadryl|citerizine) * ",
        "* hindi * maganda * epekto * (!antihistamines?|benadryl|citerizine) *",
        //chatgpt start
        "Ano ang mga side effects ng pag-inom ng antihistamines?",
        "Mayroon bang hindi magandang epekto sa katawan ang antihistamines?",
        "Mayroon bang nakikitang epekto ang antihistamines?",
        "May mga posibleng masamang epekto ba ang pag-inom ng antihistamines?",
        "Ano-ano ang mga hindi magandang epekto ng antihistamines sa kalusugan?",
        "Nakakapagdulot ba ng side effects ang antihistamines?",
        "Mayroon bang nararapat na bantayan kapag gumagamit ng antihistamines?",
        "Meron bang mga karamdaman na hindi dapat mag-take ng antihistamines?",
        "Ano-ano ang mga indikasyon na hindi ka pwedeng mag-take ng antihistamines?",
        "Kailan hindi nararapat ang paggamit ng antihistamines?"
        //chatgpt end
    ], [
        `Ang mga antihistamine ay maaaring magdulot ng mga side effect.

        Ang mga side effect o ang mga hindi magandang epeto nito ay tulad ng maari itong magpaantok, magpababa ng koordinasyo o reaksyong ng katawan. Kaya hanggat maari ay huwag magmaneho o gumamit ng makinarya pagkatapos uminom nito. Minsan din ay nakaka tuyo ito ng bibig. Pwede din ito magpalabo ng paningin. Pwede ka din mahirapang umihi. 
        `
    ],7),
    encodeMemory([
        "* tips * (!antihistamines?|benadryl|citerizine) *",
        //chatgpt start
        "Ano ang mga dapat isaalang-alang bago gamitin ang antihistamines?",
        "Ano ang dapat kong malaman tungkol sa paggamit ng antihistamines?",
        "Paano ko dapat gamitin ang antihistamines nang tama?",
        "Ano ang dapat kong gawin kung hindi gumagana ang antihistamines?",
        "Ano ang mga importanteng bagay na dapat kong malaman tungkol sa antihistamines?",
        //chatgpt end
    ], [
        `Kapag umiinom ng gamot na ito, subukang iwasan ang alak, sedatives, at tranquilizers, dahil sa mas mataas na panganib ng antok. Maaari itong maging sanhi ng depresyon ng Central nervous system. Kaya iwasan ang mga aktibidad na nangangailangan ng mental alertness. Mag-ingat kapag ang pasyente ay may kapansanan sa atay o bato. Pareho sa mga matatanda dahil mas sensitibo sila sa masamang epekto.
        `
    ],7),
    encodeMemory([
        "* (price|presyo|gaano kamahal|kano) * (!antihistamines?|benadryl|citerizine) *",
        "* (!antihistamines?|benadryl|citerizine) * (price|presyo|gaano kamahal|kano) *",
        //chatgpt start
        "Magkano po ang presyo ng antihistamines?",
        "Ano po ang halaga ng antihistamines?",
        "Mayroon po bang promo o diskwento sa antihistamines?",
        "Mayroon po bang mas mura o alternative na antihistamines?",
        "Saang tindahan po maaaring makabili ng antihistamines?",
        "Ano po ang pinakamurang brand ng antihistamines?"
        //chatgpt end
    ], [
        `Ang presyo ng antihistamine ay magkaiba sa bawat pharmacy. Ang citerizine na 10mg halimbawa ay tig 15 pesos kada tableta ayos sa Watson pharmacy. Ang Benadryl naman ay nagkakahalaga ng 41 pesos kada tabletas.
        `
    ],7),
    encodeMemory([
        "* uri * (!antihistamines?|benadryl|citerizine) *",
        //chatgpt start
        "Ano-ano ang mga uri ng antihistamines?",
        "May iba't ibang klase ng antihistamines ba?",
        "Paano malalaman kung anong klase ng antihistamines ang dapat gamitin?",
        "Ano-ano ang mga iba't ibang uri ng antihistamines?",
        "Meron bang iba't ibang uri ng antihistamines?",
        "Mayroon bang ibang klase ng antihistamines?",
        "Paano naman ang ibang uri ng antihistamines?",
        //chatgpt end
    ], [
        `Ang mga antihistamine ay may iba't ibang anyo kabilang ang mga likido, lotion, syrup, gel, eyedrops, tablet, kapsula, cream, at suppositories`
    ],7),
    encodeMemory([
        "* alternatibo * (!antihistamines?|benadryl|citerizine) *",
        //chatgpt start
        "May alternatibo ba sa antihistamines?",
        "Ano ang ibang gamot na pwedeng gamitin kaysa sa antihistamines?",
        "May ibang paraan ba upang maibsan ang allergies maliban sa antihistamines?",
        "Pwede bang gumamit ng natural na pamamaraan para mawala ang allergies?",
        "Ano ang mga herbal na gamot na pwedeng gamitin kaysa sa antihistamines?",
        "May mga natural na pampawala ba ng pangangati dahil sa allergies?",
        //chatgpt end
    ], [
        "Subukan mong kumain ng Ginger. Ayon sa Sinus and Allergy Wellness Center, ito ay isang natural na histamine, potent antiviral agent at isang immute booster. Ang luya ay isang ligtas at lubos na epektibong halamang gamot na nagpapaginhawa sa sistema ng pagtunaw at nagpapabuti sa sirkulasyon. Maaari kang gumawa ng ilang tsaa ng luya upang maibsan ang pagsisikip ng ilong at pananakit ng ulo. Habang humihigop ka ng iyong tsaa, langhapin ang singaw na lumalabas sa iyong tasa. Gayundin, subukang gamitin ito kasama ng iba pang mga halamang gamot, tulad ng turmeric, na isa pang malakas na natural na manggagamot."
    ],7),
    // analgesics
    encodeMemory([
        "* ano * generic * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) * ",
        //chatgpt start
        "Ano ang mga pangalan ng mga generic na analgesics?",
        "Anong mga pangalan ng mga generic na analgesics",
        "Alin ang mga pangalan ng mga generic na analgesics",
        "Ano-ano ang mga pangalan ng mga generic na analgesics",
        "Ano ang mga generic na pangalan ng mga analgesics",
        "Anong mga brand name ng mga generic na analgesics?",
        "Mayroon bang over-the-counter na mga generic na analgesics",
        "Alin sa mga generic na analgesics ang maaaring magpawala ng sakit?",
        "Ano ang mga pangalan ng mga generic na analgesics na mabibili sa botika?"
        //chatgpt end
    ], [
        `Ang ilan sa mga generic na pangalan na magagamit ay paracetamol, acetaminophen, at aspirin.`
    ],7),
    encodeMemory([
        "* ano * branded * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        //chatgpt start
        "Ano ang mga branded na pangalan ng mga analgesics?",
        "Maari bang magbigay ng mga pangalan ng branded na analgesics?",
        "Pwede bang malaman ang mga pangalan ng branded na analgesics?",
        "Maaari po bang magbigay ng mga kilalang pangalan ng analgesics?",
        " Ano po ang mga kilalang brand ng analgesics sa merkado?",
        "Maari po bang humingi ng mga brand ng analgesics na malapit sa akin?",
        " Ano po ang mga tatak ng analgesics na may malawak na pagkakakilala?",
        " Maaari po ba akong magtanong kung alin ang mga sikat na brand ng analgesics?",
        "Saan po makakabili ng mga branded na analgesics?",
        "Pwede po ba akong humingi ng rekomendasyon ng mga tatak ng analgesics na magagamit ko?",
        //chatgpt end
    ], [
        `Ilan sa mga Branded na pangalan ng paracetamol ay Biogesic at Calpol. Tulad ng para sa aspirin mayroon ding Aspen at Anthrom`
    ],7),
    encodeMemory([
        "* ano * dose * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        "* paano * (kainin|gamitin|inumin) * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        "* ano * hakbang * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        "* paano * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) * (gamitin|kainin|inumin) *",
        //chatgpt start
        "Ano ang tamang dosis o paraan ng paggamit ng mga analgesics?",
        "Paano dapat gamitin o iturok ang mga analgesics sa tamang dosis?",
        "Ano ang tamang paraan ng pag-inom ng mga analgesics?",
        "Paano dapat gamitin ang mga analgesics para sa tamang effectivity?",
        "Anong dapat tandaan sa tamang paggamit ng mga analgesics?",
        "Ano ang tamang interval sa pag-inom ng mga analgesics?",
        "Paano malalaman ang tamang dose ng mga analgesics?",
        "Paano masigurado na tamang dosage ng mga analgesics ang gagamitin?",
        "Anong mga bagay ang dapat isaalang-alang sa tamang paggamit ng mga analgesics?",
        "Paano maiiwasan ang sobrang dosage sa paggamit ng mga analgesics?",
        "Ano ang dapat gawin kung nakalimutan ang tamang dose ng mga analgesics?",
        "Ano ang tamang dosage ng mga analgesics?"

        //chatgpt end
    ], [
        `Ang analgesics ay isang umbrella term na tumutukoy sa mga gamot na kilala bilang mga pain killer. Narito ang ilan sa mga dosis na maaari mong sundin. Para sa ibuprofen an (NSAID) ang maximum na solong dosis ay 400mg. Para sa buong araw, ang 1200mg nito. Para sa naproxen (NSAID), maaari kang kumuha ng hanggang 500mg para sa solong dosis at 750mg para sa buong araw. Para sa acetaminophen (paracetamol) maaari kang uminom ng 1000mg para sa solong dosis at 4000mg para sa buong araw. Para sa aspirin, na kilala rin bilang acetylsalicylic acid, maaari kang uminom ng hanggang 1000mg na may maximum na pang-araw-araw na dosis na 3000mg para sa mga taong wala pang 65 at 200mg para sa mga taong higit sa 65 taong gulang.
        `
    ],7),
    encodeMemory([
        "* ano  * ang (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        //chatgpt start
        "Ano nga ba ang gamot na analgesics",
        "Ano ba ang mga pang-alis ng analgesics",
        "Ano ang ibig sabihin ng analgesics?",
        "Ano ang dapat kong malaman tungkol sa mga analgesics?",
        //chatgpt end
    ], [
        "Ang analgesics ay isang umbrella term na tumutukoy sa mga gamot na kilala bilang mga pain killer. Narito ang ilan sa mga dosis na maaari mong sundin. Para sa ibuprofen an (NSAID) ang maximum na solong dosis ay 400mg. Para sa buong araw, ang 1200mg nito. Para sa naproxen (NSAID), maaari kang kumuha ng hanggang 500mg para sa solong dosis at 750mg para sa buong araw. Para sa acetaminophen (paracetamol) maaari kang uminom ng 1000mg para sa solong dosis at 4000mg para sa buong araw. Para sa aspirin, na kilala rin bilang acetylsalicylic acid, maaari kang uminom ng hanggang 1000mg na may maximum na pang-araw-araw na dosis na 3000mg para sa mga taong wala pang 65 at 200mg para sa mga taong higit sa 65 taong gulang."
    ],7),
    encodeMemory([
        "* (saan|ano) * gamit * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        //chatgpt start
        "Ano ang mga sakit na ginagamot ng analgesics?",
        "Paano nakakatulong ang analgesics sa mga pasyente?",
        "Saan mas ligtas gamitin ang analgesics?",
        //chatgpt end
    ], [
        "Ang analgesics, na tinatawag ding mga painkiller, ay mga gamot na nagpapaginhawa sa iba't ibang uri ng pananakit - mula sa pananakit ng ulo hanggang sa mga pinsala sa arthritis. Binabawasan ng mga anti-inflammatory analgesics ang pamamaga, at binabago ng opioid analgesics ang paraan ng pag-unawa ng utak ng sakit."
    ],7),
    encodeMemory([
        "* paano * gana * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        "* paano * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) * gana *",
        "* (bakit|paano) * analgesics? * (tulong|gamot|buti|galing) *",
        //chatgpt start
        "Paano ba gumagana ang analgesics?",
        "Paano ba nakakatulong ang analgesics sa sakit?",
        "Paano ginagamit ang analgesics para mabawasan ang sakit?",
        "Paano magagamit ang analgesics upang mabawasan ang sakit?",
        "Ano ang epekto ng analgesics sa katawan?",
        "Paano nakakatulong ang analgesics sa mga karamdaman?"
        //chatgpt end
    ], [
        "Mayroong dalawang pangunahing grupo ng analgesics: anti-inflammatory analgesics at opioids. Gumagana ang mga anti-inflammatory na gamot sa pamamagitan ng pagbabawas ng pamamaga (pamamaga) sa lugar ng sakit. Kabilang sa mga halimbawa ang: Acetaminophen, Aspirin, at Non-steroidal na anti-inflammatory na gamot gaya ng ibuprofen at naproxen. Ang mga analgesic na Opiod sa kabilang banda ay gumagana sa pamamagitan ng pagbabago sa utak ng pang-unawa ng sakit. Ang mga halimbawa ay Fentanyl, Hydrocodone, at Methadone."
    ],7),
    encodeMemory([
        "* kailan * ( (huwag|hindi) * (kain|inom|gamit) | iwas) * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        //chatgpt start
        "Mayroon bang mga pagkain na hindi dapat kainin kapag gumagamit ng analgesics?",
        "Ano ang mga kondisyon na hindi dapat gamutin ng analgesics?",
        "Paano malalaman kung hindi dapat kumain ng analgesics?",
        "May mga gamot bang hindi dapat itake kasabay ng analgesics?",
        "Ano ang pwedeng maging epekto kapag nag-take ng analgesics na hindi dapat kainin?",
        "Kailan dapat magpakonsulta sa doktor bago uminom ng analgesics?",
        "May mga gamot bang hindi dapat itake kapag gumagamit ng analgesics?",
        //chatgpt end
    ], [
        "Ayon sa WebMD, hindi mo dapat inumin ang gamot na ito para sa self-treatment ng sakit nang mas mahaba kaysa sa 10 araw. Hindi mo dapat gamitin ang gamot na ito upang gamutin ang sarili ng lagnat na tumatagal ng higit sa 3 araw. Sa mga ganitong kaso, kumunsulta sa doktor dahil maaaring mas malubha ang kondisyon mo"
    ],7),
    encodeMemory([
        "* (side|masama) * (effect|epekto) * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) * ",
        "* hindi * maganda * epekto * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        //chatgpt start
        "Ano ang mga posibleng side effect ng analgesics?",
        "Mayroon bang masamang epekto ang pag-inom ng analgesics?",
        "Paano malalaman kung mayroon ka nang side effect sa paggamit ng analgesics?",
        "Mayroon bang pangmatagalang epekto ang pag-inom ng analgesics?",
        //chatgpt end
    ], [
        "Ang mga anti-inflammatory analgesics ay karaniwang ligtas. Ngunit maaari silang magdulot ng mga side effect at komplikasyon, kung madalas mong gamitin ang mga ito, nang masyadong mahaba o sa napakalaking dosis: Pinsala sa mga panloob na organo tulad ng atay o bato, pagtatae o paninigas ng dumi, mga problema sa puso, hypersensitivity, pagduduwal, sakit ng tiyan o puso paso, tugtog sa tainga, at ulser sa tiyan"
    ],7),
    encodeMemory([
        "* tips * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        //chatgpt start
        "Ano ang mga dapat tandaan sa paggamit ng analgesics?",
        "Mayroon bang mga tips sa tamang paggamit ng analgesics?",
        "Paano ba dapat gamitin ang analgesics nang maayos?",
        "Ano ang mga dapat gawin bago gamitin ang analgesics?",
         //chatgpt end
    ], [
        "Inumin ang gamot na ito gamit ang bibig. Uminom ng isang buong baso ng tubig (8 ounces/240 mililitro) kasama nito maliban kung iba ang sasabihin sa iyo ng iyong doktor. Huwag humiga nang hindi bababa sa 10 minuto pagkatapos mong inumin ang gamot na ito. Kung sumakit ang tiyan habang iniinom mo ang gamot na ito, maaari mo itong inumin kasama ng pagkain o gatas."
    ],7),
    encodeMemory([
        "* (price|presyo|gaano kamahal|kano) * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        "* (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) * (price|presyo|gaano kamahal|kano) *",
        //chatgpt start
        "Magkano ang presyo ng analgesics?",
        "Ilan ang halaga ng analgesics?",
        "Magkano ba ang average price ng analgesics?",
        "Mayroon bang iba't-ibang price range ang analgesics?",
        "Magkano ang dapat kong budget para sa pagbili ng analgesics?",
        "Ano ang mga presyong dapat kong malaman tungkol sa analgesics?",
        "May mga promo ba ngayon para sa analgesics at magkano ito?",
        "Saan ako makakabili ng mura ng analgesics?"
        //chatgpt end
    ], [
        "Ayon sa botika ng Muramed at Watsons, ang paracetamol tulad ng biogesic ay maaaring magsimula sa 4 pesos. Samantala, ang aspirin ay maaaring magsimula sa 3.50 pesos na nakalista ng watsons pharmacy. Gayunpaman, hindi mo ito mabibili nang walang reseta at maaaring mag-iba ang mga presyo depende sa kung saan mo binili ang mga ito."
    ],7),
    encodeMemory([
        "* uri * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        //chatgpt start
        "Ano-ano ang mga uri ng analgesics?",
        "May iba't ibang uri ba ang analgesics?",
        "Saan nagkakaiba-iba ang mga uri ng analgesics?",
        "May mga form ba ang analgesics?",
        "Ano-ano ang mga klase ng gamot na analgesics?",
        "Mayroon bang mga klasipikasyon ang analgesics?",
        //chatgpt end
    ], [
        "Magagamit ang mga analgesics sa maraming anyo gaya ng mga films, likido, mga patch ng pang-ilong, mga tabletas, mga tablet, mga kapsula, at pinaghalong powder."
    ],7),
    encodeMemory([
        "* alternatibo * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        //chatgpt start
        "Mayroon bang ibang gamot na pwedeng gamitin sa halip ng analgesics?",
        "Ano ang mga ibang paraan para maibsan ang sakit bukod sa analgesics?",
        "Mayroon bang mga natural na pamamaraan na pwedeng gawin para mawala ang sakit kaysa sa pagtake ng analgesics?",,
        "Paano maiiwasan ang pagtake ng masyadong maraming analgesics?",
        "Ano ang mga herbal remedies na pwedeng gamitin sa halip ng analgesics?",
        //chatgpt end
    ], [
        "Ang Philippine Institute of Traditional and Alternative Healthcare ay nagpahiwatig na maaari mong Ampalaya, Yerba Buena, ulasimang bato o pansit-pansitan, at bayabas ay may analagesic effect."
    ]),
    // nsaids
    encodeMemory([
        "* ano * generic * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        //chatgpt start
        "Ano ang mga pangalan ng generic na anti-inflammatory drugs o nsaids?",
        "Pangalan ng mga generic na nsaids, ano-ano ang mga ito?",
        "Mga pangalan ng mga nsaids sa generic form, alin-alin ang mga ito?",
        "Anong mga generic na gamot na nsaids ang maaaring ituro sa akin?",
        "Alin-aling mga pangalan ng generic na nsaids ang maaari kong gamitin?",
        "Ano-ano ang mga pangalan ng mga nsaids na maaaring bilhin sa generic form?",
        "Mga generic na pangalan ng mga nsaids, paki-lista naman.",
        "Anong mga nsaids ang may generic na pangalan?",
        "Maaari mo bang ibigay ang mga pangalan ng mga nsaids sa generic form?",
        "Generic names ng mga nsaids, ano ang mga ito?"
        //chatgpt end
    ], [
        "Ang NSAID ay may mga generic na pangalan tulad ng ibuprofen, naproxen, at aspirin na kadalasang nasa counter na mga anti-inflammatory na gamot"
    ],7),
    encodeMemory([
        "* ano * branded * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        //chatgpt start
        "Ano ang mga branded na pangalan ng mga nsaids?",
        "Pwede mo bang ibigay ang mga branded na pangalan ng mga nsaids?",
        "Pwede bang malaman kung anong mga nsaids ang may branded na pangalan?",
        "Mayroon bang mga nsaids na mayroong branded na pangalan? Kung meron, ano ang mga ito?",
        "Alam mo ba kung anong mga branded na nsaids ang available sa merkado?",
        "Pwede mo bang sabihin kung anong mga nsaids ang may branded na version?",
        "Pwede ka bang magbigay ng ilang mga halimbawa ng branded na nsaids?",
        "Anong mga pangalan ng branded na nsaids ang alam mo?",
        "Pwede mo bang ilarawan kung anong mga nsaids ang may branded na version?"
        //chatgpt end
    ], [
        "Ang Advil ay isang kilalang ibuprofen. Samantala, ang Flanax Forte ay isang kilalang brand para sa Naproxen."
    ],7),
    encodeMemory([
        "* ano * dose * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        "* paano * (kainin|gamitin|inumin) * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        "* ano * hakbang * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        "* paano * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * (gamitin|kainin|inumin) *",
        //chatgpt start
        "Ano ang tamang dose o paraan ng paggamit ng mga nsaids?",  
        "Paano tamang gamitin o dosis ng mga nsaids?",  
        "Anong tamang dosage ng nsaids?",  
        "Papaano ba ang tamang paggamit ng nsaids?",  
        "Saan dapat simulan ang paggamit ng nsaids?",  
        "Ilabas mo ang tamang paraan ng paggamit ng nsaids.",  
        "Alin ang tamang dosage para sa mga nsaids?",  
        "Maaari mo bang ipaliwanag kung paano gamitin ng tama ang mga nsaids?", 
        "Ano ang mga dapat tandaan sa tamang paggamit ng mga nsaids?", 
        "Magbigay ka ng payo tungkol sa tamang gamit ng mga nsaids."
        //chatgpt end
    ], [
        "Narito ang ilan sa mga dosis na maaari mong sundin. Para sa ibuprofen an (NSAID) ang maximum na solong dosis ay 400mg. Para sa buong araw, ang 1200mg nito. Para sa naproxen (NSAID), maaari kang kumuha ng hanggang 500mg para sa solong dosis at 750mg para sa buong araw. Para sa aspirin, na kilala rin bilang acetylsalicylic acid, maaari kang uminom ng hanggang 1000mg na may maximum na pang-araw-araw na dosis na 3000mg para sa mga taong wala pang 65 at 200mg para sa mga taong higit sa 65 taong gulang."
    ],7),
    encodeMemory([
        "* ano  * ang (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        //chatgpt start
        "Ano ang mga nsaids?",
        "Anong klaseng gamot ang nsaids?",
        "Para saan ang nsaids?",
        "Gamot ba ang nsaids?",
        "Ano ang mga dapat tandaan tungkol sa paggamit ng nsaids?",
        //chatgpt end
    ], [
        "Ang mga non-steroidal anti-inflammatory drugs (NSAIDs) ay mga gamot na malawakang ginagamit upang mapawi ang pananakit, bawasan ang pamamaga, at magpababa ng mataas na temperature."
    ],7),
    encodeMemory([
        "* (saan|ano) * gamit * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        //chatgpt start
        "Ano ang gamit ng NSAIDs?",
        "Para saan ginagamit ang NSAIDs?",
        "Sa anong mga kondisyon ginagamit ang NSAIDs?",
        "Mayroon bang specific na sakit na gamot ang NSAIDs?",
        "Ano ang mga uri ng sakit ang ginagamot ng NSAIDs?",
        "Paano ang NSAIDs ay nakakatulong sa pagpapagaling ng sakit?",
        "Mga anong sintomas ng sakit ang kayang gamutin ng NSAIDs?",
        "Kailan dapat gamitin ang NSAIDs?",
        "May mga bawal ba na kasabay sa pag-inom ng NSAIDs?",
        "Magkano ang NSAIDs at saan mabibili?"
        //chatgpt end
    ], [
        "Kadalasang ginagamit ang mga ito upang mapawi ang mga sintomas ng pananakit ng ulo, pananakit ng regla, sprains at strains, sipon at trangkaso, arthritis, at iba pang sanhi ng pangmatagalang pananakit."
    ],7),
    encodeMemory([
        "* paano * gana * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        "* paano * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * gana * ",
        "* (bakit|paano) * nsaids? * (tulong|gamot|buti|galing) *",
        //chatgpt start
        "Ano ang paraan ng pag-gagana ng nsaids?",
        "Paano gumagana ang nsaids sa katawan?",
        "Paano nakakatulong ang nsaids sa sakit ng katawan?",
        "Ano ang mga paraan ng nsaids para mapigilan ang pamamaga?",
        "Paano nakakatulong ang nsaids sa pagsugpo ng lagnat?",
        //chatgpt end
    ], [
        "Hinaharang ng mga NSAID ang isang partikular na enzyme na tinatawag na cyclooxygenase (o COX) na ginagamit ng katawan upang gumawa ng mga prostaglandin. Sa pamamagitan ng pagbabawas ng produksyon ng mga prostaglandin, ang mga NSAID ay nakakatulong na mapawi ang kakulangan sa ginhawa ng lagnat at mabawasan ang pamamaga at ang kaugnay na pananakit."
    ],7),
    encodeMemory([
        "* kailan * ( (huwag|hindi) * (kain|inom|gamit) | iwas ) * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        //chatgpt start
        "May mga pagkakataon ba na hindi dapat kumain ng NSAIDs?",
        "Kailan ba bawal kumain ng NSAIDs?",
        "Paano malalaman kung hindi pwedeng kumain ng NSAIDs?",
        //chatgpt end
    ], [
        "Ang mga NSAID ay karaniwang hindi inirerekomenda para sa mga taong may sakit sa bato, pagpalya ng puso, o cirrhosis, o para sa mga taong umiinom ng diuretics. Ang ilang mga pasyente na alerdye sa aspirin ay maaaring makainom ng mga piling NSAID nang ligtas, bagama't dapat itong talakayin nang maaga sa isang tagapagbigay ng pangangalagang pangkalusugan."
    ],7),
    encodeMemory([
        "* (side|masama) * (effect|epekto) * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        "* hindi * maganda * epekto * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        //chatgpt start
        "Ano ang mga epekto ng nsaids?",
        "Mayroon bang mga masamang epekto ang pag-inom ng nsaids?",
        "Maaaring magdulot ng ano-ano ang nsaids?",
        "Mayroon bang mga side effect ang paggamit ng nsaids?",
        "Ano-ano ang mga hindi kanais-nais na epekto ng nsaids?",
        "Kakailanganin ko bang mag-alala tungkol sa mga epekto ng nsaids?",
        "Nakakadulot ba ng mga side effect ang pag-inom ng nsaids?",
        "Ano ang dapat kong malaman tungkol sa mga epekto ng nsaids?",
        "Paano malalaman kung mayroon akong naging side effect mula sa nsaids?",
        "Ano-ano ang mga senyales ng hindi magandang reaksyon sa nsaids?"
        //chatgpt end
    ], [
        "Tulad ng lahat ng mga gamot, may panganib ng mga side effect mula sa mga NSAID. Mas karaniwan ang mga ito kung umiinom ka ng mataas na dosis sa mahabang panahon, o ikaw ay matanda na o nasa mahinang pangkalahatang kalusugan. Ang mga over-the-counter na NSAID sa pangkalahatan ay may mas kaunting mga side effect kaysa sa mas malalakas na inireresetang gamot. Ang mga posibleng side effect ay kinabibilangan ng hindi pagkatunaw ng pagkain, pananakit ng tiyan, ulser sa tiyan, pananakit ng ulo, pag-aantok, pagkahilo, mga reaksiyong alerhiya, maaari rin itong magdulot ng mga problema sa iyong atay, bato o sirkulasyon ng puso, tulad ng pagpalya ng puso, atake sa puso at stroke."
    ],7),
    encodeMemory([
        "* tips * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        //chatgpt start
        "Ano ang mga dapat tandaan kapag gumagamit ng nsaids?",
        "Paano dapat i-take ang nsaids para masiguro ang kaligtasan?",
        "Mayroon ba kayong mga payo sa pag-inom ng nsaids?",
        "Ano ang mga dapat iwasan kapag gumagamit ng nsaids?",
        "Paano masisiguro na hindi magkakaroon ng side effects sa paggamit ng nsaids?",
        "Mayroon ba kayong mga tips para maiwasan ang mga side effects ng nsaids?",
        //chatgpt end
    ], [
        "Huwag ihalo ang isang NSAID sa isa pa. Halimbawa, huwag uminom ng aspirin o ibuprofen kasama ng anumang iba pang nonsteroidal anti-inflammatory na gamot."
    ],7),
    encodeMemory([
        "* (price|presyo|gaano kamahal|kano) * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        "* (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * (price|presyo|gaano kamahal|kano) *",
        //chatgpt start
        "Ano po ang presyo ng NSAIDs?",
        "Magkano po ba ang NSAIDs?",
        "Ilan po ang halaga ng NSAIDs?",
        "Gaano kamahal ang NSAIDs?",
        "Mayroon po bang mura na NSAIDs?",
        "Mayroon po bang promo sa NSAIDs?",
        "May discount po ba sa NSAIDs?",
        "Pwede po bang hingi ng presyo ng NSAIDs?"
        //chatgpt end
    ], [
        "Batay sa data mula sa watsons, ang gamot na ito ay karaniwang nagsisimula sa 8php bawat piraso."
    ],7),
    encodeMemory([
        "* uri * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        //chatgpt start
        "Ano ang mga klase ng nsaids?",
        "Mga anong uri ng nsaids ang available?",
        "Mayroon bang iba't ibang klase ng nsaids?",
        "Ano-ano ang mga uri ng nsaids na maaaring gamitin?",
        "Ilan ang mga uri ng nsaids?",
        "Ano ang mga klasipikasyon ng nsaids?",
        "Ano ang mga uri ng nsaids na mabibili sa merkado?",
        //chatgpt end
    ], [
        "Madalas, ang mga NSAIDs ay capsules, tabletas, cream, o gel"
    ],7),
    encodeMemory([
        "* alternatibo * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        //chatgpt start
        "May ibang gamot bang pwedeng gamitin bilang alternatibo sa nsaids?",
        "Anong ibang gamot ang pwedeng gamitin na alternatibo sa nsaids?",
        "May ibang paraan bang mapapagaan ang sakit kesa sa paggamit ng nsaids?",
        "Anong mga natural na pamamaraan ang pwedeng gawin bilang alternatibo sa nsaids?",
        "Ano ang ibang mga gamot na pwedeng gamitin na hindi nsaids?",
        "May ibang paraan bang makapagbibigay ng relief sa sakit bukod sa paggamit ng nsaids?",
        "Ano ang ibang mga herbal na gamot na pwedeng gamitin bilang alternatibo sa nsaids?",
    ], [
        `Dahil ang mga NSAID ay maaaring magdulot ng mga nakakabagabag na epekto, ang mga alternatibo ay kadalasang inirerekomenda muna.

        Ang pangunahing alternatibo para sa lunas sa pananakit ay ang paracetamol, na available sa counter at ligtas na inumin ng karamihan ng mga tao.
        `
    ],7),
    // decongestants
    encodeMemory([
        "* ano * generic * (!decongestants?|pseudophedrine|sudafed) *",
        //chatgpt start
        "Ano ang mga pangalan ng generic na decongestants?",
        "Pangalan ng mga generic na decongestants?",
        "Mga generic na pangalan ng decongestants?",
        "Pangalan ng decongestants na generic?",
        "Anong mga generic na decongestants ang alam mo?",
        "Mayroon ka bang alam na mga pangalan ng generic na decongestants?",
        "Alam mo ba kung ano ang mga pangalan ng generic na decongestants?",
        "Mga generic na pangalan ng decongestants, ano ang mga ito?",
        "Pangalan ng mga generic na decongestants, alam mo ba?",
        "Ano-ano ang mga pangalan ng generic na decongestants?"
        //chatgpt end
    ], [
        "Ang isang sikat na generic na pangalan ng decongestant ay pseudoephedrine phenylephrine."
    ],7),
    encodeMemory([
        "* ano * branded * (!decongestants?|pseudophedrine|sudafed) *",
        //chatgpt start
        "Ano ang mga pangalan ng branded na decongestants?",
        "Mga pangalan ng decongestants na branded, maari mo bang ilarawan?",
        "Maari bang magbigay ng mga pangalan ng decongestants na branded?",
        "Pwede mo bang bigyan ako ng mga pangalan ng decongestants na branded?",
        "Ilista mo naman, kung mayroon, ang mga branded na pangalan ng decongestants?",
        "Maaari bang humingi ng mga pangalan ng decongestants na branded?",
        "Saan makakabili ng branded na decongestants? Pwede mo bang ibigay ang mga pangalan?",
        "Branded na decongestants, ano-ano ang mga ito?",
        "Gusto ko sanang malaman kung ano ang mga branded na decongestants. Pwede mo bang ibigay ang mga pangalan?",
        "Mga pangalan ng decongestants na branded. Maari mo bang ibigay ang listahan?"
        //chatgpt end
    ], [
        "isang halimbawa ng isang branded decongestant ay decolgen at Sudafed"
    ],7),
    encodeMemory([
        "* ano * dose * (!decongestants?|pseudophedrine|sudafed) *",
        "* paano * (kainin|gamitin|inumin) * (!decongestants?|pseudophedrine|sudafed) *",
        "* ano * hakbang * (!decongestants?|pseudophedrine|sudafed) *",
        "* paano * (!decongestants?|pseudophedrine|sudafed) * (gamitin|kainin|inumin) *",
        //chatgpt start
        "Ano ang tamang dosage para sa decongestants?",  
        "Paano tamang gamitin ang decongestants?",  
        "Ilabas ang tamang dose para sa decongestants.", 
        "Paano ba dapat i-take ang decongestants?",  
        "Ano ang tamang paraan ng paggamit ng decongestants?", 
        "Gaano kadalas at gaano karami ang dapat na decongestants na inumin?",  
        "Ano ang tamang dose ng decongestants para sa bata?",  
        "Gaano katagal dapat uminom ng decongestants?",
        //chatgpt end
    ], [
        `Ang karaniwang dosis ay depende sa gamot na iyong iniinom. Para sa Pseudoephedrine (sudafed) gayunpaman narito ang ilan sa mga rekomendasyon. Ang karaniwang dosis ng pseudoephedrine ay 60mg tablets o bilang isang likidong naglalaman ng 30mg sa 5ml.

        Mga matatanda at bata na may edad 12 hanggang 17 taon: uminom ng isang 60mg tablet o dalawang 5ml na kutsara (10ml) ng likido hanggang 4 na beses sa isang araw.
        
        Mga batang may edad 6 hanggang 11 taon: uminom ng kalahating tableta (30mg) o isang 5ml na kutsara ng likido hanggang 4 na beses sa isang araw.
        `
    ],7),
    encodeMemory([
        "* ano  * ang (!decongestants?|pseudophedrine|sudafed) *",
        //chatgpt start
        "Ano ang mga decongestants?",
        "Bakit mahalaga ang decongestants sa kalusugan?",
        "Ano ang gamot na decongestants?",
        "Anong mga sintomas ang ginagamot ng mga decongestants?",
        //chatgpt end
    ], [
        "Ang mga decongestant ay mga gamot na nagpapaginhawa sa kasikipan sa pamamagitan ng pagbabawas ng pamamaga, pamamaga at pagbuo ng mucus sa loob ng mga daanan ng ilong o mata. Wala silang ibang epekto sa mga sintomas tulad ng runny nose o pagbahin."
    ],7),
    encodeMemory([
        "* (saan|ano) * gamit * (!decongestants?|pseudophedrine|sudafed) *",
        //chatgpt start
        "Ano ang mga gamot na decongestants at saan ito ginagamit?",
        "Para saan ang mga decongestants?",
        "Anong mga sitwasyon ang kailangan ng decongestants?",
        "Kailan ginagamit ang mga decongestants?",
        "Saan pwedeng magamit ang mga decongestants?",
        "Ano ang mga kondisyon ng pagkakaroon ng sipon at saan ginagamit ang mga decongestants?",
        //chatgpt end
    ], [
        "Ang mga decongestant ay mga gamot na nagpapaginhawa sa kasikipan sa pamamagitan ng pagbabawas ng sakit, pamamaga at pagbuo ng mucus sa loob ng mga daanan ng ilong o mata. Wala silang ibang epekto sa mga sintomas tulad ng runny nose o pagbahin."
    ],7),
    encodeMemory([
        "* paano * gana * (!decongestants?|pseudophedrine|sudafed) *",
        "* paano * (!decongestants?|pseudophedrine|sudafed) * gana *",
        "* (bakit|paano) * decongestants? * (tulong|gamot|buti|galing) *",
        //chatgpt start
        "Paano gumagana ang mga decongestants sa katawan?",
        "Ano ang proseso ng pagpapagaling ng mga decongestants?",
        "Paano nakakatulong ang mga decongestants sa pagpapagaling?",
        "Paano ba nagpapababa ng pamamaga ang mga decongestants?",
        "Paano ba nagpapaluwag ng mga airway ang mga decongestants?",
        "Ano ang ginagawa ng mga decongestants sa ating katawan?",
        "Paano nakakatanggal ng bara sa ilong ang mga decongestants?",
        //chatgpt end
    ], [
        "Gumagana ang mga decongestant sa pamamagitan ng pagpapaliit ng mga daluyan ng dugo sa iyong ilong. Ang namamagang tissue sa loob ng ilong ay lumiliit, at mas madaling dumaan ang hangin."
    ],7),
    encodeMemory([
        "* kailan * ( (huwag|hindi) * (kain|inom|gamit) | iwas) * (!decongestants?|pseudophedrine|sudafed) *",
        //chatgpt start
        "Kailan hindi dapat gumamit ng mga decongestants?",
        "Ano ang mga sitwasyon na hindi dapat gumamit ng mga decongestants?",
        "Saan hindi dapat gamitin ang mga decongestants?",
        "May mga kondisyon ba na nagbabawal sa paggamit ng mga decongestants?",
        "May mga gamot ba na hindi dapat i-take kasabay ng mga decongestants?",
        "Paano malalaman kung hindi ka dapat gumamit ng mga decongestants?",
        //chatgpt end
    ], [
        "Huwag uminom ng mga decongestant kung mayroon kang mataas na presyon ng dugo na hindi nakokontrol. Ang pag-inom ng mga decongestant ay maaaring tumaas ang iyong presyon ng dugo kahit na ito ay kontrolado o halos normal. Maaaring kailanganin mong maghanap ng alternatibo sa mga decongestant. Huwag magbigay ng mga decongestant sa mga batang wala pang 6 taong gulang."
    ],7),
    encodeMemory([
        "* (side|masama) * (effect|epekto) * (!decongestants?|pseudophedrine|sudafed) * ",
        "* hindi * maganda * epekto * (!decongestants?|pseudophedrine|sudafed) *",
        //chatgpt start
        "Ano ang mga negatibong epekto ng mga decongestants?",  
        "Ano ang mga posibleng side effects ng decongestants?",
        "Mayroon bang mga masamang epekto ang paggamit ng decongestants?",
        "Mayroon bang mga nakakahamak na epekto ang decongestants?",
        "Ano-ano ang mga negatibong epekto ng decongestants?",
        "Maaari bang magdulot ng problema sa kalusugan ang paggamit ng decongestants?",
        "Mayroon bang mga kontraindikasyon ang decongestants?",
        "Ano ang mga epekto ng sobrang paggamit ng decongestants?",
        "Mayroon bang mga bawal na gamot o pagkain habang gumagamit ng decongestants?",
        "Paano malalaman kung may adverse reaction sa decongestants?",
        "Sino ang hindi dapat gumamit ng decongestants dahil sa mga side effects nito?"
        //chatgpt end
    ], [
        "Tulad ng anumang gamot, ang mga decongestant ay maaaring maging sanhi ng mga side effect. Maaari silang pansamantalang magdulot ng nerbiyos, pagkahilo, at mga problema sa pagtulog. Maaari silang maging sanhi ng palpitations ng puso (pakiramdam na parang tumatakbo ang iyong puso) o mas mataas na presyon ng dugo"
    ],7),
    encodeMemory([
        "* tips * (!decongestants?|pseudophedrine|sudafed) *",
        //chatgpt start
        "Mayroon ba akong dapat malaman bago kumain ng decongestants?",
        "Ano ang mga dapat kong isaalang-alang sa paggamit ng decongestants?",
        "Paano ko dapat gamitin ng tama ang decongestants?",
        "Mayroon bang mga bagay na hindi dapat gawin habang naka-decongestants?",
        //chatgpt end
    ], [
        "Ang mga decongestant ay maaaring inumin nang pasalita upang makatulong na mapawi ang kasikipan na nakakaapekto sa ilong, sinuses, at mata o direktang i-spray sa ilong o itanim sa mata para sa mas lokal na epekto."
    ],7),
    encodeMemory([
        "* (price|presyo|gaano kamahal|kano) * (!decongestants?|pseudophedrine|sudafed) *",
        "* (!decongestants?|pseudophedrine|sudafed) * (price|presyo|gaano kamahal|kano) *",
        //chatgpt start
        "Magkano ang mga decongestants?",
        "Magkano ang presyo ng decongestants?",
        "Magkano ba ang halaga ng mga decongestants?",
        "Ano ang presyo ng mga decongestants?",
        "Mayroon bang murang decongestants?",
        "Ilan ang halaga ng mga decongestants?",
        "Gaano kahalaga ang decongestants?",
        "Magkano ang dapat na budget para sa decongestants?",
        "Saan makakabili ng murang decongestants?",
        "Mayroon bang decongestants na abot-kaya?"
        //chatgpt end
    ], [
        "Ang presyo ay nag-iiba ayon sa anyo ng gamot. Halimbawa, para sa nasal sprays ito ay nagsisimula sa 90php , para sa mga patak sa paligid ng 78 (rose pharmacy website), at mga tablet tulad ng decolgen ito ay nagsisimula sa 6php (watsons)."
    ],7),
    encodeMemory([
        "* uri *  (!decongestants?|pseudophedrine|sudafed) *",
        //chatgpt start
        "Ano-ano ang mga uri o anyo ng decongestants?",
        "May iba't-ibang uri ba ng decongestants?",
        "Saan-saan mabibili ang mga decongestants at ano-ano ang mga uri nito?",
        "Anong mga anyo o klase ang mga decongestants?",
        "Ilang klase ng decongestants ang mayroon?",
        "Mayroon bang iba't-ibang anyo ng decongestants at ano-ano ito?",
        "Ano ang mga klase ng decongestants na maaaring mabili sa merkado?",
        "Ano-ano ang mga uri ng decongestants na available sa mga botika?",
        "Mayroon bang mga decongestants na iba't ibang anyo o presentation?",
        "Saan makakabili ng mga decongestants at anong mga uri ang pwedeng mabili?"
        //chatgpt end
    ], [
        "Available ang mga decongestant bilang mga patak sa ilong o pang-ilong, patak sa mata, at bilang mga tablet, kapsula, at syrup."
    ],7),
    encodeMemory([
        "* alternatibo * (!decongestants?|pseudophedrine|sudafed) *",
        //chatgpt start
        "Anong mga natural na alternatibo sa mga decongestants?",
        "Mayroon ba ibang gamot na pwede gamitin maliban sa decongestants?",
        "Ano ang mga alternatibo sa mga decongestants?",
        "Ano ang ibang mga gamot na maaaring gamitin bilang alternatibo sa decongestants?",
        "May ibang mga gamot ba na pwedeng gamitin bukod sa decongestants?",
        "Ano ang mga natural na paraan upang mawala ang sipon?",
        "May mga ibang paraan ba upang maibsan ang pamamaga ng ilong bukod sa decongestants?",
        "Ano ang mga alternative medicine na pwedeng gamitin sa lugar ng decongestants?",
        "Ano ang mga home remedies na maaaring magamit para sa sipon?",
        "Ano ang ibang mga paraan upang mabawasan ang pangangati at pamamaga ng ilong bukod sa gamot na decongestants?",
        "Ano ang ibang mga herbal na gamot na pwedeng gamitin para sa sipon?",
        "May mga non-pharmacological interventions ba na pwedeng gawin para maibsan ang sipon nang hindi na kailangan ng decongestants?"
        //chatgpt end
    ], [
        "Available ang mga alternatibo sa oral decongestant. Sa larangan ng droga, ang mga antihistamine tulad ng diphenhydramine (Benadryl), chlorpheniramine (Chlor-Trimeton), cetirizine (Zyrtec), at loratadine (Claritin) ay makakatulong sa baradong ilong na ligtas para sa pandinig"
    ],7),
    // expectorant
    encodeMemory([
        "* ano * generic * (!expectorants?|guaifenesin) *",
        //chatgpt start
        "Ano ang mga pangalan ng mga generic na gamot na pampatanggal ng plema o expectorants?", 
        "Ibigay ang mga pangalan ng mga generic na gamot na nagpapaluwag sa plema o expectorants.", 
        "Anong mga generic na expectorants ang maaaring gamitin?", 
        "Mayroon bang ibang mga generic na gamot na pampatanggal ng plema o expectorants?", 
        "Ilarawan ang mga generic na expectorants na nagpapabawas ng plema.", 
        "Mga pangalan ng generic na gamot na pampatanggal ng plema, alam mo ba?", 
        "Ano-ano ang mga pangalan ng mga generic na gamot na nagpapababa ng plema?", 
        "Sino-sino ang mga manufacturer ng mga generic na gamot na expectorants?", 
        "Ano ang mga generic na expectorants na mabibili nang mura para sa pagsinghot ng plema?", 
        "Anong mga generic na expectorants na pampababa ng plema ang mayroong pinakamababang presyo?"
        //chatgpt end
    ], [
        "Ang guiafenesin at potassium iodide ay mga halimbawa ng isang generic na expectorant"
    ],7),
    encodeMemory([
        "* ano * branded * (!expectorants?|guaifenesin) *",
        //chatgpt start
        "Ano ang mga tatak ng mga branded na expectorants?",  
        "Ilista ang mga branded na pangalan ng expectorants.",  
        "Anong mga pangalan ng branded na expectorants ang alam mo?",  
        "Maaari mo bang ibigay ang mga pangalan ng mga branded na expectorants?",  
        "Magbigay ka nga ng mga branded na pangalan ng mga gamot na pang-alis ng plema.",  
        "Alam mo ba kung ano ang mga branded na pangalan ng expectorants?",  
        "Magpakilala ka naman ng mga branded na pangalan ng mga gamot na pangtanggal ng plema.",  
        "Pwede mo bang ipaliwanag kung ano ang mga branded na pangalan ng mga expectorants?",  
        "Nais ko lang malaman kung anong mga branded na pangalan ng mga gamot na pampatanggal ng plema.",  
        "Mayroon ka bang listahan ng mga branded na pangalan ng mga expectorants?"
        //chatgpt end
    ], [
        "ilan sa mga sikat ay ang Mucinex at Robitussin"
    ],7),
    encodeMemory([
        "* ano * dose * (!expectorants?|guaifenesin) *",
        "* paano * (kainin|gamitin|inumin) * (!expectorants?|guaifenesin) *",
        "* ano * hakbang * (!expectorants?|guaifenesin) *",
        "* paano * (!expectorants?|guaifenesin)  * (gamitin|kainin|inumin) *",
        // chatgpt start
        "Paano ba tamang gamitin o dose ng mga expectorants?",
        "Anong dapat kong malaman tungkol sa paggamit ng mga expectorants?",
        "Saan ako magsisimula sa paggamit ng mga expectorants?",
        "Mayroon ba akong mga bagay na dapat malaman tungkol sa paggamit ng mga expectorants?",
        "Paano ko malalaman kung tamang ang dose ng expectorants na gagamitin ko?",
        "Anong mga dapat kong tandaan kapag gumagamit ng mga expectorants?",
        "Paano kung hindi ako sigurado sa tamang dosage ng expectorants na gagamitin ko?",
        "Maaari bang magdagdag ng doses kapag hindi pa rin nawawala ang ubo?",
        // chatgpt end
    ], [
        
        `Para sa ubo: Ang mga matatanda ay maaaring tumagal ng 200 hanggang 400 milligrams (mg) bawat apat na oras.
        Ang mga batang 6 hanggang 12 taong gulang ay maaaring tumagal ng 100 hanggang 200 mg bawat apat na oras.
        Ang mga batang 4 hanggang 6 na taong gulang ay maaaring tumagal ng 50 hanggang 100 mg bawat apat na oras.
        Ang mga bata at sanggol hanggang 4 na taong gulang ay hindi dapat uminom nito
        `
    ],7),
    encodeMemory([
        "* ano  * ang (!expectorants?|guaifenesin) *",
        //chatgpt start
        "Ano nga ba ang mga expectorants?", 
        "Ano ang ibig sabihin ng mga expectorants?",  
        "Mga anong uri ng gamot ang mga expectorants?",  
        "Paano gumagana ang mga expectorants?",  
        "Para saan ba ang mga expectorants?",  
        "Mga gamot ba ang mga expectorants?",  
        "May mga brand name ba ang mga expectorants?",  
        "Ano-ano ang mga sangkap ng mga expectorants?",  
        //chatgpt end
    ], [

        `Ang expectorants ay mga gamot na tumutulong sa paglalabas ng plema at nakakatulong sa pagbabawas ng sipon at ubo. Ang pangunahing layunin nito ay upang mapabuti ang paghinga sa pamamagitan ng pagpapaluwag ng mga daanan ng hangin.`
    ],7),
    encodeMemory([
        "* (saan|ano) * gamit * (!expectorants?|guaifenesin) *",
        //chatgpt start
        "Anong sakit sa katawan ang ginagamot ng mga expectorants?",
        "Para saan ba talaga ginagamit ang mga expectorants?",
        "May mga specific na sakit ba sa baga o lungs ang pinapainom ng expectorants?",
        "Pwede ba gamitin ang expectorants para sa ubo lang?",
        "Ano ang mga common na sitwasyon kung saan kailangan ang mga expectorants?",
        //chatgpt end
    ], [
        "Ang mga expectorant ay mga sangkap na nagpapataas ng mga pagtatago ng daanan ng hangin. Ginagawa nila ito sa pamamagitan ng pagtaas ng tubig na nilalaman ng mga secretions na nagpapababa ng kanilang lagkit, na ginagawang mas madaling maubo"
    ],7),
    encodeMemory([
        "* paano * gana * (!expectorants?|guaifenesin) * ",
        "* paano * (!expectorants?|guaifenesin) * gana * ",
        "* (bakit|paano) * expectorants? * (tulong|gamot|buti|galing) *",
        //chatgpt start
        "Paano nakakatulong ang expectorants sa pag-aalis ng plema sa baga?",
        "Paano gumagana ang expectorants upang mapagaan ang pananakit ng lalamunan at pagpapakilos ng plema?",
        "Paano tumutulong ang mga expectorants upang mapabilis ang pagtanggal ng plema sa baga?",
        "Ano ang proseso ng pagpapakilos ng expectorants sa pag-aalis ng plema sa baga?",
        "Paano nakakatulong ang mga expectorants sa pagtanggal ng plema sa baga?",
        "Paano nakakatulong ang mga gamot na expectorants upang maalis ang plema sa baga?",
        "Paano nagtatrabaho ang expectorants upang maiwasan ang mga komplikasyon ng sakit sa baga?",
        "Ano ang mechanism of action ng mga expectorants upang maiwasan ang mga kondisyon sa baga?",
        //chatgpt end
    ], [
        "Ang mga expectorant ay nagpapadulas sa iyong daanan ng hangin. Nakakatulong ito na lumuwag ang uhog at gawing mas manipis ang mga pagtatago sa iyong daanan ng hangin. Sa pamamagitan ng pagluwag ng uhog, ginagawang mas produktibo ng mga expectorant ang iyong ubo. Ginagawa nitong mas madali para sa iyo na mabisang umubo ng uhog at malinis ang iyong lalamunan."
    ],7),
    encodeMemory([
        "* kailan * ( (huwag|hindi) * (kain|inom|gamit) | iwas) * (!expectorants?|guaifenesin) *",
        //chatgpt start
        "Kailan hindi dapat gumamit ng expectorants?",
        "Anong mga kondisyon ang hindi dapat gamutin ng expectorants?",
        "May mga sitwasyon ba na hindi pwedeng mag-take ng expectorants?",
        "Saan hindi dapat gamitin ang expectorants?",
        "May mga panahon ba na hindi dapat uminom ng expectorants?",
        "Kailan hindi ligtas na gumamit ng expectorants?",
        //chatgpt end
    ], [
        ` Dapat kang makipag-usap sa iyong tagapagbigay ng pangangalagang pangkalusugan bago gumamit ng expectorant kung ikaw ay buntis o nagpapasuso. Kung mayroon kang anumang uri ng reaksiyong alerdyi o hindi pagpaparaan sa mga expectorant sa nakaraan, hindi mo dapat gamitin ang mga gamot na ito.

        Mag-ingat kapag nagmamaneho o gumagamit ng makinarya habang umiinom ng expectorant, dahil ang mga gamot na ito ay maaaring magdulot sa iyo ng antok o pagkahilo.`
    ],7),
    encodeMemory([
        "* (side|masama) * (effect|epekto) * (!expectorants?|guaifenesin) * ",
        "* hindi * maganda * epekto * (!expectorants?|guaifenesin)  *",
        //chatgpt start
        "Ano ang mga posibleng side effects ng pag-inom ng expectorants?",
        "Mayroon bang mga masamang epekto sa kalusugan kapag gumagamit ng expectorants?",
        "Ano ang mga epekto sa katawan kapag kumukuha ng mga expectorants?",
        "Mayroon bang mga hindi kanais-nais na epekto sa paggamit ng expectorants?",
        "Maaari bang magdulot ng negatibong epekto ang mga expectorants sa kalusugan?",
        "Ano-ano ang mga posibleng komplikasyon ng pag-inom ng expectorants?",
        "Mayroon bang mga side effects na nararanasan kapag gumagamit ng expectorants?",
        "Paano malalaman kung mayroon nang side effects ang pag-inom ng expectorants?",
        //chatgpt end
    ], [
        "Ang mga expectorant ay hindi karaniwang nagdudulot ng malubhang epekto. Ang pinakakaraniwang epekto ay ang pagkahilo, pag-aantok, at pantal."
    ],7),
    encodeMemory([
        "* tips * (!expectorants?|guaifenesin) *",
        //chatgpt start
        "Ano ang mga dapat tandaan kapag kumukuha ng expectorants?",
        "Paano dapat iinumin ang mga expectorants?",
        "Mayroon bang pagkain na dapat iwasan habang umiinom ng expectorants?",
        "Ano ang mga dapat gawin para ma-maximize ang epekto ng expectorants?",
        "Ano ang mga dapat tandaan sa pag-inom ng expectorants?",
        "Mayroon ba kayong mga tips para sa pag-inom ng expectorants?",
        "Paano dapat gamitin ang expectorants nang tama?",
        //chatgpt end
    ], [
        "Huwag durugin ang mga tabletas, at siguraduhing sukatin ang mga likidong formulasyon gamit ang mga panukat na tool na ibinigay kasama ng iyong gamot. Kadalasang inirerekomenda na uminom ka ng maraming likido kapag umiinom ng expectorant."
    ],7),
    encodeMemory([
        "* (price|presyo|gaano kamahal|kano) * (!expectorants?|guaifenesin) *",
        "* (!expectorants?|guaifenesin) * (price|presyo|gaano kamahal|kano) * ",
        //chatgpt start
        "Magkano ang presyo ng expectorants?",
        "Ilan ang halaga ng expectorants?",
        "Magkano ba ang bilihin ng expectorants?",
        "Ano ang presyo ng expectorants?",
        "Ilan ang magagastos sa pagbili ng expectorants?",
        "Magkano ang kailangan ko para sa isang bote ng expectorants?",
        "Saang presyo mabibili ang expectorants?",
        "Gaano kahalaga ang expectorants?",
        "Ano ang magiging gastos ko sa pagbili ng expectorants?",
        "Magkano ba ang dapat ko gastusin sa pagbili ng expectorants?"
        //chatgpt end
    ], [
        "Sa watsons, ang robitussin guaifenesin price ay nagsisimula sa 92php."
    ],7),
    encodeMemory([
        "* uri *  (!expectorants?|guaifenesin) *",
        //chatgpt start
        "Ano-ano ang mga uri o form ng mga expectorants?",
        "Iba't ibang klase ba ang mga expectorants?",
        "May iba't ibang uri ba ng mga gamot na pang-alis ng plema?",
        "Saan makakabili ng mga iba't ibang uri ng expectorants?",
        "May tablet, syrup, at capsule ba na uri ng expectorants?",
        "Ano-ano ang mga klase ng mga gamot na pangtanggal ng plema?",
        "Ano-ano ang mga klase ng mga natural na pangtanggal ng plema?",
        //chatgpt end
    ], [
        "Sa pangkalahatan, available ang mga expectorant na over-the-counter (OTC) sa mga form na likido, tableta, at tablet."
    ],7),
    encodeMemory([
        "* alternatibo * (!expectorants?|guaifenesin) *",
        //chatgpt start
        "Ano ang ibang gamot na puwedeng gamitin bilang alternative sa expectorants?",
        "Mayroon bang ibang alternative sa pag-inom ng expectorants?",
        "Ano ang mga herbal na alternative sa expectorants?",
        "Puwede bang magkaroon ng alternative treatment sa cough kaysa sa pag-inom ng expectorants?",
        "Ano ang ibang options na pwede kong gawin kung ayaw kong uminom ng expectorants?",
        "Mayroon bang ibang gamot na hindi expectorants ang gamot sa ubo?",
        "Ano ang ibang natural na paraan na puwedeng gawin para maibsan ang ubo maliban sa expectorants?",
        "Saan pwedeng makakuha ng alternative na gamot sa expectorants?",
        "Ano ang ibang over-the-counter medications na pwede kong gamitin kung ayaw kong uminom ng expectorants?",
        "Ano ang ibang alternative treatments para sa ubo maliban sa pag-inom ng expectorants?",
        //chatgpt end
    ], [
        "Ang mga natural na expectorant ay isa pang opsyon kung sinusubukan mong paluwagin ang uhog at mapawi ang pagsikip ng dibdib. Kasama sa mga natural na expectorant ang:Menthol, Ivyleaf extract , oral hydration (pag-inom ng maraming tubig), steaming (paglanghap ng mainit na basang hangin), at honey (pagdaragdag ng pulot sa mga inumin)"
    ],7),

    // antitussives
    encodeMemory([
        "* ano * generic * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        //chatgpt start
        "Mga pangalan ng generic na antitussives?",
        "Ano ang mga pangalan ng generic na antitussives?",
        "Alin ang mga pangalan ng generic na antitussives?",
        "Mayroon bang mga pangalan ng generic na antitussives?",
        "Pangalan ng mga generic na antitussives?",
        "Mga generic na antitussives?",
        "Anong mga pangalan ng generic na antitussives?",
        "Mga antitussives na generic name?",
        "Listahan ng mga pangalan ng generic na antitussives?",
        "Mga antitussives na generic na pangalan?"
        //chatgpt end
    ], [
        "Ang Dexthomethorphan at diphenhydramine ay mga generic antitussive"
    ],7),
    encodeMemory([
        "* ano * branded * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        //chatgpt start
        "Ano ang mga tatak ng mga branded na antitussives?",
        "Mga pangalan ng antitussives na branded?",
        "Mayroon ka bang listahan ng mga antitussives na may tatak?",
        "Anong mga pangalan ng antitussives na branded ang alam mo?",
        "Pwede mo bang ibigay ang mga pangalan ng branded na antitussives?",
        "Ano-ano ang mga branded na antitussives?",
        "May kilala ka bang antitussives na may tatak?",
        "Pwede mo bang magbigay ng mga pangalan ng antitussives na branded?",
        "Ano-ano ang mga antitussives na mayroong tatak?",
        "Mga branded na pangalan ng antitussives na alam mo?"
        //chatgpt end
    ], [
        "Ang Robitussin ay isa sa mga ito"
    ],7),
    encodeMemory([
        "* ano * dose * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  *",
        "* paano * (kainin|gamitin|inumin) * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  *",
        "* ano * hakbang * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        "* paano * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        //chatgpt start
        "Ano ang tamang paggamit ng mga antitussives?",  
        "Paano dapat gamitin ang mga antitussives?",    
        "Gaano kadalas dapat ang antitussives gamitin?",  
        "May mga bagay ba na dapat isaalang-alang bago gumamit ng antitussives?",
        "Paano malalaman kung tama ang dosage ng antitussives na gagamitin?",  
        //chatgpt end
    ], [
        `Para sa form ng dosis ng lozenge:
        Para sa ubo:
        Mga matatanda at bata 12 taong gulang at mas matanda—5 hanggang 15 mg bawat dalawa hanggang apat na oras, kung kinakailangan.
        Mga batang 6 hanggang 12 taong gulang—5 hanggang 15 mg bawat dalawa hanggang anim na oras, kung kinakailangan.
        Mga batang 4 hanggang 6 na taong gulang—5 mg kada apat na oras, kung kinakailangan.
        Mga bata at sanggol hanggang 4 na taong gulang—Hindi inirerekomenda ang paggamit .
        Para sa form ng dosis ng syrup:
        Para sa ubo:
        Mga matatanda at bata 12 taong gulang at mas matanda—30 mg tuwing anim hanggang walong oras, kung kinakailangan.
        Mga batang 6 hanggang 12 taong gulang—7 mg tuwing apat na oras o 15 mg tuwing anim hanggang walong oras, kung kinakailangan.
        Mga batang 4 hanggang 6 na taong gulang—3.5 mg bawat apat na oras o 7.5 mg bawat anim hanggang walong oras, kung kinakailangan.
        Mga bata at sanggol hanggang 4 na taong gulang—Hindi inirerekomenda ang paggamit
        `
    ],7),
    encodeMemory([
        "* ano  * ang (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  *",
        //chatgpt start
        "Ano nga ba ang antitussives?",  
        "Ano ang kahulugan ng antitussives?",  
        "Alam mo ba kung ano ang antitussives?",  
        "Maaari mo bang ipaliwanag kung ano ang antitussives?",  
        "Ano ang mga pangunahing katangian ng antitussives?", 
        "Paano nagagamit ang antitussives?",  
        "Para saan ang antitussives?",  
        "Bakit mahalaga ang antitussives sa kalusugan?",
        //chatgpt end
    ], [
        "Ang mga antitussive ay mga reseta o over-the-counter na gamot na ginagamit para sa pagsugpo sa ubo."
    ],7),
    encodeMemory([
        "* (saan|ano) * gamit * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        //chatgpt start
        "Anong uri ng ubo ang dapat gamutan ng antitussives?",
        "Pwede bang gamitin ang antitussives sa mayroong asthma?",
        "Kailan pwedeng gamitin ang antitussives na gamot?",
        "Para saan ginagamit ang antitussives?",
        "Ano ang mga benepisyo ng antitussives?",
        "Para saan ba talaga ang antitussives?",
        "Ano ang layunin ng paggamit ng antitussives?",
        "May mga sakit ba na pinapainom ng antitussives?",
        "Ano ang pinagkaiba ng antitussives sa ibang gamot?",
        "Kailan dapat uminom ng antitussives?",
        "Bakit kailangan ng antitussives?",
        "Paano nakakatulong sa kalusugan ang antitussives?",
        "Ano ang magandang gawin bago uminom ng antitussives?"
        //chatgpt end
    ], [
        "Karaniwang ginagamit ang mga ito upang gamutin ang tuyong ubo na dulot ng mga allergy, sakit sa paghinga, o impeksyon. Maaari ding gamutin ng mga antitussive ang post-viral na ubo, o isang patuloy na ubo na nabubuo pagkatapos malutas ang isang impeksiyon"
    ],7),
    encodeMemory([
        "* paano * gana * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  *",
        "* paano * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) * gana * ",
        "* (bakit|paano) * antitussives? * (tulong|gamot|buti|galing) *",
        //chatgpt start
        "Paano gumagana ang mga antitussives?",
        "Ano ang proseso ng pagpapagaling ng antitussives?",
        "Paano nakakatulong sa ubo ang mga antitussives?",
        "Paano tumutulong sa kalusugan ng baga ang mga antitussives?",
        "Magbigay ng impormasyon tungkol sa mekanismo ng pagpapagaling ng antitussives?",
        "Paano nakakapagpababa ng sintomas ng ubo ang mga antitussives?",
        "Paano nakakapagbigay ng kaginhawahan sa pakiramdam ang mga antitussives?",
        "Ano ang ginagawa ng antitussives upang mabawasan ang pangangati ng lalamunan?",
        "Paano nakatutulong ang mga antitussives sa pagpapalambot ng plema?",
        "Paano nakakatulong ang mga antitussives upang mabawasan ang pag-ubo?"
        //chatgpt end
    ], [
        "Ang mga antitussive ay naisip na gumagana sa pamamagitan ng pagpigil sa isang coordinating region para sa pag-ubo na matatagpuan sa stem ng utak, na nakakagambala sa cough reflex arc; bagaman ang eksaktong mekanismo ng pagkilos ay hindi alam"
    ],7),
    encodeMemory([
        "* kailan * ( (huwag|hindi) * (kain|inom|gamit) | iwas) * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        //chatgpt start
        "Ano ang mga sitwasyon na hindi dapat uminom ng antitussives?",
        "Paano malalaman kung hindi pwede gumamit ng antitussives?",
        "Kailan hindi dapat (uminom|magtake) ng antitussives?",
        "Ano ang mga pwedeng komplikasyon kung magtake ng antitussives ng hindi dapat?",
        "Ano ang mga kondisyon na hindi dapat gumamit ng antitussives?",
        "Saan makakakuha ng impormasyon kung pwede uminom ng antitussives o hindi?",
        "May mga sitwasyon ba na hindi safe uminom ng antitussives?",
        "Kailan hindi recommended ang pag-inom ng antitussives?",
        "Ano ang mga kondisyon na hindi dapat gamutin ng antitussives?",
        "Kailan hindi ligtas ang paggamit ng antitussives?",
        "May mga tao ba na hindi dapat uminom ng antitussives?",
        //chatgpt end
    ], [
        "Ang gamot na ito ay hindi ligtas para sa mga batang wala pang 4 taong gulang."
    ],7),
    encodeMemory([
        "* (side|masama) * (effect|epekto) * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  *",
        "* hindi * maganda * epekto * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        //chatgpt start
        "Ano ang mga negatibong epekto ng antitussives?",
        "Mayroon bang mga hindi magandang epekto ang pag-inom ng antitussives?",
        "Paano malalaman kung mayroon kang side effects mula sa antitussives?",
        "Maaaring magdulot ba ang antitussives ng mga di kanais-nais na epekto?",
        "Ano ang mga kadalasang epekto ng paggamit ng antitussives?",
        "Paano maiiwasan ang mga side effects ng antitussives?",
        "Ano ang dapat gawin kung mayroong naranasan na hindi magandang epekto ang antitussives?",
        "Maaari bang magdulot ng iba't ibang uri ng side effects ang antitussives?",
        "Ano ang dapat malaman tungkol sa mga epekto ng antitussives bago ito gamitin?"
        //chatgpt end
    ], [
        "Ang pinakakaraniwang epekto ay kinabibilangan ng pagduduwal at pag-aantok. Ang ilang mga pasyente ay maaaring makaranas ng pantal o kahirapan sa paghinga. Ang mataas na dosis ay maaaring magdulot ng mga guni-guni at pagkakahiwalay, at ang gamot ay naiulat na ginagamit bilang isang panlibang na gamot. Kaya dapat mag ingat pag kumain ng antitussives"
    ],7),
    encodeMemory([
        "* tips * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  *",
        //chatgpt start
        "Ano ang dapat tandaan bago mag take ng antitussives?",
        "Ano ang mga bagay na dapat kong gawin bago mag take ng antitussives?",
        "Ano ang mga dapat kong malaman bago mag take ng antitussives?",
        //chatgpt end
    ], [
        "Inumin ang gamot na ito sa pamamagitan ng bibig na mayroon o walang pagkain na may isang buong baso ng tubig (8 onsa o 240 mililitro) o ayon sa direksyon ng iyong doktor."
    ],7),
    encodeMemory([
        "* (price|presyo|gaano kamahal|kano) * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        "* (!antitussives?|cough suppressants?|dextromethorphan |robitussin) * (price|presyo|gaano kamahal|kano) *",
        //chatgpt start
        "Magkano ang halaga ng antitussives?",
        "Ano ang presyo ng antitussives?",
        "Ilang pera ang kailangan para sa antitussives?",
        "Magkano ang kailangan mong bayaran para sa antitussives?",
        "Gaano kamahal ang antitussives?",
        "Magkano ang halagang dapat mong ipon para sa antitussives?",
        "Saan mabibili ang antitussives at magkano ito?",
        "Anong presyo ng antitussives sa mga botika?",
        "Mayroon bang mura na antitussives?",
        "Ano ang range ng presyo ng antitussives?",
        //chatgpt end
    ], [
        "Sa southstar drug store, ang halaga ng dextromethorphan syrup ay nagsisimula sa 113php. It watsons, nasa 189php. Maaaring mag-iba ito sa ibang mga parmasya"
    ],7),
    encodeMemory([
        "* uri * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  *",
        //chatgpt start
        "Ano-ano ang mga uri o anyo ng antitussives?",
        "Mayroon bang iba't ibang anyo o uri ang antitussives?",
        "Sa anong anyo o uri madalas nakukuha ang antitussives?",
        "Ano ang pinakakaraniwang anyo o uri ng antitussives na inirerekomenda ng doktor?",
        "May ibang anyo pa bang nagagamit ang antitussives maliban sa tablet at capsule?",
        "Ano ang mga pangkaraniwang anyo ng antitussives na available sa botika?",
        "Ano ang iba't ibang anyo ng antitussives at saan ito karaniwang ginagamit?",
        "Ano ang pinakamabisang anyo ng antitussives at bakit?",
        //chatgpt end
    ], [
        "Ang mga antitussive ay may maraming anyo. Maaari itong maging isang tableta, kapsula, gel, likido, syrup, lozenge o strips. Gayunpaman, maaari ko lamang irekomenda ang karaniwang dosis ng mga logenze at syrup form nito."
    ],7),
    encodeMemory([
        "* alternatibo * (!antitussives?|cough suppressants?|dextromethorphan |robitussin)  *",
        //chatgpt start
        "Ano ang ibang mga gamot na pwedeng gamitin kung hindi puwede ang antitussives?",
        "May ibang paraan ba para maibsan ang ubo kaysa sa pag-inom ng antitussives?",
        "Paano kung ayaw ko uminom ng antitussives, may ibang pwedeng gawin?",
        "Ano-ano ang mga natural na lunas para sa ubo kung ayaw mag-take ng antitussives?",
        "Saan ako pwedeng maghanap ng mga alternatibong gamot sa antitussives?",
        "Ano ang mga iba't ibang uri ng gamot na pwede kong subukan kung ayaw ko ng antitussives?",
        "May mga herbal o natural na mga gamot ba na pwede kong gamitin kaysa sa antitussives?",
        "Ano ang mga non-medicine na paraan para maibsan ang ubo?",
        "Ano ang mga alternatibong paraan para maibsan ang ubo maliban sa pag-inom ng antitussives?",
        "Paano ko malalaman kung ang alternative na gamot ay safe at epektibo?",
        //chatgpt end
    ], [
        "Ang pulot ay isang napapanahong lunas para sa namamagang lalamunan. Ayon sa isang pag-aaral, maaari din nitong mapawi ang ubo nang mas epektibo kaysa sa mga OTC na gamot na naglalaman ng dextromethorphan (DM), isang panpigil sa ubo."
    ],7),

    // lozenges
    encodeMemory([
        "* ano * generic * (lozenges?) *",
        //chatgpt start
        "Ano ang mga pangalan ng generic na lozenges?",
        "Mga pangalan ng generic na lozenges?",
        "Anong mga brand ng generic na lozenges ang mabibili sa merkado?",
        "Mga generic na gamot na pampawala ng pamamaga sa lalamunan?"
        //chatgpt end
    ], [
        "ilan sa mga generic na pangalan ng logenzes ay kinabibilangan ng dextromethorphan at benzocaine-menthol"
    ],7),
    encodeMemory([
        "* ano * branded * (lozenges?) *",
        //chatgpt start
        "Ano-ano ang mga pangalan ng branded na lozenges?",
        "Mga pangalan ng branded na lozenges, paki-lista nga.",
        "Maari bang malaman kung ano ang mga pangalan ng branded na lozenges?",
        "Magbigay ka nga ng mga pangalan ng lozenges na may brand.",
        "Branded na mga lozenges, alam mo ba ang mga pangalan?",
        "May alam ka bang mga branded na lozenges?",
        "Paki-enumerate nga ang mga pangalan ng mga lozenges na may brand.",
        "Magbigay ka ng mga pangalan ng lozenges na branded.",
        "Sino-sino ang mga manufacturer ng branded na mga lozenges?",
        "Pangalan ng mga branded na lozenges, maari bang humingi ng listahan?"
        //chatgpt end
    ], [
        "Ang Bactidol at strepsils ay ilan sa mga branded na pangalan ng logenzes na makakatulong na mapawi ang iyong lalamunan"
    ],7),
    encodeMemory([
        "* ano * dose * (lozenges?) *",
        "* paano * (kainin|gamitin|inumin) * (lozenges?) *",
        "* ano * hakbang * (lozenges?) *",
        "* paano * (lozenges?) * (gamitin|kainin|inumin) *",
        //chatgpt start
        "Ano ang tamang paraan ng paggamit ng lozenges?",
        "Paano ba dapat gamitin ang lozenges?",
        "Anong tamang dose ng lozenges?",
        "Ilang beses kailangan kumain ng lozenges sa isang araw?",
        "Kailangan bang lunukin ang lozenges o hahayaan na lang itong matunaw sa bibig?",,
        "Kailan dapat kainin ang lozenges?",
        "Gaano katagal dapat itunog ang lozenges bago lumunok?",
        //chatgpt end
    ], [
        "Hayaang matunaw ang lozenge nang dahan-dahan sa iyong bibig at lunukin ang natunaw na likido kasama ng iyong laway. Huwag nguyain o lunukin nang buo. Karaniwang ginagamit ang produktong ito tuwing 2 oras kung kinakailangan"
    ],7),
    encodeMemory([
        "* ano  * ang (lozenges?) *",
        //chatgpt start
        "Ano ang mga lozenges?",
        "Puwede bang ipaliwanag mo sa akin kung ano ang mga lozenges?",  
        "Hindi ko maintindihan, pwede mo bang i-explain kung ano ang lozenges?",  
        "Pwede mo bang maipaliwanag sa akin kung ano ang mga lozenges?", 
        "Ano ba talaga ang lozenges at paano ito ginagamit?",  
        "Nakakarinig ako ng salitang lozenges pero hindi ko alam kung ano ito. Pwede bang malaman?",  
        "Paano ba ginagamit ang lozenges at para saan ito?",  
        "May naririnig akong lozenges, pero hindi ko alam kung ano ito. Pwede mong ipaliwanag sa akin?", 
        "Gusto kong malaman kung ano ang mga lozenges. Pwede mo bang ipaliwanag sa akin?",  
        "Nakakarinig ako ng lozenges, pero hindi ko talaga alam kung ano ito. Pwede mo bang sabihin sa akin?",  
        "Paano ginagamit ang lozenges at para saan ito ginagamit? Pwede mo bang i-explain sa akin?"
        //chatgpt end
    ], [
        "Ginagamit ang produktong ito upang pansamantalang mapawi ang pananakit mula sa maliliit na problema sa bibig (tulad ng mga ulser, namamagang gilagid/lalamunan, pinsala sa bibig/gigilid)."
    ],7),
    encodeMemory([
        "* (saan|ano) * gamit * (lozenges?) *",
        //chatgpt start
        "Ano ang paggamit ng mga lozenges?",
        "Para saan ginagamit ang mga lozenges?",
        "Paano ginagamit ang mga lozenges?",
        "Ano ang layunin ng paggamit ng mga lozenges?",
        "Kailan dapat gamitin ang mga lozenges?",
        //chatgpt end
    ], [
        "Ang pag-inom ng Lozenges ay isang maginhawa, abot-kayang opsyon para sa nagpapakilalang paggamot ng talamak at talamak na pharyngitis, pangangati o pamamaga ng upper respiratory tract at pagpapagaan ng hindi kasiya-siyang sensasyon pagkatapos ng operasyon sa lalamunan."
    ],7),
    encodeMemory([
        "* paano * gana * (lozenges?) *",
        "* paano * (lozenges?)  * gana *",
        "* (bakit|paano) * lozenges? * (tulong|gamot|buti|galing) *",
        //chatgpt start
        "Ano ang epekto ng lozenges sa pagpapawala ng sakit sa lalamunan?",
        "Paano nakakatulong ang lozenges sa pangangalaga sa kalusugan ng lalamunan?",
        "Bakit nakakatulong ang lozenges sa pagtanggal ng sakit sa lalamunan?",
        "Paano gumagana ang lozenges sa pagsugpo ng ubo at sipon?",
        "Ano ang mekanismo ng lozenges sa pagpapawala ng sakit sa lalamunan?",
        "Paano nakakatulong ang lozenges sa pagbabawas ng pamamaga sa lalamunan?",
        "Ano ang mga benepisyo ng paggamit ng lozenges para sa kalusugan ng lalamunan?",
        "Paano nakakatulong ang lozenges sa pagbabawas ng pag-irita sa lalamunan?",
        //chatgpt end
    ], [
        "Kapag sumipsip ka ng lozenge, nagsisimula itong matunaw at maglalabas ng gamot. Ito ay inilaan upang matunaw nang dahan-dahan sa bibig upang pansamantalang sugpuin ang ubo, at mag-lubricate at paginhawahin ang nanggagalit na mga tisyu ng lalamunan. Ang ilan ay may mga gamot na tumutulong sa paglaban sa sipon, at karamihan ay may pampamanhid upang makatulong na mabawasan ang sakit. Naglalaman din ang mga lozenges ng menthol o eucalyptus, na makakatulong sa pagpapalamig at pagpapatahimik sa lalamunan. Ang iba ay naglalaman ng pulot, na kilala na may mga katangian ng pagsugpo sa ubo."
    ],7),
    encodeMemory([
        "* kailan * ( (huwag|hindi) * (kain|inom|gamit) | iwas ) * (lozenges?) *",
        //chatgpt start
        "Ano ang mga sitwasyon na hindi dapat uminom ng lozenges?",  
        "Kailan hindi dapat gumamit ng lozenges?",  
        "Mayroon bang mga kondisyon na hindi pinapayagan ang paggamit ng lozenges?",  
        "May mga taong hindi pwede mag-take ng lozenges?",  
        "Sa mga anong sitwasyon hindi dapat mag-take ng lozenges?",    
        "Mayroon bang mga bawal na gamot o substances na hindi dapat i-take kasabay ng lozenges?",  
        "Kailan hindi dapat gamitin ang lozenges kahit na mayroong sore throat?"
        //chatgpt end
    ], [
        "Kung mayroon kang namamagang lalamunan na malubha o tumatagal ng higit sa 2 araw, o isang ubo na tumatagal ng higit sa 7 araw o patuloy na bumabalik, o may mga sintomas na may lagnat, sakit ng ulo, pantal, pamamaga, pagduduwal, o pagsusuka, sabihin iyong doktor kaagad"
    ],7),
    encodeMemory([
        "* (side|masama) * (effect|epekto) * (lozenges?) *",
        "* hindi * maganda * epekto * (lozenges?) *",
        //chatgpt start
        "Ano ang mga negatibong epekto ng mga lozenges?",
        "Mayroon bang mga hindi magandang epekto ang pagkain ng mga lozenges?",
        "Nakakasama ba sa kalusugan ang paggamit ng mga lozenges?",
        "Mayroon bang posibleng side effects ang mga lozenges?",
        "Maaaring magdulot ng anong uri ng epekto ang pag-inom ng mga lozenges?",
        "Ano ang mga maaaring maging epekto ng paggamit ng mga lozenges?",
        "Paano makakaapekto sa katawan ang sobrang paggamit ng mga lozenges?",
        "Maaaring magdulot ba ng mga negatibong reaksyon ang mga lozenges?",
        "Ano ang mga dapat bantayan na epekto ng pagkain ng mga lozenges?",
        //chatgpt end
    ], [
        "Maaaring mangyari ang bahagyang pagkasunog, pangingilig, o pagtitig. Kung ang alinman sa mga epektong ito ay tumagal o lumala, sabihin kaagad sa iyong doktor o parmasyutiko."
    ],7),
    encodeMemory([
        "* tips * (lozenges?) *",
        //chatgpt start
        "Ano ang dapat kong malaman bago gamitin ang lozenges?",
        "Paano tamang gamitin ang mga lozenges?",
        //chatgpt end
    ], [
        "Huwag nguyain o lunukin nang buo. Ang produktong ito ay karaniwang ginagamit tuwing 2 oras kung kinakailangan."
    ],7),
    encodeMemory([
        "* (price|presyo|gaano kamahal|kano) * (lozenges?) *",
        "* (lozenges?) * (price|presyo|gaano kamahal|kano) * ",
        //chatgpt start
        "Magkano ang presyo ng mga lozenges?",
        "Magkano ang halaga ng mga lozenges?",
        "Magkano ang bayad sa mga lozenges?",
        "Ano ang presyo ng mga lozenges?",
        "Gaano kamahal ang mga lozenges?",
        "Magkano ang dapat kong iprepare na pera para sa mga lozenges?",
        "Mayroon bang murang lozenges?",
        "Saang tindahan ako makakabili ng mga lozenges at magkano ang mga ito?",
        "Meron bang mga promo o discount sa mga lozenges?",
        "Kailangan ko ba ng reseta upang makabili ng mga lozenges at magkano ang aking gastos?"
        //chatgpt end
    ], [
        "Sa rose pharmacy nagsisimula ito sa paligid ng 5php bawat piraso. Maaaring mag-iba ang presyo sa ibang mga parmasya"
    ],7),
    encodeMemory([
        "* uri * (lozenges?) *",
        //chatgpt start
        "Ano-ano ang mga klase ng mga lozenges?",
        "Mayroon bang iba't ibang uri ng mga lozenges?",
        "Ano ang mga klasipikasyon ng mga lozenges?",
        "Ano ang mga iba't ibang form ng mga lozenges?",
        "Ano ang mga variations ng mga lozenges?",
        "Ano ang mga porma ng mga lozenges?",
        "Mayroon bang mga klase-kalidad ng mga lozenges?",
        "Ano-ano ang mga available na form ng mga lozenges?",
        "Ano ang mga pagkakaiba ng mga lozenges ayon sa form?",
        "Ano ang mga uri ng mga lozenges na pwedeng gamitin?"
        //chatgpt end
    ], [
        "Ang mga form ng dosis na mabagal na natutunaw sa bibig o maaaring nguyain at madaling lunukin ay nagiging popular, lalo na para sa mga pediatric na pasyente. Ang matigas (na-compress o hinulma) na paghahanda ng form na ito ng dosis ay tinatawag na lozenges, troches, o patak. Ang malambot (molded) na lozenges o troches ay kadalasang tinatawag na pastilles, at ang chewable, gelatin-based na lozenges o troches ay kadalasang tinatawag na gummy, bagong-bagong mga produkto."
    ],7),
    encodeMemory([
        "* alternatibo * (lozenges?) *",
        //chatgpt start
        "Ano pa ang ibang paraan sa paggamot ng sakit sa lalamunan maliban sa mga lozenges?", 
        "Mayroon bang ibang gamot na maaaring gamitin kaysa sa mga lozenges?", "Ano ang mga alternatibo sa mga lozenges?",
        "Mayroon bang natural na paraan para makatulong sa sakit sa lalamunan?", 
        "Ano ang iba pang mga paraan para maibsan ang sakit sa lalamunan?", 
        "Kung ayaw ko ng lozenges, ano pa ang ibang pwedeng gamitin?", 
        "Ano ang mga natural na pamamaraan para mabawasan ang sakit sa lalamunan?", 
        "Mayroon bang herbal na gamot na pwede kong gamitin sa sakit sa lalamunan?", 
        "Kung allergic ako sa lozenges, ano ang ibang pwede kong gamitin?", 
        "Ano ang mga alternative remedies para sa sakit sa lalamunan?"
        //chatgpt end
    ], [
        "Ang pagsipsip ng tsaa na may pulot ay maaaring makatulong at mapawi ang mga kondisyon ng lalamunan."
    ],7),
]

let section12 = [
    encodeMemory([
        "* saan * gamutin * trangkaso *",
        "* saan * punta * trangkaso *",
        //chatgpt start
        "Saan pwede magpakonsulta kung may trangkaso o influenza?",  
        "Anong mga lugar ang pwede puntahan kung may trangkaso o influenza?",  
        "Mayroon bang mga klinika o ospital na pwedeng lapitan para sa trangkaso o influenza?",  
        "Alin ang pinakamalapit na lugar na pwede magpatingin kung may trangkaso o influenza?",  
        "Saang mga healthcare provider o doktor dapat magpatingin kung may trangkaso o influenza?"
        //chatgpt end
    ], [
        "Maaari mong pamahalaan ang mga sintomas sa iyong tahanan. Gayunpaman, Makipag-ugnayan kaagad sa iyong doktor kung ikaw ay nasa mas mataas na panganib ng malubhang komplikasyon ng trangkaso"
    ],5),
    encodeMemory([
        "* (ano|kailan|paano) * (influenza|trangkaso) * type A *",
        //chatgpt start
        "Ano ba ang trangkaso o influenza type A?",  
        "Ano ang pagkakaiba ng trangkaso sa influenza type A?",  
        "Saan nagmumula ang trangkaso o influenza type A?",  
        "Paano malalaman kung meron ka ng trangkaso o influenza type A?",  
        //chatgpt end
    ], [
        "Ang Type A na trangkaso o influenza A ay may kakayahang makahawa sa mga hayop, bagama't mas karaniwan sa mga tao ang dumaranas ng mga karamdamang nauugnay sa ganitong uri ng trangkaso. "
    ],1),
    encodeMemory([
        "* (ano|kailan|paano) * (influenza|trangkaso) * type B *",
        //chatgpt start
        "Ano ang kaibahan ng trangkaso o influenza type B?",
        "Sino ang mas madaling mahawahan ng trangkaso o influenza type B?",
        "Ano ang kaibahan ng trangkaso o influenza type B sa ibang uri ng influenza?",
        "Paano malalaman kung mayroon kang trangkaso o influenza type B?",
        //chatgpt end
    ], [
        "Hindi tulad ng mga virus ng type A na trangkaso, ang uri ng trangkaso B ay matatagpuan lamang sa mga tao. Ang type B na trangkaso ay maaaring magdulot ng hindi gaanong matinding reaksyon kaysa sa type A flu virus, ngunit paminsan-minsan, ang type B na trangkaso ay maaari pa ring maging lubhang nakakapinsala. Ang mga virus ng influenza type B ay hindi inuri ayon sa subtype at hindi nagiging sanhi ng mga pandemya."
    ],1),
    encodeMemory([
        "* (ano|kailan|paano) * (influenza|trangkaso) * type C *",
        //chatgpt start
        "Paano malalaman kung may trangkaso o influenza type C?", 
        "May mga kaibahan ba ang sintomas ng trangkaso o influenza type C sa ibang uri ng trangkaso?", 
        //chatgpt end
    ], [
        "Ang mga virus ng Influenza C ay matatagpuan din sa mga tao. Gayunpaman, ang mga ito ay mas banayad kaysa sa alinman sa uri A o B. Ang mga tao sa pangkalahatan ay hindi nagkakasakit nang husto mula sa mga virus ng influenza type C. Ang mga virus ng type C na trangkaso ay hindi nagdudulot ng mga epidemya."
    ],1),
    encodeMemory([
        "* (ano|paano) * iba * type A * type B * type c *",
        "* (ano|paano) * iba * type b * type c * type a *",
        "* (ano|paano) * iba * type c * type a * type b *",
        "* (ano|paano) * iba * type A * type c * type b *",
        "* (ano|paano) * iba * type b * type a * type c *",
        "* (ano|paano) * iba * type c * type B * type a *",
        //chatgpt start
        "Ano ang kaibahan ng influenza type A, B, at C?",
        "May pagkakaiba ba ang influenza type A, B, at C?",
        "Iniiba ba ng influenza type A, B, at C ang mga sintomas?",
        "Ano ang nagpapalitan sa pagitan ng influenza type A, B, at C?",
        "Mayroon bang pagkakaiba sa kalubhaan ng sakit sa pagitan ng influenza type A, B, at C?",
        "Paano nagkakaiba ang paggamot sa influenza type A, B, at C?",
        "May ibang epekto ba sa kalusugan ang pagkakaroon ng influenza type A, B, at C?",
        "Saan nakukuha ang influenza type A, B, at C?",
        "Paano maiiwasan ang pagkakaroon ng influenza type A, B, at C?",
        "Ano ang mga sintomas ng influenza type A, B, at C?",
        "Mayroon bang mas malalang sintomas sa influenza type A kaysa sa B at C?",
        "Paano malalaman kung ano ang type ng influenza na meron ka?",
        "Mayroon bang mas epektibong gamot sa influenza type A, B, at C?",
        "Ano ang mga dapat gawin kung mayroong kahit anong type ng influenza?",
        "Gaano katagal bago gumaling ang influenza type A, B, at C?"
        //chatgpt end
    ], [
        "Ang mga virus ng Type A na trangkaso o influenza A ay may kakayahang makahawa sa mga hayop, bagama't mas karaniwan sa mga tao ang dumaranas ng mga karamdamang nauugnay sa ganitong uri ng trangkaso. Maaari itong magdulot ng Epidemya. Ang Type B na trangkaso ay matatagpuan lamang sa mga tao at nagiging sanhi ng hindi gaanong matinding reaksyon kaysa sa Type A na virus. Hindi tulad ng Type A, hindi ito nagdudulot ng mga pandemya. Ang Type C ay matatagpuan din sa mga tao. Ang mga tao ay hindi masyadong nagkakasakit mula sa Type C na mga virus. Tulad ng uri B, hindi ito maaaring magdulot ng mga epidemya."
    ],1),
    // encodeMemory([
    //     "* pano * gamutin * influenza *",
    //     //chatgpt start
        
    //     //chatgpt end
    // ], [
    //     `Karaniwan, wala kang kakailanganin kundi pahinga at maraming likido upang gamutin ang trangkaso. Ngunit kung mayroon kang malubhang impeksyon o nasa mas mataas na panganib ng mga komplikasyon, ang iyong tagapagbigay ng pangangalagang pangkalusugan tulad ng doktok ay maaaring magreseta ng isang antiviral na gamot upang gamutin ang trangkaso.`
    // ],1),
]



let section13 = [
    encodeMemory([
        "* ano * problema * trangkaso *",
        "* problema * trangkaso * ano *",
        "* ano * trangkaso * problema *",
        "* bayaan * problema * trangkaso *",
        "* problema * trangkaso * bayaan *",
        "* bayaan * trangkaso * problema *",
        //chatgpt start
        "Ano ang mga posibleng epekto kapag hindi naagapan ang trangkaso o influenza?",  
        "Ano ang mga komplikasyon ng trangkaso o influenza kung hindi ito maagapan?",  
        "Paano nakakaapekto sa kalusugan ang pagpabaya sa trangkaso o influenza?",  
        "Ano ang mga banta sa kalusugan kapag hindi naibsan ang trangkaso o influenza?",  
        "May mga posibleng epekto ba sa kalusugan kapag pinabayaan ang trangkaso o influenza?",  
        "Ano ang mga delikadong sintomas na maaring lumabas kung hindi maaagapan ang trangkaso o influenza?",  
        "Ano ang mga maaring epekto sa katawan kapag hindi naagapan ang trangkaso o influenza?", 
        "Paano makakaapekto sa trabaho o buhay ang hindi pagpapagamot sa trangkaso o influenza?",  
        "Ano ang mga long-term na epekto sa kalusugan kapag hindi naagapan ang trangkaso o influenza?", 
        //chatgpt end
    ], [
        "Ang trangkaso ay maaaring maging sanhi ng mga tao na madaling kapitan ng bacterial pneumonia, bronchitis (inflamed airways), dehydration, impeksyon sa tainga, encephalitis (isang impeksyon sa utak), sepsis (isang impeksyon sa dugo), mga impeksyon sa sinus, viral pneumonia at maaaring lumala ang mga malalang kondisyong medikal."
    ],1),
]

let section14 = [
    encodeMemory([
        "* (sino|saan) * tanong * senyales * trangkaso *",
        "* senyales * trangkaso * (sino|saan) * tanong *",
        //chatgpt start
        "Sino ang pwedeng konsultahin tungkol sa trangkaso o influenza?",  
        "Mayroon bang doktor na pwedeng magbigay ng impormasyon tungkol sa trangkaso o influenza?",  
        "Saan pwede magtanong tungkol sa mga sintomas ng trangkaso o influenza?",  
        "Anong ahensya ang pwedeng magbigay ng impormasyon tungkol sa trangkaso o influenza?",  
        "Sino ang pwedeng magbigay ng payo tungkol sa kung paano maiiwasan ang trangkaso o influenza?",  
        "Saan pwede makahanap ng impormasyon tungkol sa mga gamot para sa trangkaso o influenza?",  
        "Saan pwede magtanong tungkol sa mga bakuna para sa trangkaso o influenza?",  
        "Anong mga organisasyon ang pwedeng lapitan para sa impormasyon tungkol sa trangkaso o influenza?",  
        "Saan pwede maghanap ng mga artikulo o balita tungkol sa trangkaso o influenza?",  
        "Saan pwede maghanap ng mga gabay sa kung paano magpapakonsulta tungkol sa trangkaso o influenza?"
        //chatgpt end
    ], [
        "Maaari mong tanungin ako tanungin sa mga pangunahing impormasyon. Ngunit kung kailangan mo ng mas malawak na impormasyon, subukang pumunta sa Center for Disease and Control at Department of Health. Mayroon silang mas detalyadong talakayan."
    ],1),
    encodeMemory([
        "* saan * (punta|gamutin) * senyales * trangkaso * ",
        //chatgpt start
        "May mga home remedy ba para sa sintomas ng trangkaso o influenza?",
        "Ano ang mga dapat gawin kapag mayroong sintomas ng trangkaso o influenza?",
        "Kailangan bang magpatingin sa doktor kapag mayroong sintomas ng trangkaso o influenza?",
        "Saan pwede magpatingin kung mayroong sintomas ng trangkaso o influenza?"
        //chatgpt end
    ], [
        "Maaari mong gamutin ang mga sintomas sa iyong tahanan. Gayunpaman, Makipag-ugnayan kaagad sa iyong doktor kung ikaw ay nasa mas mataas na panganib ng malubhang komplikasyon ng trangkaso."
    ],5),
    encodeMemory([
        "* Ano * senyales * trangkaso * ",
        "* Ano * (palatandaan|tanda) * trangkaso * ",
        "* pano * masabi * trangkaso *",
        //chatgpt start
        "Ano ang mga sintomas ng trangkaso o influenza?",
        "Paano malalaman kung may trangkaso o influenza?",
        "Ano ang mga palatandaan ng trangkaso o influenza?",
        "May mga senyales ba kapag may trangkaso o influenza?",
        "Paano ko malalaman kung may trangkaso o influenza ako?",
        "Ano-ano ang mga sintomas ng flu o trangkaso?",
        "Maaari bang malaman ang mga senyales ng influenza o trangkaso?",
        "Paano malalaman kung may sakit na trangkaso o influenza?",
        "Ano ang mga sintomas ng flu o trangkaso?",
        "Paano malalaman kung may trangkaso o flu?",
        "Ano-ano ang mga palatandaan ng trangkaso o flu?",
        "Ano ang mga sintomas ng trangkaso o flu?",
        "Paano ko malalaman kung may flu o trangkaso ako?",
        "Ano-ano ang mga senyales ng trangkaso o flu?",
        "Paano malalaman kung mayroong trangkaso o flu?"
        //chatgpt end
    ], [
        "Ang Center of Diseaes and Control ay nagpahiwatig na ang mga taong may trangkaso ay may ilan o lahat ng mga sumusunod na sintomas. Maaaring mayroon silang lagnat, ubo, namamagang lalamunan, sipon o baradong ilong, pananakit ng kalamnan o katawan, pananakit ng ulo, at pagkapagod (pagkapagod). Ang ilan sa iba ay maaaring magkaroon ng pagsusuka at pagtatae kahit na ito ay mas karaniwan sa mga bata at matatanda."
    ],1),
    // encodeMemory([
    //     "* sintomas_ng_trangkaso * senyales * diarrhea *",
    //     "* sintomas_ng_trangkaso * diarrhea * senyales *",
    //     //chatgpt start
        
    //     //chatgpt end
    // ], [
    //     "oo"
    // ],1),
]


let section15 = []


export const data = []
    .concat(section11)
    .concat(section12)
    .concat(section13)
    .concat(section14)
    .concat(section15)
