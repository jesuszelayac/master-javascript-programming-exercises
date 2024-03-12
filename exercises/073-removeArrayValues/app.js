function removeArrayValues(obj) {
    // your code here
    // Loop through properties of the object
    for (const prop in obj) {
        if (typeof obj[prop] === 'array') {
        delete obj[prop];
        }
    }
}