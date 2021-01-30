function verticalTraversal(root) {
    const table = {};
    traverse(root, 0, table);
    let cols = Object.keys(table);
    cols.sort((a, b) => a - b);
    let result = [];
    for (col of cols) {
        result.push(table[col]);
    };
    return result;
};

function traverse(node, col, table) {
    if (node === null) return;
    
    
    traverse(node.left, col - 1, table);
    
    if (col in table) {
        table[col].push(node.val);
        table[col] = table[col].sort((a, b) => a - b);
    } else {
        table[col] = [node.val];
    };

    traverse(node.right, col + 1, table);
};