function sum(arr) {
  let total = 0;
  for (let number of arr) {
    total += number;
  }
  return total;
}

function average(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return sum(arr) / arr.length;
}

// Test the implementation
console.log(average([1, 2])); // --> 1.5
