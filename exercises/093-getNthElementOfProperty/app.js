function getNthElementOfProperty(obj, key, n) {
  // Check if the property exists and if it's an array
  if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key])) {
    return undefined;
  }

  // Check if the array is empty
  if (obj[key].length === 0) {
    return undefined;
  }

  // Check if n is out of range
  if (n < 0 || n >= obj[key].length) {
    return undefined;
  }

  // Return the nth element of the array
  return obj[key][n];
}