// Two Sum
// Return the indices of two numbers that add up to a specific target
// unique solution for each set of inputs.

// ex:
// Input = [3, 7, 11, 15, 2], 9
// Output = [0, 1]


function twoSum(arr1, target) {
    let ans;
    for(let i = 0; i < arr1.length; i++) {
        for(let j = i + 1; j < arr1.length; j++) {
            if(arr1[i] + arr1[j] === target) return ans = [i, j];
        };
    };
}

function twoSum2(arr1, target) {
    let subArr = {};
    for(let i = 0; i < arr1.length; i++) {
        subArr[target - arr1[i]] = i;
    };

    for(let i = 0; i < arr1.length; i++) {
        if(subArr[arr1[i]]) {
            return[i, subArr[arr1[i]]];
        };
    }
}

console.log(twoSum2([3, 7, 11, 15, 2], 5));