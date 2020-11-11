const haveDo = require('./containDoWhile');
const haveFor = require('./containFor');
const haveWhile = require('./containWhile');

module.exports = fn => {
    // test is not granted to work in all logically possible cases.
    // but will prove that their exists a recursive call to the function in most cases.
    return haveDo(fn) || haveFor(fn) || haveWhile(fn);
};