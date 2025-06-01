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

// Interactive section titles with hover effects
document.querySelectorAll('.section-title').forEach(title => {
    title.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(1deg)';
        this.style.textShadow = '0 4px 8px rgba(139, 111, 71, 0.3)';
    });
    
    title.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
        this.style.textShadow = 'none';
    });
});

// Navbar transparency on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(250, 247, 240, 0.98)';
        nav.style.boxShadow = '0 4px 25px rgba(61, 53, 48, 0.15)';
    } else {
        nav.style.background = 'rgba(250, 247, 240, 0.95)';
        nav.style.boxShadow = '0 2px 30px rgba(61, 53, 48, 0.08)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all content sections
document.querySelectorAll('.content-text, .amenity-card, .full-width-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Form submission handler
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = 'Sending...';
    submitBtn.style.background = '#8b6f47';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.innerHTML = 'Inquiry Sent! ✓';
        submitBtn.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = 'linear-gradient(135deg, #8b6f47, #a68759)';
            submitBtn.disabled = false;
            this.reset();
        }, 3000);
    }, 2000);
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Dynamic placeholder image hover effects
document.querySelectorAll('.placeholder-img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(45deg, #a68759, #8b6f47)';
        this.style.color = 'white';
        this.style.fontSize = '1.3rem';
        this.style.fontWeight = 'bold';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.background = 'linear-gradient(135deg, #e8dcc6, #d4c4a8)';
        this.style.color = '#8b6f47';
        this.style.fontSize = '1.2rem';
        this.style.fontWeight = 'normal';
    });
});

// Enhanced amenity card interactions
document.querySelectorAll('.amenity-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.amenity-icon');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotateY(360deg)';
            icon.style.transition = 'transform 0.6s ease';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.amenity-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotateY(0deg)';
        }
    });
});

// Typing effect for hero subtitle (runs once on page load)
window.addEventListener('load', function() {
    const subtitle = document.querySelector('.hero .subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        subtitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                subtitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing effect after initial animations
        setTimeout(typeWriter, 1500);
    }
});

// Add a subtle floating animation to the CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    setInterval(() => {
        ctaButton.style.transform = 'translateY(-2px)';
        setTimeout(() => {
            ctaButton.style.transform = 'translateY(0px)';
        }, 1000);
    }, 3000);
}