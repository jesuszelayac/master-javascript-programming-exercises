let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    // Loop through properties of the object
    for (const prop in obj) {
        // Check if the property value is a number and greater than the limit
        if (obj[prop] < num) {
        // Delete the property using the delete operator
        delete obj[prop];
        }
    }
    
}
