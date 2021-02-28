module.exports = function reverse(n) {
    let str = String(n);
    let arr = str.split("");
    arr.reverse();
    str = arr.join("");
    return parseInt(str);
};
