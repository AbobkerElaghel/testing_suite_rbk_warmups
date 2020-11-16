/**
 * // Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.
 *
 * For example:
 *
 * greatestProduct("-12383453932723823-958-3") // should return 3240
 * The input string always has more than five digits.
 *
 *
 * @param {string} input
 * @return {number}
 */
function greatestProduct(input) {
    // todo
    let result = [];
    let greatest;
    let current =  0;
    for (let i = 0; i < input.length; i++) {
        if(input[i] === '-'){
            i++;
            result.push((-input[i]));
        }else {
            result.push(+input[i]);
        }
    }
    greatest = (result[0]) * (result[1]) * (result[2]) * (result[3]) * (result[4]);
    for (let i = 4; i < result.length; i++) {
        current = ((result[i - 4]) * (result[i - 3]) * (result[i - 2]) * (result[i - 1]) * (result[i]));
        if(current > greatest)
            greatest = current;
    }
    return greatest;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ignore the below code // //
module.exports = greatestProduct; //
// // // // // // // // //


