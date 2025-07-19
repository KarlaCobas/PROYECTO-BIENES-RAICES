document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.getElementById('nav');
    const navOverlay = document.getElementById('nav-overlay');
    const navLinks = document.querySelectorAll('#nav ul li a');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        navOverlay.classList.toggle('active');
        
        // Corrección para alinear la X perfectamente
        if (this.classList.contains('active')) {
            this.style.transform = 'translateX(0)';
        }
    });
    
    // Cerrar menú al hacer clic en enlace o fuera
    function closeMenu() {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        navOverlay.classList.remove('active');
    }
    
    navLinks.forEach(link => link.addEventListener('click', closeMenu));
    navOverlay.addEventListener('click', closeMenu);
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) closeMenu();
    });
});

document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    

    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.section-title, .about-text, .about-image, .property-item, .service-item, .contact-info, .testimonial-item, .contact-form, .footer-col, .footer-bottom');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };
    

    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    

    const propertyItems = document.querySelectorAll('.property-item');
    propertyItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    testimonialItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
});



