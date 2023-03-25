import { encodeMemory } from "@/api/configuration/model"

let section16 = [
    encodeMemory([
        "* bakit * (iwas| (hindi|huwag) * (kain|inom|gamit)) * antibiotics *",
        "* bakit * antibiotics * (iwas| (hindi|huwag) * (kain|inom|gamit)) *"
    ],[
        "Gumagana lamang ang mga antibiotic sa bacteria Ang influenza ay sanhi ng virus kaya hindi gagana ang mga antibiotic. Kaya, hindi ito makakatulong sa iyong pakiramdam na mas mabuti. Ang kailangan mo ay isang antiviral."
    ],7),
    encodeMemory([
        "* bakit * (iwas| (hindi|huwag) * (kain|inom|gamit)) * aspirin *",
        "* bakit * aspirin * (iwas| (hindi|huwag) * (kain|inom|gamit)) *"
    ],[
        "Ang pag-inom ng aspirin upang gamutin ang naturang impeksiyon ay lubos na nagpapataas ng panganib ng Reye's Syndrome na isang sakit na nagdudulot ng pinsala sa utak at atay."
    ],7),
    encodeMemory([
        "* bakit * (iwas| (hindi|huwag) * (kain|inom|gamit)) * analgesics *",
        "* bakit * analgesics * (iwas| (hindi|huwag) * (kain|inom|gamit) ) *"
    ],[
        "Okay lang na uminom ng analgesics. Ngunit huwag uminom ng higit sa isang gamot na naglalaman ng acetaminophen. Ang labis na dosis ng acetaminophen ay maaaring magdulot ng pinsala sa atay."
    ],7),
    encodeMemory([
        "* bakit * (iwas| (hindi|huwag) * (kain|inom|gamit)) * antihistamines *",
        "* bakit * antihistamines * (iwas| (hindi|huwag) * (kain|inom|gamit)) *"
    ],[
        "Ang mga antihistamine ay mga gamot na gumagamot sa allergic rhinitis, karaniwang sipon, trangkaso, at iba pang mga allergy. Gayunpaman, ang mga gamot na ito ay maaaring magpaantok sa iyo. Kung gumagawa ka ng isang bagay na nangangailangan ng pagtuon tulad ng pagmamaneho, dapat mong iwasan ang pag-inom ng gamot na ito pansamantala."
    ],7),
    encodeMemory([
        "* bakit * (iwas| (hindi|huwag) * (kain|inom|gamit)) * decongestants * ",
        "* bakit * decongestants * (iwas| (hindi|huwag) * (kain|inom|gamit)) * influenza *"
    ],[
        `Huwag gumamit ng nasal decongestant nang higit sa dalawa hanggang tatlong araw, kung hindi, ang ilong mo ay hahanap hanapin nya ito." Bukod sa pagtaas ng tibok ng puso ay isang posibleng side effect ng paggamit ng decongestant, kaya dapat na iwasan ang mga gamot na ito kung mayroon kang mataas na presyon ng dugo, sakit sa puso, o hindi regular na tibok ng puso.`
    ],7),
    encodeMemory([
        "* sino * (huwag|hindi) * (gumamit|kain|inom) * on_the_counter * drug * ",
        "* sino * (huwag|hindi)* (gumamit|kain|inom) * gamot_sa_influenza *",
        "* sino * iwas * on_the_counter_drug_gamot_sa_influenza *",
        "* sino * iwas * gamot_sa_influenza *",
        "* gamot_sa_influenza * (hindi|huwag) * (gumamit|kain|inom) * nino * ",
        "* gamot_sa_influenza * iwasan * nino *",
    ],[
        "Ayon sa Center for Disease and Control, ang mga antiviral na gamot sa trangkaso ay mga inireresetang gamot (mga tabletas, likido, isang inhaled powder, o isang intravenous solution) na lumalaban sa mga virus ng trangkaso sa iyong katawan. Ang mga antiviral na gamot ay hindi ibinebenta sa counter. Makukuha mo lamang ang mga ito kung mayroon kang reseta mula sa isang doctor. Ang mga antiviral na gamot ay iba sa mga antibiotic, na lumalaban sa mga bacterial infection. Ang mga antiviral na gamot para sa trangkaso ay gumagana lamang upang gamutin ang trangkaso. "
    ],7),
]


let section17 = []

let section18 = []

let section19 = []

let section20 = [
    encodeMemory([
        "* (ano|paano|paraan) * (gamutin|bawasan|control) * lagnat * panginginig * ",
        "* (ano|paano|paraan) * (gamutin|bawasan|control) * panginginig *",
        "* (ano|paano|paraan) * (gamutin|bawasan|control) * lagnat *",
    ],[
        `Kung ikaw ay may lagnat, maaari mong gawin ang mga sumusunod:
        Suriin ang temperatura tuwing apat (4) na oras; Maaari kang uminom ng paracetamol kung ang iyong temperatura ay umabot sa itaas ng 37.5-degree celsius, bawat apat (4) na oras. Maligo araw-araw kung maaari at kung maaari Tiyakin ang magandang bentilasyon at daloy ng hangin sa iyong silid. Huwag magsuot ng mas maraming layer ng damit. Uminom ng maraming tubig, sariwang katas ng prutas, at banayad na tsaa.        
        `
    ],2),
    encodeMemory([
        "* (ano|paano|paraan) * (gamutin|bawasan|control) * germs *",
    ],[
        `Upang ilayo ang mga mikrobyo subukang hugasan ang iyong mga kamay bago kumain, o hawakan ang iyong mga mata, ilong o bibig. Gayundin, maghugas ng kamay pagkatapos hawakan ang sinumang bumabahing, umuubo o humihip ng ilong. Huwag magbahagi ng mga bagay tulad ng mga tuwalya, kolorete, laruan, o anumang bagay na maaaring kontaminado ng mga mikrobyo sa paghinga.
        Huwag magbahagi ng pagkain, kagamitan o lalagyan ng inumin sa iba.        
        `
    ],2),
    encodeMemory([
        "* (ano|paano|paraan) * (gamutin|bawasan|control) * bara * ilong *",
    ],[
        "Narito ang maaari mong gawin kapag ikaw ay may runny o baradong ilong: Kailangan mong uminom ng maraming likido upang lumabas ang uhog na dumadaloy sa iyong sinus. Iwasan ang pag-inom ng maaaring mag-dehydrate tulad ng kape at mga inuming may alkohol. Maaari kang humigop ng mga medicated na mainit na inumin, tsaa, o sopas. Subukan din na uminom ng Vitamin C. Ang init at singaw ay maaaring makatulong sa pag-decongest ng iyong mga daanan ng hangin. Kailangan mo ring magpahinga nang husto. Maglagay ng mainit na compress. Kung wala kang compress, subukang magbasa-basa ng washcloth na may maligamgam na tubig at ilapat ito sa iyong mukha ng ilang beses sa isang araw upang maibsan ang nasal congestion. Maaari ka ring lumanghap ng singaw upang makatulong sa pagnipis ng uhog at tulungan kang maubos ang mga ito. Kung mayroon kang humidifier maaari mo ring gamitin ito. Maaari mo ring subukang gumamit ng saline nasal spray upang matulungan ang pagbukas ng mga daanan ng ilong. Nabatid din na ang pagkain ng maanghang na pagkain ay nakakatulong na mapawi ang baradong ilong. Kaya subukan ito. Panghuli, palaging gumamit ng mga tamang gamot na nabibili kung mayroon kang access sa pinakamalapit na parmasya."
    ],2),
    encodeMemory([
        "* (ano|paano|paraan) * (gamutin|bawasan|control) * nausea *",
    ],[
        `Kapag sinusubukang kontrolin ang pagduduwal:

        Uminom ng malinaw o malamig na inumin.
        Kumain ng magaan, murang pagkain (tulad ng saltine crackers o plain bread).Iwasan ang pritong, mamantika, o matatamis na pagkain.
        Kumain nang dahan-dahan at kumain ng mas maliit, mas madalas na pagkain.Huwag paghaluin ang mainit at malamig na pagkain.Uminom ng mga inumin nang dahan-dahan.Iwasan ang aktibidad pagkatapos kumain.Iwasan ang pagsipilyo ng iyong ngipin pagkatapos kumain. Pumili ng mga pagkain mula sa lahat ng mga grupo ng pagkain dahil maaari mong tiisin ang mga ito upang makakuha ng sapat na nutrisyon
        `
    ],2),
    encodeMemory([
        "* (ano|paano|paraan) * (gamutin|bawasan|control) * sakit * ulo *",
    ],[
        `Ang bawat uri ng sakit ng ulo ay may iba't ibang paraan ng paggamot na maaaring maging epektibo sa paggamot sa pananakit ng ulo. Ang pananakit ng ulo , tulad ng tension headache, ay kilala rin bilang pananakit ng ulo ng "hatband". Ito ay dahil ang sakit mula sa mga pananakit ng ulo ay matatagpuan sa likod ng ulo, mga temples at noo. Maaari silang tumagal mula sa ilang oras hanggang ilang araw. Ang ilang mga opsyon sa paggamot na epektibo para sa tension headaches ay kinabibilangan ng physical therapy, muscle relaxant at over-the-counter na pain reliever (aspirin at ibuprofen). Ang isa pang uri ng pananakit ng ulo ay migraine headache. Upang mapawi ang iyong sarili, subukang magpahinga sa isang medyo at madilim na silid, kumuha ng mainit o malamig na compress, at subukan ang mga masahe.`
    ],2),
    encodeMemory([
        "* (ano|paano|paraan) * (gamutin|bawasan|control) * abdominal * cramps *",
        "* (ano|paano|paraan) * (gamutin|bawasan|control) * sakit * (tyan|tiyan) *",
    ],[
        `Ang pananakit ng tiyan ay madalas nawawala nang walang espesyal na paggamot. Gayunpaman, mayroon pa ring mga bagay na maaari mong gawin upang maibsan ang sakit. Subukang maglagay ng mainit na bote ng tubig o pinainit na bag ng trigo sa iyong tiyan. Ibabad sa isang mainit na paliguan. Mag-ingat na huwag mapaso ang iyong sarili. Uminom ng maraming malinaw na likido tulad ng tubig. Bawasan ang iyong pag-inom ng kape, tsaa at alak dahil maaaring lumala ang sakit. Kapag pinayagang kumain muli, magsimula sa malinaw na likido, pagkatapos ay pumunta sa mga murang pagkain tulad ng crackers, kanin, saging o toast. Magpahinga ng marami.
        `
    ],2),
]

let section21 = [
    encodeMemory([
        "* (ano|paano) * (gamutin|bawasan|control) * trangkaso *"
    ],[
        `Dalawang uri ng gamot ang ginagamit upang gamutin ang trangkaso: mga gamot sa pagkontrol ng sintomas at mga gamot na antiviral. Maaari mong pamahalaan ang trangkaso sa iyong sarili. 

        Gaya ng sabi ko may mga over the counter na gamot na makakatulong sa pagpapagaan ng mga sintomas tulad ng lagnat, pananakit at ubo. Maaari kang uminom ng mga pain reliever para mabawasan ang lagnat, sakit ng ulo at pananakit ng katawan gaya ng ibuprofen at acetaminophen (paracetamol ). Maaari kang uminom ng mga decongestant upang makatulong na buksan ang iyong mga daanan ng ilong at mapawi ang presyon sa iyong mga sinus. Ang mga suppressant ng ubo tulad ng robitussin ay makakatulong sa iyo na mapawi ang tuyong ubo. Makakatulong din ang mga expectorant sa pamamagitan ng pagluwag ng makapal na uhog. Makakatulong din ang mga antihistamine sa pamamagitan ng pag-alis ng mga nakakainis na sintomas gaya ng pagbahing, pangangati, at paglabas ng ilong. Tungkol sa pangangalaga sa sarili, Kung mayroon kang virus, kailangan mong magkaroon ng sapat na pahinga. Dapat kang manatili sa bahay hanggang sa mawala ang iyong lagnat nang hindi bababa sa 24 na oras, uminom ng maraming likido, iwasan ang pagsusumikap, kumain ng masusustansyang pagkain. Gayunpaman, mas makakatulong sa iyo ang pagpapatingin sa doktor kung mas malala ang iyong pakiramdam. Maaari silang magreseta sa iyo ng partikular na gamot at direksyon.
        `
    ],2),
    encodeMemory([
        "* (ano|paano) * takpan * bahing *"
    ],[
        "Lubos na inirerekomenda na takpan mo ang iyong bibig at ilong kapag bumabahing o umuubo upang maiwasan ang pagkalat ng virus. Maaari kang bumahing o humiga sa isang tissue. Siguraduhing itapon ang mga ito nang maayos. Kung wala kang tissue, umubo o bumahing sa iyong siko at hindi sa iyong mga kamay. Pagkatapos, maghugas ng kamay o gumamit ng sanitizer."
    ],2),
    encodeMemory([
        "* (ano|paano) * (gamutin|bawasan|control) * sakit * lalamunan *"
    ],[
        "Kung mayroon kang namamagang lalamunan, narito ang maaari mong gawin. Uminom ng maraming tubig at iba pang likido upang manipis ang ating uhog o mapawi ang iyong tuyong lalamunan. Uminom ng gamot ayon sa direksyon ng iyong doktor. Isandal ang iyong ulo sa mga unan upang matulungan kang huminga at maibsan ang tuyong ubo. Ang iyong ubo ay bumababa upang paginhawahin ang iyong lalamunan. Lumayo sa anumang usok. Maaari mo ring subukang magmumog gamit ang maligamgam na tubig ngunit hindi namin inirerekomenda ang mga bata na gawin ito"
    ],2),
    encodeMemory([
        "* (ano|paano) * (gamutin|bawasan|control) * paninigas *"
    ],[
        "Para lunasan ang paninigas ng katawan maaari mong gawin ang mga sumusunod. Maaari mong gamutin ang paninigas ng kalamnan sa pamamagitan ng pahinga, masahe at paglalagay ng init at malamig na compress. Ang paglalagay ng init sa kalamnan ay maaaring makatulong sa pagluwag ng paninikip at paglalagay ng malamig sa namamagang bahagi ng iyong katawan ay maaaring mabawasan ang pamamaga."
    ],2),
]


export const data = []
    .concat(section16)
    .concat(section17)
    .concat(section18)
    .concat(section19)
    .concat(section20)
    .concat(section21)
