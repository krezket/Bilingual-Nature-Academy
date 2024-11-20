let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel .slide');
const background = document.querySelector('.carousel-background');

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => (slide.style.display = 'none'));

    // Show the current slide
    slides[index].style.display = 'block';

    // Update the background to match the current slide
    const currentImage = slides[index].querySelector('.carousel-img').src;
    background.style.backgroundImage = `url(${currentImage})`;

    currentSlideIndex = index;
}

// Initial setup
showSlide(0);

// Auto-slide (optional)
setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}, 5000);
