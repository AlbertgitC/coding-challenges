// Smallest Difference
// Write a function that takes in two non-empty arrays of integers, finds the 
// pair of numbers(one from each array) whos absolute difference is closest to 
// zero, and returns an array containing these two numbers, with the number 
// from first array in the first position.
// Assume that there will only be one pair of numbers with the smallest difference.

// Example:
// input: array1 = [-1, 5, 10, 20, 28, 3]
//        array2 = [26, 134, 135, 15, 17]
// output: [28, 26]

function smallestDifference(array1, array2) {
    let smallestDifference = Infinity;
    let result;
    array1.forEach((num1, i) => {
        array2.forEach((num2, j) => {
            if (Math.abs(num1 - num2) < smallestDifference) {
                smallestDifference = Math.abs(num1 - num2);
                result = [array1[i], array2[j]];
            };
        });
    });

    return result;
}