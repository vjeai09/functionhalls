// ========================================
// NEXT-LEVEL LUXURY EXPERIENCE
// S V Banquet Halls - Premium Edition
// ========================================

console.log('%c✨ S V BANQUET HALLS ✨', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%); padding: 10px; color: #0A0A0F;');

// ========================================
// GSAP SETUP
// ========================================
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ========================================
// CINEMATIC INTRO SEQUENCE
// ========================================
class CinematicIntro {
    constructor() {
        this.intro = document.querySelector('.cinematic-intro');
        this.init();
    }
    
    init() {
        // Hide overflow during intro
        document.body.style.overflow = 'hidden';
        
        // Intro timeline
        const tl = gsap.timeline({
            onComplete: () => {
                this.intro.classList.add('fade-out');
                document.body.style.overflow = '';
                setTimeout(() => this.intro.remove(), 1000);
            }
        });
        
        tl.to('.luxury-loader', {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            delay: 2.5,
            ease: 'power2.in'
        })
        .to('.intro-title', {
            y: -50,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.in'
        }, '-=0.4')
        .to('.intro-tagline', {
            y: -30,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.in'
        }, '-=0.5');
    }
}

// ========================================
// LUXURY CUSTOM CURSOR
// ========================================
class LuxuryCursor {
    constructor() {
        this.cursor = document.querySelector('.cursor-dot');
        this.outline = document.querySelector('.cursor-outline');
        this.pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        this.mouse = { x: this.pos.x, y: this.pos.y };
        this.speed = 0.15;
        
        this.init();
    }
    
    init() {
        if (window.innerWidth < 768) return;
        
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        
        this.animate();
        this.setupHoverEffects();
    }
    
    animate() {
        this.pos.x += (this.mouse.x - this.pos.x) * this.speed;
        this.pos.y += (this.mouse.y - this.pos.y) * this.speed;
        
        this.cursor.style.left = this.pos.x + 'px';
        this.cursor.style.top = this.pos.y + 'px';
        
        this.outline.style.left = this.pos.x + 'px';
        this.outline.style.top = this.pos.y + 'px';
        
        requestAnimationFrame(() => this.animate());
    }
    
    setupHoverEffects() {
        const hoverElements = document.querySelectorAll('a, button, .venue-card, .stat-card, .event-card');
        
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(this.cursor, {
                    scale: 2,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                gsap.to(this.outline, {
                    scale: 1.5,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });
            
            el.addEventListener('mouseleave', () => {
                gsap.to([this.cursor, this.outline], {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }
}

// ========================================
// CURSOR TRAIL PARTICLES
// ========================================
class CursorTrail {
    constructor() {
        this.canvas = document.getElementById('cursor-trail');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.maxParticles = 30;
        
        this.init();
    }
    
    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
        
        window.addEventListener('mousemove', (e) => {
            this.addParticle(e.clientX, e.clientY);
        });
        
        this.animate();
    }
    
    addParticle(x, y) {
        this.particles.push({
            x,
            y,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
            life: 1
        });
        
        if (this.particles.length > this.maxParticles) {
            this.particles.shift();
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((particle, index) => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            particle.life -= 0.02;
            
            if (particle.life <= 0) {
                this.particles.splice(index, 1);
                return;
            }
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(212, 175, 55, ${particle.life * 0.6})`;
            this.ctx.fill();
            
            // Glow effect
            this.ctx.shadowBlur = 20;
            this.ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// ========================================
// 3D WEBGL BACKGROUND
// ========================================
class WebGLBackground {
    constructor() {
        this.canvas = document.getElementById('webgl-canvas');
        if (!this.canvas || !window.THREE) return;
        
        this.init();
    }
    
    init() {
        // Scene setup
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.position.z = 5;
        
        // Create particles
        const geometry = new THREE.BufferGeometry();
        const count = 3000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        
        for (let i = 0; i < count * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 30;
            positions[i + 1] = (Math.random() - 0.5) * 30;
            positions[i + 2] = (Math.random() - 0.5) * 30;
            
            // Gold colors
            const gold = new THREE.Color(0xD4AF37);
            colors[i] = gold.r;
            colors[i + 1] = gold.g;
            colors[i + 2] = gold.b;
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });
        
        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
        
        // Mouse interaction
        this.mouse = { x: 0, y: 0 };
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });
        
        // Handle resize
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
        
        this.animate();
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        // Rotate particles
        this.particles.rotation.y += 0.0005;
        this.particles.rotation.x += 0.0002;
        
        // Mouse interaction
        this.particles.rotation.x += this.mouse.y * 0.0002;
        this.particles.rotation.y += this.mouse.x * 0.0002;
        
        this.renderer.render(this.scene, this.camera);
    }
}

// ========================================
// HERO TEXT ANIMATION
// ========================================
class HeroTextAnimation {
    constructor() {
        this.chars = document.querySelectorAll('.hero-title .char');
        this.subtitle = document.querySelector('.reveal-text');
        this.init();
    }
    
    init() {
        // Animate each character
        gsap.to(this.chars, {
            y: 0,
            rotateX: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.03,
            ease: 'power4.out',
            delay: 3.5
        });
        
        // Animate subtitle
        gsap.to(this.subtitle, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 4.5,
            ease: 'power2.out'
        });
        
        // Animate buttons
        gsap.to('[data-scroll-reveal]', {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            delay: 5,
            ease: 'power2.out'
        });
    }
}

// ========================================
// MAGNETIC BUTTON EFFECT
// ========================================
class MagneticButton {
    constructor() {
        this.buttons = document.querySelectorAll('[data-magnetic]');
        this.init();
    }
    
    init() {
        this.buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                gsap.to(button, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });
            
            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: 'elastic.out(1, 0.5)'
                });
            });
        });
    }
}

// ========================================
// NAVIGATION SCROLL EFFECTS
// ========================================
class NavigationEffects {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }
    
    init() {
        // Scroll effect with debouncing for better performance
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (scrollTimeout) clearTimeout(scrollTimeout);
            
            // Immediate navbar change
            if (window.pageYOffset > 80) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        }, { passive: true });
        
        // Active section detection - optimized
        document.querySelectorAll('section').forEach(section => {
            ScrollTrigger.create({
                trigger: section,
                start: 'top center',
                end: 'bottom center',
                onEnter: () => this.updateActiveLink(section.id),
                onEnterBack: () => this.updateActiveLink(section.id)
            });
        });
        
        // Smooth scroll on click - FAST & RESPONSIVE
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                
                // Immediate visual feedback
                this.updateActiveLink(target.id);
                
                gsap.to(window, {
                    scrollTo: { y: target, offsetY: 80 },
                    duration: 0.8,
                    ease: 'power2.inOut'
                });
            });
        });
    }
    
    updateActiveLink(sectionId) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }
}

// ========================================
// STATS COUNTER WITH SCROLL TRIGGER
// ========================================
class StatsCounter {
    constructor() {
        this.stats = document.querySelectorAll('.stat-number');
        this.init();
    }
    
    init() {
        this.stats.forEach(stat => {
            const target = parseFloat(stat.getAttribute('data-target'));
            
            ScrollTrigger.create({
                trigger: stat,
                start: 'top 80%',
                onEnter: () => {
                    gsap.to(stat, {
                        innerHTML: target,
                        duration: 2.5,
                        ease: 'power2.out',
                        snap: { innerHTML: target === 4.9 ? 0.1 : 1 },
                        onUpdate: function() {
                            const value = parseFloat(this.targets()[0].innerHTML);
                            if (target === 4.9) {
                                stat.innerHTML = value.toFixed(1);
                            } else {
                                stat.innerHTML = Math.floor(value).toLocaleString() + '+';
                            }
                        }
                    });
                }
            });
        });
    }
}

// ========================================
// 3D TILT EFFECT (ENHANCED)
// ========================================
class Enhanced3DTilt {
    constructor() {
        this.cards = document.querySelectorAll('[data-tilt-intense]');
        this.init();
    }
    
    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 8;
                const rotateY = (centerX - x) / 8;
                
                gsap.to(card, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformPerspective: 1000,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.8,
                    ease: 'elastic.out(1, 0.5)'
                });
            });
        });
    }
}

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================
class ScrollRevealAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        // Fade in cards
        gsap.utils.toArray('.venue-card, .event-card, .testimonial-card').forEach(card => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 80,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out'
            });
        });
        
        // Section headers
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.from(header.children, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%'
                },
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.out'
            });
        });
        
        // Gallery items with stagger
        gsap.from('.gallery-item', {
            scrollTrigger: {
                trigger: '.gallery-grid',
                start: 'top 70%'
            },
            scale: 0.8,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'back.out(1.7)'
        });
    }
}

// ========================================
// PARALLAX EFFECTS
// ========================================
class ParallaxEffects {
    constructor() {
        this.init();
    }
    
    init() {
        // Hero parallax
        gsap.to('.hero-content', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            },
            y: 200,
            opacity: 0.5,
            ease: 'none'
        });
        
        // Floating rings parallax
        gsap.utils.toArray('.float-ring').forEach((ring, i) => {
            gsap.to(ring, {
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                },
                y: 100 * (i + 1),
                rotation: 45 * (i + 1),
                ease: 'none'
            });
        });
    }
}

// ========================================
// SOUND EFFECTS (Optional)
// ========================================
class SoundEffects {
    constructor() {
        this.enabled = false; // User must enable
        this.sounds = {
            hover: new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZQQ0PVqzn77BdGAg+ldjywXMpBSh+zPLaizsIG2+/7eGcQQ0OVKzn77NfGgpBnN7wvmwhBDCC0fLTgjMGHm3A7uGdQA0OVq3n7rJeGgpEndzwwG4fBDGF0fPVhDIGIG/B7eCdQA0OVq3n7rJeGgpEndzwwG4fBDGF0fPVhDIGIG/B7eCdQA0OVq3n7rJeGgpEndzwwG4fBDGF0fPVhDIGIG/B7eCdQA0OVq3n7rJeGgpFndzwwG4fBDGF0fPVhDIGIG/B7eCdQA0OVq3n7rJeGgpFndzwwG4fBDGF0fPVhDIGIG/B7eCdQA0OVq3n7rJeGgo='),
            click: new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZQQ0PVqzn77BdGAg+ldjywXMpBSh+zPLaizsIG2+/7eGcQQ0OVKzn77NfGgpBnN7wvmwhBDCC0fLTgjMGHm3A7uGdQA0OVq3n7rJeGgpEndzwwG4fBDGF0fPVhDIGIG/B7eCdQA0OVq3n7rJeGgpEndzwwG4fBDGF0fPVhDIGIG/B7eCdQA0OVq3n7rJeGgpEndzwwG4fBDGF0fPVhDIGIG/B7eCdQA0OVq3n7rJeGgpFndzwwG4fBDGF0fPVhDIGIG/B7eCdQA0OVq3n7rJeGgpFndzwwG4fBDGF0fPVhDIGIG/B7eCdQA0OVq3n7rJeGgo=')
        };
    }
    
    play(soundName) {
        if (this.enabled && this.sounds[soundName]) {
            this.sounds[soundName].currentTime = 0;
            this.sounds[soundName].volume = 0.2;
            this.sounds[soundName].play().catch(() => {});
        }
    }
}

// ========================================
// FLOATING MAGIC ELEMENTS
// ========================================
class FloatingMagic {
    constructor() {
        this.symbols = ['✨', '💫', '⭐', '🌟', '💎'];
        this.init();
    }
    
    init() {
        setInterval(() => this.createFloatingElement(), 4000);
    }
    
    createFloatingElement() {
        const symbol = this.symbols[Math.floor(Math.random() * this.symbols.length)];
        const element = document.createElement('div');
        
        element.textContent = symbol;
        element.style.cssText = `
            position: fixed;
            bottom: -50px;
            left: ${Math.random() * 100}%;
            font-size: ${Math.random() * 30 + 20}px;
            pointer-events: none;
            z-index: 1000;
            opacity: ${Math.random() * 0.5 + 0.3};
        `;
        
        document.body.appendChild(element);
        
        gsap.to(element, {
            y: -window.innerHeight - 100,
            rotation: Math.random() * 360,
            duration: Math.random() * 4 + 4,
            ease: 'none',
            onComplete: () => element.remove()
        });
    }
}

// ========================================
// FORM HANDLER WITH VALIDATION
// ========================================
class FormHandler {
    constructor() {
        this.form = document.getElementById('contactForm');
        if (this.form) this.init();
    }
    
    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.showSuccessMessage();
            this.form.reset();
        });
    }
    
    showSuccessMessage() {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.8);
            background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%);
            color: #0A0A0F;
            padding: 50px 70px;
            border-radius: 25px;
            font-size: 20px;
            font-weight: 700;
            z-index: 100001;
            box-shadow: 0 30px 90px rgba(212, 175, 55, 0.5);
            opacity: 0;
            text-align: center;
        `;
        
        message.innerHTML = `
            <div style="font-size: 64px; margin-bottom: 20px;">🎉</div>
            <div style="font-size: 24px; margin-bottom: 10px;">Thank You!</div>
            <div style="font-size: 16px; opacity: 0.9;">We'll get back to you soon</div>
        `;
        
        document.body.appendChild(message);
        
        gsap.to(message, {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(1.7)'
        });
        
        setTimeout(() => {
            gsap.to(message, {
                scale: 0.8,
                opacity: 0,
                duration: 0.4,
                ease: 'power2.in',
                onComplete: () => message.remove()
            });
        }, 3000);
    }
}

// ========================================
// INITIALIZE EVERYTHING
// ========================================
window.addEventListener('DOMContentLoaded', () => {
    // Add sparkles to intro overlay
    const introSparkles = document.querySelector('.intro-sparkles');
    if (introSparkles) {
        const sparkleCount = 10;
        for (let i = 0; i < sparkleCount; i++) {
            const s = document.createElement('div');
            s.className = 'sparkle';
            s.style.left = (10 + Math.random() * 80) + '%';
            s.style.top = (10 + Math.random() * 80) + '%';
            s.style.animationDelay = (Math.random() * 1.5) + 's';
            s.style.animationDuration = (1.2 + Math.random() * 1.2) + 's';
            s.style.opacity = 0.5 + Math.random() * 0.5;
            s.style.width = s.style.height = (8 + Math.random() * 10) + 'px';
            introSparkles.appendChild(s);
        }
    }
    // Core experience
    new CinematicIntro();
    new LuxuryCursor();
    new CursorTrail();
    new WebGLBackground();
    
    // Animations
    setTimeout(() => {
        new HeroTextAnimation();
        new MagneticButton();
        new NavigationEffects();
        new StatsCounter();
        new Enhanced3DTilt();
        new ScrollRevealAnimations();
        new ParallaxEffects();
        new FloatingMagic();
        new FormHandler();
    }, 3500);
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
// Smooth scrolling
const lenis = {
    smooth: true,
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
};

// Preload critical resources
window.addEventListener('load', () => {
    document.fonts.ready.then(() => {
        document.body.classList.add('fonts-loaded');
    });
});

console.log('%c🌟 Premium Experience Loaded', 'font-size: 14px; color: #D4AF37; font-weight: bold;');
