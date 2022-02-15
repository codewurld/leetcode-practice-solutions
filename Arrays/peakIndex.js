// 852. Peak Index in a Mountain Array


// Brute force

var peakIndexInMountainArray = function (arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return 1;
        }
    }

};