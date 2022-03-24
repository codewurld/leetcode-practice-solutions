const myArray = [1, 5, 10, 25, 63, 100, 500, 510, 800, 856]

const binaryRecursive = (arr, target) => {
    if (arr.length === 0) return false;
    if (arr.length === 1 && arr[0] !== target) return false;

    let midIndex = Math.floor(arr.length / 2);

    if (arr[midIndex] === target) {
        return true;
    } else if (arr[midIndex] < target) {
        return binaryRecursive(arr.slice(midIndex), target);
    } else if (arr[midIndex] > target) {
        return binaryRecursive(arr.slice(0, midIndex), target);
    }
}

console.log(binaryRecursive(myArray, 5));