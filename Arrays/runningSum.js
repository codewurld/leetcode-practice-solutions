// solution 1480 Runing Sum of 1d Array

// brute force

var runningSum = function (nums) {

    let runningSum = [];
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let currentValue = nums[i];

        currentSum += currentValue;

        runningSum.push(currentSum);

    }

    return runningSum;
};