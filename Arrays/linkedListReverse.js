// 206

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {

    let currentPointer = head;
    let prevPointer = null;

    while (currentPointer !== null) {
        let next = currentPointer.next;
        currentPointer.next = prevPointer;
        prevPointer = currentPointer;
        currentPointer = next;

    }
    return prevPointer;
};