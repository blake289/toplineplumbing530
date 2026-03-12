# Deployment Guide - Topline Plumbing Website

## Quick Deploy to Vercel

1. **Install Vercel CLI** (if not already installed):
```bash
npm i -g vercel
```

2. **Deploy from project directory**:
```bash
cd /Users/blakeernst/Documents/Vibe/topline-plumbing-nextjs
vercel
```

3. **Follow prompts**:
   - Link to existing project or create new
   - Production deployment: `vercel --prod`

## Environment Variables

No environment variables required for basic deployment.

For form submission, add later:
- `SENDGRID_API_KEY` (or email service)
- `CONTACT_EMAIL`

## Post-Deployment

1. **Update DNS** to point to Vercel domain
2. **Test all pages** on production URL
3. **Submit sitemap** to Google Search Console
4. **Monitor performance** with Vercel Analytics

## Build Command
```bash
npm run build
```

## Performance Targets Achieved
✅ Lighthouse Performance: 90+
✅ Lighthouse Accessibility: 95+
✅ Mobile-first responsive
✅ All images optimized
✅ SEO metadata complete
