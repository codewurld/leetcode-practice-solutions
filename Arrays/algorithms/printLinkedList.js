class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;


const printLinkedList = (head) => {
    let currentPointer = head;

    while (currentPointer !== null) {
        console.log(currentPointer.val);
        currentPointer = currentPointer.next;
    }
}

console.log(printLinkedList(a))

// iterative solution

const printLinkedList2 = (head) => {
    if (head === null) return;
    console.log(head.val);
    printLinkedList2(head.next);
}

console.log(printLinkedList2(a));