// problem 9

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {

    x = x.toString();


    console.log(x)

    let firstPointer = 0;
    let secondPointer = x.length - 1;
    let isPal = true;

    while (firstPointer < secondPointer) {
        if (x.charAt(firstPointer) !== x.charAt(secondPointer)) {
            isPal = false;
            break;
        } else {
            firstPointer++;
            secondPointer--;
        }
    }
    return isPal;
};


var isPalindrome = function (x) {

    let convertedString = x.toString();

    if (convertedString.length <= 1) return true;

    if (convertedString.charAt(0) === convertedString.charAt(convertedString.length - 1)) {
        return isPalindrome(convertedString.slice(1, convertedString.length - 1))
    }

    return false;
};