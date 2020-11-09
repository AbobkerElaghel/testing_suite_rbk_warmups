const warmUp = jest.requireActual('../warmUps/warmUp2');

console.log();

test('testing!', () => {
    const mock = jest.spyOn(warmUp, 'repeatString');

    console.log(warmUp.repeatString('50',3))
    expect(mock).toHaveBeenCalledTimes(3);

    mock.mockRestore();

    // const spy = jest.spyOn({repeatString: warmuo.repeatString}, 'repeatString')
    // warmuo.repeatString('', 1);
    // expect(spy).toBeCalled();
});