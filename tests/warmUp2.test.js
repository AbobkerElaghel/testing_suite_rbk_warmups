const {cube, sameLength, scoreToGrade, repeatString} = require('../warmUps/warmUp2');

// BETA Version, if you have any feedback, or you notice that something needs fixing or changing please contact me
// abobker.elaghel@rbk.tn
// or in slack
describe('function cube', () => {
    const POWER = 3;

    test('should be defined', () => {
        expect(cube).toBeDefined();
    });

    test('should return a number', () => {
        expect(cube(1)).toStrictEqual(expect.any(Number));
    });

    test('should return 0 for input 0', () => {
        const input = 0;
        const actual = cube(input);
        const expected = Math.pow(input, POWER);
        expect(actual).toBe(expected);
    });

    test('should return 27 for input 3', () => {
        const input = 3;
        const actual = cube(input);
        const expected = Math.pow(input, POWER);
        expect(actual).toBe(expected);
    });

    test('should return 125 for input -5', () => {
        const input = -5;
        const actual = cube(input);
        const expected = Math.pow(input, POWER);
        expect(actual).toBe(expected);
    });
});

describe('function sameLength', () => {
    test('should be defined', () => {
        expect(sameLength).toBeDefined();
    });

    test('should accept two inputs', () => {
        const numberOfArguments = sameLength.length;
        expect(numberOfArguments).toBe(2);
    });

    test('should return a boolean', () => {
        expect(sameLength('','')).toStrictEqual(expect.any(Boolean));
    });

    test('should return true for empty values', () => {
        expect(sameLength('','')).toBe(true);
    });

    test('should return true for non empty values', () => {
        expect(sameLength('abobker','elaghel')).toBe(true);
        expect(sameLength('a','z')).toBe(true);
        expect(sameLength('abcdefg','abcdefg')).toBe(true);
        expect(sameLength('gfedcba','abcdefg')).toBe(true);
    });

    test('should return false for mismatching length strings', () => {
        expect(sameLength('','a')).toBe(false);
        expect(sameLength('z','')).toBe(false);
        expect(sameLength('abcd','abcdefg')).toBe(false);
        expect(sameLength('abcdefg','abcd')).toBe(false);
    });
});

// describe('function scoreToGrade', () => {
//     test('should be defined', () => {
//         expect(scoreToGrade).toBeDefined();
//     });
//
//     test('should accept two inputs', () => {
//         const numberOfArguments = sameLength.length;
//         expect(numberOfArguments).toBe(2);
//     });
//
//     test('should return a boolean', () => {
//         expect(sameLength('','')).toStrictEqual(expect.any(Boolean));
//     });
// });
