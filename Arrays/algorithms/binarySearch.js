var search = function (nums, target) {
    let startIndex = 0;
    let endIndex = nums.length - 1;

    while (startIndex <= endIndex) {
        // 20 - 10 / 2 = 5 + 10 = 15
        let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

        if (nums[midIndex] === target) {
            return midIndex;
        } else if (nums[midIndex] < target) {
            startIndex = midIndex + 1;
        } else {
            endIndex = midIndex - 1;
        }
    }
    return - 1;
};