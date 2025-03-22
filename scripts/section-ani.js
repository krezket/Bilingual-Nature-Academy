// Select all elements you want to observe
const fadeElements = document.querySelectorAll('.img');
const paragraphElements = document.querySelector('.section-con');

// Create an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'visible' class when the element is in the viewport
      entry.target.classList.add('visible');
      // Optionally, unobserve the element after it becomes visible
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% of the element is in the viewport

// Start observing each element
fadeElements.forEach(element => {
  observer.observe(element);
});
paragraphElements.forEach(element => {
  observer.observe(element);
});
