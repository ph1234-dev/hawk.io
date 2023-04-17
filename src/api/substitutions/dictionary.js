import { substitutionsUnderscored } from "./underscored";
import { substitutionsGeneric } from "./generic";

class Dictionary{

    constructor(){
        this.lexicon = {}
        this.buildLexeme()
    }

    getSubstitute(token){
        
        if (token == undefined) return
        
        let replacement = null
        
        for ( let keyword in this.lexicon ){
           
            let lexeme = this.lexicon[keyword]
            let potentialSubstitutes = lexeme
            // console.log(`\nTesting Key: `,keyword)
            // console.log(`Testing Substitutes\n`,potentialSubstitutes)

            let broken = false

            for ( let i = 0 ; i < potentialSubstitutes.length; i++){

                let term = potentialSubstitutes[i]

                if (term == undefined) return

                // if ( token.match(`^${term}$`) ){
                if ( new RegExp(`^${term}$`).test(token) ){
                    replacement = keyword
                    // console.log(`<< Testing Substitutions: ${token} replaced to ${replacement}`)
                    return replacement
                    // broken = true
                    // break
                }

            }

            // if ( broken) break

        }

        return replacement
    }

    buildLexeme(){
        let build = (list) =>{

            list.forEach((lexeme)=>{

                let terms = lexeme.terms
                lexeme.terms = terms.map(word=>word.toLowerCase()) 
                lexeme.substitute = lexeme.substitute.toLowerCase()

                if ( lexeme.substitute in this.lexicon ){
                    // console.log('\t\tShould Be Appending: ', lexeme.terms)

                    this.lexicon[lexeme.substitute].concat(lexeme.terms)
                }else{
                    this.lexicon[lexeme.substitute] = [].concat(lexeme.terms)
                }
                // console.log(`\t${lexeme.substitute} - ${substitutes}`)
                // table.push([lexeme.substitute,lexeme.terms.toString()])
            })

        }

        build(substitutionsGeneric)
        build(substitutionsUnderscored)

        
        console.log(`Lexicon Substitutes`)
        let table = []

        for( let lexeme in this.lexicon ){
            // console.log(lexeme.toString(),)
            table.push([lexeme,this.lexicon[lexeme].toString()])
            // table.push([lexeme.substitute,lexeme.terms])
        }

        // console.table(table) 
    
    }
}


export const dictionary = new Dictionary ()
