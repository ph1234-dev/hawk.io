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

import LanguageClassifier from './language-classifier'
import DomainClassifier from './domain-classifier'

export default class Engine {

    constructor() {

        // console.log(`English Rules / ${[].concat(diarrheaEngRules,influenzaEngRules).length}`)
        // console.log(`Filipino Rules / ${[].concat(diarrheaFilRules,influenzaFilRules).length}`)
        // console.log(`Maguindanaon Rules / ${[].concat(diarrheaMagRules,influenzaMagRules).length}`)
        
        this.RULES = {
            ENG: [].concat(diarrheaEngRules,influenzaEngRules),
            FIL: [].concat(diarrheaFilRules,influenzaFilRules),
            MAG: [].concat(diarrheaMagRules,influenzaMagRules)
        }

        this.RULES_DIMENSION_CLASSIFIERS = {
            ENG: new DomainClassifier(),
            FIL: new DomainClassifier(),
            MAG: new DomainClassifier(),
        }

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

        
        
        this.memory = {}
        
        // USER THIS TO PREDICT THE DIMENSION
        this.classifierSelfcareDimensions = new LanguageClassifier()
        
        

        console.log('Loading domain classifier model')
        // we create a master memory
        Object.keys(this.LANG)
            .forEach((lang,value)=>{

                console.log(`\tLang - ${lang}`)
                this.memory[lang] = {}

                // dimensions are the intentsor dimensions we need to perform the classification 
                Object.keys(this.SELFCARE_DIMENSIONS)
                    .forEach((dimension)=>{
                        
                        //  filter corresponding rules
                        let filtered = this.RULES[lang].filter(rule=>{
                            return rule.dimension == dimension
                        })

                        if ( filtered.length > 0){
                            console.log(`\t\tDimension - ${dimension} | ${this.SELFCARE_DIMENSIONS[dimension]}| ${filtered.length} cases\n\t\t\t${filtered}`)
                            let mem = new Blackbox()
                            mem.storeRules(filtered)
                            mem.transformReferences()
                            mem.sortReferences()
                            this.memory[lang][dimension] = mem
                        }


                        //each language has 7 pillar classifiers
                        //THERE IS A PROBLEM HERE.. YOU SHOULD NOT BE TRAINING USING THE RESPONSES 
                        //YOU SHOULD ONLY TRAIN USING THE PATTERNS
                        this.RULES_DIMENSION_CLASSIFIERS[lang].insertCluster(filtered,dimension)
                    })
        })


        // TO ACCESS MEMORY this.memory[LANG][DIMENSION] 
        // WE NEED TO IDENTIFY THE VALUE OF LANG AND DIMENSION

        // USE THIS TO PREDICT THE LANGUAGE
        this.classifierLanguage = new LanguageClassifier()
        // STEP 1: LOAD DATASETS
        // STEP 2: TRAIN THE MODEL


        // console.log('Loading language classifier model')
        // Object.keys(this.RULES).forEach(lang=>{
        //     console.log(`\tLang // ${lang}`)
        //     console.log(`\tArray // ${this.RULES[lang]}`)
        //     this.classifierLanguage.insertCluster(this.RULES[lang],lang)
        // })



        // console.log(`Starting Engine`)

        // load diarrhea rules


        // hide this for testing
        // this.load_data()
        
        // this.printRules(this.LANG.ENG)
        // this.printRules(this.LANG.FIL)
        // this.printRules(this.LANG.MAG)

        // NOTE RO REMEMBER YOU NEED TO COMPUTE THE LEVENSHTEIN DISTANCE FOR SELECTED 
        // TERMINOLOGIES
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
     * 3. classify language
     * 4. peform edit distance formula and change term (max edits=2)
     * 5. perform concept substitution if there are any
     * 6. perform dimension classification
     * 7. retrieve response
     * 8. if not found move on to the next narest dimension
     * 9. if still not satisfied perform cosine similarity on the first target dimension given threshold (.7)
     * 10. if not found tell use reponse does not exist
     */
    async getReply(msg) {
        // let reply = `Unimplemented: Engine reply for msg >> ${msg}`
        // reply = this.memory['eng'].retrieveMemory(msg)
        // return reply


        // NOTE RO REMEMBER YOU NEED TO COMPUTE THE LEVENSHTEIN DISTANCE FOR SELECTED 
        // TERMINOLOGIES
 

        // NOTE THIS IN PROBABILITIES
        // https://mmuratarat.github.io/2019-07-31/NBClassifier-in-Python-an-example
        // LETS TRY TO USE LOG TRICK FOR VERY LARGE VALUE OF NUMBER IN 
        // PROBABILITIES NAIVE BAYES
        let reply = "Not found"

        let lang
        let identifyLanguage = new Promise((resolve, reject) => {

            lang = this.classifierLanguage.getPrediction(msg)
            resolve(lang)

        }).then((response) => {

            // lets fix this.. before retrieving memory, lets try to
            // 1. identify which pillar it belongs 
            // 2. if found, then retrieve
            // psu
            reply = this.memory[lang].retrieveMemory(msg)
        
            // if the language predicted is in english then do porter and stemmer

            // if the language is maguindanaon, then do....


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