document.addEventListener('DOMContentLoaded', function() {
    const barsIcon = document.querySelector('.fa-bars');
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('header');

    barsIcon.addEventListener('click', function() {
        this.classList.toggle('fa-times');
        navbar.classList.toggle('nav-toggle'); // Corrected class toggle
    });

    window.addEventListener('scroll', function() {
        barsIcon.classList.remove('fa-times'); // Corrected class name
        navbar.classList.remove('nav-toggle');

        if (window.scrollY > 30) {
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }
    });

    window.addEventListener('load', function() {
        barsIcon.classList.remove('fa-times'); // Corrected class name
        navbar.classList.remove('nav-toggle');
    });
});
