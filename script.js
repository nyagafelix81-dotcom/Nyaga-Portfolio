// Theme Toggle
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;
let theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
html.setAttribute('data-theme', theme);
toggle.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';

toggle.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggle.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Form Submission (more robust + debug-friendly)
document.getElementById('contact-form')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const res = document.getElementById('form-response');
    res.textContent = 'Sending...';
    res.style.color = 'var(--secondary)';

    try {
        const data = new FormData(form);
        const response = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            res.textContent = 'Message sent! 🚀 (Check your inbox)';
            form.reset();
            setTimeout(() => res.textContent = '', 6000);
        } else {
            const errorText = await response.text();
            console.log('Formspree error:', errorText);
            throw new Error('Server responded with error');
        }
    } catch (err) {
        console.error('Submission error:', err);
        res.textContent = 'Oops — failed to send. Check connection or try again?';
        res.style.color = '#ff6b6b';
    }
});

// Page entry animation (fade + slide up)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
