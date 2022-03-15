
const arrayToBeSorted = [100, 5, 8, 2, 39, 48, 30, 6, 1, 1, 5, 39];

const quickSort = (arr) => {

    if (arr.length === 1) return arr;

    const pivot = arr.length - 1;
    const lesserThanPivot = [];
    const greaterThanPivot = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            lesserThanPivot.push(arr[i]);
        } else {
            greaterThanPivot.push(arr[i]);
        }

    }

    if (lesserThanPivot.length > 0 && greaterThanPivot > 0) {
        return [...quickSort(lesserThanPivot), pivot, ...quickSort(greaterThanPivot)];
    } else if (lesserThanPivot.length > 0) {
        return [...quickSort(lesserThanPivot), pivot];
    } else if (greaterThanPivot.length > 0) {
        return [pivot, ...quickSort(greaterThanPivot)];
    }

    return false;

}

console.log(quickSort(arrayToBeSorted));