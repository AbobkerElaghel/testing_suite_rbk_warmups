const cyclops = require('../warmUpsStaff/warmUp20');

describe('function cyclops', () => {
    test('cyclops should be defined', () => {
        expect(cyclops).toBeDefined();
    });

    test('should accept one parameters', () => {
        const numberOfArguments = cyclops.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return an boolean', () => {
        expect(cyclops(1)).toStrictEqual(expect.any(Boolean));
    });

    test('should return false for non cyclops numbers, inputs = 0,1,2,10,51,95,111,124,1211,12352,512', () => {
        const inputs = [0,1,2,10,51,95,111,512,1025,12352,512];
        const expected = false;
        let actual;
        for (let i = 0; i < inputs.length; i++) {
            actual = cyclops(inputs[i]);
            expect(actual).toBe(expected);
        }
    });

    test('should return false for non cyclops numbers, inputs = 5,27,119,495,2015,8127,32639', () => {
        const inputs = [5,27,119,495,2015,8127,32639];
        const expected = true;
        let actual;
        for (let i = 0; i < inputs.length; i++) {
            actual = cyclops(inputs[i]);
            expect(actual).toBe(expected);
        }
    });

    test('should return false for even length binary numbers, inputs = 2,59,239,247,479,991', () => {
        const inputs = [2,59,239,247,479,991];
        const expected = false;
        let actual;
        for (let i = 0; i < inputs.length; i++) {
            actual = cyclops(inputs[i]);
            expect(actual).toBe(expected);
        }
    });
});
