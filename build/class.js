"use strict";
class Person1 {
}
let steve123 = new Person1();
steve123.name1 = 'steve2';
steve123.age1 = 27;
console.log(steve);
class Person3 {
    constructor(name2, age2) {
        this.name2 = name2;
        this.age2 = age2;
    }
    ;
}
let steve2 = new Person3('steve3', 27);
console.log(steve2);
class Person4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let steve3 = new Person4('steve4', 27);
console.log(steve3);
class AbstractPerson5 {
    constructor(age) {
        this.age = age;
    }
}
class Person5Impl extends AbstractPerson5 {
    constructor(name, age) {
        super(age);
        this.name = name;
        console.log(age);
    }
}
let steve5 = new Person5Impl('steve5', 27);
console.log(steve5);
class Person6 {
}
Person6.age = 7;
console.log(Person6.age);
console.log(Person6.age = 10);
