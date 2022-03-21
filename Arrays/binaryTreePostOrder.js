// problem 145

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


    const stack = [root];
    let result = [];
    // let leftTree = [];
    // let rightTree = [];

    while (stack.length > 0) {

        const currentValue = stack.pop();
        result.push(currentValue.val);

        if (currentValue.left) {
            stack.push(currentValue.left);
            // leftTree.push(currentValue.left.val) 
        }

        if (currentValue.right) {
            stack.push(currentValue.right);
            // rightTree.push(currentValue.right.val)    
        }

        // return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
    }

    // return [...leftTree, rightTree, root.val];
    return result.reverse();
};

// recursive

const postorderTraversalRecursive = (root) => {

    if (root === null) return [];

    const leftChildren = postorderTraversalRecursive(root.left);
    const rightChildren = postorderTraversalRecursive(root.right);

    return [...leftChildren, ...rightChildren, root.val];

}