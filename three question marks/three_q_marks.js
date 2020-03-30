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
    let re = /\d\?{3}\d/g;
    console.log(str.match(re));
}

// console.log(three_q_marks("arrb6???4xxbl5???eee5"));
// console.log(three_q_marks("acc?7??sss?3rr1??????5"));
// console.log(three_q_marks("10???0???10"));
// console.log(three_q_marks("5??aaaaaaaa?5?5"));
// console.log(three_q_marks("9???1???9???1???9"));
// console.log(three_q_marks("aa6?9"));
// console.log(three_q_marks("8???2???9"));
// console.log(three_q_marks("aa3??oiuqwer?7???2"));

console.log(str_regex("arrb6???4xxbl5???eee5"));