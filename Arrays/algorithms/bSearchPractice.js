let myArray = [2, 5, 9, 10, 17, 20, 25, 26, 100];
let target = 25;

const binarySearch = (arr, targetValue) => {
    let startIndex = 0;
    let endIndex = arr.length - 1;

    while (startIndex < endIndex) {
        let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

        if (arr[midIndex] === targetValue) {
            return true;
        } else if (arr[midIndex] < targetValue) {
            startIndex = midIndex + 1;
        } else {
            endIndex = midIndex - 1;
        }
    }
    return false;
}

console.log(binarySearch(myArray, target));