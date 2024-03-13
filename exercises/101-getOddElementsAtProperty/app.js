function getOddElementsAtProperty(obj, key) {
    // your code here
    if (key in obj && Array.isArray(obj[key])) {
      // Filter odd elements using filter
      return obj[key].filter(element => element % 2 !== 0);
    }
    // Otherwise, return an empty array
    return [];
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
