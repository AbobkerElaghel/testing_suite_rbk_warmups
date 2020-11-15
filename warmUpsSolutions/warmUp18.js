/**
 * Write a function that accepts two arguments: an array/list of integers and another integer (n).
 * Determine the number of times where two integers in the array have a difference of n.
 * For example:
 * [1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # [[5,1], [5,1], [9,5]]
 * [1, 1, 3, 3], n=2 --> 4 # [[3,1], [3,1], [3,1], [3,1]]
 *
 * return empty array when no elements in the array have a difference of n, or array is empty
 *
 * @param {Array} arr
 * @param {number} n
 * @return {[]}
 */
const intDiff = function (arr, n) {
    // your code goes here
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] - arr[j] === n && i !== j){
                result.push([arr[i], arr[j]])
            }
        }
    }
    return result;
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ignore the below code // //
module.exports = intDiff; //
// // // // // // // // // //