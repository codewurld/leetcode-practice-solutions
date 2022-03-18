class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// print
const print = (root) => {
    if (root === null) return [];

    const stack = [root];
    const result = [];

    while (stack.length > 0) {
        const currentNode = stack.pop();
        result.push(currentNode.val);
        if (currentNode.right) stack.push(currentNode.right);
        if (currentNode.left) stack.push(currentNode.left);

    }
    return result;
}

console.log(print(a));

const printRecursive = (root) => {
    if (root === null) return [];

    const leftVals = printRecursive(root.left);
    const rightVals = printRecursive(root.right);

    return [root.val, ...leftVals, ...rightVals];
}

console.log(printRecursive(a));

// sum

const sumBT = (root) => {
    if (root === null) return [];

    const stack = [root];
    let sum = 0;

    while (stack.length > 0) {
        const currentNode = stack.pop();

        sum += currentNode.val;

        if (currentNode.left) stack.push(currentNode.left);
        if (currentNode.right) stack.push(currentNode.right);
    }
    return sum;
}

console.log(sumBT(a));

const sumRecursive = (root) => {
    if (root === null) return 0;

    return root.val + sumRecursive(root.left) + sumRecursive(root.right);

}

console.log(sumRecursive(a))
// target

const targetBT = (root, target) => {
    if (root === null) return "empty";

    const stack = [root];

    while (stack.length > 0) {
        const currentNode = stack.pop();

        if (currentNode.val === target) return "found";

        if (currentNode.left) stack.push(currentNode.left);
        if (currentNode.right) stack.push(currentNode.right);

    }
    return false;
}

console.log(targetBT(a, 19));

const targetBTRecursive = (root, target) => {
    if (root === null) return false;
    if (root.val === target) return true;

    return targetBTRecursive(root.left, target) || targetBTRecursive(root.right, target);
}

console.log(targetBTRecursive(a, 4));

// maxSumPath