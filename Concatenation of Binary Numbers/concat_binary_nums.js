function concatenatedBinary(n) {
    // let binaryString = "";

    // for (let i = 1; i <= n; i++) {
    //     let numString = i.toString(2);
    //     binaryString += numString;
    // };
    
    // return parseInt(binaryString, 2) % (10 ** 9 + 7);

    let num = 0;

    for (let i = 1; i <= n; i++) {
        num *= (2 ** i.toString(2).length);
        num += i;
        num %= (10 ** 9 + 7);
    };

    return num;
};
