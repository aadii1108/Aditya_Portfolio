// ================= TYPING EFFECT =================

const typingText = document.getElementById("typing-text");

const words = [
    "Data Analyst",
    "SQL Developer",
    "Power BI Enthusiast",
    "Python Programmer",
    "Data Science Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1600);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );
}

typeEffect();


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, " +
    ".experience-card, .education-card, .certificate-card"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    observer.observe(element);
});


// ================= MOUSE GLOW =================

const cursorGlow =
    document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    if (!cursorGlow) return;

    cursorGlow.style.left =
        `${event.clientX}px`;

    cursorGlow.style.top =
        `${event.clientY}px`;
});


// ================= SCROLL PROGRESS =================

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const scrollPercentage =
        (scrollTop / documentHeight) * 100;

    const progress =
        document.querySelector(".scroll-progress");

    if (progress) {

        progress.style.width =
            `${scrollPercentage}%`;
    }
});


// ================= PROFILE PARALLAX =================

const profile =
    document.querySelector(".profile-circle");

if (profile) {

    document.addEventListener("mousemove", (event) => {

        if (window.innerWidth <= 850) return;

        const x =
            (window.innerWidth / 2 -
                event.clientX) / 90;

        const y =
            (window.innerHeight / 2 -
                event.clientY) / 90;

        profile.style.transform =
            `translate(${x}px, ${y}px)`;
    });
}