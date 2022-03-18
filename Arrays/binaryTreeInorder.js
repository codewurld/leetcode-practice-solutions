// problem 94

var inorderTraversal = function (root) {
    if (root === null) return [];

    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];

};