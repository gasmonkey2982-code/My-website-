// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            if(window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Update contact info - REPLACE WITH YOUR NUMBER
function updateContactInfo() {
    // YOUR WHATSAPP NUMBER (Format: 919876543210)
    const whatsappNumber = "917906329697";
    
    // Update all WhatsApp links
    document.querySelectorAll('a[href*="whatsapp"]').forEach(link => {
        const currentHref = link.getAttribute('href');
        const newHref = currentHref.replace(/wa\.me\/\d+/, `wa.me/${whatsappNumber}`);
        link.setAttribute('href', newHref);
    });
    
    // Update all phone links
    document.querySelectorAll('a[href*="tel"]').forEach(link => {
        link.setAttribute('href', `tel:+${whatsappNumber}`);
    });
    
    // Update displayed numbers
    document.querySelectorAll('.contact-info a, .footer-contact p').forEach(element => {
        if(element.textContent.includes('12345')) {
            element.textContent = element.textContent.replace('12345 67890', 
                `${whatsappNumber.substring(2, 7)} ${whatsappNumber.substring(7)}`);
        }
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateContactInfo();
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if(window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 20px rgba(0, 119, 255, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 15px rgba(0, 119, 255, 0.1)';
        }
    });
    
    // Fix for mobile menu on resize
    window.addEventListener('resize', function() {
        const navLinks = document.querySelector('.nav-links');
        if(window.innerWidth > 768) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'row';
            navLinks.style.position = 'static';
            navLinks.style.background = 'transparent';
            navLinks.style.padding = '0';
            navLinks.style.boxShadow = 'none';
        } else {
            navLinks.style.display = 'none';
        }
    });
});