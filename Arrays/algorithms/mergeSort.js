const arrayToBeSorted = [3, 2, 10, 6, 27, 18, 100, 5, 40];

const merge = (leftArr, rightArr) => {
    let resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            resultArr.push(leftArr[leftIndex]);
            leftIndex += 1;
        } else {
            resultArr.push(rightArr[rightIndex]);
            rightIndex += 1;
        }
    }
    return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

const mergeSort = (arr) => {
    if (arr.length < 2) return arr;

    let midIndex = Math.floor(arr.length / 2);
    // console.log(midIndex);
    let leftArr = arr.slice(0, midIndex);
    // console.log(leftArr);
    let rightArr = arr.slice(midIndex, arr.length);
    // console.log(rightArr);

    return merge(mergeSort(leftArr), mergeSort(rightArr));

}

console.log(mergeSort(arrayToBeSorted));