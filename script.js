document.addEventListener('DOMContentLoaded', () => {
  // Set data-text attribute for name element
  const nameElement = document.querySelector('.name');
  if (nameElement) {
    nameElement.setAttribute('data-text', nameElement.textContent);
  }
  
  // Add decorative shapes to sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (section.id !== 'hero') {
      const shape1 = document.createElement('div');
      shape1.className = 'shape shape-1';
      
      const shape2 = document.createElement('div');
      shape2.className = 'shape shape-2';
      
      section.appendChild(shape1);
      section.appendChild(shape2);
    }
  });
  
  // Add hero background
  const hero = document.getElementById('hero');
  if (hero) {
    const heroBg = document.createElement('div');
    heroBg.className = 'hero-bg';
    hero.insertBefore(heroBg, hero.firstChild);
  }
  
  // Wrap profile pic in container
  const profilePic = document.querySelector('.profile-pic');
  if (profilePic && !profilePic.parentElement.classList.contains('profile-pic-container')) {
    const container = document.createElement('div');
    container.className = 'profile-pic-container';
    profilePic.parentNode.insertBefore(container, profilePic);
    container.appendChild(profilePic);
  }
  
  // Initialize GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  // Animate sections on scroll
  sections.forEach(section => {
    if (section.id !== 'hero') {
      gsap.fromTo(
        section, 
        { y: 80, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  });
  
  // Animate skill items with stagger
  const skillItems = document.querySelectorAll('.skills-list li');
  gsap.fromTo(
    skillItems, 
    { scale: 0.8, opacity: 0, y: 20 }, 
    { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      duration: 0.5, 
      stagger: 0.05,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: '.skills-list',
        start: 'top 80%',
      }
    }
  );
  
  // Animate projects with stagger
  const projects = document.querySelectorAll('.project');
  gsap.fromTo(
    projects, 
    { x: -50, opacity: 0 }, 
    { 
      x: 0, 
      opacity: 1, 
      duration: 0.8, 
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '#projects',
        start: 'top 70%',
      }
    }
  );
  
  // Animate certificates with stagger
  const certificates = document.querySelectorAll('#certificates li');
  gsap.fromTo(
    certificates, 
    { x: -30, opacity: 0 }, 
    { 
      x: 0, 
      opacity: 1, 
      duration: 0.6, 
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '#certificates',
        start: 'top 80%',
      }
    }
  );
  
  // Wrap transcript and volunteer images in container for better mobile display
  const transcriptImages = document.querySelectorAll('.transcript-img');
  transcriptImages.forEach(img => {
    // Only wrap if not already wrapped
    if (!img.parentElement.classList.contains('transcript-img-container')) {
      const container = document.createElement('div');
      container.className = 'transcript-img-container';
      container.style.maxWidth = '100%';
      container.style.overflow = 'auto';
      container.style.WebkitOverflowScrolling = 'touch';
      container.style.margin = '0 auto';
      
      img.parentNode.insertBefore(container, img);
      container.appendChild(img);
    }
  });
  
  // Animate transcript and volunteer images
  const images = document.querySelectorAll('.transcript-img');
  images.forEach(img => {
    gsap.fromTo(
      img, 
      { scale: 0.9, opacity: 0 }, 
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: 'top 80%',
        }
      }
    );
  });
  
  // Animate contact form elements
  const contactElements = document.querySelectorAll('.contact-form label, .contact-form input, .contact-form textarea, .contact-form button');
  gsap.fromTo(
    contactElements, 
    { y: 30, opacity: 0 }, 
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.6, 
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%',
      }
    }
  );
  
  // Animate social links
  const socialLinks = document.querySelectorAll('.contact-links a');
  gsap.fromTo(
    socialLinks, 
    { y: 30, opacity: 0 }, 
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.5, 
      stagger: 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: '.contact-links',
        start: 'top 90%',
      }
    }
  );
  
  // Form validation
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      let isValid = true;
      
      if (nameInput.value.trim() === '') {
        showError(nameInput, 'Please enter your name');
        isValid = false;
      } else {
        removeError(nameInput);
      }
      
      if (emailInput.value.trim() === '') {
        showError(emailInput, 'Please enter your email');
        isValid = false;
      } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email');
        isValid = false;
      } else {
        removeError(emailInput);
      }
      
      if (messageInput.value.trim() === '') {
        showError(messageInput, 'Please enter your message');
        isValid = false;
      } else {
        removeError(messageInput);
      }
      
      if (!isValid) {
        e.preventDefault();
      } else {
        // Show sending state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Reset after submission (for demo purposes)
        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        }, 2000);
      }
    });
  }
  
  // Add input focus effects
  const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused');
    });
  });
  
  function showError(input, message) {
    const formControl = input.parentElement;
    const errorElement = document.createElement('small');
    errorElement.className = 'error-message';
    errorElement.style.color = '#ff6b6b';
    errorElement.style.display = 'block';
    errorElement.style.marginTop = '-1rem';
    errorElement.style.marginBottom = '1rem';
    errorElement.style.textAlign = 'left';
    errorElement.textContent = message;
    
    // Remove existing error messages
    const existingError = formControl.querySelector('.error-message');
    if (existingError) {
      formControl.removeChild(existingError);
    }
    
    formControl.insertBefore(errorElement, input.nextSibling);
    input.style.borderColor = '#ff6b6b';
    
    // Shake animation
    gsap.fromTo(
      input, 
      { x: -10 }, 
      { x: 0, duration: 0.1, ease: "elastic.out(1, 0.3)", clearProps: "x" }
    );
  }
  
  function removeError(input) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error-message');
    if (errorElement) {
      formControl.removeChild(errorElement);
    }
    input.style.borderColor = '';
  }
  
  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  // Parallax effect for hero section
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        const heroContent = document.querySelector('.hero-content');
        heroContent.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        
        const heroBg = document.querySelector('.hero-bg');
        heroBg.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    });
  }
  
  // Typing effect for tagline (optional)
  const tagline = document.querySelector('.tagline');
  if (tagline && window.innerWidth > 768) {
    const text = tagline.textContent;
    tagline.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    
    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
  }
});
