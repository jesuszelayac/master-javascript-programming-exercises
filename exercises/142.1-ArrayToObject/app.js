function transformFirstAndLast(array) {
  // your code here
  // Check if the array is empty
  if (!array.length) {
    return {};
  }

  // Destructuring assignment to get first and last elements
  const [firstElement, ...rest] = array;
  const lastElement = rest.pop();

  // Create the object using property shorthand
  return { [firstElement]: lastElement };
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
