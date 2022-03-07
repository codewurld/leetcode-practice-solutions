// O(N) O(1)
// RETURNS the head of new reversed linked list

const reverseList = (head) => {
    let currentPointer = head;
    let prevPointer = null;

    while (currentPointer !== null) {
        const next = currentPointer.next;
        currentPointer.next = prevPointer;
        prevPointer = currentPointer;
        currentPointer = next;
    }
    return prevPointer;
}

console.log(reverseList(a));

const reverseList2 = (head, prev = null) => {
    if(head === null) return prev;
    const next = head.next;
    head.next = prev;
    return reverseList(next, head);
}