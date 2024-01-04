document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 기본 제출 동작 막기

        // 사용자가 입력한 데이터 가져오기
        const formData = new FormData(form);

        // FormData를 객체로 변환
        const userData = {};
        for (const [key, value] of formData.entries()) {
            userData[key] = value;
        }

        // 콘솔에 사용자 데이터 출력
        console.log('사용자 데이터:', userData);
    });
});