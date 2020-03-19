// Given the following, write a function to return the frequency of a character in any substring of a string.
// - A string of characters
// - A character to find
// - Starting index of the substring
// - Ending index of the substring

// Examples:
// S = "codingchallenge"
// c = "g"
// O(n)
// assert freq_count(S, c, 0, 5) == 1
// assert freq_count(S, c, 0, 13) == 2


function freq_count(string, char, start_idx, end_idx) {
    let counter = 0;

    for (let i = start_idx; i <= end_idx; i++) {
        if (string.charAt(i) === char) counter++;
    };

    return counter;
}

// console.log(freq_count("codingchallenge", "g", 0, 5));
// console.log(freq_count("codingchallenge", "g", 0, 13));

// Assume you need the capability to scale out. You will have to search the same list, or string many times for 
// different character frequencies within a substring. If you were allowed to pre-process the string into a data
// structure, how could this be improved?

// Examples:
// S = "codingchallenge"
// c = "g"
// populate data structure for future lookup
// process_string(S)
// O(1)
// assert freq_count(S, c, 0, 5) == 1
// assert freq_count(S, c, 0, 13) == 2

function process_string(string) {
    const alph = "abcdefghijklmnopqrstuvwxyz";
    let hash_table = {};
    
    for (let i = 0; i < string.length; i++) {
        let char = alph.indexOf(string[i]);
        if (i === 0) {
            hash_table[i] = new Array(26).fill(0);
            hash_table[i][char]++;
        } else {
            hash_table[i] = hash_table[i - 1];
            hash_table[i][char]++;
        };
    };
    return hash_table;
};

console.log(process_string("codingchallenge"));