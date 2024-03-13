function isIsogram(text) {
  // your code here
  // Convert the text to lowercase to handle case-insensitive comparison
  text = text.toLowerCase();

  // Use a set to efficiently check for duplicate characters
  const seenChars = new Set();

  // Iterate through each character in the string
  for (const char of text) {
    // Check if the character is a letter (using isAlphabetic())
    if (char.toLowerCase().match(/[a-z]/)) {
      if (seenChars.has(char)) {
        return false; // Duplicate found, not an isogram
      }
      seenChars.add(char);
    }
  }

  // No duplicates found, it's an isogram
  return true;
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
