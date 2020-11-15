const intDiff = require('../warmUpsSolutions/warmUp18');

describe('function intDiff', () => {
    test('intDiff should be defined', () => {
        expect(intDiff).toBeDefined();
    });

    test('should accept two parameters', () => {
        const numberOfArguments = intDiff.length;
        expect(numberOfArguments).toBe(2);
    });

    test('should return an Array', () => {
        expect(intDiff([],1)).toStrictEqual(expect.any(Array));
    });

    test('should return an empty array for input = []', () => {
        const inputs = [[],0];
        const expected = [];
        const actual = intDiff(inputs[0], inputs[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return [[5,1], [5,1], [9,5]] for input = [1, 1, 5, 6, 9, 16, 27], 4', () => {
        const inputs = [[1, 1, 5, 6, 9, 16, 27], 4];
        const expected = [[5,1], [5,1], [9,5]];
        const actual = intDiff(inputs[0], inputs[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return [[1,5], [1,5], [5,9]] for input = [27, 16, 9, 6, 5, 1, 1], -4', () => {
        const inputs = [[27, 16, 9, 6, 5, 1, 1], -4];
        const expected = [[5,9],[1,5], [1,5]];
        const actual = intDiff(inputs[0], inputs[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return [[28,16]] for input = [1, 1, 5, 6, 9, 16, 28], 12', () => {
        const inputs = [[1, 1, 5, 6, 9, 16, 28], 12];
        const expected =  [[28,16]];
        const actual = intDiff(inputs[0], inputs[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return [[1,1],[1,1]] for input = [1, 1, 5, 6, 9, 16, 28], 0', () => {
        const inputs = [[1, 1, 5, 6, 9, 16, 28], 0];
        const expected = [[1,1],[1,1]];
        const actual = intDiff(inputs[0], inputs[1]);
        expect(actual).toStrictEqual(expected);
    });
});