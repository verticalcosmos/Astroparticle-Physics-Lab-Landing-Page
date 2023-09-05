'use strict';
const header = document.querySelector('.header');
const nav = document.querySelector('.navigation');

function shrinkNav(entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.style.fontSize = 'var(--f-md)';
      nav.style.backgroundColor = 'var(--c-bg)';
    } else {
      nav.style.removeProperty('font-size');
      nav.style.removeProperty('background-color');
    }
  });
}

const observer = new IntersectionObserver(shrinkNav, {
  threshold: 0.8,
});

observer.observe(header);
