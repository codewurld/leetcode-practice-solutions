// solution 169

// O(N) O(1)
var majorityElement = function (nums) {

    let hashmap = {};

    for (const num of nums) {
        hashmap[num] = hashmap[num] + 1 || 1;
    }

    for (const key in hashmap) {
        if (hashmap[key] > Math.floor(nums.length / 2)) {
            return key;
        }
    }
};

// O(N) O(1)
var majorityElement = function (nums) {

    let count = 0;
    let map = {}
    let n = Math.floor(nums.length / 2);

    for (let num of nums) {
        if (map[num]) {
            map[num]++;
        } else {
            map[num] = 1;
        }
        if (map[num] > n) return num;
    }

};

// brute force approach

var majorityElement = function (nums) {

    let majorityEl = nums.length / 2;

    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++
            }
        }
        if (count > majorityEl) {
            return nums[i];
        }
        return - 1;
    }
};