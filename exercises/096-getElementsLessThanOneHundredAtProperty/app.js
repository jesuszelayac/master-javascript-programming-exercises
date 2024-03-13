// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    if (key in obj && Array.isArray(obj[key])) {
      // Filter elements equal to 10 using filter
      return obj[key].filter(element => element < 100);
    }
    // Otherwise, return an empty array
    return [];
}