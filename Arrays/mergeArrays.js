// interview cake -- Facebook Qs

// Interview cake -- fb QUESTION

function mergeArrays(myArray, alicesArray) {

    // Combine the sorted arrays into one large sorted array
    // if(myArray.length <= 0 || alicesArray.length <= 0) return;


    const mergedArray = [];

    let myCurrentIndex = 0;
    let alicesCurrentIndex = 0;
    let mergedCurrentIndex = 0;

    while (mergedCurrentIndex < (myArray.length + alicesArray.length)) {

        // const alicesFirstUnmerged = alicesArray[alicesCurrentIndex];
        // const myFirstUnmerged = myArray[myCurrentIndex];

        const isMyArrayExhausted = myCurrentIndex >= myArray.length;
        const isAlicesArrayExhausted = alicesCurrentIndex >= alicesArray.length;

        if (!isMyArrayExhausted && (isAlicesArrayExhausted || (myArray[myCurrentIndex] < alicesArray[alicesCurrentIndex]))) {
            mergedArray[mergedCurrentIndex] = myArray[myCurrentIndex];
            myCurrentIndex++;

        } else {
            mergedArray[mergedCurrentIndex] = alicesArray[alicesCurrentIndex];
            alicesCurrentIndex++;

        }

        mergedCurrentIndex++;
    }

    return mergedArray;
}
