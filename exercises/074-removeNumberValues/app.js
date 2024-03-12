function removeNumberValues(obj) {
    // your code here
    for (const prop in obj) {
        if (typeof obj[prop] === 'number') {
        delete obj[prop];
        }
    }
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
