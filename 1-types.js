var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello Typescript';
var arrNum = [1, 2, 3, 4, 5];
var arrNum2 = [1, 2, 3, 4, 5];
var words = ['Hello', 'Typescript'];
/** Tuple */
var contact = [
    'Vladilen',
    1234567,
    { name: 'Galym', age: 31 }
];
// console.log(contact);
/** Any */
var variable = 42;
variable = 'New string';
variable = [];
/** Function */
function sayMyName(name) {
    return name;
}
// console.log(sayMyName('Haizenberg'));
function calc(a, b) {
    if (typeof b === 'string')
        b = +b;
    return a + b;
}
console.log(calc(5, 'f'));
/** Never */
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
var login = 'admin';
var id1 = 1234;
var id2 = 'Hello';
