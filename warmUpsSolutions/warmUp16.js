// - create a data model to represent your classmates
// - think of different attributes of your classmates? what do all of them have ?
// - create a factory function.
// - create an array to hold the classmates that you created.
// - write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// - write a function called addFriend that takes a mate as an argument and add it to you classMates array.
// - calculate the number of male friends that your class have by writing a function called nbOfMale.
// - Write a function searchMates that, given a query and an array of Mates,
//   searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.


// -> Context scope of this question is broad by nature, thus not all students solutions are expected to follow the same structure and organization of this solution file -< //
var classMate = {
    firstName: 'string',
    lastName: 'string',
    gender: 'enum', // male | female
    age: Number()
};

function createClassMate(firstName,lastName,gender,age){
    var obj = {};
    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.gender = gender;
    obj.age = age;
    return obj;
}

var classMates = [];
classMates.push(classMate);

function displayFriend(classMate) {
    return 'my first name is ' + classMate.firstName + " and my last name is " + classMate.lastName + " and I'm am " + classMate.age + ' years old';
}

function addFriend(classMate) {
    classMates.push(classMate);
}

function nbOfMale() {
    let count = 0;
    for (let i = 0; i < classMates.length; i++) {
        if (classMates[i].gender === 'male'){
            count++;
        }
    }
    return count;
}



function searchMates(query, criteria, classMates){
    for (let i = 0; i < classMates.length; i++) {
        if (classMates[i][criteria] === query){
            return classMates[i];
        }
    }
    return null;
}
// -> Context scope of this question is broad by nature, thus not all students solutions are expected to follow the same structure and organization of this solution file -< //
