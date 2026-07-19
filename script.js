// =========================
// Smooth Scroll for Navbar
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});

// =========================
// Navbar Shadow on Scroll
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.4)";

    }

    else {

        header.style.boxShadow = "none";

    }

});

// =========================
// Fade Animation on Scroll
// =========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

sections.forEach(section => {

    observer.observe(section);

});

// =========================
// Skill Card Hover Effect
// =========================

const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {

    skill.addEventListener("mouseenter", () => {

        skill.style.transform = "scale(1.08)";

    });

    skill.addEventListener("mouseleave", () => {

        skill.style.transform = "scale(1)";

    });

});

// =========================
// Button Click Animation
// =========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.style.transform = "scale(0.95)";

        setTimeout(() => {

            btn.style.transform = "scale(1)";

        }, 150);

    });

});

// =========================
// Welcome Message
// =========================

console.log("Welcome to Priya's Portfolio 🚀");
