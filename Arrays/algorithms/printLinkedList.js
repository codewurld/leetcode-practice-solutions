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

// iterative
const printLinkedList = (head) => {
    let currentPointer = head;

    while (currentPointer !== null) {
        console.log(currentPointer.val);
        currentPointer = currentPointer.next;
    }
}

console.log(printLinkedList(a))

// recursive solution

const printLinkedList2 = (head) => {
    if (head === null) return;
    console.log(head.val);
    printLinkedList2(head.next);
}

console.log(printLinkedList2(a));

// return LinkedList Values - iterative

const linkedListValues = (head) => {
    let result = [];

    let currentPointer = head;

    while (currentPointer !== null) {
        result.push(currentPointer.val);
        currentPointer = currentPointer.next;
    }
    return result;
}

console.log(linkedListValues(a));

// recursive solution

const linkedListValues2 = (head) => {
    const result = [];
    fillValues(head, result);
    return result;
}

const fillValues = (head, result) => {
    if (head === null) return;
    result.push(head.val);
    fillValues(head.next, result);
}

console.log(linkedListValues(a));

