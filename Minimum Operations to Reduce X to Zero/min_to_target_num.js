function minOperations(nums, x) {
    let total = nums.reduce((acc, cur) => acc + cur);
    let diff = total - x;

    if (diff < 0) return -1;
    if (diff === 0) return nums.length;

    let startIdx = 0;
    let endIdx = 0;
    let sum = 0;
    let max = -Infinity;

    while (startIdx < nums.length && endIdx < nums.length) {
        sum += nums[endIdx];
        if (sum === diff) {
            max = Math.max(max, endIdx - startIdx + 1);
            sum -= nums[startIdx];
            startIdx++;
            endIdx++;
        } else if (sum > diff) {
            sum -= nums[startIdx];
            if (startIdx === endIdx) {
                endIdx++
            } else {
                sum -= nums[endIdx];
            };
            startIdx++;
        } else {
            endIdx++;
        };
    };

    if (max === -Infinity) return -1;
    return nums.length - max;
};