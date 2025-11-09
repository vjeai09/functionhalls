# S V Banquet Halls - Modern Website

A stunning, magical, and addictive website designed for S V Banquet Halls in Hyderabad, India. Built with modern web technologies and optimized for Gen Z users.

## 🌟 Features

### Visual Excellence
- **Particle Animation System** - Interactive animated background with mouse interaction
- **Glassmorphism Design** - Modern glass-effect cards and overlays
- **Gradient Magic** - Smooth color transitions throughout the site
- **3D Tilt Effects** - Interactive card tilting on hover
- **Parallax Scrolling** - Depth and dimension to hero section
- **Custom Cursor** - Unique cursor experience (desktop only)
- **Floating Elements** - Magical stars and sparkles animations

### User Experience
- **Smooth Animations** - Fade-in effects on scroll using Intersection Observer
- **Stats Counter** - Animated number counting when visible
- **Image Lightbox** - Gallery with full-screen image viewing
- **Responsive Design** - Perfect on all devices (mobile, tablet, desktop)
- **Hamburger Menu** - Mobile-friendly navigation
- **Loading Screen** - Elegant page loading animation
- **Back to Top Button** - Quick navigation to top

### Sections
1. **Hero Section** - Captivating full-screen introduction
2. **Stats** - Impressive numbers showcase
3. **Venues** - Three beautiful venue options with details
4. **Events** - Types of events hosted
5. **Gallery** - Interactive image gallery
6. **Testimonials** - Client reviews and feedback
7. **Contact** - Inquiry form with contact information
8. **Footer** - Quick links and newsletter signup

## 🎨 Color Palette

- Primary Pink: `#FF6B9D`
- Secondary Purple: `#6B5FFF`
- Accent Gold: `#FFD166`
- Dark Background: `#0F0F1E`
- Gradients: Purple-to-Pink, Gold, and Dark themes

## 🚀 Quick Start

1. Open `index.html` in a modern web browser
2. All files are self-contained (no build process needed)
3. For production: Upload all files to your web server

## 📁 File Structure

```
functionhalls/
│
├── index.html          # Main HTML file
├── styles.css          # Complete styling with animations
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🖼️ Image Recommendations

### Hero Section
- **Recommended**: High-quality image of your best banquet hall
- **Size**: 1920x1080px minimum
- **Current**: Using placeholder from Unsplash

### Venue Cards (3 images needed)
1. **Grand Ballroom**: Interior shot showing capacity and elegance
2. **Royal Pavilion**: Outdoor/garden area with decorations
3. **Crystal Hall**: Intimate luxury setup
- **Size**: 800x600px each

### Gallery Section (6+ images)
- Mix of wedding setups, decorations, venue interiors, lighting
- **Size**: 600x600px each (square format works best)
- **Categories**: Wedding, Decor, Venue

### How to Add Your Images

Replace the Unsplash URLs in `index.html` with your actual images:

```html
<!-- Example: Line 87 in index.html -->
<img src="images/hero-background.jpg" alt="Your Description">
```

Create an `images` folder and place your photos there:
```
functionhalls/
├── images/
│   ├── hero-background.jpg
│   ├── grand-ballroom.jpg
│   ├── royal-pavilion.jpg
│   ├── crystal-hall.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   └── ...
```

## 📱 Contact Information

Update the following in `index.html` (around line 330):

```html
<p>+91 XXXXX XXXXX</p>  <!-- Add your phone number -->
<p>info@svbanquethalls.com</p>  <!-- Add your email -->
```

Add your actual address and update social media links.

## 🎯 Customization

### Change Colors
Edit CSS variables in `styles.css` (lines 9-20):
```css
:root {
    --primary: #FF6B9D;  /* Change to your brand color */
    --secondary: #6B5FFF;
    /* ... */
}
```

### Update Content
- Venue names and capacities
- Event types offered
- Stats numbers
- Testimonials
- Footer information

### Add More Venues
Duplicate the `.venue-card` div structure in `index.html` around line 108.

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Optimize Images**: Use WebP format for better compression
2. **Lazy Loading**: Already implemented for images
3. **CDN**: Consider using a CDN for fonts
4. **Caching**: Enable browser caching on your server

## 📧 Form Handling

The contact form currently shows a success message. To connect it to a backend:

1. **Option 1**: Use a form service like Formspree, Netlify Forms, or Google Forms
2. **Option 2**: Set up your own backend API
3. **Option 3**: Use EmailJS for direct email sending

Example with Formspree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 🎭 Special Features

### Particle System
- 80 animated particles
- Mouse interaction effect
- Connects nearby particles with lines
- Optimized performance

### Custom Cursor (Desktop Only)
- Custom dot cursor
- Following ring effect
- Scales on interactive elements

### Loading Screen
- Shows on first page load
- Smooth fade-out transition
- Brand name display

## 📞 Support & Customization

For additional customization or support:
- Update venue information
- Add more sections
- Integrate booking system
- Connect payment gateway
- SEO optimization

## 🎉 Launch Checklist

- [ ] Replace all placeholder images with actual venue photos
- [ ] Update contact information (phone, email, address)
- [ ] Add actual testimonials from clients
- [ ] Set up form submission backend
- [ ] Connect social media links
- [ ] Test on all devices
- [ ] Check loading speed
- [ ] Set up Google Analytics (optional)
- [ ] Submit to Google Search Console
- [ ] Add favicon

## 📄 License

This website template is created for S V Banquet Halls. All rights reserved.

---

**Made with ❤️ for S V Banquet Halls, Hyderabad**

*Where Dreams Come Alive*
