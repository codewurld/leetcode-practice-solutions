// Solution 1512 No of Good Pairs

var numIdenticalPairs = function (nums) {

    let goodPairsCount = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] == nums[j]) {
                goodPairsCount++;
            }
        }

    }
    return goodPairsCount;
};