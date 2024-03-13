function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if (key in obj && Array.isArray(obj[key])) {
      // Filter words with odd lengths using filter and string length
      return obj[key].filter(word => word.length % 2 === 0);
    }
    // Otherwise, return an empty array
    return [];
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
