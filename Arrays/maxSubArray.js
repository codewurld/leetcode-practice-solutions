

// solution 53 max subArray

var maxSubArray = function (nums) {

    let sum = 0;
    let maxSub = nums[0];

    for (let num of nums) {
        if (sum < 0) sum = 0;

        sum += num;
        maxSub = Math.max(maxSub, sum);

    }
    return maxSub;

};