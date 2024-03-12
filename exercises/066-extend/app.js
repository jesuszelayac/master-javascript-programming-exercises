let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // Loop through properties of the second object
    for (const prop in obj2) {
      // Check if the property doesn't exist in the first object
      if (!obj1.hasOwnProperty(prop)) {
        // Add the property from the second object to the first
        obj1[prop] = obj2[prop];
      }
    }
  }