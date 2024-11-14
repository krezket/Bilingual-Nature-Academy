const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

let slideIndex = 0;
let slideInterval;

showSlides(slideIndex);

function showSlides(index) {
    let slides = document.querySelectorAll(".slide");
    let back = document.querySelectorAll(".back");
    let dots = document.getElementsByClassName("dot");

    if (index >= slides.length && back.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length -1 && back.length -1;
    slides.forEach((slide) => (slide.style.display = "none"));
    back.forEach((back) => (back.style.display = "none"));

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    back[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
};

const pause = document.querySelector(".pause");
const pauseIcon = document.getElementById('notpaused');
const playIcon = document.getElementById('paused');
let pauseState = window.localStorage.getItem("paused") || 'false';

function setState(state) {
    console.log(state)
    pauseState = state;
    window.localStorage.setItem("paused", state);
    if (pauseState === 'true') {
        // pauseIcon.id = 'paused';
        // playIcon.id = 'notpaused';
        clearInterval(slideInterval);
    } else {
        // playIcon.id = 'notpaused';
        // pauseIcon.id = 'paused';
        startSlideshow();
    }
};

function currentSlide(n) {
    showSlides(slideIndex = n);
};

function changeSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
};

leftArrow.addEventListener("click", () => {
    changeSlide(-1);
    console.log("left clicked")
});

rightArrow.addEventListener("click", () => {
    changeSlide(1);
    console.log("right clicked")
});

pause.addEventListener("click", () => {
    setState(pauseState === 'true' ? 'false' : 'true');
});

function startSlideshow() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000);
};

if (pauseState === 'true') {
    clearInterval(slideInterval);
}
else {
    startSlideshow();
};
