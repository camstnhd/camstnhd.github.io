const slides = document.querySelectorAll(".f-slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

prevBtn.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});