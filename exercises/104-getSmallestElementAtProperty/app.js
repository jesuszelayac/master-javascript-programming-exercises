function getSmallestElementAtProperty(obj, key) {
    // Check if the property exists and if it's an array
    if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key])) {
      return [];
    }

    // Check if the array is empty
    if (obj[key].length === 0) {
      return [];
    }

    // Find the smallest element in the array
    let smallest = obj[key][0];
    for (let i = 1; i < obj[key].length; i++) {
      if (obj[key][i] < smallest) {
        smallest = obj[key][i];
      }
    }

    // Return the smallest element
    return smallest;
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
