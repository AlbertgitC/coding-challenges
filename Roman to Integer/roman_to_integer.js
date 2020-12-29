// leetCode #13

function romanToInt(s) {
    const values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let value = 0;
    for (let i = 0; i < s.length; i++) {
        let curChar = s[i];
        let nextChar = s[i + 1] ? s[i + 1] : "I";
        if (values[curChar] < values[nextChar]) {
            value = value - values[curChar];
        } else {
            value = value + values[curChar];
        };
    };

    return value;
};