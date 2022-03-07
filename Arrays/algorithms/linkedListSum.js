class NodeNo {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new NodeNo(2);
const b = new NodeNo(8);
const c = new NodeNo(3); .3
const d = new NodeNo(7);

a.next = b;
b.next = c;
c.next = d;
// iterative
const sumList = (head) => {
    let currentPointer = head;
    let sum = 0;

    while (currentPointer !== null) {
        sum += currentPointer.val;
        currentPointer = currentPointer.next;
    }
    return sum;
}

console.log(sumList(a));

// Recursive
const sumList = (head) => {
    if (head === null) return 0;
    return head.val + sumList(head.next);
}