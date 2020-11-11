module.exports = fn => {
    // test is not granted to work in all logically possible cases.
    // but will prove that their exists a recursive call to the function in most cases.
    const functionString = fn.toString().replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/|"[\s\S]*?"|'[\s\S]*?'.*$/gm, '');
    return functionString.includes('while');
};