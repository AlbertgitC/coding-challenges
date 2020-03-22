// Given an array of integers representing a number, implement the increment operation (++) 
// such that
// - arrayIncrement([1, 2]) => [1, 3] // because 12 + 1 => 13
// - arrayIncrement([1, 9, 9]) => [2, 0, 0] // 199 + 1 => 200
// - arrayIncrement([9, 9, 9]) => [1, 0, 0, 0] // 999 + 1 => 1000


function array_increment(num_arr) {
    let current_digi = num_arr.length - 1;

    if (num_arr[current_digi] != 9) {
        num_arr[current_digi]++;
    } else {
        while (num_arr[current_digi] === 9) {
            num_arr[current_digi] = 0;
            current_digi--;
            if (num_arr[current_digi] != 9 && current_digi >= 0) {
                num_arr[current_digi]++;
            } else if (current_digi < 0) {
                num_arr.unshift(1);
            };
        };
    };
}

// let arr = [9,9,9];
// array_increment(arr);
// console.log(arr);


// Follow-Up: ArraySum
// Given two arrays of integers representing numbers, implement the sum 
// operation such that
// arraySum([1,2], [2,3]) => [3,5] // because 12 + 23 = 35
// arraySum([1,9,9], [9,0,0]) => [1,0,9,9] // 199 + 900 = 1099
// arraySum([9,1,1], [9,9]) => [1,0,1,0] // 911 + 99 = 1010

function array_sum(arr1, arr2) {
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    let carry = false;
    let ans = [];

    while (i >= 0 || j >= 0) {
        let digit1 = arr1[i] >= 0 ? arr1[i] : 0;
        let digit2 = arr2[j] >= 0 ? arr2[j] : 0;
        let sum = digit1 + digit2;

        if (carry) { sum += 1 };

        ans.unshift(sum % 10);
        carry = sum > 9 ? true : false;

        i--;
        j--;
    };

    if (carry) { ans.unshift(1) };

    return ans;
}

console.log(array_sum([9, 1, 1], [9, 9]));