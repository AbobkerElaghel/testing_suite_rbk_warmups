const {larger, smaller, counting ,meetNGreet, shortestWord} = require('../warmUps/warmUp3');

// BETA Version, if you have any feedback, or you notice that something needs fixing or changing please contact me
// abobker.elaghel@rbk.tn
// or in slack

expect.extend({
   toBeStringOrUndefined(received){
       if(typeof received === 'undefined' || typeof received === 'string'){
           return {
               message: () => `expected ${received} to be string or undefined`,
               pass: true
           }
       }else{
           return {
               message: () => `expected ${received} to be string or undefined`,
               pass: false
           }
       }
   },
    toBeEmptyStringOrUndefined(received){
        if(received === '' || received === undefined){
            return {
                message: () => `expected ${received} to be empty string or undefined`,
                pass: true
            }
        }else{
            return {
                message: () => `expected ${received} to be empty string or undefined`,
                pass: false
            }
        }
    }
});

beforeAll(() => {
    test('larger should be defined', () => {
        expect(larger).toBeDefined();
    });

    test('smaller should be defined', () => {
        expect(smaller).toBeDefined();
    });

    test('counting should be defined', () => {
        expect(counting).toBeDefined();
    });

    test('meetNGreet should be defined', () => {
        expect(meetNGreet).toBeDefined();
    });

    test('shortestWord should be defined', () => {
        expect(shortestWord).toBeDefined();
    });
});

describe('function larger', () => {
    test('should accept two parameters', () => {
        const numberOfArguments = larger.length;
        expect(numberOfArguments).toBe(2);
    });

    test('should return a string', () => {
        expect(larger('','')).toStrictEqual(expect.any(String));
    });

    test('should return "" for the inputs ("", "")', () => {
        const input = ['', ''];
        const expected = '';
        const actual = larger(input[0], input[1]);
        expect(expected).toBe(actual);
    });

    test('should return longer for the inputs ("longer", "small")', () => {
        const input = ['longer', 'small'];
        const expected = 'longer';
        const actual = larger(input[0], input[1]);
        expect(expected).toBe(actual);
    });

    test('should not return small for the inputs ("small", "longer")', () => {
        const input = ['small', 'longer'];
        const notExpected = 'small';
        const actual = larger(input[0], input[1]);
        expect(notExpected).not.toBe(actual);
    });
});

describe('function smaller', () => {
    test('should accept two parameters', () => {
        const numberOfArguments = smaller.length;
        expect(numberOfArguments).toBe(2);
    });

    test('should return a string', () => {
        expect(smaller('','')).toStrictEqual(expect.any(String));
    });

    test('should return "" for the inputs ("", "")', () => {
        const input = ['', ''];
        const expected = '';
        const actual = smaller(input[0], input[1]);
        expect(expected).toBe(actual);
    });

    test('should return "small" for the inputs ("small", "longer")', () => {
        const input = ['small', 'longer'];
        const expected = 'small';
        const actual = smaller(input[0], input[1]);
        expect(expected).toBe(actual);
    });

    test('should not return longer for the inputs ("small", "longer")', () => {
        const input = ['small', 'longer'];
        const notExpected = 'longer';
        const actual = smaller(input[0], input[1]);
        expect(notExpected).not.toBe(actual);
    });
});

describe('function counting', () => {
    test('should accept one parameters', () => {
        const numberOfArguments = counting.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a string', () => {
        expect(counting(1)).toStrictEqual(expect.any(String));
    });

    test('should return empty string for 0', () => {
        const input = 0;
        const expected = '';
        const actual = counting(input);
        expect(actual).toBe(expected);
    });

    test('should return "1" string for 1', () => {
        const input = 1;
        const expected = "1";
        const actual = counting(input);
        expect(actual).toBe(expected);
    });

    test('should return "2" string for 1', () => {
        const input = 2;
        const expected = "1, 2";
        const actual = counting(input);
        expect(actual).toBe(expected);
    });

    test('should return "1, 2, 3, 4, 5" string for 5', () => {
        const input = 5;
        const expected = "1, 2, 3, 4, 5";
        const actual = counting(input);
        expect(actual).toBe(expected);
    });
});

describe('function meetNGreet', () => {
    test('should accept one parameters', () => {
        const numberOfArguments = meetNGreet.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a string', () => {
        expect(meetNGreet(1)).toStrictEqual(expect.any(String));
    });

    test('should return empty string for 0', () => {
        const input = 0;
        const expected = '';
        const actual = meetNGreet(input);
        expect(actual).toBe(expected);
    });

    test('should return "welcome 1" string for 1', () => {
        const input = 1;
        const expected = 'welcome 1';
        const actual = meetNGreet(input);
        expect(actual).toBe(expected);
    });

    test('should return "welcome 1\nwelcome 2, meet 1" string for input 2', () => {
        const input = 2;
        const expected = 'welcome 1\nwelcome 2, meet 1';
        const actual = meetNGreet(input);
        expect(actual).toBe(expected);
    });

    test('should return "welcome 1\nwelcome 2, meet 1\nwelcome 3, meet 1 and 2" string for input 3', () => {
        const input = 3;
        const expected = 'welcome 1\nwelcome 2, meet 1\nwelcome 3, meet 1 and 2';
        const actual = meetNGreet(input);
        expect(actual).toBe(expected);
    });

    test('should return correct result string for input 7', () => {
        const input = 7;
        const expected = 'welcome 1\nwelcome 2, meet 1\nwelcome 3, meet 1 and 2\nwelcome 4, meet 1, 2 and 3\nwelcome 5, meet 1, 2, 3 and 4\nwelcome 6, meet 1, 2, 3, 4 and 5\nwelcome 7, meet 1, 2, 3, 4, 5 and 6';
        const actual = meetNGreet(input);
        expect(actual).toBe(expected);
    });

});

describe('function shortestWord', () => {
    test('should accept one parameters', () => {
        const numberOfArguments = shortestWord.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a string or undefined', () => {
        expect(shortestWord([])).toBeStringOrUndefined();
    });

    test("should return an empty string or undefined for empty array", () => {
        const input = [];
        const actual = shortestWord(input);
        expect(actual).toBeEmptyStringOrUndefined();
    });

    test("should return the shortest value in an array, input=['a','ab','abc','abcd']", () => {
        const input = ['a','ab','abc','abcd'];
        const expected = 'a';
        const actual = shortestWord(input);
        expect(actual).toBe(expected)
    });

    test("should return the shortest value in an array, input=['qweasdzxc','aze','csazxc1','cvsqw']", () => {
        const input = ['a','b','ab','bb'];
        const expected = 'a';
        const actual = shortestWord(input);
        expect(actual).toBe(expected)
    });

    test("should return the shortest value in an array, input=['','ab','abc','abcd']", () => {
        const input = ['','ab','abc','abcd'];
        const expected = '';
        const actual = shortestWord(input);
        expect(actual).toBe(expected)
    });

});

//