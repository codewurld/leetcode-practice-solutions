// Solution 1512 No of Good Pairs

// O(N^2) O(1)

var numIdenticalPairs = function (nums) {

    let goodPairsCount = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] == nums[j]) {
                goodPairsCount++;
            }
        }

    }
    return goodPairsCount;
};

// O(N) O(N)
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {

    if (nums.length === 0) return 0;

    let map = {};
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined) {
            count += map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }
    return count;
};