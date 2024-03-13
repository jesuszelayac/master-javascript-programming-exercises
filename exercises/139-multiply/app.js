function multiply(num1, num2) {
    // If one of the numbers is zero, the result is zero
    if (num1 === 0 || num2 === 0) {
        return 0;
    }

    // If both numbers have the same sign or one of them is zero, return the product
    if ((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0)) {
        num1 = Math.abs(num1);
        num2 = Math.abs(num2);
        let total = 0;
        for (let i = 0; i < num1; i++) {
        total += num2;
        }
        return total;
    }

    // If one of the numbers is negative and the other is positive, return the negative product
    return -multiply(Math.abs(num1), Math.abs(num2));
}

let output = multiply(4, 7);
console.log(output); // --> 28
