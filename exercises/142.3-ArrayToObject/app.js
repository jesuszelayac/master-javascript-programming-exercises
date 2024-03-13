function transformEmployeeData(array) {
  let transformedData = [];

  array.forEach(employee => {
    let employeeObj = {};
    employee.forEach(detail => {
      let key = detail[0];
      let value = detail[1];
      employeeObj[key] = value;
    });
    transformedData.push(employeeObj);
  });

  return transformedData;
}

let output = transformEmployeeData([
  [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
  [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]
]);
console.log(output); // --> [{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]

