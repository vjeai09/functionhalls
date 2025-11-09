# S V Banquet Halls – Pure Telugu Gadapa Theme (v3)

## Overview
Divine celebration venue website using **authentic Telugu gadapa (threshold) colors only** - pure pasupu yellow, sacred bottu red, and ritual white dots from traditional South Indian home decoration.

---

## Pure Gadapa Color Palette (Only 3 Colors)
🟡 **Pasupu Yellow**: `#F4C430` - Pure turmeric yellow base (threshold foundation)  
🔴 **Bottu Red**: `#D32F2F` - Sacred red kumkum dots (floral accents)  
⚪ **Bottu White**: `#FFFFFF` - Pure white sacred dots (ritual marks)  

**No other colors used** - this is a strict 3-color devotional theme inspired by authentic Telugu threshold art.

---
- **Divine Particles**: Canvas ember/petal drift animation
- **GSAP Scroll Magic**: Section reveals, card staggers, counter animations
- **Immersive Hero**: Aura pulse, title stagger, smooth CTA reveal
- **Glass Temple Cards**: Translucent containers with golden borders
- **Lightbox Gallery**: Keyboard nav, focus trap, ESC close
- **Blessings Slider**: Auto-rotate testimonials with dot navigation
- **Micro-interactions**: Button ripple, hover blooms, magnetic effects
- **Accessible**: ARIA roles, reduced motion support, keyboard-friendly
- **Responsive**: Mobile drawer nav, adaptive grids, touch-optimized

---

## Quick Start
```bash
# Serve locally
python3 -m http.server 5173

# Open in browser
open http://localhost:5173
```

---

## Structure
```
/
├── index.html       # Main structure with semantic sections
├── styles.css       # Sacred palette, glass-temple cards, responsive
├── script.js        # Particles, GSAP, lightbox, slider, form
└── README.md        # This file
```

---

## Sections
1. **Hero** – Balaji aura, particle canvas, title stagger, dual CTAs
2. **Heritage** – Sacred spaces, cultural respect, modern comfort + stats
3. **Venues** – Marigold Hall, Pasupu Pavilion, Temple Terrace
4. **Ritual Services** – Vedic priests, floral décor, catering, music, Vastu
5. **Gallery** – Grid with lightbox (ESC/arrows)
6. **Blessings** – Rotating testimonials with autoplay
7. **Contact** – Form with validation + location info
8. **Footer** – Quick links, social icons, copyright

---

## Customization
### Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --kumkum: #C21807;
  --pasupu: #FFC107;
  --temple-brown: #3B1F14;
  --sandalwood: #E9D9C7;
  --marigold: #FF8513;
}
```

### Content
- **Venue details**: Edit `.venue-card` in `index.html`
- **Services**: Update `.service-card` icons & text
- **Testimonials**: Modify `.blessing-card` content
- **Contact info**: Change address/phone/email in `#contact`

### Images
Replace gradient placeholders in `.venue-image` and `.gallery-image` with:
```html
<div class="venue-image" style="background: url('path/to/image.jpg') center/cover;"></div>
```

---

## Performance
- Lazy particle rendering (reduced on mobile)
- GSAP scroll triggers with `toggleActions: 'play none none none'`
- Reduced motion fallback: disables particles & scroll animations
- GPU-accelerated transforms (translateZ, backface-visibility)

---

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile: iOS 14+, Android Chrome 90+

---

## Dependencies
- **GSAP 3.12.2** (ScrollTrigger) – loaded via CDN
- **Google Fonts**: Cinzel (headings), Poppins (body)

---

## Roadmap
- [ ] Add festival mode toggle (Diwali/Ugadi overlays)
- [ ] WebGL radial light temple aura
- [ ] Opt-in bell sound effect (user-triggered)
- [ ] Event planner wizard (multi-step form)
- [ ] FAQ accordion with micro-animations
- [ ] Deploy to GitHub Pages / Netlify

---

## License
© 2025 S V Banquet Halls. All rights reserved.

---

## Credits
Design & Development: Crafted with devotion and modern techniques.
