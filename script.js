function darkmode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode")); // Brukte litt autofill, men forstår konseptet
}