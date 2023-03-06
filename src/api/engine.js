import Blackbox from './engine/blackbox'
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

import LanguageClassifier from './language-identifier'

export default class Engine {

    constructor() {

        this.LANG = {
            ENG: 'eng',
            FIL: 'fil',
            MAG: 'mag'
        }

        this.langSupported = [
            this.LANG.ENG,
            this.LANG.FIL,
            this.LANG.MAG,
        ]

        this.memory = {}
        this.langSupported.forEach(lang => {
            this.memory[lang] = new Blackbox()
        })

        this.classifier = new LanguageClassifier()


        // stores the documents for eng,fil,mag
        // this is needed for the machine learning
        this.document = {}
        this.langSupported.forEach(lang => {
            this.document[lang] = new Array()
        })

        console.log(`Starting Engine`)

        // load diarrhea rules
        let engMemory = this.memory[this.LANG.ENG]
        engMemory.storeRules(diarrheaEngRules)
        engMemory.storeRules(influenzaEngRules)
        engMemory.transformReferences()
        engMemory.sortReferences()

        // to enter substitutions
        // you need to use porter and stemmed entries
        // this is a lot easier to handle inflection
        // if possible you need to enter synonyms


        let filMemory = this.memory[this.LANG.FIL]
        filMemory.storeRules(diarrheaFilRules)
        filMemory.storeRules(influenzaFilRules)
        filMemory.transformReferences()
        filMemory.sortReferences()

        // Unlike english, the filipino
        // can be manually processed?
        // is there are way to have a porter and 
        // stemmer in filipino?


        let magMemory = this.memory[this.LANG.MAG]
        magMemory.storeRules(diarrheaMagRules)
        magMemory.storeRules(influenzaMagRules)
        magMemory.transformReferences()
        magMemory.sortReferences()

        // Unlike english, the maguindanaon
        // can be manually processed?
        // is there are way to have a porter and 
        // stemmer in filipino?


        /** 
         * here you need to implement a loading mechanism
         * something like this
         * if (session.get("memory")){
         *      this.memory = session.get("memory")
         * }else{
         *      then load data
         * }
         * 
         * another thing is if there is version change
         * if ( an update has been made )
         * 
         * */

        // hide this for testing
        // this.load_data()
        
        // this.printRules(this.LANG.ENG)
        // this.printRules(this.LANG.FIL)
        // this.printRules(this.LANG.MAG)
    }


    // print rules for english
    // we need this 
    printRules(lang) {
        // console.log(`Printing rules::?`,lang)

        let mem = this.memory[lang]

        /**RETRIEVE EXISTING PATTERNS*/
        // console.log("Print rules:: ",lang)
        // let conversationRules = this.memory[lang].getPatternReferences()
        // console.log(conversationRules)

        /**RETRIEVE UNIQUE TERMS */
        let uniqueTerms = mem.getUniqueTermsFromPatterns()
        // console.log(uniqueTerms)
    }


    async load_data() {

        let step = new Promise((resolve, reject) => {
            // set cluster data 

            this.classifier.insertCluster(diarrheaEngRules, this.LANG.ENG)
            this.classifier.insertCluster(influenzaEngRules, this.LANG.ENG)
            this.classifier.insertCluster(diarrheaFilRules, this.LANG.FIL)
            this.classifier.insertCluster(influenzaFilRules, this.LANG.FIL)
            this.classifier.insertCluster(diarrheaEngRules, this.LANG.MAG)
            this.classifier.insertCluster(influenzaMagRules, this.LANG.MAG)
            resolve(true)
        }).then((val) => {

            // CALL THIS TO BUILD PROBABILITY MAP STORING ALL 
            // TERM PROBABILITY
            this.classifier.buildTermProbabilityMap()

            /**FOR GETTING DOCUMENTS*/
            // this.classifier.printDocuments()
        })

        await step

        // let testa = this.classifier.getPrediction("pamasa ko gamot")
        // console.log(`Test A |"pamasa ko gamot"|  class:: `,testa)
        // let testb = this.classifier.getPrediction("saan ako pwede mama sa gamot")
        // console.log(`Test A |"saan ako pwede mama sa gamot"|  class:: `,testb)

        // let testc = this.classifier.getPrediction("i need to buy medicine")
        // console.log(`Test A |"i need to buy medicine"|  class:: `,testc)
    }


    async getLanguage(msg) {
        return this.classifier.getPrediction(msg)
    }


    async getReply(msg) {
        // let reply = `Unimplemented: Engine reply for msg >> ${msg}`
        // reply = this.memory['eng'].retrieveMemory(msg)
        // return reply


        // NOTE THIS IN PROBABILITIES
        // https://mmuratarat.github.io/2019-07-31/NBClassifier-in-Python-an-example
        // LETS TRY TO USE LOG TRICK FOR VERY LARGE VALUE OF NUMBER IN 
        // PROBABILITIES NAIVE BAYES
        let reply = "Not found"

        let lang
        let identifyLanguage = new Promise((resolve, reject) => {
            lang = this.classifier.getPrediction(msg)
            resolve(lang)
        }).then((response) => {

            reply = this.memory[lang].retrieveMemory(msg)
        })

        await identifyLanguage

        return reply
    }

    // to reduce the features
    // how about we remove common words that
    // occurs in english/filipino/maguindanaon
    // so that we are only left with distinct words
    // that are indicative 
    // if this happens we dont even have to use
    // machine learning perhaps

    // then maybe we just have to do voting mechanism
    // to identify as majority rules
    // it may be an overkill to use naive bayes

    // remember we are only removing features
    // that exist in eng, fil, mag

    async getReply(msg, lang) {
        // console.log(`From Engine: getting reply for:\n\t${msg}\n\t${lang}`)
        let reply = this.memory[lang].retrieveMemory(msg)
        // console.log(`\tResponse after memory retrieve:\n\t${reply}`)
        return reply
        // return `Engine reponse: ${msg} || ${lang}`
    }

}