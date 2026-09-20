// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const targetY = target.getBoundingClientRect().top + window.scrollY;
      const startY = window.scrollY;
      const distance = targetY - startY;
      const duration = 1000; // ms — increase for slower scroll
      let startTime = null;

      function step(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        window.scrollTo(0, startY + distance * ease);
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
  });
});

// Rotating role text
const roles = [
  "Software Engineer",
  "Data Engineer",
  "AI/ML Enthusiast",
  "Full Stack Developer",
  "Always Learning"
  // EDIT: adjust these roles to match how you want to describe yourself
];
let roleIndex = 0;
const roleEl = document.getElementById('rotating-role');

function rotateRole() {
  roleIndex = (roleIndex + 1) % roles.length;
  roleEl.style.opacity = 0;
  setTimeout(() => {
    roleEl.textContent = roles[roleIndex];
    roleEl.style.opacity = 1;
  }, 250);
}
roleEl.style.transition = 'opacity 0.25s';
setInterval(rotateRole, 2200);

// Dark mode toggle, persisted
const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

function applyTheme(theme) {
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '☀️';
  } else {
    root.removeAttribute('data-theme');
    toggleBtn.textContent = '🌙';
  }
}

const saved = localStorage.getItem('theme');
if (saved) {
  applyTheme(saved);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  applyTheme('dark');
}

toggleBtn.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

const sections = document.querySelectorAll('#top, main section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));