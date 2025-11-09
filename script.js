// ========================================
// PARTICLE SYSTEM
// ========================================
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particles');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 80;
        this.mouse = { x: null, y: null, radius: 150 };
        
        this.init();
        this.animate();
        this.setupEventListeners();
    }
    
    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                color: `rgba(${102 + Math.random() * 50}, ${126 + Math.random() * 50}, ${234}, ${Math.random() * 0.5 + 0.3})`
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((particle, i) => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Boundary check
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Mouse interaction
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < this.mouse.radius && this.mouse.x !== null) {
                const angle = Math.atan2(dy, dx);
                particle.vx -= Math.cos(angle) * 0.05;
                particle.vy -= Math.sin(angle) * 0.05;
            }
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.fill();
            
            // Connect particles
            this.particles.slice(i + 1).forEach(other => {
                const dx = particle.x - other.x;
                const dy = particle.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(102, 126, 234, ${0.2 * (1 - distance / 100)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(other.x, other.y);
                    this.ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(() => this.animate());
    }
    
    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
        
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
        
        window.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }
}

// ========================================
// NAVIGATION
// ========================================
class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        });
        
        // Hamburger menu
        this.hamburger.addEventListener('click', () => {
            this.hamburger.classList.toggle('active');
            this.navMenu.classList.toggle('active');
        });
        
        // Close menu on link click
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.hamburger.classList.remove('active');
                this.navMenu.classList.remove('active');
                
                // Update active link
                this.navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
        
        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    // Instant visual feedback
                    this.navLinks.forEach(l => l.classList.remove('active'));
                    anchor.classList.add('active');
                    
                    // Fast smooth scroll
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ========================================
// STATS COUNTER
// ========================================
class StatsCounter {
    constructor() {
        this.stats = document.querySelectorAll('.stat-number');
        this.hasAnimated = false;
        this.setupObserver();
    }
    
    setupObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.animateStats();
                    this.hasAnimated = true;
                }
            });
        }, { threshold: 0.5 });
        
        this.stats.forEach(stat => observer.observe(stat));
    }
    
    animateStats() {
        this.stats.forEach(stat => {
            const target = parseFloat(stat.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    stat.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    if (target === 4.9) {
                        stat.textContent = target.toFixed(1);
                    } else {
                        stat.textContent = target.toLocaleString() + '+';
                    }
                }
            };
            
            updateCounter();
        });
    }
}

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================
class AnimationObserver {
    constructor() {
        this.setupObserver();
    }
    
    setupObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('fade-in');
            observer.observe(section);
        });
        
        // Observe cards
        document.querySelectorAll('.venue-card, .event-card, .testimonial-card, .gallery-item').forEach(card => {
            card.classList.add('fade-in');
            observer.observe(card);
        });
    }
}

// ========================================
// GALLERY
// ========================================
class Gallery {
    constructor() {
        this.items = document.querySelectorAll('.gallery-item');
        this.setupLightbox();
    }
    
    setupLightbox() {
        this.items.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                this.openLightbox(img.src);
            });
        });
    }
    
    openLightbox(src) {
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="${src}" alt="Gallery Image">
            </div>
        `;
        
        // Add styles
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        `;
        
        const content = lightbox.querySelector('.lightbox-content');
        content.style.cssText = `
            position: relative;
            max-width: 90%;
            max-height: 90%;
        `;
        
        const img = lightbox.querySelector('img');
        img.style.cssText = `
            width: 100%;
            height: 100%;
            object-fit: contain;
        `;
        
        const close = lightbox.querySelector('.lightbox-close');
        close.style.cssText = `
            position: absolute;
            top: -40px;
            right: 0;
            font-size: 40px;
            color: white;
            cursor: pointer;
            transition: color 0.3s;
        `;
        
        close.addEventListener('mouseenter', () => {
            close.style.color = '#FF6B9D';
        });
        
        close.addEventListener('mouseleave', () => {
            close.style.color = 'white';
        });
        
        // Close on click
        close.addEventListener('click', () => {
            lightbox.remove();
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.remove();
            }
        });
        
        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                lightbox.remove();
            }
        });
        
        document.body.appendChild(lightbox);
    }
}

// ========================================
// 3D TILT EFFECT
// ========================================
class TiltEffect {
    constructor() {
        this.cards = document.querySelectorAll('[data-tilt]');
        this.setupTilt();
    }
    
    setupTilt() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }
}

// ========================================
// TESTIMONIALS SLIDER
// ========================================
class TestimonialsSlider {
    constructor() {
        this.slider = document.querySelector('.testimonials-slider');
        this.cards = document.querySelectorAll('.testimonial-card');
        this.currentIndex = 0;
        
        if (window.innerWidth < 768) {
            this.setupAutoSlide();
        }
    }
    
    setupAutoSlide() {
        setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.cards.length;
            this.slider.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        }, 5000);
    }
}

// ========================================
// BACK TO TOP BUTTON
// ========================================
class BackToTop {
    constructor() {
        this.button = document.getElementById('backToTop');
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                this.button.classList.add('visible');
            } else {
                this.button.classList.remove('visible');
            }
        });
        
        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ========================================
// FORM HANDLING
// ========================================
class FormHandler {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Create success message
            const message = document.createElement('div');
            message.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px 50px;
                border-radius: 15px;
                font-size: 18px;
                font-weight: 600;
                z-index: 10000;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                animation: fadeInUp 0.5s ease;
            `;
            message.innerHTML = `
                <div style="text-align: center;">
                    <div style="font-size: 48px; margin-bottom: 15px;">🎉</div>
                    <div>Thank you for your inquiry!</div>
                    <div style="font-size: 14px; margin-top: 10px; opacity: 0.9;">We'll get back to you soon.</div>
                </div>
            `;
            
            document.body.appendChild(message);
            
            // Reset form
            this.form.reset();
            
            // Remove message after 3 seconds
            setTimeout(() => {
                message.style.animation = 'fadeOut 0.5s ease';
                setTimeout(() => message.remove(), 500);
            }, 3000);
        });
    }
}

// ========================================
// PARALLAX EFFECT
// ========================================
class ParallaxEffect {
    constructor() {
        this.hero = document.querySelector('.hero');
        this.setupParallax();
    }
    
    setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (this.hero && scrolled < window.innerHeight) {
                this.hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }
}

// ========================================
// CURSOR EFFECT
// ========================================
class CursorEffect {
    constructor() {
        this.cursor = document.createElement('div');
        this.cursorFollower = document.createElement('div');
        this.setupCursor();
    }
    
    setupCursor() {
        // Main cursor
        this.cursor.style.cssText = `
            width: 10px;
            height: 10px;
            background: #FF6B9D;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 10000;
            transition: transform 0.1s ease;
            mix-blend-mode: difference;
        `;
        
        // Cursor follower
        this.cursorFollower.style.cssText = `
            width: 40px;
            height: 40px;
            border: 2px solid rgba(255, 107, 157, 0.5);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(this.cursor);
        document.body.appendChild(this.cursorFollower);
        
        // Update cursor position
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = e.clientX + 'px';
            this.cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                this.cursorFollower.style.left = (e.clientX - 20) + 'px';
                this.cursorFollower.style.top = (e.clientY - 20) + 'px';
            }, 100);
        });
        
        // Scale cursor on clickable elements
        document.querySelectorAll('a, button, .venue-card, .event-card, .gallery-item').forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.style.transform = 'scale(1.5)';
                this.cursorFollower.style.transform = 'scale(1.5)';
            });
            
            el.addEventListener('mouseleave', () => {
                this.cursor.style.transform = 'scale(1)';
                this.cursorFollower.style.transform = 'scale(1)';
            });
        });
        
        // Hide default cursor on desktop
        if (window.innerWidth > 768) {
            document.body.style.cursor = 'none';
            document.querySelectorAll('a, button').forEach(el => {
                el.style.cursor = 'none';
            });
        }
    }
}

// ========================================
// LOADING SCREEN
// ========================================
class LoadingScreen {
    constructor() {
        this.createLoader();
    }
    
    createLoader() {
        const loader = document.createElement('div');
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #0F0F1E 0%, #1A1A2E 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100000;
            transition: opacity 0.5s ease;
        `;
        
        loader.innerHTML = `
            <div style="text-align: center;">
                <div style="font-family: 'Playfair Display', serif; font-size: 48px; font-weight: 800; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 20px;">
                    S V BANQUET HALLS
                </div>
                <div style="width: 200px; height: 4px; background: rgba(255, 255, 255, 0.1); border-radius: 2px; overflow: hidden; margin: 0 auto;">
                    <div style="width: 0; height: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); animation: loading 2s ease forwards;"></div>
                </div>
            </div>
        `;
        
        // Add loading animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes loading {
                to { width: 100%; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(loader);
        
        // Remove loader after page loads
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => loader.remove(), 500);
            }, 1500);
        });
    }
}

// ========================================
// INITIALIZE ALL MODULES
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    new LoadingScreen();
    new ParticleSystem();
    new Navigation();
    new StatsCounter();
    new AnimationObserver();
    new Gallery();
    new TiltEffect();
    new TestimonialsSlider();
    new BackToTop();
    new FormHandler();
    new ParallaxEffect();
    
    // Only add cursor effect on desktop
    if (window.innerWidth > 768) {
        new CursorEffect();
    }
    
    // Add random floating elements
    createFloatingElements();
});

// ========================================
// FLOATING ELEMENTS
// ========================================
function createFloatingElements() {
    const shapes = ['✨', '💫', '⭐', '🌟'];
    
    setInterval(() => {
        const shape = document.createElement('div');
        shape.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        shape.style.cssText = `
            position: fixed;
            bottom: -50px;
            left: ${Math.random() * 100}%;
            font-size: ${Math.random() * 20 + 20}px;
            opacity: ${Math.random() * 0.5 + 0.3};
            pointer-events: none;
            z-index: 1;
            animation: floatUp ${Math.random() * 3 + 3}s linear forwards;
        `;
        
        document.body.appendChild(shape);
        
        setTimeout(() => shape.remove(), 6000);
    }, 3000);
}

// Add float up animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// Preload critical resources
const preloadLinks = [
    'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap'
];

preloadLinks.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
});

console.log('%cS V Banquet Halls', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; color: transparent;');
console.log('%cWebsite designed with ❤️', 'font-size: 14px; color: #FF6B9D;');
