//throws an error when variable is not defined
"use strict";


// import { topics } f= require("../test/data");

//DATABASE - responsible for retrieving information
// const ARCHIVE = require("./archive")
import { Archive , WilcardArchive } from "./archive"

class Blackbox{

  constructor(){
    //operates as stack
    //tracks all the conversations
    this.memoryStack = []

    //the memory where all data are read 
    this.memory = []

    //stores the definitions
    this.archive = new Archive()

  }

  sortReferences(){
    this.archive.sortReferences()
  }

  storeRules(data){
    this.archive.storeMemories(data)
  }


  getReplyUsingTFIDFCosineSimilarity(str){
    return this.archive.getReplyUsingTFIDFCosineSimilarity(str)
  }
  
  getReplyUsingCosineSimilarity(str){
    return this.archive.getReplyUsingCosineSimilarity(str)
  }

  getReplyUsingWeightedCosineSimilarity(str){
    return this.archive.getReplyUsingWeightedCosineSimilarity(str)
  }

  printBM25Docs(){
    return this.archive.printBM25Docs()
  }

  getVocabulary(){
    return this.archive.getVocabulary()
  }

  
  doesNgramCombinationExist(msg){
      return this.archive.doesNgramCombinationExist(msg)
  }


}

class WildcardBlackbox{

  constructor(){
    this.wildcardArchive = new WilcardArchive()
  }

  storeMemory(rule){
    this.wildcardArchive.storeMemory(rule)
  }

  buildForwardIndex(){
    this.wildcardArchive.buildForwardIndex()
    this.wildcardArchive.sortMemory()
  }

  getReplyUsingWildcardMatching(msg){
    return this.wildcardArchive.getReplyUsingWildcardMatching(msg)
  }

  printForwardIndex(){
    this.wildcardArchive.printForwardIndex()
  }

}

export{
  Blackbox,
  WildcardBlackbox
}