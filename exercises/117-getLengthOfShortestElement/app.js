function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length === 0) {
        return 0;
      }
      
      let minLength = Infinity;
      for (let str of arr) {
        if (str.length < minLength) {
          minLength = str.length;
        }
      }
      return minLength;
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
