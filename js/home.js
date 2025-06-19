'use strict';

document.addEventListener("DOMContentLoaded", () => {
    // Hero スライダー
  const heroSlides = document.querySelectorAll('.hero-slide');
  const dotsContainer = document.querySelector('.hero-dots');
  let heroIndex = 0;
  let heroTimer;

  // ドット生成
  heroSlides.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (idx === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      showHeroSlide(idx);
      resetHeroTimer();
    });
    dotsContainer.appendChild(dot);
  });

  const heroDots = dotsContainer.querySelectorAll('.dot');

  function showHeroSlide(i) {
    heroSlides[heroIndex].classList.remove('active');
    heroDots[heroIndex].classList.remove('active');
    heroIndex = i;
    heroSlides[heroIndex].classList.add('active');
    heroDots[heroIndex].classList.add('active');
  }

  function nextHeroSlide() {
    const next = (heroIndex + 1) % heroSlides.length;
    showHeroSlide(next);
  }

  function resetHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(nextHeroSlide, 5000);
  }

  heroTimer = setInterval(nextHeroSlide, 5000);
});