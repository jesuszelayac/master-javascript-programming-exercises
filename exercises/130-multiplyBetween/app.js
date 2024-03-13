function multiplyBetween(num1, num2) {
    // Check if num2 is greater than num1
    if (num2 <= num1) {
        return 0;
    }

    // Initialize the product to 1
    let product = 1;

    // Multiply numbers from num1 to num2 - 1
    for (let i = num1; i < num2; i++) {
        product *= i;
    }

    // Return the product
    return product;
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
