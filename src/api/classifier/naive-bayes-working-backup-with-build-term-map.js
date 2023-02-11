// Multinomial Naive Bayes
// export default class NaiveBayes{
class NaiveBayes{

    constructor(){
        // You can show this object later
        // this.trainingData = []

        this.vocabulary = []

        // refers to the ratio of documents of type A (or b or c...) 
        // over the total number of documents 
        this.prior_probabilities = {}        

        //store class frequencies
        this.class_frequencies = {}

        // en: [ a, b, c ] fi: [ a, b, c]
        this.class_terms = {}

        // store likelihoods for faster computation
        // if item not in class make it zero
        this.class_term_likelihood = {}

        // stores the term frequency within the class
        this.classTermProbabilityMap = {}
    }

    // accept array
    // data must be cleaned first
    train(trainingData){


        // console.log(`Training data recieved: ${JSON.stringify(trainingData)}`)
        // will only work if training data is array
        if ( !Array.isArray(trainingData) ) return


        // console.log("IM HERE")
        trainingData.forEach(val=>{

            // console.log(`NB trianing data: ${JSON.stringify(val)}`)

            let td_class = val.class
            
            // creat class if not present
            if ( !(td_class in this.class_terms) ){
                this.class_terms[td_class] = []
                this.class_term_likelihood[td_class] = []
            }


            // You can show this object later
            // store training data individually for each iteration
            // this.trainingData.push(val)

            // split into term vector to build vocabulary
            let term_vector = val.data.split(/\s+/)

            // push temrs into vector
            term_vector.forEach(term=>{
                
                // push term into vocabulary
                if ( !(this.vocabulary.includes(term)) ){
                    this.vocabulary.push(term)
                }

                // push term into class 
                this.class_terms[td_class].push(term)
            })

            //store class frequencies of class in the document
            let item_class = val.class
            if ( item_class in this.class_frequencies ){
                this.class_frequencies[item_class] +=  1
            }else{
                this.class_frequencies[item_class] = 1
            }

            
        })

        //compute prior probabilities
        for ( let item_class in this.class_frequencies ){
            let frequency = this.class_frequencies[item_class]
            let probability = frequency/trainingData.length
            this.prior_probabilities[item_class] = probability
        }
     
        // compute prior conditional probabilities of the terms
        // trainingData.forEach(td=>{
        //     let term_vector = td.data.split(/\s+/)
        //     let td_class = td.class
        //     term_vector.forEach(term=>{
        //         this.class_term_likelihood[td_class].push({
        //             term: term,
        //             likelihood: this.compute_term_likelihood(term,td_class)  
        //         })
        //     })
        // })
    }

    // reference
    // https://www.youtube.com/watch?v=km2LoOpdB3A&ab_channel=RafaelMerinoGarc%C3%ADa
    compute_term_likelihood(term,category) {

        let term_vector = this.class_terms[category]

        // if ( term in class_terms ) then 
        //      countwc = term_vector.filter(e=>e==term).length
        // else 
        //      countwc = 0

        // console.log("Categories: ",this.classes)
        // console.log("Checking category: ", category)
        // console.log("Checking term: ", term)
        // count how many times does "term exist in category"


        // let storedFrequency = this.classTermProbabilityMap[category][term] 
        // if ( storedFrequency ){
        //     countwc = this.classTermProbabilityMap[category][term]
        // }else{
        //     countwc=0
        // }

        let tf = this.classTermProbabilityMap[category][term] 
        let countwc = tf ? tf : 0
         
        // laplace factor
        let a = 1

        // since this is an array
        let countc = this.class_terms[category].length
        
        //get length of array
        let V = this.vocabulary.length

        // p(w|c) = (count(w,c)+a)/(count(c)+a|V|)
        // where a = 1
        let likelihood = (countwc + a)/(countc + (a * V))
        // console.log(`P(${term}|${category}) = ${likelihood}`)
        return likelihood

    }


    buildTermProbabilityMap(){
        console.log('Building Term Probability Map')

       

        let classes = Object.keys(this.class_terms)
        
        // // set environment fo example english = {}
        classes.forEach(_class=>{
            this.classTermProbabilityMap[_class] = {}
            let shallow_reference = this.class_terms[_class]

            shallow_reference.forEach(term=>{
                // term count
                let term_count = shallow_reference.filter(e=> e == term).length
                this.classTermProbabilityMap[_class][term] = term_count
            })
            
        })


        // compute likelihood

        // classes.forEach(_class=>{
        //     console.log(`Term Probability Lang , `, _class)
        //     console.log(this.classTermProbabilityMap[_class])
        // })
    }


    predict(data){
        
        let term_vector = data.split(/\s+/)

        console.log(`predicting: ${term_vector}`)

        let results = {}
        let pool = []

        let classes = Object.keys(this.class_terms)
        classes.forEach(item_class=>{
            
            let prior = this.prior_probabilities[item_class]
            let term_product = 1
            // console.log(`\tPrior<< ${prior}`)
            term_vector.forEach(term=>{
                // console.log(`\t${term} >> ${this.compute_term_likelihood(term,item_class)}`)
                term_product *= this.compute_term_likelihood(term,item_class)
            })

            let probability = prior * term_product
            console.log(`Probability [${item_class}]: ${probability}`)

            results[item_class] = probability
            pool.push({
                class: item_class,
                probability: probability
            })
        })

        // console.log(`Da>> ${pool}`)

        // scan for the max value
        let biggest = pool[0]
        for ( let i = 1 ; i < pool.length ; i++){
            let current = pool[i]
            if ( current.probability > biggest.probability ){
                biggest = current
            }
        }

        console.log(`Predicted Language for ${JSON.stringify(data)} is ${biggest.class}`)
        return results
    }

    print(){
        console.log("print")
        return{
            training_data: ()=>{
                console.log("Training Data")
            },
            vocabulary: ()=>{
                console.log("Vocabulary Property")
                console.log(`Total vocabulary: ${this.vocabulary.length}`)
                console.log(this.vocabulary)
                // return this.vocabulary.length
            },
            prior_probabilities: ()=>{
                console.log("Prior probabilities")
                console.log(this.prior_probabilities)
            },
            classes: ()=>{
                console.log("Classes")
                console.log(Object.keys(this.class_frequencies))
            },
            class_frequencies: ()=>{
                console.log("Class Frequencies")
                console.log(this.class_frequencies)
            },
            class_terms: ()=>{
                console.log("Class Terms")
                console.log(this.class_terms)
            },
            class_term_likelihood: ()=>{
                console.log("Class Term Likelihoods")
                console.log(this.class_term_likelihood)
            },
            class_term_probability_map: ()=>{
                console.log("Class Term Probability Map")
                console.log(this.classTermProbabilityMap)
            }
        }
    }
}


// For NodeJS
//sample training data
let trainingData = [
    {data: "chinese beijing chinese", class: "c"},
    {data: "chinese chinese shanghai",class: "c"},
    {data: "chinese macao", class: "c"},
    {data: "tokyo japan chinese", class: "j"},
]

let testData = "chinese chinese chinese tokyo japan"


let nb = new NaiveBayes()
nb.train(trainingData)
nb.buildTermProbabilityMap()
// nb.print().training_data()
// nb.print().vocabulary()

// nb.print().prior_probabilities()
// nb.print().class_frequencies()
// nb.print().classes()
// nb.print().class_terms()
nb.predict(testData)


/**TEST SET */
// // nb.compute_term_likelihood("chinese","c")
// console.log(`Term likelihood of chinese of class c`, nb.compute_term_likelihood("chinese","c") )
// // nb.compute_term_likelihood("tokyo","c")
// console.log(`Term likelihood of tokyo of class c`, nb.compute_term_likelihood("tokyo","c") )
// // nb.compute_term_likelihood("japan","c")
// console.log(`Term likelihood of japan of class c`, nb.compute_term_likelihood("japan","c") )
// // nb.compute_term_likelihood("japan","c")
// console.log(`Term likelihood of japan of class j`, nb.compute_term_likelihood("japan","j") )
// // nb.compute_term_likelihood("macao","c")
// console.log(`Term likelihood of macao of class c`, nb.compute_term_likelihood("macao","c") )
// // nb.compute_term_likelihood("hello","c")
// console.log(`Term likelihood of hello of class c`, nb.compute_term_likelihood("hello","c") )

// let res  = nb.predict(testData)
// console.log("Result vector: " + JSON.stringify(res))

// nb.print().class_term_likelihood()