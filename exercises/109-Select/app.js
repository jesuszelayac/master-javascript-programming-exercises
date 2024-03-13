// Write your function here
function select(arr, obj) {
    const selectedObj = {};
    // Iterate through keys in the object
    for (const key in obj) {
      // Check if the key is present in the array
      if (arr.includes(key)) {
        // Add the key-value pair to the new dictionary
        selectedObj[key] = obj[key];
      }
    }
  
    // Return the new dictionary
    return selectedObj;
  }