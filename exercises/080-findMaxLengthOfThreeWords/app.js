// Write your function here
function findMaxLengthOfThreeWords(word1, word2, word3) {
    const lengths = [word1.length, word2.length, word3.length];
    return Math.max(...lengths);
  }