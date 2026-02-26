
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.hero-indicators span');

let currentSlide = 0;


function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(dot => dot.classList.remove('active'));

  slides[index].classList.add('active');
  indicators[index].classList.add('active');
}


indicators.forEach(dot => {
  dot.addEventListener('click', () => {
    currentSlide = Number(dot.dataset.slide);
    showSlide(currentSlide);
  });
});


setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);