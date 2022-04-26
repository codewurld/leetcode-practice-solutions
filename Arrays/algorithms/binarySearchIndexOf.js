const myArray = [5, 7, 10, 13, 27, 41, 52, 56, 62];

const binarySearch = (array, target) => {
    let startIndex = 0;
    let endIndex = array.length - 1;

    while (startIndex <= endIndex) {
        let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

        if (array[midIndex] === target) {
            return array.indexOf(target);
        } else if (array[midIndex] < target) {
            startIndex = midIndex + 1;
        } else {
            endIndex = midIndex - 1;
        }
    }
    return false;
}

console.log(binarySearch(myArray, 56));