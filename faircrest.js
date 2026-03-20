// LOADER
window.addEventListener("load", () => {
    const loader = document.getElementById("loader-overlay");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 400);
});

// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal, .reveal-img")
.forEach(el => observer.observe(el));

// 🔥 SCROLL PROGRESS
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / height) * 100;

    document.querySelector(".scroll-progress").style.width = progress + "%";
});

// 🔥 BACK BUTTON BEHAVIOR
let lastScroll = 0;
const backBtn = document.querySelector(".btn-back-fixed");

window.addEventListener("scroll", () => {
    const current = window.scrollY;

    if (current > lastScroll && current > 100) {
        backBtn.classList.add("hide");
    } else {
        backBtn.classList.remove("hide");
    }

    lastScroll = current;
});

// 🔥 PARALLAX HERO
const heroImg = document.querySelector(".parallax img");

window.addEventListener("scroll", () => {
    if (!heroImg) return;

    const offset = window.scrollY * 0.2;
    heroImg.style.transform = `translateY(${offset}px)`;
});

// 🔥 IMAGE MODAL
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

// CLICK IMAGES
document.querySelectorAll(".case-image img").forEach(img => {
    img.addEventListener("click", () => {
        modal.classList.add("active");
        modalImg.src = img.src;
    });
});

// CLOSE MODAL
modal.addEventListener("click", () => {
    modal.classList.remove("active");
});