// problem 145

// Given the root of a binary tree, return the postorder traversal of its nodes' values.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {

    if (root === null) return [];

    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
};

// O(N) O(N)
const postorderTraversal = (root) => {
    if (!root) return [];

    const traversedResult = []
    const stack = [root];

    while (stack.length) {
        const currentNode = stack.pop();

        if (currentNode.left) stack.push(currentNode.left);
        if (currentNode.right) stack.push(currentNode.right);

        traversedResult.push(currentNode.val);
    }
    return traversedResult.reverse();
};