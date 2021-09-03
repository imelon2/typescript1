"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
let steve = { name: 'steve', age: 32 };
let 인프런 = { name: '인프런', age: 40 };
console.log(steve);
console.log(인프런);
let address = {
    country: 'korea',
    city: 'Seoul',
    address1: '수내3동',
    address2: '95-13',
    address3: '201호'
};
const { country, city } = address, detail = __rest(address, ["country", "city"]);
console.log(detail);
let part1 = { name: 'A' };
let part2 = { name: 'A', age: 23 };
let part3 = { name: 'A', age: 23, city: 'Seoul' };
let marged = Object.assign(Object.assign(Object.assign({}, part1), part2), part3);
console.log(marged);
