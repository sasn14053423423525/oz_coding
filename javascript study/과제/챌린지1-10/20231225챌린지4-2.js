const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');

let index = 0;

prevButton.addEventListener('click', () => {
    if (index === 0) return; // 이미 첫 번째 이미지일 때는 더 이상 뒤로 가지 않도록
    index -= 1;

    carousel.style.transform = `translate3d(-${500 * index}px, 0, 0)`;
});

nextButton.addEventListener('click', () => {
    if (index === 2) return; // 예를 들어 총 이미지가 3개일 때, 이미 마지막 이미지에 도달했을 때 더 이상 넘어가지 않도록
    index += 1;

    carousel.style.transform = `translate3d(-${500 * index}px, 0, 0)`;
});