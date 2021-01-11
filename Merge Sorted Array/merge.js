function merge(nums1, m, nums2, n) {
    nums1.splice(m, n);
    let idx1 = 0;
    let idx2 = 0;
    while (idx2 < nums2.length) {
        let num1 = nums1[idx1];
        let num2 = nums2[idx2];
        if (num1 === undefined) {
            for (let i = idx2; i < nums2.length; i++) {
                nums1.push(nums2[i]);
            };
            break;
        } else if (num2 < num1) {
            nums1.splice(idx1, 0, num2);
            idx1++;
            idx2++;
        } else {
            idx1++;
        }
    };
};