// Write your function here
function getNthElementOfProperty(obj, key, n) {
  // Check if the property exists in the object and it's an array
  if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
    // Check if the array is not empty and if n is within the array bounds
    if (obj[key].length > 0 && n >= 0 && n < obj[key].length) {
      return obj[key][n]; // Return the nth element of the array
    }
  }
  return undefined; // Return undefined if conditions are not met
}