function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, defaultData: a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty', position());
console.log('One param', position(42));
console.log('Two params', position(10, 15));
function position2(a, b) {
    if (a === void 0) { a = undefined; }
    if (b === void 0) { b = undefined; }
    return a + b;
}
console.log(position2());
