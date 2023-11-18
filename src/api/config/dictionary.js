import { substitutionsUnderscored } from "@/api/rules/substitutions/underscored";
import { substitutionsGeneric } from "@/api/rules/substitutions/generic";
import { stopwords as eng} from "@/api/rules/stopwords/eng"
import { stopwords as fil} from "@/api/rules/stopwords/fil"
import { stopwords as mag} from "@/api/rules/stopwords/mag"

class Dictionary{

    constructor(){
        
        this.lexicon = {}
        this.buildLexeme()


        // build stopwords
        this.stopWords = [].concat(eng).concat(fil).concat(mag)

        console.log('dictionary::Constructor Total Stop Words: ', this.stopWords.length)
        console.log('dictionary::Constructor Eng Stop Words: ', eng.length)
        console.log('dictionary::Constructor Fil Stop Words: ', fil.length)
        console.log('dictionary::Constructor Mag Stop Words: ', mag.length)

    }

    isStopWord(word){

        // let exist = false
        // let len = this.stopWords.length
        // for ( let i = 0 ; i < len ; i++){
        //     let target = this.stopWords[i]
        //     const regex = new RegExp("\\b" + target + "\\b", "g");
        //     if ( regex.test(word) ){
        //         exist = true
        //         break;
        //     }
        // }   

        // return exist
        return this.stopWords.includes(word)
    }

    getSubstitute(token){
        
        if (token == undefined) return
        
        token  = token.trim()
        let replacement = null
        
        for ( let keyword in this.lexicon ){
           
            let lexeme = this.lexicon[keyword]
            let potentialSubstitutes = lexeme
            // console.log(`\nTesting Key: `,keyword)
            // console.log(`Testing Substitutes\n`,potentialSubstitutes)


            for ( let i = 0 ; i < potentialSubstitutes.length; i++){

                let term = potentialSubstitutes[i]

                if (term == undefined) continue

                const regexp = new RegExp(`\\b${term.trim()}\\b$`,"g")

                // if ( token.match(`^${term}$`) ){
                // console.log(`\tChecking for match:: ${term} ? `)
                // if ( regexp.match(token) ){
                
                if ( regexp.test(token) ){
                    replacement = keyword
                    return replacement
                }

            }


        }

        return replacement
    }

    testSubstitutions(token){
        
        console.log('Test  Keyword: ',token)
        if (token == undefined) return
        
        token = token.trim()
        let replacement = null
        
        for ( let keyword in this.lexicon ){
           
            let lexeme = this.lexicon[keyword]
            let potentialSubstitutes = lexeme
            //console.log(`\tLexeme: `,keyword)
            //console.log(`\t\tLexeme: `,lexeme)
            // console.log(`\tScanning Substitutes: `,potentialSubstitutes[i])

            for ( let i = 0 ; i < potentialSubstitutes.length; i++){
                let term = potentialSubstitutes[i]

                if (term == undefined) continue

                const regexp = new RegExp(`^${term.trim()}$`,"g")

                // if ( token.match(`^${term}$`) ){
                // console.log(`\tChecking for match:: ${term} ? `)
                // if ( regexp.match(token) ){
                if ( regexp.test(token) ){
                    replacement = keyword
                    console.log(`\tFound Replacement: /${token} replaced to ${replacement}`)
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

        // there was a problem here..

        let build = (list) =>{

            list.forEach((lexeme)=>{
                // console.log(`Word: ${lexeme.substitute}`)
                // console.log(`\tSubstitutes: ${lexeme.terms}`)

                let terms = lexeme.terms
                lexeme.terms = terms.map(word=>word.toLowerCase()) 
                lexeme.substitute = lexeme.substitute.toLowerCase()

                if ( lexeme.substitute in this.lexicon ){
                    // console.log('\tShould Be Appending: ', lexeme.terms)

                    this.lexicon[lexeme.substitute] = this.lexicon[lexeme.substitute].concat(lexeme.terms)
                    // console.log('\tUpdated List Should Be: ', this.lexicon[lexeme.substitute])
                }else{
                    this.lexicon[lexeme.substitute] = [].concat(lexeme.terms)
                }
                // console.log(`\t${lexeme.substitute} - ${substitutes}`)
                // table.push([lexeme.substitute,lexeme.terms.toString()])
            })

        }

        // console.log('Building Generic Substitutions')
        build(substitutionsGeneric)

        build(substitutionsUnderscored)

        
        // console.log(`Lexicon Substitutes`)
        let table = []

        for( let lexeme in this.lexicon ){
            // console.log(lexeme.toString())
            table.push([lexeme,this.lexicon[lexeme].toString()])
            table.push([lexeme.substitute,lexeme.terms])
        }

        // console.table(table) 

        // console.log('Total Lexemes: ', table.length)
    
    }

    getTerms(){
        return Object.keys(this.lexicon)
    }

}


export const DICTIONARY = new Dictionary ()
