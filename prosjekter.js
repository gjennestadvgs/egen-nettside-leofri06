// Skrevet av KI
document.querySelectorAll('.prosjekt-kort').forEach(card => {
    card.addEventListener('click', function() {
        const id = this.id;
        const img = this.querySelector('img').src;
        const title = this.querySelector('h3').textContent;
        const desc = this.querySelector('p').textContent;
        prosjektModal(id, img, title, desc);
    });
});

function prosjektModal(ID, imgSrc, title, desc) {
    sessionStorage.setItem("prosjektImg", imgSrc);
    sessionStorage.setItem("prosjektTitle", title);
    sessionStorage.setItem("prosjektDesc", desc);    
    document.getElementById(ID).classList.add("scale");
    setTimeout(() => {
        document.body.classList.add("fade-out");
        setTimeout(() => {
            window.location = "prosjektDive.html"; // bytt side etter 200ms
    }, 200);}, 200); // tid i ms
}
function getProsjektModal() {
    const imgSrc = sessionStorage.getItem("prosjektImg");
    const title = sessionStorage.getItem("prosjektTitle");
    const desc = sessionStorage.getItem("prosjektDesc");
    document.getElementById("prosjektImg").src = imgSrc;
    document.getElementById("prosjektTitle").innerText = title;
    document.getElementById("prosjektDesc").innerText = desc;
}
window.addEventListener("load", getProsjektModal);
// slutt på KI

function goBack() {
    document.body.classList.add("fade-out");
    setTimeout(() => {
        window.location = "prosjekter.html"; // gå tilbake til forrige side etter 200ms
    }, 200); // tid i ms
}


// Hente informasjon om prosjekter fra en seperat fil
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const title = document.getElementById("prosjektTitle").textContent.trim();
        // Lag filnavn basert på tittel, f.eks. "Prosjekt 1" -> "prosjekt1.txt"
        const filename = title.toLowerCase().replace(/\s+/g, '') + ".txt";
        console.log(title)
        console.log(filename)
        fetch("tekstfiler/" + filename)
            .then(response => response.ok ? response.text() : "Fant ikke tekstfil.")
            .then(text => {
                document.getElementById("prosjektDescExtended").innerHTML = text.replace(/\n/g, "<br>");
            });
    }, 100);
});