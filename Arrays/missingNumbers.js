// 268 solution


/**
 * @param {number[]} nums
 * @return {number}
 */

// O(NLOGN) O(N)
var missingNumber = function (nums) {

    let result = 0;
    let sortedNums = nums.sort((a, b) => a - b);

    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] !== i) {
            result = i;
            break;
        } else {
            result = i + 1;
        }
    }
    return result;
};

// O(N) O(1)
var missingNumber = function (nums) {

    let n = nums.length;
    let target = Math.floor(n * (n + 1) / 2);
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

    }
    return target - sum;
};