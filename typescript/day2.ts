//ㅡㅡㅡㅡㅡ배열 타입ㅡㅡㅡㅡㅡ
// 문제1: number[]와 Array<number> 중 어떤 것이 더 적합한 배열 타입 표현인가요? 그 이유는 무엇인가요?
`간결함, 가독성이 좋음`
// 문제2: 다음 배열의 타입을 정의하세요:
const colors:string[] = ["red", "green", "blue"];
// 문제3: 다음 코드가 오류를 발생시키는 이유는 무엇인가요?
let numbers: number[] = [1, 2, 3];
//numbers.push("4"); 타입이 숫자의 배열타입이기 때문에 문자4는 숫자배열에 들어갈 수 없다.
numbers.push(4) //올바른 코드 
// 문제4: 다음 코드에서 잘못된 점을 찾고, mixedArray 의 배열을 수정하세요:
//let mixedArray: number[] = [1, 'two', 3];
// 잘못된 점 : 숫자의 배열인 변수에 문자가 할당 되었다.

let mixedArray: number[] = [1,2,3]; //올바른 코드
//ㅡㅡㅡㅡㅡ객체 타입ㅡㅡㅡㅡㅡ
//문제1: 다음 객체에 대한 올바른 타입 정의는 무엇인가요?
const person: {name:string, age:number} = {
    name: "Byul",
    age: 30
  };
//문제2: 객체 타입을 사용하는 주된 이유 두 가지는 무엇인가요?
`- 객체의 형태/구조를 보장하고 예측
- 예상치 못한 값이 들어가는 것을 방지`
//문제: 다음 타입 정의에 어긋나는 객체 속성을 추가하는 예를 드세요.
type Book = {
    title: string;
    author: string;
    yearPublished: number;
  };
const book:Book ={
    title:"asd",
    author:"zxc",
    yearPublished: 123,
    color:"black"
}
//ㅡㅡㅡㅡㅡ함수 타입ㅡㅡㅡㅡㅡ
//문제1: 다음 함수의 올바른 호출 시그니처는 무엇인가요?
function add(x: number, y: number): number {
    return x + y;
  }
  add(1,2)
//문제2: 다음 함수가 올바른 타입 시그니처를 따르고 있는지 판단하세요:
function multiply(x: number, y: number): string {
    return `x * y`;
  } //함수가 string 타입이기 때문에 문자열로 반환해야 한다.
//문제3: 함수 시그니처 (x: string) => void에 맞는 logMessage 함수를 작성하세요. 
//이 함수는 받은 문자열 메시지를 콘솔에 출력합니다.
function logMessage(x:string):void {
    console.log(x);
}
logMessage("message")
//문제4: 함수 시그니처 (x: string) => never에 맞는 errorThrower 함수를 작성하세요. 
//이 함수는 주어진 문자열로 예외를 발생시킵니다.
function errorThrower(x:string):never{
    throw new Error(x);
}
//ㅡㅡㅡㅡㅡ유니언 타입ㅡㅡㅡㅡㅡ
//문제1: 다음 변수에 대한 올바른 유니언 타입은 무엇인가요?
let value: number|string|boolean = "hello";
// 가능한 타입: number, string, boolean
//문제2: 유니언 타입이 필요한 상황의 예를 들어주세요.
`다양한 종류의 값을 유연하게 처리할 때 주로 쓰입니다. 대표적으로 API가 있다고 합니다.`
//문제3: 다음 유니언 타입의 잘못된 사용을 찾아보세요.
function processValue(value: number | string):number {
    if(typeof value === 'string'){
    return value.length;}
    else return value;
  } // length는 string에만 사용할 수 있기 때문에 조건을 통해 문자열일 경우에만 반환하도록 한다.
  //ㅡㅡㅡㅡㅡ인터페이스ㅡㅡㅡㅡㅡ
  //문제1: 인터페이스 Car를 만들고 drive 메서드를 포함하세요. drive 메서드는 반환 타입이 없습니다(void). 
  //또한, Car 인터페이스를 만족하는 객체를 생성하세요.
  interface Car {
    drive():void
  }
  let myCar:Car = {
    drive:() => {console.log("car");
    }
  }
  //문제2: 인터페이스 Product를 만들고, name과 price 속성을 포함하세요. price는 선택적 속성으로 설정하세요.
  interface Product{
    name:string;
    price?:number;
  }
  let product:Product = {name:"John"}
  //문제3: Vehicle 인터페이스를 만들고, readonly 속성인 serialNumber와 일반 속성 type를 포함하세요.
  interface Vehicle{
    readonly serialNumber:string;
    type:string;
  }

  const vehicle:Vehicle = {serialNumber:"1234", type:"AA"};
  vehicle.type = "BB"
  //ㅡㅡㅡㅡㅡ튜플ㅡㅡㅡㅡㅡ
  //문제1: 다음과 같은 튜플 타입을 정의하세요: 첫 번째 요소는 문자열, 두 번째 요소는 숫자입니다.
  type StringNumberTuple = [string,number];
  //문제2: 튜플의 장점은 무엇인가요?
  `의미와 위치가 정해져있기 때문에 안정성과 가독성 향상`
  //문제3: 다음 튜플 타입에 문제가 있는지 판단하세요:
  let myTuple: [string, number] = ["age", 25, "extra"];
  `myTuple변수의 배열[2]에 string을 할당하거나 소스의 배열에서 "extra"를 제거한다.`
  //ㅡㅡㅡㅡㅡ열거형ㅡㅡㅡㅡㅡ
  //문제1: 색상을 나타내는 Enum을 정의해보세요
  enum Color{
    black,
    red,
    green,
    purple
  }
  //문제2: Enum을 사용하는 주된 이유는 무엇인가요?
  `여러가지 상수를 그룹화하여 간편하게 다루기 위해`
  //문제3: 다음 Enum의 사용법에 문제가 있는지 판단하세요:
  enum Direction {
    Up,
    Down,
    Left,
    Right
  }
  
  let move: Direction = Direction.Up;
  //ㅡㅡㅡㅡㅡ도전문제ㅡㅡㅡㅡㅡ
  //문제1: 각 변수에 알맞은 타입을 지정해주세요.
  let age:number = 30;
  let isPerson:boolean = true;
  let a:number[] = [1,2,3];
  let b:number[] = [2,3,4];
  let rgb:string[] = ['red','green','blue'];
  let fruits:string[] = ['apple', 'banana', 'orange'];

  //문제2: 함수 시그니처 (x: number, y: number) => 
  //number에 맞는 multiply 함수를 작성하고, 두 숫자의 곱을 반환하세요.
  function multiply(x: number, y: number): number {
    return x * y;
  }
  //문제3: 타입 number[]을 가진 배열 numbers에서 모든 홀수를 제거하는 함수를 작성하세요.
  
  function removeOdds(numbers: number[]): number[] {
    
      return numbers.filter(numbers => numbers % 2 ===0);
  }
  //문제4: Book 인터페이스를 정의하고, title과 author 속성을 포함하는 객체를 만든 다음, 
  //책 제목과 저자를 결합한 문자열을 반환하는 함수를 작성하세요.
  interface Book{
    title:string;
    author:string
  }
  function formatBook(book: Book):string{
    return `$(book.title),$(book.author)`;
  }
  //문제5: 두 문자열과 선택적 구분자를 받아 결합하는 concatenate 함수를 작성하세요. 
  //구분자가 제공되지 않으면 공백을 사용하세요.
  function concatenate(str1: string, str2: string, separator: string=''): string {
    return `${str1}${separator}${str2}`;
  }
  //문제6: 유니언 타입 string | number을 사용하여, 
  //문자열 또는 숫자를 받아 그 길이 또는 값을 반환하는 함수를 작성하세요.
  function union(value:string|number):string|number {
    if(typeof value==="string"){
    return `${value}cm`}
    else{
      return value};
  }
  //문제7: 인터페이스 Point를 확장하는 ColoredPoint 인터페이스를 생성하고, color 속성을 추가하세요.
  interface Point { x: number; y: number; }
  interface ColoredPoint extends Point{ color:string }
  
  //문제8: Vehicle 인터페이스를 확장하는 Car 인터페이스를 만들고 numberOfDoors 속성을 추가하세요. 
  //Car 객체를 받아 문의 개수를 반환하는 함수를 작성하세요.

  interface Vehicle { wheels: number; }
  interface Car extends Vehicle{numberOfDoors:number;}
 
  function getNumberOfDoors(car: Car): number {
  return car.numberOfDoors;
}
  //문제9: 인터페이스 Rectangle을 정의하고, 두 속성 width와 height를 포함한 객체를 생성하세요. 
  //또한, 면적을 반환하는 함수를 작성하세요.
  interface Rectangle {width:number,height:number}
  const rect:Rectangle = {width:50,height:50};
  function area(rect:Rectangle):number{
    return rect.width * rect.height;
  }
  //문제10: 이름과 나이를 나타내는 NameAge 튜플 타입을 만들고, 
  //이름과 나이를 받아 NameAge 튜플을 반환하는 createPerson 함수를 작성하세요.
  type NameAge = [
    string,number
  ]
  function createPerson(name:"SangPhil",age:31): NameAge {
    
    return [name,age];
  }
  //문제11: enum Day { Monday, Tuesday, Wednesday, Thursday, Friday }를 사용하여,
  // 주어진 요일에 따라 다른 활동을 반환하는 함수를 작성하세요. 예를 들어, Monday는 'Study',
  // Friday는 'Relax' 등을 반환할 수 있습니다.
  enum Day { 
    Monday, 
    Tuesday, 
    Wednesday, 
    Thursday, 
    Friday 
}

function getActivityForDay(day: Day): string {
  switch (day) {
    case Day.Monday: return "Study";
    case Day.Friday: return "Relax";
    default: return "No activity planned";
  }
}
