function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    // Check if the key exists and has an array value
    if (key in obj && Array.isArray(obj[key])) {
        // Check if the array is empty
        if (!obj[key].length) {
        return 0;
        }

        // Use reduce to calculate the sum
        return obj[key].reduce((sum, element) => sum + element, 0);
    }
    // Otherwise, return 0
    return 0;
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
