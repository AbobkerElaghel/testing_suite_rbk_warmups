//DONT FORGET TO REMOVE THE FUNCTIONS WHEN YOU FINISH, SOI THE STUDENTS CAN PRACTICE WRITING FUNCTION ON THIER OWN
/**
 * 1 Write a function named helloWorld that:
 * takes 1 argument, a language code (e.g. "fr", "es", "en")
 * returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
 * ex: helloWorld('fr') ==> 'Bonjour tout le monde'
 *    helloWorld('es') ==> 'Hola, Mundo'
 *    helloWorld('') ==> 'Hello, World'
 *
 * @param {string} str
 * @return {string}
 */
//DONT FORGET TO REMOVE THE FUNCTIONS WHEN YOU FINISH, SOI THE STUDENTS CAN PRACTICE WRITING FUNCTION ON THEIR OWN

function helloWorld(str){
    switch (str) {
        case 'fr':
            return 'Bonjour tout le monde';

        case 'es':
            return 'Hola, Mundo';

        case 'ar':
            return "أهلان";
        default:
            return "Hello, World";
    }
}



/**
 * 2 write a function to Reverse an array without use array.reverse() method:
 * ex: reverseArray([1,2,3]) ==> [3,2,1]
 *
 * @param {Array<number>} array
 * @return {Array<number>} result
 */
//DONT FORGET TO REMOVE THE FUNCTIONS WHEN YOU FINISH, SOI THE STUDENTS CAN PRACTICE WRITING FUNCTION ON THEIR OWN
function reverseArray(array){
    let result = [];
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
}


/**
 * 3 Write a function called laugh() that takes one parameter,
 * num that represents the number of "ha"s to return.
 * laugh(6); => "hahahahahaha"
 *
 * @param {number} n
 * @return {string} ha
 */
//DONT FORGET TO REMOVE THE FUNCTIONS WHEN YOU FINISH, SOI THE STUDENTS CAN PRACTICE WRITING FUNCTION ON THEIR OWN
function laugh(n) {
    let ha = '';
    for (let i = 0; i < n; i++) {
        ha+='ha';
    }
    return ha;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports.helloWorld = helloWorld; //
module.exports.reverseArray = reverseArray; //
module.exports.laugh = laugh; //
// // // // // // // // // // // // // // //