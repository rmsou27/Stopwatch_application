document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('main-nav');

    // Change nav style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Adjust scroll threshold as needed
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Hover effect on menu items
    const navLinks = document.querySelectorAll('#main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#777'; // Darker on hover
            this.style.color = '#fff';
        });

        link.addEventListener('mouseleave', function() {
            this.style.backgroundColor = ''; // Reset to original (from CSS)
            this.style.color = ''; // Reset to original (from CSS)
        });
    });
});