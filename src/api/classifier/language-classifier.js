import NaiveBayes from "@/api/classifier/naive-bayes"

export default class LanguageClassifier extends NaiveBayes{

    constructor(){
        super()
        
        // annotated
        // undo this:: we hide it this november 19
        // this.documents = []

        this.vocabulary = []

        // refers to the ratio of documents of type A (or b or c...) 
        // over the total number of documents 
        this.prior_probabilities = {}        

        //store class frequencies
        this.class_frequencies = {}

        // en: [ a, b, c ] fi: [ a, b, c]
        this.class_terms = {}


        // stores the term frequency within the class
        this.class_term_frequency_map = {}

        
    }

    loadWeights( 
        vocabulary,
        prior_probabilities,
        class_frequencies,
        class_terms,
        class_term_frequency_map
    ){
        this.vocabulary = vocabulary
        this.prior_probabilities = prior_probabilities
        this.class_frequencies = class_frequencies
        this.class_terms = class_terms
        this.class_term_frequency_map = class_term_frequency_map
    }


    insertCluster(rules,lang){

        let insertCallback = (doc)=>{

            // data clearning 
            // step1 replace non-word with space
            doc = doc.replace(/\W/g, " ").replace(/\s\s+/g, ' ')
            
            // step2 lowercase to reduce reduncant
            doc = doc.toLowerCase()

            // step3 is to ignore the

            let data = { data: doc, class: lang }
            
            
            // lets hide this - november 19 for optimization
            // this.documents.push(data)
            
            // train only works if its array
            // so lets twap this with array
            super.train([data])
            // console.log(`Training Data: ${JSON.stringify(cluster)}`)
        }

        rules.forEach((rule, index) => {
                
            // access patters
            let patterns = rule.pattern
            
            if (Array.isArray(patterns) ) {
                patterns.forEach(insertCallback)

                // access responses -- lets hide this for now
                // let responses = rule.response
                // // console.log(`Responses: ` , responses)
                // responses.forEach(response=>{
                //     let splittedSentences = response.split(".")
                //     splittedSentences.forEach(insertCallback)
                // })
                    // this.document.responses.push(response)
            
            }
        })

    }


    buildTermProbabilityMap(){
        super.buildTermProbabilityMap()
    }

    getPrediction(msg){
        return super.predict(msg)
    }


    printDocuments(){
        let size = this.documents.length
        console.log(`Language Identifier`)
        console.log(`Printing Documents (size: ${size})`)
        // this.documents.forEach((docs,index)=>{
        //     console.log(`${index},${docs.class},${docs.data}`)
        //     // console.log(`${JSON.stringify(docs)}`)
        // })
        
        let strrep = ''
        this.documents.forEach((docs,index)=>{
            let d = `${index},${docs.class},${docs.data}`
            // corpus.push(d)
            strrep += `${d}\n`
        })
        console.log(strrep)
    }

    printVocabulary(){
        super.get().vocabulary()
    }

    printVocabularyWithUnderscores(){
        let vocab = super.get().vocabularyWithUnderscores()
        console.log(`Vocabulary with underscores`)
        console.log(vocab)
    }

    /**
     * 
     * @param {input} input is an array
     */
    test(input){
        console.log('Language prediction Test')
        input.forEach(val=>{
            console.log('\tInput / ',val)
            console.log(`Predicting: ${val} as [${this.predict(val)}]`)
        })
    }


    toJSON(){
        
    }
}