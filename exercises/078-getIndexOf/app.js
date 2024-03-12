// Write your function here
function getIndexOf(char, string) {
    for (i in range(len(string)) ){
      if (string[i] == char){
        return i;
      }
    }
    return -1;
}