// Dynamic Text Effect
const dynamicText = document.getElementById('dynamic-text');
const messages = ["Welcome to Shruti's Portfolio", "Business Analyst", "E-commerce Specialist"];
let i = 0;

setInterval(() => {
  dynamicText.textContent = messages[i];
  i = (i + 1) % messages.length;
}, 3000);

// Carousel Functionality
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
});

nextButton.addEventListener('click', () => {
  track.style.transform = `translateX(-${slideWidth}px)`;
});

prevButton.addEventListener('click', () => {
  track.style.transform = `translateX(${slideWidth}px)`;
});
