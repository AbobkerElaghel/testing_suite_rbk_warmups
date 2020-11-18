const findAll = require('../warmUpsSolutions/warmUp14');

describe('function findAll', () => {
    test('findAll should be defined', () => {
        expect(findAll).toBeDefined();
    });

    test('should accept two parameters', () => {
        const numberOfArguments = findAll.length;
        expect(numberOfArguments).toBe(2);
    });

    test('should return an Array', () => {
        expect(findAll([],1)).toStrictEqual(expect.any(Array));
    });

    test('should return [] for empty arrays', () => {
        const inputs = [[],0];
        const expected = [];
        const actual = findAll(inputs[0], inputs[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return [] for inputs = [1,2,3,4,5,6,6,6], 7', () => {
        const inputs = [[1,2,3,4,5,6,6,6], 7];
        const expected = [];
        const actual = findAll(inputs[0], inputs[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return [5,6,7] for inputs = [1,2,3,4,5,6,6,6], 6', () => {
        const inputs = [[1,2,3,4,5,6,6,6], 6];
        const expected = [5,6,7];
        const actual = findAll(inputs[0], inputs[1]);
        expect(actual).toStrictEqual(expected);
    });


    test('should return [0,1,2] for inputs = [-1,-1,-1,1,2,3,4,5], -1', () => {
        const inputs = [[6,6,6,1,2,3,4,5], 6];
        const expected = [0,1,2];
        const actual = findAll(inputs[0], inputs[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return [0,6,10] for inputs = [7,1,2,3,6,6,7,6,4,5,7], 6', () => {
        const inputs = [[7,1,2,3,6,6,7,6,4,5,7], 7];
        const expected = [0,6,10];
        const actual = findAll(inputs[0], inputs[1]);
        expect(actual).toStrictEqual(expected);
    });
});
