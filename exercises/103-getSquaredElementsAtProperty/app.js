function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if (key in obj && Array.isArray(obj[key])) {
      // Map elements to squares using map
      return obj[key].map(element => element * element);
    }
    // Otherwise, return an empty array
    return [];
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
