function verticalTraversal(root) {
    const table = {};
    traverse(root, [0, 0], table);
    let cols = Object.keys(table);
    cols.sort((a, b) => a - b);
    let result = [];
    for (col of cols) {
        let rows = Object.keys(table[col]);
        rows.sort((a, b) => a - b);
        let colVals = [];
        for (row of rows) {
            colVals = colVals.concat(table[col][row]);
        }
        result.push(colVals);
    };
    return result;
};

function traverse(node, [row, col], table) {
    if (node === null) return;
    
    
    traverse(node.left, [row + 1, col - 1], table);
    
    if (col in table) {
        if (row in table[col]) {
            table[col][row].push(node.val);
            table[col][row].sort((a, b) => a - b);
        } else {
            table[col][row] = [node.val];
        };
    } else {
        table[col] = {[row]: [node.val]};
    };

    traverse(node.right, [row + 1, col + 1], table);
};