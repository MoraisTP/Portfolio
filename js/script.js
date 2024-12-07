// Fonction pour basculer entre le mode sombre et clair
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

// Mode dark en premier chargement
window.onload = function () {
    const body = document.body;
    const toggleButton = document.getElementById("dark-mode-toggle");

    // Activer directement le mode sombre au chargement
    body.classList.add("dark-mode");
    toggleButton.textContent = "Light Mode";
};

