function findShortestWordAmongMixedElements(arr) {
    // your code here
    let shortestWord = "";
    let shortestLength = Infinity;

    // Iterate through the array
    for (const element of arr) {
        // Check if element is a string and has a shorter length
        if (typeof element === "string" && element.length < shortestLength) {
        shortestWord = element;
        shortestLength = element.length;
        }
    }

    // Return shortest word (or empty string if none found)
    return shortestWord || "";
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
