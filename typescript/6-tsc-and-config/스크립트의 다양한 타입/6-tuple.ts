let myTuple: [string,number,boolean]
//순서대로 할당한다
myTuple = ["hello",15,true]


function gerUserInfo(): [number,string]{
    return [1,"sam"]
}

const [userId,username] = gerUserInfo()

type Flavor = string;
type Price = number;

type IceCream = [Flavor,Price]

const vanila: IceCream= ["vanila",500]

vanila[0]
vanila[1]

// 지도 마커 유용
type lat= number;
type lng = number;
type coord = [lat,lng];

let coords:coord[]=[];

coords.push([36,-95])
coords.push([36,-95])
coords.push([36,-95])

for(const [lat,lng] of coords){
    console.log(lat,lng);
    
}