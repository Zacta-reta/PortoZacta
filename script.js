// Slider
let currentSlide = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const buttons = document.querySelectorAll('.slider-nav button');
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'flex' : 'none';
    });
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[index].classList.add('active');
    currentSlide = index;
}

const slides = document.querySelectorAll('.slide');
slides.forEach((slide, i) => {
    slide.style.display = i === 0 ? 'flex' : 'none';
});

// Navbar
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
});

// Navbar Mobile
function toggleMenu() {
    const menu =document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
}
function closeMenu() {
    const menu =document.querySelector('.navbar-menu');
    menu.classList.remove('active');

}

// Darkmode / Lightmode
function toggleDarkMode () {
    document.body.classList.toggle('darkmode');
    const icon = document.querySelector('.darkmode-toggle');
    const text = document.querySelector('.dark-mode-text p');
    if (document.body.classList.contains('darkmode')) {
        icon.textContent = 'Klik disini untuk mode terang';
        text.textContent = 'Lebih nyaman dengan mode terang?';
    } else {
        icon.textContent = 'Klik disini untuk mode gelap';
        text.textContent = 'Lebih nyaman dengan mode gelap?';
    }

    }

// dropdown 
function toggleSection(sectionId, otherSectionId, titleId) {
    const section = document.getElementById(sectionId);
    const otherSection = document.getElementById(otherSectionId);
    const title = document.getElementById(titleId);
    if (section.style.display === "none") {
        section.style.display = "block";
        title.classList.add("active");
        if (otherSection) {
            otherSection.style.display = "none";
            const otherTitle = document.getElementById(otherSectionId + "-title");
            otherTitle.classList.remove("active");
        }
    } else {
        section.style.display = "none";
        title.classList.remove("active");
    }
}

document.getElementById("quote-title").addEventListener("click", function(){
    toggleSection("quote", "social", "quote-title");
});

document.getElementById("social-title").addEventListener("click", function(){
    toggleSection("social", "quote", "social-title");
});