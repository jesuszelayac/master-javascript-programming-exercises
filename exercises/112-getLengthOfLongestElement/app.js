function getLengthOfLongestElement(arr) {
    // Your code here
    let maxLength = 0;
    for (let str of arr) {
        if (str.length > maxLength) {
        maxLength = str.length;
        }
    }
    return maxLength;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
