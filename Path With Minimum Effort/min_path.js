function minimumEffortPath(heights) {
    const minEfforts = new Array(heights.length)
    for (let i = 0; i < minEfforts.length; i++) {
        const cols = new Array(heights[0].length);
        for (let j = 0; j < cols.length; j++) {
            cols[j] = Infinity;
        };
        minEfforts[i] = cols;
    };

    minEfforts[0][0] = 0;

    let que = [[0, 0]];

    while (que.length > 0) {
        let [ row, col ] = que.shift();
        let curHeight = heights[row][col];
        let paths = [[row - 1, col], [row + 1, col], [row, col + 1], [row, col - 1]];
        for (let path of paths) {
            let pathHeight = heights[path[0]] === undefined ? undefined : heights[path[0]][path[1]];
            if (pathHeight !== undefined) {
                let effort = Math.abs(curHeight - pathHeight);
                let curMaxEffort = Math.max(effort, minEfforts[row][col]);
                if (curMaxEffort < minEfforts[path[0]][path[1]]) {
                    minEfforts[path[0]][path[1]] = curMaxEffort;
                    que.push(path);
                };
            };
        };
    };

    return minEfforts[minEfforts.length - 1][minEfforts[0].length - 1];
};