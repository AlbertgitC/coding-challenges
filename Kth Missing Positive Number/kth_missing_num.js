function findKthPositive(arr, k) {
    let curNum = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === curNum) {
            curNum++;
        } else {
            k--;
            if (k === 0) return curNum;
            curNum++;
            i--;
        };
    };
    return curNum + k - 1;
};