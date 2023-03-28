import NaiveBayes from "@/api/classifier/naive-bayes"

export default class LanguageClassifier extends NaiveBayes{

    constructor(){
        super()
        
        // annotated
        this.documents = []

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
            
            this.documents.push(data)
            
            // train only works if its array
            // so lets twap this with array
            super.train([data])
            // console.log(`Training Data: ${JSON.stringify(cluster)}`)
        }

        rules.forEach((rule, index) => {
            // access patters
            let patterns = rule.pattern
            patterns.forEach(insertCallback)

            // access responses
            let responses = rule.response
            // console.log(`Responses: ` , responses)
            responses.forEach(response=>{
                let splittedSentences = response.split(".")
                splittedSentences.forEach(insertCallback)
            })
                // this.document.responses.push(response)
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
        super.print().vocabulary()
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
}