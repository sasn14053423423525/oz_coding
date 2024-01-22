//유니언 기초
// let userId: string | number | boolean | object;
// ~도 되고 ~도 되고 ~도 되고 ~도 되고
// userId = 1
// userId = "100"
// userId = true
// userId = {}

// function printUserId(id:string |number|object){
//     console.log(id);
    
// }
// printUserId("1")
// printUserId(1)
// printUserId({})



//type narrowing
function processValue(value:number|string){
    if(typeof value === 'string'){
    return value.toUpperCase();}

    return value.toString().toUpperCase();
}

//배열에서의 사용예시

// let mixedValues:(string|number)[]=[];
// mixedValues.push("100")
// mixedValues.push(100)

//리터럴과 유니언 타입

const toggle = (option:"on"|"off")=>{
    console.log(option);
    
}
toggle("on")
toggle("off")


type Size = "xs"|"s"|"m"|"l"|"xl";
let tShirtSize:Size;
tShirtSize="xs"

function setSize(size:Size){
    switch(size){
        case "xs":
        break;
        case "s":
        break;
    }
}
//type aliases와 유니언
type SuccessCode = 200|201|202
type ErrorCode = 500|501|503

let responseCode: SuccessCode|ErrorCode

responseCode = 200
responseCode = 500
