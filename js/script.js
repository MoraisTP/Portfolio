let darkmode = localStorage.getItem('dark-mode')
const darkModetoggle = document.getElementById('dark-mode-toggle')

const enableDarkmode = () => {
    document.body.classList.add('dark-mode')
    localStorage.setItem('dark-mode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('dark-mode')
    localStorage.setItem('dark-mode', null)
}
if (darkmode === "active") enableDarkmode()
darkModetoggle.addEventListener("click", () => {
    darkmode = localStorage.getItem('dark-mode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
// Merci à https://github.com/mattboldt/typed.js ! Effet "typed" qui permet d'avoir un effet "en train d'écrire" très simple et lèger.

var typed = new Typed(".typed-text", {
    strings: [
        "Étudiant Développeur",
        "Passionné par l'IA",
        "Fan de jeux vidéo",
    ],
    typeSpeed: 50,
    backSpeed: 50,
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

