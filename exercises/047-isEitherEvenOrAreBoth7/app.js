function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    return (num1 || num2  % 2 === 0) || (num1 && num2 === 7);
}
