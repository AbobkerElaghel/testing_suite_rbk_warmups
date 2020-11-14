/**
 * 1 - Write a function called (reverseStr) that takes a string as an input and returns the reverse of each letter
 * followed by a number starting from zero(solve it using while loop).
 * example:    reverseStr('hello'); "o0l1l2e3h4"
 *
 * @param {string} str
 * @return {string}
 */
function reverseStr(str){
    let count = 0, result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result=(result+str[i])+count;
        count++;
    }
    return result;
}


/**
 * 2 - write a function called (sameLength) that takes array of strings and returns an array of the strings that have the same length
 * example :  ['hi','hello','welcome','hy'] ==> ["hi","hy"]
 *
 * @param {Array<string>} array
 * @return {Array<string>}
 */
function sameLength(array) {
    let result = [];
    let contains = {};
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i].length === array[j].length && !contains[array[i]] && j !== i){
                result.push(array[i]);
                contains[array[i]] = true;
                break;
            }
        }
    }
    return result;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports.reverseStr = reverseStr; //
module.exports.sameLength = sameLength; //
// // // // // // // // // /