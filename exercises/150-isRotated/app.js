function isRotated(str1, str2) {
    // your code here
    if (str1.length !== str2.length) {
      return false;
    }
    
    return (str2 + str2).includes(str1);
  }
  
  console.log(isRotated('hello world', 'orldhello w')); // --> true
  console.log(isRotated('hello world', 'omrel wp')); // --> false
  
