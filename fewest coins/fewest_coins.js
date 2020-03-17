// Given the following:
//     - A set of N unique coins of positive (non-zero), arbitray integer values
//         - C = [C1, C2, ..., C of N] such that C of i != C of j where i != j, C of i > 0
//         - An unlimited quantity of each coin
//         - In sorted ascending order (Note: honestly, this part shouldn't matter too much, as it only leads to a minor optimization)
//     - An integer value M
// Implement a solver that determines the fewest number of coins X such that the sum of their values adds up to M.
// If an answer is impossible, return an appropriate value (says, -1)

// Examples:
//     - Given C = [1,2,7], M = 13, X = 4 (1x of 7, 3x of 2)
//     - Given C = [2,5], M = 1, X = -1


function fewest_coins(coins, amount, memo = {}) {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;

    let num_coins = [];
    
    coins.forEach(coin => {
        if (coin <= amount) {
            num_coins.push(fewest_coins(coins, amount - coin, memo) + 1);
        };
    });
    
    memo[amount] = Math.min(...num_coins);
    return memo[amount];
}

function coin_ans(coins, amount) {
    let ans = fewest_coins(coins, amount);
    
    if (ans === Infinity) {
        return -1;
    } else {
        return ans;
    };
};

console.log(coin_ans([2, 5], 3));