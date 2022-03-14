const array = [6, 2, 1, 10, 5, 300, 25, 8, 15];

const quickieSort = (arr) => {
    if (arr.length === 1) return arr;

    let pivot = arr[arr.length - 1];
    let lesserThan = [];
    let greaterThan = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            lesserThan.push(arr[i])
        } else if (arr[i] > pivot) {
            greaterThan.push(arr[i]);
        }
    }

    if (lesserThan.length > 0 && greaterThan.length > 0) {
        return [...quickieSort(lesserThan), pivot, ...quickieSort(greaterThan)];
    } else if (lesserThan.length > 0) {
        return [...quickieSort(lesserThan), pivot];
    } else
        return [pivot, ...quickieSort(greaterThan)]

}

// console.log(quickieSort(array))

// refactor

const quickerSort = (arr) => {

    if (arr.length < 2) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const lesserThanPivot = [];
    const greaterThanPivot = [];

    for (const num of arr.slice(0, arr.length - 1)) {
        num < pivot ? lesserThanPivot.push(num) : greaterThanPivot.push(num);
    }

    return [...quickerSort(lesserThanPivot), pivot, ...quickerSort(greaterThanPivot)]

}

console.log(quickerSort(array));