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

const banner = document.querySelector(".banner");
const bannerImage = document.querySelector(".banner-image");
const bannerLogo = document.querySelector(".banner-logo");

if (banner && bannerImage) {
  if (bannerImage.complete && bannerImage.naturalWidth !== 0) {
    banner.classList.add("is-loaded");
  } else {
    bannerImage.addEventListener("load", () => {
      banner.classList.add("is-loaded");
    });
  }
}

/* Disparition du logo au scroll */
if (bannerLogo) {
  window.addEventListener("scroll", () => {
    bannerLogo.classList.toggle("is-hidden", window.scrollY > 80);
  });
}

// const bannerLogo = document.querySelector(".banner-logo");

// if (bannerLogo) {
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 80) {
//       bannerLogo.classList.add("is-hidden");
//     } else {
//       bannerLogo.classList.remove("is-hidden");
//     }
//   });
// }
// const banner = document.querySelector(".banner");
// const bannerImage = document.querySelector(".banner-image");

// if (banner && bannerImage) {
//   if (bannerImage.complete) {
//     // Image déjà en cache
//     banner.classList.add("is-loaded");
//   } else {
//     bannerImage.addEventListener("load", () => {
//       banner.classList.add("is-loaded");
//     });
//   }
// }
