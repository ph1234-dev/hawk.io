import {data as engSection1to5 } from "./eng/section1-5"
import {data as engSection6to10 } from "./eng/section6-10"
import {data as engSection11to15 } from "./eng/section11-15"
import {data as engSection16to20 } from "./eng/section16-20"

import {data as filSection1to5 } from "./fil/section1-5"
import {data as filSection6to10 } from "./fil/section6-10"
import {data as filSection11to15 } from "./fil/section11-15"
import {data as filSection16to20 } from "./fil/section16-20"


import {data as magSection1to5 } from "./mag/section1-5"
import {data as magSection6to10 } from "./mag/section6-10"
import {data as magSection11to15 } from "./mag/section11-15"
import {data as magSection16to20 } from "./mag/section16-20"




export const diarrheaEngRules = 
    [].concat(engSection1to5)
        .concat(engSection6to10)
        .concat(engSection11to15)
        .concat(engSection16to20)


export const diarrheaFilRules = 
    [].concat(filSection1to5)
        .concat(filSection6to10)
        .concat(filSection11to15)
        .concat(filSection16to20)

export const diarrheaMagRules = 
    [].concat(magSection1to5)
        .concat(magSection6to10)
        .concat(magSection11to15)
        .concat(magSection16to20)