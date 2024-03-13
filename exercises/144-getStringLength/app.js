function getStringLength(string) {
    let length = 0;
    while (string !== '') {
        length++;
        string = string.slice(1);
    }
    return length;
}

let output = getStringLength('hello');
console.log(output); // --> 5
