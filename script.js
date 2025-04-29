// /script.js
document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 2000) {
    const animateHero = () => {
      const profile = document.querySelector(".profile-pic");
      const heroText = document.querySelector(".hero-text");
      const cta = document.querySelector(".cta-buttons");

      if (profile) gsap.from(profile, { duration: 2, x: -200, opacity: 0, ease: "power2.out" });
      if (heroText) gsap.from(heroText, { duration: 2, x: 200, opacity: 0, delay: 1, ease: "power2.out" });
      if (cta) gsap.from(cta, { duration: 1, scale: 0.8, opacity: 0, delay: 2.2 });
    };

    animateHero();

    const circle = document.createElement('div');
    circle.id = 'mouse-circle';
    document.body.appendChild(circle);

    document.addEventListener('mousemove', (event) => {
      circle.style.left = `${event.clientX}px`;
      circle.style.top = `${event.clientY}px`;
    });
  }
});
