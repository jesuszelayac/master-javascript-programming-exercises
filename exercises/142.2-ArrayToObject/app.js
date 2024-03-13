function fromListToObject(array) {
  // your code here
  // Check if the array is empty
  if (!array.length) {
    return {};
  }

  // Create an empty object to store key-value pairs
  const object = {};

  // Iterate through each sub-array (key-value pair)
  for (const subArray of array) {
    // Ensure the sub-array has at least two elements (key and value)
    if (subArray.length >= 2) {
      const [key, value] = subArray; // Destructuring assignment for key-value
      object[key] = value;
    }
  }

  return object;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
