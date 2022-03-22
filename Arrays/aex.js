// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let resultString = ""

    for (let i = 0; i < A.length; i++) {
        if (A[i] < 0) {
            resultString += '<';
        } else if (A[i] > 0) {
            resultString += '>';
        } else {
            resultString += '=';
        }
    }

    return resultString;
}
