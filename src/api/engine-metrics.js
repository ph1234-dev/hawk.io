import { diarrheaEngRules } from "./rules/diarrhea/rules-diarrhea"
import { diarrheaEngRules } from "./rules/diarrhea/rules-diarrhea"
import { diarrheaMagRules } from "./rules/diarrhea/rules-diarrhea"
import { influenzaEngRules } from "./rules/influenza/rules-influenza"
import { influenzaFilRules } from "./rules/influenza/rules-influenza"
import { influenzaMagRules } from "./rules/influenza/rules-influenza"

export function showAllPatternStatistics(){

    let counter = (topics)=>{
        let count = 0
        topics.forEach(topic=>{

            if ( Array.isArray(topic.pattern) ){
                count +=topic.pattern.length
            }else{
                count++
            }
        })
        return count
    }

    let totalDiarrheaPatterns = {
        eng: counter(diarrheaEngRules),
        fil: counter(diarrheaFilRules),
        mag: counter(diarrheaMagRules),
    }

    let totalInfluenzaPatterns = {
        eng: counter(influenzaEngRules),
        fil: counter(influenzaFilRules),
        mag: counter(influenzaMagRules),
    }

    let totalGenericPatterns = {
        eng: counter(genericEngRules),
        fil: counter(genericFilRules),
        mag: counter(genericMagRules),
    }

    console.log(
        `Topic Patterns Defined:\n
            \tDiarrhea  - en [${totalDiarrheaPatterns.eng}]  , fil [${totalDiarrheaPatterns.fil}] , mag [${totalDiarrheaPatterns.mag}]
            \tInfluenza - en [${totalInfluenzaPatterns.eng}] , fil [${totalInfluenzaPatterns.fil}] , mag [${totalInfluenzaPatterns.mag}]
            \tGeneric   - en [${totalGenericPatterns.eng}] , fil [${totalGenericPatterns.fil}] , mag [${totalGenericPatterns.mag}]
            `)

}


export function showAllDimensionStatisticsPerDisease(){

    let diarrheaDimensionFrequencies ={
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0
    }
    
    let diarrhea = [].concat(diarrheaEngRules)
                .concat(diarrheaFilRules)
                .concat(diarrheaMagRules)

    diarrhea.forEach(topic=>{
        diarrheaDimensionFrequencies[topic.dimension] += 1 
    })

    
    
    let influenzaDimensionFrequencies ={
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0
    }
    
    let influenza = [].concat(influenzaEngRules)
                .concat(influenzaFilRules)
                .concat(influenzaMagRules)

    influenza.forEach(topic=>{
        influenzaDimensionFrequencies[topic.dimension] += 1 
    })

    


    let genericDimensionFrequencies ={
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0
    }
    
    let generic = [].concat(genericEngRules)
                .concat(genericFilRules)
                .concat(genericMagRules)

    generic.forEach(topic=>{
        genericDimensionFrequencies[topic.dimension] += 1 
    })

    
    console.log(`Dimension Frequencies: Diarrhea `)
    for ( let f in diarrheaDimensionFrequencies ){
        console.log(`\t[${f}] - ${diarrheaDimensionFrequencies[f]}`)
    }

    console.log(`Dimension Frequencies: Influenza `)
    for ( let f in influenzaDimensionFrequencies ){
        console.log(`\t[${f}] - ${influenzaDimensionFrequencies[f]}`)
    }
    
    console.log(`Dimension Frequencies: Generic `)
    for ( let f in genericDimensionFrequencies ){
        console.log(`\t[${f}] - ${genericDimensionFrequencies[f]}`)
    }
    // console.table(dimensionFrequencies)
}


export function showAllDimensionStatisticsPerTopic(RULES){

    let dimensionFrequencies ={
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0
    }

    // this.RULES.forEach(Object.keys())
    Object.keys(RULES)
        .forEach(lang=>{
            let topics = RULES[lang]
            topics.forEach(topic=>{
                if ( topic.dimension in dimensionFrequencies ){
                    dimensionFrequencies[topic.dimension] += 1
                }else{
                    console.log(`Undefined: ${lang}\n\t${topic.pattern}` )
                }
            })
        })
        
    console.log(`Topic Dimension Frequencies`)
    for ( let f in dimensionFrequencies ){
        console.log(`\t[${f}] - ${dimensionFrequencies[f]}`)
    }
    // console.table(dimensionFrequencies)
}


export function showTopicStatistics (){

    // console.log('Redundant')
    // Object.keys(this.RULES)
    //     .forEach(lang=>{
    //         let topics = this.RULES[lang]
    //         console.log(`->Lang: ${lang} | ${topics.length}`)
    //     })
    // console.log('End Redundant')


    let totalDiarrheaTopics = {
        eng: diarrheaEngRules.length,
        fil: diarrheaFilRules.length,
        mag: diarrheaMagRules.length
    }

    let totalInfluenzaTopics = {
        eng: influenzaEngRules.length,
        fil: influenzaFilRules.length,
        mag: influenzaMagRules.length
    }

    let totalGenericTopics = {
        eng: genericEngRules.length,
        fil: genericFilRules.length,
        mag: genericMagRules.length,
    }


    console.log(
        `Topic Contained Rules:\n
            \tDiarrhea  - en [${totalDiarrheaTopics.eng}]  , fil [${totalDiarrheaTopics.fil}] , mag [${totalDiarrheaTopics.mag}]
            \tInfluenza - en [${totalInfluenzaTopics.eng}] , fil [${totalInfluenzaTopics.fil}] , mag [${totalInfluenzaTopics.mag}]
            \tGeneric   - en [${totalGenericTopics.eng}] , fil [${totalGenericTopics.fil}] , mag [${totalGenericTopics.mag}]
            `)


}

