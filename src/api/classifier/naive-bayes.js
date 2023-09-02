// Multinomial Naive Bayes
export default class NaiveBayes{

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


        // stores the term frequency within the class
        this.class_term_frequency_map = {}
    }

    /**
     * data passed here requires the variable data and class
     * such as 
     * let input = { data: input_data , class: input_class } 
     * 
     * @param {data, class} trainingData 
     * @returns 
     */
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
                this.class_terms[td_class].push()
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
     
    
    }

    // reference
    // https://www.youtube.com/watch?v=km2LoOpdB3A&ab_channel=RafaelMerinoGarc%C3%ADa
    compute_term_likelihood(term,category) {


        let term_vector = this.class_terms[category]

        // if ( term in class_terms ) then 
        //      countwc = term_vector.filter(e=>e==term).length
        // else 
        //      countwc = 0


        let tf = this.  [category][term] 
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

        let classes = Object.keys(this.class_terms)
        
        // // set environment fo example english = {}
        classes.forEach(_class=>{
            this.class_term_frequency_map[_class] = {}
            let shallow_reference = this.class_terms[_class]

            shallow_reference.forEach(term=>{
                // term count
                let term_count = shallow_reference.filter(e=> e == term).length
                this.class_term_frequency_map[_class][term] = term_count
            })
            
        })


        // compute likelihood

        // classes.forEach(_class=>{
        //     console.log(`Term Probability Lang , `, _class)
        //     console.log(this.classTermProbabilityMap[_class])
        // })
    }

    getPredictionOrder(data){
        let term_vector = data.split(/\s+/)

        // console.log(`NaiveBayes::Predict (input) / ${data}`)

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

            // the default setup is to multiply
            let probability = prior * term_product

            // now we apply the log trick
            prior = Math.log(this.prior_probabilities[item_class])
            let term_sum = 0
            term_vector.forEach(term=>{
                // console.log(`\t${term} >> ${this.compute_term_likelihood(term,item_class)}`)
                term_sum += Math.log(
                    this.compute_term_likelihood(term,item_class)
                )
            })

            probability += term_sum

            // LETS HIDE THIS FOR NOW THIS SHOWS THE SUMMARY
            // console.log(`Probability [${item_class}]: ${probability}`)

            results[item_class] = probability
            pool.push({
                class: item_class,
                probability: probability
            })
        })

        // scan for the max value
        let argmax_value = pool[0]
        for ( let i = 1 ; i < pool.length ; i++){
            let current = pool[i]
            if ( current.probability > argmax_value.probability ){
                argmax_value = current
            }
        }

        pool.sort((a,b)=>{
            return b[1] - a[1]
        })

        // console.log("NaiveBayes:: Showing Probability Order of Dimensions ")
        // pool.forEach(dim=>{
        //     console.log(`\tDimension [${dim.class}] - Probability[${dim.probability}] `)
        // })
        return pool
    }

    predict(data){
        
        let term_vector = data.split(/\s+/)

        // console.log(`NaiveBayes::Predict (input) / ${data}`)

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

            // the default setup is to multiply
            let probability = prior * term_product

            // now we apply the log trick
            prior = Math.log(this.prior_probabilities[item_class])
            let term_sum = 0
            term_vector.forEach(term=>{
                // console.log(`\t${term} >> ${this.compute_term_likelihood(term,item_class)}`)
                term_sum += Math.log(
                    this.compute_term_likelihood(term,item_class)
                )
            })

            probability += term_sum

            // LETS HIDE THIS FOR NOW THIS SHOWS THE SUMMARY
            // console.log(`Probability [${item_class}]: ${probability}`)

            results[item_class] = probability
            pool.push({
                class: item_class,
                probability: probability
            })
        })

        // scan for the max value
        let argmax_value = pool[0]
        for ( let i = 1 ; i < pool.length ; i++){
            let current = pool[i]
            if ( current.probability > argmax_value.probability ){
                argmax_value = current
            }
        }

        // console.log(`NaiveBayes::Predicted based on argmax: ${argmax_value.class}`)
        return argmax_value.class
    }

    getVocabulary(){
        return this.vocabulary
    }

    get(){
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
                return this.vocabulary
            },
            vocabularyWithUnderscores:()=>{
                let vocab = this.vocabulary.filter((word)=>{
                    return word.includes('_')
                })
                return vocab
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
            class_term_probability_map: ()=>{
                console.log("Class Term Probability Map")
                console.log(this.class_term_frequency_map)
            }
        }
    }
}


// NODE JS TESTING UNCOMMENT
// WATCH THIS REFERENCE https://www.youtube.com/watch?v=km2LoOpdB3A
/**
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


//TEST SET 
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

 */