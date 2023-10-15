
import {DICTIONARY} from './dictionary'

function damerauLevenshteinDistance(str1, str2) {
  const matrix = [];

  // additionl error checking
  // if the first letter is not the same chances
  //  it it is not the word
  // begin modificaiton
  if ( str1.charAt(0) != str2.charAt(0) ) {
    return str1.length > str2.length ? str1.length : str2.length
  }

  // initialize matrix
  for (let i = 0; i <= str1.length; i++) {
    matrix[i] = [i];
    if (i === 0) {
      for (let j = 1; j <= str2.length; j++) {
        matrix[i][j] = j;
      }
    }
  }

  // fill in matrix
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      const substitutionCost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + substitutionCost // substitution
      );

      // check for transposition
      if (i > 1 && j > 1 && str1[i - 1] === str2[j - 2] && str1[i - 2] === str2[j - 1]) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i - 2][j - 2] + substitutionCost);
      }
    }
  }

  return matrix[str1.length][str2.length];
}

const levenshteinDistance = (s, t) => {


  if (!s.length) return t.length;
  if (!t.length) return s.length;

  // additionl error checking
  // if the first letter is not the same chances
  //  it it is not the word
  // begin modificaiton
  if ( s.charAt(0) != t.charAt(0) ) {
    return s.length > t.length ? s.length : t.length
  }

  //check if last word are the same
  // if ( s.charAt(s.length-1) !== t.charAt(t.length-1) ) {
  //   return s.length > t.length ? s.length : t.length
  // }
  //end modification

  const arr = [];
  for (let i = 0; i <= t.length; i++) {
    arr[i] = [i];
    for (let j = 1; j <= s.length; j++) {
      arr[i][j] =
        i === 0
          ? j
          : Math.min(
            arr[i - 1][j] + 1,
            arr[i][j - 1] + 1,
            arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
          );
    }
  }
  return arr[t.length][s.length];
};

function cosineSimilarity(sentence1, sentence2) {
  // Split the sentences into arrays of words
  const words1 = sentence1.toLowerCase().split(/[^\w]+/);
  const words2 = sentence2.toLowerCase().split(/[^\w]+/);
  
  // Compute the word frequencies for each sentence
  const freq1 = {};
  const freq2 = {};
  
  for (const word of words1) {
    freq1[word] = (freq1[word] || 0) + 1;
  }
  
  for (const word of words2) {
    freq2[word] = (freq2[word] || 0) + 1;
  }
  
  // Compute the dot product of the word frequency vectors
  let dotProduct = 0;
  for (const word in freq1) {
    if (word in freq2) {
      dotProduct += freq1[word] * freq2[word];
    }
  }
  
  // Compute the magnitudes of the word frequency vectors
  const mag1 = Math.sqrt(words1.reduce((sum, word) => sum + freq1[word]**2, 0));
  const mag2 = Math.sqrt(words2.reduce((sum, word) => sum + freq2[word]**2, 0));
  
  // Compute the cosine similarity
  return dotProduct / (mag1 * mag2);
}

// function cosineSimilarity(str1, str2) {
//   // Split the strings into arrays of words
//   const words1 = str1.split(" ");
//   const words2 = str2.split(" ");

//   // Create a set of all unique words in both strings
//   const vocab = new Set([...words1, ...words2]);

//   // Create frequency vectors for each string
//   const freq1 = Array.from(vocab, word =>
//     words1.filter(w => w === word).length
//   );
//   const freq2 = Array.from(vocab, word =>
//     words2.filter(w => w === word).length
//   );

//   // Calculate the dot product and magnitudes of the frequency vectors
//   let dotProduct = 0;
//   let mag1 = 0;
//   let mag2 = 0;
//   for (let i = 0; i < freq1.length; i++) {
//     dotProduct += freq1[i] * freq2[i];
//     mag1 += freq1[i] ** 2;
//     mag2 += freq2[i] ** 2;
//   }

//   // Calculate the cosine similarity
//   if (mag1 === 0 || mag2 === 0) {
//     return 0;
//   } else {
//     return dotProduct / (Math.sqrt(mag1) * Math.sqrt(mag2));
//   }
// }

// export{
//   damerauLevenshteinDistance,
//   levenshteinDistance,
//   cosineSimilarity
// }

function countMatchingWords(string1, string2) {
  const words1 = string1.split(' ');
  const words2 = string2.split(' ');
  let count = 0;

  for (let i = 0; i < words1.length; i++) {
    if (words2.includes(words1[i])) {
      count++;
    }
  }

  return count;
}

class BM25{

  constructor(){
    // holds all docs
    this.docs = []
    this.docsIndex = []
    // document length
    this.N = 0

    // https://learn.microsoft.com/en-us/azure/search/index-ranking-similarity
    // read this for default values of k1
    // for "b" A value of 0.0 means the length of the document will not influence the score, 
    // while a value of 1.0 means the impact of term frequency on relevance score will be
    // normalized by the document's length.


    // read about the paramters k1 k3 and
    // https://nlp.stanford.edu/IR-book/html/htmledition/okapi-bm25-a-non-binary-model-1.html
    // In the absence of such optimization, experiments have shown reasonable values are to set $k_1$ 
    // and $k_3$ to a value between 1.2 and 2 and $b = 0.75$
    // parameters
    // this.k1 = 1.2;

    // K1 parameter
    // For k1, you should be asking, “when do we think a term is likely to be
    // saturated?” For very long documents like books — especially fictional or
    // multi-topic books — it’s very likely to have a lot of different terms 
    // several times in a work, even when the term isn’t highly relevant to 
    // the work as a whole.
    // You may not want terms to be saturated as quickly in this situation, so there’s
    // some suggestion that k1 should generally trend toward larger numbers when 
    // the text is a lot longer and more diverse.


    // K2 parameter
    // For b, you should be asking, “when do we think a document is likely to 
    // be very long, and when should that hinder its relevance to a term?”
    // Documents which are highly specific like engineering specifications or patents are 
    // lengthy in order to be more specific about a subject. Their length is unlikely to be
    // detrimental to the relevance and b may be more appropriate to be lower. On the opposite 
    // side, documents which touch on several different topics in a broad way — news articles
    // (a political article may touch on economics, international affairs, and certain corporations), 
    // user reviews, etc. — often benefit by choosing a larger b so that irrelevant topics to a user’s 
    // search, including spam and the like, are penalized.

    this.k1 = 1.2
    this.b = .75;
    // this.b = 0
    // this.b = .25;

    
    // this.k1 = 1.2
    // this.k1 = .6
    // this.b = .3;

    this.sigma = 0;
    this.luceneAddition = 1
    // contains keyword:  {frequency:0,indexes: 0}
    this.invertedIndex = {}
  }
  

  printDocs(){
    console.log('BM25 Document patterns')
    // let max = 40;
    for (let i = 0 ; i < this.docs.length; i++){
      console.log(this.docs[i])
    }
    console.log('BM25 Document patterns')
  }

  // docs must be an array
  train(trainingData, index) {

    trainingData = trainingData.toLowerCase().trim().replace(/[^\s+\w]/g, " ")

    // remove stop words
    let tokens = trainingData.split(' ')
    tokens.forEach(token => {
      if (DICTIONARY.isStopWord(token.trim())) {
        // you need to set the boundary
        const regex = new RegExp("\\b" + token + "\\b", "g");
        trainingData = trainingData.replace(regex, '')
      }
    })

    // replace redundant
    trainingData = trainingData.replace(/[\s]+/g, " ")

    tokens = trainingData.split(' ')
    tokens.forEach(word => {

      let sub = DICTIONARY.getSubstitute(word.trim())

      if (sub != null) {
        // console.log('>> Testing: ',token, ' replace to', word )
        // trainingData = trainingData.replace(word,sub)

        const regex = new RegExp("\\b" + word + "\\b", "g");
        trainingData = trainingData.replace(regex, sub)

      }

    })

    this.docs.push(trainingData)
    this.docsIndex.push(index)

    // creates the inverted index
    trainingData.split(' ').forEach(token => {

      if (token in this.invertedIndex) {
        this.invertedIndex[token].push(index)
      } else {

        this.invertedIndex[token] = []
        this.invertedIndex[token].push(index)
      }
    })
  }


  getTermScore(term){

  }

  getScore(input){

    // console.log(`Distance-formula::getScore [${input}] (start)`)
    let tokens = input.split(' ')

    // step1 lets iterate every document

    let documentScores = []
    let score = 0
    this.docs.forEach((doc,index)=>{

      score = 0
      // we are only interested in using BM25 when document intersection with input is 2
      // meaning there must be at least two words in each pattern and rule
      // if ( countMatchingWords(input,doc) >= 2){

      // step2 lets get through all BM25 scores of each token
      tokens.forEach(word => {
        score += this.calculateBM25(word, doc)
      })

      // console.log(doc)
      // console.log(`\t score > ${score}`)
      documentScores.push({
        score: score,
        index: this.docsIndex[index],
        pattern: doc
      })

      // }
    })

    // if null, this means that we found a single word matches
    if ( documentScores[0] == undefined ){
      documentScores[0] = {
        score: 0,
        index: -1,
        pattern: "none"
      }
    }

    // now sort
    // to identify which is the max score
    let currentMax = documentScores[0]
    for ( let i = 1; i < documentScores.length; i++){
      let next = documentScores[i]
      if ( next.score > currentMax.score ){
        currentMax = next
      }
    }

    // console.log('Result:: Max Score Goes To')
    // console.log(JSON.stringify(currentMax))
    // maxScore = current.maxScore
    // maxIndex = 0
    // maxPattern = current.maxPattern

    // console.log(`Distance-formula::getScore [results]`)
    // console.log(`\tTarget Pattern: ${maxPattern}`)
    // console.log(`\tMax Target Score: ${maxScore}`)
    // console.log(`\tMax Target Index: ${maxIndex}`)
    
    return {
      score: currentMax.score,
      index: currentMax.index,
      pattern: currentMax.pattern
    }
  }

//     // BM25+
  // remember we are using okapi bm25
  // https://en.wikipedia.org/wiki/Okapi_BM25
  // it has different implementaiton from the original.. its Lucene
  // https://blog.mimacom.com/bm25-got/
  calculateBM25(term, doc) {
      let docs = this.docs
      let k1 = this.k1
      let b = this.b
      let N =  docs.length;

      // value.reducer(accumulator,currentValue)=> accumulator + currentalue , (initial value) <- here is the starting pont
      let avgdl = docs.reduce((acc, doc) => acc + doc.length, 0) / this.N;
      let f = doc.split(' ').filter((token) => token === term).length;

      // we need inverted index for this ...
      //https://medium.com/@karkum/introduction-to-apache-lucene-7d65f67f5231#:~:text=Apache%20Lucene%E2%84%A2%20is%20a%20high%2Dperformance%2C%20full%2Dfeatured,search%2C%20especially%20cross%2Dplatform.
      // let documentContainingTerm = docs.filter((doc) => doc.includes(term))
      // let documentContainingTermLengh = documentContainingTerm.length

      // if zero, it means none of the documents contains the term
      // this can only happen if the inverted index has not recorded any term regarding z
      let documentContainingTermLength = 0

      if ( term in this.invertedIndex){
        documentContainingTermLength = this.invertedIndex[term].length
      } 

      // adding +1 here in idf avoids negative value read source below
      // https://opensourceconnections.com/blog/2015/10/16/bm25-the-next-generation-of-lucene-relevation/#:~:text=BM25's%20IDF%20has%20the%20potential,to%20compute%20a%20negative%20value.
      // https://www.elastic.co/blog/found-similarity-in-elasticsearch
      
      // written by the actual author senior engineer at elastic search
      // https://www.elastic.co/blog/practical-bm25-part-2-the-bm25-algorithm-and-its-variables
      
      // https://www.youtube.com/watch?v=v3Ko0CwgTZ0
      // link above explains the +1 in the idf , watch 6:03 minute mark
      let idf = Math.log(((N - documentContainingTermLength + 0.5) / (documentContainingTermLength + 0.5))+this.luceneAddition);
      
      let tf = (f * (k1 + 1)) / (f + k1 * (1 - b + b * (doc.length / avgdl)));

      // read this for evaluation of IR systems
      //bfdogplmndidlpjfhoijckpakkdjkkil/pdf/viewer.html?file=https%3A%2F%2Fwww.uni-mannheim.de%2Fmedia%2FEinrichtungen%2Fdws%2FFiles_People%2FProfs%2Fgoran%2F10-Evaluation-FSS20.pdf


      return idf * (tf + this.sigma);
      // return idf * tf;
    }
}

function overlapCoefficient(sentence1, sentence2) {
  // Split each sentence into an array of words
  const arr1 = sentence1.split(' ');
  const arr2 = sentence2.split(' ');
  
  // Calculate the intersection of the two arrays
  const intersection = arr1.filter(x => arr2.includes(x));
  
  // Calculate the size of the smaller array
  const minSize = Math.min(arr1.length, arr2.length);
  
  // Return the overlap coefficient
  return intersection.length / minSize;
}

function sorensenDiceCoefficient(sentence1, sentence2) {
  // Split each sentence into an array of words
  const arr1 = sentence1.split(' ');
  const arr2 = sentence2.split(' ');
  
  // Calculate the intersection of the two arrays
  const intersection = arr1.filter(x => arr2.includes(x));
  
  // Calculate the size of each array
  const size1 = arr1.length;
  const size2 = arr2.length;
  
  // Calculate the Sørensen-Dice coefficient
  const coefficient = 2 * intersection.length / (size1 + size2);
  
  // Return the coefficient
  return coefficient;
}

function tanimotoCoefficient(sentence1, sentence2) {
  // Split each sentence into an array of words
  const arr1 = sentence1.split(' ');
  const arr2 = sentence2.split(' ');
  
  // Calculate the intersection of the two arrays
  const intersection = arr1.filter(x => arr2.includes(x));
  
  // Calculate the size of each array
  const size1 = arr1.length;
  const size2 = arr2.length;
  
  // Calculate the Tanimoto coefficient
  const coefficient = intersection.length / (size1 + size2 - intersection.length);
  
  // Return the coefficient
  return coefficient;
}


function stringEditDistance(sentence1, sentence2) {
  // Convert the sentences to arrays of characters
  const arr1 = sentence1.split(' ');
  const arr2 = sentence2.split(' ');

  // Initialize the matrix with zeros
  const matrix = Array(arr2.length + 1).fill(null).map(() => Array(arr1.length + 1).fill(null));
  for (let i = 0; i <= arr1.length; i += 1) {
    matrix[0][i] = i;
  }
  for (let j = 0; j <= arr2.length; j += 1) {
    matrix[j][0] = j;
  }

  // Fill in the matrix
  for (let j = 1; j <= arr2.length; j += 1) {
    for (let i = 1; i <= arr1.length; i += 1) {
      const substitutionCost = arr1[i - 1] === arr2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1, // deletion
        matrix[j - 1][i] + 1, // insertion
        matrix[j - 1][i - 1] + substitutionCost // substitution
      );
    }
  }

  // Return the edit distance
  return matrix[arr2.length][arr1.length];
}


function sentenceEditDistance(sentence1, sentence2) {
  // Convert the sentences to arrays of characters
  const arr1 = sentence1.split('');
  const arr2 = sentence2.split('');

  // Initialize the matrix with zeros
  const matrix = Array(arr2.length + 1).fill(null).map(() => Array(arr1.length + 1).fill(null));
  for (let i = 0; i <= arr1.length; i += 1) {
    matrix[0][i] = i;
  }

  for (let j = 0; j <= arr2.length; j += 1) {
    matrix[j][0] = j;
  }

  // Fill in the matrix
  for (let j = 1; j <= arr2.length; j += 1) {
    for (let i = 1; i <= arr1.length; i += 1) {
      const substitutionCost = arr1[i - 1] === arr2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1, // deletion
        matrix[j - 1][i] + 1, // insertion
        matrix[j - 1][i - 1] + substitutionCost // substitution
      );
    }
  }

  // Return the edit distance
  return matrix[arr2.length][arr1.length];
}

export {
  stringEditDistance,
  levenshteinDistance,
  damerauLevenshteinDistance,
  cosineSimilarity,
  BM25,
  overlapCoefficient,
  sorensenDiceCoefficient,
  tanimotoCoefficient,
  countMatchingWords
}