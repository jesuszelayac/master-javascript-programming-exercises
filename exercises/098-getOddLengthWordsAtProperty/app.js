// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    if (key in obj && Array.isArray(obj[key])) {
      // Filter words with odd lengths using filter and string length
      return obj[key].filter(word => word.length % 2 !== 0);
    }
    // Otherwise, return an empty array
    return [];
  }