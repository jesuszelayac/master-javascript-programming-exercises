function getLargestElement(arr) {
  // your code here
  // Initialize largest element with the first element
  let largest = arr[0];

  // Iterate through the array to find the largest element
  for (const element of arr) {
    if (element > largest) {
      largest = element;
    }
  }

  return largest;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;