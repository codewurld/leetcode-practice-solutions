// 8 Feb Session w/ Stu (Mentor)

const inputArray = [2, 4, 6, 7, 8, 9, 14, 16, 18, 21, 22, 24, 29, 32];

console.log(isValueInArray(4, inputArray));
// console.log(isValueInArray(23, inputArray));

function isValueInArray(searchValue, searchArray) {
    //   console.log("====================================");

    //   console.log("Searching for: " + searchValue);
    //   console.log("Searching in: " + searchArray.toString());

    let midIndex = Math.floor(searchArray.length / 2);
    let midValue = searchArray[midIndex]

    //   console.log("midIndex is: " + midIndex);
    //   console.log("array length is: " + searchArray.length);

    //   console.log("midVal is: " + midValue);

    if (searchValue === midValue) {
        return "searchValue Found"
    } else if (searchArray.length <= 1) {
        return "searchValue Not Found"
    } else {

        let subArray = []

        if (midValue < searchValue) {
            //   console.log("Extracting the right array");
            subArray = searchArray.slice(midIndex);
        } else if (midValue > searchValue) {
            //   console.log("Extracting the left array");
            subArray = searchArray.slice(0, midIndex);
        }

        // recurse
        return isValueInArray(searchValue, subArray)
    }
}


