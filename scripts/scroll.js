// get element header by class
let staticHeader = document.querySelector('.header');

// when scrolling
window.addEventListener('scroll', function() {

    // set scroll position
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        staticHeader.className = 'header-active';
    }
    else if (scrollPosition == 0) {
        staticHeader.className = 'header';
    };
});
