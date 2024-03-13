function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let smallestNumber = Infinity;
  let numberFound = false;

  for (let element of arr) {
    if (typeof element === 'number') {
      numberFound = true;
      if (element < smallestNumber) {
        smallestNumber = element;
      }
    }
  }

  return numberFound ? smallestNumber : 0;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
