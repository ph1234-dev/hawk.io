import Blackbox from '@/api/configuration/blackbox'
import {dictionary} from '@/api/substitutions/dictionary'
// import { v1_substitution_tests_cases } from './tests/v1'
import { testCaseForDiarrhea } from './tests/v1/diarrhea'

import * as rulesDiarrhea from '@/api/rules/diarrhea/rules-diarrhea'

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
            ENG: [].concat(rulesDiarrhea.diarrheaEngRules,influenzaEngRules),
            FIL: [].concat(rulesDiarrhea.diarrheaFilRules,influenzaFilRules),
            MAG: [].concat(rulesDiarrhea.diarrheaMagRules,influenzaMagRules)
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
        
        // stores the substitutions
        this.lexicon = {}


        this.initializeLanguageClassifier()
        this.initializeDomainClassifier()

        // this.getReply("magkano ba ang citirezine")
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
        // this.getReply("tell me the what is the proper way of taking antihistamines")
        // this.getReply("tell me the side effects of antihistamines")
        // this.getReply("how much does lozenges cost")

        // this.testSubstitutions("citerizine")

        this.executeTestCases()
    }

    executeTestCases(){
        console.log('Executing Test Cases')
        let tests = [].concat(testCaseForDiarrhea)

        tests.forEach(test=>{
            this.getReply(test)
        })

    }

    testSubstitutions(word){
        let subs = dictionary.getSubstitute(word)
        console.log(`Substitute: ${word} to ${subs}`)
    }

    // initializeSubstitutions(){

    //     let build = (list) =>{

    //         list.forEach((lexeme)=>{

    //             let terms = lexeme.terms
    //             lexeme.terms = terms.map(word=>word.toLowerCase()) 
    //             lexeme.substitute = lexeme.substitute.toLowerCase()

    //             if ( lexeme.substitute in this.lexicon ){
    //                 // console.log('\t\tShould Be Appending: ', lexeme.terms)

    //                 this.lexicon[lexeme.substitute].concat(lexeme.terms)
    //             }else{
    //                 this.lexicon[lexeme.substitute] = [].concat(lexeme.terms)
    //             }
    //             // console.log(`\t${lexeme.substitute} - ${substitutes}`)
    //             // table.push([lexeme.substitute,lexeme.terms.toString()])
    //         })

    //     }

    //     build(substitutionsGeneric)
    //     build(substitutionsUnderscored)

    //     this.lexicon = this.lexicon.sort()

        
    //     console.log(`Lexicon Substitutes`)
    //     let table = []

    //     for( let lexeme in this.lexicon ){
    //         // console.log(lexeme.toString(),)
    //         table.push([lexeme,this.lexicon[lexeme].toString()])
    //         // table.push([lexeme.substitute,lexeme.terms])
    //     }

    //     console.table(table)

        
    // }


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

        // this.classifierLanguage.printVocabularyWithUnderscores()

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


        // // SHOWS THe vocabulary
        // let vocab = []
        // Object.keys(this.RULES_DIMENSION_CLASSIFIERS)
        //     .forEach(lang=>{
        //         // console.log(lang)
        //         let words = this.RULES_DIMENSION_CLASSIFIERS[lang].getVocabulary()
        //         for (let word of words){
        //             if ( !vocab.includes(word) &&
        //                 word.length > 3)
        //                 vocab.push(word)
        //         }
        // })
        // vocab = vocab.sort()
        // console.log("Vocabulary Found\n",vocab)
    }


    async getLanguage(msg) {
        return this.classifierLanguage.getPrediction(msg)
    }


    // getSubstitute(token){
    //     let replacement = null
        
    //     for ( let keyword in this.lexicon ){
           
    //         let lexeme = this.lexicon[keyword]
    //         let potentialSubstitutes = lexeme
    //         // console.log(`\nTesting Key: `,keyword)
    //         // console.log(`Testing Substitutes\n`,potentialSubstitutes)

    //         let broken = false

    //         for ( let i = 0 ; i < potentialSubstitutes.length; i++){

    //             let term = potentialSubstitutes[i]
    //             if ( token.match(term) ){
    //                 replacement = keyword
    //                 // console.log(`<< Testing Substitutions: ${token} replaced to ${replacement}`)
    //                 return replacement
    //                 // broken = true
    //                 // break
    //             }

    //         }

    //         // if ( broken) break

    //     }

    //     return replacementlanguage
    // }

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

        console.log("\nTest Case:: ", msg)
        let reply = null

        // step1 and step2
        // trimmed message
        let trimmed = msg.toLowerCase().replace(/[^\s\w]/g," ").trim()

        // step 3rebuild string through edit distance
        let tokens = trimmed.split(' ')


        // log:: storing token
        let replacements = {}
        
        // console.log(`Engine::getReply [Edit Distance::${distance}] -> From ${token} to ${word}`)

        tokens.forEach(token=>{

            for ( let i = 0 ; i < this.spellingArray.length; i++ ){

                let word = this.spellingArray[i]
                let distance = damerauLevenshteinDistance(token,word) 
                // we only allow up to 3 edits to correct

                if ( distance <= 2 && token != word){
                    replacements[token] = word
                    trimmed = trimmed.replace(token,word)
                }

            }

        })
        

        // 
        let cleaned = trimmed

        
        tokens = msg.split(' ')

        tokens.forEach(token=>{
            
            let word = dictionary.getSubstitute(token)

            if ( word != null ){
                // console.log('>> Testing: ',token, ' replace to', word )
                cleaned = cleaned.replace(token,word)
            }

        })

        // reconstructed message
        let reconstructed = cleaned
        

        // summary start
        console.log(`Engine::getReply [Raw Text] - ${msg}`)
        console.log(`Engine::getReply [Cleaned Message] - ${cleaned}`)
        for ( let word in replacements ){
            console.log(`\tFrom ${word} to ${replacements[word]}`)
        }
        console.log(`Engine::getReply [Reconstructed] - ${reconstructed}`)
        // summary end

        // step 5
        let lang = this.classifierLanguage.getPrediction(reconstructed)
        
        console.log(`Engine::getReply [Language Predicted] - ${lang}`)
        // console.log(`Engine::getReply / msg == ${msg}`)

        // IMPORTANT TASK
        // get the ranking order and iterate through it

        // step 6 
        // select which selfcare dimension ranks higher

        // returns an array
        let searchOrder = this.RULES_DIMENSION_CLASSIFIERS[lang].getPredictionOrder(reconstructed)


        // let dimensionScanned = [dimension]

        let target = null

        for ( let dimension of searchOrder){
            target = dimension.class
            reply = this.memory[lang][target].getReplyUsingPatternMatching(reconstructed)
            if (reply != null) {
                break;
            }
        }

        console.log(`Engine::getReply [Attempting Pattern Matching]`)
        console.log(`\tTarget Dimension - ${target}`)
        console.log(`\tTarget Response  - ${reply}`)
        // this.memory[lang][target].getReplyUsingBM25(reconstructed)

        if (reply == null) {
            console.log(`Engine::getReply [Attempting Cosine Similarity]`)
            
            let similarityScorePerDimension = []
            for ( let dimension of searchOrder){
                let target = dimension.class
                similarityScorePerDimension.push(this.memory[lang][target].getReplyUsingCosineSimilarity(reconstructed)) 
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
            }
            
            console.log(`Engine::getReply [Cosine Similarity Response] - ${reply}\n`)
        
        }else{

            console.log(`Engine::getReply [Retrieving pattern matching] - ${reply}\n`)
        
        }

        return reply
    }


}