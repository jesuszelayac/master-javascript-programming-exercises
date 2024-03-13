function computeProductOfAllElements(arr) {
  // your code here
  return arr.reduce((product, element) => product * element, 1);
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
