function computeProductOfAllElements(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return 0;
  }

  // Initialize the product to 1
  let product = 1;

  // Multiply each element to the product
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  // Return the product
  return product;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
