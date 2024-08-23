const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  showSlide(currentIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

setInterval(nextSlide, 3000);

// Initialize the first active dot
updateDots();
