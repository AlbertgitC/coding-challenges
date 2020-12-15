function longestPalindrome(str) {
    let longest = str[0];
    let startIdx = 0;
    let endIdx = 1;
    const charsArr = str.split("");
    while (startIdx < str.length) {
        let subStr = charsArr.slice(startIdx, endIdx);
        let str1 = subStr.join("");
        let str2 = subStr.reverse().join("");
        if (str1 === str2 && str1.length > longest.length) {
            longest = str1;
        };
        endIdx++;
        if (endIdx > str.length) {
            startIdx++;
            endIdx = startIdx + 1;
        }
    };
    return longest;
};

function longestPalindrome2(str) {
    let longest = str[0];
    for (let i = 0; i < str.length; i++) {
        for (let j = str.length; j > i; j--) {
            let subStr1 = str.slice(i, j);
            let subStr2 = subStr1.split("").reverse().join("");
            if (subStr1 === subStr2 && subStr1.length > longest.length) {
                longest = subStr1;
            };
        };
    };
    return longest;
};