import NaiveBayes from "@/api/classifier/naive-bayes"


export default class DomainClassifier extends NaiveBayes{

    constructor(){

        super()

        // annotated
        this.documents = []

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
            

            // this fixes the pattern error
            // since we are attempting to separate those with wildcard * and those without
            // if ( !doc.contains("*") ) {

                // data clearning 
                // step1 replace non-word with space
                doc = doc.replace(/\W/g, " ").replace(/\s\s+/g, ' ')
                
                // step2 lowercase to reduce reduncant
                doc = doc.toLowerCase()

                // step3 is to ignore the
                let data = { data: doc, class: lang }
                
                this.documents.push(data)
                
                // train only works if its array
                // so lets twap this with array
                super.train([data])
            // }


        }

        rules.forEach((rule, index) => {
            // access patters
            let patterns = rule.pattern
            
            // if (patterns != undefined ) {
                patterns.forEach(insertCallback)
            // }
        })

    }

    buildTermProbabilityMap(){
        super.buildTermProbabilityMap()
    }

    getPrediction(msg){
        // find max
        return super.predict(msg)
    }


    printDocuments(){
        let size = this.documents.length
        console.log(`Printing Documents (size: ${size})`)
        
        let strrep = ''
        this.documents.forEach((docs,index)=>{
            let d = `${index},${docs.class},${docs.data}`
            // corpus.push(d)
            strrep += `${d}\n`
        })
        console.log(strrep)
    }

    getVocabulary(){
        // call super 
        return super.getVocabulary()
    }



    serialize(){
        
    }
}