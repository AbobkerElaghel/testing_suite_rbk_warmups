const {helloWorld, laugh, reverseArray} = require('../warmUps/warmUp7');
const containReverse = require('../specialTests/containReverse');

beforeAll(() => {
    test('helloWorld should be defined', () => {
        expect(helloWorld).toBeDefined();
    });

    test('laugh should be defined', () => {
        expect(laugh).toBeDefined();
    });

    test('reverseArray should be defined', () => {
        expect(reverseArray).toBeDefined();
    });
});

describe('function helloWorld', function () {
    test('should accept one parameters', () => {
        const numberOfArguments = helloWorld.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a string', () => {
        expect(helloWorld("ar")).toStrictEqual(expect.any(String));
    });

    test("should return 'Bonjour tout le monde' for fr" , () => {
        const input = 'fr';
        const expected = 'Bonjour tout le monde';
        const actual = helloWorld(input);
        expect(actual).toBe(expected);
    });

    test("should return 'Hola, Mundo' for es" , () => {
        const input = 'es';
        const expected = 'Hola, Mundo';
        const actual = helloWorld(input);
        expect(actual).toBe(expected);
    });

    test("should return 'Hello, World' for any other string" , () => {
        const input = ['enas', 'en', ''];
        const expected = 'Hello, World';
        expect(helloWorld(input[0])).toBe(expected);
        expect(helloWorld(input[1])).toBe(expected);
        expect(helloWorld(input[2])).toBe(expected);
    });
});


describe('function laugh', function () {
    test('should accept one parameters', () => {
        const numberOfArguments = laugh.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a string', () => {
        expect(laugh(0)).toStrictEqual(expect.any(String));
    });

    test('should return "" for input 0', () => {
        const input =  0;
        const expected = "";
        const actual = laugh(input);
        expect(actual).toBe(expected);
    });

    test('should return "ha" for input 1', () => {
        const input =  1;
        const expected = "ha";
        const actual = laugh(input);
        expect(actual).toBe(expected);
    });

    test('should return "hahaha" for input 3', () => {
        const input =  3;
        const expected = "hahaha";
        const actual = laugh(input);
        expect(actual).toBe(expected);
    });

    test('should return "hahahahahaha" for input 6', () => {
        const input =  6;
        const expected = "hahahahahaha";
        const actual = laugh(input);
        expect(actual).toBe(expected);
    });
});

describe('function reverseArray', function () {
    test('should accept one parameter', () => {
        const numberOfArguments = reverseArray.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return an array', () => {
        expect(reverseArray([])).toStrictEqual(expect.any(Array));
    });

    test('should return an empty array for input=[]', () => {
        const input =  [];
        const expected = [];
        const actual = reverseArray(input);
        expect(actual).toStrictEqual(expected);
    });

    test('should return [3,2,1] array for input=[1,2,3]', () => {
        const input =  [1,2,3];
        const expected = [3,2,1];
        const actual = reverseArray(input);
        expect(actual).toStrictEqual(expected);
    });

    test('should return [-4, 3, -2, 1] array for input=[1,-2,3,-4]', () => {
        const input =  [1,-2,3,-4];
        const expected = [-4, 3, -2, 1];
        const actual = reverseArray(input);
        expect(actual).toStrictEqual(expected);
    });

    test('should not contain reverse() array function', () => {
        expect(containReverse(reverseArray)).toBe(false);
    });
});