function getLargestElement(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return 0;
  }

  // Initialize the largest number to the first element of the array
  let largest = arr[0];

  // Iterate through the array to find the largest element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  // Return the largest element
  return largest;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;