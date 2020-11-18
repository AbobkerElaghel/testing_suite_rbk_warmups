const {greatestCommonDivisor,sum} = require('../warmUpsStaff/warmUp10');
const isRecursive = require('../specialTests/isRecursive');
const isIterative = require('../specialTests/isIterative');

beforeAll(() => {
    test('objKey should be defined', () => {
        expect(greatestCommonDivisor).toBeDefined();
    });

    test('objLength should be defined', () => {
        expect(sum).toBeDefined();
    });
});

describe('function greatestCommonDivisor', () => {
    test('should accept two parameters', () => {
        const numberOfArguments = greatestCommonDivisor.length;
        expect(numberOfArguments).toBe(2);
    });

    test('should return a number', () => {
        expect(greatestCommonDivisor(1,2)).toStrictEqual(expect.any(Number));
    });

    test('should return a falsy value when one of the inputs is not a number', () => {
        const input = ['', null, {}, undefined, Symbol()];
        for (let i = 0; i < input.length; i++) {
            expect(greatestCommonDivisor(input[i], 1)).toBeFalsy();
        }
        for (let i = 0; i < input.length; i++) {
            expect(greatestCommonDivisor(1, input[i])).toBeFalsy();
        }
    });

    test('should return 4 for inputs 12,8', () => {
        const input = [12,8];
        const expected = 4;
        const actual = greatestCommonDivisor(input[0], input[1]);
        expect(actual).toBe(expected);
    });

    test('should return 6 for inputs= 636,630', () => {
        const input = [636,630];
        const expected = 6;
        const actual = greatestCommonDivisor(input[0], input[1]);
        expect(actual).toBe(expected);
    });

    test('should return 12 for inputs= 636,660', () => {
        const input = [636,660];
        const expected = 12;
        const actual = greatestCommonDivisor(input[0], input[1]);
        expect(actual).toBe(expected);
    });

    test('should return 1 for inputs= 8,13', () => {
        const input = [8,13];
        const expected = 1;
        const actual = greatestCommonDivisor(input[0], input[1]);
        expect(actual).toBe(expected);
    });

    test('should return 11 for inputs= 11,11', () => {
        const input = [11,11];
        const expected = 11;
        const actual = greatestCommonDivisor(input[0], input[1]);
        expect(actual).toBe(expected);
    });
});


describe('function sum', () => {
    test('should accept two parameters', () => {
        const numberOfArguments = sum.length;
        expect(numberOfArguments).toBe(2);
    });

    test('should return a number', () => {
        expect(sum(1,2)).toStrictEqual(expect.any(Number));
    });

    test('should be a recursive function', () => {
        expect(isRecursive(sum)).toBe(true);
    });

    test('should not contain any looping structures', () => {
        expect(isIterative(sum)).toBe(false);
    });

    test('should return 15 for inputs 10, 5', () => {
        const input = [10,5];
        const expected = 15;
        const actual = sum(input[0], input[1]);
        expect(actual).toBe(expected);
    });

    test('should return -5 for inputs -10, 5', () => {
        const input = [-10,5];
        const expected = -5;
        const actual = sum(input[0], input[1]);
        expect(actual).toBe(expected);
    });

    test('should return 5 for inputs 10, -5', () => {
        const input = [10,-5];
        const expected = 5;
        const actual = sum(input[0], input[1]);
        expect(actual).toBe(expected);
    });

    test('should return -15 for inputs -10, -5', () => {
        const input = [-10,-5];
        const expected = -15;
        const actual = sum(input[0], input[1]);
        expect(actual).toBe(expected);
    });
});
