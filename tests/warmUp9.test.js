const {convert, first, isArray} = require('../warmUpsStaff/warmUp9');

beforeAll(() => {
    test('objKey should be defined', () => {
        expect(convert).toBeDefined();
    });

    test('objLength should be defined', () => {
        expect(first).toBeDefined();
    });

    test('objSort should be defined', () => {
        expect(isArray).toBeDefined();
    });
});

describe('function convert', () => {
    test('should accept one parameters', () => {
        const numberOfArguments = convert.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return an Array', () => {
        expect(convert({})).toStrictEqual(expect.any(Array));
    });

    test("should return [['name','ahmed'],['age', 20]] for input={name:'ahmed',age:20}", () => {
        const input = {name:'ahmed',age:20};
        const expected = [['name','ahmed'],['age', 20]];
        const actual = convert(input);
        expect(actual).toStrictEqual(expected);
    });

    test("should return [['name','ahmed'],['age', 20]] for input={'1':'ahmed','2':20, '3': 'three', 'hello':'hello'}", () => {
        const input = {1:'ahmed',2:20, 3: 'three', 'hello':'hello'};
        const expected = [['1','ahmed'],['2',20],['3','three'],['hello','hello']];
        const actual = convert(input);
        expect(actual).toStrictEqual(expected);
    });

    test("should return [] for input = {}", () => {
        const input = {};
        const expected = [];
        const actual = convert(input);
        expect(actual).toStrictEqual(expected);
    });
});

describe('function first', () => {
    test('should accept one parameters', () => {
        const numberOfArguments = first.length;
        expect(numberOfArguments).toBe(2);
    });

    test('should return an Array', () => {
        expect(first([],1)).toStrictEqual(expect.any(Array));
    });

    test('should return [1] for input [1,2,3], 1', () => {
        const input = [[1,2,3], 1];
        const expected = [1];
        const actual = first(input[0], input[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return [1,2] for input [1,2,3], 2', () => {
        const input = [[1,2,3], 2];
        const expected = [1, 2];
        const actual = first(input[0], input[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return [1,2,3] for input [1,2,3,4,5], 3', () => {
        const input = [[1,2,3,4,5], 3];
        const expected = [1, 2, 3];
        const actual = first(input[0], input[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should always return empty array when the first input is an empty array', () => {
        const secondInputs = [0,1,2,3,4,5,10];
        const firstInput = [];
        const expected = [];
        for (let i = 0; i < secondInputs.length; i++) {
            expect(first(firstInput, secondInputs[i])).toStrictEqual(expected)
        }
    });

    test('should always return empty array when the second input is 0', () => {
        const secondInput = 0;
        const firstInput = [[1,2,3],[1,2,3,4],[1,2,3,4,5],[1,2,3,4,5,6],[1,2,3,4,5,6,7]];
        const expected = [];
        for (let i = 0; i < firstInput.length; i++) {
            expect(first(firstInput[i], secondInput)).toStrictEqual(expected)
        }
    });

    test('should return should the whole array when passing an index larger then the length of the array', () => {
        const input = [[1,2,3,4,5], 10];
        const expected = [1,2,3,4,5];
        const actual = first(input[0], input[1]);
        expect(actual).toStrictEqual(expected);
    });
});

describe('function isArray', () => {
    test('should accept one parameters', () => {
        const numberOfArguments = isArray.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return an boolean', () => {
        expect(isArray([])).toStrictEqual(expect.any(Boolean));
    });

    test('should return true when the value is an array (regardless of the array values)', () => {
        const inputs = [[],[null],[undefined],[1,2,3,4],["","asd"]];
        const expected = true;
        for (let i = 0; i < inputs.length; i++) {
            expect(isArray(inputs[i])).toBe(expected)
        }
    });

    test('should return false for everything that is not an array', () => {
        const inputs = [1,-1,0,2.3,{},'','asd',Symbol(),true,false,{a:3}, undefined, null];
        const expected = false;
        for (let i = 0; i < inputs.length; i++) {
            expect(isArray(inputs[i])).toBe(expected)
        }
    });
});
