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
            return [arr1];
        } else { return; };
    };

    let currentNum = arr1.shift();
    for (let i = -1; i < arr1.length; i++) {
        let arr2 = arr1.slice(0);
        if (i !== -1) { arr2.splice(i, 1, currentNum); };
        let subRes = fourNumSum(arr2, targetSum);
        if (subRes) { result = result.concat(subRes); };
    };
    result = checkUnique(result);

    return result;
}

function checkUnique(twoDArr) {
    let result = [];
    for (let i = 0; i < twoDArr.length; i++) {
        let unique = true;
        for (let j = i + 1; j < twoDArr.length; j++) {
            let subArr = [];
            
            twoDArr[i].forEach(ele => {
                if (twoDArr[j].includes(ele)) subArr.push(ele);
            });
            if (subArr.length === twoDArr[i].length) {
                unique = false;
            };
            
        };
        if (unique) { result.push(twoDArr[i]) };
    };
    
    return result;
}

console.log(fourNumSum([-10, -3, -5, 2, 15, -7, 28, -6, 12, 8, 11, 5], 20));
console.log(fourNumSum([1, 2, 3, 4, 5], 100));