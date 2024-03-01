import { DICTIONARY } from "@/api/config/dictionary"
import LanguageClassifier from '@/api/classifier/language-classifier'  

export const getPreTransformedRules =(lang,rules)=>{
    
    rules.forEach(rule=>{
        let patterns = rule.pattern
        
        // if ( control-- > 0 ){
        //     console.log('Before::')
        //     console.log('Patterns:: ',patterns )
        // }

        patterns.forEach((p)=>{

            p = p.toLowerCase()
            p = p.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g,' ')
            p = removeRedundantSpaces(p)
                
            
            p.split(' ').forEach(word=>{
                let sub = DICTIONARY.getSubstitute(word)
                if ( sub != null ){
                    const regex = new RegExp("\\b" + word + "\\b", "g");
                    p = p.replace(regex,sub)
                }
            })

            // if ( control > 0 ){
            //     console.log('After Substitution::')
            //     console.log('Patterns:: ', patterns[index] )
            // } 

        })
        
    })
    
      
    console.log(`Engine::showPreTransformedRules (start) Lang:: ${lang}`)
    console.log(rules)
    console.log(`Engine::showPreTransformedRules (end)`)

    return rules
}


export const removeRedundantSpaces = (str)=>{
    str = str.replace(/\s+/g,' ')
    str =  str.replace(
        /(^\s+|\s+$)|\s+/g, 
        function (match, leadingTrailing, duplicate) {
            if (leadingTrailing) {
                return '';
            } else if (duplicate) {
                return ' ';
            }
        }
    );

    return str
}

export const transformWildcards = (str)=>{


    //replace * to accept any character
    str = str.replace(/\s/igm, '')
    // str = str.replace(/[\*]/g, '(.*)')
    str = str.replace(/[\*]/g, '(.*)')
    // str = str.replace("*", '(.*)')
          
    //replace spaces such to fix space between 
    // str = str.replace(/\s/igm, '(\\s*)')
    // str = removeRedundantSpaces(str)
    // str = str.replace(/\s/igm, '(.*)')
    //enclose for strict  


    str = str.replace(/\b(\w+)\b/g, "\\b$1\\b")
    return  `^${str}$`
    // return  `${str}`
  }


  export function crossValidate(data, totalSplits, randomness) {
    // Shuffle the data randomly
    data = shuffleArray(data, randomness);
  
    // Calculate the size of each fold
    const foldSize = Math.floor(data.length / totalSplits);
  
  
    let kFoldSummary = []  

    // Perform cross-validation
    for (let i = 0; i < totalSplits; i++) {
      // Split the data into training and testing sets
      const testingData = data.slice(i * foldSize, (i + 1) * foldSize);
      const trainingData = data.slice(0, i * foldSize).concat(data.slice((i + 1) * foldSize));
  

      let classifier = new LanguageClassifier()
      // Train the model on the training data
      classifier.train(trainingData);
      classifier.buildTermProbabilityMap()
  
      // Test the model on the testing data
      // const accuracy = testModel(classifier, testingData);

      let val = getConfusionMatrixScores(classifier,testingData,['ENG','FIL','MAG'])
      console.log(val)
      kFoldSummary.push(val)

    }


    //accuracy
    let a = kFoldSummary.reduce((acc,e)=>{
      return acc += e.accuracy
    },0)/totalSplits

    // // precision
    let p = kFoldSummary.reduce((acc,e)=>{
      return acc += e.precision
    },0)/totalSplits

    // recall
    let r = kFoldSummary.reduce((acc,e)=>{
      return acc += e.precision
    },0)/totalSplits

    //f1score
    let f = kFoldSummary.reduce((acc,e)=>{
      return acc += e.precision
    },0)/totalSplits


    console.log('Cross Validation Summary (avg)')
    console.log(`\tAccuracy: ${a}`)
    console.log(`\tPrecision: ${p}`)
    console.log(`\tRecall: ${r}`)
    console.log(`\tF1score: ${f}`)
    

  }
  
  function shuffleArray(array, randomness) {
    // Shuffle the array using the Fisher-Yates algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  
    // Introduce randomness by randomly selecting a percentage of the shuffled array
    const endIndex = Math.floor(array.length * randomness);

    // console.log(`Array is array? ${array instanceof Array}`)
    // console.log(`Array Data:: ${array}`)

    return array.slice(0, endIndex);
    // return  Array.from(array).slice(0, endIndex);

  }
  
  function testModel(classifier, testingData) {
    // Test the model on the testing data and return the accuracy
    let correctPredictions = 0;

  
    for (const instance of testingData) {
      const prediction = classifier.getPrediction(instance.data);

      // console.log(`Test Model:: ${prediction} | ${JSON.stringify(instance)}`)
      if (prediction === instance.class) {

        correctPredictions++;
      }
    }
  
    return correctPredictions / testingData.length;
  }
  

  /***
   * 
   * 
   * 
   * 

Stateful Model:

A stateful model retains information or state between training sessions. This means that the model's internal parameters are updated based not only on the current training data but also on what it has learned from previous training sessions.
Stateless Model:

A stateless model does not retain information or state between training sessions. Each training session is independent, and the model's parameters are updated solely based on the current training data.
Now, when it comes to cross-validation:

1. Cross-Validation with Stateless Models:

For stateless models, like many linear models (e.g., Logistic Regression) or Naive Bayes, you typically create a new instance of the model for each fold in the cross-validation loop. Each fold's model is trained independently, and there is no need to carry information between folds.
Cross-Validation with Stateful Models:

2. For stateful models, like some types of neural networks or models with memory (e.g., models using recurrent neural networks), you might consider whether to initialize the model outside the cross-validation loop and train it across multiple folds. This would be the case if you want the model to retain information across the folds.

In practice, many traditional machine learning models, including those commonly used in cross-validation (e.g., Logistic Regression, Decision Trees, Naive Bayes), are stateless. They don't retain information between training sessions, and you create a new instance of the model for each fold.

If you have a specific machine learning model or scenario in mind, feel free to provide more details, and I can offer more targeted guidance.
   */


export function getConfusionMatrixScores(classifier,data,lang){

  console.log(`Printing Confusion Matrix`)

  // let matrix = []
  // 
  
  let matrix = Array.from({ length: lang.length }, () => Array(lang.length).fill(0));

  lang.forEach((row,rowIndex)=>{
    lang.forEach((col,colIndex)=>{
      // step1 
      // get all data that are expected to be english
      let rowData = data.filter(td=>td.class==row)

      // step2
      // predict 
      let count = 0
      rowData.forEach(td=>{
        let pred = classifier.getPrediction(td.data)
        if (pred == col) count++
      })


      // console.log(count)
      // step3 count and increment
      matrix[rowIndex][colIndex] = count

    })
  })

  // console.table(matrix)
// 

    
  let accuracy = computeAccuracy(matrix);
  // console.log('Accuracy:', accuracy);


  let precision = 0
  let recall = 0
  let f1Score = 0
  lang.forEach((label, index) => {
    precision = computePrecision(matrix, index);
    recall = computeRecall(matrix, index);
    f1Score = computeF1Score(precision, recall);

    // console.log(`Metrics for class '${label}':`);
    // console.log('  Precision:', precision);
    // console.log('  Recall:', recall);
    // console.log('  F1 Score:', f1Score);

  });


  // compute accuracy


  //compute precision


  //compute recall


  //compute f1
    return {
      accuracy,
      precision,
      recall,
      f1Score
    }
}


function computeAccuracy(matrix) {
  const correctPredictions = matrix.reduce((sum, row, i) => sum + row[i], 0);
  const totalPredictions = matrix.reduce((sum, row) => sum + row.reduce((rowSum, value) => rowSum + value, 0), 0);
  return correctPredictions / totalPredictions;
}

function computePrecision(matrix, classIndex) {
  const truePositive = matrix[classIndex][classIndex];
  const falsePositive = matrix.reduce((sum, row) => sum + row[classIndex], 0) - truePositive;
  return truePositive / (truePositive + falsePositive);
}

function computeRecall(matrix, classIndex) {
  const truePositive = matrix[classIndex][classIndex];
  const falseNegative = matrix[classIndex].reduce((rowSum, value, i) => rowSum + (i !== classIndex ? value : 0), 0);
  return truePositive / (truePositive + falseNegative);
}

function computeF1Score(precision, recall) {
  return 2 * (precision * recall) / (precision + recall);
}

// // Assuming you already have the 'matrix' computed
// console.table(matrix);
