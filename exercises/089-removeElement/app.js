// Write your function here
function removeElement(arr, discarder) {
    // Use filter to create a new array with elements that don't match the discarder
    return arr.filter(element => element !== discarder);
  }