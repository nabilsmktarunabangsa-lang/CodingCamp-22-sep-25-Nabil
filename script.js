// ========== Navbar Active ========== //
let navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});

// ========== Typing Effect ========== //
const typingText = document.querySelector(".typing-text span");
const roles = [" Designer", " Frontend", " Beginner Coder"];
let roleIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < roles[roleIndex].length) {
        typingText.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 300);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    typeEffect();
});

// ========== Scroll Reveal Animation ========== //
const revealElements = document.querySelectorAll(".home-content, .home-img, nav a, .social-icons, .btn");

function revealOnScroll() {
    let windowHeight = window.innerHeight;
    let revealPoint = 100;

    revealElements.forEach(el => {
        let revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add("active-scroll");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
