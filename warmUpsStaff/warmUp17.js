/**
 * Write a function called agesToMinutes that,
 * accepts an array of object as parameter and
 * return an array of objects after converting the ages from years to minutes
 * using map.
 *
 * var people = [{
 *       name: {
 *             first: 'Majd',
 *             middle: 'Eddin',
 *       },
 *       age: 30
 *       }, {
 *       name: {
 *             first: 'Fatima',
 *             last: 'Himmamy'
 *       },
 *       age: 26
 *       }, {
 *       name: {
 *             first: 'Sahar',
 *             middle: 'MHD'
 *       },
 *       age: 27
 *       }, {
 *       name: {
 *             first: 'Nour',
 *             middle: 'Eddin',
 *       },
 *       age: 15
 *       }, {
 *       name: {
 *             first: 'Ahmad',
 *             last: 'Awad'
 *       },
 *       age: 33
 * }];
 *
 * @param {object} object
 * @return {object}
 */
function agesToMinutes(object){

}

// EXTRA Credit: one of the most important notes in coding is that, ( inputs to function should not be modified ) for example
// when you invoke the function above (agesToMinutes) with the array (people), the function should return a new array where ages are converted to minutes, WITHOUT, modifying the people array
// Make sure that the function does not modify the input;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ignore the below code // //
module.exports = agesToMinutes; //
// // // // // // // // // //

// ~~~~~~~~~~~~~~~~ already implemented functions ~~~~~~~~~~~~~~~~
function each(coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i);
        }
    } else {
        for (var key in coll) {
            func(coll[key], key);
        }
    }
}

function map(coll, f) {
    var acc = [];
    if (!Array.isArray(coll)) {
        acc = {};
    }
    each(coll, function(element, key) {
        acc[key] = f(element, key);
    });
    return acc;
}