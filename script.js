document.addEventListener('DOMContentLoaded', () => {
  // Initialize GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  // Animate sections on scroll
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    gsap.fromTo(
      section, 
      { y: 50, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
  
  // Animate skill items with stagger
  const skillItems = document.querySelectorAll('.skills-list li');
  gsap.fromTo(
    skillItems, 
    { scale: 0.8, opacity: 0 }, 
    { 
      scale: 1, 
      opacity: 1, 
      duration: 0.4, 
      stagger: 0.05,
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
      duration: 0.6, 
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#projects',
        start: 'top 70%',
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
      }
    });
  }
  
  function showError(input, message) {
    const formControl = input.parentElement;
    const errorElement = document.createElement('small');
    errorElement.className = 'error-message';
    errorElement.style.color = '#ff6b6b';
    errorElement.style.display = 'block';
    errorElement.style.marginTop = '-1rem';
    errorElement.style.marginBottom = '1rem';
    errorElement.textContent = message;
    
    // Remove existing error messages
    const existingError = formControl.querySelector('.error-message');
    if (existingError) {
      formControl.removeChild(existingError);
    }
    
    formControl.insertBefore(errorElement, input.nextSibling);
    input.style.borderColor = '#ff6b6b';
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
});
