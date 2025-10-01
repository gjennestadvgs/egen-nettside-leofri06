// DARK MODE (har brukt litt autofill + hjelp fra KI)
// Sjekker hvilken innstilling som er lagret i localStorage
if (localStorage.getItem("darkmode") === "true") {
    console.log("Dark mode is enabled from localStorage");
    darkmode();
} else if (localStorage.getItem("darkmode") === "false") {
    console.log("Dark mode is disabled from localStorage");
}
// Hvis ingen innstilling er lagret, sjekk systeminnstillingene
else if (window.matchMedia('(prefers-color-scheme: dark)').matches) { // denne linjen var skrevet av ChatGPT
    console.log("User prefers dark mode");
    darkmode();
}
// funksjon for å endre til dark mode
function darkmode() {
    console.log("Dark mode function triggered");
    document.body.classList.toggle("darkmode");
    const icons = document.getElementsByClassName("menyknapper");
    // Denne skrev KI v
    for (let i = 0; i < icons.length; i++) {
        let icon = icons[i];
        let src = icon.src;
        if (src.includes("white")) {
            icon.src = src.replace("white", "black");
        } else {
            icon.src = src.replace("black", "white");
        }
    }
    // Slutt på KI
    if (document.body.classList.contains("darkmode")) {
        localStorage.setItem("darkmode", "true");
    } else {
        localStorage.setItem("darkmode", "false");
    }
}

// Skrevet av KI v
// Funksjon for å fade ut siden så overganger ikke blir så brå
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault(); // stopp vanlig link
        document.body.classList.add("fade-out");
        setTimeout(() => {
            window.location = this.href; // bytt side etter 200ms
        }, 200); // tid i ms
    });
});

// funksjon for å fade inn siden så overganger ikke blir så brå
window.addEventListener("load", () => {
    document.body.classList.add("fade-in");
});


// Menyfunksjoner
function meny() {
    document.getElementById("menu").classList.toggle("hidden")
}