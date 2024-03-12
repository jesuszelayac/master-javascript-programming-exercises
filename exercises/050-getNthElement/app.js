function getNthElement(array, n) {
  // Add your code after this line
  function getNthElement(arr, index) {
    // Check if the array is empty
    if (!arr || arr.length === 0) {
      return undefined;
    }
  
    // Handle negative indexes (access from the end)
    const adjustedIndex = index < 0 ? arr.length + index : index;
  
    // Check if the adjusted index is within bounds
    if (adjustedIndex >= 0 && adjustedIndex < arr.length) {
      return arr[adjustedIndex];
    }
  
    // Return undefined for out-of-bounds indexes
    return undefined;
  }
}
