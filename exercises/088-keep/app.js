// Write your function here
function keep(arr, keeper) {
    return arr.filter(function(element) {
      return element === keeper;
    });
}