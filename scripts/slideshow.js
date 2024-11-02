const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

let slideIndex = 0;
showSlides(slideIndex);

function showSlides(index) {
    let slides = document.querySelectorAll(".slide");
    let dots = document.getElementsByClassName("dot");

    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length -1;
    slides.forEach((slide) => (slide.style.display = "none"));

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
};

function currentSlide(n) {
    showSlides(slideIndex = n);
};

function changeSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
};

// setInterval(() => {
//     changeSlide(1);
// }, 3000);

leftArrow.addEventListener("click", () => {
    changeSlide(-1);
    console.log("left clicked")
});

rightArrow.addEventListener("click", () => {
    changeSlide(1);
    console.log("right clicked")
});
