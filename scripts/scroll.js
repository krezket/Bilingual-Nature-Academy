let staticHeader = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if (scrollPosition > 50) {
        staticHeader.className = 'header-active';
    }
    else if (scrollPosition == 0) {
        staticHeader.className = 'header';
    }
});


