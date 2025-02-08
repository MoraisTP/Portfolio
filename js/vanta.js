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
    color: darkmode === "active" ? 0xfa4381 : 0x0, // Fils roses en dark, noirs en light
    backgroundColor: darkmode === "active" ? 0x24153e : 0xd3bbf8 // Fond violet foncé en dark, violet clair en light
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

// Mise à jour de VANTA.JS avec les bonnes couleurs
const updateVantaBackground = (isDark) => {
    if (effect) effect.destroy();
    effect = VANTA.NET({
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
    });
};

// Appliquer le bon mode au chargement de la page
if (darkmode === "active") enableDarkmode();

darkModetoggle.addEventListener("click", () => {
    darkmode = localStorage.getItem("dark-mode");
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
