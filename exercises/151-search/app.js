function search(array, value) {
  // your code here
  let left = 0;
  let right = array.length - 1;

  // Binary search loop
  while (left <= right) {
    // Calculate the midpoint index
    const mid = Math.floor((left + right) / 2);

    // Check if the value is found at the middle index
    if (array[mid] === value) {
      return mid;
    } else if (array[mid] < value) {
      // Search in the right half
      left = mid + 1;
    } else {
      // Search in the left half
      right = mid - 1;
    }
  }

  // Value not found
  return null;
}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // --> 4
