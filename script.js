document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent actual form submission (no server yet)
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('form-response').textContent = 'Thanks for your message, ' + name + '! (This is a simulation)';
        // Clear form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        document.getElementById('form-response').textContent = 'Please fill out all fields.';
    }
});