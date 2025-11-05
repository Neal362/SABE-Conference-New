// Footer year
document.getElementById('year').textContent = new Date().getFullYear();



// Smooth scrolling for in-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', href);
    }
  });
});

// Simple accordion logic
document.querySelectorAll('.accordion').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    const panel = btn.nextElementSibling;
    panel.classList.toggle('open', !expanded);
  });
});

// Open the first section by default (optional)
const firstAccordion = document.querySelector('.accordion');
if (firstAccordion) {
  firstAccordion.click();
}
