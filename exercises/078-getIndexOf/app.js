// Write your function here
function getIndexOf(char, string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      return i; // Return index of first match
    }
  }
  return -1; // Character not found
}