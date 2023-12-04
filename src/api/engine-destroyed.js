import {Blackbox,WildcardBlackbox} from '@/api/config/blackbox'
import {DICTIONARY} from '@/api/config/dictionary'
// import {testCaseForDiarrhea, testCaseForInfluenza } from '@/api/tests/v2/cases'
import { VOCABULARY } from '@/api/config/archive.js'

import { showPreTransformedRules, removeRedundantSpaces} from './engine-utils.js'

import {testData} from "@/api/tests/pre_release/test1"


import {transFormedEnglishRules} from './rules_pre_transformed/eng.js'
import {transFormedMaguindanaonRules} from './rules_pre_transformed/mag.js'
import {transFormedFilipinoRules } from './rules_pre_transformed/fil.js'


import { eng as genericEngRules } from './rules/generic/eng.js'
import { fil as genericFilRules } from './rules/generic/fil.js'
import { mag as genericMagRules } from './rules/generic/mag.js'

import {
    diarrheaEngRules,
    diarrheaFilRules,
    diarrheaMagRules
} from './rules/diarrhea/rules-diarrhea.js'
import {
    influenzaEngRules,
    influenzaFilRules,
    influenzaMagRules
} from './rules/influenza/rules-influenza.js'


import {weight_classifier_langauge} from '@/api/weights/weights-langauge-classifier'
import {weight_classifier_dimension } from '@/api/weights/weights-dimension-classifier.js'
import {weight_wildcard_blackbox} from '@/api/weights/weights-wildcards-blackbox.js'

import LanguageClassifier from '@/api/classifier/language-classifier'  
import DomainClassifier from '@/api/classifier/domain-classifier'

import {damerauLevenshteinDistance} from '@/api/config/metrics'
import {COMMON_MISPELLED_WORDS} from '@/api/rules/reserved-words'
import {DOMAIN_ENTITIES} from '@/api/rules/priority-words'

export default class Engine {

    constructor() {

        
        // pre transformation process//
        // let transform = {
        //     ENG: [].concat(diarrheaEngRules,influenzaEngRules,genericEngRules),
        //     FIL: [].concat(diarrheaFilRules,influenzaFilRules,genericFilRules),
        //     MAG: [].concat(diarrheaMagRules,influenzaMagRules,genericMagRules)
        // }


        // showPreTransformedRules('ENG',[].concat(diarrheaEngRules,influenzaEngRules,genericEngRules))
        // showPreTransformedRules('FIL',[].concat(diarrheaFilRules,influenzaFilRules,genericFilRules))
        // showPreTransformedRules('MAG',[].concat(diarrheaMagRules,influenzaMagRules,genericMagRules))

        //end transformation

     
        // this.LANGUAGE_RULES = {
        //     ENG: [].concat(diarrheaEngRules,influenzaEngRules,genericEngRules),
        //     FIL: [].concat(diarrheaFilRules,influenzaFilRules,genericFilRules),
        //     MAG: [].concat(diarrheaMagRules,influenzaMagRules,genericMagRules)
        // }



        this.RULES = {
            ENG: [].concat(diarrheaEngRules,influenzaEngRules,genericEngRules),
            FIL: [].concat(diarrheaFilRules,influenzaFilRules,genericFilRules),
            MAG: [].concat(diarrheaMagRules,influenzaMagRules,genericMagRules)
        }


        // remember dont use the the transformed rules when initializing the
        // wildcard archive
        // this.RULES = {
        //     ENG: [].concat(transFormedEnglishRules),
        //     FIL: [].concat(transFormedFilipinoRules),
        //     MAG: [].concat(transFormedMaguindanaonRules)
        // }

        // console.log(JSON.stringify(this.RULES["ENG"]))
        this.LANG = {
            ENG: 'eng',
            FIL: 'fil',
            MAG: 'mag'
        }

        // this is where we access the
        // memory[lang][domain]
        this.memory = {}
        
        // refer here
        // https://selfcarejournal.com/article/the-self-care-matrix-a-unifying-framework-for-self-care/
        // seven pillars    
        this.SELFCARE_DIMENSIONS = {
            1: "Knowledge and health literacy",
            2: "Mental welbeing, self-awarenss and Agency",
            3: "Physical Activity",
            4: "Healthy Eating",
            5: "Risk Avoidance",
            6: "Good Hygeine",
            7: "Rational Use of Product and services"
        }
        
        
        /** STEP 1 */
        /** Language classification */
        // remember:: in buildLanguageClassifier you have invoked the buildtermprobability map
        // this.buildLanguageClassifier()
        // in the loading weights.. its a little different.. that's because
        // we assume the the weights are already build because we called the build langauge classifier beforehand

        this.classifierLanguage = new LanguageClassifier()
        this.classifierLanguage.loadWeights(
            weight_classifier_langauge.VOCABULARY,
            weight_classifier_langauge.PRIOR_PROBABILITIES,
            weight_classifier_langauge.CLASS_FREQUENCIES,
            weight_classifier_langauge.CLASS_TERMS,
            weight_classifier_langauge.CLASS_TERM_FREQUENCY_MAP
        )

        
        
        /** STEP 2 */
        /** Domain classification */
        // remember:: in buildLanguageClassifier you have invoked the buildtermprobability map
        // this.buildLanguageClassifier()
        // in the loading weights.. its a little different.. that's because
        // we assume the the weights are already build because we called the build langauge classifier beforehand
      

        this.RULES_DIMENSION_CLASSIFIERS = {
            ENG: new DomainClassifier(),
            FIL: new DomainClassifier(),
            MAG: new DomainClassifier(),
        }

        this.buildDomainClassifier()

        // this.RULES_DIMENSION_CLASSIFIERS["ENG"] = new DomainClassifier()
        // this.RULES_DIMENSION_CLASSIFIERS["ENG"].loadWeights(
        //     weight_classifier_dimension["ENG"]["vocabulary"],
        //     weight_classifier_dimension["ENG"]["prior_probabilities"],
        //     weight_classifier_dimension["ENG"]["class_frequencies"],
        //     weight_classifier_dimension["ENG"]["class_terms"],
        //     weight_classifier_dimension["ENG"]["class_term_frequency_map"]
        // )

        // this.RULES_DIMENSION_CLASSIFIERS["FIL"] = new DomainClassifier()
        // this.RULES_DIMENSION_CLASSIFIERS["FIL"].loadWeights(
        //     weight_classifier_dimension["FIL"]["vocabulary"],
        //     weight_classifier_dimension["FIL"]["prior_probabilities"],
        //     weight_classifier_dimension["FIL"]["class_frequencies"],
        //     weight_classifier_dimension["FIL"]["class_terms"],
        //     weight_classifier_dimension["FIL"]["class_term_frequency_map"]
        // )

        // this.RULES_DIMENSION_CLASSIFIERS["MAG"] = new DomainClassifier()
        // this.RULES_DIMENSION_CLASSIFIERS["MAG"].loadWeights(
        //     weight_classifier_dimension["MAG"]["vocabulary"],
        //     weight_classifier_dimension["MAG"]["prior_probabilities"],
        //     weight_classifier_dimension["MAG"]["class_frequencies"],
        //     weight_classifier_dimension["MAG"]["class_terms"],
        //     weight_classifier_dimension["MAG"]["class_term_frequency_map"]
        // )


        /** STEP 3 */
        /** Build memory*/

        // this.RULES = {
        //     ENG: [].concat(diarrheaEngRules,influenzaEngRules,genericEngRules),
        //     FIL: [].concat(diarrheaFilRules,influenzaFilRules,genericFilRules),
        //     MAG: [].concat(diarrheaMagRules,influenzaMagRules,genericMagRules)
        // }

        this.buildMemory()
        
        
        /** STEP 4*/
        /** Build wildcard blackbox*/
        this.RULES_WILDCARDS = {}
        this.buildWildcardBlackbox()



        // this.RULES_WILDCARDS["ENG"] = new WildcardBlackbox()
        // this.RULES_WILDCARDS["ENG"].loadWeights(
        //     weight_wildcard_blackbox["ENG"]["wildcardArchive"].forwardIndex,
        //     weight_wildcard_blackbox["ENG"]["wildcardArchive"].index,
        //     weight_wildcard_blackbox["ENG"]["wildcardArchive"].memory
        // ) 

        // this.RULES_WILDCARDS["FIL"] = new WildcardBlackbox()
        // this.RULES_WILDCARDS["FIL"].loadWeights(
        //     weight_wildcard_blackbox["FIL"]["wildcardArchive"].forwardIndex,
        //     weight_wildcard_blackbox["FIL"]["wildcardArchive"].index,
        //     weight_wildcard_blackbox["FIL"]["wildcardArchive"].memory
        // ) 
        
        // this.RULES_WILDCARDS["MAG"] = new WildcardBlackbox()
        // this.RULES_WILDCARDS["MAG"].loadWeights(
        //     weight_wildcard_blackbox["MAG"]["wildcardArchive"].forwardIndex,
        //     weight_wildcard_blackbox["MAG"]["wildcardArchive"].index,
        //     weight_wildcard_blackbox["MAG"]["wildcardArchive"].memory
        // ) 

        // set this to TRUE To show debug message
        // this is default for local tests
        // this.debug = false
        this.debug = true

        this.REPLY_THRESHOLD = .8   
        this.MAX_TOTAL_WORDS_OUTSIDE_DICTIONARY = 2

        // this.getReply("ano ang pwede mangyari sa tao pag mapabayaan nito ang sakit nyang trangkaso")

        // this.executeTestCasesWithError()
        // print dictionary terms
        // this.showDictionaryTerms()

        // this.executeTestCasesWithErrorDataSet10()
        // console.log(this.printWildCards('MAG'))
        // console.log(this.printWildCards('FIL'))
        // console.log(this.printWildCards('ENG'))

        // this.showTopicStatistics()
        // this.showAllPatternStatistics()
        // this.showAllDimensionStatisticsPerTopic()
        // this.showAllDimensionStatisticsPerDisease()

        // this.showLanguagePredictionStatistics()
        this.debug=false

        this.beginTest(testData)
        
    }


    beginTest(data){
        data.forEach(x=>{
            let output = this.getReply(x)
            console.log(`User Message: ${x}`)
            console.log(`Response: ${output.patternMatchingMethod}`)
            console.log(`Response: ${output.reply}\n\n`)
        })
    }


    showLanguagePredictionStatistics(){
        
        let predictions = []

        Object.keys(this.RULES).forEach(lang => {
            console.log(`Inserting Key:: ${lang}`)
            // total rules in this language

            let count = 1
            this.RULES[lang].forEach(rule=>{
                // do some clenaup first for all rules

                if ( count-- == 0 ){
                    return;
                }
                
                rule.pattern.forEach(pattern=>{

                    pattern = pattern.replace(/\W/g, " ").replace(/\s\s+/g, ' ').toLowerCase()
                    let predictedLanguage = this.getLanguage(pattern)
                    // console.log(`\tPrediction set:: ${lang} | ${predictedLanguage}`)

                    predictions.push({
                        "lang" : lang,
                        "predicted": predictedLanguage
                    })
    
                })


            })

        })


        //      en / fil / mag
        // eng  x
        // fil        x
        // mag              x

        let resultMatrix = []

        // row
        Object.keys(this.RULES).forEach(row=>{
            
            let rowValues = []
            Object.keys(this.RULES).forEach(col=>{
                let count = 0
                // count how many predictions that english such that they 
                // were originally english
                predictions.forEach(x=>{
                    
                    if ( row == x.lang ){
                        if ( col == x.predicted ){
                            count++
                        }
                    }
                
                })

                rowValues.push(count)
            })

            resultMatrix.push(rowValues)
        })

        // how many of the predictions were supposedly english but predicted filipiono
        let peek = (lang,pred)=>{
            console.log()
            let count =0
            predictions.forEach(x=>{
                if ( x.lang == lang ){
                    if ( x.predicted == pred ){
                        count++
                    }
                }
            })
            
            console.log(`Predictions:: There are  ${count} predictions that are supposedly [${lang}]but predicted as [${pred}] `)
        }


        
        console.log(`Classification Result Matrix`)
        console.log(`Total Rules To be Predicted:: `, predictions.length)
        console.table(resultMatrix)

        peek("ENG","ENG")
        peek("ENG","FIL")
        peek("ENG","MAG")
        peek("FIL","ENG")
        peek("FIL","FIL")
        peek("FIL","MAG")
        peek("MAG","ENG")
        peek("MAG","FIL")
        peek("MAG","MAG")
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

    
    getTestCases(){
        this.debug=false
        return [].concat(testCaseForDiarrhea,testCaseForInfluenza)
    }


    buildWildcardBlackbox(){

        Object.keys(this.RULES)
            .forEach(lang=>{
                let ruleSet = this.RULES[lang]
                let wildcards = new WildcardBlackbox()
                ruleSet.forEach(rule=>{
                    // returns all rules with asterisk , this means they are candidate for wildcard matching
                    
                    if ( Array.isArray(rule.pattern )){

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

        
        console.log(`Engine::Wildcard blackbox:: `)
        console.log(this.RULES_WILDCARDS)
    }

    buildLanguageClassifier() {

        console.log('Loading language classifier model')

        // USE THIS TO PREDICT THE LANGUAGE
        this.classifierLanguage = new LanguageClassifier()
        // STEP 1: LOAD DATASETS
        // STEP 2: TRAIN THE MODEL
        Object.keys(this.LANGUAGE_RULES).forEach(lang => {
            this.classifierLanguage.insertCluster(this.LANGUAGE_RULES[lang], lang)
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

        console.log(`Language Classifier::`)
        console.log(this.classifierLanguage)

    }

    buildDomainClassifier(){


        console.log('Loading domain classifier model')

        Object.keys(this.LANG)
            .forEach((lang,value)=>{

                // console.log(`\tLang - ${lang}`)
                // this.memory[lang] = {}

                // dimensions are the intentsor dimensions we need to perform the classification 
                Object.keys(this.SELFCARE_DIMENSIONS)
                    .forEach((dimension)=>{
                        
                        //  filter corresponding rules
                        let filtered = this.RULES[lang].filter(rule=>{
                            return rule.dimension == dimension
                        })

                        // if ( filtered.length > 0){
                        //     // console.log(`\t\tDimension - ${dimension} | ${this.SELFCARE_DIMENSIONS[dimension]}| ${filtered.length} cases\n\t\t\t${filtered}`)
                        //     let mem = new Blackbox()
                        //     mem.storeRules(filtered)
                        //     mem.sortReferences()
                        //     this.memory[lang][dimension] = mem
                        // }
                        //each language has 7 pillar classifiers
                        //THERE IS A PROBLEM HERE.. YOU SHOULD NOT BE TRAINING USING THE RESPONSES 
                        //YOU SHOULD ONLY TRAIN USING THE PATTERNS
                        this.RULES_DIMENSION_CLASSIFIERS[lang].insertCluster(filtered,dimension)
                        this.RULES_DIMENSION_CLASSIFIERS[lang].buildTermProbabilityMap()
                    })
        })



        console.log('Domain Classifier: ')
        console.log(this.RULES_DIMENSION_CLASSIFIERS)
    }


    buildMemory(){
        
        console.log('Loading Memory Model')

        Object.keys(this.LANG)
            .forEach((lang)=>{

                this.memory[lang] = {}

                // dimensions are the intentsor dimensions we need to perform the classification 
                Object.keys(this.SELFCARE_DIMENSIONS)
                    .forEach((dimension)=>{
                        
                        //  filter corresponding rules
                        let filtered = this.RULES[lang].filter(rule=>{
                            return rule.dimension == dimension
                        })

                        if ( filtered.length > 0){
                            // console.log(`\t\tDimension - ${dimension} | ${this.SELFCARE_DIMENSIONS[dimension]}| 
                            // ${filtered.length} cases\n\t\t\t${filtered}`)
                            let mem = new Blackbox()
                            mem.storeMemories(filtered)
                            mem.sortReferences()
                            this.memory[lang][dimension] = mem
                        }

                    })
        })



        console.log('Memory Model')
        console.log(this.memory)
    }

    // if this gets error later, add the uncomment the async
    // we edited this today november 7,2023 undo this if error
    // async getLanguage(msg) {
    getLanguage(msg) {
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
        let trimmed = removeRedundantSpaces(msg.toLowerCase())
        
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
        let reconstructed = removeRedundantSpaces(cleaned)

        
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

        let processedInput = removeRedundantSpaces(stopWordsRemovedInput)


        // returns an array
        let searchOrder = this.RULES_DIMENSION_CLASSIFIERS[lang].getPredictionOrder(processedInput)

        // this is the starting supposed to be
        let targetDimension = null

        // let searchDimension
        let targetRule = null
        
        let searchOrderDimensionResults = []

        let executeWildcardMatching = (str,lang,note="")=>{

            // console.error(`Engine::executewildcardMatching:: should begin `)
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
        allowBM25Matching = finalNormalizedInput.split(' ').length > 2 ? true: false

        // also make it an error if the user asks more than 2 sentences
        // say that they can only respond one at a time

        if ( allowBM25Matching ){


            // targetDimension = this.RULES_DIMENSION_CLASSIFIERS[lang].getPrediction(finalNormalizedInput)
            // let finding = this.memory[lang][targetDimension].getReplyUsingWeightedCosineSimilarity(finalNormalizedInput)
            
            // searchOrderDimensionResults.push({
            //     dimension: targetDimension,
            //     rawPattern: finding.rawPattern,
            //     pattern: finding.pattern,
            //     score: finding.score
            // })

            // targetRule = finding

            
            for (let dimension of searchOrder) {
                targetDimension = dimension.class

                let finding = this.memory[lang][targetDimension].getReplyUsingWeightedCosineSimilarity(finalNormalizedInput)
                // let finding = this.memory[lang][targetDimension].getReplyUsingCosineSimilarity(finalNormalizedInput)
                // let finding = this.memory[lang][targetDimension].getReplyUsingTFIDFCosineSimilarity(finalNormalizedInput)
                

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

            method = "Weighted Cosine Similarity/BM25 Lucene"
            // method = "Regular Cosine Similarity"
            // method = "TFIDF Cosine"

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
                // console.log(`Engine::getReply -> Should Execute Wildcard matching after Cosine Similarity
                //                 \n\tInput::${finalNormalizedInput}\n\tLength::${finalNormalizedInput.split(' ').length}`)
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

            // console.log(`Engine::getReply -> Should Execute Wildcard matching (no cosine matching since its direct)
            //                 \n\tInput::${finalNormalizedInput}\n\tLength::${finalNormalizedInput.split(' ').length}`)
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
