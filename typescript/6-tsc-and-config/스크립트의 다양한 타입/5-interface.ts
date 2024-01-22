//기본 문법
// interface 이름{
//     속성이름:속성타입;
//     속성이름:속성타입;
//     메서드이름():메서드 타입;
// }

// interface User{
//     id: number;
//     name:string;
//     isPremium:boolean;
//     someMethod():void;
// }
// const userA: User={
//     id:10,
//     name:"bill",
//     isPremium:true,
//     someMethod(){
//         console.log("some method called");
        
//     }
// }
//type alias vs interface
// 두 기능의 목적은 크게 다르지 않다.
//type alias => type User = {}
//interface => interface User = {}
//type alias => 객체  포함, 리터럴, 원시값등을 타입으로 가질 수 있다.
//interface => 객체 타입으로 사용해야 한다
//확장 문법이 다르다

// interface User {
//     readonly id:number;
//     name:string;
//     isPremium?:boolean;
// }
// const testUser: User={
//     id:100,
//     name:"John"
// }

//메서드 함수 타입//
interface User{
    readonly id:number;
    name:string;
    isPremium?:boolean;
    greet(message:string):string;
}

const testUser: User={
    id:100,
    name:"NaThan",
    isPremium:false,
    greet(message:string){
        return `${message},${this.name}`;
    }
}
testUser.greet("hello");
interface Person{
    name:string;
    age:number;
}

interface Student extends Person,Employee{
    id:string;
}
interface Employee {
    employeeId: number;
}
const StudentA:Person = {
    name:"anna",
    age:19,
}
const PersonA:Student ={
    name:"Phil",
    age:20,
    id:"Phil",
    employeeId:1
};