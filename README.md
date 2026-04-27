# Accredian Enterprise - Landing Page Recreation

A modern, responsive recreation of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page built with **Next.js 14** (App Router), **Tailwind CSS**, and **Framer Motion**.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwindcss)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)

## 🚀 Live Demo

**Deployed on Vercel:** [View Live Site](#) *(Add your Vercel URL after deploying)*

## 📋 Features

### Landing Page Sections
- **Hero Section** – Animated entrance with gradient text, checklist, and interactive dashboard card
- **Stats Section** – Animated counter cards with scroll-triggered count-up effect
- **Trusted Partners** – Infinite scrolling marquee of client logos
- **Accredian Edge** – 7 feature cards highlighting key differentiators
- **Domain Programs** – Dark-themed section showcasing training domains
- **CAT Framework** – Venn diagram visualization of the Concept-Application-Tools methodology
- **How It Works** – 3-step process with connected flow
- **FAQs** – Categorized accordion with smooth expand/collapse
- **Testimonials** – Auto-playing carousel with navigation controls
- **Footer** – Multi-column layout with contact info and social links

### Functional Requirements ✅
- Fully responsive (mobile + tablet + desktop)
- Smooth scroll navigation between sections
- Reusable component architecture
- Glassmorphism effects and micro-animations
- Sticky navbar with scroll-aware styling

### Bonus Features ⭐
- **Lead Capture Form** – Modal form with validation and animated states
- **API Integration** – Next.js API route (`/api/leads`) stores submissions in JSON file
- **GET endpoint** – Retrieve all captured leads via `GET /api/leads`

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** (App Router) | React framework with SSR/SSG |
| **Tailwind CSS 3.4** | Utility-first CSS framework |
| **React Icons** | Icon library (Feather icons) |
| **Framer Motion** | Animations and transitions |

## 📦 Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/accredian-enterprise.git
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open in browser
# Navigate to http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
# Option 1: CLI
npx vercel

# Option 2: Connect GitHub repo at vercel.com/new
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with metadata & fonts
│   ├── page.js            # Landing page (assembles all sections)
│   ├── globals.css        # Design system & Tailwind directives
│   └── api/
│       └── leads/
│           └── route.js   # Lead capture API (POST & GET)
├── components/
│   ├── Navbar.jsx         # Sticky nav with mobile drawer
│   ├── Hero.jsx           # Hero section with dashboard card
│   ├── Stats.jsx          # Animated counter cards
│   ├── Clients.jsx        # Scrolling partner logos
│   ├── AccredianEdge.jsx  # Feature grid
│   ├── Programs.jsx       # Domain expertise cards
│   ├── CATFramework.jsx   # Venn diagram + cards
│   ├── HowItWorks.jsx     # 3-step process flow
│   ├── FAQs.jsx           # Categorized accordion
│   ├── Testimonials.jsx   # Carousel + CTA banner
│   ├── LeadCaptureForm.jsx # Modal form with validation
│   └── Footer.jsx         # Multi-column footer
└── ...
```

## 🧠 Approach

1. **Research** – Analyzed the reference site structure, sections, content, and design language
2. **Design System** – Established colors (primary blue #1A73E8), typography (Inter), spacing, and animation tokens via Tailwind config
3. **Component Architecture** – Built each section as an isolated, reusable component with clear props interface
4. **Progressive Enhancement** – Added scroll-triggered animations, hover effects, and micro-interactions after core layout was complete
5. **API Integration** – Built a Next.js API route for the bonus lead capture feature

## 🤖 AI Usage

AI tools were used extensively during development:

| Tool | How It Was Used |
|---|---|
| **Antigravity (Claude)** | Generated initial component structures, layout logic, animation patterns, and API route code |
| **Manual Improvements** | Refined color palette, animation timing, responsive breakpoints, accessibility attributes, and content |

### What AI Helped With
- Component scaffolding and boilerplate
- Tailwind CSS utility class composition
- SVG icon selection and layout patterns
- API route structure and validation logic
- README documentation

### What Was Manually Improved
- Fine-tuned animation easing and timing
- Custom design decisions (gradient combinations, color harmony)
- Responsive layout adjustments for edge cases
- Content writing and section organization
- Component composition and state management patterns

## 🔮 Improvements With More Time

1. **Image Assets** – Replace text-based client logos with actual SVG/PNG logos
2. **CMS Integration** – Connect to a headless CMS (Strapi/Sanity) for dynamic content
3. **Database** – Replace JSON file storage with PostgreSQL/MongoDB for leads
4. **Email Notifications** – Send automated emails on form submission (SendGrid/Resend)
5. **A/B Testing** – Implement variant testing for hero section and CTA placement
6. **Analytics** – Add Google Analytics and event tracking
7. **Accessibility** – Complete ARIA labels and keyboard navigation audit
8. **Performance** – Image optimization, lazy loading, and Lighthouse score optimization
9. **Dark Mode** – Full dark mode toggle with persisted preference
10. **Internationalization** – Multi-language support (i18n)

## 📄 License

This project is built for educational/assignment purposes.

---

Built with ❤️ using Next.js and Tailwind CSS
