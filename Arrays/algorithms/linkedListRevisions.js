class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new ListNode('A');
const b = new ListNode('B');
const c = new ListNode('C');
const d = new ListNode('D');

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

// console.log(printLinkedList(a));

const printLinkedRecursive = (head) => {

    if (head === null) return;

    console.log(head.val);

    return printLinkedRecursive(head.next);
}

// console.log(printLinkedRecursive(b));


const printLinkedListValues = (head) => {
    const result = [];

    let currentPointer = head;

    while (currentPointer !== null) {
        result.push(currentPointer.val);
        currentPointer = currentPointer.next;
    }
    return result;

}

console.log(printLinkedListValues(a))

//   recursive
const linkedListValRecursive = (head) => {
    if (head === null) return;

    const result = [];
    fillValues(head, result);

    return result;

}

const fillValues = (head, result) => {
    if (head === null) return;

    result.push(head.val);
    fillValues(head.next, result);
}

console.log(linkedListValRecursive(b));

// LINKEDLIST SUM
const linkedListSum = (head) => {
    if (head === null) return 0;

    let currentPointer = head;
    let sum = 0;

    while (currentPointer !== null) {
        sum += currentPointer.val;
        currentPointer = currentPointer.next;
    }
    return sum;
}

const linkedListSumRecursive = (head) => {

    if (head === null) return 0;

    return head.val + linkedListSumRecursive(head.next);
}

console.log(linkedListSumRecursive(a))


console.log(linkedListSum(a));

// LINKEDLIST FIND TARGET

const findTarget = (head, target) => {
    // if(head===null) return;

    let currentPointer = head;

    while (currentPointer !== null) {
        if (currentPointer.val === target) return true;
        currentPointer = currentPointer.next;
    }
    return false;
}

console.log(findTarget(a, 7))

const findTargetRecursively = (head, target) => {
    if (head === null) return false;
    if (head.val === target) return true;

    return findTargetRecursively(head.next, target);
}

console.log(findTargetRecursively(b, 58))