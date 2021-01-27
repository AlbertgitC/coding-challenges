function minimumEffortPath(heights) {
    const visited = new Set();
    const minEfforts = new Array(heights.length)
    for (let i = 0; i < minEfforts.length; i++) {
        const cols = new Array(heights[0].length);
        for (let j = 0; j < cols.length; j++) {
            cols[j] = Infinity;
        };
        minEfforts[i] = cols;
    };

    minEfforts[0][0] = 0;

    for (let row of heights) {
        for (let col of row) {
            if (visited.has(`${row},${col}`)) continue;
            let curHeight = heights[row][col];
            let paths = [[row - 1, col], [row + 1, col], [row, col + 1], [row, col - 1]];
            for (let path of paths) {
                let pathHeight = heights[path[0]][path[1]];
                if (pathHeight !== undefined) {
                    let effort = Math.abs(curHeight - pathHeight);
                    minEfforts[path[0]][path[1]] = Math.min(effort, minEfforts[path[0]][path[1]]);
                };
            };
            visited.add(`${row},${col}`);
        };
    };

    return minEfforts[-1][-1];
};