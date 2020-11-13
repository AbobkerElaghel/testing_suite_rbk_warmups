// 1 - Write functions larger and smaller that each accept two strings as arguments, and return the larger and smaller strings, respectively
function larger(str1, str2){
return str1.length > str2.length ? str1 : str2;
}

function smaller(str1, str2){
    return str1.length < str2.length ? str1 : str2;
}


// 2 - Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:
// function counting(n) {
// TODO: your code here
// }
// counting(5); // => '1, 2, 3, 4, 5'
// counting(1); // => '1'
// counting(3); // => '1, 2, 3'
function counting(n) {
    let output = '';
    for (let i = 1; i <= n; i++) {
        output += `${i}, `;
    }
    return output.slice(0, output.length-2);
}
// 3 -  Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5
//  welcome 1
//  welcome 2, meet 1
//  welcome 3, meet 1 and 2
//  welcome 4, meet 1, 2 and 3
//  welcome 5, meet 1, 2, 3 and 4
//
function meetNGreet(n){
    let output = "";
    for (let i = 1; i <= n; i++) {
        output += "welcome " + i;
        for (let j = 1; j < i; j++) {
            if(j === 1){
                if(i > 3){
                    output += ", meet " + j+",";
                }else{
                    output += ", meet " + j;
                }
            }else if(j === i-1){
                output += " and "+ (i-1);
            }
            else if(j === i-2){
                output += " "+j;
            }else{
                output += " "+j+",";
            }
        }
        output += '\n';
    }
    return output.slice(0, output.length-1);
}

// 4- Write a function shortestWord that accept array of strings, and return the shortest string
/**
 *
 * @param {Array<string>} array
 * @return {string}
 */
function shortestWord(array){
    let shortest = array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i].length < shortest.length){
            shortest = array[i];
        }
    }
    return shortest;
}


//ignore the below code // //
module.exports.larger = larger; //
module.exports.smaller = smaller; //
module.exports.counting = counting; //
module.exports.meetNGreet = meetNGreet; //
module.exports.shortestWord = shortestWord; //
// // // // // // // // // // // // // // //

