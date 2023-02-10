"use strict"

class Node{
  constructor(el){
    this.element = el
    this.next = null
  }
}

// reference
// https://learnersbucket.com/tutorials/data-structures/implement-stack-using-linked-list/
class STACK{

  constructor(){


    // console.log("Memory Stack Created")
    
    // the head of the stack is the one on the top 
    // the ones that move
    this.head = null
    this.length = 0
  }

  push(item){
    let node = new Node(item,null)
    let current
    current = this.head
    node.next = current
    this.head = node
    this.length++  
  }

  //Pop the item from the stack
  pop(){
    let current = this.head;
    
    //If there is item then remove it 
    //and make the next element as the first
    if(current){
      let elm = current.element;
      current = current.next;
      this.head = current;
      this.length--;
      return elm;
    }
    
    return null;   
  }
  
  //Return the first element in the stack
  peek(){   
    if(this.head){    
      return this.head.element;
    }

    return null; 
  }
  
  //Convert the stack to an array
  toArray(){
    let arr = [];
    let current = this.head;
    while(current){
      arr.push(current.element);
      current = current.next;
    }
    
    return arr;
  }
  
  //Check if stack is empty
  isEmpty(){
    return this.length === 0;
  }
  
  //Return the size of the stack
  size(){
    return this.length;
  }
  
  //Clear the stack
  clear(){
    this.head = null;
    this.length = 0;
  }
}

export{
  STACK
}