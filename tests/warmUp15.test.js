const capitalize = require('../warmUpsStaff/warmUp15');

describe('function capitalize', () => {
    test('capitalize should be defined', () => {
        expect(capitalize).toBeDefined();
    });

    test('should accept one parameters', () => {
        const numberOfArguments = capitalize.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return an Array', () => {
        expect(capitalize('')).toStrictEqual(expect.any(Array));
    });

    test('should return ["AbCdEf", "aBcDeF"] for input abcdef', () => {
        const input = 'abcdef';
        const expected = ["AbCdEf", "aBcDeF"];
        const actual = capitalize(input);
        expect(actual).toStrictEqual(expected)
    });

    test('should return ["1q2w3e4r5t6y7u8i", "1Q2W3E4R5T6Y7U8I"] for input 1q2w3e4r5t6y7u8i', () => {
        const input = '1q2w3e4r5t6y7u8i';
        const expected = ["1q2w3e4r5t6y7u8i", "1Q2W3E4R5T6Y7U8I"];
        const actual = capitalize(input);
        expect(actual).toStrictEqual(expected)
    });

    test('should return ["A", "a"] for input a', () => {
        const input = 'a';
        const expected = ["A", "a"];
        const actual = capitalize(input);
        expect(actual).toStrictEqual(expected)
    });

    test('should return ["Ab", "aB"] for input ab', () => {
        const input = 'ab';
        const expected = ["Ab", "aB"];
        const actual = capitalize(input);
        expect(actual).toStrictEqual(expected)
    });

    test('should return ["",""] for empty input', () => {
        const input = '';
        const expected = ["", ""];
        const actual = capitalize(input);
        expect(actual).toStrictEqual(expected)
    });
});
