function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    if (score > 100 || score < 0) {
        return 'INVALID SCORE';
    }
    
    let baseGrade;
    if (score >= 90) {
        baseGrade = 'A';
    } else if (score >= 80) {
        baseGrade = 'B';
    } else if (score >= 70) {
        baseGrade = 'C';
    } else if (score >= 60) {
        baseGrade = 'D';
    } else {
        return 'F';
    }

    if (score % 10 <= 2 && score != 100) {
        return baseGrade + '-';
    } else if (score % 10 >= 8 || score === 100) {
        return baseGrade + '+';
    } else {
        return baseGrade;
    }
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
