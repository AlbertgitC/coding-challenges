// Calendar Matching

function calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration) {
    let commonDB = [];
    let commonCal = [];

    if (toNum(dailyBounds1[0]) < toNum(dailyBounds2[0])) {
        commonDB.push(toNum(dailyBounds2[0]));
    } else {
        commonDB.push(toNum(dailyBounds1[0]));
    };

    if (toNum(dailyBounds1[1]) < toNum(dailyBounds2[1])) {
        commonDB.push(toNum(dailyBounds1[1]));
    } else {
        commonDB.push(toNum(dailyBounds2[1]));
    };

    if (commonDB[0] >= commonDB[1]) return [];

    // if (calendar1.length) {
    //     for (let i = 0; i < calendar1.length; i++) {
    //         let start = toNum(calendar1[i][0]);
    //         let end = toNum(calendar1[i][1]);
    //         if (i === 0 && start >= commonDB[1]) {
    //             break;
    //         } else if (i === calendar1.length - 1 && end <= commonDB[0]) {
    //             break;
    //         };
    //         if (commonCal.length === 0 && end > commonDB[0] && start < commonDB[1]) {
    //             commonCal.push([start, end]);
    //         } else if (commonCal.length !== 0 && end > commonDB[0] && start < commonDB[1]) {
    //             let lastBlock = commonCal[commonCal.length - 1];
    //             if (start - lastBlock[1] < meetingDuration) {
    //                 commonCal.pop();
    //                 commonCal.push([lastBlock[0], end]);
    //             } else {
    //                 commonCal.push([start, end]);
    //             };
    //         };
    //     };
    // };

    // if (calendar2.length) {
    //     let checkIdx = 0;

    //     for (let i = 0; i < calendar2.length; i++) {
    //         let start = toNum(calendar2[i][0]);
    //         let end = toNum(calendar2[i][1]);
    //         if (start >= commonDB[1] || end <= commonDB[0]) {
    //             continue;
    //         };

    //         if (commonCal.length === 0) {
    //             commonCal.push([start, end]);
    //         } else {
                
    //         };
    //     };
        
    // };

    //different approach, keep track of available blocks only
    

    console.log(commonCal);

}

function toNum(str) {
    let regexDigit = /\d/g
    return parseInt(str.match(regexDigit).join(""));
}