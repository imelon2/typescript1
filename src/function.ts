// 기본 함수 형태
function add(a:number, b:number) : number {
    return a+b
}

add(1,2); // 3

// void 형태
function printVoid(name:string, age:number): void {

    console.log(`${name} ${age}`);
}

printVoid('steve', 23);

// 함수시그니처
let printVoidAG:(name:string ,age:number) => void = function(name:string, age:number): void {
    console.log(`${name} ${age}`);
}

printVoidAG('steveAG', 27);

// 화살표 함수
const arrow1 = (a:number, b:number):number => {return a + b};
const arrow2 = (a:number, b:number):number => a + b;

//표현식 문
let a = 3, b=2;
if(a>b) console.log('return'); // 한줄로 가능
