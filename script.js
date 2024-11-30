// Dynamic Text Effect
document.addEventListener('DOMContentLoaded', () => {
  const dynamicText = document.getElementById('dynamic-text');
  const messages = [
    "Welcome to Shruti's Portfolio",
    "Business Analyst & E-commerce Specialist",
    "Transforming Customer Experiences"
  ];
  let messageIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentMessage = messages[messageIndex];
    if (isDeleting) {
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
      }
    } else {
      charIndex++;
      if (charIndex === currentMessage.length) {
        isDeleting = true;
      }
    }
    dynamicText.textContent = currentMessage.substring(0, charIndex);
    setTimeout(type, isDeleting ? 100 : 200);
  }

  type();
});

// Carousel Functionality
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-button.next');
  const prevButton = document.querySelector('.carousel-button.prev');
  const slideWidth = slides[0].getBoundingClientRect().width;

  // Arrange slides next to one another
  slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
  });

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  };

  // Click next
  nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling || slides[0];
    moveToSlide(track, currentSlide, nextSlide);
  });

  // Click prev
  prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
    moveToSlide(track, currentSlide, prevSlide);
  });
});
