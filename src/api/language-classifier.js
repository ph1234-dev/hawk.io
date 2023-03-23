import NaiveBayes from "./classifier/naive-bayes"


class AnnotatedDocument {

    constructor(data,lang){
        this.data = data
        this.class = lang
    }
}

export default class LanguageClassifier{

    constructor(){

        this.nb = new NaiveBayes()

        this.classes = []

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


            let data = new AnnotatedDocument(
                doc,
                lang
            )

            // 
            this.documents.push(data)
            
            // train only works if its array
            // so lets twap this with array
            this.nb.train([data])

            // console.log(`Training Data: ${JSON.stringify(cluster)}`)
        }

        rules.forEach((rule, index) => {
            // access patters
            let patterns = rule.pattern
            patterns.forEach(insertCallback)

            // access responses
            let responses = rule.response
            responses.forEach(response=>{
                let splittedSentences = response.split(".")
                splittedSentences.forEach(insertCallback)
            })
                // this.document.responses.push(response)
        })

    }


    buildTermProbabilityMap(){
        this.nb.buildTermProbabilityMap()
    }

    getPrediction(msg){
        // find max
        return this.nb.predict(msg)
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


    printClassifierPropertyValues(){
        console.log("Attemptin to print classifier properties")
        this.nb.print().vocabulary()
        this.nb.print().class_terms()
    }
}