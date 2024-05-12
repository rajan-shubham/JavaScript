// Remember, we're gonna use strict mode in all scripts now!
'use strict';
let calcAvg = function (a, b, c) {
    return (a + b + c) / 3;
}

console.log(calcAvg(200, 300, 400));

let maxofThree = function (a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c){
        return b;
    }
    else {
        return c;
    }
}

console.log(maxofThree(38398, 38529, 28429));