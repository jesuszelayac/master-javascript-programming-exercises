function squareElements(arr) {
  // your code here
  let squaredArray = arr.map(element => element * element);
  return squaredArray;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
