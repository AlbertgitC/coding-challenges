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