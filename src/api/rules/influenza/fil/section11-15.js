import { encodeMemory } from "@/api/engine/model"


let section11 = [

    // antihistamines
    encodeMemory([
    ], [
        "Ang Citerizine ay isa sa mga sikat na generic na antihistamine"
    ]),
    encodeMemory([
        "* ano * branded * (gamot|drug) * trangkaso *"
    ], [
        "Ang Benadryl ay isa sa mga sikat na branded na antihistamine na mabibili mo"
    ]),
    encodeMemory([
        "* ano * dose * (!antihistamines?|benadryl|citerizine) *",
        "* paano * (kainin|gamittin|inumin) * (!antihistamines?|benadryl|citerizine) *",
        "* ano * hakbang * (!antihistamines?|benadryl|citerizine) *",
        "* paano * (!antihistamines?|benadryl|citerizine) * (gamitin|kainin|inumin) *",
    ], [
        "Ang mga antihistamine ay maaaring inumin kasama ng pagkain o isang baso ng tubig o gatas upang mabawasan ang pangangati ng tiyan kung kinakailangan. Para sa cetirizine, narito kung paano mo ito inumin. Ang 6 na taong gulang at mas matanda ay maaaring magkaroon ng 5 hanggang 10 miligrams isang beses sa isang araw. Ang mga 4-6 taong gulang ay maaaring uminom ng maximum na 5mg isang beses o 2.5mg dalawang beses sa isang araw. Ang mga mas bata pa rito (4 sa ibaba) ay hindi dapat uminom ng gamot na ito."
    ]),
    encodeMemory([
        "* ano * (!antihistamines?|benadryl|citerizine) *"
    ], [
        "Ang mga antihistamine ay isang klase ng mga gamot na karaniwang ginagamit upang gamutin ang mga sintomas ng allergy. Ang mga gamot na ito ay tumutulong sa paggamot sa mga kondisyon na dulot ng sobrang histamine, isang kemikal na nilikha ng immune system ng iyong katawan. Ang mga antihistamine ay kadalasang ginagamit ng mga taong may mga reaksiyong alerdyi sa pollen at iba pang mga allergens. Ginagamit din ang mga ito upang gamutin ang iba't ibang mga kondisyon tulad ng mga problema sa tiyan, sipon, pagkabalisa at higit pa."
    ]),
    encodeMemory([
        "* (saan|ano) * gamit *  (!antihistamines?|benadryl|citerizine)  *"
    ], [
        "Ang mga antihistamine ay ginagamit upang mapawi o maiwasan ang mga sintomas ng hay fever at iba pang uri ng allergy. Gumagana ang mga ito sa pamamagitan ng pagpigil sa mga epekto ng isang sangkap na tinatawag na histamine, na ginawa ng katawan. Ang histamine ay maaaring maging sanhi ng pangangati, pagbahing, sipon, at matubig na mga mata. Gayundin, sa ilang mga tao ay maaaring isara ng histamine ang mga bronchial tubes (mga daanan ng hangin ng mga baga) at nagpapahirap sa paghinga."
    ]),
    encodeMemory([
        "* paano * gana *  (!antihistamines?|benadryl|citerizine)  * ",
        "* paano * (!antihistamines?|benadryl|citerizine)  * gana *",
        "* ano * generic *  (!antihistamines?|benadryl|citerizine) * "
    ], [
        "Hinaharang ng mga antihistamine ang mga epekto ng isang substance na tinatawag na histamine sa iyong katawan."
    ]),
    encodeMemory([
        "* kailan * ( (huwag|hindi) * (kain|inom|gamit) | iwas)  * (!antihistamines?|benadryl|citerizine)   *"
    ], [
        "Karamihan sa mga tao ay maaaring ligtas na uminom ng mga antihistamine. Gayunpaman, ang mga taong buntis, nagpapasuso, bata, umiinom ng iba pang mga gamot, may pinagbabatayan na mga kondisyon tulad ng sakit sa puso, sakit sa atay, sakit sa bato o epilepsy ay maaaring kailangang maging maingat kapag umiinom nito."
    ]),
    encodeMemory([
        "* (side|masama) * (effect|epekto) * (!antihistamines?|benadryl|citerizine)    * ",
        "* hindi * maganda * epekto * (!antihistamines?|benadryl|citerizine)  *"
    ], [
        `Tulad ng lahat ng mga gamot, ang mga antihistamine ay maaaring magdulot ng mga side effect.

        Ang mga side effect ng mga antihistamine na nagpapaantok sa iyo ay maaaring kabilang ang: pagkaantok (antok) at pagbaba ng koordinasyon, bilis ng reaksyon at paghuhusga – huwag magmaneho o gumamit ng makinarya pagkatapos uminom ng mga antihistamine na ito
        tuyong bibig
        malabong paningin
        hirap umihi:
        
        Ang mga side effect ng hindi nakakaantok na antihistamine ay maaaring kabilang ang:
        sakit ng ulo
        tuyong bibig
        masama ang pakiramdam
        antok - kahit na ito ay hindi gaanong karaniwan kaysa sa mas lumang mga uri ng antihistamines
        
        `
    ]),
    encodeMemory([
        "* tips *  (!antihistamines?|benadryl|citerizine)  *"
    ], [
        `Kapag umiinom ng gamot na ito, subukang iwasan ang alak, sedatives, at tranquilizers, dahil sa mas mataas na panganib ng antok. Maaari itong maging sanhi ng depresyon ng Central nervous system. Kaya iwasan ang mga aktibidad na nangangailangan ng mental alertness. Mag-ingat kapag ang pasyente ay may kapansanan sa atay o bato. Pareho sa mga matatanda dahil mas sensitibo sila sa masamang epekto.
        `
    ]),
    encodeMemory([
        "* (price|presyo|gaano kamahal|kano) *  (!antihistamines?|benadryl|citerizine) *",
        "*  (!antihistamines?|benadryl|citerizine)  * (price|presyo|gaano kamahal|kano) *"
    ], [
        `Ang presyo ng antihistamine ay magkaiba sa bawat pharmacy. Ang citerizine na 10mg halimbawa ay tig 15 pesos kada tableta ayos sa Watson pharmacy. Ang Benadryl naman ay nagkakahalaga ng 41 pesos kada tabletas.
        `
    ]),
    encodeMemory([
        "* uri *   (!antihistamines?|benadryl|citerizine)   *"
    ], [
        `Ang mga antihistamine ay may iba't ibang anyo kabilang ang mga likido, lotion, syrup, gel, eyedrops, tablet, kapsula, cream, at suppositories`
    ]),
    encodeMemory([
        "* alternatibo *  (!antihistamines?|benadryl|citerizine)    *"
    ], [
        "Subukan mong kumain ng Ginger. Ayon sa Sinus and Allergy Wellness Center, ito ay isang natural na histamine, potent antiviral agent at isang immute booster. Ang luya ay isang ligtas at lubos na epektibong halamang gamot na nagpapaginhawa sa sistema ng pagtunaw at nagpapabuti sa sirkulasyon. Maaari kang gumawa ng ilang tsaa ng luya upang maibsan ang pagsisikip ng ilong at pananakit ng ulo. Habang humihigop ka ng iyong tsaa, langhapin ang singaw na lumalabas sa iyong tasa. Gayundin, subukang gamitin ito kasama ng iba pang mga halamang gamot, tulad ng turmeric, na isa pang malakas na natural na manggagamot."
    ]),
    // analgesics
    encodeMemory([
        "* ano * generic * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) * "
    ], [
        `Ang ilan sa mga generic na pangalan na magagamit ay paracetamol, acetaminophen, at aspirin.`
    ]),
    encodeMemory([
        "* ano * branded * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *"
    ], [
        `Ilan sa mga Branded na pangalan ng paracetamol ay Biogesic at Calpol. Tulad ng para sa aspirin mayroon ding Aspen at Anthrom`
    ]),
    encodeMemory([
        "* ano * dose * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        "* paano * (kainin|gamittin|inumin) * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        "* ano * hakbang * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  *",
        "* paano * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) * (gamitin|kainin|inumin) *",
    ], [
        `Ang analgesics ay isang umbrella term na tumutukoy sa mga gamot na kilala bilang mga pain killer. Narito ang ilan sa mga dosis na maaari mong sundin. Para sa ibuprofen an (NSAID) ang maximum na solong dosis ay 400mg. Para sa buong araw, ang 1200mg nito. Para sa naproxen (NSAID), maaari kang kumuha ng hanggang 500mg para sa solong dosis at 750mg para sa buong araw. Para sa acetaminophen (paracetamol) maaari kang uminom ng 1000mg para sa solong dosis at 4000mg para sa buong araw. Para sa aspirin, na kilala rin bilang acetylsalicylic acid, maaari kang uminom ng hanggang 1000mg na may maximum na pang-araw-araw na dosis na 3000mg para sa mga taong wala pang 65 at 200mg para sa mga taong higit sa 65 taong gulang.
        `
    ]),
    encodeMemory([
        "* ano *  (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *"
    ], [
        "Ang analgesics ay isang umbrella term na tumutukoy sa mga gamot na kilala bilang mga pain killer. Narito ang ilan sa mga dosis na maaari mong sundin. Para sa ibuprofen an (NSAID) ang maximum na solong dosis ay 400mg. Para sa buong araw, ang 1200mg nito. Para sa naproxen (NSAID), maaari kang kumuha ng hanggang 500mg para sa solong dosis at 750mg para sa buong araw. Para sa acetaminophen (paracetamol) maaari kang uminom ng 1000mg para sa solong dosis at 4000mg para sa buong araw. Para sa aspirin, na kilala rin bilang acetylsalicylic acid, maaari kang uminom ng hanggang 1000mg na may maximum na pang-araw-araw na dosis na 3000mg para sa mga taong wala pang 65 at 200mg para sa mga taong higit sa 65 taong gulang."
    ]),
    encodeMemory([
        "* (saan|ano) * gamit *  (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  *"
    ], [
        "Ang analgesics, na tinatawag ding mga painkiller, ay mga gamot na nagpapaginhawa sa iba't ibang uri ng pananakit - mula sa pananakit ng ulo hanggang sa mga pinsala sa arthritis. Binabawasan ng mga anti-inflammatory analgesics ang pamamaga, at binabago ng opioid analgesics ang paraan ng pag-unawa ng utak ng sakit."
    ]),
    encodeMemory([
        "* paano * gana * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  *",
        "* paano * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  gana *",
        "* (bakit|paano) * analgesics? * (tulong|gamot|buti|galing) *"
    ], [
        "Mayroong dalawang pangunahing grupo ng analgesics: anti-inflammatory analgesics at opioids. Gumagana ang mga anti-inflammatory na gamot sa pamamagitan ng pagbabawas ng pamamaga (pamamaga) sa lugar ng sakit. Kabilang sa mga halimbawa ang: Acetaminophen, Aspirin, at Non-steroidal na anti-inflammatory na gamot gaya ng ibuprofen at naproxen. Ang mga analgesic na Opiod sa kabilang banda ay gumagana sa pamamagitan ng pagbabago sa utak ng pang-unawa ng sakit. Ang mga halimbawa ay Fentanyl, Hydrocodone, at Methadone."
    ]),
    encodeMemory([
        "* kailan * ( (huwag|hindi) * (kain|inom|gamit) | iwas)  * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)   *"
    ], [
        "Ayon sa WebMD, hindi mo dapat inumin ang gamot na ito para sa self-treatment ng sakit nang mas mahaba kaysa sa 10 araw. Hindi mo dapat gamitin ang gamot na ito upang gamutin ang sarili ng lagnat na tumatagal ng higit sa 3 araw. Sa mga ganitong kaso, kumunsulta sa doktor dahil maaaring mas malubha ang kondisyon mo"
    ]),
    encodeMemory([
        "* (side|masama) * (effect|epekto) * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)   * ",
        "* hindi * maganda * epekto * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  *"
    ], [
        "Ang mga anti-inflammatory analgesics ay karaniwang ligtas. Ngunit maaari silang magdulot ng mga side effect at komplikasyon, kung madalas mong gamitin ang mga ito, nang masyadong mahaba o sa napakalaking dosis: Pinsala sa mga panloob na organo tulad ng atay o bato, pagtatae o paninigas ng dumi, mga problema sa puso, hypersensitivity, pagduduwal, sakit ng tiyan o puso paso, tugtog sa tainga, at ulser sa tiyan"
    ]),
    encodeMemory([
        "* tips * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)   *"
    ], [
        "Dalhin ang gamot na ito sa pamamagitan ng bibig. Uminom ng isang buong baso ng tubig (8 ounces/240 mililitro) kasama nito maliban kung iba ang sasabihin sa iyo ng iyong doktor. Huwag humiga nang hindi bababa sa 10 minuto pagkatapos mong inumin ang gamot na ito. Kung sumakit ang tiyan habang iniinom mo ang gamot na ito, maaari mo itong inumin kasama ng pagkain o gatas."
    ]),
    encodeMemory([
        "* (price|presyo|gaano kamahal|kano) * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)   *",
        "* (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)   * (price|presyo|gaano kamahal|kano) * "
    ], [
        "Ayon sa botika ng Muramed at Watsons, ang paracetamol tulad ng biogesic ay maaaring magsimula sa 4 pesos. Samantala, ang aspirin ay maaaring magsimula sa 3.50 pesos na nakalista ng watsons pharmacy. Gayunpaman, hindi mo ito mabibili nang walang reseta at maaaring mag-iba ang mga presyo depende sa kung saan mo binili ang mga ito."
    ]),
    encodeMemory([
        "* uri *  (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)   *"
    ], [
        "Magagamit ang mga analgesics sa maraming anyo gaya ng mga films, likido, mga patch ng pang-ilong, mga tabletas, mga tablet, mga kapsula, at pinaghalong powder."
    ]),
    encodeMemory([
        "* alternatibo * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)   *"
    ], [
        "Ang Philippine Institute of Traditional and Alternative Healthcare ay nagpahiwatig na maaari mong Ampalaya, Yerba Buena, ulasimang bato o pansit-pansitan, at bayabas ay may analagesic effect."
    ]),
    // nsaids
    encodeMemory([
        "* ano * generic * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * "
    ], [
        "Ang NSAID ay may mga generic na pangalan tulad ng ibuprofen, naproxen, at aspirin na kadalasang nasa counter na mga anti-inflammatory na gamot"
    ]),
    encodeMemory([
        "* ano * branded * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *"
    ], [
        "Ang Advil ay isang kilalang ibuprofen. Samantala, ang Flanax Forte ay isang kilalang brand para sa Naproxen."
    ]),
    encodeMemory([
        "* ano * dose * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  *",
        "* paano * (kainin|gamittin|inumin) * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  *",
        "* ano * hakbang * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  *",
        "* paano * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  * (gamitin|kainin|inumin) *",
    ], [
        "Narito ang ilan sa mga dosis na maaari mong sundin. Para sa ibuprofen an (NSAID) ang maximum na solong dosis ay 400mg. Para sa buong araw, ang 1200mg nito. Para sa naproxen (NSAID), maaari kang kumuha ng hanggang 500mg para sa solong dosis at 750mg para sa buong araw. Para sa aspirin, na kilala rin bilang acetylsalicylic acid, maaari kang uminom ng hanggang 1000mg na may maximum na pang-araw-araw na dosis na 3000mg para sa mga taong wala pang 65 at 200mg para sa mga taong higit sa 65 taong gulang."
    ]),
    encodeMemory([
        "* ano * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *"
    ], [
        "Ang mga non-steroidal anti-inflammatory drugs (NSAIDs) ay mga gamot na malawakang ginagamit upang mapawi ang pananakit, bawasan ang pamamaga, at magpababa ng mataas na temperature."
    ]),
    encodeMemory([
        "* (saan|ano) * gamit * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  *"
    ], [
        "Kadalasang ginagamit ang mga ito upang mapawi ang mga sintomas ng pananakit ng ulo, pananakit ng regla, sprains at strains, sipon at trangkaso, arthritis, at iba pang sanhi ng pangmatagalang pananakit."
    ]),
    encodeMemory([
        "* paano * gana * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)   * ",
        "* paano * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  * gana * ",
        "* (bakit|paano) * nsaids? * (tulong|gamot|buti|galing) *"
    ], [
        "Hinaharang ng mga NSAID ang isang partikular na enzyme na tinatawag na cyclooxygenase (o COX) na ginagamit ng katawan upang gumawa ng mga prostaglandin. Sa pamamagitan ng pagbabawas ng produksyon ng mga prostaglandin, ang mga NSAID ay nakakatulong na mapawi ang kakulangan sa ginhawa ng lagnat at mabawasan ang pamamaga at ang kaugnay na pananakit."
    ]),
    encodeMemory([
        "* kailan * ( (huwag|hindi) * (kain|inom|gamit) | iwas)  * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  *"
    ], [
        "Ang mga NSAID ay karaniwang hindi inirerekomenda para sa mga taong may sakit sa bato, pagpalya ng puso, o cirrhosis, o para sa mga taong umiinom ng diuretics. Ang ilang mga pasyente na alerdye sa aspirin ay maaaring makainom ng mga piling NSAID nang ligtas, bagama't dapat itong talakayin nang maaga sa isang tagapagbigay ng pangangalagang pangkalusugan."
    ]),
    encodeMemory([
        "* (side|masama) * (effect|epekto) * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * ",
        "* hindi * maganda * epekto * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  *"
    ], [
        "Tulad ng lahat ng mga gamot, may panganib ng mga side effect mula sa mga NSAID. Mas karaniwan ang mga ito kung umiinom ka ng mataas na dosis sa mahabang panahon, o ikaw ay matanda na o nasa mahinang pangkalahatang kalusugan. Ang mga over-the-counter na NSAID sa pangkalahatan ay may mas kaunting mga side effect kaysa sa mas malalakas na inireresetang gamot. Ang mga posibleng side effect ay kinabibilangan ng hindi pagkatunaw ng pagkain, pananakit ng tiyan, ulser sa tiyan, pananakit ng ulo, pag-aantok, pagkahilo, mga reaksiyong alerhiya, maaari rin itong magdulot ng mga problema sa iyong atay, bato o sirkulasyon ng puso, tulad ng pagpalya ng puso, atake sa puso at stroke."
    ]),
    encodeMemory([
        "* tips * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  *"
    ], [
        "Huwag ihalo ang isang NSAID sa isa pa. Halimbawa, huwag uminom ng aspirin o ibuprofen kasama ng anumang iba pang nonsteroidal anti-inflammatory na gamot."
    ]),
    encodeMemory([
        "* (price|presyo|gaano kamahal|kano) * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  *",
        "* (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  * (price|presyo|gaano kamahal|kano) * "
    ], [
        "Batay sa data mula sa watsons, ang gamot na ito ay karaniwang nagsisimula sa 8php bawat piraso."
    ]),
    encodeMemory([
        "* uri *  (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  *"
    ], [
        "Madalas, ang mga NSAIDs ay capsules, tabletas, cream, o gel"
    ]),
    encodeMemory([
        "* alternatibo * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  *"
    ], [
        `Dahil ang mga NSAID ay maaaring magdulot ng mga nakakabagabag na epekto, ang mga alternatibo ay kadalasang inirerekomenda muna.

        Ang pangunahing alternatibo para sa lunas sa pananakit ay ang paracetamol, na available sa counter at ligtas na inumin ng karamihan ng mga tao.
        `
    ]),
    // decongestants
    encodeMemory([
        "* ano * generic * (!decongestants?|pseudophedrine|sudafed) * ",
    ], [
        "Ang isang sikat na generic na pangalan ng decongestant ay pseudoephedrine phenylephrine."
    ]),
    encodeMemory([
        "* ano * branded * (!decongestants?|pseudophedrine|sudafed) *"
    ], [
        "isang halimbawa ng isang branded decongestant ay decolgen at Sudafed"
    ]),
    encodeMemory([
        "* ano * dose * (!decongestants?|pseudophedrine|sudafed) *",
        "* paano * (kainin|gamittin|inumin) * (!decongestants?|pseudophedrine|sudafed) *",
        "* ano * hakbang * (!decongestants?|pseudophedrine|sudafed) *",
        "* paano * (!decongestants?|pseudophedrine|sudafed) * (gamitin|kainin|inumin) *"
    ], [
        `Ang karaniwang dosis ay depende sa gamot na iyong iniinom. Para sa Pseudoephedrine (sudafed) gayunpaman narito ang ilan sa mga rekomendasyon. Ang karaniwang dosis ng pseudoephedrine ay 60mg tablets o bilang isang likidong naglalaman ng 30mg sa 5ml.

        Mga matatanda at bata na may edad 12 hanggang 17 taon: uminom ng isang 60mg tablet o dalawang 5ml na kutsara (10ml) ng likido hanggang 4 na beses sa isang araw.
        
        Mga batang may edad 6 hanggang 11 taon: uminom ng kalahating tableta (30mg) o isang 5ml na kutsara ng likido hanggang 4 na beses sa isang araw.
        `
    ]),
    encodeMemory([
        "* ano * (!decongestants?|pseudophedrine|sudafed) *"
    ], [
        "Ang mga decongestant ay mga gamot na nagpapaginhawa sa kasikipan sa pamamagitan ng pagbabawas ng pamamaga, pamamaga at pagbuo ng mucus sa loob ng mga daanan ng ilong o mata. Wala silang ibang epekto sa mga sintomas tulad ng runny nose o pagbahin."
    ]),
    encodeMemory([
        "* (saan|ano) * gamit *  (!decongestants?|pseudophedrine|sudafed) *"
    ], [
        "Ang mga decongestant ay mga gamot na nagpapaginhawa sa kasikipan sa pamamagitan ng pagbabawas ng sakit, pamamaga at pagbuo ng mucus sa loob ng mga daanan ng ilong o mata. Wala silang ibang epekto sa mga sintomas tulad ng runny nose o pagbahin."
    ]),
    encodeMemory([
        "* paano * gana *  (!decongestants?|pseudophedrine|sudafed) * ",
        "* paano * (!decongestants?|pseudophedrine|sudafed) * gana * ",
        "* (bakit|paano) * decongestants? * (tulong|gamot|buti|galing) *"
    ], [
        "Gumagana ang mga decongestant sa pamamagitan ng pagpapaliit ng mga daluyan ng dugo sa iyong ilong. Ang namamagang tissue sa loob ng ilong ay lumiliit, at mas madaling dumaan ang hangin."
    ]),
    encodeMemory([
        "* kailan * ( (huwag|hindi) * (kain|inom|gamit) | iwas)  * (!decongestants?|pseudophedrine|sudafed) *"
    ], [
        "Huwag uminom ng mga decongestant kung mayroon kang mataas na presyon ng dugo na hindi nakokontrol. Ang pag-inom ng mga decongestant ay maaaring tumaas ang iyong presyon ng dugo kahit na ito ay kontrolado o halos normal. Maaaring kailanganin mong maghanap ng alternatibo sa mga decongestant. Huwag magbigay ng mga decongestant sa mga batang wala pang 6 taong gulang."
    ]),
    encodeMemory([
        "* (side|masama) * (effect|epekto) * (!decongestants?|pseudophedrine|sudafed) * ",
        "* hindi * maganda * epekto * (!decongestants?|pseudophedrine|sudafed) *"
    ], [
        "Tulad ng anumang gamot, ang mga decongestant ay maaaring maging sanhi ng mga side effect. Maaari silang pansamantalang magdulot ng nerbiyos, pagkahilo, at mga problema sa pagtulog. Maaari silang maging sanhi ng palpitations ng puso (pakiramdam na parang tumatakbo ang iyong puso) o mas mataas na presyon ng dugo"
    ]),
    encodeMemory([
        "* tips * (!decongestants?|pseudophedrine|sudafed) *"
    ], [
        "Ang mga decongestant ay maaaring inumin nang pasalita upang makatulong na mapawi ang kasikipan na nakakaapekto sa ilong, sinuses, at mata o direktang i-spray sa ilong o itanim sa mata para sa mas lokal na epekto."
    ]),
    encodeMemory([
        "* (price|presyo|gaano kamahal|kano) * (!decongestants?|pseudophedrine|sudafed) *",
        "* (!decongestants?|pseudophedrine|sudafed) * (price|presyo|gaano kamahal|kano) * "
    ], [
        "Ang presyo ay nag-iiba ayon sa anyo ng gamot. Halimbawa, para sa nasal sprays ito ay nagsisimula sa 90php , para sa mga patak sa paligid ng 78 (rose pharmacy website), at mga tablet tulad ng decolgen ito ay nagsisimula sa 6php (watsons)."
    ]),
    encodeMemory([
        "* uri *  (!decongestants?|pseudophedrine|sudafed) *"
    ], [
        "Available ang mga decongestant bilang mga patak sa ilong o pang-ilong, patak sa mata, at bilang mga tablet, kapsula, at syrup."
    ]),
    encodeMemory([
        "* alternatibo * (!decongestants?|pseudophedrine|sudafed) *"
    ], [
        "Available ang mga alternatibo sa oral decongestant. Sa larangan ng droga, ang mga antihistamine tulad ng diphenhydramine (Benadryl), chlorpheniramine (Chlor-Trimeton), cetirizine (Zyrtec), at loratadine (Claritin) ay makakatulong sa baradong ilong na ligtas para sa pandinig"
    ]),
    // expectorant
    encodeMemory([
        "* ano * generic * (!expectorants?|guaifensin) * "
    ], [
        "Ang guiafenesin at potassium iodide ay mga halimbawa ng isang generic na expectorant"
    ]),
    encodeMemory([
        "* ano * branded * (!expectorants?|guaifensin)  *"
    ], [
        "ilan sa mga sikat ay ang Mucinex at Robitussin"
    ]),
    encodeMemory([
        "* ano * dose * (!expectorants?|guaifensin)  *",
        "* paano * (kainin|gamittin|inumin) * (!expectorants?|guaifensin)  *",
        "* ano * hakbang * (!expectorants?|guaifensin)  *",
        "* paano * (!expectorants?|guaifensin)  * (gamitin|kainin|inumin) *"
    ], [
        "Para sa mga regular (short-acting) oral dosage forms (capsule, oral solution, syrup, o tablets) ng guaifenesin:"
    ]),
    encodeMemory([
        "* ano * (!expectorants?|guaifensin)  *"
    ], [
        `Para sa ubo: Ang mga matatanda ay maaaring tumagal ng 200 hanggang 400 milligrams (mg) bawat apat na oras.
        Ang mga batang 6 hanggang 12 taong gulang ay maaaring tumagal ng 100 hanggang 200 mg bawat apat na oras.
        Ang mga batang 4 hanggang 6 na taong gulang ay maaaring tumagal ng 50 hanggang 100 mg bawat apat na oras.
        Ang mga bata at sanggol hanggang 4 na taong gulang ay hindi dapat uminom nito
        `
    ]),
    encodeMemory([
        "* (saan|ano) * gamit *  (!expectorants?|guaifensin) *"
    ], [
        "Ang mga expectorant ay mga sangkap na nagpapataas ng mga pagtatago ng daanan ng hangin. Ginagawa nila ito sa pamamagitan ng pagtaas ng tubig na nilalaman ng mga secretions na nagpapababa ng kanilang lagkit, na ginagawang mas madaling maubo"
    ]),
    encodeMemory([
        "* paano * gana * (!expectorants?|guaifensin)  * ",
        "* paano * (!expectorants?|guaifensin)  * gana * ",
        "* (bakit|paano) * expectorants? * (tulong|gamot|buti|galing) *"
    ], [
        "Ang mga expectorant ay nagpapadulas sa iyong daanan ng hangin. Nakakatulong ito na lumuwag ang uhog at gawing mas manipis ang mga pagtatago sa iyong daanan ng hangin. Sa pamamagitan ng pagluwag ng uhog, ginagawang mas produktibo ng mga expectorant ang iyong ubo. Ginagawa nitong mas madali para sa iyo na mabisang umubo ng uhog at malinis ang iyong lalamunan."
    ]),
    encodeMemory([
        "* kailan * ( (huwag|hindi) * (kain|inom|gamit) | iwas)  * (!expectorants?|guaifensin) *"
    ], [
        `
        Dapat kang makipag-usap sa iyong tagapagbigay ng pangangalagang pangkalusugan bago gumamit ng expectorant kung ikaw ay buntis o nagpapasuso. Kung mayroon kang anumang uri ng reaksiyong alerdyi o hindi pagpaparaan sa mga expectorant sa nakaraan, hindi mo dapat gamitin ang mga gamot na ito.

        Mag-ingat kapag nagmamaneho o gumagamit ng makinarya habang umiinom ng expectorant, dahil ang mga gamot na ito ay maaaring magdulot sa iyo ng antok o pagkahilo.

        `
    ]),
    encodeMemory([
        "* (side|masama) * (effect|epekto) * (!expectorants?|guaifensin) * ",
        "* hindi * maganda * epekto *  (!expectorants?|guaifensin)  *"
    ], [
        "Ang mga expectorant ay hindi karaniwang nagdudulot ng malubhang epekto. Ang pinakakaraniwang epekto ay ang pagkahilo, pag-aantok, at pantal."
    ]),
    encodeMemory([
        "* tips * (!expectorants?|guaifensin)  *"
    ], [
        "Huwag durugin ang mga tabletas, at siguraduhing sukatin ang mga likidong formulasyon gamit ang mga panukat na tool na ibinigay kasama ng iyong gamot.3 Kadalasang inirerekomenda na uminom ka ng maraming likido kapag umiinom ng expectorant."
    ]),
    encodeMemory([
        "* (price|presyo|gaano kamahal|kano) * (!expectorants?|guaifensin) *",
        "* (!expectorants?|guaifensin) * (price|presyo|gaano kamahal|kano) * "
    ], [
        "Sa watsons, ang robitussin guaifenesin price ay nagsisimula sa 92php."
    ]),
    encodeMemory([
        "* uri *  (!expectorants?|guaifensin)  *"
    ], [
        "Sa pangkalahatan, available ang mga expectorant na over-the-counter (OTC) sa mga form na likido, tableta, at tablet."
    ]),
    encodeMemory([
        "* alternatibo * (!expectorants?|guaifensin)  *"
    ], [
        "Ang mga natural na expectorant ay isa pang opsyon kung sinusubukan mong paluwagin ang uhog at mapawi ang pagsikip ng dibdib. Kasama sa mga natural na expectorant ang:Menthol, Ivyleaf extract , oral hydration (pag-inom ng maraming tubig), steaming (paglanghap ng mainit na basang hangin), at honey (pagdaragdag ng pulot sa mga inumin)"
    ]),

    // antitussives
    encodeMemory([
        "* ano * generic * (!antitussives?|cough suppressants?|dextromenthorpan|robitussin)  * "
    ], [
        "Ang Dexthomethorphan at diphenhydramine ay mga generic antitussive"
    ]),
    encodeMemory([
        "* ano * branded * (!antitussives?|cough suppressants?|dextromenthorpan|robitussin)  *"
    ], [
        "Ang Robitussin ay isa sa mga ito"
    ]),
    encodeMemory([
        "* ano * dose * (!antitussives?|cough suppressants?|dextromenthorpan|robitussin)  *",
        "* paano * (kainin|gamittin|inumin) * (!antitussives?|cough suppressants?|dextromenthorpan|robitussin)  *",
        "* ano * hakbang * (!antitussives?|cough suppressants?|dextromenthorpan|robitussin)  *",
        "* paano * (!antitussives?|cough suppressants?|dextromenthorpan|robitussin)  *"
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
    ]),
    encodeMemory([
        "* ano * (!antitussives?|cough suppressants?|dextromenthorpan|robitussin)  *"
    ], [
        "Ang mga antitussive ay mga reseta o over-the-counter na gamot na ginagamit para sa pagsugpo sa ubo."
    ]),
    encodeMemory([
        "* (saan|ano) * gamit * (!antitussives?|cough suppressants?|dextromenthorpan|robitussin)  *"
    ], [
        "Karaniwang ginagamit ang mga ito upang gamutin ang tuyong ubo na dulot ng mga allergy, sakit sa paghinga, o impeksyon. Maaari ding gamutin ng mga antitussive ang post-viral na ubo, o isang patuloy na ubo na nabubuo pagkatapos malutas ang isang impeksiyon"
    ]),
    encodeMemory([
        "* paano * gana *  (!antitussives?|cough suppressants?|dextromenthorpan|robitussin)  * ",
        "* paano * (!antitussives?|cough suppressants?|dextromenthorpan|robitussin)  * gana * ",
        "* (bakit|paano) * antitussives? * (tulong|gamot|buti|galing) *"
    ], [
        "Ang mga antitussive ay naisip na gumagana sa pamamagitan ng pagpigil sa isang coordinating region para sa pag-ubo na matatagpuan sa stem ng utak, na nakakagambala sa cough reflex arc; bagaman ang eksaktong mekanismo ng pagkilos ay hindi alam"
    ]),
    encodeMemory([
        "* kailan * ( (huwag|hindi) * (kain|inom|gamit) | iwas)  * (!antitussives?|cough suppressants?|dextromenthorpan|robitussin)  *"
    ], [
        "Ang gamot na ito ay hindi ligtas para sa mga batang wala pang 4 taong gulang."
    ]),
    encodeMemory([
        "* (side|masama) * (effect|epekto) * (!antitussives?|cough suppressants?|dextromenthorpan|robitussin)  * ",
        "* hindi * maganda * epekto * (!antitussives?|cough suppressants?|dextromenthorpan|robitussin) *"
    ], [
        "Ang pinakakaraniwang epekto ay kinabibilangan ng pagduduwal at pag-aantok. Ang ilang mga pasyente ay maaaring makaranas ng pantal o kahirapan sa paghinga. Ang mataas na dosis ay maaaring magdulot ng mga guni-guni at pagkakahiwalay, at ang gamot ay naiulat na ginagamit bilang isang panlibang na gamot"
    ]),
    encodeMemory([
        "* tips * (!antitussives?|cough suppressants?|dextromenthorpan|robitussin)  *"
    ], [
        "Inumin ang gamot na ito sa pamamagitan ng bibig na mayroon o walang pagkain na may isang buong baso ng tubig (8 onsa o 240 mililitro) o ayon sa direksyon ng iyong doktor."
    ]),
    encodeMemory([
        "* (price|presyo|gaano kamahal|kano) * (!antitussives?|cough suppressants?|dextromenthorpan|robitussin) *",
        "* (!antitussives?|cough suppressants?|dextromenthorpan|robitussin)  * (price|presyo|gaano kamahal|kano) * "
    ], [
        "Sa southstar drug store, ang halaga ng dextromethorphan syrup ay nagsisimula sa 113php. It watsons, nasa 189php. Maaaring mag-iba ito sa ibang mga parmasya"
    ]),
    encodeMemory([
        "* uri *  (!antitussives?|cough suppressants?|dextromenthorpan|robitussin)  *"
    ], [
        "Ang mga antitussive ay may maraming anyo. Maaari itong maging isang tableta, kapsula, gel, likido, syrup, lozenge o strips. Gayunpaman, maaari ko lamang irekomenda ang karaniwang dosis ng mga logenze at syrup form nito."
    ]),
    encodeMemory([
        "* alternatibo * (!antitussives?|cough suppressants?|dextromenthorpan|robitussin)  *"
    ], [
        "Ang pulot ay isang napapanahong lunas para sa namamagang lalamunan. Ayon sa isang pag-aaral, maaari din nitong mapawi ang ubo nang mas epektibo kaysa sa mga OTC na gamot na naglalaman ng dextromethorphan (DM), isang panpigil sa ubo."
    ]),

    // lozenges
    encodeMemory([
        "* ano * generic * (lozenges?) * "
    ], [
        "ilan sa mga generic na pangalan ng logenzes ay kinabibilangan ng dextromethorphan at benzocaine-menthol"
    ]),
    encodeMemory([
        "* ano * branded * (lozenges?) *"
    ], [
        "Ang Bactidol at strepsils ay ilan sa mga branded na pangalan ng logenzes na makakatulong na mapawi ang iyong lalamunan"
    ]),
    encodeMemory([
        "* ano * dose * (lozenges?) *",
        "* paano * (kainin|gamittin|inumin) * (lozenges?)  *",
        "* ano * hakbang * (lozenges?) *",
        "* paano * (lozenges?) * (gamitin|kainin|inumin) *"
    ], [
        "Hayaang matunaw ang lozenge nang dahan-dahan sa iyong bibig at lunukin ang natunaw na likido kasama ng iyong laway. Huwag nguyain o lunukin nang buo. Karaniwang ginagamit ang produktong ito tuwing 2 oras kung kinakailangan"
    ]),
    encodeMemory([
        "* ano * (lozenges?) *"
    ], [
        "Ginagamit ang produktong ito upang pansamantalang mapawi ang pananakit mula sa maliliit na problema sa bibig (tulad ng mga ulser, namamagang gilagid/lalamunan, pinsala sa bibig/gigilid)."
    ]),
    encodeMemory([
        "* (saan|ano) * gamit *  (lozenges?) *"
    ], [
        "Ang pag-inom ng Lozenges ay isang maginhawa, abot-kayang opsyon para sa nagpapakilalang paggamot ng talamak at talamak na pharyngitis, pangangati o pamamaga ng upper respiratory tract at pagpapagaan ng hindi kasiya-siyang sensasyon pagkatapos ng operasyon sa lalamunan."
    ]),
    encodeMemory([
        "* paano * gana * (lozenges?) * ",
        "* paano * (lozenges?)  * gana * ",
        "* (bakit|paano) * lozenges? * (tulong|gamot|buti|galing) *"
    ], [
        "Kapag sumipsip ka ng lozenge, nagsisimula itong matunaw at maglalabas ng gamot. Ito ay inilaan upang matunaw nang dahan-dahan sa bibig upang pansamantalang sugpuin ang ubo, at mag-lubricate at paginhawahin ang nanggagalit na mga tisyu ng lalamunan. Ang ilan ay may mga gamot na tumutulong sa paglaban sa sipon, at karamihan ay may pampamanhid upang makatulong na mabawasan ang sakit. Naglalaman din ang mga lozenges ng menthol o eucalyptus, na makakatulong sa pagpapalamig at pagpapatahimik sa lalamunan. Ang iba ay naglalaman ng pulot, na kilala na may mga katangian ng pagsugpo sa ubo."
    ]),
    encodeMemory([
        "* kailan * ( (huwag|hindi) * (kain|inom|gamit) | iwas)  * (lozenges?)  *"
    ], [
        "Kung mayroon kang namamagang lalamunan na malubha o tumatagal ng higit sa 2 araw, o isang ubo na tumatagal ng higit sa 7 araw o patuloy na bumabalik, o may mga sintomas na may lagnat, sakit ng ulo, pantal, pamamaga, pagduduwal, o pagsusuka, sabihin iyong doktor kaagad"
    ]),
    encodeMemory([
        "* (side|masama) * (effect|epekto) * (lozenges?) * ",
        "* hindi * maganda * epekto * (lozenges?) *"
    ], [
        "Maaaring mangyari ang bahagyang pagkasunog, pangingilig, o pagtitig. Kung ang alinman sa mga epektong ito ay tumagal o lumala, sabihin kaagad sa iyong doktor o parmasyutiko."
    ]),
    encodeMemory([
        "* tips * (lozenges?) *"
    ], [
        "Huwag nguyain o lunukin nang buo. Ang produktong ito ay karaniwang ginagamit tuwing 2 oras kung kinakailangan."
    ]),
    encodeMemory([
        "* (price|presyo|gaano kamahal|kano) * (lozenges?)  *",
        "* (lozenges?)  * (price|presyo|gaano kamahal|kano) * "
    ], [
        "Sa rose pharmacy nagsisimula ito sa paligid ng 5php bawat piraso. Maaaring mag-iba ang presyo sa ibang mga parmasya"
    ]),
    encodeMemory([
        "* uri * (lozenges?)  *"
    ], [
        "Ang mga form ng dosis na mabagal na natutunaw sa bibig o maaaring nguyain at madaling lunukin ay nagiging popular, lalo na para sa mga pediatric na pasyente. Ang matigas (na-compress o hinulma) na paghahanda ng form na ito ng dosis ay tinatawag na lozenges, troches, o patak. Ang malambot (molded) na lozenges o troches ay kadalasang tinatawag na pastilles, at ang chewable, gelatin-based na lozenges o troches ay kadalasang tinatawag na gummy, bagong-bagong mga produkto."
    ]),
    encodeMemory([
        "* alternatibo * (lozenges?) *"
    ], [
        "Ang pagsipsip ng tsaa na may pulot ay maaaring makatulong at mapawi ang mga kondisyon ng lalamunan."
    ]),
]

let section12 = [
    encodeMemory([
        "* saan * gamutin * trangkaso * ",
        "* saan * punta * trangkaso *"
    ], [
        "Maaari mong pamahalaan ang mga sintomas sa iyong tahanan. Gayunpaman, Makipag-ugnayan kaagad sa iyong doktor kung ikaw ay nasa mas mataas na panganib ng malubhang komplikasyon ng trangkaso"
    ]),
    encodeMemory([
        "* (ano|kailan|paano) * (influenza|trangkaso) * type A *  ",
    ], [
        "Ang Type A na trangkaso o influenza A ay may kakayahang makahawa sa mga hayop, bagama't mas karaniwan sa mga tao ang dumaranas ng mga karamdamang nauugnay sa ganitong uri ng trangkaso. "
    ]),
    encodeMemory([
        "* (ano|kailan|paano) * (influenza|trangkaso) * type B *  "
    ], [
        "Hindi tulad ng mga virus ng type A na trangkaso, ang uri ng trangkaso B ay matatagpuan lamang sa mga tao. Ang type B na trangkaso ay maaaring magdulot ng hindi gaanong matinding reaksyon kaysa sa type A flu virus, ngunit paminsan-minsan, ang type B na trangkaso ay maaari pa ring maging lubhang nakakapinsala. Ang mga virus ng influenza type B ay hindi inuri ayon sa subtype at hindi nagiging sanhi ng mga pandemya."
    ]),
    encodeMemory([
        "* (ano|kailan|paano) * (influenza|trangkaso) * type C *  "
    ], [
        "Ang mga virus ng Influenza C ay matatagpuan din sa mga tao. Gayunpaman, ang mga ito ay mas banayad kaysa sa alinman sa uri A o B. Ang mga tao sa pangkalahatan ay hindi nagkakasakit nang husto mula sa mga virus ng influenza type C. Ang mga virus ng type C na trangkaso ay hindi nagdudulot ng mga epidemya."
    ]),
    encodeMemory([
        "* ( ano|paano) * iba * type A * type B * type c *",
        "* ( ano|paano) * iba * type b * type c * type a * ",
        "* ( ano|paano) * iba * type c * type a * type b *",
        "* ( ano|paano) * iba * type A * type c * type b * ",
        "* ( ano|paano) * iba * type b * type a * type c * ",
        "* ( ano|paano) * iba * type c * type B * type a *"
    ], [
        "Ang mga virus ng Type A na trangkaso o influenza A ay may kakayahang makahawa sa mga hayop, bagama't mas karaniwan sa mga tao ang dumaranas ng mga karamdamang nauugnay sa ganitong uri ng trangkaso. Maaari itong magdulot ng Epidemya. Ang Type B na trangkaso ay matatagpuan lamang sa mga tao at nagiging sanhi ng hindi gaanong matinding reaksyon kaysa sa Type A na virus. Hindi tulad ng Type A, hindi ito nagdudulot ng mga pandemya. Ang Type C ay matatagpuan din sa mga tao. Ang mga tao ay hindi masyadong nagkakasakit mula sa Type C na mga virus. Tulad ng uri B, hindi ito maaaring magdulot ng mga epidemya."
    ]),
    encodeMemory([
        "* pano * gamutin * influenza * "
    ], [
        `Karaniwan, wala kang kakailanganin kundi pahinga at maraming likido upang gamutin ang trangkaso. Ngunit kung mayroon kang malubhang impeksyon o nasa mas mataas na panganib ng mga komplikasyon, ang iyong tagapagbigay ng pangangalagang pangkalusugan tulad ng doktok ay maaaring magreseta ng isang antiviral na gamot upang gamutin ang trangkaso.`
    ]),
]



let section13 = [
    encodeMemory([
        "* ano * problema * trangkaso * ",
        "* problema * trangkaso * ano * ",
        "* ano * trangkaso * problema *",
        "* bayaan * problema * trangkaso * ",
        "* problema * trangkaso * bayaan * ",
        "* bayaan * trangkaso * problema *"
    ], [
        "Ang trangkaso ay maaaring maging sanhi ng mga tao na madaling kapitan ng bacterial pneumonia, bronchitis (inflamed airways), dehydration, impeksyon sa tainga, encephalitis (isang impeksyon sa utak), sepsis (isang impeksyon sa dugo), mga impeksyon sa sinus, viral pneumonia at maaaring lumala ang mga malalang kondisyong medikal."
    ]),
]

let section14 = [
    encodeMemory([
        "* (sino|saan) * tanong * senyales * trangkaso *",
        "* senyales * trangkaso * (sino|saan) * tanong *"
    ], [
        "Maaari mong tanungin ako tanungin sa mga pangunahing impormasyon. Ngunit kung kailangan mo ng mas malawak na impormasyon, subukang pumunta sa Center for Disease and Control at Department of Health. Mayroon silang mas detalyadong talakayan."
    ]),
    encodeMemory([
        "* saan * (punta|gamutin) * senyales * trangkaso * "
    ], [
        "Maaari mong gamutin ang mga sintomas sa iyong tahanan. Gayunpaman, Makipag-ugnayan kaagad sa iyong doktor kung ikaw ay nasa mas mataas na panganib ng malubhang komplikasyon ng trangkaso."
    ]),
    encodeMemory([
        "* Ano * senyales * trangkaso * ",
        "* Ano * (palatandaan|tanda) * trangkaso * ",
        "* pano * masabi * trangkaso *"
    ], [
        "Ang Center of Diseaes and Control ay nagpahiwatig na ang mga taong may trangkaso ay may ilan o lahat ng mga sumusunod na sintomas. Maaaring mayroon silang lagnat, ubo, namamagang lalamunan, sipon o baradong ilong, pananakit ng kalamnan o katawan, pananakit ng ulo, at pagkapagod (pagkapagod). Ang ilan sa iba ay maaaring magkaroon ng pagsusuka at pagtatae kahit na ito ay mas karaniwan sa mga bata at matatanda."
    ]),
    encodeMemory([
        "* sintomas_ng_trangkaso * senyales * diarrhea * ",
        "* sintomas_ng_ trangkaso * diarrhea * senyales *"
    ], [
        "oo"
    ]),
]


let section15 = [
    encodeMemory([
        ""
    ], [
        ""
    ]),
]


export const data = []
    .concat(section11)
    .concat(section12)
    .concat(section13)
    .concat(section14)
    .concat(section15)
