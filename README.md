# PickYourISP static preview (PYI-016)

Brand: **PickYourISP**  
Purpose: Align the static shell to PYI-012 P0 and P1 routes using accepted PYI-013 briefs and the PYI-014 national ISP list.

Static HTML/CSS/JS only. No backend. No build step. Not a git repo.

## How to open

From this `site/` directory:

```bash
cd /path/to/pickyourisp/site
python3 -m http.server 8080
```

Then open:

- http://127.0.0.1:8080/
- http://127.0.0.1:8080/providers/
- http://127.0.0.1:8080/internet/
- http://127.0.0.1:8080/internet/fiber/
- http://127.0.0.1:8080/providers/xfinity/
- http://127.0.0.1:8080/disclosure/

Folder `index.html` routing gives clean paths under `python3 -m http.server`.

## URL map (files to paths)

| Path | File |
|------|------|
| `/` | `index.html` |
| `/disclosure/` | `disclosure/index.html` |
| `/methodology/` | `methodology/index.html` |
| `/privacy/` | `privacy/index.html` |
| `/terms/` | `terms/index.html` |
| `/about/` | `about/index.html` |
| `/contact/` | `contact/index.html` |
| `/compare/` | `compare/index.html` (P3 stub; no invented results) |
| `/providers/` | `providers/index.html` (14 PYI-014 slugs) |
| `/internet/` | `internet/index.html` (technology hub) |
| `/internet/{tech}/` | `internet/{tech}/index.html` (fiber, cable, DSL, satellite, fixed wireless, 5G home) |
| `/providers/{slug}/` | `providers/{slug}/index.html` |
| `/locations/ca/los-angeles/` | `locations/ca/los-angeles/index.html` (do-not-publish; noindex) |
| `/robots.txt` | `robots.txt` |
| `/sitemap.xml` | `sitemap.xml` |
| Soft 404 | `404.html` (links to `/`, `/providers/`, `/disclosure/`) |

Shared assets: `css/styles.css`, `js/availability.js` (honest empty stub), `js/compare.js` (retired stub).

## Nav (every page)

**Primary:** Check availability (`/#availability`) · Providers · Internet · Compare · About  

**Footer:** Internet · Methodology · Disclosure · About · Privacy · Terms · Contact  

Preview banner on all pages.

## What is NOT live

- No backend, API, or coverage database
- Availability ZIP submit shows **Preview: live availability not connected** and does **not** invent providers for that ZIP
- No live inventory, real prices, or address-level coverage claims
- No live PII / lead capture (privacy@TBD / support@TBD placeholders only)
- No affiliate click tracking or partner relationships claimed
- Provider pages are PLACEHOLDER; Xfinity is the fuller template; others are thin stubs with official-site links from PYI-014
- Los Angeles city page is scaffold only: meta robots noindex + do-not-publish banner; excluded from sitemap Allow and listed in robots Disallow
- Speeds, prices, coverage, reviews marked PLACEHOLDER / EXAMPLE / UNKNOWN

## Acceptance (PYI-016)

- [x] P0 paths exist as folder/index.html routes
- [x] Providers hub lists exactly the 14 approved PYI-014 slugs
- [x] Xfinity page from brief 04 PLACEHOLDER
- [x] Optional LA scaffold marked do-not-publish
- [x] No live PII forms
- [x] Briefs reflected without copying competitor content
- [x] Old flat `disclosures.html` / fictional EXAMPLE hub providers removed
- [x] Internet hub and six PLACEHOLDER technology explainer routes added
- [x] Primary navigation includes Internet on every page

## Traceability

PYI-012 IA, PYI-013 briefs 01–05, PYI-014 national ISP list, DEFAULTS.md

## Analytics

Phase A uses `js/analytics.js`, a first-party event stub that logs allowlisted events with `console.debug` in preview. It makes no network calls, and `?analytics=off` disables the preview sink. ZIP values and other PII are never included; availability events may include only `zip_valid`.
