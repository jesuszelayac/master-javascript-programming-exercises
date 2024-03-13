function listAllValues(obj) {
  let valuesArray = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      valuesArray.push(obj[key]);
    }
  }
  return valuesArray;
}

let output = listAllValues({ name: 'Krysten', age: 33, hasPets: false });
console.log(output); // --> [ 'Krysten', 33, false ]
