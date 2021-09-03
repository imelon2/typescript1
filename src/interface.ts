//Object타입으로 선언된 변수는 다른 객체를 모두 자유롭게 담을 수 있다
let o: object = {name:'jack', age:15}
o = {first: 1, second: 2}

//이러한 구문을 방지하기 위해 TS는 interface라는 키워드를 제공한다.

interface Person {
    name:string,
    age: number
}

let good: Person = {name:'jace', age: 32};

// let bad1: Person = {name: 'jack'}; // error == age속성이 없기 때문
// let bad2: Person = {name: 32}; // erroe == type동이하지 않기 때문

// 선택 속성 구문 == 속성이름 + ?
interface Person2 {
    name: string,
    age: number,
    etc?: boolean;
}

let good1: Person2 = {name:'jack', age: 27}; // etc는 선택속성으로 지정해서 선택적으로 선언 가능

// 익명인터페이스 interface를 사용하지 않고 선언 하는 경우
// 주로  함수 구현할 때 파라미터 안에 쓴다
function printMe(me: {name:string, age: number,etc?: boolean}) {
    console.log(me.etc ?
              `${me.name} ${me.age} ${me.etc}` 
             :`${me.name} ${me.age}` );
    
}

let anonymousInterface: {
    name: string
    age: number
    etc? : boolean
} = {name:'steve', age: 32}

printMe(anonymousInterface);
