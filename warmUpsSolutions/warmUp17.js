/**
 * Write a function called agesToMinutes that,
 * accepts an array of object as parameter and
 * return an array of objects after converting the ages from years to minutes
 * using map.
 * assume that there is 365 days in a year
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
 * @param {Array<object>} array
 * @return {Array<object>}
 */
 function agesToMinutes(array){
    var minutesInAnHour = 60, hoursInADay = 24, daysInAYear = 365;
    return map(array, function (element) {
        var obj = JSON.parse(JSON.stringify(element));
        obj.age =  obj.age * minutesInAnHour * hoursInADay * daysInAYear;
        return obj;
    });
 }



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