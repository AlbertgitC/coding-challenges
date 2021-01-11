function merge(nums1, m, nums2, n) {
    let idx = 0;
    for (let i = 0; i < nums2.length; i++) {
        let curNum1 = nums1[idx];
        let curNum2 = nums2[i];
        if (curNum2 < curNum1) {
            nums1.splice(idx, 0, curNum2);
            idx++;
        }
    };
};