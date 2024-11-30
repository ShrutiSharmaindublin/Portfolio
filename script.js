// Dynamic Header Text Animation
const headerText = document.getElementById("dynamic-text");
const messages = ["Welcome to Shruti's Portfolio", "Explore My Work", "Let's Collaborate"];
let index = 0;

setInterval(() => {
  headerText.textContent = messages[index];
  index = (index + 1) % messages.length;
}, 3000);

// Carousel Functionality
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
});

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
};

let currentIndex = 0;
prevButton.addEventListener('click', () => {
  currentIndex--;
  const targetSlide = slides[currentIndex];
  moveToSlide(track, slides[currentIndex + 1], targetSlide);
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  const targetSlide = slides[currentIndex];
  moveToSlide(track, slides[currentIndex - 1], targetSlide);
});
