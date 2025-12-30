/* ================= HERO SLIDER ================= */
const slides = document.querySelectorAll(".hero-slide");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const heroSection = document.getElementById("hero");

let currentSlide = 0;
let heroInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}


function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}


nextBtn?.addEventListener("click", nextSlide);
prevBtn?.addEventListener("click", prevSlide);


function startAutoSlide() {
  heroInterval = setInterval(nextSlide, 1000);
}

function stopAutoSlide() {
  clearInterval(heroInterval);
}


startAutoSlide();

heroSection?.addEventListener("mouseenter", stopAutoSlide);
heroSection?.addEventListener("mouseleave", startAutoSlide);




/* ================= SCROLL ANIMATIONS ================= */
const revealEls = document.querySelectorAll(
  ".reveal-left, .reveal-right, .reveal-up, .reveal"
);
const offerBoxes = document.querySelectorAll(".offer-box");
const menuCards = document.querySelectorAll(".menu-card");
const navbar = document.querySelector(".navbar");


function onScroll() {
  const trigger = window.innerHeight - 90;

  revealEls.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("reveal-show");
    }
  });

  offerBoxes.forEach(box => {
    if (box.getBoundingClientRect().top < trigger) {
      box.classList.add("show");
    }
  });

  menuCards.forEach(card => {
    if (card.getBoundingClientRect().top < trigger) {
      card.classList.add("show");
    }
  });

  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }
}



window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);



