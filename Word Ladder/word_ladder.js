function ladderLength(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;
    let min = [];
    while (wordList.length > 0) {

    };
};

function checker(str1, str2) {
    let diff = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) diff++;
    };
    if (diff === 1) return true;
    return false;
};

function climb(word, list, endWord) {
    let combos = [];
    let match = [];
    for (let i = 0; i < list.length; i++) {
        if (checker(word, list[i])) match.push(list[i]);
    };
    if (match.includes(endWord)) return [endWord];
    if (match.length === 0) return [];
    for (let i = 0; i < match.length; i++) {
        let newList = list.slice(0);
        let index = list.indexOf(match[i]);
        newList.splice(index, 1);
        combos.push([match[i], climb(match[i], newList, endWord)]);
    };
    return combos;
};