import { DICTIONARY } from "./config/dictionary"

export const showPreTransformedRules =(lang,rules)=>{
    // let list = []
    // rule.forEach(r=>{
    //     let item = r
    //     let pattern = item.pattern
    //     pattern.split(' ').forEach(word=>{
    //         let sub = DICTIONARY.getSubstitute(word)
    //         if ( sub != null ){
    //             const regex = new RegExp("\\b" + word + "\\b", "g");
    //             item.pattern = item.pattern.replace(regex,sub)
    //         }
    //     })
        
    //     list.push(item)
    // })

    let control = 20
    
    rules.forEach(rule=>{
        let patterns = rule.pattern
        
        // if ( control-- > 0 ){
        //     console.log('Before::')
        //     console.log('Patterns:: ',patterns )
        // }

        patterns.forEach((p,index)=>{

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

