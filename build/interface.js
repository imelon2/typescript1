"use strict";
let o = { name: 'jack', age: 15 };
o = { first: 1, second: 2 };
let good = { name: 'jace', age: 32 };
let good1 = { name: 'jack', age: 27 };
function printMe(me) {
    console.log(me.etc ?
        `${me.name} ${me.age} ${me.etc}`
        : `${me.name} ${me.age}`);
}
let anonymousInterface = { name: 'steve', age: 32 };
printMe(anonymousInterface);
