/**
 * 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
 * objKey({name:'ahmed',age:20}) ==> ['name','age']
 *
 * @param {Object} obj
 * @return {Array}
 */
function objKey(obj){
    return Object.keys(obj);
}




/**
 * 2 - Write a function named objLength to get the length of a JavaScript object
 * objLength({name:'ahmed',age:20}) ==> 2
 *
 * @param {Object} obj
 * @return number
 */
function objLength(obj){
    return Object.values(obj).length;
}


/**
 * 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
 * objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]
 *
 * @param {Array<{id: number, value: number}>} obj
 * @return {Array}
 */
function objSort(obj){
    return obj.sort((a,b) => (a.id - b.id));
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports.objKey = objKey; //
module.exports.objLength = objLength; //
module.exports.objSort = objSort; //
// // // // // // // // // // // // // // //
