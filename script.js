(function () {
  'use strict';

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === '#') return;
    a.addEventListener('click', function (e) {
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Logo fallback: if image fails to load, hide it
  document.querySelectorAll('.logo').forEach(function (img) {
    img.addEventListener('error', function () {
      img.style.display = 'none';
    });
  });

  // Hero and about images: hide if missing so layout stays clean
  document.querySelectorAll('.hero-main-image, .about-card-image').forEach(function (img) {
    img.addEventListener('error', function () {
      img.style.display = 'none';
    });
  });
})();
