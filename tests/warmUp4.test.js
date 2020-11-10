const {productOf3, multiply, fahrenheitToCelsius, sqArea} = require('../warmUps/warmUp4');

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
});

