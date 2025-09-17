function darkmode() {
    document.body.classList.toggle("darkmode");
    const icon = document.getElementById("darkmodeicon");
    if (document.body.classList.contains("darkmode")) {
        icon.src="images/icons/sun_white.svg";
    }
    else {
        icon.src="images/icons/sun_black.svg";
    }
    localStorage.setItem("darkMode", document.body.classList.contains("darkmode")); // Brukte litt autofill, men forstår konseptet
}