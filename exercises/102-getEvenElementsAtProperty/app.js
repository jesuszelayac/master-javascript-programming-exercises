function getEvenElementsAtProperty(obj, key) {
    // your code here
    if (key in obj && Array.isArray(obj[key])) {
      // Filter odd elements using filter
      return obj[key].filter(element => element % 2 === 0);
    }
    // Otherwise, return an empty array
    return [];
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
