//타입 단언

//표현식 as 지정할 타입

const someValue : unknown = "Hey there";

const len = (someValue as string).length

const button = document.getElementById("button") as HTMLButtonElement

if(button instanceof HTMLButtonElement){
    button.disabled = false;
}

if(button){
    button.disabled = false;
}