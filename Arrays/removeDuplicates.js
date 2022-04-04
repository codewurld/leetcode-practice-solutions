// problem 26 - remove duplicates

var removeDuplicates = function (nums) {


    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] === nums[i]) {
            nums.splice(i, 1)
            i--;
        }
    }

    return nums.length;
};

// solution 2
var removeDuplicates = function (nums) {

    let pointer1 = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[pointer1] !== nums[i]) {
            pointer1++;
            nums[pointer1] = nums[i]
        }
    }
    return pointer1 + 1;
};