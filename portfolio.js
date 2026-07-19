// ===============================
// Portfolio JavaScript
// ===============================

// Navbar Links Active
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

// ===============================
// Typing Effect
// ===============================

const texts = [
    "Frontend Developer",
    "Web Developer",
    "Java Programmer",
    "Python Learner"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const heading = document.querySelector(".home-text h2");

function typeEffect() {

    if (!heading) return;

    const current = texts[textIndex];

    if (!isDeleting) {
        heading.textContent = current.substring(0, charIndex++);
    } else {
        heading.textContent = current.substring(0, charIndex--);
    }

    if (!isDeleting && charIndex === current.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1200);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex++;

        if (textIndex === texts.length) {
            textIndex = 0;
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#00abf0";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 0 15px #00abf0";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// Fade Animation
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "1s";

    observer.observe(section);

});

// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank You! Your message has been received.");

        form.reset();

    });

}

// ===============================
// Welcome Message
// ===============================

console.log("Welcome to Muskan Portfolio");