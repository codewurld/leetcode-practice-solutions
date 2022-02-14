// 1365. How Many Numbers Are Smaller Than the Current Number


// Brute force

var smallerNumbersThanCurrent = function (nums) {

    let result = [];
    let total = 0;
    // let sortedArray 

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {

            if (nums[i] > nums[j]) {
                total++;
            }
        }
        result.push(total);
        total = 0;
    }
    return result;
};