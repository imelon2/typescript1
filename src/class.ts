class Person1 {
    name1!: string;
    age1?: number
}

let steve123 : Person1 = new Person1();
steve123.name1 = 'steve2';
steve123.age1 = 27;
console.log(steve);

// 생성자
class Person3 {
    /*
    ** constructor(name2:string, age2?:number){
        this.name2 = name2;
        this.age2 = age2;
    }
    */
   // ==
    constructor(public name2: string, public age2?:number) {};
}

let steve2 : Person3 = new Person3('steve3' , 27);
console.log(steve2);

//인터페이스 구현
interface InterfacePerson4 {
    name: string
    age: number
}

class Person4 implements InterfacePerson4 {
constructor(public name:string, public age: number){}
}
let steve3: InterfacePerson4 = new Person4('steve4', 27);
console.log(steve3);

// 추상클래스 == abstract class [ ]
// 나를 상속하는 다른 클래스에서 이 속성 또는 메소드를 구현하게 함
abstract class AbstractPerson5 {
    abstract name:string
    constructor(public age?: number) {}
}

//let abstract = new AbstractPerson5(); 추상클래스는 연산자를 만들수 없습니다.

// 상속클래스
class Person5Impl extends AbstractPerson5 {
    constructor(public name: string, age?:number){
        // 부모클래스의 생성자를 super로 호출 할 수 있다.
        super(age);
        console.log(age);
        
    }
}

let steve5 : Person5Impl = new Person5Impl('steve5', 27);
console.log(steve5);

//static속성
class Person6 {
    static age:number = 7;
}
// 클래스이름.정적속성이름 의 형태의 점표기법으로 값을 얻거나 설정 가능
console.log(Person6.age);
console.log(Person6.age = 10);


