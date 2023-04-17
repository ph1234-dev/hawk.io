
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

function cosineSimilarity(str1, str2) {
  // Split the strings into arrays of words
  const words1 = str1.split(" ");
  const words2 = str2.split(" ");

  // Create a set of all unique words in both strings
  const vocab = new Set([...words1, ...words2]);

  // Create frequency vectors for each string
  const freq1 = Array.from(vocab, word =>
    words1.filter(w => w === word).length
  );
  const freq2 = Array.from(vocab, word =>
    words2.filter(w => w === word).length
  );

  // Calculate the dot product and magnitudes of the frequency vectors
  let dotProduct = 0;
  let mag1 = 0;
  let mag2 = 0;
  for (let i = 0; i < freq1.length; i++) {
    dotProduct += freq1[i] * freq2[i];
    mag1 += freq1[i] ** 2;
    mag2 += freq2[i] ** 2;
  }

  // Calculate the cosine similarity
  if (mag1 === 0 || mag2 === 0) {
    return 0;
  } else {
    return dotProduct / (Math.sqrt(mag1) * Math.sqrt(mag2));
  }
}

// export{
//   damerauLevenshteinDistance,
//   levenshteinDistance,
//   cosineSimilarity
// }

class BM25{

  constructor(){
    // holds all docs
    this.docs = []
    this.docsIndex = []
    // document length
    this.N = 0
      
    // parameters
    this.k1 = 1.5;
    this.b = 0.75;
    this.sigma = 1;
  }
  
  // docs must be an array
  train(trainingData,index){

    // console.log(`Distance-formula::train [Train data size::${trainingData.length}]`)
    if ( Array.isArray(trainingData) ){
      this.docs = [].concat(trainingData)
    }else{
      
      trainingData = trainingData.toLowerCase().trim().replace(/[^\s+\w]/g," ")
      trainingData.replace(/[\s]+/g," ")
      this.docs.push(trainingData)
      this.docsIndex.push(index)
    }
    // this.averageDocumentLength = this.docs.reduce((acc, doc) => acc + doc.length, 0) / this.N;
    // console.log('Training Data')
    // console.log('\tN = ', this.docs)
    // console.log('\tN = ', trainingData.length)
  }


  getScore(input){

    console.log(`Distance-formula::getScore [${input}] (start)`)
    let tokens = input.split(' ')
    
    // step1 lets iterate every document
    this.docs.forEach((doc,index)=>{

      let score = 0
      // step2 lets get through all BM25 scores of each token
      tokens.forEach(word=>{

        // step2
        score += this.calculateBM25(word,doc)
      })

      // checks if score is greater than 0 only
      if ( score > 0 ){
        console.log(`Document:: ${doc}`)
        console.log(`\tDocument Index: ${this.docsIndex[index]}`)
        console.log(`\tScore: ${score}\n`)
        console.log(`Distance-formula::getScore [${input}] (end)`)
      }
    })

    
  }

    // BM25+
  calculateBM25(term, doc) {
      let docs = this.docs
      let k1 = this.k1
      let b = this.b
      let N =  docs.length;
      let avgdl = docs.reduce((acc, doc) => acc + doc.length, 0) / this.N;
      let f = doc.split(' ').filter((token) => token === term).length;
      let idf = Math.log((N - docs.filter((doc) => doc.includes(term)).length + 0.5) / (docs.filter((doc) => doc.includes(term)).length + 0.5));
      let tf = (f * (k1 + 1)) / (f + k1 * (1 - b + b * (doc.length / avgdl)));

      // return idf * (tf + this.sigma);
      return idf * tf;
    }
}

// const docs = [
//   // "apple banana orange pear peach",
//   // "orange orange orange orange orange",
//   // "apple orange orange peach peach peach",
//   // "i think i lost my mind a while ago",
//   // "free fall for now, desert air wont drown you out",
//   // "for a second the world was ending and i couldn't breath in yeah and",
//   // "i feel like an orange is ocming to my head",
//   // "im hungry i want to take and eat orange with peach",
//   ["apple", "banana", "orange", "pear", "peach"],
//   ["orange", "orange", "orange", "orange", "orange"],
//   ["apple", "orange", "orange", "peach", "peach", "peach"],
// ];

// const algo = new BM25()
// algo.train(docs)
// // const input = "and i really like to eat orange with banana but i want peach also";
// algo.getScore("orange")

export {
  levenshteinDistance,
  damerauLevenshteinDistance,
  cosineSimilarity,
  BM25
}