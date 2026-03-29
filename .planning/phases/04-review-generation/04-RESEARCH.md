# Phase 4: Review Generation - Research

**Researched:** 2026-03-29
**Domain:** GHL Reputation Management / Google Business Profile / SMS compliance / review psychology
**Confidence:** HIGH

---

## Summary

Phase 4 has two jobs: (1) confirm the automated review request workflow fires correctly after every completed job, and (2) arm Joe with a personal outreach script to hit 10+ reviews fast using past customers. The automated side lives entirely in GHL's Reputation Management + the existing "Send Review Request" workflow. The manual side is a personal text script Joe sends himself to 10-20 past customers in the first 48 hours after launch.

The fastest path to 10 reviews is past customers, not new jobs. New jobs trickle in — past customers are sitting there right now. If Joe can personally text 15-20 people he's done work for in the last 6-12 months, hitting 10 reviews in 7 days is realistic. The GHL workflow handles every job going forward automatically.

A2P registration is still pending (submitted Mar 26). The automated workflow cannot fire SMS until A2P is approved (~7-10 days from submission). This does not block Joe's personal outreach — he texts from his own personal phone number, not the GHL number. Personal texts from a personal phone are not subject to A2P regulations.

**Primary recommendation:** Get Joe's Google review link immediately, confirm it in GHL Reputation Settings, give Joe a personal text script for past customers, and confirm workflow trigger fires when "job-complete" tag is applied.

---

## Standard Stack

### Core
| Tool | Version | Purpose | Why Standard |
|------|---------|---------|--------------|
| GHL Reputation Management | Current | Automated review request sending, review tracking | Already in sub-account — no new tool needed |
| Google Business Profile | Current | Review destination, review link source | Reviews live here — all roads lead to GBP |
| GHL Workflow: Send Review Request | Draft (existing) | Tag-triggered SMS + email follow-up sequence | Already built, needs activation |

### Supporting
| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| Google Review Link (g.page/r/) | Current | Short review link for SMS/email | SMS character budget — use the short format |
| Bitly or similar | Current | Further shortening if needed | Only if g.page/r/ link feels long for SMS |

### No Additional Libraries Needed
This phase is GHL configuration + human action. No code, no installs.

---

## Architecture Patterns

### Pattern 1: Tag-Triggered Automated Review Sequence (ongoing, every job)
**What:** When Joe marks a job complete in GHL, he manually adds the "job-complete" tag to the contact. This fires the workflow: 2hr wait → SMS review request → 3-day wait → follow-up SMS.
**When to use:** Every completed job, going forward, forever.
**Trigger configuration:**
- Trigger type: Contact Tag
- Tag added: `job-complete`
- Important: tags only fire workflows when added AFTER the workflow is published — historical tags do not retroactively fire

**Existing workflow sequence (from CLIENT-DELIVERABLES.md):**
```
Trigger: Tag "job-complete" added
→ Wait 2 hours
→ SMS: "Hey [First Name]! Thanks for choosing Topline Plumbing today.
   If we did a good job, would you mind leaving us a quick Google review?
   It takes 30 seconds and helps us a ton: [Google Review Link]
   — Thanks, Topline Plumbing"
→ Wait 3 days (if no review link clicked)
→ SMS: "Hi [First Name], just following up — if you have 30 seconds,
   a Google review would mean the world to us: [Google Review Link].
   Thanks again!"
```

### Pattern 2: Personal Past-Customer Outreach (one-time sprint, first 48 hours)
**What:** Joe personally texts 15-20 past customers from his personal phone using a conversational script. This bypasses A2P entirely since it's person-to-person from a personal phone.
**When to use:** First 48 hours after launch. Do it once, fast, to hit 10+ reviews.
**Volume needed:** Assuming ~50-60% positive response rate, 15-20 texts should yield 8-12 reviews.

### Pattern 3: GHL Reputation Management as Review Link Source
**What:** GHL Reputation Settings → Review Link holds the Google review URL. When configured, this link auto-inserts into the review request workflow.
**Configuration path:** GHL sub-account → Settings → Review Link → paste Google review link
**Alternative:** If GHL's native GMB integration is not connected, enter the review URL as a custom value in the SMS/email message directly.

### How to Get Joe's Google Review Link (R4.1)
Two methods — use whichever Joe can provide:

**Method A — From GBP Dashboard (preferred):**
1. Log into Google Business Profile (business.google.com)
2. Select Topline Plumbing location
3. Click "Ask for reviews" button
4. Copy the link shown — format will be `https://g.page/r/[alphanumeric]/review`

**Method B — Via Place ID:**
1. Go to: https://developers.google.com/maps/documentation/places/web-service/place-id
2. Search "Topline Plumbing Redding CA" in the Place ID Finder
3. Note the Place ID (starts with "ChIJ...")
4. Review link: `https://search.google.com/local/writereview?placeid=[PLACE_ID]`

**Recommendation:** Method A via GBP dashboard gives the cleanest short link. If Joe can't access GBP (GBP manager access is still pending per WORK-LOG.md), use Method B.

**Link format for SMS:** Use the short g.page/r/ link. Under 50 characters. Works on mobile — opens Maps app or web version depending on device.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Google review link | Custom redirect page | g.page/r/ link from GBP directly | Official link, short, opens review modal directly |
| Review request tracking | Manual spreadsheet | GHL Reputation tab → Requests | Status tracking (Queued/Sent/Delivered/Failed) is built in |
| Follow-up timing logic | Custom delay logic | GHL workflow wait steps | Already built in existing workflow |

---

## A2P / SMS Compliance for Review Requests

### Current Status
- A2P registration submitted Mar 26, 2026
- Brand approval: ~7 days (~Apr 2-3)
- Campaign approval: ~2-3 days after brand (~Apr 5-6)
- All 8 GHL workflows in DRAFT — will publish after A2P approved

### What A2P Approval Unlocks
Once approved, the "Send Review Request" workflow can be published and SMS will route through the approved campaign. Until then: workflow stays in DRAFT, no SMS fires from GHL number (530) 704-6989.

### A2P Content Rules for Review Request SMS (HIGH confidence — verified GHL docs)
The review request messages already written are compliant. Key rules they satisfy:
- Sender identification: messages identify "Topline Plumbing" by name
- No SHAFT content: messages are clean service-related follow-up
- No deceptive content: messages are honest review requests

**One thing to verify before publishing:** The campaign submitted to A2P should describe "review requests / customer follow-up" as the use case. If the campaign was registered as something different, the review request content must match the registered use case. If unsure, check the campaign description in GHL → Settings → Phone Numbers → A2P Registration.

### Personal Phone Outreach — Not Subject to A2P
Joe texting from his personal iPhone to customers he has an existing relationship with is person-to-person (P2P) messaging. P2P is explicitly not subject to A2P/10DLC regulations. No registration, no restrictions. This is the fast path.

---

## Common Pitfalls

### Pitfall 1: Review Link Not Configured in GHL Before Workflow Fires
**What goes wrong:** Workflow sends SMS/email but the review link variable shows as blank or broken text.
**Why it happens:** GHL's review request workflow uses a merge variable for the review link. If the link isn't set in Reputation Management → Settings → Review Link, the variable does not resolve.
**How to avoid:** Before publishing the workflow, go to GHL Reputation Settings → Review Link → paste Joe's Google review link. Test with a dummy contact first.
**Warning signs:** Send yourself a test — if the link appears as a broken variable or the message looks wrong, it's not configured.

### Pitfall 2: Workflow Fires on Historical Tags
**What goes wrong:** Joe adds "job-complete" to a past customer, expecting the workflow to fire, but nothing happens.
**Why it happens:** GHL contact tag triggers only fire when a tag is added AFTER the workflow is published. Retroactive application of a tag to existing contacts does not trigger the workflow.
**How to avoid:** Understand this is expected behavior. For past customers: Joe uses the personal text script. The automated workflow handles new jobs going forward.
**Alternative:** Use GHL's "Add to Workflow" manual action from the contact record to manually enroll specific contacts if needed.

### Pitfall 3: SMS Goes to Wrong Number / Lands in Spam
**What goes wrong:** Review request SMS delivers but gets marked spam, or Joe has the wrong number for a customer.
**Why it happens:** CNAM registration pending ("Topline Plumb" caller ID). Until Voice Integrity registration clears, some carriers may show the GHL number as unknown. CNAM submitted Mar 26 — should clear ~2 business days.
**How to avoid:** Confirm CNAM registration is approved before publishing SMS workflows. Check GHL → Settings → Phone Numbers for CNAM status.

### Pitfall 4: Joe Doesn't Know How to Apply the "Job-Complete" Tag
**What goes wrong:** Workflow never fires because Joe doesn't know he needs to tag contacts.
**Why it happens:** The trigger depends on Joe taking an action in GHL. If he's not trained on this, it never fires.
**How to avoid:** Include explicit instructions in the plan — tell Joe exactly how to apply the tag: Contact record → Tags field → type "job-complete" → save. This is the single manual step that drives the entire review automation.
**Alternative trigger:** Also worth noting — "Pipeline Stage Changed" can serve as a trigger. If Joe's pipeline has a "Job Complete" stage, moving a contact there can fire the workflow instead of requiring manual tag entry.

### Pitfall 5: Personal Outreach Script Sounds Like a Business Bot
**What goes wrong:** Past customers receive a generic mass-text-feeling message and don't respond.
**Why it happens:** Any script that sounds templated loses the personal advantage.
**How to avoid:** The script must sound like Joe texting from his phone. First name, personal sign-off, short. Not a marketing message. See script example below.

---

## Code Examples

### Joe's Personal Outreach Script (for past customers, personal phone)

```
Hey [First Name], it's Joe from Topline Plumbing — we did some work for
you a while back. If we did right by you, would you mind leaving us a
quick Google review? We're trying to get more visibility online.
Here's the link: [REVIEW LINK]
Really appreciate it. — Joe
```

**Character count:** ~220 characters. Fits in 2 SMS segments but is one logical message.
**Tone notes:**
- Uses "Joe" not "Topline Plumbing" — P2P feel
- "did right by you" is conversational
- Does not offer incentives (could violate Google's review policy)
- Does not say "5-star" — Google policy prohibits soliciting specific ratings

**Short version (tighter):**
```
Hey [First Name] — Joe from Topline Plumbing here. Would you be willing to
leave us a Google review? Really helps us out. [REVIEW LINK] — Thanks, Joe
```

### Automated GHL Workflow SMS (already written, verify review link variable resolves)
```
Hey {{contact.first_name}}! Thanks for choosing Topline Plumbing today.
If we did a good job, would you mind leaving us a quick Google review?
It takes 30 seconds and helps us a ton: {{review_link}}
— Thanks, Topline Plumbing
```
**Verify:** `{{review_link}}` is the GHL merge variable — confirm it resolves to the correct Google review URL in Reputation Settings before publishing.

### How to Manually Enroll a Contact in the Review Request Workflow (GHL)
```
1. Open contact record in GHL
2. Click "Add to Workflow" (Actions menu or sidebar)
3. Select "Send Review Request" workflow
4. Contact enters at Step 1 — 2hr wait begins
```
Use this for any past customer Joe wants to run through the automated sequence.

---

## Review Generation Strategy

### Fastest Path to 10+ Reviews in 7 Days

**Step 1 (Day 1-2): Joe's personal past-customer outreach**
- Joe identifies 15-20 past customers in his phone contacts
- Texts each personally from his iPhone using the script above
- Target: 8-12 reviews from personal outreach alone
- No GHL, no A2P needed, no waiting

**Step 2 (Day 1+): Activate automated workflow after A2P clears**
- Estimated A2P clearance: ~Apr 5-6 based on Mar 26 submission
- Publish "Send Review Request" workflow
- Every new job gets tagged "job-complete" → automatic 2hr review request fires
- This is the ongoing engine

**Why past customers first:**
- New jobs during a 7-day window might be 2-5 jobs — not enough alone
- Past customers have pre-existing trust — higher conversion on review ask
- Joe likely has 50-100+ customers in his phone going back years
- SMS open rate: 98% vs email 20%

**The 10-review math:**
- Joe texts 20 past customers
- 60% open and read (12 people)
- 50-60% of those follow through (6-8 reviews)
- New jobs this week (2-3 jobs) → manually enroll in GHL workflow or text personally → 2-3 more reviews
- Total: 8-11 reviews in 7 days — hits the target

---

## Runtime State Inventory

Not applicable — this is a configuration + human action phase. No renames, no migrations, no stored state that needs updating.

---

## Environment Availability

| Dependency | Required By | Available | Notes |
|------------|-------------|-----------|-------|
| GHL sub-account (Topline) | Workflow activation | Yes | Already configured |
| GHL phone number (530) 704-6989 | SMS delivery | Yes (purchased) | A2P pending |
| A2P/10DLC approval | GHL SMS workflows | Pending | Submitted Mar 26 — ~Apr 5-6 est. |
| Joe's personal phone | Past-customer outreach | Yes | No dependency on A2P |
| GBP manager access | Get review link | Pending | Invite sent to Josiah — alternative: Place ID method |
| Google review link (Joe's) | GHL Reputation Settings + script | Needed (R4.1) | Must be confirmed with Joe |

**Missing dependencies with no fallback:**
- Joe's Google review link — cannot complete R4.2 or R4.3 without it. Either Joe logs into GBP and sends it, or Blake uses Place ID finder to generate it directly.

**Missing dependencies with fallback:**
- GBP manager access — if Josiah hasn't accepted the invite, Blake can generate the review link via Place ID finder without needing GBP access
- A2P approval — personal phone outreach bypasses this entirely for the 7-day sprint goal

---

## Validation Architecture

Not applicable — this phase has no automated tests. Success is measured by:
- R4.1: Joe has a Google review link in hand
- R4.2: "job-complete" tag fires the review request workflow (manual test with dummy contact)
- R4.3: Joe receives a script and sends it to past customers
- R4.4: GBP review count reaches 10+ within 7 days
- R4.5: GBP review count logged in STATE.md Weekly Pulse table

### Workflow Test Protocol (before publishing)
1. Create a test contact in GHL with Blake's cell number
2. Apply "job-complete" tag to the test contact
3. Confirm workflow triggers immediately
4. Wait for 2-hour window (or use GHL's "Execute Now" test mode to skip wait)
5. Confirm SMS arrives with correct review link resolved
6. Confirm no broken variable text (e.g., `{{review_link}}` showing literally)
7. If passes: publish workflow

---

## Open Questions

1. **Has Joe's GBP manager invite been accepted by Josiah?**
   - What we know: Invite was sent to Josiah per WORK-LOG.md
   - What's unclear: Whether it's been accepted — if not, Blake can't edit GBP directly
   - Recommendation: Ask Joe/Josiah in onboarding call. If not accepted, use Place ID method for review link.

2. **What use case was registered for the A2P campaign?**
   - What we know: A2P submitted Mar 26, 2026
   - What's unclear: Whether "review requests / customer satisfaction" is listed as a use case in the campaign description
   - Recommendation: Verify campaign content description in GHL → Settings → Phone Numbers → A2P Registration before publishing review request workflow. Content must match registered use case.

3. **Does Joe have customer contacts in his personal phone?**
   - What we know: Joe is an established plumber (since 1998 per website) with existing customer relationships
   - What's unclear: Whether Joe actively keeps customer phone numbers and is willing to personally text them
   - Recommendation: Ask Joe directly on kickoff call. If yes, give him the script. If no or hesitant, focus entirely on GHL automation going forward.

4. **Is "pipeline stage" a better trigger than "tag" for Joe's workflow?**
   - What we know: Tag trigger requires Joe to manually apply a tag per contact
   - What's unclear: Whether Joe has or will use a GHL pipeline for job tracking
   - Recommendation: Pipeline Stage Changed trigger is more reliable for operators who use the pipeline view. If Joe uses pipelines, switch the trigger to "Stage Changed → Won/Completed" so it fires automatically when he closes a job — no separate tag step needed.

---

## Sources

### Primary (HIGH confidence)
- GHL Help: Workflow Trigger - Contact Tag — https://help.gohighlevel.com/support/solutions/articles/155000002482-workflow-trigger-contact-tag
- GHL Help: How to Send Review Requests — https://help.gohighlevel.com/support/solutions/articles/48001222668-how-to-send-review-requests
- GHL Help: Guided Review Setup Wizard — https://help.gohighlevel.com/support/solutions/articles/155000005201-guided-review-setup-wizard-reputation-management-
- GHL Help: Workflow Action - Review Request — https://help.gohighlevel.com/support/solutions/articles/155000003291-workflow-action-review-request
- GHL Help: A2P 10DLC Campaign Approval Best Practices — https://help.gohighlevel.com/support/solutions/articles/48001229784-a2p-10dlc-campaign-approval-best-practices
- Google Support: Create a Google link or QR code to request reviews — https://support.google.com/business/answer/16816815?hl=en

### Secondary (MEDIUM confidence)
- Whitespark Google Review Link Generator (format verification) — https://whitespark.ca/google-review-link-generator/
- Getplaudit.com: Google Review Link formats 2026 — https://getplaudit.com/google-review-link
- GatherUp: 122 Review Request Text Templates — https://gatherup.com/blog/122-review-request-text-templates-to-get-google-reviews/
- Plumbing Webmasters: Google Reviews for Plumbers — https://www.plumbingwebmasters.com/google-reviews/

### Tertiary (LOW confidence)
- Apten.ai: A2P 10DLC Compliance 2026 — https://www.apten.ai/blog/a2p-dlc-compliance-2026 (general compliance context, not GHL-specific)

---

## Metadata

**Confidence breakdown:**
- GHL workflow trigger mechanics: HIGH — verified against official GHL docs
- Google review link formats: HIGH — multiple authoritative sources agree
- A2P compliance rules: HIGH — verified GHL docs + FCC-sourced content
- Personal outreach strategy: MEDIUM — industry best practices, not a single authoritative source
- 10-review timeline estimate: MEDIUM — based on industry conversion rates, not Topline-specific data

**Research date:** 2026-03-29
**Valid until:** 2026-04-29 (GHL features are stable; A2P status will change within this window)
