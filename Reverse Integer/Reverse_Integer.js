function reverse(x) {
    if (x < 10 && x > -10) return x;
    let number = Math.abs(x);
    const reversed_digits = [];
    while (number > 0) {
        let current_digit = number % 10;
        reversed_digits.unshift(current_digit);
        number = Math.floor(number / 10);
    };
    let ans = 0;
    for (let i = 0; i < reversed_digits.length; i++) {
        ans = ans + reversed_digits[i] * (10 ** i)
    };

    if (x < 0) return ans * -1;
    return ans;
};

console.log(reverse(-102))