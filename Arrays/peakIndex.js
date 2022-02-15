// 852. Peak Index in a Mountain Array


// Brute force

var peakIndexInMountainArray = function (arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= arr[i + 1] && arr[i] >= arr[i - 1]) {
            return i;
        }
    }
    return -1;
};

// Binary Search

var peakIndexInMountainArray = function (arr) {

    let startIndex = 0;
    let endIndex = arr.length - 1;

    while (startIndex < endIndex) {
        let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

        if (arr[midIndex] < arr[midIndex + 1]) {

            startIndex = midIndex + 1;
        } else {
            endIndex = midIndex;
        }

    }
    return startIndex;
}