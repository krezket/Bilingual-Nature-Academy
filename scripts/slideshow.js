// get all buttons with data-carousel-button
const buttons = document.querySelectorAll("[data-carousel-button]");

// do the following for each button 
buttons.forEach(button => {

    // when button is clicked 
    button.addEventListener("click", () => {

        // if the dataset of the button equals to "next" send 1 to changeSlide 
        // else send -1 to changeSlide 
        changeSlide(button.dataset.carouselButton === "next" ? 1 : -1);
    });
});

// "offset" here being either 1 or -1
function changeSlide(offset) {
    
    // get all "ul" with data-slides
    const slides = document.querySelector("[data-slides]");

    // get all "li" with data-active
    const activeSlide = slides.querySelector("[data-active]");

    // get the index of the active slide plus 1 or -1
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    // if newIndex is less than 0, set newIndex to total # of slides -1
    if (newIndex < 0) newIndex = slides.children.length - 1;

    // if newIndex is >= total # of slides, set newIndex to 0
    if (newIndex >= slides.children.length) newIndex = 0;

    // set current active slide dataset to true
    slides.children[newIndex].dataset.active = true;
      
    // delete the old active slide dataset 
    delete activeSlide.dataset.active;
}

// Automatic slideshow functionality
setInterval(() => {
    changeSlide(1); // Automatically move to the next slide
}, 5000);
