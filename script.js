// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations for different elements
    gsap.from(".profile-pic", {
        duration: 2,
        x: -200,
        opacity: 0,
        ease: "power2.out"
    });
    gsap.from(".hero-text", {
        duration: 2,
        x: 200,
        opacity: 0,
        delay: 1,
        ease: "power2.out"
    });
    gsap.from(".cta-button", {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        delay: 2.2
    });

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
        const x = (event.clientX / window.innerWidth) * 180; // Full rotation for more variation
        const y = (event.clientY / window.innerHeight) * 50;
        document.body.style.background = `linear-gradient(${x}deg, #003366, #004080 ${y}%, #003366)`;
    });

    // Mouse Circle Effect
    const circle = document.createElement('div');
    circle.id = 'mouse-circle';
    document.body.appendChild(circle);

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        circle.style.left = `${mouseX}px`;
        circle.style.top = `${mouseY}px`;
    });
});
