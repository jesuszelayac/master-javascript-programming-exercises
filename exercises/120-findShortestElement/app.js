function findShortestElement(arr) {
    // your code here
    if (arr.length === 0) {
        return '';
      }
    
      let shortest = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortest.length) {
          shortest = arr[i];
        }
      }
      return shortest;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'