function getAllLetters(str) {
    // your code here
    return str.split('').filter(char => {
        // Check if character code is between 'a' and 'z' (lowercase) or 'A' and 'Z' (uppercase)
        const charCode = char.charCodeAt(0);
        return (charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90);
      });
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
