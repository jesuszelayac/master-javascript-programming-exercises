function isOddWithoutModulo(num) {
    // Check if the number is 0 or 1
    if (num === 0) {
        return false;
    } else if (num === 1) {
        return true;
    }

    // Make the number positive to handle negative numbers
    num = Math.abs(num);

    // Subtract 2 until the number is less than 2
    while (num >= 2) {
        num -= 2;
    }

    // If the resulting number is 1, it's odd; otherwise, it's even
    return num === 1;
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
