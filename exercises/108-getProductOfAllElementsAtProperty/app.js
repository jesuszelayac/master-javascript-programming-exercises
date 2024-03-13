function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    // Check if the key exists and has an array value
    if (key in obj && Array.isArray(obj[key])) {
      // Check if the array is empty
      if (!obj[key].length) {
        return 0;
      }

      // Use reduce to calculate the product
      return obj[key].reduce((product, element) => product * element, 1);
    }
    // Otherwise, return 0
    return 0;
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
