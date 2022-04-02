// Problem 1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Brute Force Approach (On^2)
var twoSum = function (nums, target) {

    //     loop through each index and check if it's sum adds up to target
    //     when it does return index nums of sum figures

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

// Two pointer approach - O(n)
var twoSum = function (nums, target) {

    //     set pointers a and b
    //     if value of pointer a + b == target, return index
    //     else if sumvalue < target, increament pointer1;
    // else decrement pointer 2;

    let pointer1 = 0;
    let pointer2 = nums.length - 1;

    while (pointer1 < pointer2) {
        let sum = nums[pointer1] + nums[pointer2];

        if (sum === target) {
            return [pointer1, pointer2]
        } else if (sum < target) {
            pointer1 += 1;
        } else {
            pointer2--;
        }
    }
};

// Using hashmap O(N)

var twoSum = function (nums, target) {

    //     set pointers a and b
    //     if value of pointer a + b == target, return index
    //     else if sumvalue 

    let map = {}

    for (let i = 0; i < nums.length; i++) {
        let currentValue = nums[i];
        let complement = target - currentValue;

        if (map[complement] !== undefined) {
            return [map[complement], i];
        } else {
            map[currentValue] = i;
        }

    }
};

    // [2,7,11,15], target = 9
    // complement = 9 - 2 => 7

    // if key of complement exist in map
    // return key and i
    // else add currentValue as a map key and its' value as the index