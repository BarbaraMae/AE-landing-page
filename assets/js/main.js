// Toggle Search Box from icon
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("search-box");

searchIcon.addEventListener("click", function () {
  searchBox.classList.toggle("show");
});

// Toggle Mobile Menu from hamburger icon
const menuIcon = document.getElementById("menu-toggle");
const menuBox = document.getElementById("mobile-menu");
const menuClose = document.getElementById("close-mobile-menu");

menuIcon.addEventListener("click", function () {
  menuBox.classList.toggle("show");
});

menuClose.addEventListener("click", function () {
  menuBox.classList.toggle("show");
});

// Build Hero Carousel
let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".hero__carousel-slide");
  const totalSlides = slides.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function updateCarousel() {
  const carousel = document.querySelector(".hero__carousel");
  const slideWidth = document.querySelector(
    ".hero__carousel-slide"
  ).clientWidth;
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  // Update active indicator
  const indicators = document.querySelectorAll(".indicator");
  indicators.forEach((indicator, i) => {
    if (i === currentIndex) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

window.addEventListener("load", updateCarousel);