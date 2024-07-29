// Set the color of the under-button text
document.documentElement.style.setProperty('--under-button-text-color', '#FFD700');

// GSAP animations
document.addEventListener('DOMContentLoaded', function() {
    gsap.from(".hero-content", {duration: 1, y: 30, opacity: 0, ease: "power3.out"});
    gsap.from(".contact", {duration: 1, y: 30, opacity: 0, ease: "power3.out", delay: 0.5});
});

// Add any additional JavaScript functionality here