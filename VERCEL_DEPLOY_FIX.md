# Vercel Production 404 Fix - Required Dashboard Settings

## Problem
Production at https://pickyourisp.vercel.app returns HTTP 404 with `x-vercel-error: NOT_FOUND`.

## Root Cause
Vercel project settings are likely configured for the old static site (pre-Next.js migration). The dashboard settings need to be updated to recognize this as a Next.js application.

## Repository Status ✅
The repository is correctly configured:
- ✅ Next.js 16 App Router with proper structure
- ✅ `package.json` has correct `next build` script
- ✅ `next.config.ts` exists and is valid
- ✅ `app/layout.tsx` and `app/page.tsx` exist
- ✅ Build succeeds locally: `npm run build` completes successfully
- ✅ No conflicting `vercel.json` (correctly removed in commit d5dadbf)
- ✅ Legacy static HTML moved to `legacy/` directory

## Required Vercel Dashboard Changes

### Navigate to Project Settings
1. Go to https://vercel.com/dashboard
2. Select the `pickyourisp` project
3. Go to **Settings** → **General**

### Fix Framework Detection
**Framework Preset:**
- Current: Likely "Other" or blank
- **Required: `Next.js`**

### Fix Build Settings
**Root Directory:**
- **Required: `.` (empty field = repo root)**
- Do NOT set to `legacy/` or any subdirectory

**Build Command:**
- **Required: Leave empty** (Vercel auto-detects `next build`)
- OR explicitly set to `next build`

**Output Directory:**
- **Required: Leave empty** (Next.js auto-detects `.next`)
- Do NOT set to `out`, `site`, or any static directory
- If set, click "Override" toggle to disable it

**Install Command:**
- **Required: Leave empty** (Vercel auto-detects `npm install`)

### After Changing Settings
1. **Save** all changes
2. Go to **Deployments** tab
3. Find the latest deployment from `main` branch
4. Click **⋮ (three dots)** → **Redeploy**
5. Wait for deployment to complete
6. Visit https://pickyourisp.vercel.app
7. **Expected: HTTP 200** serving the Next.js homepage

### Verify Production Assignment
Go to **Settings** → **Domains**:
- Ensure `pickyourisp.vercel.app` is assigned to **Production** branch `main`
- If custom domain `pickyourisp.com` is added, ensure it points to Production

## DNS Configuration (Separate Task)
**Current Status:** Namecheap DNS returns NXDOMAIN for `pickyourisp.com` and `www.pickyourisp.com`

**Do NOT add DNS records yet.** After Vercel deployment works:
1. In Vercel → **Settings** → **Domains**, add `pickyourisp.com`
2. Vercel will show exact DNS records (A/CNAME) for Namecheap
3. Copy those values **exactly** to Namecheap DNS
4. Wait for DNS propagation (can take 24-48 hours)

**Never invent DNS record values** - always copy from Vercel's domain setup card.

## Testing Checklist
After redeploying with correct settings:
- [ ] https://pickyourisp.vercel.app returns HTTP 200
- [ ] Homepage loads with "Find internet options for your address" heading
- [ ] `/providers` page works (Browse all 14 providers)
- [ ] `/about`, `/contact`, etc. pages work
- [ ] `robots` meta tag has `noindex, nofollow` (soft-launch)
- [ ] No console errors in browser DevTools

## Why This Happened
The project was initially deployed as a static HTML site with `vercel.json`:
```json
{
  "version": 2,
  "cleanUrls": true,
  "trailingSlash": true
}
```

Commit d5dadbf removed this file during Next.js migration, but **Vercel dashboard settings persist** across deployments. The framework preset and output directory must be manually updated in the dashboard.

## Soft-Launch Compliance ✅
- All pages have `robots: { index: false, follow: false }`
- No invented prices, coverage, or live PII forms
- Honest empty states for unavailable data
- Preview disclaimers on all pages
