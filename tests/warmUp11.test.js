const {midElement,multipleEvenIndexes} = require('../warmUpsStaff/warmUp11');

beforeAll(() => {
    test('midElement should be defined', () => {
        expect(midElement).toBeDefined();
    });

    test('multipleEvenIndexes should be defined', () => {
        expect(multipleEvenIndexes).toBeDefined();
    });
});

describe('function midElement', () => {
    test('should accept one parameters', () => {
        const numberOfArguments = midElement.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a value', () => {
        expect(midElement([1])).toStrictEqual(expect.anything());
    });

    test('should return 3 or 4 for input = [1,2,3,4,5,6]', () => {
        const inputs = [1,2,3,4,5,6];
        const expected = [3,4];
        const actual = midElement(inputs);
        expect(actual === expected[0] || actual === expected[1]).toBe(true);
    });

    test("should return 'd' for input = ['a','b','c','d','e','f','g']", () => {
        const inputs = ['a','b','c','d','e','f','g'];
        const expected = 'd';
        const actual = midElement(inputs);
        expect(actual).toBe(expected);
    });

    test("should return 'x' or 'c' for input = [1,'b',2,'x','c',3,]", () => {
        const inputs =  [1,'b',2,'x','c',3,'a',0];
        const expected = ['x','c'];
        const actual = midElement(inputs);
        expect(actual === expected[0] || actual === expected[1]).toBe(true);
    });

    test("should return  for input = [undefined,1,'a',{},Symbol(),null,[]]", () => {
        const inputs = [undefined,1,'a',{},Symbol(),null,[]];
        const expected = {};
        const actual = midElement(inputs);
        expect(actual).toStrictEqual(expected);
    });
});

describe('function multipleEvenIndexes', () => {
    test('should accept one parameters', () => {
        const numberOfArguments = multipleEvenIndexes.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a value', () => {
        expect(multipleEvenIndexes([])).toStrictEqual(expect.any(Array));
    });

    test('should return [0,1,0,1,1] for input = [0,1,0,1,1]', () => {
        const inputs = [0,1,0,1,1];
        const expected = [0,1,0,1,1];
        const actual = multipleEvenIndexes(inputs);
        expect(actual).toStrictEqual(expected);
    });

    test('should return [1,4,3,8,5,12] for input = [1,2,3,4,5,6]', () => {
        const inputs = [1,2,3,4,5,6];
        const expected = [1,4,3,8,5,12];
        const actual = multipleEvenIndexes(inputs);
        expect(actual).toStrictEqual(expected);
    });

    test('should return [[1,3,5,7,9,11,13]] for input = [1,3,5,7,9,11,13]', () => {
        const inputs = [1,3,5,7,9,11,13];
        const expected = [1,3,5,7,9,11,13];
        const actual = multipleEvenIndexes(inputs);
        expect(actual).toStrictEqual(expected);
    });

    test('should return [4,12,16,20,44,84] for input = [2,6,8,10,22,42]', () => {
        const inputs = [2,6,8,10,22,42];
        const expected = [4,12,16,20,44,84];
        const actual = multipleEvenIndexes(inputs);
        expect(actual).toStrictEqual(expected);
    });
});
