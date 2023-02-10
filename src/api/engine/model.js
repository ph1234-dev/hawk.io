
// how userResponse should always be an array
export const encodeTopic = (topicName, userResponses) => {
  return{
    "topicName": topicName,
    "userResponses": userResponses 
  }
}


export const encodeMemory = (pattern,response,nextTopic) =>{
  return{
    "pattern": pattern,
    "response": response,  
    "nextTopic": nextTopic
  }
}
