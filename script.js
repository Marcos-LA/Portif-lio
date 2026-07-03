/* =====================================================
LOADER
===================================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector("#loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.pointerEvents = "none";

        }, 1200);

    }

});

/* =====================================================
HEADER SCROLL
===================================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});

/* =====================================================
TYPING EFFECT
===================================================== */

const typing = document.querySelector("#typing");

if (typing) {

    const texts = [
        "Analista de Sistemas",
        "Automação em Python",
        "Infraestrutura de TI"
    ];

    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    function type() {

        currentText = texts[index];

        if (!isDeleting) {

            typing.textContent = currentText.substring(0, charIndex++);

            if (charIndex > currentText.length) {

                isDeleting = true;

                setTimeout(type, 1200);

                return;

            }

        } else {

            typing.textContent = currentText.substring(0, charIndex--);

            if (charIndex < 0) {

                isDeleting = false;

                index = (index + 1) % texts.length;

            }

        }

        setTimeout(type, isDeleting ? 60 : 100);

    }

    type();

}

/* =====================================================
CURSOR CUSTOM
===================================================== */

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {

    if (!cursor) return;

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

/* =====================================================
GSAP ANIMATIONS
===================================================== */

gsap.from(".hero-left", {

    opacity: 0,
    x: -100,
    duration: 1

});

gsap.from(".hero-right", {

    opacity: 0,
    x: 100,
    duration: 1

});

/* =====================================================
SCROLL ANIMATIONS
===================================================== */

gsap.utils.toArray("section").forEach((section) => {

    gsap.from(section, {

        opacity: 0,
        y: 60,

        scrollTrigger: {

            trigger: section,
            start: "top 80%",

        },

        duration: 1

    });

});

/* =====================================================
COUNTERS
===================================================== */

const counters = document.querySelectorAll(".stat h2");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.innerText.replace("+", "");

        const value = +counter.getAttribute("data-target") || target;

        let current = +counter.innerText.replace("+", "");

        const increment = value / 100;

        if (current < value) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(update, 20);

        } else {

            counter.innerText = value + "+";

        }

    };

    update();

});

/* =====================================================
VANILLA TILT (CARDS 3D)
===================================================== */

if (window.VanillaTilt) {

    VanillaTilt.init(document.querySelectorAll(".project, .skill-card, .service-card"), {

        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2

    });

}

/* =====================================================
SCROLL TO TOP
===================================================== */

const scrollBtn = document.getElementById("scrollTop");

if (scrollBtn) {

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/* =====================================================
ACTIVE MENU LINK
===================================================== */

const links = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let scrollPos = window.scrollY + 200;

    links.forEach(link => {

        let section = document.querySelector(link.getAttribute("href"));

        if (section) {

            if (

                scrollPos >= section.offsetTop &&
                scrollPos < section.offsetTop + section.offsetHeight

            ) {

                links.forEach(l => l.classList.remove("active"));

                link.classList.add("active");

            }

        }

    });

});
