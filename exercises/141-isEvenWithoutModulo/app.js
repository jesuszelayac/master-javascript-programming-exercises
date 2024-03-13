function isEvenWithoutModulo(num) {
    // For non-negative numbers
    while (num >= 2) {
        num -= 2;
    }
    // For negative numbers
    while (num <= -2) {
        num += 2;
    }
    // If the result is 0, it's even
    return num === 0;
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
