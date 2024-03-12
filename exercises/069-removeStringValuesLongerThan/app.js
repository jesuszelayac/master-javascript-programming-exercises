function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (const prop in obj) {
    // Check if the property value is a number and greater than the limit
    if (obj[prop].length > num) {
    // Delete the property using the delete operator
    delete obj[prop];
    }
  };
  return obj;
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
