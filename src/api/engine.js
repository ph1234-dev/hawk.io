import Blackbox from '@/api/configuration/blackbox'
import {
    diarrheaEngRules,
    diarrheaFilRules,
    diarrheaMagRules
} from '@/api/rules/diarrhea/rules-diarrhea'

import {
    influenzaEngRules,
    influenzaFilRules,
    influenzaMagRules
} from './rules/influenza/rules-influenza'

import LanguageClassifier from '@/api/classifier/language-classifier'
import DomainClassifier from '@/api/classifier/domain-classifier'
import { levenshteinDistance,damerauLevenshteinDistance } from '@/api/configuration/distance-formula'
import { RESERVED_WORDS } from '@/api/rules/reserved-words'

export default class Engine {

    constructor() {
        
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

        this.spellingArray = RESERVED_WORDS

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

        this.initializeLanguageClassifier()
        this.initializeDomainClassifier()

        // this.getReply("how do you treat influenza")
        // this.getReply("how do you treat influnza")
        // this.getReply("how do you treat adobo")
        
        // this.getReply("endaw ako mamasa sa gamot na tagudo")
        // this.getReply("gusto ko bumili ng gamot ng ubo ko ba san ako pwede pumunta")
        // this.getReply("how do you treat diarrhea")
        // this.getReply("drugs that most diarrhea can be treated are what")
        // this.getReply("paano gamutin ang diarrhea")
        // this.getReply("gamot diarrhea")
        // this.getReply(" i was wondering how can one possible fix diarrhea")
        this.getReply("tell me the what is the proper way of taking antihistamines")
        this.getReply("tell me the side effects of antihistamines")
        this.getReply("how much does lozenges cost")
    }


    initializeLanguageClassifier() {

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

    }

    initializeDomainClassifier(){
        
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
                            mem.transformReferences()
                            this.memory[lang][dimension] = mem

                            // mem.print().referencesUntransformed()
                        }


                        //each language has 7 pillar classifiers
                        //THERE IS A PROBLEM HERE.. YOU SHOULD NOT BE TRAINING USING THE RESPONSES 
                        //YOU SHOULD ONLY TRAIN USING THE PATTERNS
                        this.RULES_DIMENSION_CLASSIFIERS[lang].insertCluster(filtered,dimension)
                        this.RULES_DIMENSION_CLASSIFIERS[lang].buildTermProbabilityMap()
                    })
        })


        // TO ACCESS MEMORY this.memory[LANG][DIMENSION] 
        // WE NEED TO IDENTIFY THE VALUE OF LANG AND DIMENSION


        // SHOWS THe vocabulary
        // let vocab = []
        // Object.keys(this.RULES_DIMENSION_CLASSIFIERS)
        //     .forEach(lang=>{
        //         // console.log(lang)
        //         let words = this.RULES_DIMENSION_CLASSIFIERS[lang].getVocabulary()
        //         for (let word of words){
        //             if ( !vocab.includes(word) &&
        //                 word.length > 2)
        //                 vocab.push(word)
        //         }
        // })
        // vocab = vocab.sort()
        // console.log("Vocabulary Found\n",vocab)
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
        
        console.log(`Engine::getReply (original msg) / ${msg}`)
        let reply = null

        // step1 and and step2
        msg = msg.toLowerCase().trim()

        // step 3
        // rebuild string
        // Perform edit distance
        let tokens = msg.split(' ')
        tokens.forEach(token=>{

            for ( let i = 0 ; i < this.spellingArray.length; i++ ){
                let word = this.spellingArray[i]
                // we only allow up to 3 edits to correct
                if ( damerauLevenshteinDistance(token,word) < 2
                    && token != word
                    ){
                    console.log(`\nEngine::getReply (foundh damerau / ${token} | ${word}) / ${damerauLevenshteinDistance(token,word)}`)
                    msg = msg.replace(token,word)
                }
            }

        })

        console.log(`Engine::getReply (after levenshtien msg) / ${msg}`)

        // step 4 Do substitutions
        
        // step 5
        let lang = this.classifierLanguage.getPrediction(msg)
        console.log(`Engine::getReply / msg == ${msg}`)
        console.log(`Engine::getReply / Predicted language == ${lang}`)

        // IMPORTANT TASK
        // get the ranking order and iterate through it


        // step 6 
        // select which selfcare dimension ranks higher

        

        // returns an array
        let searchOrder = this.RULES_DIMENSION_CLASSIFIERS[lang].getPredictionOrder(msg)
        let searchDimensionLength = searchOrder.length


        // let dimensionScanned = [dimension]
        let selfcareDimension = 0;

        console.log(`Engine:: getReply (scanning dimensions through pattern matching) /  ${selfcareDimension} - Total dimensions = ${this.SELFCARE_DIMENSIONS.length}`)
        
        for ( let dimension of searchOrder){
            let target = dimension.class
            reply = this.memory[lang][target].getReplyUsingPatternMatching(msg)
            if (reply != null) {
                // dimensionScanned.push(dimIndex)
                console.log(`\tFuond Reply:: (Dimension::${target}) `, reply)
                break;
            }
        }

        if (reply == null) {

            console.log(`Engine::getReply / Pattern matching had no response. Attempting cosine similarity `)
            
            let similarityScorePerDimension = []
            for ( let dimension of searchOrder){
                let target = dimension.class
                similarityScorePerDimension.
                    push(this.memory[lang][target].getReplyUsingCosineSimilarity(msg))
           }

           let max = similarityScorePerDimension[0]
           for (let i = 1; i < similarityScorePerDimension.length; i++){
            if ( max.cosine < similarityScorePerDimension[i].cosine){
                max = similarityScorePerDimension[i]
            }

            // there should be a tweak here.. 
            // to use cosine similariy.
            // 1. at least 50 of the words in msg should be seen in the patterns
           }
           
           reply = max.reply
            // if reply still null
            // then we couldnt find the repsonse
            if ( reply == null ){
                reply = 'Im sorry, I am unable to determine how to respond to that question'
                console.log(`Engine::getReply (output) / ${reply}\n\n`)
            }else{
                console.log(`Engine::getReply (output from cosine matching) / ${reply}\n\n`)
            }
        }else{
            console.log(`Engine::getReply (output from pattern matching) / ${reply}\n\n`)
        }

        return reply
    }


}