function isEitherEvenOrAreBoth7(num1, num2) {
    // Check for both 7's first to avoid unnecessary evenness checks
    if (num1 === 7 && num2 === 7) {
        return true;
    }
    
    // Check for even numbers using the modulo operator
    return (num1 % 2 === 0) || (num2 % 2 === 0);
}
