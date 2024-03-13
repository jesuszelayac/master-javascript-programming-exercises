function getAllElementsButNth(array, n) {
    // your code here
    // Create a copy using slice to avoid modifying the original
    const newArr = array.slice();
    // Remove the nth element using splice
    newArr.splice(n, 1);
    // Return the new array
    return newArr;
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
