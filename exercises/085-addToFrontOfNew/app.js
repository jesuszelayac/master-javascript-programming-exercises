function addToFrontOfNew(arr, element) {
    // your code here
    const newArr = arr.slice();
    // Add the element to the beginning of the new array using unshift
    newArr.unshift(element);
    // Return the new array
    return newArr;
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]
