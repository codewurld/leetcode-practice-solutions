// solution 169

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