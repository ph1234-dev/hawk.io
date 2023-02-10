import Blackbox from './engine/blackbox'
import NaiveBayes from './naive-bayes'
import {
    diarrheaEngRules,
    diarrheaFilRules,
    diarrheaMagRules 
} from './rules/diarrhea/rules-diarrhea'

import {
    influenzaEngRules,
    influenzaFilRules,
    influenzaMagRules 
} from './rules/influenza/rules-influenza'


export default class Engine{

    constructor(){
        this.nb = new NaiveBayes() 
        this.langSupported = ['eng','fil','mag']
        this.memory = {}
        
        // 
        this.langSupported.forEach(lang=>{
            this.memory[lang] = new Blackbox()
        })

        console.log(`Starting Engine`)
        
        // load diarrhea rules
        let engMemory = this.memory['eng']
        engMemory.store().memories(diarrheaEngRules)
        engMemory.store().memories(influenzaEngRules)
        engMemory.transformReferences()
        engMemory.sortReferences()

        let filMemory = this.memory['fil']
        filMemory.store().memories(diarrheaFilRules)
        filMemory.store().memories(influenzaFilRules)
        filMemory.transformReferences()
        filMemory.sortReferences()

        
        let magMemory = this.memory['mag']
        magMemory.store().memories(diarrheaMagRules)
        magMemory.store().memories(influenzaMagRules)
        magMemory.transformReferences()
        magMemory.sortReferences()

    }

    getReply(msg){
        let reply = `Unimplemented: Engine reply for msg >> ${msg}`
        reply = this.memory['eng'].retrieveMemory(msg)
        return reply
    }

    // to reduce the features
    // how about we remove common words that
    // occurs in english/filipino/maguindanaon
    // so that we are only left with distinct words
    // that are indicative 
    // if this happens we dont even have to use
    // machine learning perhaps

    // then maybe we just have to do voting mechanism
    // to identify as majority rules
    // it may be an overkill to use naive bayes
    
    // remember we are only removing features
    // that exist in eng, fil, mag
    


}