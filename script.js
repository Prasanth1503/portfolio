/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */

"use strict";


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        if (navMenu.classList.contains("open")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });


    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuBtn.textContent = "☰";

        });

    });

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNav);


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   SKILL BAR ANIMATION
========================================= */

const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const bar = entry.target;

                const width = bar.getAttribute("data-width");

                bar.style.width = width;

                observer.unobserve(bar);

            }

        });

    },

    {
        threshold: 0.5
    }

);

skillBars.forEach(bar => {

    skillObserver.observe(bar);

});


/* =========================================
   SCROLL TO TOP
========================================= */

const scrollTopButton = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

});


scrollTopButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();


        if (!name || !email || !subject || !message) {

            formMessage.textContent =
                "Please fill in all fields.";

            return;

        }


        /*
         * This opens the user's email application.
         * No backend server is required.
         */

        const mailTo =
            "mailto:prasanthanandhan814@gmail.com" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(
                "Name: " + name +
                "\nEmail: " + email +
                "\n\nMessage:\n" + message
            );


        window.location.href = mailTo;


        formMessage.textContent =
            "Opening your email application...";

    });

}


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================
   TYPING EFFECT
========================================= */

const typingElement =
    document.querySelector(".typing-text");

const typingWords = [
    "Data Analytics Enthusiast",
    "Python Programmer",
    "SQL Learner",
    "UI/UX Designer"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingElement) {
        return;
    }


    const currentWord =
        typingWords[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= typingWords.length) {
                wordIndex = 0;
            }

        }

    }


    const speed = deleting ? 50 : 90;

    setTimeout(typeEffect, speed);

}


typeEffect();
