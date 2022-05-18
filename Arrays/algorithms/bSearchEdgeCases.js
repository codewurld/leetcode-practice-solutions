const myArr = [5, 7, 2, 100, 8, 87, 50];
const ourArr = [1, 5, 20, 27, 90, 101, 346, 587, 1000]
const anArr = [5];
const yoArr = [];
const muArr = [1];

const binarySearch = (arr, target) => {

    if (arr.length < 1) return false;

    if (arr.length === 1 && arr[0] === target) {
        return true;
    } else if (arr.length === 1 && arr[0] !== target) {
        return false;
    }


    let startIndex = 0;
    let endIndex = arr.length - 1;

    while (startIndex < endIndex) {
        let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

        if (arr[midIndex] === target) {
            return true;
        } else if (arr[midIndex < target]) {
            startIndex = midIndex + 1;
        } else {
            endIndex = midIndex - 1;
        }
    }
    return false;


}
console.log(binarySearch(ourArr, 5));
console.log(binarySearch(anArr, 5));
console.log(binarySearch(yoArr, 5));
console.log(binarySearch(muArr, 5));