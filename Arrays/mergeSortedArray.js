// Problem 88 - using two-pointer technique

// Two pointer technique
// Useful to keep track of an arr, str or LL
// processes 2 elements per loop instead of one, thereby increasing efficiency
// Types of problems - 2sums, reverse a string problems

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    let firstPointer = m - 1;
    let secondPointer = n - 1;
    let nums1Index = m + n - 1;

    while (secondPointer >= 0) {
        let firstValue = nums1[firstPointer];
        let secondValue = nums2[secondPointer];

        if (firstValue > secondValue) {
            nums1[nums1Index] = firstValue;
            firstPointer--;
            nums1Index--;
        } else {
            nums1[nums1Index] = secondValue;
            secondPointer--;
            nums1Index--;
        }
    }

};

