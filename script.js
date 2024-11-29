// Dynamic Header Text Animation
const headerText = document.getElementById("dynamic-text");
const messages = ["Welcome to Shruti's Portfolio", "Explore My Work", "Let's Collaborate"];
let index = 0;

const updateHeaderText = () => {
  headerText.textContent = messages[index];
  index = (index + 1) % messages.length;
};

setInterval(updateHeaderText, 3000); // Change text every 3 seconds

// Scroll Reveal Animation
const sections = document.querySelectorAll(".section");

const revealSections = () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
};

// Run on Scroll and Page Load
window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 50, // Adjust offset if needed
      behavior: "smooth",
    });
  });
});
