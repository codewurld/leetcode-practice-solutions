// Problem 2011. Final Value of Variable After Performing Operations


var finalValueAfterOperations = function (operations) {

    let finalValue = 0;

    for (let operation of operations) {
        operation.includes("+") ? finalValue++ : finalValue--;
    }

    return finalValue;
};