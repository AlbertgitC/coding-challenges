/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    let startIdx = 0;
    let endIdx = startIdx + 1;
    let occurredChar = {};
    occurredChar[s[startIdx]] = startIdx;
    let maxLength = 0;
    while (startIdx < s.length - 1 && endIdx < s.length) {
        if (s[endIdx] in occurredChar) {
            maxLength = Math.max(maxLength, endIdx - startIdx);
            startIdx = occurredChar[s[endIdx]] + 1;
            endIdx = startIdx + 1;
            occurredChar = {};
            occurredChar[s[startIdx]] = startIdx;
        } else if (endIdx === s.length - 1) {
            maxLength = Math.max(maxLength, endIdx - startIdx);
            break;
        } else {
            occurredChar[s[endIdx]] = endIdx;
            endIdx++;
        };
    };
    return maxLength;
};