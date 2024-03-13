function modulo(num1, num2) {
    // your code here
    if (isNaN(num1) || isNaN(num2)) {
        return NaN;
    }

    if (num2 === 0) {
        return NaN;
    }

    if (num1 === 0) {
        return 0;
    }

    let isNegative = num1 < 0;
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    while (num1 >= num2) {
        num1 -= num2;
    }

    return isNegative ? -num1 : num1;
}

let output = modulo(25, 4);
console.log(output); // --> 1
