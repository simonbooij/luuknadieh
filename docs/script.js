// ==========================================================
// Bruiloft Luuk & Nadieh — Script
// ==========================================================

(function () {
  'use strict';

  // --- Mobile nav toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // --- Scroll animations ---
  const animatedElements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedElements.forEach((el) => observer.observe(el));

  // --- Nav background on scroll ---
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(10, 10, 10, 0.97)';
    } else {
      nav.style.background = 'rgba(10, 10, 10, 0.9)';
    }
  }, { passive: true });
})();
