// 제출 이벤트를 받는다 ( 이벤트 핸들링)

// 제출된 입략 값들을 참조한다.

// 입력값에 문제가 있는 경우 이를 감지한다
// ex)비밀번호가 틀릴 떄, 아이디가 짧을 때

// 가입인사 환영

const form = document.getElementById("form")
// 익명함수
form.addEventListener("submit",function(event) {
    event.preventDefault() //기존 기능 차단

    let userId = event.target.id.value
    let userPw1 = event.target.pw1.value
    let userPw2 = event.target.pw2.value
    let userName = event.target.name.value
    let userNumber = event.target.number.value
    let userPosition = event.target.position.value
    let userGender = event.target.gender.value
    let userEmail = event.target.email.value
    let userIntro = event.target.intro.value

    if(userId.length < 6){
    alert("아이디가 너무 짧습니다.6자 이상 입력해주세요.")
    return}
    if(userPw1 !== userPw2){
        alert("비밀번호가 일치하지 않습니다")
    return}
        document.body.innerHTML = ""
        document.write(`<p>${userId}님 환영합니다.<br>
        회원가입 시 입력하신 내역은 다음과 같습니다.<br>
        아이디 : ${userId} <br>
        이름 : ${userName}<br>
        전화번호 : ${userNumber}<br>
        원하는 직무 : ${userPosition}</p>`)

    })
    