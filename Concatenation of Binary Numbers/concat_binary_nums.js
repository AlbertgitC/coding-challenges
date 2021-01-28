function concatenatedBinary(n) {
    let binaryString = "";

    for (let i = 1; i <= n; i++) {
        let numString = i.toString(2);
        binaryString += numString;
    };

    return parseInt(binaryString, 2);
};