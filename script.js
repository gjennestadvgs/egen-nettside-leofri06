function darkmode() {
    document.body.classList.toggle("darkmode");
    const icon = document.getElementById("darkmodeicon");
    const logo = document.getElementById("gjennestadlogo");
    const goBackButton = document.querySelector(".goBackButton");
    if (document.body.classList.contains("darkmode")) {
        icon.src="images/icons/sun_white.svg";
        logo.src="images/gjennestadlogo_white.png";
        goBackButton.src="images/icons/goback_white.svg";
    }
    else {
        document.body.classList.add("lightmode");
        icon.src="images/icons/sun_black.svg";
        logo.src="images/gjennestadlogo_black.png";
        goBackButton.src="images/icons/goback_black.svg";
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

function prosjektModal(ID, imgSrc, title, desc) {
    localStorage.clear();
    localStorage.setItem("prosjektImg", imgSrc);
    localStorage.setItem("prosjektTitle", title);
    localStorage.setItem("prosjektDesc", desc);    
    document.getElementById(ID).classList.add("scale");
    setTimeout(() => {
        document.body.classList.add("fade-out");
        setTimeout(() => {
            window.location = "prosjektDive.html"; // bytt side etter 200ms
    }, 200);}, 200); // tid i ms
}
function getProsjektModal() {
    const imgSrc = localStorage.getItem("prosjektImg");
    const title = localStorage.getItem("prosjektTitle");
    const desc = localStorage.getItem("prosjektDesc");
    document.getElementById("prosjektImg").src = imgSrc;
    document.getElementById("prosjektTitle").innerText = title;
    document.getElementById("prosjektDesc").innerText = desc;
}
window.addEventListener("load", getProsjektModal);

function storageClear() {
    localStorage.clear();
}

function goBack() {
    document.body.classList.add("fade-out");
    setTimeout(() => {
        window.history.back(); // gå tilbake til forrige side etter 200ms
        localStorage.clear();
    }, 200); // tid i ms
}