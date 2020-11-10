// 1 - Complete the function cube that returns the cube of x:

function cube(x) {
    // your code here
    return x*x*x;
}

// 2 - Write a function sameLength that accepts two strings as arguments, and returns true if those strings have the same length, and false otherwise.

function sameLength(string1, string2) {
    return string1.length === string2.length;
}

// 3 - Write a function called scoreToGrade that accepts a number as a parameter and returns a string representing a letter grade corresponding to that score.

function scoreToGrade(score){
    if(score>100 || score<0){
        return "SCORE INVALID"
    }
    else if(score>=90){
        return "A";
    }
    else if(score>=80){
        return "B";
    }
    else if(score>=70){
        return "C";
    }
    else if(score>=65){
        return "D";
    }
    else if(score<65){
        return "F"
    }
}
// USE RECURSION
// Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string str should be repeated
// repeatString('dog', 0); // => ''
// repeatString('dog', 1); // => 'dog'
// repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog'
// repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'

function repeatString(str, count) {
    // TODO: your code here
    if (count===0){
        return "";
    } return str + repeatString(str, count-1); // TODO: your code here
}


//ignore the below code // //
module.exports.cube = cube; //
module.exports.sameLength = sameLength; //
module.exports.scoreToGrade = scoreToGrade; //
module.exports.repeatString = repeatString; //
// // // // // // // // // // // // // // //

