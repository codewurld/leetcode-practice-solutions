const myArray = [5, 7, 2, 1, 100, 65, 18, 25, 33, 13, 150];

const mergedSort = (arr) => {

    if (arr.length < 2) return arr;

    let midIndex = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, midIndex);
    let rightArr = arr.slice(midIndex, arr.length);

    return merge(mergedSort(leftArr), mergedSort(rightArr));
}

const merge = (leftArr, rightArr) => {

    let leftIndex = 0;
    let rightIndex = 0;
    let result = [];

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

console.log(mergedSort(myArray));