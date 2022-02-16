// quick sort 

const myArray = [7, 8, 1, 3, 87, 2, 5, 243];

const quickSort = (arr) => {

    if (arr.length === 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const lesserThanPivot = [];
    const greaterThanPivot = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            lesserThanPivot.push(arr[i]);
        } else if (arr[i] > pivot) {
            greaterThanPivot.push(arr[i]);
        }
    }
    if (lesserThanPivot.length > 0 && greaterThanPivot.length > 0) {
        return [...quickSort(lesserThanPivot), pivot, ...quickSort(greaterThanPivot)];
    } else if (lesserThanPivot.length > 0) {
        return [...quickSort(lesserThanPivot), pivot];
    } else {
        return [pivot, ...quickSort(greaterThanPivot)];
    }
}

// refactor