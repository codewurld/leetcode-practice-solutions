// problem 230

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {

    if (root === null) return 0;
    // if(root.val === k) return k;

    const stack = [root];
    let array = [];

    while (stack.length > 0) {

        const currentValue = stack.pop();

        array.push(currentValue.val);

        if (currentValue.left) stack.push(currentValue.left);
        if (currentValue.right) stack.push(currentValue.right);

    }

    array = array.sort((a, b) => a - b);
    // console.log(array);

    return array[k - 1];
};