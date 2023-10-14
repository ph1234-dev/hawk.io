//throws an error when variable is not defined
"use strict";


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


  sortReferences(){
    this.archive.sortReferences()
    // automatically transform 
  }

  transformReferences(){
    this.archive.transformReferences()
  }

  storeRules(data){
    this.archive.storeMemories(data)
  }

  defineSubstitutions(data){
    this.archive.storeSubstitutions(data)
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
      referencesUntransformed: ()=>{
        console.log("Calling from >> Blackbox >> Printing Untransformed Pattern")
        this.archive.print().referencesUntransformed()
      },
      referencesUntransformedUniqueTerms: ()=>{
        this.archive.print().referencesUntransformedPatternsUniqueTerms()
      },
      memory: ()=>{
        console.log("\nPrinting memory")
        this.archive.print().memory()
      },
    }
  }

  removeUntransformedPatternsExtraSpaces(){
    return this.archive.removeUntransformedPatternsExtraSpaces()
  }

  getReplyUsingPatternMatching(msg){
    let result = this.archive.getReplyUsingPatternMatching(msg)
    return result;
  }


  getReplyUsingBM25(msg){
    // console.log(`Blackbox::getReplyUsingBM25 - ${msg}`)
    return this.archive.getReplyUsingBM25(msg)
  }

  getReplyUsingCosineSimilarity(msg){
    // maybe treshhold should be 
    return this.archive.getReplyUsingCosineSimilarity(msg,.2);
  }
  
  sort(){
    this.memory.sort(function(a,b){
      return b.wordCount - a.wordCount;
    });
    return this
  }

  getReferences(){
    return this.memory.getPatternReferences
  }

  getReplyUsingTanimotoCoefficient(msg){
    return this.archive.getReplyUsingTanimotoCoefficient(msg)
  }

  getReplyUsingOverlapCoefficient(msg){
    return this.archive.getReplyUsingOverlapCoefficient(msg)
  }

  replaceSubstitutesInUntransformedReferences(){
    return this.archive.replaceSubstitutesInUntransformedReferences()
  }

  removeStopWordsInReferencePatterns(){
    return this.archive.removeStopWordsInReferencePatterns()
  }

  printBM25Docs(){
    return this.archive.printBM25Docs()
  }
}
