class NodeNo {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new NodeNo(2);
const b = new NodeNo(8);
const c = new NodeNo(3);
const d = new NodeNo(7);

a.next = b;
b.next = c;
c.next = d;

// iterative
const findVal = (head, target) => {
    let currentPointer = head;

    while (currentPointer !== null) {
        if (currentPointer.val === target) return true;
        currentPointer = currentPointer.next;
    }
    return false;
}

console.log(findVal(a, 3));

// Recursive
const findVal2 = (head, target) => {
    if (head.val === target) return true;
    if (head === null) return false;

    return findVal2(head.next, target);
}

console.log(findVal2(a, 4));