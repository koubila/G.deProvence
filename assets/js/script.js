// Année dynamique
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Menu burger
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// Formulaire (simulation front)
const contactForm = document.querySelector(".contact-form");
const formStatus = document.getElementById("formStatus");

// if (contactForm && formStatus) {
//   contactForm.addEventListener("submit", e => {
//     e.preventDefault();
//     formStatus.textContent = "Merci, votre message a bien été envoyé (simulation).";
//     contactForm.reset();
//     setTimeout(() => (formStatus.textContent = ""), 4000);
//   });
// }
