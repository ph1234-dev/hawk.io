import {Blackbox,WildcardBlackbox} from '@/api/config/blackbox'
import {DICTIONARY} from '@/api/config/dictionary'
import {testCaseForDiarrhea, testCaseForInfluenza } from '@/api/tests/v2/cases'
import { VOCABULARY } from './config/archive'

import { eng as genericEngRules } from './rules/generic/eng'
import { fil as genericFilRules } from './rules/generic/fil'
import { mag as genericMagRules } from './rules/generic/mag'

import {DOMAIN_ENTITIES} from '@/api/rules/priority-words'

import {
    diarrheaEngRules,
    diarrheaFilRules,
    diarrheaMagRules
} from './rules/diarrhea/rules-diarrhea'
import {
    influenzaEngRules,
    influenzaFilRules,
    influenzaMagRules
} from './rules/influenza/rules-influenza'

import LanguageClassifier from '@/api/classifier/language-classifier'
import DomainClassifier from '@/api/classifier/domain-classifier'
import { 
    overlapCoefficient,
    tanimotoCoefficient,
    stringEditDistance,
    cosineSimilarity,
    sorensenDiceCoefficient,
    damerauLevenshteinDistance ,
    countMatchingWords
} from '@/api/config/metrics'

import { COMMON_MISPELLED_WORDS } from '@/api/rules/reserved-words'


export default class Engine {

    constructor() {
        

        // this.RULES = {
        //     ENG: [].concat(diarrheaEngRules,influenzaEngRules,genericEngRules),
        //     FIL: [].concat(diarrheaFilRules,influenzaFilRules,genericFilRules),
        //     MAG: [].concat(diarrheaMagRules,influenzaMagRules,genericMagRules)
        // }

        // this.RULES = {
        //     ENG: [].concat(genericEngRules),
        //     FIL: [].concat(genericFilRules),
        //     MAG: [].concat(genericMagRules)
        // }

        this.RULES = {
            ENG: [].concat(genericEngRules),
            FIL: [].concat(genericFilRules),
            MAG: [].concat(genericMagRules)
        }


        this.vocabulary = {
            'diarrhea': [],
            'influenza': [],
            'priority': []
        }

        this.RULES_DIMENSION_CLASSIFIERS = {
            ENG: new DomainClassifier(),
            FIL: new DomainClassifier(),
            MAG: new DomainClassifier(),
        }

        this.RULES_WILDCARDS = {}
        // console.log(JSON.stringify(this.RULES["ENG"]))
        this.LANG = {
            ENG: 'eng',
            FIL: 'fil',
            MAG: 'mag'
        }

        // refer here
        // https://selfcarejournal.com/article/the-self-care-matrix-a-unifying-framework-for-self-care/
        // seven pillars    
        this.SELFCARE_DIMENSIONS = {
            // 1 - knowledge and health literacy
            1: "Knowledge and health literacy",
            2: "Mental welbeing, self-awarenss and Agency",
            3: "Physical Activity",
            4: "Healthy Eating",
            5: "Risk Avoidance",
            6: "Good Hygeine",
            7: "Rational Use of Product and services"
        }
        
        this.buildLanguageClassifier()
        this.buildDomainClassifier()
        // this.checkSubstitutionsForErrors()  
        
        this.buildWildcardBlackbox()
        // INSTRUCTION:: USE TO GET THE PRIORITY TERMS
        // this.buildSymmetricDifference()


        // set this to TRUE To show debug message
        // this is default for local tests
        // this.debug = false
        this.debug = true

        this.REPLY_THRESHOLD = .3
        this.MAX_TOTAL_WORDS_OUTSIDE_DICTIONARY = 2

        // this.getReply("ano ang pwede mangyari sa tao pag mapabayaan nito ang sakit nyang trangkaso")

        // this.executeTestCasesWithError()
        // print dictionary terms
        // this.showDictionaryTerms()

        // this.executeTestCasesWithErrorDataSet10()
        // console.log(this.printWildCards('MAG'))
        // console.log(this.printWildCards('FIL'))
        // console.log(this.printWildCards('ENG'))
    }
    

    removeRedundantSpaces(str){
        str = str.replace(/\s+/g,' ')
        str =  str.replace(
            /(^\s+|\s+$)|\s+/g, 
            function (match, leadingTrailing, duplicate) {
                if (leadingTrailing) {
                    return '';
                } else if (duplicate) {
                    return ' ';
                }
            }
        );

        return str
    }
    printWildCards(lang){
        console.log(`Lang selected:: ${lang}`)
        let forwardIndex = this.RULES_WILDCARDS[lang]
        console.log(forwardIndex)
    }
    checkSubstitutionsForErrors(){
        
        let subTests = ["kapailay","kapailay","kapangilay","congestion","tamis","sweet","wata"]
        subTests = ["tamis","sweet","wata"]
        subTests = ["can","anyone","help","me","treat","my","diarrhea"]
        // test the last word
       subTests = ["infants"]
       subTests = ["cetirizine"]
        subTests.forEach(s=>{
            DICTIONARY.testSubstitutions(s)
        })
        
    }

    executeTestCasesWithErrorDataSet10(){
        // test for regular cosine similarity
        
        let list = []

        
        //NOTE:: THOSE THAT IN DOUBLE DOUBLE QOUTES ARE ERRORS
        //THAT MUST BE FIXED
        let list2863_3247 = [

            "preventing diarrhea is easy? how?",
            "show me the foods that are okay to eat when feeling diarrhea",
            "can i take bismuth to treat my diarrhea",
            "how much imodium should i take?",
            "how about you tell me the alternative to antimotility",
            "when can my diarrhea be dangerous",
            
            
            "how is diarrhea going to be a concern",
            // "im not so sure about the signs of diarrhea",
            "whats the best way to wash hands",
            "allow me to ask how should i clean my hands",
            // "my friend is vomiting, what to do",
            // "my stomach is not feeling well help",
            "ang pagkain ba ay pwedeng mag trigger ng diarrhea?",
            // "kailan nga ang virus nagdudulot ng pagtatae",
            // "nakakahawa ba ang pagtatae",
            // "ang masusunstansyang pagkain ba ay pwedeng makapagpapabuti sayo pag ikaw ay nagtatae",
            "aling mga gamot ba ang pwede kong inumin kapag ako ay nag tatae",
            "saaan ba ako pwedeng mag konsulta pag ako ay nagtatae",
            // "pwede bang magka problema ang tao pag dagkaka diarrhea",
            // "ano nga ba ang gamit ng antimotility",
            "bakit ba nakaktulong ang probiotics para gumaling sa pagtatae",
           
            "paano ba nagpapagaling ang antimotility",
            // "magkano ba ang halaga ng loperamide",
            // "paano ba dapat hugasan ang kamay",
            "eduken na to ka amayka di ka ged pakakakan na edtagudo ka",
            "ngento ka amay ka nakakwa ka sa virus na aw na to na edtagudo ka",
            "su petroleum jelly besen na to na mapya amayka pedtagudo? panon i to ba",
            // "labit ka kon sa laki panon i kakagas besen sa lima",
            "mana so pegkayaw ako , panon i kaawa na nya ba",
            "panon i kaaawa na mayaw na taw",
            "pegkayaw ako, panon i kagamot sa nya ba",
            "is it possible to get influenza",
            "what maight be the cause of influenza",
            "try to tell me how should i treat my underlying influenza",
            // "can i treat my influenza alone",
            // "i wanted to treat my influenza at home",
            "where is it possible to treat influenza",
            // "temm my how is not touching eyes or mouth helpful",
            // "how is proper way of taking citerizine",
            "are there any other medications aside from citerizine",
            "what's influneza type a",


            "tell me about the influenza",
            "why antibiotics in not recommended when having influenza",
            "should i avoid antibiotics when having influena",
            "is asprin bad for influenza",
            "i think im having a fever, how can i reduce it",
            "i feel that i am having fever",
            "help me treat my abdominal cramps",
        ]

        // i think we need to make terms that are not associated with priority terms like influenza, diarrhea
        // into zero...
        
        let list3250_3362 = [
            // "paano ba ang nagpapagaling ang immodium",
            // "paano nakakagaling ang expectorants",
            // "ano ang mga uri ng citerizine, sabihin mo nga sakin",
            // "sabihin mo nga ano ang type a influenza",
            // "ano ba ang gamot sa influenza type a",
            // "nagbabara ang ilong ko, ano pwede kong gawin",
            // "barado ang aking ilong",
            // "paano mag huhugas ng kamay",
            // "paano ba gamutin ang trangkaso maliban sa mga gamot",
            // "panon i katabang na doktor sa taw a aden influenza nina",
            // "ngin i gamot na influenza",
            // "duken di mubay su tao a aden influenza nin",
            // "duken ka temangka su tao a aden influenza nin",
            // "enduken ka di pa pagamit sa ngilon",
            "panon i katanga sa taw a aden influenza nin",
            "egaw ka sa listan na pegken a gapakay makan nu tao a aden influenza nin",
            "tayn i taw a aden influenza nin",
            // "ngin i bidayan na influenza b,c,a",
            // "panon i kagamot sa mayaw",
            // "enduken a edtagob sa ngali",
            "ngen pan i kaped a gamot na influenza",
        ]

        let getTestSamples = (item,total)=>{
            return item.filter((a,index)=>{
                return index < total
            })
        }

   
        list = getTestSamples(list2863_3247,55)
        // list = getTestSamples(list3250_3362,55)
        // list = getTestSamples(list,55)

        list.forEach(p=>{
            this.getReply(p)
        })
    }


    executeTestCasesWithErrorDataSet9(){
        // here we adopt bm25+ 
        
        let list = []

        
        //NOTE:: THOSE THAT IN DOUBLE DOUBLE QOUTES ARE ERRORS
        //THAT MUST BE FIXED
        let list2863_3247 = [

            // "preventing diarrhea is easy? how?",
            "is it possible to avoid diarrhea?",
            //"show me the foods that are okay to eat when feeling diarrhea",
            "can i be in danger from diarrhea",
            "will diarrhea be dangerous for me?",
            // "can i take bismuth to treat my diarrhea",
            "why dont you tell me about the generic medicines for diarrhea",
            // "how much imodium should i take?",
            // "how about you tell me the alternative to antimotility",
            // "when can my diarrhea be dangerous",
            
            
            // "how is diarrhea going to be a concern",
            // // "im not so sure about the signs of diarrhea",
            // "whats the best way to wash hands",
            // "allow me to ask how should i clean my hands",
            // // "my friend is vomiting, what to do",
            // // "my stomach is not feeling well help",
            // "ang pagkain ba ay pwedeng mag trigger ng diarrhea?",
            // // "kailan nga ang virus nagdudulot ng pagtatae",
            // // "nakakahawa ba ang pagtatae",
            // // "ang masusunstansyang pagkain ba ay pwedeng makapagpapabuti sayo pag ikaw ay nagtatae",
            // "aling mga gamot ba ang pwede kong inumin kapag ako ay nag tatae",
            // "saaan ba ako pwedeng mag konsulta pag ako ay nagtatae",
            // // "pwede bang magka problema ang tao pag dagkaka diarrhea",
            // // "ano nga ba ang gamit ng antimotility",
            // "bakit ba nakaktulong ang probiotics para gumaling sa pagtatae",
           
            // "paano ba nagpapagaling ang antimotility",
            // // "magkano ba ang halaga ng loperamide",
            // // "paano ba dapat hugasan ang kamay",
            // "eduken na to ka amayka di ka ged pakakakan na edtagudo ka",
            // "ngento ka amay ka nakakwa ka sa virus na aw na to na edtagudo ka",
            // "su petroleum jelly besen na to na mapya amayka pedtagudo? panon i to ba",
            // // "labit ka kon sa laki panon i kakagas besen sa lima",
            // "mana so pegkayaw ako , panon i kaawa na nya ba",
            // "panon i kaaawa na mayaw na taw",
            // "pegkayaw ako, panon i kagamot sa nya ba",
            // "is it possible to get influenza",
            // "what maight be the cause of influenza",
            // "try to tell me how should i treat my underlying influenza",
            // // "can i treat my influenza alone",
            // // "i wanted to treat my influenza at home",
            // "where is it possible to treat influenza",
            // // "temm my how is not touching eyes or mouth helpful",
            // // "how is proper way of taking citerizine",
            // "are there any other medications aside from citerizine",
            // "what's influneza type a",


            // "tell me about the influenza",
            // "why antibiotics in not recommended when having influenza",
            // "should i avoid antibiotics when having influena",
            // "is asprin bad for influenza",
            // "i think im having a fever, how can i reduce it",
            // "i feel that i am having fever",
            // "help me treat my abdominal cramps",
            "how can one treat their feeling of influenza",
            "bigyan mo ako ng listahan ng mga pagkaing maaring kainin ng taong may trangkaso",
        ]

        // i think we need to make terms that are not associated with priority terms like influenza, diarrhea
        // into zero...
        
        let list3250_3362 = [
            // "paano ba ang nagpapagaling ang immodium",
            // "paano nakakagaling ang expectorants",
            // "ano ang mga uri ng citerizine, sabihin mo nga sakin",
            // "sabihin mo nga ano ang type a influenza",
            // "ano ba ang gamot sa influenza type a",
            // "nagbabara ang ilong ko, ano pwede kong gawin",
            // "barado ang aking ilong",
            // "paano mag huhugas ng kamay",
            // "paano ba gamutin ang trangkaso maliban sa mga gamot",
            // "panon i katabang na doktor sa taw a aden influenza nina",
            // "ngin i gamot na influenza",
            // "duken di mubay su tao a aden influenza nin",
            // "duken ka temangka su tao a aden influenza nin",
            // "enduken ka di pa pagamit sa ngilon",
            "panon i katanga sa taw a aden influenza nin",
            "egaw ka sa listan na pegken a gapakay makan nu tao a aden influenza nin",
            "tayn i taw a aden influenza nin",
            // "ngin i bidayan na influenza b,c,a",
            // "panon i kagamot sa mayaw",
            // "enduken a edtagob sa ngali",
            "ngen pan i kaped a gamot na influenza",
        ]

        let getTestSamples = (item,total)=>{
            return item.filter((a,index)=>{
                return index < total
            })
        }

   
        list = getTestSamples(list2863_3247,55)
        list = getTestSamples(list3250_3362,55)
        // list = getTestSamples(list,55)

        list.forEach(p=>{
            this.getReply(p)
        })
    }

    executeTestCasesWithErrorDataSet8(){
        // here we adopt bm25+ 
        
        let list = []
        
        let list2307_2450 = [
            "i felt like having diarrhea, what does this mean",
            "how does someone probably get diarrhea",
            "can anyone help me treat my diarrhea?",
            "i want to eat food, what can i eat when having diaarhea?",
            "who are those people that can be threatened by diarrhea?",
            "am i at risk of getting trouble with diarrhea?",
            "who are in danger of getting intod diarrhea",
            "how should one take loperamide? what's its dosage. tell me",
            "at what point does antimoditiy helo",
            "how much money should i prepare to buy imodium",
            // "what are the iffernt kinds of diaahrea?",
            "tell me about the symtptoms of diarrhea",
            "how can i tell if i have diarrhea",
            "im not so sure about the signs of diarrhea",
            "is fainting a symptom of diarrhea",
            "is feeling of fever a symptom of diarrhea",
            "i am having fever, how can i mange it",
            "i need to control my fever, help",
            "i think im having fever",
            "i need to go there , but i think im having a headache",
            "whad should i do wen i feel like haivng nausea",
            // "ang pagkain ba ay pwedeng mag trigger ng diarrhea?",
            "paano nga ba gamutin ang diarrea o pag tatae",
            "aling mga bagay ba ang pwedeng mag dulot ng pagtatae",
            "ang masusunstansyang pagkain ba ay pwedeng makapagpapabuti sayo pag ikaw ay nagtatae",
            "paano ba dapat ginagamot ang diarrhea",
            "kailaangan ko bang magpatingin sa doctor pag ako ay nag tatae",
        ]

        let list2452_2630 = [
            // "ano ang pwede kong gawin para mapabuti ang aking pag tatae",
            // "nagtatae ako, anong pwede kong igamot sa aking sarili?",
            // "saaan ba ako pwedeng mag konsulta pag ako ay nagtatae",
            "bakit ba nakaktulong ang probiotics para gumaling sa pagtatae",
            // "paano ba malaman kung ako ay nagtatae na",
            // "saan ba pwedeng magagamot ang pagtatae",
            // "paano ba dapat hugasan ang kamay",
            // "isaad mo nga saking kung ano ang tamang paraan ng paglilinis ng kamay",
            // "nilalagat ako tulog please",
            "ngento ka amay ka nakakwa ka sa virus na aw na to na edtagudo ka",
            // "panon a to ka su kakan sa mapya na pakadtabang sa tayn san a pedtagudo",
            // "panon i katabang sa taw a pedtagudo",
            "mapakay a maawa i kapedtagudo?",
            // "pakaudo ako ged panon i kagamot sa nya ba",
            // "endaw mamasa sa gamot na kapedtagudo?",
            "duken su probiotics na na makagamot sa tagudo",
            // "panon i kakan sa loperamide",
            // "ngin besen i loperamide",
            // "endaw mapakay penggamitin e loperamide",
            // "ngin besen i imodium	",
            // "labit ka kon sa ngen i mga balangan na antimotility",
            // "ngin i mapya ka kagamot sa tagudo",
            // "ngin nya ba pedtagudo su pakat ko, panon i katabang ko lun",
            // "labit ka kon sa laki panon i kakagas besen sa lima",
            // "pakauta ako, panon i katabang sa taw a maya ba",
            // "samaya na mana ko pakauta , ngin i enggulan ko",
            // "why should i not exhaust myself too much when feeling influenza",
            // "can you tell me why drinking can help me when having influenza",
            "is eating healty helfpful in making one self treat diarrhea",
            // "how to i control my influenza",
            // "try to tell me how should i treat my underlying influenza",
            // "can i treat my influenza alone",
            // "why do i need to be cautious and stay away from others as much as possible",
        ]

        let list2632_2830 = [
            "why do i need to be cautious and stay away from others as much as possible",
            "why is it necessary to cover mouth",
            "i want to avoid influenza",
            "who will be most affected by influenza",
            "how does citirezine help in influenza",
            "get me the list of generic benadryl",
            "are there any things that i should be wary of when taking bendryl",
            "how one could tell that someone has influenza", 
            //"is asprin bad for influenza",
            "tell me what treats influenza	",
            "ang pagkain ba ng magandang pagkain ay nakaktulog sa trangkaso",
            "sino ba ang pwedeng tumulong sa toang may ytangkaso",
            "nagagamot ba ang trangkaso",
            "maari mo bang ibigay sakin ang listahan ng mga bagay bagay na pwedeng igamot sa tragkaso",
            "paano ba tulungan ang taong may trangkaso",
            "saan ba ako pwede bumili ng gmaot ng trangkaso",
            "anong mga pagkain ba ang pwedeng makatulong sa taong may trangkaso",
            "bigyan mo ako ng listahan ng mga pagkaing maaring kainin ng taong may trangkaso",
            "sino ba ang pwede bang magkaroon ng malalang epekto ng trangkaso",
            "bakit pa ang analagesics any nakakapagpapagaling",
            //"ano ang mga uri ng citerizine, sabihin mo nga sakin",
            "ano ba ang gamot sa influenza type a",
            "may mga bagay ba akong dapat maging alerto pag ako may trangkaso?",
            //"ano ang pwede mangyari sa tao pag mapabayaan nito ang sakit nyang trangkaso",
            //"paano malalaman na ang isa ay nakakaranas na ng trangkaso",
            //"paano ba masasabi na ako ay may trangkaso",
            "nagbabara ang ilong ko, ano pwede kong gawin",
            //"barado ang aking ilong",
            "masakit ang aking ulo",
            "may gamot ba sa nanakit na ulo",
            "ano ba ang maari nating gawin sa taong may trangkaso",
            "paano ba takpan ang bahing",
            "paano mag huhugas ng kamay",
            "so kakan sa mapya a pegken na makatabang sa kagkapya na influenza",
            //"panon i katabang na doktor sa taw a aden influenza nina",
            // "kapakay penggamotan i influenza",
            "panon i kaagamot sa influenza",
            //"duken di mubay su tao a aden influenza nin",
            "duken ka temangka su tao a aden influenza nin",
            //"enduken ka di pa pagamit sa ngilon",
            "endaw pabpawangen i taw a aden influenza nin",
            "endaw mamasa sa gamot na influenza",
            "panon i kagamot sa influenza",
            "ngin i mga pegken a mapakay kanin nu tao a aden influenza nin",
            //"egaw ka sa listan na pegken a gapakay makan nu tao a aden influenza nin",
            //"tayn i taw a aden influenza nin",
            //"panon i kapgamit na analgesics",
            "endaw besen mapakay gamutan i influenza",
            //"endaw ebpawan i taw a aden influenza in",
            "panon i kagamot sa influenza",
            "enduken a edtagob sa ngali",
        ]

        let getTestSamples = (item,total)=>{
            return item.filter((a,index)=>{
                return index < total
            })
        }
   
        list = getTestSamples(list2307_2450,55)
        list = getTestSamples(list2452_2630,55)
        list = getTestSamples(list2632_2830,75)

        list.forEach(p=>{
            this.getReply(p)
        })
    }

    executeTestCasesWithErrorDataSet7(){

        let list = []

        list = [
            "What are the options for treating acne?",
            "is it necessary to peel fruit?",
            "mapakay ako keman sa banana amayka pedtagudo ako?",
            "What are the options for treating acne?",
            "samaya na mana ko sleepy , ngin i enggulan ko",
            "bluedabadedabadae",
            "uta",
            "masakit samaya su ulo ko. ngin i gamot na nya ba",
            "ngin enggulan ko ka masakit i ulo ko",
            "pakauta ako ",
            "NGIN DEN BETad nengka",
            "hi tabangi ako nengka pan",
            "mapakay na su taw na keman sa da maluto a karni",
            "nginto ka di mapakay a keman sa dikena nawto a seda",
            "ngin besen i penggulan na bismuth subsalicylate",
            "endaw kapakay peggamuten i lopramide",
            "What are the options for treating diarrhea?",
            "What are the options for treating fever?",
            "What are the options for treating diarrhea?",
            "samaya na mana ko pakauta , ngin i enggulan ko",
            "duken di kan mailaw karne",
            "ngin besen i imodium",
            "ngin pan i mga ula ula sa kakan sa loperamide",
            "ngin i acute diarrhea?",
            "ngen i mabproblema na taw a pedtagudo",
            "panon i kasambot ta sa tagudo",
            "panon besen i kapengamot na loperamide",
            "panon besen i nakasugat a kapegkan sa imodium",
            "what does antimotility treat",
            "try to tell me how antimotility works",
            "explain to me the purpose of antimotiltiy",
            "why should one take zinc when having diarrhea",
        ]

        let remainsAProblem = [
            // "who are those people that can be threatened by diarrhea?",
            "bakit ba nakaktulong ang probiotics ",
            "bakit ba nakaktulong ang probiotics para gumaling sa pagtatae",
            "duken su probiotics na na makagamot sa tagudo",
            "nilalagat ako tulog please", 
            "paano ba nagpapagaling ang antimotility",
        ]

        let errors = [
            "kanu i di kakan nu taw sa antimotility",		
            "labit ka kon sa ngen i mga balangan na antimotility",
            "pedtagudo ako endaw a embpawang",
            "ngen i embidayan na acute abpeg a chronic a kapedtagudo",
            "labit ka kon sa laki panon i kakagas besen sa lima",
            "ngin nya ba pedtagudo su pakat ko, panon i katabang ko lun",
            "pakauta ako, panon i katabang sa taw a maya ba",
            "masakit samaya su ulo ko. ngin i gamot na nya ba",
            "nanguta i kaped ko , ngin i pakan ko sa lekanin",
            "ngin i mapya a i pakan sa taw a galangot",
            "enduken ka nsisita i katabel",
            "please tell me how can i manage my influenza",
            "i wanted to treat my influenza at home",
            "where is it possible to treat influenza",
            "why its useful to wear facemask",
            "is influenza preventable?",
            "i want to avoid influenza",
            "what foods can i take if i have influrnza",
            "im not sure what snacks can i eat as i am having influenza",
            "will i have a problem in influenza",
            "who will be most affected by influenza",
            "get me the list of generic benadryl",
            "how does citirezine help in influenza",
            "how does citirezine help in influenza",
            "tell me how can i avoid the side effects of citerizine",
            "what could be the bad side effects of citerizine",
            "show me the list of the symptoms of influenza",
            "how one could tell that someone has influenza",
            "s asprin bad for influenza",
            "tell me what treats influenza",
            "tell me the things cna help me manage influenza",
            "i think im having a fever, how can i reduce it",
            "i want to feel better from my headache",
            "i want to feel better from my headache",
            "im sneezing so much help",
        ]

        // those that are appears to be a prolem but makes sense
        // wrong answer but kind of acceptable
        let almostFixed = [
            "how much money should i prepare to buy imodium",
            "what kind of complications will i get when having diarrhea?",
            "tell me about the geric antimotilities that i can buy in pharmacies",
            `show me a list of branded antimotitliities that i can buy`,
            `how about you tell me about chronic diarrhea`,
            `is it possible to have acute diarrhea`,
            `how is diarrhea going to be a concern`,
            `how can i tell if i have diarrhea`,
            `i want to feel better but i feel like i have diarrhea, how can i make my self better`,
            `my friend is vomiting, what to do`,
            `im having headache`,
             // "i want to feel better but i feel like i have diarrhea, how can i make my self better",
             "aling mga gamot ba ang pwede kong inumin kapag ako ay nag tatae	",
           
        ]
        
        let fixed = [
            "paano pala nakakapagpapagaling ang bismuth subsalicylate",
            " paano nga ba nagtatae ang isang tao dahil sa parasite",
            "ang malnutrisyon nga ba ay pwede bang magdulot ng pagtatae?	",
            `how should one take loperamide? what's its dosage. tell me`,
            `how much money should i prepare to buy imodium`,
            `what are the iffernt kinds of diaahrea?`,
            "will diarrhea be dangerous for me?",
            "explain to my why antimotility is useful",
            "show me a list of branded antimotitliities that i can buy",
            "how should one take loperamide? what's its dosage. tell me",
            "is there anything else that i can take aside from imodium?",
            "how can i tell if i have diarrhea",
            "my friend is vomiting, what to do",
            "im having headache",
            "what cna i do, my stomach hurts",
            "i feel pain in my stomach",
            " bakit ang pag inom ng tubig ay nakakatulong sa pagpapagaling sa taong nagtatae",
            " panon a to ka amayka malubay su sungkolsongkol negka na edtagudo ka",
            " panon besen i a to ka edtagudo su taw.",
            " ten i magkaproblema besen umayka pedtagudo",
            "aling mga bagay ba ang pwedeng mag dulot ng pagtatae",
            "ang pagtatae ba ay naiiwasan?",
            "ano ba ang dapat na pag inom ng loperamide",
            "ano ba ang mga sensyales ng diarrhea",
            "ano ba ang pwede kong gawin para hindi magtatae",
            "ano pala ang dahilan bakit pwedeng uminom ng zinc pag nag tatae",
            "endaw mamasa sa gamot na kapedtagudo?",
            "endaw mapakay pengamutan i kadtagudo?",
            "enduken ka umayka malubay lawas nengka na edtagudo ka",
            "kailaangan ko bang magpatingin sa doctor pag ako ay nag tatae",
            "kailan ba dapat uminom ng tubig pag nag didiarhea",
            "kapakay a keman na sa mailaw a sapi",
            "kapakay a keman na sa mailaw a sapi",
            "maaiwasan ko ba ang pagtatae",
            "nailay ko na aden lugo na tay ko, panon i enggulan ko sa maya",
            "ngento ka amayka minom su taw na maawa nin su tagudo nin",
            "ngin besen i imodium",	
            "ngin besen i loperamide",				
            "ngin i kapakay a pamasan a branded a imodium",
            "nginto besen ka edtagudo su taw",
            "nginto ka di mapakay a keman sa dikena nawto a seda",
            "paano ba dapat uminom ng imodium",
            "paano ba malaman kung ako ay nagtatae na",
            "pakaudo ako ged panon i kagamot sa nya ba",
            "paki sabi nga sakin ano nga ba ang pwedeng maging issue pag ang isang tao ay nagtatae",				
            "san ako nakakuha ng pagtatae",
            "show me how do i wash my hands",
            "how do you disinfect water?",
            "paano ba mag disinfect ng tubig?",
            // "mapakay na su taw na keman sa da maluto a karni",// "paano ba pwedeng iwasan ang pagtatae?",
            // "paki sabi nga ang mga sintomas ng pagtatae",
            // "panon besen i kapengamot na loperamide",
            // " masakit ang aking ulo, ano ba pwede kong gagawin",
            // "ako ay nag susuka , ano ba pwedeng kong gawin",
            // "ako ay nanginginig, tulong",
            // "ang pag kain ba ng mga mga matatamis ay pwede kang magtaetae",
            // "ano ang pwede kong gawin para mapabuti ang aking pag tatae",
            // "bakiw umiwas sa mga hindi naluto na mga pagkain",
            // "ano ba ang paraan para mawala tong lagnat ko",
            // "labit ka kon sa laki panon i di kadtagudo na sekita a taw",
            // "ngin besen i penggulan na bismuth subsalicylate",
        ]
        
        let shouldNotBeThereTest = [
            "gusto ko baya pumunta sa macdo",
            "bakit ba kailangan kong kumain ng strepsils pag nagkakadiarrhea ako"
        ]
        // list = errors
        // list = remainsAProblem

        // second test errors 1772 - 1860
            // Note:: all that is commented here are corrected
        let v2_errors_1772_1860 = [
            // "how does someone treat diarrhea",
            // "when do you consult a doctor if having a case of diarrhea",
            // "where do you think i should buy medicine for diarrhea",
            // "im having fever. so im not feeling well. what should i do.",
            // "preventing diarrhea is easy? how?",
            // "is it possible to avoid diarrhea?",
            // "what foods can i eat?",
            // "show me the foods that are okay to eat when feeling diarrhea",
            // "get me the foods that can be eaten if i think i have diarrhea",
            // "i want to eat food, what can i eat when having diaarhea?",
            "what kind of complications will i get when having diarrhea?",
            // "what does antimotility treat",
            // "why dont you tell me about the generic medicines for diarrhea",
            // "tell me about the geric antimotilities that i can buy in pharmacies",
            // "show me a list of branded antimotitliities that i can buy",
            // "at what point does antimoditiy helo",
            // "how about you tell me the alternative to antimotility",
            // "explain o me the signs of diarrhea",
            // "tell me about the symtptoms of diarrhea",
            // "how can i tell if i have diarrhea",
            // "how can i know the symptoms of diarrhea",
            // "is fainting a symptom of diarrhea",
        ]
        

        let v2_errors_1870_2035 = [
            // 'i am having fever, how can i mange it',
            // 'is it possible to help someone with nausea	',
            // 'what cna i do, my stomach hurts',
            // 'i feel pain in my stomach',
            'my stomach is not feeling well help',
            // 'what is the proper way of cleaning water',
            'paki sabi nga sakin paano nga ba ang mga sweet things ay nakaka dulot ng diarrhea',
            'ang pagkain ba ay pwedeng mag trigger ng diarrhea?',
            // 'ano ba ang mga pwede kong gawin para hindi magtae tae',
            // 'ilista mo nga kung ano ano ang mga generic na mga gamot sa pagtatae',
            // 'pwede mo ba akong bigyan ng branded na mga pangalan ng gamot sa pagtatae',
            // 'saan ba pwedeng magagamot ang pagtatae',
            // 'ako ay nanginginig, tulong',
            // 'nakakramdam ako ng pagkakasuka',
            // 'masakit ang aking ulo, ano ba pwede kong gagawin',
            // 'ano ba ang pwede kong gawin kasi sumasakit ang aking tyan',
            'ngento ka amay ka nakakwa ka sa virus na aw na to na edtagudo ka',
            // 'enduken ka amayka masakit i tyan nu taw na edtagudo sekanin',
            // 'ngento ka amayka minom su taw na maawa nin su tagudo nin',
            // 'duken ka su kapaginom sa ig na makadtabang sa tayn san a pedtagudo',
            // 'kano i ka lu sa doktor amayka pedtagudo',
            // 'endaw mamasa sa gamot na kapedtagudo?',
            // 'panon besen i kagamot sa tagudo',
            // 'enduken ka amayka keman ta sa prutas na mangupis tano',
            // 'labit ka kon sa laki panon i di kadtagudo na sekita a taw',
            // 'ten i magkaproblema besen umayka pedtagudo',
            'su petroleum jelly besen na to na mapya amayka pedtagudo? panon i to ba',
            'duken su probiotics na na makagamot sa tagudo',
            // 'ngin i kapakay a pamasan a branded a imodium',
            // 'panon i kakan sa loperamide',
            // 'ngin besen i loperamide',
        ]

        let v2_errors_2035_2206 = [
            // "endaw mapakay penggamitin e loperamide",
            // "ngin besen i imodium",
            // "labit ka kon sa ngen i mga balangan na antimotility",
            // "pedtagudo ako endaw a embpawang",
            // "endaw kapakay penggamutan i tagudo",
            // "ngin i acute diarrhea?",
            // "ngen i mabproblema na taw a pedtagudo",
            // "ngin i mapya a i pakan sa taw a galangot",
            // "can i not just consult a doctor if i feel diarrhea",
            "is eating healty helfpful in making one self treat diarrhea",
            // "can i treat my influenza alone",
            // "where is it possible to treat influenza",
            // "how should i take care of myself when feeling influrnza",
            "why do i need to be cautious and stay away from others as much as possible",
            // "can i just eat anywhere when having influenza",
            // "is influenza preventable?",
            // "i want to avoid influenza",
            // "i want to eat something but i dont know what to eat",
            // "i want to eat something but i dont know what to eat",
            // "who will be most affected by influenza",
            "get me the list of generic benadryl",
            // "show me the names of branded antimotilities",
            // "when is the right time to avoid antihistamine",
            // "how much does antihistamine cost?",
            // "are there any other medications aside from citerizine",
            // "should i treat my influenza at home",
            // "what problems should i be wary from influneza",
            // "show me the list of the symptoms of influenza",
            // "tell me what treats influenza",
            // "i think im having a fever, how can i reduce it",
            // "tell me how can i reduce my fever",
            // "help me treat my abdominal cramps",
            // "ano ba ang dahilan at bakit umiwas magpagod pag may ytangkaso",
            "ang pagkain ba ng magandang pagkain ay nakaktulog sa trangkaso",
            // "paano ba tulungan ang taong may trangkaso",
            // "kinakailangan bang takban ang bunganga pag umuubo",
            // "bakit kailangan maglinis palagi ng kamay",
            // "bakit kailangan magsuot ng face mask",
            "saan ba ako pwede bumili ng gmaot ng trangkaso",
            // "anong mga pagkain ba ang pwedeng makatulong sa taong may trangkaso",
            "paano ba ang nagpapagaling ang immodium",
            // "bakit pa ang analagesics any nakakapagpapagaling",
            // "bigyan mo ako ng listahan ng mga alternatibong gamot sa antimotiltiy",
            // "may paalala kaba sa pagkain g citerizine",
            "sabihin mo nga ano ang type a influenza",
        ]

        let v2_errors_2206_2297 = [
            "ano ba ang gamot sa influenza type a",
            // "ano ba ang maaring maging komplikasyon pag napbayaan ang trangkaso",
            "may mga bagay ba akong dapat maging alerto pag ako may trangkaso?",
            "paano malalaman na ang isa ay nakakaranas na ng trangkaso",
            // "ano ang mga palatandaan ng trangkaso",
            // "paano ba masasabi na ako ay may trangkaso",
            // "nilalagnat ako",
            // "para akong nahihilo ba",
            // "masakit ang aking ulo",
            // "may gamot ba sa nanakit na ulo",
            // "paano ba mbabawasan ang abdominal cramps?",
            // "paano mag huhugas ng kamay",
            "paano ba gamutin ang trangkaso maliban sa mga gamot",
            // "naninigas ako, ano pwede kong gawin",
            // "ngen i i gamot sa tao a aden influenza nin",
            // "su ka inom sa ig na pakadtabang sa aden influenza nin",
            // "panon i katabang na doktor sa taw a aden influenza nina",
            "panon i kaagamot sa influenza",
            // "endaw ebpawang para kagamutan i influenza",
            // "ngin i gamot na influenza",
            "duken di mubay su tao a aden influenza nin",
            // "duken ka nasisita i kalimpyo",
            "enduken ka di pa pagamit sa ngilon",
            // "endaw mamasa sa gamot na influenza",
            "panon i katanga sa taw a aden influenza nin",
            "ngin i mga pegken a mapakay kanin nu tao a aden influenza nin",
            // "egaw ka sa listan na pegken a gapakay makan nu tao a aden influenza nin",
            "tayn i taw a aden influenza nin",
            // "panon i katabang na influenza sa antihistamies",
            // "ngen besen i antihistamines",
            // "kano i di kakan sa sa antihistamines",
            // "ngin i madtalo nengka sa kakan sa antihistamies",
            // "ngin a mabproblema na ta wa a aden influena nin",
            // "pedsakit i tyan ko panon kagamot sa nya ba",
            // "panon i kagamot sa influenza",
            // "enduken a edtagob sa ngali",
        ]

        list = fixed.filter((item,index)=>{
            return index < 5
        })

        let getTestSamples = (item,total)=>{
            return item.filter((a,index)=>{
                return index < total
            })
        }


        let v2_errors_1772_1860_ok = [
            "how does someone treat diarrhea",
            "when do you consult a doctor if having a case of diarrhea",
            "where do you think i should buy medicine for diarrhea",
            "im having fever. so im not feeling well. what should i do.",
            "preventing diarrhea is easy? how?",
            "is it possible to avoid diarrhea?",
            "what foods can i eat?",
            "show me the foods that are okay to eat when feeling diarrhea",
            "get me the foods that can be eaten if i think i have diarrhea",
            "i want to eat food, what can i eat when having diaarhea?",
             "what does antimotility treat",
            "why dont you tell me about the generic medicines for diarrhea",
            "tell me about the geric antimotilities that i can buy in pharmacies",
            "show me a list of branded antimotitliities that i can buy",
            "at what point does antimoditiy helo",
            "how about you tell me the alternative to antimotility",
            "explain o me the signs of diarrhea",
            "tell me about the symtptoms of diarrhea",
            "how can i tell if i have diarrhea",
            "how can i know the symptoms of diarrhea",
            "is fainting a symptom of diarrhea",
        ]

        list = getTestSamples(v2_errors_1772_1860,55)
        list = getTestSamples(v2_errors_1870_2035,55)
        list = getTestSamples(v2_errors_2035_2206,55)
        // list = getTestSamples(v2_errors_2206_2297,55)
        // list = shouldNotBeThereTest;

        list.forEach(p=>{
            this.getReply(p)
        })
    }

    showDictionaryTerms(){
        console.log(`Dictionary Terms`)
        console.log(DICTIONARY.getTerms())
    }

  
    getTestCases(){
        this.debug=false
        return [].concat(testCaseForDiarrhea,testCaseForInfluenza)
        // return [].concat(testCaseForDiarrhea)
        // return [].`concat(testCaseForInfluenza)
    }


    testSubstitutions(word){
        // let subs = DICTIONARY.getSubstitute(word)
        // console.log(`Substitute: ${word} to ${subs}`)
    }


    buildWildcardBlackbox(){

        Object.keys(this.RULES)
            .forEach(lang=>{
                let ruleSet = this.RULES[lang]
                let wildcards = new WildcardBlackbox()
                ruleSet.forEach(rule=>{
                    // returns all rules with asterisk , this means they are candidate for wildcard matching
                    
                    if ( Array.isArray(rule.pattern )){

                        // let wildcardPatterns = rule.pattern.filter(candidate => {
                        //     return candidate.includes('*')
                        // })

                        let wildcardPatterns = []
                        rule.pattern.forEach(p=>{
                            if ( p.includes('*') ){
                                wildcardPatterns.push(p)
                            }
                        })

                        let response = rule.response

                        wildcards.storeMemory({
                            patterns: wildcardPatterns,
                            response: response
                        })
                    }

                })
                
                this.RULES_WILDCARDS[lang] = wildcards
                this.RULES_WILDCARDS[lang].buildForwardIndex()
                // if ( lang == 'MAG '){
                //     this.RULES_WILDCARDS[lang].printForwardIndex()
                // }
            })

        
    }

    buildLanguageClassifier() {

        console.log('Loading language classifier model')

        // USE THIS TO PREDICT THE LANGUAGE
        this.classifierLanguage = new LanguageClassifier()
        // STEP 1: LOAD DATASETS
        // STEP 2: TRAIN THE MODEL
        Object.keys(this.RULES).forEach(lang => {
            this.classifierLanguage.insertCluster(this.RULES[lang], lang)
        })

        // call this after training
        this.classifierLanguage.buildTermProbabilityMap()

        // this.classifierLanguage.test([
        //     "i have influenza, what can i do",
        //     "san pwede bumili ng gamot ",
        //     "endaw ako makapamasa sa gamot na diarrhea"
        // ])

        // this.classifierLanguage.printVocabularyWithUnderscores()
        // this.classifierLanguage.printVocabulary()

    }

    buildDomainClassifier(){
        // this is where we access the
        // memory[lang][domain]
        this.memory = {}

        console.log('Loading domain classifier model')

        Object.keys(this.LANG)
            .forEach((lang,value)=>{

                // console.log(`\tLang - ${lang}`)
                this.memory[lang] = {}

                // dimensions are the intentsor dimensions we need to perform the classification 
                Object.keys(this.SELFCARE_DIMENSIONS)
                    .forEach((dimension)=>{
                        
                        //  filter corresponding rules
                        let filtered = this.RULES[lang].filter(rule=>{
                            return rule.dimension == dimension
                        })

                        if ( filtered.length > 0){
                            // console.log(`\t\tDimension - ${dimension} | ${this.SELFCARE_DIMENSIONS[dimension]}| ${filtered.length} cases\n\t\t\t${filtered}`)
                            let mem = new Blackbox()
                            mem.storeRules(filtered)
                            mem.sortReferences()
                            this.memory[lang][dimension] = mem
                        }
                        //each language has 7 pillar classifiers
                        //THERE IS A PROBLEM HERE.. YOU SHOULD NOT BE TRAINING USING THE RESPONSES 
                        //YOU SHOULD ONLY TRAIN USING THE PATTERNS
                        this.RULES_DIMENSION_CLASSIFIERS[lang].insertCluster(filtered,dimension)
                        this.RULES_DIMENSION_CLASSIFIERS[lang].buildTermProbabilityMap()
                    })
        })


        // Object.keys(this.LANG)
        //     .forEach((lang,value)=>{

        //         // console.log(`\tLang - ${lang}`)
        //         this.memory[lang] = {}

        //         // dimensions are the intentsor dimensions we need to perform the classification 
        //         Object.keys(this.SELFCARE_DIMENSIONS)
        //             .forEach((dimension)=>{

        //             })
        //     })
        
    }


    async getLanguage(msg) {
        return this.classifierLanguage.getPrediction(msg)
    }


    /**
     * 
     * @param {*} msg | get message form user
     * @returns a valid response
     * 
     * you need to increase synthetic data with chat gpt
     * 
     * Final step:
     * 1. trim white spaces 
     * 2. to lower cases
     * 3. peform edit distance formula and change term (max edits=2)
     * 4. perform concept substitution if there are any
     * 5. classify language
     * 6. perform dimension classification
     * 7. retrieve response
     * 8. if not found move on to the next narest dimension
     * 9. if still not satisfied perform cosine similarity on the first target dimension given threshold (.7)
     * 10. if not found tell use reponse does not exist
     */
    getReply(msg) {

        // https://link.springer.com/article/10.1007/s41666-022-00115-0
        // add this in your literature review


        let method = 'unspecified'


        // another step is to fix contractions example
        // dont => do not
        // wont => would not


        // step1 and step2: removed leading, trailing, duplicate spaces
        let trimmed = this.removeRedundantSpaces(msg.toLowerCase())
        
        // WARNING:: YOU NEED TO ADD ANOTHER STEP TO REPLACE I'M DON'T BY REMOVING APOSTROPHES
        // DO THESE FOR THOSE WORDS


        // log:: storing token
        let replacements = {}
        

        let spellChecked = []

        // step 3: rebuild string through edit distance
        // console.log(`Engine::getReply [Edit Distance::${distance}] -> From ${token} to ${word}`)
        trimmed.split(' ').forEach((token,index)=>{
            for ( let i = 0 ; i < COMMON_MISPELLED_WORDS.length; i++ ){
                let word = COMMON_MISPELLED_WORDS[i]
                let distance = damerauLevenshteinDistance(token,word) 
                // we only allow up to 3 edits to correct
                if ( distance <= (Math.ceil(token.length/2))-1  && 
                    token != word  ){
                    replacements[token] = word
                    
                    // console.log(`Engine::getReply[spellcheck test]: ${word}`)
                    // console.log(`\tcorrected from: [${token}] to ${word}`)
                    
                    token = word
                }
            }

            spellChecked.push(token)
        })

        spellChecked = spellChecked.join(' ')

        

        // this will not clean the special characters since for example character ? is a valid one. 
        // let cleaned = spellChecked.replace(/[^a-zA-Z0-9]/g,' ')

        // console.log(`<< cleaned << ${cleaned}`)
        // https://stackoverflow.com/questions/4374822/remove-all-special-characters-with-regexp
        let cleaned = spellChecked.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g,' ')


        // predict langauge
        let lang = this.classifierLanguage.getPrediction(cleaned)


        cleaned.split(' ').forEach((token,index)=>{
            let word = DICTIONARY.getSubstitute(token)
            // console.log('>> Testing: ' ,token, ' replace to', word )
            // console.log(`>> Scanning Substitutions << [${token}] replaced to [${word}]`)
            if ( word != null ){
                // console.log('>> Testing: ',token, ' replace to', word )
                // const regex = new RegExp("\\b" + token + "\\b", "g");
                cleaned = cleaned.replace(token,word)
            }

        })

        // lets remove trailing spaces
        let reconstructed = this.removeRedundantSpaces(cleaned)

        
        // do the substitution first before you remove the stop words
        // remove stop words
        reconstructed.split(' ').forEach(token=>{
            if ( DICTIONARY.isStopWord(token.trim()) ){
                // you need to set the boundary
                const regex = new RegExp("\\b" + token + "\\b", "g");
                // console.log(`Engine::get Reply << ${token} must be removed`)
                reconstructed = reconstructed.replace(regex, '')
            }
        })

        let stopWordsRemovedInput = reconstructed

        // leading, trailing, duplicate spaces removed
        // let processedInput = stopWordsRemovedInput.replace(
        //     /(^\s+|\s+$)|\s+/g, 
        //     function (match, leadingTrailing, duplicate) {
        //         if (leadingTrailing) {
        //             return '';
        //         } else if (duplicate) {
        //             return ' ';
        //         }
        //     }
        // );

        let processedInput = this.removeRedundantSpaces(stopWordsRemovedInput)
        


        // returns an array
        let searchOrder = this.RULES_DIMENSION_CLASSIFIERS[lang].getPredictionOrder(processedInput)

        // this is the starting supposed to be
        let targetDimension = null

        // let searchDimension
        let targetRule = null
        
        let searchOrderDimensionResults = []

        let executeWildcardMatching = (str,lang,note="")=>{
            let result = this.RULES_WILDCARDS[lang].getReplyUsingWildcardMatching(str)

            method = "Wildcard matching"

            targetRule = {
                reply: result.reply,
                pattern: result.pattern,
                score: 0,
                rawPattern: result.rawPattern
            }

            if ( this.debug ){
                console.log('Engine::getReply [Information Retrieval has zero matches] ')
                console.log('Engine::getReply ' , note )
                console.log(`Engine::getReply [Attempting Regex Pattern Matching Result]`)
                console.log(`\tSummary`)
                console.log(`\t\tMatching Raw Pattern: ${targetRule.rawPattern} `)
                console.log(`\t\tMatching Normalized Pattern: ${JSON.stringify(targetRule.pattern)}`)
                console.log(`\t\tMessage: ${str}\n`)
                console.log(`\t\tResponse: ${JSON.stringify(targetRule.reply)}\n`)
            }
        }

        // If words is not in the vocabulary there is a chance that it is not about diarrhea or influenza
        // so we are finding words that are related to influenza and diarrhea 
        // step1. build the influenza and diarrhea vocabulary
        // step2. remove words existing in influenza and diarrhea
        // step3. the remaining words are now priority words 
        // let U = all the possible words, the computatio of the active words
        // U = UNKOWN UNION DOMAIN_WORDS
        // U = UNKNOWN + (A UNION B)
        // (A UNION B ) COMPLEMENT (THE SET OF ALL WORDS NOT IN A AND B ) = unknown - (A UNION B ) 
        // SYMMETRIC DIFFERENCE BETWEEN A AND B =  (A UNION B )  - ( A INTERSECT B] ) 
        //  
        // LETS IGNORE UNKOWS, SUPPOSE THAT IT EXIST, WE ARE ONLY INTERESTED IN WORDS IN DOMAIN A AND B
        // THE SYMMETRIC DIFFERENCE IS NOW OUR WORD OF INTEREST FROM ALL THE WORDS EXISTING IN THE VOCAULARY
        // UNKNOWN = IS THE COMPLEMENT OF THE SET [ (A UNION B )  - ( A INTERSECT B] ) ]


        // Precondition 1 For BM25+ :: #1 domain word must exist
        let allowBM25Matching = false
        // console.log('Engine::getReply ( check for domain word ) ')
        processedInput.split(' ').forEach(word=>{
            if ( DOMAIN_ENTITIES.includes(word) ){
                allowBM25Matching = true
            }
        })
        
        // search if combination exist
        // for (let dimension of searchOrder) {
        //     let targetDimension = dimension.class
        //     isRecognizable = this.memory[lang][targetDimension].doesNgramCombinationExist(processedInput)
        //     if (!isRecognizable ){
        //         isRecognizable=false
        //         break;
        //     }
        // }

        if ( this.debug ){
            console.log(`\nEngine::getreply Testing for: ${msg}`)
            console.log(`Engine::getreply <<< from archive vocabulary total: ${VOCABULARY.value.length}`)
        }

        // Precondition 2 For BM25+ 
        // query must not contain more than 3 terms that are unavailable in the dictionary
        let wordsNotFoundInVocabularyTotal = 0
        let wordsNotFoundInVocabularyList = []
        
        if ( allowBM25Matching ){
            // how many unrecognize words are we suppose to allow?
            // general rule is up to two
            processedInput.split(' ').forEach(word=>{
                if ( !VOCABULARY.value.includes(word) ){
                    wordsNotFoundInVocabularyList.push(word)
                    
                    if ( this.debug ){
                        console.log('Not exist in vocab >> ' , word , ' ', VOCABULARY.value.includes(word) )
                    }
                }else{
                    if (this.debug){
                        console.log('exist in vocab << ' , word )
                    }
                }
            })
            wordsNotFoundInVocabularyTotal =  wordsNotFoundInVocabularyList.length

            // we only allow it if words not found in the vocabulary are less than 5
            // here we assume that the minimum words that could be wrong is 2, but we can increase it
            // we can identify this by learning about the minimum edit distance needed to match a query
            // two could be good
            if (wordsNotFoundInVocabularyTotal >= this.MAX_TOTAL_WORDS_OUTSIDE_DICTIONARY ){
                allowBM25Matching = false
            }
        }

        // Precondition 3 For BM25+ 
        // remove redundant words
        // the motivation on this is because the bm25 already does the compuation for us
        let processedInputDuplicateWordsRemoved = processedInput.split(' ').reduce((unique, word) => {
            if (!unique.includes(word)) {
              unique.push(word);
            }
            return unique;
        },[])

        processedInputDuplicateWordsRemoved= processedInputDuplicateWordsRemoved.join(' ')

        // // Precondition 4 For BM25+ 
        // // remove and ignore computation of non existent words because they dont add value 
        // // they only add noise
        // let finalNormalizedInput = processedInputDuplicateWordsRemoved.split(' ').reduce((unique, word) => {
        //     if (VOCABULARY.value.includes(word)) {
        //       unique.push(word);
        //     }
        //     return unique;
        // },[])



        let finalNormalizedInput = processedInputDuplicateWordsRemoved


        // Precondition 5 For BM25+ 
        // remaining sentences must be more than two words else
        // else mas madali kasi mag match this will also avoid skewing the results favoring longer
        allowBM25Matching = finalNormalizedInput.length > 2 ? true: false

        // also make it an error if the user asks more than 2 sentences
        // say that they can only respond one at a time

        if ( allowBM25Matching ){
      
            // EXECUTE INFORMATION RETRIEVAL MECHANISM

            let dimensions = Object.keys(this.SELFCARE_DIMENSIONS)
            for (let dimension of searchOrder) {
                targetDimension = dimension.class
                // let finding = this.memory[lang][targetDimension].getReplyUsingWeightedCosineSimilarity(finalNormalizedInput)
                let finding = this.memory[lang][targetDimension].getReplyUsingCosineSimilarity(finalNormalizedInput)

                searchOrderDimensionResults.push({
                    dimension: targetDimension,
                    rawPattern: finding.rawPattern,
                    pattern: finding.pattern,
                    score: finding.score
                })

                if (targetRule == null) {
                    targetRule = finding
                } else {
                    let next = finding
                    if (targetRule.score < next.score) {
                        targetRule = next
                    }
                }

            }

            // method = "Weighted Cosine Similarity/BM25 Lucene"
            method = "Regular Cosine Similarity"


            if (this.debug){
                // SUMMARY INFORMATION RETRIEVAL
                console.log("\nTest Case:: ", msg)
                console.log(`Engine::getReply [Raw Text] - ${msg}`)
                console.log(`Engine::getReply [Spell Checked] - ${spellChecked}`)
                for (let word in replacements) {
                    console.log(`\tReplaced: ${word} to ${replacements[word]}`)
                }
                console.log(`Engine::getReply [All noncharacter/trailing/leading/duplicate spaces removed] - ${cleaned}`)
                console.log(`Engine::getReply [Reconstructed With Substitutes] - ${reconstructed}`)
                console.log(`Engine::getReply [Stop Words Removed Message] - ${stopWordsRemovedInput}`)
                console.log(`Engine::getReply [Final Processed Input::Duplicate not yet removed] - ${processedInput}`)
                console.log(`Engine::getReply [Final Processed Input::Duplicates removed] - ${finalNormalizedInput}`)
                console.log(`Engine::getReply [Language Predicted] - ${lang}`)
                console.log(`Engine::getReply [Total not found in vocabulary] - ${wordsNotFoundInVocabularyList}`)
                console.log(`Engine::getReply [Attempting Similarity Metric]`)
                for (let result of searchOrderDimensionResults) {
                    // console.log('\tDimension:',result.dimension)
                    console.log(`\tDimension: ${result.dimension}`)
                    console.log(`\t\tRaw Pattern: ${result.rawPattern}`)
                    console.log(`\t\tPattern: ${result.pattern}`)
                    console.log(`\t\tScore: ${result.score}`)
                }
            }

            if ( targetRule.score < this.REPLY_THRESHOLD  ){
                let additionalMessage = "[Executing Wildcard Matching due to low BM25score]"
                executeWildcardMatching(finalNormalizedInput,lang,additionalMessage)
            }else{
                if (this.debug){
                    console.log(`\tSummary`)
                    console.log(`\t\tDimension: [${targetDimension}]`)
                    console.log(`\t\tMatching Raw Pattern: [${targetRule.rawPattern}] `)
                    console.log(`\t\tMatching Normalized Pattern: [${targetRule.pattern}] `)
                    console.log(`\t\tWeighted Similarity Score: [${targetRule.score}] `)
                    console.log(`\t\tMessage: [${msg}] `)
                    console.log(`\t\tProcessed Input - ${finalNormalizedInput}`)
                    console.log(`\t\tResponse: ${targetRule.reply}`)
                }
            }


        }else{

            if (this.debug){
                // EXECUTING PATTERN MATCHING [STRICT CONDITION]
                // The condition here is that the information retrievan needs to have at least two matching characters
                // 1. a priority word must exist (how to determine if priority?)
                // 2. it could be that we set up the number of matching terms
                // 
                // thus, if the targetScore is zero is the search that means it didnt find any matching element
                // that satisfies the condition we set in the weighted cosine similarity that the score must 
                // be at least with two matching terms
                console.log("\nTest Case:: ", msg)
                console.log(`Engine::getReply [Raw Text] - ${msg}`)
                console.log(`Engine::getReply [Spell Checked] - ${spellChecked}`)
                for (let word in replacements) {
                    console.log(`\tReplaced: ${word} to ${replacements[word]}`)
                }
                console.log(`Engine::getReply [All noncharacter/trailing/leading/duplicate spaces removed] - ${cleaned}`)
                console.log(`Engine::getReply [Reconstructed With Substitutes] - ${reconstructed}`)
                console.log(`Engine::getReply [Stop Words Removed Message] - ${stopWordsRemovedInput}`)
                console.log(`Engine::getReply [Final Normalized Input] - ${finalNormalizedInput}`)
                console.log(`Engine::getReply [Language Predicted] - ${lang}`)
                console.log(`Engine::getReply [Total not found in vocabulary] - ${wordsNotFoundInVocabularyList}`)
            }

            executeWildcardMatching(finalNormalizedInput,lang,"[Executing Wildcard Matching because domain word not found]")
    
        }

        let valueReturned = {
            userMessage: msg,
            reconstructed: reconstructed,
            reply: targetRule.reply == null ? "Target Rule Not Found": targetRule.reply.trim(),
            lang: lang,
            // dimensionCode: targetDimension,
            // dimensionLabel: this.SELFCARE_DIMENSIONS[targetDimension],
            pattern:  targetRule.pattern,
            patternMatchingMethod: method,
            score: targetRule.score,
            originalPatternFound: targetRule.rawPattern
        }  

        // console.log(`Value Returned:: ${JSON.stringify(valueReturned)}`)

        return valueReturned
    }


}


let _removeTrailingLeadingDuplicateSpaces = (str) =>{
    str = str.replace(
      /(^\s+|\s+$)|\s+/g, 
      function (match, leadingTrailing, duplicate) {
          if (leadingTrailing) {
              return '';
          } else if (duplicate) {
              return ' ';
          }
      }
    )
  
    return str
  }