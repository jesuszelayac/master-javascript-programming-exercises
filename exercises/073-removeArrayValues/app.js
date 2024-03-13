function removeArrayValues(obj) {
    // your code here
    for (const key in obj) {
        // Check if the value is an array using Array.isArray
        if (Array.isArray(obj[key])) {
          // Delete the property using delete operator
          delete obj[key];
        }
      }
}