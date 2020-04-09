// Subarray Sort

function subarraySort(array) {
    let result = null;
    for (let i = 0; i < array.length - 1; i++) {
        const curNum = array[i];
        const nextNum = array[i + 1];
        if (curNum > nextNum) {
            result = backSort(array, i + 1, result);
        }
    };

    if (result) return result;
    return [-1, -1];
}

function backSort(array, idx, result) {
    if (array[idx] >= array[idx - 1] || idx === 0) return result;
    let curNum = array[idx - 1]
    array[idx - 1] = array[idx];
    array[idx] = curNum;
    if (!result) {
        result = [idx - 1, idx];
    } else {
        if (result[0] > (idx - 1)) result[0] = idx - 1;
        if (result[1] < idx) result[1] = idx;
    };
    return backSort(array, idx - 1, result);
}

function subarraySort2(array) {
    let smallest = Infinity;
    let largest = -Infinity;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            if (array[i] < smallest) smallest = array[i];
            if (array[i - 1] > largest) largest = array[i - 1];
        };
    };

    if (smallest === Infinity) return [-1, -1];

    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (smallest < array[i]) {
            result.push(i);
            break;
        };
    };

    for (let i = array.length - 1; i > -1; i--) {
        if (largest > array[i]) {
            result.push(i);
            break;
        };
    };
    
    return result;
}