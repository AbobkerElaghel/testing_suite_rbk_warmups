const {objKey, objLength, objSort} = require('../warmUpsSolutions/warmUp8');

beforeAll(() => {
    test('objKey should be defined', () => {
        expect(objKey).toBeDefined();
    });

    test('objLength should be defined', () => {
        expect(objLength).toBeDefined();
    });

    test('objSort should be defined', () => {
        expect(objSort).toBeDefined();
    });
});

describe('function objKey', () => {
    test('should accept one parameters', () => {
        const numberOfArguments = objKey.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a Array', () => {
        expect(objKey({})).toStrictEqual(expect.any(Array));
    });

    test("should return [] for input {}", () => {
        const input = {};
        const expected = [];
        const actual = objKey(input);
        expect(actual).toStrictEqual(expected);
    });

    test("should return ['name','age'] for input {name:'ahmed',age:20}", () => {
        const input = {name:'ahmed',age:20};
        const expected = ['name','age'];
        const actual = objKey(input);
        expect(actual).toStrictEqual(expected);
    });

    test("should return ['name' ,'age', 1, 2, id] for input {name:'ahmed', age:20, 1:1, 2:3, 'id': '$wpr3d'}", () => {
        const input = {name:'ahmed',age:20, 1:1, 2:3, 'id': '$wpr3d'};
        const expected = ["1", "2", "name", "age", "id"];
        const actual = objKey(input);
        expect(actual).toStrictEqual(expected);
    });
});


describe('function objLength', () => {
    test('should accept one parameters', () => {
        const numberOfArguments = objLength.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a Array', () => {
        expect(objLength({})).toStrictEqual(expect.any(Number));
    });

    test("should return [] for input 0", () => {
        const input = {};
        const expected = 0;
        const actual = objLength(input);
        expect(actual).toBe(expected);
    });

    test("should return 2 for input {name:'ahmed',age:20}", () => {
        const input = {name:'ahmed',age:20};
        const expected = 2;
        const actual = objLength(input);
        expect(actual).toBe(expected);
    });

    test("should return 5 for input {name:'ahmed', age:20, 1:1, 2:3, 'id': '$wpr3d'}", () => {
        const input = {name:'ahmed',age:20, 1:1, 2:3, 'id': '$wpr3d'};
        const expected = 5;
        const actual = objLength(input);
        expect(actual).toBe(expected);
    });
});

describe('function objSort', () => {
    test('should accept one parameters', () => {
        const numberOfArguments = objSort.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a Array', () => {
        expect(objSort([])).toStrictEqual(expect.any(Array));
    });

    test("should return [{id:0,value:70},{id:1,value:40},{id:2,value:50}] for input [{id:2,value:50},{id:0,value:70},{id:1,value:40}]", () => {
        const input = [{id:2,value:50},{id:0,value:70},{id:1,value:40}];
        const expected = [{id:0,value:70},{id:1,value:40},{id:2,value:50}];
        const actual = objSort(input);
        expect(actual).toStrictEqual(expected);
    });

    test("should return [{id: -1, value: 150},{id: 0, value: 70},{id: 1, value: 40},{id: 2, value: 50},{id: 5, value: 120}] for input [{id:2,value:50},{id:0,value:70},{id:1,value:40},{id:5,value:120},{id:-1,value:150}]", () => {
        const input = [{id:2,value:50},{id:0,value:70},{id:1,value:40},{id:5,value:120},{id:-1,value:150}];
        const expected = [{id: -1, value: 150},{id: 0, value: 70},{id: 1, value: 40},{id: 2, value: 50},{id: 5, value: 120}];
        const actual = objSort(input);
        expect(actual).toStrictEqual(expected);
    });
});


