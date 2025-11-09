// Telugu Gadapa Theme - Magical Interactions

window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  setTimeout(() => {
    preloader.classList.add('hidden');
    initAnimations();
  }, 2000);
});

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isOpen);
    navMenu.classList.toggle('active');
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  });
});

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
});

const sections = document.querySelectorAll('.section');
const observerOptions = {
  threshold: 0.3,
  rootMargin: '-100px 0px -50% 0px'
};

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => navObserver.observe(section));

const canvas = document.getElementById('petalCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;

if (canvas && ctx) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  
  class Petal {
    constructor() {
      this.reset();
      this.y = Math.random() * canvas.height;
      this.rotation = Math.random() * 360;
    }
    
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = -20;
      this.size = Math.random() * 6 + 3;
      this.speed = Math.random() * 1.5 + 0.5;
      this.drift = Math.random() * 2 - 1;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = Math.random() * 4 - 2;
      
      const colors = [
        'rgba(242, 195, 65, 0.7)',
        'rgba(204, 51, 51, 0.6)',
        'rgba(255, 255, 255, 0.5)',
        'rgba(45, 122, 62, 0.5)'
      ];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    
    update() {
      this.y += this.speed;
      this.x += this.drift;
      this.rotation += this.rotationSpeed;
      
      if (this.y > canvas.height + 20) {
        this.reset();
      }
      if (this.x < -20 || this.x > canvas.width + 20) {
        this.x = Math.random() * canvas.width;
      }
    }
    
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation * Math.PI / 180);
      
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size, this.size * 1.8, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    }
  }
  
  const petals = Array.from({ length: 40 }, () => new Petal());
  
  function animatePetals() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(petal => {
      petal.update();
      petal.draw();
    });
    requestAnimationFrame(animatePetals);
  }
  
  animatePetals();
}

function initAnimations() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.from('.heritage-card', {
    scrollTrigger: {
      trigger: '.heritage-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  });
  
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach(stat => {
    const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
    const suffix = stat.textContent.replace(/[0-9]/g, '');
    
    ScrollTrigger.create({
      trigger: stat,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        let count = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          count += increment;
          if (count >= target) {
            count = target;
            clearInterval(timer);
          }
          stat.textContent = Math.floor(count).toLocaleString() + suffix;
        }, 16);
      }
    });
  });
  
  gsap.from('.venue-card', {
    scrollTrigger: {
      trigger: '.venues-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    y: 80,
    opacity: 0,
    duration: 0.9,
    stagger: 0.25,
    ease: 'power3.out'
  });
  
  gsap.from('.service-card', {
    scrollTrigger: {
      trigger: '.services-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: 'back.out(1.5)'
  });
  
  gsap.from('.gallery-item', {
    scrollTrigger: {
      trigger: '.gallery-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    scale: 0.7,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: 'power2.out'
  });
}

const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentImageIndex = 0;
const images = Array.from(galleryItems);

function openLightbox(index) {
  currentImageIndex = index;
  const imgSrc = images[index].querySelector('.gallery-img').src;
  lightboxImg.src = imgSrc;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
  images[currentImageIndex].focus();
}

function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  const imgSrc = images[currentImageIndex].querySelector('.gallery-img').src;
  lightboxImg.src = imgSrc;
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  const imgSrc = images[currentImageIndex].querySelector('.gallery-img').src;
  lightboxImg.src = imgSrc;
}

galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => openLightbox(index));
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(index);
    }
  });
});

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevImage);
if (lightboxNext) lightboxNext.addEventListener('click', showNextImage);

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'ArrowLeft') showPrevImage();
  else if (e.key === 'ArrowRight') showNextImage();
});

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
let currentTestimonial = 0;
let testimonialInterval;

function showTestimonial(index) {
  testimonialCards.forEach(card => card.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  if (testimonialCards[index]) testimonialCards[index].classList.add('active');
  if (dots[index]) dots[index].classList.add('active');
  currentTestimonial = index;
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
  showTestimonial(currentTestimonial);
}

function startTestimonialAutoplay() {
  testimonialInterval = setInterval(nextTestimonial, 5000);
}

function stopTestimonialAutoplay() {
  clearInterval(testimonialInterval);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showTestimonial(index);
    stopTestimonialAutoplay();
    startTestimonialAutoplay();
  });
});

showTestimonial(0);
startTestimonialAutoplay();

const testimonialsSlider = document.querySelector('.testimonials-slider');
if (testimonialsSlider) {
  testimonialsSlider.addEventListener('mouseenter', stopTestimonialAutoplay);
  testimonialsSlider.addEventListener('mouseleave', startTestimonialAutoplay);
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    if (!data.name || !data.phone || !data.email) {
      showToast('Please fill in all required fields', 'error');
      return;
    }
    showToast('🙏 Request received! We will contact you soon. మంగళం!', 'success');
    contactForm.reset();
    console.log('Form data:', data);
  });
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: ${type === 'success' ? 'linear-gradient(135deg, #F2C341, #CC3333)' : '#CC3333'};
    color: #1C0F0A;
    padding: 1.2rem 2.5rem;
    border-radius: 50px;
    font-weight: 600;
    box-shadow: 0 10px 40px rgba(242, 195, 65, 0.4);
    z-index: 9999;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  `;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.transform = 'translateX(-50%) translateY(0)'; }, 100);
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(100px)';
    setTimeout(() => toast.remove(), 500);
  }, 4000);
}

const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    if (backToTop) backToTop.classList.add('visible');
  } else {
    if (backToTop) backToTop.classList.remove('visible');
  }
});

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-book, .btn-venue, .btn-submit');
magneticButtons.forEach(button => {
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translate(0, 0)';
  });
});

const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
formInputs.forEach(input => {
  input.addEventListener('focus', () => { input.parentElement.style.transform = 'translateX(5px)'; });
  input.addEventListener('blur', () => { input.parentElement.style.transform = 'translateX(0)'; });
});

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector('.hero-content');
  const heroAura = document.querySelector('.hero-aura');
  if (heroContent) {
    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroContent.style.opacity = 1 - (scrolled / 700);
  }
  if (heroAura) {
    heroAura.style.transform = `translate(-50%, -50%) scale(${1 + scrolled * 0.001})`;
  }
});

console.log('%c🌸 గడప నుండి గంధం వరకు 🌸', 'color: #F2C341; font-size: 24px; font-weight: bold;');
console.log('%cWelcome to Telugu Heritage Banquet Halls', 'color: #CC3333; font-size: 16px; font-weight: 600;');
