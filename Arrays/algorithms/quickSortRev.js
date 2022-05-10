const myArray = [5, 7, 2, 1, 100, 65, 18, 25, 33, 13, 150];

const quickSort = (arr) => {
    if (arr.length < 2) return arr;

    let pivot = arr[arr.length - 1];
    let lesserThanPivot = [];
    let greaterThanPivot = [];

    for (let num of arr.slice(0, arr.length - 1)) {
        num < pivot ? lesserThanPivot.push(num) : greaterThanPivot.push(num);
    }

    if (lesserThanPivot.length > 0 && greaterThanPivot.length > 0) {
        return [...quickSort(lesserThanPivot), pivot, ...quickSort(greaterThanPivot)];
    } else if (lesserThanPivot.length > 0) {
        return [...quickSort(lesserThanPivot), pivot];
    } else if (greaterThanPivot.length > 0) {
        return [pivot, ...quickSort(greaterThanPivot)];
    }
}

console.log(quickSort(myArray));