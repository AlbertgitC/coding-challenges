// Find the Primes
// 1. Given a number n, write a method that returns the total number of primes up to and including n.
// 2. Write a test suite that tests the algo above.
// 3. Write an API that exercises the algo above.

function is_prime(num) {
    if (num < 2) {
        return false;
    };

    for (let i = 2; i < num; i++) {
        if (Number.isInteger(num / i)) {
            return false;
        };
    };

    return true;
}

function prime_finder(num) {
    if (num < 2) {
        return 0;
    };

    const primes = [];
    for (let i = 2; i <= num; i++) {
        if (is_prime(i)) {
           primes.push(i);
        };
    };

    return primes.length;
}

console.log(prime_finder(1));
console.log(prime_finder(-1));
console.log(prime_finder(0));
console.log(prime_finder(2));
console.log(prime_finder(7));
console.log(prime_finder(10000));