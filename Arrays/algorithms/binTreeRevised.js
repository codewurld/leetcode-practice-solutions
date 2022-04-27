class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const binaryTree = (root) => {

    if (root === null) return [];

    const stack = [root];
    let result = [];

    while (stack.length > 0) {
        const currentNode = stack.pop();
        result.push(currentNode.val);

        if (currentNode.left) stack.push(currentNode.left);
        if (currentNode.right) stack.push(currentNode.right);

    }
    return result;
}

console.log(binaryTree(a));