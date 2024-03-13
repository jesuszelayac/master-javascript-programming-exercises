function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if (key in obj && Array.isArray(obj[key])) {
        // Check if the index is within the array bounds
        if (index >= 0 && index < obj[key].length) {
          return obj[key][index];
        }
      }
      // Otherwise, return undefined
      return undefined;
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
