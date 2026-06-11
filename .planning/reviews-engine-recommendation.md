# Topline Plumbing — Reviews Engine Recommendation

Date: 2026-06-11
Author: investigation via GHL API (read-only) + repo planning docs
Status: investigation + recommendation only. No live GHL automation was modified.

## Why this matters

Google review velocity is the #1 ranking lever for this client. Current state is
48 reviews vs competitors at 270 to 2,600. The goal is a steady 8 to 15 keyworded
reviews per month, never batched. If review requests stop, ranking lift decays
within roughly 3 weeks (the cliff), so cadence has to be continuous, not bursty.

## Verified current state

### What the API CAN and CANNOT show
The project Private Integration Token (read from `.env.local`,
`GHL_PIT_TOKEN` + `GHL_LOCATION_ID`, location `bCInnDJhp63zU6NLvQ8m`) can read
conversations and messages, but does NOT have scopes for the Workflows,
Campaigns, or Reputation endpoints. Those three all return HTTP 401.

Plainly: I cannot read GHL workflow on/off state, trigger config, or the
reputation dashboard through this token. Workflow internals are not API-verifiable
with current access. Confirming the exact trigger and timing requires the GHL UI.

### What the message data DOES prove (behavioral evidence)
Scanned 200 recent conversations (535 outbound SMS/email messages). Review-request
messages ARE actively going out:

- 252 outbound messages reference a review request.
- Two distinct templates are firing:
  1. Initial ask, sent as SMS and email together:
     "Hi [Name], this is Joe from Topline Plumbing. We had the pleasure of working
     with you and wanted to reach out..."
  2. Follow-up reminder:
     "Hi [Name], just a quick reminder from Topline Plumbing. If you haven't had a
     chance yet, a short review means a lot to our small business: [link]"
- The reminder carries a tracked GHL review link
  (`https://link.toplineplumbingco.com/l/...`, a redirect/trigger link).
- Most recent sends are dated TODAY (2026-06-11) and 2026-06-10 — the engine is
  live and currently firing, not dormant.

Note: the repo planning docs (`.planning/STATE.md`, `.planning/PROJECT.md`) still
list "Activate GHL Workflow 2: Review Request" as a pending/unchecked item. That
documentation is STALE. The live message data above supersedes it: the review
request automation is active.

### What is NOT yet verifiable from here
- Exact trigger (post-job / invoice-paid / manual tag) — needs GHL UI.
- Whether sends are throttled/spaced to avoid batching — needs GHL UI.
- Whether the ask language is keyworded (asks reviewers to mention the service +
  city), which is what actually moves local ranking. The sampled copy is generic
  ("a short review means a lot") with no service/city prompt — likely NOT
  keyworded. Confirm in GHL UI.
- Actual review-count delta (48 today) and reply/conversion rate — needs the GHL
  Reputation dashboard or Google Business Profile, neither API-readable here.

## Target cadence

- 8 to 15 new Google reviews per month, arriving steadily across the month.
- Never batch. Spread sends so reviews trickle in daily/weekly, not in a single
  spike (Google's spam filters discount sudden bursts and the ranking signal reads
  as unnatural).
- Keyworded: prompt the customer to mention the specific service and city
  (e.g. "water heater replacement in Redding") in their review. This is the part
  that compounds into local ranking.
- Continuous. No multi-week gaps (3-week cliff).

## Recommended GHL mechanism

Keep the existing active automation, tune it. Do not rebuild from scratch.

1. Trigger: fire on job completion (post-job tag or invoice-paid / appointment
   "showed" status), one request per completed job. Confirm the current trigger in
   the GHL UI first.
2. Channel: SMS + email ask (already happening), short and personal, from "Joe."
3. Link: keep the tracked review link, pointed at the Google review URL
   `https://g.page/r/CTUWBxm42-YEEAI/review`. Confirm the current redirect resolves
   to this exact URL.
4. Keyword the ask: update copy to invite the customer to name the service and
   their city in the review. This is the single highest-leverage change.
5. Pace it: cap and space sends so output lands in the 8 to 15/month band steadily.
   If job volume would push more, spread the asks; if less, the cap is moot.
6. One reminder only (already present), then stop — avoid nagging.

## Approval gate

NEEDS BLAKE APPROVAL BEFORE TOUCHING ANY LIVE GHL AUTOMATION.

This document is investigation and recommendation only. No workflow, contact,
message template, or automation was modified. Any change to the live review
workflow (trigger, copy, link, pacing) must be reviewed and approved by Blake
first, and verified in the GHL UI (which is the system of record for workflow
state that this token cannot read).
