const sumOfMinimums = require('../warmUpsStaff/warmUp21');

describe('function sumOfMinimums', () => {
    test('sumOfMinimums should be defined', () => {
        expect(sumOfMinimums).toBeDefined();
    });

    test('should accept one parameters', () => {
        const numberOfArguments = sumOfMinimums.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a number', () => {
        expect(sumOfMinimums([])).toStrictEqual(expect.any(Number));
    });

    test('should return 26 for input =  [[1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [20, 21, 34, 56, 100]]', () => {
        const input = [[1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [20, 21, 34, 56, 100]];
        const expected = 26;
        let actual = sumOfMinimums(input);
        expect(actual).toBe(expected);
    });

    test('should return 11 for input = [[1], [5], [5]]', () => {
        const input = [[1], [5], [5]];
        const expected = 11;
        let actual = sumOfMinimums(input);
        expect(actual).toBe(expected);
    });

    test('should return 0 for input =  [[0], [0], [0]]', () => {
        const input = [[0], [0], [0]];
        const expected = 0;
        let actual = sumOfMinimums(input);
        expect(actual).toBe(expected);
    });

    test('should return 1 for input =  [[1], [2,0,1], [1,2,3,4,0]]', () => {
        const input = [[1], [2,0,1], [1,2,3,4,0]];
        const expected = 1;
        let actual = sumOfMinimums(input);
        expect(actual).toBe(expected);
    });
});
