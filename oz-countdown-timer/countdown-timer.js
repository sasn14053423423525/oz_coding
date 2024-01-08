  //기능부분//
  const day = document.querySelector('.day');
  const hour = document.querySelector('.hour');
  const min = document.querySelector('.min');
  const sec = document.querySelector('.sec');

  day.addEventListener('click', () => {
  const userInput = prompt('일(day)을 입력하세요:');
  if (userInput !== null) {
    const parsedValue = parseInt(userInput, 10);
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      day.textContent = Math.min(parsedValue, 99).toString().padStart(2, '0');
    }
  }
});

hour.addEventListener('click', () => {
  const userInput = prompt('시간(hour)을 입력하세요:');
  if (userInput !== null) {
    const parsedValue = parseInt(userInput, 10);
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      hour.textContent = Math.min(parsedValue, 23).toString().padStart(2, '0');
    }
  }
});

min.addEventListener('click', () => {
  const userInput = prompt('분(min)을 입력하세요:');
  if (userInput !== null) {
    const parsedValue = parseInt(userInput, 10);
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      min.textContent = Math.min(parsedValue, 59).toString().padStart(2, '0');
    }
  }
});

sec.addEventListener('click', () => {
  const userInput = prompt('초(sec)을 입력하세요:');
  if (userInput !== null) {
    const parsedValue = parseInt(userInput, 10);
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      sec.textContent = Math.min(parsedValue, 59).toString().padStart(2, '0');
    }
  }
});
//작동 부분//
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;
let timerInterval;
let timerStarted = false;

function startTimer() {
  if(timerStarted){
    return;
  }
  timerStarted = true;
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerStarted = false;
}
function updateTimer() {
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
    if (minutes < 0) {
      minutes = 59;
      hours--;
      if (hours < 0) {
        hours = 23;
        days--;
        if (days < 0) {
          clearInterval(timerInterval);
          alert('타이머가 종료되었습니다.');
          document.querySelector('.start-button').disabled = false;
          timerStarted = false;
          day = Math.max(0,days);
          hours = Math.max(0,hours);
          minutes = Math.max(0,minutes);
          seconds = Math.max(0,seconds);
        }
      }
    }
  }
  updateDisplay();
}

function updateDisplay() {
  document.querySelector('.day').textContent = days.toString().padStart(2, '0');
  document.querySelector('.hour').textContent = hours.toString().padStart(2, '0');
  document.querySelector('.min').textContent = minutes.toString().padStart(2, '0');
  document.querySelector('.sec').textContent = seconds.toString().padStart(2, '0');
  
}
  


// 시작 버튼 클릭 시 타이머 시작
  document.querySelector('.start-button').addEventListener('click', () => {
  seconds = parseInt(document.querySelector('.sec').textContent, 10);
  minutes = parseInt(document.querySelector('.min').textContent, 10);
  hours = parseInt(document.querySelector('.hour').textContent, 10);
  days = parseInt(document.querySelector('.day').textContent, 10);
  stopButtonClickCount = 0;
  
  startTimer();
  document.querySelector('.start-button').disabled = true;
})
  document.querySelector('.stop-button').addEventListener('click', () => {stopTimer();
  document.querySelector('.start-button').disabled = false;
});
let stopButtonClickCount = 0;

document.querySelector('.stop-button').addEventListener('click', () => {
  stopButtonClickCount++;

  if (stopButtonClickCount >= 2) {
    // 시간 초기화
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;

    // 화면에 업데이트
    updateDisplay();
    stopButtonClickCount = 0;
  }})

    