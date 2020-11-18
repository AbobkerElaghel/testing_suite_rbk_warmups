const {color, isPrime, myTrueFun, sameValue} = require('../warmUpsStaff/warmUp6');

beforeAll(() => {
    test('color should be defined', () => {
        expect(color).toBeDefined();
    });

    test('isPrime should be defined', () => {
        expect(isPrime).toBeDefined();
    });

    test('myTrueFun should be defined', () => {
        expect(myTrueFun).toBeDefined();
    });

    test('sameValue should be defined', () => {
        expect(sameValue).toBeDefined();
    });
});

describe('function color', function () {
    test('should accept one parameters', () => {
        const numberOfArguments = color.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a boolean', () => {
        expect(color(1)).toStrictEqual(expect.any(Boolean));
    });

    test('should return true for empty strings', () => {
        const input = '';
        const expected = true;
        const actual = color(input);
        expect(actual).toBe(expected);
    });

    test('should return for non-empty string', () => {
        const input = 'RBK_RBK_RBK';
        const expected = true;
        const actual = color(input);
        expect(actual).toBe(expected);
    });

    test('should return false for any non-string values', () => {
        const input = [1, Symbol(),undefined,{},null,true,[]];
        const expected = false;
        expect(color(input[0])).toBe(expected);
        expect(color(input[1])).toBe(expected);
        expect(color(input[2])).toBe(expected);
        expect(color(input[3])).toBe(expected);
        expect(color(input[4])).toBe(expected);
        expect(color(input[5])).toBe(expected);
        expect(color(input[6])).toBe(expected);
    });
});

describe('function isPrime', function () {
    test('should accept one parameters', () => {
        const numberOfArguments = isPrime.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a boolean', () => {
        expect(isPrime(1)).toStrictEqual(expect.any(Boolean));
    });

    test('should return false for 0, 1', () => {
        const input = [0,1];
        const expected = false;
        expect(isPrime(input[0])).toBe(expected);
        expect(isPrime(input[1])).toBe(expected);
    });

    test('should return true for prime numbers', () => {
        const input = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,113, 127, 131, 137, 139, 149, 157, 167, 179, 181, 191];
        const expected = true;
        for (let i = 0; i < input.length; i++) {
            expect(isPrime(input[i])).toBe(expected)
        }
    });

    test('should return false for composite numbers', () => {
        const input = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 28, 30, 32, 80, 81, 93, 94, 95, 96, 98, 99, 100, 102, 124, 125];
        const expected = false;
        for (let i = 0; i < input.length; i++) {
            expect(isPrime(input[i])).toBe(expected);
        }
    });
});

describe('function myTrueFun', () => {
    test('should accept no parameters', () => {
        const numberOfArguments = myTrueFun.length;
        expect(numberOfArguments).toBe(0);
    });

    test('should return a boolean', () => {
        expect(myTrueFun()).toStrictEqual(expect.any(Boolean));
    });

    test('should return regardless of input', () => {
        const input = [-1,0,1, Symbol(),undefined,{},null,true,[],"",'asd'];
        const expected = true;
        for (let i = 0; i < input.length; i++) {
            expect(myTrueFun(input[i])).toBe(expected)
        }
    });

    test('should return true when called with no parameters', () => {
        expect(myTrueFun()).toBe(true)
    });
});

describe('function sameValue', () => {
    test('should accept two parameters', () => {
        const numberOfArguments = sameValue.length;
        expect(numberOfArguments).toBe(2);
    });

    test('should return a boolean', () => {
        expect(sameValue(1,1)).toStrictEqual(expect.any(Boolean));
    });

    test('should return true for numbers with the same value', () => {
        const input = [-1,-10,0,1,13,152,9451];
        const input2 = [-1,-10,0,1,13,152,9451];
        const expected = true;
        for (let i = 0; i < input.length; i++) {
            expect(sameValue(input[i], input2[i])).toBe(expected);
        }
    });

    test('should return false with numbers that are not the same value', () => {
        const input = [-1,-10,0,1,13,152,9451];
        const input2 = [1000,512,13,3,0,-10,-1];
        const expected = false;
        for (let i = 0; i < input.length; i++) {
            expect(sameValue(input[i], input2[i])).toBe(expected);
        }
    });
});
