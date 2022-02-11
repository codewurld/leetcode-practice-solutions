const testArray = [6, 8, 9, 1, 2, 5, 7, 15, 22, 3]

console.log(bubbleSort(testArray).toString());

function bubbleSort(arrayToBeSorted) {
    // let sortedArray = [];

    for (let i = 0; i < arrayToBeSorted.length; i++) {
        for (let j = i + 1; j < arrayToBeSorted.length; j++) {

            console.log(arrayToBeSorted[j]);
            if (arrayToBeSorted[i] > arrayToBeSorted[j]) {
                let temp = arrayToBeSorted[i];
                arrayToBeSorted[i] = arrayToBeSorted[j];
                arrayToBeSorted[j] = temp;
                console.log(temp);
            }
        }

        console.log(arrayToBeSorted)
    }

    // sort goes here

    return arrayToBeSorted;
}


// arr = [1, 2]

// let temp = arr[0]
// temp = 1

// arr[0] = arr[1]
// [2, 2]

// arr[1] = temp
// [2, 1]


