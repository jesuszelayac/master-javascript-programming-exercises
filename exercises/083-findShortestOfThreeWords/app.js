function findShortestOfThreeWords(word1, word2, word3) {
    const lengths = [word1.length, word2.length, word3.length];
    const minLength = Math.min(...lengths);

    if (word1.length === minLength) {
        return word1;
    } else if (word2.length === minLength) {
        return word2;
    } else {
        return word3;
    }
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
