// leetCode #9

function isPalindrome(x) {
    if (x < 0) return false;
    let num = x;
    let palindromeNum = 0;
    while (num > 0) {
        palindromeNum = palindromeNum * 10 + num % 10;
        num = Math.trunc(num / 10);
    };
    if (palindromeNum === x) return true;
    return false;
};