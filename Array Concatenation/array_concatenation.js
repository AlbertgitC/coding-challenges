function canFormArray(arr, pieces) {
    let curIdx = 0;
    while (curIdx < arr.length) {
        let beginIdx = curIdx;
        for (let i = 0; i < pieces.length; i++) {
            let curPiece = pieces[i];
            if (arr[curIdx] === curPiece[0]) {
                curIdx++;
                for (let j = 1; j < curPiece.length; j++) {
                    if (arr[curIdx] !== curPiece[j]) {
                        return false;
                    } else {
                        curIdx++;
                    };
                };
            };
        };
        if (beginIdx === curIdx) return false;
    };
    return true;
};