function getLargestElementAtProperty(obj, key) {
    // your code here
    if (key in obj && Array.isArray(obj[key])) {
      // Check if the array is empty
      if (!obj[key].length) {
        return undefined;
      }
   
      // Use Math.max to find the largest element
      return Math.max(...obj[key]);
    }
    // Otherwise, return undefined
    return undefined;
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
