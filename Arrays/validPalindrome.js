// problem 125

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var isPalindrome = function (s) {

    if (s.length <= 1) return true;

    s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();

    let firstPointer = 0;
    let secondPointer = s.length - 1;

    while (firstPointer < secondPointer) {
        if (s.charAt(firstPointer) !== s.charAt(secondPointer)) {
            return false;
        } else {
            firstPointer++;
            secondPointer--;
        }
    }
    return true;
};