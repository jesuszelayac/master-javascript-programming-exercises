// Write your function here
function getLastElementOfProperty(obj, key) {
    if (key in obj && Array.isArray(obj[key])) {
      // Access the last element using length - 1
      return obj[key][obj[key].length - 1];
    }
    // Otherwise, return undefined
    return undefined;
}