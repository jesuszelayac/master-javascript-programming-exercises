let obj = {
    firstName: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27
}

function countNumberOfKeys(obj) {
    // your code here
    // Use Object.keys() to get an array of the object's keys
    const keys = Object.keys(obj);

    // Return the length of the array, which represents the number of keys
    return keys.length;
   
}

let output = countNumberOfKeys(obj);
console.log(output); // --> 6
