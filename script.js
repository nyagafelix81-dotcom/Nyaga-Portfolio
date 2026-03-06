// Form Handling
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            formResponse.textContent = `Thanks, ${name}! Message sent (simulation).`;
            formResponse.style.color = 'var(--secondary)';
            contactForm.reset();
            setTimeout(() => { formResponse.textContent = ''; }, 5000);
        } else {
            formResponse.textContent = 'Please fill all fields.';
            formResponse.style.color = '#ff0000';
        }
    });
}

// Theme Toggle
const toggleButton = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

let currentTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

htmlEl.setAttribute('data-theme', currentTheme);
toggleButton.textContent = currentTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';

toggleButton.addEventListener('click', () => {
    const newTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggleButton.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Fade-In on Scroll
const fadeSections = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeSections.forEach((section) => fadeObserver.observe(section));
