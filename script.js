// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  });
});

// Navbar transparency on scroll
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.content-text, .amenity-card, .full-width-content').forEach(el => {
  el.classList.add('pre-fade');
  observer.observe(el);
});

// Form submission handler
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const submitBtn = document.querySelector('.submit-btn');
  const originalText = submitBtn.innerHTML;

  submitBtn.innerHTML = 'Sending...';
  submitBtn.classList.add('sending');
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.innerHTML = 'Inquiry Sent! ✓';
    submitBtn.classList.remove('sending');
    submitBtn.classList.add('sent');

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.classList.remove('sent');
      submitBtn.disabled = false;
      e.target.reset();
    }, 3000);
  }, 2000);
});

// Typing effect for subtitle
window.addEventListener('DOMContentLoaded', function () {
  const subtitle = document.querySelector('.hero .subtitle');
  if (subtitle) {
    const originalText = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    setTimeout(function typeWriter() {
      if (i < originalText.length) {
        subtitle.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }, 1500);
  }
});

// Floating CTA button effect
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
  setInterval(() => {
    ctaButton.classList.add('float-up');
    setTimeout(() => ctaButton.classList.remove('float-up'), 1000);
  }, 3000);
}

// Mobile navigation toggle
document.getElementById('nav-toggle').addEventListener('click', () => {
  document.getElementById('nav-menu').classList.toggle('open');
});
