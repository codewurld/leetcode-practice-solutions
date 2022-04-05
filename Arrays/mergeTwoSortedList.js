// problem 21

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    //     one or more of inputs can be empty
    //     no memory constraint
    // merged linkedlist can contain duplicate in any order

    let resultNode = new ListNode();
    let dummyNode = resultNode;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            resultNode.next = list1;
            list1 = list1.next;
        } else {
            resultNode.next = list2;
            list2 = list2.next;
        }
        resultNode = resultNode.next;
    }
    if (list1) resultNode.next = list1;
    if (list2) resultNode.next = list2;

    return dummyNode.next;
};