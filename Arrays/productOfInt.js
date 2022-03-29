// product of integer interview cake Fb Questions

function getProductsOfAllIntsExceptAtIndex(intArray) {

    if (intArray.length === 0 || intArray === null) return intArray;

    let productsArray = [];
    let product = 1;
    // Make a list of the products
    for (let i = 0; i < intArray.length; i++) {
        for (let j = 0; j < intArray.length; j++) {
            if (intArray[i] !== intArray[j]) {
                product = product * intArray[i] * intArray[j];

            }

        }
        productsArray.push(product);
    }

    return productsArray;
}












