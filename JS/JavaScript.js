'use strict';
const header = document.querySelector('.header');
const nav = document.querySelector('.navigation');

function shrinkNav(entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.style.fontSize = 'var(--f-md)';
    } else {
      nav.style.removeProperty('font-size');
    }
  });
}

const observer = new IntersectionObserver(shrinkNav, {
  threshold: 0,
});

observer.observe(header);
