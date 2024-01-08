const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42"
const request1 = new XMLHttpRequest()
const apiAllbreeds = "https://dog.ceo/api/breeds/list/all"
const request2 = new XMLHttpRequest()

const header = document.getElementById("header")
const main = document.getElementById("main")
const input = document.getElementById("filter_text")
const button = document.getElementById("filter_Btn")
const select = document.getElementById("filter_select")
const more = document.getElementById("more")
const tothetop = document.getElementById("tothetop")
const reset = document.getElementById("reset_Btn")


const currentDogs =[];

function displayDogs(item){
    const dogImgDiv = document.createElement("div")
        dogImgDiv.classList.add("flex-item")
        dogImgDiv.innerHTML = `<img src="${item}">`
        main.appendChild(dogImgDiv)
    };
    
    //이거 꼭 해석하기@@
    function loadWindow(){
        //강아지 사진 뿌리기
        request1.open("get",apiRandomDogs)
        function handleRequest2Response(){
            const response = JSON.parse(request1.response)
            response.message.forEach(function(item){
                currentDogs.push(item)
                displayDogs(item)
            })
        }
        request1.send()
        //셀렉트에 견종 정보 뿌리기
        request2.open("get",apiAllbreeds)
        function handleRequest1Response(){
            const response = JSON.parse(request2.response)
            Object.keys(response.message).forEach(function(item){
                const option = document.createElement("option")
                option.textContent = item
                option.value = item
                select.appendChild(option)
            });
            
        }
        request2.send()

        request1.addEventListener("load",handleRequest2Response);
        request2.addEventListener("load",handleRequest1Response);
}
        window.addEventListener("load",loadWindow)
        
button.addEventListener("click", function() {
    main.innerHTML = ""
    let filteredDogs = currentDogs.filter(function(item){
        return item.indexOf(input.value) !== -1
        //견종 정보안에 인풋의 값이 포함되어있으면 반환한다 !== -1 = 2중부정
    })
    input.value = ""
    
    filteredDogs.forEach(function(item) {
        displayDogs(item)
    })
})

select.addEventListener("change",function(){
    main.innerHTML = ""
    let filteredDogs = currentDogs.filter(function(item){
        return item.indexOf(select.value) !== -1
        //견종 정보안에 인풋의 값이 포함되어있으면 반환한다 !== -1 = 2중부정
    })
    
    filteredDogs.forEach(function(item) {
        displayDogs(item)
    })
})
reset.addEventListener("click",function(){
    main.innerHTML=""
    request1.open("get",apiRandomDogs)
    function handleRequest2Response(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
            currentDogs.push(item)
            displayDogs(item)
        })
    }
    request1.send()
    request1.addEventListener("load",handleRequest2Response);
})

more.addEventListener("click",function(){
    request1.open("get",apiRandomDogs)
    request1.addEventListener("load",function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
            currentDogs.push(item)
            displayDogs(item)
    })
})
    request1.send()
})
tothetop.addEventListener("click",function(){
    //scrollTo:주어진 위치로 스크롤을 이동한다.
    window.scrollTo({ top : 0 })
})


// 중복을 제외한 이미지 배열
const uniqueDogs = [];

currentDogs.forEach(function(item) {
    if (!uniqueDogs.includes(item)) {
        uniqueDogs.push(item);
        displayDogs(item);
    }
});
