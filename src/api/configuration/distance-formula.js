export const levenshteinDistance = (s, t) => {


  if (!s.length) return t.length;
  if (!t.length) return s.length;

  // additionl error checking
  // if the first letter is not the same chances
  //  it it is not the word
  // begin modificaiton
  // if ( s.chatAt(0) !== t.chatAt(0) ) {
  //   return s.length > t.length ? s.length : t.length
  // }
  //check if last word are the same
  // if ( s.chatAt(s.length-1) !== t.chatAt(t.length-1) ) {
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


export const cosineSimilarity = (str1, str2) => {
  // Convert the strings to arrays of words
  const words1 = str1.toLowerCase().match(/\b\w+\b/g);
  const words2 = str2.toLowerCase().match(/\b\w+\b/g);

  // Build the vocabulary (set of unique words) from both strings
  const vocab = new Set([...words1, ...words2]);

  // Calculate the frequency of each word in each string
  const freq1 = Array.from(vocab, word =>
    words1.filter(w => w === word).length
  );
  const freq2 = Array.from(vocab, word =>
    words2.filter(w => w === word).length
  );

  // Calculate the dot product and norms of the frequency vectors
  let dotProduct = 0;
  let norm1 = 0;
  let norm2 = 0;
  for (let i = 0; i < freq1.length; i++) {
    dotProduct += freq1[i] * freq2[i];
    norm1 += freq1[i] * freq1[i];
    norm2 += freq2[i] * freq2[i];
  }

  // Return the cosine similarity between the frequency vectors
  if (norm1 == 0 || norm2 == 0) {
    return 0;
  } else {
    return dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
  }
}