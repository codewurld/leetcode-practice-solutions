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


// find target 
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(5);
const b = new Node(10);
const c = new Node(15);
const d = new Node(20);
const e = new Node(25);
const f = new Node(30);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const binaryTreeTarget = (root, target) => {

    if (root === null) return false;
    if (root.val === target) return true;

    return binaryTree(root.left, target) || binaryTree(root.right, target);
}

console.log(binaryTree(a, 70));