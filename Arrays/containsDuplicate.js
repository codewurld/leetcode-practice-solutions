// Problem 217

// Brute Force

var containsDuplicate = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {

            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;

};

// using Set to optimise 
// at expense of space

var containsDuplicate = function (nums) {

    let mySet = new Set(nums);

    if (mySet.size === nums.length) {
        return false;
    }
    return true;
};

// hashmap solution

var containsDuplicate = function (nums) {

    let map = {};

    for (let num of nums) {
        if (map[num] !== undefined) {
            return true;
        } else {
            map[num] = num;
        }
    }
    return false;
};