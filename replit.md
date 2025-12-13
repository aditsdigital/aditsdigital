# ADITS Digital - Digital Marketing Agency Website

## Project Overview
A professional, modern digital marketing agency website built with React, TypeScript, and Express. Features stunning animations, interactive components, and a comprehensive suite of pages showcasing digital marketing services.

## Tech Stack
- **Frontend**: React 18, TypeScript, Wouter (routing), Tailwind CSS
- **Animations**: Framer Motion, React Intersection Observer
- **UI Components**: Shadcn UI components (Radix UI primitives)
- **Backend**: Express.js, Node.js
- **Data Storage**: In-memory storage (MemStorage)
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query (React Query v5)

## Design System
- **Primary Colors**: Navy Blue (#004AAD / 218 100% 34%), White, Orange Accent (#FF6B35 / 16 100% 60%)
- **Font**: Poppins (Google Fonts)
- **Animations**: Smooth transitions, hover effects, scroll-triggered animations
- **Components**: Interactive cards, animated hero sections, client carousel

## Pages Implemented
1. **Home** (`/`) - Hero section, services overview, stats counters, testimonials, CTA sections
2. **About** (`/about`) - Company info, mission/vision, team values, statistics
3. **Services** (`/services`) - Service grid with 8 service offerings
4. **Service Detail Pages**:
   - SEO Services (`/services/seo`)
   - Social Media Marketing (`/services/social-media`)
   - PPC / Google Ads (`/services/ppc`)
   - Email Marketing (`/services/email-marketing`)
   - SMS Marketing (`/services/sms-marketing`)
   - WhatsApp Marketing (`/services/whatsapp-marketing`)
   - Branding Services (`/services/branding`)
   - GMB Phone Fix (`/services/gmb-phone-fix`)
5. **Contact** (`/contact`) - Contact form with validation, Google Maps embed
6. **Clients** (`/clients`) - Client showcase, case studies, success metrics
7. **Testimonials** (`/testimonials`) - Client testimonials and reviews
8. **Blog** (`/blog`) - Blog posts with featured images
9. **Privacy Policy** (`/privacy`)
10. **Terms of Service** (`/terms`)

## Key Features
- **Responsive Design**: Fully responsive across all breakpoints (mobile, tablet, desktop)
- **Smooth Animations**: Page load animations, scroll-triggered effects, hover interactions
- **Interactive Components**: Service cards with hover effects, animated statistics counters
- **Client Carousel**: Auto-scrolling client logo carousel
- **Contact Form**: Validated form with backend integration
- **Mobile Navigation**: Animated hamburger menu with smooth slide-in drawer
- **SEO Optimized**: Meta tags, semantic HTML, proper heading hierarchy

## API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/blog` - Fetch all blog posts
- `GET /api/blog/:slug` - Fetch single blog post by slug

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── Header.tsx - Navigation with mobile menu
│   │   ├── Footer.tsx - Footer with links and social icons
│   │   ├── Hero.tsx - Reusable hero section
│   │   ├── Layout.tsx - Page layout wrapper
│   │   ├── ServiceCard.tsx - Animated service cards
│   │   ├── TestimonialCard.tsx - Client testimonial cards
│   │   ├── StatCounter.tsx - Animated statistics counter
│   │   ├── ClientCarousel.tsx - Auto-scrolling carousel
│   │   └── ui/ - Shadcn UI components
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   ├── Clients.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Blog.tsx
│   │   ├── Privacy.tsx
│   │   ├── Terms.tsx
│   │   └── services/ - Individual service pages
│   └── App.tsx - Main app with routing
server/
├── routes.ts - API routes
└── storage.ts - Data storage interface
shared/
└── schema.ts - TypeScript schemas and Zod validation
```

## Logo Integration
The ADITS Digital logo is located at `attached_assets/Adits Digital Services Logo_1760635708215.avif` and is imported throughout the application using the `@assets` alias.

## Running the Project
The application is configured to run with:
```bash
npm run dev
```
This starts both the Express backend and Vite frontend on the same port (5001).

## Recent Changes
- Complete frontend implementation with all pages and components
- Backend API for contact form and blog posts
- Integrated contact form with loading states and error handling
- Responsive design with mobile-first approach
- Smooth animations and interactive effects throughout

## Next Steps for Enhancement
- Add database persistence (PostgreSQL)
- Implement blog post detail pages with dynamic content
- Add newsletter subscription functionality
- Implement case study detail pages
- Add admin dashboard for content management
