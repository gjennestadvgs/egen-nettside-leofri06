// funksjon for å endre til dark mode
function darkmode() {
    document.body.classList.toggle("darkmode");
    const icon = document.getElementById("darkmodeicon");
    const logo = document.getElementById("gjennestadlogo");
    if (document.body.classList.contains("darkmode")) {
        icon.src="images/icons/sun_white.svg";
        logo.src="images/gjennestadlogo_white.png";
    }
    else {
        icon.src="images/icons/sun_black.svg";
        logo.src="images/gjennestadlogo_black.png";
    }
    localStorage.setItem("darkMode", document.body.classList.contains("darkmode")); // Brukte litt autofill, men forstår konseptet
}
// Kode under skrevet av ChatGPT

// Sjekk om brukeren foretrekker dark mode
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkmode(); // Denne skrev jeg inn selv
}

// Slutt på ChatGPT

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