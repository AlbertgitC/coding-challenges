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
    
}

console.log(is_prime(17));