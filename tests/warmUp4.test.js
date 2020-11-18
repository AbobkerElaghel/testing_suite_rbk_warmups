const {productOf3, multiply, fahrenheitToCelsius, sqArea} = require('../warmUpsStaff/warmUp4');

expect.extend({
    toBeZeroOrStringOrUndefined(received){
        if(typeof received === 'undefined' || typeof received === 'string' || received === 0){
            return {
                message: () => `expected ${received} to be string, undefined or 0`,
                pass: true
            }
    }else {
            return {
                message: () => `expected ${received} to be string, undefined or 0`,
                pass: false
            }
        }
}});

beforeAll(() => {
    test('productOf3 should be defined', () => {
        expect(productOf3).toBeDefined();
    });

    test('multiply should be defined', () => {
        expect(multiply).toBeDefined();
    });

    test('fahrenheitToCelsius should be defined', () => {
        expect(fahrenheitToCelsius).toBeDefined();
    });

    test('sqArea should be defined', () => {
        expect(sqArea).toBeDefined();
    });
});

describe('function productOf3', () => {
    test('should accept one parameters', () => {
        const numberOfArguments = productOf3.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a number', () => {
        expect(productOf3(1)).toStrictEqual(expect.any(Number));
    });

    test('should return 0 for input 0', () => {
        const input = 0;
        const expected = 0;
        const actual = productOf3(input);
        expect(actual).toBe(expected);
    });

    test('should return 3 for input 1', () => {
        const input = 1;
        const expected = 3;
        const actual = productOf3(input);
        expect(actual).toBe(expected);
    });

    test('should return 6 for input 2', () => {
        const input = 2;
        const expected = 6;
        const actual = productOf3(input);
        expect(actual).toBe(expected);
    });

    test('should return -9 for input -3', () => {
        const input = -3;
        const expected = -9;
        const actual = productOf3(input);
        expect(actual).toBe(expected);
    });
});

describe('function multiply', () => {
    test('should accept two parameters', () => {
        const numberOfArguments = multiply.length;
        expect(numberOfArguments).toBe(2);
    });

    test('should return a number', () => {
        expect(multiply(1,1)).toStrictEqual(expect.any(Number));
    });

    test('should return 0 for inputs 0, 10', () => {
        const input = [0,10];
        const expected = 0;
        const actual = multiply(input[0], input[1]);
        expect(actual).toBe(expected);
    });

    test('should return 1 for inputs 1, 1', () => {
        const input = [1,1];
        const expected = 1;
        const actual = multiply(input[0], input[1]);
        expect(actual).toBe(expected);
    });

    test('should return 10 for inputs 5, 2', () => {
        const input = [5,2];
        const expected = 10;
        const actual = multiply(input[0], input[1]);
        expect(actual).toBe(expected);
    });

    test('should return -9 for inputs 3, -3', () => {
        const input = [3,-3];
        const expected = -9;
        const actual = multiply(input[0], input[1]);
        expect(actual).toBe(expected);
    });

    test('should return -9 for inputs -3, 3', () => {
        const input = [-3, 3];
        const expected = -9;
        const actual = multiply(input[0], input[1]);
        expect(actual).toBe(expected);
    });

    test('should return -1875 for inputs -25, -75', () => {
        const input = [-25,-75];
        const expected = 1875;
        const actual = multiply(input[0], input[1]);
        expect(actual).toBe(expected);
    });
});

describe('function fahrenheitToCelsius', () => {

    //
    // tolerance level for floating point number is 0.0001
    //
    const TOLERANCE_LEVEL = 0.0001;
    //
    // tolerance level for floating point number is 0.0001
    //

    test('should accept one parameters', () => {
        const numberOfArguments = fahrenheitToCelsius.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a number', () => {
        expect(fahrenheitToCelsius(1)).toStrictEqual(expect.any(Number));
    });

    test('should return -17.7778 for input 0', () => {
        const input = 0;
        const expected = -17.777778;
        const actual = fahrenheitToCelsius(input);
        const tolerance = Math.abs(actual - expected);
        expect(tolerance < TOLERANCE_LEVEL).toBe(true);
    });

    test('should return 0 for input 32', () => {
        const input = 32;
        const expected = 0;
        const actual = fahrenheitToCelsius(input);
        const tolerance = Math.abs(actual - expected);
        expect(tolerance < TOLERANCE_LEVEL).toBe(true);
    });

    test('should return 37.7778 for input 100', () => {
        const input = 100;
        const expected = 37.77778;
        const actual = fahrenheitToCelsius(input);
        const tolerance = Math.abs(actual - expected);
        expect(tolerance < TOLERANCE_LEVEL).toBe(true);
    });

    test('should return -86.1111 for input -123', () => {
        const input = -123;
        const expected = -86.1111;
        const actual = fahrenheitToCelsius(input);
        const tolerance = Math.abs(actual - expected);
        expect(tolerance < TOLERANCE_LEVEL).toBe(true);
    });
});

describe('function sqArea', () => {
    test('should accept one parameters', () => {
        const numberOfArguments = sqArea.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a number', () => {
        expect(sqArea(1)).toStrictEqual(expect.any(Number));
    });

    test('should return 0 for input 0', () => {
        const input = 0;
        const expected = 0;
        const actual = sqArea(input);
        expect(actual).toBe(expected);
    });

    test('should return 9 for input 3', () => {
        const input = 3;
        const expected = 9;
        const actual = sqArea(input);
        expect(actual).toBe(expected);
    });

    test('should return 144 for input 12', () => {
        const input = 12;
        const expected = 144;
        const actual = sqArea(input);
        expect(actual).toBe(expected);
    });

    test('should return 1 for input 1', () => {
        const input = 1;
        const expected = 1;
        const actual = sqArea(input);
        expect(actual).toBe(expected);
    });

    test('should return 144 for input -12', () => {
        const input = -12;
        const expected = 144;
        const actual = sqArea(input);
        expect(actual).toBe(expected);
    });

    test('should return Zero, string Or undefined for not providing input', () => {
        const actual = sqArea();
        expect(actual).toBeZeroOrStringOrUndefined();
    });
});

