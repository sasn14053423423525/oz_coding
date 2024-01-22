// {property_name: property_type}


// //타입 명시
// let monitor: {brand: string; price: number};

//  monitor ={brand : "LG",
//             price : 120};

//타입 추론
// let monitor = {
//     brand:"LG",
//     price:120
// } 
// monitor.brand = "samsung";
//Optional 프로퍼티

// let user: {id:string; name:string; age?:number};
// user = {
//     id: "1234",
//     name:"john"
// };

let monitor: {brand: string; price: number};

// monitor = {brand:"LG",
// price:120};


 //Readonly 프로퍼티
//  let user : {readonly id:string; name:string; age?: number};

//  user = {
//     id: "1234",
//     name:"john"
// };
// user.name = "John Smith"
// user.id = "5678"  ---readonly

let apiConfig: {
    readonly clientKey:string;
    readonly url:string;
}

//타입 별칭(type alias)

type UserType = {
   readonly id:string;
   readonly name:string;
    age?:number;
};

let user1: UserType = {
    id:"1",
    name:"John",
    age:20
};
let user2: UserType = {
    id:"2",
    name:"John Legend",
    age:60
};

let users: UserType[]=[];

users.push(user1)
users.push(user2)

// users.push({}); 
users.push({
    id:"1",
    name:"hong",

});

//Nested 객체 ( 중첩 객체 )

type payLoad = {
    timestamp:number;
    type:string;
    user:{
       readonly id:string;
        isActive?:boolean;
        email:string[]
    }
}


const payLoad = {
    timestamp: 1234567,
    type:'event',
    user:{
        id:"123",
        isActive:true,
        email:["sasn1405@gmial.com"]
    }
}