const {larger, smaller, counting ,meetNGreet} = require('../warmUps/warmUp3');

// BETA Version, if you have any feedback, or you notice that something needs fixing or changing please contact me
// abobker.elaghel@rbk.tn
// or in slack
beforeAll(() => {
    test('larger should be defined', () => {
        expect(larger).toBeDefined();
    });

    test('smaller should be defined', () => {
        expect(smaller).toBeDefined();
    });

    test('counting should be defined', () => {
        expect(counting).toBeDefined();
    });

    test('meetNGreet should be defined', () => {
        expect(meetNGreet).toBeDefined();
    });
});

describe('function larger', () => {

});