// Return the number of islands in the given ocean, 0 is ocean, 1  is island.
// Islands connected horizontally or vertically are counted as one, but not diagonally.


// let ocean1 = [
//   [0, 0, 1, 0, 0],
//   [1, 1, 1, 0, 0],
//   [1, 1, 0, 0, 1],
//   [0, 0, 1, 1, 1],
//   [1, 1, 0, 1, 1]
// ];

function island_counter(ocean) {
    let num_islands = 0;
    let visited = [];

    for (let i = 0; i < ocean.length; i++) {
        for (let j = 0; j < ocean[i].length; j++) {
            if (ocean[i][j] === 0 || visited.includes(JSON.stringify([i, j]))) continue;

            num_islands += 1;
            explore(ocean, visited, [i, j]);
        };
    };

    return num_islands;
};

function explore(ocean, visited, pos) {
    visited.push(JSON.stringify(pos));

    let north = {};
    if (pos[0] - 1 < 0) {
        north.exist = false;
    } else {
        north.exist = true;
        north.pos= [pos[0] - 1, pos[1]];
    };

    let east = {};
    if (pos[1] + 1 > ocean[0].length - 1) {
        east.exist = false;
    } else {
        east.exist = true;
        east.pos = [pos[0], pos[1] + 1];
    };

    let south = {};
    if (pos[0] + 1 > ocean.length - 1) {
        south.exist = false;
    } else {
        south.exist = true;
        south.pos = [pos[0] + 1, pos[1]];
    };

    let west = {};
    if (pos[1] - 1 < 0) {
        west.exist = false;
    } else {
        west.exist = true;
        west.pos = [pos[0], pos[1] - 1];
    };

    [north, east, south, west].forEach(side => {
        if (side.exist && ocean[side.pos[0]][side.pos[1]] === 1 && !(visited.includes(JSON.stringify(side.pos)))) {
            explore(ocean, visited, side.pos);
        };
    });
}

let ocean1 = [
  [0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 1, 1, 1],
  [1, 1, 0, 1, 1]
];

let ocean2 = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0]
];

console.log(island_counter(ocean2));
