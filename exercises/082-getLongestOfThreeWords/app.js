function getLongestOfThreeWords(word1, word2, word3) {
    // Get the lengths of each word
    const lengths = [word1.length, word2.length, word3.length];

    // Find the maximum length using Math.max
    const maxLength = Math.max(...lengths);

    // Check each word and return the first one with the maximum length
    if (word1.length === maxLength) {
        return word1;
    } else if (word2.length === maxLength) {
        return word2;
    } else {
        return word3;
    }
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
