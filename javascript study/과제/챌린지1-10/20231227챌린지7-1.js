const score = parseInt(prompt("중간고사 점수를 입력하세요"));

if(score >= 90){
    const p = document.createElement("p")
    p.textContent = `제 성적은 ${score}점, 제 학점은 A 입니다`
    document.querySelector(".score").append(p)
}
else if(score >= 80){
    const p = document.createElement("p")
    p.textContent = `제 성적은 ${score}점, 제 학점은 B 입니다`
    document.querySelector(".score").append(p)    
}
else if(score >= 70){
    const p = document.createElement("p")
    p.textContent = `제 성적은 ${score}점, 제 학점은 C 입니다`
    document.querySelector(".score").append(p)    
}
else if(score >= 60){
    const p = document.createElement("p")
    p.textContent = `제 성적은 ${score}점, 제 학점은 D 입니다`
    document.querySelector(".score").append(p)    
}
else if(score < 60){
    const p = document.createElement("p")
    p.textContent = `제 성적은 ${score}점, 제 학점은 E 입니다`
    document.querySelector(".score").append(p)    
}