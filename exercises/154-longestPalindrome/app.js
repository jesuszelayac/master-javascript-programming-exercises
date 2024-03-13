function findLongestPalindrome(sentence) {
  let longestPalindrome = '';
  for (let i = 0; i < sentence.length; i++) {
    for (let j = i; j <= sentence.length; j++) {
      let substring = sentence.substring(i, j);
      if (isPalindrome(substring) && substring.length >= longestPalindrome.length) {
        longestPalindrome = substring;
      }
    }
  }
  return longestPalindrome;
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  const cleanedWord = word.toLowerCase(); // Ensuring it's not case sensitive
  return cleanedWord === reverseString(cleanedWord);
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"

