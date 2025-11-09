# 🌸 Telugu Heritage Banquet Halls - గడప నుండి గంధం వరకు# S V Banquet Halls – Pure Telugu Gadapa Theme (v3)



## From Threshold to Sandalwood - A Premium Telugu Wedding Experience## Overview

Divine celebration venue website using **authentic Telugu gadapa (threshold) colors only** - pure pasupu yellow, sacred bottu red, and ritual white dots from traditional South Indian home decoration.

This is a mesmerizing, magical, and addictive website for Telugu wedding banquet halls, designed with authentic gadapa (threshold) colors and traditional motifs. Built to captivate Gen Z while honoring rich Telugu Hindu traditions.

---

---

## Pure Gadapa Color Palette (Only 3 Colors)

## 🎨 Authentic Gadapa Color Palette🟡 **Pasupu Yellow**: `#F4C430` - Pure turmeric yellow base (threshold foundation)  

🔴 **Bottu Red**: `#D32F2F` - Sacred red kumkum dots (floral accents)  

Extracted from traditional Telugu threshold art:⚪ **Bottu White**: `#FFFFFF` - Pure white sacred dots (ritual marks)  



- **Pasupu Yellow** (#F2C341) - Pure turmeric base, representing prosperity and auspiciousness**No other colors used** - this is a strict 3-color devotional theme inspired by authentic Telugu threshold art.

- **Flower Red** (#CC3333) - Deep red flowers, symbolizing divine energy and celebrations  

- **Bottu White** (#FFFFFF) - White dots/petals, representing purity and divine blessings---

- **Leaf Green** (#2D7A3E) - Deep green leaves, symbolizing growth and life- **Divine Particles**: Canvas ember/petal drift animation

- **Blue Accent** (#1A4D7A) - Deep blue from flowers, representing depth and tradition- **GSAP Scroll Magic**: Section reveals, card staggers, counter animations

- **Immersive Hero**: Aura pulse, title stagger, smooth CTA reveal

---- **Glass Temple Cards**: Translucent containers with golden borders

- **Lightbox Gallery**: Keyboard nav, focus trap, ESC close

## ✨ Features- **Blessings Slider**: Auto-rotate testimonials with dot navigation

- **Micro-interactions**: Button ripple, hover blooms, magnetic effects

### 🎯 Core Experience- **Accessible**: ARIA roles, reduced motion support, keyboard-friendly

- **Preloader with Kalash Animation** - Telugu "శుభం... Invoking blessings..."- **Responsive**: Mobile drawer nav, adaptive grids, touch-optimized

- **Floating Flower Petals** - Canvas-based animation in gadapa colors

- **Hero with Dual Language** - Telugu + English for authenticity and accessibility---

- **Gadapa Border Patterns** - CSS-replicated threshold floral designs on cards

## Quick Start

### 📦 Sections```bash

1. **Hero** - Immersive introduction with parallax effects and divine aura# Serve locally

2. **Heritage** - 3 pillars (Vastu, Rituals, Premium) + Stats (25 years, 8000 weddings, 100k guests)python3 -m http.server 5173

3. **Venues** - 3 premium halls with Telugu wedding-specific amenities

4. **Services** - 6 comprehensive offerings (Vedic Priests, Décor, Cuisine, Music, Photography, Vastu)# Open in browser

5. **Gallery** - 6-item lightbox with keyboard navigationopen http://localhost:5173

6. **Testimonials** - Auto-rotating slider with Telugu family testimonials```

7. **Contact** - Detailed form with Hyderabad location (Jubilee Hills)

8. **Footer** - 4-column layout with Telugu tagline---



### 🚀 Interactions (Magical & Addictive)## Structure

- **GSAP ScrollTrigger** - Stagger animations for all sections```

- **Stats Counter** - Animated number counting on scroll/

- **Magnetic Buttons** - Premium hover effects├── index.html       # Main structure with semantic sections

- **Gallery Lightbox** - Full keyboard support (←→ arrows, ESC)├── styles.css       # Sacred palette, glass-temple cards, responsive

- **Testimonials Slider** - Auto-play with pause on hover├── script.js        # Particles, GSAP, lightbox, slider, form

- **Form Validation** - Toast notifications with Telugu blessings└── README.md        # This file

- **Back to Top** - Smooth scroll button```

- **Mobile Navigation** - Slide-in menu with accessibility

- **Parallax Hero** - Scroll-based depth effects---

- **Canvas Petals** - 40 animated flower petals in gadapa colors

## Sections

---1. **Hero** – Balaji aura, particle canvas, title stagger, dual CTAs

2. **Heritage** – Sacred spaces, cultural respect, modern comfort + stats

## 🏗️ Technical Stack3. **Venues** – Marigold Hall, Pasupu Pavilion, Temple Terrace

4. **Ritual Services** – Vedic priests, floral décor, catering, music, Vastu

- **HTML5** - Semantic markup with ARIA roles5. **Gallery** – Grid with lightbox (ESC/arrows)

- **CSS3** - Custom properties, Flexbox, Grid, animations6. **Blessings** – Rotating testimonials with autoplay

- **Vanilla JavaScript** - ES6+, no frameworks7. **Contact** – Form with validation + location info

- **GSAP 3.12.2** - with ScrollTrigger plugin8. **Footer** – Quick links, social icons, copyright

- **Google Fonts** - Playfair Display, Poppins, Tiro Telugu

---

---

## Customization

## 🎭 Cultural Authenticity### Colors

Edit CSS variables in `styles.css`:

### Telugu Integration```css

- Telugu script throughout (శుభం, మంగళం, గడప నుండి గంధం వరకు, మా వారసత్వం):root {

- Telugu wedding rituals (Pellikuthuru, Muhurtham, Kanyadaanam, Talambralu)  --kumkum: #C21807;

- Telugu cuisine references (Pulihora, Gongura, Pappu, Annaprasanam-style feast)  --pasupu: #FFC107;

- Hyderabad location specificity  --temple-brown: #3B1F14;

  --sandalwood: #E9D9C7;

### Traditional Elements  --marigold: #FF8513;

- Gadapa floral border patterns}

- Kalash (sacred pot) preloader animation```

- Vastu and Muhurtham considerations

- Nadaswaram, rangoli, marigold garlands### Content

- Mango leaf torans (bandharalu)- **Venue details**: Edit `.venue-card` in `index.html`

- **Services**: Update `.service-card` icons & text

---- **Testimonials**: Modify `.blessing-card` content

- **Contact info**: Change address/phone/email in `#contact`

## 🚀 Setup & Run

### Images

### PrerequisitesReplace gradient placeholders in `.venue-image` and `.gallery-image` with:

- Modern web browser (Chrome, Firefox, Safari, Edge)```html

- Local server (Python, Node.js, or VS Code Live Server)<div class="venue-image" style="background: url('path/to/image.jpg') center/cover;"></div>

```

### Quick Start

---

```bash

# Clone the repository## Performance

git clone <repository-url>- Lazy particle rendering (reduced on mobile)

cd functionhalls- GSAP scroll triggers with `toggleActions: 'play none none none'`

- Reduced motion fallback: disables particles & scroll animations

# Option 1: Python server- GPU-accelerated transforms (translateZ, backface-visibility)

python3 -m http.server 5173

---

# Option 2: Node.js server (if http-server installed)

npx http-server -p 5173## Browser Support

- Chrome/Edge 90+

# Option 3: VS Code Live Server- Firefox 88+

# Right-click index.html → "Open with Live Server"- Safari 14+

```- Mobile: iOS 14+, Android Chrome 90+



Visit: `http://localhost:5173`---



---## Dependencies

- **GSAP 3.12.2** (ScrollTrigger) – loaded via CDN

## 📱 Responsive Design- **Google Fonts**: Cinzel (headings), Poppins (body)



- **Desktop** (1200px+) - Full immersive experience---

- **Tablet** (768px - 1199px) - Optimized grid layouts

- **Mobile** (< 768px) - Slide-in menu, stacked sections## Roadmap

- [ ] Add festival mode toggle (Diwali/Ugadi overlays)

---- [ ] WebGL radial light temple aura

- [ ] Opt-in bell sound effect (user-triggered)

## ♿ Accessibility- [ ] Event planner wizard (multi-step form)

- [ ] FAQ accordion with micro-animations

- Semantic HTML5 structure- [ ] Deploy to GitHub Pages / Netlify

- ARIA roles and labels

- Keyboard navigation support---

- Focus management for modals

- Reduced motion support (`prefers-reduced-motion`)## License

- Screen reader friendly© 2025 S V Banquet Halls. All rights reserved.



------



## 🎨 Design Philosophy## Credits

Design & Development: Crafted with devotion and modern techniques.

1. **Mesmerizing** - Smooth GSAP animations, floating petals, parallax effects
2. **Magical** - Divine aura, kalash preloader, gadapa patterns, scroll reveals
3. **Addictive** - Magnetic buttons, interactive elements, premium micro-interactions
4. **Traditional** - Telugu language, rituals, gadapa colors, cultural authenticity
5. **Gen Z Appeal** - Modern UX patterns, bilingual content, emoji icons, clean design
6. **Premium Positioning** - Glass-morphism, luxury typography, curated photography

---

## 📊 Performance Optimizations

- Lazy loading for images
- GPU-accelerated animations (`will-change`, `transform3d`)
- Passive event listeners
- Debounced scroll handlers
- Canvas particle pooling (40 petals max)
- CDN-hosted libraries (GSAP)

---

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

---

## 📜 License

MIT License - Feel free to use for personal and commercial projects.

---

## 🙏 Credits

**Design Inspiration**: Traditional Telugu gadapa (threshold) art  
**Cultural Consultant**: Telugu Hindu wedding traditions  
**Typography**: Google Fonts (Playfair Display, Poppins, Tiro Telugu)  
**Animation**: GSAP by GreenSock  
**Built with**: Love, turmeric (pasupu), and tradition 💛❤️

---

## 📧 Contact

For inquiries about Telugu Heritage Banquet Halls:

- **Phone**: +91 98765 43210
- **Email**: info@teluguheritagebanquets.com
- **Location**: Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033
- **Hours**: Mon-Sun, 9:00 AM - 9:00 PM

---

**మీ పెళ్లికి మా ఆతిథ్యం** - *Our hospitality for your wedding*

🌸 **గడప నుండి గంధం వరకు** - *From Threshold to Sandalwood* 🌸
