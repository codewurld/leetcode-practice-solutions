// problem 896 

var isMonotonic = function (nums) {

    let increasing = true;
    let decreasing = true;

    for (let i = 0; i < nums.length - 1; i++) {

        if (nums[i] < nums[i + 1]) {
            decreasing = false;
        } else if (nums[i] > nums[i + 1]) {
            increasing = false;
        }
    }
    return increasing || decreasing;
};