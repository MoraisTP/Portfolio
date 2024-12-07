// Fonction qui permet de basculer entre le mode sombre et mode clair
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Fonction qui permet de modifier le texte de mon bouton, on verifie si le bouton est "dark", on remplace le texte à l'intérieur par son inverse.
// Si le contraire se produit (light), on le modifier en "dark"
function toggleDarkMode() {
    const body = document.body;
    const toggleButton = document.getElementById("dark-mode-toggle");

    // Basculer la classe dark-mode
    body.classList.toggle("dark-mode");

    // Vérifie si Dark ou si Light
    if (body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Light Mode";
    } else {
        toggleButton.textContent = "Dark Mode";
    }
}

// Au chargement de la page, execute le site en dark-mode grâce à body.classList.add("dark-mode")
window.onload = function () {
    const body = document.body;
    const toggleButton = document.getElementById("dark-mode-toggle");

    // Activer directement le mode sombre au chargement
    body.classList.add("dark-mode");
    toggleButton.textContent = "Light Mode";
};


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

