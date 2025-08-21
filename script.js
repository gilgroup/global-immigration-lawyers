// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(30, 60, 114, 0.95)';
    } else {
        header.style.background = 'linear-gradient(135deg, #1e3c72, #2a5298)';
    }
});

// Cookie Consent Banner Logic
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'yes');
    document.getElementById('cookie-banner').style.display = 'none';
}
if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookie-banner').style.display = 'block';
}

// Contact form validation and fake submit
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var msg = document.getElementById('formMsg');
    if (!name || !email || !message) {
        msg.style.color = 'red';
        msg.textContent = 'Please fill in all fields.';
        return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        msg.style.color = 'red';
        msg.textContent = 'Please enter a valid email address.';
        return;
    }
    // Simulate successful submission
    msg.style.color = '#28a745';
    msg.textContent = 'Thank you! Your message has been sent.';
    this.reset();
});

// Accessibility: close cookie banner with Escape
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        document.getElementById('cookie-banner').style.display = 'none';
    }
});