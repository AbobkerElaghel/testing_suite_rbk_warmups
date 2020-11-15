const agesToMinutes = require('../warmUpsSolutions/warmUp17');

describe('function agesToMinutes', () => {
    test('agesToMinutes should be defined', () => {
        expect(agesToMinutes).toBeDefined();
    });

    test('should accept one parameters', () => {
        const numberOfArguments = agesToMinutes.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return an Array', () => {
        expect(agesToMinutes([])).toStrictEqual(expect.any(Array));
    });

    test("should return empty array for input = []", () => {
        const input = [];
        const expected = [];
        const actual = agesToMinutes(input);
        expect(actual).toStrictEqual(expected);
    });

    test("should yield correct results for people array example", () => {
        const input = [{
            name: {
                first: 'Majd',
                middle: 'Eddin',
            },
            age: 30
        }, {
            name: {
                first: 'Fatima',
                last: 'Himmamy'
            },
            age: 26
        }, {
            name: {
                first: 'Sahar',
                middle: 'MHD'
            },
            age: 27
        }, {
            name: {
                first: 'Nour',
                middle: 'Eddin',
            },
            age: 15
        }, {
            name: {
                first: 'Ahmad',
                last: 'Awad'
            },
            age: 33
        }];

        const expected = [{
            name: {
                first: 'Majd',
                middle: 'Eddin',
            },
            age: 15768000
        }, {
            name: {
                first: 'Fatima',
                last: 'Himmamy'
            },
            age: 13665600
        }, {
            name: {
                first: 'Sahar',
                middle: 'MHD'
            },
            age: 14191200
        }, {
            name: {
                first: 'Nour',
                middle: 'Eddin',
            },
            age: 7884000
        }, {
            name: {
                first: 'Ahmad',
                last: 'Awad'
            },
            age: 17344800
        }];
        const actual = agesToMinutes(input);
        expect(actual).toStrictEqual(expected);
    });
});