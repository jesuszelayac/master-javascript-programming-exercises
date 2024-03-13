function detectOutlierValue(string) {
    const numbers = string.split(' ').map(Number);
    let evenCount = 0;
    let oddCount = 0;
    
    // Determine if the outlier is even or odd by checking the first three numbers
    for (let i = 0; i < 3; i++) {
        if (numbers[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    // Determine if we're looking for an odd or even outlier
    const isLookingForEven = oddCount > evenCount;

    // Find the outlier
    for (let i = 0; i < numbers.length; i++) {
        const isEven = numbers[i] % 2 === 0;
        if (isLookingForEven && isEven) {
            return i + 1; // Return 1-indexed position
        } else if (!isLookingForEven && !isEven) {
            return i + 1; // Return 1-indexed position
        }
    }
}

// Test the function
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3
console.log(detectOutlierValue("1 10 1 1"));  // --> 2

