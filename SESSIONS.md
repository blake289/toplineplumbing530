# Session Status — 2026-04-17

## What Was Done
- **Added CSLB License #596557** — Joe's license now in Footer, LocalBusiness schema (hasCredential + identifier), llms.txt, llms-full.txt
- **Removed all false 24/7 / live-answer claims** — 42 files rewritten. Real hours now Mon–Fri 8:00a–4:30p, closed weekends
- **SchemaMarkup openingHoursSpecification** rebuilt to Mon–Fri 08:00–16:30 only (was 7-day 00:00–23:59)
- **Reframed /services/emergency + /cost/emergency-plumbing** — honest after-hours guidance (self-help, 911, PG&E), no false promises
- **Rewrote lib/cityFaqs.ts** — all 15 city FAQs now honest about business hours
- **Josiah confirmed** (via Blake): hours Mon–Fri 8a–4:30p, no after-hours emergency
- **Merged to main** — commit 96dc217, production deployed and verified READY on Vercel

## Blake's Open Items
- **GMB hours update** — business.google.com → Edit hours to Mon–Fri 8a–4:30p, scrub any 24/7 language, remove 24-hour attributes (Asana task 1214106015523206)
- **GHL MCTB** — Settings → Phone Numbers → (530) 704-6989 → Missed Call Text Back. Paste: "Hey, it's Joe with Topline Plumbing. Sorry I missed your call. Text me what's going on and I'll get back to you as soon as I'm available."
- **Google listing agent spam** — scam robocalls, Joe can ignore/block, not a real Google service

## Folder Rename (after closing Claude)
```
cd ~/Projects && mv toplineplumbing530 "Top Line Plumbing"
mv ~/.claude/projects/-Users-blakeernst-Projects-toplineplumbing530 ~/.claude/projects/-Users-blakeernst-Projects-Top-Line-Plumbing
```

## Blockers
- None on the website side. Everything shipped.

## Next Priority
- Google LSA (still blocked on insurance proof — license now unblocked)
- Portal updates pending in `client-portals` terminal (unchanged from prior session)
