// solution 13

var romanToInt = function (string) {

    // xix

    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    // xix
    let result = romanMap[string.charAt(string.length - 1)];
    console.log(result);
    for (let i = string.length - 2; i >= 0; i--) {
        if (romanMap[string.charAt(i)] < romanMap[string.charAt(i + 1)]) {
            result -= romanMap[string.charAt(i)];
        } else {
            result += romanMap[string.charAt(i)];
        }
    }

    return result;
};