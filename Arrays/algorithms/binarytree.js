class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//         a
//        /  \
//       b    c
//     /  \    \
//    d    e    f

// Iterative solution
const depthFirstValue = (root) => {

    if (root === null) return [];

    const stack = [root];
    const arr = [];

    while (stack.length > 0) {
        const current = stack.pop();
        arr.push(current.val);

        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left)
    }
    return arr;

}

console.log(depthFirstValue(a));

// recursive solution

const depthFirstValue2 = (root) => {
    if (root === null) return [];

    const leftVals = depthFirstValue2(root.left);
    const rightVals = depthFirstValue2(root.right);

    return [root.val, ...leftVals, ...rightVals];
}

console.log(depthFirstValue2(a));

// Iterative - breadthfirst value

const breadthFirstValue = (root) => {
    if (root === null) return [];

    const queue = [root];
    const result = [];
    // queue = [a,b,c,d,e,f]
    // result = [a,b,c,d,e,f]

    // a.left = b;
    // a.right = c;
    // b.left = d;
    // b.right = e;
    // c.right = f;
    while (queue.length > 0) {
        const current = queue.shift();

        result.push(current.val);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return result;
}