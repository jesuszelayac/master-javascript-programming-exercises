// Write your function here
function getFirstElementOfProperty(obj, key) {
    if (key in obj && Array.isArray(obj[key])) {
      // Return the first element if the array is not empty
      return obj[key].length > 0 ? obj[key][0] : undefined;
    }
    // Otherwise, return undefined
    return undefined;
  }