// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize EmailJS
emailjs.init('cfXgiEyRtIVSQvV2-');

// Form submission handling with EmailJS
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const nameInput = this.querySelector('input[type="text"]');
        const emailInput = this.querySelector('input[type="email"]');
        const phoneInput = this.querySelector('input[type="tel"]');
        const messageInput = this.querySelector('textarea');
        const submitButton = this.querySelector('button[type="submit"]');
        
        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const message = messageInput.value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        // Prepare template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            phone: phone || 'Not provided',
            message: message
        };
        
        // Send email via EmailJS
        emailjs.send('service_d9lar9g', 'template_22rf64j', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Thank you for your message! We will get back to you soon.');
                // Reset form
                contactForm.reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert('Sorry, there was an error sending your message. Please try again or call us directly at (516) 366-4397.');
            })
            .finally(function() {
                // Re-enable submit button
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            });
    });
}

// Add active state to navigation on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Image loading handler - fix image display
const profileImage = document.querySelector('.profile-image');
const imagePlaceholder = document.querySelector('.image-placeholder');

if (profileImage) {
    // Check if image loads successfully
    profileImage.addEventListener('load', function() {
        // Image loaded successfully, hide placeholder
        if (imagePlaceholder) {
            imagePlaceholder.style.display = 'none';
        }
    });
    
    // Handle image error
    profileImage.addEventListener('error', function() {
        // Image failed to load, ensure placeholder is visible
        if (imagePlaceholder) {
            imagePlaceholder.style.display = 'block';
        }
    });
    
    // Check if image is already loaded (cached)
    if (profileImage.complete && profileImage.naturalHeight !== 0) {
        if (imagePlaceholder) {
            imagePlaceholder.style.display = 'none';
        }
    }
}

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once animated, we can stop observing if desired
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Observe section headings
    const slideUpElements = document.querySelectorAll('.slide-up');
    slideUpElements.forEach(el => observer.observe(el));
    
    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => observer.observe(card));
    
    // Observe about section elements
    const aboutImage = document.querySelector('.about-image');
    const aboutText = document.querySelector('.about-text');
    if (aboutImage) observer.observe(aboutImage);
    if (aboutText) observer.observe(aboutText);
    
    // Observe contact section elements
    const contactInfo = document.querySelector('.contact-info');
    const contactFormElement = document.querySelector('.contact-form');
    if (contactInfo) observer.observe(contactInfo);
    if (contactFormElement) observer.observe(contactFormElement);
    
    // Observe ADHD page elements if they exist
    const symptomCategories = document.querySelectorAll('.symptom-category');
    symptomCategories.forEach(cat => observer.observe(cat));
    
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => observer.observe(item));
    
    const contentBoxes = document.querySelectorAll('.content-box');
    contentBoxes.forEach(box => observer.observe(box));
    
    // Observe all scroll-reveal elements
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
    scrollRevealElements.forEach(el => observer.observe(el));
});

// Parallax effect for hero section (subtle)
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (scrolled <= hero.offsetHeight) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Add smooth reveal animation to page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add interactive hover effects to all links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-intensive operations
const debouncedScrollHandler = debounce(() => {
    // Any additional scroll-based operations can go here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);
