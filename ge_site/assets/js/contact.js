// Address the contact form sends to
const CONTACT_EMAIL = 'info@UnderVeil.com';

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // No backend on a static site: hand the message to the visitor's email app
            const body = `${message}\n\n— ${name} (${email})`;
            window.location.href = `mailto:${CONTACT_EMAIL}`
                + `?subject=${encodeURIComponent(subject)}`
                + `&body=${encodeURIComponent(body)}`;

            showMessage('Your email app should open with the message ready to send.', 'success');
        });
    }
});

function showMessage(message, type) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create and insert new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;
    messageDiv.style.marginBottom = '15px';
    messageDiv.style.padding = '12px';
    messageDiv.style.borderRadius = '4px';
    messageDiv.style.fontWeight = '500';
    
    if (type === 'success') {
        messageDiv.style.backgroundColor = '#d4edda';
        messageDiv.style.color = '#155724';
        messageDiv.style.border = '1px solid #c3e6cb';
    } else {
        messageDiv.style.backgroundColor = '#f8d7da';
        messageDiv.style.color = '#721c24';
        messageDiv.style.border = '1px solid #f5c6cb';
    }
    
    const contactForm = document.getElementById('contact-form');
    contactForm.parentNode.insertBefore(messageDiv, contactForm);
    
    // Auto-remove success message after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}
