/**
 * 1-write a function that returns the product of any number by 3.
 * @param {number} n
 * @return {number}
 */
function productOf3(n){
    return n*3;
}

/**
 * 2-complete the following function multiply to return the result of multiplying of x and y
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function multiply(x,y){
    return x*y;
}


/**
 * 3-complete the following function that Convert Fahrenheit to Celsius if the module for converting is
 * @param {number} fahrenheit
 * @return {number}
 */
function fahrenheitToCelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}


/**
 * 4-Define a function named "sqArea", and make it display square area if you knew the length of its side.
 * @param {number} length
 * @return {undefined|number}
 */
function sqArea(length) {
    if (typeof length === 'number'){
        return length*length;
    }
    return undefined;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports.productOf3 = productOf3; //
module.exports.multiply = multiply; //
module.exports.fahrenheitToCelsius = fahrenheitToCelsius; //
module.exports.sqArea = sqArea; //
// // // // // // // // // // // // // // //