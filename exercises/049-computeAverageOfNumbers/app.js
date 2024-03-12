// Write your function here
function computeAverageOfNumbers(numbers) {
    // Check if the input is an array
    if (!Array.isArray(numbers)) {
      throw new TypeError("Input must be an array of numbers");
    }
  
    // Calculate the sum of all numbers
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
    // Get the length of the array (number of elements)
    const numberOfNumbers = numbers.length;
  
    // Check for empty array to avoid division by zero
    if (numberOfNumbers === 0) {
      return 0;
    }
  
    // Calculate the average by dividing the sum by the number of elements
    const average = sum / numberOfNumbers;
  
    return average;
  }