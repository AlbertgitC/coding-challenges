// leetCode #11

function maxArea(height) {
    // brute force O(n ** 2)
    // let maxA = 0;
    // for (let i = 0; i < height.length - 1; i++) {
    //     for (let j = i + 1; j < height.length; j++) {
    //         let lower = height[i] < height[j] ? height[i] : height[j];
    //         let area = lower * (j - i);
    //         maxA = Math.max(maxA, area);
    //     };
    // };
    // return maxA;

    // O(n)
    let startIdx = 0;
    let endIdx = height.length - 1;
    let maxA = 0
    while (startIdx < endIdx) {
        if (height[startIdx] < height[endIdx]) {
            let area = height[startIdx] * (endIdx - startIdx);
            maxA = Math.max(maxA, area);
            startIdx++;
        } else {
            let area = height[endIdx] * (endIdx - startIdx);
            maxA = Math.max(maxA, area);
            endIdx--;
        };
    };
    return maxA;
};