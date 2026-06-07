const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop - 150 &&
            window.scrollY < sectionTop + sectionHeight - 150
        ) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }
    });

});

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    console.log(navMenu);
    console.log(navMenu.className);
});