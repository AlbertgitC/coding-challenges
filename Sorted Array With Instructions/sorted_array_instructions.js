function createSortedArray(instructions) {
    let nums = [instructions[0]];
    let cost = 0;
    
    
    for (let i = 1; i < instructions.length; i++) {
        let curNum = instructions[i];
        let idx = 0;
        let equal = 0;
        let target = nums[idx];
        let sorted = false;
        while (!sorted && target !== undefined) {
            if (curNum > target) {
                idx++;
                target = nums[idx];
            } else if (curNum === target) {
                idx++;
                target = nums[idx];
                equal++;
            } else {
                sorted = true;
                cost += Math.min((idx - equal), (nums.length - idx));
                nums.splice(idx, 0, curNum);
            };
        };
        if (!sorted) nums.push(curNum);
    };

    return cost;
};

console.log(createSortedArray([1, 5, 6, 2]));