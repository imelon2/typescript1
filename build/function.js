"use strict";
function add(a, b) {
    return a + b;
}
add(1, 2);
function printVoid(name, age) {
    console.log(`${name} ${age}`);
}
printVoid('steve', 23);
let printVoidAG = function (name, age) {
    console.log(`${name} ${age}`);
};
printVoidAG('steveAG', 27);
const arrow1 = (a, b) => { return a + b; };
const arrow2 = (a, b) => a + b;
let a = 3, b = 2;
if (a > b)
    console.log('return');
