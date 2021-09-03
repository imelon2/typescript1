// 구조화
// let personName: string = 'steve';
// let personAge:number = 27;

// let companyName : string = '인프런,inc';
// let conpanyAge : number = 20;

// interface로 구조화 하기
interface IPerson {
    name:string
    age:number
}

interface ICompany {
    name:string
    age:number
}

let steve : IPerson = {name:'steve', age: 32};
let 인프런 : ICompany = {name:'인프런', age: 40};

console.log(steve);
console.log(인프런);

// 잔여 연산자
let address: any = {
    country: 'korea',
    city:'Seoul',
    address1: '수내3동',
    address2: '95-13',
    address3: '201호'
}
//잔여 연산자는 ...[잔여변수명] 으로 선언 가능
const {country, city, ...detail} = address;
console.log(detail);

// 전개연산자
let part1: object = {name: 'A'}
let part2: object = {name: 'A', age:23}
let part3: object = {name: 'A', age:23, city:'Seoul'}

let marged = {...part1,...part2,...part3};
console.log(marged);

