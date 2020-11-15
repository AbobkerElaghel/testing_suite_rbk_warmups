const comp = require('../warmUpsSolutions/warmUp19');

describe('function comp', () => {
    test('comp should be defined', () => {
        expect(comp).toBeDefined();
    });

    test('should accept two parameters', () => {
        const numberOfArguments = comp.length;
        expect(numberOfArguments).toBe(2);
    });

    test('should return an boolean', () => {
        expect(comp([],[])).toStrictEqual(expect.any(Boolean));
    });

    test('should return false for input [], [1,2,3]', () => {
        const inputs = [[],[1,2,3]];
        const expected =  false;
        const actual = comp(inputs[0], inputs[1]);
        expect(actual).toBe(expected);
    });

    test('should return false for input [1,2,3], []', () => {
        const inputs = [[1,2,3],[]];
        const expected =  false;
        const actual = comp(inputs[0], inputs[1]);
        expect(actual).toBe(expected);
    });

    test('should return false for input undefined, [1,2,3]', () => {
        const inputs = [undefined, [1,2,3]];
        const expected =  false;
        const actual = comp(inputs[0], inputs[1]);
        expect(actual).toBe(expected);
    });

    test('should return false for input [1,2,3], undefined', () => {
        const inputs = [[1,2,3], undefined];
        const expected =  false;
        const actual = comp(inputs[0], inputs[1]);
        expect(actual).toBe(expected);
    });

    test('should return false when the length of the arrays does not match', () => {
        const inputs = [[1], [1,2]];
        const expected =  false;
        const actual = comp(inputs[0], inputs[1]);
        expect(actual).toBe(expected);
    });

    test('should return false when one of the inputs is not an array', () => {
        const firstInput = [1,2,3];
        const secondInputs = [-1,0,1,null,undefined,Symbol(),'','asd',false,true,{},{a:3}];
        const expected =  false;
        let actual;
        for (let i = 0; i < secondInputs.length; i++) {
            actual= comp(firstInput, secondInputs[i]);
            expect(actual).toBe(expected);
            actual = comp(secondInputs[i], firstInput);
            expect(actual).toBe(expected);
        }
    });

    test('should return true for [121, 144, 19, 161, 19, 144, 19, 11,3], [121, 14641, 20736, 36100, 25921, 361, 20736, 361,9]', () => {
        const inputs = [[121, 144, 19, 161, 19, 144, 19, 11,3], [121, 14641, 20736, 36100, 25921, 361, 20736, 361,9]];
        const expected =  true;
        const actual = comp(inputs[0], inputs[1]);
        expect(actual).toBe(expected);
    });

    test('should return true for [1], [1]', () => {
        const inputs = [[1], [1]];
        const expected =  true;
        const actual = comp(inputs[0], inputs[1]);
        expect(actual).toBe(expected);
    });

    test('should return true for [-2, 4, 10, -12, 0], [-4, 16, 100, -144, 0]', () => {
        const inputs = [[-2, 4, 10, -12, 0], [4, 16, 100, 144, 0]];
        const expected =  true;
        const actual = comp(inputs[0], inputs[1]);
        expect(actual).toBe(expected);
    });

    test('should return false for [1,2,3,4,5], [1,4,9,16,26]', () => {
        const inputs = [[1,2,3,4,5], [1,4,9,16,26]];
        const expected =  false;
        const actual = comp(inputs[0], inputs[1]);
        expect(actual).toBe(expected);
    });

    test('should return false for [1,2,3,4,5], [2,4,9,16,25]', () => {
        const inputs = [[1,2,3,4,5], [2,4,9,16,25]];
        const expected =  false;
        const actual = comp(inputs[0], inputs[1]);
        expect(actual).toBe(expected);
    });

    test('should return false for [1,2,3,4,5], [1,4,10,16,25]', () => {
        const inputs = [[1,2,3,4,5], [2,4,9,16,25]];
        const expected =  false;
        const actual = comp(inputs[0], inputs[1]);
        expect(actual).toBe(expected);
    });
});