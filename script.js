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

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault(); // stopp vanlig link
        document.body.classList.add("fade-out");
        setTimeout(() => {
            window.location = this.href; // bytt side etter 200ms
        }, 200); // tid i ms
    });
});

window.addEventListener("load", () => {
    document.body.classList.add("fade-in");
});