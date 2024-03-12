function convertDoubleSpaceToSingle(str) {
    // your code here
    // Split the string into words using a single space as the delimiter
    const words = str.split(' ');

    // Join the words back together with a single space between them
    return words.join(' ');
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
