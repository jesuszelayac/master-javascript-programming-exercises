function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if (key in obj && Array.isArray(obj[key])) {
    // Check if the array is empty
    if (!obj[key].length) {
      return 0;
    }

    // Calculate the sum using reduce
    const sum = obj[key].reduce((acc, element) => acc + element, 0);
    // Calculate and return the average
    return sum / obj[key].length;
  }
  // Otherwise, return 0
  return 0;
}