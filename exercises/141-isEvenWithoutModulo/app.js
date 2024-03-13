function isEvenWithoutModulo(num) {
    // your code here
    // Even numbers have a 0 in the least significant bit, so their bitwise AND with 1 will be 0
    return num & 1 === 0;
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
