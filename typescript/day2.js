"use strict";
//ㅡㅡㅡㅡㅡ배열 타입ㅡㅡㅡㅡㅡ
// 문제1: number[]와 Array<number> 중 어떤 것이 더 적합한 배열 타입 표현인가요? 그 이유는 무엇인가요?
`간결함, 가독성이 좋음`;
// 문제2: 다음 배열의 타입을 정의하세요:
const colors = ["red", "green", "blue"];
// 문제3: 다음 코드가 오류를 발생시키는 이유는 무엇인가요?
let numbers = [1, 2, 3];
//numbers.push("4"); 타입이 숫자의 배열타입이기 때문에 문자4는 숫자배열에 들어갈 수 없다.
numbers.push(4); //올바른 코드 
// 문제4: 다음 코드에서 잘못된 점을 찾고, mixedArray 의 배열을 수정하세요:
//let mixedArray: number[] = [1, 'two', 3];
// 잘못된 점 : 숫자의 배열인 변수에 문자가 할당 되었다.
let mixedArray = [1, 2, 3]; //올바른 코드
//ㅡㅡㅡㅡㅡ객체 타입ㅡㅡㅡㅡㅡ
//문제1: 다음 객체에 대한 올바른 타입 정의는 무엇인가요?
const person = {
    name: "Byul",
    age: 30
};
//문제2: 객체 타입을 사용하는 주된 이유 두 가지는 무엇인가요?
`- 객체의 형태/구조를 보장하고 예측
- 예상치 못한 값이 들어가는 것을 방지`;
const book = {
    title: "asd",
    author: "zxc",
    yearPublished: 123,
    color: "black"
};
//ㅡㅡㅡㅡㅡ함수 타입ㅡㅡㅡㅡㅡ
//문제1: 다음 함수의 올바른 호출 시그니처는 무엇인가요?
function add(x, y) {
    return x + y;
}
add(1, 2);
//문제2: 다음 함수가 올바른 타입 시그니처를 따르고 있는지 판단하세요:
function multiply(x, y) {
    return `x * y`;
} //함수가 string 타입이기 때문에 문자열로 반환해야 한다.
//문제3: 함수 시그니처 (x: string) => void에 맞는 logMessage 함수를 작성하세요. 
//이 함수는 받은 문자열 메시지를 콘솔에 출력합니다.
function logMessage(x) {
    console.log(x);
}
logMessage("message");
//문제4: 함수 시그니처 (x: string) => never에 맞는 errorThrower 함수를 작성하세요. 
//이 함수는 주어진 문자열로 예외를 발생시킵니다.
function errorThrower(x) {
    throw new Error(x);
}
//ㅡㅡㅡㅡㅡ유니언 타입ㅡㅡㅡㅡㅡ
//문제1: 다음 변수에 대한 올바른 유니언 타입은 무엇인가요?
let value = "hello";
// 가능한 타입: number, string, boolean
//문제2: 유니언 타입이 필요한 상황의 예를 들어주세요.
`다양한 종류의 값을 유연하게 처리할 때 주로 쓰입니다. 대표적으로 API가 있다고 합니다.`;
//문제3: 다음 유니언 타입의 잘못된 사용을 찾아보세요.
function processValue(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    else
        return value;
} // length는 string에만 사용할 수 있기 때문에 조건을 통해 문자열일 경우에만 반환하도록 한다.
let myCar = {
    drive: () => {
        console.log("car");
    }
};
let product = { name: "John" };
const vehicle = { serialNumber: "1234", type: "AA" };
vehicle.type = "BB";
//문제2: 튜플의 장점은 무엇인가요?
`의미와 위치가 정해져있기 때문에 안정성과 가독성 향상`;
//문제3: 다음 튜플 타입에 문제가 있는지 판단하세요:
let myTuple = ["age", 25, "extra"];
`myTuple변수의 배열[2]에 string을 할당하거나 소스의 배열에서 "extra"를 제거한다.`;
//ㅡㅡㅡㅡㅡ열거형ㅡㅡㅡㅡㅡ
//문제1: 색상을 나타내는 Enum을 정의해보세요
var Color;
(function (Color) {
    Color[Color["black"] = 0] = "black";
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["purple"] = 3] = "purple";
})(Color || (Color = {}));
//문제2: Enum을 사용하는 주된 이유는 무엇인가요?
`여러가지 상수를 그룹화하여 간편하게 다루기 위해`;
//문제3: 다음 Enum의 사용법에 문제가 있는지 판단하세요:
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let move = Direction.Up;
//ㅡㅡㅡㅡㅡ도전문제ㅡㅡㅡㅡㅡ
//문제1: 각 변수에 알맞은 타입을 지정해주세요.
let age = 30;
let isPerson = true;
let a = [1, 2, 3];
let b = [2, 3, 4];
let rgb = ['red', 'green', 'blue'];
let fruits = ['apple', 'banana', 'orange'];
//문제2: 함수 시그니처 (x: number, y: number) => 
//number에 맞는 multiply 함수를 작성하고, 두 숫자의 곱을 반환하세요.
function multiply(x, y) {
    return x * y;
}
//문제3: 타입 number[]을 가진 배열 numbers에서 모든 홀수를 제거하는 함수를 작성하세요.
function removeOdds(numbers) {
    return numbers.filter(numbers => numbers % 2 === 0);
}
function formatBook(book) {
    return `$(book.title),$(book.author)`;
}
//문제5: 두 문자열과 선택적 구분자를 받아 결합하는 concatenate 함수를 작성하세요. 
//구분자가 제공되지 않으면 공백을 사용하세요.
function concatenate(str1, str2, separator = '') {
    return `${str1}${separator}${str2}`;
}
//문제6: 유니언 타입 string | number을 사용하여, 
//문자열 또는 숫자를 받아 그 길이 또는 값을 반환하는 함수를 작성하세요.
function union(value) {
    if (typeof value === "string") {
        return `${value}cm`;
    }
    else {
        return value;
    }
    ;
}
function getNumberOfDoors(car) {
    return car.numberOfDoors;
}
const rect = { width: 50, height: 50 };
function area(rect) {
    return rect.width * rect.height;
}
function createPerson(name, age) {
    return [name, age];
}
//문제11: enum Day { Monday, Tuesday, Wednesday, Thursday, Friday }를 사용하여,
// 주어진 요일에 따라 다른 활동을 반환하는 함수를 작성하세요. 예를 들어, Monday는 'Study',
// Friday는 'Relax' 등을 반환할 수 있습니다.
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
})(Day || (Day = {}));
function getActivityForDay(day) {
    switch (day) {
        case Day.Monday: return "Study";
        case Day.Friday: return "Relax";
        default: return "No activity planned";
    }
}
