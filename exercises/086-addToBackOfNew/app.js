function addToBackOfNew(arr, element) {
    // your code here
    // Create a copy of the array using slice
    const newArr = arr.slice();
    // Append the element to the end of the new array using push
    newArr.push(element);
    // Return the new array
    return newArr;
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
