let darkmode = localStorage.getItem("dark-mode");

// Si aucune préférence n'est enregistrée, définir le mode sombre par défaut
if (darkmode === null) {
    localStorage.setItem("dark-mode", "active");
    darkmode = "active";
}

const darkModetoggle = document.getElementById("dark-mode-toggle");

// Fonction pour initialiser VANTA avec les bonnes couleurs
const initVanta = (isDark) => {
    if (window.vantaEffect) {
        window.vantaEffect.destroy();
    }
    window.vantaEffect = VANTA.NET({
        el: "#vantajs",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: isDark ? 0xfa4381 : 0x0, // Fils roses en dark, noirs en light
        backgroundColor: isDark ? 0x24153e : 0xa485de // Fond violet foncé en dark, violet clair en light
    }, 1000);
};

// Fonction pour activer le dark mode
const enableDarkmode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "active");
    initVanta(true);
};

// Fonction pour désactiver le dark mode
const disableDarkmode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "inactive");
    initVanta(false);
};

// Vérifie le mode sombre au chargement de la page
if (darkmode === "active") {
    enableDarkmode();
} else {
    disableDarkmode();
}

// Toggle dark mode au clic
darkModetoggle.addEventListener("click", () => {
    darkmode = localStorage.getItem("dark-mode");
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});