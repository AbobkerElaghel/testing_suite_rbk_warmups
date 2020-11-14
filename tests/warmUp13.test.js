const dominator = require('../warmUpsSolutions/warmUp13');

describe('function dominator', () => {
    test('dominator should be defined', () => {
        expect(dominator).toBeDefined();
    });

    test('should accept one parameters', () => {
        const numberOfArguments = dominator.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a number', () => {
        expect(dominator([])).toStrictEqual(expect.any(Number));
    });

    test('should return -1 when there is no array dominator', () => {
        const input = [1,2,3,4,5,6];
        const expected = -1;
        const actual = dominator(input);
        expect(actual).toBe(expected);
    });

    test('should return -1 for empty arrays', () => {
        const input = [];
        const expected = -1;
        const actual = dominator(input);
        expect(actual).toBe(expected);
    });

    test('should return the 3 for input [3,4,3,2,3,1,3,3]', () => {
        const input = [3,4,3,2,3,1,3,3];
        const expected = 3;
        const actual = dominator(input);
        expect(actual).toBe(expected);
    });

    test('should return -1 when there is no possible dominator for the array', () => {
        const input = [1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,6,7];
        const expected = -1;
        const actual = dominator(input);
        expect(actual).toBe(expected);
    });

    test('should return 2 when for input [1,2,3,2,4,2,6,2,2]', () => {
        const input = [1,2,3,2,4,2,6,2,2];
        const expected = 2;
        const actual = dominator(input);
        expect(actual).toBe(expected);
    });

    test('should return 4 when for input [1,4,4,2,3,4,4,4,5,4,5,6,4,8,4,4,9,9,4,4]', () => {
        const input = [1,4,4,2,3,4,4,4,5,4,5,6,4,8,4,4,9,9,4,4];
        const expected = 4;
        const actual = dominator(input);
        expect(actual).toBe(expected);
    });
});