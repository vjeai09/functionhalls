# Creative Prompt / Generation Brief for S V Banquet Halls (Balaji Devotional Theme, v2)

This prompt file captures the full intent, emotional tone, design language, interaction philosophy, and technical guardrails for generating or evolving the v2 Balaji-themed website for S V Banquet Halls in Hyderabad.

---
## 1. Core Identity & Emotional Goals
- Essence: South Indian devotional grandeur fused with modern, addictive Gen Z interaction patterns.
- Emotions to evoke: Awe, serenity, auspiciousness, joyful anticipation, cultural pride, trust.
- Cultural anchors: Lord Venkateswara (Balaji) aura, marigold garlands, kumkum (deep crimson) & pasupu (turmeric yellow) palette, temple bells, rangoli motifs, silk textures.
- Audience spectrum: Elders (familiar, respectful), parents (trust & tradition), Gen Z (immersive, smooth micro-interactions), global visitors (clarity & universal symbolism).

---
## 2. Visual Language
- Primary colors: Kumkum #C21807, Pasupu #FFC107.
- Secondary accents: Deep temple brown #3B1F14, soft sandalwood #E9D9C7, marigold orange #FF8513, sacred gold gradient (gold → saffron).
- Typography: Heading font with regal serif (e.g., Cinzel, Playfair Display), body with clean sans (e.g., Poppins). Avoid over-stylizing readability-critical text.
- Motifs: Subtle mandala overlays, faint temple arch silhouettes, radial light halos behind icons.
- Containers: Glass-temple cards (transparent with blurred backdrop + thin golden border + inner glow on hover).
- Imagery placeholders: High-quality photos of decorated halls, rituals (homam, mangala vadya), vegetarian feast setups, floral decor, lighting.

---
## 3. Interaction & Animation Philosophy
- Performance-first, not gratuitous: Every animation should serve meaning (divine presence, transition ritual, attention guidance).
- Macro: Section fade-lift reveals; hero aura pulsing; scroll-triggered rangoli fragment assembly.
- Micro: Button ripple (a golden ring), hover bloom (tiny marigold petals), focus outline as glowing saffron ring.
- Particles: Canvas or WebGL floating embers & flower petals (low density, easing drift, occasional gentle swirl).
- Sound (opt-in only): Temple bell (short), veena strum, faint ambient tanpura drone triggered by explicit user action (e.g., clicking a “Immerse” button).
- Accessibility respect: Disable non-essential motion when prefers-reduced-motion is true; sound only on click.

---
## 4. Content Architecture (Sections)
1. Preloader: Minimal mandala spin fading into hero; fast (<1.5s), cancellable.
2. Hero: Title, poetic subheading, booking CTA, particle canvas, subtle Balaji silhouette glow.
3. Heritage: Our spiritual & cultural approach to celebrations; trust markers (years served, successful events).
4. Venues: Cards for each hall variant (capacity, style, recommended events, quick inquiry button).
5. Ritual Services: List + icons (Vedic priests, décor curation, catering, vastu alignment, music ensemble).
6. Gallery: Grid → lightbox with keyboard navigation & swipe hints.
7. Blessings / Testimonials: Rotating heartfelt messages; show authenticity (names + event type).
8. Booking / Contact: Form (name, phone, event date, guest count, message); simple validation & success toast.
9. Footer: Quick links, address, map snippet placeholder, social icons (subtle glow on hover).

---
## 5. Functional Requirements
- Responsive: Mobile-first; nav transforms into slide-in drawer with overlay.
- Smooth scroll with instant active-state sync in navigation.
- Back-to-top button appears after ~40vh scroll; accessible label.
- Lightbox: ESC closes, arrows navigate, click outside closes, focus trapped inside.
- Form: Client validation (required, basic pattern on phone), ARIA alerts for success/failure.
- Particle system: Efficient (requestAnimationFrame, shallow object pool, avoid layout thrash).

---
## 6. Accessibility & Inclusivity
- Color contrast: Meet WCAG AA for text; if gold/yellow on light background, add shadow or dark overlay.
- Keyboard: All interactive elements reachable in logical order; visible focus outline.
- ARIA: Landmark roles (nav, main, footer), aria-live for form toasts.
- Reduced Motion: Prefers-reduced-motion → disable particle drift & large scroll animations; keep essential state transitions.

---
## 7. Performance Guardrails
- No blocking external scripts before first paint except fonts (use display=swap).
- Defer heavy animation libraries unless truly needed; prefer vanilla first.
- Lazy load gallery images (loading="lazy").
- Avoid large base64 embeds; keep assets external.
- Target Lighthouse Performance ≥ 85 on mobile.

---
## 8. Future Enhancements (Optional)
- WebGL radial light temple aura with subtle depth fog.
- Dynamic festival mode toggle (ugadi, diwali theme overlays).
- Structured FAQ accordion with micro-animations.
- Event planner wizard (steps: date → hall → services → summary).

---
## 9. Non-Goals (For Clarity)
- No autoplay audio.
- No dark pattern urgency timers.
- No heavy 3D scene overshadowing content readability.

---
## 10. Tone & Copy Guidelines
- Voice: Respectful yet vibrant; short poetic metaphors ("Where blessings embrace celebration").
- Avoid jargon; clarify regional ritual names with short descriptors.
- Encourage action with warmth ("Begin your auspicious planning").

---
## 11. Sample High-Level Prompt (For AI Regeneration)
"Create a responsive devotional banquet hall landing site themed around Lord Balaji for S V Banquet Halls in Hyderabad. Use a kumkum (#C21807) and pasupu (#FFC107) palette with gold accents. Include sections: Hero (with divine aura & drifting petals), Heritage, Venues, Ritual Services, Gallery (lightbox), Testimonials (Blessings), Booking Contact, Footer. Provide subtle accessible animations: fade-lift reveals, gentle particle canvas embers, hover blooms, glass-temple cards. Respect prefers-reduced-motion. Add a responsive nav with a mobile drawer, smooth scrolling, back-to-top button, form validation, ARIA roles, and keyboard-friendly lightbox navigation. Optimize for performance and readability while making the experience feel spiritually radiant and modern for Gen Z."

---
## 12. Micro-Interaction Prompt Examples
- Button: "Design a primary CTA button with golden ring ripple on click and saffron glow hover; must meet contrast and not shift layout."
- Lightbox: "Generate accessible lightbox JS with keyboard ESC close, arrow navigation, focus trapping, and smooth fade transitions (<250ms)."
- Particles: "Implement low-cost canvas petals drifting upward with occasional rotational easing; pool particles and minimize allocations."

---
## 13. Implementation Principles
- Keep HTML semantic; avoid unnecessary div wrappers.
- Centralize theme variables in CSS custom properties for fast iteration.
- Guard all optional motion behind user intent or media query checks.
- Provide clear fallbacks (no particles → static aura gradient). 

---
## 14. Success Criteria Checklist
- Emotional resonance: Users describe site as "peaceful", "beautiful", "inviting".
- Engagement: Interaction encourages exploring all primary sections.
- Accessibility: Keyboard + reduced motion verified.
- Performance: Initial load quick; particles under 5% main thread overhead.
- Maintainability: Clear section comments, modular JS functions.

---
## 15. Attribution & Ethics
- Ensure any religious imagery is respectful, non-commercialized beyond venue context.
- No appropriation; focus on authentic symbolism.

---
## 16. Regeneration Safety Notes
- Refrain from adding religious scriptures verbatim without review.
- Avoid flashing animations or high-saturation strobing.

---
## 17. Changelog Note
This is the foundational prompt for v2 (Balaji devotional theme) created on 2025-11-09. Update this file if major thematic or structural shifts occur.

---
## 18. Quick Diff Instructions (Internal)
When evolving design: branch from feature/luxury-website-v2 → feature/v2-enhancement-[slug]; update sections; run performance audit; submit PR referencing this prompt.

---
End of Prompt Document.
