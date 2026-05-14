# Kamar Santri

Platform pembelajaran modern untuk pesantren — menghubungkan santri, ustadz, dan ilmu dalam satu tempat.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Plus Jakarta Sans (via `next/font`)

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # App Router pages & layouts
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles & theme
│   ├── login/
│   │   └── page.tsx        # Login page
│   └── dashboard/
│       ├── layout.tsx      # Dashboard layout (sidebar)
│       └── page.tsx        # Dashboard home
├── components/
│   ├── icons/              # Icon & logo components
│   ├── landing/            # Landing page sections
│   ├── layout/             # Layout components (Navbar, Footer, Sidebar)
│   └── ui/                 # Reusable UI components (Button, Card, Input)
├── lib/                    # Constants & utilities
└── types/                  # TypeScript type definitions
```

## Pages

| Route        | Description                          |
| ------------ | ------------------------------------ |
| `/`          | Landing page with hero, features, stats, CTA |
| `/login`     | Login / register page                |
| `/dashboard` | Student dashboard with stats, courses, schedule |

## Design

- **Colors**: Green (primary), cream, white
- **Style**: Modern Islamic startup look with geometric patterns
- **Layout**: Mobile-first responsive design

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```
