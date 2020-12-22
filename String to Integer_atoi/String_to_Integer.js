// leetCode #8

const nums = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

function myAtoi(string) {
    let str = string.split(" ").join("");
    if (str[0] === "-" && nums.has(str[1])) {
        let numStr = "-" + getNumString(str.slice(1));
        return Number(numStr);
    } else if (nums.has(str[0])) {
        let numStr = getNumString(str);
        return Number(numStr);
    } else {
        return 0;
    };
};

function getNumString(str) {
    let numStr = "";
    for (let i = 0; i < str.length; i++) {
        if (nums.has(str[i])) {
            numStr += str[i];
        } else {
            break;
        };
    };
    return numStr;
}