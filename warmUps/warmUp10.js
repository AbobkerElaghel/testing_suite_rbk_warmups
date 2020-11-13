// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

// 1- Using recursion Write a JavaScript function called (greatestCommonDivisor) to find the greatest common divisor (gcd) of two positive numbers.
//NOTE: Take into account handling when one of the inputs is not a number
function greatestCommonDivisor(num1, num2) {
    if ((typeof num1 !== 'number') || (typeof num2 !== 'number'))
        return false;
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    let temp = 0;
    while(num2) {
        temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}
// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

// 2-Write a function called (sum) that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function sum(x, y) {
    if (!y){
        return 0;
    }
    return
}

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports.greatestCommonDivisor = greatestCommonDivisor; //
module.exports.sum = sum; //
// // // // // // // // // /