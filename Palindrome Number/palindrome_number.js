// leetCode #9

function isPalindrome(x) {
    /* time complexity O(n) */
    // if (x < 0) return false;
    // let num = x;
    // let palindromeNum = 0;
    // while (num > 0) {
    //     palindromeNum = palindromeNum * 10 + num % 10;
    //     num = Math.trunc(num / 10);
    // };
    // if (palindromeNum === x) return true;
    // return false;

    /* time complexity O(log(n)) */
    if (x < 0) return false;
    if (x < 10) return true;

    let i = 0;
    let j = getTotalDigits(x) - 1;

    while (j > i) {
        if (getNumAtPos(x, i) !== getNumAtPos(x, j)) return false;
        i++;
        j--;
    };
    return true;
};

function getTotalDigits(x) {
    return Math.trunc(Math.log10(x)) + 1;
};

function getNumAtPos(x, pos) {
    return Math.trunc(x / (10 ** pos)) % 10;
};