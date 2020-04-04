// Four Number Sum
// Write a function that takes in a non-empty array of distinct integers and an integer 
// representing a target sum. The function should find all quadruplets in the 
// array that sum up to the target and return the 2D array of all the quadruplets
// in no particular order. Return empty array if there is no four numbers sum up
// to the target.

// Example:
// array = [7, 6, 4, -1, 1, 2]
// targetSum = 16
// output = [[7, 6, 4, -1], [7, 6, 1, 2]]

function fourNumSum (arr1, targetSum) {
    let result = [];
    if (arr1.length < 4) return;
    if (arr1.length === 4) {
        let sum = arr1.reduce( (accumulator, num) => {
            return accumulator + num; 
        });
        
        if (sum === targetSum) {
            return arr1;
        } else { return; };
    };

    let currentNum = arr1.shift();
    arr1.forEach((num, i) => {
        let arr2 = arr1.slice(0);
        arr2.splice(i, 1, currentNum);
        let subRes = fourNumSum(arr2, targetSum);
        if (subRes) { result.push(subRes); };
    });

    return result;
}

console.log(fourNumSum([7, 6, 4, -1, 1], 16));