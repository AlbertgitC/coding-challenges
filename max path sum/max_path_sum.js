// Write a function that takes in a Binary Tree and returns its max path sum

function maxPathSum(tree) {
    let curMPS = recurMPS(tree);
    return Math.max(curMPS[0], curMPS[1]);
}

function recurMPS(node, max = -Infinity) {
    if (node.left === null && node.right === null) return [node.value, node.value];
    let leftSum = [-Infinity, -Infinity];
    let rightSum = [-Infinity, -Infinity];
    let curMax = max;
    if (node.left) {
        leftSum = recurMPS(node.left, max);
        if (curMax < leftSum[1]) curMax = leftSum[1];
    };
    if (node.right) {
        rightSum = recurMPS(node.right, max);
        if (curMax < rightSum[1]) curMax = rightSum[1];
    };

    let curLeftSum = node.value + leftSum[0];
    let curRightSum = node.value + rightSum[0];
    
    curMax = Math.max(node.value, curLeftSum, curRightSum, curMax, (curLeftSum + rightSum[0]));

    return [Math.max(node.value, curLeftSum, curRightSum), curMax];
}