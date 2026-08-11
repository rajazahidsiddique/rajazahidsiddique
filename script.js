const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

if (menu) {
    menu.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

document.querySelectorAll("#navlinks a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
