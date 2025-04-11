// get element header by class
let staticHeader = document.querySelector('.header');

// when scrolling
window.addEventListener('scroll', function() {

    // set scroll position
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 201) {
        staticHeader.className = 'header-active';
    }
    else if (scrollPosition <= 200) {
        staticHeader.className = 'header';
    };
});
