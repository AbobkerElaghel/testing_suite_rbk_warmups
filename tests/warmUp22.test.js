const greatestProduct = require('../warmUpsStaff/warmUp22');

describe('function greatestProduct', () => {
    test('greatestProduct should be defined', () => {
        expect(greatestProduct).toBeDefined();
    });

    test('should accept one parameters', () => {
        const numberOfArguments = greatestProduct.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a number', () => {
        expect(greatestProduct('')).toStrictEqual(expect.any(Number));
    });

    test('should return 3240 for input = "123834539327238239583"', () => {
        const input = "123834539327238239583";
        const expected = 3240;
        const actual = greatestProduct(input);
        expect(actual).toBe(expected);
    });


    test('should return 120 for input = "12345"', () => {
        const input = "12345";
        const expected = 120;
        const actual = greatestProduct(input);
        expect(actual).toBe(expected);
    });

    test('should return 120 for input = "124565555555555"', () => {
        const input = "124565555555555";
        const expected = 3750;
        const actual = greatestProduct(input);
        expect(actual).toBe(expected);
    });

    test('should return 120 for input = "110111114044444004444055550"', () => {
        const input = "111111444444444555555";
        const expected = 3125;
        const actual = greatestProduct(input);
        expect(actual).toBe(expected);
    });

    test('should return 3240 for input = "-1-2-3-8-3-4-5-3-9-3-2-7-2-38-23-95-83"', () => {
        const input = "-1-2-3-8-3-4-5-3-9-3-2-7-2-38-23-95-83";
        const expected = 3240;
        const actual = greatestProduct(input);
        expect(actual).toBe(expected);
    });

    test('should return -84 for input = "-1-2-3-8-3-4-5-3-9-1-2-7-2-3-8-2-3-9-5-8-3"', () => {
        const input = "-1-2-3-8-3-4-5-3-9-1-2-7-2-3-8-2-3-9-5-8-3";
        const expected = -84;
        const actual = greatestProduct(input);
        expect(actual).toBe(expected);
    });

    test('should return 1620 for input = "-1-23834539327238235-8-3"', () => {
        const input = "-1-23834539327238235-8-3";
        const expected = 1620;
        const actual = greatestProduct(input);
        expect(actual).toBe(expected);
    });
});
