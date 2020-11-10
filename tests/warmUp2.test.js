const {cube, sameLength, scoreToGrade, repeatString} = require('../warmUps/warmUp2');

// BETA Version, if you have any feedback, or you notice that something needs fixing or changing please contact me
// abobker.elaghel@rbk.tn
// or in slack
beforeAll(() => {
    test('cube should be defined', () => {
        expect(cube).toBeDefined();
    });

    test('sameLength should be defined', () => {
        expect(sameLength).toBeDefined();
    });

    test('scoreToGrade should be defined', () => {
         expect(scoreToGrade).toBeDefined();
     });

    test('repeatString should be defined', () => {
        expect(repeatString).toBeDefined();
    });
});


describe('function cube', () => {
    const POWER = 3;

    test('should accept one input', () => {
        const numberOfArguments = cube.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a number', () => {
        expect(cube(1)).toStrictEqual(expect.any(Number));
    });

    test('should return 0 for input 0', () => {
        const input = 0;
        const actual = cube(input);
        const expected = Math.pow(input, POWER);
        expect(actual).toBe(expected);
    });

    test('should return 27 for input 3', () => {
        const input = 3;
        const actual = cube(input);
        const expected = Math.pow(input, POWER);
        expect(actual).toBe(expected);
    });

    test('should return 125 for input -5', () => {
        const input = -5;
        const actual = cube(input);
        const expected = Math.pow(input, POWER);
        expect(actual).toBe(expected);
    });
});

describe('function sameLength', () => {
    test('should accept two inputs', () => {
        const numberOfArguments = sameLength.length;
        expect(numberOfArguments).toBe(2);
    });

    test('should return a boolean', () => {
        expect(sameLength('','')).toStrictEqual(expect.any(Boolean));
    });

    test('should return true for empty values', () => {
        expect(sameLength('','')).toBe(true);
    });

    test('should return true for non empty values', () => {
        expect(sameLength('abobker','elaghel')).toBe(true);
        expect(sameLength('a','z')).toBe(true);
        expect(sameLength('abcdefg','abcdefg')).toBe(true);
        expect(sameLength('gfedcba','abcdefg')).toBe(true);
    });

    test('should return false for mismatching length strings', () => {
        expect(sameLength('','a')).toBe(false);
        expect(sameLength('z','')).toBe(false);
        expect(sameLength('abcd','abcdefg')).toBe(false);
        expect(sameLength('abcdefg','abcd')).toBe(false);
    });
});

describe('function scoreToGrade', () => {
    const validScores = {
        'a': true,
        'a+': true,
        'a-': true,
        'b': true,
        'b+': true,
        'b-': true,
        'c': true,
        'c+': true,
        'c-': true,
        'd': true,
        'd+': true,
        'd-': true,
        'f': true,
        'f+': true,
        'f-': true
    };

    function scoreToGradeLowerCase(score){
        return scoreToGrade(score).toLowerCase();
    }

    test('should accept one input', () => {
        const numberOfArguments = scoreToGrade.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a string', () => {
        expect(scoreToGrade(1)).toStrictEqual(expect.any(String));
        expect(scoreToGrade(60)).toStrictEqual(expect.any(String));
    });

    test('should handle invalid values below zero', () => {
        const input = -1;
        const actual = scoreToGradeLowerCase(input);
        const grade = !!validScores[actual];
        expect(grade).toBe(false);
    });

    test('should handle invalid values above hundred', () => {
        const input = 110;
        const actual = scoreToGradeLowerCase(input);
        const grade = !!validScores[actual];
        expect(grade).toBe(false);
    });

    test('should return A || a for values above 90', () => {
        const expected = 'a';
        expect(scoreToGradeLowerCase(90)).toBe(expected);
        expect(scoreToGradeLowerCase(91)).toBe(expected);
        expect(scoreToGradeLowerCase(95)).toBe(expected);
        expect(scoreToGradeLowerCase(99)).toBe(expected);
        expect(scoreToGradeLowerCase(100)).toBe(expected);
    });

    test('should return B || b for values above 80 and less then 90', () => {
        const expected = 'b';
        expect(scoreToGradeLowerCase(80)).toBe(expected);
        expect(scoreToGradeLowerCase(81)).toBe(expected);
        expect(scoreToGradeLowerCase(85)).toBe(expected);
        expect(scoreToGradeLowerCase(89)).toBe(expected);
    });

    test('should return C || c for values above 70 and less then 80', () => {
        const expected = 'c';
        expect(scoreToGradeLowerCase(70)).toBe(expected);
        expect(scoreToGradeLowerCase(71)).toBe(expected);
        expect(scoreToGradeLowerCase(75)).toBe(expected);
        expect(scoreToGradeLowerCase(79)).toBe(expected);
    });

    test('should return D || d for values above 60 and less then 70', () => {
        const expected = 'd';
        expect(scoreToGradeLowerCase(65)).toBe(expected);
        expect(scoreToGradeLowerCase(66)).toBe(expected);
        expect(scoreToGradeLowerCase(68)).toBe(expected);
        expect(scoreToGradeLowerCase(69)).toBe(expected);
    });

    test('should return F || f for values less then 65', () => {
        const expected = 'f';
        expect(scoreToGradeLowerCase(0)).toBe(expected);
        expect(scoreToGradeLowerCase(1)).toBe(expected);
        expect(scoreToGradeLowerCase(33)).toBe(expected);
        expect(scoreToGradeLowerCase(63)).toBe(expected);
        expect(scoreToGradeLowerCase(64)).toBe(expected);
    });
});

describe('function repeatString', () => {
    test('should accept two input', () => {
        const numberOfArguments = repeatString.length;
        expect(numberOfArguments).toBe(2);
    });

    test('should return a string', () => {
        expect(repeatString("", 1)).toStrictEqual(expect.any(String));
    });

    test('should be a recursive function', () => {
        // test is not granted to work in all logically possible cases.
        // but will prove that their exists a recursive call to the function in most cases.
        const functionString = repeatString.toString().replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '');
        const isRecursive = functionString.includes(repeatString.name, (8 + repeatString.name.length));
        expect(isRecursive).toBe(true);
    });

    test('should not contain loops', () => {
        // test is not granted to work in all logically possible cases, but it will hold true for most cases.
        const functionString = repeatString.toString().replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/|"[\s\S]*?"|'[\s\S]*?'.*$/gm, '');
        const haveFor = functionString.includes('for');
        const haveWhile = functionString.includes('while');
        const haveDo = functionString.includes('do');

        expect(haveFor).toBe(false);
        expect(haveWhile).toBe(false);
        expect(haveDo).toBe(false);
    });

    test('should return abcabcabc for values (abc, 3)', () => {
        const input = ['abc', 3];
        const expected = 'abcabcabc';
        const actual = repeatString(input[0], input[1]);
        expect(actual).toBe(expected);
    });

    test('should return a for values (a, 1)', () => {
        const input = ['a', 1];
        const expected = 'a';
        const actual = repeatString(input[0], input[1]);
        expect(actual).toBe(expected);
    });

    test('should return a for values ("", 0)', () => {
        const input = ['', 1];
        const expected = '';
        const actual = repeatString(input[0], input[1]);
        expect(actual).toBe(expected);
    });

});


