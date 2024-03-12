function removeEvenValues(obj) {
    // your code here
    for (const prop in obj) {
      if (obj[prop]%2===0) {
      delete obj[prop];
      }
    };
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
