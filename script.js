// Theme Toggle
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;
let theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
html.setAttribute('data-theme', theme);
toggle.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';

toggle.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggle.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
});

// Real Form Submission + Feedback
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
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            res.textContent = 'Message sent successfully! 🚀';
            form.reset();
            setTimeout(() => res.textContent = '', 5000);
        } else {
            throw new Error('Failed to send');
        }
    } catch (err) {
        res.textContent = 'Oops, something went wrong. Try again?';
        res.style.color = '#ff6b6b';
    }
});
