// leetCode #11

function maxArea(height) {
    let maxA = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let lower = height[i] < height[j] ? height[i] : height[j];
            let area = lower * (j - i);
            maxA = Math.max(maxA, area);
        };
    };
    return maxA;
};