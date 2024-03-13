function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if (key in obj && Array.isArray(obj[key])) {
      // Check if the array is empty
      if (!obj[key].length) {
        return [];
      }
  
      // Use slice to exclude the last element
      return obj[key].slice(0, -1);
    }
    // Otherwise, return an empty array
    return [];
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
