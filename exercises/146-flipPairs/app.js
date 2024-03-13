function flipPairs(input) {
    // your code here
    let flipped = '';
    for (let i = 0; i < input.length; i += 2) {
        // Check if there's a pair to flip
        if (i + 1 < input.length) {
            flipped += input[i + 1] + input[i];
        } else {
            // If the number of characters is odd, add the last character as is
            flipped += input[i];
        }
    }
    return flipped;
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
