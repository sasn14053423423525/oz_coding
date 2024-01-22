//타입 추론 (type inference)

//변수
let myNumber = 5;
let myString = "hello";
let myBool = true;

myNumber =23

//함수 반환 타입
function add(x: number, y:number){
    return x + y;
}

const n = add(10,5);

//배열 & 객체

let nums = [1,2,3,4]

let user = {name: "Eli", age:20}

let mixedValues = [1,2,3,"red","green","blue"]