function arrayStringsAreEqual(word1, word2) {
    let string1 = spell(word1);
    let string2 = spell(word2);
    if (string1 === string2) return true;
    return false;
};

function spell(arr) {
    const reducer = (accumulator, curString) => accumulator + curString;
    return arr.reduce(reducer);
};