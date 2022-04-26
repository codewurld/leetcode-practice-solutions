const myArray = [5, 1, 25, 8, 9, 6, 100, 31, 50, 42, 7, 20];

const quickSort = (arr) => {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const lesserThan = [];
    const greaterThan = [];

    for (let num of arr.slice(0, arr.length - 1)) {
        if (num < pivot) {
            lesserThan.push(num);
        } else {
            greaterThan.push(num);
        }
    }

    if (lesserThan.length > 0 && greaterThan.length > 0) {
        return [...quickSort(lesserThan), pivot, ...quickSort(greaterThan)];
    } else if (lesserThan.length > 0) {
        return [...quickSort(lesserThan), pivot];
    } else if (greaterThan.length > 0) {
        return [pivot, ...quickSort(greaterThan)];
    }

}

console.log(quickSort(myArray));