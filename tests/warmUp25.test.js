const getRootProperty = require('../warmUpsSolutions/warmUp25');

expect.extend({
    toBeStringOrNull(received){
        if(received === null || typeof received === 'string'){
            return {
                message: () => `expected ${received} to be string or null`,
                pass: true
            }
        }else {
            return {
                message: () => `expected ${received} to be string or null`,
                pass: false
            }
        }
    }});

describe('function getRootProperty', () => {
    test('getRootProperty should be defined', () => {
        expect(getRootProperty).toBeDefined();
    });

    test('should accept two parameters', () => {
        const numberOfArguments = getRootProperty.length;
        expect(numberOfArguments).toBe(2);
    });

    test('should return a string or null', () => {
        expect(getRootProperty({},0)).toBeStringOrNull();
    });

    test('should return null for input={}, null', () => {
        const inputs  = [{}, null];
        const expected = null;
        const actual = getRootProperty(inputs[0], inputs[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return r1n for input={"r1n": {"mkg": {"zma":...."zma": [21,45,66,111], 111', () => {
        const inputs  = [{"r1n": {"mkg": {"zma": [21, 45, 66, 111], "mii": {"ltf": [2, 5, 3, 9, 21]}, "fv": [1, 3, 6, 9]}, "rmk": {"amr": [50, 50, 100, 150, 250]}}, "fik": {"er": [592, 92, 32, 13], "gp": [12, 34, 116, 29]}}, 111];
        const expected = "r1n";
        const actual = getRootProperty(inputs[0], inputs[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return null for input={"r1n": {"mkg": {"zma":...."zma": [21,45,66,111], 543', () => {
        const inputs  = [{"r1n": {"mkg": {"zma": [21, 45, 66, 111], "mii": {"ltf": [2, 5, 3, 9, 21]}, "fv": [1, 3, 6, 9]}, "rmk": {"amr": [50, 50, 100, 150, 250]}}, "fik": {"er": [592, 92, 32, 13], "gp": [12, 34, 116, 29]}}, 543];
        const expected = null;
        const actual = getRootProperty(inputs[0], inputs[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return 2f7 for input={"one": {"nest1": {"val1": [9, 34, 92, 100]}}, "2f7": {"n1": [10, 92, 53, 71], "n2": [82, 34, 6, 19]}}, 19', () => {
        const inputs  = [{"one": {"nest1": {"val1": [9, 34, 92, 100]}}, "2f7": {"n1": [10, 92, 53, 71], "n2": [82, 34, 6, 19]}}, 19];
        const expected = "2f7";
        const actual = getRootProperty(inputs[0], inputs[1]);
        expect(actual).toStrictEqual(expected);
    });
});
