import { DICTIONARY } from "@/api/config/dictionary"

export const showPreTransformedRules =(lang,rules)=>{
    
    rules.forEach(rule=>{
        let patterns = rule.pattern
        
        // if ( control-- > 0 ){
        //     console.log('Before::')
        //     console.log('Patterns:: ',patterns )
        // }

        patterns.forEach((p)=>{

            p = p.toLowerCase()
            p = p.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g,' ')
            p = removeRedundantSpaces(p)
                
            
            p.split(' ').forEach(word=>{
                let sub = DICTIONARY.getSubstitute(word)
                if ( sub != null ){
                    const regex = new RegExp("\\b" + word + "\\b", "g");
                    p = p.replace(regex,sub)
                }
            })

            // if ( control > 0 ){
            //     console.log('After Substitution::')
            //     console.log('Patterns:: ', patterns[index] )
            // } 

        })
        
    })
    
      
    console.log(`Engine::showPreTransformedRules (start) Lang:: ${lang}`)
    console.log(rules)
    console.log(`Engine::showPreTransformedRules (end)`)

    
}


export const removeRedundantSpaces = (str)=>{
    str = str.replace(/\s+/g,' ')
    str =  str.replace(
        /(^\s+|\s+$)|\s+/g, 
        function (match, leadingTrailing, duplicate) {
            if (leadingTrailing) {
                return '';
            } else if (duplicate) {
                return ' ';
            }
        }
    );

    return str
}

export const transformWildcards = (str)=>{
    //replace * to accept any character
    str = str.replace(/\s/igm, '')
    // str = str.replace(/[\*]/g, '(.*)')
    str = str.replace(/[\*]/g, '(.*)')
    // str = str.replace("*", '(.*)')
          
    //replace spaces such to fix space between 
    // str = str.replace(/\s/igm, '(\\s*)')
    // str = removeRedundantSpaces(str)
    // str = str.replace(/\s/igm, '(.*)')
    //enclose for strict  
    return  `^${str}$`
    // return  `${str}`
  }