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
    let roman = "";
    let digits = Math.trunc(Math.log10(num)) + 1;
    while (num > 0) {
        let curDigit = num % 10;
        if (curDigit < 4) {
            roman = lessThree(roman, "I", curDigit);
        } else if (curDigit === 4) {
            roman = "IV";
        } else if (curDigit === 5) {
            roman = "V";
        } else if (curDigit < 9) {
            roman = "V" + lessThree(roman, "I", curDigit);
        } else if (curDigit === 9) {
            roman = "IX";
        };
        num = Math.trunc(num / 10);
    };
};

function lessThree(string, sym, num) {
    for (let i = 0; i < num; i++) {
        string += sym;
    };
    return string;
};