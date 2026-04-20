# StatTarian — Marketing Website Build Prompt

> **Purpose**: Hand this prompt to an AI coding agent to scaffold and build the StatTarian commercial marketing website — a standalone, public-facing site that showcases the product, generates demo leads, and communicates clear value to academy decision-makers.

---

## 0. What You Are Building

A standalone **marketing and commercial website** for **StatTarian** — a multi-tenant SaaS platform for Welsh football academy management. The site is not the product itself; it is the shop window.

**Primary goal:** Drive demo request conversions from academy decision-makers (Academy Directors, Operations Leads, Head Coaches).

**The site must convey:**
- StatTarian replaces a fragmented stack of 10+ tools (Spond, Hudl, COMET, Spiideo, Catapult, Pitchero, etc.) with a single unified platform.
- It is purpose-built for Welsh football academies and FAW compliance.
- It is enterprise-grade: safeguarding, welfare, RBAC, bilingual (Welsh/English) readiness.
- It is modern, trustworthy, and coach-friendly — not generic sports software.

---

## 1. Tech Stack (Non-Negotiable)

| Layer | Technology | Notes |
|---|---|---|
| Runtime | Node.js 20 | LTS |
| Language | TypeScript | strict mode |
| Framework | Next.js 15 (App Router) | Static generation where possible; ISR for dynamic pages |
| UI primitives | shadcn/ui (Radix) | Same component library as the product |
| Styling | Tailwind CSS v4 | StatTarian design tokens only — no raw hex values |
| Animations | Framer Motion | Scroll-triggered reveals, hero animations, feature transitions |
| Forms | React Hook Form + Zod | Demo request and contact forms |
| Email delivery | Resend | Deliver demo request submissions to a configured inbox |
| i18n | next-intl | English (en-GB) default; Welsh (cy) structure scaffolded and ready — no Welsh strings required in this build, English only |
| Fonts | next/font/google | Orbitron, Saira Semi Condensed, Exo 2 — same as the product |
| Icons | Lucide React | |
| SEO | next/head + next-sitemap | `sitemap.xml`, `robots.txt`, Open Graph meta per page |
| Deployment | Vercel | Static + Edge-compatible |
| Analytics | Vercel Analytics | Lightweight, privacy-first |

---

## 2. Design System — Brand Tokens

> This site uses **the exact same design tokens** as the StatTarian product. No raw hex values may appear in production code. Use semantic token names throughout.

### Brand Base Tokens (CSS custom properties in `globals.css`)

```css
:root {
  --color-brand-900: #061E29;   /* Deep navy — primary brand anchor */
  --color-brand-700: #1D546D;   /* Mid teal-navy — primary interactive */
  --color-brand-500: #5F9598;   /* Muted teal — accent */
  --color-brand-50:  #F3F4F4;   /* Off-white brand tint */

  --color-neutral-900: #0D0D0D;
  --color-neutral-700: #2A2A2A;
  --color-neutral-500: #6B6B6B;
  --color-neutral-300: #D1D1D1;
  --color-neutral-50:  #F9F9F9;
  --color-neutral-0:   #FFFFFF;
}
```

### Semantic Tokens

Map these to the Tailwind config and shadcn theme:

| Token | Light | Dark |
|---|---|---|
| `--background` | `--color-neutral-50` | `--color-brand-900` |
| `--foreground` | `--color-neutral-900` | `--color-neutral-50` |
| `--card` | `--color-neutral-0` | `--color-neutral-700` |
| `--primary` | `--color-brand-700` | `--color-brand-500` |
| `--primary-foreground` | `--color-neutral-0` | `--color-brand-900` |
| `--accent` | `--color-brand-500` | `--color-brand-700` |
| `--border` | `--color-neutral-300` | `--color-neutral-700` |
| `--muted-foreground` | `--color-neutral-700` | `--color-neutral-300` |

### Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display / Hero | Orbitron | 700–900 | Page heroes, product name, major headings |
| Heading | Saira Semi Condensed | 600–700 | Section titles, card headings |
| Body | Exo 2 | 400–500 | Paragraphs, labels, UI text |
| Mono | System mono | 400 | Code snippets only |

**Base size:** 16px. Scale: `text-sm` (14px), `text-base` (16px), `text-lg` (18px), `text-xl` (20px), `text-2xl` (24px), `text-3xl` (30px), `text-4xl` (36px), `text-5xl` (48px).

### Dark Theme Default

> The marketing site defaults to **dark mode** (`--background: var(--color-brand-900)`) to match the product's premium feel. Light mode support is optional; include a toggle if time allows but do not block on it.

---

## 3. Site Structure & Routes

```
app/
  (marketing)/
    page.tsx                  → / (Home)
    features/
      page.tsx                → /features
    pricing/
      page.tsx                → /pricing
    about/
      page.tsx                → /about
    contact/
      page.tsx                → /contact (includes demo request form)
    legal/
      privacy/
        page.tsx              → /legal/privacy
      terms/
        page.tsx              → /legal/terms
  layout.tsx                  → Root layout (nav + footer)
  not-found.tsx               → 404 page

components/
  marketing/
    nav/
      SiteNav.tsx             → Top navigation bar
      MobileMenu.tsx          → Mobile hamburger/sheet menu
    hero/
      HeroSection.tsx         → Orchestrates Phase 1 + Phase 2 (Client Component)
      HeroWordReveal.tsx      → Stacked animated word sequence (Client Component)
    home/
      PersonaSection.tsx      → Role persona cards (Director, Head Coach, Safeguarding)
      HowItWorksSection.tsx   → 3-step onboarding process
    features/
      ModuleGrid.tsx          → 8-module showcase grid
      ModuleCard.tsx
      RoleFilterBar.tsx       → Persona-based module filter tabs (Client Component)
      ToolReplacementTable.tsx → "StatTarian replaces…" comparison
    social-proof/
      TestimonialsSection.tsx → Named role-specific quote cards
      MarqueeBar.tsx          → Infinite-scroll club logo marquee
      StatsBar.tsx            → Animated stat counters (Client Component)
    pricing/
      PricingCard.tsx
      PricingTable.tsx
      TierQualifierWidget.tsx → Interactive tier recommender (Client Component)
    cta/
      DemoCtaSection.tsx      → Mid-page and bottom CTA banners
    forms/
      DemoRequestForm.tsx
    footer/
      SiteFooter.tsx

lib/
  send-demo-request.ts        → Server Action using Resend
  schemas/
    demo-request.schema.ts    → Zod validation schema

messages/
  en.json                     → All English strings (next-intl)
  cy.json                     → Welsh strings scaffold (empty keys, same structure as en.json)
```

---

## 4. Page Specifications

### 4.1 Home (`/`)

**Goal:** Communicate the core value proposition and drive visitors to request a demo or explore features.

#### Sections (in order):

1. **SiteNav** — Sticky top bar. Logo left, nav links centre (`Features`, `Pricing`, `About`, `Contact`), CTA button right (`Request a Demo` → `/contact`). Transparent on hero, solid (brand-900 with border) on scroll.

2. **HeroSection** — Full-viewport hero. This is a Client Component (`HeroSection.tsx`) because it contains Framer Motion animations.

   **Phase 1 — Animated word sequence** *(Spiideo-inspired)*: On page load, render a full-screen centred sequence of five stacked words using `motion.div` with `staggerChildren: 0.15`. Each word is a `motion.span`, animating from `{ opacity: 0, y: 48 }` → `{ opacity: 1, y: 0 }` over `0.5s`. The words are:
   ```
   DEVELOP
   PROTECT
   PERFORM
   EVERY
   PLAYER
   ```
   All words use Orbitron 900, `text-6xl md:text-8xl lg:text-9xl`, `text-foreground`. The final word `PLAYER` renders in `text-primary`. The full sequence auto-fades out after a 2.5s hold using a follow-up `animate={{ opacity: 0 }}` with `transition={{ delay: 2.5, duration: 0.6 }}`. This component is `HeroWordReveal.tsx`.

   **Phase 2 — Main hero content** (fades in after word reveal exits, `transition={{ delay: 3.5, duration: 0.8 }}`):
   - Display heading (Orbitron 700): `"One Platform. Every Role. Every Academy."`
   - Subheading (Saira Semi Condensed): `"StatTarian unifies player development, safeguarding, performance, media, and communications into a single platform built for Welsh football academies."`
   - Two CTAs: Primary `"Request a Demo"` (→ `/contact`), Secondary `"See Features"` (→ `/features`)
   - Right side: Placeholder UI mockup frame (`aspect-video`, rounded-xl, `border border-accent` with `drop-shadow-[0_0_32px_var(--color-brand-500)]`) — `<div>` labelled `[App Screenshot — Dashboard]`
   - Scroll indicator (animated chevron down, looping `translateY` bounce)
   - Background: Slow radial gradient pulse from brand-900 to brand-700 via Framer Motion `animate` with `transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}`

3. **MarqueeBar** *(Pitchero-inspired)* — Infinite horizontal scroll of club logo badges. Label above: `"Trusted by academies across Wales"` (Saira Semi Condensed, `text-muted-foreground text-sm uppercase tracking-widest`). Below the label, a `overflow-hidden` row contains two identical sets of 8 placeholder club crest circles (`h-12 w-12 rounded-full bg-muted border border-border`) rendered side-by-side. A CSS `@keyframes marquee` animation drives `translateX(0%) → translateX(-50%)` on a 24s linear infinite loop, creating a seamless scroll. `will-change: transform` for performance. Pauses on `hover:animation-pause`. Component: `MarqueeBar.tsx`.

4. **StatsBar** *(Catapult/Dartfish-inspired)* — Full-width row of four bold stats. Background: `bg-card border-y border-border`. Each stat is a column: large animated number + short label beneath. Use `useInView` to trigger a count-up animation from `0` to the target value using a custom `useCountUp(target, duration)` hook (pure `useEffect` + `requestAnimationFrame` — no new dependency). Stats:
   - `8` — `"Purpose-built modules"`
   - `14` — `"Distinct user roles"`
   - `10+` — `"Tools replaced"`
   - `1` — `"Platform for your entire academy"`
   Numbers: Orbitron 900, `text-5xl text-primary`. Labels: Saira Semi Condensed, `text-muted-foreground`. Component: `StatsBar.tsx`.

5. **ValuePropsSection** — Three-column icon grid:
   - `ShieldCheck` — `"Safeguarding built in"` — welfare, medical, and safeguarding modules with full audit trail
   - `LayoutDashboard` — `"One platform, every role"` — 14 distinct role profiles from Director to Parent
   - `TrendingUp` — `"FAW COMET integrated"` — native ingestion of FAW COMET player registration data

6. **PersonaSection** *(Spiideo/Scoutastic-inspired)* — `"StatTarian works for everyone in your academy"`. Three large persona cards in a responsive grid. Each card has: a role icon, role title (Orbitron 700), a one-sentence hook, and a `"See what you get →"` link to `/features` (with a URL hash anchor to a relevant module). Cards:
   - `Users` icon — **For the Academy Director** — `"Complete visibility across every team, every module, and every player — all from one screen."`  → `/features#reporting`
   - `Whistle` icon — **For the Head Coach** — `"Session plans, video clips, IDPs, and squad availability — ready before you walk onto the pitch."` → `/features#performance`
   - `ShieldCheck` icon — **For Medical & Safeguarding** — `"Gated welfare records, safeguarding cases, and medication logs — only you can see what you need to see."` → `/features#welfare`
   Card style: `bg-card border border-border rounded-2xl p-8`, hover: `border-primary` transition. Framer Motion stagger reveal. Component: `PersonaSection.tsx`.

7. **ToolReplacementSection** — Full-width section with heading: `"Stop paying for 10 subscriptions"`. Render a styled comparison table listing the 10 tools StatTarian replaces (Spond, FAW COMET, Hudl Sportscode, Spiideo, Dartfish, Catapult/STATSports, Wyscout/InStat, Pitchero, Coach Logic/Nacsport, VEO/Trace) with the equivalent StatTarian module. Use a two-column layout: `Platform` + `StatTarian replaces it with`. Animate rows in on scroll.

8. **ModuleHighlightSection** — Teaser of 4 featured modules (Academy, Performance, Welfare, Media) as large cards. Each card: icon, module name, one-sentence description, `"Learn more →"` link to `/features`. Hover: card lifts with `border-accent` glow.

9. **HowItWorksSection** *(Pitchero-inspired)* — `"Up and running in days, not months"`. Three numbered steps in a horizontal row (stacked on mobile). Each step: large Orbitron step number in `text-primary` (opacity 20% behind), icon above, heading, one-sentence description. Steps:
   - **Step 1** — `Clipboard` — `"Book a Demo"` — `"We'll walk through your academy's structure, modules needed, and user roles in a 30-minute session."`
   - **Step 2** — `Settings` — `"We Configure Your Academy"` — `"Our team sets up your organisation, imports existing data, and configures roles and permissions."`
   - **Step 3** — `Rocket` — `"Go Live"` — `"Your staff and parents get access. Training, welfare, fixtures, and video — all in one place from day one."`
   A thin horizontal connector line (hidden on mobile) links the three step circles. Component: `HowItWorksSection.tsx`.

10. **DemoCtaSection** (mid-page) — Full-width dark band. Heading: `"See StatTarian in action"`. Subheading: `"Book a 30-minute demo tailored to your academy's needs."` Primary CTA button → `/contact`.

11. **TestimonialsSection** *(Scoutastic-inspired — named, role-specific)* — Three quote cards. Each uses a specific named placeholder attribution with a real job title and academy type. Do not use generic `"Academy Director"` alone:
   - `"StatTarian has transformed how we manage our development programme. Everything — IDPs, welfare checks, video, fixture scheduling — is finally in one place."` — **[Placeholder] James O.**, Academy Director, Welsh Tier 1 Academy
   - `"The safeguarding audit trail alone saves us hours every week. I know exactly who accessed what and when — without chasing emails."` — **[Placeholder] Sian W.**, Safeguarding Lead, FAW Licensed Academy
   - `"As a head coach I used to switch between four different apps before a session. Now everything is right there — player profiles, load data, video clips, session plan."` — **[Placeholder] Rhys T.**, Head Coach, Under-18s Academy
   Each card: `"` quotation mark accent in Orbitron `text-primary opacity-30` (decorative), body text, name in Orbitron 600, role + academy in Exo 2 `text-muted-foreground`, five filled `Star` icons in `text-accent`. All attributions include `{/* TODO: Replace with real testimonial */}` comment.

12. **SiteFooter** — Logo, tagline, nav columns (Product, Company, Legal), social icons (Twitter/X, LinkedIn — placeholder hrefs), copyright line, Welsh flag emoji flag for Welsh/English toggle (scaffold only — language switcher structure, no active switching in this build).

---

### 4.2 Features (`/features`)

**Goal:** Give decision-makers a clear, module-by-module breakdown of what StatTarian does.

#### Sections:

1. **SiteNav**

2. **PageHero** — Compact hero (50vh). Heading: `"Everything your academy needs, in one place."`. Subheading: `"Eight purpose-built modules. One unified platform."`.

3. **RoleFilterBar** *(Scoutastic-inspired)* — A horizontal scrollable tab bar above the module sections. Tabs: `All`, `Academy Director`, `Head Coach`, `Analyst`, `Medical & Safeguarding`, `Parent`. This is a Client Component. Selected state: `bg-primary text-primary-foreground rounded-full px-4 py-1`. Each module section below has `data-roles="[comma-separated role keys]"`. Selecting a tab hides modules not tagged with that role (add `hidden` class) and highlights matching modules. Default: `All`. Component: `RoleFilterBar.tsx`.

   Module-to-role tag mapping:
   | Module | Visible for roles |
   |---|---|
   | Academy | all |
   | Performance | head_coach, analyst, academy_director |
   | Media | head_coach, analyst, academy_director |
   | Welfare | medical_safeguarding, academy_director |
   | Communication | all |
   | Reporting | academy_director, analyst |
   | Account | academy_director |
   | Home | all |

4. **ModuleGrid** — Full 8-module showcase. For each module, render a section with:
   - Module name + Lucide icon (matching the app's sidebar icons — see table below)
   - 2–3 sentence description
   - 3–5 feature bullet points
   - One placeholder mockup frame (`[Module Screenshot — {module name}]`)
   - Alternate image/text layout per module (image left, text right / text left, image right)

   | Module | Icon | Description |
   |---|---|---|
   | Academy | `GraduationCap` | Player registration, squad management, fixture scheduling, trials, FAW COMET ingestion |
   | Performance | `TrendingUp` | Individual Development Plans (IDPs), physical benchmarks, RPE tracking, session assessments |
   | Media | `Film` | Video library, player-tagged clips with timestamp annotations, signed secure playback, coach playlists |
   | Welfare | `ShieldCheck` | Safeguarding cases, medical records, medication logs, welfare concerns — all access-gated |
   | Communication | `MessageSquare` | Fixture RSVPs, group announcements, parent portal, attendance confirmations, safeguarding-audited messaging |
   | Reporting | `BarChart2` | Academy-wide performance dashboards, attendance trends, development progress exports |
   | Account | `Settings` | Organisation billing, user management, subscription, seat allocation |
   | Home | `LayoutDashboard` | Role-personalised dashboard — every user sees what matters to their role |

4. **ToolReplacementTable** — Condensed version of the Home comparison table.

5. **DemoCtaSection** (bottom)

6. **SiteFooter**

---

### 4.3 Pricing (`/pricing`)

**Goal:** Present clear pricing tiers for academy decision-makers; all tiers funnel to demo/contact.

#### Tiers

> Pricing figures are **placeholders** and must be clearly labelled as such with a note: `"Pricing is indicative. Contact us for a tailored quote."`.

| Tier | Name | Target | Monthly (placeholder) | Key inclusions |
|---|---|---|---|---|
| 1 | **Academy Starter** | Single age-group academy, ≤30 players | `£POA` | Academy, Communication, Home modules; up to 5 staff seats; email support |
| 2 | **Academy Pro** | Full-scale single academy | `£POA` | All 8 modules; unlimited players; 20 staff seats; parent portal; FAW COMET sync; priority support |
| 3 | **Multi-Academy / Enterprise** | Regional hub, multi-club, governing body | `£POA` | Everything in Pro; multi-tenant org hierarchy; custom role configuration; API access; dedicated onboarding; SLA |

#### Sections:

1. **SiteNav**

2. **PageHero** — Compact. Heading: `"Transparent pricing for every academy."`. Subheading: `"Start with what you need. Scale as you grow."`.

3. **TierQualifierWidget** *(Veo-inspired)* — A compact interactive qualifier that recommends a tier before showing the pricing cards. This is a Client Component (`TierQualifierWidget.tsx`). It asks two quick questions:
   - `"How many players are in your academy?"` → pill options: `≤ 30`, `31–100`, `100+`
   - `"How many staff accounts do you need?"` → pill options: `1–5`, `6–20`, `20+`
   Based on answers, set a `recommendedTier` state (`'starter' | 'pro' | 'enterprise'`) passed down to `PricingTable` as a prop. The recommended card gets a `"Recommended for you"` badge (`bg-primary text-primary-foreground text-xs rounded-full`). Default state (no selection): Pro tier highlighted. The widget is visually compact — `bg-card border border-border rounded-xl p-6 max-w-xl mx-auto mb-12`.

4. **PricingTable** — Three `PricingCard` components side by side (stacked on mobile). Each card:
   - Tier name + target audience label
   - Price badge (£POA with "Get a quote" CTA)
   - Feature list with `Check` icons
   - `"Recommended for you"` badge if `recommendedTier` matches (driven by `TierQualifierWidget`)
   - Primary CTA → `/contact?plan=<tier>` (pre-fills the demo request form's plan field)

4. **FaqSection** — 5–6 accordion items addressing common decision-maker questions:
   - "Does StatTarian integrate with FAW COMET?" → Yes, via a native ingestion API
   - "How is safeguarding data protected?" → Role-gated, audit-logged, welfare access control
   - "Can parents access the platform?" → Yes, a dedicated parent portal is included
   - "Is there a Welsh language option?" → Yes, full Welsh/English bilingual support is built into the platform
   - "How long does onboarding take?" → Typically 2–4 weeks with dedicated support
   - "Can we migrate from Pitchero / Hudl?" → Yes, data migration support is available on Pro and Enterprise plans

5. **DemoCtaSection** (bottom)

6. **SiteFooter**

---

### 4.4 About (`/about`)

**Goal:** Build trust and tell the StatTarian story.

#### Sections:

1. **SiteNav**

2. **PageHero** — Compact. Heading: `"Built for Welsh football. By people who love the game."`.

3. **MissionSection** — Two columns: copy block (mission, vision, Welsh football context) + brand graphic (placeholder — stylised football pitch graphic using brand colours, SVG).

4. **StorySection** — Timeline or narrative paragraphs: why StatTarian was built, the problem it solves, the Welsh football ecosystem.
   - Placeholder copy: `"Welsh football academies have long relied on a patchwork of tools — scheduling apps, spreadsheets, separate video platforms, and disconnected communication channels. StatTarian was built to change that. A single, purposefully designed platform that puts the player at the centre of everything."`

5. **ValuesSection** — Three-column card grid:
   - `ShieldCheck` — **Player First** — Every decision is made with player development and welfare at its core
   - `Globe` — **Welsh at Heart** — Native bilingual support and FAW compliance built in from day one
   - `Lock` — **Trust by Design** — Enterprise-grade safeguarding, RBAC, and audit trails — not an afterthought

6. **TeamSection** — Placeholder team grid. 3–4 cards with circular avatar (grey placeholder), name, role title. Note: `"[Placeholder — team profiles to be added]"`.

7. **DemoCtaSection** (bottom)

8. **SiteFooter**

---

### 4.5 Contact / Demo Request (`/contact`)

**Goal:** Capture qualified demo leads with enough context to personalise the demo.

#### Sections:

1. **SiteNav**

2. **PageHero** — Compact. Heading: `"Request a Demo"`. Subheading: `"We'll set up a 30-minute walkthrough tailored to your academy's structure and needs."`.

3. **ContactLayout** — Two-column layout on desktop:

   **Left column — Demo Request Form (`DemoRequestForm`):**

   Fields:
   | Field | Type | Required | Notes |
   |---|---|---|---|
   | First name | text | ✅ | |
   | Last name | text | ✅ | |
   | Email address | email | ✅ | |
   | Organisation / Academy name | text | ✅ | |
   | Your role | select | ✅ | Options: Academy Director, Operations Lead, Head Coach, Coach, Medical Staff, Safeguarding Lead, Other |
   | Plan of interest | select | ❌ | Options: Academy Starter, Academy Pro, Multi-Academy/Enterprise, Not sure. Pre-filled from `?plan=` query param |
   | How did you hear about us? | select | ❌ | Options: FAW / Coaching Wales, Word of mouth, Social media, Search engine, Other |
   | Message / additional context | textarea | ❌ | Max 500 chars |
   | GDPR consent checkbox | checkbox | ✅ | Label: `"I agree to StatTarian processing my data to respond to this enquiry. View our Privacy Policy."` — Privacy Policy links to `/legal/privacy` |

   Validation: React Hook Form + Zod. All required fields validated on submit.

   Submission: Server Action (`send-demo-request.ts`) using Resend. On success: replace form with a confirmation message. On error: display inline error toast.

   **Right column — Info panel:**
   - What to expect from the demo (3 bullet points)
   - Contact email (placeholder: `hello@stattarian.com`)
   - Response time note: `"We typically respond within one working day."`
   - Small brand graphic (placeholder)

4. **SiteFooter**

---

### 4.6 Legal Pages

#### `/legal/privacy` — Privacy Policy
Placeholder content following GDPR structure:
- Data controller details (placeholder)
- What data is collected and why
- Legal basis for processing
- Data retention periods
- User rights (access, erasure, portability)
- Contact for data requests

#### `/legal/terms` — Terms of Service
Placeholder content:
- Acceptance of terms
- Service description
- Permitted use
- Intellectual property
- Limitation of liability
- Governing law: England & Wales

> Both pages use a clean, readable `prose` layout (Tailwind `prose` class via `@tailwindcss/typography`). No hero, just a content page with the standard nav and footer.

---

## 5. Shared Components

### SiteNav

```
[ StatTarian Logo (Orbitron) ]  [ Features ]  [ Pricing ]  [ About ]  [ Contact ]   [ Request a Demo → ]
```

- Logo: "StatTarian" in Orbitron 700, `--color-brand-500` accent on the "S" or as a monogram mark
- Desktop: horizontal link row + CTA button
- Mobile (< 768px): hamburger icon → `Sheet` component (shadcn) slides in from right with stacked links and CTA
- Active route: `--color-brand-500` text + subtle underline
- Scroll behaviour: `bg-transparent` → `bg-brand-900/95 backdrop-blur-sm border-b border-border` on scroll (use `useScrollY` from Framer Motion)

### SiteFooter

Four columns:
1. **Brand** — Logo, tagline (`"The unified platform for Welsh football academies."`), social links
2. **Product** — Features, Pricing, Request a Demo
3. **Company** — About, Contact
4. **Legal** — Privacy Policy, Terms of Service

Bottom bar: `"© {year} StatTarian. All rights reserved."` | `"Built for Welsh football 🏴󠁧󠁢󠁷󠁬󠁳󠁿"`

### DemoCtaSection

Reusable full-width CTA band. Props: `heading`, `subheading`, `ctaLabel`, `ctaHref`. Default dark band using `--color-brand-700` background.

---

## 6. Animation Guidelines (Framer Motion)

- **Scroll reveals:** All sections below the hero use `motion.div` with `initial={{ opacity: 0, y: 32 }}` → `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}`. Stagger children in grids using `variants` with `staggerChildren: 0.1`.
- **Hero word reveal** *(Spiideo-inspired)*: `variants={{ container: { staggerChildren: 0.15 }, item: { initial: { opacity: 0, y: 48 }, animate: { opacity: 1, y: 0 } } }}`. The reveal container itself animates out after `2.5s` hold: `animate={{ opacity: 0 }} transition={{ delay: 2.5, duration: 0.6 }}`. Main hero content enters at `transition={{ delay: 3.5, duration: 0.8 }}`.
- **Hero background:** Slow radial gradient pulse using `animate` with `transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}`.
- **Infinite marquee** *(Pitchero-inspired)*: Pure CSS `@keyframes marquee` defined in `globals.css`. Exposed as a Tailwind `animate-marquee` utility via `theme.extend.animation` in `tailwind.config.ts`. Pauses on hover with `hover:[animation-play-state:paused]`.
  ```css
  @keyframes marquee {
    from { transform: translateX(0%) }
    to   { transform: translateX(-50%) }
  }
  ```
- **Stats counter** *(Catapult/Dartfish-inspired)*: A custom `useCountUp(target: number, duration = 1500)` hook using `useEffect` + `requestAnimationFrame`. Fires when the `StatsBar` enters the viewport (gated by `useInView` from Framer Motion). No additional dependency required.
- **Card hover:** `whileHover={{ scale: 1.02, boxShadow: "0 0 24px var(--color-brand-500)" }}` on feature/module cards and persona cards.
- **Persona card hover:** `border-primary` transition using Tailwind `transition-colors duration-200`.
- **Nav scroll:** `useScroll` from Framer Motion to drive nav background opacity.
- **Step connector line (HowItWorks):** A `motion.div` with `scaleX: 0 → 1` triggered by `whileInView`, `transformOrigin: 'left'`, simulating the line drawing in left-to-right.
- **No layout animations** on page transitions in the initial build — keep it simple.

---

## 7. SEO & Metadata

Each page exports a `generateMetadata()` function:

| Page | Title | Description |
|---|---|---|
| Home | `StatTarian — The Unified Platform for Welsh Football Academies` | `StatTarian replaces Spond, Hudl, COMET, and 7 other tools with a single platform for player development, safeguarding, and academy management.` |
| Features | `Features — StatTarian` | `Explore StatTarian's 8 modules: Academy, Performance, Media, Welfare, Communication, Reporting, and more.` |
| Pricing | `Pricing — StatTarian` | `Academy Starter, Pro, and Enterprise plans. Get a tailored quote for your Welsh football academy.` |
| About | `About — StatTarian` | `Built for Welsh football, by people who love the game. Learn about StatTarian's mission and story.` |
| Contact | `Request a Demo — StatTarian` | `Book a 30-minute personalised demo of StatTarian for your academy.` |

Open Graph: `og:image` → `/og-image.png` (1200×630 placeholder in `public/`). Include `og:type`, `og:url`, `og:site_name`.

`robots.txt`: allow all, link to sitemap.
`sitemap.xml`: generated via `next-sitemap` — include all 6 main routes, exclude `/api/*`.

---

## 8. Forms & Email

### Zod Schema (`demo-request.schema.ts`)

```ts
import { z } from 'zod'

export const demoRequestSchema = z.object({
  firstName:    z.string().min(1, 'Required').max(50),
  lastName:     z.string().min(1, 'Required').max(50),
  email:        z.string().email('Enter a valid email address'),
  organisation: z.string().min(1, 'Required').max(100),
  role:         z.enum(['academy_director','operations_lead','head_coach','coach','medical','safeguarding','other']),
  plan:         z.enum(['starter','pro','enterprise','unsure']).optional(),
  source:       z.enum(['faw','word_of_mouth','social','search','other']).optional(),
  message:      z.string().max(500).optional(),
  consent:      z.literal(true, { errorMap: () => ({ message: 'You must agree to continue' }) }),
})

export type DemoRequestFormData = z.infer<typeof demoRequestSchema>
```

### Server Action (`send-demo-request.ts`)

```ts
'use server'
import { Resend } from 'resend'
import { demoRequestSchema } from '@/lib/schemas/demo-request.schema'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendDemoRequest(data: unknown) {
  const parsed = demoRequestSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: 'Validation failed' }
  }
  const { firstName, lastName, email, organisation, role, plan, source, message } = parsed.data

  await resend.emails.send({
    from:    'StatTarian Website <noreply@stattarian.com>',
    to:      process.env.DEMO_REQUEST_EMAIL ?? 'hello@stattarian.com',
    subject: `Demo Request — ${firstName} ${lastName} (${organisation})`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Organisation: ${organisation}`,
      `Role: ${role}`,
      `Plan: ${plan ?? 'Not specified'}`,
      `Source: ${source ?? 'Not specified'}`,
      `Message: ${message ?? 'None'}`,
    ].join('\n'),
  })

  return { success: true }
}
```

### Environment Variables

```env
# Resend
RESEND_API_KEY=<your-resend-api-key>      # Server-only — never NEXT_PUBLIC_
DEMO_REQUEST_EMAIL=hello@stattarian.com   # Recipient for demo request submissions

# App
NEXT_PUBLIC_APP_URL=https://www.stattarian.com
```

---

## 9. i18n Structure

Use `next-intl` in static mode (no routing — both locales served from the same URL in this build; routing can be added later).

```
messages/
  en.json   → all English copy strings
  cy.json   → Welsh keys scaffold (same structure, empty string values marked with [cy] prefix)
```

All hardcoded strings must be extracted into `messages/en.json` from the start. No literal English strings in component JSX — use `useTranslations()` or `getTranslations()` throughout.

Welsh language toggle in the footer/nav is **UI scaffold only** in this build. Switching locale is not wired. A `TODO: wire locale switcher` comment must be left where the switcher logic would go.

---

## 10. Project Scaffolding

### Initialise

```bash
npx create-next-app@latest stattarian-web \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd stattarian-web
npx shadcn@latest init   # base colour: neutral — tokens overridden immediately
```

### Install dependencies

```bash
npm install framer-motion react-hook-form @hookform/resolvers zod resend next-intl lucide-react
npm install -D @tailwindcss/typography next-sitemap
```

> No additional animation libraries are needed. The marquee uses pure CSS keyframes. The stats counter uses a custom `useCountUp` hook. Framer Motion covers everything else.

### shadcn components to add

```bash
npx shadcn@latest add button card badge separator sheet accordion input textarea select label checkbox
```

---

## 11. File & Component Conventions

- All components in `src/components/marketing/` — no cross-contamination with app components if this becomes a monorepo
- Server Components by default; `'use client'` only for interactive elements (nav scroll, form, accordion, mobile menu)
- `DemoRequestForm` is a Client Component (form interactivity)
- `SiteNav` root is a Client Component (scroll detection)
- All other sections are Server Components
- No `useEffect` for data fetching — marketing content is static
- Tailwind classes only via semantic token names (e.g. `bg-primary`, `text-foreground`, `border-border`) — no raw hex, no arbitrary values except in `globals.css` token definitions
- Framer Motion `motion.*` components are client-side — wrap in a thin `<AnimatedSection>` Client Component to keep parent Server Components clean

### AnimatedSection wrapper pattern

```tsx
// src/components/marketing/AnimatedSection.tsx
'use client'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function AnimatedSection({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}
```

---

## 12. Placeholder Content Rules

Where real assets are not available, use the following placeholder conventions:

- **App screenshots:** `<div className="aspect-video rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground text-sm">[App Screenshot — {module name}]</div>`
- **Club logos:** `<div className="h-12 w-12 rounded-full bg-muted" aria-label="Club logo placeholder" />`
- **Team member avatars:** `<div className="h-16 w-16 rounded-full bg-muted" />`
- **OG image:** A 1200×630 dark PNG (`public/og-image.png`) with the StatTarian wordmark centred — generate programmatically or use a simple placeholder
- All placeholder elements must include a comment: `{/* TODO: Replace with real asset */}`

---

## 13. Quality & Accessibility

- All interactive elements must have visible focus rings (`focus-visible:ring-2 ring-primary`)
- Colour contrast: all text/background pairs must meet WCAG 2.1 AA (4.5:1 for body, 3:1 for large text)
- All images need `alt` text; decorative images use `alt=""`
- `aria-label` on icon-only buttons (mobile menu toggle, social icons)
- `<main>` landmark wrapping page content on every page
- Page `<title>` and `<meta name="description">` set per page via `generateMetadata()`
- Form: associate every `<label>` with its input via `htmlFor`/`id`; display inline validation errors linked with `aria-describedby`
- The `DemoRequestForm` must show a visible loading state on submission (disable button, spinner icon)

---

## 14. Deployment

The marketing site deploys to Vercel as a standalone project separate from the product app.

- **Domain (placeholder):** `www.stattarian.com`
- **Framework preset:** Next.js (auto-detected)
- **Environment variables in Vercel:** `RESEND_API_KEY`, `DEMO_REQUEST_EMAIL`, `NEXT_PUBLIC_APP_URL`
- `next-sitemap` runs as a `postbuild` script: add `"postbuild": "next-sitemap"` to `package.json`
- `next-sitemap.config.js`:

```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://www.stattarian.com',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
}
```

---

## 15. Build Completion Checklist

Before marking this build as done, verify every item:

- [ ] All 6 page routes render without error
- [ ] `SiteNav` is sticky, transparent on hero, solid on scroll, mobile menu works
- [ ] `HeroWordReveal` stacked word animation plays on load, exits, then main hero content fades in
- [ ] `HeroSection` CTAs navigate correctly
- [ ] `MarqueeBar` scrolls infinitely, pauses on hover
- [ ] `StatsBar` counters animate from 0 on scroll-in
- [ ] `PersonaSection` three persona cards render with correct `/features` hash links
- [ ] `HowItWorksSection` three steps render; connector line animates on scroll
- [ ] `ToolReplacementSection` lists all 10 replaced platforms
- [ ] All 8 modules are represented on `/features`
- [ ] `RoleFilterBar` on `/features` filters module sections by selected role
- [ ] `/pricing` `TierQualifierWidget` recommends correct tier based on answers
- [ ] `/pricing` shows 3 tiers; FAQ accordion opens/closes
- [ ] `/about` renders without real assets (placeholders in place)
- [ ] `DemoRequestForm` validates all required fields, submits via Server Action, shows success/error state
- [ ] `?plan=` query param pre-fills plan select on `/contact`
- [ ] Resend email delivery tested (use Resend test API key in development)
- [ ] `/legal/privacy` and `/legal/terms` render placeholder content
- [ ] `messages/en.json` contains all copy strings; `messages/cy.json` scaffold present
- [ ] `sitemap.xml` and `robots.txt` generated on build
- [ ] Open Graph metadata correct on all pages
- [ ] `@keyframes marquee` defined in `globals.css`; `animate-marquee` registered in Tailwind config
- [ ] No raw hex values in any `.tsx` or `.css` file (only in `globals.css` token definitions)
- [ ] No hardcoded English strings in JSX (all via `useTranslations()`)
- [ ] All placeholder elements have `{/* TODO: Replace with real asset */}` comments
- [ ] WCAG AA contrast passes on all text elements
- [ ] Focus rings visible on all interactive elements
- [ ] Framer Motion scroll reveals working on all sections
- [ ] TypeScript strict mode — zero `any` types, zero type errors
- [ ] ESLint passes with zero errors

---

*This document is the complete specification for the StatTarian marketing website. No assumptions should be made about functionality, copy, or design beyond what is defined here. All placeholder content is clearly marked and must be replaced before a production launch.*
