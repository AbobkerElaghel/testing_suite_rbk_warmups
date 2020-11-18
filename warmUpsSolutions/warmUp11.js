// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors



/**
 * 2-write a function called (midElement) that takes an array as an argument and returns the element that is located in the middle of that array.
 * @param {Array<any>} array
 * @return {any}
 */
function midElement(array) {
    return array[Math.floor(array.length / 2)];
}


/**
 *
 * 3-write a function called (multipleEvenIndexes) that takes an array of numbers, as an argument and returns an array of numbers, multiplied by two for even indexes.
 *
 * @param {Array<number>} array
 * @return {Array<number>}
 */
function multipleEvenIndexes(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0){
            result.push(array[i]*2);
        }else {
            result.push(array[i]);
        }
    }
    return result;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports.midElement = midElement; //
module.exports.multipleEvenIndexes = multipleEvenIndexes; //
// // // // // // // // // /
