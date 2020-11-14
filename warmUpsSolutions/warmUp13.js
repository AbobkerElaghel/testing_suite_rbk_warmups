/**
 * A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
 * For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
 * The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
 * Write a function  dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr.
 * The function should return −1 if array does not have a dominator. All values in arr will be >=0.
 *
 * @param {Array} arr
 * @return {number}
 */
function dominator(arr) {
    //code me
    let dominatorCounter = 0;
    let previousDominatorCounter = 0;
    let currentDominator = -1;
    let halfSizeOfTheArray = Math.floor(arr.length/2);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j]){
                dominatorCounter++;
            }
        }
        if(dominatorCounter > halfSizeOfTheArray && dominatorCounter > previousDominatorCounter){
            currentDominator = arr[i];
            previousDominatorCounter = dominatorCounter;
        }
        dominatorCounter = 0;
    }
    return currentDominator;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ignore the below code // //
module.exports = dominator; //
// // // // // // // // // //
