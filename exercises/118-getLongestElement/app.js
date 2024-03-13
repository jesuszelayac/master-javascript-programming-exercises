function getLongestElement(arr) {
    // your code here
    if (arr.length === 0) {
        return "";
      }
    
      let longestElement = "";
      for (let str of arr) {
        if (str.length > longestElement.length) {
          longestElement = str;
        }
      }
      return longestElement;
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
