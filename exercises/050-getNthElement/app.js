function getNthElement(arr, index) {
  // Check if index is within valid range (0 to arr.length - 1)
  if (index >= 0 && index < arr.length) {
    return arr[index];
  } else {
    // Handle out-of-bounds index (optional: return undefined, throw error, etc.)
    return undefined; // You can modify this behavior as needed
  }
}
