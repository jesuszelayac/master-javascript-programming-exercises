function getSmallestElementAtProperty(obj, key) {
    // your code here
    if (key in obj && Array.isArray(obj[key])) {
      // Check if the array is empty
      if (!obj[key].length) {
        return undefined;
      }
  
      // Use Math.min to find the smallest element
      return Math.min(...obj[key]);
    }
    // Otherwise, return undefined
    return undefined;
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
