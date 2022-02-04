// problem no 1920 - Build Array From Permutation

// Brute Force Approach 
// Time complexity = O(n)
var buildArray = function (nums) {
    // initialise empty array
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        // ans[currentIndex] = nums[index => value of numsArray at index i]
        ans[i] = nums[nums[i]];
    } return ans;
};