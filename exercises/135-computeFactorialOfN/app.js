function computeFactorialOfN(n) {
    // your code here
    if (n === 0 || n === 1) {
        return 1;
    }

    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
