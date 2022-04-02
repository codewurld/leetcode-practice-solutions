// problem 226

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root === null) return root;

    const stack = [root];

    while (stack.length > 0) {
        const currentNode = stack.pop();

        [currentNode.left, currentNode.right] = [currentNode.right, currentNode.left];

        if (!currentNode) continue;

        if (currentNode.left) {
            stack.push(currentNode.left);
        }

        if (currentNode.right) {
            stack.push(currentNode.right);
        }
    }
    return root;
};