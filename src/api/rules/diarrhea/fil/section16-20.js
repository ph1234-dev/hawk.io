import { encodeMemory } from "@/api/configuration/model"

let section16 = [
    encodeMemory([
        `* bakit * (iwas| (hindi|huwag)  * (kain|inom|gamit))  * gamot_sa_diarrhea * `,
        //chatgpt start
        
        //chatgpt end
    ],[
        `Karaniwang hindi inirerekomenda ng mga doktor ang paggamit ng mga over-the-counter na gamot para sa mga taong may dugo sa dumi o lagnat—mga palatandaan ng impeksyon sa bakterya o mga parasito.`
    ],7),
    encodeMemory([
        `* bakit * (iwas| (hindi|huwag)  * (kain|inom|gamit))  * gamot_sa_diarrhea *`,
        `* bakit * gamot_sa_diarrhea * (iwas|(hindi|huwag)  * (kain|inom|gamit))  * `,
        //chatgpt start
        "Ano ang dahilan kung bakit hindi dapat kumain ng gamot_sa_diarrhea?",
        "Bakit hindi advisable na magtake ng gamot_sa_diarrhea?",
        "Bakit kailangan iwasan ang pagtake ng gamot_sa_diarrhea?",
        "Bakit hindi pwedeng kumain ng gamot_sa_diarrhea sa panahon ng diarrhea o patatae?",
        "Ano ang pwedeng mangyari kung kumain ng gamot_sa_diarrhea habang may diarrhea o patatae?",
        "May risk ba sa kalusugan kung magtake ng gamot_sa_diarrhea sa panahon ng diarrhea o patatae?",
        "Ano ang epekto kung kumain ng gamot_sa_diarrhea habang may diarrhea o patatae?",
        //chatgpt end
    ],[
        `Ang mga anti-diarrheal na gamot tulad ng bismuth subsalicylate at mga antimotility agent tulad ng loperamide ay dapat na iwasan ng mga taong may mataas na lagnat o madugong pagtatae dahil maaari itong magpalala ng impeksyon sa colon. Sa mga bata, dapat itong iwasan na maaari silang humantong sa mga komplikasyon ng hemolytic uremic syndrome sa mga kaso ng Shiga-toxin E. col.`
    ],7),
    // encodeMemory([
    //     `* sino * (huwag|hindi) * (gumamit|kain|inom) * on_the_counter * drug * `,
    //     `* sino * (huwag|hindi)* (gumamit|kain|inom) * * diarrhea_drugs *`,
    //     `* sino * iwas * on_the_counter_drug *`,
    //     `* sino * iwas * diarrhea_drugs *`,
    //     `* diarrhea_drugs * (hindi|huwag) * (gumamit|kain|inom) * nino * `,
    //     `* diarrhea_drugs * iwasan * nino *`,
    //     //chatgpt start
        
    //     //chatgpt end
    // ],[
    //     `Ang mga taong may madugong dumi o lagnat ay hindi dapat uminom ng mga gamot na nabibili ng walang riseta.`
    // ],7),
    encodeMemory([
        `*(paano| ano) * gamot * diarrhea *`,
        //chatgpt start
        "Ano ang mga gamot para sa diarrhea o pagtatae?", 
        "Papaano matutugunan ang diarrhea o pagtatae?", 
        "Ano ang mga natural na paraan para sa paggamot ng diarrhea o pagtatae?", 
        "Paano mapapabilis ang paggaling mula sa diarrhea o pagtatae?", 
        "Mayroon bang mga home remedy para sa diarrhea o pagtatae?", 
        "Paano maiiwasan ang dehydration habang mayroong diarrhea o pagtatae?", 
        "Ano ang mga dapat kainin o inumin kapag mayroong diarrhea o pagtatae?", 
        "Ano ang mga dapat gawin para mabilis na gumaling mula sa diarrhea o pagtatae?", 
        //chatgpt end
    ],[
        `Maaari kang gumamit ng antimotility (imodium, loperamide) upang mapabagal ang paggalaw ng pagkain, bismuth subsalicylate (pepto-bismol at kaopectate) upang balansehin ang mga likidong gumagalaw sa digestive tract, mga solusyong glucose-electrolyte upang balansehin ang asukal sa tubig, at mga asin, hemorroid cream o petroleum jelly kung masakit ang iyong pwet, Oral rehydration solutions , priobiotics at zinc supplements`
    ],1),
    // encodeMemory([
    //     `* (paano|ano) * problema * diarrhea_drugs * `,
    //     //chatgpt start
        
    //     //chatgpt end
    // ],[
    //     `Ang mga ito ay maaaring magpalala ng malubhang impeksyon sa colon. Sa mga bata, dapat itong iwasan na maaari silang humantong sa mga komplikasyon ng hemolytic uremic syndrome sa mga kaso ng Shiga-toxin E. col.`
    // ],7),
]


let section18 = [
    encodeMemory([
        `* ano * hakbang * hugas * kamay * `,
        `* pano * hugas * kamay * `,
        //chatgpt start
        "Paano maghugas ng kamay?",
        "Paano maglinis ng kamay?",
        "Paano maghugas ng kamay ng tama?",
        "Paano hugasan ang kamay nang maayos?",
        "Paano malilinis ang kamay?",
        "Paano makakapaglinis ng kamay nang mabuti?",
        "Paano dapat hugasan ang kamay?",
        "Anong tamang paraan ng paghuhugas ng kamay?",
        "Paano dapat maghugas ng kamay para sa kalusugan?",
        "Paano ba ang tamang paghugas ng kamay?"
        //chatgpt end
    ],[
        `Magsabon ng sabon nang hindi bababa sa 20 segundo. Pagkatapos maglagay ng sabon sa iyong mga kamay, kuskusin ang iyong mga kamay nang hindi bababa sa 20 segundo. Gawin mo yan hanggang matamong mong kantahin ang "Maligayang Kaarawan" nang dalawang beses. Gumamit ng hand sanitizer kapag hindi posible ang paghuhugas. Gumamit ng alcohol-based na hand sanitizer kapag walang tubig. Ilapat ang hand sanitizer gaya ng pag-hand lotion mo, siguraduhing takpan ang harap at likod ng magkabilang kamay. Gumamit ng isang produkto na naglalaman ng hindi bababa sa 60% na alkohol.`
    ],6),
]


let section20 = [
    encodeMemory([
        `* (ano|paano|paraan) * (gamutin|bawasan|control) * lagnat * panginginig * `,
        `* (ano|paano|paraan) * (gamutin|bawasan|control) * panginginig *`,
        `* (ano|paano|paraan) * (gamutin|bawasan|control) * lagnat *`,
        //chatgpt start
        "Ano ang mga paraan upang gamutin ang lagnat o panginginig?",  
        "Paano maiiwasan o malulunasan ang lagnat at panginginig?", 
        "May mga natural na paraan ba upang gamutin ang lagnat at panginginig?",  
        "Ano ang dapat gawin kapag may lagnat at panginginig?",  
        "Paano makatutulong ang pag-inom ng gamot sa paggamot ng lagnat at panginginig?",  
        "Ano ang mga dapat kainin o iwasan kapag may lagnat at panginginig?",  
        "May mga home remedy ba para sa lagnat at panginginig?",  
        "Kailan dapat pumunta sa doktor kung may lagnat at panginginig?",  
        "Paano maiiwasan ang pagkakaroon ng lagnat at panginginig?",  
        "Ano ang mga dahilan ng panginginig at lagnat at paano ito gagamutin?"
        //chatgpt end
    ],[
        `Maaari kang uminom ng maraming likido upang manatiling hydrated. Mayroong ilang over-the-counter (otc) na pain reliever na maaari mong inumin upang mabawasan ang kakulangan sa ginhawa. Halimbawa, maaari mong hilingin sa iyong parmasyutiko ang acetaminophen para sa pag-alis ng pananakit. Kapag ikaw ay may lagnat, maglagay ng mamasa-masa, maligamgam na tela sa noo. Magsuot ng komportableng tela. Kung mayroon kang panginginig, pinakamahusay na magsuot ng mga layer o makakapal na kasuotan. Pagkatapos ay magpahinga. kailangan mo ng maraming pahinga para gumaling.`
    ],2),
    encodeMemory([
        `* (ano|paano|paraan) * (gamutin|bawasan|control) *  suka *`,
        //chatgpt start
        "Ano ang dapat gawin para mapigilan ang pagsusuka?",
        "Paano maiiwasan ang pagsusuka?",
        "Mayroon bang paraan para ma-control ang pagsusuka?",
        "Paano maiiwasan na magkasusuka?",
        "Ano ang mga paraan para maibsan ang pagsusuka?",
        "Paano malulunasan ang pagsusuka?",
        "Mayroon bang gamot para sa pagsusuka?",
        "Paano mapapababa ang panganib ng pagsusuka?",
        "Ano ang mga natural na paraan para maiwasan ang pagsusuka?",
        "Paano maaaring malunasan ang pagsusuka sa pamamagitan ng pagkain o inumin?"
        //chatgpt end
    ],[
        `1.Huwag kumain o uminom ng kahit ano sa loob ng ilang oras pagkatapos ng pagsusuka.

        2. Higop ng kaunting tubig o sumipsip ng ice chips tuwing 15 minuto sa loob ng 3-4 na oras.
        
         3. Susunod, humigop ng malinaw na likido tuwing 15 minuto sa loob ng 3-4 na oras. Kasama sa mga halimbawa ang tubig, mga inuming pampalakasan, flat soda, malinaw na sabaw, gelatin, may lasa na yelo, popsicle o apple juice. Huwag uminom ng citrus juice o gatas. Dagdagan ang mga likido gaya ng pinahihintulutan.
        
        4. Kapag maaari mong tiisin ang malinaw na likido sa loob ng ilang oras nang hindi nagsusuka at kung nagugutom ka, subukang kumain ng kaunting pagkain na matatabang. Subukan ang mga pagkain tulad ng saging, kanin, applesauce, dry toast, soda crackers (ang mga pagkaing ito ay tinatawag na BRAT diet). Sa loob ng 24-48 oras pagkatapos ng huling yugto ng pagsusuka, iwasan ang mga pagkaing maaaring makairita o maaaring mahirap tunawin ang naturang alkohol, caffeine, taba/langis, maanghang na pagkain, gatas o keso.
            
         5. Kapag maaari mong tiisin ang matabang na pagkain, maaari mong ipagpatuloy ang iyong normal na diyeta.
        `
    ],2),
    encodeMemory([
        `* (ano|paano|paraan) * (gamutin|bawasan|control) *  nausea *`,
        //chatgpt start
        "Ano ang dapat gawin kung mayroong nausea?",
        "Paano maibsan ang nausea?",
        "May paraan ba para mawala ang nausea?",
        "Anong lunas ang pwedeng inumin kung mayroong nausea?",
        "Paano mapipigilan ang nausea?",
        "May mga natural na paraan ba para maalis ang nausea?",
        "Anong mga pagkain ang dapat iwasan kung mayroong nausea?",
        "May mga herbal na gamot ba para sa nausea?",
        "Paano mapapaginhawa ang pakiramdam kung mayroong nausea?",
        "Ano ang mga dapat iwasang gawin kung mayroong nausea?"
        //chatgpt end
    ],[
        `•	Uminom ng malinaw o malamig na inumin.

        • Kumain ng magaan, matabang na pagkain (tulad ng saltine crackers o plain bread).
        
        • Iwasan ang pritong, mamantika, o matatamis na pagkain.
        
        • Kumain nang dahan-dahan at kumain ng mas maliit, mas madalas na pagkain.
        
        • Huwag paghaluin ang mainit at malamig na pagkain.
        
        • Uminom ng mga inumin nang dahan-dahan.
        
        • Iwasan ang aktibidad pagkatapos kumain.
        
        • Iwasang magsipilyo ng iyong ngipin pagkatapos kumain.
        
        • Pumili ng mga pagkain mula sa lahat ng pangkat ng pagkain gaya mo  kayang tiisin sila para makakuha ng sapat na nutrisyon.
        `
    ],2),
    encodeMemory([
        `* (ano|paano|paraan) * (gamutin|bawasan|control) *  sakit * ulo *`,
        //chatgpt start
        "Paano mababawasan ang sakit ng ulo?",  
        "May paraan ba para mabawasan ang sakit ng ulo?",  
        "Ano ang magandang gawin kapag masakit ang ulo?",  
        "Paano maibsan ang sakit ng ulo?",  
        "Ano ang mga natural na paraan para mabawasan ang sakit ng ulo?",  
        "May mga gamot ba para sa sakit ng ulo?",  
        "Paano mabawasan ang migraine?",  
        //chatgpt end
    ],[
        `. Maglagay ng malamig na compress o ice pack sa lugar ng pananakit.

        2. Uminom ng mga likido. Kung ang pagduduwal ay nahihirapang uminom, subukang sumipsip ng yelo.
        
        3. Magpahinga. Protektahan ang iyong sarili mula sa maliwanag na ilaw at malakas na ingay.
        
        4. Kalmahin ang iyong damdamin sa pamamagitan ng pag-iisip ng isang mapayapang eksena.
        
        5. Masahiin ang masikip na kalamnan sa leeg, balikat, at ulo.
        
        6. Upang makapagpahinga ang mga kalamnan, magbabad sa mainit na paliguan o gumamit ng mainit na shower
        `
    ],2),
    encodeMemory([
        `* (ano|paano|paraan) * (gamutin|bawasan|control) *  abdominal * cramps *`,
        //chatgpt start
        "Paano mababawasan ang sakit ng tiyan?",
        "Ano ang mga gamot sa abdominal cramps?",
        "Anong natural na paraan para gamutin ang abdominal cramps?",
        "Paano maibsan ang sakit ng tiyan nang hindi gumagamit ng gamot?",
        "Ano ang dapat kainin o iwasan kapag may abdominal cramps?",
        "Meron bang home remedy para sa sakit ng tiyan?",
        "Ano ang pwedeng gawin para maibsan ang sakit ng tiyan habang naghihintay ng gamot?",
        //chatgpt end
    ],[
        `* Lagyan ng init. Makakatulong ito upang i-relax ang iyong mga kalamnan sa tiyan.  Ito ay partikular na nakakatulong kung ang muscle strain o labis na paggamit ay nagdudulot ng iyong mga pulikat.

        * Ang pagmamasahe sa iyong mga kalamnan sa tiyan ay maaaring makatulong upang ma-relax ang mga ito.
        
         * Kung ang iyong tiyan spasms ay sanhi ng dehydration, maaaring makatulong s aiyo ang pag inom ng electrolyte. Subukang uminom ng sports drink tulad ng  Gatorade o pagkain ng saging. Mag-iingat, gayunpaman, kung mayroon kang kasaysayan ng pagkabigo sa bato, dahil ang ilang mga electrolyte, lalo na ang potasa, ay maaaring tumaas sa mga mapanganib na antas na may mga suplemento.
        `
    ],2),
    encodeMemory([
        `* ano * (kainin|inumin|bilhin) * suka * `,
        //chatgpt start
        "Ano ang mga pwedeng pagkain kapag mayroong pagsusuka?",
        "Mayroon bang pwedeng kainin kahit may pagsusuka?", 
        "Paano makakakain ng tama kahit mayroong pagsusuka?", 
        "Ano ang mga pagkain na makakatulong kapag mayroong pagsusuka?", 
        "Ano ang dapat kainin kapag may pagsusuka?", , 
        "Ano ang mga pagkain na nakakatulong sa pagpapagaling mula sa pagsusuka?", 
        //chatgpt end
    ],[
        `subukang kumain ng maliit na dami ng matatabang pagkain. Subukan ang mga pagkain tulad ng saging, kanin, applesauce, dry toast, soda crackers (ang mga pagkaing ito ay tinatawag na BRAT diet).`
    ],2),
    encodeMemory([
        `* ano * pagkain * (iwas| (huwag|hindi) * (kainin|inumin|bilhin)) * nausea *`,
        // chatgpt start
        "Anong mga pagkain ang dapat iwasan kapag mayroong nausea?",  
        "Anong mga pagkain ang dapat pigilan kung ikaw ay nakakaramdam ng nausea?",  
        "Anong mga pagkain ang hindi dapat kainin kapag ikaw ay may nausea?",  
        "Ano ang mga pagkain na dapat iwasan kung ikaw ay mayroong nausea?",  
        "Aling mga pagkain ang dapat mong iwasan kapag ikaw ay mayroong nausea?",  
        "Anong mga pagkain ang makakapagpabuti kung ikaw ay mayroong nausea?",  
        "Alin-alin sa mga pagkain ang nakakapagdulot ng nausea at dapat iwasan?",  "Anong mga pagkain ang maaaring magpahaba ng panahon ng nausea?",  
        "Saan kailangang mag-ingat sa pagkain kapag mayroong nausea?",  
        "Anong mga tips sa pagkain ang makatutulong upang mabawasan ang nausea?"
        // chatgpt end
    ],[
        `Kumain ng magaan o matabang na pagkain (tulad ng saltine crackers o plain bread).`
    ],4),
    encodeMemory([
        `* bakit * magpakulo * `,
        //chatgpt start
        "Bakit dapat pakuluin ang tubig?",
        "Bakit kailangan magpakulo ng tubig?",
        "Ano ang dahilan kung bakit dapat magpakulo ng tubig?",
        "Bakit mahalaga ang pagpapakulo ng tubig?",
        "Para saan ba ang pagpakulo ng tubig?",
        "Bakit hindi pwedeng uminom ng tubig na hindi pinakulo?",
        "Bakit nakakabuti sa kalusugan ang pagpakulo ng tubig?",
        "Ano ang nakukuha sa pagpakulo ng tubig?",
        "Bakit hindi dapat uminom ng hindi pinakuluang tubig?",
        "Anong mga benepisyo ang makukuha sa pagpakulo ng tubig?"
        //chatgpt end
    ],[
        `Ang pagpapakulo ay ginagawa upang patayin ang mga pathogen bacteria, virus at protozoa. Ang kumukulong tubig ay dapat na kumukulo nang hindi bababa sa dalawang (2) minuto`
    ],1),
    encodeMemory([
        `* bakit * magpakulo * tubig * `,
        //chatgpt start
        "Ano ang dahilan kung bakit kailangan magpakulo ng tubig?",  
        "Bakit kailangan magpakulo ng tubig bago uminom?",  
        "Paano nakakatulong ang pagpapakulo ng tubig sa kalusugan?",  
        "Bakit kailangan pa magpakulo ng tubig kung malinis na ito?",  
        "Bakit hindi pwedeng uminom ng tubig na hindi pinakulo?",  
        "Ano ang mga benepisyo ng pagpapakulo ng tubig?",  
        "Paano makakaapekto sa kalusugan kung hindi pinakulo ang tubig?",  
        //chatgpt end
    ],[
        `* Kung ang tubig ay malabo, hayaan mo muna ito at salain sa pamamagitan ng malinis na tela, papel na kumukulong tuwalya ng tubig, o filter ng kape.
 
        * Pakuluan ang tubig nang hindi bababa sa isang minuto. Sa mga altitude na higit sa 5,000 talampakan (1,000 metro), pakuluan ang tubig sa loob ng tatlong minuto.
        
        * Hayaang lumamig ang tubig nang natural at itabi ito sa malinis na lalagyan na may mga takip.
        
        * Upang mapabuti ang patag na lasa ng pinakuluang tubig, magdagdag ng isang kurot ng asin sa bawat litro o litro ng tubig, o ibuhos ang tubig mula sa isang malinis na lalagyan patungo sa isa pa nang maraming beses.
        `
    ],1),
    encodeMemory([
        `* hakbang * disinfect *`,
        `* paano * disinfect * tubig *`,
        //chatgpt start
        "Paano mag-disinfect ang tubig?",
        "Ano ang mga hakbang sa pagdi-disinfect ng tubig?",
        "Paano mag-disinfect ng tubig?",
        "Ano ang mga dapat gawin upang ma-disinfect ang tubig?",
        "Paano maiiwasan ang pagkakaroon ng bacteria sa tubig?",
        "Ano ang mga paraan upang maiwasan ang pagkakaroon ng mikrobyo sa tubig?",
        "Ano ang tamang proseso sa pagdi-disinfect ng tubig?"
        //chatgpt end
    ],[
        `1. Maghanda ng stock solution sa pamamagitan ng pagtunaw ng 1 antas ng powdered Chlorine compound (65% hanggang 75%) sa 1 litro ng tubig.

        2. Magdagdag ng 2 kutsarita ng stock solution sa 5 galon (20 litro) ng tubig.Paghaluin nang maigi at hayaang tumayo ng hindi bababa sa 30 minuto bago gamitin.
        `
    ],1),
    encodeMemory([
        `* ano * (bilhin|gamitin) * disinfect * tubig *`,
        //chatgpt start
        "Anong mga bagay ang pwedeng bilhin o gamitin para mai-disinfect ang tubig?",  
        "Paano mai-disinfect ang tubig at ano ang mga kailangan na gamitin?",  
        "Ano ang mga gamit na pwedeng gamitin para mai-disinfect ang tubig?",  
        "Mayroon bang mga produkto sa merkado na pwedeng gamitin para mai-disinfect ang tubig?",  
        "Ano ang mga alternative na pamamaraan para mai-disinfect ang tubig?",  
        //chatgpt end
    ],[
        `Pwede kang mag lagay ng chlorine sa tubig`
    ],1),
]

let data = 
[].concat(section16)
    .concat(section18)
    .concat(section20)


export{
    data
}