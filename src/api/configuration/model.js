
// how userResponse should always be an array
export const encodeTopic = (topicName, userResponses) => {
  return{
    "topicName": topicName,
    "userResponses": userResponses 
  }
}

// export const encodeMemory = (pattern,response,nextTopic,dimension="default") =>{
//   return{
//     "pattern": pattern,
//     "response": response,  
//     "nextTopic": nextTopic,
//     "dimension": dimension
//   }
// }


export const encodeMemory = (pattern,response,dimension) =>{
  return{
    "pattern": pattern,
    "response": response,  
    "dimension": dimension
  }
}


export const encodeSubstitution = (substitute, terms) => {
  return {
    "substitute": substitute,
    "terms": terms
  }
}
