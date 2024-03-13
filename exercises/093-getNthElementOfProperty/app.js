// Write your function here
function addToFrontOfNew(arr, element) {
    const newArr = arr.slice();
    // Add the element to the beginning of the new array using unshift
    newArr.unshift(element);
    // Return the new array
    return newArr;
  }