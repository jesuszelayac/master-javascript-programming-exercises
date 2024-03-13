// Write your function here
function countAllCharacters(str) {
    let charCount = {};
    for (let char of str) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    return charCount;
  }