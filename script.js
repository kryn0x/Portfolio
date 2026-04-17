<<<<<<< HEAD
// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = navLinks.classList.contains('open') ? 'rotate(45deg) translate(5px, 5px)' : '';
  spans[1].style.opacity = navLinks.classList.contains('open') ? '0' : '1';
  spans[2].style.transform = navLinks.classList.contains('open') ? 'rotate(-45deg) translate(5px, -5px)' : '';
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
  });
});

// ===== TYPING EFFECT =====
const roles = ['Data Analyst', 'Visual Data Designer', 'AI Enthusiast', 'Infographics Designer'];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typedText');

function type() {
  const current = roles[roleIndex];
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; setTimeout(type, 500); return; }
  } else {
    typedEl.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) { isDeleting = true; setTimeout(type, 1800); return; }
  }
  setTimeout(type, isDeleting ? 60 : 100);
}
setTimeout(type, 800);

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== SKILL BAR ANIMATION =====
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
      // Animate percentage counters
      entry.target.querySelectorAll('.skill-pct').forEach(pct => {
        const target = parseInt(pct.dataset.target, 10);
        let current = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          pct.textContent = current + '%';
          if (current >= target) clearInterval(timer);
        }, 20);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('#skills').forEach(el => skillObserver.observe(el));

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    btn.disabled = false;
    this.reset();
    const success = document.getElementById('formSuccess');
    success.classList.add('show');
    setTimeout(() => success.classList.remove('show'), 4000);
  }, 1500);
});

// ===== SMOOTH ACTIVE NAV =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
  });
  navItems.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--purple-light)' : '';
  });
});

// ===== INTERNSHIP DOCS MODAL =====
const internshipCard = document.getElementById('internshipCard');
const docsModal = document.getElementById('docsModal');
const modalClose = document.getElementById('modalClose');

function openModal() {
  docsModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  docsModal.classList.remove('open');
  document.body.style.overflow = '';
}

internshipCard.addEventListener('click', openModal);
internshipCard.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(); } });
modalClose.addEventListener('click', closeModal);
docsModal.addEventListener('click', e => { if (e.target === docsModal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
=======
// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = navLinks.classList.contains('open') ? 'rotate(45deg) translate(5px, 5px)' : '';
  spans[1].style.opacity = navLinks.classList.contains('open') ? '0' : '1';
  spans[2].style.transform = navLinks.classList.contains('open') ? 'rotate(-45deg) translate(5px, -5px)' : '';
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
  });
});

// ===== TYPING EFFECT =====
const roles = ['Data Analyst', 'AI Enthusiast', 'Python Developer', 'BI Developer'];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typedText');

function type() {
  const current = roles[roleIndex];
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; setTimeout(type, 500); return; }
  } else {
    typedEl.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) { isDeleting = true; setTimeout(type, 1800); return; }
  }
  setTimeout(type, isDeleting ? 60 : 100);
}
setTimeout(type, 800);

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== SKILL BAR ANIMATION =====
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
      // Animate percentage counters
      entry.target.querySelectorAll('.skill-pct').forEach(pct => {
        const target = parseInt(pct.dataset.target, 10);
        let current = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          pct.textContent = current + '%';
          if (current >= target) clearInterval(timer);
        }, 20);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('#skills').forEach(el => skillObserver.observe(el));

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    btn.disabled = false;
    this.reset();
    const success = document.getElementById('formSuccess');
    success.classList.add('show');
    setTimeout(() => success.classList.remove('show'), 4000);
  }, 1500);
});

// ===== SMOOTH ACTIVE NAV =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
  });
  navItems.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--purple-light)' : '';
  });
});

// ===== INTERNSHIP DOCS MODAL =====
const internshipCard = document.getElementById('internshipCard');
const docsModal = document.getElementById('docsModal');
const modalClose = document.getElementById('modalClose');

function openModal() {
  docsModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  docsModal.classList.remove('open');
  document.body.style.overflow = '';
}

internshipCard.addEventListener('click', openModal);
internshipCard.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(); } });
modalClose.addEventListener('click', closeModal);
docsModal.addEventListener('click', e => { if (e.target === docsModal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
>>>>>>> 6881797197a5574b346d79d5b005e958328bf9d7
