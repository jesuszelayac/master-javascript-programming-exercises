function findPairForSum(array, number) {
  for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
          if (array[i] + array[j] === number) {
              return [array[i], array[j]];
          }
      }
  }
  return [];  // Return an empty array if no pair is found
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]