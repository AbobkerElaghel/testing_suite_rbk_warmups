const {sameLength, reverseStr} = require('../warmUpsSolutions/warmUp12');

beforeAll(() => {
    test('sameLength should be defined', () => {
        expect(sameLength).toBeDefined();
    });

    test('reverseStr should be defined', () => {
        expect(reverseStr).toBeDefined();
    });
});

describe('function sameLength', () => {
    test('should accept one parameters', () => {
        const numberOfArguments = sameLength.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return an Array', () => {
        expect(sameLength(['1'])).toStrictEqual(expect.any(Array));
    });

    test("should return ['hi','hy'] for input = ['hi','hello','welcome','hy']", () => {
        const inputs = ['hi','hello','welcome','hy'];
        const expected = ['hi','hy'];
        const actual = sameLength(inputs);
        expect(actual).toIncludeSameMembers(expected);
    });

    test("should return ['hi','hy','hello','olleh','a','b','bb'] for input = ['hi','hello','olleh','hy','a','bb','b','hellotherer']", () => {
        const inputs = ['hi','hello','olleh','hy','a','bb','b','hellotherer'];
        const expected = ['hi','hy','hello','olleh','a','b','bb'];
        const actual = sameLength(inputs);
        expect(actual).toIncludeSameMembers(expected);
    });

    test('should return ["hi", "hy","hello"] for input = ["hi", "hy","hello","qweqweasd","rbkrbkrbkrbkasd", "hi", "hy", "hello"]', () => {
        const inputs = ["hi", "hy","hello","qweqweasd","rbkrbkrbkrbkasd", "hi", "hy", "hello"];
        const expected = ["hi", "hy","hello"];
        const actual = sameLength(inputs);
        expect(actual).toIncludeSameMembers(expected);
    });
});

describe('function reverseStr', () => {
    test('should accept one parameters', () => {
        const numberOfArguments = reverseStr.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a value', () => {
        expect(reverseStr('a')).toStrictEqual(expect.any(String));
    });

    test('should return empty string for empty input', () => {
        const input = "";
        const expected = "";
        const actual = reverseStr(input);
        expect(actual).toBe(expected);
    });

    test('should return "123" fpr input "302112"', () => {
        const input = "123";
        const expected = "302112";
        const actual = reverseStr(input);
        expect(actual).toBe(expected);
    });

    test('should return abc fpr input c0b1a2', () => {
        const input = "abc";
        const expected = "c0b1a2";
        const actual = reverseStr(input);
        expect(actual).toBe(expected);
    });

    test('should return qwe123-1 fpr input 10-1322314e5w6q7', () => {
        const input = "qwe123-1";
        const expected = "10-1322314e5w6q7";
        const actual = reverseStr(input);
        expect(actual).toBe(expected);
    });
});