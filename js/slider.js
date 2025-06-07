const slider = document.querySelector(".slider .content");
const slides = document.querySelectorAll(".slider .content img");
const previousButton = document.querySelector("#previousSlide");
const nextButton = document.querySelector("#nextSlide");

let currentSlide = 0;

function updateSliderPosition() {
    const slideWidth = slider.offsetWidth;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

previousButton.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSliderPosition();
    }
});

nextButton.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSliderPosition();
    }
});

// Ajusta o tamanho do slider ao redimensionar a janela
window.addEventListener("resize", updateSliderPosition);