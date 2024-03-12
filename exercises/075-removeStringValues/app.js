function removeStringValues(obj) {
    // your code here
    for (const prop in obj) {
        if (typeof obj[prop] === 'string') {
        delete obj[prop];
        }
    }
}

let obj = {
    name: 'Sam',
    age: 20
}

removeStringValues(obj);
console.log(obj); // --> { age: 20 }
