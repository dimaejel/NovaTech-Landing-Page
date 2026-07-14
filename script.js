const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn){

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}


// Scroll Animations

ScrollReveal().reveal('.services', {

    delay: 200,
    distance: '50px',
    duration: 1000,
    origin: 'bottom'

});


ScrollReveal().reveal('.card', {

    interval: 200,
    delay: 300,
    distance: '50px',
    duration: 1000,
    origin: 'bottom'

});


ScrollReveal().reveal('.technologies, .about, .contact', {

    delay: 300,
    distance: '60px',
    duration: 1000,
    origin: 'bottom'

});