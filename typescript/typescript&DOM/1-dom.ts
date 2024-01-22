//js에서 제공되는 모든 DOM API를 그대로 사용
//타입 정의 파일 제공 'lib.dom.d.ts'

// HTMLElement div, a, p, head

// <a id="myLink" href="https://google.com">google</a>

const link1 = document.getElementById('myLink') as HTMLAnchorElement
const link2 = document.querySelector('#myLink') as HTMLAnchorElement
if(link1 instanceof HTMLAnchorElement){
    link1.href = "http://google.com";
}
if(link2){
    link2.href =""; 
}

const img= document.createElement('img')
img.src = "";
const anchor = document.createElement("a");
anchor.href="";
const div = document.querySelector('div')
const buttons = document.querySelectorAll('button')
buttons.forEach(button =>{
    button.click();})
//event 
//<div id="myDiv"></div>

const myDiv = document.getElementById("myDiv");
myDiv?.addEventListener('click',(e:MouseEvent|KeyboardEvent)=>{
    if(e instanceof MouseEvent){
    const x = e.clientX;
    const y = e.clientY;}
    if(e instanceof KeyboardEvent){
        console.log(e.code);
        
    }
})
class City extends Country {
    constructor(code: number, name: string, capital: string) {
        super(code, name, capital);
    }

    displayCapital(): string {
        return `Capital of ${this.name} is ${this.capital}`;
    }
}

let seoul = new City(82, "South Korea", "Seoul");
console.log(seoul.displayCapital());