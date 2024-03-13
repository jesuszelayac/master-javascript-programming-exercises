// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
    if (key in obj && Array.isArray(obj[key])) {
      // Filter elements equal to 10 using filter
      return obj[key].filter(element => element === 10);
    }
    // Otherwise, return an empty array
    return [];
  }