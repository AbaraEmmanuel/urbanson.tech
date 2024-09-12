// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    gsap.from(".profile-pic", { duration: 2, x: -200, opacity: 0, ease: "power2.out" });
    gsap.from(".hero-text", { duration: 2, x: 200, opacity: 0, delay: 1, ease: "power2.out" });
    gsap.from(".cta-button", { duration: 1, scale: 0.8, opacity: 0, delay: 2.5 });
    
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

    // Dynamic Background Effect
    document.addEventListener('mousemove', (event) => {
        const x = (event.clientX / window.innerWidth) * 100;
        const y = (event.clientY / window.innerHeight) * 100;
        document.body.style.background = `linear-gradient(${x}deg, #0a192f, #1d2a44)`;
    });
});
