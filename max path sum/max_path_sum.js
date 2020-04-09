// Write a function that takes in a Binary Tree and returns its max path sum

function maxPathSum(tree) {
    let max = -Infinity;
    let curMPS = recurMPS(tree, max);
    return Math.max(max, curMPS);
}

function recurMPS(node, max) {
    if (node.left === null && node.right === null) return node.value;
    let leftSum = -Infinity;
    let rightSum = -Infinity;

    if (node.left) {
        leftSum = recurMPS(node.left, max);
    };
    if (node.right) {
        rightSum = recurMPS(node.right, max);
    };

    let curLeftSum = node.value + leftSum;
    let curRightSum = node.value + rightSum;
    if (node.left !== null && node.right !== null) {
        if (max < curLeftSum + rightSum) max = curLeftSum + rightSum;
    };

    return Math.max(node.value, curLeftSum, curRightSum);
}