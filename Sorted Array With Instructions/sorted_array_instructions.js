function createSortedArray(instructions) {
    let nums = [];
    let cost = 0;
    
    
    for (let i = 0; i < instructions.length; i++) {
        if (nums.length === 0) {
            nums.push(instructions[i]);
            continue;
        };
        let curNum = instructions[i];
        let idx = 0;
        let equal = 0;
        let target = nums[idx];
        let sorted = false;
        while (!sorted && target) {
            if (curNum > target) {
                idx++;
            } else if (curNum === target) {
                idx++;
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