const digital_root = require('../warmUpsStaff/warmUp23');

describe('function digital_root', () => {
    test('digital_root should be defined', () => {
        expect(digital_root).toBeDefined();
    });

    test('should accept one parameters', () => {
        const numberOfArguments = digital_root.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a number', () => {
        expect(digital_root(1)).toStrictEqual(expect.any(Number));
    });

    test('should return 7 for input = 16', () => {
        const input = 16;
        const expected = 7;
        const actual = digital_root(input);
        expect(actual).toBe(expected);
    });

    test('should return 6 for input = 942', () => {
        const input = 942;
        const expected = 6;
        const actual = digital_root(input);
        expect(actual).toBe(expected);
    });

    test('should return 2 for input = 493193', () => {
        const input = 493193;
        const expected = 2;
        const actual = digital_root(input);
        expect(actual).toBe(expected);
    });

    test('should return 6 for input = 132189', () => {
        const input = 132189;
        const expected = 6;
        const actual = digital_root(input);
        expect(actual).toBe(expected);
    });

    test('should return 2 for input = 100001', () => {
        const input = 100001;
        const expected = 2;
        const actual = digital_root(input);
        expect(actual).toBe(expected);
    });


    test('should return 0 for input = 0', () => {
        const input = 0;
        const expected = 0;
        const actual = digital_root(input);
        expect(actual).toBe(expected);
    });

    test('should return 10 for input = 111111111', () => {
        const input = 111111111;
        const expected = 9;
        const actual = digital_root(input);
        expect(actual).toBe(expected);
    });
});
