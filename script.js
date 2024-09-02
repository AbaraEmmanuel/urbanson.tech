// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    gsap.from(".name", { duration: 2, y: -100, opacity: 0, ease: "bounce" });
    gsap.from(".tagline", { duration: 1.5, x: 100, opacity: 0, delay: 1 });
    gsap.from(".cta-button", { duration: 1, scale: 0.8, opacity: 0, delay: 1.5 });

    // Initialize Lottie Animations
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
