/* Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays. */

var findMedianSortedArrays = function (nums1, nums2) {
    let merged = [];
    let curIdx1 = 0;
    let curIdx2 = 0;
    while (curIdx1 < nums1.length || curIdx2 < nums2.length) {
        let num1 = nums1[curIdx1];
        let num2 = nums2[curIdx2];

        if (num1 === undefined) {
            merged = merged.concat(nums2.slice(curIdx2));
            break;
        } else if (num2 === undefined) {
            merged = merged.concat(nums1.slice(curIdx1));
            break;
        };

        if (num1 > num2) {
            merged.push(num2);
            curIdx2++;
        } else {
            merged.push(num1);
            curIdx1++;
        };
    };
    
    let ans;
    if (merged.length % 2 === 0) {
        let mid = merged.length / 2;
        ans = (merged[mid] + merged[mid - 1]) / 2;
    } else {
        let mid = Math.floor(merged.length / 2);
        ans = merged[mid];
    }

    return ans;
};

console.log(findMedianSortedArrays([1, 3], [2]));