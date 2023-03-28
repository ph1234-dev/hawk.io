
export function damerauLevenshteinDistance(str1, str2) {
  const matrix = [];

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

export const levenshteinDistance = (s, t) => {


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

export function cosineSimilarity(str1, str2) {
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