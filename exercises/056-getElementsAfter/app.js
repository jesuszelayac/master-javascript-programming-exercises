function getElementsAfter(array, n) {
  // your code here
  if (n >= 0 && n < array.length) {
    // Use slice(n + 1) to extract elements after the given index (excluding it)
    return array.slice(n + 1);
  } else {
    // Handle out-of-bounds index (return empty array)
    return [];
  }
}

