//throws an error when variable is not defined
"use strict";

console.log("Blackbox running")


// import { topics } f= require("../test/data");

//DATABASE - responsible for retrieving information
// const ARCHIVE = require("./archive")
import {ARCHIVE} from "./archive"

export default class Blackbox{

  constructor(){
    //operates as stack
    //tracks all the conversations
    this.memoryStack = []

    //the memory where all data are read 
    this.memory = []

    //stores the definitions
    this.archive = new ARCHIVE()

  }

  getPatternReferences(){
    let patterns = []

    this.archive.memory.forEach(mem=>{
      let entryPatterns = mem.pattern
      entryPatterns.forEach(e=>{
        patterns.push(e)
      })
      // patterns.push
      // console.log(entryPatterns)
    })

    return patterns 
  }

  // return the unique patterns present in the rules
  getUniqueTermsFromPatterns(){
    let terms = []
    let patterns = this.getPatternReferences()

    console.log('Replacing nonword keys')
    for ( let i=0 ; i < patterns.length ; i++){
      let str = patterns[i]
      str = str.replace(/\W/g,' ').replace(/\s\s+/g,' ').trim().toLowerCase()
      let tokens = str.split(' ')

      // store token if not existing
      tokens.forEach(e=>{
        if (!terms.includes(e)){
          terms.push(e.toLowerCase())
        }
      })
    }
    terms = terms.sort()
    return terms
  }

  removeReferenceTriggers(){
    this.archive.removeReferenceTriggers()
  }

  findSubstitute(term){
    this.archive.findSubstitute(term)
  }

  sortReferences(){
    this.archive.sortReferences()
    // automatically transform 
  }

  transformReferences(){
    this.archive.transformReferences()
  }

  normalizeString(str){
    console.log("Normalization")
    console.log(`Before, string was [${str}]`)
    str = this.archive.normalizeString(str)
    console.log(`After, string was [${str}]`)
  }

  storeRules(data){
    this.archive.storeMemories(data)
  }

  defineSubstitutions(data){
    this.archive.storeSubstitutions(data)
  }


  testTopic(topic,msg){
    console.log("\nTopic Test")
    this.archive.scanTopic(topic,msg)
  }

  print(){
    return{
      substitutions: ()=>{
        this.archive.print().substitutions()
      },
      references: ()=>{
        console.log("\nPrinting references")
        this.archive.print().references()
      },
      memory: ()=>{
        console.log("\nPrinting memory")
        this.archive.print().memory()
      },
      dictionary: ()=>{
        console.log("\nPrinting dictionary")
        this.archive.print().dictionary()
      },
      stack: ()=>{
        console.log("\nPrinting stack")
        this.archive.print().stack()
      },
      topics: ()=>{
        console.log("\nPrinting topics")
        this.archive.print().topics()
      }
    }
  }

  retrieveMemory(msg){
    console.log(`\nFinding >> ${msg}`)
    let result = this.archive.retrieve(msg)
    console.log(`Response >> ${result}`)
    return result;
  }

  
  sort(){
    this.memory.sort(function(a,b){
      return b.wordCount - a.wordCount;
    });
    return this
  }


}

// module.exports = {
//   Blackbox
// }

