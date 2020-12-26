// leetCode #12

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// 1 <= num <= 3999

function intToRoman(num) {
    const sets = [["I", "V"], ["X", "L"], ["C", "D"], ["M"]];
    let roman = "";
    let curDigitPos = 0;
    while (num > 0) {
        let curSet = sets[curDigitPos];
        let curDigit = num % 10;
        if (0 < curDigit && curDigit < 4) {
            roman = lessThree(curSet[0], curDigit) + roman;
        } else if (curDigit === 4) {
            roman = curSet[0] + curSet[1] + roman;
        } else if (curDigit === 5) {
            roman = curSet[1] + roman;
        } else if (curDigit < 9) {
            roman = curSet[1] + lessThree(curSet[0], curDigit - 5) + roman;
        } else if (curDigit === 9) {
            roman = curSet[0] + sets[curDigitPos + 1][0] + roman;
        };
        num = Math.trunc(num / 10);
        curDigitPos++;
    };
    return roman;
};

function lessThree(sym, num) {
    let string = ""
    for (let i = 0; i < num; i++) {
        string += sym;
    };
    return string;
};

console.log(intToRoman(1345))