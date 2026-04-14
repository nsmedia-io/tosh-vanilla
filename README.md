# Black Bird Consulting

Public marketing site for **Black Bird Consulting LLC** — life coaching and creative business strategy.

Static site built with **Vike + React 19 + Tailwind v4**, pre-rendered to HTML and deployed on Cloudflare Pages.

## Scripts

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # vite build && vike prerender → ./dist/client
npm run preview  # serve the built dist
```

## Structure

```
pages/
  +config.ts        Global Vike config (vike-react, prerender, default meta)
  +Head.tsx         Head tags, fonts, OG, JSON-LD
  +Layout.tsx       TopBar + Nav + Footer shell
  index/            /
  about/            /about
  services/         /services
  contact/          /contact       (intake form)
  privacy/          /privacy       (Stripe/Square compliance)
  terms/            /terms         (Stripe/Square compliance)

src/
  site.config.ts    Name, URL, email, socials
  contact.config.ts Worker endpoint + tenant id (shared nsmedia contact edge)
  styles/main.css   Tailwind v4 theme tokens
  components/
    TopBar, Nav, Footer, Hero, PageHero, Divider, IntakeForm

public/
  favicon.svg, og-image.svg
```

## Contact form

Submissions POST to the shared NSMedia contact worker:

- Endpoint: `https://api.nsmedia.io/send`
- Tenant header: `X-Client-Id: blackbird`

Ensure the `blackbird` tenant is configured on the worker to route email to
`Natasha@BlackBirdConsultingUSA.com`.

## Deployment

Mirrors `tosh-marketing`: push to GitHub, then Cloudflare Pages builds from
`main` with:

- Build command: `npm run build`
- Build output directory: `dist/client`
