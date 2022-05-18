// problem 94 

var inorderTraversal = function (root) {

    if (root === null) return [];

    const leftNodes = inorderTraversal(root.left);
    const rightNodes = inorderTraversal(root.right);

    return [...leftNodes, root.val, ...rightNodes];
};