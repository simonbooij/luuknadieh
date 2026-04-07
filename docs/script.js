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

  // Close menu on link click & clean up URL hash
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      navLinks.classList.remove('open');
      // Remove hash from URL after smooth scroll so refresh starts at top
      setTimeout(() => {
        history.replaceState(null, '', ' ');
      }, 800);
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

  // --- 666 date animation ---
  const heroDate = document.getElementById('hero-date');

  function play666() {
    heroDate.classList.remove('revealed', 'show-666', 'flicker-on');
    void heroDate.offsetWidth;
    // Step 1: fade in 666
    heroDate.classList.add('show-666');
    // Step 2: start flicker after fade-in (0.8s)
    setTimeout(() => {
      heroDate.classList.add('flicker-on');
    }, 800);
    // Step 3: reveal date after 2s of flicker
    setTimeout(() => {
      heroDate.classList.add('revealed');
    }, 2800);
  }

  // Play on load with slight delay so fade-in is visible
  setTimeout(play666, 100);

  // Replay on click
  heroDate.addEventListener('click', play666);

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
