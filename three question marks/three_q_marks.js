// Take an input string parameter and determine: For all pairs of digits where 
// there are exactly 3 question marks between them, do all pairings add up to 10.

// Examples: 
// strings = [
//     ("arrb6???4xxbl5???eee5", True),
//     ("acc?7??sss?3rr1??????5", Ture),
//     ("10???0???10", False),
//     ("5??aaaaaaaa?5?5", True),
//     ("9???1???9???1???9", True),
//     ("aa6?9", False),
//     ("8???2???9", False),
//     ("aa3??oiuqwer?7???2", False)
// ]

function three_q_marks(str) {
    let ans = false;
    let first_num = null;
    let q_count = 0;
    let second_num = null;
    
    for (let i = 0; i < str.length; i++) {
        let cur_num = parseInt(str.charAt(i));
        if (cur_num || cur_num === 0) {
            if (first_num === null) {
                first_num = cur_num;
            } else {
                if (q_count === 3) {
                    second_num = cur_num;
                    if (first_num + second_num === 10) {
                        ans = true;
                        first_num = cur_num;
                        q_count = 0;
                    } else {
                        return false;
                    };
                } else {
                    first_num = cur_num;
                    q_count = 0;
                };
                
            };
        } else if (str.charAt(i) === "?") {
            if (first_num != null) q_count += 1;
        };
    };

    return ans;
}

function str_regex(str) {
    let re = /\d|\?/g;
    let num_q = str.match(re).join("");
    let re2 = /(?=(\d\?\?\?\d))./g;
    let result = [];
    let match;
    while (match = re2.exec(num_q)) {
        result.push(match[1]);
    };
    return result;
}

function three_q_marks2(str) {
    let pairs = str_regex(str);
    let ans = false;

    if (pairs.length) {
        for (let i = 0; i < pairs.length; i++) {
            let first_num = parseInt(pairs[i][0]);
            let second_num = parseInt(pairs[i][4]);
            if (first_num + second_num != 10) {
                return false;
            } else {
                ans = true;
            };
        };
    }
    return ans;
}

// console.log(three_q_marks2("arrb6???4xxbl5???eee5"));
// console.log(three_q_marks2("acc?7??sss?3rr1??????5"));
// console.log(three_q_marks2("10???0???10"));
// console.log(three_q_marks2("5??aaaaaaaa?5?5"));
// console.log(three_q_marks2("9???1???9???1???9"));
// console.log(three_q_marks2("aa6?9"));
// console.log(three_q_marks2("8???2???9"));
// console.log(three_q_marks2("aa3??oiuqwer?7???2"));

console.log(str_regex("acc?7??sss?3rr1??????5"));