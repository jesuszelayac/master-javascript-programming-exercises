function getLargestElementAtProperty(obj, key) {
    // Check if the property exists and if it's an array
    if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key])) {
      return [];
    }

    // Check if the array is empty
    if (obj[key].length === 0) {
      return [];
    }

    // Find the largest element in the array
    let largest = obj[key][0];
    for (let i = 1; i < obj[key].length; i++) {
      if (obj[key][i] > largest) {
        largest = obj[key][i];
      }
    }

    // Return the largest element
    return largest;
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
