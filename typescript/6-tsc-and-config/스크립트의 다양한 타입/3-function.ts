// function add(x:number, y:number):number{
//     return x + y;

// }
// const result = add(10,5);

// function addToCart(name:string, price:number, quantity?:number){
//     return `${name},${price},${quantity}`;
// }
// addToCart("orange",100,50)
// addToCart("pineapple",50,50)
// addToCart("banana",50)


// function addToCart(name:string, price:number, quantity:number =1){
//     return `${name},${price},${quantity}`;
// }
// addToCart("orange",10) // orange,10,1이 반환


function addToCart(name:string, price:number, quantity?:number){
    return `${name},${price},${quantity}`;
}
//Contextual typing
// Map((element)=>{element.}), reduce(), filter(),foreach()
// const numbers:number[] = [1,2,3,4,5];
// const letters:string[] = ["a","b","c","d","e"];

// numbers.map(Element=>){
//     Element.
// }

// letters.forEach(letter=>){
//     letters.
// }
// return rtpe annotation
function addTwoValues(x:number, y:number):string {
    return `${x}${y}`; //스트링 리턴
};
function addTwoNumbers(x:number, y:number):number {
    return x + y; // 넘버 리턴
};
function isTen(x:number, y:number):boolean{
    return x + y === 10;
};
function logMessage(message:string):void{
    console.log(message);
    
}
function throwError(message:string):never{
    throw new Error(message);
}