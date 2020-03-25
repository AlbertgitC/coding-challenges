// Write a function that takes in an array of unique integers and returns an array 
// of all the permutations of those integers.If the input array is empty, your 
// function should return an empty array.

// Example:
// Input: [1, 2, 3]
// Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 2, 1], [3, 2, 1]]

function permutation(nums_arr) {
  if (nums_arr.length === 0) return [];
  if (nums_arr.length === 1) return [nums_arr];

  let ans = [];
  let cur_num = nums_arr.shift();
  let sub_arrs = permutation(nums_arr);

  sub_arrs.forEach(arr => {
    for (let i = 0; i <= arr.length; i++) {
      let cur_combo = arr.slice(0,i).concat([cur_num]).concat(arr.slice(i));
      ans.push(cur_combo);
    };
  });

  return ans;
}

console.log(permutation([]));
console.log(permutation([1]));
console.log(permutation([1, 2]));
console.log(permutation([1, 2, 3]));
console.log(permutation([1, 2, 3, 4]));