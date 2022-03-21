const fibonnaci = (n) => {
    if (n === 0 || n === 1) return n;

    const map = {};

    if (map[n]) {
        return map[n];
    } else {
        const result = fibonnaci(n - 1) + fibonnaci(n - 2);
        map[n] = result;
        return result;
    }

}

//   1,2,3,4,5

console.log(fibonnaci(25));