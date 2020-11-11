const {greaterNum, isEven, sum, factorial, decimals} = require('../warmUps/warmUp5');
const isRecursive = require('../specialTests/isRecursive');
const containFor = require('../specialTests/containFor');
const containWhile = require('../specialTests/containWhile');
const isIterative = require('../specialTests/isIterative');

beforeAll(() => {
    test('greaterNum should be defined', () => {
        expect(greaterNum).toBeDefined();
    });

    test('isEven should be defined', () => {
        expect(isEven).toBeDefined();
    });

    test('sum should be defined', () => {
        expect(sum).toBeDefined();
    });

    test('factorial should be defined', () => {
        expect(factorial).toBeDefined();
    });

    test('decimals should be defined', () => {
        expect(decimals).toBeDefined();
    });
});

describe('function greaterNum', () => {
    function countLetters(str, letter){
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if(str[i]===letter){
                count++;
            }
        }
        return count;
    }

    test('should accept two parameters', () => {
        const numberOfArguments = greaterNum.length;
        expect(numberOfArguments).toBe(2);
    });

    test('should return a string', () => {
        expect(greaterNum(1,1)).toStrictEqual(expect.any(String));
    });

    test('should return a string with the larger number being inside of it equals 2 times, input = 2,4', () => {
        const input = [2,4];
        const actual = greaterNum(input[0], input[1]);
        expect(countLetters(actual,'4')).toBe(2);
    });

    test('should return a string with the larger number being inside of it equals 2 times, input = 4,2', () => {
        const input = [4,2];
        const actual = greaterNum(input[0], input[1]);
        expect(countLetters(actual,'4')).toBe(2);
    });

    test('should return a string with the larger number being inside of it equals 3 times, input = 0,0', () => {
        const input = [0,0];
        const actual = greaterNum(input[0], input[1]);
        expect(countLetters(actual,'0')).toBe(3);
    });
});

describe('function isEven', () => {
    test('should accept two parameters', () => {
        const numberOfArguments = isEven.length;
        expect(numberOfArguments).toBe(2);
    });

    test('should return a array', () => {
        expect(isEven(1,1)).toStrictEqual(expect.any(Array));
    });

    test('should return [2,4,6,8,10] for input 1,10', () => {
        const input = [1,10];
        const expected = [2,4,6,8,10];
        const actual = isEven(input[0], input[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20] for input 0,20', () => {
        const input = [0,20];
        const expected = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
        const actual = isEven(input[0], input[1]);
        expect(actual).toStrictEqual(expected);
    });
});

describe('function sum', () => {
    test('should accept two parameters', () => {
        const numberOfArguments = sum.length;
        expect(numberOfArguments).toBe(2);
    });

    test('should return a number', () => {
        expect(sum(1,1)).toStrictEqual(expect.any(Number));
    });

    test('should contain while loop', () => {
        // test is not granted to work in all logically possible cases, but it will hold true for most cases.
        // const functionString = sum.toString().replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/|"[\s\S]*?"|'[\s\S]*?'.*$/gm, '');
        // const haveWhile = functionString.includes('while');
        // expect(haveWhile).toBe(true); sum
        expect(containWhile(sum)).toBe(true);
    });

    test('should not contain for loop', () => {
        // test is not granted to work in all logically possible cases, but it will hold true for most cases.
        // const functionString = sum.toString().replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/|"[\s\S]*?"|'[\s\S]*?'.*$/gm, '');
        // const haveFor = functionString.includes('for');
        // expect(haveFor).toBe(false);
        expect(containFor(sum)).toBe(false);
    });

    test('should return 15 for input 5,5', () => {
        const input = [1,5];
        const expected = 15;
        const actual = sum(input[0], input[1]);
        expect(expected).toBe(actual);
    });

    test('should return 0 for input 0,0', () => {
        const input = [0,0];
        const expected = 0;
        const actual = sum(input[0], input[1]);
        expect(expected).toBe(actual);
    });
});


describe('function factorial', () => {
    test('should accept one parameters', () => {
        const numberOfArguments = factorial.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a number', () => {
        expect(factorial(0)).toStrictEqual(expect.any(Number));
    });

    test('should be Recursive', () => {
        expect(isRecursive(factorial)).toBe(true);
    });

    test('should not contain Loops', () => {
        expect(isIterative(factorial)).toBe(false);
    });

    test('should return 3628800 for input 10', () => {
        const input = 10;
        const expected = 3628800;
        const actual = factorial(input);
        expect(actual).toBe(expected);
    });

    test('should return 1 for input 0', () => {
        const input = 0;
        const expected = 1;
        const actual = factorial(input);
        expect(actual).toBe(expected);
    });
});

describe('', function () {

});
