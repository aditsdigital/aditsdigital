# Design Guidelines: ADITS Digital Marketing Agency Website

## Design Approach

**Selected Approach:** Reference-Based Marketing Design
**Primary Inspiration:** Modern digital agency aesthetics (Linear, Vercel, Stripe) combined with bold, animated experiences (Apple, Airbnb)
**Design Philosophy:** Create a visually striking, animation-rich experience that establishes credibility while maintaining professional polish. Emphasize smooth interactions, card-based layouts, and strategic use of motion to guide user attention.

---

## Color Palette

### Primary Colors
- **Navy Blue:** 218 100% 34% - Primary brand color, headers, CTAs
- **Pure White:** 0 0% 100% - Background, text on dark surfaces
- **Orange Accent:** 16 100% 60% - CTAs, highlights, interactive elements

### Supporting Colors
- **Light Gray:** 220 15% 97% - Section backgrounds, card surfaces
- **Medium Gray:** 220 10% 50% - Secondary text, borders
- **Dark Charcoal:** 220 20% 15% - Body text, footer background
- **Gradient Overlay:** Navy Blue to Purple (218 100% 34% → 260 60% 45%) for hero backgrounds

### Functional Colors
- **Success Green:** 142 70% 45%
- **Error Red:** 0 70% 55%
- **Info Blue:** 210 100% 50%

---

## Typography

**Primary Font:** Poppins (Google Fonts)
**Font Weights:** 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Type Scale
- **Hero Headlines:** 3.5rem (desktop) / 2.25rem (mobile), Bold (700), tight leading
- **Section Headlines:** 2.5rem (desktop) / 1.875rem (mobile), SemiBold (600)
- **Subheadings:** 1.5rem, Medium (500)
- **Body Text:** 1rem, Regular (400), relaxed leading (1.6)
- **Small Text:** 0.875rem, Regular (400)
- **CTAs:** 1rem, SemiBold (600), uppercase letter-spacing

---

## Layout System

**Spacing Units:** Tailwind's 4, 8, 12, 16, 20, 24, 32 units (consistent rhythm)
**Container Max-Width:** 1280px (max-w-7xl)
**Section Padding:** py-20 (desktop), py-12 (mobile)
**Card Spacing:** gap-8 on desktop, gap-6 on mobile

### Grid Patterns
- **Hero Section:** Full-width with max-w-7xl inner container
- **Services Grid:** 3 columns (lg), 2 columns (md), 1 column (mobile)
- **Testimonials:** 3 columns (lg), 2 columns (md), 1 column (mobile)
- **Client Logos:** 4-6 columns with equal spacing
- **Blog Posts:** 3 columns with masonry-style cards

---

## Component Library

### Navigation
**Desktop:** Horizontal menu, sticky on scroll with subtle shadow and backdrop blur, logo left, links center, CTA button right
**Mobile:** Hamburger menu with slide-in drawer animation from right, overlay backdrop with blur effect

### Hero Section
**Layout:** Full-viewport height (min-h-screen), centered content with gradient overlay
**Elements:** Large headline, 2-3 line subtext, dual CTAs (primary + secondary outline), floating animated background elements (geometric shapes or abstract patterns)
**Animation:** Fade-in on load, parallax scroll effect on background

### Service Cards
**Style:** White background, rounded-xl corners, shadow-lg on hover
**Layout:** Icon/illustration top, heading, description, "Learn More" link
**Hover Effect:** Scale up (1.05), enhanced shadow, orange border glow, smooth 300ms transition

### Testimonial Cards
**Style:** White card with left border (orange accent), rounded-lg
**Content:** Quote text, client name, company logo, star rating
**Animation:** Slide-up on scroll entry, stagger animation for multiple cards

### CTA Sections
**Layout:** Full-width colored background (navy gradient), centered text, large button
**Spacing:** Generous py-24 padding
**Elements:** Compelling headline, supporting text, prominent CTA button

### Footer
**Layout:** Three-column (desktop), stacked (mobile) - Quick Links, Services, Contact Info
**Background:** Dark charcoal with subtle texture
**Elements:** Logo, navigation links, social icons (with hover color transitions), newsletter signup, copyright

### Forms
**Style:** Clean white background, rounded inputs with border focus states (orange)
**Validation:** Real-time with colored borders and helpful messaging
**Submit Button:** Full-width on mobile, auto-width on desktop with loading spinner animation

---

## Animations & Interactions

### Page Load
- Hero content: Fade-in with upward slide (stagger children by 150ms)
- Navigation: Slide down from top

### Scroll Animations
- Fade-in-up for sections (trigger at 80% viewport entry)
- Counter animations for statistics (numbers count up)
- Parallax effect on hero background images (slow scroll)

### Hover States
- Cards: Scale transform + shadow enhancement
- Buttons: Background color shift + subtle scale (1.02)
- Links: Orange underline slide-in from left
- Service icons: Rotate 360° on hover

### Transitions
- All animations: 300-400ms with ease-out timing
- Page transitions: Subtle fade between routes

### Specific Effects
- **Client Logo Carousel:** Auto-scroll with infinite loop, pause on hover
- **Statistic Counters:** Animate from 0 to target number on scroll entry
- **Service Icons:** Pulse animation on page load (once)
- **CTA Buttons:** Subtle ripple effect on click

---

## Images

### Hero Section
**Main Hero Image:** Full-width background image showing diverse team collaborating in modern office or abstract digital workspace visualization. Use overlay gradient (navy to transparent) to ensure text readability.

### About Page
**Team Photo:** Professional group photo or candid working environment shots showing 6-8 team members in contemporary office setting.

### Services Pages
**Service-Specific Imagery:** Each service detail page includes a relevant header image:
- SEO: Analytics dashboard visualization
- Social Media: Phone screens with social platforms
- PPC: Google Ads interface screenshot
- Email Marketing: Inbox with campaign emails
- Branding: Logo design process mockups

### Clients Section
**Client Logos:** High-quality company logos on transparent backgrounds, displayed in grayscale with color on hover.

### Blog
**Featured Images:** Relevant stock photos or custom illustrations (1200x600px) for each post, displayed as card thumbnails.

### Testimonials
**Client Photos:** Professional headshots (circular crop) next to testimonials, 80x80px minimum.

---

## Responsive Behavior

- **Breakpoints:** Mobile-first approach (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- **Navigation:** Hamburger menu below lg breakpoint
- **Grids:** Collapse to single column on mobile, 2 columns on tablet, 3+ on desktop
- **Typography:** Reduce font sizes by 30-40% on mobile
- **Spacing:** Reduce section padding by 40% on mobile
- **Hero Height:** min-h-screen on desktop, min-h-[70vh] on mobile

---

## Page-Specific Layouts

**Home:** Hero → Stats → Services Grid → Client Logos → Testimonials → CTA
**About:** Hero → Mission/Vision (2-column) → Team Grid → Stats → CTA
**Services:** Hero → Services Grid (3-col) → Process Timeline → CTA
**Contact:** Hero → Form + Map (2-column split) → Contact Cards
**Blog:** Hero → Posts Grid (masonry) → Pagination
**Testimonials:** Hero → Testimonials Grid (3-col) → CTA

This design system creates a cohesive, modern, and highly engaging digital agency website with purposeful animations and professional polish throughout.