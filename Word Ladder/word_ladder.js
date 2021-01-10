function ladderLength(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;

    let queue = [beginWord];
    let distance = {};
    distance[beginWord] = 0;

    while (queue.length !== 0) {
        let curWord = queue.shift();
        if (curWord === endWord) return distance[curWord] + 1;
        for (let word of wordList) {
            if (checker(curWord, word) && !(word in distance)) {
                queue.push(word);
                distance[word] = distance[curWord] + 1;
            };
        };
    };

    return 0;
};

function checker(str1, str2) {
    let diff = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) diff++;
    };
    if (diff === 1) return true;
    return false;
};