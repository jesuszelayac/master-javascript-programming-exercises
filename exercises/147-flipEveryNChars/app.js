function flipEveryNChars(input, n) {
    let result = '';
    
    for (let i = 0; i < input.length; i += n) {
        let chunk = input.slice(i, i + n);
        let reversedChunk = '';
        for (let j = chunk.length - 1; j >= 0; j--) {
            reversedChunk += chunk[j];
        }
        result += reversedChunk;
    }

    return result;
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

