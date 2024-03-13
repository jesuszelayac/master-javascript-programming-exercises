function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let largestNumber = -Infinity;
    let numberFound = false;

    for (let element of arr) {
        if (typeof element === 'number') {
        numberFound = true;
        if (element > largestNumber) {
            largestNumber = element;
        }
        }
    }

    return numberFound ? largestNumber : 0;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
