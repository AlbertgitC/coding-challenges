// leet code #6

function convert(s, numRows) {
    if (numRows === 1) return s;
    const matrix = new Array(numRows).fill(0).map(() => ([]));
    let down = true;
    let curRow = 0;
    for (let i = 0; i < s.length; i++) {
        if (down) {
            matrix[curRow].push(s[i]);
            if (curRow === numRows - 1) {
                down = false;
                curRow--;
            } else {
                curRow++;
            };
        } else {
            matrix[curRow].push(s[i]);
            if (curRow === 0) {
                down = true;
                curRow++;
            } else {
                curRow--;
            };
        }; 
    };
    let ans = "";
    for (let row of matrix) {
        ans += row.join("");
    }
    return ans;
};

console.log(convert("PAYPALISHIRING", 3))