const {cube} = require('../warmUps/warmUp2');

describe('function cube', () => {
    const POWER = 3;

    test('should be defined', () => {
        expect(cube).toBeDefined();
    });

    test('should return a number', () => {
        expect(cube(1)).toBe(expect.any(Number));
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

describe('function ');
