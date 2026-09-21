# PickYourISP

A US internet comparison and availability platform built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** with free blocks from [shadcnblocks.com](https://www.shadcnblocks.com/)
- React 19

## Setup

### Prerequisites

- Node.js 18+ (developed with Node.js 22)
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── providers/         # Provider listings and detail pages
│   ├── internet/          # Internet technology guides
│   ├── about/             # About page
│   ├── disclosure/        # Disclosure page
│   ├── methodology/       # Methodology page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── contact/           # Contact page
│   └── compare/           # Comparison tool (placeholder)
├── components/
│   ├── layout/            # Layout components (Header, Footer, etc.)
│   └── ui/                # shadcn/ui components
├── lib/                   # Utility functions
└── public/                # Static assets
```

## shadcn/ui Free Blocks

This project uses **FREE** blocks from shadcnblocks.com. The registry is configured in `components.json`:

```json
{
  "registries": {
    "@shadcnblocks": "https://www.shadcnblocks.com/r/{name}"
  }
}
```

No Pro API key is required. To add free blocks:

```bash
npx shadcn@latest add @shadcnblocks/<block-id>
```

### Installed Components

- `button` - Button component from shadcn/ui
- `card` - Card component from shadcn/ui
- `input` - Input component from shadcn/ui

Additional free blocks can be added as needed for features like hero sections, navigation, footers, CTAs, etc.

## Content Guidelines (HARD REQUIREMENTS)

### Soft Launch Mode

All pages emit `<meta name="robots" content="noindex, nofollow">` via Next.js Metadata API. This is enforced site-wide in the layout.

### No Invented Data

- **No fake prices, coverage, reviews, awards, or traffic data**
- **No "As featured in" with fake media outlets**
- Honest copy like "Built for consumer trust" with methodology and disclosure
- PLACEHOLDER labels for unverified content
- Press mentions note: "Press mentions will appear here when earned"

### Provider Content

- Keep factual information from existing HTML
- Use PLACEHOLDER badges where data is unverified
- Preserve links to official provider sites
- No invented technical specifications or coverage claims

### Lead Capture

- Live lead capture stays OFF
- ZIP form is client-only stub (no server POST)
- Clear messaging about preview status

## Routes

The following routes are implemented:

- `/` - Homepage with availability check
- `/providers` - Provider directory (14 providers)
- `/providers/[slug]` - Individual provider pages
- `/internet` - Internet technology guide
- `/compare` - Comparison tool placeholder
- `/about` - About page
- `/methodology` - Methodology page
- `/disclosure` - Disclosure page
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/contact` - Contact page

## Deployment (Vercel)

### Settings

- **Framework Preset:** Next.js
- **Root Directory:** `.` (repository root)
- **Build Command:** `npm run build` (default)
- **Output Directory:** `.next` (default)
- **Install Command:** `npm install` (default)

The site will automatically build and deploy on push to the main branch once this PR is merged.

## Design System

### Colors (Brand)

- **Primary:** Deep blue (`hsl(210 100% 40%)`)
- **Secondary:** Teal (`hsl(174 63% 40%)`)
- Professional, enterprise marketing feel

### Typography

- **Headings:** Plus Jakarta Sans (bold, 700/800)
- **Body:** Inter (400/600)

## Legacy Content

The original static HTML files have been moved to the `legacy/` directory for reference. The new Next.js application is the primary codebase.

## Development Notes

- All pages use the `SiteLayout` component for consistent header, footer, and preview banner
- Metadata is configured per-page with noindex robots meta
- Components follow shadcn/ui patterns and conventions
- No external state management - using React Server Components where possible

## License

Proprietary - All rights reserved

## Contact

See the [Contact page](/contact) for support and inquiries.
