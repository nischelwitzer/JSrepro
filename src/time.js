
function myTime() {
    'use strict';
    var today = new Date(),
        h = today.getHours(),
        m = today.getMinutes(),
        s = today.getSeconds();

    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    console.log("Time: " + h + ": " + m + ":" + s);
    setTimeout(function () { myTime(); }, 1000);
}

console.log("nodejs Clock started");
myTime();
