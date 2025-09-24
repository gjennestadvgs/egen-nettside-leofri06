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