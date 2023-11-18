import { data as deng } from "./diarrhea/eng"
import { data as dfil } from "./diarrhea/fil"
import { data as dmag } from "./diarrhea/mag"
import { data as ieng } from "./influenza/eng"
import { data as ifil } from "./influenza/fil"
import { data as imag } from "./influenza/mag"

export const testCaseForDiarrhea = 
    [].concat(
        deng
        ,dfil,
        dmag
        )

export const testCaseForInfluenza = 
    [].concat(
        ieng,
        ifil,
        imag
        )

    
// export const testCaseForDiarrhea = 
// [].concat()

// export const testCaseForInfluenza = 
// [].concat(imag)