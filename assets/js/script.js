// auto typing
let typed = new Typed('.position', {
    strings: ["Full-Stack Developer", "and Student Informatics Engineering", "at Universitas Komputer Indonesia"],
    backSpeed: 50,
    typeSpeed: 70,
    loop: true
});

// Navbar effects scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});