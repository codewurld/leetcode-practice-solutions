// Problem 141

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {

    let nodeSet = new Set();

    let currentPointer = head;

    while (currentPointer !== null) {

        if (nodeSet.has(currentPointer)) {
            return true;
        } else {
            nodeSet.add(currentPointer);
            currentPointer = currentPointer.next;
        }
    }
    return false;
};


const hasCycle = (head) => {
    let fast = head;
    while (fast && fast.next) {
        head = head.next;
        fast = fast.next.next;
        if (head === fast) return true;
    }
    return false;
};