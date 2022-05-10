class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new ListNode(80);
const b = new ListNode(7);
const c = new ListNode(50);
const d = new ListNode(35);

a.next = b;
b.next = c;
c.next = d;

const linkedList = (head) => {
    if (head === null) return null;

    let currentPointer = head;
    let prevPointer = null;

    while (currentPointer !== null) {
        let next = currentPointer.next;
        currentPointer.next = prevPointer;
        prevPointer = currentPointer;
        currentPointer = next;
    }
    return prevPointer;

}

console.log(linkedList(a))