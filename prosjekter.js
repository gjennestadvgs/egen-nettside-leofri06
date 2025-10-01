// All Javascript her er helt eller for det meste generert av KI
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
            window.location = "prosjektDive.html"; // bytter til prosjektDive.html etter 200ms
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


function goBack() {
    document.body.classList.add("fade-out");
    setTimeout(() => {
        window.location = "prosjekter.html"; // gå tilbake til prosjekter-siden etter 200ms
    }, 200); // tid i ms
}


// Hente informasjon om prosjekter fra en txt fil
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const title = document.getElementById("prosjektTitle").textContent.trim();
        document.getElementById("tittel").innerHTML = title
        // Lag filnavn basert på tittel, f.eks. "Prosjekt 1" -> "prosjekt1.txt"
        const filename = title.toLowerCase().replace(/\s+/g, '') + ".txt";
        fetch("tekstfiler/" + filename)
            .then(response => response.ok ? response.text() : "Fant ikke tekstfil.")
            .then(text => {
                document.getElementById("prosjektDescExtended").innerHTML = text.replace(/\n/g, "<br>");
            });
    }, 100);
});

/* Funksjon for å forstørre bildet (Generert av KI) */
document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById("prosjektImg");
    const popup = document.getElementById("imgPopup");
    const popupImg = document.getElementById("popupImg");

    let zoom = 1;

    if (img && popup && popupImg) {
        img.addEventListener("click", function() {
            popupImg.src = img.src;
            popupImg.style.transform = "scale(1)";
            popupImg.style.transformOrigin = "50% 50%";
            zoom = 1;
            popup.classList.add("open");
        });
        popup.addEventListener("click", function() {
            popup.classList.remove("open");
        });
        popupImg.addEventListener("wheel", function(e) {
            e.preventDefault();
            const rect = popupImg.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            popupImg.style.transformOrigin = `${x}% ${y}%`;

            const maxZoom = 3;
            const minZoom = 0.5;

            if (e.deltaY < 0 && zoom < maxZoom) {
                zoom = Math.min(zoom + 0.2, maxZoom);
                popupImg.style.transform = `scale(${zoom})`;
            } else if (e.deltaY > 0 && zoom > minZoom) {
                zoom = Math.max(zoom - 0.2, minZoom);
                popupImg.style.transform = `scale(${zoom})`;
            }
            // Hvis zoom er på grensen, gjør ingenting
        });
    }
});