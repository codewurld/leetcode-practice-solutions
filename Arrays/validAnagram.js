

// 242 solution

var isAnagram = function (s, t) {

    if (s.length !== t.length) return false;

    let sSorted = s.split("").sort();
    let tSorted = t.split("").sort();

    // console.log(sSorted)

    for (let i = 0; i < s.length; i++) {
        if (sSorted[i] !== tSorted[i]) {
            return false;
        }
    }
    return true;
};