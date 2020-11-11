const {greaterNum, isEven, sum, factorial, decimals} = require('../warmUps/warmUp5');

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

});