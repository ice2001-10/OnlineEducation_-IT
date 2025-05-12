const slider = document.querySelector('#slider');
const slides = document.querySelector('#slides');
const slide = document.querySelectorAll('#slide');
let slideIndex = 0;

function nextSlide() {
slideIndex = (slideIndex + 1) % slide.length;
updateSlider();
}

function prevSlide() {
slideIndex = (slideIndex - 1 + slide.length) % slide.length;
updateSlider();
}

function updateSlider() {
slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
