// Dynamic Header Text Animation
const headerText = document.getElementById("dynamic-text");
const messages = ["Welcome to Shruti's Portfolio", "Explore My Work", "Let's Collaborate"];
let index = 0;

setInterval(() => {
  headerText.textContent = messages[index];
  index = (index + 1) % messages.length;
}, 3000);

// Scroll Reveal Animation
const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
});

// Form Submission Handler
const form = document.getElementById("contact-form");
const confirmationMessage = document.getElementById("confirmation-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  confirmationMessage.classList.remove("hidden");
  setTimeout(() => {
    confirmationMessage.classList.add("hidden");
  }, 3000);
});
