function multiplyBetween(num1, num2) {
    // your code here
    var prod = 1;
    for (var i = num1; i < num2; i++) {
        prod *= i;
     
    }
    return prod;
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
