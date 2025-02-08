// Effet "typed"
var typed = new Typed(".typed-text", {
    strings: [
        "Étudiant Développeur en 1er année",
        "Passionné par l'IA",
        "Fan de jeux vidéo",
        "Motivé et désireux d'apprendre"
    ],
    typeSpeed: 40,
    backSpeed: 20,
    loop: true,
});

// Menu burger
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
    navbar.classList.toggle("active");
    mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());
