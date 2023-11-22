//throws an error when variable is not defined
"use strict";


// import { topics } f= require("../test/data");

//DATABASE - responsible for retrieving information
// const ARCHIVE = require("./archive")
import { Archive , WilcardArchive } from "./archive"

class Blackbox extends Archive{

  constructor(){
    super()
  }

  sortReferences(){
    super.sortReferences()
  }

  storeMemories(data){
    super.storeMemories(data)
  }


  getReplyUsingTFIDFCosineSimilarity(str){
    return super.getReplyUsingTFIDFCosineSimilarity(str)
  }
  
  getReplyUsingCosineSimilarity(str){
    return super.getReplyUsingCosineSimilarity(str)
  }

  getReplyUsingWeightedCosineSimilarity(str){
    return super.getReplyUsingWeightedCosineSimilarity(str)
  }

  printBM25Docs(){
    return super.printBM25Docs()
  }

  getVocabulary(){
    return super.getVocabulary()
  }

  
  doesNgramCombinationExist(msg){
      return super.doesNgramCombinationExist(msg)
  }


}

class WildcardBlackbox extends WilcardArchive{

  constructor(){
    super()
  }

  loadWeights(
    forwardIndex,
    index,
    memory
  ){

    // console.log(`WildcardBlackox:: loading weights`)
    // console.log(`\tForward index:: ${forwardIndex}`)
    // console.log(`\tindex:: ${index}`)
    // console.log(`\tmemory:: ${memory}`)
    super.forwardIndex = forwardIndex
    super.index = index
    super.memory = memory
    // remember you are preloading a fixed data already.. all of these are already sorted out
  }

  storeMemory(rule){
    super.storeMemory(rule)
  }

  buildForwardIndex(){
    super.buildForwardIndex()
    super.sortMemory()
  }

  getReplyUsingWildcardMatching(msg){
    return super.getReplyUsingWildcardMatching(msg)
  }

  printForwardIndex(){
    super.printForwardIndex()
  }

}

export{
  Blackbox,
  WildcardBlackbox
}