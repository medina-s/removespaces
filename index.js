module.exports = removeSpace = str => {
    if(typeof str !== 'string') throw new TypeError("A string is required.")
    return str.replace(/\s/g, "");
}