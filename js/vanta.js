console.log('alo')
let darkmode = localStorage.getItem("dark-mode");
const darkModetoggle = document.getElementById("dark-mode-toggle");

let effect = VANTA.NET({
    el: "#vantajs",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x0,
    backgroundColor: darkmode === "active" ? 0x111111 : 0xd3bbf8 // Noir en dark, violet en light
});

const enableDarkmode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "active");
    updateVantaBackground(true);
};

const disableDarkmode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "inactive");
    updateVantaBackground(false);
};

// Mise à jour de VANTA.JS avec la bonne couleur
const updateVantaBackground = (isDark) => {
    if (effect) effect.destroy(); // Supprime l'instance actuelle pour éviter les doublons
    effect = VANTA.NET({
        el: "#vantajs",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0,
        backgroundColor: isDark ? 0x111111 : 0xd3bbf8
    });
};

// Appliquer le bon mode au chargement de la page
if (darkmode === "active") enableDarkmode();

darkModetoggle.addEventListener("click", () => {
    darkmode = localStorage.getItem("dark-mode");
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
