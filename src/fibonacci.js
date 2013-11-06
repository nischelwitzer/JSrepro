
/**
Main Fibonacci Modul
@module fibonacci
**/

/**
* Fibonacci "class"
*
* @class MyFiboncciClass
* @constructor
*/

/**
* Counts the function calls
* 
* @property callCnt
* @type {Number}
* @default 0
*/

var callCnt = 0;
var callCnt_memo = 0;

/**
* Fibonacci Recursiv Calculation (normal version)
*
* @method fibonacci
* @param {Number} n The fibonacci input number
* @return {Number} Returns the fibonacci number
*/

var fibonacci = function (n) {
    'use strict';
    callCnt++;
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

/**
* Fibonacci Recursiv Calculation (memoization version) closure
*
* @method fibonacci_memo
* @param {Number} n The fibonacci input number
* @return {Number} Returns the fibonacci number
*/

var fibonacci_memo = (function () {
    'use strict';
    var memo = [0, 1],
        fib = function (n) {
            callCnt_memo++;

            var result = memo[n];
            if (typeof result !== "number") {

                result = fib(n - 1) + fib(n - 2);
                memo[n] = result;
            }
            return result;
        };
    return fib;
}());

/**
* Fibonacci Recursiv Calculation (memoization version) closure
*/

var memoizer = function (memo, formula) {
    'use strict';
    var recur = function (n) {
        var result = memo[n];

        if (typeof result !== "number") {

            result = formula(recur, n);
            memo[n] = result;
        }
        return result;
    };
    return recur;
};

var fibonacci_memoizer = memoizer([0, 1], function (recur, n) {
    'use strict';
    return recur(n - 1) + recur(n - 2);
});
