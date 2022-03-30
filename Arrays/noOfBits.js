
// solution 191 number of 1 bits

var hammingWeight = function (n) {

    n = n.toString(2);
    console.log(n)
    let numberOfBits = 0;

    for (let num of n) {
        if (num === '1') {
            numberOfBits += 1;
        }
    }
    return numberOfBits;
};