function sumDigits(num) {
    let sum = 0;
    let numberString = num.toString();
    
    for (let i = 0; i < numberString.length; i++) {
        if (i === 0 && numberString[i] === '-') {
            continue;
        } else {
            sum += Number(numberString[i]);
        }
    }

    return num < 0 ? sum - 2 * Number(numberString[1]) : sum;
}

let output = sumDigits(-316);
console.log(output); // --> 4
