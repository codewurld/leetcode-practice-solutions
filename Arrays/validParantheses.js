// problem 20

var isValid = function (s) {

    const map = {

        "(": ")",
        "{": "}",
        '[': ']'
    }

    const stack = [];

    for (let char of s) {
        if (map[char]) {
            stack.push(map[char])
        } else if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        }
    }
    return stack.length === 0;
};


var isValid = function (s) {
    let stack = [];
    let bracket = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let c of s)
        //  not exist close brackets, c = open brackets
        if (!bracket[c])
            stack.push(c);
        //  same type of bracket
        else if (stack.pop() == bracket[c])
            continue;
        //  not match
        else
            return false;
    return !stack.length;
};