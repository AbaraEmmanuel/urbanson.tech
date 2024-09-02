// GSAP for smooth scroll animations
gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', () => {
    // Vanta.js background effect
    VANTA.WAVES({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x007bff,
        shininess: 50.00
    });

    // Initialize Lottie animations
    document.querySelectorAll('.lottie').forEach((element) => {
        lottie.loadAnimation({
            container: element,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: element.dataset.animationPath
        });
    });
});
